// Vercel Serverless Function: /api/contact
// Validates contact form submissions, filters honeypot spam, and delivers via
// Resend, Web3Forms, or a custom Webhook when configured via environment variables.
// When no third-party mail provider key is configured, returns an explicit
// mailto_fallback signal so the browser never fakes a silent submission.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed. Use POST.' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: 'Invalid JSON request body.' });
    }
  }
  body = body || {};

  // Honeypot check: bots filling the hidden website field are silently ignored
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return res.status(200).json({ ok: true, mode: 'filtered' });
  }

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const enquiryType = String(body.enquiryType || 'General Question').trim();
  const pageUrl = String(body.pageUrl || '').trim();
  const message = String(body.message || '').trim();

  if (name.length < 2 || name.length > 100) {
    return res.status(400).json({ ok: false, error: 'Please enter your name (2 to 100 characters).' });
  }
  if (!EMAIL_RE.test(email) || email.length > 150) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }
  if (message.length < 10 || message.length > 4000) {
    return res.status(400).json({ ok: false, error: 'Please enter a message between 10 and 4,000 characters.' });
  }

  const recipient = process.env.CONTACT_TO_EMAIL || 'hourlywageconverter@gmail.com';
  const subject = `[Hourly Wage Converter] ${enquiryType} — from ${name}`;
  const plainText = [
    `New Contact Inquiry from Hourly Wage Converter`,
    `----------------------------------------------`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Enquiry Type: ${enquiryType}`,
    pageUrl ? `Page / Calculator URL: ${pageUrl}` : null,
    ``,
    `Message:`,
    message
  ].filter(Boolean).join('\n');

  try {
    // Option 1: Resend API (RESEND_API_KEY)
    if (process.env.RESEND_API_KEY) {
      const fromAddress = process.env.CONTACT_FROM_EMAIL || 'Hourly Wage Converter <onboarding@resend.dev>';
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [recipient],
          reply_to: email,
          subject,
          text: plainText
        })
      });
      if (!response.ok) {
        throw new Error(`Resend API error (${response.status})`);
      }
      return res.status(200).json({ ok: true, mode: 'server' });
    }

    // Option 2: Web3Forms API (WEB3FORMS_ACCESS_KEY)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          subject,
          from_name: name,
          email,
          enquiry_type: enquiryType,
          page_url: pageUrl,
          message
        })
      });
      if (!response.ok) {
        throw new Error(`Web3Forms API error (${response.status})`);
      }
      return res.status(200).json({ ok: true, mode: 'server' });
    }

    // Option 3: Custom Webhook (CONTACT_WEBHOOK_URL)
    if (process.env.CONTACT_WEBHOOK_URL) {
      const response = await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, enquiryType, pageUrl, message, submittedAt: new Date().toISOString() })
      });
      if (!response.ok) {
        throw new Error(`Webhook error (${response.status})`);
      }
      return res.status(200).json({ ok: true, mode: 'server' });
    }

    // Honest fallback when no external email API key is configured yet
    return res.status(200).json({
      ok: false,
      mode: 'mailto_fallback',
      recipient
    });
  } catch (err) {
    return res.status(200).json({
      ok: false,
      mode: 'mailto_fallback',
      recipient,
      reason: err?.message || 'Delivery service unavailable'
    });
  }
}

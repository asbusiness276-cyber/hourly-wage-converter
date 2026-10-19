import os
from playwright.sync_api import sync_playwright
from PIL import Image

OUTPUT_DIR = r"c:\Users\Hp\Downloads\hourly-wage-converter-vercel\dist\assets\images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE_STYLE = """
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 800px;
    height: 450px;
    overflow: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #0b1328;
    color: #f1f5f9;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-font-smoothing: antialiased;
  }
  .window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 11px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .window-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .dot-red { background: #ef4444; }
  .dot-yellow { background: #f59e0b; }
  .dot-green { background: #10b981; }
  .window-title {
    font-size: 11px;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 0.02em;
    margin-left: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }
  .badge-live {
    font-size: 10px;
    padding: 2px 7px;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.35);
    color: #34d399;
    border-radius: 4px;
    font-weight: 600;
    white-space: nowrap;
  }
  .badge-app {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    color: #38bdf8;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(56, 189, 248, 0.3);
    padding: 3px 9px;
    border-radius: 6px;
    white-space: nowrap;
  }
  .footer-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 9px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    font-size: 11px;
    color: #64748b;
  }
  .footer-bar strong {
    color: #cbd5e1;
  }
</style>
"""

def generate_overtime_widgets():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # =========================================================================
        # WIDGET 1: ui-card-regular-vs-overtime-rate.webp
        # =========================================================================
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_w1 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .dash-body {{
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 8px 0;
  }}
  .rate-cards-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }}
  .rate-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .rate-card.regular {{
    border-left: 3px solid #2563eb;
    background: linear-gradient(135deg, #0f172a 0%, rgba(37, 99, 235, 0.1) 100%);
  }}
  .rate-card.overtime {{
    border-left: 3px solid #10b981;
    background: linear-gradient(135deg, #0f172a 0%, rgba(16, 185, 129, 0.15) 100%);
  }}
  .rate-label-row {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: #94a3b8;
  }}
  .rate-badge {{
    font-size: 9.5px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
  }}
  .regular .rate-badge {{ background: rgba(37, 99, 235, 0.2); color: #60a5fa; }}
  .overtime .rate-badge {{ background: rgba(16, 185, 129, 0.2); color: #34d399; }}
  
  .rate-main-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 28px;
    font-weight: 800;
    color: #ffffff;
    margin: 6px 0 2px;
  }}
  .overtime .rate-main-val {{
    color: #34d399;
    text-shadow: 0 0 16px rgba(52, 211, 153, 0.35);
  }}
  .rate-desc {{
    font-size: 11px;
    color: #cbd5e1;
    line-height: 1.45;
  }}
  .rate-desc strong {{
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }}

  /* Visual Bar Comparison */
  .bar-compare-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 12px 16px;
  }}
  .bar-row {{
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
    font-size: 11px;
  }}
  .bar-row:last-child {{ margin-bottom: 0; }}
  .bar-lbl {{
    width: 130px;
    font-weight: 600;
    color: #94a3b8;
    flex-shrink: 0;
  }}
  .bar-track {{
    flex-grow: 1;
    height: 12px;
    background: #1e293b;
    border-radius: 6px;
    overflow: hidden;
    display: flex;
  }}
  .bar-fill-reg {{ width: 66.66%; background: #2563eb; }}
  .bar-fill-ot {{ width: 100%; background: linear-gradient(90deg, #2563eb 66.66%, #10b981 66.66%); }}
  .bar-val-lbl {{
    width: 90px;
    text-align: right;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 700;
    color: #ffffff;
    flex-shrink: 0;
  }}

  .pills-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }}
  .pill-box {{
    background: #090e1d;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    padding: 8px 12px;
  }}
  .pill-lbl {{
    font-size: 9.5px;
    font-weight: 600;
    text-transform: uppercase;
    color: #64748b;
  }}
  .pill-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 2px;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Wage Rate Comparator &bull; Regular Time (1.0&times;) vs. Time-and-a-Half (1.5&times;)</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">29 U.S.C. &sect; 207(a)(1)</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="rate-cards-grid">
      <div class="rate-card regular">
        <div class="rate-label-row">
          <span>Regular Time Rate</span>
          <span class="rate-badge">1.0&times; Straight</span>
        </div>
        <div class="rate-main-val">$24.00 <span style="font-size:14px; font-weight:500; color:#94a3b8;">/ hr</span></div>
        <div class="rate-desc">
          Standard 40-hr weekly base: <strong>$960.00 gross</strong><br>
          Annualized base (52 wks): <strong>$49,920.00 / yr</strong>
        </div>
      </div>

      <div class="rate-card overtime">
        <div class="rate-label-row">
          <span>Overtime Rate</span>
          <span class="rate-badge">+50% Premium</span>
        </div>
        <div class="rate-main-val">$36.00 <span style="font-size:14px; font-weight:500; color:#34d399;">/ hr</span></div>
        <div class="rate-desc">
          Time-and-a-half (1.5&times; $24.00): <strong>+$12.00 / hr boost</strong><br>
          8 OT hours adds: <strong>+$288.00 gross / wk</strong>
        </div>
      </div>
    </div>

    <div class="bar-compare-card">
      <div class="bar-row">
        <span class="bar-lbl">Regular Rate (1.0&times;)</span>
        <div class="bar-track"><div class="bar-fill-reg"></div></div>
        <span class="bar-val-lbl">$24.00/hr</span>
      </div>
      <div class="bar-row">
        <span class="bar-lbl">Overtime Rate (1.5&times;)</span>
        <div class="bar-track"><div class="bar-fill-ot"></div></div>
        <span class="bar-val-lbl" style="color:#34d399;">$36.00/hr</span>
      </div>
    </div>

    <div class="pills-grid">
      <div class="pill-box">
        <div class="pill-lbl">Hourly Rate Premium</div>
        <div class="pill-val" style="color:#60a5fa;">+$12.00 <span style="font-size:10px; color:#94a3b8;">/ hr</span></div>
      </div>
      <div class="pill-box">
        <div class="pill-lbl">8 OT Hours / Week</div>
        <div class="pill-val" style="color:#34d399;">+$14,976 <span style="font-size:10px; color:#94a3b8;">/ yr</span></div>
      </div>
      <div class="pill-box">
        <div class="pill-lbl">Total 48-Hour Gross</div>
        <div class="pill-val" style="color:#ffffff;">$1,248.00 <span style="font-size:10px; color:#94a3b8;">/ wk</span></div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>FLSA Rule: <strong>Overtime applies strictly after 40 physical hours in a 7-day workweek</strong></span>
    <span>48 Hours Pay: 40 hrs @ $24 ($960) + 8 hrs @ $36 ($288) = $1,248.00 Gross</span>
  </div>
</body>
</html>"""
        page.set_content(html_w1)
        temp_png1 = os.path.join(OUTPUT_DIR, "temp_ot_w1.png")
        page.screenshot(path=temp_png1)
        img1 = Image.open(temp_png1)
        img1.save(os.path.join(OUTPUT_DIR, "ui-card-regular-vs-overtime-rate.webp"), "WEBP", quality=92)
        os.remove(temp_png1)
        print("Generated ui-card-regular-vs-overtime-rate.webp")
        page.close()

        # =========================================================================
        # WIDGET 2: ui-timesheet-daily-overtime-rules.webp
        # =========================================================================
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_w2 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .dash-body {{
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin: 8px 0;
  }}
  .timeline-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 12px 16px;
  }}
  .timeline-header {{
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 700;
    color: #94a3b8;
    margin-bottom: 8px;
    text-transform: uppercase;
  }}
  .timeline-bar {{
    display: flex;
    height: 16px;
    border-radius: 6px;
    overflow: hidden;
    gap: 2px;
    background: #1e293b;
  }}
  .tl-reg {{ width: 57.14%; background: #2563eb; }}
  .tl-ot {{ width: 28.57%; background: #f59e0b; }}
  .tl-dt {{ width: 14.29%; background: #ef4444; }}

  .timeline-ticks {{
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #64748b;
    margin-top: 5px;
    font-family: 'JetBrains Mono', monospace;
  }}

  .tier-cards-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }}
  .tier-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .tier-card.t-reg {{ border-top: 3px solid #2563eb; }}
  .tier-card.t-ot {{ border-top: 3px solid #f59e0b; }}
  .tier-card.t-dt {{ border-top: 3px solid #ef4444; }}
  .tier-hdr {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }}
  .tier-title {{
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
  }}
  .tier-badge {{
    font-size: 9.5px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
  }}
  .t-reg .tier-badge {{ background: rgba(37, 99, 235, 0.2); color: #60a5fa; }}
  .t-ot .tier-badge {{ background: rgba(245, 158, 11, 0.15); color: #fbbf24; }}
  .t-dt .tier-badge {{ background: rgba(239, 68, 68, 0.2); color: #f87171; }}
  .tier-amt {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 20px;
    font-weight: 800;
    margin: 4px 0;
    color: #ffffff;
  }}
  .tier-sub {{
    font-size: 10.5px;
    color: #94a3b8;
    line-height: 1.45;
  }}
  .tier-sub strong {{
    color: #cbd5e1;
    font-family: 'JetBrains Mono', monospace;
  }}

  /* Total Shift Banner */
  .shift-banner {{
    background: linear-gradient(135deg, #1e1b4b 0%, #1e293b 100%);
    border: 1px solid rgba(129, 140, 248, 0.3);
    border-radius: 8px;
    padding: 9px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    color: #cbd5e1;
  }}
  .shift-banner strong {{
    font-family: 'JetBrains Mono', monospace;
    color: #ffffff;
    font-size: 13.5px;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Daily Shift Inspector &bull; California Daily Overtime &amp; Double-Time</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">CA Labor Code &sect; 510</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="timeline-card">
      <div class="timeline-header">
        <span>14-Hour Continuous Shift Breakdown ($24.00 Base Wage)</span>
        <span style="color:#cbd5e1;">Total Pay: $432.00</span>
      </div>
      <div class="timeline-bar">
        <div class="tl-reg" title="Hours 0-8: Straight Time (1.0x)"></div>
        <div class="tl-ot" title="Hours 8-12: Overtime (1.5x)"></div>
        <div class="tl-dt" title="Hours 12-14: Double Time (2.0x)"></div>
      </div>
      <div class="timeline-ticks">
        <span>0h (Clock In)</span>
        <span>4h</span>
        <span>8h (OT Starts)</span>
        <span>12h (Double-Time Starts)</span>
        <span>14h (Clock Out)</span>
      </div>
    </div>

    <div class="tier-cards-grid">
      <div class="tier-card t-reg">
        <div>
          <div class="tier-hdr">
            <span class="tier-title">Regular Straight Time</span>
            <span class="tier-badge">1.0&times; Rate</span>
          </div>
          <div class="tier-amt">$192.00</div>
        </div>
        <div class="tier-sub">First 8 hours @ <strong>$24.00/hr</strong>.<br>Standard full-time daily baseline.</div>
      </div>

      <div class="tier-card t-ot">
        <div>
          <div class="tier-hdr">
            <span class="tier-title">Daily Overtime</span>
            <span class="tier-badge">1.5&times; Rate</span>
          </div>
          <div class="tier-amt" style="color:#fbbf24;">$144.00</div>
        </div>
        <div class="tier-sub">Hours 8 to 12 (4 hrs) @ <strong>$36.00/hr</strong>.<br>Daily time-and-a-half tier.</div>
      </div>

      <div class="tier-card t-dt">
        <div>
          <div class="tier-hdr">
            <span class="tier-title">Daily Double-Time</span>
            <span class="tier-badge">2.0&times; Rate</span>
          </div>
          <div class="tier-amt" style="color:#f87171;">$96.00</div>
        </div>
        <div class="tier-sub">Hours past 12 (2 hrs) @ <strong>$48.00/hr</strong>.<br>Mandatory California double-time.</div>
      </div>
    </div>

    <div class="shift-banner">
      <span>Total 14-Hour Shift Gross Earnings:</span>
      <span><strong>$192 + $144 + $96 = $432.00</strong> (+$96 vs. non-daily OT federal rules)</span>
    </div>
  </div>

  <div class="footer-bar">
    <span>State Law: <strong>California, Alaska &amp; Nevada enforce daily OT past 8 hrs; CA mandates 2.0&times; past 12 hrs</strong></span>
    <span>Source: <strong>hourlywageconverter.com</strong> State Wage Engine</span>
  </div>
</body>
</html>"""
        page.set_content(html_w2)
        temp_png2 = os.path.join(OUTPUT_DIR, "temp_ot_w2.png")
        page.screenshot(path=temp_png2)
        img2 = Image.open(temp_png2)
        img2.save(os.path.join(OUTPUT_DIR, "ui-timesheet-daily-overtime-rules.webp"), "WEBP", quality=92)
        os.remove(temp_png2)
        print("Generated ui-timesheet-daily-overtime-rules.webp")
        page.close()

        # =========================================================================
        # WIDGET 3: ui-widget-blended-rate-bonus.webp
        # =========================================================================
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_w3 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .dash-body {{
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin: 8px 0;
  }}
  .blended-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }}
  .method-box {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 13px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .method-box.error {{
    border-top: 3px solid #ef4444;
  }}
  .method-box.correct {{
    border-top: 3px solid #10b981;
    background: linear-gradient(135deg, #0f172a 0%, rgba(16, 185, 129, 0.12) 100%);
  }}
  .method-hdr {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }}
  .method-title {{
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
  }}
  .method-badge {{
    font-size: 9px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
  }}
  .error .method-badge {{ background: rgba(239, 68, 68, 0.2); color: #f87171; }}
  .correct .method-badge {{ background: rgba(16, 185, 129, 0.2); color: #34d399; }}
  .calc-steps {{
    list-style: none;
    font-size: 11px;
    color: #94a3b8;
    line-height: 1.6;
  }}
  .calc-steps li {{
    display: flex;
    justify-content: space-between;
    padding: 2px 0;
  }}
  .calc-steps li strong {{
    color: #cbd5e1;
    font-family: 'JetBrains Mono', monospace;
  }}
  .total-row {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 8px;
    margin-top: 6px;
    font-size: 12px;
    font-weight: 700;
    color: #ffffff;
  }}
  .total-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 20px;
    font-weight: 800;
  }}
  .error .total-val {{ color: #f87171; }}
  .correct .total-val {{ color: #34d399; text-shadow: 0 0 12px rgba(52, 211, 153, 0.3); }}

  /* Formula Callout Banner */
  .formula-banner {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 10px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11px;
    color: #94a3b8;
  }}
  .formula-banner code {{
    font-family: 'JetBrains Mono', monospace;
    color: #38bdf8;
    font-size: 11.5px;
    font-weight: 600;
  }}

  .pills-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }}
  .pill-box {{
    background: #090e1d;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    padding: 8px 12px;
  }}
  .pill-lbl {{
    font-size: 9.5px;
    font-weight: 600;
    text-transform: uppercase;
    color: #64748b;
  }}
  .pill-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    margin-top: 2px;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">FLSA Regular Rate Auditor &bull; Non-Discretionary Bonus &amp; Blended Rate Math</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">29 CFR &sect; 778.208</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="blended-grid">
      <div class="method-box error">
        <div>
          <div class="method-hdr">
            <span class="method-title">Common Employer Error</span>
            <span class="method-badge">Illegal Base-Only</span>
          </div>
          <ul class="calc-steps">
            <li><span>40 Regular Hours @ $20.00:</span> <strong>$800.00</strong></li>
            <li><span>5 OT Hours @ 1.5&times; $20.00 ($30):</span> <strong>$150.00</strong></li>
            <li><span>Weekly Production Bonus:</span> <strong>+$90.00</strong></li>
            <li><span>Underpaid Wage Discrepancy:</span> <strong style="color:#f87171;">-$5.00 owed</strong></li>
          </ul>
        </div>
        <div class="total-row">
          <span>Gross Paycheck:</span>
          <span class="total-val">$1,040.00</span>
        </div>
      </div>

      <div class="method-box correct">
        <div>
          <div class="method-hdr">
            <span class="method-title">Statutory FLSA Calculation</span>
            <span class="method-badge">Legal Blended Rate</span>
          </div>
          <ul class="calc-steps">
            <li><span>Straight-Time (45 hrs &times; $20 + $90):</span> <strong>$990.00</strong></li>
            <li><span>Regular Rate ($990 &divide; 45 hrs):</span> <strong style="color:#38bdf8;">$22.00 / hr</strong></li>
            <li><span>OT Premium: 5 hrs &times; ($22 &times; 0.5):</span> <strong>+$55.00</strong></li>
            <li><span>Correct Weekly Gross:</span> <strong style="color:#34d399;">$1,045.00</strong></li>
          </ul>
        </div>
        <div class="total-row">
          <span>Gross Paycheck:</span>
          <span class="total-val">$1,045.00</span>
        </div>
      </div>
    </div>

    <div class="formula-banner">
      <span>FLSA Regular Rate Formula:</span>
      <code>Regular Rate = (Total Straight-Time Earnings + Bonuses) &divide; Total Hours Worked</code>
    </div>

    <div class="pills-grid">
      <div class="pill-box">
        <div class="pill-lbl">Base vs. Regular Rate</div>
        <div class="pill-val" style="color:#38bdf8;">$20 &rarr; $22.00 <span style="font-size:10px; color:#94a3b8;">/ hr</span></div>
      </div>
      <div class="pill-box">
        <div class="pill-lbl">Weekly Difference</div>
        <div class="pill-val" style="color:#34d399;">+$5.00 <span style="font-size:10px; color:#94a3b8;">/ week</span></div>
      </div>
      <div class="pill-box">
        <div class="pill-lbl">Annual Back-Pay Risk</div>
        <div class="pill-val" style="color:#ffffff;">+$260.00 <span style="font-size:10px; color:#94a3b8;">/ yr</span></div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Rule: <strong>Production bonuses &amp; shift differentials must be included in the FLSA regular rate of pay</strong></span>
    <span>Audit Complete &bull; 45 Hours + $90 Bonus = $1,045.00 Legally Protected Gross Pay</span>
  </div>
</body>
</html>"""
        page.set_content(html_w3)
        temp_png3 = os.path.join(OUTPUT_DIR, "temp_ot_w3.png")
        page.screenshot(path=temp_png3)
        img3 = Image.open(temp_png3)
        img3.save(os.path.join(OUTPUT_DIR, "ui-widget-blended-rate-bonus.webp"), "WEBP", quality=92)
        os.remove(temp_png3)
        print("Generated ui-widget-blended-rate-bonus.webp")
        page.close()

        browser.close()

if __name__ == "__main__":
    generate_overtime_widgets()

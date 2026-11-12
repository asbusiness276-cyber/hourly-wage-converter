import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const article4 = {
  slug: 'how-to-calculate-pay-with-overtime-calculator',
  breadcrumb: 'Overtime Calculator Guide',
  category: 'Overtime & Paycheck Guides',
  minutes: 10,
  datePublished: '2026-10-14',
  dateModified: '2026-10-17',
  title: 'Calculate Overtime Pay: Step-by-Step Guide',
  seoTitle: 'Calculate Overtime Pay Step-by-Step | Hourly Wage Converter',
  h1: 'How to Calculate Pay With an Overtime Calculator',
  desc: 'Master overtime pay step by step: FLSA 40-hour workweek rules, 1.5x time-and-a-half formulas, California double time, blended rates, and tax withholding.',
  image: '/assets/images/how-to-calculate-pay-with-overtime-calculator.jpg',
  imageAlt: 'Visual guide and formula showing how to calculate overtime pay at 1.5x time-and-a-half and 2x double time',
  toc: [
    ['flsa-overtime-rules', 'The 40-Hour Workweek Rule: How Federal FLSA Overtime Actually Works'],
    ['biweekly-averaging-trap', 'The Biweekly Averaging Trap: Why 80 Hours Across Two Weeks Fails'],
    ['fundamental-formula', 'The Fundamental Overtime Formula: Time-and-a-Half (1.5×)'],
    ['scenario-1-standard', 'Scenario 1: Standard Hourly Worker ($24/Hour Working 48 Hours)'],
    ['scenario-2-double-time', 'Scenario 2: Double Time (2.0×) & California Daily Overtime Laws'],
    ['scenario-3-blended-rate', 'Scenario 3: The "Blended Rate" Rule for Bonuses & Shift Differentials'],
    ['rates-table', 'Overtime Pay Reference Table ($15 to $50/Hour + Annual Boost)'],
    ['overtime-tax-myth', 'Debunking the Myth: Why Overtime Check Taxes Spike (And Why You Never Lose Money)'],
    ['common-mistakes', 'Common Employer & Employee Overtime Mistakes to Watch For'],
    ['how-to-use', 'How to Use the Calculator'],
    ['limitations', 'Limitations'],
    ['faqs', 'Frequently Asked Questions About Overtime Pay'],
    ['audit-action-plan', 'Key Takeaways & Your Overtime Paycheck Action Plan']
  ],
  faqs: [
    [
      'How does an overtime calculator work?',
      'An overtime calculator takes your regular hours (up to 40 in a 7-day workweek) times your base pay to get your regular earnings. Then it takes the hours past 40 and multiplies them by your overtime rate, usually 1.5× for time-and-a-half or 2.0× for double time. Add the two together and you get your gross paycheck, plus a yearly estimate of what the overtime is worth.'
    ],
    [
      'How do you calculate time-and-a-half manually?',
      'Multiply your base rate by 1.5 to get your overtime rate, then multiply that by your overtime hours. At $24.00 an hour, your overtime rate is $36.00 ($24 × 1.5). Work 8 overtime hours and that\'s $288.00 (8 × $36.00). Add your regular 40-hour pay of $960.00 and your gross pay for the week is $1,248.00.'
    ],
    [
      'Can an employer average hours over two weeks in a biweekly pay period to avoid overtime?',
      'No. Under the Fair Labor Standards Act (FLSA), 29 CFR § 778.104, each 7-day workweek stands on its own. An employer can\'t average hours across two weeks. Work 45 hours in Week 1 and 35 in Week 2 and you\'re still owed 5 hours of overtime for Week 1, even though the two weeks add up to 80 hours.'
    ],
    [
      'Does paid time off (PTO) or holiday pay count toward the 40-hour overtime threshold?',
      'No. Under federal law, overtime only counts hours you actually worked. Take 8 hours of paid holiday on Monday and work 36 hours Tuesday through Friday, and you have 44 paid hours but zero overtime, because only 36 of them were hours worked. All 44 are paid at straight time.'
    ],
    [
      'Does working overtime push you into a higher tax bracket and make you lose money?',
      'No, that\'s a myth that won\'t go away. The US taxes income in brackets, and only the dollars above a bracket line get taxed at the higher rate. Everything below that line is still taxed at the lower rates. Overtime always adds to your take-home pay.'
    ],
    [
      'When does double time apply instead of time-and-a-half?',
      'Federal law only requires time-and-a-half for hours over 40 in a workweek, so double time isn\'t a federal rule. It comes from state law, union contracts, or employer policy. The best-known example is California, where non-exempt employees earn double time for hours over 12 in a single workday, and for hours over 8 on the seventh consecutive day of work in a workweek. Check your state rules and your employer policy before assuming a rate, and use the overtime calculator with a 2.0 multiplier to model double-time hours.'
    ]
  ],
  body: `
      <div class="methodology-box">
        <h3>Quick Answer</h3>
        <p>Overtime is 1.5× your regular rate for hours over 40 in a workweek. At $30 an hour, that works out to $45 an hour of overtime pay.</p>
      </div>

      <p class="lead">Overtime pay can make a real difference for hourly workers, nurses, tradespeople, and anyone on shifts. A few extra hours a week can pay down debt, build up savings, or cover a big family expense. But overtime is also one of the most misunderstood lines on a pay stub, and one of the easiest to get wrong. This guide walks you through how an overtime calculator works, so you can check your own pay instead of taking the number on faith.</p>

      <p>We hear from workers all the time who put in 48 or 52 hours, expecting a big paycheck, then wonder why the deposit looks smaller than they hoped. Sometimes it's just payroll withholding more tax on one large check. Other times the employer got the FLSA "regular rate of pay" wrong because shift differentials or production bonuses weren't counted.</p>

      <p>Whether you're checking your employer's math, sizing up a job offer that includes overtime, or planning your budget, you shouldn't have to guess. Below we cover how time-and-a-half works, California's daily double-time rules, the "blended rate" formula for bonuses, and how to audit your own overtime pay.</p>

      <!-- Above the Fold Interactive Tool CTA -->
      <div class="article-hero-cta">
        <div class="hero-cta-content">
          <span class="hero-cta-badge">Free Interactive Payroll Tool</span>
          <h2 class="hero-cta-title">Calculate Your Overtime Pay Instantly</h2>
          <p class="hero-cta-desc">Plug in your hourly rate and your hours, then pick 1.5× time-and-a-half, 2.0× double time, or your own rate.</p>
        </div>
        <a href="/overtime-calculator/" class="calculate-button hero-cta-btn">Open Overtime Calculator</a>
      </div>

      <!-- Section 1: FLSA Overtime Rules -->
      <h2 id="flsa-overtime-rules">The 40-Hour Workweek Rule: How Federal FLSA Overtime Actually Works</h2>
      <p>In the United States, overtime pay comes from the <strong>Fair Labor Standards Act (FLSA)</strong>, 29 U.S.C. § 207(a)(1). The rule itself is simple:</p>

      <div class="card" style="padding:20px;border-left:4px solid var(--primary);background:var(--slate-50);margin:20px 0">
        <h3 style="margin:0 0 6px;font-size:1.05rem;color:var(--ink)">The Federal Overtime Mandate:</h3>
        <p style="margin:0;font-size:0.95rem;color:var(--muted);line-height:1.55">If you're a covered non-exempt employee and you work more than <strong>40 physical hours in a set 7-day workweek</strong>, every hour past 40 has to be paid at <strong>not less than one and one-half times (1.5×)</strong> your regular rate of pay.</p>
      </div>

      <p>Three things trip people up:</p>
      <ul>
        <li><strong>The Defined 7-Day Workweek:</strong> Under 29 CFR § 778.105, a workweek is a fixed period of 168 straight hours (seven 24-hour periods). It doesn't have to run Sunday to Saturday. Your employer can set it from Wednesday morning to the following Tuesday night, and once it's set, it stays set.</li>
        <li><strong>Physical Hours Worked Only:</strong> Only hours you actually work count toward the 40-hour line. Paid time off (PTO), sick leave, and paid holidays do <em>not</em> count toward overtime under federal law unless a union contract says otherwise.</li>
        <li><strong>Overtime Cannot Be Waived:</strong> You can't sign away your overtime rights. Even if you agree to work extra hours at straight time, that deal doesn't hold up, and your employer still owes you back wages.</li>
      </ul>

      <!-- Section 2: Biweekly Averaging Trap -->
      <h2 id="biweekly-averaging-trap">The Biweekly Averaging Trap: Why 80 Hours Across Two Weeks Fails</h2>
      <p>One of the most common payroll mistakes is <strong>biweekly averaging</strong>. Because so many people are paid every two weeks, some employers assume overtime only starts after 80 hours in the pay period. That's illegal under federal law (29 CFR § 778.104).</p>

      <p>Under the FLSA, <strong>each 7-day workweek stands on its own</strong>. You can't average hours across two or more weeks.</p>

      <div class="card" style="padding:22px;border:1.5px solid var(--border-color);border-radius:12px;background:#fff;margin:24px 0">
        <h3 style="margin:0 0 10px;font-size:1.1rem;color:var(--ink)">Worked Example: The Biweekly Averaging Trap</h3>
        <p style="margin:0 0 10px;color:var(--muted);font-size:0.92rem;line-height:1.55">Say you earn $22.00 an hour and get paid every two weeks:</p>
        <ul style="margin:0 0 12px;padding-left:20px;font-size:0.92rem;color:var(--muted)">
          <li><strong>Week 1:</strong> You work 45 hours in a heavy week.</li>
          <li><strong>Week 2:</strong> You work 35 hours in a slow week.</li>
          <li><strong>Total Hours in Pay Period:</strong> 45 + 35 = 80 hours.</li>
        </ul>
        <p style="margin:0 0 6px;color:#dc2626;font-weight:700">The Illegal Employer Method (80-Hour Averaging):</p>
        <p style="margin:0 0 12px;color:var(--muted);font-size:0.9rem">Your employer pays 80 total hours × $22.00 = <strong>$1,760.00</strong> gross, with no overtime at all.</p>
        <p style="margin:0 0 6px;color:var(--primary);font-weight:700">The Legally Required FLSA Calculation:</p>
        <ul style="margin:0 0 10px;padding-left:20px;font-size:0.92rem;color:var(--ink)">
          <li><strong>Week 1 Pay:</strong> (40 regular hrs × $22.00) + (5 OT hrs × $33.00) = $880.00 + $165.00 = <strong>$1,045.00</strong></li>
          <li><strong>Week 2 Pay:</strong> 35 regular hrs × $22.00 = <strong>$770.00</strong></li>
          <li><strong>Correct Gross Paycheck:</strong> $1,045.00 + $770.00 = <strong>$1,815.00</strong></li>
        </ul>
        <p style="margin:8px 0 0;color:#16a34a;font-size:0.92rem;font-weight:700">Difference: You're legally owed another $55.00 on that paycheck. Over a year of uneven shifts, illegal averaging can cost an hourly worker over $1,400!</p>
      </div>

      <!-- Section 3: Fundamental Formula -->
      <h2 id="fundamental-formula">The Fundamental Overtime Formula: Time-and-a-Half (1.5×)</h2>
      <p>Overtime math starts with the time-and-a-half formula:</p>

      <div class="formula-card" style="margin:20px 0">
        <div class="formula" style="font-size:1.15rem;margin-bottom:8px">Overtime Hourly Rate = Base Hourly Wage × 1.5</div>
        <div class="formula" style="font-size:1.15rem;margin-bottom:8px">Overtime Pay = Overtime Rate × Overtime Hours Worked (&gt; 40 Hrs)</div>
        <div class="formula" style="font-size:1.25rem;font-weight:800">Total Gross Pay = (40 Regular Hours × Base Rate) + Overtime Pay</div>
      </div>

      <p>Payroll systems often do it a different way: they pay every hour at your base rate, then add a <strong>0.5× overtime premium</strong> for the hours over 40:</p>
      <p style="padding:12px 16px;background:var(--slate-50);border-radius:8px;font-weight:600;font-size:0.92rem;color:var(--ink);margin:14px 0">Alternative Formula: Total Gross Pay = (Total Hours × Base Rate) + (Overtime Hours × Base Rate × 0.5)</p>
      <p>Both ways land on the exact same gross total, down to the penny.</p>

      <!-- Section 4: Scenario 1 Standard -->
      <h2 id="scenario-1-standard">Scenario 1: Standard Hourly Worker ($24/Hour Working 48 Hours)</h2>
      <p>Here's a setup a lot of warehouse workers, tradespeople, and technicians will recognize: you earn <strong>$24.00 per hour</strong> and work <strong>48 hours in one workweek</strong>.</p>

      <div class="card" style="padding:20px;border:1.5px solid var(--border-color);border-radius:12px;background:#fff;margin:20px 0">
        <h3 style="margin:0 0 10px;font-size:1.05rem;color:var(--ink)">Step-by-Step Mathematical Breakdown:</h3>
        <ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:0.92rem;color:var(--muted)">
          <li><strong style="color:var(--ink)">Separate Regular and Overtime Hours:</strong> Out of 48 total hours, 40 are straight time, and the other 8 (48 − 40) earn time-and-a-half.</li>
          <li><strong style="color:var(--ink)">Calculate Regular Straight-Time Earnings:</strong> 40 hours × $24.00 = <strong>$960.00</strong>.</li>
          <li><strong style="color:var(--ink)">Determine Overtime Hourly Rate (1.5×):</strong> $24.00 × 1.5 = <strong>$36.00 per hour</strong>.</li>
          <li><strong style="color:var(--ink)">Calculate Overtime Earnings:</strong> 8 hours × $36.00 = <strong>$288.00</strong>.</li>
          <li><strong style="color:var(--ink)">Calculate Total Gross Weekly Pay:</strong> $960.00 + $288.00 = <strong>$1,248.00</strong>.</li>
        </ul>
      </div>

      <p>Here's what that looks like over longer stretches:</p>
      <ul>
        <li><strong>Biweekly Paycheck Gross:</strong> $1,248.00 × 2 = <strong>$2,496.00</strong> (compared to $1,920.00 without overtime).</li>
        <li><strong>Monthly Average Gross:</strong> ($1,248.00 × 52) ÷ 12 = <strong>$5,408.00 per month</strong>.</li>
        <li><strong>Annualized Gross Income:</strong> $1,248.00 × 52 weeks = <strong>$64,896.00 per year</strong>.</li>
      </ul>
      <p>Eight overtime hours a week lifts annual gross pay from $49,920.00 to $64,896.00. That's an extra <strong>$14,976.00 in gross pay before taxes</strong>. You can compare this earning power with our detailed wage benchmarks for <a href="/articles/how-much-is-23-an-hour-a-year/">$23 an hour</a> and <a href="/articles/how-much-is-30-an-hour-annually/">$30 an hour</a>.</p>

      <figure><img src="/assets/images/ui-card-regular-vs-overtime-rate.webp" alt="3D financial desk graphic comparing regular pay against 1.5x time-and-a-half overtime rate on a $24 hourly wage" width="800" height="450" loading="lazy"><figcaption>Visual comparison of standard straight-time pay ($960) versus 1.5x overtime pay ($288) for 48 hours worked.</figcaption></figure>

      <!-- Section 5: Scenario 2 Double Time -->
      <h2 id="scenario-2-double-time">Scenario 2: Double Time (2.0×) &amp; California Daily Overtime Laws</h2>
      <p>Federal law requires 1.5× time-and-a-half, but it doesn't require <strong>double-time (2.0×)</strong> pay. Some states and union contracts do set daily overtime rules, though. California is the best-known example, under California Labor Code § 510. Our <a href="/articles/what-is-double-time-pay/">double-time guide</a> explains when 2× pay applies outside California and how it's worked out.</p>

      <div class="cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin:20px 0">
        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <div style="font-size:1.2rem;font-weight:800;color:var(--primary);margin-bottom:6px">1.5× Daily OT</div>
          <h3 style="font-size:0.98rem;margin:0 0 6px;color:var(--ink)">Over 8 Hours in a Workday</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.5">In California, Alaska, and Nevada, non-exempt employees earn 1.5× for hours 9 through 12 in a single workday.</p>
        </div>

        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <div style="font-size:1.2rem;font-weight:800;color:#dc2626;margin-bottom:6px">2.0× Double Time</div>
          <h3 style="font-size:0.98rem;margin:0 0 6px;color:var(--ink)">Over 12 Hours in a Workday</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.5">In California, every hour past 12 in a single workday pays twice (2.0×) your regular rate.</p>
        </div>

        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <div style="font-size:1.2rem;font-weight:800;color:#16a34a;margin-bottom:6px">7th Day Rule</div>
          <h3 style="font-size:0.98rem;margin:0 0 6px;color:var(--ink)">Consecutive Workdays</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.5">On the 7th straight day of work in a workweek, California pays 1.5× for the first 8 hours and 2.0× after that.</p>
        </div>
      </div>

      <p>Say a California worker earning <strong>$24.00 per hour</strong> works one 14-hour shift:</p>
      <ul>
        <li>First 8 hours (Regular Straight-Time): 8 hrs × $24.00 = <strong>$192.00</strong></li>
        <li>Next 4 hours (1.5× Overtime Rate = $36.00/hr): 4 hrs × $36.00 = <strong>$144.00</strong></li>
        <li>Final 2 hours (2.0× Double-Time Rate = $48.00/hr): 2 hrs × $48.00 = <strong>$96.00</strong></li>
        <li><strong>Total Shift Gross Pay:</strong> $192.00 + $144.00 + $96.00 = <strong>$432.00</strong></li>
      </ul>
      <p>In a state with no daily overtime rule, like Texas or Florida, that same 14-hour shift would pay straight time only ($336.00) unless your hours for the whole week went past 40. That's why knowing your state's rules matters: it's the difference between getting every dollar you're owed and leaving money on the table.</p>

      <figure><img src="/assets/images/ui-timesheet-daily-overtime-rules.webp" alt="Photorealistic clipboard breakdown showing California daily overtime and double-time rules for a 14-hour shift" width="800" height="450" loading="lazy"><figcaption>How daily overtime (1.5x) and double-time (2.0x) rules apply to a 14-hour workday in California.</figcaption></figure>

      <!-- Section 6: Scenario 3 Blended Rate -->
      <h2 id="scenario-3-blended-rate">Scenario 3: The "Blended Rate" Rule for Bonuses &amp; Shift Differentials</h2>
      <p>The <strong>Regular Rate of Pay</strong> under FLSA Section 7(e) is where payroll gets tricky. A lot of workers, and plenty of payroll clerks, assume overtime is always worked out from your base hourly rate. It isn't.</p>

      <p>Under federal law (29 CFR § 778.208), <strong>nondiscretionary bonuses</strong> (attendance incentives, production bonuses, safety bonuses) and <strong>shift differentials</strong> (extra pay for night or weekend shifts) have to be counted in your regular rate before the overtime premium is worked out.</p>

      <div class="card" style="padding:22px;border:1.5px solid var(--border-color);border-radius:12px;background:#fff;margin:24px 0">
        <h3 style="margin:0 0 10px;font-size:1.1rem;color:var(--ink)">Worked Example: Base Wage Plus Production Bonus</h3>
        <p style="margin:0 0 12px;color:var(--muted);font-size:0.92rem;line-height:1.55">Say you earn a base rate of <strong>$20.00 per hour</strong> and work <strong>45 hours</strong> this week, plus a <strong>$90.00 weekly production bonus</strong>.</p>

        <p style="margin:0 0 6px;color:#dc2626;font-weight:700">The Common (and Illegal) Payroll Error:</p>
        <p style="margin:0 0 12px;color:var(--muted);font-size:0.9rem">Payroll multiplies only the base wage by 1.5: (40 hrs × $20.00) + (5 OT hrs × $30.00) + $90.00 bonus = $800.00 + $150.00 + $90.00 = <strong>$1,040.00</strong>.</p>

        <p style="margin:0 0 6px;color:var(--primary);font-weight:700">The Correct FLSA Blended Rate Calculation:</p>
        <ol style="margin:0;padding-left:20px;font-size:0.92rem;color:var(--ink);display:flex;flex-direction:column;gap:8px">
          <li><strong>Calculate Total Straight-Time Compensation:</strong> (45 total hours × $20.00 base) + $90.00 bonus = $900.00 + $90.00 = <strong>$990.00</strong>.</li>
          <li><strong>Calculate True Regular Rate of Pay:</strong> $990.00 total straight-time ÷ 45 total hours = <strong>$22.00 per hour</strong> (not $20.00!).</li>
          <li><strong>Calculate Additional Overtime Premium (0.5×):</strong> Straight time is already paid for all 45 hours, so you're owed an extra half-time premium on the 5 overtime hours: 5 hrs × ($22.00 × 0.5) = 5 hrs × $11.00 = <strong>$55.00</strong>.</li>
          <li><strong>Calculate Total Weekly Gross Pay:</strong> $990.00 straight-time + $55.00 overtime premium = <strong>$1,045.00</strong>.</li>
        </ol>
        <p style="margin:12px 0 0;color:#16a34a;font-size:0.92rem;font-weight:700">Difference: You legally earn $1,045.00, not $1,040.00. That extra $5.00 a week adds up to $260.00 a year.</p>
      </div>

      <figure><img src="/assets/images/ui-widget-blended-rate-bonus.webp" alt="3D clipboard calculation showing how nondiscretionary bonuses affect the FLSA blended regular rate and overtime gross pay" width="800" height="450" loading="lazy"><figcaption>Calculating the weighted average FLSA blended overtime rate when production bonuses are included.</figcaption></figure>

      <!-- Section 7: Reference Table -->
      <h2 id="rates-table">Overtime Pay Reference Table ($15 to $50/Hour + Annual Boost)</h2>
      <p>Here's how the numbers stack up at different wage levels: your base rate, the 1.5× time-and-a-half rate, the 2.0× double-time rate, and what 5 or 10 overtime hours a week add over a full 52-week year:</p>

      <div class="table-wrap" style="margin:20px 0">
        <table class="pay-table">
          <thead>
            <tr>
              <th scope="col">Base Hourly Rate</th>
              <th scope="col">1.5× Overtime Rate</th>
              <th scope="col">2.0× Double-Time</th>
              <th scope="col">40-Hr Base (Annual)</th>
              <th scope="col">+5 OT Hrs/Wk (Annual Boost)</th>
              <th scope="col">+10 OT Hrs/Wk (Annual Boost)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>$15.00/hr</strong></td>
              <td>$22.50/hr</td>
              <td>$30.00/hr</td>
              <td>$600/wk ($31,200)</td>
              <td>+$112.50/wk (<strong>+$5,850/yr</strong>)</td>
              <td>+$225.00/wk (<strong>+$11,700/yr</strong>)</td>
            </tr>
            <tr>
              <td><strong>$20.00/hr</strong></td>
              <td>$30.00/hr</td>
              <td>$40.00/hr</td>
              <td>$800/wk ($41,600)</td>
              <td>+$150.00/wk (<strong>+$7,800/yr</strong>)</td>
              <td>+$300.00/wk (<strong>+$15,600/yr</strong>)</td>
            </tr>
            <tr>
              <td><strong>$24.00/hr</strong></td>
              <td>$36.00/hr</td>
              <td>$48.00/hr</td>
              <td>$960/wk ($49,920)</td>
              <td>+$180.00/wk (<strong>+$9,360/yr</strong>)</td>
              <td>+$360.00/wk (<strong>+$18,720/yr</strong>)</td>
            </tr>
            <tr class="featured">
              <td><strong>$25.00/hr</strong></td>
              <td>$37.50/hr</td>
              <td>$50.00/hr</td>
              <td>$1,000/wk ($52,000)</td>
              <td>+$187.50/wk (<strong>+$9,750/yr</strong>)</td>
              <td>+$375.00/wk (<strong>+$19,500/yr</strong>)</td>
            </tr>
            <tr>
              <td><strong>$30.00/hr</strong></td>
              <td>$45.00/hr</td>
              <td>$60.00/hr</td>
              <td>$1,200/wk ($62,400)</td>
              <td>+$225.00/wk (<strong>+$11,700/yr</strong>)</td>
              <td>+$450.00/wk (<strong>+$23,400/yr</strong>)</td>
            </tr>
            <tr>
              <td><strong>$35.00/hr</strong></td>
              <td>$52.50/hr</td>
              <td>$70.00/hr</td>
              <td>$1,400/wk ($72,800)</td>
              <td>+$262.50/wk (<strong>+$13,650/yr</strong>)</td>
              <td>+$525.00/wk (<strong>+$27,300/yr</strong>)</td>
            </tr>
            <tr>
              <td><strong>$40.00/hr</strong></td>
              <td>$60.00/hr</td>
              <td>$80.00/hr</td>
              <td>$1,600/wk ($83,200)</td>
              <td>+$300.00/wk (<strong>+$15,600/yr</strong>)</td>
              <td>+$600.00/wk (<strong>+$31,200/yr</strong>)</td>
            </tr>
            <tr>
              <td><strong>$45.00/hr</strong></td>
              <td>$67.50/hr</td>
              <td>$90.00/hr</td>
              <td>$1,800/wk ($93,600)</td>
              <td>+$337.50/wk (<strong>+$17,550/yr</strong>)</td>
              <td>+$675.00/wk (<strong>+$35,100/yr</strong>)</td>
            </tr>
            <tr>
              <td><strong>$50.00/hr</strong></td>
              <td>$75.00/hr</td>
              <td>$100.00/hr</td>
              <td>$2,000/wk ($104,000)</td>
              <td>+$375.00/wk (<strong>+$19,500/yr</strong>)</td>
              <td>+$750.00/wk (<strong>+$39,000/yr</strong>)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption">Figures are gross pay before taxes, assuming 52 workweeks a year. To see what higher rates pay, check our guides on <a href="/articles/how-much-is-30-an-hour-annually/">$30 an hour</a> and <a href="/articles/how-much-is-45-an-hour-annually/">$45 an hour</a>.</p>

      <!-- Section 8: Overtime Tax Myth -->
      <h2 id="overtime-tax-myth">Debunking the Myth: Why Overtime Check Taxes Spike (And Why You Never Lose Money)</h2>
      <p>You've probably heard it in the breakroom: <em>"working overtime pushes you into a higher tax bracket and you lose money."</em></p>

      <p>It's not true. <strong>Working overtime never leaves you with less take-home pay.</strong></p>

      <p>The confusion comes from how payroll withholding works versus what you actually owe at the end of the year:</p>

      <div class="cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin:20px 0">
        <div class="card" style="padding:20px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <h3 style="font-size:1.02rem;margin:0 0 6px;color:var(--ink)">How Withholding Software Operates</h3>
          <p style="font-size:0.88rem;color:var(--muted);margin:0;line-height:1.5">Payroll software works out federal withholding by treating each paycheck as if you earned that much all year (a biweekly check times 26). So a heavy overtime check can look like an $80,000 salary instead of your usual $50,000, and the software withholds at the 22% bracket for that one check.</p>
        </div>

        <div class="card" style="padding:20px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <h3 style="font-size:1.02rem;margin:0 0 6px;color:var(--ink)">How Progressive Tax Brackets Work</h3>
          <p style="font-size:0.88rem;color:var(--muted);margin:0;line-height:1.5">US taxes use progressive brackets. For 2026, the standard deduction means your first <strong>$16,100</strong> (single) or $32,200 (married filing jointly) isn't taxed at all. When your earnings reach a higher bracket, <strong>only the dollars in that top slice get the higher rate</strong>. Everything below it is still taxed at 0%, 10%, or 12%. You keep most of every overtime dollar.</p>
        </div>
      </div>

      <p>When you file your return, the IRS sorts out what you really earned for the year, and any extra withholding from those big overtime checks comes back to you as a refund. For a step-by-step look at paycheck withholding, FICA, and the 2026 tax brackets, read our guide on <a href="/articles/how-to-calculate-taxes-on-paycheck/">how to calculate taxes on a paycheck</a>.</p>

      <p>For tax years 2025–2028 there's also a new federal deduction aimed at overtime: many workers can deduct the premium half of their time-and-a-half pay when they file. See our guide to the <a href="/articles/no-tax-on-overtime/">no tax on overtime deduction</a> for who qualifies, the caps, and how the premium pay is reported. A companion deduction in the same law covers tipped income — up to $25,000 a year; see our <a href="/articles/no-tax-on-tips/">no tax on tips guide</a> for its occupation list and phase-outs.</p>

      <!-- Section 9: Common Mistakes -->
      <h2 id="common-mistakes">Common Employer &amp; Employee Overtime Mistakes to Watch For</h2>
      <p>After years of building wage and payroll tools, we've seen the same pay stub problems come up again and again. Most missing wages trace back to six common mistakes:</p>

      <div class="cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin:20px 0">
        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <h3 style="font-size:0.95rem;color:#dc2626;margin:0 0 4px">1. Biweekly 80-Hour Averaging</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.45">Averaging 46 hours in Week 1 and 34 in Week 2 to show 80 hours and zero overtime. Under federal law, each 7-day workweek stands on its own.</p>
        </div>

        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <h3 style="font-size:0.95rem;color:#dc2626;margin:0 0 4px">2. Counting PTO Toward 40 Hours</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.45">Expecting overtime when you had 8 hours of holiday pay and 36 hours actually worked. FLSA overtime only counts hours on the clock.</p>
        </div>

        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <h3 style="font-size:0.95rem;color:#dc2626;margin:0 0 4px">3. Misclassifying Non-Exempt Workers</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.45">Giving workers a modest salary and a manager title, then handing them routine day-to-day work to dodge paying overtime.</p>
        </div>

        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <h3 style="font-size:0.95rem;color:#dc2626;margin:0 0 4px">4. Excluding Bonuses from Regular Rate</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.45">Leaving attendance bonuses, production bonuses, and shift differentials out of the FLSA blended regular rate.</p>
        </div>

        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <h3 style="font-size:0.95rem;color:#dc2626;margin:0 0 4px">5. Off-the-Clock Pre/Post Shift Work</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.45">Having workers show up 15 minutes early for prep or stay late to clean up, without logging that time.</p>
        </div>

        <div class="card" style="padding:18px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <h3 style="font-size:0.95rem;color:#dc2626;margin:0 0 4px">6. Illegal Comp Time in Private Sector</h3>
          <p style="font-size:0.86rem;color:var(--muted);margin:0;line-height:1.45">Offering "future time off" instead of cash overtime pay. In the private sector, comp time is illegal under federal law.</p>
        </div>
      </div>

      <!-- Section: How to Use the Calculator -->
      <h2 id="how-to-use">How to Use the Calculator</h2>
      <p>Check Scenario 1 against the tool in four steps:</p>
      <ol>
        <li><strong>Step 1 — Enter your base hourly rate</strong> (the $24 rate from Scenario 1, or your own) into the overtime calculator.</li>
        <li><strong>Step 2 — Enter your hours for one workweek:</strong> 40 regular hours and 8 overtime hours for the 48-hour week in the scenario.</li>
        <li><strong>Step 3 — Choose your multiplier:</strong> 1.5× for time-and-a-half, 2.0× for double time, or a custom rate if your contract sets a different one.</li>
        <li><strong>Step 4 — Read the breakdown and compare:</strong> $960 of regular pay plus $288 of overtime pay makes $1,248 gross for the week — the figure to check your pay stub against.</li>
      </ol>
      <p><a class="btn" href="/overtime-calculator/">Run my numbers</a></p>

      <!-- Section: Limitations -->
      <h2 id="limitations">Limitations</h2>
      <ol>
        <li><strong>One workweek at a time:</strong> the calculator follows the FLSA's standalone-workweek rule — it cannot average hours across a biweekly period, because the law does not allow that either.</li>
        <li><strong>Daily-overtime states need day-by-day math:</strong> California-style splits (1.5× after 8 hours, 2× after 12, seventh-day rules) must be modeled one day at a time; a single weekly total will not reproduce a 14-hour shift's pay.</li>
        <li><strong>Enter your blended rate if you earn bonuses:</strong> nondiscretionary bonuses and shift differentials belong in the regular rate — running the tool on your base rate alone understates overtime when you receive them.</li>
        <li><strong>Gross pay only:</strong> withholding, FICA, and state tax are not calculated, so your net deposit will be lower than the tool's total.</li>
        <li><strong>It cannot classify you:</strong> exempt employees are not owed FLSA overtime at all, and no calculator can decide whether your job is exempt — that turns on duties and salary tests.</li>
        <li><strong>The FLSA is a floor, not a ceiling:</strong> state law, a union contract, or your employer's policy may promise more than the federal minimum modeled here.</li>
      </ol>

      <!-- Section 10: FAQs -->
      <h2 id="faqs">Frequently Asked Questions About Overtime Pay</h2>
      <div class="faq-list">
        <details>
          <summary>How does an overtime calculator work?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>An overtime calculator takes your regular hours (up to 40 in a 7-day workweek) times your base pay to get your regular earnings. Then it takes the hours past 40 and multiplies them by your overtime rate, usually 1.5× for time-and-a-half or 2.0× for double time. Add the two together and you get your gross paycheck, plus a yearly estimate of what the overtime is worth.</p>
        </details>
        <details>
          <summary>How do you calculate time-and-a-half manually?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>Multiply your base rate by 1.5 to get your overtime rate, then multiply that by your overtime hours. At $24.00 an hour, your overtime rate is $36.00 ($24 × 1.5). Work 8 overtime hours and that's $288.00 (8 × $36.00). Add your regular 40-hour pay of $960.00 and your gross pay for the week is $1,248.00.</p>
        </details>
        <details>
          <summary>Can an employer average hours over two weeks in a biweekly pay period to avoid overtime?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>No. Under the Fair Labor Standards Act (FLSA), 29 CFR § 778.104, each 7-day workweek stands on its own. An employer can't average hours across two weeks. Work 45 hours in Week 1 and 35 in Week 2 and you're still owed 5 hours of overtime for Week 1, even though the two weeks add up to 80 hours.</p>
        </details>
        <details>
          <summary>Does paid time off (PTO) or holiday pay count toward the 40-hour overtime threshold?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>No. Under federal law, overtime only counts hours you actually worked. Take 8 hours of paid holiday on Monday and work 36 hours Tuesday through Friday, and you have 44 paid hours but zero overtime, because only 36 of them were hours worked. All 44 are paid at straight time.</p>
        </details>
        <details>
          <summary>Does working overtime push you into a higher tax bracket and make you lose money?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>No, that's a myth that won't go away. The US taxes income in brackets, and only the dollars above a bracket line get taxed at the higher rate. Everything below that line is still taxed at the lower rates. Overtime always adds to your take-home pay.</p>
        </details>
        <details>
          <summary>When does double time apply instead of time-and-a-half?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>Federal law only requires time-and-a-half for hours over 40 in a workweek, so double time isn't a federal rule. It comes from state law, union contracts, or employer policy. The best-known example is California, where non-exempt employees earn double time for hours over 12 in a single workday, and for hours over 8 on the seventh consecutive day of work in a workweek. Check your state rules and your employer policy before assuming a rate, and use the overtime calculator with a 2.0 multiplier to model double-time hours.</p>
        </details>
      </div>

      <!-- Section 11: Action Plan -->
      <h2 id="audit-action-plan">Key Takeaways &amp; Your Overtime Paycheck Action Plan</h2>
      <p>Overtime costs you real time and energy. In return, the law says you get paid extra for it. Keeping what's yours comes down to a few steady habits:</p>

      <div class="card" style="padding:22px;border:1.5px solid var(--border-color);border-radius:12px;background:#fff;margin:20px 0">
        <h3 style="margin:0 0 10px;font-size:1.1rem;color:var(--ink)">Your 4-Step Paycheck Audit Checklist:</h3>
        <ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;color:var(--muted);font-size:0.92rem">
          <li><strong style="color:var(--ink)">1. Identify Your Employer's Workweek:</strong> Find out the exact day and hour your company's 7-day payroll workweek starts and ends.</li>
          <li><strong style="color:var(--ink)">2. Track Compensable Clock Time:</strong> Keep your own log of punch-in, lunch, and punch-out times on your phone or in a notebook.</li>
          <li><strong style="color:var(--ink)">3. Verify the Blended Regular Rate:</strong> If you get night differentials, hazard pay, or nondiscretionary bonuses, make sure your overtime rate is worked out from your blended regular rate, not just your base rate.</li>
          <li><strong style="color:var(--ink)">4. Pre-Calculate Before Payday:</strong> Run your numbers through our free <a href="/overtime-calculator/" style="color:var(--primary);font-weight:600">Overtime Calculator</a> or <a href="/" style="color:var(--primary);font-weight:600">Homepage Converter</a>, then compare the gross pay to your actual pay stub.</li>
        </ul>
      </div>

      <p>To see what your overtime pay looks like after federal withholding, FICA, and state taxes, read our guide on <a href="/articles/how-to-calculate-taxes-on-paycheck/">how to calculate taxes on a paycheck</a>, explore our <a href="/hourly-to-salary-calculator/">Hourly to Salary Calculator</a>, or convert your annual earnings back to hourly with our <a href="/salary-to-hourly-calculator/">Salary to Hourly Calculator</a>.</p>

      <div class="card" style="padding:16px 20px;background:var(--slate-50);border-radius:10px;margin:24px 0 0">
        <p style="margin:0;font-size:0.86rem;color:var(--muted);line-height:1.5"><em>Disclaimer: This guide is provided for educational and payroll calculation purposes only and does not constitute formal legal or tax advice. Overtime rules may vary under state labor codes, prevailing wage statutes, and union collective bargaining agreements. Consult a qualified payroll specialist, labor attorney, or the U.S. Department of Labor for guidance on specific workplace disputes.</em></p>
      </div>
      <h2>3 Things to Remember</h2>
      <ol>
        <li>The FLSA threshold is 40 hours in a workweek; only hours beyond it earn the overtime premium.</li>
        <li>Under California’s daily rule, double time (2×) applies. That's $60 an hour on a $30 base rate.</li>
        <li>Blended rates apply when you work at different rates in the same week. The overtime rate uses the weighted average, not just your base rate.</li>
      </ol>
  `
};

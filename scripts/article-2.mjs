import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const articlesPath = path.join(__dirname, 'articles.mjs');

const article2 = {
  slug: 'how-to-calculate-hourly-rate-from-salary',
  breadcrumb: 'Salary to Hourly',
  category: 'Calculation Guides',
  minutes: 15,
  datePublished: '2026-10-09',
  dateModified: '2026-11-03',
  title: 'Calculate Hourly Rate From Salary',
  h1: 'How to Calculate Your Hourly Rate From Annual Salary',
  desc: 'Learn how to convert annual salary to hourly pay with a simple formula, examples, work-hour adjustments, unpaid time off, overtime and a free calculator.',
  image: '/assets/images/salary-to-hourly-rate-calculation.jpg',
  imageAlt: 'Step-by-step guide showing how to calculate your hourly rate from annual salary using the 2,080 working hours formula',
  toc: [
    ['quick-answer', 'How Do You Calculate Hourly Rate From Salary?'],
    ['the-formula', 'The Salary-to-Hourly Formula'],
    ['why-2080-hours', 'Why 2,080 Hours Is Used'],
    ['step-by-step', 'How to Calculate Hourly Rate Step by Step'],
    ['salary-examples', 'Salary-to-Hourly Examples'],
    ['conversion-table', 'Annual Salary to Hourly Conversion Table'],
    ['work-schedules', 'How Different Work Schedules Change Your Hourly Rate'],
    ['unpaid-time-off', 'How Unpaid Time Off Changes Your Effective Rate'],
    ['pto-vacation', 'How PTO and Paid Vacation Affect the Calculation'],
    ['overtime-impact', 'How Overtime Changes the Real Value of a Salary'],
    ['gross-vs-net', 'Gross Hourly Rate vs. Take-Home Hourly Rate'],
    ['salary-vs-hourly', 'Salary vs. Hourly Pay: Real-World Offer Comparison'],
    ['common-mistakes', 'Common Salary-to-Hourly Calculation Mistakes'],
    ['calculator-cta', 'Use Our Salary-to-Hourly Calculator'],
    ['how-to-use', 'How to Use the Calculator'],
    ['limitations', 'Limitations'],
    ['faqs', 'Frequently Asked Questions'],
    ['key-takeaways', 'Key Takeaways']
  ],
  faqs: [
    [
      'How do I calculate my hourly rate from annual salary?',
      'Divide your annual gross salary by the hours you work in a year. If you\'re full-time at 40 hours a week for 52 weeks, that\'s 2,080 hours, so you just divide your salary by 2,080. A $60,000 salary works out to about $28.85 an hour before taxes and deductions.'
    ],
    [
      'What is $50,000 a year per hour?',
      '$50,000 a year comes to about $24.04 an hour on the standard full-time schedule of 2,080 hours a year (40 hours a week × 52 weeks). That\'s roughly $961.54 a week gross, or $1,923.08 every two weeks across 26 paychecks. If you work 35 hours a week instead (1,820 hours a year), the same $50,000 is worth $27.47 an hour.'
    ],
    [
      'What is $60,000 a year per hour?',
      'On a standard 40-hour week and 52 paid weeks a year (2,080 hours), $60,000 a year is about $28.85 an hour. That works out to $1,153.85 a week, $2,307.69 every two weeks, and $5,000 a month on average, all before payroll deductions. If your job expects 45 hours a week (2,340 hours), your real rate drops to $25.64 an hour.'
    ],
    [
      'What is $75,000 a year per hour?',
      '$75,000 a year is about $36.06 an hour on the standard 2,080-hour full-time schedule (40 hours a week for 52 weeks). That\'s $1,442.31 a week, $2,884.62 every two weeks across 26 pay periods, and $6,250.00 gross a month before federal, state, and local taxes.'
    ],
    [
      'What is $100,000 a year per hour?',
      '$100,000 a year is about $48.08 an hour if you work 40 hours a week across 52 weeks (2,080 hours). That\'s $1,923.08 a week gross, $3,846.15 every two weeks, and $8,333.33 a month before taxes and deductions. Work 50 hours a week instead (2,600 hours), and that same six-figure salary is worth $38.46 an hour.'
    ],
    [
      'Does PTO affect my hourly rate?',
      'Paid time off — vacation days, paid holidays, paid sick leave — doesn\'t cut your gross salary or your standard hourly rate, because you still get your full regular pay while you\'re away. Unpaid time off is a different story: take 2 unpaid weeks and work 50 weeks instead of 52 (2,000 hours), and your rate while you\'re actually working rises to $30.00 an hour on a $60,000 salary ($60,000 ÷ 2,000).'
    ],
    [
      'Is salary-to-hourly based on gross or net income?',
      'Salary-to-hourly math always works from gross pay, before taxes and deductions. Your take-home hourly rate will be lower once federal income tax, state and local taxes, Social Security (6.2%), Medicare (1.45%), health insurance premiums, and 401(k) contributions come out of each paycheck.'
    ],
    [
      'What if I work more than 40 hours a week?',
      'If you\'re an exempt salaried employee regularly working 45 or 50 hours a week with no extra pay, your real hourly rate falls, because you\'re splitting the same fixed salary across more hours. If you\'re non-exempt under the Fair Labor Standards Act (FLSA), you\'re legally owed 1.5 times your regular rate for every hour past 40 in a workweek.'
    ],
    [
      'How do I convert a monthly salary to an hourly rate?',
      'To turn a monthly salary into an hourly rate, first multiply it by 12 to get your annual salary, then divide by your annual hours (usually 2,080 for full-time work). Or skip a step and divide your monthly salary by the average hours in a month — about 173.33 hours for a 40-hour week. A $5,000 monthly salary ($60,000 a year) divided by 173.33 hours is $28.85 an hour.'
    ],
    [
      'How do I convert a biweekly salary to an hourly rate?',
      'Divide your gross biweekly paycheck by the hours in that pay period — usually 80 hours for a standard full-time two-week schedule. A biweekly paycheck of $2,307.69 divided by 80 hours is about $28.85 an hour.'
    ]
  ],
  body: `
      <div class="methodology-box">
        <h3>Quick Answer</h3>
        <p>Divide your annual gross salary by your total scheduled hours for the year — $60,000 ÷ 2,080 hours is $28.85 an hour.</p>
      </div>

      <p class="lead">You know your annual salary, but what does it actually pay per hour? To calculate your hourly rate from your salary, divide your annual gross salary by the hours you work in a year. On a standard full-time schedule of 40 hours a week across 52 weeks, that means dividing by 2,080 hours — so a $60,000 salary works out to about $28.85 an hour.</p>

      <p>But 2,080 hours is only a starting point. Your real hourly rate changes a lot if your job expects 45 or 50 hours a week, if you take unpaid leave, or if your pay includes bonuses and paid time off. This guide walks through the formula, the schedule adjustments, real salary comparisons, and the mistakes people usually make, so you can figure out what your time is actually worth.</p>

      <!-- Above the Fold Hero CTA -->
      <div class="article-hero-cta">
        <div class="hero-cta-content">
          <span class="hero-cta-badge">Free Interactive Utility</span>
          <h2 class="hero-cta-title">Convert Your Salary to an Hourly Rate</h2>
          <p class="hero-cta-desc">Enter your annual salary and weekly schedule to get your gross hourly rate, paycheck breakdown, and overtime rate right away.</p>
        </div>
        <a href="/salary-to-hourly-calculator/" class="calculate-button hero-cta-btn">Calculate My Hourly Rate</a>
      </div>

      <!-- Quick Answer Box (Featured Snippet Optimized) -->
      <div class="quick-answer-card" id="quick-answer">
        <span class="quick-answer-tag">Quick Answer</span>
        <h2>How Do You Calculate Hourly Rate From Salary?</h2>
        <p class="quick-answer-lead">To calculate your hourly rate from your salary, divide your annual gross salary by the total hours you're scheduled to work in a year.</p>
        
        <div class="quick-answer-formula">
          <span class="qa-formula-badge">The Standard Calculation Formula</span>
          <code>Hourly Rate = Annual Gross Salary ÷ Annual Work Hours</code>
          <div class="qa-calc-row">
            <span>For the standard full-time schedule (40 hours/week × 52 weeks = 2,080 hours):</span>
            <strong>Hourly Rate = Annual Salary ÷ 2,080</strong>
          </div>
          <div class="qa-calc-row">
            <span>For example, at a salary of $60,000 per year:</span>
            <strong>$60,000 ÷ 2,080 hours = $28.85 / hour</strong>
          </div>
        </div>
        <p class="quick-answer-note"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg> Note: This is your gross hourly rate, before federal, state, and local income taxes, FICA, and other deductions come out.</p>
      </div>

      <!-- Compact Interactive-Looking Calculator Card -->
      <div class="article-calc-preview-card" id="featured-calculator">
        <div class="calc-preview-header">
          <div class="calc-preview-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 18h2m4 0h2"/></svg>
          </div>
          <div>
            <h3>Convert Your Salary to an Hourly Rate</h3>
            <p>Here's what the math looks like for a standard full-time job:</p>
          </div>
        </div>
        <div class="calc-preview-grid">
          <div class="calc-preview-cell">
            <span class="cell-label">Input</span>
            <span class="cell-val">Example</span>
          </div>
          <div class="calc-preview-cell">
            <span class="cell-label">Annual Salary</span>
            <span class="cell-val">$60,000.00</span>
          </div>
          <div class="calc-preview-cell">
            <span class="cell-label">Hours / Week</span>
            <span class="cell-val">40 hrs</span>
          </div>
          <div class="calc-preview-cell">
            <span class="cell-label">Weeks / Year</span>
            <span class="cell-val">52 wks</span>
          </div>
          <div class="calc-preview-cell highlight" style="grid-column: 1 / -1;">
            <span class="cell-label">Estimated Gross Hourly Rate</span>
            <span class="cell-val" style="font-size: 1.32rem;">$28.85 / hour</span>
          </div>
        </div>
        <div class="calc-preview-action">
          <a href="/salary-to-hourly-calculator/" class="calculate-button">Use the Free Salary to Hourly Calculator →</a>
        </div>
      </div>

      <!-- Section: The Formula -->
      <h2 id="the-formula">The Salary-to-Hourly Formula</h2>
      <p>The math is just division. The part that matters is getting the two numbers right: what you're paid, and how many hours you actually work for it.</p>

      <div class="formula-blueprint">
        <div class="formula-blueprint-header">
          <span class="formula-blueprint-badge">Universal Mathematical Blueprint</span>
          <span style="font-size:0.82rem;color:#64748b;font-weight:600">Applicable to all pay structures</span>
        </div>
        <div class="formula-blueprint-math">
          <div style="font-size:1.15rem;margin-bottom:12px">
            <strong>ANNUAL SALARY</strong><br>
            <span style="display:inline-block;width:180px;height:2px;background:var(--ink);margin:4px 0"></span><br>
            <strong>ANNUAL WORK HOURS</strong><br>
            = <strong>HOURLY RATE</strong>
          </div>
        </div>
        <p class="formula-blueprint-desc">For a standard full-time job — 40 hours a week, 52 weeks a year:</p>
        <div class="study-note-card" style="margin:16px 0 0;background:#ffffff">
          <div class="study-note-formula" style="font-size:1.05rem">
            Annual Salary ÷ (40 Hours/Week × 52 Weeks/Year) = Hourly Rate<br>
            <strong>Annual Salary ÷ 2,080 Hours = Hourly Rate</strong>
          </div>
        </div>
      </div>

      <!-- Infographic #1: Formula -->
      <div class="featured-image-wrap" style="margin:28px 0">
        <img src="/assets/images/salary-to-hourly-formula.webp" alt="Formula for converting annual salary to hourly rate" class="featured-image" width="1280" height="720" loading="lazy">
      </div>

      <p>Here's what each part means:</p>
      <ul>
        <li><strong>Annual Gross Salary (Numerator):</strong> Your full salary for the year, before taxes or any deductions come out.</li>
        <li><strong>Annual Work Hours (Denominator):</strong> The hours you're scheduled to work in that same year. The usual full-time standard is 2,080 hours (40 hours × 52 weeks).</li>
      </ul>
      <p>Want to try your own numbers? Use the <a href="/">Hourly Wage Converter</a> or go straight to the <a href="/salary-to-hourly-calculator/">Salary to Hourly Calculator</a>.</p>

      <!-- Section: Why 2,080 Hours -->
      <figure>
  <img src="/assets/images/ui-salary-to-hourly-conversion.webp" alt="Illustration showing an annual salary document converting into an hourly rate through a clock" width="800" height="450" loading="lazy">
  <figcaption>Annual salary becomes an hourly rate once you divide it by the hours you actually work.</figcaption>
</figure>
<h2 id="why-2080-hours">Why 2,080 Hours Is Used to Calculate an Hourly Rate</h2>
      <p>If you've ever read a job offer or a pay stub, you've probably seen the number <strong>2,080</strong>. So where does it come from, and why does payroll use it everywhere?</p>

      <p>The math is simple:</p>
      <div class="study-note-card">
        <div class="study-note-header">
          <span class="study-note-badge">Standard Payroll Baseline</span>
          <span style="font-size:0.8rem;color:#92400e;font-weight:600">The 2,080-Hour Derivation</span>
        </div>
        <div class="study-note-body">
          <div class="study-note-formula">40 Hours Per Week × 52 Weeks Per Year = 2,080 Scheduled Hours</div>
          <p style="margin:10px 0 0;font-size:0.92rem;color:#78350f">That's five 8-hour days a week, all 52 weeks of the year (8 × 5 × 52 = 2,080).</p>
        </div>
      </div>

      <!-- Handwritten Notes Image -->
      <div class="featured-image-wrap" style="margin:28px 0">
        <img src="/assets/images/annual-salary-to-hourly-handwritten-calculation.jpg" alt="Handwritten annual salary to hourly rate calculation" class="featured-image" width="1280" height="720" loading="lazy">
      </div>

      <p>But keep in mind: <strong>2,080 is a payroll baseline, not a rule about how much anyone actually works</strong>. Payroll teams use it to keep pay packages consistent, but real schedules vary a lot:</p>
      <ul>
        <li><strong>Unpaid Leave:</strong> Take 2 weeks unpaid and you work 50 paid weeks (2,000 hours). On a fixed $60,000 salary, your rate while you're actually working is <code>$60,000 ÷ 2,000 = $30.00/hour</code>.</li>
        <li><strong>35-Hour Workweeks:</strong> Plenty of companies treat 35 hours a week as full-time. Over 52 weeks that's 1,820 hours a year, so a $60,000 salary works out to <code>$60,000 ÷ 1,820 = $32.97/hour</code>.</li>
        <li><strong>Overtime Schedules:</strong> If an exempt salaried job expects 45 hours every week, that's 2,340 hours a year, and the same $60,000 salary drops to <code>$60,000 ÷ 2,340 = $25.64/hour</code>.</li>
      </ul>

      <!-- Section: Step by Step Calculation -->
      <h2 id="step-by-step">How to Calculate Hourly Rate Step by Step</h2>
      <p>Here's how to work out your real hourly rate from any salary, in five steps:</p>

      <div class="timeline-container">
        <div class="timeline-step">
          <div class="timeline-marker">1</div>
          <div class="timeline-content">
            <h3>Step 1: Identify Your Annual Gross Salary</h3>
            <p>Start with your total base salary for the year, before deductions. Leave bonuses out unless you want your total compensation rate. <em>Example: $60,000.</em></p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-marker">2</div>
          <div class="timeline-content">
            <h3>Step 2: Determine Your Average Weekly Working Hours</h3>
            <p>Count the hours you actually work in a typical week. Full-time is usually 40 hours, but use your real schedule if it's 35, 45, or 50. <em>Example: 40 hours per week.</em></p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-marker">3</div>
          <div class="timeline-content">
            <h3>Step 3: Determine Your Paid Weeks Per Year</h3>
            <p>Count your paid weeks for the year. Paid time off counts, so that's usually all 52 weeks. Only subtract weeks you take unpaid. <em>Example: 52 paid weeks.</em></p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-marker">4</div>
          <div class="timeline-content">
            <h3>Step 4: Calculate Your Annual Scheduled Hours</h3>
            <p>Multiply weekly hours by paid weeks: <code>Weekly Hours × Paid Weeks = Annual Hours</code>. <em>Example: 40 × 52 = 2,080 annual hours.</em></p>
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-marker">5</div>
          <div class="timeline-content">
            <h3>Step 5: Divide Annual Salary by Annual Scheduled Hours</h3>
            <p>Divide your annual gross salary by your total annual hours: <code>$60,000 ÷ 2,080 = $28.846</code>. Round to two decimals: <strong>$28.85 per hour</strong>.</p>
          </div>
        </div>
      </div>

      <!-- Section: Examples & Table -->
      <h2 id="salary-examples">Salary-to-Hourly Examples</h2>
      <p>Here's what common salaries work out to on the standard 2,080-hour full-time schedule (40 hours a week across 52 weeks). Every figure is gross pay, before taxes and voluntary deductions:</p>

      <h2 id="conversion-table">Annual Salary to Hourly Conversion Table</h2>
      <p>This chart covers 16 common salaries, with the hourly rate next to the weekly, biweekly (26 pay periods), and monthly equivalents:</p>

      <div class="table-wrap">
        <table class="pay-table">
          <thead>
            <tr>
              <th>Annual Salary</th>
              <th>Annual Hours</th>
              <th>Hourly Equivalent</th>
              <th>Weekly Pay</th>
              <th>Biweekly Pay (26x)</th>
              <th>Monthly Pay (12x)</th>
              <th>Detailed Guide</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>$30,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$14.42 / hr</strong></td>
              <td>$576.92</td>
              <td>$1,153.85</td>
              <td>$2,500.00</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$35,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$16.83 / hr</strong></td>
              <td>$673.08</td>
              <td>$1,346.15</td>
              <td>$2,916.67</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$40,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$19.23 / hr</strong></td>
              <td>$769.23</td>
              <td>$1,538.46</td>
              <td>$3,333.33</td>
              <td><a href="/salary/40000-salary-to-hourly/" style="color:var(--primary);font-weight:600">$40k Salary Guide</a></td>
            </tr>
            <tr>
              <td><strong>$45,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$21.63 / hr</strong></td>
              <td>$865.38</td>
              <td>$1,730.77</td>
              <td>$3,750.00</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$50,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$24.04 / hr</strong></td>
              <td>$961.54</td>
              <td>$1,923.08</td>
              <td>$4,166.67</td>
              <td><a href="/salary/50000-salary-to-hourly/" style="color:var(--primary);font-weight:600">$50k Salary Guide</a></td>
            </tr>
            <tr>
              <td><strong>$55,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$26.44 / hr</strong></td>
              <td>$1,057.69</td>
              <td>$2,115.38</td>
              <td>$4,583.33</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$60,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$28.85 / hr</strong></td>
              <td>$1,153.85</td>
              <td>$2,307.69</td>
              <td>$5,000.00</td>
              <td><a href="/salary/60000-salary-to-hourly/" style="color:var(--primary);font-weight:600">$60k Salary Guide</a></td>
            </tr>
            <tr>
              <td><strong>$65,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$31.25 / hr</strong></td>
              <td>$1,250.00</td>
              <td>$2,500.00</td>
              <td>$5,416.67</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$70,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$33.65 / hr</strong></td>
              <td>$1,346.15</td>
              <td>$2,692.31</td>
              <td>$5,833.33</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$75,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$36.06 / hr</strong></td>
              <td>$1,442.31</td>
              <td>$2,884.62</td>
              <td>$6,250.00</td>
              <td><a href="/salary/75000-salary-to-hourly/" style="color:var(--primary);font-weight:600">$75k Salary Guide</a></td>
            </tr>
            <tr>
              <td><strong>$80,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$38.46 / hr</strong></td>
              <td>$1,538.46</td>
              <td>$3,076.92</td>
              <td>$6,666.67</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$90,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$43.27 / hr</strong></td>
              <td>$1,730.77</td>
              <td>$3,461.54</td>
              <td>$7,500.00</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$100,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$48.08 / hr</strong></td>
              <td>$1,923.08</td>
              <td>$3,846.15</td>
              <td>$8,333.33</td>
              <td><a href="/salary/100000-salary-to-hourly/" style="color:var(--primary);font-weight:600">$100k Salary Guide</a></td>
            </tr>
            <tr>
              <td><strong>$125,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$60.10 / hr</strong></td>
              <td>$2,403.85</td>
              <td>$4,807.69</td>
              <td>$10,416.67</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$150,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$72.12 / hr</strong></td>
              <td>$2,884.62</td>
              <td>$5,769.23</td>
              <td>$12,500.00</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
            <tr>
              <td><strong>$200,000</strong></td>
              <td>2,080 hrs</td>
              <td><strong>$96.15 / hr</strong></td>
              <td>$3,846.15</td>
              <td>$7,692.31</td>
              <td>$16,666.67</td>
              <td><a href="/salary/" style="color:var(--primary);font-weight:600">Explore Guides</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption">Note: These figures assume a 40-hour week across 52 paid weeks a year. All of them are gross earnings, before payroll deductions and taxes.</p>

      <!-- Section: Work Schedules -->
      <h2 id="work-schedules">How Different Work Schedules Change Your Hourly Rate</h2>
      <p>Here's the thing most people miss: <strong>a salary on its own doesn't tell you what you're really earning per hour</strong>. Two people on the same $60,000 salary can have very different hourly rates, depending on how many hours their jobs actually demand.</p>

      <p>See what happens to a fixed $60,000 salary as the weekly hours change:</p>

      <div class="table-wrap">
        <table class="pay-table">
          <thead>
            <tr>
              <th>Weekly Work Schedule</th>
              <th>Annual Hours (52 Weeks)</th>
              <th>Effective Hourly Rate</th>
              <th>Difference vs 40-Hr Benchmark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>20 hrs / week</strong> (Part-Time)</td>
              <td>1,040 hrs</td>
              <td><strong style="color:#16a34a">$57.69 / hr</strong></td>
              <td>+$28.84 / hr (+100%)</td>
            </tr>
            <tr>
              <td><strong>30 hrs / week</strong></td>
              <td>1,560 hrs</td>
              <td><strong style="color:#16a34a">$38.46 / hr</strong></td>
              <td>+$9.61 / hr (+33.3%)</td>
            </tr>
            <tr>
              <td><strong>35 hrs / week</strong> (Standard Full-Time in some sectors)</td>
              <td>1,820 hrs</td>
              <td><strong style="color:#16a34a">$32.97 / hr</strong></td>
              <td>+$4.12 / hr (+14.3%)</td>
            </tr>
            <tr>
              <td><strong>40 hrs / week</strong> (Standard Baseline)</td>
              <td>2,080 hrs</td>
              <td><strong>$28.85 / hr</strong></td>
              <td>Baseline benchmark</td>
            </tr>
            <tr>
              <td><strong>45 hrs / week</strong> (Overtime/Extended)</td>
              <td>2,340 hrs</td>
              <td><strong style="color:#dc2626">$25.64 / hr</strong></td>
              <td>-$3.21 / hr (-11.1%)</td>
            </tr>
            <tr>
              <td><strong>50 hrs / week</strong> (High-Demand Salaried)</td>
              <td>2,600 hrs</td>
              <td><strong style="color:#dc2626">$23.08 / hr</strong></td>
              <td>-$5.77 / hr (-20.0%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Schedule Infographic -->
      <div class="featured-image-wrap" style="margin:28px 0">
        <img src="/assets/images/salary-hourly-rate-by-work-hours.webp" alt="Hourly rate based on annual salary and weekly work hours" class="featured-image" width="1280" height="720" loading="lazy">
      </div>

      <p>Look at the difference: an exempt employee on $60,000 who regularly works 50 hours a week instead of 40 sees their real rate fall from <strong>$28.85 down to $23.08</strong>. That's 520 extra hours a year with no extra pay — about three full months of work, unpaid.</p>

      <!-- Section: Unpaid Time Off -->
      <h2 id="unpaid-time-off">How Unpaid Time Off Changes Your Effective Rate</h2>
      <p>Unpaid time off plays out differently depending on whether you're paid hourly or on a fixed salary:</p>

      <div class="calendar-compare-grid">
        <div class="calendar-card">
          <div class="calendar-badge">Scenario A: 52 Paid Weeks</div>
          <h3>Standard Full-Time Year</h3>
          <div class="cal-stat">
            <span>Weeks Worked:</span>
            <strong>52 weeks</strong>
          </div>
          <div class="cal-stat">
            <span>Annual Hours:</span>
            <strong>2,080 hours</strong>
          </div>
          <div class="cal-stat">
            <span>Annual Salary:</span>
            <strong>$60,000.00</strong>
          </div>
          <div class="cal-total">
            <span>Effective Hourly Rate:</span>
            <strong>$28.85 / hour</strong>
          </div>
        </div>

        <div class="calendar-card" style="border-color:#38bdf8;background:#f0f9ff">
          <div class="calendar-badge" style="background:#e0f2fe;color:#0284c7;border-color:#bae6fd">Scenario B: 50 Paid Weeks</div>
          <h3>Two Weeks Unpaid Leave</h3>
          <div class="cal-stat">
            <span>Weeks Worked:</span>
            <strong>50 weeks</strong>
          </div>
          <div class="cal-stat">
            <span>Annual Hours:</span>
            <strong>2,000 hours</strong>
          </div>
          <div class="cal-stat">
            <span>Annual Salary:</span>
            <strong>$60,000.00</strong>
          </div>
          <div class="cal-total" style="background:#0284c7;color:#ffffff">
            <span style="color:#e0f2fe">Effective Hourly Rate:</span>
            <strong style="color:#ffffff">$30.00 / hour</strong>
          </div>
        </div>
      </div>

      <p>If your $60,000 salary covers only 50 weeks of work — common for academic or seasonal salaried roles — your <em>hourly earnings while working</em> rise from $28.85 to $30.00 an hour. For an hourly worker it's the opposite: two unpaid weeks off cuts annual earnings from $52,000 to $50,000, as explained in our guide on <a href="/articles/how-to-convert-hourly-pay-to-annual-salary/">how to convert hourly pay to annual salary</a>.</p>

      <!-- Section: PTO and Vacation -->
      <h2 id="pto-vacation">How PTO and Paid Vacation Affect the Calculation</h2>
      <p>One question comes up all the time: should you subtract paid vacation or PTO when you work out your hourly rate?</p>

      <div class="study-note-card">
        <div class="study-note-header">
          <span class="study-note-badge">Essential Payroll Rule</span>
          <span style="font-size:0.8rem;color:#92400e;font-weight:600">Paid Leave vs. Unpaid Leave</span>
        </div>
        <div class="study-note-body">
          <p style="margin:0;font-size:0.95rem;line-height:1.6;color:#78350f"><strong>Never subtract paid vacation or PTO from the standard 2,080-hour baseline.</strong> Paid time off is already part of your annual salary — when you take a paid vacation day, your paycheck stays the same.</p>
        </div>
      </div>

      <p>Here's how the two kinds of leave compare:</p>
      <ul>
        <li><strong>Paid Vacation / PTO:</strong> You take 3 weeks off and still get all 26 biweekly paychecks for the year. Your salary stays $60,000, and your standard hourly rate stays $28.85 on 2,080 paid hours.</li>
        <li><strong>Unpaid Time Off:</strong> You take 3 weeks unpaid, your employer holds back pay for those weeks, and you only get paid for 49 weeks. Your gross pay drops with it.</li>
      </ul>

      <!-- Section: Overtime -->
      <h2 id="overtime-impact">How Overtime Changes the Real Value of a Salary</h2>
      <p>Under the <strong>Fair Labor Standards Act (FLSA)</strong>, federal law sorts employees into two groups for overtime:</p>

      <ul>
        <li><strong>Exempt Salaried Employees:</strong> Most executive, administrative, professional, and outside sales employees who meet the salary and job-duties tests are exempt from overtime. Whether they work 40, 50, or 60 hours in a week, they get the same fixed salary, no extra pay. So every extra hour cuts their real hourly rate.</li>
        <li><strong>Non-Exempt Salaried Employees:</strong> Employees who don't meet the FLSA exemption rules must get 1.5 times their regular hourly rate for every hour past 40 in a workweek.</li>
      </ul>

      <p>Which group you're in decides which rule applies. If you're not sure where your job falls, read <a href="/articles/exempt-vs-non-exempt/">our guide to exempt vs. non-exempt status and the overtime rights that come with it</a> before you do the math below.</p>

      <p>Say you're a non-exempt employee on a $60,000 base salary ($28.85 an hour regular rate) and you work 5 overtime hours a week:</p>
      <div class="study-note-card">
        <div class="study-note-header">
          <span class="study-note-badge">Overtime Pay Formula</span>
          <span style="font-size:0.8rem;color:#92400e;font-weight:600">Time-and-a-Half Rate</span>
        </div>
        <div class="study-note-body">
          <div class="study-note-formula">
            Overtime Rate = $28.85 × 1.5 = $43.28 / overtime hour<br>
            5 Extra Hours / Week = $216.40 / week<br>
            Annual Overtime Earnings = $216.40 × 52 Weeks = $11,252.80<br>
            <strong>Total Gross Annual Compensation = $60,000 + $11,252.80 = $71,252.80</strong>
          </div>
        </div>
      </div>
      <p>To try your own overtime numbers, with time-and-a-half or double-time, use our free <a href="/overtime-calculator/">Overtime Calculator</a>.</p>

      <!-- Section: Gross vs Net -->
      <h2 id="gross-vs-net">Gross Hourly Rate vs. Take-Home Hourly Rate</h2>
      <p>When you work out that a $60,000 salary is $28.85 an hour, remember: that's your <strong>gross hourly equivalent</strong>. It's not what actually lands in your bank account on payday.</p>

      <p>Before payday, a few things come out of that gross pay:</p>
      <ul>
        <li><strong>Federal Income Tax:</strong> Taxed in progressive brackets from 10% to 37%, depending on your filing status and taxable income.</li>
        <li><strong>State and Local Income Taxes:</strong> From 0% in states with no income tax (like Texas, Florida, and Washington) to over 10% in states like California and New York.</li>
        <li><strong>FICA Taxes:</strong> Federal payroll taxes: 6.2% for Social Security (up to the annual wage cap) and 1.45% for Medicare.</li>
        <li><strong>Pre-Tax Deductions:</strong> Health, dental, and vision insurance premiums, Health Savings Accounts (HSA), Flexible Spending Accounts (FSA), and traditional 401(k) or 403(b) retirement contributions.</li>
        <li><strong>Post-Tax Deductions:</strong> Roth 401(k) contributions, union dues, disability insurance, or wage garnishments.</li>
      </ul>

      <div class="study-note-card">
        <div class="study-note-header">
          <span class="study-note-badge">Take-Home Reality</span>
          <span style="font-size:0.8rem;color:#92400e;font-weight:600">Gross vs. Net Breakdown</span>
        </div>
        <div class="study-note-body">
          <p style="margin:0;font-size:0.95rem;line-height:1.6;color:#78350f">On a $60,000 salary ($28.85 gross an hour), someone with average federal and state taxes and modest health costs usually takes home about <strong>$21.50 to $23.20 per hour</strong> net. To run your own gross pay with your deductions, try our <a href="/paycheck-calculator/">Paycheck Calculator</a> (gross-pay estimates only; it does not calculate tax withholdings).</p>
        </div>
      </div>

      <!-- Section: Job Offer Comparison -->
      <h2 id="salary-vs-hourly">Salary vs. Hourly Pay: Real-World Offer Comparison</h2>
      <p>This is where knowing your hourly rate really pays off. A bigger headline salary doesn't always mean more pay for your time. We run the numbers on both models in <a href="/articles/hourly-vs-salary-which-pays-more/">our worked comparison of a $32 hourly rate versus a $65,000 salary</a>, after taxes as well as before.</p>

      <div class="job-comparison-card">
        <div class="job-card-col">
          <span class="job-badge">Offer A: Higher Headline Salary</span>
          <h3>Corporate Salaried Position</h3>
          <div class="job-stat">
            <span>Stated Annual Salary:</span>
            <strong>$60,000.00 / year</strong>
          </div>
          <div class="job-stat">
            <span>Expected Weekly Hours:</span>
            <strong>40 hours / week</strong>
          </div>
          <div class="job-stat">
            <span>Paid Weeks:</span>
            <strong>52 weeks (with PTO)</strong>
          </div>
          <div class="job-stat">
            <span>Annual Working Hours:</span>
            <strong>2,080 hours</strong>
          </div>
          <div class="job-result">
            <span>Effective Hourly Equivalent:</span>
            <strong>$28.85 / hour</strong>
          </div>
        </div>

        <div class="job-card-col highlight">
          <span class="job-badge" style="background:#dcfce7;color:#15803d;border-color:#bbf7d0">Offer B: Higher Hourly Value</span>
          <h3>Flexible Professional Position</h3>
          <div class="job-stat">
            <span>Stated Annual Salary:</span>
            <strong>$55,000.00 / year</strong>
          </div>
          <div class="job-stat">
            <span>Expected Weekly Hours:</span>
            <strong>35 hours / week</strong>
          </div>
          <div class="job-stat">
            <span>Paid Weeks:</span>
            <strong>52 weeks (with PTO)</strong>
          </div>
          <div class="job-stat">
            <span>Annual Working Hours:</span>
            <strong>1,820 hours</strong>
          </div>
          <div class="job-result" style="background:#16a34a;color:#ffffff">
            <span style="color:#dcfce7">Effective Hourly Equivalent:</span>
            <strong style="color:#ffffff">$30.22 / hour</strong>
          </div>
        </div>
      </div>

      <!-- Job Comparison Image -->
      <div class="featured-image-wrap" style="margin:28px 0">
        <img src="/assets/images/salary-job-offer-hourly-rate-comparison.jpg" alt="Comparing salary offers by effective hourly rate" class="featured-image" width="1280" height="720" loading="lazy">
      </div>

      <p>Offer A pays the higher salary ($60,000 vs. $55,000), but <strong>Offer B actually pays more per hour of your life</strong> ($30.22 vs. $28.85 an hour) because it asks for 260 fewer working hours a year. Those 260 hours are more than six full weeks of your time back — for family, freelancing, study, or rest.</p>

      <p>When you compare offers, look at the whole package, not just the salary:</p>
      <ul>
        <li><strong>Health & Retirement Benefits:</strong> Full premium coverage plus a 6% 401(k) match can easily add $8,000 to $12,000 a year in value.</li>
        <li><strong>Paid Time Off (PTO):</strong> Four weeks of PTO instead of two is a real difference in how many hours you actually work.</li>
        <li><strong>Commute Time & Costs:</strong> A remote job saves 5 to 10 hours of unpaid commuting every week, plus thousands of dollars in gas, transit, and car wear. Compare total committed time with our <a href="/calculators/salary-comparison/">Salary Comparison Calculator</a>.</li>
      </ul>

      <!-- Section: Common Mistakes -->
      <h2 id="common-mistakes">Common Salary-to-Hourly Calculation Mistakes</h2>
      <p>Here are six mistakes people make all the time when they convert a salary to an hourly rate:</p>

      <div class="mistake-list">
        <div class="mistake-item">
          <div class="mistake-num">1</div>
          <div class="mistake-content">
            <h3>Automatically Assuming Everyone Works 2,080 Hours</h3>
            <p>2,080 is the standard baseline, but don't just use it blindly if your job asks for 35, 45, or 50 hours a week. Divide by your real hours, or your hourly rate will be wrong.</p>
          </div>
        </div>
        <div class="mistake-item">
          <div class="mistake-num">2</div>
          <div class="mistake-content">
            <h3>Confusing Paid Time Off With Unpaid Time Off</h3>
            <p>Don't subtract paid vacation, holidays, or sick leave from your annual hours. Paid time off is already part of your salary. Only unpaid weeks come off.</p>
          </div>
        </div>
        <div class="mistake-item">
          <div class="mistake-num">3</div>
          <div class="mistake-content">
            <h3>Treating Gross Hourly Pay as Take-Home Pay</h3>
            <p>Gross hourly pay doesn't account for taxes, Social Security, Medicare, or insurance. Expect your take-home rate to land 20% to 30% below your gross figure.</p>
          </div>
        </div>
        <div class="mistake-item">
          <div class="mistake-num">4</div>
          <div class="mistake-content">
            <h3>Ignoring Uncompensated Salaried Overtime</h3>
            <p>If you're an exempt salaried worker regularly putting in 50-hour weeks with no overtime pay, your real hourly rate is 20% lower than the 40-hour figure. Work it out from your actual hours.</p>
          </div>
        </div>
        <div class="mistake-item">
          <div class="mistake-num">5</div>
          <div class="mistake-content">
            <h3>Overlooking Overtime Eligibility Rules</h3>
            <p>Plenty of salaried workers assume a salary means no overtime, full stop. If your job duties don't meet the executive or professional exemption rules under the FLSA, you're owed 1.5× overtime pay.</p>
          </div>
        </div>
        <div class="mistake-item">
          <div class="mistake-num">6</div>
          <div class="mistake-content">
            <h3>Evaluating Base Salary in Complete Isolation</h3>
            <p>Health insurance, retirement matches, bonuses, and commute costs all count. Total compensation tells you more than base salary on its own.</p>
          </div>
        </div>
      </div>

      <!-- Section: Calculator CTA -->
      <div class="article-cta-card" id="calculator-cta">
        <div class="article-cta-badge">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2m4 0h2M8 15h2m4 0h2M8 18h2m4 0h2"/></svg>
          <span>Free Interactive Wage Utility</span>
        </div>
        <h3 class="article-cta-title">Find Your Exact Hourly Rate in Seconds</h3>
        <p class="article-cta-desc">Skip the scratch paper. Enter your annual salary, set your weekly hours, and see your hourly, weekly, biweekly, and monthly gross pay right away.</p>
        <div class="article-cta-actions">
          <a href="/salary-to-hourly-calculator/" class="cta-primary">
            <span>Calculate Salary → Hourly Rate</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>
          </a>
          <a href="/articles/how-to-convert-hourly-pay-to-annual-salary/" class="cta-secondary">
            <span>Want the reverse? Convert Hourly Pay to Salary</span>
          </a>
        </div>
      </div>

      <!-- Section: How to Use the Calculator -->
      <h2 id="how-to-use">How to Use the Calculator</h2>
      <p>Run your own salary through the same math in four steps:</p>
      <ol>
        <li><strong>Step 1 — Enter your annual salary</strong> (the $60,000 example from this guide, or your own offer) into the salary-to-hourly calculator.</li>
        <li><strong>Step 2 — Set your real schedule:</strong> hours per week and paid weeks per year. The standard defaults are 40 hours and 52 weeks — 2,080 hours.</li>
        <li><strong>Step 3 — Read the full result:</strong> the panel shows your hourly rate next to the weekly, biweekly, and monthly equivalents, so you can compare offers in any unit.</li>
        <li><strong>Step 4 — Stress-test the workweek:</strong> rerun the same salary at 45 or 50 hours a week to see the effective rate your job actually pays per hour worked.</li>
      </ol>
      <p><a class="btn" href="/salary-to-hourly-calculator/">Run my numbers</a></p>

      <!-- Section: Limitations -->
      <h2 id="limitations">Limitations</h2>
      <ol>
        <li><strong>Gross salary only:</strong> the conversion starts from gross pay. Taxes, 401(k) contributions, and health premiums change your take-home — not the gross hourly equivalent calculated here.</li>
        <li><strong>Hours paid vs. hours worked:</strong> dividing by 2,080 gives your rate per paid hour. If you regularly work unpaid extra hours, your rate per hour actually worked is lower.</li>
        <li><strong>Salaried overtime rarely pays:</strong> most salaried roles are exempt, so hours past 40 add no pay. A conversion cannot capture comp time, bonuses, or on-call expectations built into an offer.</li>
        <li><strong>Leave moves the rate both ways:</strong> paid vacation raises your rate per hour worked, because the same salary covers fewer worked hours; unpaid leave lowers your effective annual pay below the stated salary.</li>
        <li><strong>One salary, one point in time:</strong> mid-year raises, signing bonuses, and commission sit outside a base-salary conversion and must be weighed separately. A <a href="/calculators/salary-increase/">salary increase calculator</a> shows what a mid-year raise adds across the rest of the year.</li>
        <li><strong>A comparison tool, not the whole offer:</strong> use the hourly figure to compare offers on equal footing — benefits, schedule control, and job security still decide which offer is really better.</li>
      </ol>

      <!-- Section: FAQs -->
      <h2 id="faqs">Frequently Asked Questions</h2>
      <p>Here are straight answers to the questions people ask most about turning a salary into an hourly rate:</p>

      <div class="faq-list">
        <details>
          <summary>How do I calculate my hourly rate from annual salary?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>Divide your annual gross salary by the hours you work in a year. If you're full-time at 40 hours a week for 52 weeks, that's 2,080 hours, so you just divide your salary by 2,080. A $60,000 salary works out to about $28.85 an hour before taxes and deductions.</p>
        </details>
        <details>
          <summary>What is $50,000 a year per hour?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>$50,000 a year comes to about $24.04 an hour on the standard full-time schedule of 2,080 hours a year (40 hours a week × 52 weeks). That's roughly $961.54 a week gross, or $1,923.08 every two weeks across 26 paychecks. If you work 35 hours a week instead (1,820 hours a year), the same $50,000 is worth $27.47 an hour.</p>
        </details>
        <details>
          <summary>What is $60,000 a year per hour?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>On a standard 40-hour week and 52 paid weeks a year (2,080 hours), $60,000 a year is about $28.85 an hour. That works out to $1,153.85 a week, $2,307.69 every two weeks, and $5,000 a month on average, all before payroll deductions. If your job expects 45 hours a week (2,340 hours), your real rate drops to $25.64 an hour.</p>
        </details>
        <details>
          <summary>What is $75,000 a year per hour?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>$75,000 a year is about $36.06 an hour on the standard 2,080-hour full-time schedule (40 hours a week for 52 weeks). That's $1,442.31 a week, $2,884.62 every two weeks across 26 pay periods, and $6,250.00 gross a month before federal, state, and local taxes.</p>
        </details>
        <details>
          <summary>What is $100,000 a year per hour?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>$100,000 a year is about $48.08 an hour if you work 40 hours a week across 52 weeks (2,080 hours). That's $1,923.08 a week gross, $3,846.15 every two weeks, and $8,333.33 a month before taxes and deductions. Work 50 hours a week instead (2,600 hours), and that same six-figure salary is worth $38.46 an hour.</p>
        </details>
        <details>
          <summary>Does PTO affect my hourly rate?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>Paid time off — vacation days, paid holidays, paid sick leave — doesn't cut your gross salary or your standard hourly rate, because you still get your full regular pay while you're away. Unpaid time off is a different story: take 2 unpaid weeks and work 50 weeks instead of 52 (2,000 hours), and your rate while you're actually working rises to $30.00 an hour on a $60,000 salary ($60,000 ÷ 2,000).</p>
        </details>
        <details>
          <summary>Is salary-to-hourly based on gross or net income?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>Salary-to-hourly math always works from gross pay, before taxes and deductions. Your take-home hourly rate will be lower once federal income tax, state and local taxes, Social Security (6.2%), Medicare (1.45%), health insurance premiums, and 401(k) contributions come out of each paycheck.</p>
        </details>
        <details>
          <summary>What if I work more than 40 hours a week?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>If you're an exempt salaried employee regularly working 45 or 50 hours a week with no extra pay, your real hourly rate falls, because you're splitting the same fixed salary across more hours. If you're non-exempt under the Fair Labor Standards Act (FLSA), you're legally owed 1.5 times your regular rate for every hour past 40 in a workweek.</p>
        </details>
        <details>
          <summary>How do I convert a monthly salary to an hourly rate?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>To turn a monthly salary into an hourly rate, first multiply it by 12 to get your annual salary, then divide by your annual hours (usually 2,080 for full-time work). Or skip a step and divide your monthly salary by the average hours in a month — about 173.33 hours for a 40-hour week. A $5,000 monthly salary ($60,000 a year) divided by 173.33 hours is $28.85 an hour.</p>
        </details>
        <details>
          <summary>How do I convert a biweekly salary to an hourly rate?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>Divide your gross biweekly paycheck by the hours in that pay period — usually 80 hours for a standard full-time two-week schedule. A biweekly paycheck of $2,307.69 divided by 80 hours is about $28.85 an hour.</p>
        </details>
      </div>

      <!-- Section: Key Takeaways -->
      <h2 id="key-takeaways">Key Takeaways</h2>
      <div class="takeaways-card">
        <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z"/><path d="m8 12 3 3 5-5"/></svg> Core Summary Points</h3>
        <ul class="takeaways-list">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>Divide Salary by Annual Hours:</strong> Your gross hourly rate is your annual salary divided by the hours you're scheduled to work in a year.</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>The 2,080 Benchmark:</strong> A standard full-time schedule of 40 hours a week across 52 weeks adds up to 2,080 hours a year ($60,000 ÷ 2,080 = $28.85/hr).</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>Work Hours Determine Real Value:</strong> On a fixed salary, working 45 or 50 hours a week cuts your real hourly rate.</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>PTO Is Included:</strong> Paid time off is part of your salary, so don't subtract paid vacation when you work out your standard hourly rate.</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>Evaluate Total Compensation:</strong> When you compare offers, work out the real hourly rate and weigh benefits, commute, and flexibility next to base salary.</span>
          </li>
        </ul>
      </div>

      <!-- Calculation Methodology Box (E-E-A-T Transparency) -->
      <div class="methodology-box">
        <h3>How We Calculate Hourly Rates</h3>
        <p>Our salary-to-hourly calculation divides annual gross salary by total scheduled hours for the year. For full-time work, the benchmark is 40 hours a week over 52 weeks (2,080 hours a year). You can adjust weekly hours, paid weeks, and overtime to match a schedule that's different from the standard. All results are gross earnings, before taxes and withholdings. For the full payroll math and rounding rules, see our <a href="/methodology/">Calculation Methodology</a>.</p>
      </div>
      <h2>3 Things to Remember</h2>
      <ol>
        <li>The standard full-time benchmark is 40 hours a week × 52 weeks = 2,080 hours.</li>
        <li>Longer weeks lower your effective rate — that same $60,000 salary at 45 hours a week (2,340 hours) is $25.64 an hour.</li>
        <li>Paid time off is part of your salary — do not subtract paid vacation when finding your standard hourly rate.</li>
      </ol>
  `
};

export { article2 };

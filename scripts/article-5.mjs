import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const article5 = {
  slug: 'how-much-is-23-an-hour-a-year',
  breadcrumb: '$23 an Hour a Year',
  category: 'Hourly Wage Guides',
  minutes: 14,
  datePublished: '2026-10-14',
  dateModified: '2026-10-17',
  title: '$23 an Hour Is $47,840 a Year',
  h1: 'How Much Is $23 an Hour a Year? Full Pay & Budget Breakdown',
  desc: 'See how much $23 an hour is a year ($47,840 gross): biweekly paycheck math, 2026 federal and FICA taxes, overtime to $56,810, and a realistic take-home budget.',
  image: '/assets/images/how-much-is-23-an-hour-a-year.jpg',
  imageAlt: 'Breakdown of $23 an hour annual salary showing $47,840 gross pay, 2026 taxes, and monthly take-home pay',
  toc: [
    ['quick-answer', '$23 an Hour at a Glance: The Quick Answer'],
    ['national-context', 'Where Does $23 an Hour Put You in the US Workforce?'],
    ['pay-period-breakdown', 'The Exact Math: How $23 an Hour Converts Across Every Pay Period'],
    ['unpaid-time-off', 'How Unpaid Time Off Changes Your Annual Earnings'],
    ['overtime-impact', 'Overtime Math: Pushing $23/Hour Past $56,000 to $65,000'],
    ['part-time-scenarios', 'Part-Time Schedules at $23 an Hour (20, 25, 30 & 35 Hours)'],
    ['taxes-and-take-home', 'How Much Is $23 an Hour After 2026 Taxes? (Take-Home Breakdown)'],
    ['monthly-budget', 'A Realistic 50/30/20 Monthly Budget on $23 an Hour'],
    ['common-mistakes', 'Common Budgeting & Paycheck Math Mistakes on $23/Hour'],
    ['how-to-use', 'How to Use the Calculator'],
    ['limitations', 'Limitations'],
    ['faqs', 'Frequently Asked Questions About $23 an Hour'],
    ['key-takeaways', 'Key Takeaways & Next Steps']
  ],
  faqs: [
    [
      'How much is $23 an hour a year?',
      'Work full-time, 40 hours a week for 52 paid weeks (2,080 hours), and $23 an hour comes to $47,840 a year gross, before taxes and deductions. Take 2 weeks of unpaid vacation (50 paid weeks) and it drops to $46,000.'
    ],
    [
      'How much is $23 an hour per month?',
      'At 40 hours a week, $23 an hour averages $3,986.67 a month before taxes ($47,840 divided by 12). A common slip is multiplying your $920 weekly pay by 4 to get $3,680. That undercounts your year by $3,680, because calendar months average 4.33 weeks, not 4.'
    ],
    [
      'How much is $23 an hour on a biweekly paycheck?',
      'On a biweekly schedule (every two weeks, 26 paychecks a year), $23 an hour pays $1,840.00 gross for 80 hours ($23 × 80). After 2026 federal income tax and FICA (7.65%), a single filer taking the standard deduction in a state with no income tax takes home about $1,562 per paycheck.'
    ],
    [
      'How much is $23 an hour after taxes?',
      'For a single filer taking the 2026 standard deduction ($16,100), federal income tax is $3,560.80 and FICA (Social Security and Medicare) is $3,659.76. In states with no income tax, like Texas or Florida, take-home pay is about $40,619.44 a year (~$3,385/month). In states with moderate income tax (~4.5%), it\'s about $38,466 (~$3,205/month). In higher-tax states (~6%), it\'s roughly $37,749 (~$3,146/month).'
    ],
    [
      'What is the overtime rate for $23 an hour?',
      'Under the Fair Labor Standards Act (FLSA), time-and-a-half is 1.5 times your regular rate. At $23 an hour, your overtime rate is $34.50 ($23 × 1.5). Five hours of overtime a week adds $172.50 in weekly gross pay ($8,970 over 52 weeks), lifting your total gross pay to $56,810.00 a year.'
    ],
    [
      'How much is $23 an hour working part-time?',
      'It depends on your hours, at the same $23 rate. At 20 hours a week you earn $460 a week, or $23,920 a year (52 weeks). At 25 hours, it\'s $575 a week or $29,900 a year. At 30 hours, $690 a week or $35,880 a year. At 35 hours, $805 a week or $41,860 a year. Those are gross figures before taxes. Part-time roles can also come with fewer benefits than full-time ones, so compare the whole offer, not just the hourly rate.'
    ]
  ],
  body: `
      <div class="methodology-box">
        <h3>Quick Answer</h3>
        <p>$23 an hour is $47,840 a year gross on a standard full-time schedule. That's $920 a week and $3,986.67 a month before taxes.</p>
      </div>

      <p class="lead">Got a job offer at <strong>$23.00 an hour</strong>? The first questions are obvious: <em>what does that add up to over a year, what actually lands in your bank account, and can you live on it?</em> At $23 an hour you're earning more than three times the <a href="/articles/minimum-wage-by-state/">federal minimum wage</a>, and your gross pay hits $47,840 a year, close to $50,000. But the headline number isn't the whole story. What you take home, and what it covers, is what matters.</p>

      <p>Building pay tools here, the mix-up we see most is gross pay versus take-home pay. Schedules, unpaid holidays, payroll taxes, and local rent can make the same $23 rate feel very different from one person to the next. A full-time worker with paid time off lives a different financial life than a contractor taking unpaid weeks between jobs.</p>

      <p>This guide runs the numbers for $23 an hour across every pay period, shows what unpaid leave and overtime do to your year, breaks down 2026 federal and state taxes, and builds a realistic monthly budget for a $47,840 income.</p>

      <!-- Above the Fold Interactive Tool CTA -->
      <div class="article-hero-cta">
        <div class="hero-cta-content">
          <span class="hero-cta-badge">Interactive Wage Utility</span>
          <h2 class="hero-cta-title">Calculate Your Exact $23/Hour Pay</h2>
          <p class="hero-cta-desc">Try your own schedule, factor in unpaid leave, and see your gross pay across all seven pay cycles with our free converter.</p>
        </div>
        <a href="/?amount=23" class="calculate-button hero-cta-btn">Calculate $23 an Hour Pay</a>
      </div>

      <!-- Section 1: Quick Answer -->
      <h2 id="quick-answer">$23 an Hour at a Glance: The Quick Answer</h2>
      <p>On a standard full-time schedule, <strong>40 hours per week</strong> for all <strong>52 weeks of the year</strong> (2,080 working hours), <strong>$23 an hour equals $47,840.00 per year</strong> gross, before taxes and benefit deductions.</p>

      <p>Here's what that $47,840 looks like at the usual pay frequencies, before anything is withheld:</p>

      <div class="cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:24px 0">
        <div class="card" style="padding:20px;border:1px solid var(--border-color);border-radius:12px;background:#fff;text-align:center">
          <span style="font-size:0.8rem;text-transform:uppercase;color:var(--muted);font-weight:700;letter-spacing:0.04em">Annual Gross</span>
          <div style="font-size:1.6rem;font-weight:800;color:var(--ink);margin:6px 0">$47,840.00</div>
          <span style="font-size:0.84rem;color:var(--muted)">2,080 working hours</span>
        </div>

        <div class="card" style="padding:20px;border:1px solid var(--border-color);border-radius:12px;background:#fff;text-align:center">
          <span style="font-size:0.8rem;text-transform:uppercase;color:var(--muted);font-weight:700;letter-spacing:0.04em">Monthly Average</span>
          <div style="font-size:1.6rem;font-weight:800;color:var(--primary);margin:6px 0">$3,986.67</div>
          <span style="font-size:0.84rem;color:var(--muted)">Annual ÷ 12 calendar months</span>
        </div>

        <div class="card" style="padding:20px;border:1px solid var(--border-color);border-radius:12px;background:#fff;text-align:center">
          <span style="font-size:0.8rem;text-transform:uppercase;color:var(--muted);font-weight:700;letter-spacing:0.04em">Biweekly Check</span>
          <div style="font-size:1.6rem;font-weight:800;color:var(--ink);margin:6px 0">$1,840.00</div>
          <span style="font-size:0.84rem;color:var(--muted)">80 hours (26 checks/year)</span>
        </div>

        <div class="card" style="padding:20px;border:1px solid var(--border-color);border-radius:12px;background:#fff;text-align:center">
          <span style="font-size:0.8rem;text-transform:uppercase;color:var(--muted);font-weight:700;letter-spacing:0.04em">Weekly Pay</span>
          <div style="font-size:1.6rem;font-weight:800;color:var(--primary);margin:6px 0">$920.00</div>
          <span style="font-size:0.84rem;color:var(--muted)">40 regular hours</span>
        </div>
      </div>

      <!-- Section 2: National Context -->
      <h2 id="national-context">Where Does $23 an Hour Put You in the US Workforce?</h2>
      <p>The U.S. Bureau of Labor Statistics (BLS) and the U.S. Census Bureau put the national median wage for full-time workers somewhere between $48,000 and $50,000 a year. At <strong>$47,840 per year</strong>, $23 an hour puts you right in the middle of the American workforce.</p>

      <p>What $23 an hour buys depends a lot on where you live:</p>
      <ul>
        <li><strong>Low-to-Mid Cost of Living Areas (e.g., Indiana, Ohio, Missouri, Oklahoma):</strong> $47,840 a year goes a long way here. One person can rent an apartment, keep a car on the road, cover groceries, and still put money into emergency savings.</li>
        <li><strong>High Cost of Living Metros (e.g., Los Angeles, Seattle, Boston, New York City):</strong> Housing eats into a $47,840 salary fast. In these cities, splitting rent with a roommate or partner is often the only way to keep housing under 40% of your income.</li>
      </ul>

      <!-- Section 3: Exact Math Breakdown -->
      <h2 id="pay-period-breakdown">The Exact Math: How $23 an Hour Converts Across Every Pay Period</h2>
      <p>Payroll works off a standard baseline: a 40-hour week across 52 weeks gives you <strong>2,080 scheduled hours a year</strong>.</p>

      <div class="formula-card">
        <div class="formula">Annual Gross = Hourly Wage × Weekly Hours × Paid Weeks</div>
        <p class="example">Calculation: $23.00 × 40 hours × 52 weeks = $47,840.00 gross annual income</p>
      </div>

      <div class="table-wrap">
        <table class="pay-table text-col-2 desc-last">
          <thead>
            <tr>
              <th scope="col">Pay Period</th>
              <th scope="col">Calculation Formula</th>
              <th scope="col">Gross Amount</th>
              <th scope="col">Payroll Frequency Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr class="featured">
              <td><strong>Hourly Rate</strong></td>
              <td>Base contracted wage</td>
              <td><strong>$23.00</strong></td>
              <td>Straight-time rate per hour</td>
            </tr>
            <tr>
              <td><strong>Daily (8 Hours)</strong></td>
              <td>$23.00 × 8 hours</td>
              <td>$184.00</td>
              <td>Standard full-time day</td>
            </tr>
            <tr>
              <td><strong>Weekly</strong></td>
              <td>$23.00 × 40 hours</td>
              <td>$920.00</td>
              <td>52 pay periods per year</td>
            </tr>
            <tr class="featured">
              <td><strong>Biweekly</strong></td>
              <td>$23.00 × 80 hours (or $47,840 ÷ 26)</td>
              <td><strong>$1,840.00</strong></td>
              <td>Paid every two weeks (26 checks/year)</td>
            </tr>
            <tr>
              <td><strong>Semi-Monthly</strong></td>
              <td>$47,840.00 ÷ 24</td>
              <td>$1,993.33</td>
              <td>Paid twice per month (24 checks/year)</td>
            </tr>
            <tr class="featured">
              <td><strong>Monthly Average</strong></td>
              <td>$47,840.00 ÷ 12</td>
              <td><strong>$3,986.67</strong></td>
              <td>Derived from annual (not weekly × 4)</td>
            </tr>
            <tr>
              <td><strong>Quarterly</strong></td>
              <td>$47,840.00 ÷ 4</td>
              <td>$11,960.00</td>
              <td>4 quarters per calendar year</td>
            </tr>
            <tr class="featured">
              <td><strong>Annual Total</strong></td>
              <td>$23.00 × 2,080 hours</td>
              <td><strong>$47,840.00</strong></td>
              <td>Full-time working year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure><img src="/assets/images/ui-card-23hr-annual-breakdown.webp" alt="3D financial desk graphic showing gross annual salary of $47,840 compared to net take-home pay for $23 an hour" width="800" height="450" loading="lazy"><figcaption>Gross annual salary ($47,840) versus estimated net take-home pay (~$40,619) for $23/hr full-time employment.</figcaption></figure>

      <p>To see how nearby rates compare, check our breakdowns of <a href="/hourly/25-an-hour/">$25 an hour</a> and <a href="/hourly/20-an-hour/">$20 an hour</a>, or read the full <a href="/articles/how-much-is-20-an-hour-a-year/">guide to what $20 an hour pays in a year</a> for the budget math three dollars down.</p>

      <!-- Section 4: Unpaid Time Off -->
      <h2 id="unpaid-time-off">How Unpaid Time Off Changes Your Annual Earnings</h2>
      <p>The $47,840 figure assumes 52 fully paid weeks. If your job includes paid time off (PTO), paid vacation, and paid federal holidays, you get paid for all 52 weeks no matter which days you take off. Your gross pay stays at $47,840.</p>

      <p>But if your employer doesn't offer paid leave, or you take unpaid time off for travel, personal reasons, or a shutdown, every unpaid week cuts your annual pay by 40 hours of wages ($920.00 gross):</p>

      <div class="calendar-compare-grid">
        <div class="calendar-compare-card">
          <h3>52 Paid Weeks (Includes PTO)</h3>
          <p style="margin: 0 0 6px; font-size: 0.9rem; color: #64748b;">40 hours/week · 0 unpaid weeks</p>
          <div class="stat">$47,840.00 <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">gross / year</span></div>
          <p style="margin: 8px 0 0; font-size: 0.86rem; color: #16a34a;">Standard baseline compensation</p>
        </div>
        <div class="calendar-compare-card diff">
          <h3>50 Paid Weeks (2 Unpaid Weeks Off)</h3>
          <p style="margin: 0 0 6px; font-size: 0.9rem; color: #64748b;">40 hours/week · 2 weeks unpaid leave</p>
          <div class="stat">$46,000.00 <span style="font-size: 0.85rem; font-weight: 500; color: #64748b;">gross / year</span></div>
          <p style="margin: 8px 0 0; font-size: 0.86rem; color: #b45309;">-$1,840.00 reduction in annual earnings</p>
        </div>
      </div>

      <p>Just two unpaid weeks drops your paid hours to 2,000 a year and your gross pay to <strong>$46,000.00</strong>. Four weeks of unpaid leave takes it down to <strong>$44,160.00</strong>. So when a job offer has no PTO, factor that into the yearly number before you compare it to anything else.</p>

      <!-- Section 5: Overtime Impact -->
      <h2 id="overtime-impact">Overtime Math: Pushing $23/Hour Past $56,000 to $65,000</h2>
      <p>Under the Fair Labor Standards Act (FLSA), non-exempt employees who work more than 40 hours in a week must get overtime pay of at least <strong>1.5 times their regular rate (time-and-a-half)</strong>.</p>

      <div class="formula-card">
        <div class="formula">Overtime Hourly Rate = Base Wage × 1.5 = $23.00 × 1.5 = $34.50 / hour</div>
        <p class="example">Every hour worked past 40 adds $34.50 straight to your gross paycheck.</p>
      </div>

      <p>At $34.50 an hour, regular overtime adds up fast:</p>

      <div class="table-wrap">
        <table class="pay-table">
          <thead>
            <tr>
              <th scope="col">Weekly Schedule</th>
              <th scope="col">Regular Weekly Pay</th>
              <th scope="col">Overtime Weekly Pay</th>
              <th scope="col">Total Weekly Gross</th>
              <th scope="col">Annual Gross (52 Weeks)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>40 Hours (0 OT)</strong></td>
              <td>$920.00</td>
              <td>$0.00</td>
              <td>$920.00</td>
              <td><strong>$47,840.00</strong></td>
            </tr>
            <tr class="featured">
              <td><strong>45 Hours (5 hrs OT)</strong></td>
              <td>$920.00</td>
              <td>+$172.50</td>
              <td>$1,092.50</td>
              <td><strong>$56,810.00</strong></td>
            </tr>
            <tr>
              <td><strong>48 Hours (8 hrs OT)</strong></td>
              <td>$920.00</td>
              <td>+$276.00</td>
              <td>$1,196.00</td>
              <td><strong>$62,192.00</strong></td>
            </tr>
            <tr class="featured">
              <td><strong>50 Hours (10 hrs OT)</strong></td>
              <td>$920.00</td>
              <td>+$345.00</td>
              <td>$1,265.00</td>
              <td><strong>$65,780.00</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Five hours of overtime a week adds $172.50 a week. That's an extra <strong>$8,970.00 a year</strong>, lifting your gross pay to <strong>$56,810.00</strong>. Ten hours a week adds <strong>$17,940.00 a year</strong>, pushing your gross pay to <strong>$65,780.00</strong>. To try out different shift patterns and weekend rates, use our <a href="/overtime-calculator/">Overtime Calculator</a> and read our guide on <a href="/articles/how-to-calculate-pay-with-overtime-calculator/">how to calculate pay with an overtime calculator</a>.</p>

      <!-- Section 6: Part-Time Schedules -->
      <h2 id="part-time-scenarios">Part-Time Schedules at $23 an Hour (20, 25, 30 & 35 Hours)</h2>
      <p>Not everyone on $23 an hour works 40 hours a week. For students, parents, and second earners working part-time, here's how $23 an hour adds up over 52 paid weeks:</p>

      <div class="table-wrap">
        <table class="pay-table text-col-2">
          <thead>
            <tr>
              <th scope="col">Weekly Hours</th>
              <th scope="col">Schedule Description</th>
              <th scope="col">Weekly Gross</th>
              <th scope="col">Monthly Average</th>
              <th scope="col">Annual Gross Pay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>20 Hours / Week</strong></td>
              <td>Half-Time Schedule (1,040 hrs/yr)</td>
              <td>$460.00</td>
              <td>$1,993.33</td>
              <td>$23,920.00</td>
            </tr>
            <tr>
              <td><strong>25 Hours / Week</strong></td>
              <td>Light Part-Time (1,300 hrs/yr)</td>
              <td>$575.00</td>
              <td>$2,491.67</td>
              <td>$29,900.00</td>
            </tr>
            <tr>
              <td><strong>30 Hours / Week</strong></td>
              <td>Substantial Part-Time (1,560 hrs/yr)</td>
              <td>$690.00</td>
              <td>$2,990.00</td>
              <td>$35,880.00</td>
            </tr>
            <tr>
              <td><strong>35 Hours / Week</strong></td>
              <td>Compressed Workweek (1,820 hrs/yr)</td>
              <td>$805.00</td>
              <td>$3,488.33</td>
              <td>$41,860.00</td>
            </tr>
            <tr class="featured">
              <td><strong>40 Hours / Week</strong></td>
              <td>Standard Full-Time (2,080 hrs/yr)</td>
              <td>$920.00</td>
              <td>$3,986.67</td>
              <td>$47,840.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Section 7: Taxes & Take-Home Pay -->
      <h2 id="taxes-and-take-home">How Much Is $23 an Hour After 2026 Taxes? (Take-Home Breakdown)</h2>
      <p>Gross pay is what you earn on paper. Take-home pay is what hits your bank account. To work out realistic take-home pay on $47,840, we use the 2026 federal tax brackets, FICA payroll taxes, and typical state tax rates for a <strong>single filer taking the standard deduction</strong>.</p>

      <h3>1. Mandatory 2026 Federal Tax & FICA Breakdown</h3>
      <ul>
        <li><strong>Gross Annual Salary:</strong> $47,840.00</li>
        <li><strong>2026 Standard Deduction (Single Filer):</strong> $16,100.00</li>
        <li><strong>Taxable Income:</strong> $47,840.00 − $16,100.00 = <strong>$31,740.00</strong></li>
        <li><strong>2026 Federal Income Tax Calculation:</strong>
          <ul>
            <li>10% on the first $12,400.00 = $1,240.00</li>
            <li>12% on the remaining $19,340.00 ($31,740 − $12,400) = $2,320.80</li>
            <li><strong>Total Federal Income Tax:</strong> $1,240.00 + $2,320.80 = <strong>$3,560.80</strong> (Effective federal tax rate: ~7.44%)</li>
          </ul>
        </li>
        <li><strong>Mandatory FICA Payroll Taxes (7.65% on full gross):</strong>
          <ul>
            <li>Social Security (6.2%): $47,840.00 × 6.2% = $2,966.08</li>
            <li>Medicare (1.45%): $47,840.00 × 1.45% = $693.68</li>
            <li><strong>Total FICA Withholdings:</strong> <strong>$3,659.76</strong></li>
          </ul>
        </li>
        <li><strong>Total Mandatory Federal Withholdings (Income Tax + FICA):</strong> $3,560.80 + $3,659.76 = <strong>$7,220.56</strong></li>
      </ul>

      <figure><img src="/assets/images/ui-table-23hr-paycheck-taxes.webp" alt="Photorealistic clipboard breakdown showing 2026 biweekly paycheck tax withholdings for a $23 hourly wage" width="800" height="450" loading="lazy"><figcaption>Biweekly paycheck tax deductions and net take-home pay based on 2026 IRS tax brackets.</figcaption></figure>

      <h3>2. State Tax Variations & Net Take-Home Pay</h3>
      <p>State income tax is what makes the same paycheck look different from one state to another. Here's how annual and monthly take-home pay shakes out in three typical state tax situations:</p>

      <div class="table-wrap">
        <table class="pay-table text-col-2">
          <thead>
            <tr>
              <th scope="col">State Tax Tier</th>
              <th scope="col">Representative States</th>
              <th scope="col">Annual Net Pay</th>
              <th scope="col">Monthly Net</th>
              <th scope="col">Biweekly Net Check</th>
            </tr>
          </thead>
          <tbody>
            <tr class="featured">
              <td><strong>No State Income Tax (0%)</strong></td>
              <td>Texas, Florida, Washington, Tennessee, Nevada, Wyoming, Alaska, South Dakota</td>
              <td><strong>~$40,619.44</strong></td>
              <td><strong>~$3,385.00</strong></td>
              <td><strong>~$1,562.00</strong></td>
            </tr>
            <tr>
              <td><strong>Moderate State Tax (~4.5%)</strong></td>
              <td>Illinois, Pennsylvania, North Carolina, Arizona, Indiana, Michigan, Ohio</td>
              <td><strong>~$38,466.00</strong></td>
              <td><strong>~$3,205.00</strong></td>
              <td><strong>~$1,479.00</strong></td>
            </tr>
            <tr>
              <td><strong>Higher State Tax (~6%)</strong></td>
              <td>California, New York, New Jersey, Oregon, Minnesota, Massachusetts</td>
              <td><strong>~$37,749.00</strong></td>
              <td><strong>~$3,146.00</strong></td>
              <td><strong>~$1,452.00</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption">These figures use the 2026 federal brackets, standard deduction, and FICA for a single taxpayer with no dependents. Voluntary deductions like health insurance or 401(k) contributions will lower both your taxable income and your take-home pay. For a line-by-line look at your deductions, read our guide on <a href="/articles/how-to-calculate-taxes-on-paycheck/">how to calculate taxes on a paycheck</a>.</p>

      <!-- Section 8: Realistic Monthly Budget -->
      <h2 id="monthly-budget">A Realistic 50/30/20 Monthly Budget on $23 an Hour</h2>
      <p>With take-home pay between <strong>$3,205.00 and $3,385.00 a month</strong>, a clear budget keeps you from running short at the end of the month. The <strong>50/30/20 budget framework</strong> is a simple way to cover living costs and still save something.</p>

      <figure><img src="/assets/images/ui-widget-50-30-20-budget-23hr.webp" alt="3D financial desk graphic showing 50/30/20 monthly budget breakdown on $23 an hour take-home pay" width="800" height="450" loading="lazy"><figcaption>Practical 50/30/20 monthly budget breakdown visualization for $23/hr earners on $3,385 net monthly income.</figcaption></figure>

      <div class="cards-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;margin:24px 0">
        <div class="card" style="padding:22px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <span style="font-size:0.78rem;text-transform:uppercase;color:var(--primary);font-weight:750;letter-spacing:0.04em">50% Needs</span>
          <div style="font-size:1.45rem;font-weight:800;color:var(--ink);margin:6px 0">~$1,600 – $1,690 / mo</div>
          <p style="font-size:0.88rem;color:var(--muted);line-height:1.55;margin:0">
            • <strong>Rent/Housing:</strong> ~$1,000 – $1,100 (Max recommended rent based on the 30% gross rule)<br>
            • <strong>Utilities & Internet:</strong> ~$190 – $210<br>
            • <strong>Groceries & Household Goods:</strong> ~$300 – $320<br>
            • <strong>Transportation & Insurance:</strong> ~$200 – $220
          </p>
        </div>

        <div class="card" style="padding:22px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <span style="font-size:0.78rem;text-transform:uppercase;color:#d97706;font-weight:750;letter-spacing:0.04em">30% Wants</span>
          <div style="font-size:1.45rem;font-weight:800;color:var(--ink);margin:6px 0">~$960 – $1,015 / mo</div>
          <p style="font-size:0.88rem;color:var(--muted);line-height:1.55;margin:0">
            • <strong>Dining Out & Socializing:</strong> ~$250 – $280<br>
            • <strong>Entertainment & Subscriptions:</strong> ~$80 – $100<br>
            • <strong>Clothing & Personal Care:</strong> ~$100 – $120<br>
            • <strong>Hobbies, Fitness & Travel Buffer:</strong> ~$530 – $550
          </p>
        </div>

        <div class="card" style="padding:22px;border:1px solid var(--border-color);border-radius:12px;background:#fff">
          <span style="font-size:0.78rem;text-transform:uppercase;color:#16a34a;font-weight:750;letter-spacing:0.04em">20% Savings & Debt</span>
          <div style="font-size:1.45rem;font-weight:800;color:var(--ink);margin:6px 0">~$640 – $677 / mo</div>
          <p style="font-size:0.88rem;color:var(--muted);line-height:1.55;margin:0">
            • <strong>Emergency Fund:</strong> ~$250 – $300 (Build 3–6 months of essential living expenses)<br>
            • <strong>Roth IRA / 401(k):</strong> ~$250 – $300 ($3,000–$3,600/year invested)<br>
            • <strong>Extra Debt Reduction:</strong> ~$100 – $140
          </p>
        </div>
      </div>

      <p><strong>The Housing Rule at $23/Hour: Living Solo vs. Having a Roommate:</strong> A common rule of thumb is keeping housing under <strong>30% of your gross monthly pay</strong>. On $3,986.67 a month gross, that puts your target rent around <strong>$1,000.00 to $1,100.00 per month</strong> ($47,840 × 0.30 ÷ 12 ≈ $1,196 max ceiling). Where one-bedroom apartments run $1,400 to $1,800, sharing a place with a roommate drops your share to $750–$900, which frees up hundreds of dollars a month for savings and emergencies.</p>

      <!-- Section 9: Common Mistakes -->
      <h2 id="common-mistakes">Common Budgeting & Paycheck Math Mistakes on $23/Hour</h2>
      <p>These are the mistakes that trip people up most when they're planning around $23 an hour:</p>

      <div class="mistake-list">
        <div class="mistake-item">
          <h3>Mistake 1: Multiplying weekly pay by 4 to project monthly income ($3,680 vs. $3,986.67).</h3>
          <p>A $920 weekly check times 4 gives $3,680.00. But a year has 52 weeks, not 48, so an average month has 4.333 weeks (52 ÷ 12). Your real average monthly gross is <strong>$3,986.67</strong>. Budgeting on 4 weeks undercounts your year by four full weeks of pay ($3,680 a year).</p>
        </div>

        <div class="mistake-item">
          <h3>Mistake 2: Confusing biweekly (26 checks) with semi-monthly (24 checks) schedules.</h3>
          <p>Biweekly pay means 26 paychecks a year at $1,840.00 gross each. Semi-monthly means 24 checks at $1,993.33 each. The annual gross is the same ($47,840), but each biweekly check is smaller, because two months a year have three paychecks instead of two.</p>
        </div>

        <div class="mistake-item">
          <h3>Mistake 3: Forgetting mandatory FICA taxes (7.65%).</h3>
          <p>Social Security (6.2%) and Medicare (1.45%) come out of every dollar you earn, starting with the first one. On a $47,840 salary, FICA totals $3,659.76 a year ($140.76 biweekly). Forget FICA and your take-home estimate will be way off.</p>
        </div>

        <div class="mistake-item">
          <h3>Mistake 4: Budgeting rent and fixed debt against gross earnings.</h3>
          <p>Never sign a lease based on the $3,986 gross monthly figure. Budget against what actually lands in your account ($3,146 to $3,385/month, depending on state taxes and benefit deductions).</p>
        </div>

        <div class="mistake-item">
          <h3>Mistake 5: Assuming overtime is permanent base income.</h3>
          <p>Employers can cut back or freeze overtime when work slows down. Keep your fixed costs (rent, car, utilities) inside your regular 40-hour take-home pay, and put overtime money toward debt or savings.</p>
        </div>
      </div>

      <!-- Section: How to Use the Calculator -->
      <h2 id="how-to-use">How to Use the Calculator</h2>
      <p>Run your own numbers in four steps:</p>
      <ol>
        <li><strong>Step 1 — Enter your hourly rate</strong> ($23, or your own rate) into the hourly-to-salary calculator.</li>
        <li><strong>Step 2 — Set your schedule:</strong> hours per week and paid weeks per year. Full-time is 40 hours and 52 weeks; set fewer weeks if you take unpaid time off.</li>
        <li><strong>Step 3 — Check the receipt:</strong> the panel under the tool shows your inputs, the formula, and your annual, monthly, and biweekly results side by side.</li>
        <li><strong>Step 4 — Test this guide's cases:</strong> add weekly overtime hours, or drop to a part-time schedule, and watch how far the $47,840 full-time figure moves.</li>
      </ol>
      <p><a class="btn" href="/hourly-to-salary-calculator/">Run my numbers</a></p>

      <!-- Section: Limitations -->
      <h2 id="limitations">Limitations</h2>
      <ol>
        <li><strong>Federal-only take-home:</strong> the after-tax figures in this guide use 2026 federal rules for a single filer taking the standard deduction. State and local income taxes are excluded and would lower the check further.</li>
        <li><strong>The 2,080-hour assumption:</strong> the $47,840 headline needs 40 paid hours in every week of the year. Fewer scheduled hours, or weeks of unpaid leave, scale it down proportionally.</li>
        <li><strong>Overtime is conditional:</strong> the overtime scenarios require non-exempt status, an employer who schedules the hours, and hours actually worked past 40 in a single week.</li>
        <li><strong>Benefits sit outside the math:</strong> health premiums, 401(k) contributions, and other payroll deductions are not subtracted unless a section says so — your deposit will be smaller than the tax-only estimate.</li>
        <li><strong>Withholding vs. liability:</strong> each paycheck's withholding follows payroll tables and can differ from the annual figures sketched here; any difference settles when you file your return.</li>
        <li><strong>Not tax advice:</strong> these are planning estimates for one filing profile. Credits, a second job, or a different filing status change your real numbers.</li>
      </ol>

      <!-- Section 10: FAQs -->
      <h2 id="faqs">Frequently Asked Questions About $23 an Hour</h2>
      <div class="faq-list">
        <details>
          <summary>How much is $23 an hour a year?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>Work full-time, 40 hours a week for 52 paid weeks (2,080 hours), and $23 an hour comes to $47,840 a year gross, before taxes and deductions. Take 2 weeks of unpaid vacation (50 paid weeks) and it drops to $46,000.</p>
        </details>

        <details>
          <summary>How much is $23 an hour per month?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>At 40 hours a week, $23 an hour averages $3,986.67 a month before taxes ($47,840 divided by 12). A common slip is multiplying your $920 weekly pay by 4 to get $3,680. That undercounts your year by $3,680, because calendar months average 4.33 weeks, not 4.</p>
        </details>

        <details>
          <summary>How much is $23 an hour on a biweekly paycheck?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>On a biweekly schedule (every two weeks, 26 paychecks a year), $23 an hour pays $1,840.00 gross for 80 hours ($23 × 80). After 2026 federal income tax and FICA (7.65%), a single filer taking the standard deduction in a state with no income tax takes home about $1,562 per paycheck.</p>
        </details>

        <details>
          <summary>How much is $23 an hour after taxes?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>For a single filer taking the 2026 standard deduction ($16,100), federal income tax is $3,560.80 and FICA (Social Security and Medicare) is $3,659.76. In states with no income tax, like Texas or Florida, take-home pay is about $40,619.44 a year (~$3,385/month). In states with moderate income tax (~4.5%), it's about $38,466 (~$3,205/month). In higher-tax states (~6%), it's roughly $37,749 (~$3,146/month).</p>
        </details>

        <details>
          <summary>What is the overtime rate for $23 an hour?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>Under the Fair Labor Standards Act (FLSA), time-and-a-half is 1.5 times your regular rate. At $23 an hour, your overtime rate is $34.50 ($23 × 1.5). Five hours of overtime a week adds $172.50 in weekly gross pay ($8,970 over 52 weeks), lifting your total gross pay to $56,810.00 a year.</p>
        </details>
        <details>
          <summary>How much is $23 an hour working part-time?<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m6 9 6 6 6-6"/></svg></summary>
          <p>It depends on your hours, at the same $23 rate. At 20 hours a week you earn $460 a week, or $23,920 a year (52 weeks). At 25 hours, it's $575 a week or $29,900 a year. At 30 hours, $690 a week or $35,880 a year. At 35 hours, $805 a week or $41,860 a year. Those are gross figures before taxes. Part-time roles can also come with fewer benefits than full-time ones, so compare the whole offer, not just the hourly rate.</p>
        </details>
      </div>

      <!-- Section 11: Key Takeaways -->
      <h2 id="key-takeaways">Key Takeaways & Next Steps</h2>
      <div class="takeaways-card">
        <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z"/><path d="m8 12 3 3 5-5"/></svg> Core Summary for $23/Hour Earners</h3>
        <ul class="takeaways-list">
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>Standard Annual Baseline:</strong> Full-time at 40 hours a week, 52 weeks a year, comes to <strong>$47,840.00 gross per year</strong> (2,080 working hours).</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>Monthly Average:</strong> Monthly gross is <strong>$3,986.67</strong>. Remember, a calendar month averages 4.33 weeks, not 4.</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>2026 Net Take-Home Pay:</strong> After federal income tax ($3,560.80) and FICA ($3,659.76), take-home pay runs from <strong>~$37,749 to ~$40,619 annually</strong> (~$3,146 to ~$3,385/month), depending on state taxes.</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>Overtime Potential:</strong> Overtime pays <strong>$34.50/hour</strong>. Five hours a week adds an extra $8,970/year, lifting gross pay to $56,810.</span>
          </li>
          <li>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>
            <span><strong>Housing Target:</strong> Keep housing around <strong>$1,000 to $1,100/month</strong> so there's still room to save.</span>
          </li>
        </ul>
      </div>

      <p>To try your own schedule, factor in unpaid leave, or check your paycheck deductions, use our free tools: the <a href="/">Hourly Wage Converter</a>, the <a href="/overtime-calculator/">Overtime Calculator</a> for shift earnings, or the <a href="/paycheck-calculator/">Paycheck Calculator</a> to check your pay stubs.</p>
      <h2>3 Things to Remember</h2>
      <ol>
        <li>Full-time gross pay is $47,840 a year, or $3,986.67 a month before taxes.</li>
        <li>Overtime can lift the same rate to $56,810 a year.</li>
        <li>Don't multiply weekly pay by 4 for a monthly figure. That undercounts the year, because calendar months average more than 4 weeks.</li>
      </ol>
  `
};

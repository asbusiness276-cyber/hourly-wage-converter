export const article26 = {
  slug: 'how-to-read-your-pay-stub',
  breadcrumb: 'Read Your Pay Stub',
  category: 'Payroll & Compensation',
  minutes: 12,
  datePublished: '2026-10-29',
  dateModified: '2026-11-03',
  title: 'How to Read Your Pay Stub, Line by Line',
  seoTitle: 'How to Read Your Pay Stub | Hourly Wage Converter',
  h1: 'How to Read Your Pay Stub, Line by Line (With a Worked Sample)',
  desc: 'Learn to read your pay stub line by line: gross pay, FICA, federal and state withholding, pre-tax vs post-tax deductions, and YTD — with a worked sample stub.',
  image: '/assets/images/how-to-read-your-pay-stub.jpg',
  imageAlt: 'A man reading his pay stub at a kitchen table, his glasses resting on the document',
  toc: [
    ['short-answer', 'The Short Answer: Read Top to Bottom'],
    ['sample-stub', 'A Complete Sample Pay Stub'],
    ['header', 'Top of the Stub: Who, When, and How Often'],
    ['earnings', 'Earnings: What You Were Paid For'],
    ['deductions', 'Deductions, in the Order They Come Out'],
    ['codes', 'Codes and Abbreviations, Decoded'],
    ['ytd', 'The YTD Column: Your Built-in Audit'],
    ['spot-errors', 'Spot an Error in 5 Minutes'],
    ['wrong', 'If Something Looks Wrong'],
    ['how-to-use', 'How to Use the Calculator'],
    ['limitations', 'Limitations'],
    ['faqs', 'Frequently Asked Questions'],
    ['key-takeaways', 'Key Takeaways & Action Plan'],
  ],
  faqs: [
    [
      'What is the difference between gross pay and net pay on a pay stub?',
      'Gross pay is everything you earned in the pay period before anything comes out. Net pay is what is left once taxes and deductions are taken, and it is the amount that lands in your bank account. On the sample stub in this guide, $2,408.00 gross becomes $1,721.09 net after $686.91 of deductions, so the worker keeps about 71.5% of gross.'
    ],
    [
      'Why is my federal withholding different from my coworker\u2019s on the same pay?',
      'Federal withholding follows the Form W-4 you filed, not just your pay. Filing status, dependents and credits in Step 3, extra withholding in Step 4(c), and a second job all change the amount. Two people with the same gross pay can have different federal lines, and neither one is necessarily wrong.'
    ],
    [
      'What does FICA mean on my pay stub?',
      'FICA is the catch-all name for the two federal payroll taxes. Social Security takes 6.2% of wages up to the $184,500 wage base in 2026, and Medicare takes 1.45% of all wages, plus an extra 0.9% once yearly wages pass $200,000. Put together they come to 7.65% of your FICA wages, and your employer pays a matching amount on top.'
    ],
    [
      'Do 401(k) contributions lower Social Security and Medicare taxes?',
      'No. A traditional 401(k) contribution lowers the wages your federal income tax (and, in most states, your state income tax) is figured on, but it does not touch your FICA wages. Social Security and Medicare are still figured on your pay before the 401(k) comes out. Health premiums under a Section 125 cafeteria plan work differently: they lower both your income-tax wages and your FICA wages.'
    ],
    [
      'What is YTD on a pay stub, and why should I check it?',
      'YTD, or year-to-date, is the running total of each line since January 1. Think of it as a built-in audit. Divide any YTD figure by the number of paychecks so far and you should land close to the current-period figure, and the YTD gross and tax totals should end up close to your W-2 at year end. If a YTD line jumps or resets mid-year, that is worth a question to payroll.'
    ],
    [
      'My net pay is lower than I expected. What should I check first?',
      'Go in this order. First, the pay period dates: did this check cover the days you think it did? Then the hours and rate on the earnings lines, then the pre-tax versus post-tax split of your deductions, and then whether a one-off line showed up, like a bonus, a correction, or a benefits catch-up. If the math still does not tie out, so gross minus deductions does not equal net, take the stub to payroll with the exact line circled.'
    ],
  ],
  body: `
      <div class="methodology-box">
        <h3>Quick Answer</h3>
        <p>Read a pay stub from the top down. Start with the header, who you are and which pay period this covers, then earnings, which add up to gross pay, then deductions in order: pre-tax benefits, FICA, income-tax withholding, and post-tax items. Net pay comes last, and the year-to-date column beside each line gives you a running check as you go.</p>
      </div>

      <section class="article-section" id="short-answer">
        <h2>The Short Answer: Read Top to Bottom</h2>
        <p>Every pay stub tells the same story in the same order, no matter which payroll provider made it. At the top you get who you are, who employs you, and which days this check covers. In the middle is what you earned, regular hours, overtime, and anything extra, all added up into <strong>gross pay</strong>. Below that comes everything taken out, line by line, in an order that matters more than most people realize. At the bottom sits <strong>net pay</strong>, the amount that actually reaches your bank account. And beside almost every line there is a second column labeled YTD, year-to-date, that quietly keeps score on the whole year.</p>
        <p>Here is the one habit that matters most: never start at net pay. Start at gross pay, follow each deduction down, and check the math yourself. Gross minus deductions should equal net. If it does not, something is off, and this guide shows you how to find it in about five minutes. The sample stub below is made up, but every number in it ties out exactly, so you can practice the checks on real arithmetic before you open your own stub.</p>
      </section>

      <section class="article-section" id="sample-stub">
        <h2>A Complete Sample Pay Stub</h2>
        <figure>
          <img src="/assets/images/how-to-read-your-pay-stub-reading.jpg" alt="Worker at a home desk tracing down the lines of a printed pay stub with one finger, orange calculator beside the paper" width="1280" height="720" loading="lazy">
          <figcaption>Read your own stub the same way: one line at a time, from gross pay down to net pay.</figcaption>
        </figure>
        <p>Say hello to our example worker. She earns $28 an hour and gets paid biweekly. This check covers the pay period October 12–25, 2026, and it was paid October 30, 2026, the 20th paycheck of the year. She worked 80 regular hours and 4 overtime hours. Here is her whole stub, current period and year-to-date side by side:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Line</th><th>Current period</th><th>Year-to-date</th></tr></thead>
            <tbody>
              <tr><td>Regular pay (80 hrs × $28.00)</td><td>$2,240.00</td><td>$44,800.00</td></tr>
              <tr><td>Overtime pay (4 hrs × $42.00)</td><td>$168.00</td><td>$3,360.00</td></tr>
              <tr><td><strong>Gross pay</strong></td><td><strong>$2,408.00</strong></td><td><strong>$48,160.00</strong></td></tr>
              <tr><td>Health premium (pre-tax)</td><td>− $120.00</td><td>− $2,400.00</td></tr>
              <tr><td>401(k), 5% of gross (pre-tax)</td><td>− $120.40</td><td>− $2,408.00</td></tr>
              <tr><td>Social Security, 6.2%</td><td>− $141.86</td><td>− $2,837.20</td></tr>
              <tr><td>Medicare, 1.45%</td><td>− $33.18</td><td>− $663.60</td></tr>
              <tr><td>Federal withholding</td><td>− $176.27</td><td>− $3,525.40</td></tr>
              <tr><td>State withholding (illustrative 4%)</td><td>− $86.70</td><td>− $1,734.00</td></tr>
              <tr><td>Supplemental life (post-tax)</td><td>− $8.50</td><td>− $170.00</td></tr>
              <tr><td><strong>Total deductions</strong></td><td><strong>− $686.91</strong></td><td><strong>− $13,738.20</strong></td></tr>
              <tr><td><strong>Net pay</strong></td><td><strong>$1,721.09</strong></td><td><strong>$34,421.80</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p class="caption">Figure 1: A complete biweekly pay stub. Every line ties out: $2,408.00 gross minus $686.91 deductions equals $1,721.09 net, and every YTD figure is exactly 20 times the current figure because this is the 20th identical check of the year.</p>
        <p>Two things worth carrying away from this table. First, the worker keeps about <strong>71.5 cents of every gross dollar</strong> on this check ($1,721.09 ÷ $2,408.00). Second, the order of the deduction lines is not just for show. The health premium comes out before the tax lines because it changes the wages the taxes are figured on, while the 401(k) changes only some of them. The rest of this guide walks through each section in that same order.</p>
      </section>

      <section class="article-section" id="header">
        <h2>Top of the Stub: Who, When, and How Often</h2>
        <p>The header looks boring, and that is exactly why mistakes hide there. Check four things before you read a single dollar figure:</p>
        <ul>
          <li><strong>Your name and employee ID:</strong> a stub printed for the wrong person is rarer than it sounds, but a wrong ID can send your deductions to someone else's record.</li>
          <li><strong>Pay period vs pay date:</strong> the pay period is the days you worked, here October 12–25, and the pay date is when the money lands, October 30. If a check feels short, look at the pay period first. A holiday week or a late timesheet can push hours into the next period.</li>
          <li><strong>Pay frequency:</strong> weekly, biweekly, semimonthly, or monthly. How often you are paid changes how deductions get split up. The same annual health premium takes a smaller slice of a biweekly check than of a monthly one, and biweekly pay gives you two three-paycheck months a year. Our <a href="/articles/biweekly-vs-semi-monthly-pay-difference/">biweekly vs semimonthly guide</a> and <a href="/articles/three-paycheck-months/">three-paycheck-months guide</a> explain both effects.</li>
          <li><strong>Direct deposit account:</strong> many stubs print the last four digits of the account that got paid. If those digits are not yours, stop and call payroll before you do anything else.</li>
        </ul>
        <p>Salaried workers get a simpler header: no hours column, just the salary amount for the period. The rest of the stub, deductions, YTD, and net, works exactly the same way.</p>
      </section>

      <section class="article-section" id="earnings">
        <h2>Earnings: What You Were Paid For</h2>
        <p>The earnings lines answer one simple question: what did you do to earn this check? For hourly workers, each line shows a rate, hours, and an amount, and those amounts have to add up to gross pay. On our sample:</p>
        <div class="table-wrap">
          <table class="pay-table worked-table">
            <thead><tr><th>Step</th><th>Math</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Step 1 — Regular pay</td><td>80 hours × $28.00</td><td>$2,240.00</td></tr>
              <tr><td>Step 2 — Overtime rate</td><td>$28.00 × 1.5</td><td>$42.00 per hour</td></tr>
              <tr><td>Step 3 — Overtime pay</td><td>4 hours × $42.00</td><td>$168.00</td></tr>
              <tr><td><strong>Gross pay</strong></td><td><strong>$2,240.00 + $168.00</strong></td><td><strong>$2,408.00</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>You will see other lines besides regular and overtime often enough to recognize them. <strong>Shift differential</strong> is extra pay for nights or weekends. <strong>Bonus or commission</strong> is often withheld at the flat 22% federal supplemental rate, which looks high but settles at tax time. <strong>PTO, holiday, and sick pay</strong> is paid time off, and it still counts as gross pay. <strong>Retro pay</strong> is a correction for an earlier period, and if a mystery amount shows up, retro pay is usually why. Our <a href="/articles/is-overtime-taxed-at-a-higher-rate/">overtime tax guide</a> clears up why an overtime-heavy check can look over-taxed when it is not.</p>
        <p><em>Honesty note:</em> the earnings lines show what payroll recorded, which is not always what you worked. Check the hours against your own timecard or schedule every period. A missing overtime hour is the most common small error, and it is cheapest to fix in the same pay period.</p>
      </section>

      <section class="article-section" id="deductions">
        <h2>Deductions, in the Order They Come Out</h2>
        <p>This is the section most guides rush past, and it is where the real money hides. Deductions come out in an order, and that order decides what the taxes get figured on. Three wage bases matter:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Wage base</th><th>How it is built (sample stub)</th><th>Amount</th></tr></thead>
            <tbody>
              <tr><td>Gross pay</td><td>Regular + overtime</td><td>$2,408.00</td></tr>
              <tr><td>FICA wages</td><td>Gross − Section 125 health premium only</td><td>$2,288.00</td></tr>
              <tr><td>Income-tax wages</td><td>Gross − health premium − 401(k)</td><td>$2,167.60</td></tr>
            </tbody>
          </table>
        </div>
        <p>Here is each deduction line, in the order it appears on the stub:</p>
        <ul>
          <li><strong>Pre-tax benefits first.</strong> The $120.00 health premium is a Section 125 cafeteria-plan deduction, so it lowers <em>both</em> FICA wages and income-tax wages. The $120.40 401(k) contribution (5% of gross) lowers income-tax wages only. FICA is still figured on pay before the 401(k). That difference trips up more people than any other line on a stub, and our <a href="/calculators/401k-impact/">401(k) impact calculator</a> shows exactly how it changes take-home pay.</li>
          <li><strong>FICA next.</strong> Social Security takes 6.2% of FICA wages ($2,288.00 × 6.2% = $141.86) up to the 2026 wage base of $184,500, and Medicare takes 1.45% of all FICA wages ($2,288.00 × 1.45% = $33.18). Together that is $175.04, or 7.65% of FICA wages. Our <a href="/articles/what-is-fica-tax/">FICA guide</a> covers the wage base, the extra 0.9% Medicare tax above $200,000, and the employer match.</li>
          <li><strong>Income-tax withholding next.</strong> Federal withholding ($176.27 here) is set by your Form W-4 and the IRS withholding tables, which annualize your pay. It is <em>not</em> your tax bracket applied to one check, so you cannot work it out exactly from the stub alone. State withholding ($86.70, shown at an illustrative 4%) depends on your state, and some states levy no income tax at all. Our <a href="/articles/how-to-calculate-taxes-on-paycheck/">paycheck tax guide</a> walks through the full withholding calculation.</li>
          <li><strong>Post-tax items last.</strong> The $8.50 supplemental life premium comes out after all taxes, so it cuts net pay dollar for dollar without cutting any tax. Garnishments and Roth 401(k) contributions sit here too.</li>
        </ul>
        <p>Employer-paid lines sometimes show up in a separate column: the employer\u2019s FICA match, its share of your health premium, its 401(k) match. Those are not deductions from your pay. They are part of your total compensation, and they should never be subtracted from your gross.</p>
      </section>

      <section class="article-section" id="codes">
        <h2>Codes and Abbreviations, Decoded</h2>
        <p>Payroll providers love abbreviations, and the same tax can go by several names. Here are the ones you will run into most:</p>
        <div class="table-wrap">
          <table class="pay-table desc-table">
            <thead><tr><th>Code</th><th>Meaning</th><th>What to know</th></tr></thead>
            <tbody>
              <tr><td>FICA / SS / OASDI</td><td>Social Security tax</td><td>6.2% up to the $184,500 wage base (2026); OASDI is the formal name for the same tax</td></tr>
              <tr><td>MED / HI</td><td>Medicare tax</td><td>1.45% of all wages; HI stands for Hospital Insurance, Medicare\u2019s formal name</td></tr>
              <tr><td>FIT / FED</td><td>Federal income-tax withholding</td><td>Set by your W-4; not your final tax bill</td></tr>
              <tr><td>SIT / ST</td><td>State income-tax withholding</td><td>Absent in states with no income tax</td></tr>
              <tr><td>401(k) / 403(b)</td><td>Retirement contribution</td><td>Pre-tax for income tax; does not reduce FICA</td></tr>
              <tr><td>125 / CAF / MED PRE</td><td>Section 125 cafeteria plan</td><td>Health premiums that reduce both FICA and income-tax wages</td></tr>
              <tr><td>HSA / FSA</td><td>Health savings / flexible spending</td><td>Pre-tax; HSA money is yours to keep, FSA money usually is not</td></tr>
              <tr><td>GTL</td><td>Group-term life imputed income</td><td>Not a deduction — taxable value of employer life cover above $50,000, added to wages</td></tr>
              <tr><td>GARN</td><td>Garnishment</td><td>Court- or agency-ordered withholding; comes out post-tax</td></tr>
            </tbody>
          </table>
        </div>
        <p>Codes vary by provider, so a code that is missing from this table is not automatically an error. Ask payroll what it stands for, and whether it is an employee deduction or an employer contribution, before assuming either.</p>
      </section>

      <section class="article-section" id="ytd">
        <h2>The YTD Column: Your Built-in Audit</h2>
        <p>YTD, year-to-date, is the running total of each line since January 1, and it does three jobs no other column can. First, it catches slow errors. A wrong rate on one check is easy to miss, but a YTD line drifting away from your own records over months is not. Second, it previews your W-2. YTD gross, federal withholding, and Social Security wages should land close to the matching W-2 boxes at year end, with small differences from pre-tax items the W-2 treats differently. Third, it exposes resets. YTD figures should never drop mid-year, except when a new calendar year starts or you change employers.</p>
        <p>Here is the quick YTD check on our sample. Divide any YTD figure by the number of paychecks so far. YTD gross $48,160.00 ÷ 20 checks = $2,408.00, exactly the current gross. YTD net $34,421.80 ÷ 20 = $1,721.09, exactly the current net. If your own stub\u2019s YTD divided by check count does not roughly equal the current figure, something changed mid-year, a raise, a benefits election, or a missed check, and it is worth knowing which.</p>
        <p>One more habit worth building: compare this stub\u2019s YTD with the previous stub\u2019s YTD. The difference should equal this check\u2019s current figures, line by line. If it does not, a correction landed somewhere, and payroll can point to it.</p>
      </section>

      <section class="article-section" id="spot-errors">
        <h2>Spot an Error in 5 Minutes</h2>
        <p>Run these five checks on any stub, in order. All five use the sample stub\u2019s numbers, so you can watch each check pass:</p>
        <div class="table-wrap">
          <table class="pay-table worked-table">
            <thead><tr><th>Check</th><th>Math</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>1 — Earnings add up</td><td>$2,240.00 + $168.00</td><td>$2,408.00 gross ✓</td></tr>
              <tr><td>2 — Overtime rate is 1.5×</td><td>$28.00 × 1.5</td><td>$42.00 ✓</td></tr>
              <tr><td>3 — FICA is 7.65% of FICA wages</td><td>$141.86 + $33.18 vs $2,288.00 × 7.65%</td><td>$175.04 vs $175.03 — a penny of rounding ✓</td></tr>
              <tr><td>4 — Net ties out</td><td>$2,408.00 − $686.91</td><td>$1,721.09 ✓</td></tr>
              <tr><td>5 — YTD ÷ checks matches</td><td>$48,160.00 ÷ 20</td><td>$2,408.00 ✓</td></tr>
            </tbody>
          </table>
        </div>
        <p>Check 3 needs a footnote. Social Security and Medicare are each rounded to the cent before they are added, so the pair can sit a penny away from a single 7.65% calculation. A penny is rounding. But a FICA total that is a whole percent off, say 7.65% of <em>gross</em> instead of FICA wages, or a Social Security line that keeps charging past the wage base, is a real error. The same rule applies to net pay: a penny is rounding, and anything more is a question.</p>
        <p>Also compare net pay with the deposit that actually arrived. Split deposits, a separate reimbursement, or bank timing can explain a gap, but the stub\u2019s net and the deposit should match once you account for those. If the numbers still do not line up, run your own rate and hours through our <a href="/paycheck-calculator/">paycheck calculator</a> to see what the check should have been.</p>
      </section>

      <section class="article-section" id="wrong">
        <h2>If Something Looks Wrong</h2>
        <figure>
          <img src="/assets/images/how-to-read-your-pay-stub-payroll.jpg" alt="Employee and payroll manager sitting at a desk looking at a pay stub together next to a laptop" width="1280" height="720" loading="lazy">
          <figcaption>If a line still does not add up, take the stub to payroll — bring the exact pay period and the line in question.</figcaption>
        </figure>
        <p>Most stub errors are small and fixable, but they pile up if you ignore them. A wrong rate repeats every period, and a wrong W-4 repeats every check until you file a new one. Work through this ladder:</p>
        <ol>
          <li><strong>Compare against your own records first.</strong> Your timecard hours, your offer-letter rate, the benefits elections you actually signed. Half of all "errors" turn out to be a forgotten election or a pay period that does not cover the days you assumed.</li>
          <li><strong>Take the exact line to payroll, in writing.</strong> "My overtime line shows 3 hours; my timecard shows 4" gets fixed faster than "my check looks short." Keep a copy of the stub and your records.</li>
          <li><strong>Fix the cause, not just the check.</strong> A rate error needs a payroll correction. A withholding surprise needs a new Form W-4, which you can file any time, not just when you are hired. A benefits error needs an election change. Ask payroll whether the fix applies retroactively or only from the next check.</li>
          <li><strong>Keep your stubs.</strong> They are your evidence if a W-2 comes out wrong, if a premium was over-collected, or if an employer record disappears. A year of stubs plus the final W-2 is the complete paper trail.</li>
        </ol>
        <p>One thing a stub cannot tell you is whether your withholding will match your final tax bill. Withholding is an estimate collected across the year, and the return settles the difference. If a stub\u2019s federal line looks nothing like what you expected, our <a href="/articles/how-to-calculate-taxes-on-paycheck/">paycheck tax guide</a> shows how the annualized withholding math works, and the IRS Tax Withholding Estimator can confirm whether a new W-4 is warranted.</p>
      </section>

      <section class="article-section" id="how-to-use">
        <h2>How to Use the Calculator</h2>
        <p>Test your own stub against the same math in four steps:</p>
        <ol>
          <li><strong>Step 1 — Enter your pay:</strong> put your hourly rate, hours, and pay frequency into the paycheck calculator.</li>
          <li><strong>Step 2 — Add your deductions:</strong> enter your pre-tax benefits and retirement contribution just as they appear on your stub.</li>
          <li><strong>Step 3 — Compare the lines:</strong> match the calculator\u2019s gross, FICA, and net against your stub\u2019s lines. The FICA and gross lines should agree closely, while the federal line will differ because withholding follows your W-4.</li>
          <li><strong>Step 4 — Try a change:</strong> raise the 401(k) percent or add overtime hours and watch which lines move. FICA moves with health premiums but not with 401(k), exactly as this guide explains.</li>
        </ol>
        <p><a class="btn" href="/paycheck-calculator/">Check my paycheck</a></p>
      </section>

      <section class="article-section" id="limitations">
        <h2>Limitations</h2>
        <p>Keep these limits in mind before you use any figure above as a budget:</p>
        <ol>
          <li><strong>One fictional sample:</strong> the sample stub is a teaching example with identical checks all year. Real stubs vary. Raises, bonuses, and benefits changes break the neat YTD pattern, and that is normal.</li>
          <li><strong>Withholding is illustrative:</strong> the federal and state lines follow a single filer\u2019s W-4 and an illustrative 4% state rate. Your own withholding depends on your W-4, your state, and your total income, and it is an estimate, not your final tax bill.</li>
          <li><strong>State and local rules vary:</strong> some states have no income tax, some tax at flat rates, and some cities add their own withholding. This guide sticks to federal rules plus one illustrative state line.</li>
          <li><strong>Provider formats differ:</strong> line names, codes, and column layouts vary by payroll provider. The order and the math are the same everywhere, but the labels are not.</li>
          <li><strong>Not tax or legal advice:</strong> this guide explains how to read a stub. For a dispute about pay, withholding, or a garnishment, payroll is the right next step, and a tax professional if you need one.</li>
        </ol>
      </section>

      <section class="article-section" id="faqs">
        <h2>Frequently Asked Questions</h2>
        <p>Here are the questions readers ask most about reading a pay stub:</p>
      </section>

      <section class="article-section" id="key-takeaways">
        <h2>Key Takeaways &amp; Action Plan</h2>
        <div class="takeaways-box">
          <ul>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Read top to bottom:</strong> header, earnings, deductions in order, net pay, and never start at net pay.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Order matters:</strong> health premiums lower both FICA and income-tax wages, while 401(k) lowers income-tax wages only.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>The sample ties out exactly:</strong> $2,408.00 gross minus $686.91 deductions comes to $1,721.09 net, about 71.5% of gross.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>FICA is 7.65% of FICA wages</strong> (6.2% Social Security + 1.45% Medicare), not of gross pay. A penny of rounding is fine, but a percent off is an error.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>YTD is your audit:</strong> divide any YTD line by the checks so far, and compare each YTD with the previous stub\u2019s YTD.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Small errors add up:</strong> flag a wrong line to payroll in writing, in the same pay period, and keep your stubs for the W-2 check.</li>
          </ul>
        </div>
        <div class="methodology-box">
          <h3>Sources &amp; Method</h3>
          <p>The sample stub is made up, and we built it so every line ties out exactly. It starts with 80 regular hours at $28.00 plus 4 overtime hours at $42.00 (time-and-a-half), which gives $2,408.00 gross. The Section 125 health premium of $120.00 brings FICA wages down to $2,288.00 and income-tax wages down to $2,167.60, after the 5% 401(k) contribution of $120.40. Social Security at 6.2% and Medicare at 1.45% use 2026 federal rates and the $184,500 Social Security wage base, per IRS rules and our <a href="/articles/what-is-fica-tax/">FICA guide</a>. Federal withholding of $176.27 follows the annualized single-filer method (2026 standard deduction $16,100, brackets 10% to $12,400, 12% to $50,400, per IRS Revenue Procedure 2025-32). The state line is illustrative at 4% of income-tax wages. State and local rules vary and are not included except where noted. This article is general information, not tax advice.</p>
        </div>
      </section>
      <div class="article-hero-cta" style="margin-top:40px">
        <div>
          <h2>Check your own stub</h2>
          <p>Put your rate, hours, and deductions into the paycheck calculator and compare each line with your stub.</p>
        </div>
        <a class="btn" href="/paycheck-calculator/">Check my paycheck</a>
      </div>
      <h2>3 Things to Remember</h2>
      <ol>
        <li>Read top to bottom, header, earnings, deductions in order, net pay, and check the YTD column beside every line.</li>
        <li>Pre-tax benefits change the wages taxes are figured on. Health premiums lower both FICA and income-tax wages, while 401(k) lowers income-tax wages only.</li>
        <li>Five minutes of checks, earnings add up, overtime is 1.5×, FICA is 7.65% of FICA wages, net ties out, YTD divides cleanly, catches most stub errors.</li>
      </ol>
  `
};

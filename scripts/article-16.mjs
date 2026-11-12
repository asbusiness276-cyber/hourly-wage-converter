export const article16 = {
  slug: 'gross-pay-vs-net-pay',
  breadcrumb: 'Gross Pay vs Net Pay',
  category: 'Taxes & Deductions',
  minutes: 10,
  datePublished: '2026-10-23',
  dateModified: '2026-10-23',
  title: 'Gross Pay vs Net Pay Explained',
  h1: 'Gross Pay vs Net Pay: What Each Number on Your Pay Stub Really Means',
  desc: 'Gross pay vs net pay explained: the definitions, every deduction between them — federal tax, FICA, state tax, 401(k), premiums — plus worked examples.',
  image: '/assets/images/gross-pay-vs-net-pay.jpg',
  imageAlt: 'Gross pay vs net pay guide graphic: a large pay stub showing Gross Pay at the top, deduction lines for federal tax, health insurance and 401k retirement in the middle, and Net Pay in orange at the bottom, with a calculator and gold coins beside it',
  toc: [
    ['short-answer', 'The Short Answer'],
    ['gross-pay', 'What Gross Pay Means'],
    ['net-pay', 'What Net Pay (Take-Home) Means'],
    ['deductions', 'The Deductions Between Them'],
    ['example-salary', 'Example: A $60,000 Salary, Step by Step'],
    ['example-hourly', 'Example: $25 an Hour, Full-Time'],
    ['pay-stub', 'How to Read Your Pay Stub'],
    ['decisions', 'Gross vs Net in Real Decisions'],
    ['how-to-use', 'How to Use the Calculator'],
    ['limitations', 'Limitations'],
    ['faqs', 'Frequently Asked Questions'],
    ['key-takeaways', 'Key Takeaways & Action Plan'],
  ],
  faqs: [
    [
      'What is the difference between gross pay and net pay?',
      'Gross pay is everything you earn before anything comes out: your wages, overtime, bonuses, and commissions at their full value. Net pay is what\'s left after every deduction: federal and state taxes, Social Security and Medicare (FICA), retirement contributions, health insurance premiums, and anything else on your stub. Net pay is the amount that actually hits your bank account, which is why people call it take-home pay.'
    ],
    [
      'How do I calculate net pay from gross pay?',
      'Work down your stub in order: start with gross pay for the period, take off pre-tax items (401(k) contributions and health premiums), figure federal income tax on what\'s left after the standard deduction, subtract FICA (7.65% for most workers), then state and local tax, and finally any post-tax deductions like Roth contributions or garnishments. What\'s left is your net pay. Our paycheck calculator runs that same sequence on your own numbers.'
    ],
    [
      'What gets deducted from gross pay?',
      'Three groups. Required taxes: federal income tax, Social Security (6.2% on wages up to $184,500 in 2026), Medicare (1.45% on all wages), and state or local income tax where it applies. Voluntary deductions you picked: 401(k) or 403(b) contributions, health, dental, and vision premiums, HSA or FSA deposits, and union dues. And court-ordered or other withholdings: wage garnishments, child support, and tax levies. Not every stub has all three groups, but the order on the stub almost always follows them.'
    ],
    [
      'Is your salary quoted as gross or net?',
      'Always gross. Job offers, salary bands, raise letters, and hourly rates are all stated before deductions, because your employer can\'t know your personal tax situation: your filing status, a second job, or your benefit choices change the net. That\'s why a first paycheck often looks surprisingly small next to the offer: a $60,000 salary doesn\'t deposit $5,000 a month; it deposits roughly $4,199 a month in take-home pay in a state with no income tax, and less where state tax applies.'
    ],
    [
      'What percentage of your paycheck is take-home pay?',
      'There\'s no single percentage, but the worked examples in this guide land between 79% and 84.5% of gross after taxes alone. A $60,000 salary keeps 84.0% in a state with no income tax and 79.0% with a 5% state tax. Add voluntary deductions like a 401(k) contribution and health premiums, and the deposited share usually drops into the 70% to 80% range. Higher incomes keep a smaller share because more of their pay is taxed in higher brackets.'
    ],
    [
      'What does “gross up” mean?',
      'Grossing up is when an employer pays extra so you receive a specific net amount after tax. Instead of handing you a $500 bonus that shrinks to about $352 after 22% federal withholding and 7.65% FICA, the employer pays $710.73, calculated as $500 ÷ (1 − 0.2965), so that after those same deductions you keep exactly $500. Gross-ups are common for relocation bonuses, awards, and executive perks.'
    ]
  ],
  body: `
      <div class="methodology-box">
        <h3>Quick Answer</h3>
        <p>Gross pay is what you earn. Net pay is what lands in your bank account. On a $60,000 salary, federal tax and FICA alone take roughly $9,610 a year.</p>
      </div>

      <p class="lead">Every pay stub tells two stories about the same work. At the top sits your <strong>gross pay</strong>, the full amount you earned. At the bottom sits your <strong>net pay</strong>, what actually lands in your bank account. On a $60,000 salary, that gap runs about <strong>$9,610 a year</strong> in federal tax and FICA alone, before state tax or a single benefit deduction. Here's what both numbers mean, what gets taken out between them, and how to run the math yourself.</p>
      <p>Mixing the two up causes the same mistakes over and over: budgeting on the gross number in an offer letter, comparing job offers by salary alone, or assuming your first paycheck is wrong when the math is actually right. We walk through every step from gross to net below, so each line on your stub makes sense.</p>
      <div class="article-hero-cta">
        <div>
          <h2>Skip to your own numbers</h2>
          <p>Put your pay and schedule into the paycheck calculator and see a gross-to-net breakdown for your own check.</p>
        </div>
        <a class="btn" href="/paycheck-calculator/">Open the paycheck calculator</a>
      </div>

      <section class="article-section" id="short-answer">
        <h2>The Short Answer</h2>
        <p><strong>Gross pay</strong> is everything you earn before deductions. <strong>Net pay</strong> is gross pay minus every deduction: taxes, retirement contributions, insurance premiums, and any other withholding. The formula is one line:</p>
        <div class="formula-card">
          <div class="formula">Net Pay = Gross Pay − All Deductions</div>
          <p>The rest of this guide unpacks what sits inside "all deductions," and how big each piece usually is.</p>
        </div>
        <div class="table-wrap">
          <table class="pay-table desc-table">
            <thead><tr><th></th><th>Gross Pay</th><th>Net Pay</th></tr></thead>
            <tbody>
              <tr><td><strong>Meaning</strong></td><td>Everything you earned</td><td>Everything you keep</td></tr>
              <tr><td><strong>Includes</strong></td><td>Wages, salary, overtime, bonuses, commissions, tips</td><td>What remains after taxes and deductions</td></tr>
              <tr><td><strong>Used for</strong></td><td>Job offers, contracts, loan applications, tax returns</td><td>Budgeting, bill paying, saving goals</td></tr>
              <tr><td><strong>On your stub</strong></td><td>Top line, before deductions</td><td>Bottom line — matches your deposit</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="article-section" id="gross-pay">
        <h2>What Gross Pay Means</h2>
        <p>Gross pay is the full value of what you earned in a pay period, before anything is withheld. If you're paid hourly, it's your hours times your rate, plus the overtime premium for hours past 40 in a week. If you're salaried, it's your annual salary split across your pay periods. Either way, it counts <em>all</em> of these when they show up:</p>
        <ul>
          <li>Base wages or salary for the period</li>
          <li>Overtime pay, shift differentials and holiday premiums</li>
          <li>Bonuses and commissions</li>
          <li>Reported tips</li>
          <li>Paid time off taken during the period</li>
        </ul>
        <p>Here are the two formulas behind gross pay:</p>
        <div class="formula-card">
          <div class="formula">Hourly: Gross = (Hours × Rate) + (Overtime Hours × Rate × 0.5)</div>
          <div class="formula">Salaried: Gross per check = Annual Salary ÷ Pay Periods per Year</div>
          <p>A $60,000 salary paid biweekly (26 checks) works out to $2,307.69 of gross pay per check. Want to convert your own rate or salary? Use the <a href="/hourly-to-salary-calculator/">hourly to salary calculator</a>.</p>
        </div>
        <p>Gross pay is the number the outside world runs on. Employers advertise it, contracts state it, lenders ask for it, and your tax return starts from it. It's a real number. It's just not the number that pays your rent.</p>
      </section>

      <section class="article-section" id="net-pay">
        <h2>What Net Pay (Take-Home) Means</h2>
        <p>Net pay is what your employer actually hands over after withholding everything the law requires and everything you signed up for. If you have direct deposit, your net pay is the deposit, to the cent. If your deposit ever differs from the net pay line on your stub, that's a real error. Raise it with payroll the same day.</p>
        <p>So why is gross pay always the quoted figure? Because net pay is personal. Two coworkers on identical salaries can take home different amounts: one files taxes as single and the other as married, one puts 10% into a 401(k) and the other nothing, one covers a family health plan and the other is on a spouse's. No employer can quote a net figure honestly, so the whole labor market quotes gross. Turning that gross number into take-home pay is what the rest of this guide is about.</p>
      </section>

      <section class="article-section" id="deductions">
        <h2>The Deductions Between Them</h2>
        <p>Between the top line and the bottom line of your stub, you'll find three groups of deductions, almost always in this order:</p>
        <figure>
          <img src="/assets/images/ui-gross-net-deduction-groups.webp" alt="Infographic: the three groups of deductions between gross and net pay — required taxes, your choices such as 401(k) and health premiums, and court-ordered withholdings" width="800" height="450" loading="lazy">
          <figcaption>The three groups that turn gross pay into net pay, in the order they usually appear on a pay stub.</figcaption>
        </figure>
        <div class="table-wrap">
          <table class="pay-table desc-table">
            <thead><tr><th>Group</th><th>Deductions</th><th>Can you change it?</th></tr></thead>
            <tbody>
              <tr><td><strong>Required taxes</strong></td><td>Federal income tax · Social Security 6.2% (wages up to $184,500 in 2026) · Medicare 1.45% · State and local income tax</td><td>Only at the margins — your W-4 adjusts federal withholding</td></tr>
              <tr><td><strong>Your choices</strong></td><td>401(k)/403(b) contributions · Health, dental and vision premiums · HSA/FSA deposits · Union dues</td><td>Yes — at enrollment, open enrollment, or any time for retirement contributions</td></tr>
              <tr><td><strong>Court-ordered &amp; other</strong></td><td>Wage garnishments · Child support · Tax levies · Post-tax items like Roth contributions</td><td>Only through the court or agency that ordered it</td></tr>
            </tbody>
          </table>
        </div>
        <p>Two details explain most stub surprises. First, <strong>order matters for taxes</strong>. Pre-tax deductions come out before income tax is calculated, so a 401(k) contribution lowers your federal tax bill (and usually your state one too). But it does <em>not</em> lower FICA, which is charged on nearly your full gross. Health premiums paid through a workplace plan usually reduce both income-tax wages <em>and</em> FICA wages. Second, <strong>FICA has two different rules inside it</strong>. Social Security stops at $184,500 of 2026 wages, while Medicare's 1.45% never stops, and a further 0.9% Medicare tax kicks in once wages pass $200,000. For the full tax-by-tax walk-through, see our guide to <a href="/articles/how-to-calculate-taxes-on-paycheck/">how taxes are calculated on a paycheck</a>.</p>
      </section>

      <section class="article-section" id="example-salary">
        <h2>Example: A $60,000 Salary, Step by Step</h2>
        <p>Our baseline example is a single filer earning $60,000 in 2026, claiming the standard deduction of $16,100, with no benefit deductions. Taxes only. Federal income tax first: taxable income is $60,000 − $16,100 = $43,900, which fills the 10% bracket ($12,400 × 10% = $1,240) and part of the 12% bracket ($31,500 × 12% = $3,780), for <strong>$5,020</strong> total. FICA is simpler: 7.65% of the full $60,000 = <strong>$4,590</strong>.</p>
        <figure>
          <img src="/assets/images/ui-gross-to-net-waterfall-60k.webp" alt="Waterfall chart: $60,000 gross pay minus $5,020 federal tax and $4,590 FICA equals $50,390 net pay" width="800" height="450" loading="lazy">
          <figcaption>Where a $60,000 salary goes: federal tax and FICA are the two deductions every worker pays.</figcaption>
        </figure>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Line</th><th>Per Year</th></tr></thead>
            <tbody>
              <tr><td>Gross pay</td><td>$60,000</td></tr>
              <tr><td>Federal income tax</td><td>−$5,020</td></tr>
              <tr><td>Social Security (6.2%)</td><td>−$3,720</td></tr>
              <tr><td>Medicare (1.45%)</td><td>−$870</td></tr>
              <tr class="total-row"><td><strong>Net pay (no state income tax)</strong></td><td><strong>$50,390 — 84.0% of gross</strong></td></tr>
              <tr><td>State income tax (5% example)</td><td>−$3,000</td></tr>
              <tr class="total-row"><td><strong>Net pay (with 5% state tax)</strong></td><td><strong>$47,390 — 79.0% of gross</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>In paycheck terms (biweekly), gross of <strong>$2,307.69</strong> becomes <strong>$1,938.08</strong> deposited, or $1,822.69 in the 5%-state version. Monthly take-home is $4,199.17 with no state tax. That monthly figure, not $5,000, is the honest starting point for a budget. Run the same gross-to-net math on your own pay with our <a href="/paycheck-calculator/">take-home pay calculator</a>.</p>
      </section>

      <section class="article-section" id="example-hourly">
        <h2>Example: $25 an Hour, Full-Time</h2>
        <p>Now let's try an hourly worker: $25 an hour, 40 hours a week, 52 weeks, for a gross of <strong>$52,000</strong>. Same single filer, same 2026 standard deduction:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Line</th><th>Per Year</th></tr></thead>
            <tbody>
              <tr><td>Gross pay</td><td>$52,000</td></tr>
              <tr><td>Federal income tax (on $35,900 taxable)</td><td>−$4,060</td></tr>
              <tr><td>FICA (7.65%)</td><td>−$3,978</td></tr>
              <tr class="total-row"><td><strong>Net pay (no state income tax)</strong></td><td><strong>$43,962 — 84.5% of gross</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Per biweekly check, $2,000.00 gross becomes <strong>$1,690.85</strong> net, and monthly take-home averages $3,663.50. Note the slightly better percentage than the $60,000 earner. A smaller share of this income reaches the 12% bracket's upper end, so the effective tax bite is lighter.</p>
        <p><strong>The same worker, with voluntary deductions.</strong> Now give this worker a 5% 401(k) contribution ($2,600) and a $150-a-month health premium ($1,800). Federal tax falls to $3,532, since both deductions come out before income tax, and FICA drops slightly to $3,840.30, because the premium (unlike the 401(k)) also escapes FICA. The new net: <strong>$40,227.70 a year, 77.4% of gross</strong>, or $1,547.22 a check. The deposit dropped by about $144 a check, but $100 of that went into the worker's own retirement account. A smaller net isn't always a worse outcome.</p>
      </section>

      <section class="article-section" id="pay-stub">
        <h2>How to Read Your Pay Stub</h2>
        <p>Your stub is the source of truth for both numbers. Almost every stub shows two columns: <strong>Current</strong> (this pay period) and <strong>YTD</strong> (year to date). The YTD gross should track toward your annual salary, and the current column is what this check's net was built from. Here's what the common abbreviations mean:</p>
        <div class="table-wrap">
          <table class="pay-table desc-table">
            <thead><tr><th>Stub Label</th><th>Means</th></tr></thead>
            <tbody>
              <tr><td>FIT / Fed Tax</td><td>Federal income tax withheld</td></tr>
              <tr><td>SS / OASDI / FICA-SS</td><td>Social Security tax (6.2%)</td></tr>
              <tr><td>MED / FICA-MED</td><td>Medicare tax (1.45%)</td></tr>
              <tr><td>SIT / State Tax</td><td>State income tax withheld</td></tr>
              <tr><td>401k / RET</td><td>Your retirement contribution</td></tr>
              <tr><td>NET PAY</td><td>Your deposit — gross minus everything above it</td></tr>
            </tbody>
          </table>
        </div>
        <p>Here's a useful monthly habit: divide YTD gross by the checks you've received and check it against your expected per-check gross. It catches rate errors early, and it explains why some months feel richer. In a <a href="/articles/three-paycheck-months/">three-paycheck month</a>, your monthly <em>net</em> jumps even though neither your gross rate nor your deductions changed.</p>
      </section>

      <section class="article-section" id="decisions">
        <h2>Gross vs Net in Real Decisions</h2>
        <p><strong>Comparing job offers:</strong> compare gross pay and benefits together, since gross is the common yardstick. But before you accept, translate the winner into net. An offer with cheaper health premiums can beat a slightly higher salary once both are run to the bottom line. Our <a href="/articles/hourly-vs-salary-which-pays-more/">hourly-versus-salary comparison</a> runs exactly that test on a $32-an-hour offer against a $65,000 salary, pricing the benefits on both sides before picking a winner. You can run your own pair of offers through our <a href="/calculators/salary-comparison/">salary comparison calculator</a> the same way.</p>
        <p><strong>Budgeting:</strong> budget only on net. Rent, the 50/30/20 split, savings goals, all of them have to be built from deposits, not offer letters. Our <a href="/articles/how-much-is-23-an-hour-a-year/">$23 an hour guide</a> shows the method: its whole monthly budget is built from the take-home figure, not the $47,840 gross.</p>
        <p><strong>Negotiating a raise:</strong> raises are quoted gross and received net. A $2-an-hour raise is $4,160 a year of gross, and at the keep-rates in this guide, roughly $3,300 a year of actual deposits, about $127 more per biweekly check. Knowing that conversion keeps your expectations and your counter-offer honest.</p>
        <p><strong>Loans and taxes:</strong> lenders qualify you on gross income because it's standardized and verifiable, and your tax return starts from gross wages and works down through its own deductions. Net pay is for your household math. Gross is for everyone else's paperwork.</p>
      </section>

      <section class="article-section" id="how-to-use">
        <h2>How to Use the Calculator</h2>
        <p>Walk your own pay down the same gross-to-net path, in four steps:</p>
        <ol>
          <li><strong>Step 1 — Enter your gross pay</strong> for one pay period in the paycheck calculator: your salary per check, or your hourly rate times the hours on your stub.</li>
          <li><strong>Step 2 — Set your pay frequency and filing status,</strong> so the estimate follows the same withholding route this guide lays out.</li>
          <li><strong>Step 3 — Add your own deductions:</strong> your 401(k) percentage, your health premium, and any other amounts your stub shows coming out.</li>
          <li><strong>Step 4 — Reconcile against your real stub:</strong> the calculator's net should land close to your actual deposit, and any gap points at a deduction this guide's stub table can help you spot.</li>
        </ol>
        <p><a class="btn" href="/paycheck-calculator/">Run my numbers</a></p>
      </section>

      <section class="article-section" id="limitations">
        <h2>Limitations</h2>
        <ol>
          <li><strong>Federal-first examples:</strong> the worked examples use 2026 federal rules for single filers taking the standard deduction. Your state's income tax, or having none, moves the net figure a lot.</li>
          <li><strong>Withholding is not liability:</strong> each check's tax is an estimate that gets settled up on your annual return. A refund or a balance due doesn't mean any single check was calculated wrong.</li>
          <li><strong>Deductions are personal:</strong> 401(k) deferrals, HSA contributions, premium amounts, garnishments, and union dues differ by worker and by employer, so no example in this guide can include them all.</li>
          <li><strong>Pre-tax treatment is not uniform:</strong> most workplace health premiums skip both income tax and FICA, while 401(k) deferrals skip income tax only. Mix the two up and you'll overstate or understate net pay.</li>
          <li><strong>Pay frequency changes the split:</strong> biweekly and semi-monthly checks get annualized differently by payroll tables, so the same salary can produce slightly different per-check net amounts.</li>
          <li><strong>Illustration, not tax advice:</strong> the flat 5% state variant used in this guide is a teaching example, not any state's real rate structure, and your own situation may involve credits or adjustments no example covers.</li>
        </ol>
      </section>

      <section class="article-section" id="faqs">
        <h2>Frequently Asked Questions</h2>
        <p>Short answers to the questions readers ask most about gross and net pay.</p>
      </section>

      <section class="article-section" id="key-takeaways">
        <h2>Key Takeaways &amp; Action Plan</h2>
        <div class="takeaways-box">
          <h3><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:6px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>What to Remember</h3>
          <ul>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Net = gross − all deductions.</strong> Offers and salaries are always gross, and your deposit is always net.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Taxes are the biggest wedge:</strong> on a $60,000 salary, federal tax plus FICA take $9,610, so you keep 84.0% before state tax and 79.0% with a 5% state tax.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Pre-tax is not all equal:</strong> a 401(k) skips income tax but not FICA, while workplace health premiums usually skip both.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Your stub is the source of truth:</strong> net pay should match your deposit to the cent, and YTD gross should track your salary.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Budget on net, compare on gross,</strong> and translate every offer to take-home before you sign.</li>
          </ul>
        </div>
        <div class="methodology-box">
          <h3>How We Calculated These Examples</h3>
          <p>These examples use 2026 federal figures (IRS Revenue Procedure 2025-32): a $16,100 standard deduction for single filers, the 10% bracket up to $12,400 of taxable income and 12% up to $50,400, plus FICA at 6.2% Social Security (2026 wage base $184,500) and 1.45% Medicare. Both example workers are single filers paid biweekly, with no credits or extra adjustments, and the state variant uses a flat 5% just for illustration. Your withholding during the year is an estimate that gets settled on your tax return, so your own stub will look different. The order and the method won't.</p>
        </div>
      </section>
      <div class="article-hero-cta" style="margin-top:40px">
        <div>
          <h2>See your own gross-to-net</h2>
          <p>Put your pay through the paycheck calculator for a line-by-line estimate of your take-home pay.</p>
        </div>
        <a class="btn" href="/paycheck-calculator/">Calculate my paycheck</a>
      </div>
      <h2>3 Things to Remember</h2>
      <ol>
        <li>Gross pay sits at the top of the pay stub and net pay sits at the bottom. They describe the same work.</li>
        <li>Between them sit federal tax, FICA, state tax, 401(k) contributions, and premiums.</li>
        <li>The roughly $9,610 gap on $60,000 is federal tax and FICA alone, before state tax or any benefit deduction.</li>
      </ol>
  `
};

export const article24 = {
  slug: 'what-is-fica-tax',
  breadcrumb: 'What Is FICA Tax?',
  category: 'Tax & Payroll Guides',
  minutes: 10,
  datePublished: '2026-10-27',
  dateModified: '2026-10-27',
  title: 'What Is FICA Tax?',
  h1: 'What Is FICA Tax? The 7.65% Deduction on Every Paycheck, Explained',
  desc: 'FICA tax is 7.65% of your pay — 6.2% Social Security up to the $184,500 wage base plus 1.45% Medicare. Learn how it works, when it stops, and what it costs.',
  image: '/assets/images/what-is-fica-tax.jpg',
  imageAlt: 'FICA tax illustration: a paycheck split into Social Security and Medicare portions, showing the 7.65% employee deduction',
  toc: [
    ['short-answer', 'The Short Answer: 7.65% of Your Pay'],
    ['fica-tiers', 'FICA at a Glance: What Applies at Each Wage Level'],
    ['two-components', 'The Two Taxes Inside FICA'],
    ['formulas', 'The FICA Formulas'],
    ['worked-examples', 'Worked Examples: Three Paychecks'],
    ['fica-vs-income-tax', 'FICA vs Federal Income Tax'],
    ['how-to-use', 'How to Use the Calculator'],
    ['limitations', 'Limitations'],
    ['faqs', 'Frequently Asked Questions'],
    ['key-takeaways', 'Key Takeaways & Action Plan'],
  ],
  faqs: [
    [
      'What does FICA stand for?',
      'FICA stands for the Federal Insurance Contributions Act, the law that created the payroll tax funding Social Security and Medicare. When your pay stub shows a Social Security line and a Medicare line, both are FICA taxes — two separate taxes collected together under one law.'
    ],
    [
      'How much is FICA tax in 2026?',
      'For most employees, 7.65% of gross pay: 6.2% for Social Security plus 1.45% for Medicare. Your employer matches the full 7.65%, so 15.3% of your wages goes to the two programs combined. Social Security tax stops at the $184,500 wage base; Medicare has no cap, and an extra 0.9% Medicare withholding applies to wages over $200,000.'
    ],
    [
      'Is FICA the same as Social Security tax?',
      'No. Social Security tax is only one part of FICA — the 6.2% part. FICA also includes the 1.45% Medicare part. The two programs have separate trust funds and separate rules, which is why the Social Security part can stop at the wage base while the Medicare part keeps running.'
    ],
    [
      'Does FICA stop once I earn over $184,500?',
      'Only the Social Security part stops. Once your year-to-date wages pass $184,500, your employer stops withholding the 6.2% Social Security tax and your paycheck gets bigger by that amount for the rest of the year. Medicare withholding at 1.45% continues on every dollar, and above $200,000 an extra 0.9% Medicare withholding starts.'
    ],
    [
      'Do self-employed workers pay FICA?',
      'Self-employed workers pay both halves as self-employment tax — 15.3% in total (12.4% Social Security up to the wage base plus 2.9% Medicare) — because there is no employer to pay the matching half. They can deduct half of that tax from their income when figuring adjusted gross income. The full self-employment rules are a separate topic; this article covers employees.'
    ],
    [
      'Can I reduce my FICA tax?',
      'Not through your W-4 — FICA rates are fixed by law and do not change with your withholding choices. What can change the amount is the definition of FICA wages: pre-tax health premiums paid through a cafeteria plan reduce Social Security and Medicare wages, while 401(k) contributions do not — they lower income-tax wages only. Beyond that, the only lever is the wage base itself: once your earnings pass $184,500, the Social Security part stops.'
    ],
  ],
  body: `
      <section class="article-section" id="short-answer">
        <h2>The Short Answer: 7.65% of Your Pay</h2>
        <p>FICA is the payroll tax that funds Social Security and Medicare. Every paycheck, your employer withholds <strong>7.65% of your gross pay</strong> for it — and then pays a matching 7.65% on top, so the two programs together receive <strong>15.3%</strong> of your wages. It is not income tax, it has no brackets, and you cannot adjust it on your W-4. It simply runs on every dollar you earn, with one big exception: the Social Security part stops once your yearly wages pass $184,500.</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Component</th><th>Your share</th><th>Employer match</th><th>Cap</th></tr></thead>
            <tbody>
              <tr><td>Social Security (OASDI)</td><td>6.2%</td><td>6.2%</td><td>Stops at $184,500 of wages</td></tr>
              <tr><td>Medicare (Hospital Insurance)</td><td>1.45%</td><td>1.45%</td><td>No cap — every dollar</td></tr>
              <tr><td>Additional Medicare withholding</td><td>0.9% over $200,000</td><td>None</td><td>Employee only</td></tr>
              <tr><td><strong>Total FICA</strong></td><td><strong>7.65%</strong></td><td><strong>7.65%</strong></td><td><strong>15.3% combined</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>If you only remember one thing, make it this: the two lines on your pay stub labeled Social Security and Medicare are not two mysteries — they are FICA, and their rates are fixed. The rest of this guide shows where the money goes, how the cap changes your paycheck late in the year, and how to check your own stub in under a minute.</p>
      </section>

      <section class="article-section" id="fica-tiers">
        <h2>FICA at a Glance: What Applies at Each Wage Level</h2>
        <p>FICA does not apply evenly at every income level. The Social Security part switches off at the wage base, while Medicare keeps going — so your effective FICA rate actually falls as your pay rises past the cap:</p>
        <div class="tier-cards">
          <div class="tier-card"><div class="tier-card-range">7.65%</div><h3>Up to $184,500</h3><p>Both parts apply: 6.2% Social Security + 1.45% Medicare on every dollar of wages.</p></div>
          <div class="tier-card"><div class="tier-card-range">1.45%</div><h3>$184,500 – $200,000</h3><p>Social Security stops at the wage base; only Medicare keeps running.</p></div>
          <div class="tier-card"><div class="tier-card-range">2.35%</div><h3>Over $200,000</h3><p>Medicare 1.45% plus 0.9% additional Medicare withholding — employee only, no employer match on the extra 0.9%.</p></div>
        </div>
        <p><strong>In this article:</strong> a $60,000 salary pays $4,590 in FICA, while a $250,000 salary pays $15,514 — an effective employee rate of only 6.2%, because the Social Security part stopped at $184,500. The cap is the reason high earners pay a lower FICA percentage than everyone else.</p>
      </section>

      <section class="article-section" id="two-components">
        <h2>The Two Taxes Inside FICA</h2>
        <p>FICA looks like one deduction but it is two taxes with different jobs, different rates, and different rules. Splitting them apart is the key to reading your pay stub correctly.</p>
        <h3>Social Security (OASDI) — 6.2%</h3>
        <p>OASDI stands for Old-Age, Survivors, and Disability Insurance. This is the retirement program most people mean when they say "Social Security": monthly benefits for retired workers, plus benefits for their dependents, survivors of deceased workers, and workers who become disabled. You pay 6.2% and your employer pays 6.2%, for 12.4% combined — but only on wages up to the annual wage base, which is <strong>$184,500 for 2026</strong>. Every dollar above that is exempt from Social Security tax, which is why your late-year paychecks can suddenly look bigger.</p>
        <h3>Medicare (Hospital Insurance) — 1.45%</h3>
        <p>The Medicare part funds Hospital Insurance: inpatient hospital care for people 65 and older and for certain younger people with disabilities. You pay 1.45% and your employer pays 1.45%, for 2.9% combined — on <strong>every dollar of wages, with no cap at all</strong>. On top of that, an additional 0.9% Medicare tax applies to high earners: your employer must start withholding it once the wages it pays you in the year pass $200,000, and your employer does not match that extra 0.9%.</p>
        <p>One distinction worth knowing: the $200,000 withholding trigger is the same for everyone, but the actual tax liability thresholds depend on filing status — $200,000 for single filers, $250,000 for married couples filing jointly, and $125,000 for married filing separately. If your employer withheld the extra 0.9% but your total liability is lower (for example, a joint return under $250,000), the difference is reconciled on your tax return.</p>
        <p>Where does the money go? Each part flows into its own federal trust fund, managed by the Treasury. That separation is exactly why the two parts can follow different rules: the Social Security trust funds and the Medicare Hospital Insurance trust fund are accounted for independently, even though both deductions arrive on the same paycheck.</p>
      </section>

      <section class="article-section" id="formulas">
        <h2>The FICA Formulas</h2>
        <p>Three formulas cover every employee paycheck. "Wages" here means your Social Security and Medicare wages — usually your gross pay, with the pre-tax exceptions explained in the Limitations section.</p>
        <div class="table-wrap">
          <table class="pay-table desc-table">
            <thead><tr><th>Step</th><th>Math</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Step 1 — Social Security</td><td>Smaller of (wages, $184,500) × 6.2%</td><td>Your Social Security withholding</td></tr>
              <tr><td>Step 2 — Medicare</td><td>Wages × 1.45%</td><td>Your Medicare withholding</td></tr>
              <tr><td>Step 3 — Additional Medicare</td><td>Wages over $200,000 (per employer) × 0.9%</td><td>Extra withholding, employee only</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>Step 1 + Step 2 + Step 3</strong></td><td><strong>Your FICA for the period</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Your employer runs the same three steps with the same rates and sends a matching amount for Steps 1 and 2 — but not Step 3. That is why the combined FICA cost of employing someone is 15.3% of wages below the cap, not 7.65%: the 7.65% you see is only your half.</p>
      </section>

      <section class="article-section" id="worked-examples">
        <h2>Worked Examples: Three Paychecks</h2>
        <p>Each example is verifiable with the three formulas above. All figures assume the full gross amount counts as FICA wages.</p>
        <h3>Example 1 — $60,000 salary</h3>
        <p>A $60,000 salary sits entirely below the wage base, so both parts apply to the full amount:</p>
        <div class="table-wrap">
          <table class="pay-table worked-table">
            <thead><tr><th>Step</th><th>Math</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Step 1 — Social Security</td><td>$60,000 × 6.2%</td><td>$3,720.00</td></tr>
              <tr><td>Step 2 — Medicare</td><td>$60,000 × 1.45%</td><td>$870.00</td></tr>
              <tr><td>Step 3 — Additional Medicare</td><td>Below $200,000</td><td>$0.00</td></tr>
              <tr><td><strong>Total employee FICA</strong></td><td><strong>$3,720 + $870</strong></td><td><strong>$4,590.00</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Your employer matches $4,590, so the two programs receive $9,180 on a $60,000 salary. This is the same $4,590 FICA line used in our <a href="/articles/60000-a-year-after-taxes/">$60,000 after-tax guide</a> — the two articles agree because they use the same 2026 rules.</p>
        <h3>Example 2 — $2,000 biweekly paycheck</h3>
        <p>Per paycheck, the same rates apply to the period's gross pay:</p>
        <div class="table-wrap">
          <table class="pay-table worked-table">
            <thead><tr><th>Step</th><th>Math</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Step 1 — Social Security</td><td>$2,000 × 6.2%</td><td>$124.00</td></tr>
              <tr><td>Step 2 — Medicare</td><td>$2,000 × 1.45%</td><td>$29.00</td></tr>
              <tr><td><strong>Total per paycheck</strong></td><td><strong>$124 + $29</strong></td><td><strong>$153.00</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Over 26 biweekly checks, that is $153 × 26 = $3,978 a year — which is exactly the FICA on a $52,000 salary ($2,000 × 26), as in our <a href="/articles/25-an-hour-after-taxes/">$25-an-hour after-tax guide</a>. If your stub shows Social Security and Medicare lines, divide each by your gross pay for the period: you should get 6.2% and 1.45%.</p>
        <h3>Example 3 — $250,000 salary (cap + additional tax)</h3>
        <p>At $250,000, all three steps matter — and the cap visibly lowers the rate:</p>
        <div class="table-wrap">
          <table class="pay-table worked-table">
            <thead><tr><th>Step</th><th>Math</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Step 1 — Social Security</td><td>$184,500 × 6.2% (capped)</td><td>$11,439.00</td></tr>
              <tr><td>Step 2 — Medicare</td><td>$250,000 × 1.45%</td><td>$3,625.00</td></tr>
              <tr><td>Step 3 — Additional Medicare</td><td>($250,000 − $200,000) × 0.9%</td><td>$450.00</td></tr>
              <tr><td><strong>Total employee FICA</strong></td><td><strong>$11,439 + $3,625 + $450</strong></td><td><strong>$15,514.00</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Your employer matches Steps 1 and 2 only: $11,439 + $3,625 = $15,064. Combined, the two programs receive $30,578 on a $250,000 salary. Note the effective employee rate: $15,514 ÷ $250,000 = 6.2% — below the headline 7.65% — because $65,500 of this salary escaped Social Security tax entirely. A biweekly-paid $200,000 earner feels the same effect late in the year: the wage base is reached during the 24th check, and the last two checks of the year carry no Social Security withholding at all.</p>
        <p><em>Honesty note:</em> these examples assume every dollar of gross pay counts as FICA wages. Pre-tax health premiums under a cafeteria plan would lower the FICA wages and every figure above; 401(k) contributions would not. See Limitations.</p>
      </section>

      <section class="article-section" id="fica-vs-income-tax">
        <h2>FICA vs Federal Income Tax</h2>
        <p>The most common confusion on a pay stub is treating FICA as just another income tax. They behave very differently:</p>
        <div class="table-wrap">
          <table class="pay-table desc-table">
            <thead><tr><th>Feature</th><th>FICA</th><th>Federal income tax</th><th>Limitation</th></tr></thead>
            <tbody>
              <tr><td>Rate shape</td><td>Flat: 7.65% (then lower past the cap)</td><td>Brackets: 10% to 37%</td><td>FICA has no brackets or standard deduction</td></tr>
              <tr><td>Cap</td><td>Social Security stops at $184,500</td><td>No cap</td><td>Medicare never stops; income tax never stops</td></tr>
              <tr><td>Adjustable on W-4?</td><td>No — fixed by law</td><td>Yes — withholding follows your W-4</td><td>You cannot tune FICA by changing your W-4</td></tr>
              <tr><td>What it funds</td><td>Social Security + Medicare only</td><td>General federal spending</td><td>Separate trust funds vs general revenue</td></tr>
              <tr><td>Employer match</td><td>Yes — full 7.65% match</td><td>No match</td><td>Your employer's FICA cost is invisible on your stub</td></tr>
            </tbody>
          </table>
        </div>
        <p>That last row matters for job offers: a $60,000 salary costs your employer $64,590 once their $4,590 FICA match is included. When you compare a salaried offer with freelance work, remember the freelancer pays both halves — 15.3% — with no employer covering any of it. Our <a href="/articles/gross-pay-vs-net-pay/">gross pay vs net pay guide</a> walks through the full journey from gross to take-home.</p>
      </section>

      <section class="article-section" id="how-to-use">
        <h2>How to Use the Calculator</h2>
        <p>Check your own FICA in four steps:</p>
        <ol>
          <li><strong>Step 1 — Enter your gross pay</strong> into the paycheck calculator, with your pay frequency.</li>
          <li><strong>Step 2 — Add pre-tax deductions</strong> if you have any, so the calculator can show which lines they affect.</li>
          <li><strong>Step 3 — Check the receipt:</strong> the panel under the tool shows your inputs, the formula, and the result — with Social Security and Medicare as separate lines.</li>
          <li><strong>Step 4 — Compare:</strong> try the three examples above to see how the cap and the additional tax change the result at different pay levels.</li>
        </ol>
        <p><a class="btn" href="/paycheck-calculator/">Run my numbers</a></p>
      </section>

      <section class="article-section" id="limitations">
        <h2>Limitations</h2>
        <p>Keep these limits in mind before using any figure above as a budget:</p>
        <ol>
          <li><strong>State taxes excluded:</strong> state income tax, and in a few states disability insurance, come out separately and are not part of FICA.</li>
          <li><strong>Pre-tax deductions are not all equal:</strong> health premiums paid through a cafeteria plan reduce Social Security and Medicare wages, but 401(k) contributions do not — they lower income-tax wages only. Your stub's FICA lines may therefore be based on a higher wage figure than your income-tax lines.</li>
          <li><strong>Withholding vs liability for the extra 0.9%:</strong> employers must withhold it once they pay you over $200,000, but your actual liability depends on filing status ($250,000 joint, $125,000 married filing separately). Any over-withholding is reconciled on your return.</li>
          <li><strong>Employees only in this guide:</strong> self-employed workers pay both halves as self-employment tax (15.3%) with different deduction rules — the note in the FAQs is a pointer, not a full guide.</li>
          <li><strong>Not tax advice:</strong> figures use 2026 federal rules. Your return may differ with credits, other income, multiple employers, or tips and other special wage types.</li>
        </ol>
      </section>

      <section class="article-section" id="faqs">
        <h2>Frequently Asked Questions</h2>
        <p>The questions readers ask most about the FICA lines on their pay stub:</p>
      </section>

      <section class="article-section" id="key-takeaways">
        <h2>Key Takeaways &amp; Action Plan</h2>
        <div class="takeaways-box">
          <ul>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>FICA is 7.65% of your pay:</strong> 6.2% Social Security + 1.45% Medicare, matched by your employer for 15.3% combined.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>The $184,500 wage base is the switch:</strong> past it, Social Security withholding stops and your paycheck rises — Medicare never stops.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Over $200,000, add 0.9%:</strong> additional Medicare withholding, employee only, no employer match.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>401(k) does not cut FICA:</strong> it lowers income-tax wages only; cafeteria-plan health premiums lower FICA wages too.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Check your stub in one minute:</strong> Social Security ÷ gross pay should be 6.2% (or 0% past the cap); Medicare ÷ gross pay should be 1.45% (or 2.35% past $200,000).</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>For the full picture,</strong> read our <a href="/articles/how-to-calculate-taxes-on-paycheck/">paycheck tax guide</a> and the after-tax series — <a href="/articles/20-an-hour-after-taxes/">$20 an hour</a>, <a href="/articles/25-an-hour-after-taxes/">$25 an hour</a>, <a href="/articles/50000-a-year-after-taxes/">$50,000</a>, <a href="/articles/60000-a-year-after-taxes/">$60,000</a>, and <a href="/articles/100000-a-year-after-taxes/">$100,000</a> — which all link back here for the FICA piece.</li>
          </ul>
        </div>
        <div class="methodology-box">
          <h3>Sources &amp; Method</h3>
          <p>Figures use 2026 federal rules: Social Security 6.2% to the $184,500 wage base and Medicare 1.45% with no cap, per IRS Topic No. 751 (Social Security and Medicare withholding rates); additional Medicare withholding above $200,000 of employer-paid wages, with liability thresholds of $250,000 (married filing jointly) and $125,000 (married filing separately). Worked examples were recomputed from the formulas in this article and cross-checked against the FICA lines in the site's after-tax series ($60,000 → $4,590; $52,000 → $3,978; $100,000 → $7,650). State income tax, retirement contributions, health premiums, bonuses, and overtime are excluded except where a pre-tax note says otherwise. This article is general information, not tax advice.</p>
        </div>
      </section>
      <div class="article-hero-cta" style="margin-top:40px">
        <div>
          <h2>Check your own FICA</h2>
          <p>Enter your pay and schedule to see your Social Security and Medicare lines, then work through the same three formulas.</p>
        </div>
        <a class="btn" href="/paycheck-calculator/">Run my numbers</a>
      </div>
  `
};

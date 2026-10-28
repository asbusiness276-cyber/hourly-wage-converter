export const article12 = {
  slug: 'no-tax-on-tips',
  breadcrumb: 'No Tax on Tips',
  category: 'Taxes & Deductions',
  minutes: 10,
  datePublished: '2026-10-22',
  dateModified: '2026-10-22',
  title: 'No Tax on Tips 2026: Who Qualifies?',
  h1: 'No Tax on Tips 2026: Who Qualifies, the $25,000 Limit, and the Full Occupation List',
  desc: 'No tax on tips is a federal deduction of up to $25,000 for 2025\u20132028. See who qualifies, the full 71-occupation list, phase-outs, and how to claim it.',
  image: '/assets/images/no-tax-on-tips.jpg',
  imageAlt: 'No Tax on Tips 2026 guide graphic showing a restaurant bill with cash tips and coins beside a federal tax deduction chart with a $25,000 limit',
  toc: [
    ['short-answer', 'The Short Answer: A Deduction, Not a Free Pass'],
    ['who-qualifies', 'Who Qualifies: Every Rule in One Place'],
    ['what-counts', 'What Counts as a Qualified Tip (and What Does Not)'],
    ['occupation-list', 'The Full Occupation List: All 71 Jobs in 8 Groups'],
    ['how-much-save', 'How Much You Save: Worked Examples'],
    ['how-to-claim', 'How to Claim It: Reporting, W-2s, and Your Return'],
    ['state-taxes', 'State Taxes: Your State May Not Follow'],
    ['faqs', 'Frequently Asked Questions About No Tax on Tips'],
    ['key-takeaways', 'Key Takeaways & Action Plan'],
  ],
  faqs: [
    [
      'Is no tax on tips really tax-free?',
      'Not exactly. It is a federal income-tax deduction of up to $25,000 of qualified tips, claimed when you file for 2025\u20132028. You still report every tip, tips still owe Social Security and Medicare tax, and withholding continues as before \u2014 the benefit arrives as a smaller bill or a bigger refund.'
    ],
    [
      'Who qualifies for the no tax on tips deduction?',
      'Workers in one of the 71 occupations on the IRS list who receive voluntary cash tips reported on a W-2, a 1099, or Form 4137. You need a Social Security number on your return, must file jointly if married, and stay under the phase-out starting at $150,000 of modified AGI ($300,000 joint).'
    ],
    [
      'Do cash tips count, or only card tips?',
      'Both count \u2014 cash, checks, card tips, gift cards, and electronic payments, including tip-pool shares. What does not count: mandatory service charges and automatic gratuities (wages, not tips), in-kind gifts, and cryptocurrency tips.'
    ],
    [
      'Can I claim the tips deduction if I take the standard deduction?',
      'Yes \u2014 whether you itemize or take the standard deduction. It reduces taxable income by up to $25,000 of qualified tips.'
    ],
    [
      'Does no tax on tips apply to self-employed and gig workers?',
      'Yes, if your occupation is listed \u2014 rideshare and delivery drivers are the classic example. One extra limit: the deduction cannot exceed the net income of the business the tips came from. Tips still owe self-employment tax.'
    ],
    [
      'Will my state also stop taxing my tips?',
      'It depends. States that automatically follow federal changes generally let it flow through; a few passed their own versions \u2014 New York added a matching exclusion from 2026. Others, including Illinois and Georgia, require an add-back.'
    ],
  ],
  body: `
      <p class=\"lead\">\"No tax on tips\" is real \u2014 but it is a deduction, not an exemption. For tax years 2025 through 2028, workers in 71 listed occupations can deduct up to $25,000 of qualified tips. Tips are still reported as income, still owe Social Security and Medicare tax, and your paycheck is unchanged during the year \u2014 your final federal income-tax bill is not.</p>

      <p>As the technical tools architect at Hourly Wage Converter, I build the calculators tipped workers use, and this is their most-asked tax question. This guide pulls the whole rule set into one place: who qualifies, what counts, the full 71-occupation list, the phase-out, worked examples, and how to claim it.</p>

      <!-- Above the Fold Interactive Tool CTA -->
      <div class=\"article-hero-cta\">
        <div class=\"hero-cta-content\">
          <span class=\"hero-cta-badge\">Interactive Paycheck Tool</span>
          <h2 class=\"hero-cta-title\">See Your Full Paycheck First</h2>
          <p class=\"hero-cta-desc\">Enter your rate, hours, and pay frequency to estimate your gross paycheck \u2014 the income your tips sit on top of. The deduction is settled later, on your return.</p>
        </div>
        <a href=\"/paycheck-calculator/\" class=\"calculate-button hero-cta-btn\">Open Free Paycheck Calculator</a>
      </div>

      <!-- Section 1: Short Answer -->
      <h2 id=\"short-answer\">The Short Answer: A Deduction, Not a Free Pass</h2>
      <p>The One Big Beautiful Bill Act, signed July 4, 2025, added a deduction (IRC Section 224) for \u201cqualified tips.\u201d The headline and the reality differ in four ways:</p>

      <ul>
        <li><strong>It is a deduction, not an exemption.</strong> You report all tips as income, then deduct up to $25,000 when you file. Your saving is the deduction times your marginal rate \u2014 not the full $25,000.</li>
        <li><strong>Federal income tax only.</strong> Social Security and Medicare tax (7.65%) still applies; state rules vary.</li>
        <li><strong>It is temporary.</strong> Tax years 2025\u20132028 only, unless Congress extends it.</li>
        <li><strong>It is occupation-based.</strong> Only tips earned in one of the 71 listed occupations qualify \u2014 see <a href=\"#occupation-list\">the full list below</a>.</li>
      </ul>

      <p>It is a sibling of the overtime deduction in our <a href=\"/articles/no-tax-on-overtime/\">no-tax-on-overtime guide</a>: same window, same claim-at-filing design. Earn both, and the two deductions stack.</p>

      <!-- Section 2: Who Qualifies -->
      <h2 id=\"who-qualifies\">Who Qualifies: Every Rule in One Place</h2>
      <p>Five gates stand between you and the deduction:</p>

      <div class=\"table-wrap\" style=\"margin:20px 0\">
        <table class=\"pay-table\">
          <thead>
            <tr>
              <th scope=\"col\">Requirement</th>
              <th scope=\"col\">The rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Occupation</strong></td>
              <td>Your job is on the IRS list of 71 occupations that customarily and regularly received tips before December 31, 2024</td>
            </tr>
            <tr>
              <td><strong>Qualified tips</strong></td>
              <td>Voluntary tips in cash or cash equivalents, received directly or through a tip pool, reported on a W-2, a 1099, or Form 4137</td>
            </tr>
            <tr>
              <td><strong>The cap</strong></td>
              <td>Up to $25,000 per return per year \u2014 a married couple shares one cap, even if both earn tips</td>
            </tr>
            <tr>
              <td><strong>Income phase-out</strong></td>
              <td>Shrinks by $100 per $1,000 of modified AGI over $150,000 ($300,000 joint); gone at $400,000 ($550,000 joint)</td>
            </tr>
            <tr>
              <td><strong>Filing rules</strong></td>
              <td>A Social Security number must be on the return; married taxpayers must file jointly \u2014 married filing separately cannot claim it</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure>
        <img src=\"/assets/images/ui-no-tax-on-tips-rules.webp\" alt=\"Infographic summarizing the no tax on tips deduction: $25,000 cap, tax years 2025 to 2028, and the $150,000 and $300,000 phase-out thresholds\" width=\"800\" height=\"450\" loading=\"lazy\">
        <figcaption>The core numbers: a $25,000 cap, four tax years, and a phase-out from $150,000 ($300,000 joint).</figcaption>
      </figure>

      <p>Two edges catch people out. First, the phase-out shrinks the deduction itself: at $180,000 of modified AGI, a single filer's maximum falls by $3,000, to $22,000 \u2014 and it reaches zero at $400,000. Second, self-employed workers face an extra limit \u2014 the deduction cannot exceed the net income of the business the tips came from.</p>

      <!-- Section 3: What Counts -->
      <h2 id=\"what-counts\">What Counts as a Qualified Tip (and What Does Not)</h2>
      <p>A qualified tip passes three tests: it is paid in cash or a cash equivalent, the customer chose it freely, and it lands on an information return. The IRS final regulations draw the lines like this:</p>

      <p><strong>Counts as a qualified tip:</strong></p>
      <ul>
        <li>Cash, credit and debit card tips, checks, gift cards, and electronic payments</li>
        <li>Tips received through a tip pool \u2014 including back-of-house staff such as dishwashers and cooks</li>
        <li>Screen tips, as long as the customer could reduce the amount to zero</li>
        <li>Amounts paid on top of a mandatory charge, for the portion above it</li>
      </ul>

      <p><strong>Does not count:</strong></p>
      <ul>
        <li><strong>Mandatory service charges and automatic gratuities.</strong> An 18% charge on a large party's bill is wages, not a tip, even if passed to staff</li>
        <li><strong>In-kind gifts</strong> \u2014 tickets, meals, or merchandise are not cash tips</li>
        <li><strong>Digital assets.</strong> Cryptocurrency tips are excluded under the final regulations</li>
        <li><strong>Amounts paid by your own employer,</strong> or where you hold a significant ownership interest in the paying business \u2014 presumed to be recharacterized wages</li>
        <li><strong>Tips received in a specified service trade or business</strong> (health, law, accounting, performing arts, athletics) or tied to illegal activity</li>
        <li><strong>A manager's or supervisor's tip-pool share.</strong> Direct tips for their own service in a listed occupation can qualify; pool shares cannot</li>
      </ul>

      <figure>
        <img src=\"/assets/images/ui-qualified-tip-checklist.webp\" alt=\"Checklist infographic showing which payments count as qualified tips and which do not, including service charges and digital assets\" width=\"800\" height=\"450\" loading=\"lazy\">
        <figcaption>Voluntary and cash-based is the test. If the customer could not say no, it is not a qualified tip.</figcaption>
      </figure>

      <!-- Section 4: Occupation List -->
      <h2 id=\"occupation-list\">The Full Occupation List: All 71 Jobs in 8 Groups</h2>
      <p>Every qualifying job carries a Treasury Tipped Occupation Code (TTOC). The 2025 proposal listed 68 occupations; the final regulations added three \u2014 visual artists, floral designers, gas pump attendants \u2014 for <strong>71</strong>. What matters is the work you do, not the industry label:</p>

      <div class=\"table-wrap\" style=\"margin:20px 0\">
        <table class=\"pay-table\">
          <thead>
            <tr>
              <th scope=\"col\">Category</th>
              <th scope=\"col\">Qualifying occupations</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Beverage and Food Service</strong> (10)</td>
              <td>Bartenders; wait staff; food and beverage servers, non-restaurant; dining room and cafeteria attendants and bartender helpers; chefs and cooks; food preparation workers; fast food and counter workers; dishwashers; host staff (restaurant, lounge, and coffee shop); bakers</td>
            </tr>
            <tr>
              <td><strong>Entertainment and Events</strong> (11)</td>
              <td>Gambling dealers; gambling change persons and booth cashiers; gambling cage workers; gambling and sports book writers and runners; dancers; musicians and singers; disc jockeys (except radio); entertainers and performers; digital content creators; ushers, lobby attendants, and ticket takers; locker room, coatroom, and dressing room attendants</td>
            </tr>
            <tr>
              <td><strong>Hospitality and Guest Services</strong> (4)</td>
              <td>Baggage porters and bellhops; concierges; hotel, motel, and resort desk clerks; maids and housekeeping cleaners</td>
            </tr>
            <tr>
              <td><strong>Home Services</strong> (9)</td>
              <td>Home maintenance and repair workers; home landscaping and groundskeeping workers; home electricians; home plumbers; home heating and air conditioning mechanics and installers; home appliance installers and repairers; home cleaning service workers; locksmiths; roadside assistance workers</td>
            </tr>
            <tr>
              <td><strong>Personal Services</strong> (10)</td>
              <td>Personal care and service workers; private event planners; private event and portrait photographers; private event videographers; event officiants; pet and show animal caretakers; tutors; nannies and babysitters; visual artists; floral designers</td>
            </tr>
            <tr>
              <td><strong>Personal Appearance and Wellness</strong> (11)</td>
              <td>Skincare specialists; massage therapists; barbers, hairdressers, hairstylists, and cosmetologists; shampooers; manicurists and pedicurists; eyebrow and eyelash technicians; makeup artists; exercise trainers and group fitness instructors; tattoo artists and piercers; tailors; shoe and leather workers and repairers</td>
            </tr>
            <tr>
              <td><strong>Recreation and Instruction</strong> (6)</td>
              <td>Golf caddies; self-enrichment teachers; recreational and tour pilots; tour guides and escorts; travel guides; sports and recreation instructors</td>
            </tr>
            <tr>
              <td><strong>Transportation and Delivery</strong> (10)</td>
              <td>Parking and valet attendants; taxi and rideshare drivers and chauffeurs; shuttle drivers; goods delivery people (including app and platform delivery); personal vehicle and equipment cleaners; private and charter bus drivers; water taxi operators and charter boat workers; rickshaw, pedicab, and carriage drivers; home movers; gas pump attendants</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>If your job is not on this list, your tips do not qualify \u2014 even if customers tip you daily. Some entries surprise people: dishwashers and cooks qualify because tip pools count; digital content creators qualify for voluntary viewer payments, but not for payments that buy access.</p>

      <!-- Section 5: Worked Examples -->
      <h2 id=\"how-much-save\">How Much You Save: Worked Examples</h2>
      <p>A deduction saves tax at your marginal rate, so the same $25,000 is worth very different amounts:</p>

      <div class=\"table-wrap\" style=\"margin:20px 0\">
        <table class=\"pay-table\">
          <thead>
            <tr>
              <th scope=\"col\">Qualified tips deducted</th>
              <th scope=\"col\">Saved at 10%</th>
              <th scope=\"col\">Saved at 12%</th>
              <th scope=\"col\">Saved at 22%</th>
              <th scope=\"col\">Saved at 24%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$10,000</td>
              <td>$1,000</td>
              <td>$1,200</td>
              <td>$2,200</td>
              <td>$2,400</td>
            </tr>
            <tr>
              <td>$15,000</td>
              <td>$1,500</td>
              <td>$1,800</td>
              <td>$3,300</td>
              <td>$3,600</td>
            </tr>
            <tr>
              <td>$25,000 (the cap)</td>
              <td>$2,500</td>
              <td>$3,000</td>
              <td>$5,500</td>
              <td>$6,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <figure>
        <img src=\"/assets/images/ui-tips-deduction-savings.webp\" alt=\"Bar infographic showing estimated federal income tax saved by deducting $25,000 of tips at the 10, 12, 22, and 24 percent marginal tax rates\" width=\"800\" height=\"450\" loading=\"lazy\">
        <figcaption>The deduction removes income, not tax \u2014 your bracket decides the prize: $2,500 to $6,000 at the cap.</figcaption>
      </figure>

      <p><strong>Example 1 \u2014 the full-time server.</strong> Maria earns $21,000 in wages and $13,500 in reported tips, all qualified, so she deducts $13,500. At her 12% marginal rate that saves about <strong>$1,620</strong>. Her tips still owed 7.65% Social Security and Medicare tax \u2014 roughly $1,033 \u2014 untouched by the deduction.</p>

      <p><strong>Example 2 \u2014 two tipped spouses.</strong> Devon, a bartender, reports $19,000 of tips; his spouse Priya, a hairstylist, reports $12,500. Together that is $31,500 \u2014 but the cap is $25,000 <em>per return</em>, so they deduct $25,000, worth about <strong>$3,000</strong> at their 12% rate. The shared cap is the deduction's most common disappointment for tipped couples.</p>

      <p><strong>Example 3 \u2014 the gig driver.</strong> A rideshare driver receives $8,400 in tips and nets $36,000, so the full $8,400 is deductible. Had net income been $7,000, the deduction would cap at $7,000 \u2014 and the tips would owe self-employment tax either way.</p>

      <div class=\"formula-card\">
        <div class=\"formula\">Your saving \u2248 qualified tips deducted \u00d7 your marginal tax rate</div>
        <p class=\"example\">Example: $13,500 of tips \u00d7 12% = about $1,620 saved; at the cap, $25,000 \u00d7 22% = $5,500. To see the paycheck those tips ride on, try our <a href=\"/paycheck-calculator/\">Paycheck Calculator</a>.</p>
      </div>

      <!-- Section 6: How to Claim -->
      <h2 id=\"how-to-claim\">How to Claim It: Reporting, W-2s, and Your Return</h2>
      <p>The deduction lives and dies on reporting: tips that never reach a W-2, a 1099, or Form 4137 do not qualify:</p>

      <ul>
        <li><strong>Track tips daily.</strong> Keep a daily tip diary (Form 4070A). App and card tips are captured automatically; cash is where records matter.</li>
        <li><strong>Report tips to your employer monthly.</strong> Employees report tips of $20 or more per month (Form 4070 or the employer's system), so the year-end W-2 matches the diary.</li>
        <li><strong>Check your year-end forms.</strong> For 2025, employers could show cash tips in Box 14 or on a separate statement (with IRS penalty relief). From 2026, W-2s separately report qualified cash tips and your TTOC code. Gig workers use their 1099s and platform records.</li>
        <li><strong>Claim it on your federal return.</strong> Deduct the qualified amount (up to $25,000, after any phase-out) on Form 1040, itemizing or not. Tips never reported to an employer go on Form 4137.</li>
      </ul>

      <p>Set this expectation now: <strong>your paycheck does not change during the year.</strong> Withholding and the full 7.65% FICA continue as before; like the overtime deduction in <a href=\"/articles/is-overtime-taxed-at-a-higher-rate/\">Is Overtime Taxed at a Higher Rate?</a>, the benefit arrives at filing.</p>

      <!-- Section 7: State Taxes -->
      <h2 id=\"state-taxes\">State Taxes: Your State May Not Follow</h2>
      <p>The deduction is federal; whether your state copies it depends on how it ties its code to Washington's:</p>

      <ul>
        <li><strong>Rolling-conformity states</strong> adopt federal changes automatically, so the deduction generally flows through \u2014 Oregon and North Dakota give tipped workers the break on both returns.</li>
        <li><strong>States with their own versions.</strong> New York added its own exclusion of up to $25,000 from tax year 2026; Colorado kept the tips deduction while dropping the overtime one; Michigan and Indiana enacted limited versions.</li>
        <li><strong>Decoupled states.</strong> Illinois and Georgia require an add-back, so tips stay fully taxable at state level; California has signaled it will not adopt it.</li>
        <li><strong>No-income-tax states</strong> (Alaska, Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas, Washington, Wyoming) make the question moot.</li>
      </ul>

      <p>State positions were still moving through 2026, so confirm your state's current rule before assuming the saving doubles. Our <a href=\"/articles/how-to-calculate-taxes-on-paycheck/\">paycheck tax guide</a> shows where state tax fits in a pay stub.</p>

      <!-- Section 8: FAQs -->
      <h2 id=\"faqs\">Frequently Asked Questions About No Tax on Tips</h2>
      <p>Straight answers to the questions tipped workers ask most:</p>

      <div class=\"faq-list\">
        <details>
          <summary>Is no tax on tips really tax-free?<svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\"><path d=\"m6 9 6 6 6-6\"/></svg></summary>
          <p>Not exactly. It is a federal income-tax deduction of up to $25,000 of qualified tips, claimed when you file for 2025\u20132028. You still report every tip, tips still owe Social Security and Medicare tax, and withholding continues as before \u2014 the benefit arrives as a smaller bill or a bigger refund.</p>
        </details>
        <details>
          <summary>Who qualifies for the no tax on tips deduction?<svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\"><path d=\"m6 9 6 6 6-6\"/></svg></summary>
          <p>Workers in one of the 71 occupations on the IRS list who receive voluntary cash tips reported on a W-2, a 1099, or Form 4137. You need a Social Security number on your return, must file jointly if married, and stay under the phase-out starting at $150,000 of modified AGI ($300,000 joint).</p>
        </details>
        <details>
          <summary>Do cash tips count, or only card tips?<svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\"><path d=\"m6 9 6 6 6-6\"/></svg></summary>
          <p>Both count \u2014 cash, checks, card tips, gift cards, and electronic payments, including tip-pool shares. What does not count: mandatory service charges and automatic gratuities (wages, not tips), in-kind gifts, and cryptocurrency tips.</p>
        </details>
        <details>
          <summary>Can I claim the tips deduction if I take the standard deduction?<svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\"><path d=\"m6 9 6 6 6-6\"/></svg></summary>
          <p>Yes \u2014 whether you itemize or take the standard deduction. It reduces taxable income by up to $25,000 of qualified tips.</p>
        </details>
        <details>
          <summary>Does no tax on tips apply to self-employed and gig workers?<svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\"><path d=\"m6 9 6 6 6-6\"/></svg></summary>
          <p>Yes, if your occupation is listed \u2014 rideshare and delivery drivers are the classic example. One extra limit: the deduction cannot exceed the net income of the business the tips came from. Tips still owe self-employment tax.</p>
        </details>
        <details>
          <summary>Will my state also stop taxing my tips?<svg width=\"17\" height=\"17\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\"><path d=\"m6 9 6 6 6-6\"/></svg></summary>
          <p>It depends. States that automatically follow federal changes generally let it flow through; a few passed their own versions \u2014 New York added a matching exclusion from 2026. Others, including Illinois and Georgia, require an add-back.</p>
        </details>
      </div>

      <!-- Section 9: Key Takeaways -->
      <h2 id=\"key-takeaways\">Key Takeaways &amp; Action Plan</h2>
      <p>A valuable break \u2014 with more conditions than the slogan suggests. The plan:</p>

      <div class=\"summary-box\">
        <h3>No Tax on Tips: Summary Checklist</h3>
        <ul>
          <li>
            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m5 12 4 4L19 6\"/></svg>
            <span><strong>Check your occupation first:</strong> Only the 71 listed jobs qualify; if yours is not listed, no tip is deductible.</span>
          </li>
          <li>
            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m5 12 4 4L19 6\"/></svg>
            <span><strong>Report every tip:</strong> Unreported tips cannot be deducted. Keep a daily log, especially for cash.</span>
          </li>
          <li>
            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m5 12 4 4L19 6\"/></svg>
            <span><strong>Know your real saving:</strong> Deducted tips \u00d7 your marginal rate \u2014 $3,000 at 12%, $5,500 at 22%, at the cap.</span>
          </li>
          <li>
            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m5 12 4 4L19 6\"/></svg>
            <span><strong>Watch the shared cap:</strong> Two tipped spouses split one $25,000 limit; married filing separately gets nothing.</span>
          </li>
          <li>
            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m5 12 4 4L19 6\"/></svg>
            <span><strong>Expect nothing mid-year:</strong> Withholding and FICA continue as usual; the saving arrives with your refund.</span>
          </li>
          <li>
            <svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"m5 12 4 4L19 6\"/></svg>
            <span><strong>Check your state separately:</strong> Some copy the break, some add it back, nine never taxed tips.</span>
          </li>
        </ul>
      </div>

      <div class=\"article-hero-cta\" style=\"margin-top:32px\">
        <div class=\"hero-cta-content\">
          <span class=\"hero-cta-badge\">Interactive Paycheck Tool</span>
          <h2 class=\"hero-cta-title\">Model the Paycheck Your Tips Ride On</h2>
          <p class=\"hero-cta-desc\">Estimate your gross pay per check \u2014 the base your tips and deductions are calculated from.</p>
        </div>
        <a href=\"/paycheck-calculator/\" class=\"calculate-button hero-cta-btn\">Open Free Paycheck Calculator</a>
      </div>

      <!-- Calculation Methodology Box (E-E-A-T Transparency) -->
      <div class=\"methodology-box\">
        <h3>Calculation Methodology &amp; Sources</h3>
        <p>Rules follow Internal Revenue Code Section 224, added by the One Big Beautiful Bill Act (signed July 4, 2025), and the IRS final regulations published April 13, 2026 (effective June 12, 2026), which set the 71-occupation TTOC list, the $25,000 cap, and the $100-per-$1,000 phase-out over $150,000 ($300,000 joint) of modified AGI. Savings figures are illustrative marginal-rate math, before state taxes and credits. State notes reflect 2026 guidance. This article is general education, not personal tax advice. To model the paycheck your tips are added to, use our <a href=\"/paycheck-calculator/\">Paycheck Calculator</a> or browse the <a href=\"/calculators/\">Calculator Directory</a>.</p>
      </div>
  `
};

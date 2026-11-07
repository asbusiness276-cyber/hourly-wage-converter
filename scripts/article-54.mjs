export const article54 = {
  slug: 'how-to-fill-out-a-timesheet',
  breadcrumb: 'How to Fill Out a Timesheet',
  category: 'Payroll & Compensation',
  minutes: 12,
  datePublished: '2026-11-07',
  dateModified: '2026-11-07',
  title: 'How to Fill Out a Timesheet: Hours, Decimals, and Overtime',
  seoTitle: 'How to Fill Out a Timesheet: Hours, Pay & Overtime (2026)',
  h1: 'How to Fill Out a Timesheet: Hours, Decimals, and Overtime Worked Out',
  desc: 'Fill out a timesheet the right way: convert minutes to decimals, subtract unpaid breaks, total the week, and price overtime — worked out on a $22-an-hour week.',
  image: '/assets/images/how-to-fill-out-a-timesheet.jpg',
  imageAlt: 'A restaurant line cook in a navy chef coat with orange trim inserting a blank white time card into a wall-mounted time clock in a bright commercial kitchen',
  toc: [
    ['short-answer', 'The Short Answer: One Formula, Five Steps'],
    ['what-is-a-timesheet', 'What a Timesheet Is — and What Goes on One'],
    ['minutes-to-decimals', 'Minutes to Decimals: The Conversion Payroll Uses'],
    ['worked-week', 'A Full Week, Worked Out: 42.75 Hours at $22 an Hour'],
    ['breaks', 'Breaks: Which Ones Come Off Your Total'],
    ['rounding', 'The 7-Minute Rule: What Rounding Costs You'],
    ['overnight', 'Overnight Shifts and Split Shifts'],
    ['biweekly-trap', 'The Biweekly Trap: Overtime Is Per Week, Not Per Period'],
    ['mistakes', 'Six Mistakes That Shrink Your Paycheck'],
    ['how-to-use', 'How to Use the Calculator'],
    ['limitations', 'Limitations'],
    ['faqs', 'Frequently Asked Questions'],
    ['key-takeaways', 'Key Takeaways & Action Plan'],
  ],
  faqs: [
    [
      'How do you calculate hours worked on a timesheet?',
      'For each day, subtract the clock-in time from the clock-out time, then subtract any unpaid break: (clock-out \u2212 clock-in) \u2212 unpaid break. Convert the result to decimal hours by dividing the minutes by 60, then add the daily totals for the week. Example: 8:00 AM to 4:30 PM is 8 hours 30 minutes elapsed; minus a 30-minute unpaid lunch, that is 8.00 hours. A five-day week of 8.00, 8.50, 9.25, 8.00, and 9.00 hours totals 42.75 hours — 40 regular hours plus 2.75 at time and a half.'
    ],
    [
      'How do you convert minutes to decimal hours?',
      'Divide the minutes by 60 and add the result to the whole hours: decimal hours = hours + (minutes \u00f7 60). So 15 minutes is 0.25, 30 minutes is 0.50, 45 minutes is 0.75, and 7 hours 42 minutes is 7.70. The trap is writing the minutes straight into the decimal: 8 hours 30 minutes is 8.50, never 8.30 — 8.30 in decimal means 8 hours and 18 minutes, which is 12 minutes short of what you worked.'
    ],
    [
      'What is the 7-minute rule on a time clock?',
      'It is the common name for quarter-hour rounding under 29 CFR 785.48: punches 1 to 7 minutes past a quarter-hour mark round down, and 8 to 14 minutes past round up. Clocking in at 8:07 is recorded as 8:00; clocking in at 8:08 is recorded as 8:15. The rule is only legal if it averages out fairly over time — if it always cuts the same way, it is not neutral. A worker who loses 7 minutes at the start and 7 at the end of every shift loses 70 minutes a week, which is $25.67 a week or $1,334.67 a year at $22 an hour.'
    ],
    [
      'Do lunch breaks count as hours worked?',
      'A meal break of 30 minutes or more does not count, as long as you are fully relieved of duty — you can leave the work area and do what you like. Short rest breaks of 5 to 20 minutes do count: federal law treats them as paid work time, and your employer cannot deduct them. So an 8:00 AM to 4:30 PM shift with two 15-minute paid breaks and a 30-minute unpaid lunch is 8.00 paid hours, not 7.50. Some states add their own meal-break rules — California, for example, requires a 30-minute meal period after 5 hours of work.'
    ],
    [
      'How many hours is 8:00 to 4:30 with a 30-minute lunch?',
      '8.00 hours. The elapsed time from 8:00 AM to 4:30 PM is 8 hours 30 minutes; subtract the 30-minute unpaid lunch and 8 hours remain, written as 8.00 in decimal. The same shift with a 45-minute lunch is 7.75 hours, and with no lunch at all it is 8.50 hours. If your card shows 8.30 for this shift, it is wrong — 8.30 in decimal is 8 hours and 18 minutes.'
    ],
    [
      'What happens if you forget to clock out?',
      'The day shows a missing punch, and most payroll systems pay $0 for it until it is corrected — so report it the same day and ask your manager to enter the real out time. Never guess or fill in a round number; write down the time you actually left, and keep your own note of it. Under the Fair Labor Standards Act your employer has to pay for all hours actually worked, even if the punch is missing, but the correction only happens if someone flags it before payroll runs.'
    ],
  ],
  body: `
      <div class="methodology-box">
        <h3>Quick Answer</h3>
        <p><strong>A timesheet turns clock-in and clock-out times into paid hours with one formula: (clock-out \u2212 clock-in) \u2212 unpaid break, converted to decimals.</strong> On a $22-an-hour week of 42.75 hours \u2014 40 regular hours plus 2.75 at time and a half \u2014 that is $970.75 gross and $821.92 after 2026 federal tax and FICA. The rest of this guide works that week out day by day, then prices the rounding rule, the overnight shift, and the biweekly overtime trap most guides skip.</p>
      </div>

      <section class="article-section" id="short-answer">
        <h2>The Short Answer: One Formula, Five Steps</h2>
        <p>Filling out a timesheet is five steps, and the same five steps work on paper, in a spreadsheet, or in an app. Here they are, with the headline numbers from the worked week this guide carries through every section \u2014 a warehouse associate at $22.00 an hour, Monday to Friday, with a 30-minute lunch most days and a 45-minute lunch on Wednesday:</p>
        <div class="table-wrap">
          <table class="pay-table worked-table">
            <thead><tr><th>Step</th><th>Math</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Step 1 \u2014 One day</td><td>(Clock-out \u2212 clock-in) \u2212 unpaid break, in decimals</td><td>8.00 to 9.25 hours a day</td></tr>
              <tr><td>Step 2 \u2014 The week</td><td>8.00 + 8.50 + 9.25 + 8.00 + 9.00</td><td><strong>42.75 hours</strong></td></tr>
              <tr><td>Step 3 \u2014 Regular pay</td><td>40.00 hours \u00d7 $22.00</td><td>$880.00</td></tr>
              <tr><td>Step 4 \u2014 Overtime pay</td><td>2.75 hours \u00d7 $33.00 (time and a half)</td><td>$90.75</td></tr>
              <tr><td>Step 5 \u2014 Gross for the week</td><td>$880.00 + $90.75</td><td><strong>$970.75</strong></td></tr>
              <tr><td>Step 6 \u2014 Take-home sketch</td><td>Annualised $50,479.00; federal $3,877.48; FICA $3,861.64</td><td><strong>$821.92 a week</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>The honesty note: the take-home figure annualises this one week \u2014 it assumes all 52 weeks look like it, which no real year does. It is there so you can see what the week is worth after tax, not as a promise about your year. The $821.92 is also a cross-check: a flat 40-hour week at the same $22.00 rate is $45,760 a year and $38,948.16 of take-home, which our $22-an-hour guide works out in full \u2014 this week\u2019s overtime pattern adds $4,719.00 of gross and $3,791.72 of take-home to that baseline. The five steps below explain every number in the table, starting with what a timesheet actually is.</p>
      </section>

      <section class="article-section" id="what-is-a-timesheet">
        <h2>What a Timesheet Is \u2014 and What Goes on One</h2>
        <p>A timesheet \u2014 also called a time card \u2014 is the record of the hours you worked over a pay period, and it is the document payroll uses to build your paycheck. Under the Fair Labor Standards Act the employer has to keep accurate time records for every non-exempt employee, but in practice the worker fills the sheet in and the manager signs it off. Whether it is paper, a spreadsheet, or an app, the fields are the same:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Field</th><th>What goes in it</th><th>Why it matters</th></tr></thead>
            <tbody>
              <tr><td><strong>Name and employee ID</strong></td><td>Your full name as it appears on your contract</td><td>Payroll matches names exactly; a nickname can hold up your pay</td></tr>
              <tr><td><strong>Pay period</strong></td><td>Real start and end dates, e.g. Nov 2\u20136, 2026</td><td>A wrong range is one of the most common causes of a delayed check</td></tr>
              <tr><td><strong>Date</strong></td><td>One row per day worked; leave days off blank</td><td>Blank rows are skipped; a missing row is not the same as a day off</td></tr>
              <tr><td><strong>Clock-in / clock-out</strong></td><td>The actual times, in one format all week</td><td>Mixing 12-hour and 24-hour formats is how AM/PM errors happen</td></tr>
              <tr><td><strong>Unpaid break</strong></td><td>Minutes, or start and end times, of the meal break</td><td>The only break that comes off your total \u2014 see the breaks section</td></tr>
              <tr><td><strong>Daily total</strong></td><td>Worked hours for that day, in decimals</td><td>This is the number payroll reads, not the clock times</td></tr>
              <tr><td><strong>Weekly total and overtime</strong></td><td>Sum of the days, split at 40 hours</td><td>Overtime is priced per workweek, never per pay period</td></tr>
              <tr><td><strong>Signature</strong></td><td>Yours, then your manager\u2019s</td><td>Sign-off is what releases the sheet to payroll</td></tr>
            </tbody>
          </table>
        </div>
        <p>Two habits prevent most timesheet problems before they start. First, <strong>fill it in daily, as the shift happens</strong> \u2014 by Friday afternoon nobody remembers Tuesday\u2019s start time accurately, and a guessed time is how a 7-minute rounding loss or a forgotten lunch becomes a permanent error. Second, <strong>pick one time format and stick to it all week</strong>: either 12-hour time with AM or PM on every entry, or 24-hour time (08:00, 17:00). The 24-hour format removes the AM/PM flip entirely, which is why most timekeeping systems use it \u2014 5:00 PM is 17:00, and midnight is 00:00. Our <a href="/articles/how-to-read-your-pay-stub/">pay-stub guide</a> shows where these same hours land on the finished paycheck, and our <a href="/articles/how-many-paychecks-in-a-year/">paychecks-per-year guide</a> explains how the pay period on this sheet decides how many checks you get.</p>
      </section>

      <section class="article-section" id="minutes-to-decimals">
        <h2>Minutes to Decimals: The Conversion Payroll Uses</h2>
        <p>Payroll systems do not work in hours and minutes \u2014 they work in decimal hours, because decimals add and multiply cleanly. The conversion is one division: <strong>decimal hours = hours + (minutes \u00f7 60)</strong>. The minutes that come up every day are worth memorising, because they are the same numbers on every timesheet you will ever fill in:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Minutes</th><th>Decimal</th><th>Minutes</th><th>Decimal</th></tr></thead>
            <tbody>
              <tr><td>5 minutes</td><td><strong>0.08</strong></td><td>30 minutes</td><td><strong>0.50</strong></td></tr>
              <tr><td>6 minutes</td><td><strong>0.10</strong></td><td>42 minutes</td><td><strong>0.70</strong></td></tr>
              <tr><td>10 minutes</td><td><strong>0.17</strong></td><td>45 minutes</td><td><strong>0.75</strong></td></tr>
              <tr><td>15 minutes</td><td><strong>0.25</strong></td><td>50 minutes</td><td><strong>0.83</strong></td></tr>
              <tr><td>20 minutes</td><td><strong>0.33</strong></td><td>60 minutes</td><td><strong>1.00</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Worked example, Step/Math/Result style: 7 hours 42 minutes = 7 + (42 \u00f7 60) = 7 + 0.70 = <strong>7.70 hours</strong>. That 7.70 is the number that goes in the daily-total column \u2014 not 7:42, and not 7.42. The classic mistake is writing the minutes straight into the decimal: <strong>8 hours 30 minutes is 8.50, never 8.30</strong>, because 8.30 in decimal means 8 hours and 18 minutes (0.30 \u00d7 60 = 18). That one slip costs 12 minutes a day \u2014 0.20 hours \u00d7 $22.00 is $4.40 a day, $22.00 a week, and $1,144.00 over a year of five-day weeks. The same division runs in reverse when you read a card back: 8.25 hours is 8 hours and 15 minutes (0.25 \u00d7 60 = 15), and 8.33 is 8 hours and 20 minutes. Our <a href="/articles/how-many-hours-is-full-time/">full-time-hours guide</a> uses the same decimal convention for the 30-, 35-, and 40-hour weeks, and the <a href="/calculators/time-card/">time-card calculator</a> takes daily hours in decimals, so this conversion is the step that connects the paper card to the tool.</p>
      </section>

      <section class="article-section" id="worked-week">
        <h2>A Full Week, Worked Out: 42.75 Hours at $22 an Hour</h2>
        <figure>
          <img src="/assets/images/how-to-fill-out-a-timesheet-week.jpg" alt="A person's hands holding a blank white paper timesheet and a calculator over a wooden desk, with an orange notebook and a pen in warm evening light" width="1280" height="720" loading="lazy">
          <figcaption>Five days, five different punches — the daily totals are the numbers payroll actually reads.</figcaption>
        </figure>
        <p>Here is the anchor week from the short answer, day by day, exactly as it would sit on a paper card. Notice that no two days are identical \u2014 real weeks never are \u2014 and that the lunch column is what turns elapsed time into paid time:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Day</th><th>Clock-in</th><th>Clock-out</th><th>Unpaid lunch</th><th>Elapsed</th><th>Worked (decimal)</th></tr></thead>
            <tbody>
              <tr><td>Monday</td><td>8:00 AM</td><td>4:30 PM</td><td>30 min</td><td>8 h 30 m</td><td><strong>8.00</strong></td></tr>
              <tr><td>Tuesday</td><td>8:05 AM</td><td>5:05 PM</td><td>30 min</td><td>9 h 00 m</td><td><strong>8.50</strong></td></tr>
              <tr><td>Wednesday</td><td>8:00 AM</td><td>6:00 PM</td><td>45 min</td><td>10 h 00 m</td><td><strong>9.25</strong></td></tr>
              <tr><td>Thursday</td><td>7:45 AM</td><td>4:15 PM</td><td>30 min</td><td>8 h 30 m</td><td><strong>8.00</strong></td></tr>
              <tr><td>Friday</td><td>8:00 AM</td><td>5:30 PM</td><td>30 min</td><td>9 h 30 m</td><td><strong>9.00</strong></td></tr>
              <tr><td><strong>Week total</strong></td><td></td><td></td><td></td><td>45 h 30 m</td><td><strong>42.75</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Each day follows the same three moves. Monday: 8:00 AM to 4:30 PM is 8 hours 30 minutes elapsed; minus the 30-minute lunch, that is 8.00 hours. Wednesday is the long day: 8:00 AM to 6:00 PM is 10 hours elapsed; minus the 45-minute lunch (0.75), that is 9.25 hours. Thursday starts early and ends early \u2014 7:45 AM to 4:15 PM is still 8 hours 30 minutes elapsed, and still 8.00 hours after lunch. Add the five daily totals and the week is 42.75 hours, of which 2.75 sit above the 40-hour federal overtime line:</p>
        <div class="table-wrap">
          <table class="pay-table worked-table">
            <thead><tr><th>Step</th><th>Math</th><th>Result</th></tr></thead>
            <tbody>
              <tr><td>Step 1 \u2014 Weekly hours</td><td>8.00 + 8.50 + 9.25 + 8.00 + 9.00</td><td>42.75 hours</td></tr>
              <tr><td>Step 2 \u2014 Regular hours</td><td>First 40.00 hours \u00d7 $22.00</td><td>$880.00</td></tr>
              <tr><td>Step 3 \u2014 Overtime hours</td><td>42.75 \u2212 40.00 = 2.75 hours \u00d7 $33.00</td><td>$90.75</td></tr>
              <tr><td>Step 4 \u2014 Gross for the week</td><td>$880.00 + $90.75</td><td><strong>$970.75</strong></td></tr>
              <tr><td>Step 5 \u2014 Annualised gross</td><td>$970.75 \u00d7 52 weeks</td><td>$50,479.00</td></tr>
              <tr><td>Step 6 \u2014 Federal income tax</td><td>Taxable $34,379.00: $1,240.00 + 12% \u00d7 $21,979.00</td><td>$3,877.48</td></tr>
              <tr><td>Step 7 \u2014 FICA</td><td>7.65% \u00d7 $50,479.00</td><td>$3,861.64</td></tr>
              <tr><td>Step 8 \u2014 Take-home for the week</td><td>($50,479.00 \u2212 $3,877.48 \u2212 $3,861.64) \u00f7 52</td><td><strong>$821.92</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p>Two details in that table are worth pausing on. First, the overtime premium on this week is only $30.25 \u2014 the 2.75 overtime hours earn $33.00 instead of $22.00, so the premium is 2.75 \u00d7 $11.00; the other $60.50 of the $90.75 is straight-time pay those hours would have earned anyway. Second, the take-home works out to $19.23 an hour across the 42.75 hours, against $22.00 gross \u2014 the gap is the 2026 federal tax and FICA on a single filer taking the $16,100 standard deduction, with no state tax and no 401(k) or health premium taken off. Our <a href="/articles/how-much-is-22-an-hour-a-year/">$22-an-hour guide</a> prices the same rate with no overtime at all, and our <a href="/articles/what-is-double-time-pay/">double-time guide</a> shows what happens when the multiplier is 2\u00d7 instead of 1.5\u00d7.</p>
      </section>

      <section class="article-section" id="breaks">
        <h2>Breaks: Which Ones Come Off Your Total</h2>
        <p>The most common timesheet error is deducting the wrong breaks. Federal law draws one clean line, and it is the length of the break that decides which side of it you are on:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Break</th><th>Length</th><th>Counts as hours worked?</th><th>What to write</th></tr></thead>
            <tbody>
              <tr><td><strong>Rest break</strong> (coffee, stretch, bathroom)</td><td>5 to 20 minutes</td><td><strong>Yes \u2014 paid</strong></td><td>Do not deduct it; it stays inside your daily total</td></tr>
              <tr><td><strong>Meal break</strong> (lunch, dinner)</td><td>30 minutes or more</td><td><strong>No \u2014 unpaid</strong></td><td>Deduct it, as in the worked week above</td></tr>
              <tr><td><strong>On-duty meal</strong></td><td>30 minutes, still working</td><td><strong>Yes \u2014 paid</strong></td><td>Do not deduct it; note that you stayed on duty</td></tr>
            </tbody>
          </table>
        </div>
        <p>The rule comes from the Fair Labor Standards Act regulations: rest breaks of 5 to 20 minutes are compensable work time (29 CFR 785.18), and a meal period of 30 minutes or more is not, as long as you are fully relieved of duty \u2014 free to leave the work area and do what you like (29 CFR 785.19). Worked example on the anchor week\u2019s Monday: 8:00 AM to 4:30 PM with two 15-minute paid rest breaks and a 30-minute unpaid lunch is 8.00 paid hours, not 7.50 \u2014 the two 15-minute breaks stay inside the total, and only the lunch comes off. The grey area is the 21-to-29-minute break: the regulations do not name it, so employers usually treat anything under 30 minutes as paid rest time, but the safe move is to ask payroll how yours is coded rather than guessing. State law can add a second layer on top of the federal rule \u2014 California requires a 30-minute meal period after 5 hours of work, and several other states set their own meal and rest rules \u2014 so the federal table above is the floor, not the whole law in your state. Our <a href="/articles/which-states-have-daily-overtime/">daily-overtime guide</a> shows how the same kind of state-by-state variation works for overtime, and our <a href="/articles/how-to-calculate-taxes-on-paycheck/">paycheck-tax guide</a> explains why the gross figure and the take-home figure on your stub are two different numbers.</p>
      </section>

      <section class="article-section" id="rounding">
        <h2>The 7-Minute Rule: What Rounding Costs You</h2>
        <p>Most employers do not pay to the minute. They round punches to the nearest 5, 6, or 15 minutes, and the most common version is quarter-hour rounding under 29 CFR 785.48 \u2014 the rule everyone calls the 7-minute rule:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Your actual punch</th><th>Rounded to</th><th>Minutes gained or lost</th></tr></thead>
            <tbody>
              <tr><td>Clock in 8:01 to 8:07</td><td>8:00</td><td>You lose 1 to 7 minutes</td></tr>
              <tr><td>Clock in 8:08 to 8:14</td><td>8:15</td><td>You gain 1 to 7 minutes</td></tr>
              <tr><td>Clock out 4:53 to 4:59</td><td>4:45</td><td>You lose 1 to 7 minutes</td></tr>
              <tr><td>Clock out 5:00 to 5:07</td><td>5:00</td><td>You lose 0 to 7 minutes</td></tr>
            </tbody>
          </table>
        </div>
        <p>The rule is legal only if it averages out fairly over time \u2014 the regulation\u2019s own test is that rounding must not consistently favour the employer. That is the part most guides leave out, and it is the part with money in it. Take a worker who always arrives at 8:07 and always leaves at 5:07. Every day the clock-in rounds down to 8:00 (7 minutes lost) and the clock-out rounds down to 5:00 (7 minutes lost): 14 minutes a day, 70 minutes a week, 1.17 hours a week. At $22.00 an hour that is <strong>$25.67 a week, or $1,334.67 over a year of five-day weeks</strong> \u2014 and the rounding never once rounds in the worker\u2019s favour, so it fails the fairness test the regulation sets. The honest note in the other direction: the same rule can pay you for minutes you did not work \u2014 clocking in at 8:08 is recorded as 8:15, seven free minutes \u2014 which is exactly why the rule survives: it is supposed to cut both ways. What to do about it: keep your own log of actual in and out times for two weeks, compare it with the rounded card, and if the rounding always cuts against you, raise it with payroll with the log in hand. A one-sided pattern is a fact you can show; a feeling about the clock is not.</p>
      </section>

      <section class="article-section" id="overnight">
        <h2>Overnight Shifts and Split Shifts</h2>
        <p>Two shift shapes break the simple formula, and both are common enough to need their own worked example. The first is the overnight shift, where the clock-out time is earlier than the clock-in time. The fix is to add 12 hours to the out time before subtracting \u2014 or, simpler, to count forward across midnight: 10:00 PM to 6:00 AM is 2 hours to midnight plus 6 hours after it, which is 8 hours elapsed. Minus a 30-minute meal break, that is <strong>7.50 hours, or $165.00 at $22.00 an hour</strong>. The trap is the workweek boundary: if your workweek runs Sunday to Saturday and the shift starts Saturday night and ends Sunday morning, the hours land in different weeks depending on your employer\u2019s policy, and that decides which week the overtime falls in \u2014 ask payroll which day they use, because a 7.50-hour shift can be the difference between 39.50 hours (no overtime) and 47.00 hours (7.00 at time and a half) in the week it lands in. The second shape is the split shift: two blocks in one day with a long unpaid gap between them, for example 7:00 AM to 11:00 AM and 5:00 PM to 9:00 PM. That is 4.00 + 4.00 = <strong>8.00 hours</strong>, and the six-hour gap in the middle is unpaid time, not a break to deduct \u2014 you were not on the clock at all. Some states add a split-shift premium on top of the hours; federal law does not, so check your own state\u2019s rule before assuming the 8.00 hours is the whole story.</p>
      </section>

      <section class="article-section" id="biweekly-trap">
        <h2>The Biweekly Trap: Overtime Is Per Week, Not Per Period</h2>
        <figure>
          <img src="/assets/images/how-to-fill-out-a-timesheet-biweekly.jpg" alt="An office worker in a navy shirt reviewing a blank printed work schedule with a pen at a desk near a window, a round wall clock on the wall and a calculator beside him" width="1280" height="720" loading="lazy">
          <figcaption>Two weeks, 80 hours — but overtime is counted week by week, and the split decides the pay.</figcaption>
        </figure>
        <p>Under the Fair Labor Standards Act, overtime is calculated on a fixed seven-day workweek \u2014 never on the pay period as a whole. That distinction is invisible on weekly pay and worth $55.00 on biweekly pay. Take two weeks at $22.00 an hour: week one is 45 hours, week two is 35 hours. The period total is 80 hours, and the wrong way to price it is 80 \u00d7 $22.00 = $1,760.00. The right way is week by week: week one is 40 \u00d7 $22.00 + 5 \u00d7 $33.00 = $1,045.00, week two is 35 \u00d7 $22.00 = $770.00, and the period total is <strong>$1,815.00 \u2014 $55.00 more</strong> than the period-total method. The same rule applies on every schedule, with one complication each:</p>
        <div class="table-wrap">
          <table class="pay-table">
            <thead><tr><th>Schedule</th><th>How overtime is counted</th><th>What to watch</th><th>Limitation</th></tr></thead>
            <tbody>
              <tr><td><strong>Weekly</strong></td><td>Hours over 40 in the one workweek</td><td>Nothing hidden \u2014 the period is the workweek</td><td>Daily overtime in five states is separate; see our daily-overtime guide</td></tr>
              <tr><td><strong>Biweekly</strong></td><td>Each of the two workweeks separately</td><td>A 45-hour week next to a 35-hour week still pays 5 overtime hours</td><td>The period total of 80 hours tempts payroll software and workers alike to skip the split</td></tr>
              <tr><td><strong>Semimonthly</strong></td><td>Still per seven-day workweek</td><td>Periods run 13 to 16 days and cut workweeks in half</td><td>The split has to be done by payroll; check the stub, because the sheet itself hides it</td></tr>
            </tbody>
          </table>
        </div>
        <p>Semimonthly pay is where the trap is hardest to spot, because a 15-day period never lines up with a 7-day workweek \u2014 the period boundary falls in the middle of a workweek, and the overtime for that split week has to be reconstructed from the daily rows. That is one reason employers who pay hourly workers usually choose biweekly instead. If your stub shows a biweekly period total of 80.00 hours and $1,760.00 of gross at $22.00 an hour with no overtime line, while your card shows a 45-hour week in it, the $55.00 is missing \u2014 and the fix is the two weekly rows, not an argument about the period total. Our <a href="/articles/biweekly-vs-semi-monthly-pay-difference/">biweekly-versus-semimonthly comparison</a> runs the two schedules through a full year on the same $60,000 salary, and our <a href="/overtime-rules-by-state/">overtime-rules-by-state page</a> lists the five states where daily overtime adds a second threshold on top of the weekly one.</p>
      </section>

      <section class="article-section" id="mistakes">
        <h2>Six Mistakes That Shrink Your Paycheck</h2>
        <p>Every mistake below is one this guide has already priced, so the cost is not abstract. Run through them against your own card before you submit it:</p>
        <ol>
          <li><strong>Writing 8.30 for 8 hours 30 minutes.</strong> 8.30 in decimal is 8 hours and 18 minutes \u2014 12 minutes short a day, $22.00 a week, $1,144.00 a year at $22.00 an hour. Write 8.50.</li>
          <li><strong>Flipping AM and PM.</strong> 5:00 without the PM is 5:00 AM, and a 9:00 AM to 5:00 PM shift becomes a negative number or a 20-hour day. Use 24-hour time (17:00) and the error disappears.</li>
          <li><strong>Forgetting the unpaid lunch.</strong> Leaving the 30 minutes in adds 0.50 hours a day you did not work \u2014 $11.00 a day, $55.00 a week \u2014 and payroll will catch it and claw it back, usually on the next check.</li>
          <li><strong>Leaving a missing punch blank.</strong> A day with no out time usually pays $0 until someone corrects it. Report it the same day with the real time you left.</li>
          <li><strong>Counting overtime on the period total.</strong> 45 hours plus 35 hours is not 80 straight hours \u2014 it is $1,815.00, not $1,760.00. Overtime is per workweek, always.</li>
          <li><strong>Letting rounding cut one way.</strong> Seven minutes lost at both ends of every shift is $25.67 a week and $1,334.67 a year at $22.00 an hour. Keep your own log for two weeks and compare.</li>
        </ol>
        <p>The five-minute check before you submit: (1) every day has an in, an out, and a lunch; (2) every daily total is in decimals, not hours:minutes; (3) the lunch is subtracted once, not twice and not zero times; (4) the weekly total is the sum of the daily totals, and the overtime line is the part above 40; (5) the period dates on the sheet match the dates payroll expects. If all five pass, the sheet is ready for the manager\u2019s signature.</p>
      </section>

      <section class="article-section" id="how-to-use">
        <h2>How to Use the Calculator</h2>
        <p>Run the anchor week through the time-card calculator in four steps \u2014 and watch for the one place where the tool needs a hand adjustment:</p>
        <ol>
          <li><strong>Step 1 \u2014 Enter your hourly rate:</strong> $22.00. This is the rate the regular and overtime lines are priced at.</li>
          <li><strong>Step 2 \u2014 Enter each day\u2019s hours before unpaid breaks:</strong> the elapsed hours from the table \u2014 Monday 8.50, Tuesday 9.00, Wednesday 10.00, Thursday 8.50, Friday 9.50. Use 0 for days off; the calculator skips them.</li>
          <li><strong>Step 3 \u2014 Enter the unpaid break minutes and the overtime settings:</strong> 30 minutes per worked day, threshold 40 hours a week, multiplier 1.5. The calculator deducts the break from each day, then splits the week at 40 hours.</li>
          <li><strong>Step 4 \u2014 Adjust Wednesday by hand:</strong> the calculator takes one break value for the whole week, and Wednesday\u2019s lunch was 45 minutes, not 30. Its result is $979.00 on 43.00 hours; subtract the extra 15 minutes at the overtime rate \u2014 0.25 \u00d7 $33.00 = $8.25 \u2014 and you land exactly on the hand-worked $970.75. That match is the proof the week is right.</li>
        </ol>
        <p><a class="btn" href="/calculators/time-card/">Calculate my week</a> <a class="btn" href="/overtime-calculator/">Price overtime only</a></p>
      </section>

      <section class="article-section" id="limitations">
        <h2>Limitations</h2>
        <ol>
          <li><strong>Federal only unless stated:</strong> the take-home sketch uses 2026 federal rules for a single filer taking the $16,100 standard deduction. State and local taxes are excluded, so actual take-home is lower in most states.</li>
          <li><strong>One week annualised:</strong> the $821.92 take-home assumes all 52 weeks look like the anchor week. Real weeks vary, and a week with no overtime annualises to $38,948.16 instead \u2014 the $22-an-hour guide\u2019s figure.</li>
          <li><strong>Rounding varies by employer:</strong> the 7-minute rule is the most common quarter-hour system, but some employers round to 5 or 6 minutes, and some do not round at all. Your employer\u2019s written policy is the rule that applies to you.</li>
          <li><strong>State law adds layers:</strong> meal and rest-break rules, split-shift premiums, and daily overtime thresholds differ by state. This guide states the federal position and one California example; check your own state\u2019s labor department for the rule that applies to you.</li>
          <li><strong>The calculator takes one break value:</strong> the time-card calculator applies a single unpaid-break figure to every worked day. Weeks with different lunches need the hand adjustment shown in the How to Use section.</li>
          <li><strong>Overnight attribution is a policy choice:</strong> hours that cross midnight land in the workweek your employer\u2019s policy assigns them to. The guide\u2019s example assumes the shift counts in the week it starts; confirm with payroll.</li>
          <li><strong>Not tax or legal advice:</strong> these are 2026 federal estimates for a single filer taking the standard deduction, using the same method as the site\u2019s other guides. Your employer\u2019s payroll calendar, rounding policy, and benefit deductions change the figures.</li>
        </ol>
      </section>

      <section class="article-section" id="faqs">
        <h2>Frequently Asked Questions</h2>
        <p>The questions readers ask most about filling out a timesheet, and what each one is worth:</p>
      </section>

      <section class="article-section" id="key-takeaways">
        <h2>Key Takeaways &amp; Action Plan</h2>
        <div class="takeaways-box">
          <ul>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>One formula runs the whole sheet: (clock-out \u2212 clock-in) \u2212 unpaid break, in decimals</strong> \u2014 on a $22-an-hour week of 42.75 hours that is $970.75 gross and $821.92 after 2026 federal tax and FICA.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>8 hours 30 minutes is 8.50, never 8.30</strong> \u2014 writing 8.30 costs 12 minutes a day, $22.00 a week, and $1,144.00 a year at $22.00 an hour.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Short breaks stay in, long breaks come off</strong> \u2014 rest breaks of 5 to 20 minutes are paid work time, meal breaks of 30 minutes or more are unpaid if you are fully relieved of duty.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Rounding has to cut both ways</strong> \u2014 seven minutes lost at both ends of every shift is $25.67 a week and $1,334.67 a year at $22.00 an hour, so keep your own log for two weeks and compare.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Overtime is per workweek, never per pay period</strong> \u2014 a 45-hour week next to a 35-hour week pays $1,815.00 at $22.00 an hour, not $1,760.00, and the $55.00 difference is the most common biweekly error.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Overnight shifts cross midnight, not the formula</strong> \u2014 10:00 PM to 6:00 AM with a 30-minute meal is 7.50 hours and $165.00 at $22.00 an hour, and the workweek boundary decides which week the overtime lands in.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Fill the sheet in daily, and run the five-minute check before you submit</strong> \u2014 every day needs an in, an out, and a lunch; every total needs to be in decimals; the lunch is subtracted once; the overtime line is the part above 40.</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align:middle;margin-right:6px;color:var(--primary)"><polyline points="20 6 9 17 4 12"/></svg><strong>Check the tool against the hand math</strong> \u2014 the time-card calculator gives $979.00 on the anchor week before Wednesday\u2019s extra 15 minutes; subtract 0.25 \u00d7 $33.00 and you land exactly on $970.75.</li>
          </ul>
        </div>
        <div class="methodology-box">
          <h3>Sources &amp; Method</h3>
          <p>Tax figures: IRS Revenue Procedure 2025-32 \u2014 2026 standard deduction $16,100 (single), brackets 10% to $12,400, 12% to $50,400, 22% to $105,700 of taxable income; FICA 7.65% (Social Security 6.2% to the $184,500 wage base, Medicare 1.45%), per IRS Topic No. 424. Time rules: Fair Labor Standards Act regulations \u2014 29 CFR 785.18 (rest breaks of 5 to 20 minutes are paid work time), 29 CFR 785.19 (meal periods of 30 minutes or more are unpaid when the employee is fully relieved of duty), 29 CFR 785.48 (rounding to the nearest 5, 6, or 15 minutes, allowed only if it averages out fairly over time); overtime at 1.5\u00d7 over 40 hours in a workweek under FLSA \u00a7 207(a). State rule: California requires a 30-minute meal period after 5 hours of work. Cross-checks: the flat 40-hour take-home of $38,948.16 matches the site\u2019s $22-an-hour guide exactly; the biweekly $1,815.00 total was recomputed week by week and against the 80-hour straight-time figure of $1,760.00; the calculator cross-check ($979.00 minus 0.25 \u00d7 $33.00) lands exactly on the hand-worked $970.75; the 7-minute-rule loss of $25.67 a week was computed from 70 minutes (14 minutes a day \u00d7 5 days) at $22.00 an hour and annualised over 52 weeks. Competitor note: legalclarity.org (top editorial result for \u201chow to read a time card\u201d) covers 24-hour time, decimals, the 7-minute rule, and paid rest breaks, but gives no full worked week with pay, no annualised take-home, no overnight-shift math, no biweekly overtime trap priced in dollars, and no error costs; the Medium Syncwork guide, juntrax.com, flowace.ai, and joinhomebase.com are step-by-step fill-in lists with one small example each, no dollar-priced rounding, no biweekly trap, and no calculator tie-in; tool pages (calcifyai.com, calctower.com, tallymyhours.com, hrscalculator.com) give the formula plus a single 9-to-5 example and stop there. This article is general information, not tax or legal advice.</p>
        </div>
      </section>
      <div class="article-hero-cta" style="margin-top:40px">
        <div>
          <h2>Turn your week of punches into gross pay</h2>
          <p>Enter your rate, your daily hours, and your unpaid break minutes — the time-card calculator totals the week, splits it at 40 hours, and prices the overtime.</p>
        </div>
        <a class="btn" href="/calculators/time-card/">Calculate my week</a>
      </div>
      <h2>3 Things to Remember</h2>
      <ol>
        <li>One formula runs the whole sheet: (clock-out \u2212 clock-in) \u2212 unpaid break, in decimals — on a $22-an-hour week of 42.75 hours that is $970.75 gross and $821.92 after 2026 federal tax and FICA.</li>
        <li>8 hours 30 minutes is 8.50, never 8.30 — and rounding has to cut both ways: seven minutes lost at both ends of every shift is $1,334.67 a year at $22.00 an hour.</li>
        <li>Overtime is per workweek, never per pay period — a 45-hour week next to a 35-hour week pays $1,815.00 at $22.00 an hour, not $1,760.00.</li>
      </ol>
  `
};

export const periods = ['hourly','daily','weekly','biweekly','semimonthly','monthly','annual'];
export function nonnegative(value, name) {
  const n = Number(value);
  if (!Number.isFinite(n) || n < 0) throw new Error(`${name} must be zero or greater.`);
  return n;
}
export function positive(value, name) {
  const n = nonnegative(value, name);
  if (n === 0) throw new Error(`${name} must be greater than zero.`);
  return n;
}
export function schedule(input) {
  const days = positive(input.days, 'Days per week');
  const hours = input.hoursWeek === undefined ? positive(input.hours, 'Hours per day') : positive(input.hoursWeek, 'Hours per week') / days;
  const weeks = positive(input.weeks, 'Weeks per year');
  const unpaid = nonnegative(input.unpaid || 0, 'Unpaid weeks');
  if (hours > 24 || days > 7 || weeks > 52 || unpaid >= weeks) throw new Error('Use up to 24 hours a day, 7 days a week, and 52 weeks a year. Unpaid weeks must be less than total weeks.');
  return {hours,days,weeks,unpaid,paidWeeks:weeks-unpaid,hoursWeek:hours*days};
}
export function convert(input) {
  if (!periods.includes(input.period)) throw new Error('Choose a valid pay period.');
  const s = schedule(input);
  const amount = nonnegative(input.amount, 'Pay amount');
  const factors = {hourly:s.hoursWeek*s.paidWeeks,daily:s.days*s.paidWeeks,weekly:s.paidWeeks,biweekly:s.paidWeeks/2,semimonthly:24,monthly:12,annual:1};
  const baseAnnual = amount*factors[input.period];
  const hourly = baseAnnual/(s.hoursWeek*s.paidWeeks);
  const overtimeHours = nonnegative(input.overtimeHours || 0, 'Overtime hours');
  const multiplier = positive(input.multiplier ?? 1.5, 'Overtime multiplier');
  if (s.hoursWeek+overtimeHours > 168) throw new Error('Regular and overtime hours cannot exceed 168 hours per week.');
  const overtimeAnnual = hourly*overtimeHours*multiplier*s.paidWeeks;
  const annual = baseAnnual+overtimeAnnual;
  const th = takeHome(annual, 'single');
  return {...s,amount,period:input.period,hourly,daily:hourly*s.hours,weekly:annual/s.paidWeeks,biweekly:annual/s.paidWeeks*2,semimonthly:annual/24,monthly:annual/12,quarterly:annual/4,annual,minute:hourly/60,second:hourly/3600,baseAnnual,overtimeAnnual,overtimeHours,multiplier,annualHours:s.hoursWeek*s.paidWeeks,effectiveHourly:annual/((s.hoursWeek+overtimeHours)*s.paidWeeks),takeHomeAnnual:th.takeHome,takeHomeMonthly:th.takeHome/12,takeHomeBiweekly:th.takeHome/26,federalTax:th.federal,ficaTax:th.fica};
}
export const payFrequencies={weekly:52,biweekly:26,semimonthly:24,monthly:12,quarterly:4,annual:1};
export const STATE_TAX_2026 = {
  AK: null, FL: null, NV: null, NH: null, SD: null, TN: null, TX: null, WY: null, WA: null,
  AZ: { sd: [16100, 32200], single: [[Infinity, 2.5]], mfj: [[Infinity, 2.5]] },
  CO: { sd: [16100, 32200], single: [[Infinity, 4.4]], mfj: [[Infinity, 4.4]] },
  GA: { sd: [15000, 30000], single: [[Infinity, 4.99]], mfj: [[Infinity, 4.99]] },
  ID: { sd: [16100, 32200], single: [[4811, 0], [Infinity, 5.3]], mfj: [[9622, 0], [Infinity, 5.3]] },
  IL: { sd: [0, 0], single: [[Infinity, 4.95]], mfj: [[Infinity, 4.95]] },
  IN: { sd: [0, 0], single: [[Infinity, 2.95]], mfj: [[Infinity, 2.95]] },
  IA: { sd: [16100, 32200], single: [[Infinity, 3.8]], mfj: [[Infinity, 3.8]] },
  KY: { sd: [3360, 3360], single: [[Infinity, 3.5]], mfj: [[Infinity, 3.5]] },
  LA: { sd: [12875, 25750], single: [[Infinity, 3.0]], mfj: [[Infinity, 3.0]] },
  MI: { sd: [0, 0], single: [[Infinity, 4.25]], mfj: [[Infinity, 4.25]] },
  MS: { sd: [2300, 4600], single: [[10000, 0], [Infinity, 4.0]], mfj: [[10000, 0], [Infinity, 4.0]] },
  NC: { sd: [12750, 25500], single: [[Infinity, 3.99]], mfj: [[Infinity, 3.99]] },
  OH: { sd: [0, 0], single: [[26050, 0], [Infinity, 2.75]], mfj: [[26050, 0], [Infinity, 2.75]] },
  PA: { sd: [0, 0], single: [[Infinity, 3.07]], mfj: [[Infinity, 3.07]] },
  UT: { sd: [0, 0], single: [[Infinity, 4.45]], mfj: [[Infinity, 4.45]] },
  AL: { sd: [3000, 8500], single: [[500, 2], [3000, 4], [Infinity, 5]], mfj: [[1000, 2], [6000, 4], [Infinity, 5]] },
  AR: { sd: [2470, 4940], single: [[5599, 0], [11199, 2], [15999, 3], [26399, 3.4], [Infinity, 3.7]], mfj: [[5599, 0], [11199, 2], [15999, 3], [26399, 3.4], [Infinity, 3.7]] },
  CA: { sd: [5900, 11800], single: [[11456, 1], [27157, 2], [42861, 4], [59498, 6], [75197, 8], [384109, 9.3], [460927, 10.3], [768213, 11.3], [1000000, 12.3], [Infinity, 13.3]], mfj: [[22912, 1], [54314, 2], [85722, 4], [118996, 6], [150394, 8], [768218, 9.3], [921854, 10.3], [1000000, 11.3], [1536426, 12.3], [Infinity, 13.3]] },
  CT: { sd: [0, 0], single: [[10000, 2], [50000, 4.5], [100000, 5.5], [200000, 6], [250000, 6.5], [500000, 6.9], [Infinity, 6.99]], mfj: [[20000, 2], [100000, 4.5], [200000, 5.5], [400000, 6], [500000, 6.5], [1000000, 6.9], [Infinity, 6.99]] },
  DE: { sd: [3250, 6500], single: [[2000, 0], [5000, 2.2], [10000, 3.9], [20000, 4.8], [25000, 5.2], [60000, 5.55], [Infinity, 6.6]], mfj: [[2000, 0], [5000, 2.2], [10000, 3.9], [20000, 4.8], [25000, 5.2], [60000, 5.55], [Infinity, 6.6]] },
  HI: { sd: [4400, 8800], single: [[9600, 1.4], [14400, 3.2], [19200, 5.5], [24000, 6.4], [36000, 6.8], [48000, 7.2], [125000, 7.6], [175000, 7.9], [225000, 8.25], [275000, 9], [325000, 10], [Infinity, 11]], mfj: [[19200, 1.4], [28800, 3.2], [38400, 5.5], [48000, 6.4], [72000, 6.8], [96000, 7.2], [250000, 7.6], [350000, 7.9], [450000, 8.25], [550000, 9], [650000, 10], [Infinity, 11]] },
  KS: { sd: [3605, 8240], single: [[23000, 5.2], [Infinity, 5.58]], mfj: [[46000, 5.2], [Infinity, 5.58]] },
  ME: { sd: [15300, 30600], single: [[27399, 5.8], [64849, 6.75], [1000000, 7.15], [Infinity, 9.15]], mfj: [[54849, 5.8], [129749, 6.75], [1500000, 7.15], [Infinity, 9.15]] },
  MD: { sd: [3350, 6700], single: [[1000, 2], [2000, 3], [3000, 4], [100000, 4.75], [125000, 5], [150000, 5.25], [250000, 5.5], [500000, 5.75], [1000000, 6.25], [Infinity, 6.5]], mfj: [[1000, 2], [2000, 3], [3000, 4], [150000, 4.75], [175000, 5], [225000, 5.25], [300000, 5.5], [600000, 5.75], [1200000, 6.25], [Infinity, 6.5]] },
  MA: { sd: [0, 0], single: [[1107750, 5], [Infinity, 9]], mfj: [[1107750, 5], [Infinity, 9]] },
  MN: { sd: [15300, 30600], single: [[33310, 5.35], [109430, 6.8], [203150, 7.85], [Infinity, 9.85]], mfj: [[48700, 5.35], [193480, 6.8], [337930, 7.85], [Infinity, 9.85]] },
  MO: { sd: [16100, 32200], single: [[1348, 0], [2696, 2], [4044, 2.5], [5392, 3], [6740, 3.5], [8088, 4], [9436, 4.5], [Infinity, 4.7]], mfj: [[1348, 0], [2696, 2], [4044, 2.5], [5392, 3], [6740, 3.5], [8088, 4], [9436, 4.5], [Infinity, 4.7]] },
  MT: { sd: [16100, 32200], single: [[47500, 4.7], [Infinity, 5.65]], mfj: [[95000, 4.7], [Infinity, 5.65]] },
  NE: { sd: [8850, 17700], single: [[4130, 2.46], [24760, 3.51], [Infinity, 4.55]], mfj: [[8250, 2.46], [49530, 3.51], [Infinity, 4.55]] },
  NJ: { sd: [0, 0], single: [[20000, 1.4], [35000, 1.75], [40000, 3.5], [75000, 5.53], [500000, 6.37], [1000000, 8.97], [Infinity, 10.75]], mfj: [[20000, 1.4], [50000, 1.75], [70000, 2.45], [80000, 3.5], [150000, 5.53], [500000, 6.37], [1000000, 8.97], [Infinity, 10.75]] },
  NM: { sd: [16100, 32200], single: [[5500, 1.5], [16500, 3.2], [33500, 4.3], [66500, 4.7], [210000, 4.9], [Infinity, 5.9]], mfj: [[8000, 1.5], [25000, 3.2], [50000, 4.3], [100000, 4.7], [315000, 4.9], [Infinity, 5.9]] },
  NY: { sd: [8000, 16050], single: [[8500, 3.9], [11700, 4.4], [13900, 5.15], [80650, 5.4], [215400, 5.9], [1077550, 6.85], [5000000, 9.65], [25000000, 10.3], [Infinity, 10.9]], mfj: [[17150, 3.9], [23600, 4.4], [27900, 5.15], [161550, 5.4], [323200, 5.9], [2155350, 6.85], [5000000, 9.65], [25000000, 10.3], [Infinity, 10.9]] },
  ND: { sd: [16100, 32200], single: [[49575, 0], [250400, 1.95], [Infinity, 2.5]], mfj: [[82800, 0], [304850, 1.95], [Infinity, 2.5]] },
  OK: { sd: [6350, 12700], single: [[3750, 0], [4900, 2.5], [7200, 3.5], [Infinity, 4.5]], mfj: [[7500, 0], [9800, 2.5], [14400, 3.5], [Infinity, 4.5]] },
  OR: { sd: [2910, 5820], single: [[4550, 4.75], [11400, 6.75], [125000, 8.75], [Infinity, 9.9]], mfj: [[9100, 4.75], [22800, 6.75], [250000, 8.75], [Infinity, 9.9]] },
  RI: { sd: [11200, 22400], single: [[82050, 3.75], [186450, 4.75], [Infinity, 5.99]], mfj: [[82050, 3.75], [186450, 4.75], [Infinity, 5.99]] },
  SC: { sd: [15000, 30000], single: [[30000, 1.99], [Infinity, 5.21]], mfj: [[30000, 1.99], [Infinity, 5.21]] },
  VT: { sd: [7650, 15300], single: [[50750, 3.35], [122850, 6.6], [256300, 7.6], [Infinity, 8.75]], mfj: [[84700, 3.35], [204750, 6.6], [312050, 7.6], [Infinity, 8.75]] },
  VA: { sd: [8750, 17500], single: [[3000, 2], [5000, 3], [17000, 5], [Infinity, 5.75]], mfj: [[3000, 2], [5000, 3], [17000, 5], [Infinity, 5.75]] },
  WV: { sd: [0, 0], single: [[10000, 2.11], [25000, 2.81], [40000, 3.16], [60000, 4.22], [Infinity, 4.58]], mfj: [[10000, 2.11], [25000, 2.81], [40000, 3.16], [60000, 4.22], [Infinity, 4.58]] },
  WI: { sd: [13960, 25840], single: [[15110, 3.5], [51950, 4.4], [332720, 5.3], [Infinity, 7.65]], mfj: [[20150, 3.5], [69260, 4.4], [443630, 5.3], [Infinity, 7.65]] },
  DC: { sd: [16100, 32200], single: [[10000, 4], [40000, 6], [60000, 6.5], [250000, 8.5], [500000, 9.25], [1000000, 9.75], [Infinity, 10.75]], mfj: [[10000, 4], [40000, 6], [60000, 6.5], [250000, 8.5], [500000, 9.25], [1000000, 9.75], [Infinity, 10.75]] },
};
export function stateTax(code, filingStatus, annualWages) {
  const entry = STATE_TAX_2026[code];
  if (!entry) return 0;
  const sd = entry.sd[filingStatus === "married" ? 1 : 0];
  const brackets = filingStatus === "married" ? entry.mfj : entry.single;
  const taxable = Math.max(0, annualWages - sd);
  let tax = 0, prev = 0;
  for (const [limit, rate] of brackets) {
    if (taxable <= prev) break;
    tax += (Math.min(taxable, limit) - prev) * rate / 100;
    prev = limit;
  }
  return tax;
}
export function paycheck(input) {
  if (!['hourly','annual'].includes(input.period)) throw new Error('Choose hourly pay or annual salary.');
  if (!(input.payFrequency in payFrequencies)) throw new Error('Choose a valid pay frequency.');
  const amount=nonnegative(input.amount,'Pay amount'), hours=positive(input.hoursWeek,'Regular hours per week'), extra=nonnegative(input.overtimeHours||0,'Overtime hours'), multiplier=positive(input.multiplier??1.5,'Overtime multiplier');
  const weeks=positive(input.weeks??52,'Paid weeks per year');
  if(hours+extra>168||weeks>52)throw new Error('Use up to 168 total weekly hours and 52 paid weeks per year.');
  const periods=payFrequencies[input.payFrequency];
  const baseAnnual=input.period==='hourly'?amount*hours*weeks:amount;
  const hourlyRate=baseAnnual/(hours*weeks);
  const overtimeAnnual=hourlyRate*multiplier*extra*weeks;
  const regularPay=baseAnnual/periods,overtimePay=overtimeAnnual/periods;
  const bonus=nonnegative(input.bonus||0,'Bonus per paycheck');
  const deductions=nonnegative(input.preTax||0,'Pre-tax deductions')+nonnegative(input.postTax||0,'Post-tax deductions')+nonnegative(input.otherDeductions||0,'Other deductions');
  const gross=regularPay+overtimePay+bonus;
  if(deductions>gross)throw new Error('Entered deductions cannot exceed gross pay for this paycheck.');
  const filingStatus=input.filingStatus==='married'?'married':'single';
  const taxAnnualBase=baseAnnual+overtimeAnnual+bonus*periods;
  const preTaxAnnual=nonnegative(input.preTax||0,'Pre-tax deductions')*periods;
  const ficaWages=Math.max(0,taxAnnualBase-preTaxAnnual);
  const th=takeHome(ficaWages,filingStatus);
  const federalPerCheck=th.federal/periods,ficaPerCheck=th.fica/periods;
  const stateAnnual=stateTax(input.state||'',filingStatus,ficaWages),statePerCheck=stateAnnual/periods;
  const takeHomePerCheck=gross-deductions-federalPerCheck-ficaPerCheck-statePerCheck;
  return {gross,regularPay,overtimePay,bonus,deductions,adjusted:gross-deductions,annual:baseAnnual+overtimeAnnual,periods,hourlyRate,overtimeRate:hourlyRate*multiplier,totalHours:hours+extra,filingStatus,taxAnnualBase,ficaWages,federalAnnual:th.federal,ficaAnnual:th.fica,federalPerCheck,ficaPerCheck,taxPerCheck:federalPerCheck+ficaPerCheck+statePerCheck,takeHome:takeHomePerCheck,state:input.state||'',stateAnnual,statePerCheck};
}

export function reversePaycheck(input) {
  const target = nonnegative(input.targetTakeHome, 'Desired take-home pay');
  if (!(input.payFrequency in payFrequencies)) throw new Error('Choose a valid pay frequency.');
  const periods = payFrequencies[input.payFrequency];
  const hours = positive(input.hoursWeek, 'Regular hours per week');
  const weeks = positive(input.weeks ?? 52, 'Paid weeks per year');
  if (hours > 168 || weeks > 52) throw new Error('Use up to 168 hours a week and 52 paid weeks per year.');
  const base = {period: 'annual', hoursWeek: hours, overtimeHours: 0, multiplier: 1.5, weeks, payFrequency: input.payFrequency, bonus: input.bonus || 0, preTax: input.preTax || 0, postTax: input.postTax || 0, otherDeductions: input.otherDeductions || 0, filingStatus: input.filingStatus, state: input.state || ''};
  const f = (annual) => paycheck({...base, amount: annual}).takeHome;
  // Take-home rises with gross (top combined marginal rate stays below 100%), so bisection converges.
  let lo = 0, hi = Math.max(target * periods, 1);
  let guard = 0;
  while (f(hi) < target && guard++ < 100) hi *= 2;
  if (f(hi) < target) throw new Error('Could not solve for the required gross pay.');
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    if (f(mid) < target) lo = mid; else hi = mid;
  }
  const annual = (lo + hi) / 2;
  const result = paycheck({...base, amount: annual});
  return {...result, targetTakeHome: target, requiredGross: result.gross, requiredAnnual: annual, requiredHourly: annual / (hours * weeks), requiredWeekly: annual / weeks, requiredMonthly: annual / 12};
}
export function overtime(input) {
  const weeks=positive(input.weeks,'Paid weeks');
  if (weeks>52) throw new Error('Use at most 168 total hours per week and 52 paid weeks per year.');
  if (input.dailyMode) {
    const rate=nonnegative(input.rate,'Hourly rate'), hpd=positive(input.hoursPerDay,'Hours per day'), days=positive(input.daysPerWeek,'Days per week');
    if (hpd>24 || days>7 || hpd*days>168) throw new Error('Use up to 24 hours a day, 7 days a week, and 168 hours a week.');
    const normalDays=days===7?days-1:days;
    const regPerDay=Math.min(hpd,8), ot15PerDay=Math.min(Math.max(hpd-8,0),4), dtPerDay=Math.max(hpd-12,0);
    const regularHours=regPerDay*normalDays;
    const ot15Hours=ot15PerDay*normalDays+(days===7?Math.min(hpd,8):0);
    const dtHours=dtPerDay*normalDays+(days===7?Math.max(hpd-8,0):0);
    const weeklyOtHours=Math.max(0,regularHours-40);
    const regularPay=Math.min(regularHours,40)*rate;
    const overtimePay=ot15Hours*rate*1.5+dtHours*rate*2+weeklyOtHours*rate*1.5;
    const total=regularPay+overtimePay;
    return {regularPay,overtimeRate:rate*1.5,overtimePay,total,annual:total*weeks,weeks,totalHours:hpd*days,monthly:total*weeks/12,annualOvertime:overtimePay*weeks,dailyMode:true,regularHours,ot15Hours,dtHours,weeklyOtHours,doubleHours:dtHours};
  }
  const rate=nonnegative(input.rate,'Hourly rate'), regular=nonnegative(input.regular,'Regular hours'), extra=nonnegative(input.extra,'Overtime hours'), multiplier=positive(input.multiplier,'Multiplier');
  if (regular+extra>168) throw new Error('Use at most 168 total hours per week and 52 paid weeks per year.');
  const regularPay=rate*regular, overtimeRate=rate*multiplier, overtimePay=overtimeRate*extra;
  return {regularPay,overtimeRate,overtimePay,total:regularPay+overtimePay,annual:(regularPay+overtimePay)*weeks,weeks,totalHours:regular+extra,monthly:(regularPay+overtimePay)*weeks/12,annualOvertime:overtimePay*weeks};
}
export function raise(input) {
  const current=positive(input.current,'Current pay');
  let next, percentInput;
  if (input.raiseMode==='percent') {
    const p=Number(input.raisePercent);
    if (!Number.isFinite(p) || p<=-100) throw new Error('Raise percentage must be greater than -100%.');
    percentInput=p; next=current*(1+p/100);
  } else {
    next=nonnegative(input.next,'New pay');
  }
  const s=schedule({hours:input.hours,days:input.days,weeks:input.weeks,unpaid:0});
  const hourlyMode=input.mode==='hourly';
  const increase=next-current;
  const annual=hourlyMode?increase*s.hoursWeek*s.paidWeeks:increase;
  return {increase,percent:percentInput!==undefined?percentInput:increase/current*100,annual,monthly:annual/12,weekly:annual/s.paidWeeks,hourly:hourlyMode?increase:annual/(s.hoursWeek*s.paidWeeks)};
}
export function job(input) {
  const salary=nonnegative(input.salary,'Annual salary'),bonus=nonnegative(input.bonus,'Annual bonus'),hours=positive(input.hours,'Work hours per week'),pto=nonnegative(input.pto,'Paid time off'),commute=nonnegative(input.commute,'Commute hours per week');
  if (pto>=52 || hours+commute>168) throw new Error('PTO must be less than 52 weeks and weekly time must be at most 168 hours.');
  const matchPct=input.match===undefined?0:nonnegative(input.match,'401(k) match');
  if (matchPct>100) throw new Error('401(k) match must be at most 100%.');
  const health=nonnegative(input.health||0,'Health premium');
  const matchValue=salary*matchPct/100, healthAnnual=health*12;
  const workingWeeks=52-pto,committedHours=(hours+commute)*workingWeeks,compensation=salary+bonus;
  const totalComp=compensation+matchValue, cashValue=totalComp-healthAnnual;
  return {compensation,totalComp,matchValue,healthAnnual,cashValue,workingWeeks,committedHours,effective:cashValue/committedHours};
}
export function compare(input) {
  const a=job(input.a),b=job(input.b);
  return {a,b,difference:a.effective-b.effective};
}
export function freelance(input) {
  const income=nonnegative(input.income,'Desired income'),expenses=nonnegative(input.expenses,'Annual expenses'),hours=positive(input.hours,'Billable hours per week'),weeks=positive(input.weeks,'Billable weeks per year'),tax=nonnegative(input.tax,'Tax reserve')/100,margin=nonnegative(input.margin,'Profit margin')/100;
  if (tax>=1 || margin>=1 || hours>168 || weeks>52) throw new Error('Reserves and margins must be less than 100%. Use up to 168 hours and 52 weeks.');
  const revenue=(income/(1-tax)+expenses)/(1-margin);
  const rate=revenue/(hours*weeks);
  return {revenue,billableHours:hours*weeks,rate,dayRate:rate*8,income,expenses,reserve:income/(1-tax)-income,profit:revenue*margin};
}

// 2026 federal figures (IRS Revenue Procedure 2025-32). Federal only; state tax excluded.
export const STANDARD_DEDUCTION_2026={single:16100,married:32200};
export const FEDERAL_BRACKETS_2026={
  single:[[12400,0.10],[50400,0.12],[105700,0.22],[201775,0.24],[256225,0.32],[640600,0.35],[Infinity,0.37]],
  married:[[24800,0.10],[100800,0.12],[211400,0.22],[403550,0.24],[512450,0.32],[768700,0.35],[Infinity,0.37]]
};
export const SOCIAL_SECURITY_WAGE_BASE_2026=184500;
export function federalTax(taxable, filingStatus='single') {
  const brackets=FEDERAL_BRACKETS_2026[filingStatus]||FEDERAL_BRACKETS_2026.single;
  const t=nonnegative(taxable,'Taxable income');
  let tax=0, prev=0;
  for (const [limit,rate] of brackets) {
    if (t<=prev) break;
    tax+=(Math.min(t,limit)-prev)*rate;
    prev=limit;
  }
  return tax;
}
export function ficaTax(wages) {
  const w=nonnegative(wages,'Wages');
  const socialSecurity=0.062*Math.min(w,SOCIAL_SECURITY_WAGE_BASE_2026);
  const medicare=0.0145*w;
  const additional=0.009*Math.max(0,w-200000);
  return {socialSecurity,medicare,additional,total:socialSecurity+medicare+additional};
}
export function takeHome(gross, filingStatus='single') {
  const g=nonnegative(gross,'Gross pay');
  const std=STANDARD_DEDUCTION_2026[filingStatus]||STANDARD_DEDUCTION_2026.single;
  const taxable=Math.max(0,g-std);
  const federal=federalTax(taxable,filingStatus);
  const fica=ficaTax(g);
  return {gross:g,taxable,federal,socialSecurity:fica.socialSecurity,medicare:fica.medicare,additionalMedicare:fica.additional,fica:fica.total,takeHome:g-federal-fica.total,effectiveRate:g>0?(federal+fica.total)/g:0};
}

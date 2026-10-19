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
  return {...s,amount,period:input.period,hourly,daily:hourly*s.hours,weekly:annual/s.paidWeeks,biweekly:annual/s.paidWeeks*2,semimonthly:annual/24,monthly:annual/12,quarterly:annual/4,annual,minute:hourly/60,second:hourly/3600,baseAnnual,overtimeAnnual,overtimeHours,multiplier,annualHours:s.hoursWeek*s.paidWeeks,effectiveHourly:annual/((s.hoursWeek+overtimeHours)*s.paidWeeks)};
}
export const payFrequencies={weekly:52,biweekly:26,semimonthly:24,monthly:12,quarterly:4,annual:1};
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
  return {gross,regularPay,overtimePay,bonus,deductions,adjusted:gross-deductions,annual:baseAnnual+overtimeAnnual,periods,hourlyRate,overtimeRate:hourlyRate*multiplier,totalHours:hours+extra};
}
export function overtime(input) {
  const rate=nonnegative(input.rate,'Hourly rate'), regular=nonnegative(input.regular,'Regular hours'), extra=nonnegative(input.extra,'Overtime hours'), multiplier=positive(input.multiplier,'Multiplier'), weeks=positive(input.weeks,'Paid weeks');
  if (regular+extra>168 || weeks>52) throw new Error('Use at most 168 total hours per week and 52 paid weeks per year.');
  const regularPay=rate*regular, overtimeRate=rate*multiplier, overtimePay=overtimeRate*extra;
  return {regularPay,overtimeRate,overtimePay,total:regularPay+overtimePay,annual:(regularPay+overtimePay)*weeks,weeks,totalHours:regular+extra,monthly:(regularPay+overtimePay)*weeks/12,annualOvertime:overtimePay*weeks};
}
export function raise(input) {
  const current=positive(input.current,'Current pay'), next=nonnegative(input.next,'New pay');
  const s=schedule({hours:input.hours,days:input.days,weeks:input.weeks,unpaid:0});
  const hourlyMode=input.mode==='hourly';
  const increase=next-current;
  const annual=hourlyMode?increase*s.hoursWeek*s.paidWeeks:increase;
  return {increase,percent:increase/current*100,annual,monthly:annual/12,weekly:annual/s.paidWeeks,hourly:hourlyMode?increase:annual/(s.hoursWeek*s.paidWeeks)};
}
export function job(input) {
  const salary=nonnegative(input.salary,'Annual salary'),bonus=nonnegative(input.bonus,'Annual bonus'),hours=positive(input.hours,'Work hours per week'),pto=nonnegative(input.pto,'Paid time off'),commute=nonnegative(input.commute,'Commute hours per week');
  if (pto>=52 || hours+commute>168) throw new Error('PTO must be less than 52 weeks and weekly time must be at most 168 hours.');
  const workingWeeks=52-pto,committedHours=(hours+commute)*workingWeeks,compensation=salary+bonus;
  return {compensation,workingWeeks,committedHours,effective:compensation/committedHours};
}
export function compare(input) {
  const a=job(input.a),b=job(input.b);
  return {a,b,difference:a.effective-b.effective};
}
export function freelance(input) {
  const income=nonnegative(input.income,'Desired income'),expenses=nonnegative(input.expenses,'Annual expenses'),hours=positive(input.hours,'Billable hours per week'),weeks=positive(input.weeks,'Billable weeks per year'),tax=nonnegative(input.tax,'Tax reserve')/100,margin=nonnegative(input.margin,'Profit margin')/100;
  if (tax>=1 || margin>=1 || hours>168 || weeks>52) throw new Error('Reserves and margins must be less than 100%. Use up to 168 hours and 52 weeks.');
  const revenue=(income/(1-tax)+expenses)/(1-margin);
  return {revenue,billableHours:hours*weeks,rate:revenue/(hours*weeks),income,expenses,reserve:income/(1-tax)-income,profit:revenue*margin};
}

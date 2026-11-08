import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {convert,overtime,raise,compare,freelance,paycheck,federalTax,ficaTax,takeHome,stateTax,bonusTax} from '../dist/assets/math.js';
const base={amount:25,period:'hourly',hours:8,days:5,weeks:52,unpaid:0};
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-7,`${a} != ${b}`);
const result=convert(base);
assert.equal(result.annual,52000);assert.equal(result.weekly,1000);close(result.monthly,4333.333333333333);assert.equal(result.biweekly,2000);close(result.semimonthly,52000/24);
assert.equal(convert({...base,unpaid:2}).annual,50000);
assert.equal(convert({...base,unpaid:2,period:'annual',amount:60000}).annual,60000);
assert.equal(convert({...base,unpaid:2,period:'annual',amount:60000}).hourly,30);
assert.equal(convert({...base,overtimeHours:5,multiplier:1.5}).annual,61750);
assert.equal(convert({period:'hourly',amount:25,hoursWeek:35,days:5,weeks:52,unpaid:0}).annual,45500);
assert.equal(convert({period:'annual',amount:60000,hoursWeek:40,days:5,weeks:52,unpaid:2}).hourly,30);
for(const [period,amount]of [['hourly',25],['daily',200],['weekly',1000],['biweekly',2000],['semimonthly',52000/24],['monthly',52000/12],['annual',52000]])close(convert({...base,period,amount}).hourly,25);
assert.equal(convert({...base,amount:0}).annual,0);
assert.throws(()=>convert({...base,hours:0}));assert.throws(()=>convert({...base,unpaid:52}));assert.throws(()=>convert({...base,amount:NaN}));assert.throws(()=>convert({...base,days:8}));assert.throws(()=>convert({...base,overtimeHours:129}));
const ot=overtime({rate:25,regular:40,extra:5,multiplier:1.5,weeks:52});assert.equal(ot.total,1187.5);assert.equal(ot.annual,61750);assert.equal(ot.overtimePay,187.5);
const rt=raise({current:60000,next:66000,hours:8,days:5,weeks:52,mode:'annual'});assert.equal(rt.percent,10);assert.equal(rt.annual,6000);assert.equal(rt.monthly,500);
const hr=raise({current:25,next:28,hours:8,days:5,weeks:52,mode:'hourly'});assert.equal(hr.hourly,3);assert.equal(hr.annual,6240);
const co=compare({a:{salary:60000,bonus:2000,hours:40,pto:2,commute:5},b:{salary:65000,bonus:0,hours:45,pto:3,commute:5}});close(co.a.effective,62000/2250);close(co.b.effective,65000/2450);assert.ok(co.difference>0);
const fr=freelance({income:60000,expenses:6000,hours:25,weeks:48,tax:25,margin:10});close(fr.rate,79.62962962962963);assert.equal(fr.billableHours,1200);assert.throws(()=>freelance({income:60000,expenses:6000,hours:25,weeks:48,tax:100,margin:10}));
const pc={period:'hourly',amount:25,hoursWeek:40,weeks:52,overtimeHours:0,multiplier:1.5,payFrequency:'biweekly',preTax:0,postTax:0,otherDeductions:0,bonus:0};
assert.equal(paycheck(pc).gross,2000);assert.equal(paycheck({...pc,preTax:100,postTax:50}).adjusted,1850);
assert.equal(paycheck({...pc,overtimeHours:10}).gross,2750);
assert.equal(paycheck({...pc,period:'annual',amount:60000,payFrequency:'semimonthly'}).gross,2500);
assert.equal(paycheck({...pc,payFrequency:'quarterly'}).gross,13000);
assert.equal(paycheck({...pc,payFrequency:'annual'}).gross,52000);
close(stateTax('CA','single',52000),1251.08);
close(stateTax('NY','single',52000),2211);
close(stateTax('PA','single',60000),1842);
close(stateTax('TX','single',52000),0);
close(stateTax('GA','single',50000),1746.5);
close(stateTax('GA','married',100000),3493);
close(stateTax('CA','single',5000),0);
close(stateTax('DC','single',100000),5531.5);
close(stateTax('OH','single',30000),108.625);
close(stateTax('MS','single',20000),308);
close(stateTax('AL','single',20000),810);
close(stateTax('KS','single',40000),1943.441);
assert.equal(paycheck({...pc,state:'CA'}).statePerCheck.toFixed(2),'48.12');
assert.equal(paycheck({...pc,state:'CA'}).takeHome.toFixed(2),'1642.73');
assert.equal(paycheck({...pc,state:'TX'}).takeHome.toFixed(2),'1690.85');
assert.ok(fs.readFileSync('dist/paycheck-calculator/index.html','utf8').includes('name="state"'));
assert.equal(paycheck({...pc,bonus:150,otherDeductions:200}).adjusted,1950);
assert.equal(paycheck({...pc,weeks:50}).gross,50000/26);
assert.throws(()=>paycheck({...pc,preTax:2001}));assert.throws(()=>paycheck({...pc,payFrequency:'daily'}));assert.throws(()=>paycheck({...pc,hoursWeek:0}));assert.throws(()=>paycheck({...pc,overtimeHours:129}));
assert.equal(overtime({rate:25,regular:40,extra:10,multiplier:2.25,weeks:52}).total,1562.5);
// 2026 federal take-home engine (IRS Rev. Proc. 2025-32) — cross-checked against published after-tax articles.
assert.equal(federalTax(0),0);close(federalTax(12400),1240);close(federalTax(56700),7186);close(federalTax(83900),13170);
close(ficaTax(60000).total,4590);close(ficaTax(250000).total,15514);close(ficaTax(250000).socialSecurity,11439);
close(takeHome(72800,'single').takeHome,60044.80);close(takeHome(60000,'single').takeHome,50390);close(takeHome(100000,'single').takeHome,79180);close(takeHome(52000,'single').takeHome,43962);close(takeHome(100000,'married').takeHome,84710);
close(convert({...base}).takeHomeAnnual,43962);
const pcTH={period:'hourly',amount:25,hoursWeek:40,weeks:52,overtimeHours:0,multiplier:1.5,payFrequency:'biweekly',preTax:0,postTax:0,otherDeductions:0,bonus:0};
close(paycheck(pcTH).takeHome,2000-(4060+3978)/26);close(paycheck({...pcTH,preTax:100}).takeHome,1900-(3748+3779.10)/26);close(paycheck({...pcTH,filingStatus:'married'}).takeHome,2000-(1980+3978)/26);
// Daily overtime by state — per-day hours + rule. Vectors hand-checked against the
// published rules (CA Labor Code §510; AK AS 23.10.060; CO COMPS Order #40 Rule 4.1;
// NV NRS 608.140, $18 = 1.5× the $12.00 minimum wage; OR ORS 652.020/653.265 manufacturing).
const ca5=overtime({rate:25,dailyMode:true,rule:'ca',days:[10,10,10,10,10,0,0],weeks:52});
assert.equal(ca5.total,1375);assert.equal(ca5.ot15Hours,10);assert.equal(ca5.dtHours,0);assert.equal(ca5.regularHours,40);assert.equal(ca5.days[0].pay,275);assert.equal(ca5.days[0].reg,8);assert.equal(ca5.days[0].ot15,2);
const ca6=overtime({rate:25,dailyMode:true,rule:'ca',days:[10,10,10,10,10,10,0],weeks:52});
assert.equal(ca6.total,1750);assert.equal(ca6.ot15Hours,20);assert.equal(ca6.weeklyOtHours,8);
const ca7=overtime({rate:25,dailyMode:true,rule:'ca',days:[8,8,8,8,8,8,8],weeks:52});
assert.equal(ca7.total,1600);assert.equal(ca7.ot15Hours,16);assert.equal(ca7.weeklyOtHours,8);assert.equal(ca7.days[6].ot15,8);assert.equal(ca7.days[6].reg,0);
const ca14=overtime({rate:20,dailyMode:true,rule:'ca',days:[14,0,0,0,0,0,0],weeks:52});
assert.equal(ca14.total,360);assert.equal(ca14.ot15Hours,4);assert.equal(ca14.dtHours,2);assert.equal(ca14.doublePay,80);
const caMix=overtime({rate:25,dailyMode:true,rule:'ca',days:[9,11,8,10,12,6,0],weeks:52});
assert.equal(caMix.total,1600);assert.equal(caMix.ot15Hours,16);assert.equal(caMix.regularHours,40);assert.equal(caMix.days[5].reg,6);
const ak5=overtime({rate:25,dailyMode:true,rule:'ak',days:[10,10,10,10,10,0,0],weeks:52});
assert.equal(ak5.total,1375);assert.equal(ak5.dtHours,0);
const ak3=overtime({rate:20,dailyMode:true,rule:'ak',days:[10,10,10,0,0,0,0],weeks:52});
assert.equal(ak3.total,660);assert.equal(ak3.ot15Hours,6);
const co3=overtime({rate:25,dailyMode:true,rule:'co',days:[14,14,14,0,0,0,0],weeks:52});
assert.equal(co3.total,1125);assert.equal(co3.ot15Hours,6);
const co5=overtime({rate:25,dailyMode:true,rule:'co',days:[13,13,13,13,13,0,0],weeks:52});
assert.equal(co5.total,1937.50);assert.equal(co5.ot15Hours,25);assert.equal(co5.weeklyOtHours,20);
const nvLow=overtime({rate:15,dailyMode:true,rule:'nv',days:[10,10,10,10,10,0,0],weeks:52});
assert.equal(nvLow.total,825);assert.equal(nvLow.ot15Hours,10);
const nvLow3=overtime({rate:15,dailyMode:true,rule:'nv',days:[10,10,10,0,0,0,0],weeks:52});
assert.equal(nvLow3.total,495);assert.equal(nvLow3.ot15Hours,6);
const nvHigh=overtime({rate:20,dailyMode:true,rule:'nv',days:[10,10,10,0,0,0,0],weeks:52});
assert.equal(nvHigh.total,600);assert.equal(nvHigh.ot15Hours,0);
const or4=overtime({rate:25,dailyMode:true,rule:'or',days:[12,12,12,12,0,0,0],weeks:52});
assert.equal(or4.total,1300);assert.equal(or4.ot15Hours,8);
const fed5=overtime({rate:25,dailyMode:true,rule:'federal',days:[10,10,10,10,10,0,0],weeks:52});
assert.equal(fed5.total,1375);assert.equal(fed5.ot15Hours,10);assert.equal(fed5.dtHours,0);
assert.throws(()=>overtime({rate:25,dailyMode:true,rule:'ca',days:[25,0,0,0,0,0,0],weeks:52}));
assert.throws(()=>overtime({rate:25,dailyMode:true,rule:'ca',days:[8,8,8,8,8,8],weeks:52}));
assert.throws(()=>overtime({rate:25,dailyMode:true,rule:'xx',days:[8,8,8,8,8,0,0],weeks:52}));
assert.throws(()=>overtime({rate:-5,dailyMode:true,rule:'ca',days:[8,8,8,8,8,0,0],weeks:52}));
const rpT=raise({current:60000,raiseMode:'percent',raisePercent:10,hours:8,days:5,weeks:52,mode:'annual'});assert.equal(rpT.percent,10);assert.equal(rpT.annual,6000);
const coT=compare({a:{salary:60000,bonus:2000,match:5,health:200,hours:40,pto:2,commute:5},b:{salary:65000,bonus:0,hours:45,pto:3,commute:5}});close(coT.a.effective,62600/2250);assert.equal(coT.a.totalComp,65000);
close(freelance({income:60000,expenses:6000,hours:25,weeks:48,tax:25,margin:10}).dayRate,79.62962962962963*8);
close(freelance({income:60000,expenses:6000,hours:25,weeks:48,tax:25,margin:10}).retainer,7962.962962962963);
// Bonus Tax Calculator — IRS Pub 15 (2026) Section 7 vectors (build spec 2026-11-07).
const bt1=bonusTax({bonus:5000});close(bt1.federal,1100);close(bt1.fica,382.50);close(bt1.takeHome,3517.50);
const bt2=bonusTax({bonus:1000});close(bt2.federal,220);close(bt2.fica,76.50);close(bt2.takeHome,703.50);
const bt3=bonusTax({bonus:10000});close(bt3.federal,2200);close(bt3.fica,765);close(bt3.takeHome,7035);
const bt4=bonusTax({bonus:1500000});close(bt4.federal,405000);close(bt4.socialSecurity,11439);close(bt4.medicare,21750);close(bt4.additionalMedicare,11700);close(bt4.federalUnder,220000);close(bt4.federal37,185000);
const bt5=bonusTax({bonus:10000,ytdWages:180000});close(bt5.socialSecurity,279);close(bt5.medicare,145);close(bt5.federal,2200);close(bt5.takeHome,7376);
const bt6=bonusTax({bonus:10000,deferral:1000});close(bt6.federal,1980);close(bt6.fica,765);close(bt6.takeHome,6255);
const bt7=bonusTax({bonus:200000,priorSupplemental:900000});close(bt7.federal,59000);close(bt7.federalUnder,22000);close(bt7.federal37,37000);
const bt8=bonusTax({bonus:10000,method:'aggregate',regularPay:2000,payFrequency:'biweekly',filingStatus:'single'});close(bt8.federal,2625.93);close(bt8.takeHome,6609.07);
assert.throws(()=>bonusTax({bonus:0}));assert.throws(()=>bonusTax({bonus:10000001}));assert.throws(()=>bonusTax({bonus:5000,ytdWages:-1}));assert.throws(()=>bonusTax({bonus:5000,priorSupplemental:-1}));assert.throws(()=>bonusTax({bonus:5000,deferral:5001}));assert.throws(()=>bonusTax({bonus:5000,stateRate:16}));assert.throws(()=>bonusTax({bonus:5000,method:'aggregate',payFrequency:'daily',regularPay:2000}));
assert.ok(fs.readFileSync('dist/calculators/bonus-tax/index.html','utf8').includes('$3,517.50'));
const root=path.resolve(import.meta.dirname,'../dist');
const routes=JSON.parse(fs.readFileSync(path.join(root,'routes.json'),'utf8'));
let links=0;
for(const route of routes){
  const html=fs.readFileSync(path.join(root,route.url,'index.html'),'utf8');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`Single H1: ${route.url}`);
  assert.ok(html.includes('name="description"'),`Description: ${route.url}`);
  assert.ok(html.includes('rel="canonical"'),`Canonical: ${route.url}`);
  for(const match of html.matchAll(/<script type="application\/ld\+json">([^<]+)<\/script>/g)){
    const data=JSON.parse(match[1]);assert.equal(data['@context'],'https://schema.org');
    for(const node of data['@graph']||[data]){
      if(node['@type']==='FAQPage')for(const item of node.mainEntity)assert.ok(html.includes(item.name),`Visible FAQ ${item.name} at ${route.url}`);
    }
  }
  const ids=new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g),m=>m[1]));
  assert.equal(ids.size,Array.from(html.matchAll(/\bid="([^"]+)"/g)).length,`Unique IDs: ${route.url}`);
  for(const m of html.matchAll(/(?:href|src)="([^"\s]+)"/g)){
    const url=m[1];
    if(url.startsWith('#'))assert.ok(ids.has(url.slice(1)),`Missing anchor ${url} in ${route.url}`);
    if(!url.startsWith('/'))continue;
    const [pathname]=url.split(/[?#]/),file=path.join(root,pathname);
    assert.ok(fs.existsSync(file),`Missing local destination ${url} from ${route.url}`);links++;
  }
}
for(const url of ['/hourly-to-salary-calculator/','/salary-to-hourly-calculator/','/overtime-calculator/','/paycheck-calculator/']){
  assert.ok(routes.some(route=>route.url===url),`Requested core path ${url}`);
  const html=fs.readFileSync(path.join(root,url,'index.html'),'utf8');assert.ok(html.includes('Calculate '));assert.ok(html.includes('data-copy-results'));assert.ok(html.includes('data-edit-schedule'));
}
console.log(`Checked gross-pay formulas and edge cases; ${routes.length} pages; ${links} local links and assets; unique IDs, H1s, descriptions, and canonicals.`);

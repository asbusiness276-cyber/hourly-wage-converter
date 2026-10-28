import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {convert,overtime,raise,compare,freelance,paycheck,federalTax,ficaTax,takeHome,stateTax} from '../dist/assets/math.js';
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
assert.equal(overtime({rate:25,dailyMode:true,hoursPerDay:10,daysPerWeek:5,weeks:52}).total,1375);
assert.equal(overtime({rate:25,dailyMode:true,hoursPerDay:10,daysPerWeek:6,weeks:52}).total,1750);
assert.equal(overtime({rate:25,dailyMode:true,hoursPerDay:8,daysPerWeek:7,weeks:52}).total,1600);
assert.equal(overtime({rate:20,dailyMode:true,hoursPerDay:14,daysPerWeek:1,weeks:52}).total,360);
const rpT=raise({current:60000,raiseMode:'percent',raisePercent:10,hours:8,days:5,weeks:52,mode:'annual'});assert.equal(rpT.percent,10);assert.equal(rpT.annual,6000);
const coT=compare({a:{salary:60000,bonus:2000,match:5,health:200,hours:40,pto:2,commute:5},b:{salary:65000,bonus:0,hours:45,pto:3,commute:5}});close(coT.a.effective,62600/2250);assert.equal(coT.a.totalComp,65000);
close(freelance({income:60000,expenses:6000,hours:25,weeks:48,tax:25,margin:10}).dayRate,79.62962962962963*8);
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

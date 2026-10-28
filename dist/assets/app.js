import {convert,overtime,raise,compare,freelance,paycheck} from './math.js?v=3.1';

const currency=(n,d=2)=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',minimumFractionDigits:d,maximumFractionDigits:d}).format(n);
const num=n=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(n);
const nav=document.querySelector('#navigation');
const menu=document.querySelector('.menu-toggle');
menu?.addEventListener('click',()=>{
  const open=menu.getAttribute('aria-expanded')!=='true';
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  nav.classList.toggle('open',open);
  if(!open){
    navDrops.forEach(closeDropdown);
  }
});
// Header Dropdowns (Calculators, Guides, About Us)
const navDrops = Array.from(document.querySelectorAll('.nav-drop'));
const closeTimers = new Map();

const clearDropTimer = (drop) => {
  if (closeTimers.has(drop)) {
    clearTimeout(closeTimers.get(drop));
    closeTimers.delete(drop);
  }
};

const closeDropdown = (drop) => {
  clearDropTimer(drop);
  drop.open = false;
  drop.removeAttribute('open');
};

const openDropdown = (drop) => {
  clearDropTimer(drop);
  navDrops.forEach(other => {
    if (other !== drop && (other.open || other.hasAttribute('open'))) {
      closeDropdown(other);
    }
  });
  drop.open = true;
  drop.setAttribute('open', '');
};

navDrops.forEach(drop => {
  const summary = drop.querySelector('summary');

  // MOUSE HOVER: Only trigger for actual mouse, desktop width
  drop.addEventListener('pointerenter', (e) => {
    if (e.pointerType === 'touch') return;
    if (window.innerWidth > 1100) {
      openDropdown(drop);
    }
  });

  drop.addEventListener('pointerleave', (e) => {
    if (e.pointerType === 'touch') return;
    if (window.innerWidth > 1100) {
      clearDropTimer(drop);
      // 240ms grace period so moving mouse across items never abruptly closes
      const timer = setTimeout(() => {
        closeDropdown(drop);
      }, 240);
      closeTimers.set(drop, timer);
    }
  });

  // CLICK / TOUCH on summary
  summary?.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.innerWidth > 1100) {
      e.preventDefault();
      const isOpen = drop.open || drop.hasAttribute('open');
      if (isOpen) {
        closeDropdown(drop);
      } else {
        openDropdown(drop);
      }
    }
    // On mobile (<= 1100px), do NOT call e.preventDefault()!
    // Native browser engine handles opening/closing <details> reliably on iOS/Android.
  });

  // Toggle event (handles mobile taps and keeps accordion behavior)
  drop.addEventListener('toggle', () => {
    if (drop.open) {
      navDrops.forEach(other => {
        if (other !== drop && (other.open || other.hasAttribute('open'))) {
          other.open = false;
          other.removeAttribute('open');
        }
      });
    }
  });
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    navDrops.forEach(closeDropdown);
    if (menu?.getAttribute('aria-expanded') === 'true') {
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('open');
      menu.focus();
    }
  }
});

document.addEventListener('click', event => {
  if (window.innerWidth > 1100) {
    navDrops.forEach(drop => {
      if ((drop.open || drop.hasAttribute('open')) && !drop.contains(event.target)) {
        closeDropdown(drop);
      }
    });
  }

  if (nav && nav.classList.contains('open') && !nav.contains(event.target) && !menu?.contains(event.target)) {
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
    navDrops.forEach(closeDropdown);
  }
});

nav?.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && window.innerWidth <= 1100) {
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
  }
});

// Pin only panels that fit in the viewport; long panels remain fully scrollable.
const stickyPanels=Array.from(document.querySelectorAll('.sticky:not(.toc)'));
const fitStickyPanels=()=>{
  const headerHeight=document.querySelector('.topbar')?.getBoundingClientRect().height||76;
  const available=window.innerHeight-headerHeight-36;
  for(const panel of stickyPanels)panel.classList.toggle('is-too-tall',panel.getBoundingClientRect().height>available);
};
if(stickyPanels.length){
  fitStickyPanels();window.addEventListener('resize',fitStickyPanels,{passive:true});
  if(typeof ResizeObserver!=='undefined'){
    const observer=new ResizeObserver(fitStickyPanels);stickyPanels.forEach(panel=>observer.observe(panel));
  }
}

const form=document.querySelector('[data-calculator]');
const results=document.querySelector('[data-results]');
let liveTimer;
if(form&&results){
  const kind=form.dataset.calculator;
  let currentResult=null;
  const controls=Array.from(form.querySelectorAll('input,select'));
  const read=()=>Object.fromEntries(controls.map(el=>[el.name,el.type==='number'?(el.value.trim()===''?NaN:Number(el.value)):el.value]));
  const compute=(values)=>{
    for(const el of controls){
      if(kind==='overtime'&&el.name==='multiplier'&&(values.multiplierMode!=='custom'||values.otMode==='daily'))continue;
      if(kind==='overtime'&&(el.name==='hoursPerDay'||el.name==='daysPerWeek')&&values.otMode!=='daily')continue;
      if(kind==='overtime'&&(el.name==='regular'||el.name==='extra')&&values.otMode==='daily')continue;
      if(kind==='raise'&&el.name==='next'&&values.raiseMode==='percent')continue;
      if(kind==='raise'&&el.name==='raisePercent'&&values.raiseMode!=='percent')continue;
      const value=values[el.name];
      if(el.type==='number'){
        if(!Number.isFinite(value))throw new Error(`Enter a number for ${el.closest('.field').querySelector('span').textContent.toLowerCase()}.`);
        if(el.min!==''&&value<Number(el.min))throw new Error(`${el.closest('.field').querySelector('span').textContent} must be ${el.min} or greater.`);
        if(el.max!==''&&value>Number(el.max))throw new Error(`${el.closest('.field').querySelector('span').textContent} must be ${el.max} or less.`);
      } else if(!Array.from(el.options).some(o=>o.value===value))throw new Error('Choose a valid option.');
    }
    if(kind==='converter')return convert(values);
    if(kind==='paycheck')return paycheck(values);
    if(kind==='overtime')return overtime({...values,dailyMode:values.otMode==='daily',multiplier:values.multiplierMode==='custom'?values.multiplier:Number(values.multiplierMode)});
    if(kind==='raise')return raise(values);
    if(kind==='comparison')return compare({a:{salary:values.aSalary,bonus:values.aBonus,hours:values.aHours,pto:values.aPto,commute:values.aCommute,match:values.aMatch,health:values.aHealth},b:{salary:values.bSalary,bonus:values.bBonus,hours:values.bHours,pto:values.bPto,commute:values.bCommute,match:values.bMatch,health:values.bHealth}});
    if(kind==='freelance')return freelance(values);
    throw new Error('Unsupported calculator.');
  };
  const out=(name,text)=>results.querySelectorAll(`[data-out="${name}"]`).forEach(el=>{el.textContent=text;});
  const text=(selector,value)=>{const el=results.querySelector(selector);if(el)el.textContent=value;};
  const announce=(message)=>{clearTimeout(liveTimer);liveTimer=setTimeout(()=>text('[data-live]',message),450);};
  function render(result,values){
    currentResult=result;
    form.querySelector('[data-error]').textContent='';
    results.classList.remove('result-error');
    const actionStatus=results.querySelector('[data-action-status]');if(actionStatus)actionStatus.textContent='';
    let primary=form.dataset.primary;
    if(kind==='converter'&&form.dataset.autoDirection==='true'){
      primary=values.period==='annual'?'hourly':'annual';
      const cell=results.querySelector('[data-base-period-cell]');
      if(cell){const key=primary==='annual'?'hourly':'annual';cell.querySelector('[data-out]').dataset.out=key;cell.querySelector('.result-label').textContent=key==='hourly'?'Hourly':'Annual';}
    }
    if(kind==='comparison'){
      out('aEffective',currency(result.a.effective));out('bEffective',currency(result.b.effective));
      out('aHours',`${num(result.a.committedHours)} committed hours/year`);out('bHours',`${num(result.b.committedHours)} committed hours/year`);
      out('aTotal',`${currency(result.a.totalComp)} total compensation / year`);out('bTotal',`${currency(result.b.totalComp)} total compensation / year`);
      const message=Math.abs(result.difference)<.005?'Both jobs provide the same effective hourly compensation.':`Job ${result.difference>0?'A':'B'} earns ${currency(Math.abs(result.difference))} more per hour of committed time.`;
      const diff=results.querySelector('[data-difference]');diff.replaceChildren();const strong=document.createElement('strong');strong.textContent=message;diff.append(strong);
      announce(`Job A ${currency(result.a.effective)} per hour. Job B ${currency(result.b.effective)} per hour.`);
      renderReceipt(kind,values,result);
      return;
    }
    for(const [key,value] of Object.entries(result)){
      if(typeof value!=='number')continue;
      out(key,key==='percent'?`${num(value)}%`:['billableHours','totalHours'].includes(key)?num(value):currency(value,key==='minute'?3:key==='second'?4:2));
    }
    if(kind==='converter'){
      out('primary',currency(result[primary]));
      text('[data-primary-label]',primary==='hourly'?'Your equivalent hourly rate':'Your annual gross pay');text('[data-primary-unit]',primary==='hourly'?'/ hour':'/ year');
      text('[data-assumption]',`${num(result.hoursWeek)} hours/week · ${num(result.paidWeeks)} paid weeks/year${result.overtimeHours?` · ${num(result.overtimeHours)} overtime hours`:''}`);
      text('[data-result-note]',(result.hourly>1000||result.annual>5000000)?'Unusually high rate — please double-check your entry. Figures assume the entered rate is correct.':result.overtimeHours?'Weekly and longer totals include overtime. Hourly, daily, minute, and second figures show the regular rate.':'Monthly and semi-monthly figures are annual averages.');
      const suffix=form.querySelector('[name="amount"]').closest('.input-wrap').querySelector('.suffix');
      suffix.textContent={hourly:'/ hour',daily:'/ day',weekly:'/ week',biweekly:'/ 2 wk',semimonthly:'/ half mo',monthly:'/ month',annual:'/ year'}[values.period];
      const label=form.querySelector('[name="amount"]').closest('.field').querySelector('span');
      label.textContent={hourly:'Hourly wage',annual:'Annual salary',daily:'Daily wage',weekly:'Weekly pay',biweekly:'Biweekly pay',semimonthly:'Semi-monthly pay',monthly:'Monthly salary'}[values.period];
      const quick=document.querySelector('[data-quick-answer]');
      if(quick)quick.textContent=`${currency(result.hourly)}/hour = ${currency(result.annual)}/year. Based on ${num(result.hoursWeek)} regular hours/week and ${num(result.paidWeeks)} paid weeks${result.overtimeHours?`, plus ${num(result.overtimeHours)} overtime hours/week`:''}. Gross earnings before deductions. Federal-only take-home estimate (single filer): ${currency(result.takeHomeAnnual)}/year.`;
      announce(`Annual gross pay ${currency(result.annual)}. Regular hourly rate ${currency(result.hourly)}.`);
      const ms=document.querySelector('[data-milestones]');
      if(ms){
        if(result.hourly>0&&result.hoursWeek>0){
          ms.innerHTML=[10000,50000,100000].map(target=>{const hrs=target/result.hourly;const wks=hrs/result.hoursWeek;return `<div class="milestone-row"><span>Time to earn ${currency(target,0)}</span><strong>${num(hrs)} hours · ~${num(wks)} weeks</strong></div>`;}).join('');
        } else ms.innerHTML='';
      }
    }
    if(kind==='paycheck'){
      const labels={weekly:'Weekly',biweekly:'Biweekly',semimonthly:'Semi-monthly',monthly:'Monthly',quarterly:'Quarterly',annual:'Annual'};
      text('[data-assumption]',`${labels[values.payFrequency]} · ${result.periods} ${result.periods===1?'check':'checks'}/year`);
      const input=form.querySelector('[name="amount"]');input.closest('.field').querySelector('span').textContent=values.period==='annual'?'Annual salary':'Hourly wage';input.closest('.input-wrap').querySelector('.suffix').textContent=values.period==='annual'?'/ year':'/ hour';
      const quick=document.querySelector('[data-quick-answer]');if(quick)quick.textContent=`Estimated ${labels[values.payFrequency].toLowerCase()} gross paycheck: ${currency(result.gross)}. Regular pay ${currency(result.regularPay)}, overtime ${currency(result.overtimePay)}, bonus ${currency(result.bonus)}. After entered deductions: ${currency(result.adjusted)}. Federal-only take-home estimate: ${currency(result.takeHome)} per check (federal ${currency(result.federalPerCheck)} + FICA ${currency(result.ficaPerCheck)}). State tax excluded.`;
      announce(`Gross paycheck ${currency(result.gross)}. After entered deductions ${currency(result.adjusted)}. Federal-only take-home ${currency(result.takeHome)} per check.`);
    }
    if(kind==='converter'||kind==='paycheck'){
      form.querySelectorAll('[data-direction]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.direction===values.period)));
      form.querySelectorAll('[data-preset-group]').forEach(group=>group.hidden=group.dataset.presetGroup!==values.period);
      form.querySelectorAll('[data-fill="amount"]').forEach(button=>button.classList.toggle('is-selected',Number(button.dataset.value)===values.amount&&button.dataset.payMode===values.period));
    }
    if(kind==='overtime'){
      text('[data-assumption]',values.otMode==='daily'?`${num(values.hoursPerDay)} hours/day × ${num(values.daysPerWeek)} days/week (daily rule)`:`${num(values.regular)} regular + ${num(values.extra)} overtime hours/week`);
      form.querySelector('[data-custom-multiplier]').hidden=values.multiplierMode!=='custom';
      const dailyFields=form.querySelector('[data-daily-fields]');if(dailyFields)dailyFields.hidden=values.otMode!=='daily';
      const multField=form.elements.namedItem('multiplierMode')?.closest('.field');if(multField)multField.hidden=values.otMode==='daily';
      form.querySelectorAll('[data-multiplier]').forEach(btn=>{btn.hidden=values.otMode==='daily';});
      if(values.multiplierMode!=='custom')form.elements.namedItem('multiplier').value=values.multiplierMode;
      const quick=document.querySelector('[data-quick-answer]');if(quick)quick.textContent=values.otMode==='daily'?`Daily-rule overtime: ${num(result.ot15Hours)} hours at 1.5×, ${num(result.dtHours)} hours at 2×, ${num(result.weeklyOtHours)} weekly overtime hours. Total weekly gross pay ${currency(result.total)}.`:`Overtime rate: ${currency(result.overtimeRate)}/hour. ${num(values.extra)} extra hours add ${currency(result.overtimePay)} to ${currency(result.regularPay)} regular pay, for ${currency(result.total)} total weekly gross pay.`;
      announce(`Total weekly gross pay ${currency(result.total)}.`);
    }
    if(kind==='raise'){
      const pctDiv=form.querySelector('[data-percent-mode]');if(pctDiv)pctDiv.hidden=values.raiseMode!=='percent';
      const change=result.percent===0?'No change in pay':`${num(Math.abs(result.percent))}% ${result.percent>0?'increase':'decrease'} in pay`;
      text('[data-assumption]',change);announce(`${change}. Annual change ${currency(result.annual)}.`);
    }
    if(kind==='freelance'){
      text('[data-assumption]',`${num(values.hours)} billable hours/week · ${num(values.weeks)} weeks/year`);
      announce(`Target freelance rate ${currency(result.rate)} per billable hour.`);
    }
    renderReceipt(kind,values,result);
  }
  const renderReceipt=(kind,values,result)=>{
    try {
    const box=document.querySelector('[data-receipt]');if(!box)return;
    const moneyField=(el)=>{const p=el.closest('.field')?.querySelector('.prefix');return !!p&&p.textContent.includes('$');};
    const inputs=controls.filter(el=>el.name&&!(kind==='overtime'&&el.name==='multiplier'&&(values.multiplierMode!=='custom'||values.otMode==='daily'))&&!(kind==='overtime'&&(el.name==='hoursPerDay'||el.name==='daysPerWeek')&&values.otMode!=='daily')&&!(kind==='overtime'&&(el.name==='regular'||el.name==='extra')&&values.otMode==='daily')&&!(kind==='raise'&&el.name==='next'&&values.raiseMode==='percent')&&!(kind==='raise'&&el.name==='raisePercent'&&values.raiseMode!=='percent')).map(el=>{
      const job=el.closest('.job-card')?.querySelector('.job-label')?.textContent;
      const label=(job?job+' ': '')+(el.closest('.field')?.querySelector('span')?.textContent||el.name);
      const raw=values[el.name];
      const val=el.type==='number'?(moneyField(el)?currency(raw):num(raw)):(el.type==='select-one'?el.options[el.selectedIndex]?.text||raw:raw);
      return `${label}: ${val}`;
    }).join(' · ');
    const formulas={converter:values.period==='annual'?'Annual salary ÷ (hours per week × paid weeks per year)':'Hourly rate × hours per week × paid weeks per year',paycheck:'Annual gross pay ÷ scheduled checks per year',overtime:values.otMode==='daily'?'(Daily 1.5× after 8h + 2× after 12h, day-7 rule) + weekly 1.5× on remaining hours over 40':'(Regular rate × regular hours) + (regular rate × multiplier × overtime hours)',raise:'(New pay − current pay) ÷ current pay × 100',comparison:'(Salary + bonus + 401(k) match − health premiums) ÷ [(work + commute hours) × (52 − PTO weeks)]',freelance:'[Desired income ÷ (1 − tax reserve) + expenses] ÷ (1 − profit margin) ÷ billable hours'};
    const results={converter:`${currency(result.hourly)}/hour = ${currency(result.annual)}/year, gross; federal-only take-home (single filer) ${currency(result.takeHomeAnnual)}/year`,paycheck:`Gross ${currency(result.gross)} per check; after entered deductions ${currency(result.adjusted)}; federal-only take-home ${currency(result.takeHome)} (federal ${currency(result.federalPerCheck)} + FICA ${currency(result.ficaPerCheck)} per check)`,overtime:`Total weekly gross pay ${currency(result.total)} (regular ${currency(result.regularPay)} + overtime ${currency(result.overtimePay)})`,raise:`${num(result.percent)}% change; annual change ${currency(result.annual)}`,comparison:`Job A ${currency(result.a.effective)} per committed hour; Job B ${currency(result.b.effective)} per committed hour; difference ${currency(Math.abs(result.difference))} per hour; total compensation A ${currency(result.a.totalComp)}, B ${currency(result.b.totalComp)}`,freelance:`Target rate ${currency(result.rate)} per billable hour (required revenue ${currency(result.revenue)} per year); day rate (8 hours) ${currency(result.dayRate)}`};
    box.innerHTML=`<p class="receipt-line"><strong>Inputs:</strong> ${inputs}</p><p class="receipt-line"><strong>Formula:</strong> ${formulas[kind]||''}</p><p class="receipt-line"><strong>Result:</strong> ${results[kind]||''}</p>`;
    } catch(e) { /* Receipt is decorative; never break the calculator. */ }
  };
  const update=()=>{
    try {const values=read(), result=compute(values);render(result,values);return result;}
    catch(error){
      currentResult=null;
      form.querySelector('[data-error]').textContent=error.message;results.classList.add('result-error');
      results.querySelectorAll('[data-out]').forEach(el=>el.textContent='—');
      text('[data-assumption]','Check your inputs to see an estimate.');text('[data-difference]','Enter valid numbers for both jobs.');
      const quick=document.querySelector('[data-quick-answer]');if(quick)quick.textContent='Enter valid numbers above to see your calculation summary.';
      const receiptBox=document.querySelector('[data-receipt]');if(receiptBox)receiptBox.innerHTML='<p class="caption">Enter valid numbers above to see the receipt.</p>';
      const msEl=document.querySelector('[data-milestones]');if(msEl)msEl.innerHTML='';
      return null;
    }
  };
  form.addEventListener('submit',event=>{event.preventDefault();if(update()&&window.innerWidth<=640){results.scrollIntoView({behavior:'smooth',block:'start'});results.tabIndex=-1;results.focus({preventScroll:true});}});
  form.addEventListener('input',update);
  let lastMode=form.querySelector('[name="mode"]')?.value;
  form.addEventListener('change',event=>{
    if(kind==='raise'&&event.target.name==='mode'){
      const current=read();const factor=current.hours*current.days*current.weeks;
      if(Number.isFinite(factor)&&factor>0&&lastMode!==current.mode){
        for(const name of ['current','next'])form.elements.namedItem(name).value=(current[name]*(current.mode==='annual'?factor:1/factor)).toFixed(2);
      }
      lastMode=current.mode;
    }
    update();
  });
  const resetCalculator=(source='form')=>{
    form.reset();
    form.querySelectorAll('details.advanced, details.more-periods').forEach(d=>d.removeAttribute('open'));
    const customMult=form.querySelector('[data-custom-multiplier]');
    if(customMult)customMult.hidden=true;
    const errorEl=form.querySelector('[data-error]');
    if(errorEl)errorEl.textContent='';
    results.classList.remove('result-error');
    const actionStatus=results.querySelector('[data-action-status]');
    if(actionStatus){
      actionStatus.textContent='Reset to defaults';
      setTimeout(()=>{if(actionStatus.textContent==='Reset to defaults')actionStatus.textContent='';},2500);
    }
    if(window.location.search){
      try{window.history.replaceState(null,'',window.location.pathname);}catch{}
    }
    if(kind==='raise')lastMode=form.querySelector('[name="mode"]')?.value||'annual';
    setTimeout(()=>{update();announce('Calculator reset to default values.');},0);
    if(source==='results'&&window.innerWidth<=768){
      form.scrollIntoView({behavior:'smooth',block:'start'});
    }
  };
  form.addEventListener('reset',()=>setTimeout(()=>{
    form.querySelectorAll('details.advanced, details.more-periods').forEach(d=>d.removeAttribute('open'));
    const customMult=form.querySelector('[data-custom-multiplier]');
    if(customMult)customMult.hidden=true;
    const errorEl=form.querySelector('[data-error]');
    if(errorEl)errorEl.textContent='';
    results.classList.remove('result-error');
    if(window.location.search){try{window.history.replaceState(null,'',window.location.pathname);}catch{}}
    if(kind==='raise')lastMode=form.querySelector('[name="mode"]')?.value||'annual';
    update();
    announce('Calculator reset to default values.');
  },0));
  form.querySelectorAll('[type="reset"], [data-reset]').forEach(btn=>btn.addEventListener('click',e=>{
    e.preventDefault();resetCalculator('form');
  }));
  form.querySelectorAll('[data-preset]').forEach(button=>button.addEventListener('click',()=>{
    form.elements.namedItem('period').value='hourly';form.elements.namedItem('amount').value=button.dataset.preset;update();
  }));
  form.querySelectorAll('[data-fill]').forEach(button=>button.addEventListener('click',()=>{
    form.elements.namedItem(button.dataset.fill).value=button.dataset.value;
    if(button.dataset.fill==='amount')form.elements.namedItem('period').value=button.dataset.payMode;
    update();
  }));
  form.querySelectorAll('[data-direction]').forEach(button=>button.addEventListener('click',()=>{
    const values=read();
    if(currentResult){
      const next=button.dataset.direction;
      const value=kind==='converter'?(next==='annual'?currentResult.baseAnnual:currentResult.hourly):(next==='annual'?currentResult.regularPay*currentResult.periods:currentResult.hourlyRate);
      form.elements.namedItem('amount').value=String(value);
    }else{form.elements.namedItem('amount').value=button.dataset.direction==='annual'?60000:25;}
    form.elements.namedItem('period').value=button.dataset.direction;update();
  }));
  form.querySelectorAll('[data-multiplier]').forEach(button=>button.addEventListener('click',()=>{form.elements.namedItem('multiplierMode').value=button.dataset.multiplier;update();}));
  results.querySelectorAll('[data-edit-schedule]').forEach(btn=>btn.addEventListener('click',()=>{
    const field=form.elements.namedItem('hoursWeek')||form.elements.namedItem('regular')||form.elements.namedItem('hours')||form.elements.namedItem('aHours');
    form.scrollIntoView({behavior:'smooth',block:'start'});field?.focus({preventScroll:true});
  }));
  results.querySelectorAll('[data-reset-results]').forEach(btn=>btn.addEventListener('click',e=>{
    e.preventDefault();resetCalculator('results');
  }));
  results.querySelectorAll('[data-copy-results]').forEach(btn=>btn.addEventListener('click',async()=>{
    const status=results.querySelector('[data-action-status]');
    if(!currentResult){if(status)status.textContent='Enter valid inputs first.';return;}
    const lines=[document.querySelector('h1').textContent];
    for(const output of results.querySelectorAll('[data-out]')){
      const parent=output.closest('.result-cell,.result-heading,.adjusted-result,.job-result')||output.parentElement;
      const label=parent.querySelector('.result-label,.result-topline>span,.adjusted-result>span')?.textContent||parent.querySelector('span')?.textContent||output.dataset.out;
      lines.push(`${label}: ${output.textContent}`);
    }
    lines.push(results.querySelector('[data-assumption]')?.textContent||'');lines.push('Gross pay estimate with a federal-only take-home line where shown. State tax excluded.');
    const value=lines.join('\n');
    try{await navigator.clipboard.writeText(value);if(status)status.textContent='Results copied.';}
    catch{results.querySelector('.copy-fallback')?.remove();const area=document.createElement('textarea');area.value=value;area.className='copy-fallback';area.setAttribute('aria-label','Results to copy');results.append(area);area.focus();area.select();if(status)status.textContent='Select and copy the results below.';}
  }));
  const params=new URLSearchParams(location.search);
  if(kind==='converter'&&params.has('amount')){
    const amount=Number(params.get('amount'));if(Number.isFinite(amount)&&amount>=0){form.elements.namedItem('amount').value=amount;form.elements.namedItem('period').value=params.get('period')==='annual'?'annual':'hourly';}
  }
  update();

  // The same compute and render functions power both the UI and the page tool.
  const context=document.modelContext;
  if(context?.registerTool){
    const lifecycle=new AbortController();
    const properties=Object.fromEntries(controls.map(el=>[el.name,el.type==='number'?{type:'number',minimum:Number(el.min||0),...(el.max!==''?{maximum:Number(el.max)}:{})}:{type:'string',enum:Array.from(el.options).map(o=>o.value)}]));
    const names={converter:'convert_wage',paycheck:'estimate_gross_paycheck',overtime:'calculate_overtime_pay',raise:'calculate_pay_raise',comparison:'compare_job_compensation',freelance:'calculate_freelance_rate'};
    try{
      Promise.resolve(context.registerTool({
        name:names[kind],title:'Calculate pay',
        description:'Set the visible calculator inputs and calculate the result. Unspecified fields keep their current values. Gross figures are estimates; take-home lines, where shown, are federal-only estimates.',
        inputSchema:{type:'object',properties,additionalProperties:false},
        annotations:{readOnlyHint:false,untrustedContentHint:false},
        execute(input){
          if(!input||typeof input!=='object'||Array.isArray(input))throw new Error('Provide calculator inputs as an object.');
          for(const [key,value]of Object.entries(input)){
            const schema=properties[key];if(!schema)throw new Error(`Unknown input: ${key}`);
            if(schema.type==='number'&&(typeof value!=='number'||!Number.isFinite(value)))throw new Error(`${key} must be a finite number.`);
            if(schema.type==='string'&&(!schema.enum.includes(value)))throw new Error(`Invalid option for ${key}.`);
          }
          const values={...read(),...input};
          if(kind==='overtime'&&Object.hasOwn(input,'multiplier')&&!Object.hasOwn(input,'multiplierMode'))values.multiplierMode='custom';
          const result=compute(values);
          for(const el of controls)el.value=String(values[el.name]);
          if(kind==='raise')lastMode=values.mode;
          render(result,values);
          if(kind==='converter')return {annualGross:result.annual,monthlyGross:result.monthly,weeklyGross:result.weekly,hourlyRate:result.hourly,paidWeeks:result.paidWeeks};
          return result;
        }
      },{signal:lifecycle.signal})).catch(()=>{});
    }catch{}
    window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
  }
}

const copyEmailBtn=document.querySelector('[data-copy-email]');
if(copyEmailBtn){
  copyEmailBtn.addEventListener('click',async()=>{
    const email=copyEmailBtn.dataset.copyEmail||'hourlywageconverter@gmail.com';
    try{
      await navigator.clipboard.writeText(email);
      const originalText=copyEmailBtn.textContent;
      copyEmailBtn.textContent='Copied!';
      setTimeout(()=>{copyEmailBtn.textContent=originalText;},2000);
    }catch{}
  });
}

// ==========================================================================
// CONTACT FORM HANDLER (VALIDATION, API SUBMISSION & HONEST MAILTO FALLBACK)
// ==========================================================================
const contactForm=document.querySelector('[data-contact-form]');
if(contactForm){
  const statusEl=document.getElementById('contact-form-status');
  const submitBtn=document.getElementById('contact-submit');
  const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const setStatus=(type,html)=>{
    if(!statusEl)return;
    statusEl.className=`contact-status ${type}`;
    statusEl.innerHTML=html;
  };

  contactForm.addEventListener('reset',()=>{
    if(statusEl){
      statusEl.className='contact-status';
      statusEl.innerHTML='';
    }
  });

  contactForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const formData=new FormData(contactForm);
    const website=String(formData.get('website')||'').trim();
    if(website){
      // Honeypot triggered
      return;
    }
    const name=String(formData.get('name')||'').trim();
    const email=String(formData.get('email')||'').trim();
    const enquiryType=String(formData.get('enquiryType')||'General Question').trim();
    const pageUrl=String(formData.get('pageUrl')||'').trim();
    const message=String(formData.get('message')||'').trim();

    if(name.length<2){
      setStatus('error','Please enter your name (at least 2 characters).');
      contactForm.elements.namedItem('name')?.focus();
      return;
    }
    if(!emailRegex.test(email)){
      setStatus('error','Please enter a valid email address so we can reply to you.');
      contactForm.elements.namedItem('email')?.focus();
      return;
    }
    if(pageUrl){
      try{
        const u=new URL(pageUrl);
        if(!['http:','https:'].includes(u.protocol))throw new Error('Invalid URL');
      }catch{
        setStatus('error','Please enter a complete URL starting with https:// or leave the URL field blank.');
        contactForm.elements.namedItem('pageUrl')?.focus();
        return;
      }
    }
    if(message.length<10){
      setStatus('error','Please enter a message of at least 10 characters.');
      contactForm.elements.namedItem('message')?.focus();
      return;
    }

    const originalBtnHtml=submitBtn?.innerHTML;
    if(submitBtn){
      submitBtn.disabled=true;
      submitBtn.textContent='Preparing message...';
    }

    const subject=`[Hourly Wage Converter] ${enquiryType} — from ${name}`;
    const formattedBody=[
      `Name: ${name}`,
      `Reply-To Email: ${email}`,
      `Enquiry Type: ${enquiryType}`,
      pageUrl?`Page / Calculator URL: ${pageUrl}`:null,
      ``,
      `Message:`,
      message
    ].filter(v=>v!==null).join('\n');
    const mailtoHref=`mailto:hourlywageconverter@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

    try{
      const res=await fetch('/api/contact',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({name,email,enquiryType,pageUrl,message,website})
      });
      const data=await res.json().catch(()=>({}));

      if(res.ok&&data.ok&&data.mode==='server'){
        setStatus('success',`<strong>Message sent!</strong> Thank you, ${name.replace(/[<>&"]/g,'')}. Your enquiry has been delivered to our team and we typically respond within 24–48 business hours.`);
        contactForm.reset();
      }else if(res.status===400&&data.error){
        setStatus('error',data.error);
      }else{
        // Honest client-side email dispatch when server mail relay key is not configured
        window.location.href=mailtoHref;
        setStatus('success',`<strong>Your message is ready to send in your email app!</strong><br>We opened a pre-addressed email to <strong>hourlywageconverter@gmail.com</strong> with your details filled in. Just click <strong>Send</strong> in your mail client.<div style="margin-top:10px;display:flex;flex-wrap:wrap;gap:8px"><a href="${mailtoHref}" class="calculate-button" style="display:inline-flex;align-items:center;justify-content:center;width:auto;padding:8px 16px;min-height:36px;font-size:0.85rem;text-decoration:none">Open Email App Again</a><button type="button" class="btn-secondary" id="copy-formatted-msg" style="min-height:36px;padding:8px 14px;font-size:0.85rem">Copy Message Text</button></div>`);
        const copyMsgBtn=document.getElementById('copy-formatted-msg');
        if(copyMsgBtn){
          copyMsgBtn.addEventListener('click',async()=>{
            try{
              await navigator.clipboard.writeText(`To: hourlywageconverter@gmail.com\nSubject: ${subject}\n\n${formattedBody}`);
              copyMsgBtn.textContent='Copied to Clipboard!';
            }catch{}
          });
        }
      }
    }catch{
      window.location.href=mailtoHref;
      setStatus('success',`<strong>Your message is ready to send in your email app!</strong><br>We opened a pre-addressed email to <strong>hourlywageconverter@gmail.com</strong> with your details filled in. Click <strong>Send</strong> in your mail app, or <a href="${mailtoHref}" style="color:var(--primary);font-weight:700;text-decoration:underline">click here to open your email client</a>.`);
    }finally{
      if(submitBtn&&originalBtnHtml){
        submitBtn.disabled=false;
        submitBtn.innerHTML=originalBtnHtml;
      }
    }
  });
}

// ==========================================================================
// SEARCH MODAL & INSTANT CLIENT-SIDE SEARCH
// ==========================================================================
const searchIndex = [
  // Calculators
  { title: 'Hourly Wage Converter', url: '/', category: 'Calculator', desc: 'Convert between hourly wage, daily, weekly, biweekly, monthly, and annual gross pay.' },
  { title: 'Salary to Hourly Calculator', url: '/salary-to-hourly-calculator/', category: 'Calculator', desc: 'Find the hourly equivalent of your annual salary based on your working schedule.' },
  { title: 'Hourly to Salary Calculator', url: '/hourly-to-salary-calculator/', category: 'Calculator', desc: 'See what your hourly rate adds up to over a year with custom hours and unpaid leave.' },
  { title: 'Paycheck Calculator', url: '/paycheck-calculator/', category: 'Calculator', desc: 'Estimate gross pay per paycheck for weekly, biweekly, semi-monthly, or monthly pay cycles.' },
  { title: 'Overtime Calculator', url: '/overtime-calculator/', category: 'Calculator', desc: 'Calculate overtime pay at 1.5x time-and-a-half or double time for extra weekly hours.' },
  { title: 'Salary Increase & Raise Calculator', url: '/calculators/salary-increase/', category: 'Calculator', desc: 'Calculate your raise in dollars and percentage change across all pay periods.' },
  { title: 'Salary Comparison Calculator', url: '/calculators/salary-comparison/', category: 'Calculator', desc: 'Compare two job offers factoring in salary, bonus, work hours, PTO, and commute.' },
  { title: 'Freelance Rate Calculator', url: '/calculators/freelance-rate/', category: 'Calculator', desc: 'Build an hourly freelance rate based on target income, expenses, taxes, and billable hours.' },
  { title: 'All Wage & Salary Calculators', url: '/calculators/', category: 'Directory', desc: 'Browse the complete collection of free wage, salary, overtime, and paycheck tools.' },

  // Hourly conversion guides
  { title: '$15 an Hour Is How Much a Year?', url: '/hourly/15-an-hour/', category: 'Hourly Guide', desc: '$15/hr equals $31,200/year at 40 hours/week. View monthly, biweekly, and weekly pay.' },
  { title: '$20 an Hour Is How Much a Year?', url: '/hourly/20-an-hour/', category: 'Hourly Guide', desc: '$20/hr equals $41,600/year at 40 hours/week. View monthly, biweekly, and weekly pay.' },
  { title: '$25 an Hour Is How Much a Year?', url: '/hourly/25-an-hour/', category: 'Hourly Guide', desc: '$25/hr equals $52,000/year at 40 hours/week. View monthly, biweekly, and weekly pay.' },
  { title: '$30 an Hour Is How Much a Year?', url: '/hourly/30-an-hour/', category: 'Hourly Guide', desc: '$30/hr equals $62,400/year at 40 hours/week. View monthly, biweekly, and weekly pay.' },
  { title: '$40 an Hour Is How Much a Year?', url: '/hourly/40-an-hour/', category: 'Hourly Guide', desc: '$40/hr equals $83,200/year at 40 hours/week. View monthly, biweekly, and weekly pay.' },
  { title: '$50 an Hour Is How Much a Year?', url: '/hourly/50-an-hour/', category: 'Hourly Guide', desc: '$50/hr equals $104,000/year at 40 hours/week. View monthly, biweekly, and weekly pay.' },
  { title: 'All Hourly Pay Guides', url: '/hourly/', category: 'Hourly Guide', desc: 'Browse full-year breakdowns for common hourly wage rates.' },

  // Salary conversion guides
  { title: '$40,000 Salary to Hourly', url: '/salary/40000-salary-to-hourly/', category: 'Salary Guide', desc: '$40,000 a year is approximately $19.23 an hour at 40 hours per week.' },
  { title: '$50,000 Salary to Hourly', url: '/salary/50000-salary-to-hourly/', category: 'Salary Guide', desc: '$50,000 a year is approximately $24.04 an hour at 40 hours per week.' },
  { title: '$60,000 Salary to Hourly', url: '/salary/60000-salary-to-hourly/', category: 'Salary Guide', desc: '$60,000 a year is approximately $28.85 an hour at 40 hours per week.' },
  { title: '$75,000 Salary to Hourly', url: '/salary/75000-salary-to-hourly/', category: 'Salary Guide', desc: '$75,000 a year is approximately $36.06 an hour at 40 hours per week.' },
  { title: '$100,000 Salary to Hourly', url: '/salary/100000-salary-to-hourly/', category: 'Salary Guide', desc: '$100,000 a year is approximately $48.08 an hour at 40 hours per week.' },
  { title: 'All Salary to Hourly Guides', url: '/salary/', category: 'Salary Guide', desc: 'Find hourly equivalents and pay period breakdowns for popular annual salaries.' },

  // Articles & Resources
  { title: 'How to Convert Hourly Pay to Annual Salary: Complete Guide', url: '/articles/how-to-convert-hourly-pay-to-annual-salary/', category: 'Article', desc: 'Master the 2,080-hour baseline, unpaid time off, FLSA overtime impact, and pay intervals.' },
  { title: 'How to Calculate Your Hourly Rate From Annual Salary', url: '/articles/how-to-calculate-hourly-rate-from-salary/', category: 'Article', desc: 'Learn how to convert annual salary to hourly pay with formulas, schedule adjustments, and examples.' },
  { title: 'How to Calculate Your Taxes on a Paycheck', url: '/articles/how-to-calculate-taxes-on-paycheck/', category: 'Article', desc: 'Step-by-step guide to calculating federal withholding, FICA, state taxes, and net take-home pay.' },
  { title: 'How to Calculate Pay With an Overtime Calculator', url: '/articles/how-to-calculate-pay-with-overtime-calculator/', category: 'Article', desc: 'Step-by-step guide to calculating time-and-a-half, double time, shift differentials, and overtime paychecks.' },
  { title: 'How Much Is $23 an Hour a Year?', url: '/articles/how-much-is-23-an-hour-a-year/', category: 'Article', desc: 'Learn exact gross annual pay ($47,840), monthly and biweekly checks, take-home pay after taxes, and budget tips.' },
  { title: 'How Much Is $45 an Hour Annually?', url: '/articles/how-much-is-45-an-hour-annually/', category: 'Article', desc: 'Learn exact gross annual pay ($93,600), monthly and biweekly checks, take-home pay after taxes, and wealth tips.' },
  { title: 'How Much Is $30 an Hour Annually?', url: '/articles/how-much-is-30-an-hour-annually/', category: 'Article', desc: 'Learn exact gross annual pay ($62,400), monthly and biweekly checks, 2026 tax withholdings, and take-home budget.' },
  { title: 'Pay & Salary Articles Directory', url: '/articles/', category: 'Articles', desc: 'Read guides and articles on hourly wages, salaries, hours, and compensation.' },
  { title: 'Calculation Methodology', url: '/methodology/', category: 'Resource', desc: 'Formulas, rounding rules, assumptions, and math behind all our wage calculators.' },
  { title: 'Frequently Asked Questions (FAQ)', url: '/faqs/', category: 'Resource', desc: 'Clear answers to common questions about wage conversions, salaries, overtime, and paychecks.' },
  { title: 'About Hourly Wage Converter', url: '/about/', category: 'About', desc: 'About our mission to make wage and calculation transparent and easy.' },
  { title: 'Saahil - Digital Marketing Expert & Technical Tools Architect', url: '/author/saahil/', category: 'Author', desc: 'Author profile, background, digital marketing, and technical web tools by Saahil.' },
  { title: 'Contact Us', url: '/contact/', category: 'Contact', desc: 'Official direct email hourlywageconverter@gmail.com and verified channels for feedback, bug reports, and questions.' }
];

const searchBackdrop = document.getElementById('search-modal-backdrop');
const searchTrigger = document.getElementById('search-trigger');
const mobileSearchTrigger = document.getElementById('mobile-search-trigger');
const searchCloseBtn = document.getElementById('search-modal-close');
const searchInput = document.getElementById('site-search-input');
const quickLinks = document.getElementById('search-quick-links');
const resultsList = document.getElementById('search-results-list');
const noResults = document.getElementById('search-no-results');
const queryEcho = document.getElementById('search-query-echo');

let selectedIndex = -1;

function openSearch() {
  if (!searchBackdrop) return;
  if (nav && nav.classList.contains('open')) {
    menu?.setAttribute('aria-expanded', 'false');
    menu?.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
  }
  searchBackdrop.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  if (searchInput) {
    searchInput.value = '';
    searchInput.focus();
  }
  showQuickLinks();
}

function closeSearch() {
  if (!searchBackdrop) return;
  searchBackdrop.setAttribute('hidden', '');
  document.body.style.overflow = '';
  selectedIndex = -1;
}

function showQuickLinks() {
  if (quickLinks) quickLinks.hidden = false;
  if (resultsList) {
    resultsList.hidden = true;
    resultsList.innerHTML = '';
  }
  if (noResults) noResults.hidden = true;
  selectedIndex = -1;
}

function renderSearchResults(items, query) {
  if (!resultsList) return;
  if (items.length === 0) {
    if (quickLinks) quickLinks.hidden = true;
    resultsList.hidden = true;
    resultsList.innerHTML = '';
    if (noResults) {
      noResults.hidden = false;
      if (queryEcho) queryEcho.textContent = query;
    }
    selectedIndex = -1;
    return;
  }

  if (quickLinks) quickLinks.hidden = true;
  if (noResults) noResults.hidden = true;
  resultsList.hidden = false;

  resultsList.innerHTML = items.map((item, idx) => `
    <a href="${item.url}" class="search-result-item" data-index="${idx}">
      <div class="search-result-content">
        <span class="search-result-title">${item.title}</span>
        <span class="search-result-desc">${item.desc}</span>
      </div>
      <span class="search-result-badge">${item.category}</span>
    </a>
  `).join('');

  selectedIndex = 0;
  highlightSelected();
}

function highlightSelected() {
  const items = resultsList?.querySelectorAll('.search-result-item');
  if (!items || items.length === 0) return;
  items.forEach((el, idx) => {
    el.classList.toggle('is-selected', idx === selectedIndex);
    if (idx === selectedIndex) {
      el.scrollIntoView({ block: 'nearest' });
    }
  });
}

function filterSearch(rawQuery) {
  const q = rawQuery.trim().toLowerCase();
  if (!q) {
    showQuickLinks();
    return;
  }
  const cleanQ = q.replace(/[\\$,]/g, '');
  const matches = searchIndex.filter(item => {
    const t = item.title.toLowerCase().replace(/[\\$,]/g, '');
    const d = item.desc.toLowerCase().replace(/[\\$,]/g, '');
    const c = item.category.toLowerCase();
    const u = item.url.toLowerCase();
    return t.includes(cleanQ) || d.includes(cleanQ) || c.includes(cleanQ) || u.includes(cleanQ);
  });
  renderSearchResults(matches, rawQuery.trim());
}

if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
if (mobileSearchTrigger) mobileSearchTrigger.addEventListener('click', openSearch);
if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);

if (searchBackdrop) {
  searchBackdrop.addEventListener('click', (e) => {
    if (e.target === searchBackdrop) closeSearch();
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    filterSearch(e.target.value);
  });

  searchInput.addEventListener('keydown', (e) => {
    const items = resultsList?.querySelectorAll('.search-result-item');
    const total = items ? items.length : 0;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (total > 0) {
        selectedIndex = (selectedIndex + 1) % total;
        highlightSelected();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (total > 0) {
        selectedIndex = (selectedIndex - 1 + total) % total;
        highlightSelected();
      }
    } else if (e.key === 'Enter') {
      if (items && total > 0 && selectedIndex >= 0 && selectedIndex < total) {
        e.preventDefault();
        items[selectedIndex].click();
      }
    }
  });
}

document.querySelectorAll('[data-search-tag]').forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.searchTag;
    if (searchInput) {
      searchInput.value = tag;
      filterSearch(tag);
      searchInput.focus();
    }
  });
});

document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (searchBackdrop && !searchBackdrop.hasAttribute('hidden')) {
      closeSearch();
    } else {
      openSearch();
    }
    return;
  }
  if (e.key === '/' && !['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
    e.preventDefault();
    openSearch();
    return;
  }
  if (e.key === 'Escape' && searchBackdrop && !searchBackdrop.hasAttribute('hidden')) {
    e.preventDefault();
    closeSearch();
  }
});

// Article category filter (articles page only)
const articleFiltersEl = document.querySelector('.article-filters');
if (articleFiltersEl) {
  const filterGrid = articleFiltersEl.parentElement?.querySelector('.resource-grid');
  const filterCards = filterGrid ? Array.from(filterGrid.querySelectorAll('.resource-card[data-category]')) : [];
  const filterButtons = Array.from(articleFiltersEl.querySelectorAll('.filter-btn'));
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    filterButtons.forEach(b => {
      const active = b === btn;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    const f = btn.dataset.filter;
    filterCards.forEach(card => {
      card.style.display = (f === 'all' || card.dataset.category === f) ? '' : 'none';
    });
  }));
}

// Tool finder (calculators hub only)
const finderInput = document.querySelector('#tool-finder-input');
if (finderInput) {
  const grid = document.querySelector('.directory-grid');
  const cards = grid ? Array.from(grid.querySelectorAll('.tool-card')) : [];
  const empty = document.querySelector('#tool-finder-empty');
  finderInput.addEventListener('input', () => {
    const q = finderInput.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const match = !q || card.textContent.toLowerCase().includes(q);
      card.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    if (empty) empty.hidden = shown > 0;
  });
}

// Copy buttons for the methodology formula kit
document.querySelectorAll('[data-copy-code]').forEach(btn => btn.addEventListener('click', async () => {
  const code = btn.closest('.formula-kit-block')?.querySelector('code')?.textContent || '';
  try {
    await navigator.clipboard.writeText(code);
    btn.textContent = 'Copied!';
    setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
  } catch {
    btn.textContent = 'Copy failed';
  }
}));

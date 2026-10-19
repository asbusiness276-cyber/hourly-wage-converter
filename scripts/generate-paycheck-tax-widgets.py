import os
from playwright.sync_api import sync_playwright
from PIL import Image

OUTPUT_DIR = r"c:\Users\Hp\Downloads\hourly-wage-converter-vercel\dist\assets\images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE_STYLE = """
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 800px;
    height: 450px;
    overflow: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #0b1328;
    color: #f1f5f9;
    padding: 22px 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-font-smoothing: antialiased;
  }
  .window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 11px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .window-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .dot-red { background: #ef4444; }
  .dot-yellow { background: #f59e0b; }
  .dot-green { background: #10b981; }
  .window-title {
    font-size: 11.5px;
    font-weight: 600;
    color: #94a3b8;
    letter-spacing: 0.02em;
    margin-left: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
  }
  .badge-live {
    font-size: 10px;
    padding: 2px 7px;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.35);
    color: #34d399;
    border-radius: 4px;
    font-weight: 600;
    white-space: nowrap;
  }
  .badge-app {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #38bdf8;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(56, 189, 248, 0.3);
    padding: 3px 9px;
    border-radius: 6px;
    white-space: nowrap;
  }
  .footer-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    font-size: 11px;
    color: #64748b;
  }
  .footer-bar strong {
    color: #cbd5e1;
  }
</style>
"""

def generate_paycheck_widgets():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # =========================================================================
        # WIDGET 1: ui-paystub-pretax-deductions.webp
        # =========================================================================
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_w1 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .dash-body {{
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 6px 0;
  }}
  .top-pay-card {{
    background: linear-gradient(135deg, #101935 0%, #172554 100%);
    border: 1px solid rgba(59, 130, 246, 0.3);
    border-radius: 10px;
    padding: 9px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }}
  .gross-label {{
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    color: #93c5fd;
    letter-spacing: 0.05em;
  }}
  .gross-amount {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 24px;
    font-weight: 800;
    color: #ffffff;
    margin-top: 1px;
  }}
  .gross-meta {{
    font-size: 11px;
    color: #cbd5e1;
    text-align: right;
  }}
  .gross-meta strong {{
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }}
  
  .deduct-table-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    overflow: hidden;
  }}
  table {{
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    text-align: left;
  }}
  thead {{
    background: #152238;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }}
  th {{
    padding: 6px 12px;
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #94a3b8;
  }}
  td {{
    padding: 6px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
  }}
  .tag-benefit {{
    display: inline-block;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 9px;
    font-weight: 700;
  }}
  .tag-sec125 {{ background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }}
  .tag-401k {{ background: rgba(59, 130, 246, 0.15); color: #60a5fa; border: 1px solid rgba(59, 130, 246, 0.3); }}
  .mono {{ font-family: 'JetBrains Mono', monospace; font-size: 11.5px; }}

  .bases-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }}
  .base-box {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 7px 12px;
  }}
  .base-box.fica {{ border-left: 3px solid #f59e0b; }}
  .base-box.fit {{ border-left: 3px solid #3b82f6; }}
  .base-title {{
    font-size: 9.5px;
    font-weight: 700;
    text-transform: uppercase;
    color: #94a3b8;
    display: flex;
    justify-content: space-between;
  }}
  .base-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    font-weight: 800;
    margin-top: 2px;
    color: #ffffff;
  }}
  .base-sub {{
    font-size: 9.5px;
    color: #64748b;
    margin-top: 1px;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Payroll Ledger &bull; Step 1 &amp; 2: Gross Pay &amp; Pre-Tax Deductions</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">Step 1 &amp; 2 Pre-Tax Math</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="top-pay-card">
      <div>
        <div class="gross-label">Step 1: Total Gross Pay (Biweekly)</div>
        <div class="gross-amount">$2,000.00</div>
      </div>
      <div class="gross-meta">
        <div>Hourly Base: <strong>$25.00 / hr</strong></div>
        <div>Regular Hours: <strong>80.00 Hrs</strong> (26 checks/yr)</div>
      </div>
    </div>

    <div class="deduct-table-card">
      <table>
        <thead>
          <tr>
            <th>Pre-Tax Line Item</th>
            <th>IRS Exemption Classification</th>
            <th>Calculation Basis</th>
            <th style="text-align:right;">Deduction Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Health Insurance Premium</strong></td>
            <td><span class="tag-benefit tag-sec125">Section 125 Cafeteria</span></td>
            <td>FIT &amp; FICA Exempt (Pre-Tax)</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$100.00</td>
          </tr>
          <tr>
            <td><strong>Traditional 401(k) Retirement</strong></td>
            <td><span class="tag-benefit tag-401k">Elective Deferral</span></td>
            <td>FIT Exempt Only (Still Subject to FICA)</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$100.00</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.02);">
            <td><strong>Total Pre-Tax Voluntary Deductions</strong></td>
            <td>Subtracted before tax withholding</td>
            <td class="mono">$100.00 + $100.00</td>
            <td class="mono" style="text-align:right; color:#f87171; font-weight:700;">-$200.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bases-grid">
      <div class="base-box fica">
        <div class="base-title">
          <span>FICA Taxable Base</span>
          <span style="color:#f59e0b;">Subject to 7.65%</span>
        </div>
        <div class="base-val">$1,900.00</div>
        <div class="base-sub">Gross ($2,000) minus Sec 125 Medical ($100). 401(k) remains in FICA base.</div>
      </div>

      <div class="base-box fit">
        <div class="base-title">
          <span>Income Taxable Base (FIT)</span>
          <span style="color:#60a5fa;">Subject to Fed/State</span>
        </div>
        <div class="base-val">$1,800.00</div>
        <div class="base-sub">Gross ($2,000) minus all pre-tax deductions ($200 Medical + 401k).</div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Rule: <strong>Section 125 plans reduce FICA &amp; FIT</strong>, while 401(k) only reduces Income Taxes</span>
    <span>Step 1 &amp; 2 Audit Complete &bull; Net Taxable Wages Computed for Withholding</span>
  </div>
</body>
</html>"""
        page.set_content(html_w1)
        temp_png1 = os.path.join(OUTPUT_DIR, "temp_pt_w1.png")
        page.screenshot(path=temp_png1)
        img1 = Image.open(temp_png1)
        img1.save(os.path.join(OUTPUT_DIR, "ui-paystub-pretax-deductions.webp"), "WEBP", quality=92)
        os.remove(temp_png1)
        print("Generated ui-paystub-pretax-deductions.webp")
        page.close()

        # =========================================================================
        # WIDGET 2: ui-card-fica-federal-breakdown.webp
        # =========================================================================
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_w2 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .dash-body {{
    display: flex;
    flex-direction: column;
    gap: 11px;
    margin: 8px 0;
  }}
  .tax-cols-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }}
  .tax-box {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 13px 15px;
  }}
  .tax-box.fica {{
    border-top: 3px solid #f59e0b;
  }}
  .tax-box.fit {{
    border-top: 3px solid #2563eb;
  }}
  .box-hdr {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }}
  .box-title {{
    font-size: 11.5px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ffffff;
    letter-spacing: 0.04em;
  }}
  .box-badge {{
    font-size: 9.5px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
  }}
  .fica .box-badge {{ background: rgba(245, 158, 11, 0.15); color: #fbbf24; }}
  .fit .box-badge {{ background: rgba(37, 99, 235, 0.2); color: #60a5fa; }}
  .tax-rows {{
    list-style: none;
    font-size: 11px;
    color: #94a3b8;
    line-height: 1.6;
  }}
  .tax-rows li {{
    display: flex;
    justify-content: space-between;
    padding: 3px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  }}
  .tax-rows li:last-child {{
    border-bottom: none;
    padding-top: 6px;
    font-weight: 700;
  }}
  .mono {{ font-family: 'JetBrains Mono', monospace; font-size: 11.5px; }}

  /* Progress Waterfall */
  .waterfall-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 11px 15px;
  }}
  .wf-header {{
    display: flex;
    justify-content: space-between;
    font-size: 10.5px;
    font-weight: 600;
    color: #94a3b8;
    margin-bottom: 7px;
  }}
  .wf-bar {{
    display: flex;
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
    gap: 2px;
    background: #1e293b;
  }}
  .wf-takehome {{ width: 76.13%; background: #10b981; }}
  .wf-pretax {{ width: 10.00%; background: #64748b; }}
  .wf-fica {{ width: 7.27%; background: #f59e0b; }}
  .wf-fit {{ width: 6.60%; background: #2563eb; }}

  .stat-tri-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 8px;
  }}
  .stat-tri {{
    background: #090e1d;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    padding: 8px 10px;
  }}
  .stat-tri-lbl {{
    font-size: 9.5px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
  }}
  .stat-tri-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
    font-weight: 700;
    color: #e2e8f0;
    margin-top: 2px;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Withholding Engine &bull; Step 3 &amp; 4: FICA (7.65%) &amp; Federal Income Tax</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">2026 IRS Pub 15-T</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="tax-cols-grid">
      <div class="tax-box fica">
        <div class="box-hdr">
          <span class="box-title">Step 3: FICA Payroll Taxes</span>
          <span class="box-badge">7.65% Statutory</span>
        </div>
        <ul class="tax-rows">
          <li><span>Social Security (6.2% on $1,900):</span> <strong class="mono" style="color:#f87171;">-$117.80</strong></li>
          <li><span>Medicare (1.45% on $1,900):</span> <strong class="mono" style="color:#f87171;">-$27.55</strong></li>
          <li><span style="color:#ffffff;">Total FICA Withholding:</span> <strong class="mono" style="color:#fbbf24; font-size:13px;">-$145.35</strong></li>
        </ul>
      </div>

      <div class="tax-box fit">
        <div class="box-hdr">
          <span class="box-title">Step 4: Federal Income Tax</span>
          <span class="box-badge">Form W-4 Single</span>
        </div>
        <ul class="tax-rows">
          <li><span>Annualized Taxable Wages ($1,800 &times; 26):</span> <strong class="mono" style="color:#cbd5e1;">$46,800.00</strong></li>
          <li><span>Less 2026 Standard Deduction:</span> <strong class="mono" style="color:#94a3b8;">-$16,100.00</strong></li>
          <li><span style="color:#ffffff;">Biweekly FIT ($3,436 &divide; 26):</span> <strong class="mono" style="color:#60a5fa; font-size:13px;">-$132.15</strong></li>
        </ul>
      </div>
    </div>

    <div class="waterfall-card">
      <div class="wf-header">
        <span>BIWEEKLY GROSS PAY DISTRIBUTION ($2,000.00)</span>
        <span>Statutory Taxes: -$277.50 (13.88% of Gross)</span>
      </div>
      <div class="wf-bar">
        <div class="wf-takehome" title="Take-Home Pay: $1,522.50 (76.13%)"></div>
        <div class="wf-pretax" title="Pre-Tax Benefits: $200.00 (10.0%)"></div>
        <div class="wf-fica" title="FICA Taxes: $145.35 (7.27%)"></div>
        <div class="wf-fit" title="Federal Income Tax: $132.15 (6.60%)"></div>
      </div>

      <div class="stat-tri-grid">
        <div class="stat-tri">
          <div class="stat-tri-lbl">Total Pre-Tax Subtracted</div>
          <div class="stat-tri-val" style="color:#cbd5e1;">-$200.00 <span style="font-size:10px; color:#94a3b8;">(10.0%)</span></div>
        </div>
        <div class="stat-tri">
          <div class="stat-tri-lbl">FICA + Federal Taxes</div>
          <div class="stat-tri-val" style="color:#f87171;">-$277.50 <span style="font-size:10px; color:#94a3b8;">(13.88%)</span></div>
        </div>
        <div class="stat-tri">
          <div class="stat-tri-lbl">Remaining Subtotal</div>
          <div class="stat-tri-val" style="color:#34d399;">$1,522.50 <span style="font-size:10px; color:#94a3b8;">(76.13%)</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Effective Federal Income Tax Rate: <strong>6.61%</strong> &bull; FICA Rate: <strong>7.65%</strong></span>
    <span>Step 3 &amp; 4 Complete &bull; Subject only to State Tax in Step 5 before net pay</span>
  </div>
</body>
</html>"""
        page.set_content(html_w2)
        temp_png2 = os.path.join(OUTPUT_DIR, "temp_pt_w2.png")
        page.screenshot(path=temp_png2)
        img2 = Image.open(temp_png2)
        img2.save(os.path.join(OUTPUT_DIR, "ui-card-fica-federal-breakdown.webp"), "WEBP", quality=92)
        os.remove(temp_png2)
        print("Generated ui-card-fica-federal-breakdown.webp")
        page.close()

        # =========================================================================
        # WIDGET 3: ui-widget-final-net-take-home.webp
        # =========================================================================
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_w3 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .dash-body {{
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 8px 0;
  }}
  .deposit-card {{
    background: linear-gradient(135deg, #064e3b 0%, #022c22 100%);
    border: 1px solid rgba(16, 185, 129, 0.4);
    box-shadow: 0 0 24px rgba(16, 185, 129, 0.2);
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }}
  .deposit-left {{
    display: flex;
    align-items: center;
    gap: 16px;
  }}
  .check-icon-circle {{
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #10b981;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 16px rgba(16, 185, 129, 0.5);
    flex-shrink: 0;
  }}
  .check-icon-circle svg {{
    width: 26px;
    height: 26px;
    stroke: #ffffff;
    stroke-width: 3;
    fill: none;
  }}
  .deposit-title {{
    font-size: 11.5px;
    font-weight: 700;
    text-transform: uppercase;
    color: #6ee7b7;
    letter-spacing: 0.05em;
  }}
  .deposit-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 32px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.1;
  }}
  .deposit-sub {{
    font-size: 11px;
    color: #a7f3d0;
  }}
  .deposit-right {{
    text-align: right;
  }}
  .dep-badge {{
    display: inline-block;
    padding: 4px 10px;
    border-radius: 6px;
    background: rgba(16, 185, 129, 0.25);
    border: 1px solid rgba(52, 211, 153, 0.4);
    color: #34d399;
    font-size: 11px;
    font-weight: 700;
  }}
  .dep-alt {{
    font-size: 11px;
    color: #94a3b8;
    margin-top: 6px;
  }}
  .dep-alt strong {{
    color: #ffffff;
    font-family: 'JetBrains Mono', monospace;
  }}

  /* Mini Statement Ledger */
  .ledger-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 12px 16px;
  }}
  .ledger-title {{
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
  }}
  .ledger-grid {{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }}
  .ledger-item {{
    background: #090e1d;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    padding: 8px 10px;
  }}
  .ledger-lbl {{
    font-size: 9.5px;
    color: #64748b;
    font-weight: 600;
  }}
  .ledger-amt {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13.5px;
    font-weight: 700;
    margin-top: 2px;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Apex Mobile Banking &bull; Paycheck Direct Deposit Confirmed</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">ACH Direct Deposit</span>
      <span class="badge-app">Checking &bull;&bull;&bull;&bull; 4821</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="deposit-card">
      <div class="deposit-left">
        <div class="check-icon-circle">
          <svg viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <div>
          <div class="deposit-title">Net Take-Home Paycheck Deposited</div>
          <div class="deposit-val">+$1,522.50</div>
          <div class="deposit-sub">Payroll Direct Deposit &bull; 80 Hours @ $25.00/Hour</div>
        </div>
      </div>
      <div class="deposit-right">
        <div class="dep-badge">76.13% of Gross Retained</div>
        <div class="dep-alt">With 4% State Tax: <strong>+$1,446.50</strong></div>
      </div>
    </div>

    <div class="ledger-card">
      <div class="ledger-title">
        <span>Complete Gross-to-Net Paycheck Audit Trail ($2,000.00 Gross)</span>
        <span style="color:#34d399;">100% Reconciled</span>
      </div>
      <div class="ledger-grid">
        <div class="ledger-item">
          <div class="ledger-lbl">Gross Pay (80 Hrs)</div>
          <div class="ledger-amt" style="color:#60a5fa;">+$2,000.00</div>
        </div>
        <div class="ledger-item">
          <div class="ledger-lbl">Pre-Tax (Health + 401k)</div>
          <div class="ledger-amt" style="color:#f87171;">-$200.00</div>
        </div>
        <div class="ledger-item">
          <div class="ledger-lbl">FICA Taxes (SS + Med)</div>
          <div class="ledger-amt" style="color:#f87171;">-$145.35</div>
        </div>
        <div class="ledger-item">
          <div class="ledger-lbl">Federal Income Tax</div>
          <div class="ledger-amt" style="color:#f87171;">-$132.15</div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>State Withholding: <strong>$0.00 (TX/FL)</strong> or <strong>-$76.00 (4% Flat State Tax)</strong></span>
    <span>Step 5 Audit Finalized &bull; Final Funds Available in Checking Account</span>
  </div>
</body>
</html>"""
        page.set_content(html_w3)
        temp_png3 = os.path.join(OUTPUT_DIR, "temp_pt_w3.png")
        page.screenshot(path=temp_png3)
        img3 = Image.open(temp_png3)
        img3.save(os.path.join(OUTPUT_DIR, "ui-widget-final-net-take-home.webp"), "WEBP", quality=92)
        os.remove(temp_png3)
        print("Generated ui-widget-final-net-take-home.webp")
        page.close()

        browser.close()

if __name__ == "__main__":
    generate_paycheck_widgets()

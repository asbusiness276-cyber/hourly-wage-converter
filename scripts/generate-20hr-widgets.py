import os
from playwright.sync_api import sync_playwright
from PIL import Image

OUTPUT_DIR = r"c:\Users\Hp\Downloads\hourly-wage-converter-vercel\dist\assets\images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE_STYLE = """
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 800px;
    height: 450px;
    overflow: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #090d16;
    color: #f1f5f9;
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-font-smoothing: antialiased;
  }
  .window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .window-controls {
    display: flex;
    align-items: center;
    gap: 8px;
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
  }
  .badge-live {
    font-size: 10px;
    padding: 2px 7px;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: #34d399;
    border-radius: 4px;
    font-weight: 600;
  }
  .badge-app {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    color: #38bdf8;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(56, 189, 248, 0.25);
    padding: 3px 9px;
    border-radius: 6px;
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

def generate_20hr_widgets():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # =========================================================================
        # WIDGET 1: ui-card-20hr-annual-breakdown.webp
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
    gap: 11px;
    margin: 8px 0;
  }}
  .top-stats-row {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }}
  .stat-card {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 13px 16px;
  }}
  .stat-card.primary {{
    border-left: 3px solid #3b82f6;
  }}
  .stat-card.success {{
    border-left: 3px solid #10b981;
    background: linear-gradient(135deg, #111827 0%, rgba(6, 78, 59, 0.25) 100%);
  }}
  .stat-label {{
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #94a3b8;
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
  }}
  .stat-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 26px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1.1;
  }}
  .stat-card.success .stat-val {{
    color: #10b981;
  }}
  .stat-sub {{
    font-size: 11.5px;
    color: #64748b;
    margin-top: 4px;
  }}
  
  .bar-section {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 11px 16px;
  }}
  .bar-header {{
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 600;
    color: #94a3b8;
    margin-bottom: 7px;
  }}
  .seg-bar {{
    display: flex;
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
    gap: 2px;
    background: #1e293b;
  }}
  .seg-net {{ width: 85.59%; background: #10b981; }}
  .seg-fit {{ width: 6.76%; background: #3b82f6; }}
  .seg-fica {{ width: 7.65%; background: #f59e0b; }}

  .pills-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 9px;
  }}
  .pill-box {{
    background: #0d1322;
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 8px;
    padding: 8px 10px;
  }}
  .pill-title {{
    font-size: 10px;
    font-weight: 600;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 5px;
  }}
  .pill-title .sq {{
    width: 6px;
    height: 6px;
    border-radius: 2px;
  }}
  .pill-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 700;
    color: #e2e8f0;
    margin-top: 3px;
  }}
  .pill-sub {{
    font-size: 9.5px;
    color: #94a3b8;
  }}
  .alt-states {{
    background: rgba(255, 255, 255, 0.02);
    border: 1px dashed rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 7px 12px;
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #94a3b8;
  }}
  .alt-states strong {{ color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Compensation Engine &bull; Annual Gross-to-Net Analytics ($20.00/Hour)</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">2026 IRS Rules</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="top-stats-row">
      <div class="stat-card primary">
        <div class="stat-label">
          <span>Gross Annual Salary (Base)</span>
          <span style="color:#60a5fa;">$20.00 &times; 2,080 hrs</span>
        </div>
        <div class="stat-val">$41,600.00</div>
        <div class="stat-sub">$3,466.67 / month &bull; $1,600.00 biweekly &bull; $800.00 / week</div>
      </div>

      <div class="stat-card success">
        <div class="stat-label">
          <span>Estimated Net Pay (No State Tax)</span>
          <span style="color:#34d399;">85.59% Retained</span>
        </div>
        <div class="stat-val">~$35,605.60</div>
        <div class="stat-sub">~$2,967.13 / month &bull; ~$1,369.45 biweekly &bull; ~$684.72 / week</div>
      </div>
    </div>

    <div class="bar-section">
      <div class="bar-header">
        <span>2026 Statutory Deduction Split (Single Filer &bull; $16,100 Standard Deduction)</span>
        <span style="color:#34d399; font-weight:700;">85.59% Net Pay Kept</span>
      </div>
      <div class="seg-bar">
        <div class="seg-net" title="Net Pay: 85.59%"></div>
        <div class="seg-fit" title="Federal Income Tax: 6.76%"></div>
        <div class="seg-fica" title="FICA Payroll Taxes: 7.65%"></div>
      </div>

      <div class="pills-grid">
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#10b981;"></span>Net Take-Home</div>
          <div class="pill-val" style="color:#10b981;">$35,605.60</div>
          <div class="pill-sub">85.59% of gross &bull; ~$2,967/mo</div>
        </div>
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#3b82f6;"></span>Federal Tax (FIT)</div>
          <div class="pill-val" style="color:#60a5fa;">-$2,812.00</div>
          <div class="pill-sub">6.76% effective &bull; $25,500 taxable</div>
        </div>
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#f59e0b;"></span>FICA Taxes (SS + Med)</div>
          <div class="pill-val" style="color:#fbbf24;">-$3,182.40</div>
          <div class="pill-sub">7.65% mandatory flat rate</div>
        </div>
      </div>
    </div>

    <div class="alt-states">
      <span>Mod. State Tax (~4.5%): <strong>~$33,733/yr</strong> (~$2,811/mo)</span>
      <span>High State Tax (~6.0%): <strong>~$33,107/yr</strong> (~$2,759/mo)</span>
    </div>
  </div>

  <div class="footer-bar">
    <span>Single Filer &bull; <strong>2026 IRS Standard Deduction ($16,100)</strong> &bull; Zero State Tax Baseline</span>
    <span>Source: <strong>hourlywageconverter.com</strong> Tax & Wage Engine</span>
  </div>
</body>
</html>"""
        page.set_content(html_w1)
        temp_png1 = os.path.join(OUTPUT_DIR, "temp_w1.png")
        page.screenshot(path=temp_png1)
        img1 = Image.open(temp_png1)
        img1.save(os.path.join(OUTPUT_DIR, "ui-card-20hr-annual-breakdown.webp"), "WEBP", quality=92)
        os.remove(temp_png1)
        print("Generated ui-card-20hr-annual-breakdown.webp")
        page.close()

        # =========================================================================
        # WIDGET 2: ui-table-20hr-paycheck-taxes.webp
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
  .table-card {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    overflow: hidden;
  }}
  table {{
    width: 100%;
    border-collapse: collapse;
    font-size: 11.5px;
    text-align: left;
  }}
  th {{
    background: #0f172a;
    color: #94a3b8;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.05em;
    padding: 8px 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }}
  td {{
    padding: 8px 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
  }}
  .mono {{
    font-family: 'JetBrains Mono', monospace;
  }}
  .gross-row td {{
    background: rgba(59, 130, 246, 0.05);
    font-weight: 600;
  }}
  .net-row td {{
    background: rgba(16, 185, 129, 0.08);
    border-bottom: none;
    font-weight: 700;
  }}
  .tag-earn {{
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 9.5px;
    font-weight: 700;
  }}
  .tag-deduct {{
    background: rgba(239, 68, 68, 0.15);
    color: #f87171;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 9.5px;
    font-weight: 700;
  }}
  .summary-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }}
  .summary-box {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 9px 12px;
  }}
  .sum-label {{
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    color: #64748b;
  }}
  .sum-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 15.5px;
    font-weight: 700;
    margin-top: 2px;
    color: #ffffff;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Payroll Ledger &bull; Weekly Pay Statement Audit ($20.00/Hour)</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">IRS Form W-4 Single</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>Line Item / Description</th>
            <th>Type</th>
            <th>Tax Base</th>
            <th>Statutory Rate</th>
            <th style="text-align:right;">Weekly Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr class="gross-row">
            <td><strong>Regular Earnings (40.00 Hours)</strong></td>
            <td><span class="tag-earn">Earnings</span></td>
            <td class="mono">$20.00 &times; 40 hrs</td>
            <td>Straight Time</td>
            <td class="mono" style="text-align:right; color:#60a5fa;">+$800.00</td>
          </tr>
          <tr>
            <td>Social Security (FICA OASDI)</td>
            <td><span class="tag-deduct">Mandatory</span></td>
            <td class="mono">$800.00 gross</td>
            <td>6.20%</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$49.60</td>
          </tr>
          <tr>
            <td>Medicare (FICA Hospital Ins)</td>
            <td><span class="tag-deduct">Mandatory</span></td>
            <td class="mono">$800.00 gross</td>
            <td>1.45%</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$11.60</td>
          </tr>
          <tr>
            <td>Federal Income Tax (FIT Withholding)</td>
            <td><span class="tag-deduct">Statutory</span></td>
            <td class="mono">Annualized $41,600</td>
            <td>6.76% Effective</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$54.08</td>
          </tr>
          <tr class="net-row">
            <td><strong>Net Weekly Take-Home Pay</strong></td>
            <td><span style="color:#10b981; font-size:10.5px; font-weight:700;">Direct Deposit</span></td>
            <td class="mono">No State Income Tax</td>
            <td><strong>85.59% Net</strong></td>
            <td class="mono" style="text-align:right; font-size:14.5px; color:#10b981;"><strong>~$684.72</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="summary-grid">
      <div class="summary-box">
        <div class="sum-label">Total Weekly Deductions</div>
        <div class="sum-val" style="color:#f87171;">-$115.28 <span style="font-size:11px; color:#94a3b8;">/ wk</span></div>
      </div>
      <div class="summary-box">
        <div class="sum-label">Biweekly Paycheck (80 Hours)</div>
        <div class="sum-val" style="color:#34d399;">~$1,369.45 <span style="font-size:11px; color:#94a3b8;">net</span></div>
      </div>
      <div class="summary-box">
        <div class="sum-label">Average Monthly Take-Home</div>
        <div class="sum-val" style="color:#38bdf8;">~$2,967.13 <span style="font-size:11px; color:#94a3b8;">(4.33 wks)</span></div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span><strong>2026 IRS Pub 15-T</strong> Percentage Method Tables</span>
    <span>Mandatory Taxes: <strong>14.41%</strong> before pre-tax benefits</span>
  </div>
</body>
</html>"""
        page.set_content(html_w2)
        temp_png2 = os.path.join(OUTPUT_DIR, "temp_w2.png")
        page.screenshot(path=temp_png2)
        img2 = Image.open(temp_png2)
        img2.save(os.path.join(OUTPUT_DIR, "ui-table-20hr-paycheck-taxes.webp"), "WEBP", quality=92)
        os.remove(temp_png2)
        print("Generated ui-table-20hr-paycheck-taxes.webp")
        page.close()

        # =========================================================================
        # WIDGET 3: ui-widget-50-30-20-budget-20hr.webp
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
    gap: 11px;
    margin: 8px 0;
  }}
  .budget-bar-wrap {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 10px 14px;
  }}
  .budget-bar-labels {{
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #94a3b8;
    margin-bottom: 6px;
    font-weight: 600;
  }}
  .budget-seg-bar {{
    display: flex;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
    gap: 2px;
    background: #1e293b;
  }}
  .b-seg-needs {{ width: 50%; background: #3b82f6; }}
  .b-seg-wants {{ width: 30%; background: #f59e0b; }}
  .b-seg-savings {{ width: 20%; background: #10b981; }}

  .col-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }}
  .budget-col {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 13px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .budget-col.needs {{ border-top: 3px solid #3b82f6; }}
  .budget-col.wants {{ border-top: 3px solid #f59e0b; }}
  .budget-col.savings {{ border-top: 3px solid #10b981; }}
  .col-hdr {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }}
  .col-title {{
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
  }}
  .col-badge {{
    font-size: 9.5px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 4px;
    text-transform: uppercase;
  }}
  .needs .col-badge {{ background: rgba(59, 130, 246, 0.15); color: #60a5fa; }}
  .wants .col-badge {{ background: rgba(245, 158, 11, 0.15); color: #fbbf24; }}
  .savings .col-badge {{ background: rgba(16, 185, 129, 0.15); color: #34d399; }}
  .col-amt {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 7px;
    color: #ffffff;
  }}
  .item-list {{
    list-style: none;
    font-size: 10.5px;
    color: #94a3b8;
    line-height: 1.55;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    padding-top: 6px;
  }}
  .item-list li {{
    display: flex;
    justify-content: space-between;
    padding: 2px 0;
  }}
  .item-list li strong {{
    color: #e2e8f0;
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Cash Flow Planner &bull; 50 / 30 / 20 Budget Allocation Model</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">Monthly Net: ~$2,967</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="budget-bar-wrap">
      <div class="budget-bar-labels">
        <span>50% Needs: ~$1,484/mo</span>
        <span>30% Wants: ~$890/mo</span>
        <span>20% Savings: ~$593/mo</span>
      </div>
      <div class="budget-seg-bar">
        <div class="b-seg-needs"></div>
        <div class="b-seg-wants"></div>
        <div class="b-seg-savings"></div>
      </div>
    </div>

    <div class="col-grid">
      <div class="budget-col needs">
        <div>
          <div class="col-hdr">
            <span class="col-title">50% Needs</span>
            <span class="col-badge">Essential</span>
          </div>
          <div class="col-amt">~$1,484 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Rent / Shared Housing:</span> <strong>$1,040</strong></li>
          <li><span>Groceries &amp; Supplies:</span> <strong>$264</strong></li>
          <li><span>Utilities &amp; Mobile:</span> <strong>$100</strong></li>
          <li><span>Transit / Fuel &amp; Ins:</span> <strong>$80</strong></li>
        </ul>
      </div>

      <div class="budget-col wants">
        <div>
          <div class="col-hdr">
            <span class="col-title">30% Wants</span>
            <span class="col-badge">Lifestyle</span>
          </div>
          <div class="col-amt">~$890 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Dining Out &amp; Coffee:</span> <strong>$280</strong></li>
          <li><span>Subscriptions &amp; Tech:</span> <strong>$80</strong></li>
          <li><span>Personal Care &amp; Shopping:</span> <strong>$180</strong></li>
          <li><span>Hobbies &amp; Social Buffer:</span> <strong>$350</strong></li>
        </ul>
      </div>

      <div class="budget-col savings">
        <div>
          <div class="col-hdr">
            <span class="col-title">20% Savings</span>
            <span class="col-badge">Wealth</span>
          </div>
          <div class="col-amt">~$593 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Emergency Fund (HYSA):</span> <strong>$275</strong></li>
          <li><span>Roth IRA / Retirement:</span> <strong>$200</strong></li>
          <li><span>Sinking Funds / Debt:</span> <strong>$118</strong></li>
          <li><span>Annual Wealth Growth:</span> <strong style="color:#34d399;">+$7,120/yr</strong></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Housing Target: <strong>&le; $1,040/mo</strong> (30% Gross Rule on $41,600)</span>
    <span>Full-Time $20.00/Hour Net: <strong>~$2,811 &ndash; $2,967/mo</strong></span>
  </div>
</body>
</html>"""
        page.set_content(html_w3)
        temp_png3 = os.path.join(OUTPUT_DIR, "temp_w3.png")
        page.screenshot(path=temp_png3)
        img3 = Image.open(temp_png3)
        img3.save(os.path.join(OUTPUT_DIR, "ui-widget-50-30-20-budget-20hr.webp"), "WEBP", quality=92)
        os.remove(temp_png3)
        print("Generated ui-widget-50-30-20-budget-20hr.webp")
        page.close()

        browser.close()

if __name__ == "__main__":
    generate_20hr_widgets()

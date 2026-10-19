import os
from playwright.sync_api import sync_playwright
from PIL import Image

OUTPUT_DIR = r"c:\Users\Hp\Downloads\hourly-wage-converter-vercel\dist\assets\images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Common styling matching clean fintech dashboard system
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
    padding-bottom: 12px;
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

def generate_ui_widgets():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # =========================================================================
        # WIDGET 1: ui-card-23hr-annual-breakdown.webp
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
    gap: 12px;
    margin: 10px 0;
  }}
  .top-stats-row {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }}
  .stat-card {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 14px 16px;
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
  
  /* Progress Segmented Bar */
  .bar-section {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 12px 16px;
  }}
  .bar-header {{
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 600;
    color: #94a3b8;
    margin-bottom: 8px;
  }}
  .seg-bar {{
    display: flex;
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
    gap: 2px;
    background: #1e293b;
  }}
  .seg-net {{ width: 84.9%; background: #10b981; }}
  .seg-fit {{ width: 7.45%; background: #3b82f6; }}
  .seg-fica {{ width: 7.65%; background: #f59e0b; }}

  /* Metric Pill Grid */
  .pills-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 10px;
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
      <span class="window-title">Compensation Engine &bull; Annual Gross-to-Net Analytics</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">2026 IRS Rules</span>
      <span class="badge-app">HourlyWageConverter</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="top-stats-row">
      <div class="stat-card primary">
        <div class="stat-label">
          <span>Gross Annual Salary (Base)</span>
          <span style="color:#60a5fa;">$23.00 &times; 2,080 hrs</span>
        </div>
        <div class="stat-val">$47,840.00</div>
        <div class="stat-sub">$3,986.67 / month &bull; $1,840.00 biweekly &bull; $920.00 / week</div>
      </div>

      <div class="stat-card success">
        <div class="stat-label">
          <span>Estimated Net Take-Home (0% State Tax)</span>
          <span style="color:#34d399;">84.91% Retained</span>
        </div>
        <div class="stat-val">~$40,619.44</div>
        <div class="stat-sub">~$3,384.95 / month &bull; ~$1,562.28 biweekly &bull; ~$781.14 / week</div>
      </div>
    </div>

    <div class="bar-section">
      <div class="bar-header">
        <span>ANNUAL DEDUCTION WATERFALL ($47,840 GROSS)</span>
        <span>Total Tax Withholdings: -$7,220.56 (15.09%)</span>
      </div>
      <div class="seg-bar">
        <div class="seg-net" title="Net Pay: 84.9%"></div>
        <div class="seg-fit" title="Federal Income Tax: 7.44%"></div>
        <div class="seg-fica" title="FICA Payroll Taxes: 7.65%"></div>
      </div>

      <div class="pills-grid">
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#10b981;"></span> Net Take-Home Pay</div>
          <div class="pill-val">$40,619.44</div>
          <div class="pill-sub">84.91% of Gross Earnings</div>
        </div>
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#3b82f6;"></span> Federal Income Tax</div>
          <div class="pill-val">$3,560.80</div>
          <div class="pill-sub">7.44% Effective Rate (10%/12%)</div>
        </div>
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#f59e0b;"></span> FICA Payroll Taxes</div>
          <div class="pill-val">$3,659.76</div>
          <div class="pill-sub">6.2% SS ($2,966) + 1.45% Med ($694)</div>
        </div>
      </div>
    </div>

    <div class="alt-states">
      <span>State Income Tax Adjustments:</span>
      <span>No State Tax: <strong>~$40,619/yr</strong></span>
      <span>Mod. State (~4.5%): <strong>~$38,466/yr</strong></span>
      <span>Higher State (~6%): <strong>~$37,749/yr</strong></span>
    </div>
  </div>

  <div class="footer-bar">
    <span>Filing Status: <strong>Single Filer</strong> &bull; Standard Deduction: <strong>$16,100</strong> (2026 Tax Year)</span>
    <span>Source: <strong>hourlywageconverter.com</strong> Client-Side Compensation Engine</span>
  </div>
</body>
</html>"""
        page.set_content(html_w1)
        temp_png1 = os.path.join(OUTPUT_DIR, "temp_w1.png")
        page.screenshot(path=temp_png1)
        img1 = Image.open(temp_png1)
        img1.save(os.path.join(OUTPUT_DIR, "ui-card-23hr-annual-breakdown.webp"), "WEBP", quality=92)
        os.remove(temp_png1)
        print("Generated ui-card-23hr-annual-breakdown.webp")
        page.close()

        # =========================================================================
        # WIDGET 2: ui-table-23hr-paycheck-taxes.webp
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
    gap: 12px;
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
    font-size: 12px;
    text-align: left;
  }}
  thead {{
    background: #162033;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }}
  th {{
    padding: 9px 14px;
    font-size: 10.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #94a3b8;
  }}
  td {{
    padding: 10px 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
  }}
  tr.gross-row td {{
    font-weight: 600;
    color: #ffffff;
    background: rgba(59, 130, 246, 0.04);
  }}
  tr.net-row td {{
    font-weight: 700;
    color: #10b981;
    background: rgba(16, 185, 129, 0.08);
    border-bottom: none;
    font-size: 13px;
  }}
  .mono {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12.5px;
  }}
  .tag-deduct {{
    display: inline-block;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    background: rgba(239, 68, 68, 0.15);
    color: #f87171;
    border: 1px solid rgba(239, 68, 68, 0.25);
  }}
  .tag-earn {{
    display: inline-block;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: 600;
    background: rgba(59, 130, 246, 0.15);
    color: #60a5fa;
    border: 1px solid rgba(59, 130, 246, 0.25);
  }}
  .summary-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }}
  .summary-box {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 10px 14px;
  }}
  .sum-label {{
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    color: #64748b;
  }}
  .sum-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 16px;
    font-weight: 700;
    margin-top: 3px;
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
      <span class="window-title">Payroll Ledger &bull; Weekly Pay Statement Audit ($23.00/Hour)</span>
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
            <td class="mono">$23.00 &times; 40 hrs</td>
            <td>Straight Time</td>
            <td class="mono" style="text-align:right; color:#60a5fa;">+$920.00</td>
          </tr>
          <tr>
            <td>Social Security (FICA OASDI)</td>
            <td><span class="tag-deduct">Mandatory</span></td>
            <td class="mono">$920.00 gross</td>
            <td>6.20%</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$57.04</td>
          </tr>
          <tr>
            <td>Medicare (FICA Hospital Ins)</td>
            <td><span class="tag-deduct">Mandatory</span></td>
            <td class="mono">$920.00 gross</td>
            <td>1.45%</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$13.34</td>
          </tr>
          <tr>
            <td>Federal Income Tax (FIT Withholding)</td>
            <td><span class="tag-deduct">Statutory</span></td>
            <td class="mono">Annualized $47,840</td>
            <td>7.44% Effective</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$68.48</td>
          </tr>
          <tr class="net-row">
            <td><strong>Net Weekly Take-Home Pay</strong></td>
            <td><span style="color:#10b981; font-size:11px; font-weight:700;">Direct Deposit</span></td>
            <td class="mono">No State Income Tax</td>
            <td><strong>84.91% Net</strong></td>
            <td class="mono" style="text-align:right; font-size:15px; color:#10b981;"><strong>~$781.14</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="summary-grid">
      <div class="summary-box">
        <div class="sum-label">Total Weekly Deductions</div>
        <div class="sum-val" style="color:#f87171;">-$138.86 <span style="font-size:11px; color:#94a3b8;">/ wk</span></div>
      </div>
      <div class="summary-box">
        <div class="sum-label">Biweekly Paycheck (80 Hours)</div>
        <div class="sum-val" style="color:#34d399;">~$1,562.28 <span style="font-size:11px; color:#94a3b8;">net</span></div>
      </div>
      <div class="summary-box">
        <div class="sum-label">Average Monthly Take-Home</div>
        <div class="sum-val" style="color:#38bdf8;">~$3,384.95 <span style="font-size:11px; color:#94a3b8;">(4.33 wks)</span></div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Calculated under <strong>2026 IRS Percentage Method Tables (Pub 15-T)</strong></span>
    <span>Mandatory withholdings total <strong>15.09%</strong> before optional 401(k) or medical deductions</span>
  </div>
</body>
</html>"""
        page.set_content(html_w2)
        temp_png2 = os.path.join(OUTPUT_DIR, "temp_w2.png")
        page.screenshot(path=temp_png2)
        img2 = Image.open(temp_png2)
        img2.save(os.path.join(OUTPUT_DIR, "ui-table-23hr-paycheck-taxes.webp"), "WEBP", quality=92)
        os.remove(temp_png2)
        print("Generated ui-table-23hr-paycheck-taxes.webp")
        page.close()

        # =========================================================================
        # WIDGET 3: ui-widget-50-30-20-budget.webp
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
    padding: 14px;
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
    margin-bottom: 8px;
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
      <span class="badge-live">Monthly Net: ~$3,300</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="budget-bar-wrap">
      <div class="budget-bar-labels">
        <span>50% Needs: ~$1,650/mo</span>
        <span>30% Wants: ~$990/mo</span>
        <span>20% Savings: ~$660/mo</span>
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
          <div class="col-amt">~$1,650 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Rent / Shared Housing:</span> <strong>$1,050</strong></li>
          <li><span>Groceries &amp; Supplies:</span> <strong>$310</strong></li>
          <li><span>Utilities &amp; Mobile:</span> <strong>$190</strong></li>
          <li><span>Auto Gas &amp; Insurance:</span> <strong>$200</strong></li>
        </ul>
      </div>

      <div class="budget-col wants">
        <div>
          <div class="col-hdr">
            <span class="col-title">30% Wants</span>
            <span class="col-badge">Lifestyle</span>
          </div>
          <div class="col-amt">~$990 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Dining Out &amp; Coffee:</span> <strong>$260</strong></li>
          <li><span>Subscriptions &amp; Apps:</span> <strong>$90</strong></li>
          <li><span>Personal Care &amp; Style:</span> <strong>$110</strong></li>
          <li><span>Hobbies &amp; Travel Fund:</span> <strong>$530</strong></li>
        </ul>
      </div>

      <div class="budget-col savings">
        <div>
          <div class="col-hdr">
            <span class="col-title">20% Savings</span>
            <span class="col-badge">Wealth</span>
          </div>
          <div class="col-amt">~$660 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Emergency Fund (HYSA):</span> <strong>$280</strong></li>
          <li><span>Roth IRA / 401(k):</span> <strong>$260</strong></li>
          <li><span>Extra Debt Payoff:</span> <strong>$120</strong></li>
          <li><span>Annual Wealth Growth:</span> <strong style="color:#34d399;">+$7,920/yr</strong></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Housing Target: <strong>Keep Rent Under $1,100/mo</strong> (30% Gross Rule on $47,840)</span>
    <span>Based on full-time $23.00/hour take-home salary (~$3,205 to $3,385/mo)</span>
  </div>
</body>
</html>"""
        page.set_content(html_w3)
        temp_png3 = os.path.join(OUTPUT_DIR, "temp_w3.png")
        page.screenshot(path=temp_png3)
        img3 = Image.open(temp_png3)
        img3.save(os.path.join(OUTPUT_DIR, "ui-widget-50-30-20-budget.webp"), "WEBP", quality=92)
        os.remove(temp_png3)
        print("Generated ui-widget-50-30-20-budget.webp")
        page.close()

        browser.close()

if __name__ == "__main__":
    generate_ui_widgets()

import os
from playwright.sync_api import sync_playwright
from PIL import Image

OUTPUT_DIR = r"c:\Users\Hp\Downloads\hourly-wage-converter-vercel\dist\assets\images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Common styling matching the executive desktop fintech system
BASE_STYLE = """
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 800px;
    height: 450px;
    overflow: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #090e1d;
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

def generate_45hr_widgets():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # =========================================================================
        # WIDGET 1: ui-card-45hr-annual-breakdown.webp
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
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 14px 16px;
  }}
  .stat-card.primary {{
    border-left: 3px solid #2563eb;
    background: linear-gradient(135deg, #0f172a 0%, rgba(37, 99, 235, 0.12) 100%);
  }}
  .stat-card.success {{
    border-left: 3px solid #10b981;
    background: linear-gradient(135deg, #0f172a 0%, rgba(16, 185, 129, 0.15) 100%);
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
    color: #34d399;
    text-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
  }}
  .stat-sub {{
    font-size: 11.5px;
    color: #64748b;
    margin-top: 4px;
  }}
  
  /* Progress Segmented Bar */
  .bar-section {{
    background: #0f172a;
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
  .seg-net {{ width: 79.78%; background: #10b981; }}
  .seg-fit {{ width: 12.57%; background: #2563eb; }}
  .seg-fica {{ width: 7.65%; background: #f59e0b; }}

  /* Metric Pill Grid */
  .pills-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 10px;
  }}
  .pill-box {{
    background: #090e1d;
    border: 1px solid rgba(255, 255, 255, 0.07);
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
    font-size: 13.5px;
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
      <span class="window-title">Compensation Engine &bull; Upper-Middle-Class Analytics ($45.00/Hour)</span>
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
          <span style="color:#60a5fa;">$45.00 &times; 2,080 hrs</span>
        </div>
        <div class="stat-val">$93,600.00</div>
        <div class="stat-sub">$7,800.00 / month &bull; $3,600.00 biweekly &bull; $1,800.00 / week</div>
      </div>

      <div class="stat-card success">
        <div class="stat-label">
          <span>Estimated Net Take-Home (0% State Tax)</span>
          <span style="color:#34d399;">79.78% Retained</span>
        </div>
        <div class="stat-val">~$74,677.60</div>
        <div class="stat-sub">~$6,223.13 / month &bull; ~$2,872.22 biweekly &bull; ~$1,436.11 / week</div>
      </div>
    </div>

    <div class="bar-section">
      <div class="bar-header">
        <span>ANNUAL DEDUCTION WATERFALL ($93,600 GROSS)</span>
        <span>Total Tax Withholdings: -$18,922.40 (20.22%)</span>
      </div>
      <div class="seg-bar">
        <div class="seg-net" title="Net Pay: 79.78%"></div>
        <div class="seg-fit" title="Federal Income Tax: 12.57%"></div>
        <div class="seg-fica" title="FICA Payroll Taxes: 7.65%"></div>
      </div>

      <div class="pills-grid">
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#10b981;"></span> Net Take-Home Pay</div>
          <div class="pill-val">$74,677.60</div>
          <div class="pill-sub">79.78% of Gross Earnings</div>
        </div>
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#2563eb;"></span> Federal Income Tax</div>
          <div class="pill-val">$11,762.00</div>
          <div class="pill-sub">12.57% Effective (Top Bracket: 22%)</div>
        </div>
        <div class="pill-box">
          <div class="pill-title"><span class="sq" style="background:#f59e0b;"></span> FICA Payroll Taxes</div>
          <div class="pill-val">$7,160.40</div>
          <div class="pill-sub">6.2% SS ($5,803) + 1.45% Med ($1,357)</div>
        </div>
      </div>
    </div>

    <div class="alt-states">
      <span>State Income Tax Adjustments:</span>
      <span>No State Tax: <strong>~$74,678/yr</strong></span>
      <span>Mod. State (~4.5%): <strong>~$70,465/yr</strong></span>
      <span>Higher State (~6.5%): <strong>~$68,593/yr</strong></span>
    </div>
  </div>

  <div class="footer-bar">
    <span>Filing Status: <strong>Single Filer</strong> &bull; Standard Deduction: <strong>$16,100</strong> (2026 Tax Year)</span>
    <span>Source: <strong>hourlywageconverter.com</strong> Client-Side Compensation Engine</span>
  </div>
</body>
</html>"""
        page.set_content(html_w1)
        temp_png1 = os.path.join(OUTPUT_DIR, "temp_45_w1.png")
        page.screenshot(path=temp_png1)
        img1 = Image.open(temp_png1)
        img1.save(os.path.join(OUTPUT_DIR, "ui-card-45hr-annual-breakdown.webp"), "WEBP", quality=92)
        os.remove(temp_png1)
        print("Generated ui-card-45hr-annual-breakdown.webp")
        page.close()

        # =========================================================================
        # WIDGET 2: ui-table-45hr-tax-brackets.webp
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
    gap: 10px;
    margin: 8px 0;
  }}
  .table-card {{
    background: #0f172a;
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
  thead {{
    background: #141e33;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }}
  th {{
    padding: 8px 12px;
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: #94a3b8;
  }}
  td {{
    padding: 7px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
  }}
  tr.bracket-highlight {{
    background: rgba(37, 99, 235, 0.09);
  }}
  tr.bracket-highlight td {{
    color: #ffffff;
    font-weight: 600;
  }}
  tr.net-row td {{
    font-weight: 700;
    color: #34d399;
    background: rgba(16, 185, 129, 0.1);
    border-bottom: none;
    font-size: 12.5px;
  }}
  .mono {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
  }}
  .tag-bracket {{
    display: inline-block;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 9.5px;
    font-weight: 700;
  }}
  .tag-10 {{ background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }}
  .tag-12 {{ background: rgba(96, 165, 250, 0.15); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.3); }}
  .tag-22 {{ background: rgba(37, 99, 235, 0.25); color: #93c5fd; border: 1px solid rgba(59, 130, 246, 0.4); }}
  .tag-fica {{ background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); }}
  .nowrap {{ white-space: nowrap; }}
  .summary-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }}
  .summary-box {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 8px 12px;
  }}
  .sum-label {{
    font-size: 9.5px;
    font-weight: 600;
    text-transform: uppercase;
    color: #64748b;
  }}
  .sum-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 15px;
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
      <span class="window-title">Tax Bracket Ledger &bull; 2026 Progressive Federal Tax Math</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">22% Marginal Bracket</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>Tax Layer / Bracket</th>
            <th>Taxable Income Span</th>
            <th>Rate</th>
            <th>Annual Tax</th>
            <th style="text-align:right;" class="nowrap">Withholding Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Standard Deduction</strong></td>
            <td class="mono">$0 &ndash; $16,100 (Single)</td>
            <td>0.00%</td>
            <td class="mono">$0.00</td>
            <td class="mono nowrap" style="text-align:right; color:#94a3b8;">Tax-Free Base</td>
          </tr>
          <tr>
            <td><span class="tag-bracket tag-10">10% Bracket</span> First Bracket</td>
            <td class="mono">$16,101 &ndash; $28,500 ($12,400)</td>
            <td>10.00%</td>
            <td class="mono">$1,240.00</td>
            <td class="mono nowrap" style="text-align:right; color:#f87171;">-$23.85 / wk</td>
          </tr>
          <tr>
            <td><span class="tag-bracket tag-12">12% Bracket</span> Middle Bracket</td>
            <td class="mono">$28,501 &ndash; $66,500 ($38,000)</td>
            <td>12.00%</td>
            <td class="mono">$4,560.00</td>
            <td class="mono nowrap" style="text-align:right; color:#f87171;">-$87.69 / wk</td>
          </tr>
          <tr class="bracket-highlight">
            <td><span class="tag-bracket tag-22">22% Bracket</span> <strong>Top Marginal</strong></td>
            <td class="mono"><strong>$66,501 &ndash; $93,600 ($27,100)</strong></td>
            <td><strong>22.00%</strong></td>
            <td class="mono" style="color:#60a5fa;"><strong>$5,962.00</strong></td>
            <td class="mono nowrap" style="text-align:right; color:#f87171;"><strong>-$114.65 / wk</strong></td>
          </tr>
          <tr>
            <td><span class="tag-bracket tag-fica">FICA Taxes</span> SS + Medicare</td>
            <td class="mono">Full Gross ($93,600)</td>
            <td>7.65%</td>
            <td class="mono">$7,160.40</td>
            <td class="mono nowrap" style="text-align:right; color:#f87171;">-$137.70 / wk</td>
          </tr>
          <tr class="net-row">
            <td><strong>Net Annual Take-Home Pay</strong></td>
            <td class="mono">After FIT + FICA (0% State)</td>
            <td><strong>79.78% Net</strong></td>
            <td class="mono" style="color:#34d399;"><strong>+$74,677.60</strong></td>
            <td class="mono nowrap" style="text-align:right; font-size:13.5px; color:#34d399;"><strong>~$6,223.13 / mo</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="summary-grid">
      <div class="summary-box">
        <div class="sum-label">Effective Federal Tax Rate</div>
        <div class="sum-val" style="color:#60a5fa;">12.57% <span style="font-size:10px; color:#94a3b8;">($11,762 FIT)</span></div>
      </div>
      <div class="summary-box">
        <div class="sum-label">Total Annual Withholdings</div>
        <div class="sum-val" style="color:#f87171;">-$18,922.40 <span style="font-size:10px; color:#94a3b8;">(20.22%)</span></div>
      </div>
      <div class="summary-box">
        <div class="sum-label">Pre-Tax 401(k) Advantage</div>
        <div class="sum-val" style="color:#34d399;">Save $220 <span style="font-size:10px; color:#94a3b8;">per $1,000 saved</span></div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Calculated under <strong>2026 IRS Percentage Method Tables (Pub 15-T)</strong> for Single Filers</span>
    <span>Mandatory withholdings total <strong>20.22%</strong> before optional pre-tax retirement or medical plans</span>
  </div>
</body>
</html>"""
        page.set_content(html_w2)
        temp_png2 = os.path.join(OUTPUT_DIR, "temp_45_w2.png")
        page.screenshot(path=temp_png2)
        img2 = Image.open(temp_png2)
        img2.save(os.path.join(OUTPUT_DIR, "ui-table-45hr-tax-brackets.webp"), "WEBP", quality=92)
        os.remove(temp_png2)
        print("Regenerated ui-table-45hr-tax-brackets.webp")
        page.close()

        # =========================================================================
        # WIDGET 3: ui-widget-50-30-20-budget-45hr.webp
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
    background: #0f172a;
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
  .b-seg-needs {{ width: 50%; background: #2563eb; }}
  .b-seg-wants {{ width: 30%; background: #f59e0b; }}
  .b-seg-savings {{ width: 20%; background: #10b981; }}

  .col-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }}
  .budget-col {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .budget-col.needs {{ border-top: 3px solid #2563eb; }}
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
  .needs .col-badge {{ background: rgba(37, 99, 235, 0.2); color: #60a5fa; }}
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
      <span class="window-title">Cash Flow Architect &bull; 50 / 30 / 20 Upper-Middle-Class Budget</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">Monthly Net: ~$6,220</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="budget-bar-wrap">
      <div class="budget-bar-labels">
        <span>50% Needs: ~$3,110/mo</span>
        <span>30% Wants: ~$1,866/mo</span>
        <span>20% Wealth: ~$1,244/mo</span>
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
          <div class="col-amt">~$3,110 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Housing / Rent Allowance:</span> <strong>$2,000</strong></li>
          <li><span>Groceries &amp; Nutrition:</span> <strong>$480</strong></li>
          <li><span>Utilities &amp; Gigabit Fiber:</span> <strong>$250</strong></li>
          <li><span>Transportation &amp; Auto Ins:</span> <strong>$380</strong></li>
        </ul>
      </div>

      <div class="budget-col wants">
        <div>
          <div class="col-hdr">
            <span class="col-title">30% Wants</span>
            <span class="col-badge">Lifestyle</span>
          </div>
          <div class="col-amt">~$1,866 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Dining Out &amp; Social:</span> <strong>$500</strong></li>
          <li><span>Travel &amp; Weekend Escapes:</span> <strong>$780</strong></li>
          <li><span>Subscriptions &amp; Streaming:</span> <strong>$220</strong></li>
          <li><span>Fitness, Wellness &amp; Gear:</span> <strong>$366</strong></li>
        </ul>
      </div>

      <div class="budget-col savings">
        <div>
          <div class="col-hdr">
            <span class="col-title">20% Wealth</span>
            <span class="col-badge">Investments</span>
          </div>
          <div class="col-amt">~$1,244 / mo</div>
        </div>
        <ul class="item-list">
          <li><span>Maxed Roth IRA ($7k/yr):</span> <strong>$583</strong></li>
          <li><span>High-Yield Emergency Fund:</span> <strong>$380</strong></li>
          <li><span>Taxable Brokerage / Index:</span> <strong>$281</strong></li>
          <li><span>Annual Wealth Growth:</span> <strong style="color:#34d399;">+$14,928/yr</strong></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Housing Target: <strong>Keep Rent/Mortgage at $1,800&ndash;$2,200/mo</strong> (Well below 30% gross cap of $2,340)</span>
    <span>Based on full-time $45.00/hour take-home salary (~$5,872 to $6,223/mo)</span>
  </div>
</body>
</html>"""
        page.set_content(html_w3)
        temp_png3 = os.path.join(OUTPUT_DIR, "temp_45_w3.png")
        page.screenshot(path=temp_png3)
        img3 = Image.open(temp_png3)
        img3.save(os.path.join(OUTPUT_DIR, "ui-widget-50-30-20-budget-45hr.webp"), "WEBP", quality=92)
        os.remove(temp_png3)
        print("Regenerated ui-widget-50-30-20-budget-45hr.webp")
        page.close()

        browser.close()

if __name__ == "__main__":
    generate_45hr_widgets()

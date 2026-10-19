import os
from playwright.sync_api import sync_playwright
from PIL import Image

OUTPUT_DIR = r"c:\Users\Hp\Downloads\hourly-wage-converter-vercel\dist\assets\images"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Common styling
BASE_STYLE = """
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    width: 800px;
    height: 450px;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    background: #0f172a;
    color: #f8fafc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 32px 36px;
    position: relative;
  }
  .bg-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    opacity: 0.15;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 10;
  }
  .header-left .tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(37, 99, 235, 0.2);
    border: 1px solid rgba(59, 130, 246, 0.4);
    color: #60a5fa;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 4px 10px;
    border-radius: 999px;
    margin-bottom: 8px;
  }
  .header-left h1 {
    font-size: 20px;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.02em;
  }
  .header-left p {
    font-size: 13px;
    color: #94a3b8;
    margin-top: 2px;
  }
  .brand-badge {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px;
    font-weight: 600;
    color: #38bdf8;
    background: rgba(15, 23, 42, 0.8);
    border: 1px solid rgba(56, 189, 248, 0.3);
    padding: 6px 12px;
    border-radius: 8px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(148, 163, 184, 0.15);
    padding-top: 14px;
    font-size: 11.5px;
    color: #64748b;
    z-index: 10;
  }
  .footer span strong {
    color: #cbd5e1;
  }
</style>
"""

def generate_images():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # -------------------------------------------------------------
        # IMAGE 1: Gross vs Net Breakdown
        # -------------------------------------------------------------
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_img1 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .content-grid {{
    display: grid;
    grid-template-columns: 1fr 60px 1fr;
    gap: 16px;
    align-items: center;
    z-index: 10;
    margin: 14px 0;
  }}
  .card {{
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 14px;
    padding: 20px;
    position: relative;
    backdrop-filter: blur(10px);
  }}
  .card.gross {{
    border-left: 4px solid #3b82f6;
  }}
  .card.net {{
    border-left: 4px solid #10b981;
    background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(6, 78, 59, 0.25));
    border-color: rgba(16, 185, 129, 0.3);
  }}
  .card-label {{
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #94a3b8;
    margin-bottom: 6px;
  }}
  .card.gross .card-label {{ color: #60a5fa; }}
  .card.net .card-label {{ color: #34d399; }}
  .amount {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 32px;
    font-weight: 800;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 12px;
  }}
  .card.net .amount {{ color: #10b981; }}
  .metrics-row {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    padding-top: 10px;
    border-top: 1px solid rgba(148, 163, 184, 0.12);
  }}
  .metric {{
    font-size: 11.5px;
  }}
  .metric-k {{ color: #64748b; font-size: 10.5px; text-transform: uppercase; }}
  .metric-v {{ color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-weight: 600; margin-top: 1px; }}
  .vs-badge {{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }}
  .deduct-pill {{
    background: rgba(239, 68, 68, 0.15);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #f87171;
    font-size: 10px;
    font-weight: 700;
    padding: 6px 4px;
    border-radius: 8px;
    width: 64px;
    font-family: 'JetBrains Mono', monospace;
  }}
  .arrow {{
    color: #64748b;
    font-size: 18px;
    margin: 4px 0;
  }}
</style>
</head>
<body>
  <div class="bg-glow" style="width: 300px; height: 300px; background: #2563eb; top: -50px; left: -50px;"></div>
  <div class="bg-glow" style="width: 300px; height: 300px; background: #10b981; bottom: -50px; right: -50px;"></div>
  
  <div class="header">
    <div class="header-left">
      <span class="tag">Wage Analysis &bull; 2,080 Hours</span>
      <h1>$23/Hour: Gross vs. Net Pay Breakdown</h1>
      <p>Standard full-time annual compensation (40 hrs/wk across 52 weeks)</p>
    </div>
    <div class="brand-badge">hourlywageconverter.com</div>
  </div>

  <div class="content-grid">
    <div class="card gross">
      <div class="card-label">Gross Annual Salary</div>
      <div class="amount">$47,840</div>
      <div class="metrics-row">
        <div class="metric"><div class="metric-k">Monthly Gross</div><div class="metric-v">$3,986.67</div></div>
        <div class="metric"><div class="metric-k">Biweekly (80h)</div><div class="metric-v">$1,840.00</div></div>
      </div>
    </div>

    <div class="vs-badge">
      <span class="deduct-pill">-15.1%</span>
      <span class="arrow">&rarr;</span>
      <span style="font-size: 9.5px; color: #94a3b8; font-weight: 600;">-$7,221<br>Taxes</span>
    </div>

    <div class="card net">
      <div class="card-label">Net Take-Home (No State Tax)</div>
      <div class="amount">$40,619</div>
      <div class="metrics-row">
        <div class="metric"><div class="metric-k">Monthly Net</div><div class="metric-v">~$3,385.00</div></div>
        <div class="metric"><div class="metric-k">Biweekly Net</div><div class="metric-v">~$1,562.28</div></div>
      </div>
    </div>
  </div>

  <div class="footer">
    <span>State Variations: <strong>Mod. State (~4.5%): ~$38,466/yr</strong> &bull; <strong>High State (~6%): ~$37,749/yr</strong></span>
    <span>Single Filer &bull; 2026 IRS Standard Deduction ($16,100)</span>
  </div>
</body>
</html>"""
        page.set_content(html_img1)
        temp_png1 = os.path.join(OUTPUT_DIR, "temp1.png")
        page.screenshot(path=temp_png1)
        img1 = Image.open(temp_png1)
        img1.save(os.path.join(OUTPUT_DIR, "23-hr-gross-vs-net-breakdown.webp"), "WEBP", quality=92)
        os.remove(temp_png1)
        print("Generated 23-hr-gross-vs-net-breakdown.webp")
        page.close()

        # -------------------------------------------------------------
        # IMAGE 2: Paycheck Tax Flowchart
        # -------------------------------------------------------------
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_img2 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .flow-container {{
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    margin: 16px 0;
    gap: 8px;
  }}
  .step-node {{
    flex: 1;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 12px;
    padding: 16px 14px;
    position: relative;
    backdrop-filter: blur(10px);
  }}
  .step-node.start {{ border-top: 3px solid #3b82f6; }}
  .step-node.fica {{ border-top: 3px solid #f59e0b; }}
  .step-node.fit {{ border-top: 3px solid #ef4444; }}
  .step-node.final {{
    border-top: 3px solid #10b981;
    background: linear-gradient(160deg, rgba(30, 41, 59, 0.8), rgba(6, 78, 59, 0.3));
    border-color: rgba(16, 185, 129, 0.3);
  }}
  .step-num {{
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
    margin-bottom: 4px;
  }}
  .step-title {{
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 8px;
  }}
  .step-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 8px;
  }}
  .step-node.start .step-val {{ color: #60a5fa; }}
  .step-node.fica .step-val {{ color: #fbbf24; }}
  .step-node.fit .step-val {{ color: #f87171; }}
  .step-node.final .step-val {{ color: #34d399; }}
  .step-desc {{
    font-size: 11px;
    color: #94a3b8;
    line-height: 1.4;
    border-top: 1px solid rgba(148, 163, 184, 0.12);
    padding-top: 6px;
  }}
  .flow-arrow {{
    color: #475569;
    font-size: 16px;
    font-weight: bold;
  }}
</style>
</head>
<body>
  <div class="bg-glow" style="width: 300px; height: 300px; background: #3b82f6; top: -50px; left: -50px;"></div>
  <div class="bg-glow" style="width: 300px; height: 300px; background: #10b981; bottom: -50px; right: -50px;"></div>

  <div class="header">
    <div class="header-left">
      <span class="tag">2026 Tax Withholding Flow</span>
      <h1>Weekly Paycheck Deduction Waterfall ($23/Hour)</h1>
      <p>Tracking every dollar taken from a 40-hour weekly paycheck ($920 gross)</p>
    </div>
    <div class="brand-badge">hourlywageconverter.com</div>
  </div>

  <div class="flow-container">
    <div class="step-node start">
      <div class="step-num">Step 1</div>
      <div class="step-title">Weekly Gross Pay</div>
      <div class="step-val">$920.00</div>
      <div class="step-desc">40 hours &times; $23.00 base hourly rate</div>
    </div>

    <div class="flow-arrow">&minus;</div>

    <div class="step-node fica">
      <div class="step-num">Step 2</div>
      <div class="step-title">FICA Taxes (7.65%)</div>
      <div class="step-val">-$70.38</div>
      <div class="step-desc">Social Security (6.2% = $57.04)<br>Medicare (1.45% = $13.34)</div>
    </div>

    <div class="flow-arrow">&minus;</div>

    <div class="step-node fit">
      <div class="step-num">Step 3</div>
      <div class="step-title">Federal Tax (FIT)</div>
      <div class="step-val">-$68.48</div>
      <div class="step-desc">After $16,100 standard deduction (10% &amp; 12% brackets)</div>
    </div>

    <div class="flow-arrow">&equals;</div>

    <div class="step-node final">
      <div class="step-num">Step 4</div>
      <div class="step-title">Net Take-Home</div>
      <div class="step-val">~$781.14</div>
      <div class="step-desc">~$1,562 biweekly / ~$3,385 monthly (no state tax)</div>
    </div>
  </div>

  <div class="footer">
    <span>Effective Total Tax Rate: <strong>~15.09% of gross earnings</strong> (FIT: 7.44% + FICA: 7.65%)</span>
    <span>Single Filer &bull; Publication 15-T Exact Math</span>
  </div>
</body>
</html>"""
        page.set_content(html_img2)
        temp_png2 = os.path.join(OUTPUT_DIR, "temp2.png")
        page.screenshot(path=temp_png2)
        img2 = Image.open(temp_png2)
        img2.save(os.path.join(OUTPUT_DIR, "23-hr-paycheck-tax-flowchart.webp"), "WEBP", quality=92)
        os.remove(temp_png2)
        print("Generated 23-hr-paycheck-tax-flowchart.webp")
        page.close()

        # -------------------------------------------------------------
        # IMAGE 3: Monthly Budget Allocation (50/30/20)
        # -------------------------------------------------------------
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_img3 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .budget-grid {{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    z-index: 10;
    margin: 14px 0;
  }}
  .budget-card {{
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 14px;
    padding: 18px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    backdrop-filter: blur(10px);
  }}
  .budget-card.needs {{ border-top: 4px solid #3b82f6; }}
  .budget-card.wants {{ border-top: 4px solid #f59e0b; }}
  .budget-card.savings {{ border-top: 4px solid #10b981; }}
  .card-top {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }}
  .percent-badge {{
    font-size: 11px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 6px;
    text-transform: uppercase;
  }}
  .needs .percent-badge {{ background: rgba(59, 130, 246, 0.2); color: #60a5fa; }}
  .wants .percent-badge {{ background: rgba(245, 158, 11, 0.2); color: #fbbf24; }}
  .savings .percent-badge {{ background: rgba(16, 185, 129, 0.2); color: #34d399; }}
  .b-title {{
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
  }}
  .b-amount {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 22px;
    font-weight: 800;
    margin: 6px 0 10px 0;
    color: #ffffff;
  }}
  .b-list {{
    list-style: none;
    font-size: 11px;
    color: #94a3b8;
    line-height: 1.6;
    border-top: 1px solid rgba(148, 163, 184, 0.12);
    padding-top: 8px;
  }}
  .b-list li {{
    display: flex;
    justify-content: space-between;
  }}
  .b-list li strong {{
    color: #e2e8f0;
  }}
</style>
</head>
<body>
  <div class="bg-glow" style="width: 300px; height: 300px; background: #2563eb; top: -50px; left: -50px;"></div>
  <div class="bg-glow" style="width: 300px; height: 300px; background: #10b981; bottom: -50px; right: -50px;"></div>

  <div class="header">
    <div class="header-left">
      <span class="tag">50 / 30 / 20 Framework</span>
      <h1>$23/Hour Monthly Take-Home Budget Model</h1>
      <p>Target monthly take-home allocation based on ~$3,205 to $3,385 net pay</p>
    </div>
    <div class="brand-badge">hourlywageconverter.com</div>
  </div>

  <div class="budget-grid">
    <div class="budget-card needs">
      <div>
        <div class="card-top">
          <span class="b-title">50% Needs</span>
          <span class="percent-badge">Essential</span>
        </div>
        <div class="b-amount">~$1,600 &ndash; $1,690</div>
      </div>
      <ul class="b-list">
        <li><span>Rent / Shared Housing:</span> <strong>$1,000&ndash;$1,100</strong></li>
        <li><span>Groceries &amp; Supplies:</span> <strong>$300&ndash;$320</strong></li>
        <li><span>Utilities &amp; Wifi:</span> <strong>$190&ndash;$210</strong></li>
        <li><span>Transportation &amp; Auto:</span> <strong>$200&ndash;$220</strong></li>
      </ul>
    </div>

    <div class="budget-card wants">
      <div>
        <div class="card-top">
          <span class="b-title">30% Wants</span>
          <span class="percent-badge">Lifestyle</span>
        </div>
        <div class="b-amount">~$960 &ndash; $1,015</div>
      </div>
      <ul class="b-list">
        <li><span>Dining Out &amp; Social:</span> <strong>$250&ndash;$280</strong></li>
        <li><span>Subscriptions &amp; Mobile:</span> <strong>$80&ndash;$100</strong></li>
        <li><span>Personal Care &amp; Style:</span> <strong>$100&ndash;$120</strong></li>
        <li><span>Hobbies, Gym &amp; Travel:</span> <strong>$530&ndash;$550</strong></li>
      </ul>
    </div>

    <div class="budget-card savings">
      <div>
        <div class="card-top">
          <span class="b-title">20% Savings</span>
          <span class="percent-badge">Security</span>
        </div>
        <div class="b-amount">~$640 &ndash; $677</div>
      </div>
      <ul class="b-list">
        <li><span>Emergency Fund (HYSA):</span> <strong>$250&ndash;$300</strong></li>
        <li><span>Roth IRA / 401(k):</span> <strong>$250&ndash;$300</strong></li>
        <li><span>Extra Debt Reduction:</span> <strong>$100&ndash;$140</strong></li>
        <li><span>Annual Wealth Growth:</span> <strong>+$7,680/yr</strong></li>
      </ul>
    </div>
  </div>

  <div class="footer">
    <span>Housing Benchmark: <strong>30% Gross Rule = $1,100/mo max rent</strong> to maintain healthy cash flow</span>
    <span>Based on 40 hrs/wk full-time schedule</span>
  </div>
</body>
</html>"""
        page.set_content(html_img3)
        temp_png3 = os.path.join(OUTPUT_DIR, "temp3.png")
        page.screenshot(path=temp_png3)
        img3 = Image.open(temp_png3)
        img3.save(os.path.join(OUTPUT_DIR, "23-hr-monthly-budget-allocation.webp"), "WEBP", quality=92)
        os.remove(temp_png3)
        print("Generated 23-hr-monthly-budget-allocation.webp")
        page.close()

        browser.close()

if __name__ == "__main__":
    generate_images()

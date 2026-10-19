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

def generate_all():
    with sync_playwright() as p:
        browser = p.chromium.launch()

        # =========================================================================
        # HERO IMAGE: biweekly-vs-semi-monthly-pay-difference.jpg (1200x675)
        # =========================================================================
        page = browser.new_page(viewport={"width": 1200, "height": 675}, device_scale_factor=2)
        hero_html = f"""<!DOCTYPE html>
<html>
<head>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700;800&display=swap');
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{
    width: 1200px;
    height: 675px;
    overflow: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: #080c15;
    color: #f1f5f9;
    padding: 32px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    -webkit-font-smoothing: antialiased;
    position: relative;
  }}
  .glow-left {{
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 70%);
    top: -100px;
    left: -100px;
    pointer-events: none;
  }}
  .glow-right {{
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0) 70%);
    bottom: -100px;
    right: -100px;
    pointer-events: none;
  }}
  .window-header {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 10;
  }}
  .window-controls {{
    display: flex;
    align-items: center;
    gap: 10px;
  }}
  .dot {{ width: 13px; height: 13px; border-radius: 50%; }}
  .dot-red {{ background: #ef4444; }}
  .dot-yellow {{ background: #f59e0b; }}
  .dot-green {{ background: #10b981; }}
  .window-title {{
    font-size: 14px;
    font-weight: 600;
    color: #94a3b8;
    margin-left: 10px;
    letter-spacing: 0.02em;
  }}
  .badge-live {{
    font-size: 11.5px;
    padding: 4px 10px;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.35);
    color: #34d399;
    border-radius: 6px;
    font-weight: 700;
  }}
  .badge-app {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: #38bdf8;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(56, 189, 248, 0.3);
    padding: 5px 12px;
    border-radius: 8px;
    font-weight: 600;
  }}
  
  .hero-main {{
    display: flex;
    flex-direction: column;
    gap: 18px;
    z-index: 10;
    margin: 8px 0;
  }}
  .hero-headline-row {{
    text-align: center;
  }}
  .hero-eyebrow {{
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #38bdf8;
    margin-bottom: 6px;
  }}
  .hero-title {{
    font-size: 30px;
    font-weight: 900;
    letter-spacing: -0.025em;
    color: #ffffff;
    line-height: 1.15;
  }}
  .hero-subtitle {{
    font-size: 14.5px;
    color: #94a3b8;
    margin-top: 5px;
  }}

  .split-grid {{
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    gap: 14px;
    align-items: center;
  }}
  .split-card {{
    background: #0f172a;
    border: 1.5px solid rgba(255, 255, 255, 0.09);
    border-radius: 14px;
    padding: 22px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
  }}
  .split-card.biweekly {{
    border-top: 4px solid #3b82f6;
    background: linear-gradient(180deg, rgba(30, 58, 138, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%);
  }}
  .split-card.semimonthly {{
    border-top: 4px solid #10b981;
    background: linear-gradient(180deg, rgba(6, 78, 59, 0.25) 0%, rgba(15, 23, 42, 0.9) 100%);
  }}
  
  .card-top {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }}
  .schedule-type {{
    font-size: 14px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }}
  .biweekly .schedule-type {{ color: #60a5fa; }}
  .semimonthly .schedule-type {{ color: #34d399; }}
  
  .check-count-badge {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 6px;
  }}
  .biweekly .check-count-badge {{
    background: rgba(59, 130, 246, 0.2);
    border: 1px solid rgba(59, 130, 246, 0.4);
    color: #93c5fd;
  }}
  .semimonthly .check-count-badge {{
    background: rgba(16, 185, 129, 0.2);
    border: 1px solid rgba(16, 185, 129, 0.4);
    color: #6ee7b7;
  }}

  .pay-amt {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 38px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1.1;
    margin: 4px 0 6px;
  }}
  .biweekly .pay-amt {{ color: #ffffff; text-shadow: 0 0 20px rgba(59, 130, 246, 0.35); }}
  .semimonthly .pay-amt {{ color: #34d399; text-shadow: 0 0 20px rgba(16, 185, 129, 0.35); }}

  .pay-timing {{
    font-size: 13.5px;
    color: #cbd5e1;
    font-weight: 600;
    margin-bottom: 12px;
  }}

  .detail-bullets {{
    list-style: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 12.5px;
    color: #94a3b8;
  }}
  .detail-bullets li {{
    display: flex;
    justify-content: space-between;
  }}
  .detail-bullets strong {{
    color: #e2e8f0;
    font-family: 'JetBrains Mono', monospace;
  }}

  .vs-divider {{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }}
  .vs-circle {{
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #1e293b;
    border: 2px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 800;
    color: #38bdf8;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }}

  .bottom-summary-banner {{
    background: rgba(15, 23, 42, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    padding: 10px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #cbd5e1;
    white-space: nowrap;
  }}
  .bottom-summary-banner strong {{
    color: #38bdf8;
    font-family: 'JetBrains Mono', monospace;
  }}

  .footer-bar {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 12px;
    color: #64748b;
    z-index: 10;
  }}
  .footer-bar strong {{ color: #cbd5e1; }}
</style>
</head>
<body>
  <div class="glow-left"></div>
  <div class="glow-right"></div>

  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Payroll Schedule Analyzer &bull; Biweekly vs. Semi-Monthly Architecture</span>
    </div>
    <div style="display:flex; align-items:center; gap:10px;">
      <span class="badge-live">2026 Payroll Rules</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="hero-main">
    <div class="hero-headline-row">
      <div class="hero-eyebrow">Pay Frequency &bull; Cash Flow &bull; Paycheck Math</div>
      <h1 class="hero-title">Biweekly vs. Semi-Monthly Pay: What's the Difference?</h1>
      <p class="hero-subtitle">Comparing 26 paychecks vs. 24 paychecks on a $60,000 annual salary baseline</p>
    </div>

    <div class="split-grid">
      <div class="split-card biweekly">
        <div>
          <div class="card-top">
            <span class="schedule-type">Biweekly Schedule</span>
            <span class="check-count-badge">26 Paychecks / Yr</span>
          </div>
          <div class="pay-amt">$2,307.69 <span style="font-size:16px; font-weight:500; color:#94a3b8;">/ check</span></div>
          <div class="pay-timing">Paid every 2 weeks (26 Fridays per year)</div>
        </div>
        <ul class="detail-bullets">
          <li><span>Annual Calculation:</span> <strong>$60,000 &divide; 26 checks</strong></li>
          <li><span>Standard Months (10):</span> <strong>2 checks ($4,615.38)</strong></li>
          <li><span>Bonus Months (2):</span> <strong style="color:#60a5fa;">3 checks ($6,923.07!)</strong></li>
          <li><span>Work Hours Base:</span> <strong>80 hours per check</strong></li>
        </ul>
      </div>

      <div class="vs-divider">
        <div class="vs-circle">VS</div>
      </div>

      <div class="split-card semimonthly">
        <div>
          <div class="card-top">
            <span class="schedule-type">Semi-Monthly Schedule</span>
            <span class="check-count-badge">24 Paychecks / Yr</span>
          </div>
          <div class="pay-amt">$2,500.00 <span style="font-size:16px; font-weight:500; color:#34d399;">/ check</span></div>
          <div class="pay-timing">Paid twice a month (1st &amp; 15th, or 15th &amp; last day)</div>
        </div>
        <ul class="detail-bullets">
          <li><span>Annual Calculation:</span> <strong>$60,000 &divide; 24 checks</strong></li>
          <li><span>Every Month (All 12):</span> <strong>2 checks ($5,000.00)</strong></li>
          <li><span>Per-Check Advantage:</span> <strong style="color:#34d399;">+$192.31 / paycheck</strong></li>
          <li><span>Work Hours Base:</span> <strong>86.67 hours per check</strong></li>
        </ul>
      </div>
    </div>

    <div class="bottom-summary-banner">
      <span>Per-Check Variance: <strong>+$192.31 (Semi-Monthly)</strong></span>
      <span>Annual Gross: <strong>$60,000.00 (Both Equal)</strong></span>
      <span>Magic Months: <strong>2 Three-Paycheck Months (Biweekly)</strong></span>
    </div>
  </div>

  <div class="footer-bar">
    <span>Fair Labor Standards Act (FLSA) <strong>29 CFR &sect; 778.104</strong> &bull; Workweek Standing Alone</span>
    <span>Source: <strong>hourlywageconverter.com</strong> Payroll Intelligence</span>
  </div>
</body>
</html>"""
        page.set_content(hero_html)
        hero_temp_png = os.path.join(OUTPUT_DIR, "temp_hero.png")
        page.screenshot(path=hero_temp_png)
        img_hero = Image.open(hero_temp_png)
        img_hero.convert("RGB").save(os.path.join(OUTPUT_DIR, "biweekly-vs-semi-monthly-pay-difference.jpg"), "JPEG", quality=92)
        os.remove(hero_temp_png)
        print("Generated biweekly-vs-semi-monthly-pay-difference.jpg")
        page.close()

        # =========================================================================
        # WIDGET 1: ui-calendar-biweekly-3-paychecks.webp (800x450)
        # =========================================================================
        page = browser.new_page(viewport={"width": 800, "height": 450}, device_scale_factor=2)
        html_w1 = f"""<!DOCTYPE html>
<html>
<head>
{BASE_STYLE}
<style>
  .dash-body {{
    display: grid;
    grid-template-columns: 440px 1fr;
    gap: 16px;
    align-items: stretch;
    margin: 8px 0;
  }}
  .cal-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .cal-top {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding-bottom: 6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  }}
  .cal-month-title {{
    font-size: 13px;
    font-weight: 700;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 6px;
  }}
  .cal-tag {{
    font-size: 9.5px;
    font-weight: 700;
    padding: 2px 7px;
    background: rgba(59, 130, 246, 0.2);
    border: 1px solid rgba(59, 130, 246, 0.35);
    color: #60a5fa;
    border-radius: 4px;
    text-transform: uppercase;
  }}
  .cal-grid {{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    text-align: center;
  }}
  .cal-day-hdr {{
    font-size: 9.5px;
    font-weight: 700;
    color: #64748b;
    padding: 2px 0 4px;
    text-transform: uppercase;
  }}
  .cal-day-hdr.fri {{
    color: #38bdf8;
  }}
  .cal-cell {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px;
    padding: 6px 2px;
    border-radius: 5px;
    color: #94a3b8;
    background: rgba(255, 255, 255, 0.02);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }}
  .cal-cell.empty {{
    background: transparent;
    color: transparent;
  }}
  .cal-cell.payday {{
    background: rgba(37, 99, 235, 0.25);
    border: 1px solid #3b82f6;
    color: #ffffff;
    font-weight: 800;
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
  }}
  .cal-cell.payday-bonus {{
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.4) 100%);
    border: 1.5px solid #10b981;
    color: #34d399;
    font-weight: 900;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.45);
  }}
  .cell-sub {{
    font-size: 7.5px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 1px;
  }}
  .payday .cell-sub {{ color: #93c5fd; }}
  .payday-bonus .cell-sub {{ color: #a7f3d0; }}

  .side-card {{
    background: #0f172a;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 10px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }}
  .side-box {{
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 8px;
    padding: 10px 12px;
    margin-bottom: 8px;
  }}
  .side-box.highlight {{
    border-left: 3px solid #10b981;
    background: linear-gradient(135deg, #111827 0%, rgba(16, 185, 129, 0.12) 100%);
  }}
  .sb-lbl {{
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: #64748b;
  }}
  .sb-val {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    font-weight: 800;
    color: #ffffff;
    margin: 2px 0;
  }}
  .sb-sub {{
    font-size: 10.5px;
    color: #94a3b8;
  }}
  .strategy-tip {{
    font-size: 10.5px;
    color: #cbd5e1;
    line-height: 1.45;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 6px;
    padding: 8px 10px;
    border-left: 2px solid #38bdf8;
  }}
</style>
</head>
<body>
  <div class="window-header">
    <div class="window-controls">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
      <span class="window-title">Calendar Inspector &bull; The "Three-Paycheck Month" Anomaly</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">Biweekly Schedule</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="cal-card">
      <div class="cal-top">
        <div class="cal-month-title">
          <span>October 2026</span>
          <span style="font-size:11px; color:#94a3b8; font-weight:500;">(3-Friday Payday Month)</span>
        </div>
        <span class="cal-tag">3 Paydays</span>
      </div>

      <div class="cal-grid">
        <div class="cal-day-hdr">Sun</div>
        <div class="cal-day-hdr">Mon</div>
        <div class="cal-day-hdr">Tue</div>
        <div class="cal-day-hdr">Wed</div>
        <div class="cal-day-hdr">Thu</div>
        <div class="cal-day-hdr fri">Fri</div>
        <div class="cal-day-hdr">Sat</div>

        <!-- Row 1: Oct 1 is Thu -->
        <div class="cal-cell empty"></div>
        <div class="cal-cell empty"></div>
        <div class="cal-cell empty"></div>
        <div class="cal-cell empty"></div>
        <div class="cal-cell">1</div>
        <div class="cal-cell payday">
          <span>2</span>
          <span class="cell-sub">Pay 1</span>
        </div>
        <div class="cal-cell">3</div>

        <!-- Row 2 -->
        <div class="cal-cell">4</div>
        <div class="cal-cell">5</div>
        <div class="cal-cell">6</div>
        <div class="cal-cell">7</div>
        <div class="cal-cell">8</div>
        <div class="cal-cell">9</div>
        <div class="cal-cell">10</div>

        <!-- Row 3 -->
        <div class="cal-cell">11</div>
        <div class="cal-cell">12</div>
        <div class="cal-cell">13</div>
        <div class="cal-cell">14</div>
        <div class="cal-cell">15</div>
        <div class="cal-cell payday">
          <span>16</span>
          <span class="cell-sub">Pay 2</span>
        </div>
        <div class="cal-cell">17</div>

        <!-- Row 4 -->
        <div class="cal-cell">18</div>
        <div class="cal-cell">19</div>
        <div class="cal-cell">20</div>
        <div class="cal-cell">21</div>
        <div class="cal-cell">22</div>
        <div class="cal-cell">23</div>
        <div class="cal-cell">24</div>

        <!-- Row 5 -->
        <div class="cal-cell">25</div>
        <div class="cal-cell">26</div>
        <div class="cal-cell">27</div>
        <div class="cal-cell">28</div>
        <div class="cal-cell">29</div>
        <div class="cal-cell payday-bonus">
          <span>30</span>
          <span class="cell-sub">Pay 3!</span>
        </div>
        <div class="cal-cell">31</div>
      </div>
    </div>

    <div class="side-card">
      <div>
        <div class="side-box">
          <div class="sb-lbl">Regular 2-Check Month</div>
          <div class="sb-val">$4,615.38</div>
          <div class="sb-sub">Standard 10 months of the year</div>
        </div>

        <div class="side-box highlight">
          <div class="sb-lbl" style="color:#34d399;">3-Check Month Cash Flow</div>
          <div class="sb-val" style="color:#10b981;">$6,923.07</div>
          <div class="sb-sub"><strong style="color:#34d399;">+$2,307.69 Extra Cash Flow</strong></div>
        </div>
      </div>

      <div class="strategy-tip">
        <strong>The Smart Budget Rule:</strong> Fund your regular rent and living expenses on 2 paychecks. Channel the 3rd check 100% into emergency savings or debt payoff.
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Schedule Dynamics: <strong>26 checks &divide; 12 months = 2.167 checks/month</strong> (2 months with 3 paydays)</span>
    <span>Source: <strong>hourlywageconverter.com</strong> Calendar Analysis</span>
  </div>
</body>
</html>"""
        page.set_content(html_w1)
        temp_png1 = os.path.join(OUTPUT_DIR, "temp_ps_w1.png")
        page.screenshot(path=temp_png1)
        img1 = Image.open(temp_png1)
        img1.save(os.path.join(OUTPUT_DIR, "ui-calendar-biweekly-3-paychecks.webp"), "WEBP", quality=92)
        os.remove(temp_png1)
        print("Generated ui-calendar-biweekly-3-paychecks.webp")
        page.close()

        # =========================================================================
        # WIDGET 2: ui-comparison-biweekly-semimonthly-math.webp (800x450)
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
  .mono {{ font-family: 'JetBrains Mono', monospace; }}
  
  .row-feat td {{
    background: rgba(59, 130, 246, 0.06);
    font-weight: 600;
  }}
  .row-total td {{
    background: rgba(16, 185, 129, 0.08);
    font-weight: 700;
    border-bottom: none;
  }}
  .pill-bw {{
    background: rgba(59, 130, 246, 0.2);
    color: #60a5fa;
    padding: 2px 7px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 10px;
  }}
  .pill-sm {{
    background: rgba(16, 185, 129, 0.2);
    color: #34d399;
    padding: 2px 7px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 10px;
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
      <span class="window-title">Payroll Matrix &bull; $60,000 Annual Salary Schedule Comparison</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">Side-by-Side Audit</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="table-card">
      <table>
        <thead>
          <tr>
            <th>Payroll Metric</th>
            <th>Biweekly (Every 2 Wks)</th>
            <th>Semi-Monthly (Twice/Mo)</th>
            <th style="text-align:right;">Key Variance / Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Paychecks Per Year</strong></td>
            <td><span class="pill-bw">26 Paychecks</span></td>
            <td><span class="pill-sm">24 Paychecks</span></td>
            <td class="mono" style="text-align:right; color:#94a3b8;">-2 paychecks/year</td>
          </tr>
          <tr class="row-feat">
            <td><strong>Gross Paycheck Amount</strong></td>
            <td class="mono" style="color:#60a5fa;">$2,307.69</td>
            <td class="mono" style="color:#34d399;">$2,500.00</td>
            <td class="mono" style="text-align:right; color:#34d399;">+$192.31 / check (+8.33%)</td>
          </tr>
          <tr>
            <td><strong>Standard Month (2 Checks)</strong></td>
            <td class="mono">$4,615.38 (10 mos)</td>
            <td class="mono">$5,000.00 (All 12 mos)</td>
            <td class="mono" style="text-align:right; color:#f87171;">-$384.62 / month</td>
          </tr>
          <tr>
            <td><strong>Magic Month (3 Checks)</strong></td>
            <td class="mono" style="color:#60a5fa; font-weight:700;">$6,923.07 (2 mos)</td>
            <td class="mono">N/A (Always 2 checks)</td>
            <td class="mono" style="text-align:right; color:#60a5fa;">+$1,923.07 cash surge</td>
          </tr>
          <tr class="row-total">
            <td><strong>Total Annual Gross Salary</strong></td>
            <td class="mono" style="color:#ffffff;">$60,000.00</td>
            <td class="mono" style="color:#ffffff;">$60,000.00</td>
            <td class="mono" style="text-align:right; color:#38bdf8;"><strong>Identical Annual Pay ($0.00)</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="summary-grid">
      <div class="summary-box">
        <div class="sum-label">Per-Check Size</div>
        <div class="sum-val" style="color:#34d399;">+$192.31 <span style="font-size:11px; color:#94a3b8;">Semi-Monthly</span></div>
      </div>
      <div class="summary-box">
        <div class="sum-label">Annual Extra Checks</div>
        <div class="sum-val" style="color:#60a5fa;">+2 Checks <span style="font-size:11px; color:#94a3b8;">Biweekly</span></div>
      </div>
      <div class="summary-box">
        <div class="sum-label">Annual Gross Difference</div>
        <div class="sum-val" style="color:#38bdf8;">$0.00 <span style="font-size:11px; color:#94a3b8;">(100% Equal)</span></div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Formula: <strong>$60,000 &divide; 26 = $2,307.69</strong> vs. <strong>$60,000 &divide; 24 = $2,500.00</strong></span>
    <span>Zero difference in annual gross taxable income under federal IRS rules</span>
  </div>
</body>
</html>"""
        page.set_content(html_w2)
        temp_png2 = os.path.join(OUTPUT_DIR, "temp_ps_w2.png")
        page.screenshot(path=temp_png2)
        img2 = Image.open(temp_png2)
        img2.save(os.path.join(OUTPUT_DIR, "ui-comparison-biweekly-semimonthly-math.webp"), "WEBP", quality=92)
        os.remove(temp_png2)
        print("Generated ui-comparison-biweekly-semimonthly-math.webp")
        page.close()

        # =========================================================================
        # WIDGET 3: ui-budgeting-app-pay-schedule.webp (800x450)
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
  .b-seg-p1 {{ width: 40%; background: #3b82f6; }}
  .b-seg-p2 {{ width: 40%; background: #6366f1; }}
  .b-seg-p3 {{ width: 20%; background: #10b981; }}

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
  .budget-col.c1 {{ border-top: 3px solid #3b82f6; }}
  .budget-col.c2 {{ border-top: 3px solid #6366f1; }}
  .budget-col.c3 {{
    border-top: 3px solid #10b981;
    background: linear-gradient(180deg, rgba(16, 185, 129, 0.12) 0%, #111827 100%);
  }}
  
  .col-hdr {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  }}
  .col-title {{
    font-size: 12.5px;
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
  .c1 .col-badge {{ background: rgba(59, 130, 246, 0.15); color: #60a5fa; }}
  .c2 .col-badge {{ background: rgba(99, 102, 241, 0.15); color: #a5b4fc; }}
  .c3 .col-badge {{ background: rgba(16, 185, 129, 0.2); color: #34d399; }}
  
  .col-amt {{
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 7px;
    color: #ffffff;
  }}
  .c3 .col-amt {{ color: #34d399; }}

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
      <span class="window-title">Smart Budgeting Engine &bull; Automated 2-Paycheck Strategy</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <span class="badge-live">Cash Flow Rule</span>
      <span class="badge-app">hourlywageconverter.com</span>
    </div>
  </div>

  <div class="dash-body">
    <div class="budget-bar-wrap">
      <div class="budget-bar-labels">
        <span>Check 1: Fixed Obligations ($2,308)</span>
        <span>Check 2: Living &amp; Discretionary ($2,308)</span>
        <span style="color:#34d399; font-weight:700;">Check 3 (2x/Yr): 100% Savings (+2,308)</span>
      </div>
      <div class="budget-seg-bar">
        <div class="b-seg-p1"></div>
        <div class="b-seg-p2"></div>
        <div class="b-seg-p3"></div>
      </div>
    </div>

    <div class="col-grid">
      <div class="budget-col c1">
        <div>
          <div class="col-hdr">
            <span class="col-title">Paycheck #1</span>
            <span class="col-badge">Fixed Bills</span>
          </div>
          <div class="col-amt">$2,308 <span style="font-size:11px; font-weight:500; color:#94a3b8;">/ mo</span></div>
        </div>
        <ul class="item-list">
          <li><span>Rent / Mortgage:</span> <strong>$1,250</strong></li>
          <li><span>Utilities &amp; Wifi:</span> <strong>$280</strong></li>
          <li><span>Car Note &amp; Ins:</span> <strong>$420</strong></li>
          <li><span>Fixed Buffer:</span> <strong>$358</strong></li>
        </ul>
      </div>

      <div class="budget-col c2">
        <div>
          <div class="col-hdr">
            <span class="col-title">Paycheck #2</span>
            <span class="col-badge">Variable</span>
          </div>
          <div class="col-amt">$2,308 <span style="font-size:11px; font-weight:500; color:#94a3b8;">/ mo</span></div>
        </div>
        <ul class="item-list">
          <li><span>Groceries &amp; Food:</span> <strong>$600</strong></li>
          <li><span>Dining &amp; Social:</span> <strong>$350</strong></li>
          <li><span>Fuel &amp; Transit:</span> <strong>$180</strong></li>
          <li><span>Monthly Buffer:</span> <strong>$1,178</strong></li>
        </ul>
      </div>

      <div class="budget-col c3">
        <div>
          <div class="col-hdr">
            <span class="col-title">Paycheck #3 (2x/Yr)</span>
            <span class="col-badge">100% Wealth</span>
          </div>
          <div class="col-amt">+$2,308 <span style="font-size:11px; font-weight:500; color:#34d399;">Bonus</span></div>
        </div>
        <ul class="item-list">
          <li><span>Emergency Fund:</span> <strong>+$1,200</strong></li>
          <li><span>Roth IRA / 401(k):</span> <strong>+$750</strong></li>
          <li><span>Debt Acceleration:</span> <strong>+$358</strong></li>
          <li><span>Annual Wealth Boost:</span> <strong style="color:#34d399;">+$4,615/yr</strong></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Strategy: <strong>Live strictly on 24 paychecks; save 100% of the two 3rd checks</strong></span>
    <span>Based on a $60,000 biweekly salary schedule ($2,307.69 per paycheck)</span>
  </div>
</body>
</html>"""
        page.set_content(html_w3)
        temp_png3 = os.path.join(OUTPUT_DIR, "temp_ps_w3.png")
        page.screenshot(path=temp_png3)
        img3 = Image.open(temp_png3)
        img3.save(os.path.join(OUTPUT_DIR, "ui-budgeting-app-pay-schedule.webp"), "WEBP", quality=92)
        os.remove(temp_png3)
        print("Generated ui-budgeting-app-pay-schedule.webp")
        page.close()

        browser.close()

if __name__ == "__main__":
    generate_all()

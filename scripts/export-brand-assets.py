import os
from playwright.sync_api import sync_playwright

ASSETS_DIR = r"c:\Users\Hp\Downloads\hourly-wage-converter-vercel\brand-assets"

def export_assets():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        
        # 1. Render logo.png (4x scale: 904 x 168 px)
        page = browser.new_page(viewport={"width": 904, "height": 168}, device_scale_factor=1)
        with open(os.path.join(ASSETS_DIR, "logo.svg"), "r", encoding="utf-8") as f:
            svg_content = f.read()
        page.set_content(f"""<!DOCTYPE html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; }}
  svg {{ width: 100%; height: 100%; }}
</style>
</head>
<body>
{svg_content}
</body>
</html>""")
        page.wait_for_timeout(500)
        page.screenshot(path=os.path.join(ASSETS_DIR, "logo.png"), omit_background=True)
        print("Exported logo.png")
        page.close()

        # 2. Render logo-dark.png (4x scale: 904 x 168 px)
        page = browser.new_page(viewport={"width": 904, "height": 168}, device_scale_factor=1)
        with open(os.path.join(ASSETS_DIR, "logo-dark.svg"), "r", encoding="utf-8") as f:
            svg_content = f.read()
        page.set_content(f"""<!DOCTYPE html>
<html>
<head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; }}
  svg {{ width: 100%; height: 100%; }}
</style>
</head>
<body>
{svg_content}
</body>
</html>""")
        page.wait_for_timeout(500)
        page.screenshot(path=os.path.join(ASSETS_DIR, "logo-dark.png"), omit_background=True)
        print("Exported logo-dark.png")
        page.close()

        # 3. Render logo-mark.png (512 x 512 px)
        page = browser.new_page(viewport={"width": 512, "height": 512}, device_scale_factor=1)
        with open(os.path.join(ASSETS_DIR, "logo-mark.svg"), "r", encoding="utf-8") as f:
            svg_content = f.read()
        page.set_content(f"""<!DOCTYPE html>
<html>
<head>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; }}
  svg {{ width: 100%; height: 100%; }}
</style>
</head>
<body>
{svg_content}
</body>
</html>""")
        page.wait_for_timeout(200)
        page.screenshot(path=os.path.join(ASSETS_DIR, "logo-mark.png"), omit_background=True)
        print("Exported logo-mark.png")
        page.close()

        # 4. Render favicon-512x512.png
        page = browser.new_page(viewport={"width": 512, "height": 512}, device_scale_factor=1)
        with open(os.path.join(ASSETS_DIR, "favicon.svg"), "r", encoding="utf-8") as f:
            svg_content = f.read()
        page.set_content(f"""<!DOCTYPE html>
<html>
<head>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; }}
  svg {{ width: 100%; height: 100%; }}
</style>
</head>
<body>
{svg_content}
</body>
</html>""")
        page.wait_for_timeout(200)
        page.screenshot(path=os.path.join(ASSETS_DIR, "favicon-512x512.png"), omit_background=True)
        print("Exported favicon-512x512.png")
        page.close()

        # 5. Render favicon-192x192.png
        page = browser.new_page(viewport={"width": 192, "height": 192}, device_scale_factor=1)
        page.set_content(f"""<!DOCTYPE html>
<html>
<head>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; }}
  svg {{ width: 100%; height: 100%; }}
</style>
</head>
<body>
{svg_content}
</body>
</html>""")
        page.wait_for_timeout(200)
        page.screenshot(path=os.path.join(ASSETS_DIR, "favicon-192x192.png"), omit_background=True)
        print("Exported favicon-192x192.png")
        page.close()

        # 6. Render favicon-32x32.png
        page = browser.new_page(viewport={"width": 32, "height": 32}, device_scale_factor=1)
        page.set_content(f"""<!DOCTYPE html>
<html>
<head>
<style>
  * {{ margin: 0; padding: 0; box-sizing: border-box; }}
  body {{ background: transparent; overflow: hidden; display: flex; align-items: center; justify-content: center; height: 100vh; }}
  svg {{ width: 100%; height: 100%; }}
</style>
</head>
<body>
{svg_content}
</body>
</html>""")
        page.wait_for_timeout(200)
        page.screenshot(path=os.path.join(ASSETS_DIR, "favicon-32x32.png"), omit_background=True)
        print("Exported favicon-32x32.png")
        page.close()

        browser.close()

if __name__ == "__main__":
    export_assets()

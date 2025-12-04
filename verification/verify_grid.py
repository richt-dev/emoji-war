from playwright.sync_api import sync_playwright

def verify_grid(page):
    page.goto("http://localhost:5173")
    # Wait for the grid scene to load and the canvas to be present
    page.wait_for_selector("canvas")

    # Wait a bit for the grid to render
    page.wait_for_timeout(2000)

    # Take a screenshot
    page.screenshot(path="verification/grid_verification.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            verify_grid(page)
        finally:
            browser.close()

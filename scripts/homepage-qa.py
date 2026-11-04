"""Local browser verification for the homepage interactions requested 2026-11-03.

Uses installed Python Playwright; blocks all non-local requests and never submits forms.
Run against the production preview: python scripts/homepage-qa.py
"""
import asyncio
import json
from pathlib import Path
from urllib.parse import urlsplit
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "docs/figma-audit/home-interactions"
BASE = "http://127.0.0.1:4322"


async def block_external(route):
    if urlsplit(route.request.url).hostname in ("127.0.0.1", "localhost"):
        await route.continue_()
    else:
        await route.abort()


async def center(page, selector, index=0, offset=0):
    await page.locator(selector).nth(index).evaluate(
        "(el, offset) => {const r=el.getBoundingClientRect();window.scrollTo({top:window.scrollY+r.top+r.height/2-window.innerHeight*.55+offset,behavior:'instant'})}",
        offset,
    )
    await page.wait_for_timeout(220)


async def run():
    OUT.mkdir(exist_ok=True)
    results = []
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        for width in (1440, 1024, 768, 393, 360, 320):
            touch = width < 900
            context = await browser.new_context(viewport={"width": width, "height": 900}, has_touch=touch)
            await context.route("**/*", block_external)
            page = await context.new_page()
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            await page.goto(BASE, wait_until="networkidle")
            await page.evaluate("document.fonts.ready")
            await page.screenshot(path=str(OUT / f"hero-{width}.png"))
            assert await page.locator(".hm-hero__img").evaluate("(im) => im.naturalWidth > 0")
            if touch:
                assert await page.locator(".hm-hero__img").evaluate("(im) => im.currentSrc.endsWith('hero-mobile.webp')")

            # Hover/focus/click each supplied phone composition, including text and expansion state.
            await page.locator("#pp-tabs button").nth(1).click()
            for i, asset in enumerate(("preview-calendar", "preview-booking", "preview-membership")):
                button = page.locator('[data-acc="1"] .hm-pp__item').nth(i)
                if touch:
                    await button.tap()
                else:
                    await button.hover()
                await page.wait_for_function("(asset) => document.querySelector('#pp-img').currentSrc.includes(asset)", arg=asset)
                await page.locator("#pp-img").evaluate("(im) => im.decode()")
                assert await button.get_attribute("aria-expanded") == "true"
                assert await page.locator('[data-acc="1"] .hm-pp__item[aria-expanded="true"]').count() == 1
                assert await button.locator(".desc").is_visible()
                if width in (1440, 393):
                    await page.locator("#product").screenshot(path=str(OUT / f"preview-{i}-{width}.png"))
            await page.locator("#pp-tabs button").nth(0).focus()
            await page.keyboard.press("Enter")
            assert await page.locator("#pp-img").get_attribute("src") == "/assets/home/preview-calendar.webp"
            await page.keyboard.press("ArrowRight")
            assert await page.locator("#pp-tabs button").nth(1).get_attribute("aria-selected") == "true"
            await page.locator('[data-acc="1"] .hm-pp__item').nth(1).focus()
            assert "preview-booking" in await page.locator("#pp-img").get_attribute("src")

            # Six complete slides; one visible, with meaningful heading and chips each time.
            titles = []
            for i in range(6):
                await page.locator("[data-glance] [data-go]").nth(i).click()
                slide = page.locator(".hm-gl__slide.is-on")
                assert await slide.count() == 1
                assert await slide.locator(".hm-gl__chips span").count() >= 1
                titles.append(await slide.locator("h3").inner_text())
                assert await slide.evaluate("(el) => el.getBoundingClientRect().bottom <= el.closest('[data-glance]').getBoundingClientRect().bottom")
                if width in (1440, 393):
                    await page.locator("[data-glance]").screenshot(path=str(OUT / f"glance-{i}-{width}.png"))
            assert len(set(titles)) == 6
            await page.locator('[data-glance] [data-dir="1"]').focus()
            await page.keyboard.press("Enter")
            assert await page.locator("[data-glance]").get_attribute("data-active") == "5"
            await page.keyboard.press("Home")
            assert await page.locator("[data-glance]").get_attribute("data-active") == "0"
            await page.keyboard.press("ArrowRight")
            assert await page.locator("[data-glance]").get_attribute("data-active") == "1"
            if width == 393:
                await page.keyboard.press("Home")
                box = await page.locator("[data-glance]").bounding_box()
                session = await context.new_cdp_session(page)
                start_x, y = box["x"] + box["width"] * .8, box["y"] + box["height"] / 2
                await session.send("Input.dispatchTouchEvent", {"type": "touchStart", "touchPoints": [{"x": start_x, "y": y}]})
                for dx in (20, 50, 90):
                    await session.send("Input.dispatchTouchEvent", {"type": "touchMove", "touchPoints": [{"x": start_x - dx, "y": y}]})
                await session.send("Input.dispatchTouchEvent", {"type": "touchEnd", "touchPoints": []})
                assert await page.locator("[data-glance]").get_attribute("data-active") == "1"

            # Avoid a stationary mouse selecting a card while scroll position changes.
            await page.mouse.move(0, 0)
            for i in (0, 1, 2, 1, 0):
                await center(page, ".hm-pstep", i)
                assert await page.locator(".hm-pstep.is-dark").count() == 1
                assert "is-dark" in await page.locator(".hm-pstep").nth(i).get_attribute("class")
                if width in (1440, 393):
                    await page.screenshot(path=str(OUT / f"problem-{i}-{width}.png"))

            # Setup: scroll and reverse-scroll, then keyboard/tap inspection.
            for i in (0, 1, 2, 3, 1):
                await center(page, "[data-setup-progress] .hm-setup__mark", i, 35)
                count = await page.locator("[data-setup-progress] .is-complete").count()
                assert count == i + 1, (width, i, count)
            marks = page.locator("[data-setup-progress] .hm-setup__mark")
            await marks.nth(2).focus()
            assert await page.locator("[data-setup-progress] .is-complete").count() == 3
            if touch:
                await marks.nth(0).tap()
                assert await page.locator("[data-setup-progress] .is-complete").count() == 1
            if width in (1440, 393):
                await page.locator("[data-setup-progress]").screenshot(path=str(OUT / f"setup-{width}.png"))

            # Every logo is named, reachable and shows its category on keyboard focus.
            for tile in await page.locator(".hm-grid__tile").all():
                await tile.focus()
                assert await tile.locator(".hm-grid__tip").is_visible()
                assert await tile.get_attribute("aria-label")
                assert await tile.evaluate("(el) => {const r=el.getBoundingClientRect();return r.left>=0 && r.right<=innerWidth}")
            trackman = page.locator('.hm-grid__tile[aria-label^="TrackMan"]')
            if not touch:
                await trackman.hover()
                assert await trackman.locator("img").first.evaluate("(el) => getComputedStyle(el).filter") == "none"
            if width in (1440, 393):
                await page.locator(".hm-logos").screenshot(path=str(OUT / f"logos-{width}.png"))

            # Mobile navigation remains functional after the changed hero and focusable logos.
            if touch:
                toggle = page.locator("button[data-bd-menu]")
                await toggle.click()
                assert await toggle.get_attribute("aria-expanded") == "true"
                await page.keyboard.press("Escape")
                assert await toggle.get_attribute("aria-expanded") == "false"

            await page.locator("#pp-tabs button").first.click()
            await page.evaluate("window.scrollTo(0,0)")
            await page.wait_for_timeout(200)
            broken = await page.locator("img").evaluate_all("(imgs) => imgs.filter(i=>i.complete && !i.naturalWidth).map(i=>i.src)")
            assert not broken, broken
            assert not errors, errors
            assert await page.evaluate("document.documentElement.scrollWidth <= innerWidth"), width
            await page.screenshot(path=str(OUT / f"home-{width}.png"), full_page=True)
            results.append({"width": width, "touch": touch, "consoleExceptions": errors, "brokenImages": broken, "slides": titles, "passed": True})
            await context.close()

        context = await browser.new_context(viewport={"width": 393, "height": 900}, reduced_motion="reduce")
        await context.route("**/*", block_external)
        page = await context.new_page()
        await page.goto(BASE, wait_until="networkidle")
        await center(page, ".hm-pstep", 1)
        assert "is-dark" in await page.locator(".hm-pstep").nth(1).get_attribute("class")
        await center(page, "[data-setup-progress] .hm-setup__mark", 1, 35)
        assert await page.locator("[data-setup-progress] .is-complete").count() == 2
        assert await page.locator(".hm-pstep__card").first.evaluate("(el) => parseFloat(getComputedStyle(el).transitionDuration) < .01")
        await context.close()
        await browser.close()
        results.append({"reducedMotion": True, "passed": True})
    (OUT / "report.json").write_text(json.dumps(results, indent=2), encoding="utf-8")
    print(json.dumps({"passed": len(results), "report": str(OUT / "report.json")}))


if __name__ == "__main__":
    asyncio.run(run())

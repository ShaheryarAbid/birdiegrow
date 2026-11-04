"""Local-only route, asset, responsive, and screenshot audit using installed Python Playwright.

Run after npm run build and npm run preview -- --host 127.0.0.1 --port 4322.
External requests are blocked; this never submits a real lead or contacts analytics.
"""
import argparse
import asyncio
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
AUDIT = ROOT / "docs/figma-audit"
REPRESENTATIVES = [
    "/", "/features/", "/features/bay-booking/", "/features/bay-agent/",
    "/features/memberships/", "/features/leagues-events/", "/features/door-access/",
    "/features/mobile-app/", "/venue-website/", "/revenue/", "/sms/", "/platform/",
    "/pricing/", "/customers/", "/integrations/", "/integrations/kisi/",
    "/integrations/remotelock/", "/compare/", "/birdie-vs-avus-systems/",
    "/resources/", "/resources/how-to-start-a-golf-simulator-business/",
    "/resources/golf-simulator-business-guide/", "/resources/golf-simulator-business-faq/",
    "/resources/calculators/", "/resources/startup-cost-calculator/",
    "/resources/revenue-calculator/", "/resources/break-even-calculator/",
    "/resources/membership-pricing-calculator/", "/blog/",
    "/blog/golf-simulator-booking-software-guide/", "/golf-simulator-software/",
    "/golf-simulator-booking-software/", "/golf-simulator-management-software/",
    "/best-golf-simulator-software/", "/contact/", "/demo/", "/book-demo/",
    "/book-a-demo/", "/lpbookingsystem/", "/lpadvertising/",
    "/privacy/", "/terms/", "/sms-terms/", "/404.html",
]


class Document(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.links, self.assets, self.ids = [], [], set()
        self.feed(path.read_text(encoding="utf-8"))

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if "id" in a:
            self.ids.add(a["id"])
        if tag == "a" and a.get("href"):
            self.links.append(a["href"])
        if tag in ("img", "script") and a.get("src"):
            self.assets.append(a["src"])


def static_audit():
    dist = ROOT / "dist"
    documents = {}
    for path in dist.rglob("*.html"):
        relative = path.relative_to(dist).as_posix()
        route = "/" + relative.replace("index.html", "")
        documents[route] = Document(path)
    problems = []
    for route, doc in documents.items():
        for kind, urls in [("link", doc.links), ("asset", doc.assets)]:
            for url in urls:
                parts = urlsplit(url)
                if parts.scheme or parts.netloc or not parts.path.startswith("/"):
                    continue
                path = unquote(parts.path)
                target = dist / path.lstrip("/")
                exists = target.is_file() or (target / "index.html").is_file()
                if not exists:
                    problems.append({"route": route, "kind": kind, "target": url})
                elif parts.fragment and kind == "link":
                    linked = documents.get(path if path.endswith("/") else path + "/")
                    if linked and unquote(parts.fragment) not in linked.ids:
                        problems.append({"route": route, "kind": "anchor", "target": url})
    return sorted(documents), problems


async def main(args):
    output = AUDIT / args.phase
    output.mkdir(exist_ok=True)
    routes, broken = static_audit()
    targets = routes if args.all else [r for r in REPRESENTATIVES if r in routes]
    results = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(channel="chrome", headless=True)
        semaphore = asyncio.Semaphore(4)

        async def check(route, width):
            async with semaphore:
                context = await browser.new_context(
                    viewport={"width": width, "height": 900},
                    device_scale_factor=1, reduced_motion="reduce",
                )
                await context.route("**/*", lambda r: r.continue_() if r.request.url.startswith((args.url, "data:", "blob:")) else r.abort())
                page = await context.new_page()
                errors, missing, console = [], [], []
                page.on("pageerror", lambda error: errors.append(str(error)))
                page.on("console", lambda message: console.append(message.text) if message.type == "error" and "ERR_FAILED" not in message.text else None)
                page.on("response", lambda response: missing.append(response.url) if response.status >= 400 and response.url.startswith(args.url) else None)
                try:
                    response = await page.goto(args.url + route, wait_until="load", timeout=30000)
                    await page.evaluate("document.fonts.ready")
                    # Load every lazy image without relying on a scroll animation.
                    await page.evaluate("""async () => {
                        document.querySelectorAll('img[loading="lazy"]').forEach(i => i.loading = 'eager');
                        await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
                    }""")
                    metrics = await page.evaluate("""() => ({
                        title: document.title,
                        width: document.documentElement.scrollWidth,
                        height: document.documentElement.scrollHeight,
                        h1: document.querySelectorAll('h1').length,
                        main: document.querySelectorAll('main').length,
                        brokenImages: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.getAttribute('src')),
                        overflow: [...document.querySelectorAll('main *,header,footer')].filter(e => {
                            const r = e.getBoundingClientRect();
                            if (!r.width || !r.height || getComputedStyle(e).position === 'absolute') return false;
                            let parent=e.parentElement;
                            while(parent) {
                                if (['hidden','clip','auto','scroll'].includes(getComputedStyle(parent).overflowX)) return false;
                                parent=parent.parentElement;
                            }
                            return r.right > innerWidth+1 || r.left < -1;
                        }).slice(0,12).map(e => e.tagName+'.'+e.className),
                        noindex: document.querySelector('meta[name=robots]')?.content || '',
                        canonical: document.querySelector('link[rel=canonical]')?.href || ''
                    })""")
                    if args.screenshots and route in REPRESENTATIVES:
                        name = route.strip("/").replace("/", "--").replace(".html", "") or "home"
                        await page.screenshot(path=str(output / f"{name}-{width}.png"), full_page=True, animations="disabled")
                    results.append({"route": route, "viewport": width, "status": response.status, **metrics, "errors": errors, "console": console, "missing": missing})
                except Exception as error:
                    results.append({"route": route, "viewport": width, "error": str(error)})
                await context.close()

        await asyncio.gather(*(check(r, w) for r in targets for w in args.widths))
        await browser.close()
    results.sort(key=lambda x: (x["route"], x["viewport"]))
    report = {"url": args.url, "routes": len(routes), "checked": len(results), "brokenLinks": broken, "pages": results}
    (output / "report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
    issues = [r for r in results if r.get("error") or r.get("errors") or r.get("brokenImages") or r.get("width", 0) > r["viewport"] or r.get("main") != 1]
    print(json.dumps({"routes": len(routes), "checks": len(results), "brokenLinks": len(broken), "issues": len(issues), "report": str(output / "report.json")}))


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--url", default="http://127.0.0.1:4322")
    parser.add_argument("--phase", default="qa")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--screenshots", action="store_true")
    parser.add_argument("--widths", type=int, nargs="+", default=[1440, 768, 393])
    asyncio.run(main(parser.parse_args()))

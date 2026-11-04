"""Local discovery helpers. Reads, but never modifies, the supplied design export."""
from pathlib import Path
from collections import Counter
import hashlib
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
AUDIT = ROOT / "docs/figma-audit"


def main():
    source = ROOT / "design-references/css.txt"
    css = source.read_text(encoding="utf-8")
    metadata = (AUDIT / "evidence/target-metadata.xml").read_text(encoding="utf-8")
    tree = ET.fromstring(metadata[:metadata.rfind("</section>") + 10])
    blocks = list(re.finditer(r"/\* ([^\n]*?) \*/", css))
    candidates = {}
    for i, block in enumerate(blocks):
        body = css[block.end():blocks[i + 1].start() if i + 1 < len(blocks) else len(css)]
        candidates.setdefault(block.group(1), []).append((block.start(), body))
    frames = []
    for node in tree:
        if node.tag != "frame":
            continue
        match = None
        # Figma inserts an "Auto layout" comment between a frame name and its CSS.
        for offset, _ in candidates.get(node.get("name"), []):
            snippet = css[offset:offset + 650]
            x = re.search(r"\nleft: ([\d.-]+)px;", snippet)
            y = re.search(r"\ntop: ([\d.-]+)px;", snippet)
            if x and y and abs(float(x[1]) - float(node.get("x"))) < 0.02 and abs(float(y[1]) - float(node.get("y"))) < 0.02:
                match = offset
                break
        frames.append({
            **node.attrib,
            "cssOffset": match,
            "cssStartLine": css.count("\n", 0, match) + 1 if match is not None else None,
            "sections": [dict(child.attrib) for child in node],
        })
    offsets = sorted(f["cssOffset"] for f in frames if f["cssOffset"] is not None)
    for frame in frames:
        offset = frame["cssOffset"]
        if offset is not None:
            end = next((i for i in offsets if i > offset), len(css))
            frame["cssEndLine"] = css.count("\n", 0, end)
            frame["cssEndOffset"] = end
    (AUDIT / "evidence/frame-index.json").write_text(json.dumps(frames, indent=2), encoding="utf-8")
    tokens = {
        "sha256": hashlib.sha256(source.read_bytes()).hexdigest(),
        "bytes": source.stat().st_size,
        "lines": len(css.splitlines()),
        "frames": len(frames),
        "matchedFrames": sum(f["cssOffset"] is not None for f in frames),
        "fonts": Counter(re.findall(r"font-family:\s*([^;]+)", css)),
        "fontSizes": Counter(re.findall(r"font-size:\s*([^;]+)", css)),
        "colors": Counter(re.findall(r"(?<!\w)#[0-9A-Fa-f]{6,8}\b", css)),
        "images": Counter(re.findall(r"background:\s*url\(([^\n]*)\)", css)),
    }
    (AUDIT / "evidence/reference-summary.json").write_text(json.dumps(tokens, indent=2, ensure_ascii=False), encoding="utf-8")
    source_files = []
    for directory in ["src", "functions", "scripts"]:
        for path in sorted((ROOT / directory).rglob("*")):
            if not path.is_file():
                continue
            text = path.read_text(encoding="utf-8", errors="replace")
            source_files.append({
                "path": path.relative_to(ROOT).as_posix(),
                "lines": len(text.splitlines()),
                "imports": re.findall(r"import .*?from ['\"]([^'\"]+)", text),
                "components": sorted(set(re.findall(r"<([A-Z]\w+)", text))),
                "scripts": text.count("<script"),
                "forms": text.count("<form"),
                "headings": re.findall(r"<h[12][^>]*>([^<]+)", text),
                "staticAssets": sorted(set(re.findall(r"['\"](/assets/[^'\"`{}]+)", text))),
            })
    (AUDIT / "evidence/source-inventory.json").write_text(json.dumps(source_files, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Indexed {len(frames)} Figma frames; matched {tokens['matchedFrames']} CSS ranges; {len(source_files)} source/content files.")
    print(f"Reference checksum: {tokens['sha256']}")


if __name__ == "__main__":
    main()

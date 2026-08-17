import sys
import argparse
from pathlib import Path

import pymupdf


def _clean(text: str) -> str:
    text = text.replace("\xa0", " ")
    lines = [l.strip() for l in text.splitlines()]
    return "\n".join(l for l in lines if l)


def _table_to_markdown(table) -> str:
    rows = table.extract()
    if not rows:
        return ""
    ncols = max(len(r) for r in rows)
    def cell(c):
        if c is None:
            return ""
        return str(c).replace("\n", "<br>").replace("|", "\\|").strip()
    lines = []
    for i, row in enumerate(rows):
        cells = [cell(c) for c in row] + [""] * (ncols - len(row))
        lines.append("| " + " | ".join(cells) + " |")
        if i == 0:
            lines.append("|" + "---|" * ncols)
    return "\n".join(lines)


def _page_to_markdown(page) -> str:
    out = []

    tables = page.find_tables()
    table_boxes = [(t.bbox, t) for t in tables.tables]

    d = page.get_text("dict")
    for b in d["blocks"]:
        if b["type"] != 0:
            continue
        bbox = (b["bbox"][0], b["bbox"][1], b["bbox"][2], b["bbox"][3])
        text = _clean(b.get("text", ""))
        if not text:
            continue
        if text.isdigit() and len(text) <= 4:
            continue
        in_table = False
        for tbox, _t in table_boxes:
            if (bbox[0] >= tbox[0] - 1 and bbox[1] >= tbox[1] - 1
                    and bbox[2] <= tbox[2] + 1 and bbox[3] <= tbox[3] + 1):
                in_table = True
                break
        if in_table:
            continue
        max_size = max(s["size"] for l in b["lines"] for s in l["spans"])
        if max_size >= 13.0:
            out.append(f"## {text}")
        else:
            out.append(text)

    for tbox, t in sorted(table_boxes, key=lambda x: (x[0][1], x[0][0])):
        md = _table_to_markdown(t)
        if md:
            out.append(md)

    return "\n\n".join(out)


def convert_pdf_to_markdown(input_path: str, output_path: str = None):
    input_file = Path(input_path).resolve()
    if not input_file.exists():
        print(f"Error: File not found at '{input_file}'")
        return False

    print(f"Converting: {input_file}")
    doc = pymupdf.open(str(input_file))
    parts = []
    for i, page in enumerate(doc):
        parts.append(_page_to_markdown(page))
        print(f"  page {i + 1}/{doc.page_count} done")

    md = "\n\n---\n\n".join(parts)

    if not output_path:
        output_file = input_file.with_suffix(".md")
    else:
        output_file = Path(output_path).resolve()
    output_file.parent.mkdir(parents=True, exist_ok=True)
    output_file.write_text(md, encoding="utf-8")

    print(f"\n[SUCCESS] Conversion completed successfully!")
    print(f"Output saved to: {output_file}")
    return True


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Convert PDF to Markdown using PyMuPDF (no OCR, no model downloads).")
    parser.add_argument("input", nargs="?", help="Path to the input PDF file")
    parser.add_argument("-o", "--output", help="Path to the output Markdown file (optional)")
    args = parser.parse_args()

    if not args.input:
        print("=== PyMuPDF PDF to Markdown Converter ===")
        input_path = input("Enter path to PDF file: ").strip().strip('"\'')
        if not input_path:
            print("No input file provided. Exiting.")
            sys.exit(1)
        output_path = input("Enter output MD path (Press Enter to save in same folder): ").strip().strip('"\'')
        if not output_path:
            output_path = None
        convert_pdf_to_markdown(input_path, output_path)
    else:
        convert_pdf_to_markdown(args.input, args.output)
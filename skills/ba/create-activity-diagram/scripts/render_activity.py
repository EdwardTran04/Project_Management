#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
render_activity.py — Sinh Activity Diagram / User Flow dạng .drawio (+ SVG preview)
từ một spec JSON gọn. Chỉ dùng thư viện chuẩn, KHÔNG cần mạng.

Dùng:
    python3 render_activity.py <spec.json> <output_basename>
    => tạo <output_basename>.drawio  và  <output_basename>.svg

Model chỉ cần viết spec; mọi toạ độ, màu, shape, edge, scope box, legend và
badge trigger DB do script này tính/định dạng. Xem references/spec-schema.md.
"""
import sys, json, html

# ---------- Bảng màu cố định (fill, stroke, fontColor) ----------
PALETTE = {
    "neutral":    ("#f5f5f5", "#999999", "#333333"),
    "decision":   ("#fff2cc", "#d6b656", "#7d6608"),
    "branch1":    ("#d5e8d4", "#82b366", "#274e13"),
    "branch2":    ("#FAECE7", "#D85A30", "#7a2e12"),
    "server":     ("#E8E6FC", "#7F77DD", "#2f2a7a"),
    "app":        ("#E1F5EE", "#1D9E75", "#0d5a42"),
    "external":   ("#dae8fc", "#6c8ebf", "#1f3a5f"),
    "error":      ("#f8cecc", "#b85450", "#7a2520"),
    "data_read":  ("#DEF7E5", "#2E9E5B", "#176b3a"),
    "data_write": ("#FFE6D5", "#E07A3F", "#8a3d12"),
}
LEGEND_LABELS = {
    "neutral": "Bước chung", "decision": "Điểm rẽ nhánh",
    "branch1": "Nhánh chính", "branch2": "Nhánh phụ",
    "app": "App xử lý", "server": "Hệ thống / Server",
    "external": "Hệ thống ngoài (3rd party)", "error": "Lỗi / Thông báo lỗi",
    "data_read": "Đọc dữ liệu (bảng)", "data_write": "Lưu dữ liệu (bảng)",
    "scope": "Phạm vi hệ thống",
}
LEGEND_ORDER = ["neutral","decision","branch1","branch2","app","server",
                "external","error","data_read","data_write","scope"]

# ---------- Kích thước (px) ----------
MARGIN_X, MARGIN_TOP = 40, 40
LANE_W = 320
STEP_W, STEP_H = 210, 46
DEC_W, DEC_H = 130, 80
TERM, MERGE = 26, 28
ROW_GAP = 48
BADGE_H, BADGE_GAP = 20, 4
SCOPE_PAD = 16          # đủ nhỏ để 2 scope ở 2 hàng liền kề không đè nhau


def esc(s):
    return html.escape(str(s), quote=True)


def node_size(n):
    t = n["type"]
    if t in ("start", "end"):
        return (TERM, TERM)
    if t == "decision":
        return (DEC_W, DEC_H)
    if t == "merge":
        return (MERGE, MERGE)
    return (STEP_W, STEP_H)


def badge_count(n):
    return (1 if n.get("reads") else 0) + (1 if n.get("writes") else 0)


def write_labels(writes):
    out = []
    for w in writes:
        if isinstance(w, dict):
            op = w.get("op", "")
            out.append(w.get("table", "") + (f" ({op})" if op else ""))
        else:
            out.append(str(w))
    return out


def svg_text(S, text, cx, cy, color, size, bold, maxw):
    """Text căn giữa, tự ngắt tối đa 2 dòng (xấp xỉ — chỉ cho SVG preview)."""
    text = str(text)
    cpl = max(6, int(maxw / (size * 0.55)))
    if len(text) <= cpl:
        lines = [text]
    else:
        lines, cur = [], ""
        for w in text.split():
            if len(cur) + len(w) + 1 <= cpl:
                cur = (cur + " " + w).strip()
            else:
                lines.append(cur)
                cur = w
        if cur:
            lines.append(cur)
        lines = lines[:2]
    fw = ' font-weight="bold"' if bold else ''
    start = cy - (len(lines) - 1) * size * 0.6
    for i, ln in enumerate(lines):
        y = start + i * size * 1.2 + size * 0.35
        S.append(f'<text x="{cx:.0f}" y="{y:.0f}" font-size="{size}" '
                 f'text-anchor="middle"{fw} fill="{color}">{esc(ln)}</text>')


def main():
    if len(sys.argv) < 3:
        print("Dùng: python3 render_activity.py <spec.json> <output_basename>")
        sys.exit(1)
    spec_path, out_base = sys.argv[1], sys.argv[2]
    spec = json.load(open(spec_path, encoding="utf-8"))
    nodes = spec.get("nodes", [])
    edges = spec.get("edges", [])
    scopes = spec.get("scopes", [])
    title = spec.get("title", "Activity Diagram")

    # --- lanes & rows ---
    lanes = [n.get("lane", 0) for n in nodes] or [0]
    min_lane = min(lanes)
    n_lanes = (max(lanes) - min_lane) + 1

    rows = {}
    for n in nodes:
        rows.setdefault(n.get("row", 0), []).append(n)
    max_row = max(rows) if rows else 0

    row_h = {}
    for r in range(max_row + 1):
        h = 0
        for n in rows.get(r, []):
            _, nh = node_size(n)
            h = max(h, nh + badge_count(n) * (BADGE_H + BADGE_GAP))
        row_h[r] = h or STEP_H

    row_y, y = {}, MARGIN_TOP
    for r in range(max_row + 1):
        row_y[r] = y
        y += row_h[r] + ROW_GAP
    content_bottom = y

    geo = {}
    for n in nodes:
        w, h = node_size(n)
        col_left = MARGIN_X + (n.get("lane", 0) - min_lane) * LANE_W
        geo[n["id"]] = [col_left + (LANE_W - w) / 2, row_y[n.get("row", 0)], w, h]

    cells = []
    _id = [10]

    def nid():
        _id[0] += 1
        return "n%d" % _id[0]

    # --- scope containers (vẽ trước => nằm dưới) ---
    scope_geo = {}
    for sc in scopes:
        members = [n for n in nodes if n.get("scope") == sc["name"]]
        if not members:
            continue
        xs, ys = [], []
        for n in members:
            gx, gy, gw, gh = geo[n["id"]]
            ys += [gy, gy + gh + badge_count(n) * (BADGE_H + BADGE_GAP)]
            xs += [gx, gx + gw]
        x0, y0 = min(xs) - SCOPE_PAD, min(ys) - SCOPE_PAD - 14
        x1, y1 = max(xs) + SCOPE_PAD, max(ys) + SCOPE_PAD
        _, stroke, _fc = PALETTE.get(sc.get("color", "neutral"), PALETTE["neutral"])
        scope_geo[sc["name"]] = (x0, y0, x1 - x0, y1 - y0, stroke)
        cells.append(
            f'<mxCell id="{nid()}" value="{esc(sc["name"])}" '
            f'style="rounded=1;fillColor=none;strokeColor={stroke};dashed=1;dashPattern=8 4;'
            f'verticalAlign=top;align=left;fontSize=10;fontStyle=1;fontColor={stroke};'
            f'spacingLeft=8;spacingTop=4;" vertex="1" parent="1">'
            f'<mxGeometry x="{x0:.0f}" y="{y0:.0f}" width="{x1-x0:.0f}" height="{y1-y0:.0f}" as="geometry"/></mxCell>')

    # --- edges ---
    for e in edges:
        if e["from"] not in geo or e["to"] not in geo:
            continue
        if e.get("kind") == "error":
            st = ("edgeStyle=orthogonalEdgeStyle;rounded=0;dashed=1;strokeColor=#b85450;"
                  "fontColor=#b85450;fontSize=10;endArrow=classic;html=1;")
        else:
            st = ("edgeStyle=orthogonalEdgeStyle;rounded=0;strokeColor=#666666;"
                  "fontSize=10;endArrow=classic;html=1;")
        cells.append(
            f'<mxCell id="{nid()}" value="{esc(e.get("label",""))}" style="{st}" '
            f'edge="1" parent="1" source="{esc(e["from"])}" target="{esc(e["to"])}">'
            f'<mxGeometry relative="1" as="geometry"/></mxCell>')

    # --- nodes + badges ---
    badge_cells = []
    for n in nodes:
        x, yy, w, h = geo[n["id"]]
        t, idv = n["type"], esc(n["id"])
        if t == "start":
            st, val = "ellipse;fillColor=#333333;strokeColor=#333333;", ""
        elif t == "end":
            st, val = "ellipse;fillColor=none;strokeColor=#333333;strokeWidth=2.5;", ""
        elif t == "decision":
            fill, stroke, fc = PALETTE["decision"]
            st = (f"rhombus;whiteSpace=wrap;html=1;fillColor={fill};strokeColor={stroke};"
                  f"fontColor={fc};fontSize=11;fontStyle=1;")
            val = esc(n.get("label", ""))
        elif t == "merge":
            st, val = "rhombus;fillColor=#666666;strokeColor=#666666;", ""
        else:
            fill, stroke, fc = PALETTE.get(n.get("color", "neutral"), PALETTE["neutral"])
            st = (f"rounded=1;whiteSpace=wrap;html=1;arcSize=20;fillColor={fill};"
                  f"strokeColor={stroke};fontColor={fc};fontSize=11;fontStyle=1;")
            val = esc(n.get("label", ""))
        cells.append(
            f'<mxCell id="{idv}" value="{val}" style="{st}" vertex="1" parent="1">'
            f'<mxGeometry x="{x:.0f}" y="{yy:.0f}" width="{w:.0f}" height="{h:.0f}" as="geometry"/></mxCell>')
        if t == "end":
            dx, dy = x + w * 0.28, yy + h * 0.28
            cells.append(
                f'<mxCell id="{nid()}" value="" style="ellipse;fillColor=#333333;strokeColor=#333333;" '
                f'vertex="1" parent="1"><mxGeometry x="{dx:.0f}" y="{dy:.0f}" '
                f'width="{w*0.44:.0f}" height="{h*0.44:.0f}" as="geometry"/></mxCell>')
        if t == "step":
            by = yy + h + BADGE_GAP
            if n.get("reads"):
                fill, stroke, fc = PALETTE["data_read"]
                txt = "ĐỌC: " + ", ".join(n["reads"])
                badge_cells.append(
                    f'<mxCell id="{nid()}" value="{esc(txt)}" style="rounded=1;whiteSpace=wrap;html=1;'
                    f'arcSize=40;fillColor={fill};strokeColor={stroke};fontColor={fc};fontSize=9;'
                    f'align=left;spacingLeft=6;" vertex="1" parent="1">'
                    f'<mxGeometry x="{x:.0f}" y="{by:.0f}" width="{w:.0f}" height="{BADGE_H}" as="geometry"/></mxCell>')
                by += BADGE_H + BADGE_GAP
            if n.get("writes"):
                fill, stroke, fc = PALETTE["data_write"]
                txt = "LƯU: " + ", ".join(write_labels(n["writes"]))
                badge_cells.append(
                    f'<mxCell id="{nid()}" value="{esc(txt)}" style="rounded=1;whiteSpace=wrap;html=1;'
                    f'arcSize=40;fillColor={fill};strokeColor={stroke};fontColor={fc};fontSize=9;'
                    f'align=left;spacingLeft=6;" vertex="1" parent="1">'
                    f'<mxGeometry x="{x:.0f}" y="{by:.0f}" width="{w:.0f}" height="{BADGE_H}" as="geometry"/></mxCell>')
    cells += badge_cells

    # --- legend ---
    used = set()
    for n in nodes:
        if n["type"] == "step":
            used.add(n.get("color", "neutral"))
        if n["type"] == "decision":
            used.add("decision")
        if n.get("reads"):
            used.add("data_read")
        if n.get("writes"):
            used.add("data_write")
    if any(e.get("kind") == "error" for e in edges):
        used.add("error")
    if scope_geo:
        used.add("scope")
    used_keys = [k for k in LEGEND_ORDER if k in used]

    lx, ly = MARGIN_X, content_bottom + 10
    two_col = len(used_keys) > 4
    leg_rows = (len(used_keys) + 1) // 2 if two_col else len(used_keys)
    leg_w = 360 if two_col else 230
    leg_h = 30 + leg_rows * 22
    cells.append(
        f'<mxCell id="{nid()}" value="Chú thích" style="rounded=1;whiteSpace=wrap;html=1;'
        f'fillColor=#FAFAFA;strokeColor=#CCCCCC;verticalAlign=top;align=left;fontSize=11;'
        f'fontStyle=1;spacingLeft=8;spacingTop=6;" vertex="1" parent="1">'
        f'<mxGeometry x="{lx:.0f}" y="{ly:.0f}" width="{leg_w}" height="{leg_h}" as="geometry"/></mxCell>')
    for i, k in enumerate(used_keys):
        col = i % 2 if two_col else 0
        rr = i // 2 if two_col else i
        sx, sy = lx + 12 + col * (leg_w / 2), ly + 28 + rr * 22
        fill, stroke, _ = PALETTE.get(k, ("#ffffff", "#999999", "#000000"))
        extra = ";dashed=1;dashPattern=8 4;fillColor=none" if k == "scope" else ""
        cells.append(
            f'<mxCell id="{nid()}" value="" style="rounded=0;fillColor={fill};strokeColor={stroke}{extra};" '
            f'vertex="1" parent="1"><mxGeometry x="{sx:.0f}" y="{sy:.0f}" width="20" height="14" as="geometry"/></mxCell>')
        cells.append(
            f'<mxCell id="{nid()}" value="{esc(LEGEND_LABELS.get(k,k))}" '
            f'style="text;html=1;align=left;fontSize=10;verticalAlign=middle;" vertex="1" parent="1">'
            f'<mxGeometry x="{sx+26:.0f}" y="{sy-3:.0f}" width="{leg_w/2-40:.0f}" height="20" as="geometry"/></mxCell>')

    page_w = max(MARGIN_X * 2 + n_lanes * LANE_W, lx + leg_w + MARGIN_X)
    page_h = ly + leg_h + MARGIN_TOP

    body = "\n        ".join(cells)
    drawio = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<mxfile host="app.diagrams.net">\n'
        f'  <diagram id="activity" name="{esc(title)}">\n'
        f'    <mxGraphModel dx="1422" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" '
        f'connect="1" arrows="1" fold="1" page="1" pageScale="1" '
        f'pageWidth="{page_w:.0f}" pageHeight="{page_h:.0f}" math="0" shadow="0">\n'
        '      <root>\n'
        '        <mxCell id="0"/>\n'
        '        <mxCell id="1" parent="0"/>\n'
        f'        {body}\n'
        '      </root>\n'
        '    </mxGraphModel>\n'
        '  </diagram>\n'
        '</mxfile>\n'
    )
    open(out_base + ".drawio", "w", encoding="utf-8").write(drawio)

    # ---------- SVG preview ----------
    S = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{page_w:.0f}" height="{page_h:.0f}" '
         f'viewBox="0 0 {page_w:.0f} {page_h:.0f}" font-family="Helvetica,Arial,sans-serif">',
         '<defs>'
         '<marker id="arr" markerWidth="10" markerHeight="8" refX="7" refY="3" orient="auto">'
         '<path d="M0,0 L7,3 L0,6 Z" fill="#666666"/></marker>'
         '<marker id="arrE" markerWidth="10" markerHeight="8" refX="7" refY="3" orient="auto">'
         '<path d="M0,0 L7,3 L0,6 Z" fill="#b85450"/></marker></defs>',
         f'<rect x="0" y="0" width="{page_w:.0f}" height="{page_h:.0f}" fill="#ffffff"/>']

    for name, (sx, sy, sw, sh, stroke) in scope_geo.items():
        S.append(f'<rect x="{sx:.0f}" y="{sy:.0f}" width="{sw:.0f}" height="{sh:.0f}" '
                 f'fill="none" stroke="{stroke}" stroke-width="1.5" stroke-dasharray="8 4" rx="8"/>')
        S.append(f'<text x="{sx+8:.0f}" y="{sy+15:.0f}" font-size="10" font-weight="bold" '
                 f'fill="{stroke}">{esc(name)}</text>')

    for e in edges:
        if e["from"] not in geo or e["to"] not in geo:
            continue
        sg, tg = geo[e["from"]], geo[e["to"]]
        err = e.get("kind") == "error"
        col = "#b85450" if err else "#666666"
        dash = ' stroke-dasharray="6 4"' if err else ''
        mk = "url(#arrE)" if err else "url(#arr)"
        if tg[1] >= sg[1] + sg[3]:  # target nằm dưới
            scx, sbot = sg[0] + sg[2] / 2, sg[1] + sg[3]
            tcx, ttop = tg[0] + tg[2] / 2, tg[1]
            my = (sbot + ttop) / 2
            pts = f"{scx:.0f},{sbot:.0f} {scx:.0f},{my:.0f} {tcx:.0f},{my:.0f} {tcx:.0f},{ttop:.0f}"
            lblx, lbly = (scx + tcx) / 2, my - 4
        else:  # cạnh quay lên (back/error) -> đi vòng bên phải
            sr, scy = sg[0] + sg[2], sg[1] + sg[3] / 2
            tr, tcy = tg[0] + tg[2], tg[1] + tg[3] / 2
            xo = max(sr, tr) + 34
            pts = f"{sr:.0f},{scy:.0f} {xo:.0f},{scy:.0f} {xo:.0f},{tcy:.0f} {tr:.0f},{tcy:.0f}"
            lblx, lbly = xo, (scy + tcy) / 2
        S.append(f'<polyline points="{pts}" fill="none" stroke="{col}" stroke-width="1.4"{dash} marker-end="{mk}"/>')
        if e.get("label"):
            S.append(f'<rect x="{lblx-2:.0f}" y="{lbly-11:.0f}" width="{max(22,len(e["label"])*6.2):.0f}" '
                     f'height="14" fill="#ffffff" opacity="0.85"/>')
            S.append(f'<text x="{lblx+2:.0f}" y="{lbly:.0f}" font-size="10" fill="{col}">{esc(e["label"])}</text>')

    for n in nodes:
        x, yy, w, h = geo[n["id"]]
        t = n["type"]
        cx, cy = x + w / 2, yy + h / 2
        if t == "start":
            S.append(f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{w/2:.0f}" fill="#333333"/>')
        elif t == "end":
            S.append(f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{w/2:.0f}" fill="none" stroke="#333333" stroke-width="2.5"/>')
            S.append(f'<circle cx="{cx:.0f}" cy="{cy:.0f}" r="{w*0.22:.0f}" fill="#333333"/>')
        elif t == "decision":
            fill, stroke, fc = PALETTE["decision"]
            S.append(f'<polygon points="{cx:.0f},{yy:.0f} {x+w:.0f},{cy:.0f} {cx:.0f},{yy+h:.0f} {x:.0f},{cy:.0f}" '
                     f'fill="{fill}" stroke="{stroke}"/>')
            svg_text(S, n.get("label", ""), cx, cy, fc, 10, True, w - 6)
        elif t == "merge":
            S.append(f'<polygon points="{cx:.0f},{yy:.0f} {x+w:.0f},{cy:.0f} {cx:.0f},{yy+h:.0f} {x:.0f},{cy:.0f}" '
                     f'fill="#666666" stroke="#666666"/>')
        else:
            fill, stroke, fc = PALETTE.get(n.get("color", "neutral"), PALETTE["neutral"])
            S.append(f'<rect x="{x:.0f}" y="{yy:.0f}" width="{w:.0f}" height="{h:.0f}" rx="8" fill="{fill}" stroke="{stroke}"/>')
            svg_text(S, n.get("label", ""), cx, cy, fc, 11, True, w - 12)
        if t == "step":
            by = yy + h + BADGE_GAP
            if n.get("reads"):
                fill, stroke, fc = PALETTE["data_read"]
                S.append(f'<rect x="{x:.0f}" y="{by:.0f}" width="{w:.0f}" height="{BADGE_H}" rx="6" fill="{fill}" stroke="{stroke}"/>')
                S.append(f'<text x="{x+6:.0f}" y="{by+14:.0f}" font-size="9" fill="{fc}">{esc("ĐỌC: "+", ".join(n["reads"]))}</text>')
                by += BADGE_H + BADGE_GAP
            if n.get("writes"):
                fill, stroke, fc = PALETTE["data_write"]
                S.append(f'<rect x="{x:.0f}" y="{by:.0f}" width="{w:.0f}" height="{BADGE_H}" rx="6" fill="{fill}" stroke="{stroke}"/>')
                S.append(f'<text x="{x+6:.0f}" y="{by+14:.0f}" font-size="9" fill="{fc}">{esc("LƯU: "+", ".join(write_labels(n["writes"])))}</text>')

    S.append(f'<rect x="{lx:.0f}" y="{ly:.0f}" width="{leg_w}" height="{leg_h}" rx="6" fill="#FAFAFA" stroke="#CCCCCC"/>')
    S.append(f'<text x="{lx+8:.0f}" y="{ly+18:.0f}" font-size="11" font-weight="bold" fill="#333333">Chú thích</text>')
    for i, k in enumerate(used_keys):
        col = i % 2 if two_col else 0
        rr = i // 2 if two_col else i
        sx, sy = lx + 12 + col * (leg_w / 2), ly + 28 + rr * 22
        fill, stroke, _ = PALETTE.get(k, ("#ffffff", "#999999", "#000000"))
        if k == "scope":
            S.append(f'<rect x="{sx:.0f}" y="{sy:.0f}" width="20" height="14" fill="none" stroke="{stroke}" stroke-dasharray="6 3"/>')
        else:
            S.append(f'<rect x="{sx:.0f}" y="{sy:.0f}" width="20" height="14" fill="{fill}" stroke="{stroke}"/>')
        S.append(f'<text x="{sx+26:.0f}" y="{sy+11:.0f}" font-size="10" fill="#333333">{esc(LEGEND_LABELS.get(k,k))}</text>')

    S.append('</svg>')
    open(out_base + ".svg", "w", encoding="utf-8").write("\n".join(S))
    print(f"OK -> {out_base}.drawio + {out_base}.svg | page {int(page_w)}x{int(page_h)} | nodes={len(nodes)} edges={len(edges)}")


if __name__ == "__main__":
    main()
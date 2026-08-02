#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
render_swimlane.py — Sinh sơ đồ swimlane từ layout model JSON.

Xuất KÉP từ cùng một bộ tọa độ:
  1) <basename>.drawio  — pool/lane chuẩn draw.io, BA mở & chỉnh sửa được
  2) <basename>.svg     — ảnh vector render 1:1
  3) <basename>.png     — ảnh raster (cần cairosvg; nếu thiếu sẽ bỏ qua PNG)

Cách dùng:
  python3 render_swimlane.py <layout.json> [output_dir] [basename]

Layout model JSON (xem references/drawio-swimlane.md):
{
  "process_name": "...",
  "lanes": ["Actor 1", "Actor 2", ...],
  "nodes": [
    {"id":"A","lane":0,"col":1,"type":"task","label":"...","row":0},
    ...  # type: start|end|task|task_ok|task_err|system|external|gateway|subprocess
  ],
  "edges": [
    {"from":"A","to":"B","label":"Trạng thái đầu ra","type":"normal|error"},
    ...
  ]
}
"""
import json
import sys
import html
import os

# ---------------- Hằng số layout ----------------
POOL_X, POOL_Y = 20, 20
POOL_TITLE = 30          # thanh tiêu đề pool (ngang, trên cùng)
LANE_TITLE = 30          # tiêu đề lane (xoay dọc, bên trái)
LEFT_PAD = 30            # đệm trái trong lane (sau tiêu đề lane)
RIGHT_PAD = 30
COL_W = 200              # bề rộng một cột trình tự
ROW_H = 80               # chiều cao một hàng trong lane
LANE_PAD_TOP = 18
LANE_PAD_BOT = 18

TASK_W, TASK_H = 160, 48
GATE_W, GATE_H = 110, 70
EVT_R = 13               # bán kính start/end

# ---------------- Bảng màu theo ý nghĩa bước ----------------
STYLES = {
    "task":       {"fill": "#f5f5f5", "stroke": "#999999", "name": "Bước nghiệp vụ (user task)"},
    "task_ok":    {"fill": "#d5e8d4", "stroke": "#82b366", "name": "Bước kết quả tích cực (thông qua / hoàn thành)"},
    "task_err":   {"fill": "#f8cecc", "stroke": "#b85450", "name": "Bước exception (từ chối / trả lại / hủy)"},
    "system":     {"fill": "#E8E6FC", "stroke": "#7F77DD", "name": "System / Auto (quá hạn, callback)"},
    "external":   {"fill": "#dae8fc", "stroke": "#6c8ebf", "name": "Tích hợp hệ thống ngoài"},
    "gateway":    {"fill": "#fff2cc", "stroke": "#d6b656", "name": "Gateway (rẽ nhánh)"},
    "subprocess": {"fill": "#FFE6CC", "stroke": "#D79B00", "name": "Luồng con (subprocess)"},
}
ERR_EDGE_COLOR = "#b85450"
ALT_EDGE_COLOR = "#3D6FB8"
EDGE_COLOR = "#555555"


def esc(s):
    return html.escape(str(s), quote=True)


# ---------------- Tính tọa độ ----------------
def compute_layout(model):
    lanes = model["lanes"]
    nodes = {n["id"]: dict(n) for n in model["nodes"]}

    # Số hàng mỗi lane
    lane_rows = [1] * len(lanes)
    for n in nodes.values():
        r = n.get("row", 0)
        lane_rows[n["lane"]] = max(lane_rows[n["lane"]], r + 1)

    lane_h = [LANE_PAD_TOP + r * ROW_H + LANE_PAD_BOT for r in lane_rows]
    lane_y_rel = []  # y của lane tương đối pool (sau POOL_TITLE)
    acc = POOL_TITLE
    for h in lane_h:
        lane_y_rel.append(acc)
        acc += h

    max_col = max(n["col"] for n in nodes.values())
    pool_w = LANE_TITLE + LEFT_PAD + (max_col + 1) * COL_W + RIGHT_PAD
    pool_h = acc

    # Kích thước & tọa độ từng node (tuyệt đối theo trang; *_rel: tương đối lane)
    for n in nodes.values():
        t = n["type"]
        if t in ("start", "end"):
            w = h = EVT_R * 2
        elif t == "gateway":
            w, h = GATE_W, GATE_H
        else:
            w, h = TASK_W, TASK_H
        cx_rel = LANE_TITLE + LEFT_PAD + n["col"] * COL_W + COL_W / 2
        row = n.get("row", 0)
        cy_in_lane = LANE_PAD_TOP + row * ROW_H + ROW_H / 2
        n["w"], n["h"] = w, h
        n["x_rel"] = cx_rel - w / 2                 # tương đối lane (trục x lane = trục x pool)
        n["y_rel"] = cy_in_lane - h / 2
        n["x"] = POOL_X + n["x_rel"]                # tuyệt đối
        n["y"] = POOL_Y + lane_y_rel[n["lane"]] + n["y_rel"]
        n["cx"] = n["x"] + w / 2
        n["cy"] = n["y"] + h / 2

    return {
        "lanes": lanes, "nodes": nodes,
        "lane_h": lane_h, "lane_y_rel": lane_y_rel,
        "pool_w": pool_w, "pool_h": pool_h,
    }


# ---------------- Xuất .drawio ----------------
def build_drawio(model, L):
    name = model.get("process_name", "Quy trinh")
    cells = []
    cid = [2]

    def nid():
        cid[0] += 1
        return f"n{cid[0]}"

    pool_id = "pool1"
    pool_style = ("swimlane;html=1;childLayout=stackLayout;horizontal=1;startSize=30;"
                  "horizontalStack=0;resizeParent=1;resizeParentMax=0;collapsible=0;"
                  "swimlaneFillColor=#FFFFFF;fillColor=#FFFFFF;strokeColor=#666666;"
                  "fontSize=13;fontStyle=1;")
    cells.append(
        f'<mxCell id="{pool_id}" value="{esc(name)}" style="{pool_style}" vertex="1" parent="1">'
        f'<mxGeometry x="{POOL_X}" y="{POOL_Y}" width="{L["pool_w"]}" height="{L["pool_h"]}" as="geometry"/></mxCell>'
    )
    lane_ids = []
    for i, lane in enumerate(L["lanes"]):
        lid = f"lane{i+1}"
        lane_ids.append(lid)
        lane_style = ("swimlane;html=1;startSize=30;horizontal=0;collapsible=0;whiteSpace=wrap;"
                      "swimlaneFillColor=#FFFFFF;fillColor=#FAFAFA;strokeColor=#666666;"
                      "fontSize=11;fontStyle=1;")
        cells.append(
            f'<mxCell id="{lid}" value="{esc(lane)}" style="{lane_style}" vertex="1" parent="{pool_id}">'
            f'<mxGeometry y="{L["lane_y_rel"][i]}" width="{L["pool_w"]}" height="{L["lane_h"][i]}" as="geometry"/></mxCell>'
        )

    drawio_ids = {}
    for n in L["nodes"].values():
        lane_parent = lane_ids[n["lane"]]
        t = n["type"]
        evt_label = "verticalLabelPosition=bottom;verticalAlign=top;fontSize=10;" if n.get("label") else ""
        if t == "start":
            style = f"ellipse;html=1;fillColor=#333333;strokeColor=#333333;{evt_label}"
            did = nid(); drawio_ids[n["id"]] = did
            cells.append(f'<mxCell id="{did}" value="{esc(n.get("label",""))}" style="{style}" vertex="1" parent="{lane_parent}">'
                         f'<mxGeometry x="{n["x_rel"]:.0f}" y="{n["y_rel"]:.0f}" width="{n["w"]}" height="{n["h"]}" as="geometry"/></mxCell>')
        elif t == "end":
            outer = f"ellipse;html=1;fillColor=none;strokeColor=#333333;strokeWidth=2.5;{evt_label}"
            inner = "ellipse;html=1;fillColor=#333333;strokeColor=#333333;"
            did = nid(); drawio_ids[n["id"]] = did
            cells.append(f'<mxCell id="{did}" value="{esc(n.get("label",""))}" style="{outer}" vertex="1" parent="{lane_parent}">'
                         f'<mxGeometry x="{n["x_rel"]:.0f}" y="{n["y_rel"]:.0f}" width="{n["w"]}" height="{n["h"]}" as="geometry"/></mxCell>')
            iid = nid()
            cells.append(f'<mxCell id="{iid}" value="" style="{inner}" vertex="1" parent="{lane_parent}">'
                         f'<mxGeometry x="{n["x_rel"]+7:.0f}" y="{n["y_rel"]+7:.0f}" width="{n["w"]-14}" height="{n["h"]-14}" as="geometry"/></mxCell>')
        elif t == "gateway":
            s = STYLES["gateway"]
            style = f'rhombus;whiteSpace=wrap;html=1;fillColor={s["fill"]};strokeColor={s["stroke"]};fontSize=11;fontStyle=1;'
            did = nid(); drawio_ids[n["id"]] = did
            cells.append(f'<mxCell id="{did}" value="{esc(n.get("label",""))}" style="{style}" vertex="1" parent="{lane_parent}">'
                         f'<mxGeometry x="{n["x_rel"]:.0f}" y="{n["y_rel"]:.0f}" width="{n["w"]}" height="{n["h"]}" as="geometry"/></mxCell>')
        else:
            s = STYLES.get(t, STYLES["task"])
            label = n.get("label", "")
            sw = "2" if t == "subprocess" else "1"
            if t == "system" and not label.startswith("System"):
                label = f"System: {label}"
            style = (f'rounded=1;whiteSpace=wrap;html=1;arcSize=20;fillColor={s["fill"]};'
                     f'strokeColor={s["stroke"]};strokeWidth={sw};fontSize=11;fontStyle=1;')
            did = nid(); drawio_ids[n["id"]] = did
            cells.append(f'<mxCell id="{did}" value="{esc(label)}" style="{style}" vertex="1" parent="{lane_parent}">'
                         f'<mxGeometry x="{n["x_rel"]:.0f}" y="{n["y_rel"]:.0f}" width="{n["w"]}" height="{n["h"]}" as="geometry"/></mxCell>')

    # Edges
    for e in model["edges"]:
        a, b = L["nodes"][e["from"]], L["nodes"][e["to"]]
        et = e.get("type", "normal")
        base = "edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;fontSize=10;jettySize=auto;orthogonalLoop=1;"
        if et == "error":
            color = f"strokeColor={ERR_EDGE_COLOR};fontColor={ERR_EDGE_COLOR};dashed=1;"
        elif et == "alt":
            color = f"strokeColor={ALT_EDGE_COLOR};fontColor={ALT_EDGE_COLOR};"
        else:
            color = f"strokeColor={EDGE_COLOR};"
        # exit/entry hint đồng bộ với SVG
        kind = _route_kind(a, b, L["nodes"])
        if kind == "forward":
            hint = "exitX=1;exitY=0.5;entryX=0;entryY=0.5;"
        elif kind == "back":
            hint = "exitX=0;exitY=0.5;entryX=0.5;entryY=1;" if b["cy"] < a["cy"] \
                else "exitX=0;exitY=0.5;entryX=0.5;entryY=0;"
        elif kind == "vert_blocked":
            hint = "exitX=1;exitY=0.5;entryX=1;entryY=0.5;"
        else:
            hint = "exitX=0.5;exitY=0;entryX=0.5;entryY=1;" if b["cy"] < a["cy"] \
                else "exitX=0.5;exitY=1;entryX=0.5;entryY=0;"
        eid = nid()
        cells.append(f'<mxCell id="{eid}" value="{esc(e.get("label",""))}" style="{base}{color}{hint}" '
                     f'edge="1" parent="1" source="{drawio_ids[e["from"]]}" target="{drawio_ids[e["to"]]}">'
                     f'<mxGeometry relative="1" as="geometry"/></mxCell>')

    # Legend
    used = sorted({n["type"] for n in L["nodes"].values() if n["type"] in STYLES})
    has_err = any(e.get("type") == "error" for e in model["edges"])
    has_alt = any(e.get("type") == "alt" for e in model["edges"])
    items = [(STYLES[t]["fill"], STYLES[t]["stroke"], STYLES[t]["name"]) for t in used]
    lg_x, lg_y = POOL_X, POOL_Y + L["pool_h"] + 24
    extras = (1 if has_err else 0) + (1 if has_alt else 0)
    rows_per_col = (len(items) + 1 + extras + 1) // 2 + 1
    lg_w, lg_h = 720, 34 + rows_per_col * 24
    cells.append(f'<mxCell id="legendbox" value="" style="rounded=1;html=1;fillColor=#FAFAFA;strokeColor=#CCCCCC;" vertex="1" parent="1">'
                 f'<mxGeometry x="{lg_x}" y="{lg_y}" width="{lg_w}" height="{lg_h}" as="geometry"/></mxCell>')
    cells.append(f'<mxCell id="legendtitle" value="Chú thích" style="text;html=1;fontSize=11;fontStyle=1;" vertex="1" parent="1">'
                 f'<mxGeometry x="{lg_x+12}" y="{lg_y+6}" width="120" height="20" as="geometry"/></mxCell>')
    all_items = items + [(None, None, "Nhãn mũi tên = trạng thái đầu ra / điều kiện gateway")]
    extra_pos = len(items)
    if has_alt:
        all_items.insert(extra_pos, ("solid", ALT_EDGE_COLOR, "Nhánh alternative (mũi tên xanh dương)"))
        extra_pos += 1
    if has_err:
        all_items.insert(extra_pos, ("none", ERR_EDGE_COLOR, "Nhánh exception (nét đứt đỏ)"))
    for i, (fill, stroke, text) in enumerate(all_items):
        colx = lg_x + 12 + (i // rows_per_col) * 356
        rowy = lg_y + 32 + (i % rows_per_col) * 24
        if fill is None:
            cells.append(f'<mxCell id="lg{i}t" value="{esc(text)}" style="text;html=1;fontSize=10;" vertex="1" parent="1">'
                         f'<mxGeometry x="{colx}" y="{rowy}" width="340" height="18" as="geometry"/></mxCell>')
        elif fill in ("none", "solid"):
            dash = "dashed=1;" if fill == "none" else ""
            cells.append(f'<mxCell id="lg{i}s" value="" style="endArrow=classic;html=1;strokeColor={stroke};{dash}endFill=1;" edge="1" parent="1">'
                         f'<mxGeometry width="22" height="0" relative="1" as="geometry">'
                         f'<mxPoint x="{colx}" y="{rowy+7}" as="sourcePoint"/><mxPoint x="{colx+22}" y="{rowy+7}" as="targetPoint"/></mxGeometry></mxCell>')
            cells.append(f'<mxCell id="lg{i}t" value="{esc(text)}" style="text;html=1;fontSize=10;" vertex="1" parent="1">'
                         f'<mxGeometry x="{colx+30}" y="{rowy-2}" width="320" height="18" as="geometry"/></mxCell>')
        else:
            cells.append(f'<mxCell id="lg{i}s" value="" style="rounded=1;html=1;fillColor={fill};strokeColor={stroke};" vertex="1" parent="1">'
                         f'<mxGeometry x="{colx}" y="{rowy}" width="22" height="14" as="geometry"/></mxCell>')
            cells.append(f'<mxCell id="lg{i}t" value="{esc(text)}" style="text;html=1;fontSize=10;" vertex="1" parent="1">'
                         f'<mxGeometry x="{colx+30}" y="{rowy-2}" width="320" height="18" as="geometry"/></mxCell>')

    page_w = POOL_X + L["pool_w"] + 40
    page_h = lg_y + lg_h + 40
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net">
  <diagram id="proc1" name="{esc(name)}">
    <mxGraphModel dx="1422" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="{page_w:.0f}" pageHeight="{page_h:.0f}" math="0" shadow="0">
      <root>
        <mxCell id="0"/>
        <mxCell id="1" parent="0"/>
        {chr(10).join(cells)}
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
'''


# ---------------- Xuất .svg ----------------
def _wrap(text, max_chars):
    words, lines, cur = text.split(), [], ""
    for w in words:
        if cur and len(cur) + 1 + len(w) > max_chars:
            lines.append(cur); cur = w
        else:
            cur = f"{cur} {w}".strip()
    if cur:
        lines.append(cur)
    return lines or [""]


def _svg_text(cx, cy, text, size=11, bold=True, color="#333333", max_chars=24):
    lines = _wrap(text, max_chars)
    lh = size + 3
    y0 = cy - (len(lines) - 1) * lh / 2
    fw = ' font-weight="bold"' if bold else ""
    out = []
    for i, ln in enumerate(lines):
        out.append(f'<text x="{cx:.0f}" y="{y0 + i*lh:.0f}" text-anchor="middle" dominant-baseline="middle" '
                   f'font-family="DejaVu Sans, Helvetica, sans-serif" font-size="{size}"{fw} fill="{color}">{esc(ln)}</text>')
    return "".join(out)


def _vert_blocked(a, b, nodes):
    """Đường dọc x=a.cx giữa a và b có cắt node trung gian không?"""
    x = a["cx"]
    ylo, yhi = min(a["cy"], b["cy"]), max(a["cy"], b["cy"])
    for m in nodes.values():
        if m["id"] in (a["id"], b["id"]):
            continue
        if m["x"] - 4 < x < m["x"] + m["w"] + 4 and m["y"] < yhi and m["y"] + m["h"] > ylo:
            return True
    return False


def _route_kind(a, b, nodes):
    if b["col"] > a["col"]:
        return "forward"
    if b["col"] < a["col"]:
        return "back"
    return "vert_blocked" if _vert_blocked(a, b, nodes) else "vert"


def _edge_points(a, b, nodes):
    """Polyline + (x, y, anchor) cho label, đồng bộ exit/entry với drawio."""
    kind = _route_kind(a, b, nodes)
    if kind == "forward":  # phải nguồn → trái đích
        x1, y1 = a["x"] + a["w"], a["cy"]
        x2, y2 = b["x"], b["cy"]
        if abs(y2 - y1) < 2:
            pts = [(x1, y1), (x2, y2)]
            lab = ((x1 + x2) / 2, y1 - 11, "middle")
        else:
            xm = (x1 + x2) / 2
            pts = [(x1, y1), (xm, y1), (xm, y2), (x2, y2)]
            lab = (xm, (y1 + y2) / 2, "middle")  # trên đoạn dọc, vùng giữa 2 cột
    elif kind == "back":  # trái nguồn → đáy/đỉnh đích
        x1, y1 = a["x"], a["cy"]
        if b["cy"] < a["cy"]:
            x2, y2 = b["cx"], b["y"] + b["h"]
        else:
            x2, y2 = b["cx"], b["y"]
        pts = [(x1, y1), (x2, y1), (x2, y2)]
        lab = ((x1 + x2) / 2, y1 - 11, "middle")
    elif kind == "vert_blocked":  # cùng cột nhưng bị node chắn → vòng bên phải
        xoff = max(a["x"] + a["w"], b["x"] + b["w"]) + 28
        x1, y1 = a["x"] + a["w"], a["cy"]
        x2, y2 = b["x"] + b["w"], b["cy"]
        pts = [(x1, y1), (xoff, y1), (xoff, y2), (x2, y2)]
        lab = (xoff + 7, (y1 + y2) / 2, "start")
    else:  # cùng cột, dọc thẳng / lệch nhẹ
        if b["cy"] < a["cy"]:
            x1, y1 = a["cx"], a["y"]
            x2, y2 = b["cx"], b["y"] + b["h"]
        else:
            x1, y1 = a["cx"], a["y"] + a["h"]
            x2, y2 = b["cx"], b["y"]
        if abs(x1 - x2) < 1:
            pts = [(x1, y1), (x2, y2)]
        else:
            ym = (y1 + y2) / 2
            pts = [(x1, y1), (x1, ym), (x2, ym), (x2, y2)]
        lab = (max(x1, x2) + 8, (y1 + y2) / 2, "start")
    return pts, lab


def _label_pos(lab, tw, pts, nodes, placed):
    """Né node + label đã đặt: thử trượt dọc đoạn dọc, rồi thử lệch trái/phải đường."""
    lx, ly, anchor = lab
    M = 3  # margin

    def rect_of(x, y, anc):
        if anc == "middle":
            return x - tw / 2, y - 9
        if anc == "end":
            return x - tw, y - 9
        return x - 4, y - 9

    def collides(x, y, anc):
        rx, ry = rect_of(x, y, anc)
        for m in nodes.values():
            if rx < m["x"] + m["w"] + M and rx + tw > m["x"] - M and \
               ry < m["y"] + m["h"] + M and ry + 17 > m["y"] - M:
                return True
        for (px, py, pw) in placed:
            if rx < px + pw + M and rx + tw > px - M and ry < py + 17 + M and ry + 17 > py - M:
                return True
        return False

    if collides(lx, ly, anchor) and len(pts) == 4 and anchor == "middle":
        xm, ya, yb = pts[1][0], pts[1][1], pts[2][1]
        found = False
        for anc, x in (("middle", xm), ("end", xm - 6), ("start", xm + 8)):
            for f in (0.5, 0.3, 0.7, 0.2, 0.8, 0.45, 0.6):
                y = ya + (yb - ya) * f
                if not collides(x, y, anc):
                    lx, ly, anchor = x, y, anc
                    found = True
                    break
            if found:
                break
    px, py = rect_of(lx, ly, anchor)
    placed.append((px, py, tw))
    return lx, ly, anchor


def build_svg(model, L):
    name = model.get("process_name", "Quy trinh")
    nodes = L["nodes"]
    used = sorted({n["type"] for n in nodes.values() if n["type"] in STYLES})
    has_err = any(e.get("type") == "error" for e in model["edges"])
    has_alt = any(e.get("type") == "alt" for e in model["edges"])
    items = [(STYLES[t]["fill"], STYLES[t]["stroke"], STYLES[t]["name"]) for t in used]
    all_items = items[:]
    if has_alt:
        all_items.append(("solid", ALT_EDGE_COLOR, "Nhánh alternative (mũi tên xanh dương)"))
    if has_err:
        all_items.append(("none", ERR_EDGE_COLOR, "Nhánh exception (nét đứt đỏ)"))
    all_items.append((None, None, "Nhãn mũi tên = trạng thái đầu ra / điều kiện gateway"))
    rows_per_col = (len(all_items)) // 2 + (len(all_items) % 2)
    lg_x, lg_y = POOL_X, POOL_Y + L["pool_h"] + 24
    lg_w, lg_h = 720, 34 + rows_per_col * 24

    W = POOL_X + L["pool_w"] + 40
    H = lg_y + lg_h + 30
    s = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W:.0f}" height="{H:.0f}" viewBox="0 0 {W:.0f} {H:.0f}">',
         f'<rect x="0" y="0" width="{W:.0f}" height="{H:.0f}" fill="#FFFFFF"/>',
         '<defs>'
         f'<marker id="arr" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="{EDGE_COLOR}"/></marker>'
         f'<marker id="arrErr" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="{ERR_EDGE_COLOR}"/></marker>'
         f'<marker id="arrAlt" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="{ALT_EDGE_COLOR}"/></marker>'
         '</defs>']

    # Pool + title
    s.append(f'<rect x="{POOL_X}" y="{POOL_Y}" width="{L["pool_w"]}" height="{L["pool_h"]}" fill="#FFFFFF" stroke="#666666"/>')
    s.append(f'<rect x="{POOL_X}" y="{POOL_Y}" width="{L["pool_w"]}" height="{POOL_TITLE}" fill="#F2F2F2" stroke="#666666"/>')
    s.append(_svg_text(POOL_X + L["pool_w"] / 2, POOL_Y + POOL_TITLE / 2, name, size=13, max_chars=90))

    # Lanes
    for i, lane in enumerate(L["lanes"]):
        ly = POOL_Y + L["lane_y_rel"][i]
        lh = L["lane_h"][i]
        s.append(f'<rect x="{POOL_X}" y="{ly}" width="{L["pool_w"]}" height="{lh}" fill="#FFFFFF" stroke="#666666"/>')
        s.append(f'<rect x="{POOL_X}" y="{ly}" width="{LANE_TITLE}" height="{lh}" fill="#F7F7F7" stroke="#666666"/>')
        max_chars = max(8, int((lh - 12) / 6.3))
        lines = _wrap(lane, max_chars)
        fs = 11 if len(lines) <= 2 else 9.5
        ty = ly + lh / 2
        for j, ln in enumerate(lines):
            tx = POOL_X + LANE_TITLE / 2 + (j - (len(lines) - 1) / 2) * (fs + 2)
            s.append(f'<text x="{tx:.1f}" y="{ty:.0f}" text-anchor="middle" dominant-baseline="middle" '
                     f'font-family="DejaVu Sans, Helvetica, sans-serif" font-size="{fs}" font-weight="bold" '
                     f'transform="rotate(-90 {tx:.1f} {ty:.0f})">{esc(ln)}</text>')

    # Edges (vẽ trước node; LABEL vẽ sau cùng để không bị node đè)
    labels = []
    for e in model["edges"]:
        a, b = nodes[e["from"]], nodes[e["to"]]
        pts, lab = _edge_points(a, b, nodes)
        et = e.get("type", "normal")
        if et == "error":
            color, dash, marker = ERR_EDGE_COLOR, ' stroke-dasharray="6,4"', "arrErr"
        elif et == "alt":
            color, dash, marker = ALT_EDGE_COLOR, "", "arrAlt"
        else:
            color, dash, marker = EDGE_COLOR, "", "arr"
        d = " ".join(f"{p[0]:.0f},{p[1]:.0f}" for p in pts)
        s.append(f'<polyline points="{d}" fill="none" stroke="{color}" stroke-width="1.4"{dash} marker-end="url(#{marker})"/>')
        if e.get("label"):
            labels.append((lab, pts, e["label"], color))

    # Nodes
    for n in nodes.values():
        t = n["type"]
        if t == "start":
            s.append(f'<circle cx="{n["cx"]:.0f}" cy="{n["cy"]:.0f}" r="{EVT_R}" fill="#333333"/>')
            if n.get("label"):
                s.append(_svg_text(n["cx"], n["y"] + n["h"] + 14, n["label"], size=10, bold=False, max_chars=22))
        elif t == "end":
            s.append(f'<circle cx="{n["cx"]:.0f}" cy="{n["cy"]:.0f}" r="{EVT_R}" fill="none" stroke="#333333" stroke-width="2.5"/>')
            s.append(f'<circle cx="{n["cx"]:.0f}" cy="{n["cy"]:.0f}" r="{EVT_R-6}" fill="#333333"/>')
            if n.get("label"):
                s.append(_svg_text(n["cx"], n["y"] + n["h"] + 14, n["label"], size=10, bold=False, max_chars=22))
        elif t == "gateway":
            st = STYLES["gateway"]
            s.append(f'<polygon points="{n["cx"]:.0f},{n["y"]:.0f} {n["x"]+n["w"]:.0f},{n["cy"]:.0f} {n["cx"]:.0f},{n["y"]+n["h"]:.0f} {n["x"]:.0f},{n["cy"]:.0f}" '
                     f'fill="{st["fill"]}" stroke="{st["stroke"]}" stroke-width="1.4"/>')
            s.append(_svg_text(n["cx"], n["cy"], n.get("label", ""), size=10, max_chars=14))
        else:
            st = STYLES.get(t, STYLES["task"])
            label = n.get("label", "")
            if t == "system" and not label.startswith("System"):
                label = f"System: {label}"
            sw = 2.2 if t == "subprocess" else 1.4
            s.append(f'<rect x="{n["x"]:.0f}" y="{n["y"]:.0f}" width="{n["w"]}" height="{n["h"]}" rx="10" '
                     f'fill="{st["fill"]}" stroke="{st["stroke"]}" stroke-width="{sw}"/>')
            s.append(_svg_text(n["cx"], n["cy"], label, size=11, max_chars=24))

    # Edge labels — vẽ sau cùng, nền trắng để luôn đọc được
    placed = []
    for (lx, lyl, anchor), pts, text, color in labels:
        tw = len(text) * 6.6 + 10
        lx, lyl, anchor = _label_pos((lx, lyl, anchor), tw, pts, nodes, placed)
        rx = lx - tw / 2 if anchor == "middle" else (lx - tw if anchor == "end" else lx - 4)
        s.append(f'<rect x="{rx:.0f}" y="{lyl - 9:.0f}" width="{tw:.0f}" height="17" rx="3" fill="#FFFFFF" fill-opacity="0.93"/>')
        s.append(f'<text x="{lx:.0f}" y="{lyl:.0f}" text-anchor="{anchor}" dominant-baseline="middle" '
                 f'font-family="DejaVu Sans, Helvetica, sans-serif" font-size="10" fill="{color}">{esc(text)}</text>')

    # Legend
    s.append(f'<rect x="{lg_x}" y="{lg_y}" width="{lg_w}" height="{lg_h}" rx="6" fill="#FAFAFA" stroke="#CCCCCC"/>')
    s.append(f'<text x="{lg_x+12}" y="{lg_y+20}" font-family="DejaVu Sans, Helvetica, sans-serif" font-size="11" font-weight="bold" fill="#333333">Chú thích</text>')
    for i, (fill, stroke, text) in enumerate(all_items):
        colx = lg_x + 12 + (i // rows_per_col) * 356
        rowy = lg_y + 40 + (i % rows_per_col) * 24
        if fill is None:
            s.append(f'<text x="{colx}" y="{rowy+7}" font-family="DejaVu Sans, Helvetica, sans-serif" font-size="10" fill="#333333">{esc(text)}</text>')
        else:
            if fill == "none":
                s.append(f'<line x1="{colx}" y1="{rowy+7}" x2="{colx+22}" y2="{rowy+7}" stroke="{stroke}" stroke-width="1.6" stroke-dasharray="6,4"/>')
            elif fill == "solid":
                s.append(f'<line x1="{colx}" y1="{rowy+7}" x2="{colx+22}" y2="{rowy+7}" stroke="{stroke}" stroke-width="1.6"/>')
            else:
                s.append(f'<rect x="{colx}" y="{rowy}" width="22" height="14" rx="3" fill="{fill}" stroke="{stroke}"/>')
            s.append(f'<text x="{colx+30}" y="{rowy+11}" font-family="DejaVu Sans, Helvetica, sans-serif" font-size="10" fill="#333333">{esc(text)}</text>')

    s.append("</svg>")
    return "\n".join(s)


def main():
    if len(sys.argv) < 2:
        print(__doc__); sys.exit(1)
    layout_path = sys.argv[1]
    out_dir = sys.argv[2] if len(sys.argv) > 2 else "."
    base = sys.argv[3] if len(sys.argv) > 3 else os.path.splitext(os.path.basename(layout_path))[0]
    os.makedirs(out_dir, exist_ok=True)

    with open(layout_path, encoding="utf-8") as f:
        model = json.load(f)
    L = compute_layout(model)

    drawio_path = os.path.join(out_dir, base + ".drawio")
    svg_path = os.path.join(out_dir, base + ".svg")
    with open(drawio_path, "w", encoding="utf-8") as f:
        f.write(build_drawio(model, L))
    svg = build_svg(model, L)
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(svg)
    print(f"OK: {drawio_path}")
    print(f"OK: {svg_path}")

    try:
        import cairosvg #type: ignore
        png_path = os.path.join(out_dir, base + ".png")
        cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=png_path, scale=1.6)
        print(f"OK: {png_path}")
    except ImportError:
        print("SKIP PNG: chưa có cairosvg (pip install cairosvg --break-system-packages)")


if __name__ == "__main__":
    main()
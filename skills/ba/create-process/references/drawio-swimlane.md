# Draw.io Swimlane Spec

> Spec vẽ sơ đồ swimlane cho skill `create-process`. **Chỉ đọc khi đến bước vẽ sơ đồ.**
> Nguyên tắc phân tích (chọn bước chính, lane = actor, nhãn mũi tên = trạng thái đầu ra) giữ nguyên theo `process-guide.md` — file này chỉ quy định **tầng biểu diễn**.

---

## 1. Output kép — bắt buộc

Mỗi sơ đồ xuất **2 sản phẩm từ CÙNG một bộ tọa độ** (layout model):

| # | Sản phẩm | Mục đích |
|---|---|---|
| 1 | `*.png` (+ `*.svg`) | Ảnh xem ngay trong chat, chèn vào tài liệu/Confluence |
| 2 | `*.drawio` | BA mở bằng draw.io / diagrams.net để copy & chỉnh sửa |

Đặt tên: `YYYY-MM-DD_process_[ten-quy-trinh-kebab-case]` (luồng con: thêm `_luong-con-[ten]`). Mỗi luồng (chính / con) = 1 bộ file riêng.

---

## 2. Layout model JSON — nguồn tọa độ duy nhất

```json
{
  "process_name": "Quy trình Vụ việc — luồng chính",
  "lanes": ["Actor 1", "Actor 2", "Hệ thống"],
  "nodes": [
    {"id": "S", "lane": 0, "col": 0, "type": "start"},
    {"id": "A", "lane": 0, "col": 1, "type": "task", "label": "Gửi báo cáo"},
    {"id": "D", "lane": 1, "col": 2, "type": "gateway", "label": "Quyết định?"},
    {"id": "T", "lane": 1, "col": 3, "row": 0, "type": "task_ok", "label": "Thông qua"},
    {"id": "R", "lane": 1, "col": 3, "row": 1, "type": "task_err", "label": "Từ chối"},
    {"id": "E", "lane": 0, "col": 4, "type": "end", "label": "Đã thông qua"}
  ],
  "edges": [
    {"from": "S", "to": "A"},
    {"from": "A", "to": "D", "label": "Chờ duyệt"},
    {"from": "R", "to": "A", "label": "Từ chối → gửi lại", "type": "error"},
    {"from": "D", "to": "X", "label": "Fast-track", "type": "alt"}
  ]
}
```

Quy tắc dựng model:
- `lane` = chỉ số actor (lane = actor/hệ thống — không đổi).
- `col` = cột trình tự thời gian, trái → phải. Mỗi bước kế tiếp tăng `col`; node rẽ nhánh từ cùng gateway dùng **cùng `col`, khác `row`** (0, 1, 2...).
- `label` của edge = **trạng thái đầu ra hoặc điều kiện gateway** (giữ nguyên tắc gốc). Edge có 3 type:
  - `"normal"` (mặc định) — main flow, mũi tên xám
  - `"alt"` — alternative flow (đường đi khác nhưng hợp lệ), mũi tên **xanh dương**
  - `"error"` — exception (từ chối / trả lại / quá hạn quay lui), mũi tên **nét đứt đỏ**
- `type` node: `start` | `end` | `task` | `task_ok` | `task_err` | `system` | `external` | `gateway` | `subprocess`. `start`/`end` có thể kèm `label` (tên trạng thái cuối) — hiển thị dưới node.

## 3. Bảng màu theo Ý NGHĨA BƯỚC (lane đã phân actor)

| type | Fill | Stroke | Dùng cho |
|---|---|---|---|
| `task` | `#f5f5f5` | `#999999` | Bước nghiệp vụ thường (user task) |
| `task_ok` | `#d5e8d4` | `#82b366` | Bước kết quả tích cực: thông qua / hoàn thành / duyệt |
| `task_err` | `#f8cecc` | `#b85450` | Bước exception: từ chối / trả lại / hủy |
| `system` | `#E8E6FC` | `#7F77DD` | System/Auto: quá hạn, callback, job (tự thêm prefix `System: `) |
| `external` | `#dae8fc` | `#6c8ebf` | Tích hợp hệ thống ngoài |
| `gateway` | `#fff2cc` | `#d6b656` | Rẽ nhánh (hình thoi) |
| `subprocess` | `#FFE6CC` | `#D79B00` | Luồng con (viền dày 2px) |
| start/end | `#333333` | `#333333` | Start: tròn đặc; End: 2 vòng tròn lồng |
| edge thường | — | `#555555` | Mũi tên xám trơn (main flow) |
| edge `alt` | — | `#3D6FB8` | **Mũi tên xanh dương** trơn (alternative flow) |
| edge `error` | — | `#b85450` | **Nét đứt đỏ** (exception flow) |

Sơ đồ luôn kèm **khung Chú thích (legend)** dưới pool: chỉ liệt kê các loại có dùng + dòng "Nhãn mũi tên = trạng thái đầu ra / điều kiện gateway".

## 4. Kích thước chuẩn

Pool tiêu đề ngang trên (30px); lane tiêu đề xoay dọc trái (30px). `COL_W=200`, `ROW_H=80`, task `160×48`, gateway `110×70`, start/end r=13, đệm lane trên/dưới 18px. Lane cao = `18 + số_row × 80 + 18`.

---

## 5. Cách render — ưu tiên theo thứ tự

### 5.1. Có code execution (claude.ai bash / Claude Code) — MẶC ĐỊNH
1. **MỘT lệnh bash duy nhất** cho toàn bộ: ghi layout model bằng heredoc + cài cairosvg nếu thiếu + render mọi sơ đồ. Mẫu:
```bash
cat > qt.json <<'EOF'
{ ...layout model... }
EOF
python3 -c "import cairosvg" 2>/dev/null || pip install cairosvg --break-system-packages -q 2>/dev/null || true
python3 scripts/render_swimlane.py qt.json <out_dir> <basename>
# luồng con: lặp thêm cặp heredoc + render trong CÙNG lệnh này
```
(SVG + `.drawio` là đầu ra **đảm bảo, nhanh** — script luôn sinh dù thiếu cairosvg. PNG chỉ là bổ sung opportunistic: cài cairosvg lần đầu trong session có thể mất ~10–20s, nếu cài lỗi/không có mạng thì `|| true` để **không làm hỏng cả lệnh**, vẫn giao SVG. Đừng retry cài nhiều lần.)
2. **Chỉ mở xem lại ảnh PNG khi sơ đồ >10 node hoặc gateway >3 nhánh** — soát: nhãn không bị đè, exception nét đứt đỏ, đường không xuyên node; lệch thì chỉnh `col`/`row` và render lại, **tối đa 1 vòng**. Sơ đồ nhỏ hơn: tin script, giao luôn.
3. Giao cả `.drawio` + `.png` cho user (kèm `.json` nếu user muốn tái render).

### 5.2. Không có code execution (chat thuần)
1. Tự tính tọa độ theo mục 4 + quy tắc route mục 6.
2. Xuất XML `.drawio` trong code block (template mục 7) để user lưu thành file.
3. Vẽ ảnh bằng SVG qua canvas/visualizer với CÙNG tọa độ.

## 6. Quy tắc route mũi tên (đồng bộ ảnh ↔ drawio)

| Quan hệ | Đường đi | Hint drawio |
|---|---|---|
| `col` đích > nguồn (forward) | Phải nguồn → gấp khúc giữa 2 cột → trái đích | `exitX=1;exitY=0.5;entryX=0;entryY=0.5;` |
| `col` đích < nguồn (quay lui) | Trái nguồn → ngang → đáy/đỉnh đích | `exitX=0;exitY=0.5;entryX=0.5;entryY=1;` (đích ở trên) hoặc `entryY=0` (đích ở dưới) |
| Cùng `col`, khác lane | Dọc thẳng đỉnh↔đáy | `exitX=0.5;exitY=0/1;entryX=0.5;entryY=1/0;` |
| Cùng `col` nhưng đường dọc cắt node khác | Vòng sang phải (`x = mép phải + 28`) vào cạnh phải đích | `exitX=1;exitY=0.5;entryX=1;entryY=0.5;` |

Nhãn edge: đặt giữa đoạn trống, nền trắng mờ; **không để node hoặc nhãn khác đè lên** (trượt dọc đoạn dọc hoặc lệch trái/phải nếu vướng — script đã tự xử lý).

## 7. Template XML .drawio (khi sinh thủ công)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net">
  <diagram id="proc1" name="TÊN QUY TRÌNH">
    <mxGraphModel dx="1422" dy="800" grid="1" gridSize="10" guides="1" tooltips="1"
        connect="1" arrows="1" fold="1" page="1" pageScale="1"
        pageWidth="W" pageHeight="H" math="0" shadow="0">
      <root>
        <mxCell id="0"/><mxCell id="1" parent="0"/>
        <!-- POOL: tiêu đề ngang trên -->
        <mxCell id="pool1" value="TÊN QUY TRÌNH" style="swimlane;html=1;childLayout=stackLayout;horizontal=1;startSize=30;horizontalStack=0;resizeParent=1;resizeParentMax=0;collapsible=0;swimlaneFillColor=#FFFFFF;fillColor=#FFFFFF;strokeColor=#666666;fontSize=13;fontStyle=1;" vertex="1" parent="1">
          <mxGeometry x="20" y="20" width="POOL_W" height="POOL_H" as="geometry"/></mxCell>
        <!-- LANE: con của pool, y tương đối pool (lane đầu y=30), width = POOL_W -->
        <mxCell id="lane1" value="TÊN ACTOR" style="swimlane;html=1;startSize=30;horizontal=0;collapsible=0;whiteSpace=wrap;swimlaneFillColor=#FFFFFF;fillColor=#FAFAFA;strokeColor=#666666;fontSize=11;fontStyle=1;" vertex="1" parent="pool1">
          <mxGeometry y="30" width="POOL_W" height="LANE_H" as="geometry"/></mxCell>
        <!-- NODE: parent = lane, tọa độ TƯƠNG ĐỐI LANE (x đã gồm 30px tiêu đề lane) -->
        <mxCell id="n1" value="Tên bước" style="rounded=1;whiteSpace=wrap;html=1;arcSize=20;fillColor=#f5f5f5;strokeColor=#999999;fontSize=11;fontStyle=1;" vertex="1" parent="lane1">
          <mxGeometry x="X" y="Y" width="160" height="48" as="geometry"/></mxCell>
        <!-- Gateway: style="rhombus;whiteSpace=wrap;html=1;fillColor=#fff2cc;strokeColor=#d6b656;fontSize=11;fontStyle=1;" -->
        <!-- Start: style="ellipse;html=1;fillColor=#333333;strokeColor=#333333;" 26×26 -->
        <!-- End: 2 ellipse lồng — ngoài "ellipse;html=1;fillColor=none;strokeColor=#333333;strokeWidth=2.5;" 26×26, trong fillColor=#333333 12×12 lệch +7,+7 -->
        <!-- Node có label dưới (start/end): thêm "verticalLabelPosition=bottom;verticalAlign=top;fontSize=10;" -->
        <!-- EDGE: parent="1", source/target = id node, value = trạng thái đầu ra -->
        <mxCell id="e1" value="Trạng thái đầu ra" style="edgeStyle=orthogonalEdgeStyle;rounded=0;html=1;fontSize=10;jettySize=auto;orthogonalLoop=1;strokeColor=#555555;exitX=1;exitY=0.5;entryX=0;entryY=0.5;" edge="1" parent="1" source="n1" target="n2">
          <mxGeometry relative="1" as="geometry"/></mxCell>
        <!-- Edge alternative: thêm strokeColor=#3D6FB8;fontColor=#3D6FB8; -->
        <!-- Edge exception: thêm strokeColor=#b85450;fontColor=#b85450;dashed=1; -->
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>
```

Lưu ý kỹ thuật: escape `&`, `<`, `>` trong value; mỗi luồng con = 1 file `.drawio` riêng; legend = các cell `text;html=1;` + ô màu đặt dưới pool (xem script làm chuẩn).

## 8. Checklist trước khi giao
- [ ] Lane = đúng actor trong bảng transition; không thêm bớt bước so với bảng.
- [ ] Mọi mũi tên liên-lane có nhãn = trạng thái đầu ra / điều kiện gateway.
- [ ] **Phân biệt 3 loại flow đúng quy ước**: main (xám), alternative (xanh dương, `type: "alt"`), exception (nét đứt đỏ, `type: "error"`).
- [ ] Có start + end; gateway đủ các nhánh; node luồng con (cam) khớp tên luồng con.
- [ ] Sơ đồ >10 node / gateway >3 nhánh: đã xem lại ảnh PNG (không nhãn bị đè, không đường xuyên node, tối đa 1 vòng chỉnh).
- [ ] Giao đủ `.drawio` + `.png`; tên file đúng quy tắc mục 1.
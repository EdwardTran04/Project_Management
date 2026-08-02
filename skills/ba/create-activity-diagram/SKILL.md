---
name: create-activity-diagram
description: |
  Vẽ Activity Diagram hoặc User Flow có màu sắc từ mô tả luồng nghiệp vụ,
  xuất file .drawio chỉnh sửa được, hỗ trợ nhiều luồng rẽ nhánh, phân biệt
  phạm vi hệ thống bằng khung nét đứt + màu.
  Dùng khi user nói "vẽ activity diagram", "vẽ sơ đồ hoạt động", "vẽ flowchart
  có màu", "vẽ user flow", "vẽ luồng màn hình", "tạo activity", "vẽ sơ đồ
  nghiệp vụ", "vẽ flow có rẽ nhánh", "vẽ sơ đồ cho Confluence", "xuất drawio".
  KHÔNG dùng cho: sequence diagram (dùng skill: create-sequence-diagram),
  ERD, class diagram, state diagram, use case diagram (dùng skill: create-uml).
---

# Goal

Sinh Activity Diagram / User Flow dạng `.drawio` có màu chuyên nghiệp (+ `.svg` preview) từ mô tả luồng nghiệp vụ — thay vì BA vẽ tay 30–60 phút.

# Cách hoạt động — spec-driven (KHÔNG viết XML tay)

Model chỉ viết một **spec JSON gọn**. Script `scripts/render_activity.py` tự tính toàn bộ toạ độ, màu, shape, edge vuông góc, khung scope, legend và **badge trigger DB** → xuất `.drawio` + `.svg`. Việc tính layout/serialize XML là việc của code, không phải của model → nhanh, ít token, không lỗi toạ độ, không phải sinh lại.

# Quy trình

1. **Loại diagram:** `activity` (mặc định) hoặc `user_flow`. Suy từ ngữ cảnh — không hỏi nếu đã rõ.
2. **Lập spec** theo `references/spec-schema.md` (mẫu đầy đủ: `references/example-spec.json`):
   - Mỗi node có `row` (đi xuống) + `lane` (rẽ ngang, 0 = cột chính), `type`, `label`, `color`, `scope`, và `reads`/`writes` nếu có chạm dữ liệu.
   - Nhánh = các node cùng `row`, khác `lane`. Hội tụ = node `type:"merge"`. Nhánh lỗi/quay lại = edge `kind:"error"`.
3. **Chạy script:**
   ```
   python3 scripts/render_activity.py <spec.json> <output_basename>
   ```
4. **Present** `<output_basename>.drawio` (chỉnh sửa được) + `.svg` (xem nhanh). Hướng dẫn: mở `.drawio` bằng draw.io (File → Open) hoặc Confluence (Insert → draw.io Diagram → import); tên gợi ý `YYYY-MM-DD_activity_<tên-luồng>.drawio`.

# Hiện trigger đọc/ghi DB trên biểu đồ (cho SRS / TKCT)

Khi vẽ luồng nghiệp vụ cho tài liệu (SRS/PTYC, TKCT mục ④ Luồng nghiệp vụ), set cho từng bước:

```json
"reads":  ["reservists", "common_category"],
"writes": [{"table": "customers", "op": "INSERT"}]
```

Script render badge **xanh `ĐỌC: …`** và **cam `LƯU: … (op)`** ngay dưới ô bước. Nguồn data-op lấy thẳng từ cột "Kết quả / Phản ứng hệ thống" của bảng 4 cột luồng nghiệp vụ — không phân tích lại.

# Lưu ý khi lập spec

- `activity`: có khung scope phân hệ thống, nhiều actor, tập trung nghiệp vụ.
- `user_flow`: tập trung màn hình end-user; thường để `scopes: []`, nhánh lỗi gọn, dùng màu `app`/`neutral`.
- ≤ 15 bước / nhánh — vượt thì tách 2 diagram hoặc gộp bước nhỏ.
- Label ngắn (≤ ~30 ký tự); script tự ngắt dòng.
- Màu theo ý nghĩa: `branch1`/`branch2` cho 2 nhánh, `app`/`server`/`external` cho hệ thống, `error` cho lỗi.
- Toạ độ, khoảng cách ≥100px giữa nhánh, edge vuông góc, legend: **script lo hết** — không cần khai.

# Bước tiếp theo

| Việc | Skill |
|------|-------|
| Sơ đồ swimlane theo quy trình (pool/lane/actor) | `create-process` |
| Là engine vẽ cho luồng nghiệp vụ trong TKCT (mục ④) | `create-tkct` |
# Spec schema — render_activity.py

Spec là 1 file JSON. Chạy:
```
python3 scripts/render_activity.py <spec.json> <output_basename>
```
→ tạo `<output_basename>.drawio` (chỉnh sửa được) + `<output_basename>.svg` (preview).

## Mô hình lưới (row + lane)

Mỗi node có:
- `row` — số nguyên, hàng đi **xuống** (0 ở trên cùng).
- `lane` — số nguyên, cột **rẽ ngang** (0 = cột chính; 1, 2… sang phải; cho phép số âm).

Script tự tính pixel, khoảng cách, chiều cao hàng (co theo badge), edge vuông góc, scope box, legend. **Nhánh** = các node cùng `row`, khác `lane`. **Hội tụ** = node `type:"merge"`.

## Top-level

| Field | Bắt buộc | Mô tả |
|-------|:---:|-------|
| `title` | ✓ | Tên diagram (tên tab/file) |
| `type` | | `"activity"` (mặc định) hoặc `"user_flow"` |
| `scopes` | | Khung phạm vi hệ thống: `[{"name": "...", "color": "<key>"}]` |
| `nodes` | ✓ | Danh sách node |
| `edges` | ✓ | Danh sách cạnh nối |

## node

| Field | Áp dụng | Mô tả |
|-------|---------|-------|
| `id` | mọi node | Định danh duy nhất (dùng trong `edges`, `scope`) |
| `type` | mọi node | `start` \| `end` \| `step` \| `decision` \| `merge` |
| `label` | step, decision | Chữ trong shape |
| `color` | step | Key màu (bảng dưới); mặc định `neutral` |
| `row` | mọi node | Hàng (đi xuống) |
| `lane` | mọi node | Cột (rẽ ngang); mặc định `0` |
| `scope` | step/decision/merge | Tên scope chứa node (khớp `scopes[].name`) |
| `reads` | step | `["bảng1","bảng2"]` → badge xanh `ĐỌC: bảng1, bảng2` |
| `writes` | step | `[{"table":"bảng","op":"INSERT"}]` → badge cam `LƯU: bảng (INSERT)` |

`writes` cũng nhận chuỗi đơn giản: `["bảng"]` → `LƯU: bảng`. `op` thường là INSERT / UPDATE / DELETE.

## color keys (cho `step` và `scopes[].color`)

| Key | Ý nghĩa | Màu |
|-----|---------|-----|
| `neutral` | Bước chung | xám |
| `branch1` | Nhánh chính | xanh lá |
| `branch2` | Nhánh phụ | cam đất |
| `app` | App xử lý | xanh ngọc |
| `server` | Hệ thống / Server | tím |
| `external` | Hệ thống ngoài (3rd party) | xanh dương |
| `error` | Lỗi / Thông báo lỗi | đỏ |

`decision` tự tô vàng; `merge`/`start`/`end` tự màu — không cần đặt `color`.

## edge

| Field | Bắt buộc | Mô tả |
|-------|:---:|-------|
| `from` | ✓ | `id` nguồn |
| `to` | ✓ | `id` đích |
| `label` | | Nhãn cạnh (vd `"Hợp lệ"`, `"VNeID"`) |
| `kind` | | `"normal"` (mặc định) hoặc `"error"` (nét đứt đỏ — dùng cho nhánh lỗi / quay lại) |

## Legend

Tự sinh ở cuối từ các key màu thực sự dùng + badge đọc/ghi + scope. Không cần khai.

## Ví dụ

`references/example-spec.json` — luồng eKYC: 2 nhánh CCCD/VNeID, `merge`, 2 scope (App/Server), badge `ĐỌC`/`LƯU`, nhánh lỗi (forward + back). Render thử:
```
python3 scripts/render_activity.py references/example-spec.json out
```
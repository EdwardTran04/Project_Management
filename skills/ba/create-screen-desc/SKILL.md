---
name: create-screen-desc
description: |
  Tạo bảng mô tả màn hình UI từ screenshot hoặc wireframe — tự động nhận diện
  Format A (6 cột, BO/Admin/Web) hoặc Format B (8 cột song ngữ, FE Mobile Banking).
  Dùng khi user nói "mô tả màn hình", "viết screen description", "mô tả UI",
  "viết spec màn hình", upload ảnh màn hình/wireframe.
  KHÔNG dùng cho: user flow, business rules, use case, thiết kế UI mới.
---

# Goal

Sinh bảng mô tả màn hình UI chuẩn trong 1-2 phút từ screenshot hoặc wireframe,
thay vì BA phải điền tay mất 20-40 phút. Output là bảng markdown trực tiếp trong
chat, sẵn sàng copy vào tài liệu TKCT hoặc Feature Spec.

# Instructions

## Bước 1: Nhận input

Nhận từ user:
- Screenshot hoặc wireframe màn hình (bắt buộc)
- Tên màn hình / tên chức năng (nếu chưa có, đọc từ ảnh)
- Platform nếu chưa rõ từ ảnh

## Bước 2: Tự động nhận diện format

Quan sát ảnh để chọn format phù hợp:

| Dấu hiệu trong ảnh | Format áp dụng |
|--------------------|----------------|
| Breadcrumb, sidebar menu, bảng data, giao diện admin/web nội bộ | **Format A — 6 cột (BO/Admin)** |
| Khung điện thoại, bottom sheet, tab bar, giao diện mobile banking | **Format B — 8 cột (FE Mobile)** |

Nếu không rõ → hỏi user: "Đây là màn hình BO/Admin hay FE Mobile?"

## Bước 3: Sinh bảng mô tả

### Format A — 6 cột (Backend / Admin / Internal Web)

```markdown
## Màn hình: [Tên màn hình]
**Chức năng:** [Tên chức năng]
**Platform:** Web (BO/Admin)
**Ngày:** dd/mm/yyyy

| Hạng mục | Kiểu hiển thị | Kiểu thao tác | Bắt buộc | Độ dài | Mô tả xử lý |
|----------|--------------|--------------|---------|--------|-------------|
| [Tên field/component] | Label / Input / Button / Dropdown / Table / Badge / ... | Readonly / Editable / Clickable / -- | Có / Không / -- | [số ký tự hoặc --] | [Mô tả logic xử lý, validation, nguồn dữ liệu] |
```

### Format B — 8 cột (Frontend Mobile Banking)

```markdown
## Màn hình: [Tên màn hình]
**Chức năng:** [Tên chức năng]
**Platform:** Mobile (iOS/Android)
**Ngày:** dd/mm/yyyy

| Hạng mục | Kiểu hiển thị | Kiểu thao tác | Bắt buộc | Độ dài | VN | EN | Mô tả xử lý |
|----------|--------------|--------------|---------|--------|----|----|-------------|
| [Tên field/component] | Label / Input / Button / Dropdown / ... | Readonly / Editable / Clickable / -- | Có / Không / -- | [số ký tự hoặc --] | [Nhãn tiếng Việt] | [English label] | [Mô tả logic xử lý] |
```

### Cách phân nhóm hạng mục

Tổ chức theo cấu trúc phân cấp của màn hình — không liệt kê phẳng:

```
Header
  └─ Logo
  └─ Tiêu đề màn hình
  └─ Nút Quay lại
Phần tìm kiếm
  └─ Ô tìm kiếm
  └─ Bộ lọc
Danh sách / Nội dung chính
  └─ Cột 1
  └─ Cột 2
Footer / Actions
  └─ Nút Xác nhận
  └─ Nút Hủy
```

### Quy tắc điền giá trị

| Tình huống | Cách điền |
|-----------|-----------|
| Không nhìn rõ trong ảnh | `--` (không được đoán) |
| Định dạng ngày | `dd/mm/yyyy` |
| Định dạng tiền | `500.000 VND` (dấu chấm phân nghìn) |
| Badge / Tag trạng thái | Ghi màu: `Xanh lá — Đang hoạt động`, `Đỏ — Tạm dừng` |
| Dropdown với list cố định | Liệt kê options trong cột Mô tả xử lý |
| Validation rule | Ghi trong cột Mô tả xử lý: "Tối đa 50 ký tự, không chứa ký tự đặc biệt" |

## Bước 4: Xuất kết quả

- In bảng trực tiếp trong chat (markdown)
- Hỏi user: "Lưu vào file không?" → nếu có: xuất file, tên gợi ý `screen_[tên-màn-hình].md`
- Tạo một file per màn hình

# Constraints

- 🚫 KHÔNG đoán giá trị không nhìn thấy rõ trong ảnh — dùng `--`
- 🚫 KHÔNG thiết kế UI mới hay đề xuất thay đổi layout
- 🚫 KHÔNG viết use case, business rules, hay user flow trong skill này
- ✅ LUÔN phân nhóm hạng mục theo cấu trúc phân cấp của màn hình
- ✅ LUÔN dùng format chuẩn: ngày dd/mm/yyyy, tiền 500.000 VND
- ✅ Nếu màn hình có nhiều tab/trạng thái → mô tả từng tab riêng (thêm section)
- ⚠️ Nếu user upload nhiều ảnh cùng lúc → hỏi "Mô tả lần lượt từng màn hình hay gộp vào 1 file?"
---
name: doc-status
description: Tổng hợp và kiểm tra trạng thái tất cả tài liệu BA trong dự án — liệt kê theo loại, version, trạng thái (Draft/Review/Approved), phát hiện tài liệu lỗi thời, thiếu, hoặc stuck quá lâu. Dùng khi cần kiểm tra coverage tài liệu trước khi bàn giao hoặc khi muốn biết dự án đang thiếu tài liệu gì.
---

Kiểm tra trạng thái tài liệu của dự án.

Hỏi người dùng cung cấp danh sách tài liệu hiện có theo format sau (paste trực tiếp hoặc điền vào):

```
Tên tài liệu | Loại | Version | Trạng thái | Ngày cập nhật | Ghi chú
```

Ví dụ:
```
PTYC_HeThongKT | PTYC | 1.2 | Review | 15/05/2026 | Đang chờ KH duyệt
TKCT_QuanLyDonVi | TKCT | 1.0 | Draft | 01/05/2026 | Chưa có Figma
US-001_XemDanhSach | User Story | 1.0 | Approved | 10/04/2026 |
```

Nếu người dùng chưa có danh sách sẵn, hỏi từng nhóm:
1. Tài liệu yêu cầu (PTYC, Feature Spec, NFR) — tên + version + trạng thái?
2. Tài liệu thiết kế (TKTT, TKCT, TKCSSDL) — tên + version + trạng thái?
3. Tài liệu phân tích (User Story, Use Case, As-Is/To-Be) — tên + version + trạng thái?
4. Tài liệu kiểm thử (Business Test Case, RTM) — tên + version + trạng thái?
5. Diagram (Activity, Sequence, UML) — tên + trạng thái?

---

Sau khi nhận đủ thông tin, tạo Document Status Report:

---

# Document Status Report

**Ngày:** dd/mm/yyyy
**Dự án:** [Tên dự án]

## Tài liệu yêu cầu

| Tên tài liệu | Loại | Version | Trạng thái | Cập nhật | Ghi chú |
|-------------|------|---------|-----------|---------|---------|

## Tài liệu thiết kế

| Tên tài liệu | Loại | Version | Trạng thái | Cập nhật | Ghi chú |
|-------------|------|---------|-----------|---------|---------|

## Tài liệu phân tích

| Tên tài liệu | Loại | Version | Trạng thái | Cập nhật | Ghi chú |
|-------------|------|---------|-----------|---------|---------|

## Tài liệu kiểm thử

| Tên tài liệu | Loại | Version | Trạng thái | Cập nhật | Ghi chú |
|-------------|------|---------|-----------|---------|---------|

## Diagram

| Tên | Loại | Trạng thái | Cập nhật | Ghi chú |
|-----|------|-----------|---------|---------|

---

## Cảnh báo

- Tài liệu Draft > 7 ngày chưa được review: [...]
- Tài liệu Review > 14 ngày chưa được Approved: [...]
- PTYC đã Approved nhưng TKCT chưa có: [...]
- User Story chưa có Test Case tương ứng: [...]
- Tài liệu có version cũ hơn tài liệu phụ thuộc: [...]

---

## Tóm tắt

| Trạng thái | Số lượng |
|-----------|---------|
| Approved | |
| Review | |
| Draft | |
| Chưa có | |
| **Tổng** | |

**Cần xử lý ngay:**
- [Tài liệu bị stuck / thiếu / lỗi thời]

**Gaps traceability:**
- [PTYC → TKCT: thiếu TKCT cho module X]
- [User Story → Test Case: US-XXX chưa có TC]

---

## Bước tiếp theo

| Hành động cần làm | Skill sử dụng |
|------------------|--------------|
| Tạo tài liệu còn thiếu | skill tương ứng theo loại |
| Kiểm tra coverage requirements | skill: create-traceability-matrix |
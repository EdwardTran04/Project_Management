---
name: create-feature-spec
description: Tạo Feature Specification — mô tả chi tiết từng tính năng: mục đích, luồng xử lý, màn hình liên quan, business rules áp dụng. Là tài liệu trung gian giữa BRD và SRS.
---

Tạo Feature Specification.

Hỏi người dùng:
1. Feature nào cần spec? Mô tả hoặc paste REQ-ID + nội dung yêu cầu vào đây.
2. Actor chính sử dụng feature này là ai?
3. Màn hình nào liên quan? (liệt kê tên màn hình)
4. Có Figma/design reference không? Nếu có, paste link hoặc đính kèm.
5. Có Business Rules hoặc domain glossary liên quan không? Nếu có, paste vào.

Nếu người dùng cung cấp tài liệu đính kèm, đọc và rút trích FR + Business Rules từ đó trước khi tạo spec.

Tạo Feature Spec theo template sau:

---

# Feature Spec — [Tên tính năng]

**REQ tham chiếu:** REQ-XXX
**Version:** 1.0
**Ngày:** dd/mm/yyyy
**Trạng thái:** Draft

## Mục đích

[Tính năng này giải quyết vấn đề gì, cho ai]

## Actors

| Actor | Vai trò trong feature |
|-------|----------------------|
| | |

## Màn hình liên quan

[Danh sách màn hình theo thứ tự xuất hiện trong flow]

## Luồng chính (Main Flow)

### [Tên màn hình / bước 1]

**Mục đích:** [Màn hình này làm gì]
**Trigger:** [Người dùng/hệ thống kích hoạt khi nào]

**Thông tin hiển thị:**
- [Trường dữ liệu, nguồn dữ liệu]

**Hành động người dùng:**
- [Hành động → kết quả]

**Business rules áp dụng:** BR-XXX, BR-XXX

---

### [Tên màn hình / bước 2]

[Tương tự cấu trúc bước 1]

## Luồng ngoại lệ

| Tình huống | Xử lý |
|-----------|-------|
| | |

## Business Rules tổng hợp

[Liệt kê tất cả BR-ID áp dụng cho feature này]

## Câu hỏi mở

[Điểm chưa rõ cần confirm với KH — để trống nếu không có]

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Mô tả chi tiết từng màn hình | skill: create-screen-desc | Từ mục "Màn hình liên quan" |
| Vẽ luồng nghiệp vụ | skill: create-activity-diagram | Từ mục "Luồng chính" |
| Viết User Story + AC | skill: create-user-story | Từng actor + hành động |
| Viết PTYC | skill: create-ptyc | Feature Spec là input cho phần Yêu cầu chức năng |
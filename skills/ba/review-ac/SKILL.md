---
name: review-ac
description: Review chất lượng Acceptance Criteria của User Story — kiểm tra testability, coverage happy path + edge cases, và tính nhất quán với SRS trước khi chuyển Dev/Tester.
disable-model-invocation: true
---

Review Acceptance Criteria của User Story.

Hỏi người dùng: User Story nào cần review? (US-ID hoặc paste nội dung trực tiếp)

Đọc User Story trong `02_analysis/user-stories/` và SRS tham chiếu trong `02_analysis/requirements/`.

Đánh giá từng AC theo checklist:

**Testability:**
- [ ] AC có thể Pass/Fail rõ ràng không? (không có từ ngữ mơ hồ: "nhanh", "ổn định", "phù hợp")
- [ ] Expected result có đo lường được không? (có số liệu cụ thể nếu là performance/quantity)
- [ ] Given/When/Then đủ 3 phần và đúng thứ tự không?

**Coverage:**
- [ ] Happy path đã được cover?
- [ ] Ít nhất 1 negative case (invalid input, unauthorized, resource not found)?
- [ ] Edge cases liên quan đến hệ thống ngoài: timeout, service down, partial response?
- [ ] Concurrent/race condition nếu feature có shared state?

**Consistency:**
- [ ] AC có mâu thuẫn với AC khác trong cùng US không?
- [ ] AC có nhất quán với business rules trong SRS không?
- [ ] Thuật ngữ có khớp với domain-glossary không?

**Completeness:**
- [ ] Có ít nhất 2 AC không?
- [ ] Mỗi luồng xử lý chính trong SRS có ít nhất 1 AC cover không?

Tạo review report:

```
# AC Review — [US-ID]: [Tên US]
**Ngày review:** YYYY-MM-DD
**Reviewer:** BA

## Kết quả tổng quan
- Tổng AC: X
- Pass: X | Cần sửa: X | Cần thêm: X

## Chi tiết

### AC-[số]: [nội dung AC]
**Trạng thái:** ✅ Pass / ⚠️ Cần sửa / ❌ Fail
**Vấn đề:** [mô tả nếu có]
**Đề xuất sửa:** [AC mới hoặc bổ sung]

## AC cần thêm
- [ ] [Mô tả AC còn thiếu]

## Kết luận
[ ] Ready — chuyển Dev/Tester được
[ ] Cần sửa trước khi chuyển
```

Nếu có AC cần sửa hoặc thêm, đề xuất nội dung AC mới theo đúng format Given/When/Then.
Sau khi user confirm, cập nhật file US trong `02_analysis/user-stories/`.
Lưu review report: `02_analysis/analysis/YYYY-MM-DD_review-ac_[US-ID].md`.

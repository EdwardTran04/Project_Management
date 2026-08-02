---
name: create-business-testcase
description: Tạo Business Test Cases từ góc độ BA — kiểm tra nghiệm thu tính năng theo đúng nghiệp vụ, không phải technical test. Dùng trong UAT hoặc BA review sản phẩm trước khi bàn giao KH.
---

Tạo Business Test Cases (Nghiệm thu nghiệp vụ).

Lưu ý quan trọng — Business test case khác với technical test case của Tester:
- **BA test**: nghiệp vụ hoạt động đúng yêu cầu KH (quy trình, tính toán, output đúng)
- **Tester test**: hệ thống hoạt động đúng kỹ thuật (API response, UI render, performance)

Hỏi người dùng:
1. Feature / User Story nào cần business test case? Paste nội dung vào đây.
2. Có Business Rules, Acceptance Criteria, hoặc Feature Spec liên quan không? Nếu có, paste vào.
3. Ai sẽ thực hiện UAT? (BA tự test / KH test)

Nếu người dùng cung cấp tài liệu đính kèm, đọc và rút trích AC + Business Rules từ đó trước khi sinh test case.

Tạo Business Test Cases theo template sau:

---

# Business Test Cases — [Tên feature / Sprint]

**Version:** 1.0
**Ngày:** dd/mm/yyyy
**Người thực hiện:** [BA / KH]
**US tham chiếu:** US-XXX

---

## BTC-[số]: [Tên test case]

**Mục tiêu:** Kiểm tra [nghiệp vụ gì]
**US tham chiếu:** US-XXX
**Business Rule áp dụng:** BR-XXX

**Điều kiện tiên quyết:**
- [Dữ liệu cần có]
- [Trạng thái hệ thống cần có]

**Các bước thực hiện:**
1. [Hành động cụ thể bằng ngôn ngữ nghiệp vụ, không phải kỹ thuật]
2. ...

**Kết quả kỳ vọng:**
- [Mô tả kết quả theo đúng nghiệp vụ]
- [Dữ liệu thay đổi như thế nào]

**Kết quả thực tế:** [ ] Pass  [ ] Fail
**Ghi chú:**

---

Tạo đủ BTC để cover:
- Mỗi Acceptance Criteria ít nhất 1 BTC
- Các business rule quan trọng
- Luồng nghiệp vụ end-to-end (từ đầu đến cuối, không chỉ từng bước)
- Edge cases nghiệp vụ (tháng có 31 ngày, số tiền = 0, danh sách rỗng...)

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Kiểm tra coverage AC vs requirements | skill: create-traceability-matrix | Sau khi có đủ BTC |
| Cập nhật User Story nếu phát hiện AC thiếu | skill: create-user-story | Khi BTC expose gap |
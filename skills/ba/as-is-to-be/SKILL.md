---
name: as-is-to-be
description: Phân tích quy trình As-Is (hiện tại) và To-Be (tương lai) — xác định gap, điểm đau, và cải tiến mà hệ thống mới sẽ mang lại. Output làm cơ sở cho BRD section Problem Statement và Proposed Solution.
---

Phân tích quy trình As-Is / To-Be.

Hỏi người dùng:
1. Tên quy trình nghiệp vụ cần phân tích?
2. Ai thực hiện quy trình này? (actor/role)
3. Có tài liệu hoặc mô tả quy trình hiện tại không? Nếu có, paste vào đây.
4. Điểm đau (pain points) khách hàng phản ánh là gì?

Nếu người dùng cung cấp tài liệu đính kèm, đọc và rút trích thông tin từ đó trước khi hỏi thêm.

Tạo As-Is / To-Be Analysis theo template sau:

---

# As-Is / To-Be Analysis — [Tên quy trình]

**Version:** 1.0
**Ngày:** dd/mm/yyyy
**Phạm vi:** [Quy trình / module được phân tích]

## 1. Tổng quan

| | As-Is (Hiện tại) | To-Be (Tương lai) |
|---|-----------------|------------------|
| **Mô tả** | | |
| **Actor** | | |
| **Trigger** | | |
| **Output** | | |
| **Thời gian ước tính** | | |

## 2. Luồng As-Is

[Mô tả dạng text. Nếu flow phức tạp, dùng skill: create-activity-diagram]

| Bước | Mô tả | Actor | Công cụ / Hệ thống | Thời gian |
|------|-------|-------|-------------------|-----------|
| 1 | | | | |

**Điểm đau (Pain Points):**

| # | Vấn đề | Ảnh hưởng |
|---|--------|----------|
| 1 | | |

## 3. Luồng To-Be

[Mô tả dạng text. Nếu flow phức tạp, dùng skill: create-activity-diagram]

| Bước | Mô tả | Actor | Hệ thống mới làm gì | Cải tiến so với As-Is |
|------|-------|-------|--------------------|-----------------------|
| 1 | | | | |

## 4. Gap Analysis

| Gap | As-Is | To-Be | Yêu cầu hệ thống |
|-----|-------|-------|-----------------|
| | | | |

## 5. Business Benefits

| Cải tiến | Đo lường | Giá trị kỳ vọng |
|---------|---------|----------------|
| Giảm thời gian xử lý | Thời gian trung bình | X phút → Y phút |

## 6. Assumptions & Constraints

- [Giả định về quy trình To-Be]
- [Ràng buộc: hệ thống kế thừa, quy định pháp lý, timeline]

## 7. Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Vẽ flow As-Is / To-Be | skill: create-activity-diagram | Nếu mục 2, 3 cần diagram |
| Đặc tả yêu cầu chức năng | skill: create-feature-spec | Từ cột "Yêu cầu hệ thống" mục 4 |
| PTYC | skill: create-ptyc | Gap Analysis là input cho phần Hiện trạng |
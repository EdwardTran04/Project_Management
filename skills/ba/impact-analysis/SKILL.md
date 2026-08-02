---
name: impact-analysis
description: Phân tích tác động khi một requirement thay đổi — xác định những artifact nào bị ảnh hưởng (BRD, SRS, User Story, Test Case) và ước lượng effort thay đổi.
---

## ⚡ Điều kiện kích hoạt

> Skill này CHỈ chạy khi BA gọi trực tiếp bằng lệnh `/impact-analysis`
> hoặc nói rõ "phân tích impact" / "dùng skill impact-analysis".
> KHÔNG tự kích hoạt dù BA đề cập requirement thay đổi hay change request.
> Nếu chưa được gọi trực tiếp → bỏ qua skill này hoàn toàn.

---

Phân tích impact của thay đổi requirement.

Hỏi người dùng:
1. Requirement nào thay đổi? (REQ-ID hoặc mô tả)
2. Thay đổi cụ thể là gì? (thêm / bớt / sửa logic / sửa scope)
3. Lý do thay đổi? (KH yêu cầu / phát hiện lỗi thiết kế / thay đổi nghiệp vụ)
4. Paste hoặc đính kèm các artifact liên quan vào đây — BRD, SRS, User Story, Test Case, business rules, NFR có gắn REQ-ID. Càng nhiều context càng tốt.

Nếu người dùng đính kèm tài liệu, đọc toàn bộ trước khi phân tích. Truy vết theo REQ-ID:
- Trong BRD/SRS (PTYC/TKCT) — tìm phần spec chứa REQ-ID tương ứng
- Trong User Stories — tìm US có reference đến REQ-ID đó
- Trong analysis — business rules, NFR liên quan
- Trong Test Cases — test case phủ REQ-ID đó

Nếu một loại artifact không được cung cấp, ghi "không có tài liệu / cần bổ sung" trong báo cáo thay vì bỏ qua — sự thiếu vắng cũng là thông tin cho PM.

Phân tích và tạo báo cáo impact với format:

```
# Impact Analysis — [REQ-ID]: [Mô tả thay đổi]
**Ngày:** YYYY-MM-DD
**Người yêu cầu:** 
**Lý do:**

## Thay đổi cụ thể
[Mô tả before → after]

## Artifacts bị ảnh hưởng

| Artifact | File | Mức độ | Mô tả thay đổi cần làm |
|----------|------|--------|------------------------|
| BRD | ... | High/Med/Low | ... |
| SRS | ... | High/Med/Low | ... |
| US-XXX | ... | High/Med/Low | ... |
| Test Case | ... | High/Med/Low | ... |

## Ước lượng effort
- BA: X giờ
- Dev: X giờ (estimate, cần confirm với Tech Lead)
- Tester: X giờ (estimate, cần confirm với Tester)

## Rủi ro
[Các rủi ro nếu thay đổi này được thực hiện]

## Khuyến nghị
[ ] Approve thay đổi và update artifacts
[ ] Reject — giữ nguyên requirement hiện tại
[ ] Defer — đưa vào backlog phase sau
```
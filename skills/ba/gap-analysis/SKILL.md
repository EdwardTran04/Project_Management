---
name: gap-analysis
description: Phân tích tài liệu đầu vào để tìm gaps — thông tin thiếu, mâu thuẫn, NFR chưa định nghĩa — và tạo danh sách open questions cần làm rõ với KH.
disable-model-invocation: true
---

Phân tích gaps trong tài liệu yêu cầu.

Đọc tất cả tài liệu trong `01_input/raw-requirements/` và `01_input/existing-system/` (nếu có).

Kiểm tra theo checklist sau:

**Functional gaps:**
- Có use case nào được đề cập nhưng chưa mô tả flow không?
- Có actor nào được nhắc đến nhưng chưa rõ quyền hạn/vai trò?
- Có nghiệp vụ nào chỉ mô tả happy path, thiếu error/exception flow?
- Có tích hợp hệ thống ngoài nào chưa rõ contract (input/output)?

**Non-functional gaps:**
- Performance: response time, throughput, concurrent users — có số liệu chưa?
- Availability / SLA: uptime yêu cầu bao nhiêu?
- Security: authentication, authorization, data protection?
- Data retention: dữ liệu lưu bao lâu, xóa khi nào?

**Scope gaps:**
- Có tính năng nào được ngụ ý (implied) nhưng chưa được confirm là trong scope?
- Có dependencies với hệ thống khác chưa được confirm sẽ sẵn sàng?

**Mâu thuẫn:**
- Có requirement nào xung đột với requirement khác trong cùng tài liệu?
- Có số liệu nào không nhất quán (ví dụ: "200,000 users" ở chỗ này, "50,000" ở chỗ khác)?

Tạo file `.claude/memory/open-questions.md` với format bảng — thiết kế để **copy toàn bộ bảng gửi thẳng cho KH**:

```markdown
# Open Questions — [Tên dự án/tính năng]

**Cập nhật:** YYYY-MM-DD
**Gửi:** [Tên KH / PM] — [email nếu có]

| ID | Nhóm | Câu hỏi cần làm rõ | Tài liệu liên quan | Ưu tiên | Deadline | Câu trả lời | Trạng thái |
|----|------|--------------------|--------------------|---------|----------|-------------|------------|
| OQ-001 | Functional | [Câu hỏi cụ thể, đủ context để KH hiểu không cần đọc thêm tài liệu] | [Tên tài liệu, mục] | 🔴 Critical | YYYY-MM-DD | | Open |
| OQ-002 | Functional | ... | ... | 🟡 High | YYYY-MM-DD | | Open |
| OQ-010 | Non-Functional | ... | ... | 🟡 High | YYYY-MM-DD | | Open |
| OQ-020 | Scope | ... | ... | 🟢 Medium | YYYY-MM-DD | | Open |
| OQ-030 | Mâu thuẫn | ... | ... | 🔴 Critical | YYYY-MM-DD | | Open |
```

**Quy tắc viết câu hỏi:**
- Dùng tiếng Việt rõ ràng, không viết tắt kỹ thuật
- Mỗi câu hỏi = 1 vấn đề duy nhất, không gộp nhiều câu hỏi
- Đủ context trong câu hỏi để KH trả lời không cần đọc thêm tài liệu
- Ưu tiên: 🔴 Critical = block BM.01 / 🟡 High = block BM.02-04 / 🟢 Medium = có thể assume tạm

**Khi OQ được trả lời** (từ `/intake-update` hoặc KH phản hồi):
- Điền vào cột "Câu trả lời"
- Đổi "Trạng thái" → `Resolved`
- Giữ dòng trong bảng — không xóa (audit trail)

Sau khi tạo file, tóm tắt cho user: tổng số gaps, bao nhiêu Critical (block BM.01), bao nhiêu có thể assume tạm.

**Bước tiếp theo — gửi câu hỏi cho KH:**

1. Export bảng OQ ra file Excel hoặc Word (BA làm thủ công) để gửi KH
2. Khi KH trả lời → đặt file vào `01_input/Q&A/`
3. Chạy `/process-qa` để cập nhật `open-questions.md` và ghi quyết định vào `decisions.md`

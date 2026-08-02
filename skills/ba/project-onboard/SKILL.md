---
name: project-onboard
description: Onboarding nhanh cho BA join dự án giữa chừng — tóm tắt tiến độ, quyết định đã chốt, open questions còn tồn, và xác định việc cần làm ngay. Dùng khi BA mới join hoặc cần nắm lại toàn bộ context dự án sau thời gian vắng.
---

# Onboarding BA vào dự án đang chạy

## Bước 1 — Thu thập thông tin

Hỏi BA cung cấp:
1. Tên dự án và phase hiện tại (nếu biết)
2. Role / nhiệm vụ chính: viết tiếp tài liệu nào? Phụ trách tính năng gì?
3. Tài liệu hiện có — paste hoặc đính kèm bất kỳ file nào đã có:
   - Tài liệu yêu cầu (PTYC, BRD, Feature Spec)
   - Tài liệu thiết kế (TKTT, TKCT, TKCSSDL)
   - User Stories, Use Cases
   - Decisions Log, Open Questions list
   - Project context (timeline, team, milestone)
4. Thông tin liên hệ chính: PM, KH/PO, Dev Lead (tên + vai trò)

Nếu BA chưa có tài liệu nào → ghi nhận và tạo Onboarding Brief với phần tài liệu để trống, đánh dấu `[CẦN TÌM]`.

Nếu BA đính kèm tài liệu, đọc toàn bộ trước khi tạo brief.

---

## Bước 2 — Tạo Onboarding Brief

---

# Onboarding Brief — [Tên dự án]

**Ngày join:** dd/mm/yyyy
**BA:** [Tên]
**Phase hiện tại:** [Phase]

## 1. Tổng quan dự án

[Mục tiêu dự án, khách hàng, timeline còn lại, deliverable chính]

## 2. Tài liệu đã có

| Tài liệu | Version | Trạng thái | Ngày cập nhật | Ghi chú |
|----------|---------|-----------|--------------|---------|
| PTYC | | | | |
| TKTT | | | | |
| TKCT | | | | |
| User Stories | [N] stories | | | |

## 3. Quyết định đã chốt (cần biết ngay)

- **[DEC-XXX]** [Nội dung quyết định] — *[Lý do / ảnh hưởng ngắn gọn]*

## 4. Open Questions còn tồn

- [ ] **[OQ-XXX]** [Nội dung câu hỏi] — **Priority:** High / Medium
  → Cần hỏi ai? Deadline?

## 5. Tài liệu cần viết tiếp / hoàn thiện

- [ ] [Tên tài liệu] — Trạng thái: [Draft, còn thiếu section X]
- [ ] [User Story US-XXX] — AC chưa hoàn chỉnh

## 6. Việc ưu tiên làm ngay (tuần đầu)

1. Clarify open questions: [danh sách OQ Priority High]
2. Đọc kỹ: [tài liệu cốt lõi cần nắm trước]
3. Tiếp tục: [tài liệu đang Draft cần hoàn thiện]

## 7. Liên hệ chính

| Vai trò | Tên | Hỏi về |
|---------|-----|--------|
| PM | | Scope, milestone, priority |
| KH / PO | | Requirement, business rule |
| Dev Lead | | Technical constraint |

---

Hỏi BA: "Lưu vào file không?" → nếu có: xuất file, tên gợi ý `onboard-brief_[tên-ba]_[tên-dự-án].md`.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Xem trạng thái toàn bộ tài liệu | skill: doc-status | Sau khi đọc xong brief |
| Xử lý Q&A nếu có file KH trả lời | skill: process-qa | Đóng OQ từ danh sách mục 4 |
| Viết tiếp tài liệu còn dở | skill tương ứng | Từ danh sách mục 5 |
| Phân loại ưu tiên nếu scope chưa rõ | skill: prioritize-requirements | Nếu mục 5 còn nhiều item |
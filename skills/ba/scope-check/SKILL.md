---
name: scope-check
description: Kiểm tra một request mới có nằm trong scope đã được approve không. Nếu ngoài scope, tạo Scope Change Request để PM và KH xem xét.
---

Kiểm tra scope của request mới.

Hỏi người dùng:
1. Mô tả request mới — request này là gì, yêu cầu thêm/sửa/bỏ gì?
2. Nguồn gốc: ai yêu cầu? (KH / Dev / internal / PM)
3. Mức độ urgency: cần trong sprint này hay có thể defer?
4. Paste Scope In / Scope Out đã được approve — lấy từ PTYC Phần 1.2 hoặc BRD. Nếu chưa có tài liệu scope chính thức, mô tả phạm vi dự án đang hiểu.

Nếu người dùng đính kèm PTYC hoặc BRD, đọc Phần 1.2 Phạm vi trước khi đánh giá.

---

Đánh giá theo 3 mức:

**✅ IN SCOPE** — request rõ ràng nằm trong Scope In đã approve
→ Tạo User Story bình thường bằng `skill: create-user-story`. Không cần làm thêm.

**⚠️ BORDERLINE** — request không rõ ràng in hay out
→ Ghi nhận vào Open Questions, hỏi KH clarify. Không implement cho đến khi được confirm.

**❌ OUT OF SCOPE** — request rõ ràng ngoài Scope In hoặc thuộc Scope Out
→ Tạo Scope Change Request theo template dưới đây.

---

Template Scope Change Request:

# Scope Change Request — SCR-[số]

**Ngày:** dd/mm/yyyy
**Người yêu cầu:** [Tên + vai trò]
**Mô tả request:** [Nội dung yêu cầu thay đổi]

## Đánh giá

**Kết luận:** Ngoài scope — [lý do cụ thể, dẫn chiếu PTYC/BRD section nào]

## Tác động nếu accept

| Hạng mục | Ước lượng |
|---------|----------|
| Effort | X ngày / X điểm |
| Artifacts cần cập nhật | PTYC, TKCT, User Story, Test Case |
| Ảnh hưởng timeline | Có thể lùi milestone [tên] khoảng X ngày |

## Khuyến nghị BA

- [ ] Accept — đưa vào backlog phase sau
- [ ] Accept — bổ sung vào sprint hiện tại *(cần PM approve timeline)*
- [ ] Reject — không phù hợp với mục tiêu dự án

**Lý do khuyến nghị:** [BA giải thích ngắn gọn]

## Cần approval từ

- [ ] PM
- [ ] KH / Stakeholder

---

Hỏi BA: "Lưu SCR vào file không?" → nếu có: xuất file, tên gợi ý `scr-[số]_[mô tả ngắn].md`.

> Nhắc BA: scope change cần PM và KH approve trước khi bắt đầu phân tích hoặc implement.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Request IN SCOPE → viết User Story | skill: create-user-story | Sau khi confirm in scope |
| Request BORDERLINE → ghi Open Question | skill: process-qa | Khi KH trả lời thì đóng OQ |
| SCR được approve → cập nhật PTYC | skill: create-ptyc | Phần 1.2 Phạm vi cần cập nhật |
| SCR được approve → đánh giá rủi ro | skill: risk-assessment | Scope change thường kéo theo Timeline Risk |
---
name: prioritize-requirements
description: Phân loại độ ưu tiên tất cả requirements theo MoSCoW — dùng khi cần negotiate scope với PM/KH hoặc khi timeline không đủ để deliver toàn bộ.
---

Phân loại ưu tiên requirements theo MoSCoW.

Hỏi người dùng:
1. Paste danh sách requirements (REQ-ID + mô tả) vào đây — hoặc đính kèm PTYC/BRD/Feature Spec.
2. Timeline hiện tại cho phép deliver bao nhiêu % scope?
3. Business objective nào là cốt lõi nhất — nếu chỉ deliver 1 thứ thì là gì?
4. Có stakeholder nào có requirement đặc biệt quan trọng không?

Nếu người dùng đính kèm tài liệu, đọc và rút trích danh sách FR + NFR trước khi hỏi thêm.

---

Giải thích MoSCoW cho BA nếu cần:
- **Must have:** Thiếu thì sản phẩm không dùng được, không thể launch.
- **Should have:** Quan trọng nhưng có workaround tạm thời nếu chưa có.
- **Could have:** Nice-to-have, thêm vào nếu còn thời gian.
- **Won't have (this time):** Không làm lần này, có thể xem xét phase sau.

Với từng requirement, hỏi BA phân loại và ghi lý do. Không tự phân loại thay BA — chỉ gợi ý nếu được hỏi.

---

Tạo Requirements Priority theo template sau:

# Requirements Priority — [Tên dự án / Sprint]

**Ngày:** dd/mm/yyyy
**Tổng requirements:** X

## Must Have (phải có để launch)

| REQ-ID | Mô tả | Lý do Must Have |
|--------|-------|----------------|
| REQ-001 | | |

## Should Have (nên có, có workaround)

| REQ-ID | Mô tả | Workaround nếu defer | Defer sang khi nào |
|--------|-------|--------------------|--------------------|
| | | | |

## Could Have (có thì tốt)

| REQ-ID | Mô tả | Lợi ích nếu có |
|--------|-------|--------------|
| | | |

## Won't Have This Time

| REQ-ID | Mô tả | Lý do defer | Phase dự kiến |
|--------|-------|------------|--------------|
| | | | |

## Tóm tắt

| Nhóm | Số requirements | % effort ước tính |
|------|----------------|------------------|
| Must Have | | |
| Should Have | | |
| Could Have | | |
| Won't Have | | |

## Rủi ro nếu defer Should Have

[Mô tả hệ quả cụ thể nếu các Should Have không được deliver đúng hạn]

---

Hỏi user: "Lưu vào file không?" → nếu có: xuất file, tên gợi ý `requirements-priority_[tên-dự-án].md`.

> Dùng kết quả này khi thảo luận scope với PM — không negotiate scope mà không có tài liệu này.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Kiểm tra coverage đầy đủ | skill: create-traceability-matrix | Map Must Have → US → TC |
| Viết User Story cho Must Have | skill: create-user-story | Ưu tiên Must Have trước |
| Cập nhật PTYC nếu scope thay đổi | skill: create-ptyc | Won't Have cần ghi vào Phần 1.2 Phạm vi |
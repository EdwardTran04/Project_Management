# CR Log — Change Request Tracking

Ghi lại toàn bộ timeline và lifecycle của Change Request từ khách hàng.

## Quy ước trạng thái CR

| Trạng thái | Folder | Mô tả |
|-----------|--------|-------|
| **Pending** | `pending/` | CR mới tiếp nhận, chưa phân tích |
| **Analyzing** | `analyzing/` | Đang phân tích impact, effort, scope |
| **Approved** | `approved/` | PM duyệt, đưa vào backlog để implement |
| **Completed** | `completed/` | Đã implement xong, tài liệu baseline đã cập nhật |
| **Rejected** | `rejected/` | Từ chối (out-of-scope, không khả thi, KH rút yêu cầu) |

## Quy ước đánh giá CR (Triage)

| Tiêu chí | Mức nhỏ (S) | Mức trung bình (M) | Mức lớn (L) | Mức rất lớn (XL) |
|----------|-------------|--------------------|--------------|--------------------|
| Effort (ngày công) | ≤ 1 ngày | 2–5 ngày | 6–15 ngày | > 15 ngày |
| Impact scope | 1 module | 2–3 modules | > 3 modules | Toàn hệ thống |
| Tài liệu ảnh hưởng | 1–2 file | 3–5 files | 6–10 files | > 10 files |
| Version bump dự kiến | PATCH | MINOR | MINOR–MAJOR | MAJOR |

→ Nếu CR ≥ L → xem xét đưa vào **backlog riêng** hoặc tách sprint.
→ Nếu CR = XL → cân nhắc tạo **dự án con / phase mới**.

---

## Timeline Log

| Thời gian | CR-ID | Hành động | Từ | Đến | Người | Ghi chú |
|-----------|-------|-----------|-----|-----|-------|---------|
| | | | | | | |

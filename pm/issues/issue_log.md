# Nhật Ký Vấn Đề (Issue Log)

**Cập nhật lần cuối:** 11/08/2026

> **Issue = rủi ro đã xảy ra hoặc vấn đề đang chặn công việc.** Khác với CR (yêu cầu thay đổi phạm vi) — issue cần xử lý, CR cần quyết định.

## Danh sách vấn đề

| ID | Ngày phát hiện | Mô tả vấn đề | Mức độ (Thấp/TB/Cao) | Ảnh hưởng (WBS/milestone) | Người xử lý | Hành động & tiến độ | Deadline | Trạng thái |
|----|----------------|--------------|----------------------|---------------------------|-------------|---------------------|----------|------------|
| ISS-01 | 11/08/2026 | 6 màn Chi tiết task đang dùng mock data, chưa có API backend để kết nối | Cao | WBS 4.1 — M5 (29/08) | PM + Backend | Đã gửi đề xuất API 3.1–3.7 trong `dev/api-specs/api-contract_inbound.md`; chờ backend chốt | 15/08/2026 | 🟠 Đang xử lý |
| ISS-02 | [Ngày] | [VD: App mất đăng nhập khi token SSO hết hạn — chưa có luồng refresh] | | | | | | ⬜ Mở |
| ISS-03 | [Ngày] | [VD: File PDF BBBG không xem được trên Android] | | | | | | |

## Quy tắc

- Mỗi issue có **1 người xử lý chính** + deadline — quyền quyết khi nào đóng: PM
- Issue chưa xử lý quá 1 tuần → tự động đưa lên báo cáo tuần với lý do
- Đóng issue khi đã verify (không chỉ "làm xong") — ghi trường hợp kiểm chứng

## Lịch sử đóng

| Ngày đóng | ID | Kết quả verify | Bởi |
|-----------|----|----------------|-----|
| | | | |
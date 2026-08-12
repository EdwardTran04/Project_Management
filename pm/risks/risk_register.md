# Đăng Ký Rủi Ro (Risk Register)

**Version:** 1.0.0 | Cập nhật lần cuối: 11/08/2026

## Thang đánh giá

**Xác suất (P):** 1 Thấp → 2 TB → 3 Cao | **Tác động (I):** 1 Nhẹ → 2 TB → 3 Nghiêm trọng | **Điểm = P × I** (≥6 nghiêm trọng, 4–5 đáng quan tâm, ≤3 theo dõi)

## Danh sách rủi ro

| ID | Rủi ro | P | I | Điểm | Kế hoạch ứng phó (Mitigate/Transfer/Avoid/Accept) | Hành động cụ thể | Người theo dõi | Deadline | Trạng thái |
|----|--------|---|---|------|---------------------------------------------------|------------------|----------------|----------|------------|
| R-01 | Khách thay đổi phạm vi liên tục (scope creep) | 3 | 3 | 9 | Mitigate | Mọi yêu cầu qua CR; baseline chặt; báo nếu ngoài phạm vi | PM + BA | Thường trực | 🟠 Đang quản lý |
| R-02 | Dữ liệu đồng bộ SAP lệch (VL31N, Mvt 101, tồn kho) | 2 | 3 | 6 | Mitigate | Test tích hợp sớm, log đối soát 2 chiều, checklist dữ liệu | Backend + Tester | Trước M6 | 🟠 Đang quản lý |
| R-03 | Backend chưa chốt endpoint API Chi tiết task → Dev kẹt | 3 | 2 | 6 | Mitigate | Chốt API contract sớm (M4); dự phòng tiếp tục UI mock | PM | 15/08/2026 | 🟠 Đang quản lý |
| R-04 | Môi trường staging SAP/VOffice chậm cấp | 2 | 2 | 4 | Transfer/Mitigate | Đề nghị khách cấp sớm; dùng sandbox thay thế tạm | PM | Trước M5 | 🟢 Theo dõi |
| R-05 | Nhân sự nghỉ/thiếu trong giai đoạn cao điểm | 2 | 2 | 4 | Mitigate | Capacity plan theo phase; san sẻ công việc | PM | Thường trực | 🟢 Theo dõi |
| R-06 | Thiết bị PDA/RFID không khả dụng khi test thực địa | 2 | 1 | 2 | Accept | Dùng mô phỏng trên mobile nếu thiếu thiết bị | PM | Trước M6 | 🟢 Theo dõi |
| R-07 | [Bổ sung — ví dụ: an ninh thông tin SSO] | | | | | | | | |

## Quy tắc

- Review rủi ro: **mỗi tuần** trong họp standup/status; khi điểm ≥ 6 → đưa lên báo cáo tuần
- Rủi ro xảy ra → **chuyển thành Issue** (mở ISSUE mới trong `issues/issue_log.md`)
- Người theo dõi cập nhật hành động mỗi tuần — không để hàng động "treo"

## Lịch sử thay đổi

| Ngày | ID | Thay đổi (mở mới/đóng/điểm số) | Bởi |
|------|----|-------------------------------|-----|
| 11/08/2026 | R-01…R-06 | Khởi tạo register | PM |
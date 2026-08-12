# Kế Hoạch Ngân Sách (Budget Plan)

**Version:** 1.0.0 | Dự án: AI-WMS | Cập nhật: 11/08/2026

## 1. Tổng ngân sách

| Khoản | Giá trị (VNĐ) | Tham chiếu |
|-------|---------------|------------|
| **Tổng ngân sách dự án (ký hợp đồng)** | [Số tiền] | `raw/contracts/` |
| Dự phòng (contingency) — tối thiểu 10% | [Số tiền] | Quyết định PM |
| Ngân sách dùng được (baseline) | [Số tiền] | = Tổng − Dự phòng |

> ⚠️ Mọi vượt ngân sách > 5% phải có quyết định của Sponsor + ghi `decisions/decision_log.md`.

## 2. Phân bổ theo hạng mục (dự kiến)

| # | Hạng mục | Ngân sách (VNĐ) | Đơn vị tính | Ghi chú |
|---|----------|-----------------|-------------|---------|
| 1 | Nhân lực — BA | [Số tiền] | ngày công × đơn giá | |
| 2 | Nhân lực — Dev (Flutter + Backend) | [Số tiền] | ngày công | |
| 3 | Nhân lực — Tester | [Số tiền] | ngày công | |
| 4 | Hạ tầng (staging, server, license) | [Số tiền] | tháng | Môi trường Liferay/SAP/VOffice staging |
| 5 | Thiết bị (PDA/RFID thuê hoặc mua phục vụ test) | [Số tiền] | bộ | |
| 6 | Chi phí KH khác (đi lại, họp) | [Số tiền] | — | |
| **Tổng** | | [Số tiền] | | |

## 3. Quy tắc quản lý

- Mọi chi tiêu > [Ngưỡng, VD 10 triệu] cần PM duyệt trước
- Chi phí phát sinh do CR → tách riêng, tính vào "phạm vi mới" (xem CR + `scope_management.md`)
- Cập nhật số liệu thực tế vào `cost_tracking.md` **cuối mỗi tuần**
- Báo cáo chi phí cho Sponsor trong báo cáo cột mốc (M4, M6, M7)
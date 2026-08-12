# Nhật Ký Quyết Định (Decision Log)

**Cập nhật lần cuối:** 11/08/2026

> Ghi lại mọi quyết định quan trọng kèm **lý do** — kể cả quyết định sau này bị đảo ngược, để team hiểu vì sao (tránh tranh cãi lặp lại).

## Bảng quyết định

| ID | Ngày | Quyết định | Lý do / Bối cảnh | Các lựa chọn đã xem xét | Người quyết định | Ảnh hưởng (scope/cost/tiến độ) | Trạng thái (Active/Reversed) |
|----|------|-----------|------------------|-------------------------|------------------|-------------------------------|------------------------------|
| DEC-001 | 02/08/2026 | Cấu trúc workspace v2.0.0 (ba/dev/test/pm tách riêng) | Tổ chức tài liệu theo vai trò, AI-agent dễ tìm SSoT | (a) 1 folder tài liệu chung; (b) tách theo vai trò | PM | Chỉ ảnh hưởng nội bộ | ✅ Active |
| DEC-002 | 11/08/2026 | API Chi tiết task chuẩn prefix `/api/registration/...`, dùng chung base URL 10.10.250.64:8080 | Đồng bộ với backend đang dùng (tasks/search, dash-board) | (a) theo bản đồ API SRS `/api/v1/...`; (b) theo prefix hiện có | PM + Backend | Ảnh hưởng WBS 4.1/4.2 — cần backend chốt | ✅ Active (chờ backend xác nhận) |
| DEC-003 | [Ngày] | [VD: Chọn Flutter làm framework mobile] | | | | | |
| DEC-004 | [Ngày] | [VD: Bỏ form đăng nhập, dùng SSO ticket qua WebView] | | | | | |

## Quy tắc

1. Quyết định ảnh hưởng scope/cost/schedule → **PHẢI** ghi vào log này (gắn link CR nếu có)
2. Khi đảo ngược quyết định → thêm dòng mới, đánh dấu cũ là **Reversed** kèm lý do, không xóa dòng cũ
3. Các quyết định kỹ thuật chi tiết (kiến trúc, thư viện) → xem thêm `dev/` (ADR nếu có); log này dùng cho quyết định tầm dự án
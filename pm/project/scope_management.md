# Quản Lý Phạm Vi (Scope Management)

**Version:** 1.0.0 | **Ngày:** 11/08/2026

## 1. Tuyên bố phạm vi (Scope Statement)

**Mục tiêu đưa ra:** Hệ thống AI-WMS quản lý kho thông minh cho phân hệ Nhập kho (Inbound) trước tiên, vận hành trên Mobile App, đồng bộ SAP S/4HANA & VOffice.

### Bao gồm (In-Scope)

| # | Hạng mục | Sản phẩm đầu ra | Nguồn tham chiếu |
|---|----------|-----------------|------------------|
| 1 | Mobile: Danh sách lệnh nhập, Tiếp nhận (Gate 1) | Màn hình [M-DS], [M-Acc] | SRS Mobile MM.10A §3.1.1–3.1.2 |
| 2 | Mobile: Task tác nghiệp (Dỡ hàng → Kiểm → Khu chờ → Thực nhập → Đóng gói → Putaway) | 6–8 màn hình task | SRS Mobile MM.10A §3.1.3–3.1.10 |
| 3 | Mobile: Ký BBBG điện tử & Trình ký VOffice | Màn hình [M-Sig1], [M-VOff] | SRS Mobile MM.10A |
| 4 | Backend: API registration (tasks/search, dash-board...) | API contract | `dev/api-specs/api-contract_inbound.md` |
| 5 | Tích hợp SAP (VL31N, Mvt 101, KCS, tồn kho) & VOffice | Luồng đồng bộ T-API/V-API | SRS Đồng bộ thông tin NCC |

### Loại trừ (Excluded)

- Xuất kho (Outbound) — triển khai giai đoạn sau
- Web admin đầy đủ (chỉ có màn hình cần thiết cho vận hành kho)
- [Bổ sung theo MOM/CR]

> **Quy tắc:** Mọi thêm/sửa/bớt so với bảng trên **BẮT BUỘC** đi qua CR (tại `ba/documents/cr/`). PM triage → duyệt. Không implement "chui" ngoài CR.

## 2. Cơ chế kiểm soát phạm vi

| Cơ chế | Tần suất | Người thực hiện |
|--------|----------|-----------------|
| Review CR (effort, impact, version bump) | Khi có CR mới | PM + BA |
| Diff so sánh baseline vs new trước khi promote | Khi có bản mới | Skill `pm-doc-version-control` |
| Review tiến độ tuần đối chiếu phạm vi | Hàng tuần | PM |
| Vòng chốt phạm vi với khách | Theo lịch họp | PM + Sponsor |

## 3. Các tài liệu phạm vi liên quan

| Tài liệu | Vị trí |
|----------|--------|
| Dự án tổng quan (bản của BA) | `ba/project/project_overview.md` |
| SRS Nhập kho / Xuất kho (baseline) | `ba/documents/srs/baseline/` |
| SRS Mobile MM.10A | `ba/documents/srs/new/SRS_MM.10A_..._Mobile_v1.0.0.md` |
| Log CR | `ba/documents/cr/cr_log.md` |
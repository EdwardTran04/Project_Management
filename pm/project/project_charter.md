# Điều Lệ Dự Án (Project Charter) — AI-WMS

> Đây là **giấy phép khởi động dự án** — PM hoàn thiện & được Sponsor phê duyệt trước khi triển khai.
> **Version:** 1.0.0 | **Ngày:** 11/08/2026 | **Trạng thái:** Draft

## 1. Thông tin tổng quan

| Mục | Nội dung |
|-----|----------|
| **Tên dự án** | AI-WMS — Hệ thống quản lý kho thông minh |
| **Mã dự án** | AIWS-S406 |
| **Nhà cung cấp** | Viettel (VTIT) |
| **Khách hàng / Sponsor** | [Tên đơn vị vận hành kho] |
| **PM (Người điều phối)** | Nguyễn Tấn Đông |
| **Ngày bắt đầu** | 22/07/2026 |
| **Ngày kết thúc dự kiến** | [DD/MM/YYYY] |

## 2. Mục đích & Mục tiêu

- **Mục đích:** Số hóa toàn bộ quy trình kho — từ nhập kho (NCC/Thu hồi) → lưu trữ → xuất kho — kết nối trực tiếp với SAP S/4HANA và VOffice.
- **Mục tiêu đo lường được (KPI):**
  - [ ] Màn hình mobile tác nghiệp kho (10 màn hình MM.10A) hoàn thành đúng spec
  - [ ] Tích hợp đồng bộ 2 chiều SAP: Inbound Delivery VL31N, Mvt 101, tồn kho
  - [ ] Thời gian xử lý 1 lệnh nhập đạt SLA theo cam kết
  - [ ] [Bổ sung KPI khác]

## 3. Phạm vi

**Trong phạm vi (In-Scope):**
- Wirehouse: Nhập kho mua hàng NCC (MM.10A), Thu hồi công trình/tram (MM.10B/C/D), nhập khác
- Mobile app thủ kho/NV kho: danh sách lệnh, tiếp nhận, task tác nghiệp (dỡ hàng → kiểm hàng → khu chờ nhập → thực nhập → đóng gói → putaway), ký số BBBG & VOffice
- Đồng bộ thông tin NCC, tích hợp SAP & VOffice

**Ngoài phạm vi (Excluded):** [VD: xuất kho, quản lý hàng trả lại...]

> Chi tiết phạm vi & sản phẩm bàn giao xem `project/scope_management.md` và SRS tại `ba/documents/srs/`.

## 4. Kiến trúc tổng thể (tổng quan)

```text
Mobile App (Flutter/PDA) ──► API Gateway (REST/JSON) ──► Backend AI-WMS
                                                          ├──► SAP S/4HANA (VL31N, Mvt 101, tồn kho)
                                                          └──► VOffice (trình ký điện tử)
```

## 5. Các bên liên quan & vai trò (tham chiếu RACI đầy đủ tại `ba/stakeholders/raci_matrix.md`)

Chi tiết nhân sự và vai trò xem tại [team_roster.md](file:///c:/Users/quantm18/Desktop/New%20folder/Project_Management/pm/resources/team_roster.md). Dưới đây là tóm tắt các vai trò chính:

| Vai trò | Tên | Trách nhiệm chính |
|---------|-----|-------------------|
| Sponsor | [Tên khách hàng] | Phê duyệt ngân sách, quyết định vượt phạm vi |
| PM | Nguyễn Tấn Đông | Điều phối toàn dự án, báo cáo tiến độ |
| BA | Trần Minh Quân, Đào Đình Hà, Lê Minh Quang | Nghiên cứu yêu cầu, viết SRS, URD, spec API |
| Dev (Mobile - Flutter) | Bùi Văn Đoàn, Ninh Văn Hòa, Nguyễn Văn Trường | Xây dựng mobile app tác nghiệp kho (PDA) |
| Dev (Backend / Web) | Ngô Doãn Hồng Hiệp, Nguyễn Thành Chiến, Hoàng Tuấn Anh, Đỗ Thế Nhuận, Nguyễn Trung Quang, Lê Hoàng Đức, Nguyễn Huy Tùng, Nguyễn Phan Dương | Xây dựng hệ thống Backend, Web Frontend & Tích hợp SAP/VOffice |
| Tester | Nguyễn Duy | Lập Test plan, viết Test Case, chạy Test & UAT |
| Đầu mối khách hàng | [Tên đầu mối] | Xác nhận yêu cầu, phối hợp kiểm thử & nghiệm thu |

## 6. Các cột mốc chính (chi tiết tại `schedule/milestone_plan.md`)

| Cột mốc | Ngày dự kiến | Sản phẩm đầu ra |
|---------|--------------|-----------------|
| Khởi động dự án & chốt yêu cầu | 22/07/2026 | SRS baseline |
| Chốt SRS Nhập kho (baseline) | 17/07/2026 | SRS NhapKho baseline |
| Chốt SRS Xuất kho (baseline) | 14/07/2026 | SRS XuatKho baseline |
| Phân tích & thiết kế | [Ngày] | TKCT, API contract |
| Phát triển & tích hợp | [Ngày] | Code, tích hợp SAP |
| Kiểm thử UAT | [Ngày] | Báo cáo test, xác nhận UAT |
| Chuyển giao & nghiệm thu | [Ngày] | Biên bản nghiệm thu |

## 7. Ngân sách sơ bộ (chi tiết tại `budget/budget_plan.md`)

| Hạng mục | Ngân sách dự kiến (VNĐ) |
|----------|--------------------------|
| Nhân lực (BA, Dev, Test) | [Số tiền] |
| Hạ tầng & phần mềm | [Số tiền] |
| Chi phí tích hợp/khác | [Số tiền] |
| **Tổng** | [Số tiền] |

## 8. Rủi ro chính (chi tiết tại `risks/risk_register.md`)

| Rủi ro | Mức độ | Kế hoạch ứng phó |
|--------|--------|------------------|
| Thay đổi phạm vi liên tục từ khách | Cao | Quản lý CR chặt chẽ, chốt baseline |
| Dữ liệu đồng bộ SAP lệch | Cao | Test tích hợp sớm, log đối soát |
| [Bổ sung] | | |

## 9. Các giả định (Assumptions)

- Môi trường staging của SAP/VOffice sẵn sàng đúng kế hoạch
- Nhân sự team đầy đủ theo tiến độ
- [Bổ sung]

## 10. Các ràng buộc (Constraints)

- Deadline nghiệm thu theo hợp đồng (xem `raw/contracts/`)
- Tuân thủ quy trình kho của Tập đoàn (SAP MM.10x)
- [Bổ sung]

## 11. Phê duyệt

| Vai trò | Tên | Chữ ký / Phê duyệt | Ngày |
|---------|-----|--------------------|------|
| Sponsor | | ☐ | |
| PM | | ☐ | |
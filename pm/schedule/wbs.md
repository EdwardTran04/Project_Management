# WBS — Cấu Trúc Phân Rã Công Việc (Work Breakdown Structure)

**Version:** 1.0.0 | Dự án: AI-WMS

> Cấp 1 = Giai đoạn | Cấp 2 = Work package (đơn vị ước lượng & bám tiến độ) | Cấp 3 = Công việc chi tiết (gợi ý)

## Cấp 1 & 2

| WBS | Cấp 1 — Giai đoạn | Cấp 2 — Work package | Phụ trách | Tài liệu đầu ra |
|-----|-------------------|----------------------|-----------|-----------------|
| 1.0 | Quản lý dự án | PM | | Báo cáo, log |
| 1.1 | | Kế hoạch, điều phối | PM | Charter, plan |
| 1.2 | | Quản lý CR / risk / issue | PM | CR, registers |
| 2.0 | Yêu cầu & Phân tích | BA | | |
| 2.1 | | Thu thập & chốt yêu cầu | BA | PTYC/MOM |
| 2.2 | | Viết & baseline SRS Nhập kho / Xuất kho / Mobile | BA | SRS |
| 2.3 | | Quản lý CR (triage, impact) | BA + PM | CR |
| 3.0 | Thiết kế | BA + Dev | | |
| 3.1 | | Định nghĩa API contract (inbound, task detail) | BA + Backend | api-contract |
| 3.2 | | Thiết kế TKCT mobile (10 màn hình MM.10A) | BA | TKCT |
| 4.0 | Phát triển | Dev | | |
| 4.1 | | Mobile app (danh sách lệnh, tiếp nhận, task tác nghiệp) | Flutter Dev | Code |
| 4.2 | | Backend registration (tasks/search, dash-board, detail...) | Backend Dev | API, DB |
| 4.3 | | Tích hợp SAP (VL31N, Mvt 101, KCS) & VOffice | Backend Dev | Luồng đồng bộ |
| 5.0 | Kiểm thử | Tester | | |
| 5.1 | | Test plan & test cases | Tester | Test plan/TC |
| 5.2 | | Test tích hợp SAP & regression | Tester | Bug reports |
| 5.3 | | UAT với khách | PM + Tester | Biên bản UAT |
| 6.0 | Chuyển giao | PM + cả team | | |
| 6.1 | | Đào tạo & tài liệu hướng dẫn | PM + BA | User guide |
| 6.2 | | Nghiệm thu & bàn giao | PM | Biên bản nghiệm thu |

## Cấp 3 — Ví dụ chi tiết cho 4.1 (Mobile)

```text
4.1 Mobile App
├── 4.1.1 Màn hình Danh sách lệnh nhập [M-DS]         (API: dashboard, cumulative-stats, search)
├── 4.1.2 Màn hình Tiếp nhận lệnh [M-Acc]             (API: detail, accept, reject)
├── 4.1.3 Task: Dỡ hàng / Kiểm hàng / Khu chờ nhập    (kết nối mock → API thật)
├── 4.1.4 Task: Thực nhập / Đóng gói & In tem
├── 4.1.5 Ký BBBG & Trình ký VOffice
└── 4.1.6 Đăng nhập SSO (ticket CAS)
```

## Quy tắc WBS

1. Mỗi work package cấp 2 có **1 người phụ trách duy nhất** (RACI).
2. Work package ≤ 1 tuần — nếu dài hơn phải tách nhỏ hơn.
3. Mỗi work package có **sản phẩm đầu ra** đo lường được.
4. Tiến độ = % hoàn thành theo deliverable, không theo thời gian ngồi làm.
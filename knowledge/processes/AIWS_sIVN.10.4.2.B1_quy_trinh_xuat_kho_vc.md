# sIVN.10.4.2.B1 — Quy Trình Xuất Kho Sử Dụng Vận Chuyển (VC) — Kho Thông Minh AI-WS

> **Mã quy trình:** sIVN.10.4.2.B1 (Quy trình xuất kho sử dụng vận chuyển — VC)
> **Tên quy trình:** Luồng Xuất Kho VC (vận chuyển) — Hệ thống Kho Thông Minh tương lai (AI-WS)
> **Hệ thống tham gia:** AI-WS (Hệ thống Kho Thông Minh) × V-Office × SAP (qua các API T-API*) × Đối tác vận chuyển (TSA)
> **Tài liệu nguồn:** `raw/Process/Quy trinh kho 2026 -VERP-Smart-Xuất kho VC.pdf` (Tài liệu giải pháp quy trình Hệ thống kho thông minh tương lai, Ban Đầu tư-Xây dựng, Tập đoàn Công nghiệp-Viễn thông Quân đội, Hà Nội, tháng 4/2026)
> **Trạng thái:** Bản khởi tạo (20/04/2026) — Tài liệu giải pháp quy trình

---

## 1. CÁC ĐIỂM CHÍNH

> Nội dung mục "CÁC ĐIỂM CHÍNH" nằm trong luồng diagram (hình) của PDF gốc — chưa có text trích xuất được.

- Xuất kho VC khác xuất kho thường ở khối **điều phối vận chuyển** đầu luồng: Sắp lịch xe (`T-S2`) → Phê duyệt vận chuyển (`T-VDA`) → Chuyển đối tác xe (`T-S3`) → Phê duyệt đối tác (`T-TSA`, Đối tác vận chuyển TSA) → Cập nhật thông tin xe (`T-UI`).
- Sau khi có xe/lịch, luồng nối tiếp giống xuất kho thường: đề xuất giao việc (`T-S5`) → phê duyệt (`T-Apr`) → lấy hàng, đóng gói, lưu trữ lại, kiểm hàng, ký BBBG, thực xuất kho, trả API, ký V-Office, tải hàng lên xe (`T-Ldg`).
- Phân vai: **System** (tự động, KPI ≤ 5–10s), **Hybrid** (người + hệ thống), **Human** (tác nghiệp kho thủ công).
- Task vượt 90% KPI → nhắc việc (`T-S11`); hết KPI → hủy task (`T-S12`).
- Cuối luồng chuyển tiếp sang các quy trình liên quan: Xử lý chứng từ, Vận chuyển, Nhập kho A2 (đầu nhận).

## 2. KPI VÀ DASHBOARD QUY TRÌNH

### KPI vận hành tổng thể

| ID | Tên bước | Đầu vào | Thực hiện | Đầu ra | Role | System/Human | KPI |
|---|---|---|---|---|---|---|---|
| T-API1 | Start | Lệnh xuất kho | Validate dữ liệu | Hợp lệ | System | System | ≤5s |
| T-S1 | Giao việc | Lệnh xuất | Sinh task | Task | System | System | ≤5s |
| T-GI | Thực hiện | Dữ liệu | Kiểm tra | Yes/No | Thủ kho | Hybrid | ≤30p |
| API2 | Trả API2 | Request | Response | OK | System | System | ≤3s |
| T-S2 | Sắp lịch xe | Thông tin giao | Tối ưu lịch | Lịch xe | System | System | ≤5s |
| T-VDA | Phê duyệt | Request | Approve | Approved | Quản lý | Hybrid | ≤1h |
| T-S3 | Chuyển đối tác | Danh sách | Danh sách | Đối tác | System | System | ≤5s |
| T-TSA | Phê duyệt | Request | Approve | Đối tác | Quản lý | Hybrid | ≤2h |
| T-S5 | Đề xuất | Dữ liệu | Tính toán | Proposal | System | System | ≤10s |
| T-S6 | Duyệt | Proposal | Gửi duyệt | Request | System | System | ≤5s |
| T-Apr | Phê duyệt | Request | Approve | Approved | Quản lý | Hybrid | ≤3h |
| T-S7 | Update | Proposal | Approve | Approve | System | System | ≤5s |
| T-S8 | Update | Request | Approve | Approve | System | System | ≤5s |
| T-S9 | Giao việc | Approved | Assign | Task | System | System | ≤10s |
| T-Pac | Lấy hàng ra khu đóng gói | Hàng hóa | Hàng hóa | Danh mục | Kho | Human | ≤ X phút |
| T-S10 | Tính toán đóng gói | Request | Approve | Approve | System | System | ≤5s |
| T-S11 | Nhắc việc | 90% KPI->KPI | Notify | SMS/App | System | System | ≤10s |
| T-UI | Cập nhật thông tin xe | Request | Update | Update | Đối tác | Hybrid | ≤2h |
| T-S11 | Nhắc việc | 90% KPI->KPI | Notify | SMS/App | System | System | ≤10s |
| T-S12 | Hủy, Hết KPI | Timeout | Hủy | Cancel | System | Hybrid | ≤ 5 phút |
| T-S13 | Thông báo | KQ | Notify | SMS/App | System | System | ≤10s |
| T-S14 | Giao việc | Approved | Assign | Task | System | System | ≤10s |
| T-Mv5 | Thực hiện lưu trữ | Hàng hóa | Hàng hóa | Danh mục | Kho | Human | ≤ X phút |
| T-Mv5 | Xác nhận lưu trữ T-Mv5 | Hàng hóa | Hàng hóa | Danh mục | System | Human | ≤ 5 phút |
| T-Pac | In tem, đóng thùng | Hàng hóa | Đóng gói | Kiện | Kho | Human | ≤ X phút |
| T-Pac | Xác nhận | Hàng hóa | Hàng hóa | Kiện | System | Human | ≤ 5 phút |
| T-S15 | Yêu cầu lấy hàng | KQ | Notify | SMS/App | System | System | ≤10s |
| T-Scr | Cập nhật giờ xe ra/vào | Xe | Xe | Time update | System | Human | ≤ 5 phút |
| T-Ho | Kiểm hàng | Hàng hóa | Kiện | Đối tác | Kho | Human | ≤ X phút |
| T-AGI | Thực xuất kho | Request | Approve | Approved | Thủ kho | Hybrid | ≤5p |
| T-API3 | Trả API 3 | Request | Response | OK | System | System | ≤3s |
| T-Sig | Ký voffice | Request | Approve | Approved | Thủ kho | Hybrid | ≤10p |
| T-x | QT xử lý chứng từ | Dữ liệu | Kiểm tra | No | Quản lý | Hybrid | ≤120p |
| T-Ho | Ký BBBG: T-Ho | HOC | Approve | Đối tác | Thủ kho | Hybrid | ≤10p |
| T-Ldg | Tải hàng lên xe | Kiện | Kiện | Task | Kho | Human | ≤Xp |
| T-x | QT nhập kho | Phiếu xuất | Danh mục | Task | System | Hybrid | ≤Xp |
| T-x | QT vận chuyển | Xe | Kiện | Đối tác | System | Hybrid | ≤Xp |
| T-e | End | Success | Kết thúc | End | System | System | - |

### Thời gian chuẩn thao tác kho

| Loại hàng | Đơn vị | Thời gian chuẩn |
|---|---|---|
| Nhẹ (<50kg) | kiện | 1 phút/kiện |
| Trung bình | pallet | 3 phút/pallet |
| Nặng (>1 tấn) | pallet | 5–7 phút/pallet |

## 3. LUỒNG QUY TRÌNH (CÁC BƯỚC)

> Luồng chi tiết là sơ đồ (diagram) trong PDF gốc. Danh sách bước từ mục lục tài liệu:

1. Start – T-API1
2. Giao việc xử lý lệnh – T-S1
3. Thực hiện – T-GI1
4. Trả API2 – T-API2
5. Sắp lịch xe – T-S2
6. Phê duyệt vận chuyển – T-VDA
7. Chuyển đối tác xe – T-S3
8. Phê duyệt đối tác – T-TSA
9. Nhắc việc – T-S11
10. Cập nhật thông tin xe – T-UI
11. Đề xuất giao việc – T-S5
12. Yêu cầu duyệt – T-S6
13. Phê duyệt – T-Apr
14. Update hệ thống – T-S7
15. Hệ thống duyệt - T-S8
16. Giao việc đến nhân viên – T-S9
17. Lấy hàng ra khu đóng gói – T-Mv4
18. Tính toán đóng gói – T-S10
19. Nhắc việc – T-S11
20. Hủy, Hết KPI – T-S12
21. Thông báo – T-S13
22. Giao việc trả hàng – T-S14
23. Lưu trữ lại – T-Mv5
24. Xác nhận lưu trữ: T-Mv5
25. Cập nhật gia hạn - T-S16
26. In tem, Đóng gói – T-Pac
27. Xác nhận đóng gói: T-Pac
28. Yêu cầu lấy hàng – T-S15
29. Cập nhật giờ xe – T-Scr
30. Kiểm hàng-T-HO
31. Ký biên bản bàn giao – T-Ho
32. Thực xuất kho – T-AGI
33. Trả API – T-API3
34. Ký Voffice – T-Sig
35. Quy trình Xử lý chứng từ
36. Tải hàng lên xe – T-Ldg
37. Quy trình vận chuyển
38. Quy trình nhập kho A2
39. End

## 4. PHÂN TÍCH QUY TRÌNH — MẪU GIAO VIỆC (VÍ DỤ)

> Ví dụ minh họa phân công task theo lệnh (kho V011-V101, lệnh 2026/00001):

| Stt | Mã kho | Mã lệnh | Mã task | Tên task | Mã NV | Họ tên NV | Số điện thoại | Chức vụ | Tổng (phút) | Bắt đầu | Kết thúc |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | V011-V101 | 2026/00001 | T-Ncc | Check lệnh | 005812 | Lê Xuân Kha | 0982990078 | Thủ kho | 60 | 16h30 15/4 | 17h30 15/4 |
| 2 | V011-V101 | 2026/00001 | T-Apr | Duyệt lịch giao việc | 005813 | Bùi Văn Tiến | 0982990079 | GĐ kho | 120 | 18h00 15/4 | 24h00 15/4 |
| 3 | V011-V101 | 2026/00001 | T-Ho | Kiểm hàng-Ký bàn giao | 005814 | Văn Công Sơn | 0982990080 | NVK | 240 | 9h00 | 14h30 |
| 4 | V011-V101 | 2026/00001 | T-Unl | Dỡ hàng | 005814 | Nghiêm Xuân Lợi | 0982990081 | Lái xe | 30 | 8h00 16/4 | 8h30 16/4 |
| 5 | V011-V101 | 2026/00001 | T-Mv1 | Đưa vào khu chờ nhập | 005814 | Nghiêm Xuân Lợi | 0982990081 | Lái xe | 30 | 8h30 16/4 | 9h00 16/4 |
| 6 | V011-V101 | 2026/00001 | T-AGR | Thực nhập kho | 005812 | Lê Xuân Kha | 0982990078 | Thủ kho | 15 | 14h30 | 14h45 |
| 7 | V011-V101 | 2026/00001 | T-Sig | Ký voffice | 005812 | Lê Xuân Kha | 0982990078 | Thủ kho | 15 | 14h45 | 15h00 |
| 8 | V011-V101 | 2026/00001 | T-Mv2 | Đưa sang khu đóng gói | 005814 | Nghiêm Xuân Lợi | 0982990081 | Lái xe | 30 | 15h00 | 15h30 |
| 9 | V011-V101 | 2026/00001 | T-Pac | Đóng gói hàng | 005815 | Văn Công Sơn | 0982990080 | NVK | 60 | 15h30 | 16h30 |
| 10 | V011-V101 | 2026/00001 | T-Mv3 | Đưa vào lưu trữ | 005814 | Nghiêm Xuân Lợi | 0982990081 | Lái xe | 30 | 16h30 | 17h00 |
| 11 | V011-V101 | 2026/00001 | T-WH | Giám sát lệnh | 005812 | Lê Xuân Kha | 0982990078 | Thủ kho | 630 | 16h30 | 17h00 |
| 12 | V011-V101 | 2026/00001 | T-Scr | Giám sát an ninh | 005816 | Bùi Công Thành | 0982990082 | Bảo vệ | 15 | 8h30 | 8h45 |

---

## Ghi chú kỹ thuật

- Các trang luồng quy trình trong PDF gốc là sơ đồ hình ảnh → text trích xuất được chỉ gồm bảng KPI, mục lục và ví dụ giao việc; nội dung diagram cần đọc trực tiếp từ PDF.
- Version: Khởi tạo 20/04/2026, phiên bản mới — /ĐTXD-XD&QLTS.
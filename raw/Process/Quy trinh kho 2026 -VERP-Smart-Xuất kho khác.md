

---

| Ngày<br>thay đổi |  | Vị trí |  | A*<br>M, D | Nguồn gốc | Phiên<br>bản cũ | Mô tả thay đổi | Phiên<br>bản mới |
|---|---|---|---|---|---|---|---|---|
|  |  | thay |  |  |  |  |  |  |
|  |  | đổi |  |  |  |  |  |  |
| 20/04/2026 |  |  |  |  |  |  | Khởi tạo |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |

---

| Stt | Danh mục | Ghi chú |
|---|---|---|
| I | CÁC ĐIỂM CHÍNH |  |
| II | KPI VÀ DASHBOARD QUY TRÌNH |  |
| III | LUỒNG QUY TRÌNH |  |
| IV | PHÂN TÍCH QUY TRINH |  |
| 1 | Start – T-API1 |  |
| 2 | Giao việc xử lý lệnh – T-S1 |  |
| 3 | Thực hiện – T-GI1 |  |
| 4 | Trả API2 – T-API2 |  |
| 5 | Đề xuất giao việc – T-S5 |  |
| 6 | Yêu cầu duyệt – T-S6 |  |
| 7 | Phê duyệt – T-Apr |  |
| 8 | Update hệ thống – T-S7 |  |
| 9 | Hệ thống duyệt - T-S8 |  |
| 10 | Giao việc đến nhân viên – T-S9 |  |
| 11 | Lấy hàng ra khu đóng gói – T-Mv4 |  |
| 12 | Tính toán đóng gói – T-S10 |  |
| 13 | Nhắc việc – T-S11 |  |
| 14 | Hủy, Hết KPI – T-S12 |  |
| 15 | Thông báo – T-S13 |  |
| 16 | Giao việc trả hàng – T-S14 |  |
| 17 | Lưu trữ lại – T-Mv5 |  |
| 18 | Xác nhận lưu trữ: T-Mv5 |  |
| 19 | Cập nhật gia hạn - T-S16 |  |
| 20 | In tem, Đóng gói – T-Pac |  |
| 21 | Xác nhận đóng gói: T-Pac |  |
| 22 | Yêu cầu lấy hàng – T-S15 |  |

---

| 23 | Cập nhật giờ xe – T-Scr |  |
|---|---|---|
| 24 | Kiểm hàng-T-HO |  |
| 25 | Ký biên bản bàn giao – T-Ho |  |
| 26 | Thực xuất kho – T-AGI |  |
| 27 | Trả API – T-API3 |  |
| 28 | Ký Voffice – T-Sig |  |
| 29 | Quy trình Xử lý chứng từ |  |
| 30 | Tải hàng lên xe – T-Ldg |  |
| 31 | End. |  |

---



---

| ID | Tên bước | Đầu vào | Thực hiện | Đầu ra | Role | System/Hu<br>man | KPI |
|---|---|---|---|---|---|---|---|
| T-API1 | Start | Lệnh xuất kho | Validate dữ<br>liệu | Hợp lệ | System | System | ≤5s |
| T-S1 | Giao việc | Lệnh xuất | Sinh task | Task | System | System | ≤5s |
| T-GI | Thực hiện | Dữ liệu | Kiểm tra | Yes/No | Thủ kho | Hybrid | ≤30p |
| API2 | Trả API2 | Request | Response | OK | System | System | ≤3s |
| T-S5 | Đề xuất | Dữ liệu | Tính toán | Proposal | System | System | ≤10s |
| T-S6 | Duyệt | Proposal | Gửi duyệt | Request | System | System | ≤5s |
| T-Apr | Phê duyệt | Request | Approve | Approved | Quản lý | Hybrid | ≤3h |
| T-S7 | Update | Proposal | Approve | Approve | System | System | ≤5s |
| T-S8 | Update | Request | Approve | Approve | System | System | ≤5s |
| T-S9 | Giao việc | Approved | Assign | Task | System | System | ≤10s |
| T-Pac | Lấy hàng ra khu<br>đóng gói | Hàng hóa | Hàng hóa | Danh mục | Kho | Human | ≤ X phút |
| T-S10 | Tính toán đóng<br>gói | Request | Approve | Approve | System | System | ≤5s |
| T-S11 | Nhắc việc | 90% KPI->KPI | Notify | SMS/App | System | System | ≤10s |
| T-S12 | Hủy, Hết KPI | Timeout | Hủy | Cancel | System | Hybrid | ≤ 5 phút |
| T-S13 | Thông báo | KQ | Notify | SMS/App | System | System | ≤10s |
| T-S14 | Giao việc | Approved | Assign | Task | System | System | ≤10s |
| T-Mv5 | Thực hiện lưu<br>trữ | Hàng hóa | Hàng hóa | Danh mục | Kho | Human | ≤ X phút |
| T-Mv5 | Xác nhận lưu trữ<br>T-Mv5 | Hàng hóa | Hàng hóa | Danh mục | System | Human | ≤ 5 phút |
| T-Pac | In tem, đóng<br>thùng | Hàng hóa | Đóng gói | Kiện | Kho | Human | ≤ X phút |
| T-Pac | Xác nhận | Hàng hóa | Hàng hóa | Kiện | System | Human | ≤ 5 phút |
| T-S15 | Yêu cầu lấy<br>hàng | KQ | Notify | SMS/App | System | System | ≤10s |
| T-Scr | Cập nhật giờ xe<br>ra/vào | Xe | Xe | Time<br>update | System | Human | ≤ 5 phút |
| T-Ho | Kiểm hàng | Hàng hóa | Kiện | Đối tác | Kho | Human | ≤ X phút |
| T-AGI | Thực xuất kho | Request | Approve | Approved | Thủ kho | Hybrid | ≤5p |
| T-API3 | Trả API 3 | Request | Response | OK | System | System | ≤3s |
| T-Sig | Ký voffice | Request | Approve | Approved | Thủ kho | Hybrid | ≤10p |
| T-x | QT xử lý chứng<br>từ | Dữ liệu | Kiểm tra | No | Quản lý | Hybrid | ≤120p |

---

| T-Ho | Ký BBBG: T-Ho | HOC | Approve | Đối tác | Thủ kho | Hybrid | ≤10p |
|---|---|---|---|---|---|---|---|
| T-Ldg | Tải hàng lên xe | Kiện | Kiện | Task | Kho | Human | ≤Xp |
| T-x | QT nhập kho | Phiếu xuất | Danh mục | Task | System | Hybrid | ≤Xp |
| T-x | QT vận chuyển | Xe | Kiện | Đối tác | System | Hybrid | ≤Xp |
| T-e | End | Success | Kết thúc | End | System | System | - |

| Loại hàng | Đơn vị | Thời gian chuẩn |
|---|---|---|
| Nhẹ (<50kg) | kiện | 1 phút/kiện |
| Trung bình | pallet | 3 phút/pallet |
| Nặng (>1 tấn) | pallet | 5–7 phút/pallet |

---



---



---



---



---



---



---



---



---

| Thông tin chung |  |  |  |  |  |  |  |  | Thời gian giao việc |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Stt | Mã<br>kho | Mã lệnh | Mã task | Tên task | Mã NV | Họ tên NV | Số điện thoại | Chức vụ | Tổng<br>(phút) | Bắt đầu | Kết<br>thúc |
| 1 | V011-<br>V101 | 2026/00001 | T-Ncc | Check lệnh | 005812 | Lê Xuân<br>Kha | 0982990078 | Thủ kho | 60 | 16h30<br>15/4 | 17h30<br>15/4 |
| 2 | V011-<br>V101 | 2026/00001 | T-Apr | Duyệt lịch giao<br>việc | 005813 | Bùi Văn<br>Tiến | 0982990079 | GĐ kho | 120 | 18h00<br>15/4 | 24h00<br>15/4 |
| 4 | V011-<br>V101 | 2026/00001 | T-Unl | Dỡ hàng | 005814 | Nghiêm<br>Xuân Lợi | 0982990081 | Lái xe | 30 | 8h00<br>16/4 | 8h30<br>16/4 |
| 5 | V011-<br>V101 | 2026/00001 | T-Mv1 | Đưa vào khu<br>chờ nhập | 005814 | Nghiêm<br>Xuân Lợi | 0982990081 | Lái xe | 30 | 8h30<br>16/4 | 9h00<br>16/4 |
| 3 | V011-<br>V101 | 2026/00001 | T-Ho | Kiểm hàng-Ký<br>bàn giao | 005814 | Văn Công<br>Sơn | 0982990080 | NVK | 240 | 9h00 | 14h30 |
| 6 | V011-<br>V101 | 2026/00001 | T-AGR | Thực nhập kho | 005812 | Lê Xuân<br>Kha | 0982990078 | Thủ kho | 15 | 14h30 | 14h45 |
| 7 | V011-<br>V101 | 2026/00001 | T-Sig | Ký voffice | 005812 | Lê Xuân<br>Kha | 0982990078 | Thủ kho | 15 | 14h45 | 15h00 |
| 8 | V011-<br>V101 | 2026/00001 | T-Mv2 | Đưa sang khu<br>đóng gói | 005814 | Nghiêm<br>Xuân Lợi | 0982990081 | Lái xe | 30 | 15h00 | 15h30 |
| 9 | V011-<br>V101 | 2026/00001 | T-Pac | Đóng gói hàng | 005815 | Văn Công<br>Sơn | 0982990080 | NVK | 60 | 15h30 | 16h30 |

---

| 10 | V011-<br>V101 | 2026/00001 | T-Mv3 | Đưa vào lưu trữ | 005814 | Nghiêm<br>Xuân Lợi | 0982990081 | Lái xe | 30 | 16h30 | 17h00 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 11 | V011-<br>V101 | 2026/00001 | T-WH | Giám sát lệnh | 005812 | Lê Xuân<br>Kha | 0982990078 | Thủ kho | 630 | 16h30 | 17h00 |
| 12 | V011-<br>V101 | 2026/00001 | T-Scr | Giám sát an ninh | 005816 | Bùi Công<br>Thành | 0982990082 | Bảo vệ | 15 | 8h30 | 8h45 |

---



---



---



---



---



---



---



---



---



---



---



---



---



---



---



---


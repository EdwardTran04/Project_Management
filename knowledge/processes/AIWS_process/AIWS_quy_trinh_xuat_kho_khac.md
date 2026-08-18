## BAN ĐẦU TƯ-XÂY DỰNG

Số:      /ĐTXD-XD&amp;QLTS

<!-- image -->

<!-- image -->

Hà Nội, ngày    tháng 4 năm 2026

## QUY TRÌNH Tài liệu giải pháp quy trình Hệ thống kho thông minh tương lai sIVN.10.4.2.B2- Quy trình xuất kho khác AI-WS

TRANG KÝ

Người phê duyệt:

Người lập:

Người xem xét:

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM Độc lập - Tự do - Hạnh phúc

<!-- image -->

## BẢNG GHI NHẬN THAY ĐỔI

*A - Tạo mới, M - Sửa đổi, D - Xóa bỏ

| Ngày thay đổi   | Vị trí thay đổi   | A* M, D   | Nguồn gốc   | Phiên bản cũ   | Mô tả thay đổi   | Phiên bản mới   |
|-----------------|-------------------|-----------|-------------|----------------|------------------|-----------------|
| 20/04/2026      |                   |           |             |                | Khởi tạo         |                 |

## Mục lục

| Stt   | Danh mục                         | Ghi chú   |
|-------|----------------------------------|-----------|
| I     | CÁC ĐIỂM CHÍNH                   |           |
| II    | KPI VÀ DASHBOARD QUY TRÌNH       |           |
| III   | LUỒNG QUY TRÌNH                  |           |
| IV    | PHÂN TÍCH QUY TRINH              |           |
| 1     | Start - T-API1                   |           |
| 2     | Giao việc xử lý lệnh - T-S1      |           |
| 3     | Thực hiện - T-GI1                |           |
| 4     | Trả API2 - T-API2                |           |
| 5     | Đề xuất giao việc - T-S5         |           |
| 6     | Yêu cầu duyệt - T-S6             |           |
| 7     | Phê duyệt - T-Apr                |           |
| 8     | Update hệ thống - T-S7           |           |
| 9     | Hệ thống duyệt - T-S8            |           |
| 10    | Giao việc đến nhân viên - T-S9   |           |
| 11    | Lấy hàng ra khu đóng gói - T-Mv4 |           |
| 12    | Tính toán đóng gói - T-S10       |           |
| 13    | Nhắc việc - T-S11                |           |
| 14    | Hủy, Hết KPI - T-S12             |           |
| 15    | Thông báo - T-S13                |           |
| 16    | Giao việc trả hàng - T-S14       |           |
| 17    | Lưu trữ lại - T-Mv5              |           |
| 18    | Xác nhận lưu trữ: T-Mv5          |           |
| 19    | Cập nhật gia hạn - T-S16         |           |
| 20    | In tem, Đóng gói - T-Pac         |           |
| 21    | Xác nhận đóng gói: T-Pac         |           |
| 22    | Yêu cầu lấy hàng - T-S15         |           |

|   23 | Cập nhật giờ xe - T-Scr     |
|------|-----------------------------|
|   24 | Kiểm hàng-T-HO              |
|   25 | Ký biên bản bàn giao - T-Ho |
|   26 | Thực xuất kho - T-AGI       |
|   27 | Trả API - T-API3            |
|   28 | Ký Voffice - T-Sig          |
|   29 | Quy trình Xử lý chứng từ    |
|   30 | Tải hàng lên xe - T-Ldg     |
|   31 | End.                        |

## I. CÁC ĐIỂM CHÍNH.

## 3. Từ viết tắt.

- -Task: Chỉ từng công việc sẽ hình thành khi phát sinh giao dịch nhập hoặc xuất kho hoặc giao trả hàng hóa…và các task này được người dùng định nghĩa ban đầu.
- -T-S(n): S là chỉ hệ thống tự động thực hiện; n: là số tự nhiên tăng dần qua các bước của quy trình.
- -T-API(n): Các điểm kết nối API giữa hệ thống nguồn và kho thông minh; n là số lượng các API tăng qua các bước theo quy trình.
- -T-(AGI), T-(Mv1)….: Là các task việc được hệ thống giao cho con người hành động và có xác nhận trên hệ thống về kết quả được giao việc.

## 4. Cấu trúc chung.

- -Các bước của quy trình khi giao việc (task) hệ thống đều phải có cảnh báo đến app, nhắc việc khi gần đến hạn KPI, chủ động thống kê kết quả công việc cho nhân sự vào cuối ngày.
- -Các bước của quy trình phải có KPI do hệ thống tính toán và chỉ định KPI (thời gian đầu chưa có dữ liệu có thể cho con người bổ sung)

## II.

## KPI QUY TRÌNH.

## 1. KPI vận hành tổng thể.

| ID     | Tên bước                 | Đầu vào       | Thực hiện        | Đầu ra      | Role    | System/Hu man   | KPI      |
|--------|--------------------------|---------------|------------------|-------------|---------|-----------------|----------|
| T-API1 | Start                    | Lệnh xuất kho | Validate dữ liệu | Hợp lệ      | System  | System          | ≤5s      |
| T-S1   | Giao việc                | Lệnh xuất     | Sinh task        | Task        | System  | System          | ≤5s      |
| T-GI   | Thực hiện                | Dữ liệu       | Kiểm tra         | Yes/No      | Thủ kho | Hybrid          | ≤30p     |
| API2   | Trả API2                 | Request       | Response         | OK          | System  | System          | ≤3s      |
| T-S5   | Đề xuất                  | Dữ liệu       | Tính toán        | Proposal    | System  | System          | ≤10s     |
| T-S6   | Duyệt                    | Proposal      | Gửi duyệt        | Request     | System  | System          | ≤5s      |
| T-Apr  | Phê duyệt                | Request       | Approve          | Approved    | Quản lý | Hybrid          | ≤3h      |
| T-S7   | Update                   | Proposal      | Approve          | Approve     | System  | System          | ≤5s      |
| T-S8   | Update                   | Request       | Approve          | Approve     | System  | System          | ≤5s      |
| T-S9   | Giao việc                | Approved      | Assign           | Task        | System  | System          | ≤10s     |
| T-Pac  | Lấy hàng ra khu đóng gói | Hàng hóa      | Hàng hóa         | Danh mục    | Kho     | Human           | ≤ X phút |
| T-S10  | Tính toán đóng gói       | Request       | Approve          | Approve     | System  | System          | ≤5s      |
| T-S11  | Nhắc việc                | 90% KPI->KPI  | Notify           | SMS/App     | System  | System          | ≤10s     |
| T-S12  | Hủy, Hết KPI             | Timeout       | Hủy              | Cancel      | System  | Hybrid          | ≤ 5 phút |
| T-S13  | Thông báo                | KQ            | Notify           | SMS/App     | System  | System          | ≤10s     |
| T-S14  | Giao việc                | Approved      | Assign           | Task        | System  | System          | ≤10s     |
| T-Mv5  | Thực hiện lưu trữ        | Hàng hóa      | Hàng hóa         | Danh mục    | Kho     | Human           | ≤ X phút |
| T-Mv5  | Xác nhận lưu trữ T-Mv5   | Hàng hóa      | Hàng hóa         | Danh mục    | System  | Human           | ≤ 5 phút |
| T-Pac  | In tem, đóng thùng       | Hàng hóa      | Đóng gói         | Kiện        | Kho     | Human           | ≤ X phút |
| T-Pac  | Xác nhận                 | Hàng hóa      | Hàng hóa         | Kiện        | System  | Human           | ≤ 5 phút |
| T-S15  | Yêu cầu lấy hàng         | KQ            | Notify           | SMS/App     | System  | System          | ≤10s     |
| T-Scr  | Cập nhật giờ xe ra/vào   | Xe            | Xe               | Time update | System  | Human           | ≤ 5 phút |
| T-Ho   | Kiểm hàng                | Hàng hóa      | Kiện             | Đối tác     | Kho     | Human           | ≤ X phút |
| T-AGI  | Thực xuất kho            | Request       | Approve          | Approved    | Thủ kho | Hybrid          | ≤5p      |
| T-API3 | Trả API 3                | Request       | Response         | OK          | System  | System          | ≤3s      |
| T-Sig  | Ký voffice               | Request       | Approve          | Approved    | Thủ kho | Hybrid          | ≤10p     |
| T-x    | QT xử lý chứng từ        | Dữ liệu       | Kiểm tra         | No          | Quản lý | Hybrid          | ≤120p    |

| T-Ho   | Ký BBBG: T-Ho   | HOC        | Approve   | Đối tác   | Thủ kho   | Hybrid   | ≤10p   |
|--------|-----------------|------------|-----------|-----------|-----------|----------|--------|
| T-Ldg  | Tải hàng lên xe | Kiện       | Kiện      | Task      | Kho       | Human    | ≤Xp    |
| T-x    | QT nhập kho     | Phiếu xuất | Danh mục  | Task      | System    | Hybrid   | ≤Xp    |
| T-x    | QT vận chuyển   | Xe         | Kiện      | Đối tác   | System    | Hybrid   | ≤Xp    |
| T-e    | End             | Success    | Kết thúc  | End       | System    | System   | -      |

## 2. KPI tính thời gian lấy hàng tham khảo cho AI.

Thời gian = (Số pallet / năng suất vận chuyển) × hệ số khoảng cách

| Loại hàng     | Đơn vị   | Thời gian chuẩn   |
|---------------|----------|-------------------|
| Nhẹ (<50kg)   | kiện     | 1 phút/kiện       |
| Trung bình    | pallet   | 3 phút/pallet     |
| Nặng (>1 tấn) | pallet   | 5-7 phút/pallet   |

## Trường hợp 1: Xe nâng (forklift)

-  1 pallet (~500-1000kg)
-  Khoảng cách 30-50m

👉

- Thời gian chuẩn: 2 - 4 phút / pallet
-  1 kiện nhỏ (~20-50kg)

## Trường hợp 2 : Xe đẩy tay

👉

Thời gian: 0.5 - 1.5 phút / kiện

Trường hợp 3

## : Hàng hỗn hợp (thực tế phổ biến)

## 👉 KPI chuẩn:

-  10 - 25 phút / 1 lệnh xuất kho
-  Hoặc: 3 - 6 phút / pallet

## B. Danh sách dashboard quy trình xuất kho vận chuyển.

## 1. Dashboard tổng quan

Dành cho: Giám đốc / Quản lý vận hành Nội dung cần có:

-  Tổng số lệnh xuất kho (GI)
-  % hoàn thành đúng KPI
-  % trễ SLA

-  Số lệnh:
- o Đang xử lý
- o Hoàn thành
- o Hủy
-  Tổng số xe vận chuyển
-  Tỷ lệ sử dụng xe (% utilization)

## KPI chính:

-  On-time delivery (%)
-  Lead time trung bình (GI → giao hàng)
-  Tỷ lệ lỗi quy trình

## 3. Dashboard kho

Dành cho: Thủ kho

## Nội dung:

-  Danh sách lệnh xuất đang xử lý
-  Trạng thái:
- o Chưa pick
- o Đang đóng gói
- o Đã đóng gói
-  Tồn kho realtime
-  Hàng chờ xuất

## KPI:

-  Thời gian xử lý đơn (pick + pack)
-  Số đơn xử lý/ngày
-  Tỷ lệ sai sót đóng gói

## 4. Dashboard task

Dành cho: Nhân viên vận hành

## Nội dung:

-  Task cá nhân (T-S1 → T-S15)
-  Task quá hạn
-  Task chờ duyệt
-  Task bị từ chối

## KPI:

-  % hoàn thành task đúng hạn
-  Số task/người/ngày
-  Task bị trả lại

## 5. Dashboard KPI &amp; SLA

Dành cho: QA / Quản lý

## Nội dung:

-  KPI từng bước:
- o T-S1, T-S2, T-S5…
-  So sánh:
- o KPI chuẩn vs thực tế
-  Top bước bị trễ

## KPI chính:

-  SLA compliance (%)
-  Avg processing time từng bước
-  Bottleneck step

## 6. Dashboard ngoại lệ

Dành cho: Quản lý vận hành

## Nội dung:

-  Lệnh bị hủy (T-S12)
-  Lệnh bị trả hàng (T-S14)
-  Lỗi API
-  Lỗi đóng gói

## KPI:

-  % hủy đơn
-  % trả hàng
-  % lỗi hệ thống

## 7. Dashboard API

Dành cho: IT / DevOps

## Nội dung:

-  Số lượng API call (T-API3)
-  Tỷ lệ thành công / fail

## IV.

## PHÂN TÍCH QUY TRÌNH.

## 1. Start - T-API1

## Đầu vào: SAP/VERP

-  Toàn bộ Lệnh xuất kho không xác định sử dụng xe vận chuyển đã được ban hành từ các hệ thống nguồn (SAP, VERP) và được truyền về hệ thống kho thông minh thông qua kết nối API.

## Hệ thống thực hiện:

-  Trên ứng dụng mobile, hệ thống thực hiện Task T-API1 để tiếp nhận dữ liệu từ các hệ thống nguồn.
-  Hệ thống tự động nhận và xử lý các trường thông tin được truyền về qua API, bao gồm: thông tin lệnh xuất kho, danh sách vật tư/hàng hóa, số lượng, đơn vị, thời gian dự kiến và các thông tin liên quan khác.
-  Sau khi tiếp nhận, hệ thống thực hiện kiểm tra tính hợp lệ của dữ liệu (định dạng, đầy đủ thông tin, trùng lặp nếu có).
-  Dữ liệu hợp lệ sẽ được lưu trữ vào hệ thống kho thông minh và chuyển sang trạng thái sẵn sàng xử lý cho các bước tiếp theo trong quy trình.
-  Trường hợp dữ liệu không hợp lệ, hệ thống có thể ghi nhận lỗi và phản hồi lại hệ thống nguồn (nếu có cơ chế kiểm tra lỗi).

## Nhân sự thực hiện:

-  Không yêu cầu thao tác trực tiếp từ người dùng (hệ thống tự động tiếp nhận và xử lý).

## Đầu ra:

-  Task T-API1
- được hoàn thành.
-  Danh sách Lệnh xuất kho có sử dụng xe vận chuyển được cập nhật trên hệ thống kho thông minh, sẵn sàng cho bước xử lý tiếp theo.

## 2.

## Giao việc xử lý lệnh: T-S1

## Đầu vào:

Lệnh xuất kho.

-  Lệnh xuất kho đã được tiếp nhận và sẵn sàng xử lý trên hệ thống.

## Hệ thống thực hiện:

-  Trên ứng dụng mobile, hệ thống thực hiện Task T-GI1 và T-WH để phân công xử lý Lệnh xuất kho và giám sát lệnh.
-  Hệ thống căn cứ vào thông tin của lệnh (mã kho, loại hàng, phạm vi xử lý…) để xác định Thủ kho chịu trách nhiệm chính.
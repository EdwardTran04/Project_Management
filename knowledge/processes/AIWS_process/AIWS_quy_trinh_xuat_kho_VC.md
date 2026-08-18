## BAN ĐẦU TƯ-XÂY DỰNG

Số:      /ĐTXD-XD&amp;QLTS

## CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM

Độc lập - Tự do - Hạnh phúc

Hà Nội, ngày    tháng 4 năm 2026

QUY TRÌNH Tài liệu giải pháp quy trình Hệ thống kho thông minh tương lai sIVN.10.4.2.B1- Quy trình xuất kho sử dụng vận chuyển AI-WS

<!-- image -->

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

<!-- image -->

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
| 5     | Sắp lịch xe - T-S2               |           |
| 6     | Phê duyệt vận chuyển - T-VDA     |           |
| 7     | Chuyển đối tác xe - T-S3         |           |
| 8     | Phê duyệt đối tác - T-TSA        |           |
| 9     | Nhắc việc - T-S11                |           |
| 10    | Cập nhật thông tin xe - T-UI     |           |
| 11    | Đề xuất giao việc - T-S5         |           |
| 12    | Yêu cầu duyệt - T-S6             |           |
| 13    | Phê duyệt - T-Apr                |           |
| 14    | Update hệ thống - T-S7           |           |
| 15    | Hệ thống duyệt - T-S8            |           |
| 16    | Giao việc đến nhân viên - T-S9   |           |
| 17    | Lấy hàng ra khu đóng gói - T-Mv4 |           |
| 18    | Tính toán đóng gói - T-S10       |           |
| 19    | Nhắc việc - T-S11                |           |
| 20    | Hủy, Hết KPI - T-S12             |           |
| 21    | Thông báo - T-S13                |           |
| 22    | Giao việc trả hàng - T-S14       |           |
| 23    | Lưu trữ lại - T-Mv5              |           |
| 24    | Xác nhận lưu trữ: T-Mv5          |           |
| 25    | Cập nhật gia hạn - T-S16         |           |

|   26 | In tem, Đóng gói - T-Pac    |
|------|-----------------------------|
|   27 | Xác nhận đóng gói: T-Pac    |
|   28 | Yêu cầu lấy hàng - T-S15    |
|   29 | Cập nhật giờ xe - T-Scr     |
|   30 | Kiểm hàng-T-HO              |
|   31 | Ký biên bản bàn giao - T-Ho |
|   32 | Thực xuất kho - T-AGI       |
|   33 | Trả API - T-API3            |
|   34 | Ký Voffice - T-Sig          |
|   35 | Quy trình Xử lý chứng từ    |
|   36 | Tải hàng lên xe - T-Ldg     |
|   37 | Quy trình vận chuyển        |
|   38 | Quy trình nhập kho A2       |
|   39 | End.                        |

## I. CÁC ĐIỂM CHÍNH.

## 3. Từ viết tắt.

- -Task: Chỉ từng công việc sẽ hình thành khi phát sinh giao dịch nhập hoặc xuất kho hoặc giao trả hàng hóa…và các task này được người dùng định nghĩa ban đầu.
- -T-S(n): S là chỉ hệ thống tự động thực hiện; n: là số tự nhiên tăng dần qua các bước của quy trình.
- -T-API(n): Các điểm kết nối API giữa hệ thống nguồn và kho thông minh; n là số lượng các API tăng qua các bước theo quy trình.
- -T-(AGI), T-(Mv1)….: Là các task việc được hệ thống giao cho con người hành động và có xác nhận trên hệ thống về kết quả được giao việc.

## 4. Cấu trúc chung.

- -Các bước của quy trình khi giao việc (task) hệ thống đều phải có cảnh báo đến app, nhắc việc khi gần đến hạn KPI, chủ động thống kê kết quả công việc cho nhân sự vào cuối ngày.
- -Các bước của quy trình phải có KPI do hệ thống tính toán và chỉ định KPI (thời gian đầu chưa có dữ liệu có thể cho con người bổ sung)

## II. KPI QUY TRÌNH.

## 1. KPI vận hành tổng thể.

| ID     | Tên bước                 | Đầu vào        | Thực hiện        | Đầu ra   | Role    | System/Hu man   | KPI      |
|--------|--------------------------|----------------|------------------|----------|---------|-----------------|----------|
| T-API1 | Start                    | Lệnh xuất kho  | Validate dữ liệu | Hợp lệ   | System  | System          | ≤5s      |
| T-S1   | Giao việc                | Lệnh xuất      | Sinh task        | Task     | System  | System          | ≤5s      |
| T-GI   | Thực hiện                | Dữ liệu        | Kiểm tra         | Yes/No   | Thủ kho | Hybrid          | ≤30p     |
| API2   | Trả API2                 | Request        | Response         | OK       | System  | System          | ≤3s      |
| T-S2   | Sắp lịch xe              | Thông tin giao | Tối ưu lịch      | Lịch xe  | System  | System          | ≤5s      |
| T-VDA  | Phê duyệt                | Request        | Approve          | Approved | Quản lý | Hybrid          | ≤1h      |
| T-S3   | Chuyển đối tác           | Danh sách      | Danh sách        | Đối tác  | System  | System          | ≤5s      |
| T-TSA  | Phê duyệt                | Request        | Approve          | Đối tác  | Quản lý | Hybrid          | ≤2h      |
| T-S5   | Đề xuất                  | Dữ liệu        | Tính toán        | Proposal | System  | System          | ≤10s     |
| T-S6   | Duyệt                    | Proposal       | Gửi duyệt        | Request  | System  | System          | ≤5s      |
| T-Apr  | Phê duyệt                | Request        | Approve          | Approved | Quản lý | Hybrid          | ≤3h      |
| T-S7   | Update                   | Proposal       | Approve          | Approve  | System  | System          | ≤5s      |
| T-S8   | Update                   | Request        | Approve          | Approve  | System  | System          | ≤5s      |
| T-S9   | Giao việc                | Approved       | Assign           | Task     | System  | System          | ≤10s     |
| T-Pac  | Lấy hàng ra khu đóng gói | Hàng hóa       | Hàng hóa         | Danh mục | Kho     | Human           | ≤ X phút |
| T-S10  | Tính toán đóng gói       | Request        | Approve          | Approve  | System  | System          | ≤5s      |
| T-S11  | Nhắc việc                | 90% KPI->KPI   | Notify           | SMS/App  | System  | System          | ≤10s     |
| T-UI   | Cập nhật thông tin xe    | Request        | Update           | Update   | Đối tác | Hybrid          | ≤2h      |
| T-S11  | Nhắc việc                | 90% KPI->KPI   | Notify           | SMS/App  | System  | System          | ≤10s     |
| T-S12  | Hủy, Hết KPI             | Timeout        | Hủy              | Cancel   | System  | Hybrid          | ≤ 5 phút |
| T-S13  | Thông báo                | KQ             | Notify           | SMS/App  | System  | System          | ≤10s     |
| T-S14  | Giao việc                | Approved       | Assign           | Task     | System  | System          | ≤10s     |
| T-Mv5  | Thực hiện lưu trữ        | Hàng hóa       | Hàng hóa         | Danh mục | Kho     | Human           | ≤ X phút |
| T-Mv5  | Xác nhận lưu trữ T-Mv5   | Hàng hóa       | Hàng hóa         | Danh mục | System  | Human           | ≤ 5 phút |
| T-Pac  | In tem, đóng thùng       | Hàng hóa       | Đóng gói         | Kiện     | Kho     | Human           | ≤ X phút |
| T-Pac  | Xác nhận                 | Hàng hóa       | Hàng hóa         | Kiện     | System  | Human           | ≤ 5 phút |
| T-S15  | Yêu cầu lấy hàng         | KQ             | Notify           | SMS/App  | System  | System          | ≤10s     |

| T-Scr   | Cập nhật giờ xe ra/vào   | Xe         | Xe       | Time update   | System   | Human   | ≤ 5 phút   |
|---------|--------------------------|------------|----------|---------------|----------|---------|------------|
| T-Ho    | Kiểm hàng                | Hàng hóa   | Kiện     | Đối tác       | Kho      | Human   | ≤ X phút   |
| T-AGI   | Thực xuất kho            | Request    | Approve  | Approved      | Thủ kho  | Hybrid  | ≤5p        |
| T-API3  | Trả API 3                | Request    | Response | OK            | System   | System  | ≤3s        |
| T-Sig   | Ký voffice               | Request    | Approve  | Approved      | Thủ kho  | Hybrid  | ≤10p       |
| T-x     | QT xử lý chứng từ        | Dữ liệu    | Kiểm tra | No            | Quản lý  | Hybrid  | ≤120p      |
| T-Ho    | Ký BBBG: T-Ho            | HOC        | Approve  | Đối tác       | Thủ kho  | Hybrid  | ≤10p       |
| T-Ldg   | Tải hàng lên xe          | Kiện       | Kiện     | Task          | Kho      | Human   | ≤Xp        |
| T-x     | QT nhập kho              | Phiếu xuất | Danh mục | Task          | System   | Hybrid  | ≤Xp        |
| T-x     | QT vận chuyển            | Xe         | Kiện     | Đối tác       | System   | Hybrid  | ≤Xp        |
| T-e     | End                      | Success    | Kết thúc | End           | System   | System  | -          |

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

## Thời gian chuẩn: 2 - 4 phút / pallet

## Trường hợp 2 : Xe đẩy tay

-  1 kiện nhỏ (~20-50kg)

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
- o
- Hủy
- Tổng số xe vận chuyển
- 
- 
- Tỷ lệ sử dụng xe (% utilization)

## KPI chính:

- 
- 
- 
- On-time delivery (%)
- Lead time trung bình (GI → giao hàng)
- Tỷ lệ lỗi quy trình

## 2. Dashboard điều phối vận chuyển.

Dành cho: Điều phối xe

## Nội dung:

- 
- Danh sách lịch xe hôm nay
-  Xe đang hoạt động / rảnh
-  Lệnh chưa có xe
-  Lệnh đang chờ đối tác xác nhận
-  Bản đồ (nếu có GPS)

## KPI:

-  Thời gian sắp lịch xe (T-S2)
- 
- % xe sử dụng
-  % trễ lịch xe

## 3. Dashboard kho

Dành cho: Thủ kho

Nội dung:

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
-  Thời gian response

## KPI:

-  API success rate (%)
-  Response time (ms)
-  Error rate

## 8. Dashboard An ninh

Dành cho: Bảo vệ

## Nội dung:

-  Danh sách xe ra/vào (T-S15)
-  Thời gian check-in/out
-  Xe không hợp lệ

## KPI:

-  Thời gian xử lý xe

##  Số xe/ngày

## 9. Dashboard giám sát quy trình

## Nội dung:

-  Funnel:
- o GI → Duyệt → Đóng gói → Giao hàng
-  Số lượng ở mỗi bước
-  Tắc nghẽn ở đâu

## 10. Giao diện dashboard.

<!-- image -->

## III. LƯU ĐỒ QUY TRÌNH.

<!-- image -->

## IV. PHÂN TÍCH QUY TRÌNH.

## 1. Start - T-API1

## Đầu vào: SAP/VERP

-  Toàn bộ Lệnh xuất kho có xác định sử dụng xe vận chuyển đã được ban hành từ các hệ thống nguồn (SAP, VERP) và được truyền về hệ thống kho thông minh thông qua kết nối API.

## Hệ thống thực hiện:

-  Trên ứng dụng mobile, hệ thống thực hiện Task T-API1 để tiếp nhận dữ liệu từ các hệ thống nguồn.
-  Hệ thống tự động nhận và xử lý các trường thông tin được truyền về qua API, bao gồm: thông tin lệnh xuất kho, danh sách vật tư/hàng hóa, số lượng, đơn vị, thời gian dự kiến và các thông tin liên quan khác.
-  Sau khi tiếp nhận, hệ thống thực hiện kiểm tra tính hợp lệ của dữ liệu (định dạng, đầy đủ thông tin, trùng lặp nếu có).
-  Dữ liệu hợp lệ sẽ được lưu trữ vào hệ thống kho thông minh và chuyển sang trạng thái sẵn sàng xử lý cho các bước tiếp theo trong quy trình.
- Trường hợp dữ liệu không hợp lệ, hệ thống có thể ghi nhận lỗi và phản hồi lại
-  hệ thống nguồn (nếu có cơ chế kiểm tra lỗi).

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

-  Sau đó, hệ thống tự động tạo task và gửi thông báo giao việc đến Thủ kho thông qua ứng dụng mobile, bao gồm các thông tin cần thiết như: nội dung công việc, thời gian thực hiện, KPI và các yêu cầu liên quan.
-  Đồng thời, hệ thống bắt đầu theo dõi tiến độ xử lý của task này nhằm phục vụ việc giám sát và đánh giá hiệu quả thực hiện.

## Nhân sự thực hiện:

-  Không yêu cầu thao tác tại bước này (hệ thống tự động giao việc). Đầu ra:
-  Task T-GI1, T-WH được khởi tạo và gửi đến Thủ kho.
-  Lệnh xuất kho đã được phân công xử lý và chuyển sang trạng thái theo dõi thực hiện.
- 
- T-GI1 (xử lý Lệnh xuất kho)
- 
- T-WH (giám sát)

Đầu ra:

Hoàn thành T-S1 giao việc đến Thủ kho.

## 3. Thực hiện: T-GI1 Đầu vào:

-  Task T-GI1 -
- Xử lý đồng ý xuất kho đã được hệ thống tạo
-  Thông tin lệnh xuất kho bao gồm: danh sách hàng hóa, số lượng, kho xuất, trạng thái đơn

## Hệ thống thực hiện:

-  Hiển thị đầy đủ thông tin chi tiết của lệnh xuất kho trên giao diện cho người dùng kiểm tra
- 
- Khi người dùng (Thủ kho) nhấn 'Đồng ý', hệ thống:
- o
- Ghi nhận trạng thái đã chấp nhận xuất kho
- o Tự động chuyển luồng xử lý sang bước tiếp theo là sắp lịch xe (T-S2)
- o
- Cập nhật trạng thái task trên hệ thống

## Nhân sự thực hiện:

-  Thủ kho truy cập vào Task
- 
- T-GI1
- Kiểm tra các thông tin nghiệp vụ, bao gồm:
- o
- Chủng loại hàng hóa
- o
- Số lượng xuất
- o Kho xuất
- o
- Điều kiện xuất kho

-  Nếu thông tin đúng và đủ điều kiện , thực hiện nhấn 'Đồng ý'
- 
- trên hệ thống
- Nếu phát hiện sai lệch, thực hiện xử lý theo quy trình (từ chối / báo lại)

## Đầu ra:

-  Task T-GI1 được hoàn thành
-  Lệnh xuất kho được xác nhận hợp lệ
-  Quy trình chuyển sang bước

## 4. Trả API2

## Đầu vào:

-  Task T-GI1 từ chối Lệnh xuất kho có lý do.

## Hệ thống thực hiện:

-  Trên ứng dụng mobile, hệ thống thực hiện Task T-API2 để xử lý việc đồng bộ kết quả từ chối về hệ thống nguồn.
-  Sau khi Thủ kho thực hiện từ chối Lệnh xuất kho và nhập lý do tại bước TGI1 , hệ thống sẽ tự động tổng hợp toàn bộ thông tin liên quan, bao gồm:
- o Mã Lệnh xuất kho
- o
- Trạng thái từ chối
- o
- o
- Lý do từ chối
- Thời gian thực hiện
-  Hệ  thống  thực  hiện  gọi  API  để  gửi  các  thông  tin  này  về  hệ  thống  nguồn (SAP/VERP) nhằm cập nhật trạng thái của Lệnh xuất kho.
- 
- Sau khi gửi thành công, hệ thống tiến hành:
- o Kết thúc task TGI1
- .
- o Đồng thời đóng task giám sát T-WH do quy trình nhập kho không tiếp tục thực hiện.

## Nhân sự thực hiện:

-  Không yêu cầu thao tác trực tiếp từ người dùng (hệ thống tự động xử lý sau khi có kết quả từ chối).

## Đầu ra:

-  Task T-API2 được hoàn thành.
-  Kết quả từ chối đã được đồng bộ về hệ thống nguồn.
-  Các task T-GI1 và T-WH
- được đóng hoàn toàn.

## 5. Sắp lịch xe: T-S2

- Sắp lịch xe (T-S2)

## Đầu vào:

-  Kết quả từ bước T-GI1 : Lệnh xuất kho đã được đồng ý xuất hàng
-  Thông tin tuyến đường giao hàng (điểm đi, điểm đến, khoảng cách, thời gian dự kiến)
-  Thông tin xe theo hợp đồng vận chuyển (loại xe, tải trọng, kích thước, tình trạng khả dụng)
-  Thông tin chi tiết lệnh xuất kho (khối lượng, số lượng, đặc tính hàng hóa)

## Hệ thống thực hiện:

-  Tự động phân tích dữ liệu đầu vào, bao gồm:
- o Khối lượng và kích thước hàng hóa
- o Loại xe và tải trọng phù hợp
- o
- Tuyến đường và thời gian vận chuyển
-  Thực hiện tính toán và tối ưu:
- o
- Gán xe phù hợp với từng lệnh xuất
- o Sắp xếp thứ tự giao hàng (nếu có nhiều điểm)
- o
- Đề xuất thời gian xuất kho và vận chuyển
- Tạo lịch xe vận chuyển tối ưu trên hệ thống
- 

## Nhân sự thực hiện:

-  Không (hệ thống tự động xử lý)

## Đầu ra:

-  Task T-S2 hoàn thành
- 
- Lịch xe vận chuyển được tạo, bao gồm:
- o
- Xe được phân công
- o
- o
- Thời gian xuất phát
- Tuyến đường vận chuyển

## 6.

## Phê duyệt vận chuyển - T-VDA

## Đầu vào:

- 
- Lịch xe vận chuyển đã được hệ thống đề xuất

## Hệ thống thực hiện:

-  Gửi yêu cầu phê duyệt đến quản lý theo đúng phân quyền
-  Hiển thị đầy đủ thông tin lịch xe để phục vụ việc kiểm tra

## Nhân sự thực hiện:

- 
- Quản lý truy cập vào yêu cầu duyệt

-  Kiểm tra các thông tin liên quan đến lịch xe
- 
- Thực hiện phê duyệt
-  Có thể điều chỉnh các thông tin nếu cần, bao gồm:
- o Ngày giờ vận chuyển
- o Loại xe
- o
- Đối tác vận chuyển

## Đầu ra:

-  Lịch xe được phê duyệt và sẵn sàng cho các bước tiếp theo

## 7.

## Chuyển yêu cầu đến đối tác - T-S3

## Đầu vào:

- 
- Lịch xe vận chuyển đã được phê duyệt

## Hệ thống thực hiện:

-  Căn cứ vào lịch xe đã được duyệt, hệ thống tự động xác định đối tác vận chuyển phù hợp
-  Gửi yêu cầu vận chuyển đến đối tác theo thông tin đã được phê duyệt (thời gian, loại xe, tuyến đường)
- 
- Ghi nhận trạng thái đã gửi yêu cầu đến đối tác

## Nhân sự thực hiện:

-  Không (hệ thống tự động xử lý)

## Đầu ra:

-  Task T-S3 hoàn thành
-  Yêu cầu xe đã được chuyển đến đối tác vận chuyển để tiếp nhận và xác nhận

## 8. Phê duyệt đối tác - T-TSA Đầu vào:

- 
- Lịch xe vận chuyển đã được phê duyệt

## Hệ thống thực hiện:

-  Gửi yêu cầu cung cấp xe đến đối tác vận chuyển
- 
- Hiển thị đầy đủ thông tin lịch xe để đối tác xem xét
-  Trường hợp đối tác từ chối , hệ thống tự động chuyển dữ liệu quay lại bước Sắp lịch xe (T-S2) để xử lý lại

## Nhân sự thực hiện:

-  Đối tác vận chuyển truy cập vào task được giao

-  Xem chi tiết yêu cầu vận chuyển (thời gian, tuyến đường, loại xe)
-  Thực hiện một trong các hành động:
-  Đối tác có thể đề xuất điều chỉnh thời gian vận chuyển trước khi phê duyệt (nếu cần)

- o Duyệt

- : Đồng ý cung cấp xe theo yêu cầu

- o Từ chối : Không thể đáp ứng yêu cầu

## Đầu ra:

-  Trường hợp duyệt: Lịch xe được đối tác xác nhận cung cấp
-  Trường hợp từ chối: Dữ liệu quay lại bước T-S2 để sắp xếp lại lịch xe

## 9. Nhắc việc - T-S11

## Đầu vào:

-  Danh sách công việc được giao từ T-S5 và phân công qua T-S9
- 
- Trạng thái KPI của từng task (gần hết hạn hoặc đã quá hạn)

## Hệ thống thực hiện:

- 
- Theo dõi thời gian thực hiện của từng task so với KPI đã thiết lập
-  Khi KPI sắp hết hạn
- o
- :
- Gửi cảnh báo nhắc việc đến nhân sự được giao
-  Khi KPI quá hạn
- o

## :

- Gửi thông báo quá hạn theo cấu hình của từng bước trong quy trình
- 
- Tùy theo từng bước, hệ thống có thể:
- o
- Cho phép cập nhật gia hạn thời gian xử lý
- o
- Hoặc tiếp tục theo dõi đến khi hết KPI mà không gia hạn

## Nhân sự thực hiện:

-  Nhân sự được giao việc tiếp nhận thông báo
- Xem nội dung cảnh báo để chủ động xử lý công việc đúng hạn hoặc thực
-  hiện gia hạn (nếu được phép)

## Đầu ra:

-  Thông báo nhắc việc hoặc quá hạn KPI được gửi đến người liên quan

## 10. Cập nhật thông tin xe - T-UI Đầu vào:

-  Kết quả từ bước T-TSA : Danh sách yêu cầu xe đã được đối tác vận chuyển phê duyệt

-  Thông tin kế hoạch vận chuyển (thời gian, tuyến đường, loại xe)

## Hệ thống thực hiện:

-  Hiển thị danh sách các yêu cầu xe cần cập nhật thông tin
- 
- Cho phép nhập mới hoặc chỉnh sửa thông tin xe và lái xe
- 
- Lưu trữ và đồng bộ dữ liệu sau khi cập nhật

## Nhân sự thực hiện:

-  Đối tác vận chuyển truy cập vào hệ thống
-  Nhập và cập nhật các thông tin liên quan, bao gồm:
- o Thông tin lái xe
- o Số điện thoại liên hệ
- o Biển số xe
-  Xác nhận hoàn tất việc cập nhật

## Đầu ra:

-  Task T-UI hoàn thành
-  Dữ liệu xe và lái xe được cập nhật đầy đủ trên hệ thống, sẵn sàng cho bước vận chuyển

## 11. Đề xuất giao việc - T-S5 Đầu vào:

-  Lịch xe vận chuyển TSA đươc duyệt.
-  Danh sách Lệnh xuất kho đi kèm.
- 
- Danh sách nhân sự đang làm việc.

## Hệ thống thực hiện:

-  Trên ứng dụng mobile, hệ thống thực hiện Task T-S5 để tính toán và đề xuất phương án giao việc.
-  Hệ thống sử dụng cơ chế AI để phân tích và xây dựng danh sách công việc dự kiến, đảm bảo tối ưu về thời gian và nguồn lực nhân sự.
-  Các nguồn dữ liệu được sử dụng trong quá trình tính toán bao gồm:
-  Danh sách nhân sự tại kho: bao gồm thông tin vị trí, vai trò và khả năng thực hiện công việc.
-  Lịch làm việc: căn cứ theo lịch làm việc cố định trong năm, đồng thời loại trừ các nhân sự đã đăng ký nghỉ phép hoặc không có mặt tại thời điểm thực hiện.

-  Danh sách Lệnh xuất kho: các lệnh đã được duyệt và có ngày nhận hàng cụ thể sẽ được phân rã thành các task công việc chi tiết (như kiểm hàng, dỡ hàng, nhập kho, đóng gói, lưu trữ…).
-  Dựa trên các dữ liệu này, hệ thống tiến hành phân bổ công việc cho từng nhân sự phù hợp, đồng thời xác định thời gian bắt đầu, kết thúc và KPI cho từng task.
-  Kết quả của quá trình tính toán là một danh sách giao việc chi tiết, sẵn sàng cho bước trình duyệt và triển khai.

| Thông tin chung   | Thông tin chung   | Thông tin chung   | Thông tin chung   | Thông tin chung       | Thông tin chung   | Thông tin chung   | Thông tin chung   | Thông tin chung   | Thời gian giao việc   | Thời gian giao việc   | Thời gian giao việc   |
|-------------------|-------------------|-------------------|-------------------|-----------------------|-------------------|-------------------|-------------------|-------------------|-----------------------|-----------------------|-----------------------|
| Stt               | Mã kho            | Mã lệnh           | Mã task           | Tên task              | Mã NV             | Họ tên NV         | Số điện thoại     | Chức vụ           | Tổng (phút)           | Bắt đầu               | Kết thúc              |
| 1                 | V011- V101        | 2026/00001        | T-Ncc             | Check lệnh            | 005812            | Lê Xuân Kha       | 0982990078        | Thủ kho           | 60                    | 16h30 15/4            | 17h30 15/4            |
| 2                 | V011- V101        | 2026/00001        | T-Apr             | Duyệt lịch giao việc  | 005813            | Bùi Văn Tiến      | 0982990079        | GĐ kho            | 120                   | 18h00 15/4            | 24h00 15/4            |
| 4                 | V011- V101        | 2026/00001        | T-Unl             | Dỡ hàng               | 005814            | Nghiêm Xuân Lợi   | 0982990081        | Lái xe            | 30                    | 8h00 16/4             | 8h30 16/4             |
| 5                 | V011- V101        | 2026/00001        | T-Mv1             | Đưa vào khu chờ nhập  | 005814            | Nghiêm Xuân Lợi   | 0982990081        | Lái xe            | 30                    | 8h30 16/4             | 9h00 16/4             |
| 3                 | V011- V101        | 2026/00001        | T-Ho              | Kiểm hàng-Ký bàn giao | 005814            | Văn Công Sơn      | 0982990080        | NVK               | 240                   | 9h00                  | 14h30                 |
| 6                 | V011- V101        | 2026/00001        | T-AGR             | Thực nhập kho         | 005812            | Lê Xuân Kha       | 0982990078        | Thủ kho           | 15                    | 14h30                 | 14h45                 |
| 7                 | V011- V101        | 2026/00001        | T-Sig             | Ký voffice            | 005812            | Lê Xuân Kha       | 0982990078        | Thủ kho           | 15                    | 14h45                 | 15h00                 |
| 8                 | V011- V101        | 2026/00001        | T-Mv2             | Đưa sang khu đóng gói | 005814            | Nghiêm Xuân Lợi   | 0982990081        | Lái xe            | 30                    | 15h00                 | 15h30                 |
| 9                 | V011- V101        | 2026/00001        | T-Pac             | Đóng gói hàng         | 005815            | Văn Công Sơn      | 0982990080        | NVK               | 60                    | 15h30                 | 16h30                 |
| 10                | V011- V101        | 2026/00001        | T-Mv3             | Đưa vào lưu trữ       | 005814            | Nghiêm Xuân Lợi   | 0982990081        | Lái xe            | 30                    | 16h30                 | 17h00                 |
| 11                | V011- V101        | 2026/00001        | T-WH              | Giám sát lệnh         | 005812            | Lê Xuân Kha       | 0982990078        | Thủ kho           | 630                   | 16h30                 | 17h00                 |
| 12                | V011- V101        | 2026/00001        | T-Scr             | Giám sát an ninh      | 005816            | Bùi Công Thành    | 0982990082        | Bảo vệ            | 15                    | 8h30                  | 8h45                  |

| Stt   | Task         | Ióngkho   | Ióngkho   | Ióngkho   | Ióngkho   | Kho tinh   | Kho tinh   | Kho tinh   | Kho tinh   | Kho tinh   |
|-------|--------------|-----------|-----------|-----------|-----------|------------|------------|------------|------------|------------|
| Stt   | Task         | Gkho      | Ihukho    | NVK       | BVAN      |            | NVK        | BVAN       | GS Lai xe  |            |
| LAGI  |              |           |           |           |           |            |            |            |            |            |
|       | Kvoffice     |           |           |           |           |            |            |            |            |            |
| 10    | Giam satlenh |           |           |           |           |            |            |            |            |            |
| 11    |              |           |           |           |           |            |            |            |            |            |

## Nhân sự thực hiện:

-  Không yêu cầu thao tác trực tiếp từ người dùng (hệ thống tự động tính toán và đề xuất).

## Đầu ra:

- 
- Task T-S5 được hoàn thành.
-  Sinh ra danh sách giao việc chi tiết T-S5, bao gồm đầy đủ thông tin về task, nhân sự, thời gian thực hiện và KPI tương ứng.

## 12. Yêu cầu duyệt - T-S6

Đầu vào:

Danh sách T-S5

-  Danh sách giao việc dự kiến T-S5

## Hệ thống thực hiện:

-  Trên ứng dụng mobile, hệ thống thực hiện Task T-S6 để chuyển danh sách giao việc đến cấp có thẩm quyền phê duyệt.
-  Hệ thống tự động gửi toàn bộ danh sách công việc đã được tính toán (bao gồm: task, nhân sự, thời gian thực hiện, KPI…) đến người duyệt (ví dụ: Giám đốc kho hoặc người được phân quyền).
-  Thông tin được hiển thị đầy đủ trên hệ thống để người duyệt có thể kiểm tra, đánh giá và đưa ra quyết định ở bước tiếp theo.
-  Đồng thời, hệ thống ghi nhận trạng thái đã gửi duyệt và bắt đầu theo dõi thời gian KPI cho bước phê duyệt.

## Nhân sự thực hiện:

-  Không yêu cầu thao tác trực tiếp tại bước này (hệ thống tự động chuyển danh sách).

## Đầu ra:

-  Task T-S6
- được hoàn thành.
-  Danh sách giao việc đã được chuyển đến người duyệt, sẵn sàng cho bước phê duyệt tiếp theo.

## 13.

## Phê duyệt - T-Apr

Đầu vào:

Danh sách T-S5

-  Danh sách giao việc T-S5

## Hệ thống thực hiện:

- (đã được hệ thống tính toán và đề xuất).
- đã được hệ thống trình duyệt.

-  Trên ứng dụng mobile, người dùng thực hiện Task T-Apr để phê duyệt danh sách công việc đã được đề xuất.
-  Người duyệt (ví dụ: Giám đốc kho hoặc người được phân quyền) truy cập vào danh sách, kiểm tra toàn bộ thông tin bao gồm:
- o
- Nội dung công việc (task)
- o Nhân sự được phân công
- o
- Thời gian thực hiện
- o
- KPI của từng công việc
-  Trong quá trình kiểm tra, người duyệt có thể thực hiện điều chỉnh nếu cần, bao gồm thay đổi:
- o
- Nhân sự thực hiện
- o Thời gian thực hiện
- o
- Nội dung công việc
-  Khi có sự thay đổi, hệ thống sẽ tự động kiểm tra tính hợp lệ của dữ liệu, đặc biệt là các trường hợp trùng lịch, chồng chéo công việc hoặc vi phạm quy tắc phân công.
- o Nếu phát hiện trùng hoặc lỗi → hệ thống hiển thị cảnh báo để người duyệt điều chỉnh.
- o
- Nếu hợp lệ → hệ thống ghi nhận thay đổi và cập nhật danh sách.
-  Sau khi hoàn tất kiểm tra và điều chỉnh (nếu có), người duyệt thực hiện xác nhận phê duyệt trên hệ thống.

## Nhân sự thực hiện:

-  Người duyệt (Giám đốc kho hoặc người được phân quyền) trực tiếp kiểm tra và phê duyệt trên hệ thống.

## Đầu ra:

-  Task T-Apr
- được hoàn thành.
-  Danh sách giao việc đã được phê duyệt chính thức và sẵn sàng cho bước triển khai tiếp theo.

## 14. Update hệ thống - T-S7

Đầu vào:

Danh sách T-Apr được duyệt.

-  Danh sách giao việc T-Apr
- đã được phê duyệt.

## Hệ thống thực hiện

-  Trên ứng dụng mobile, hệ thống thực hiện Task T-S7 để cập nhật danh sách giao việc chính thức sau khi được duyệt.
-  Hệ thống tiếp nhận toàn bộ dữ liệu từ bước phê duyệt và thực hiện ghi nhận các thông tin cuối cùng, bao gồm:
- o
- Danh sách công việc (task)
- o Nhân sự được phân công
- o
- Thời gian thực hiện
- o
- KPI và các thông tin liên quan
-  Các thay đổi (nếu có) từ bước phê duyệt sẽ được cập nhật đồng bộ vào hệ thống, đảm bảo dữ liệu chính xác và nhất quán.
-  Sau khi cập nhật, danh sách giao việc được chuyển sang trạng thái sẵn sàng triển khai, làm cơ sở cho các bước giao việc và thực hiện tiếp theo.

## Nhân sự thực hiện:

-  Không yêu cầu thao tác trực tiếp từ người dùng (hệ thống tự động cập nhật). Đầu ra:
-  Task T-S7 được hoàn thành.
-  Danh sách giao việc chính thức đã được cập nhật và sẵn sàng để triển khai.

## 15. Hệ thống duyệt- T-S8

## Đầu vào: KPI T-Apr

-  Trạng thái T-Apr đã  hết  thời  gian  KPI  phê  duyệt  nhưng chưa được người duyệt xử lý.

## Hệ thống thực hiện

-  Trên ứng dụng mobile, hệ thống thực hiện Task T-S8 để xử lý trường hợp quá hạn phê duyệt.
-  Hệ thống theo dõi thời gian KPI của bước T-Apr . Khi hết thời gian quy định mà chưa có thao tác phê duyệt từ người dùng, hệ thống sẽ tự động thực hiện phê duyệt danh sách giao việc.
-  Việc tự động phê duyệt được thực hiện dựa trên dữ liệu đã được đề xuất và cập nhật ở các bước trước đó (T-S5), đảm bảo quy trình không bị gián đoạn.
-  Sau khi tự động phê duyệt, hệ thống cập nhật trạng thái danh sách giao việc sang 'đã duyệt' và chuyển sang bước triển khai tiếp theo.
-  Đồng thời, hệ thống có thể ghi nhận log để phục vụ việc kiểm tra, đối soát và đánh giá KPI phê duyệt.

## Nhân sự thực hiện:

-  Không yêu cầu thao tác trực tiếp từ người dùng (hệ thống tự động xử lý). Đầu ra:
-  Task T-S8 được hoàn thành.
- 
- Danh sách giao việc được xác nhận là đã duyệt.
-  Dữ liệu sẵn sàng cho bước giao việc đến nhân sự thực hiện.

## 16. Giao việc đến nhân viên - T-S9

Đầu vào:

T-S6 hoặc T-S5

T-S8 hoặc T-S5: Danh sách lịch giao việc đã được hệ thống duyệt tự động (T-S8) hoặc đã được người quản lý phê duyệt chính thức (T-S5). Đây là dữ liệu đầu ra cuối cùng của bước lập kế hoạch và phê duyệt công việc, bao gồm danh sách nhiệm vụ, nhân sự được phân công, thời gian thực hiện và các thông tin liên quan.

## Hệ thống thực hiện

Hệ thống: Hệ thống tự động thực hiện việc phân phối công việc đến từng nhân sự được phân công trong danh sách đối với từng Task.

- o Gửi thông báo (notification) đến thiết bị mobile của từng nhân sự tương ứng với từng task được giao.
- o Nội dung thông báo bao gồm: mã công việc, mô tả nhiệm vụ, thời gian bắt đầu
- kết thúc, và các thông tin cần thiết để người dùng thực hiện.
- o Đồng thời cập nhật trạng thái công việc trên hệ thống sang trạng thái 'đã giao
- việc'.
- o Đảm bảo việc gửi thông báo được đồng bộ theo thời gian thực để tránh sai lệch hoặc trễ lịch.

Nhân sự: Không yêu cầu thao tác tại bước này. Hệ thống tự động xử lý toàn bộ việc phân phối và thông báo.

## Đầu ra:

Task T-S9 được hoàn tất.

Danh sách công việc đã được phân phối thành công đến đúng nhân sự được giao. Trạng thái công việc được cập nhật trên hệ thống, sẵn sàng cho bước theo dõi, nhắc việc và thực hiện tiếp theo trong quy trình.

## 17. Lấy hàng ra khu đóng gói - T-Mv4

## Đầu vào:

-  Task T-S9 (Giao việc đến nhân viên)
-  Task T-S5 (Đề xuất giao việc)
- 
- Thông tin vị trí hàng hóa theo lệnh xuất kho

## Hệ thống thực hiện:

-  Hiển thị chi tiết vị trí lưu trữ của hàng hóa trong kho
- 
- Đề xuất lộ trình di chuyển tối ưu để lấy hàng
- 
- Ghi nhận giảm tồn lưu kho, tăng vị trí đóng gói.
-  Cho phép người dùng cập nhật trạng thái trong quá trình lấy hàng, bao gồm:
- o
- o
- Xác nhận đã lấy hàng
- Chọn vị trí thay thế (nếu có)
- o
- Ghi nhận lý do không thể lấy hàng

## Nhân sự thực hiện:

- 
- Nhân viên kho (lái xe nâng hoặc nhân viên lấy hàng) thực hiện:
- o
- Di chuyển đến đúng vị trí được hệ thống hướng dẫn
- o
- o
- Lấy hàng theo danh sách yêu cầu
- Cập nhật trạng thái thực tế trên hệ thống
- 
- Trường hợp phát sinh:
- o
- Có thể lấy hàng tại vị trí khác (nếu được phép)
- o
- Hoặc báo không thể lấy hàng kèm lý do

## Đầu ra:

-  Task T-Mv4
- 
- hoàn thành
- Hàng hóa được tập kết tại khu vực đóng gói
- 
- Trạng thái lấy hàng được cập nhật đầy đủ trên hệ thống

## 18.

## Tính toán đóng gói: T-S10

## Đầu vào:

-  Danh sách công việc được giao từ T-S9
- 
- Thông tin hàng hóa theo lệnh xuất kho
- 
- Hàng hóa đã được lấy và tập kết tại khu vực đóng gói
- Dữ liệu vật tư đóng gói có sẵn trong hệ thống (thùng carton, thùng gỗ,
-  pallet…)

## Hệ thống thực hiện:

-  Phân tích đặc tính hàng hóa (kích thước, khối lượng, loại hàng)

-  Đối chiếu với danh mục vật tư đóng gói hiện có
-  Tính toán và đề xuất phương án đóng gói tối ưu, bao gồm:
- o Cách phân chia hàng vào từng thùng/pallet
- o
- Số lượng và loại vật tư đóng gói cần sử dụng
- cho từng đơn vị đóng gói (thùng/pallet) đã được
-  Tự động cấp mã QR/RFID xác định

## Nhân sự thực hiện:

-  Không (hệ thống tự động xử lý)

## Đầu ra:

- 
- Phương án đóng gói chi tiết cho từng loại hàng hóa
- 
- Danh sách các thùng/pallet kèm mã QR/RFID tương ứng

## 19.

## Nhắc việc - T-S11

## Đầu vào:

-  Danh sách công việc được giao từ T-S5 và phân công qua
- 
- T-S9
- Trạng thái KPI của từng task (gần hết hạn hoặc đã quá hạn)

## Hệ thống thực hiện:

- 
- Theo dõi thời gian thực hiện của từng task so với KPI đã thiết lập
-  Khi KPI sắp hết hạn
- o
- :
- Gửi cảnh báo nhắc việc đến nhân sự được giao
-  Khi KPI quá hạn
- :
- o Gửi thông báo quá hạn theo cấu hình của từng bước trong quy trình
- 
- Tùy theo từng bước, hệ thống có thể:
- o
- Cho phép cập nhật gia hạn thời gian xử lý
- o
- Hoặc tiếp tục theo dõi đến khi hết KPI mà không gia hạn

## Nhân sự thực hiện:

-  Nhân sự được giao việc tiếp nhận thông báo
- Xem nội dung cảnh báo để chủ động xử lý công việc đúng hạn hoặc thực
-  hiện gia hạn (nếu được phép)

## Đầu ra:

-  Thông báo nhắc việc hoặc quá hạn KPI được gửi đến người liên quan

## 20. Hủy, hết KPI - T-S12 Đầu vào:

-  Task bị
- 
- quá hạn KPI (timeout)
- Trường hợp xe không đến nhận hàng theo kế hoạch
-  Yêu cầu hủy từ Thủ kho tại task

## Hệ thống thực hiện:

-  Căn cứ vào các điều kiện đầu vào, hệ thống xác định lệnh cần hủy
-  Thực hiện đóng các task liên quan đến lệnh xuất kho
-  Cập nhật trạng thái lệnh xuất kho sang đã hủy
- 
- Lưu lại thông tin và lý do hủy phục vụ tra cứu

## Nhân sự thực hiện:

-  Thủ kho thực hiện đóng task T-WH
- 
- Nhập lý do hủy lệnh trên hệ thống

## Đầu ra:

-  Task T-WH
- được đóng
-  Lệnh xuất kho được cập nhật trạng thái đã hủy
-  Task T-S12 hoàn thành

## 21.

## Thông báo - T-S13

## Đầu vào:

-  Kết quả từ bước T-S12 (lệnh xuất kho bị hủy hoặc có thay đổi trạng thái) Hệ thống thực hiện:
- 
- Xác định danh sách các bên liên quan cần nhận thông báo, bao gồm:
- o
- o
- o
- Đối tác vận chuyển
- Người yêu cầu xuất kho
- Người duyệt lệnh xe
- o
- Quản lý phụ trách công việc trong ngày
- Gửi thông báo đến các bên thông qua các kênh cấu hình (App, SMS,
-  Email…)
- 
- Ghi nhận trạng thái đã gửi thông báo

## Nhân sự thực hiện:

-  Các bên liên quan tiếp nhận thông báo
-  Theo dõi và xử lý các công việc liên quan (nếu cần)

## Đầu ra:

-  Task T-S13 hoàn thành
- T-WH

-  Người dùng và các bên liên quan nhận được thông tin cập nhật về trạng thái lệnh

## 22. Giao việc trả hàng - T-S14

## Đầu vào:

-  Task T-WH đã được cập nhật trạng thái hủy lệnh xuất kho
- 
- Trường hợp hết KPI trong ngày

## Hệ thống thực hiện:

-  Tự động tạo task trả hàng về kho
-  Phân công nhiệm vụ cho nhân sự (lái xe/nhân viên kho) thực hiện việc đưa hàng về khu lưu trữ

## Nhân sự thực hiện:

- 
- Không

## Đầu ra:

-  Task T-S14 hoàn thành
-  Task trả hàng về khu lưu trữ được tạo và giao cho nhân sự thực hiện

## 23. Lưu trữ lại - T-Mv5

## Đầu vào:

-  Task T-S14 đã hoàn thành
-  Task T-Mv5
- được giao

## Hệ thống thực hiện:

- 
- Hiển thị vị trí lưu trữ phù hợp cho hàng hóa cần nhập lại kho
- 
- Đề xuất lộ trình di chuyển tối ưu trong kho

## Nhân sự thực hiện:

-  Nhân viên kho (lái xe nâng/nhân viên vận hành) thực hiện đưa hàng về vị trí lưu trữ theo hướng dẫn.
- 
- Vẫn cho phép nhân viên lưu tại vị trí khác.

## Đầu ra:

-  Task T-Mv5 hoàn thành
-  Hàng hóa được đưa về khu vực lưu trữ

## 24. Xác nhận lưu trữ - T-Mv5

## Đầu vào:

-  Hàng hóa đã được đưa vào khu vực lưu trữ theo task T-Mv5

## Hệ thống thực hiện:

- 
- Ghi nhận trạng thái lưu trữ của hàng hóa trên hệ thống

## Nhân sự thực hiện:

-  Nhân viên kho truy cập vào task T-Mv5
-  Xác nhận hoàn tất việc lưu kho
-  Có thể cập nhật vị trí lưu trữ khác (nếu thực tế thay đổi) và nhập lý do

## Đầu ra:

-  Task T-Mv5 được cập nhật trạng thái Hoàn tất lưu kho
-  Dữ liệu tồn kho được cập nhật chính xác trên hệ thống

## 25.

## Cập nhật gia hạn T-16

## Đầu vào: T-Ho

-  Task T-Ho
- (giao việc bàn giao hàng cho xe vận chuyển).

## Hệ thống thực hiện:

-  Trên ứng dụng mobile, người dùng thực hiện Task T-HO2 để cập nhật lại thời gian giao/nhận hàng trong trường hợp đối tác chưa đến nhận hàng theo kế hoạch ban đầu.
-  Người được giao nhiệm vụ cần chủ động liên hệ với đối tác để xác nhận lại thời gian nhận hàng mới trước khi thực hiện cập nhật trên hệ thống.
-  Sau khi có thông tin xác nhận, người dùng nhập thời gian gia hạn vào hệ thống và lưu lại để làm căn cứ điều phối công việc.
-  Hệ thống xử lý theo hai trường hợp:
- o Gia hạn trong cùng ngày:
-  Hệ thống ghi nhận thay đổi và tự động điều chỉnh lại lịch làm việc, sắp xếp lại các task liên quan nhằm tối ưu tiến độ trong ngày.

## o Gia hạn sang ngày khác:

-  Hệ thống kết thúc các công việc hiện tại liên quan đến lệnh trả hàng trong ngày.
-  Chuyển toàn bộ thông tin sang trạng thái chờ xử lý lại.
-  Sử dụng dữ liệu này làm đầu vào cho bước tính toán và giao việc mới ở lần tiếp theo (quay lại luồng T-S5/T-9).

## Nhân sự thực hiện:

-  Nhân viên được giao task T-HO chịu trách nhiệm liên hệ đối tác, xác nhận và cập nhật thời gian gia hạn trên hệ thống.

## 26. In tem, Đóng gói - T-Pac Đầu vào:

-  Task T-Mv4 : Hàng hóa đã được lấy ra khu vực đóng gói
-  Task T-S10
- : Phương án đóng gói đã được hệ thống tính toán

## Hệ thống thực hiện:

-  Hiển thị thông tin chi tiết phương án đóng gói trên ứng dụng (web/mobile)
-  Hướng dẫn loại vật tư đóng gói cần sử dụng (thùng carton, pallet…)
-  Hỗ trợ in tem và cấp mã RFID cho từng kiện hàng

## Nhân sự thực hiện:

-  Nhân viên đóng gói truy cập ứng dụng mobile và thực hiện task T-Pac
- 
- Xem thông tin kế hoạch đóng gói do hệ thống cung cấp
- 
- Thực hiện đóng gói thủ công theo phương án, bao gồm:
- o
- Lựa chọn đúng loại thùng theo yêu cầu
- o Sắp xếp và phân bổ hàng hóa vào từng thùng đúng danh sách
-  Sau khi hoàn tất:
- o In tem RFID
- Dán tem lên từng thùng hàng, đảm bảo mỗi thùng có mã định danh
- o riêng
-  Đảm bảo quá trình đóng gói đúng tiêu chuẩn, an toàn hàng hóa và thuận tiện cho vận chuyển

## Đầu ra:

-  Task T-Pac hoàn thành
-  Hàng hóa được đóng gói thành các kiện hoàn chỉnh
-  Mỗi kiện có mã RFID phục vụ quản lý và truy xuất

## 27. Xác nhận đóng gói:

## Đầu vào:

-  Kết quả từ T-S10 và T-Mv4
-  Task T-Pac
- đã hoàn thành, hàng hóa đã được đóng gói thành kiện

## Hệ thống thực hiện:

-  Hiển thị thông tin các kiện hàng đã đóng gói

- 
- Ghi nhận trạng thái xác nhận đóng gói
-  Cho phép lựa chọn loại thùng và mã RFID có sẵn (nếu hàng đã được đóng gói theo tiêu chuẩn trước đó)
- 
- Giảm khu vực đóng gói, tăng khu vực chờ xuất.

## Nhân sự thực hiện:

-  Nhân viên kho truy cập vào task
- 
- T-Pac
- Kiểm tra lại tình trạng đóng gói thực tế
- 
- Thực hiện xác nhận trên hệ thống
- 

## Đầu ra:

-  Task T-Pac được xác nhận hoàn tất
-  Trạng thái đóng gói của hàng hóa được cập nhật trên hệ thống

## 28.

## Yêu cầu lấy hàng - T-S15

## Đầu vào:

-  Kết quả từ T-Pac : Hàng hóa đã được đóng gói và sẵn sàng xuất kho Hệ thống thực hiện:
- 
- 
- 
- Gửi yêu cầu lấy hàng đến các bên liên quan, bao gồm:
- o
- o
- Bộ phận an ninh/cổng (bảo vệ)
- Lái xe đến nhận hàng
- Hiển thị thông tin cần thiết để lấy hàng, bao gồm:
- o
- Khu vực bốc xếp (loading zone)
- o
- Thông tin lệnh xuất và kiện hàng
- Ghi nhận trạng thái đã gửi yêu cầu lấy hàng

## Nhân sự thực hiện:

- 
- Không (hệ thống tự động thực hiện)

## Đầu ra:

-  Task T-S15 hoàn thành
-  Lệnh lấy hàng được gửi đến các bên liên quan để thực hiện nhận hàng

## 29. Cập nhật giờ xe: T-Scr

## Đầu vào:

- Trường hợp hàng đã được đóng gói sẵn theo tiêu chuẩn:
- o
- o
- Lựa chọn loại thùng phù hợp
- Gán mã RFID tương ứng

-  Thông tin xe đến và rời khỏi kho
-  Task T-Ldg
- (tải hàng lên xe) đã hoàn thành

## Hệ thống thực hiện:

-  Hiển thị danh sách xe ra/vào kho cần cập nhật
- 
- Cho phép ghi nhận thời gian xe vào và ra khỏi kho
- 
- 
- Lưu trữ toàn bộ thông tin để phục vụ quản lý và đối soát
- Ghi nhận các trạng thái phát sinh (nếu có), như từ chối nhận hàng

## Nhân sự thực hiện:

-  Bộ phận an ninh (bảo vệ) sử dụng task T-Scr
-  Theo dõi thực tế xe ra/vào kho
- 
- Cập nhật thời gian vào/ra trên hệ thống
- 
- Ghi nhận các trường hợp đặc biệt (nếu có)

## Đầu ra:

-  Task T-Scr
- 
- được hoàn thành
- Thời gian xe ra/vào kho được ghi nhận đầy đủ trên hệ thống
-  Các trạng thái liên quan (như từ chối nhận hàng) được lưu trữ phục vụ quản lý và báo cáo

## 30. Kiểm hàng: T-Ho

## Đầu vào: Lệnh xuất kho. T-Pac hoàn thành.

- 
- Lệnh xuất kho. T-Pac hoàn thành các kiện hàng.

## Hệ thống thực hiện:

- 
- Hiển thị dữ liệu

## Nhân sự thực hiện:

-  Khi đối tác đến nhận hàng, nhân viên kho tiến hành kiểm đếm thực tế toàn bộ hàng hóa theo Lệnh xuất kho, người dùng có thể xuất biên bản bàn giao do hệ thống cung cấp.
- 
- Việc kiểm đếm phải đảm bảo đúng số lượng, chủng loại và tình trạng hàng hóa theo dữ liệu đã được phê duyệt trước đó hoặc kiểm theo các mã kiện hàng.

## Đầu ra:

- 
- Kết quả kiểm đếm.

## 31. Ký biên bản bàn giao: T-Ho Đầu vào:

- 
- Kết quả kiểm đếm hàng hóa trước khi bàn giao

## Hệ thống thực hiện:

-  Hiển thị thông tin biên bản bàn giao (BBBG) trên hệ thống
- 
- 
- Cho phép ghi nhận kết quả ký xác nhận
- Lưu trữ dữ liệu biên bản và các tệp đính kèm (hình ảnh, chữ ký)

## Nhân sự thực hiện:

-  Nhân viên kho và đại diện đối tác vận chuyển cùng thực hiện ký biên bản bàn giao
-  Thực hiện ký trực tiếp trên thiết bị di động hoặc:
- o Ký bản giấy
- o Chụp hình biên bản và hàng hóa kèm theo xe vận tải, lái xe
- o Tải hình ảnh lên hệ thống làm minh chứng

## Đầu ra:

-  Task T-Ho hoàn thành
-  Biên bản bàn giao được ký xác nhận và lưu trữ đầy đủ trên hệ thống

## 32. Thực xuất kho - T-AGI

## Đầu vào:

-  Kết quả từ T-Ho : Biên bản bàn giao (BBBG) đã được ký xác nhận Hệ thống thực hiện:
-  Hiển thị thông tin lệnh xuất kho và dữ liệu theo biên bản bàn giao
- 
- Ghi nhận nghiệp vụ xuất kho trên hệ thống
-  Cập nhật trạng thái tồn kho sau khi xuất, sau khi lấy được mã Phiếu xuất kho.

## Nhân sự thực hiện:

-  Thủ kho truy cập vào task
- T-AGI
-  Đối chiếu số liệu thực tế theo biên bản bàn giao đã ký
-  Thực hiện xác nhận xuất kho trên hệ thống

## Đầu ra:

-  Task T-AGI hoàn thành
-  Lệnh xuất kho được ghi nhận chính thức trên hệ thống
- 
- Dữ liệu tồn kho được cập nhật chính xác sau khi xuất

## 33. Trả API - T-API3

## Đầu vào:

-  Kết quả từ T-AGI
- Hệ thống thực hiện:
-  Gửi yêu cầu API3 đến hệ thống nguồn để lấy số phiếu xuất kho
- 
- Nhận phản hồi từ hệ thống nguồn, bao gồm số phiếu xuất
- 
- 
- Cập nhật thông tin phiếu xuất vào hệ thống
- Thực hiện ghi nhận giảm tồn kho chính thức theo số liệu đã xuất

## Nhân sự thực hiện:

-  Không (hệ thống tự động xử lý)

## Đầu ra:

-  Task T-API3 hoàn thành
- 
- Số phiếu xuất kho được cập nhật trên hệ thống
-  Tồn kho được giảm trừ chính xác theo thực tế xuất kho.

## 34.

## Ký voffice

## Đầu vào:

-  Kết quả từ T-API3 : Lệnh xuất kho đã có thông tin phiếu xuất Hệ thống thực hiện:
- 
- 
- 
- 
- Tạo và hiển thị phiếu xuất kho cần trình ký
- Hỗ trợ trình ký điện tử qua hệ thống Voffice
- Tự động đính kèm mẫu (template) ký phù hợp
- Trường hợp chưa có số phiếu xuất kho:
- o
- Ghi nhận trạng thái chờ
- o Gửi nhắc nhở thực hiện ký sau khi có đầy đủ thông tin

## Nhân sự thực hiện:

-  Thủ kho truy cập vào task T-Sig
- 
- Kiểm tra nội dung phiếu xuất kho
- 
- Thực hiện trình ký và hoàn tất ký điện tử trên hệ thống

## Đầu ra:

-  Phiếu xuất kho được ký duyệt trên hệ thống Voffice
-  Task T-Sig
- hoàn thành
-  Chứng từ xuất kho được lưu trữ đầy đủ, hợp lệ phục vụ kiểm tra và đối soát
- : Lệnh xuất kho đã được thực hiện

## 35. Xử lý chứng từ

## Đầu vào:

-  Phiếu xuất kho bị từ chối ký trên hệ thống

## Hệ thống thực hiện:

-  Ghi nhận trạng thái từ chối ký của chứng từ
- 
- Lưu trữ toàn bộ thông tin liên quan đến phiếu xuất kho
- 
- Hỗ trợ truy xuất dữ liệu phục vụ xử lý và theo dõi

## Nhân sự thực hiện:

- 
- Nhân sự phụ trách (thủ kho/quản lý) thực hiện kiểm tra lý do từ chối
- 
- Tiến hành xử lý theo quy trình hủy hoặc điều chỉnh chứng từ
- 
- Thực hiện các bước bổ sung để hoàn thiện hồ sơ theo quy định

## Đầu ra:

-  Hồ sơ chứng từ được xử lý và hoàn chỉnh theo đúng quy trình
-  Dữ liệu được lưu trữ đầy đủ phục vụ tra cứu và kiểm soát

## 36. Tải hàng lên xe

## Đầu vào:

-  Kết quả từ T-Ho : Biên bản bàn giao đã được ký
-  Hàng hóa đã được kiểm đếm và đóng gói hoàn chỉnh

## Hệ thống thực hiện:

- 
- Hiển thị danh sách các kiện hàng cần bốc xếp lên xe
-  Đề xuất thứ tự sắp xếp kiện hàng (từ trong ra ngoài) để tối ưu không gian và thuận tiện dỡ hàng.
-  Giảm khu vực chờ xuất kho.

## Nhân sự thực hiện:

-  Nhân viên kho và lái xe phối hợp thực hiện bốc xếp hàng hóa
- 
- Tải hàng lên xe theo thứ tự và hướng dẫn của hệ thống

## Đầu ra:

-  Task T-Ldg
- được xác nhận hoàn thành
- 
- Hàng hóa đã được xếp đầy đủ lên xe, sẵn sàng vận chuyển

## 37.

## Quy trình vận chuyển

## Đầu vào:

-  Task T-Ldg đã hoàn thành (hàng đã lên xe)

-  Kết quả từ T-Ho (biên bản bàn giao)

## Hệ thống thực hiện:

-  Theo dõi và cập nhật vị trí xe trong quá trình vận chuyển thông qua thiết bị định vị (vtracking)
- 
- Ghi nhận trạng thái vận chuyển theo thời gian thực

## Nhân sự thực hiện:

- 
- Không (hệ thống tự động theo dõi)

## Đầu ra:

-  Trạng thái vận chuyển được cập nhật liên tục
- 
- Xác định vị trí hiện tại và điểm đến của xe.

## 38.

## Quy trình nhập kho A2

## Đầu vào:

-  Task T-Ldg
- (hàng đã vận chuyển)
-  Kết quả từ T-Ho
- 
- (biên bản bàn giao)
- Phiếu xuất kho đi kèm hàng hóa

## Hệ thống thực hiện:

-  Tiếp nhận dữ liệu và xử lý theo quy trình nhập kho A2
- 
- Ghi nhận thông tin hàng hóa nhập kho

## Nhân sự thực hiện:

- 

## Đầu ra:

- 
- Hàng hóa được nhập kho thành công tại kho A2
- 
- Trạng thái vận chuyển hoàn tất
-  Quy trình xuất - vận chuyển - nhập kho được kết thúc

## Kết thúc - End

## 39. Đầu vào:

-  Hoàn thành

## Hệ thống thực hiện:

-  Đóng quy trình
- Nhân sự tại kho A2 thực hiện theo quy trình nhập kho, bao gồm:
- o Tiếp nhận hàng
- o
- Kiểm tra hàng hóa
- o
- Thực hiện nhập kho trên hệ thống

## Nhân sự thực hiện:

-  Không

## Đầu ra:

-  Quy trình hoàn tất đóng T-WH.
# TỔNG QUAN DỰ ÁN VÀ KIẾN TRÚC HỆ THỐNG KHO THÔNG MINH (AI-WS)
## AI-WS Master Project Overview & System Architecture Context

> **Mục đích tài liệu:** Đây là tài liệu nền tảng (Master Context) để tất cả thành viên dự án (BA, Dev, Tester, PO, Partner) và AI Agent khi đọc vào đều hiểu được bức tranh toàn cảnh hệ thống AI-WS.

---

## 1. BỐI CẢNH DỰ ÁN & BÀI TOÁN KINH DOANH

### 1.1. Hiện trạng

| Hạng mục | Mô tả |
|---|---|
| **Hệ thống hiện có** | **SAP S/4HANA** — Đã quản lý đầy đủ: Chứng từ nhập xuất kho, Hạch toán kế toán, Quản lý tồn kho, KCS vật tư. |
| **Khoảng trống (Gap)** | SAP **chưa có** khả năng: Quản lý công việc vận hành kho vật lý (ai làm gì, ở đâu, bao giờ xong), Giao việc tự động cho nhân viên, Theo dõi tiến độ thực thi từng bước, Đo lường KPI/SLA nhân viên kho. |
| **Nhu cầu** | Cần một hệ thống bổ trợ SAP chuyên biệt cho **lớp vận hành thực thi kho vật lý** — Biến mỗi hoạt động kho thành Task điện tử có thể đo lường, giám sát và tối ưu hóa. |

### 1.2. Thông tin Dự án

| Hạng mục | Chi tiết |
|---|---|
| **Tên hệ thống** | Hệ thống Quản lý Kho Thông Minh AI-WS (AI Smart Warehouse Management System) |
| **Mã dự án** | `AI-WS Platform` |
| **Mục tiêu cốt lõi** | Xây dựng lớp Quản lý Công việc Kho (**Task Execution Layer**) bổ trợ SAP: Số hóa 100% vận hành kho, tự động giao việc theo Role, điều phối tuần tự, đo lường SLA/KPI nhân viên, đồng bộ chứng từ tài chính với SAP S/4HANA và ký duyệt điện tử V-Office. |
| **Mô hình vận hành** | **Task-Driven WMS — Mô hình "Grab for Warehouse"** *(chi tiết tại Mục 3)* |
| **Phạm vi kho** | **Multi-warehouse** — Phục vụ nhiều kho. Các quy trình giống nhau giữa các kho. |
| **Nền tảng** | **Multi-platform** — Web PC + Tablet + Mobile App |
| **Đối tượng sử dụng** | Nhân viên kho nội bộ (Thủ kho, NV kho, Lái xe,...) + Đối tác bên ngoài (NCC, Tài xế NCC) — Đối tác có truy cập trực tiếp hệ thống. |

---

## 2. KIẾN TRÚC TÍCH HỢP 3 HỆ THỐNG

Hệ thống AI-WS là **lớp vận hành thực thi kho vật lý (Physical Execution Layer)**, nằm giữa SAP (ERP/Chứng từ/Kế toán) và V-Office (Ký duyệt điện tử):

```mermaid
flowchart TD
    subgraph SAP ["SAP S/4HANA (Core ERP)"]
        SAP_DOC["Chứng từ Nhập/Xuất kho & Kế toán"]
        SAP_KCS["KCS & Bóc tách Mã Cha -> Mã Con"]
    end

    subgraph AIWS ["AI-WS (Task Execution Layer)"]
        AIWS_ORD["Tiếp nhận Lệnh -> Tạo Order"]
        AIWS_CHK["Check lệnh -> TRIGGER Sinh Task"]
        AIWS_ENG["Task Engine: Giao việc theo Role, Điều phối tuần tự"]
        AIWS_KPI["Đo lường SLA / KPI nhân viên"]
    end

    subgraph VOFFICE ["V-Office (Ký duyệt Điện tử)"]
        VO_SIGN["Luồng phê duyệt & Chữ ký số"]
    end

    SAP_DOC -- "Đẩy Lệnh Nhập/Xuất" --> AIWS_ORD
    AIWS_CHK -- "Báo Hủy/Từ chối/Sai lệch" --> SAP_DOC
    AIWS_ENG -- "Đồng bộ kết quả thực thi" --> SAP_DOC
    SAP_KCS -- "Trả kết quả KCS & Mã Con" --> AIWS_ENG
    AIWS_ENG -- "Trình ký trực tiếp từ UI" --> VO_SIGN
    VO_SIGN -- "Callback kết quả ký" --> AIWS_ENG
```

### Phân định rõ trách nhiệm:

| Hệ thống | Vai trò | Ví dụ cụ thể |
|---|---|---|
| **SAP S/4HANA** | Quản lý chứng từ, kế toán, tồn kho, KCS | Tạo PO, Inbound/Outbound Delivery, hạch toán Mvt 101/201, bóc tách mã Cha-Con, quản lý Blocked Stock/UU. |
| **AI-WS** | Quản lý công việc vận hành kho vật lý | Sinh Task, giao việc cho nhân viên theo Role, điều phối tuần tự, theo dõi tiến độ, đo SLA/KPI, quản lý vị trí Bin. |
| **V-Office** | Ký duyệt điện tử văn bản | Trình ký Phiếu nhập kho, phê duyệt chữ ký số CA. |

---

## 3. TRIẾT LÝ VẬN HÀNH: MÔ HÌNH "GRAB FOR WAREHOUSE"

### 3.1. Nguyên lý cốt lõi

> **"1 Trạm" (One-Station Principle):** Tối ưu hóa trải nghiệm sao cho người dùng chỉ cần vào ứng dụng, nhìn thấy Task được giao, thực hiện và **bấm Hoàn thành** là xong. Hệ thống lo toàn bộ việc giao việc, điều phối tuần tự và đo lường.

Mô hình vận hành tương tự **Grab** nhưng áp dụng cho kho:

```mermaid
flowchart LR
    A["SAP đẩy Lệnh"] --> B["AI-WS tạo Order\n(Chờ xác nhận)"]
    B --> C{"Thủ kho: Check lệnh\n& Xác nhận"}
    C -- "Xác nhận" --> D["Task Engine sinh\nDanh sách Task\n(theo Catalog Quy trình)"]
    D --> E["Mỗi Task gắn\nvới 1 Role / Ca trực"]
    E --> F["Nhân viên có Role\nphù hợp nhìn thấy\nTask trên màn hình"]
    F --> G["Nhân viên bấm\nNhận việc"]
    G --> H["Thực hiện &\nbấm Hoàn thành"]
    H --> I{"Task Engine kiểm tra:\nĐã xong hết điều kiện\n(1 người / 2 người / Nhánh song song)?"}
    I -- "Đủ điều kiện" --> J["Mở khóa Task\ntiếp theo trong chuỗi"]
    J --> F
```

### 3.2. Quy tắc Sinh Task (Task Generation)

| Bước | Mô tả | Trạng thái |
|---|---|---|
| **Bước 1** | SAP đẩy bản tin Lệnh nhập/xuất (`T-API`) sang AI-WS | AI-WS tạo **Order** ở trạng thái `Chờ xác nhận` |
| **Bước 2** | Thủ kho thực hiện **Check lệnh** — đối soát thông tin chứng từ | Order vẫn `Chờ xác nhận`. **Chưa sinh Task.** |
| **Bước 3** | Thủ kho bấm **Xác nhận lệnh** ✅ | **🔥 TRIGGER EVENT:** Task Engine được kích hoạt |
| **Bước 4** | Task Engine tra cứu **Catalog Quy trình** áp dụng cho loại Order | Sinh ra đúng danh sách Task theo quy trình |

> **Lưu ý quan trọng:** Việc sinh Task **phụ thuộc vào Quy trình (Process Type)**. Mỗi loại quy trình (Nhập NCC, Nhập thu hồi, Xuất cấp phát,...) có danh sách Task khác nhau, được cấu hình trong **Catalog Task & Quy trình**.

### 3.3. Quy tắc Giao việc Tự động (Auto-Assignment — "Grab Matching")

| Quy tắc | Chi tiết |
|---|---|
| **Role-Based Visibility** | Mỗi Task thuộc quy trình được gán cho **1 Role cụ thể**. Chỉ người dùng có Role đó mới nhìn thấy Task trên màn hình của mình. |
| **Hiển thị theo ngày** | Nhân viên nhìn thấy danh sách Task khả dụng (Available Tasks) **theo ngày**. |
| **Điều kiện "Rảnh rỗi"** | Một nhân viên được coi là **rảnh rỗi** khi **không có Task nào đang được assign cho họ** (không có Task `IN_PROGRESS`). |
| **Sequential Dependency** | Các Task trong cùng 1 Order có **quan hệ phụ thuộc tuần tự**: phải hoàn thành Task trước mới mở khóa Task kế tiếp. |
| **Auto-Match** | Khi một nhân viên hoàn thành Task hiện tại $\rightarrow$ Hệ thống tự động kiểm tra: Có Task nào đúng Role của họ, đã được mở khóa (Task trước đó đã `COMPLETED`) và chưa ai nhận $\rightarrow$ **Ghép người và việc vào nhau** (như Grab ghép tài xế với cuốc xe). |

---

### 3.4. Vòng đời Task Toàn Diện (Task Lifecycle & State Machine)

Hệ thống chuẩn hóa vòng đời Task từ trạng thái **`NEW`** (Khởi tạo mới), xử lý trọn vẹn cả 3 kịch bản: **Task 1 người tiêu chuẩn**, **Task 2 người cùng làm (Joint Task)**, và **Task bẻ luồng song song (Parallel Fork/Join)**:

#### A. Sơ đồ Vòng đời Chi Tiết (Flowchart State Machine)

```mermaid
flowchart TD
    %% Khoi tao
    START([🔥 Kích hoạt: Thủ kho Xác nhận Lệnh]) --> STATE_NEW["Trạng thái: NEW<br>(Task vừa sinh ra, chờ điều kiện mở khóa)"]
    
    %% Mo khoa
    STATE_NEW -->|Điều kiện mở khóa thỏa mãn<br>Xe vào cổng / Task trước xong / KCS xong| STATE_AVAIL["Trạng thái: AVAILABLE<br>(Khả dụng: Hiển thị theo Role & Ngày)"]
    
    %% KICH BAN 1: 1 Nguoi lam
    subgraph MODE_1 ["KỊCH BẢN 1: 1 NGƯỜI LÀM TIÊU CHUẨN"]
        STATE_AVAIL -->|1 NV nhận việc| IN_PROG_1["Trạng thái: IN_PROGRESS<br>(1 nhân viên đang làm)"]
        IN_PROG_1 -->|NV bấm Hoàn thành| DONE_1["Trạng thái: COMPLETED<br>(Đã hoàn thành)"]
    end

    %% KICH BAN 2: 2 Nguoi cung lam
    subgraph MODE_2 ["KỊCH BẢN 2: 2 NGƯỜI CÙNG LÀM (VD: DỠ CONTAINER)"]
        STATE_AVAIL -->|Giao cho NV A và NV B| IN_PROG_2["Trạng thái: IN_PROGRESS<br>(Cả 2 NV cùng làm, tự chia việc tại hiện trường)"]
        IN_PROG_2 -->|NV A xác nhận xong phần mình| A_DONE["NV A: Xong"]
        IN_PROG_2 -->|NV B xác nhận xong phần mình| B_DONE["NV B: Xong"]
        A_DONE --> CHECK_BOTH{"Kiểm tra:<br>Cả 2 NV đã xong?"}
        B_DONE --> CHECK_BOTH
        CHECK_BOTH -- "Cả 2 đã xong (Xe dỡ xong 100%)" --> DONE_2["Trạng thái: COMPLETED<br>(Xong toàn bộ Task dỡ hàng)"]
    end

    %% KICH BAN 3: Be luong song song
    subgraph MODE_3 ["KỊCH BẢN 3: BẺ LUỒNG SONG SONG (SAU KCS T-API5)"]
        FORK_POINT{"Task KCS COMPLETED<br>Quét cờ is_packing_required"}
        FORK_POINT -- "TRUE (Hàng cần đóng gói)" --> TRACK_A["Nhánh A:<br>T-Mv2 (Khu đóng gói) -> T-Pac (Đóng gói, RFID) -> T-Mv3 (Cất kệ)"]
        FORK_POINT -- "FALSE (Hàng to cất thẳng)" --> TRACK_B["Nhánh B:<br>T-Mv3 (Cất thẳng vào Bin/Bãi sàn - Song song)"]
        TRACK_A --> JOIN_POINT{"HỘI TỤ ĐÓNG ĐƠN (AND Gate)<br>Cả 2 nhánh A & B cùng COMPLETED"}
        TRACK_B --> JOIN_POINT
        JOIN_POINT --> ORDER_COMPLETED(["Hoàn tất Lệnh nhập kho (COMPLETED)"])
    end

    %% Mo khoa buoc tiep theo
    DONE_1 --> TRIGGER_ENGINE["Task Engine Kích Hoạt"]
    DONE_2 --> TRIGGER_ENGINE
    TRIGGER_ENGINE --> UNLOCK_NEXT(["Mở khóa Task tiếp theo trong chuỗi<br>(VD: Task 2 Kiểm đếm & Ký BBBG chuyển sang AVAILABLE)"])

    %% Huy task
    IN_PROG_1 -.->|Hủy Lệnh| CANCEL_NODE["Trạng thái: CANCELED<br>(Đã hủy)"]
    IN_PROG_2 -.->|Hủy Lệnh| CANCEL_NODE
```

#### B. Định nghĩa các Trạng thái & Nguyên tắc Mở khóa

| Trạng thái Task | Ý nghĩa | Hành vi hệ thống & Nguyên tắc mở khóa |
|---|---|---|
| **`NEW`** | Khởi tạo mới | Task đã được sinh ra khi Thủ kho xác nhận lệnh nhưng đang chờ điều kiện tiên quyết (xe vào cổng, task trước, KCS) $\rightarrow$ Chưa hiển thị cho công nhân. |
| **`AVAILABLE`** | Khả dụng (Chờ nhận) | Đã mở khóa $\rightarrow$ Hiển thị trên màn hình của nhân viên có Role phù hợp để bấm nhận việc hoặc Auto-match. |
| **`IN_PROGRESS`** | Đang thực hiện | • **1 người làm:** Nhân viên nhận việc và đang thao tác.<br>• **2 người cùng làm:** Cả 2 nhân viên (NV A và NV B) cùng nhận việc, **tự chia việc tại hiện trường** (không áp đặt số lượng cố định). Cả 2 đều chuyển trạng thái `IN_PROGRESS`. |
| **`COMPLETED`** | Đã hoàn thành | • **Task 1 người:** NV bấm xong $\rightarrow$ chuyển `COMPLETED`.<br>• **Task 2 người cùng làm:** **Bắt buộc cả 2 nhân sự đều hoàn thành** (xác nhận toàn bộ xe hàng đã dỡ xong $100\%$) thì Task dỡ hàng mới chuyển `COMPLETED`.<br>• **🔥 RÀNG BUỘC MỞ KHÓA:** Chỉ khi Task dỡ hàng chuyển sang `COMPLETED` thì Task tiếp theo (**Kiểm hàng & Ký BBBG**) mới được mở khóa chuyển `AVAILABLE`. |
| **`CANCELED`** | Đã hủy | Hủy do Order bị từ chối tiếp nhận hoặc SAP phát lệnh Cancel. |

---

---

## 4. DANH MỤC QUY TRÌNH NGHIỆP VỤ (PROCESS CATALOG) & PHÂN CẤP 4 TẦNG

Hệ thống AI-WS hỗ trợ **nhiều loại quy trình Nhập và Xuất kho**. Mỗi quy trình có **danh sách Task riêng** được cấu hình trong Catalog.

### 4.1. Mô hình Phân cấp Quy trình 4 Tầng (4-Level Process Architecture)

Hệ thống chuẩn hóa toàn bộ nghiệp vụ vận hành kho theo cấu trúc phân cấp 4 tầng chặt chẽ:

```mermaid
flowchart TD
    L1["TẦNG 1: WORKFLOW DOMAIN (Luồng Lớn / Phân Hệ)<br>• INBOUND (Nhập kho)<br>• OUTBOUND (Xuất kho)<br>• TRANSFER (Chuyển kho)<br>• INVENTORY (Kiểm kê)"]
    
    L2["TẦNG 2: PROCESS PROFILE (Quy Trình Nghiệp Vụ Cụ Thể)<br>• MM.10A: Nhập mua hàng từ NCC<br>• MM.10B: Nhập thu hồi công trình (PS)<br>• MM.10C: Nhập thu hồi từ trạm (PM)<br>• OUT.01A: Xuất cấp phát gom xe"]
    
    L3["TẦNG 3: PROCESS STAGE / PHASE (Giai Đoạn / Cụm Trạm)<br>• Stage 1: Tiếp nhận & Kiểm soát cổng<br>• Stage 2: Dỡ hàng & Kiểm đếm BBBG<br>• Stage 3: Thực nhập & KCS<br>• Stage 4A: Đóng gói & RFID (Nhánh A) | Stage 4B: Cất thẳng (Nhánh B)<br>• Stage 5: Lưu trữ Putaway & Chốt tồn kho"]
    
    L4["TẦNG 4: TASK EXECUTION (Nhiệm Vụ Thực Thi Cụ Thể - Grab Matching)<br>• Task 1: Dỡ hàng [T-Unl]<br>• Task 2: Kiểm đếm & Ký BBBG [T-Ho]<br>• Task 3: Đưa vào khu chờ [T-Mv1]<br>• Task 4: KCS & Bóc tách [T-AGR]<br>• Task 5, 6, 7..."]

    L1 --> L2
    L2 --> L3
    L3 --> L4
```

| Cấp | Tên Cấp | Ý nghĩa & Vai trò |
|---|---|---|
| **Tầng 1** | **Workflow Domain** | Phân hệ luồng lớn trong chuỗi cung ứng: `INBOUND` (Nhập), `OUTBOUND` (Xuất), `TRANSFER` (Điều chuyển), `INVENTORY` (Kiểm kê). |
| **Tầng 2** | **Process Profile** | Quy trình nghiệp vụ cụ thể (VD: `MM.10A`, `MM.10B`, `MM.10C`, `OUT.01A`). Mỗi loại Order áp dụng 1 Profile. |
| **Tầng 3** | **Process Stage** | Cụm giai đoạn/trạm xử lý (Stage) phục vụ theo dõi thanh tiến độ Dashboard cấp quản lý (20% $\rightarrow$ 40% $\rightarrow$ 60% $\rightarrow$ 80% $\rightarrow$ 100%). |
| **Tầng 4** | **Task Execution** | Nhiệm vụ thực thi cụ thể tại hiện trường được Task Engine phân phối cho từng Role/Nhân viên theo mô hình Grab. |

---

### 4.2. Các quy trình đã xác định

| Nhóm | Mã Quy trình | Tên Quy trình | Nguồn & Đặc thù | Trạng thái thiết kế |
|---|---|---|---|---|
| **Nhập kho** | `MM.10A` | Nhập kho mua hàng từ NCC (PO) | SAP Inbound Delivery; KCS bóc tách Mã Cha $\rightarrow$ Con; bẻ luồng Đóng gói vs Cất thẳng | ✅ Đã thiết kế chi tiết |
| **Nhập kho** | `MM.10B` | Nhập thu hồi từ Công trình (PS) | SAP Reservation (WBS Element); nhập nguyên giá; V-Office 2 lần; KCS QM.04 | ✅ Đã thiết kế SOP |
| **Nhập kho** | `MM.10C` | Nhập thu hồi từ Trạm (PM) | SAP PM Order; quản lý 100% Serial cũ; KCS phân loại 3 ngả (UU / Sửa / Hủy) | ✅ Đã thiết kế SOP |
| **Nhập kho** | `MM.10D` | Nhập thu hồi tài sản Non-telco | SAP Asset; thu hồi CCDC, thiết bị văn phòng | 🔲 Thiết kế mở rộng |
| **Nhập kho** | `MM.10G` | Nhập kho khác | SAP / Thủ công; kiểm kê, hàng mẫu | 🔲 Thiết kế mở rộng |
| **Xuất kho** | `OUT.01A` | Xuất cấp phát vận chuyển gom xe | DO Pool $\rightarrow$ Tuyến gom $\rightarrow$ Picking $\rightarrow$ Packing $\rightarrow$ Dock RFID $\rightarrow$ V-Office | ✅ Đã thiết kế SRS |
| **Xuất kho** | `OUT.01B` | Xuất công trình / nội bộ | Xuất đích danh theo dự án, không qua gom tuyến lớn | 🔲 Thiết kế mở rộng |

---

### 4.3. Cơ chế Sản phẩm Mã Cha — Mã Con & Thời điểm Gán Số Lô (Parent - Child SKU & Batch Allocation)

Quy trình nhập kho tích hợp chặt chẽ việc quản lý danh mục phân rã Mã Cha và Mã Con giữa SAP S/4HANA và AI-WS theo 3 giai đoạn rõ ràng:

1. **Giai đoạn tiếp nhận lệnh ban đầu (`T-API1`):** 
   - Bản tin `T-API1` từ SAP đẩy sang AI-WS **đã chứa sẵn danh mục cả Mã Cha và danh sách Mã Con** theo cấu trúc phân cấp.
   - Tuy nhiên, ở giai đoạn này **CHƯA lưu số lượng vào Số Lô (Batch No) nào**. Toàn bộ số lượng chỉ mang tính kế hoạch tiếp nhận.
   - Các bước Dỡ hàng (`T-Unl`) và Kiểm đếm sơ bộ ký BBBG (`T-Ho`) chỉ thực hiện đối soát số lượng thực tế nhận được theo đơn hàng.
2. **Giai đoạn Thực nhập kho & Nhận kết quả KCS (`T-API5` & `Task 4 [T-AGR]`):**
   - Sau khi SAP hoàn tất kiểm định chất lượng KCS, SAP gửi bản tin `T-API5` chứa kết quả KCS (Đạt `UU` hay Lỗi `Blocked Stock`).
   - Khi Thủ kho xác nhận **Thực nhập kho (`Task 4 [T-AGR]`)**, hệ thống mới **CHÍNH THỨC lưu và phân bổ số lượng cụ thể vào từng Số Lô (Batch Number / Lot No)** cho từng Mã Con (hoặc mã hàng).
3. **Giai đoạn Đóng gói & Lưu kho trên AI-WS:** 
   - AI-WS tiếp nhận danh mục Mã Con đã gắn Số Lô (Batch No) cụ thể.
   - Nhân viên thực hiện in tem nhãn SKU con (máy in Zebra ZT411), gán mã thẻ chip RFID và điều phối xếp vào đúng vị trí ô kệ (`Bin Putaway`) theo từng Lô/Mã Con.

---

### 4.4. Cơ chế Bẻ Luồng Song Song trong cùng 1 Lệnh (Parallel Workflow Branching)

Trong cùng 1 Lệnh nhập kho, các mặt hàng có thể có đặc tính vật lý và yêu cầu đóng gói khác nhau:
- **Nhánh A (Hàng cần đóng gói - `is_packing_required = TRUE`):** Các module, card, linh kiện nhỏ $\rightarrow$ Đưa sang khu đóng gói $\rightarrow$ Đóng thùng carton/pallet $\rightarrow$ Gán RFID $\rightarrow$ Cất vào giá kệ.
- **Nhánh B (Hàng to/quá khổ/nguyên đai kiện - `is_packing_required = FALSE`):** Anten lớn, cuộn cáp to, máy nổ, tủ nguồn $\rightarrow$ Không cần đóng gói $\rightarrow$ **Xe nâng đưa THẲNG vào vị trí ô kệ/bãi sàn lưu trữ**.

```mermaid
flowchart TD
    TASK4["Task 4 [T-AGR]: Thực nhập kho & Nhận KCS SAP (T-API5)"] --> TRIGGER{"Hệ thống quét cờ 'is_packing_required'<br>trên từng dòng Order Item"}
    
    TRIGGER -- "is_packing_required = TRUE<br>(Nhánh A: Hàng cần đóng gói)" --> TASK5_A["Task 5 [T-Mv2]: Đưa sang Khu đóng gói"]
    TASK5_A --> TASK6_A["Task 6 [T-Pac]: Đóng gói, In tem & Gắn RFID"]
    TASK6_A --> TASK7_A["Task 7A [T-Mv3]: Cất Kiện HU vào Kệ"]
    
    TRIGGER -- "is_packing_required = FALSE<br>(Nhánh B: Hàng to cất thẳng - CHẠY SONG SONG)" --> TASK7_B["Task 7B [T-Mv3]: Đưa THẲNG vào Vị trí Bin / Bãi sàn<br>(Mở khóa ngay lập tức cùng lúc với Task 5)"]
    
    TASK7_A --> JOIN{"HỘI TỤ ĐÓNG ĐƠN (AND Gate)<br>Tất cả Order Items đều đã cất vào Bin"}
    TASK7_B --> JOIN
    JOIN --> COMPLETE(["Hoàn tất Lệnh nhập kho (COMPLETED)"])
```

- **Tính song song độc lập:** Ngay sau khi Task 4 hoàn tất, **Task 5 (Nhánh A)** và **Task 7B (Nhánh B)** được mở khóa (`AVAILABLE`) **đồng thời**. Nhân viên đóng gói và Lái xe nâng nhận việc cuốn chiếu độc lập.
- **Hội tụ đóng Lệnh:** Đơn hàng chỉ chuyển trạng thái `COMPLETED` khi cả 2 Task 7A và 7B đều hoàn tất 100%.

---

### 4.5. Cơ chế Giao việc Đa Nhân Sự (1 Task Giao Cho 2 Người Cùng Làm)

Đối với các công việc nặng hoặc quy mô lớn (ví dụ: dỡ hàng xe Container 40ft gồm 500 thùng hàng), hệ thống áp dụng cơ chế giao việc chung cho 2 nhân sự:

1. **Phân công & Nhận việc:**
   - Hệ thống (hoặc Thủ kho) phân công Task dỡ hàng cho **cả 2 nhân viên (NV A và NV B)** thông qua bảng `Task_Assignment` (hoặc 2 Sub-tasks liên kết qua `parent_task_id`).
   - **Không áp đặt định mức số lượng cứng** cho từng người (không chia cứng 250 thùng - 250 thùng).
   - Hai nhân viên tiếp nhận task và **tự phối hợp phân chia công việc linh hoạt tại hiện trường**.
2. **Vòng đời & Nguyên tắc Mở khóa Bước Tiếp Theo:**
   - Cả 2 nhân sự cùng ở trạng thái `IN_PROGRESS`.
   - Nhân viên A xong phần việc của mình $\rightarrow$ bấm xác nhận hoàn thành phần A.
   - Nhân viên B tiếp tục hoàn tất phần việc còn lại $\rightarrow$ bấm xác nhận hoàn thành phần B.
   - **🔥 NGUYÊN TẮC BẤT BIẾN:** Task dỡ hàng chỉ chính thức chuyển trạng thái **`COMPLETED`** khi **toàn bộ xe hàng đã được dỡ xong $100\%$** (cả 2 người đã xác nhận hoặc Leader/Thủ kho chốt).
   - **Chỉ sau khi Task dỡ hàng `COMPLETED`**, Task Engine mới kích hoạt mở khóa Task kế tiếp trong chuỗi (**`Task 2 [T-Ho]: Kiểm hàng & Ký BBBG`**) sang trạng thái `AVAILABLE`.


---

## 5. HỆ THỐNG VAI TRÒ & PHÂN QUYỀN (ROLE SYSTEM)

### 5.1. Danh sách Role

| Nhóm | Role Code | Tên Role | Mô tả chức năng chính |
|---|---|---|---|
| **Quản lý** | `ROLE_WAREHOUSE_DIRECTOR` | Giám đốc kho | Phê duyệt, giám sát tổng thể, xem báo cáo KPI. |
| **Quản lý** | `ROLE_WAREHOUSE_MASTER` | Thủ kho | Check lệnh, xác nhận lệnh (Trigger sinh Task), quản lý kho, trình ký V-Office. |
| **Quản lý** | `ROLE_UNIT_MANAGER` | Quản lý Đơn vị | Quản lý cấp trung, giám sát và xem báo cáo/thông tin vận hành của toàn bộ các kho (Plant/SLoc) thuộc đơn vị mình phụ trách. |
| **Vận hành** | `ROLE_WAREHOUSE_WORKER` | Nhân viên kho | Dỡ hàng, kiểm đếm, đóng gói (Carton/Pallet), gán RFID, in tem nhãn SKU và di chuyển hàng hóa giữa các khu vực kho. |
| **Vận hành** | `ROLE_FORKLIFT_DRIVER` | Lái xe nâng | Cất hàng vào vị trí Bin Putaway ô kệ. |
| **An ninh** | `ROLE_SECURITY` | Bảo vệ cổng kho | Đối soát biển số xe & CCCD tài xế, chốt giờ xe ra/vào. |
| **Hệ thống** | `ROLE_ADMIN` | Quản trị hệ thống | Cấu hình quy trình, quản lý người dùng, Role, Catalog Task. |
| **Bên ngoài** | `ROLE_PARTNER` | Đối tác (NCC / Tài xế NCC) | Truy cập trực tiếp hệ thống AI-WS để ký BBBG, theo dõi trạng thái giao hàng. |

### 5.2. Nguyên tắc Phân quyền

- Mỗi Task trong Catalog Quy trình được gán cố định cho **1 Role**.
- Người dùng **chỉ nhìn thấy** Task thuộc Role của mình.
- Một người dùng có thể có **nhiều Role** (VD: Thủ kho kiêm NV Kiểm hàng).
- **Đối tác** có quyền truy cập hạn chế: Chỉ thao tác trên các bước liên quan (VD: ký BBBG, xem tiến độ giao hàng).

---

## 6. CÁC MODULE CHỨC NĂNG CHUYÊN BIỆT

Ngoài chuỗi Task vận hành kho thực thi chính, hệ thống còn có 4 Module quản lý riêng biệt:

| STT | Module | Tác nhân chính | Mô tả |
|---|---|---|---|
| 1 | **Đặt lịch & Quản lý Slotting** | Thủ kho / Điều phối | Lập lịch hẹn xe NCC, quản lý khung giờ cập bến, phân phối cửa Dock. |
| 2 | **An ninh Cổng kho** | Bảo vệ | Đối soát Biển số xe & CCCD tài xế, ghi nhận giờ xe vào/ra cổng (`T-Scr`). |
| 3 | **Quản lý & Trình ký V-Office** | Thủ kho / Kế toán / GĐ Kho | Lập hồ sơ trình ký V-Office gộp nhiều Order, theo dõi luồng duyệt. |
| 4 | **Dashboard Giám sát & Cảnh báo SLA** | Giám đốc kho / Admin | Theo dõi tiến độ tổng thể Order, phát hiện nghẽn SLA, báo cáo KPI. |

---

## 7. NỀN TẢNG & THIẾT BỊ HỖ TRỢ

| Hạng mục | Chi tiết |
|---|---|
| **Nền tảng ứng dụng** | Web PC + Tablet + Mobile App |
| **Thiết bị phần cứng** | Máy in nhãn (VD: Zebra ZT411) — *Chưa tích hợp trực tiếp, sẽ bổ sung sau.* |
| **Đo lường KPI** | Hệ thống sẽ hỗ trợ đo lường KPI nhân viên kho — *Chi tiết chỉ số KPI sẽ được cung cấp sau.* |

---

## 8. BẢN ĐỒ API TÍCH HỢP (SAP & V-OFFICE)

| Mã API | Hướng truyền | Mục đích nghiệp vụ |
|---|---|---|
| **`T-API1`** | SAP → AI-WS | Đẩy chứng từ Lệnh Nhập/Xuất (Inbound/Outbound Delivery) từ SAP sang AI-WS để tạo Order. |
| **`T-API2`** | AI-WS → SAP | Báo hủy/từ chối lệnh khi Thủ kho không chấp nhận tại bước Check lệnh. |
| **`T-API3`** | AI-WS → SAP | Báo cáo sai lệch số lượng/hư hỏng khi kiểm hàng thực tế. |
| **V-Office API** | AI-WS ⇄ V-Office | Phát động trình ký V-Office từ giao diện AI-WS & nhận webhook kết quả ký. |
| **`T-API5`** | SAP ⇄ AI-WS | SAP trả kết quả KCS kèm bóc tách Mã Cha → Mã Con để AI-WS đóng gói, cất kho. |

---

## 9. THUẬT NGỮ & TỪ ĐIỂN DỮ LIỆU (GLOSSARY)

| Thuật ngữ | Viết tắt | Định nghĩa |
|---|---|---|
| **Purchase Order** | PO | Đơn đặt hàng mua sắm vật tư trên SAP S/4HANA. |
| **Inbound Delivery** | IB / VL31N | Chứng từ yêu cầu giao hàng mua từ NCC trên SAP. |
| **Order** | INB / OUT | Đơn nhập/xuất kho trên AI-WS, được tạo từ Lệnh SAP. |
| **Task** | TSK | Công việc điện tử cụ thể trong chuỗi quy trình kho — đơn vị nhỏ nhất được giao cho 1 nhân viên. |
| **Catalog Task & Quy trình** | Process Catalog | Bảng cấu hình ánh xạ: Loại Quy trình → Danh sách Task (tên, thứ tự, Role). |
| **Staging Area** | Staging Zone | Khu vực bãi tạm dỡ hàng/kiểm đếm trước khi chuyển vào kho chính. |
| **BBBG** | BBBG Điện tử | Biên bản bàn giao hàng hóa có chữ ký số CA hoặc ký cảm ứng. |
| **Material Document** | Material Doc | Chứng từ ghi nhận biến động vật tư trên SAP (Mvt 101/201). |
| **KCS** | KCS | Kiểm tra chất lượng sản phẩm — SAP chủ trì và trả kết quả. |
| **Unrestricted Use** | `UU` | Trạng thái tồn kho đạt KCS, sẵn sàng sử dụng. |
| **Blocked Stock** | Blocked | Tồn kho bị khóa do không đạt KCS. |
| **Bin Code** | Bin Putaway | Mã vị trí ô kệ trong kho (VD: `G01_KN1.1.1`). |
| **Auto-Match** | Grab Matching | Cơ chế tự động ghép nhân viên rảnh rỗi với Task khả dụng đúng Role. |
| **Plant** | Plant | Đơn vị/Chi nhánh cấp cao nhất trên SAP S/4HANA (VD: `VN01`), dùng để quản lý tồn kho và hoạt động theo từng vùng địa lý. |
| **Storage Location** | SLoc | Kho logic trên SAP S/4HANA (VD: `HN01`) trực thuộc một Plant, dùng để phân vùng hạch toán số lượng tồn kho theo mục đích quản lý. |
| **Kho vật lý** | Physical WH | Công trình kho bãi thực tế trong đời thực (VD: Kho Hòa Lạc). Một kho vật lý có thể chứa các phân khu, dãy kệ (Bin) cụ thể và có thể tương ứng với một hoặc nhiều SLoc logic trên SAP. |

---

## 10. LỊCH SỬ CẬP NHẬT TÀI LIỆU

| Version | Ngày | Mô tả thay đổi |
|---|---|---|
| v1.0 | 06/08/2026 | Khởi tạo tài liệu với kiến trúc 3 hệ thống, quy trình MM.10A, Glossary. |
| v2.0 | 06/08/2026 | Viết lại toàn diện: Bổ sung bối cảnh SAP Gap, mô hình Grab-style Task Matching, đa quy trình Nhập/Xuất, Catalog Task & Quy trình, Multi-warehouse, Multi-platform, Role System chi tiết, Đối tác truy cập trực tiếp hệ thống. |
| v2.1 | 12/08/2026 | Bổ sung định nghĩa các khái niệm chung: Plant, SLoc, Kho vật lý vào mục Glossary. |
| v2.2 | 12/08/2026 | Bổ sung vai trò Quản lý Đơn vị (quản lý cấp trung) vào mục 5.1 Danh sách Role. |
| **v2.3** | **15/08/2026** | **Bổ sung 3 nghiệp vụ cốt lõi: Phân cấp quy trình 4 tầng (Domain $\rightarrow$ Profile $\rightarrow$ Stage $\rightarrow$ Task), Cơ chế bóc tách Mã Cha - Con sau KCS (T-API5), Cơ chế Bẻ luồng song song (Đóng gói vs Cất thẳng), và Mô hình Giao việc Đa nhân sự (`parent_task_id` + `Task_Assignment`).** |


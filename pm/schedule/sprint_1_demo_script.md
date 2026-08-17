# 🎬 KỊCH BẢN DEMO SPRINT 1 — PHÂN HỆ NHẬP KHO (INBOUND)
> **Dự án:** Hệ thống Quản lý Kho Thông Minh AI-WMS (Viettel)  
> **Thời gian Sprint 1:** 01/08/2026 – 15/08/2026  
> **Phiên bản:** V1.0.0 | **Ngày lập kịch bản:** 14/08/2026  

---

## 📌 1. THÔNG TIN TỔNG QUAN BUỔI DEMO

### 1.1. Mục Tiêu Buổi Demo
* Trình diễn luồng nghiệp vụ **Nhập kho mua mới (Inbound Procurement Flow)** hoàn chỉnh end-to-end từ SAP đồng bộ đến lưu trữ kho.
* Nghiệm thu các tính năng lõi Sprint 1: **Danh sách & Chi tiết lệnh nhập (6 tabs)**, **Quản lý Task**, **Tác nghiệp PDA Mobile (Dỡ hàng, Kiểm hàng/BBBG, Putaway, In tem)**, **Giao việc tự động rule-based**, **Trình ký VOffice** và **Đồng bộ SAP**.

### 1.2. Môi Trường & Thiết Bị Demo
* **Môi trường Web Admin:** `https://wms-staging.viettel.vn` (Chrome / Edge Full HD).
* **Môi trường Mobile App:** App AI-WMS Android/Flutter trên thiết bị PDA chuyên dụng (Zebra / Chainway) hoặc smartphone Android có camera scan barcode.
* **Hệ thống giả lập:** Mock Service SAP/vERP API & VOffice Gateway.
* **Thiết bị ngoại vi:** Máy in tem nhãn Zebra ZD421 (In Barcode/QR Code 100x50mm).

### 1.3. Nhân Sự & Vai Trò Trình Bày
| Vai trò trong buổi Demo | Nhân sự phụ trách | Nhiệm vụ |
|---|---|---|
| **MC / Leader Demo** | PM / Lead BA | Mở đầu, dẫn dắt câu chuyện (Storytelling), tóm tắt kết quả |
| **Demo Web UI (Admin/Quản lý)** | BA / Dev Web | Thao tác trên giao diện Web (Dashboard, Lệnh nhập, Task, VOffice) |
| **Demo Mobile PDA (Thủ kho/NV)** | Dev Mobile / QA | Thao tác trên App Mobile PDA (Scan barcode, Kiểm hàng, Ký BBBG, Putaway) |
| **Ghi nhận Yêu cầu / Q&A** | BA Team | Ghi chép feedback, câu hỏi từ phía Khách hàng / Stakeholders |

---

## 🎭 2. DỮ LIỆU MẪU CHUẨN BỊ (DEMO DATA)

Để buổi demo diễn ra mượt mà, chuẩn bị sẵn bộ dữ liệu giả lập sau:

* **Mã Lệnh Nhập kho từ SAP:** `PO-20260814-001` (Loại: Nhập mua mới từ Nhà cung cấp Ericsson).
* **Danh mục hàng hóa:**
  1. `NOC-RRU-5G` - Thiết bị vô tuyến RRU 5G (Số lượng SAP: 50 cái | Seri/Serial riêng).
  2. `CBL-OPT-20M` - Cáp quang outdoor 20m (Số lượng SAP: 200 cuộn | Theo Lô/Batch).
* **Tài khoản Demo:**
  * `quan_pm`: Quản lý kho (Role: Warehouse Manager).
  * `truong_thukho`: Thủ kho nhận hàng & KCS (Role: Warehouse Clerk).
  * `hoanv_pda`: Nhân viên kho vận hành PDA (Role: Operator PDA).

---

## 🎬 3. KỊCH BẢN DEMO CHI TIẾT (STEP-BY-STEP DEMO SCRIPT)

Buổi Demo được chia làm **5 Phân đoạn (Acts)** mô phỏng chính xác luồng thực tế tại kho Viettel:

```
[Act 1: SAP Sync & Dashboard] ➡️ [Act 2: Quản lý & Xác nhận Lệnh] ➡️ [Act 3: Chi tiết 6 Tab] ➡️ [Act 4: Tác nghiệp PDA Kho] ➡️ [Act 5: VOffice & Đồng bộ SAP]
```

---

### 🟢 ACT 1: Tiếp nhận Lệnh nhập kho từ SAP & Dashboard Thống kê
> **Mục tiêu:** Trình diễn khả năng nhận order tự động từ hệ thống SAP/vERP và xem tổng quan chỉ số trên Dashboard.  
> **Người thực hiện:** Web Presenter  

| Bước | Thao tác trên Hệ thống | Lời thoại & Dẫn dắt của MC | Kết quả Kỳ vọng (Expected Output) | User Story |
|:---:|---|---|---|:---:|
| **1.1** | Mở trình duyệt, truy cập `https://wms-staging.viettel.vn`, đăng nhập tài khoản `quan_pm`. | *"Xin chào Quý Anh/Chị. Đầu tiên, Quản lý kho đăng nhập vào hệ thống AI-WMS. Màn hình Dashboard hiển thị ngay bức tranh tổng thể kho hiện tại."* | Đăng nhập thành công. Màn hình Dashboard hiển thị các biểu đồ tồn kho, số lệnh chờ xử lý, SLA/KPI vận hành. | **US-049** |
| **1.2** | Giả lập sự kiện Push API từ SAP: Kích hoạt gửi đơn `PO-20260814-001` từ SAP sang AIWS. | *"Giả sử lúc 09:00 AM, SAP phát sinh một Đơn hàng mua từ Nhà cung cấp Ericsson và tự động đẩy dữ liệu sang AI-WMS qua API tích hợp."* | Hệ thống bắn notification realtime: *"Nhận thành công Lệnh nhập kho mới PO-20260814-001 từ SAP"*. | **US-048** |
| **1.3** | Mở **Danh sách Lệnh nhập kho** (`/inbound/orders`). | *"Ngay lập tức, lệnh nhập mới đã xuất hiện trên danh sách với trạng thái 'Mới tiếp nhận'."* | Màn hình hiển thị lệnh `PO-20260814-001`, NCC Ericsson, ngày tạo, trạng thái "Mới tiếp nhận". | **US-024** |

---

### 🔵 ACT 2: Tìm kiếm, Lọc, Xác nhận Lệnh & Giao việc Tự động (Rule-based)
> **Mục tiêu:** Trình diễn các công cụ tra cứu (Tìm kiếm nhanh/nâng cao, Export Excel) và tính năng xác nhận, tự động phân công task.  
> **Người thực hiện:** Web Presenter  

| Bước | Thao tác trên Hệ thống | Lời thoại & Dẫn dắt của MC | Kết quả Kỳ vọng (Expected Output) | User Story |
|:---:|---|---|---|:---:|
| **2.1** | Nhập `PO-20260814` vào ô **Tìm kiếm nhanh**. Sau đó mở **Bộ lọc nâng cao** (Lọc theo NCC: Ericsson, Trạng thái: Mới tiếp nhận). | *"Quản lý kho có thể dễ dàng tra cứu lệnh qua ô tìm kiếm nhanh hoặc bộ lọc đa tiêu chí như loại lệnh, trạng thái, nhà cung cấp, khoảng thời gian."* | Danh sách lọc chính xác lệnh `PO-20260814-001`. Tốc độ phản hồi < 0.5s. | **US-032**<br>**US-033** |
| **2.2** | Bấm nút **[Export Excel]** trên toolbar. | *"Hệ thống hỗ trợ xuất dữ liệu ra file Excel theo đúng định dạng chuẩn phục vụ báo cáo đối soát."* | File `.xlsx` được tải về với đầy đủ cột thông tin lệnh nhập. | **US-031** |
| **2.3** | Bấm chọn lệnh và bấm **[Xác nhận Lệnh nhập]**. | *"Sau khi kiểm tra thông tin chung, Quản lý bấm Xác nhận lệnh nhập. Hệ thống sẽ tự động kích hoạt Engine Giao việc Rule-based."* | Trạng thái chuyển sang *"Đã xác nhận"*. Tự động tạo chuỗi các Task con: Dỡ hàng, Kiểm hàng, Putaway... | **US-038** |
| **2.4** | Kiểm tra danh sách Task vừa sinh ra tự động. | *"Dựa trên Rule phân công đã cấu hình (tải công việc, vị trí ca trực), hệ thống tự động gán Task Dỡ hàng cho NV `hoanv_pda`."* | Task `TASK-INB-001` (Dỡ hàng) được giao cho `hoanv_pda` với SLA quy định. | **US-039** |

---

### 🟡 ACT 3: Khám phá Chi tiết Lệnh nhập qua 6 Tab Thông tin
> **Mục tiêu:** Trình diễn khả năng quản lý thông tin đa chiều toàn diện của một Lệnh nhập kho.  
> **Người thực hiện:** Web Presenter  

| Bước | Thao tác trên Hệ thống | Lời thoại & Dẫn dắt của MC | Kết quả Kỳ vọng (Expected Output) | User Story |
|:---:|---|---|---|:---:|
| **3.1** | Click vào mã lệnh `PO-20260814-001` để mở màn hình **Chi tiết Lệnh nhập**. Mở **Tab 1: Thông tin hàng hóa**. | *"Đây là giao diện Chi tiết lệnh nhập với thiết kế Visual Split 6 Tabs trực quan. Tab 1 hiển thị danh mục SKU, số lượng theo hợp đồng SAP vs Thực tế."* | Hiển thị 2 SKU: `NOC-RRU-5G` (50 cái) và `CBL-OPT-20M` (200 cuộn). | **US-025** |
| **3.2** | Mở **Tab 2: Chứng từ**. | *"Tab 2 quản lý toàn bộ hồ sơ chứng từ đính kèm như Đơn đặt hàng, Phiếu giao hàng nhà xe, Hóa đơn VAT."* | Danh sách chứng từ đính kèm có nút Xem nhanh (Preview PDF) và Tải về. | **US-026** |
| **3.3** | Mở **Tab 3: Task nghiệp vụ**. | *"Tab 3 theo dõi tiến độ thời gian thực của chuỗi task nghiệp vụ sinh ra từ lệnh nhập này."* | Hiển thị danh sách Task: Dỡ hàng (In Progress), Kiểm hàng (Pending), Putaway (Pending). | **US-027** |
| **3.4** | Mở **Tab 4: Kết quả KCS**. | *"Tab 4 cập nhật kết quả kiểm tra chất lượng KCS/QA. Hiện tại chưa kiểm hàng nên tab đang ở trạng thái Chờ cập nhật."* | Bảng dữ liệu KCS sẵn sàng ghi nhận số lượng Đạt / Phế phẩm / Nghi ngờ. | **US-028** |
| **3.5** | Mở **Tab 5: Vận chuyển**. | *"Tab 5 theo dõi thông tin đơn vị vận chuyển, biển số xe giao hàng (`29C-123.45`), tên tài xế và thời gian xe vào/ra cửa kho."* | Hiển thị thông tin xe `29C-123.45`, tài xế Nguyễn Văn A, cửa nhập Dock 02. | **US-029** |
| **3.6** | Mở **Tab 6: Lịch sử tác động**. | *"Tab 6 ghi nhận toàn bộ vết Audit Trail: Ai đã tác động, vào lúc nào, thay đổi trạng thái ra sao để đảm bảo tính minh bạch."* | Log chi tiết: SAP push order (09:00) ➔ Xác nhận lệnh (09:05 by `quan_pm`). | **US-030** |

---

### 🟠 ACT 4: Thực thi Tác nghiệp Thực tế tại Kho trên Mobile PDA
> **Mục tiêu:** Trình diễn luồng tác nghiệp di động thực tế tại cửa kho và khu lưu trữ bằng thiết bị Mobile PDA.  
> **Người thực hiện:** Mobile Presenter (kết nối màn hình PDA lên máy chiếu)  

| Bước | Thao tác trên Hệ thống Mobile PDA | Lời thoại & Dẫn dắt của MC | Kết quả Kỳ vọng (Expected Output) | User Story |
|:---:|---|---|---|:---:|
| **4.1** | Nhân viên kho mở App AI-WMS trên PDA, đăng nhập `hoanv_pda`. Mở **Danh sách Task**. | *"Bây giờ chúng ta chuyển sang góc nhìn của Nhân viên kho tại khu vực Dock tiếp nhận. Trên máy PDA, nhân viên nhận thông báo Task Dỡ hàng vừa được giao."* | Màn hình Task hiển thị `TASK-INB-001` (Dỡ hàng xe `29C-123.45`). | **US-034**<br>**US-036** |
| **4.2** | Chọn Task, bấm **[Bắt đầu Dỡ hàng]**. Scan mã kiện pallet/thùng hàng. | *"Nhân viên tiến hành dỡ hàng từ xe tải xuống Dock. Dùng PDA quét mã Barcode kiện hàng để xác nhận dỡ đủ số lượng."* | Màn hình cập nhật số lượng dỡ: 50/50 RRU, 200/200 Cáp. Hoàn thành Task Dỡ hàng. | **US-041** |
| **4.3** | Hệ thống chuyển sang Task **Kiểm hàng & Ký BBBG**. Scan kiểm tra ngẫu nhiên Serial/Batch. | *"Tiếp theo là bước Kiểm tra hàng hóa & Ký Biên bản bàn giao. Thủ kho kiểm tra quy cách, ngoại quan, số serial thiết bị."* | Nhập kết quả KCS: 50/50 Đạt chất lượng. Sinh Biên bản bàn giao điện tử. | **US-040** |
| **4.4** | Đại diện Nhà xe và Thủ kho **ký tên trực tiếp trên màn hình PDA**. | *"Đại diện bên giao hàng và Thủ kho thực hiện ký điện tử trực tiếp trên màn hình cảm ứng PDA để hoàn tất BBBG."* | Chữ ký hiển thị trên BBBG, tự động lưu file PDF có chữ ký vào hệ thống. | **US-040** |
| **4.5** | Thực hiện Task **Đưa vào Khu chờ nhập (Staging Zone)**. | *"Sau khi ký BBBG, hàng được di chuyển từ Dock vào Khu vực chờ nhập (Staging Zone A1)."* | PDA xác nhận di chuyển hàng vào ô vị trí `STAGING-A1`. | **US-042** |
| **4.6** | Mở tính năng **Đóng gói & In tem barcode**. Bấm [In tem] trên PDA. | *"Hệ thống hỗ trợ in tem Barcode/QR Code quản lý nội bộ. PDA kết nối Bluetooth lệnh cho máy in tem dán lên từng sản phẩm."* | Máy in tem Zebra xuất ra tem nhãn Barcode mã hóa Serial/Batch chuẩn Viettel. | **US-046** |
| **4.7** | Thực hiện **Đưa vào lưu trữ (Putaway)**: PDA gợi ý vị trí lưu kho tối ưu (`RACK-B02-L3-K05`). | *"Cuối cùng, thuật toán AIWS gợi ý vị trí cất hàng tối ưu. Nhân viên đẩy hàng đến vị trí `RACK-B02`, quét mã vị trí Bin và quét mã hàng để hoàn tất Putaway."* | PDA báo *"Putaway hoàn tất 100%"*. Trạng thái hàng chuyển sang *"Trong kho / Available"*. | **US-043**<br>**US-047** |

---

### 🔴 ACT 5: Trình Ký VOffice, Phân Công Lại & Đồng Bộ SAP
> **Mục tiêu:** Hoàn tất luồng hồ sơ điện tử, quản lý thay đổi và đồng bộ số liệu nhập kho ngược về SAP.  
> **Người thực hiện:** Web Presenter  

| Bước | Thao tác trên Hệ thống Web | Lời thoại & Dẫn dắt của MC | Kết quả Kỳ vọng (Expected Output) | User Story |
|:---:|---|---|---|:---:|
| **5.1** | Trên Web Admin, Quản lý mở lệnh `PO-20260814-001`, bấm **[Trình ký VOffice]**. | *"Khi tác nghiệp thực địa hoàn thành, Quản lý kho thực hiện Trình ký Phiếu nhập kho lên hệ thống VOffice Tập đoàn Viettel."* | Popup VOffice xuất hiện, tự động tạo luồng trình ký theo quy định. Bấm gửi thành công. | **US-044** |
| **5.2** | Demo tình huống: **Phân công lại người phụ trách (Re-assign Task)**. | *"Trong trường hợp nhân viên gặp sự cố đột xuất, Quản lý kho có thể linh hoạt Phân công lại Task cho nhân viên khác trực tiếp trên Web."* | Chọn Task ➔ Phân công lại từ `hoanv_pda` sang `doanbv_pda`. Hệ thống push thông báo cho người mới. | **US-050** |
| **5.3** | Giả lập sự kiện VOffice phê duyệt xong ➔ Hệ thống tự động **Đồng bộ kết quả Nhập kho về SAP**. | *"Ngay khi VOffice phê duyệt điện tử thành công, AI-WMS sẽ tự động gọi API đồng bộ kết quả thực nhập (Movement Type 101) về SAP."* | SAP nhận thông điệp Nhập kho thành công, ghi nhận tăng tồn kho kế toán trên SAP MM/WM. Trạng thái lệnh trên AIWS chuyển: *"Hoàn thành"*. | **US-048** |

---

## 📊 4. KỊCH BẢN QA & TÌNH HUỐNG DỰ PHÒNG (FALLBACK SCENARIOS)

| Tình huống rủi ro (Risk Case) | Phương án xử lý ngay tại buổi Demo (Fallback Plan) |
|---|---|
| **Mạng Wifi kho / PDA chập chờn** | Sử dụng mạng 4G Viettel phát từ hotspot cá nhân của Presenter. App Mobile đã hỗ trợ Offline Sync buffer. |
| **Máy in tem Zebra không nhận lệnh Bluetooth** | Chuẩn bị sẵn file PDF Tem nhãn mở trên laptop và chiếu tem mẫu lên màn hình. |
| **API SAP Mock bị Timeout** | Chuyển sang chế độ Manual Trigger (Nút giả lập SAP Push Data tích hợp sẵn trên giao diện Staging Admin). |
| **Khách hàng muốn xem dữ liệu lớn (Load test)** | Chuẩn bị sẵn bộ dữ liệu 1,000 lệnh nhập kho để trình diễn tốc độ Tìm kiếm & Filter trên Web. |

---

## 📝 5. TỔNG KẾT & PHIẾU GHI NHẬN FEEDBACK (DEMO WRAP-UP)

### 5.1. Ma Trận Nghiệm Thu Tính Năng (Acceptance Matrix)
* **Tổng số User Story Demo:** 27 User Stories (US-024 đến US-050).
* **Tiêu chí đạt:** 100% các bước tác nghiệp chính (Happy Path) chạy thông suốt không xuất hiện lặp lỗi blocker/critical.

### 5.2. Biểu Mẫu Ghi Nhận Yêu Cầu Chỉnh Sửa (Change Request / Feedback Form)
*(BA Team chuẩn bị ghi chép trực tiếp vào bảng bên dưới trong phiên Q&A)*

| STT | Yêu cầu / Góp ý từ Khách hàng | Người góp ý | Phân loại (UI/Bug/CR) | Mức độ ưu tiên | Hành động xử lý |
|:---:|---|---|:---:|:---:|---|
| 1 | *[Ghi chép tại buổi họp]* | | | | |
| 2 | *[Ghi chép tại buổi họp]* | | | | |

---

> 📌 **Tài liệu tham khảo liên quan:**
> * Kế hoạch Sprint 1 Chi tiết: [sprint_260801_sprint1.md](file:///c:/Users/quantm18/Desktop/New%20folder/Project_Management/pm/schedule/sprint_260801_sprint1.md)
> * Product Backlog: [product_backlog.md](file:///c:/Users/quantm18/Desktop/New%20folder/Project_Management/pm/schedule/product_backlog.md)

# MM.10D — Quy Trình Nhập Kho Thu Hồi Tài Sản Không Thuộc Nhóm Viễn Thông — Kho Thông Minh AI-WMS

> **Mã quy trình:** MM.10D (ThuHoi_NonTelco)  
> **Tên quy trình:** Luồng Nhập Kho Thu Hồi Tài Sản Không Thuộc Nhóm Viễn Thông (Non-Telco Asset) — Kho Thông Minh AI-WMS  
> **Hệ thống tham gia:** SAP S/4HANA (MM & FI-AA) × V-Office × AI-WS (Hệ thống Kho Thông Minh)  
> **Tài liệu nguồn:** S406 Business Blueprint & Chuẩn thiết kế AI-WMS  
> **Trạng thái:** Standard Operating Procedure (SOP Baseline)  

---

## 1. TỔNG QUAN KIẾN TRÚC VẬN HÀNH

Quy trình nhập kho thu hồi tài sản không thuộc nhóm viễn thông (ví dụ: Trang thiết bị văn phòng, Laptop, Máy in, Bàn ghế, Máy điều hòa, Xe cộ, Thiết bị phụ trợ...) là sự kết hợp giữa **Phân hệ Quản lý Tài sản (FI-AA)**, **Quản lý Vật tư (MM)** trên SAP S/4HANA, hệ thống duyệt chữ ký số **V-Office** và **Hệ thống Kho Thông Minh AI-WMS**.

### Điểm đặc thù quy trình MM.10D:
1. **Đánh giá chất lượng TRƯỚC khi lập phiếu:** Việc kiểm tra phân loại tài sản (Sửa chữa / Chuyển vị trí / Phân rã) do **Bộ phận Quản lý tài sản & Hội đồng** thực hiện trước khi tạo Reservation.
2. **KHÔNG qua phân hệ KCS (QM.04) sau nhập kho:** Vì chất lượng tài sản đã được kiểm định ở Bước 1, nên sau khi nhập kho SAP **bỏ qua bước sinh lô KCS (QM.04)**.
3. **Số hóa tác nghiệp kho:** Việc kiểm đếm Serial thực tế, dỡ hàng (`T-Unl`), ký BBBG điện tử và Thực nhập kho (`T-AGR`) được thao tác 100% trên **App AI-WS**.
4. **Tự động ghi giảm Tài sản cố định (FI-AA):** Chứng từ nhập kho hoàn tất trên V-Office là căn cứ hạch toán giảm tài sản trên sổ sách kế toán FI-AA.

---

## 2. QUY TRÌNH HỆ THỐNG CHI TIẾT (18 BƯỚC CHUẨN ĐỒNG BỘ AI-WMS)

| STT | Tên bước | Hệ thống thực hiện | Tác nhân | Chi tiết kỹ thuật & Giao tiếp API |
|---|---|---|---|---|
| **1** | **Tiếp nhận & Phân loại tài sản thu hồi** | FI-AA / Z-program | BP Quản lý tài sản & Hội đồng | BP Quản lý tài sản kiểm tra phân loại:<br>• *Sửa được:* Chuyển luồng FI.53.01.<br>• *Chưa loại biên chế:* Chuyển Location trên FI.54.01.<br>• *Phân rã (Có QĐ loại biên chế):* Tự động tách phiếu và tạo **Reservation** (Giá trị = 0 ➔ Plant NV; Giá trị > 0 ➔ Plant hạch toán). |
| **2** | **Trình phiếu ký V-Office (Lần 1)** | SAP ➔ V-Office | BP Quản lý tài sản | Trình Reservation đính kèm *Quyết định loại khỏi biên chế* & *Biên bản đánh giá* lên V-Office. |
| **3** | **Phê duyệt V-Office Lần 1** | V-Office | Thủ trưởng đơn vị | Phê duyệt Reservation trên V-Office.<br>• *Approved:* Chuyển sang Bước 3.1.<br>• *Rejected:* Hủy yêu cầu. |
| **3.1** | **SAP cập nhật Approved** | SAP S/4HANA | Hệ thống (Auto) | SAP ghi nhận trạng thái Reservation = `Approved`. |
| **4** | **Đẩy Lệnh sang AI-WS (`T-API1`)** | SAP ➔ AI-WS | Interface (`T-API1`) | SAP tự động gọi API **`T-API1`** truyền dữ liệu Reservation tài sản Non-Telco (Mã vật tư, Số lượng, Serial, Plant NV/Valuated) sang hệ thống AI-WS. |
| **5** | **AI-WS tiếp nhận & Sinh Task** | AI-WS | Hệ thống AI-WS | AI-WS tiếp nhận bản tin `T-API1`, tự động tạo Task nhập kho tài sản thu hồi và gửi thông báo cho Thủ kho. |
| **6** | **Thủ kho quyết định tiếp nhận** | AI-WS (App) | Thủ kho | Thủ kho xem xét thông tin tài sản thu hồi:<br>• *Đồng ý:* Chuyển Bước 6.2 (Chốt lịch xe vận chuyển tài sản đến kho).<br>• *Từ chối:* Chuyển Bước 6.1 (Gọi **`T-API2`** sang SAP để cập nhật `Rejected by Whs`). |
| **6.1** | **Cập nhật Rejected by Whs** | AI-WS ➔ SAP | Interface (`T-API2`) | AI-WS gọi **`T-API2`** báo SAP hủy Lệnh thu hồi tài sản. |
| **6.2** | **Xác nhận giờ nhận hàng** | AI-WS (App) | Thủ kho | Thủ kho chốt khung giờ nhận tài sản tại kho. |
| **7** | **Sinh lịch giao việc & Slotting** | AI-WS | Hệ thống AI-WS | AI-WS tự động tính toán vị trí tiếp nhận (*Staging Area*) và phân công ca trực dỡ hàng. |
| **8** | **Cập nhật giờ xe vào cổng (`T-Scr`)** | AI-WS (App Bảo vệ) | Bảo vệ cổng kho | Xe chở tài sản văn phòng/Non-Telco tới cổng. Bảo vệ quét QR/nhập mã chuyến xe trên App AI-WS để ghi nhận giờ xe vào cổng (`Time Screening - T-Scr`). |
| **9** | **Dỡ hàng & Kiểm đếm vật lý (`T-Unl`)** | AI-WS (App Kho) | Đội dỡ hàng / Thủ kho | Dỡ tài sản khỏi xe, quét mã Serial/Asset Tag từng thiết bị (Laptop, máy in...) thực tế (`Time Unloading - T-Unl`). |
| **10** | **Kết quả kiểm đếm thực tế** | AI-WS | Thủ kho & App | Đối chiếu số lượng/Serial thực tế với Reservation:<br>• *Đúng đủ:* Chuyển Bước 10.2.<br>• *Sai lệch:* Chuyển Bước 10.1 (Bấm Từ chối nhận hàng ➔ AI-WS gọi **`T-API3`** báo SAP). |
| **10.1** | **Từ chối nhận hàng do sai lệch** | AI-WS ➔ SAP | Interface (`T-API3`) | AI-WS gửi bản tin **`T-API3`** báo cáo sai lệch thực tế về hệ thống SAP. |
| **10.2** | **Ký BBBG điện tử & Chuyển khu chờ** | AI-WS (App Kho) | Thủ kho & BP Tài sản | Hai bên ký **Biên bản bàn giao (BBBG) điện tử** trực tiếp trên màn hình App AI-WS. Chuyển tài sản vào Khu vực chờ nhập kho. |
| **11** | **Cập nhật trạng thái chờ nhập** | SAP S/4HANA | Hệ thống (Auto) | Đồng bộ trạng thái tài sản đã tập kết tại bãi kho. |
| **12** | **Sinh Phiếu nhập (Material Doc)** | SAP S/4HANA | Hệ thống (Auto) | SAP tự động khởi tạo **Material Document** nhập kho tài sản. |
| **13** | **Trình ký V-Office Lần 2** | Z-program ➔ V-Office | Thủ kho | Thủ kho dùng App AI-WS trình Phiếu nhập kho (Material Doc) lên V-Office Lần 2 (Thủ trưởng + Kế toán tài sản + Thủ kho ký chốt). *(KHÔNG qua KCS)*. |
| **14** | **Thực nhập kho (`T-AGR`) & Ghi giảm FI-AA** | AI-WS ➔ SAP | Interface (`T-AGR`) | • Khi V-Office phê duyệt Lần 2, Thủ kho bấm **Thực nhập kho (`T-AGR`)** trên App AI-WS.<br>• Ban Tài chính thực hiện hạch toán ghi giảm Tài sản cố định (Asset Write-off) trên phân hệ **FI-AA**. |
| **18** | **Đóng gói & Đưa vào vị trí Bin** | AI-WS | Nhân viên kho | AI-WS định vị ô/kệ lưu trữ. Nhân viên kho thực hiện đóng gói và cất tài sản vào đúng vị trí quy định. |
| **19** | **Lưu trữ & Hoàn tất** | AI-WS & SAP | Hệ thống (Auto) | Hoàn thành toàn bộ quy trình nhập kho thu hồi tài sản Non-Telco. Đóng Task. |

---

## 3. CÁC API VÀ ĐIỂM CHỦ CHỐT TÍCH HỢP

1. **`T-API1`:** SAP ➔ AI-WS: Đẩy Lệnh thu hồi tài sản Non-Telco (*Reservation Approved*) sang AI-WS.
2. **`T-API2`:** AI-WS ➔ SAP: Báo đóng/hủy lệnh khi Thủ kho từ chối nhận hàng.
3. **`T-API3`:** AI-WS ➔ SAP: Báo sai lệch số lượng/Serial tài sản kiểm đếm thực tế.
4. **Tích hợp FI-AA:** Chứng từ nhập kho hoàn tất là căn cứ tự động/bán tự động ghi giảm giá trị tài sản cố định ngoài viễn thông trên phân hệ Kế toán Tài sản FI-AA.

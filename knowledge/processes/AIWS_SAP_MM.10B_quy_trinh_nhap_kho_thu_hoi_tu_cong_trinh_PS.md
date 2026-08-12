# MM.10B — Quy Trình Nhập Kho Thu Hồi Từ Công Trình (PS) — Kho Thông Minh AI-WMS

> **Mã quy trình:** MM.10B (ThuHoi_CongTrinh)  
> **Tên quy trình:** Luồng Nhập Kho Thu Hồi Từ Công Trình (PS) — Kho Thông Minh AI-WMS  
> **Hệ thống tham gia:** SAP S/4HANA × V-Office × AI-WS (Hệ thống Kho Thông Minh)  
> **Tài liệu nguồn:** `SAP-AIWS.drawio.xml` (Diagram: Nhập thu hồi công trình)  
> **Trạng thái:** Standard Operating Procedure (SOP Baseline)  

---

## 1. TỔNG QUAN KIẾN TRÚC VẬN HÀNH

Quy trình nhập kho thu hồi từ công trình xây dựng/dự án (PS - Project System) được quản lý theo mô hình Kho Thông Minh AI-WMS, kết nối trực tiếp dữ liệu giữa phân hệ quản lý dự án SAP PS, hệ thống duyệt V-Office và phần mềm điều phối tác nghiệp AI-WS tại kho.

### Điểm đặc thù quy trình:
- Vật tư dư thừa thu hồi từ công trình được nhập về kho với **nguyên giá trị đã xuất ban đầu**.
- Mọi hoạt động kiểm đếm vật lý, dỡ hàng, tạo biên bản bàn giao điện tử và thực nhập kho đều được thao tác qua **App AI-WS**.

---

## 2. QUY TRÌNH HỆ THỐNG CHI TIẾT (19 BƯỚC CHUẨN ĐỒNG BỘ)

| STT | Tên bước | Hệ thống thực hiện | Tác nhân | Chi tiết nghiệp vụ & Giao tiếp API |
|---|---|---|---|---|
| **1** | **Tạo Yêu cầu thu hồi** | SAP S/4HANA (PS) | Ban QLDA / Giám sát | Tạo Yêu cầu thu hồi vật tư dư thừa công trình (Reservation) tham chiếu đến WBS Element. |
| **2** | **Trình phiếu ký V-Office (Lần 1)** | SAP ➔ V-Office | Ban QLDA | Trình Yêu cầu thu hồi đính kèm Mẫu phiếu yêu cầu nhập kho thu hồi công trình lên V-Office. |
| **3** | **Phê duyệt V-Office Lần 1** | V-Office | Trưởng Ban QLDA / Thủ trưởng | Phê duyệt Yêu cầu thu hồi trên V-Office.<br>• *Approved:* Chuyển sang Bước 3.1.<br>• *Rejected:* Hủy yêu cầu. |
| **3.1** | **SAP cập nhật Approved** | SAP S/4HANA | Hệ thống (Auto) | Đồng bộ trạng thái duyệt từ V-Office về SAP S/4HANA (`Approved`). |
| **4** | **Đẩy Lệnh sang AI-WS (`T-API1`)** | SAP ➔ AI-WS | Interface (`T-API1`) | SAP tự động gọi API **`T-API1`** truyền toàn bộ thông tin Yêu cầu thu hồi công trình (Mã vật tư, Số lượng, Serial, Mã dự án WBS) sang hệ thống AI-WS. |
| **5** | **AI-WS tiếp nhận & Sinh Task** | AI-WS | Hệ thống AI-WS | AI-WS tiếp nhận bản tin `T-API1`, tự động tạo Task nhập kho thu hồi công trình và thông báo cho Thủ kho. |
| **6** | **Thủ kho quyết định tiếp nhận** | AI-WS (App) | Thủ kho | Thủ kho xem xét kế hoạch tiếp nhận hàng thu hồi:<br>• *Đồng ý:* Chuyển Bước 6.2 (Xác nhận khung giờ xe về kho).<br>• *Từ chối:* Chuyển Bước 6.1 (Tự động gọi **`T-API2`** sang SAP để cập nhật `Rejected by Whs`). |
| **6.1** | **Cập nhật Rejected by Whs** | AI-WS ➔ SAP | Interface (`T-API2`) | AI-WS gọi **`T-API2`** cập nhật lý do từ chối lên SAP, đóng Yêu cầu thu hồi. |
| **6.2** | **Xác nhận giờ nhận hàng** | AI-WS (App) | Thủ kho | Thủ kho chốt khung giờ hẹn xe chở vật tư từ công trình về kho. |
| **7** | **Sinh lịch giao việc & Slotting** | AI-WS | Hệ thống AI-WS | AI-WS tính toán vị trí bãi dỡ hàng (*Staging Area*) và xếp lịch cho đội công nhân kho. |
| **8** | **Cập nhật giờ xe vào cổng (`T-Scr`)** | AI-WS (App Bảo vệ) | Bảo vệ cổng kho | Xe chở vật tư công trình tới cổng. Bảo vệ quét QR/nhập biển số xe trên App AI-WS để ghi nhận thời điểm xe vào cổng (`Time Screening - T-Scr`). |
| **9** | **Dỡ hàng & Kiểm đếm vật lý (`T-Unl`)** | AI-WS (App Kho) | Đội dỡ hàng / Thủ kho | Thực hiện dỡ vật tư khỏi xe, kiểm đếm số lượng và quét mã Serial thực tế (`Time Unloading - T-Unl`). |
| **10** | **Kết quả kiểm đếm thực tế** | AI-WS | Thủ kho & App | Đối chiếu thực tế với dữ liệu Lệnh từ SAP:<br>• *Đúng đủ:* Chuyển Bước 10.2.<br>• *Sai lệch:* Chuyển Bước 10.1 (Bấm Từ chối nhận hàng ➔ AI-WS gọi **`T-API3`** báo SAP). |
| **10.1** | **Từ chối nhận hàng do sai lệch** | AI-WS ➔ SAP | Interface (`T-API3`) | AI-WS truyền bản tin **`T-API3`** báo cáo sai lệch thực tế về hệ thống SAP. |
| **10.2** | **Ký BBBG điện tử & Chuyển khu chờ** | AI-WS (App Kho) | Thủ kho & Cán bộ công trình | Ký **Biên bản bàn giao điện tử (BBBG)** trực tiếp trên màn hình App AI-WS. Chuyển vật tư vào Khu vực chờ nhập kho. |
| **11** | **Cập nhật trạng thái chờ nhập** | SAP S/4HANA | Hệ thống (Auto) | Ghi nhận vật tư đã cập bến bãi kho an toàn. |
| **12** | **Sinh Phiếu nhập (Material Doc Mvt 122)** | SAP S/4HANA | Hệ thống (Auto) | SAP tự động khởi tạo **Material Document** (Movement Type 122 - Return from Construction Site). |
| **13** | **Sinh Inspection Lot QM.04 & Trình V-Office Lần 2** | SAP & V-Office | SAP & Thủ kho | • SAP tự động sinh **Lô kiểm tra chất lượng QM.04**.<br>• Thủ kho dùng App AI-WS trình Phiếu nhập kho (Material Doc) lên V-Office Lần 2 (Thủ trưởng + Kế toán ký chốt). |
| **14** | **Thực nhập kho (`T-AGR`) & Gửi KCS** | AI-WS ➔ SAP | Interface (`T-API5`) | • Khi V-Office phê duyệt Lần 2, Thủ kho bấm nút **Thực nhập kho (`T-AGR`)** trên App AI-WS.<br>• SAP gọi **`T-API5`** trao đổi thông tin KCS với AI-WS. |
| **15** | **Nhận kết quả KCS & Cập nhật tồn kho** | SAP S/4HANA | Hệ thống (Auto) | Cập nhật trạng thái tồn kho dựa trên UD của KCS:<br>• *SP Đạt:* Chuyển trạng thái ➔ **`UU` (Unrestricted-Use)**.<br>• *SP Không đạt:* Chuyển trạng thái ➔ **`Blocked Stock`**. |
| **18** | **Đóng gói & Đưa vào vị trí Bin** | AI-WS | Nhân viên kho | AI-WS định vị vị trí ô/kệ lưu trữ chuẩn. Nhân viên kho thực hiện đóng gói và cất hàng vào đúng vị trí. |
| **19** | **Lưu trữ & Hoàn tất** | AI-WS & SAP | Hệ thống (Auto) | Hoàn thành toàn bộ quy trình nhập kho thu hồi công trình. Đóng Task trên hệ thống. |

---

## 3. CÁC API VÀ ĐIỂM CHỦ CHỐT TÍCH HỢP

1. **`T-API1`:** SAP ➔ AI-WS: Đẩy Lệnh thu hồi công trình (*Reservation Approved*) sang AI-WS.
2. **`T-API2`:** AI-WS ➔ SAP: Báo đóng/hủy lệnh khi Thủ kho từ chối nhận hàng.
3. **`T-API3`:** AI-WS ➔ SAP: Báo sai lệch số lượng/chủng loại thực tế dỡ hàng tại kho.
4. **`T-API5`:** SAP ⇄ AI-WS: Đồng bộ kết quả kiểm định KCS (QM.04) và chốt chuyển vùng tồn kho (`UU` / `Blocked Stock`).

# MM.10G — Quy Trình Nhập Kho Khác — Kho Thông Minh AI-WMS

> **Mã quy trình:** MM.10G (Nhap_Kho_Khac)  
> **Tên quy trình:** Luồng Nhập Kho Khác (Z10 mượn hàng / Z08 đền bù) — Kho Thông Minh AI-WMS  
> **Hệ thống tham gia:** SAP S/4HANA × V-Office × AI-WS (Hệ thống Kho Thông Minh)  
> **Tài liệu nguồn:** `SAP-AIWS.drawio.xml` (Diagram: Nhập kho khác)  
> **Trạng thái:** Standard Operating Procedure (SOP Baseline)  

---

## 1. TỔNG QUAN KIẾN TRÚC VẬN HÀNH

Quy trình nhập kho khác (Movement Type `Z10` đi mượn từ nhà cung cấp / `Z08` đền bù thay thế) được số hóa toàn bộ luồng tác nghiệp giữa Tờ trình V-Office, SAP S/4HANA và Phần mềm Kho Thông Minh AI-WMS.

### Điểm đặc thù quy trình:
- **Chứng từ gốc:** Tờ trình nhập kho khác được ban hành trên V-Office và tự động sync sang SAP.
- **Phân biệt `Z10` và `Z08`:** 
  - `Z10` (Hàng mượn): Không phát sinh hạch toán kế toán.
  - `Z08` (Hàng đền bù): Phát sinh hạch toán kế toán tăng tồn kho.
- Mọi thao tác dỡ hàng, kiểm đếm, xác nhận nhập kho thực tế đều thực hiện trên **App AI-WS**.

---

## 2. QUY TRÌNH HỆ THỐNG CHI TIẾT (19 BƯỚC CHUẨN ĐỒNG BỘ)

| STT | Tên bước | Hệ thống thực hiện | Tác nhân | Chi tiết kỹ thuật & Giao tiếp API |
|---|---|---|---|---|
| **1** | **Tạo Tờ trình & Auto Reservation** | Non-SAP ➔ V-Office ➔ SAP | Đơn vị yêu cầu / SAP | Ban hành Tờ trình trên V-Office. Số văn bản tự động Sync về SAP. Người dùng chạy `MB21` tạo Reservation (`Z10` hoặc `Z08`). |
| **2** | **Trình phiếu ký V-Office (Lần 1)** | SAP ➔ V-Office | Đơn vị yêu cầu | Trình Reservation đính kèm Tờ trình đã ban hành lên V-Office. |
| **3** | **Phê duyệt V-Office Lần 1** | V-Office | Người phê duyệt | Phê duyệt Reservation trên V-Office.<br>• *Approved:* Chuyển sang Bước 3.1.<br>• *Rejected:* Hủy yêu cầu. |
| **3.1** | **SAP cập nhật Approved** | SAP S/4HANA | Hệ thống (Auto) | SAP ghi nhận trạng thái Reservation = `Approved`. |
| **4** | **Đẩy Lệnh sang AI-WS (`T-API1`)** | SAP ➔ AI-WS | Interface (`T-API1`) | SAP tự động gọi API **`T-API1`** truyền toàn bộ thông tin Reservation Nhập kho khác sang hệ thống AI-WS. |
| **5** | **AI-WS tiếp nhận & Sinh Task** | AI-WS | Hệ thống AI-WS | AI-WS tiếp nhận bản tin `T-API1`, tự động tạo Task nhập kho khác và gửi thông báo cho Thủ kho. |
| **6** | **Thủ kho quyết định tiếp nhận** | AI-WS (App) | Thủ kho | Thủ kho xem xét kế hoạch tiếp nhận hàng mượn/đền bù:<br>• *Đồng ý:* Chuyển Bước 6.2 (Xác nhận khung giờ xe cộ cập bến).<br>• *Từ chối:* Chuyển Bước 6.1 (Tự động gọi **`T-API2`** sang SAP để cập nhật `Rejected by Whs`). |
| **6.1** | **Cập nhật Rejected by Whs** | AI-WS ➔ SAP | Interface (`T-API2`) | AI-WS gọi **`T-API2`** báo SAP hủy/tạm dừng Lệnh nhập kho khác. |
| **6.2** | **Xác nhận giờ nhận hàng** | AI-WS (App) | Thủ kho | Thủ kho chốt khung giờ nhận hàng. |
| **7** | **Sinh lịch giao việc & Slotting** | AI-WS | Hệ thống AI-WS | AI-WS tự động tính toán vị trí tiếp nhận (*Staging Area*) và phân công bốc xếp. |
| **8** | **Cập nhật giờ xe vào cổng (`T-Scr`)** | AI-WS (App Bảo vệ) | Bảo vệ cổng kho | Xe chở hàng tới cổng. Bảo vệ quét QR/mã giao nhận trên App AI-WS để ghi nhận giờ xe vào cổng (`Time Screening - T-Scr`). |
| **9** | **Dỡ hàng & Kiểm đếm vật lý (`T-Unl`)** | AI-WS (App Kho) | Đội dỡ hàng / Thủ kho | Dỡ hàng khỏi xe, quét mã/kiểm đếm số lượng thực tế (`Time Unloading - T-Unl`). |
| **10** | **Kết quả kiểm đếm thực tế** | AI-WS | Thủ kho & App | Đối chiếu hàng thực giao với Reservation:<br>• *Đúng đủ:* Chuyển Bước 10.2.<br>• *Sai lệch:* Chuyển Bước 10.1 (Bấm Từ chối nhận hàng ➔ AI-WS gọi **`T-API3`** báo SAP). |
| **10.1** | **Từ chối nhận hàng do sai lệch** | AI-WS ➔ SAP | Interface (`T-API3`) | AI-WS truyền bản tin **`T-API3`** báo cáo sai lệch thực tế về hệ thống SAP. |
| **10.2** | **Ký BBBG điện tử & Chuyển khu chờ** | AI-WS (App Kho) | Thủ kho & Bên giao hàng | Hai bên ký **Biên bản giao nhận / BBBG điện tử** trực tiếp trên màn hình App AI-WS. Chuyển hàng vào Khu vực chờ nhập kho. |
| **11** | **Cập nhật trạng thái chờ nhập** | SAP S/4HANA | Hệ thống (Auto) | Ghi nhận hàng đã qua kiểm đếm tại kho. |
| **12** | **Sinh Phiếu nhập (Material Doc)** | SAP S/4HANA | Hệ thống (Auto) | SAP tự động khởi tạo **Material Document** (Mvt `Z10` hoặc `Z08`). |
| **13** | **Sinh Inspection Lot & Trình V-Office Lần 2** | SAP & V-Office | SAP & Thủ kho | • SAP tự động sinh **Lô kiểm tra QM.04** (nếu vật tư có bật QM).<br>• Thủ kho dùng App AI-WS trình Phiếu nhập kho (Material Doc) lên V-Office Lần 2 (Thủ trưởng + Kế toán ký chốt). |
| **14** | **Thực nhập kho (`T-AGR`) & Gửi KCS** | AI-WS ➔ SAP | Interface (`T-API5`) | • Khi V-Office phê duyệt Lần 2, Thủ kho bấm nút **Thực nhập kho (`T-AGR`)** trên App AI-WS.<br>• SAP gọi **`T-API5`** trao đổi kết quả KCS với AI-WS. |
| **15** | **Nhận kết quả KCS & Cập nhật tồn kho** | SAP S/4HANA | Hệ thống (Auto) | Cập nhật trạng thái tồn kho:<br>• *Hàng Đạt KCS (hoặc không bật QM):* Chuyển trạng thái ➔ **`UU` (Unrestricted-Use)**.<br>• *Hàng Không đạt KCS:* Chuyển trạng thái ➔ **`Blocked Stock`**. |
| **18** | **Đóng gói & Đưa vào vị trí Bin** | AI-WS | Công nhân kho | AI-WS chỉ định vị trí kệ/Bin tự động. Công nhân dán nhãn, đóng gói và cất kho. |
| **19** | **Lưu trữ & Hoàn tất** | AI-WS & SAP | Hệ thống (Auto) | Hoàn thành toàn bộ quy trình nhập kho khác. Đóng Task trên AI-WS và SAP. |

---

## 3. CÁC API VÀ ĐIỂM CHỦ CHỐT TÍCH HỢP

1. **`T-API1`:** SAP ➔ AI-WS: Đẩy Lệnh nhập kho khác (*Reservation Approved*) sang AI-WS.
2. **`T-API2`:** AI-WS ➔ SAP: Báo đóng/hủy lệnh khi Thủ kho từ chối nhận hàng.
3. **`T-API3`:** AI-WS ➔ SAP: Báo sai lệch số lượng/chủng loại vật tư kiểm đếm thực tế.
4. **`T-API5`:** SAP ⇄ AI-WS: Đồng bộ kết quả KCS (QM.04) và chốt chuyển vùng tồn kho (`UU` / `Blocked Stock`).

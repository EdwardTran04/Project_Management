# MM.10C — Quy Trình Nhập Kho Thu Hồi Từ Trạm (NKK) — Kho Thông Minh AI-WMS

> **Mã quy trình:** MM.10C (NKK_ThuHoi)  
> **Tên quy trình:** Luồng Nhập Kho Thu Hồi Từ Trạm (PM) — Kho Thông Minh AI-WMS  
> **Hệ thống tham gia:** SAP S/4HANA × V-Office × AI-WS (Hệ thống Kho Thông Minh)  
> **Tài liệu nguồn:** `SAP-AIWS.drawio.xml` (Sơ đồ quy trình chuẩn hệ thống AI-WMS)  
> **Trạng thái:** Standard Operating Procedure (SOP Baseline)  

---

## 1. TỔNG QUAN VÀ KIẾN TRÚC HỆ THỐNG 3 TẦNG

Quy trình nhập kho thu hồi từ trạm (PM) được số hóa và tự động hóa toàn bộ thông qua sự phối hợp giữa 3 tầng hệ thống:
1. **SAP S/4HANA (Core ERP):** Quản lý chứng từ gốc, tự động sinh Reservation từ Work Order PM, hạch toán kế toán kho và kích hoạt lô kiểm tra QM.04.
2. **V-Office (Hệ thống Trình ký Điện tử Viettel):** Phê duyệt 2 lần (Lần 1: Yêu cầu thu hồi; Lần 2: Phiếu nhập kho).
3. **AI-WS (Hệ thống Kho Thông Minh AI-WMS):** Quản lý điều phối tác nghiệp vật lý tại kho (Lập lịch xe vào cổng `T-Scr`, Dỡ hàng kiểm đếm `T-Unl`, Ký BBBG điện tử, Thực nhập kho `T-AGR`, Đóng gói & Lưu kho).

---

## 2. SƠ ĐỒ LUỒNG TIẾN TRÌNH 3 SWIMLANES (SAP — V-OFFICE — AI-WS)

```
[ SAP S/4HANA ] ──(1. Auto Reservation)──► [ V-Office (2. Trình ký Lần 1) ]
                                                   │
                                     ┌─────────────┴─────────────┐
                                     ▼ (3. Phê duyệt)            ▼ (Từ chối)
                          [ SAP (3.1. Approved) ]       [ Hủy lệnh / Đóng WO ]
                                     │
                                     ▼ (4. Đẩy Lệnh - T-API1)
                          [ AI-WS (5. Tiếp nhận & Sinh Task) ]
                                     │
                        ┌────────────┴────────────┐
                        ▼ (6. Thủ kho Đồng ý)     ▼ (6.1. Từ chối - T-API2)
             [ AI-WS (7. Sinh Lịch) ]         [ SAP Đóng lệnh ]
                        │
                        ▼
             [ AI-WS (8. Bảo vệ mở cổng T-Scr) ]
                        │
                        ▼
             [ AI-WS (9. Dỡ hàng kiểm đếm T-Unl) ]
                        │
           ┌────────────┴────────────┐
           ▼ (10. Đúng đủ)           ▼ (10.1. Sai lệch - T-API3)
[ AI-WS (10.2. Ký BBBG điện tử) ]  [ SAP Cập nhật Rejected by Whs ]
           │
           ▼
[ AI-WS (14. Thủ kho bấm T-AGR nhập kho trên App) ]
           │
           ▼ (Đồng bộ phiếu nhập 14.2)
[ SAP (12. Sinh phiếu nhập Material Doc) ]
           │
           ▼
[ SAP (13. Sinh Inspection Lot QM.04) ] ──(T-API5)──► [ AI-WS (14. Trả kết quả KCS) ]
                                                                 │
                                                                 ▼
                                                  [ SAP (15. Cập nhật UU / Blocked) ]
```

---

## 3. BẢNG ĐẶC TẢ CHI TIẾT CÁC BƯỚC QUY TRÌNH HỆ THỐNG (19 BƯỚC)

| STT | Tên bước | Hệ thống thực hiện | Tác nhân | Chi tiết kỹ thuật & API giao tiếp |
|---|---|---|---|---|
| **1** | **Tự động tạo Reservation** | SAP S/4HANA | Hệ thống (Auto) | Lập Work Order bảo trì/hủy trạm trên PM. SAP **tự động tạo Yêu cầu thu hồi (Reservation)**. |
| **2** | **Trình phiếu ký V-Office (Lần 1)** | SAP ➔ V-Office | NV kỹ thuật trạm | Trình Yêu cầu thu hồi đính kèm mẫu Phiếu nhập kho lên V-Office. |
| **3** | **Phê duyệt V-Office Lần 1** | V-Office | Người phê duyệt | • *Nếu Phê duyệt:* Chuyển sang Bước 3.1.<br>• *Nếu Từ chối:* Trả lại NV kỹ thuật / Hủy Reservation. |
| **3.1** | **Cập nhật Approved trên SAP** | SAP S/4HANA | Hệ thống (Auto) | SAP nhận kết quả phê duyệt từ V-Office, cập nhật trạng thái Reservation = `Approved`. |
| **4** | **Đẩy Lệnh sang AI-WS (`T-API1`)** | SAP ➔ AI-WS | Interface (`T-API1`) | SAP tự động gọi API **`T-API1`** đẩy dữ liệu Lệnh nhập kho thu hồi (Reservation Approved) sang hệ thống AI-WS. |
| **5** | **AI-WS tiếp nhận & Sinh Task** | AI-WS | Hệ thống AI-WS | AI-WS nhận bản tin `T-API1`, tự động khởi tạo Task công việc nhập kho và gửi Notification cho Thủ kho. |
| **6** | **Thủ kho quyết định tiếp nhận** | AI-WS (App Thủ kho) | Thủ kho | Thủ kho xem thông tin hàng thu hồi trên App AI-WS:<br>• *Nếu Đồng ý:* Chuyển Bước 6.2.<br>• *Nếu Từ chối:* Chuyển Bước 6.1 (AI-WS gọi **`T-API2`** sang SAP để đóng lệnh). |
| **6.1** | **Hủy lệnh do Thủ kho từ chối** | AI-WS ➔ SAP | Interface (`T-API2`) | AI-WS gọi **`T-API2`** cập nhật trạng thái lệnh trên SAP = `Rejected by Whs` và đóng Work Order PM. |
| **6.2** | **Xác nhận giờ nhận hàng** | AI-WS (App Thủ kho) | Thủ kho | Thủ kho chọn khung giờ tiếp nhận xe vận chuyển vật tư thu hồi từ trạm về kho. |
| **7** | **Sinh lịch giao việc & Slotting** | AI-WS | Hệ thống AI-WS | AI-WS tự động tính toán vị trí khu vực tiếp nhận (*Staging Area*) và phân công lịch làm việc cho đội bốc xếp. |
| **8** | **Cập nhật giờ xe vào cổng (`T-Scr`)** | AI-WS (App Bảo vệ) | Bảo vệ cổng kho | Xe chở vật tư thu hồi tới cổng. Bảo vệ quét QR/mã chuyến xe trên App AI-WS để ghi nhận thời điểm xe vào cổng (`Time Screening - T-Scr`). |
| **9** | **Dỡ hàng & Kiểm đếm vật lý (`T-Unl`)** | AI-WS (App Kho) | Đội dỡ hàng / Thủ kho | Thực hiện dỡ hàng khỏi xe và quét mã/kiểm đếm số lượng thực tế (`Time Unloading - T-Unl`). |
| **10** | **Đánh giá Kết quả kiểm đếm** | AI-WS | Thủ kho & App | Đối chiếu số lượng thực tế kiểm đếm với Reservation:<br>• *Nếu Đúng đủ:* Chuyển Bước 10.2.<br>• *Nếu Sai lệch:* Chuyển Bước 10.1 (Bấm Từ chối nhận hàng, AI-WS gọi **`T-API3`** báo SAP). |
| **10.1** | **Cập nhật trạng thái Từ chối sai lệch** | AI-WS ➔ SAP | Interface (`T-API3`) | AI-WS gửi **`T-API3`** sang SAP để cập nhật lý do từ chối sai lệch thực tế. |
| **10.2** | **Ký BBBG điện tử & Vào Khu chờ** | AI-WS (App Kho) | Thủ kho & Tài xế | Hai bên ký **Biên bản bàn giao (BBBG) điện tử** trực tiếp trên màn hình App AI-WS. Hàng được di chuyển vào Khu vực chờ nhập kho. |
| **11** | **Cập nhật trạng thái chờ nhập** | SAP S/4HANA | Hệ thống (Auto) | Đồng bộ trạng thái hàng đã vào khu chờ nhập kho. |
| **12** | **Sinh Phiếu nhập kho (Material Doc)** | SAP S/4HANA | Hệ thống (Auto) | Dựa trên tín hiệu nhập kho từ AI-WS, SAP tự động tạo **Material Document** (Chứng từ giao dịch kho). |
| **13** | **Sinh Inspection Lot QM.04 & Trình V-Office Lần 2** | SAP & V-Office | SAP & Thủ kho | • SAP tự động sinh **Lô kiểm tra chất lượng (Inspection Lot QM.04)**.<br>• Thủ kho trình ký Phiếu nhập kho (Material Doc) lên V-Office Lần 2 (Thủ trưởng + Kế toán ký). |
| **14** | **Thủ kho bấm Thực nhập kho (`T-AGR`) & KCS** | AI-WS (App) ➔ SAP | Interface (`T-API5`) | • Sau khi V-Office duyệt Lần 2, Thủ kho bấm nút **Thực nhập kho (`T-AGR`)** trên App AI-WS.<br>• SAP gọi **`T-API5`** trao đổi dữ liệu kết quả kiểm tra KCS với AI-WS. |
| **15** | **Nhận kết quả KCS & Cập nhật Trạng thái tồn** | SAP S/4HANA | Hệ thống (Auto) | Dựa trên kết quả KCS (UD):<br>• *Sản phẩm đạt:* Chuyển trạng thái tồn kho ➔ **`UU` (Unrestricted-Use)**.<br>• *Sản phẩm không đạt:* Chuyển trạng thái tồn kho ➔ **`Blocked Stock` (Khóa)**. |
| **18** | **Đóng gói & Đưa vào giá kệ** | AI-WS | Công nhân kho | AI-WS chỉ định vị trí Bin/Kệ chuẩn xác. Công nhân thực hiện đóng gói và đặt hàng vào đúng vị trí lưu trữ. |
| **19** | **Lưu trữ & Hoàn tất** | AI-WS & SAP | Hệ thống (Auto) | Hoàn tất toàn bộ chuỗi Task nhập kho thu hồi từ trạm. Đóng chứng từ trên cả 2 hệ thống. |

---

## 4. DANH SÁCH CÁC CỔNG GIAO TIẾP API (INTEGRATION ENDPOINTS)

1. **`T-API1` (SAP ➔ AI-WS):** Đẩy dữ liệu Yêu cầu nhập kho thu hồi đã duyệt (*Reservation Approved*) từ SAP sang AI-WS để tạo Task kho.
2. **`T-API2` (AI-WS ➔ SAP):** Thông báo đóng/hủy Yêu cầu nhập kho khi Thủ kho từ chối tiếp nhận trên App AI-WS.
3. **`T-API3` (AI-WS ➔ SAP):** Báo cáo sai lệch kiểm đếm thực tế vật lý giữa hàng nhận thực tế và Reservation.
4. **`T-API5` (SAP ⇄ AI-WS):** Đồng bộ kết quả kiểm tra chất lượng KCS (QM.04) và cập nhật trạng thái tồn kho chuyển vùng (`UU` vs `Blocked Stock`).

---

## 5. QUY TẮC CHUYỂN TRẠNG THÁI TỒN KHO TRÊN HỆ THỐNG

- **Trạng thái khởi tạo khi MIGO (Bước 12):** `Quality Inspection (QI)` hoặc `Unrestricted-Use (UU)` tạm thời tại Khu chờ.
- **Sau khi KCS trả kết quả UD (Bước 15):**
  - **Sản phẩm ĐẠT:** `QI` ➔ **`UU` (Unrestricted-Use)** (Sẵn sàng xuất dùng/ứng cứu).
  - **Sản phẩm KHÔNG ĐẠT:** `QI` ➔ **`Blocked Stock`** (Khóa tài sản, chuyển kho phế liệu/chờ thanh lý).

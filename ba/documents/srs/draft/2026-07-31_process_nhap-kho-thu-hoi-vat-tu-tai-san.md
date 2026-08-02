# Quy Trình Nhập Kho Thu Hồi Vật Tư Tài Sản (Từ Trạm / Sự Cố GNOC)

## 1. Thông Tin Tổng Quan
- **Tên quy trình:** Quy Trình Nhập Kho Thu Hồi Vật Tư Tài Sản (Từ Trạm / Sự Cố GNOC)
- **Đầu vào nghiệp vụ:** `docs/quy-trinh-nhap-kho-thu-hoi-vat-tu-tai-san.md`
- **Đối tượng nghiệp vụ:** Lệnh nhập kho thu hồi (Work Order GNOC / Reservation SAP), Lô thiết bị thu hồi từ trạm, Inspection Lot (QM.04), Chứng từ kế toán/Material Document (MM.10C), Phiếu nhập kho (PNK).
- **Tập trạng thái chính:** 
  `N/A` ➔ `Sự cố trạm / Work Order` ➔ `Khởi tạo (Reservation)` ➔ `Chờ phê duyệt V-Office` ➔ `Đã phê duyệt` ➔ `Đã đồng bộ AI-WS (T-API1)` ➔ `Chờ thủ kho tiếp nhận (T-GR2)` ➔ `Đã phân việc (T-S2/T-S7)` ➔ `Xe đã vào cổng (T-Scr)` ➔ `Đã dỡ hàng & kiểm đếm (T-Unl/T-HO)` ➔ `Đã ký BBBG` ➔ `Chờ KCS (QM.04)` ➔ `KCS Đạt` ➔ `Đã hạch toán SAP (MM.10C)` ➔ `Đã ký số PNK (T-Sig)` ➔ `Đã cất kệ (T-S20/T-Mv3)` ➔ `Đóng Work Order` ➔ `Đã Revaluation (Hủy trạm)`.
- **Tác nhân & Swimlane (Lane):**
  1. `NV KT Trạm / Sự Cố GNOC`: Nhân viên kỹ thuật trạm / ứng cứu thông tin.
  2. `Người Phê Duyệt (V-Office)`: Cấp quản lý phê duyệt phiếu yêu cầu trên V-Office.
  3. `Thủ Kho / NV Kho / Bảo Vệ`: Thủ kho, Bảo vệ / Camera AI, Nhân viên kho hiện trường, Lái xe nâng.
  4. `Bộ Phận KCS & Tài Chính`: Bộ phận kiểm tra chất lượng (QM.04), Bộ phận Tài chính (Revaluation).
  5. `Hệ Thống (GNOC / SAP / AI-WS)`: Tương tác hệ thống tự động, T-API1➔T-API6, AI-WS engine (T-S2, T-S7, T-S8, T-S20).

---

## 2. Sơ Đồ Quy Trình Swimlane

| Định dạng | Đường dẫn File | Mô tả |
|---|---|---|
| 🖼️ **Ảnh PNG (Full Width)** | [2026-07-31_process_nhap-kho-thu-hoi-vat-tu-tai-san.png](file:///c:/Users/Admin/Desktop/ai-agent-wms/documents/ba/draft/2026-07-31_process_nhap-kho-thu-hoi-vat-tu-tai-san.png) | Xem giao diện đồ họa full-width trực quan |
| 📐 **Ảnh SVG (Vector)** | [2026-07-31_process_nhap-kho-thu-hoi-vat-tu-tai-san.svg](file:///c:/Users/Admin/Desktop/ai-agent-wms/documents/ba/draft/2026-07-31_process_nhap-kho-thu-hoi-vat-tu-tai-san.svg) | Ảnh chuẩn nét không vỡ font khi chèn tài liệu |
| ✏️ **Draw.io File (Chỉnh sửa)** | [2026-07-31_process_nhap-kho-thu-hoi-vat-tu-tai-san.drawio](file:///c:/Users/Admin/Desktop/ai-agent-wms/documents/ba/draft/2026-07-31_process_nhap-kho-thu-hoi-vat-tu-tai-san.drawio) | Mở bằng [draw.io](https://app.diagrams.net) để tùy biến layout |

![Sơ đồ Swimlane Nhập Kho Thu Hồi Vật Tư Tài Sản](file:///c:/Users/Admin/Desktop/ai-agent-wms/documents/ba/draft/2026-07-31_process_nhap-kho-thu-hoi-vat-tu-tai-san.png)

---

## 3. Bảng Luồng Trạng Thái (Workflow Transition Table)

| STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan |
|---|---|---|---|---|---|---|
| **M1** | N/A | Hệ Thống (GNOC) | Bước 1: Phát sinh sự cố trạm / tháo dỡ trạm ➔ Sinh Work Order | Work Order | Khởi tạo Work Order | GNOC |
| **M2** | Khởi tạo Work Order | Hệ Thống (SAP) | Bước 1b: SAP tự động sinh Reservation từ Work Order | Reservation | Khởi tạo (Reservation) | SAP S/4HANA (B1) |
| **M3** | Khởi tạo (Reservation) | NV KT Trạm | Bước 2: Trình yêu cầu nhập kho thu hồi lên V-Office | Reservation | Chờ phê duyệt V-Office | V-Office (B2) |
| **M4** | Chờ phê duyệt V-Office | Người Phê Duyệt | Bước 2b: Kiểm tra & Phê duyệt yêu cầu trên V-Office | Reservation | Đã phê duyệt | V-Office (B2) |
| **M5** | Đã phê duyệt | Hệ Thống (SAP/AI-WS) | Bước 3: SAP duyệt ➔ AI-WS tự động gọi T-API1 kéo dữ liệu lệnh & vật tư | Lệnh NKK | Đã đồng bộ AI-WS | T-API1 (SAP ➔ AI-WS) |
| **M6** | Đã đồng bộ AI-WS | Thủ Kho | Bước 3b: Thủ kho xem xét & Bấm "Đồng ý nhận hàng" (T-GR2), hẹn giờ | Lệnh NKK | Chờ tiếp nhận | AI-WS Mobile (T-GR2) |
| **M7** | Chờ tiếp nhận | Hệ Thống (AI-WS) | Bước 4: AI phân việc tự động (T-S2) dựa trên khối lượng & nhân sự kho | Task NKK | Đã lập kế hoạch | AI-WS (T-S2) |
| **M8** | Đã lập kế hoạch | Hệ Thống (AI-WS) | Bước 5: Bắn Notification (T-S7) giao việc đến App Mobile của NV | Notification | Đã giao việc | AI-WS (T-S7) |
| **M9** | Đã giao việc | Hệ Thống (AI-WS) | Bước 6: Kích hoạt đồng hồ đếm ngược giám sát KPI (T-S8) | Task KPI | Đang giám sát KPI | AI-WS (T-S8) |
| **M10** | Đang giám sát KPI | Bảo Vệ / Camera AI | Bước 7: An ninh cổng ghi nhận giờ xe vào kho (T-Scr) | Lệnh NKK | Xe đã vào cổng | AI-WS Mobile (T-Scr) |
| **M11** | Xe đã vào cổng | NV Kho | Bước 8: Dỡ hàng (T-Unl) & Kiểm đếm thực tế (T-HO) | Lô thiết bị | Đã kiểm đếm | Hiện trường (T-Unl/T-HO) |
| **M12** | Đã kiểm đếm | NV Kho & NV Trạm | Bước 8b: Ký BBBG điện tử (T-HO) trên App Mobile & Chụp ảnh | BBBG | Đã ký BBBG | AI-WS Mobile (T-HO) |
| **M13** | Đã ký BBBG | NV Kho | Bước 9: Chuyển thiết bị vào Khu vực chờ nhập kho (T-Mv1) | Lô thiết bị | Tại khu chờ nhập | Hiện trường (T-Mv1) |
| **M14** | Tại khu chờ nhập | Hệ Thống (AI-WS/SAP) | Bước 10: AI-WS gọi T-API4 ➔ SAP tự động sinh Inspection Lot (QM.04) | Inspection Lot | Chờ KCS | T-API4 (AI-WS ➔ SAP) |
| **M15** | Chờ KCS | Bộ Phận KCS | Bước 11: Đánh giá chất lượng thiết bị & Nhập kết quả QM.04 lên SAP | Inspection Lot | Đã đánh giá KCS | SAP S/4HANA (QM.04) |
| **M16** | Đã đánh giá KCS | Hệ Thống (SAP) | Bước 11b: SAP gọi T-API5 đồng bộ kết quả KCS về AI-WS | Kết quả KCS | KCS Đạt | T-API5 (SAP ➔ AI-WS) |
| **M17** | KCS Đạt | Thủ Kho | Bước 12: Thủ kho bấm "Xác nhận thực nhập kho" (T-AGR) trên App | Lệnh NKK | Chờ hạch toán SAP | AI-WS Mobile (T-AGR) |
| **M18** | Chờ hạch toán SAP | Hệ Thống (AI-WS/SAP) | Bước 13: AI-WS gọi T-API6 ➔ SAP hạch toán kho (MM.10C) theo 3 kịch bản | Material Doc | Đã hạch toán SAP | T-API6 (AI-WS ➔ SAP) |
| **M19** | Đã hạch toán SAP | Thủ Kho & Sếp | Bước 14: SAP trả Số Phiếu ➔ Ký số V-Office (T-Sig) trên Mobile app | Phiếu nhập kho | Đã ký số PNK | AI-WS Mobile (T-Sig) |
| **M20** | Đã ký số PNK | AI-WS & Lái Xe Nâng | Bước 15: AI vẽ sơ đồ chỉ định vị trí (T-S20) & Cất kệ (T-Mv3) | Lô thiết bị | Hoàn tất cất kệ | AI-WS (T-S20/T-Mv3) |
| **M21** | Hoàn tất cất kệ | Hệ Thống (SAP) | Bước 16: SAP tham chiếu PM.02/PM.03 ➔ Đóng Work Order sự cố | Work Order | Đã đóng Work Order | SAP S/4HANA (PM) |
| **A1** | Đã đóng Work Order | Bộ Phận Tài Chính | Bước 17: (Kịch bản 2 - Hủy trạm) Chạy program Revaluation điều chỉnh giá | Tài sản | Đã Revaluation giá | SAP S/4HANA (FI/CO) |
| **E1** | Chờ phê duyệt V-Office | Người Phê Duyệt | Bước 2.1a: Từ chối V-Office (Lý do: Cần chỉnh sửa thông tin) | Reservation | Từ chối - Cần sửa | V-Office (B2) |
| **E2** | Từ chối - Cần sửa | NV KT Trạm | Chỉnh sửa Reservation trên SAP & Trình lại lên V-Office | Reservation | Khởi tạo (Reservation) | SAP / V-Office (Quay lại B2) |
| **E3** | Chờ phê duyệt V-Office | Người Phê Duyệt | Bước 2.1b: Từ chối V-Office (Lý do: Cần trình lại) | Reservation | Từ chối - Trình lại | V-Office (B2) |
| **E4** | Từ chối - Trình lại | NV KT Trạm | Trình lại phiếu yêu cầu lên V-Office | Reservation | Chờ phê duyệt V-Office | V-Office (Quay lại B2) |
| **E5** | Đồng bộ AI-WS | Thủ Kho | Bước 3.1: Từ chối nhận hàng trên App ➔ Nhập lý do từ chối | Lệnh NKK | Chờ đóng lệnh SAP | AI-WS Mobile (T-GR2) |
| **E6** | Chờ đóng lệnh SAP | Hệ Thống (AI-WS/SAP) | AI-WS gọi T-API3 ➔ SAP cập nhật "Từ chối bởi nhân viên kho" & Đóng lệnh | Lệnh NKK | Đã đóng lệnh | T-API3 (AI-WS ➔ SAP) |
| **E7** | Xe đã vào cổng | NV Kho | Bước 8.1: Kiểm đếm phát hiện Sai lệch (thiếu/hỏng) ➔ Bấm Từ chối | Lô thiết bị | Chờ hủy lệnh SAP | Hiện trường (T-Unl) |
| **E8** | Chờ hủy lệnh SAP | Hệ Thống (AI-WS/SAP) | AI-WS gọi T-API3 ➔ SAP cập nhật "Từ chối bởi nhân viên kho" & Hủy lệnh | Lệnh NKK | Đã hủy lệnh | T-API3 (AI-WS ➔ SAP) |
| **E9** | Chờ KCS | Bộ Phận KCS / SAP | Bước 11.1: Đánh giá KCS Không đạt ➔ SAP đẩy kết quả qua T-API5 | Inspection Lot | KCS Không đạt | T-API5 (SAP ➔ AI-WS) |
| **E10** | KCS Không đạt | Hệ Thống (AI-WS) | AI-WS sinh task T-S12 yêu cầu trả hàng hỏng & giảm tồn kho | Lô thiết bị hỏng | Đã xử lý trả hàng hỏng | AI-WS (T-S12) |

---

## 4. Phân Loại 3 Kịch Bản Hạch Toán SAP (Core Logic MM.10C)

| Đặc điểm | Kịch bản 1 (Ứng cứu TT) | Kịch bản 2 (Hủy trạm) | Kịch bản 3 (Sửa chữa) |
|---|---|---|---|
| **Mục đích** | Dư thừa ứng cứu thông tin | Thu hồi do hủy trạm | Thu hồi đưa về sửa chữa |
| **Loại kho nhập** | Kho nguyên giá | Kho phi giá trị (Non-valuated) | Kho phi giá trị (Non-valuated) |
| **Chứng từ kế toán** | **Có sinh** (Nguyên giá ban đầu) | **Không sinh** (Ghi tăng số lượng) | **Không sinh** (Ghi tăng số lượng) |
| **Revaluation (B17)** | Không cần | **Bắt buộc Tài chính điều chỉnh giá** | Không cần |
| **Đóng Work Order (B16)** | **Có** | **Có** | **Có** |

---

## 5. Câu Hỏi Mở (Open Questions Cho BA)
1. **Quy trình Revaluation (B17):** Thời gian quy định để bộ phận Tài chính chạy program điều chỉnh giá mới trên SAP sau khi nhập kho phi giá trị là bao nhiêu ngày?
2. **Xử lý cảnh báo KPI (T-S8):** Khi hệ thống đếm ngược KPI cảnh báo rủi ro trễ hạn, notification chỉ gửi nhắc nhở cho NV kho hay gửi đồng thời cho Trưởng kho/Quản lý chi nhánh?
3. **Chụp ảnh hiện trạng (T-HO):** Hệ thống AI-WS có bắt buộc số lượng ảnh hiện trạng tối thiểu (vd: góc toàn cảnh, tem serial label, vết vỡ hỏng) khi ký BBBG điện tử không?

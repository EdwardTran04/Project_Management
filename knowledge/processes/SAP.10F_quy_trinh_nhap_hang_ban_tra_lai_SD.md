# MM.10F — Quy Trình Nhập Hàng Bán Trả Lại Trên SAP

> **Mã quy trình:** MM.10F  
> **Tên tiếng Anh:** Goods Return from Customer Process (SAP)  
> **Phân hệ chính:** Material Management (MM) × Sales & Distribution (SD)  
> **Tài liệu tham chiếu:** S406 Business Blueprint Inventory V1.0 (KPMG × Viettel)  
> **Trạng thái:** Baseline Document  

---

## 1. TỔNG QUAN VÀ PHẠM VI ÁP DỤNG

### 1.1 Mục đích & Phạm vi
- Quy trình mô tả các bước thực hiện trên hệ thống SAP S/4 HANA và V-office khi thực hiện nhập kho hàng hóa/sản phẩm bị khách hàng trả lại sau khi hoàn tất quy trình bán hàng trên SAP.
- Áp dụng cho các đơn vị thuộc Tập đoàn Viettel có hoạt động kinh doanh, bán hàng thương mại trên phân hệ SAP SD (như VHT, VTX, VTT...).

### 1.2 Các điểm chính (Key Points)
1. **Tham chiếu chứng từ gốc:** Nhập kho tham chiếu trực tiếp từ **Đơn yêu cầu trả hàng (Return Order)** thuộc quy trình **SD.02.04**.
2. **Tự động khởi tạo Lệnh nhập kho:** Hệ thống SAP tự động sinh **Lệnh nhập kho (Return Delivery `VL01N`)** từ Return Order *(Không cần trình ký V-office ở bước Lệnh nhập kho này)*.
3. **Hạch toán Kế toán TỰ ĐỘNG:** Khi thực hiện ghi nhận nhập kho (`VL02N`), SAP tự động sinh chứng từ kế toán ghi giảm giá vốn bán hàng (COGS):
   - **Nợ TK 155x / 154x** *(Thành phẩm / Chi phí sản xuất dở dang)*
   - **Có TK 632x** *(Giá vốn hàng bán)*
4. **Kiểm tra chất lượng KCS (QM.03b):** Nhập kho tự động kích hoạt Lô kiểm tra chất lượng (*Inspection Lot*) tham chiếu quy trình **QM.03b** để KCS đánh giá lỗi sản phẩm.
5. **Cơ chế Hủy / Đảo chứng từ (`VL09`):** Nếu trình ký V-office bị từ chối do sai số liệu, Thủ kho phải dùng TCode **`VL09`** (*Reverse Goods Movement*) để đảo ngược hạch toán kho và kế toán trước khi sửa lại số lượng.

---

## 2. QUY TRÌNH THỰC HIỆN CHI TIẾT (BUSINESS PROCESS STEPS)

```
[1. Return Order (SD.02.04)] ──► [2. SAP Auto Return Delivery (VL01N)]
                                              │
                                              ▼
[5. Trình V-office Phiếu nhập] ◄── [3. VL02N: Post Goods Receipt]
            │                       ├──► Auto Hạch toán Giá vốn (Nợ 155 / Có 632)
            │                       └──► Auto Sinh Lô KCS (QM.03b)
            │
            ├──► [6. V-office Duyệt] ──► Hoàn tất (Status = Released)
            │
            └──► Từ chối ──► [7. VL09: Reverse Movement] ──► [8. VL02N: Sửa số lượng] ──► Nhập lại
```

| STT | Tên bước | Hệ thống / TCode | Tác nhân thực hiện | Chi tiết nghiệp vụ chuẩn Blueprint |
|---|---|---|---|---|
| **1** | **Tạo Đơn yêu cầu trả hàng (Return Order)** | SAP SD (`VA01` / SD.02.04) | Phòng Tài chính / Kinh doanh | Khách hàng đề nghị trả hàng. Bộ phận Kinh doanh/Tài chính khởi tạo **Return Order** trên phân hệ Bán hàng (SD). |
| **2** | **Tự động tạo Lệnh nhập hàng trả (Return Delivery)** | SAP SD/MM (`VL01N` Auto) | Hệ thống SAP (Auto) | Dựa trên Return Order vừa tạo, SAP **tự động sinh phiếu Return Delivery** (`VL01N`) chứa thông tin mặt hàng, số lượng khách trả. *(KHÔNG trình ký V-office)*. |
| **3** | **Thực hiện Nhập hàng bán trả lại (Post Goods Receipt)** | SAP MM (`VL02N` / MIGO) | Thủ kho | Thủ kho chọn kho nhận và thực hiện Ghi nhận nhập hàng trả (`VL02N`). SAP tự động:<br>1. Sinh **Phiếu nhập kho** (*Material Document*).<br>2. **Tự động hạch toán Giá vốn:** Nợ TK 155x/154x / Có TK 632x.<br>3. **Tự động sinh Lô kiểm tra chất lượng (Inspection Lot)**. |
| **4** | **Kiểm tra chất lượng KCS (QM.03b)** | Tham chiếu QM.03b | Bộ phận KCS | KCS nhận thông báo, tiến hành kiểm tra tình trạng thực tế của sản phẩm trả về theo quy trình **QM.03b** và nhập Usage Decision (UD) để phân loại tồn kho (Hàng tái sử dụng ➔ *UU*, Hàng lỗi ➔ *Blocked Stock/Sửa chữa*). |
| **5** | **Trình ký Phiếu nhập kho lên V-office** | Z-program ➔ V-office | Thủ kho | Thủ kho chọn chứng từ nhập kho hàng trả (Material Document), đính kèm phiếu, trình **Thủ trưởng đơn vị + Phụ trách Tài chính + Thủ kho** duyệt trên V-office. |
| **6** | **Phê duyệt chứng từ trên V-office** | V-office | Người phê duyệt | Người phê duyệt ký chốt trên V-office. Trạng thái phê duyệt tự động đồng bộ về SAP S/4 HANA (*Status = Released*). |
| **7** | **Xử lý Ngoại lệ: Hủy chứng từ kho (Nếu V-office từ chối)** | SAP (`VL09`) | Thủ kho | Nếu V-office từ chối do sai thông tin chứng từ: Thủ kho chạy TCode **`VL09`** để hủy giao dịch nhập kho (*Reverse Goods Movement*). SAP tự động sinh hạch toán đảo kế toán và kho. |
| **8** | **Điều chỉnh số lượng & Nhập lại** | SAP (`VL02N` / `VL_COMPLETE`) | Thủ kho / BP Kinh doanh | • *Nếu chỉ sai số lượng:* Vào `VL02N` sửa lại số lượng đúng và bấm nhập kho lại ở Bước 3.<br>• *Nếu sai mặt hàng/hủy đơn:* Chạy `VL_COMPLETE` đóng phiếu và làm lại quy trình SD từ Bước 1. |

---

## 3. QUY TẮC TRÌNH KÝ V-OFFICE TRONG MM.10F

| Loại chứng từ trong MM.10F | Có trình ký V-office không? | Bước thực hiện | Lý do nghiệp vụ |
|---|---|---|---|
| **Lệnh nhập kho** *(Return Delivery `VL01N`)* | ❌ **KHÔNG TRÌNH KÝ** | Bước 2 | Do SAP tự động kế thừa từ Return Order (SD) đã phê duyệt trước đó. |
| **Phiếu nhập kho** *(Material Document `VL02N`)* | ✅ **BẮT BUỘC TRÌNH KÝ** | Bước 5 & 6 | Chứng từ làm thay đổi Giá vốn bán hàng (TK 632) và Tồn kho ➔ Bắt buộc Thủ trưởng + Kế toán + Thủ kho ký chốt. |

---

## 4. TÍCH HỢP PHÂN HỆ VÀ ĐIỂM TÙY CHỈNH (CUSTOMIZATION)

- **Tích hợp SD × MM:** Kết nối Webservice API tự động sinh Return Delivery `VL01N` từ Return Order.
- **Tích hợp MM × QM:** Nhập kho tự động kích hoạt lô kiểm tra QM.03b. Kết quả UD của KCS tự động kích hoạt giao dịch Chuyển trạng thái tồn kho (*Transfer Posting*).
- **Quy trình Hủy đảo (`VL09`):** Đảm bảo tính toàn vẹn dữ liệu tài chính giữa phân hệ Kho (MM), Bán hàng (SD) và Kế toán (FI).

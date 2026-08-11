# MM.10C — Quy Trình Nhập Kho Thu Hồi Từ Trạm (PM)

> **Mã quy trình:** MM.10C  
> **Tên tiếng Anh:** Return from Site Process (PM)  
> **Phân hệ chính:** Material Management (MM) × Plant Maintenance (PM)  
> **Tài liệu tham chiếu:** S406 Business Blueprint Inventory V1.0 (KPMG × Viettel)  
> **Trạng thái:** Baseline Document  

---

## 1. TỔNG QUAN VÀ PHẠM VI ÁP DỤNG

### 1.1 Mục đích & Phạm vi
- Quy trình mô tả các bước thực hiện trên hệ thống SAP S/4 HANA và V-office khi thực hiện nhập kho vật tư, thiết bị thu hồi từ các trạm viễn thông (Plant Maintenance - PM) về kho của đơn vị.
- Áp dụng cho các đơn vị vận hành khai thác, bảo trì sửa chữa trạm viễn thông trong Tập đoàn Viettel.

### 1.2 Phân loại 3 trường hợp thu hồi từ trạm

| Trường hợp | Mô tả nghiệp vụ | Quy trình tham chiếu | Bản chất quản lý tồn kho |
|---|---|---|---|
| **Trường hợp 1** | Thu hồi vật tư dư thừa từ ứng cứu thông tin / bảo trì | PM.02 — Quy trình bảo trì sửa chữa | Nhập về kho theo **nguyên giá trị đã xuất** ban đầu |
| **Trường hợp 2** | Hủy trạm, tháo dỡ thu hồi vật tư thiết bị | PM.05.01 — Quy trình hủy trạm | Chỉ quản lý **số lượng**, nhập vào Plant thu hồi NV (Non-Valuated, giá trị = 0) |
| **Trường hợp 3** | Thu hồi vật tư thiết bị về kho để sửa chữa | PM.03.02 — Quy trình thu hồi vật tư | Chỉ quản lý **số lượng**, nhập vào Plant thu hồi NV (Non-Valuated, giá trị = 0) |

*Lưu ý: Các trường hợp thu hồi Tài sản cố định (Fixed Asset) hoặc Mã tài sản phụ (Sub-Asset) tham chiếu quy trình **FI.54.01**.*

---

## 2. QUY TRÌNH THỰC HIỆN CHI TIẾT (BUSINESS PROCESS STEPS)

```
[1. Work Order PM] ──► [2. SAP Auto Reservation] ──► [3. Trình V-office Lần 1]
                                                                  │
                                                                  ▼
[7. KCS (QM.04) UD] ◄── [6. Trình V-office Lần 2] ◄── [5. MIGO: Sinh phiếu & Tồn] ◄── [4. Thủ kho kiểm tra]
```

| STT | Tên bước | Hệ thống / TCode | Tác nhân thực hiện | Chi tiết nghiệp vụ |
|---|---|---|---|---|
| **1** | **Khởi tạo Work Order & Sinh Reservation tự động** | SAP PM (Work Order) | NV kỹ thuật trạm / SAP (Auto) | NV kỹ thuật tạo Work Order bảo trì/hủy trạm/thu hồi sửa chữa. SAP **tự động tạo Yêu cầu thu hồi (Reservation)** tương ứng với Work Order. |
| **2** | **Trình ký Yêu cầu thu hồi (Lần 1)** | Z-program ➔ V-office | NV kỹ thuật trạm | Chọn Reservation thu hồi, đính kèm *Mẫu Phiếu yêu cầu nhập kho*, trình Đơn vị yêu cầu + Thủ trưởng đơn vị duyệt trên V-office. |
| **3** | **Phê duyệt Yêu cầu thu hồi** | V-office | Người phê duyệt (Thủ trưởng đơn vị) | Duyệt Yêu cầu thu hồi trên V-office. Trạng thái chứng từ tự động đồng bộ về SAP S/4 HANA (*Approved*). |
| **4** | **Kiểm tra thực tế tại kho & Phê duyệt nhập** | Z-program (SAP) | Thủ kho | Thủ kho kiểm tra vật tư từ trạm mang về kho đối chiếu với Reservation:<br>• *Nếu sai lệch:* Chọn **Từ chối nhập kho** (Đóng Reservation & Work Order).<br>• *Nếu đạt:* Xác nhận **Đồng ý nhập kho**. |
| **5** | **Sinh Phiếu nhập & Cập nhật tồn kho** | MIGO / Z-program | Thủ kho & SAP (Auto) | Thủ kho thực hiện nhập kho. SAP tự động:<br>1. Sinh **Phiếu nhập kho** (*Material Document*).<br>2. **Cập nhật tồn kho ngay lập tức** (TH1: giữ giá trị; TH2 & TH3: nhập Plant NV chỉ quản lý số lượng).<br>3. Tự động sinh Lô kiểm tra chất lượng (*Inspection Lot*). |
| **6** | **Trình ký Phiếu nhập kho (Lần 2) & Thông báo KCS** | Z-program ➔ V-office | Thủ kho | Thủ kho trình **Phiếu nhập kho** (*Material Document*) trên V-office cho **Thủ trưởng đơn vị + Kế toán + Thủ kho** ký chốt. Đồng thời tích chọn người nhận thông tin là **Nhân viên KCS**. |
| **7** | **Kiểm tra chất lượng KCS & Chuyển trạng thái** | Tham chiếu QM.04 | Nhân viên KCS | KCS nhận thông báo, thực hiện kiểm định chất lượng theo QM.04. Nhập Quyết định sử dụng (UD) để SAP **Chuyển trạng thái tồn kho** (Hàng tốt ➔ *UU*, Hàng hỏng ➔ *Blocked Stock/Kho thanh lý*). |
| **8** | **Điều chỉnh giá trị vật tư hủy trạm (Bước phụ)** | Z-program (SAP) | BP Tài chính | Sau khi đánh giá lại vật tư hủy trạm (TH2), BP Tài chính chạy Z-program thực hiện 2 giao dịch:<br>• Giao dịch 1: Xuất kho vật tư (giá trị = 0) từ Plant NV.<br>• Giao dịch 2: Nhập kho vật tư (giá trị mới > 0) vào Plant thông thường. |

---

## 3. TÍCH HỢP PHÂN HỆ VÀ ĐIỂM TÙY CHỈNH (CUSTOMIZATION)

- **Tích hợp PM × MM:** Work Order trên PM tự động sinh Reservation trên MM. Khi nhập kho thành công hoặc bị từ chối, Work Order tự động được cập nhật trạng thái đóng (*Closed*).
- **Tích hợp MM × QM:** Nhập kho tự động kích hoạt lô kiểm tra QM.04. Kết quả UD của KCS tự động kích hoạt giao dịch Chuyển trạng thái tồn kho (*Transfer Posting*).
- **Custom Enhancements:**
  - `CS.188 / CS.218`: Phê duyệt & từ chối Reservation trên SAP S/4.
  - `CS.219`: Chặn giao dịch kho đối với Reservation bị từ chối.

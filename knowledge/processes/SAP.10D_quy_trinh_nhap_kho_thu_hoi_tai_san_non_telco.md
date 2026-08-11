# MM.10D — Quy Trình Nhập Kho Thu Hồi Tài Sản Không Thuộc Nhóm Viễn Thông

> **Mã quy trình:** MM.10D  
> **Tên tiếng Anh:** Goods Return Non-Telco Asset Process  
> **Phân hệ chính:** Material Management (MM) × Asset Accounting (FI-AA)  
> **Tài liệu tham chiếu:** S406 Business Blueprint Inventory V1.0 (KPMG × Viettel)  
> **Trạng thái:** Baseline Document  

---

## 1. TỔNG QUAN VÀ PHẠM VI ÁP DỤNG

### 1.1 Mục đích & Phạm vi
- Quy trình mô tả các bước thực hiện trên hệ thống SAP S/4 HANA và V-office khi thực hiện thu hồi tài sản cố định / công cụ dụng cụ ngoài ngành viễn thông (ví dụ: Trang thiết bị văn phòng, Laptop, Máy in, Bàn ghế, Máy điều hòa, Xe cộ, Thiết bị phụ trợ...) về kho của đơn vị.
- Áp dụng cho Bộ phận Quản lý tài sản, Ban Tài chính Kế toán và Bộ phận Kho tại các đơn vị thuộc Tập đoàn Viettel.

### 1.2 Phân nhánh xử lý tài sản ngoài viễn thông

Đánh giá chất lượng tài sản được thực hiện **TRƯỚC KHI LẬP YÊU CẦU NHẬP KHO VẬT TƯ**:

```
                          [Tài sản ngoài viễn thông thu hồi]
                                          │
    ┌─────────────────────────────────────┼─────────────────────────────────────┐
    ▼                                     ▼                                     ▼
[1. Hàng hỏng SỬA ĐƯỢC]      [2. Hàng hỏng KHÔNG sửa được]            [3. Phân rã theo "Quyết định
    │                           (Chưa có QĐ loại biên chế)               loại khỏi biên chế"]
    ▼                                     ▼                                     │
Chuyển quy trình FI.53.01     Chuyển vị trí tài sản (Location)                  ├──► TH 2A: Giá trị = 0 ➔ Nhập kho NV Plant (Không giá trị)
(Sửa chữa tài sản)            sang "Tài sản thu hồi" (FI.54.01)                 └──► TH 2B: Giá trị > 0 ➔ Nhập kho Valuated Plant (Có hạch toán)
(KHÔNG nhập kho vật tư)       (KHÔNG nhập kho vật tư)
```

---

## 2. QUY TRÌNH THỰC HIỆN CHI TIẾT (BUSINESS PROCESS STEPS)

```
[1. Đánh giá & Tách Reservation] ──► [2. Trình V-office Lần 1] ──► [3. V-office Duyệt]
                                                                          │
                                                                          ▼
[7. Ghi giảm TS (FI-AA)] ◄── [6. Trình V-office Lần 2] ◄── [5. MIGO: Sinh phiếu & Tồn] ◄── [4. Thủ kho kiểm tra]
```

| STT | Tên bước | Hệ thống / TCode | Tác nhân thực hiện | Chi tiết nghiệp vụ chuẩn Blueprint |
|---|---|---|---|---|
| **1** | **Đánh giá tài sản & Tạo Yêu cầu Thu hồi (Reservation)** | Z-program (SAP) | BP Quản lý tài sản & Hội đồng | **BP Quản lý tài sản & Hội đồng đánh giá chất lượng tài sản TRƯỚC:**<br>• *Sửa được:* Chuyển luồng FI.53.01 (Không nhập kho vật tư).<br>• *Không sửa được (Chưa loại biên chế):* Chuyển Location trên FI.54.01.<br>• *Phân rã (Có QĐ loại biên chế):* Hệ thống tự động tách phiếu và tạo **Reservation** nhập vào **Plant NV (Không giá trị)** hoặc **Plant hạch toán (Có giá trị)** tùy kết quả đánh giá. |
| **2** | **Trình ký Phiếu Yêu cầu Thu hồi (Lần 1)** | Z-program ➔ V-office | BP Quản lý tài sản | Chọn Reservation, đính kèm *Quyết định loại khỏi biên chế* & *Biên bản đánh giá*, trình **Thủ trưởng đơn vị + Kế toán** duyệt trên V-office. |
| **3** | **Phê duyệt Phiếu Yêu cầu Thu hồi** | V-office | Người phê duyệt | Phê duyệt trên V-office. Trạng thái tự động đồng bộ về SAP S/4 (*Status = Approved*). |
| **4** | **Kiểm tra thực tế tại kho & Phê duyệt nhập** | Z-program (SAP) | Thủ kho | Thủ kho đối chiếu tài sản bàn giao thực tế với Reservation.<br>• *Nếu không khớp:* Bấm **Từ chối nhập kho** (Đóng Reservation).<br>• *Nếu khớp:* Xác nhận **Đồng ý nhập kho**. |
| **5** | **Sinh Phiếu nhập & Cập nhật tồn kho tự động** | MIGO / Z-program | Thủ kho & SAP (Auto) | Thủ kho bấm thực hiện nhập kho. SAP tự động:<br>1. Sinh **Phiếu nhập kho** (*Material Document*).<br>2. **Cập nhật tồn kho ngay lập tức** vào Plant tương ứng (NV Plant hoặc Valuated Plant). |
| **6** | **Trình ký Phiếu nhập kho (Lần 2)** | Z-program ➔ V-office | Thủ kho | Thủ kho trình **Phiếu nhập kho** (*Material Document*) lên V-office cho **Thủ trưởng + Kế toán + Thủ kho** ký chốt chứng từ. *(KHÔNG gửi KCS)*. |
| **7** | **Ghi giảm Tài sản cố định (Asset Write-off)** | Phân hệ FI-AA | Ban Tài chính | Dựa trên Phiếu nhập kho đã ký duyệt V-office, Kế toán tài sản hạch toán ghi giảm giá trị Tài sản cố định tương ứng trên sổ sách (FI-AA). |

---

## 3. NGUYÊN TẮC KHÁC BIỆT NỔI BẬT CỦA MM.10D

1. **Không qua phân hệ KCS (QM.04) sau nhập kho:** Việc đánh giá chất lượng tài sản văn phòng đã hoàn tất ở Bước 1 trước khi tạo Reservation. Do đó sau khi MIGO nhập kho, SAP **không sinh lô KCS** và **không gửi QM.04**.
2. **Tự động tách Reservation theo Plant:** Logic màn hình Bước 1 bắt buộc gom nhóm theo bản chất đánh giá (Giá trị = 0 ➔ Plant NV; Giá trị > 0 ➔ Valuated Plant) để tách thành các Mã Reservation riêng biệt.
3. **Tích hợp Kế toán Tài sản (FI-AA):** Sau khi hoàn tất nhập kho ở phân hệ MM, chứng từ nhập kho được làm căn cứ để hạch toán giảm tài sản cố định trên sổ sách FI-AA.

# MM.10B — Quy Trình Nhập Kho Thu Hồi Từ Công Trình (PS)

> **Mã quy trình:** MM.10B  
> **Tên tiếng Anh:** Return from Construction Site Process (PS)  
> **Phân hệ chính:** Material Management (MM) × Project System (PS)  
> **Tài liệu tham chiếu:** S406 Business Blueprint Inventory V1.0 (KPMG × Viettel)  
> **Trạng thái:** Baseline Document  

---

## 1. TỔNG QUAN VÀ PHẠM VI ÁP DỤNG

### 1.1 Mục đích & Phạm vi
- Quy trình mô tả các bước thực hiện trên hệ thống SAP S/4 HANA và V-office khi thực hiện nhập kho vật tư, thiết bị dư thừa thu hồi từ các công trình xây dựng, dự án (Project System - PS) về kho của đơn vị.
- Áp dụng cho toàn bộ các đơn vị thuộc Tập đoàn Viettel có hoạt động đầu tư, xây dựng công trình viễn thông/hạ tầng.

### 1.2 Các điểm chính (Key Points)
1. **Tham chiếu chứng từ gốc:** Yêu cầu thu hồi dựa trên thông tin Mã công trình / Hạng mục dự án (WBS Element).
2. **Quản lý giá trị tồn kho:** Vật tư thu hồi từ công trình được nhập về kho với **nguyên giá trị đã xuất** ban đầu cho công trình.
3. **Mã giao dịch kho (Movement Type):** Sử dụng Movement Type **122** (Return to stock from construction site).
4. **Hạch toán kế toán:** Không phát sinh chứng từ hạch toán kế toán mới nếu thu hồi nội bộ dự án về kho cùng đơn vị; tự động kết chuyển giảm chi phí dỡ dang công trình (AuC/WBS).
5. **Cổng phê duyệt V-office:** Phải đi qua 2 lần phê duyệt trên V-office (Lần 1: Yêu cầu thu hồi; Lần 2: Chứng từ nhập kho).

---

## 2. QUY TRÌNH THỰC HIỆN CHI TIẾT (BUSINESS PROCESS STEPS)

```
[1. Lập Reservation (PS)] ──► [2. Trình V-office Lần 1] ──► [3. V-office Phê duyệt]
                                                                     │
                                                                     ▼
[6. Trình V-office Lần 2] ◄── [5. MIGO: Sinh phiếu & Cập nhật tồn] ◄── [4. Thủ kho kiểm tra thực tế]
            │
            ▼
[7. Kiểm tra KCS (QM.04)]
```

| STT | Tên bước | Hệ thống / TCode | Tác nhân thực hiện | Chi tiết nghiệp vụ |
|---|---|---|---|---|
| **1** | **Tạo Yêu cầu thu hồi (Reservation)** | SAP S/4 (Z-program / TBU) | Ban QLDA / Giám sát công trình / Đội thi công | Dựa trên thực tế vật tư dư thừa tại công trình (WBS Element), người dùng tạo **Yêu cầu thu hồi vật tư (Reservation)** tham chiếu đến Dự án/Công trình (PS). |
| **2** | **Trình ký Yêu cầu thu hồi (Lần 1)** | Z-program ➔ V-office | Ban QLDA / Đội thi công | Chọn Reservation thu hồi, đính kèm *Mẫu Phiếu yêu cầu nhập kho thu hồi công trình*, trình Trưởng Ban QLDA / Thủ trưởng đơn vị đề xuất duyệt trên V-office. |
| **3** | **Phê duyệt Yêu cầu thu hồi** | V-office | Người phê duyệt (Trưởng Ban QLDA / Thủ trưởng) | Duyệt Yêu cầu thu hồi trên V-office. Trạng thái chứng từ được tự động đồng bộ về hệ thống SAP S/4 HANA (*Approved*). |
| **4** | **Kiểm tra thực tế tại kho & Phê duyệt nhập** | Z-program (SAP) | Thủ kho | Vật tư từ công trình được vận chuyển về kho. Thủ kho kiểm tra thực tế chủng loại, số lượng.<br>• *Nếu sai lệch/không đạt:* Chọn **Từ chối nhập kho** (ghi lý do ➔ Hủy Reservation).<br>• *Nếu đạt:* Xác nhận **Đồng ý nhập kho**. |
| **5** | **Sinh Phiếu nhập & Cập nhật tồn kho** | MIGO (Movement Type 122) | Thủ kho & SAP (Auto) | Thủ kho bấm thực hiện nhập kho thu hồi. SAP tự động:<br>1. Sinh **Phiếu nhập kho** (*Material Document* - Mvt 122).<br>2. **Cập nhật tồn kho ngay lập tức** (Vật tư nhập về nguyên giá trị ban đầu). |
| **6** | **Trình ký Phiếu nhập kho (Lần 2) & Gửi KCS** | Z-program ➔ V-office | Thủ kho | Thủ kho tạo yêu cầu trình ký **Phiếu nhập kho** (*Material Document*) trên V-office cho **Thủ trưởng đơn vị + Kế toán + Thủ kho** ký chốt. Đồng thời tích chọn người nhận thông tin là **Nhân viên KCS**. |
| **7** | **Kiểm tra chất lượng KCS** | Tham chiếu QM.04 | Nhân viên KCS | KCS nhận thông báo, thực hiện kiểm định chất lượng vật tư thu hồi theo quy trình **QM.04**. Nhập Quyết định sử dụng (UD) để SAP thực hiện **Chuyển trạng thái tồn kho** (Hàng dùng được ➔ *UU*, Hàng hỏng ➔ *Blocked Stock/Kho thanh lý*). |

---

## 3. XỬ LÝ CÁC LUỒNG NGOẠI LỆ (ALTERNATIVE FLOWS)

### 3.1 Bị từ chối tại V-office (Bước 3)
- **Từ chối do sai người duyệt / thiếu file đính kèm:** Chỉnh sửa thông tin trình ký và thực hiện Trình ký lại ở Bước 2.
- **Từ chối do sai thông tin nghiệp vụ / hủy yêu cầu:** Hủy Reservation trên SAP S/4.

### 3.2 Thủ kho từ chối nhập kho (Bước 4)
- Thủ kho sử dụng màn hình Z-program chọn đánh dấu từ chối phiếu yêu cầu (*Reject Indicator*).
- Reservation bị từ chối sẽ bị khóa, không cho phép tham chiếu để thực hiện nhập kho nữa.

---

## 4. TÍCH HỢP PHÂN HỆ VÀ ĐIỂM TÙY CHỈNH (CUSTOMIZATION)

- **Tích hợp KCS (QM.04):** Sau khi nhập kho (Bước 5), SAP tự động sinh Lô kiểm tra chất lượng (*Inspection Lot*) gửi cho bộ phận KCS.
- **Điểm tùy chỉnh SAP (Custom Enhancement):**
  - `CS.218`: Chức năng phê duyệt / từ chối Reservation trên hệ thống SAP S/4.
  - `CS.219`: Enhancement chặn các giao dịch kho tham chiếu đến Reservation đã bị đánh dấu từ chối.

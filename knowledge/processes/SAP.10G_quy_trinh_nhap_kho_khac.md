# MM.10G — Quy Trình Nhập Kho Khác (Other Goods Receipt Process)

> **Mã quy trình:** MM.10G  
> **Tên tiếng Anh:** Other Goods Receipt Process  
> **Phân hệ chính:** Material Management (MM)  
> **Tài liệu tham chiếu:** S406 Business Blueprint Inventory V1.0 (KPMG × Viettel)  
> **Trạng thái:** Baseline Document  

---

## 1. TỔNG QUAN VÀ PHẠM VI ÁP DỤNG

### 1.1 Mục đích & Phạm vi
- Quy trình mô tả các bước thực hiện trên hệ thống SAP S/4 HANA và V-office khi thực hiện nhập kho vật tư, thiết bị phát sinh ngoài các hợp đồng mua sắm (PO) hay các quy trình thu hồi công trình/trạm thông thường.
- Áp dụng cho toàn bộ các đơn vị thuộc Tập đoàn Viettel có phát sinh các nghiệp vụ mượn hàng nhà cung cấp hoặc nhận vật tư đền bù, thay thế.

### 1.2 Phân loại các trường hợp Nhập kho khác

| Trường hợp | Movement Type SAP | Bản chất Hạch toán Kế toán | Chi tiết nghiệp vụ |
|---|---|---|---|
| **1. Nhập kho đi mượn từ NCC** | **`Z10`** | ❌ **Không phát sinh hạch toán** (No Accounting Document) | Nhà cung cấp cho mượn vật tư/thiết bị để sử dụng tạm thời. Sau này đơn vị sẽ trả lại nguyên trạng cho NCC. Tồn kho chỉ quản lý **Số lượng**. |
| **2. Nhập kho đền bù / thay thế** | **`Z08`** | ✅ **Có phát sinh hạch toán** (Accounting Document) | Xử lý các sự cố mất mát, hư hỏng vật tư được NCC hoặc bên thứ ba đền bù bằng vật tư/thiết bị mới tương đương. Định khoản tài khoản theo OBYC. |
| **3. Nhập kho tài trợ / biếu tặng khác** | **`501` / `561`** | ✅ **Tùy nghiệp vụ** | Nhập kho các vật tư nhận bàn giao, tài trợ không qua hợp đồng mua sắm. |

---

## 2. QUY TRÌNH THỰC HIỆN CHI TIẾT (BUSINESS PROCESS STEPS)

```
[1. Tạo Tờ trình nhập kho (Non-SAP)] ──► [2. Ban hành Tờ trình V-office] ──► [3. Auto Sync về SAP]
                                                                                      │
                                                                                      ▼
[6. V-office Duyệt Phiếu nhập kho] ◄── [5. MIGO: Sinh phiếu & Tồn] ◄── [4. MB21: Lập Reservation (Z10/Z08)]
```

| STT | Tên bước | Hệ thống / TCode | Tác nhân thực hiện | Chi tiết nghiệp vụ chuẩn Blueprint |
|---|---|---|---|---|
| **1** | **Tạo & Phê duyệt Tờ trình Nhập kho khác** | Non-SAP ➔ V-office | Đơn vị yêu cầu | Đơn vị có nhu cầu (mượn hàng / nhận đền bù) lập **Tờ trình nhập kho khác** ngoài hệ thống SAP và trình ký phê duyệt ban hành trên V-office. |
| **Auto** | **Tự động đồng bộ Tờ trình về SAP** | Interface (Auto) | Hệ thống (Auto) | Khi Tờ trình được ban hành trên V-office, hệ thống **tự động đồng bộ các thông tin về SAP**: *Số văn bản, Tên văn bản, Ngày ban hành*. |
| **2** | **Tạo Yêu cầu Nhập kho khác (Reservation)** | SAP (`MB21`) | Đơn vị yêu cầu | Dựa trên Tờ trình đã đồng bộ, người dùng vào SAP `MB21` lập **Reservation**: chọn Movement Type tương ứng (**`Z10`** cho hàng mượn, **`Z08`** cho hàng đền bù) và nhập số Tờ trình tham chiếu. |
| **3** | **Kiểm tra thực tế tại kho & Đồng ý / Từ chối** | SAP (`MB22` / Z-program) | Thủ kho | Vật tư/thiết bị được giao đến kho. Thủ kho kiểm tra thực tế đối chiếu với Reservation:<br>• *Nếu sai sót/không nhận:* Thủ kho dùng `MB22` chọn **Từ chối (Delete All Items)** kèm lý do.<br>• *Nếu đạt:* Xác nhận **Chấp nhận nhập kho**. |
| **4** | **Thực hiện Giao dịch Nhập kho (Goods Receipt)** | SAP (`MIGO` / Z-program) | Thủ kho & SAP (Auto) | Thủ kho hạch toán nhập kho trên SAP. System tự động:<br>• **Trường hợp Z10 (Mượn hàng):** Sinh *Material Document* (chỉ có số lượng), **KHÔNG sinh Accounting Document**.<br>• **Trường hợp Z08 (Đền bù):** Sinh *Material Document* + **Tự động sinh Accounting Document** hạch toán giá trị. |
| **5** | **Trình ký Phiếu nhập kho (Lần 2)** | Z-program ➔ V-office | Thủ kho | Thủ kho tạo yêu cầu trình **Phiếu nhập kho** (*Material Document*) lên V-office cho **Thủ trưởng đơn vị + Phụ trách Tài chính + Thủ kho** ký chốt chứng từ. |
| **6** | **Phê duyệt chứng từ trên V-office** | V-office | Người phê duyệt | Người phê duyệt ký chốt trên V-office. Trạng thái phê duyệt tự động đồng bộ về SAP S/4 HANA (*Status = Released*). |

---

## 3. NGUYÊN TẮC KHÁC BIỆT NỔI BẬT CỦA MM.10G

1. **Khởi tạo bằng Tờ trình V-office:** Không căn cứ vào PO hay Work Order, quy trình bắt đầu từ Tờ trình ngoài SAP và tự động sync Số văn bản sang SAP.
2. **Phân biệt rạch ròi mượn hàng (`Z10`) và đền bù (`Z08`):** Hàng mượn `Z10` tuyệt đối không sinh hạch toán tài chính; Hàng đền bù `Z08` sinh hạch toán ghi tăng tồn kho và tài khoản đối ứng tương ứng.

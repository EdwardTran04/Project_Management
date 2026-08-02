# TÀI LIỆU QUY TRÌNH CHI TIẾT: HỆ THỐNG QUẢN LÝ HỢP ĐỒNG THUÊ HẠ TẦNG (ILMS)

**Người thực hiện:** Mary (Senior BA)
**Ngày lập:** 22/05/2026
**Phiên bản:** 1.0

---

## 1. GIỚI THIỆU

### 1.1 Mục đích tài liệu
Tài liệu này mô tả chi tiết các quy trình nghiệp vụ, luồng xử lý dữ liệu và các quy tắc ràng buộc của Hệ thống Quản lý Hợp đồng Thuê Hạ tầng (ILMS). Tài liệu phục vụ làm căn cứ để đội ngũ kỹ thuật thiết kế Database, lập trình chức năng và làm cơ sở để kiểm thử (UAT).

### 1.2 Phạm vi tài liệu
*   **Thuộc phạm vi:** Quy trình CRUD hợp đồng, tự động tính toán tài chính/thời hạn, cơ chế cảnh báo 30 ngày, phân quyền xem/sửa theo Ownership.
*   **Ngoài phạm vi:** Quy trình phê duyệt hợp đồng online (Work-flow ký số), tích toán kế toán chuyên sâu (ERP), quản lý bảo trì bảo dưỡng trạm.

### 1.3 Định nghĩa thuật ngữ và các từ viết tắt
| Thuật ngữ | Giải thích |
| :--- | :--- |
| **BTS** | Base Transceiver Station - Trạm thu phát sóng di động. |
| **ILMS** | Infrastructure Lease Management System - Hệ thống quản lý thuê hạ tầng. |
| **VAT** | Value Added Tax - Thuế giá trị gia tăng. |
| **Soft Delete** | Xóa mềm - Đánh dấu dữ liệu đã xóa nhưng vẫn lưu trong DB. |
| **Ownership** | Quyền sở hữu - Quy tắc người tạo mới có quyền chỉnh sửa. |

### 1.4 Tài liệu tham khảo
*   Biên bản khảo sát (MOM) - Phòng Kinh doanh Hạ tầng.
*   Project Overview: ILMS (v1.0).

---

## 2. TỔNG QUAN VỀ HỆ THỐNG

### 2.1 Phát biểu bài toán
**2.1.1 Tổng quan bài toán:** Việc quản lý hơn hàng ngàn hợp đồng thuê vị trí đặt trạm BTS bằng Excel đang gây ra sự trì trệ trong vận hành.
**2.1.2 Hiện trạng:** Chuyên viên nhập tay vào file Excel chung, dữ liệu ngày tháng không nhất quán (DD/MM vs MM/DD), khó khăn trong việc lọc ra các hợp đồng sắp hết hạn.
**2.1.3 Hiện trạng hạ tầng dữ liệu:** Dữ liệu rời rạc, file scan hợp đồng lưu ở ổ đĩa cá nhân, không có tính bảo mật và tập trung.

### 2.2 Mục tiêu hệ thống
*   Tập trung hóa dữ liệu hợp đồng và file scan.
*   Tự động hóa hoàn toàn việc theo dõi thời hạn.
*   Kiểm soát quyền truy cập chặt chẽ.

### 2.3 Phạm vi hệ thống
**2.3.1 Danh sách nhóm người sử dụng:**
*   **Chuyên viên (CV):** ~50 người. Nhập liệu và quản lý địa bàn được giao.
*   **Lãnh đạo (LD):** ~05 người. Giám sát tổng thể, xem báo cáo biến động giá và rủi ro hết hạn.

**2.3.2 Mô hình tổng thể:**
Hệ thống là một ứng dụng Web Portal, giao tiếp với cơ sở dữ liệu SQL tập trung và kho lưu trữ File (Storage) cho các bản scan PDF.

---

## 3. QUY TRÌNH NGHIỆP VỤ CHI TIẾT

### 3.1 Quy trình Quản lý Hợp đồng (Thêm mới/Cập nhật)
**Mục đích:** Đảm bảo mọi hợp đồng thuê mới hoặc điều chỉnh đều được ghi nhận chính xác vào hệ thống.
**Tác nhân:** Chuyên viên Kinh doanh Hạ tầng.

**Các bước thực hiện:**
1.  **Khởi tạo:** CV chọn chức năng "Thêm mới hợp đồng".
2.  **Nhập liệu:** CV nhập các thông tin bắt buộc (Số HD, Đối tác, Ngày ký, Thời hạn, Giá thuê...).
3.  **Tải lên hồ sơ:** CV đính kèm file scan PDF của hợp đồng gốc.
4.  **Kiểm tra tính hợp lệ:**
    *   Hệ thống kiểm tra trùng lặp Số hợp đồng.
    *   Kiểm tra định dạng SĐT và các trường số.
5.  **Tự động xử lý:** Hệ thống tính toán Ngày hết hạn và Tổng tiền.
6.  **Lưu trữ:** Dữ liệu được ghi vào DB với trạng thái "Đang hiệu lực".

### 3.2 Quy trình Kiểm soát và Cảnh báo thời hạn
**Mục đích:** Ngăn ngừa việc hợp đồng bị quá hạn mà không được gia hạn kịp thời.
**Tác nhân:** Hệ thống (Tự động).

**Sơ đồ logic (BPMN mô phỏng):**
1.  **[Start]** 00:00 hàng ngày, Batch Job của hệ thống được kích hoạt.
2.  **Quét dữ liệu:** Lấy danh sách hợp đồng có trạng thái "Đang hiệu lực".
3.  **So sánh:** Tính toán `Số ngày còn lại = Ngày hết hạn - Ngày hiện tại`.
4.  **Điều kiện:**
    *   Nếu `Số ngày còn lại <= 30`: Chuyển trạng thái sang "Sắp hết hạn".
    *   Nếu `Số ngày còn lại < 0`: Chuyển trạng thái sang "Quá hạn/Cần xử lý".
5.  **Đánh dấu UI:** Highlight các dòng dữ liệu này bằng màu đỏ trên Dashboard của CV phụ trách.

### 3.3 Quy trình Tra cứu và Báo cáo
**Mục đích:** Giúp Lãnh đạo và Chuyên viên tìm kiếm nhanh thông tin hạ tầng.
**Tác nhân:** CV, LD.

**Bộ lọc tìm kiếm:**
*   Theo đơn vị hành chính (Tỉnh/Thành phố, Quận/Huyện).
*   Theo trạng thái (Đang hiệu lực, Sắp hết hạn, Đã thanh lý).
*   Theo loại hạ tầng (Cột, Phòng máy).

---

## 4. DANH MỤC THÔNG TIN DỮ LIỆU (DATA DICTIONARY)

| STT | Trường thông tin | Kiểu dữ liệu | Ràng buộc | Ghi chú |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Số hợp đồng | String | Unique, Required | Mã định danh duy nhất. |
| 2 | Tên đối tác | String | Required | |
| 3 | Số điện thoại | String | Required | Định dạng số. |
| 4 | Địa chỉ lắp đặt | String | Required | |
| 5 | Tỉnh/Thành phố | Dropdown | Required | Danh mục chuẩn. |
| 6 | Quận/Huyện | Dropdown | Required | Theo Tỉnh/Thành phố. |
| 7 | Loại hạ tầng | Checkbox/List | Required | Cột, Phòng máy... |
| 8 | Ngày ký kết | Date | Required | |
| 9 | Thời hạn thuê | Integer | Required | Đơn vị: Tháng. |
| 10 | Ngày hết hạn | Date | Auto-calc | `Ngày ký + Thời hạn`. |
| 11 | Giá thuê tháng | Decimal | Required | Chưa thuế. |
| 12 | Thuế suất (VAT) | Dropdown | Required | 8% hoặc 10%. |
| 13 | Tổng tiền | Decimal | Auto-calc | `Giá thuê * (1 + Thuế)`. |
| 14 | Trạng thái | Enum | System set | Hiệu lực/Sắp hết/Thanh lý. |
| 15 | File đính kèm | File (PDF) | Required | Max 10MB. |

---

## 5. CÁC QUY TẮC NGHIỆP VỤ (BUSINESS RULES)

*   **BR_ACC_01:** Phân quyền theo cấp bậc. LD xem toàn bộ, CV chỉ xem/sửa bản ghi do mình tạo.
*   **BR_VAL_01:** Ngày ký kết không được lớn hơn ngày hiện tại.
*   **BR_VAL_02:** Thời hạn thuê phải lớn hơn 0.
*   **BR_SYS_01:** Khi cập nhật giá thuê, hệ thống phải tự động tính lại Tổng tiền ngay lập tức.
*   **BR_DEL_01:** Không cho phép xóa vật lý (Hard delete) đối với các hợp đồng đã có dữ liệu tài chính liên quan.

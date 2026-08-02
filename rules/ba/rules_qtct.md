# QUY TẮC PHÂN TÍCH VÀ THIẾT KẾ QUY TRÌNH CHI TIẾT
---

## TỔNG QUAN ÁP DỤNG

Tài liệu áp dụng cho các dự án thuộc nội bộ cung ty

---

## NGUYÊN TẮC CỐ ĐỊNH

- Không dùng các từ ngữ mơ hồ như "có thể", "nếu cần", "tùy trường hợp".
- Không được bỏ bất kỳ đầu mục nào trong cấu trúc dưới đây. Không được tự thêm hoặc xoá đầu mục.
- Tuyệt đối không sai lỗi chính tả. Dùng từ đơn giản, chuyên nghiệp.
- Ngôn ngữ: Tiếng Việt, Font Unicode, định dạng ngày tháng `dd/mm/yyyy`.

---

## CẤU TRÚC TÀI LIỆU

### 1. GIỚI THIỆU

**1.1. Mục đích**
Phải nêu rõ tài liệu dùng để đặc tả yêu cầu quy trình của phân hệ/chức năng nào, làm căn cứ cho thiết kế CSDL, lập trình và kiểm thử. Nêu rõ đối tượng đọc tài liệu (BA, Dev, Tester, khách hàng nghiệm thu).

**1.2. Phạm vi**
Xác định rõ ranh giới của phân hệ: bao gồm những chức năng gì, không bao gồm những gì. Chức năng nào thuộc Cổng dùng chung hoặc hệ thống ngoài phải tách biệt, không đưa vào tài liệu này.

**1.3. Khái niệm và thuật ngữ**
Liệt kê 100% các từ viết tắt và thuật ngữ chuyên ngành xuất hiện trong tài liệu. Bảng 3 cột: Thuật ngữ / Viết tắt | Định nghĩa | Ghi chú.

**1.4. Tài liệu tham khảo**
Dẫn chiếu văn bản quy phạm pháp luật liên quan (tên văn bản, số/ký hiệu, ngày ban hành) và link Figma của thiết kế giao diện. Bảng 4 cột: Tên tài liệu | Số/Ký hiệu | Ngày ban hành | Nguồn / Link.

**1.5. Mô tả tài liệu**
Tóm tắt nội dung từng chương để định hướng người đọc. Liệt kê đủ 6 chương.

---

### 2. TỔNG QUAN GIẢI PHÁP

**2.1. Tổng quan chức năng**
Vẽ sơ đồ khối nhóm chức năng của phân hệ. Thể hiện các nhóm chức năng chính và quan hệ phân cấp giữa các nhóm.

**2.2. Mô hình giao tiếp hệ thống**
Mô tả các điểm kết nối với hệ thống ngoài (Cổng dùng chung, Lakehouse...). Phải thể hiện rõ luồng dữ liệu vào/ra giữa các hệ thống. Bảng 5 cột: STT | Hệ thống kết nối | Loại kết nối (API/DB link/...) | Dữ liệu trao đổi | Mục đích.

Phải mô tả rõ mục đích trao đổi dữ liệu là gì — không được chỉ ghi tên hệ thống mà không giải thích lý do kết nối.

---

### 3. THIẾT KẾ CHI TIẾT

Đây là mục trọng tâm. Mỗi chức năng (Xem, Tìm kiếm, Thêm, Sửa, Xóa, Import, Export) phải có đủ 4 mục con theo cấu trúc 3.1.x dưới đây.

**Quy tắc bóc tách chức năng:**
- Không gộp nhiều loại chức năng vào một mục.
- Không đưa chức năng của Cổng dùng chung vào đây.
- Mô hình phân rã chỉ vẽ đến mức Use Case chính — không vẽ CRUD.

---

**3.1.x. [Tên chức năng]**

*3.1.x.1. Thông tin chung*

Bảng thông tin chức năng:

| Tên chức năng | [Tên – kèm mã tham chiếu] |
|--------------|--------------------------|
| Đường dẫn | [URL hoặc path màn hình trong hệ thống] |
| Phân quyền | [Danh sách vai trò được phép thực hiện] |
| Miền dữ liệu | [Quy tắc: User thuộc đơn vị nào thì thấy/thao tác dữ liệu đơn vị đó — mô tả rõ logic phân miền] |
| Mô tả | [Mục đích và phạm vi của chức năng] |

Miền dữ liệu phải làm rõ logic phân miền cụ thể — không được để trống hoặc ghi chung chung.

*3.1.x.2. Màn hình*
- Link Figma trỏ trực tiếp đến frame/screen tương ứng.
- Ảnh chụp giao diện (hoặc mô tả layout nếu chưa có Figma).

*3.1.x.3. Mô tả chi tiết thành phần màn hình*

Bảng Mapping 5 cột: STT | Tên trường / Thành phần | Kiểu dữ liệu | Quy tắc Validate | Mapping DB (Bảng.Cột).

Validate phải cực kỳ chi tiết, bao gồm:
- Số điện thoại: định dạng, độ dài, đầu số hợp lệ.
- CCCD/CMND: độ dài ký tự, chỉ chứa số, checksum nếu có.
- Ngày tháng: định dạng `dd/mm/yyyy`, ràng buộc logic (ngày kết thúc ≥ ngày bắt đầu...).
- Định dạng file upload: danh sách extension cho phép, dung lượng tối đa (MB).
- Trường bắt buộc: ghi rõ "Bắt buộc nhập / không được để trống".
- Trường số: giá trị min/max, cho phép số âm hay không.
- Trường text: độ dài tối đa (số ký tự), cho phép ký tự đặc biệt hay không.
- Dropdown/Combobox: nguồn dữ liệu danh mục lấy từ bảng nào.

*3.1.x.4. Luồng nghiệp vụ*

a) Activity Diagram (Mermaid code): Vẽ bằng `flowchart TD` hoặc `stateDiagram-v2`.

b) Mô tả các bước nghiệp vụ — Bảng 4 cột: Bước | Tác nhân | Hành động | Kết quả / Phản ứng hệ thống. Phải mô tả đủ luồng chính và luồng ngoại lệ (lỗi validate, hết quyền, dữ liệu trùng...).

---

### 4. THIẾT KẾ DÙNG CHUNG VÀ TÁI SỬ DỤNG

Liệt kê tất cả component dùng chung trong phân hệ. Bảng 4 cột: STT | Tên component | Mô tả chức năng | Danh sách màn hình sử dụng.

Nếu một thành phần xuất hiện từ 2 màn hình trở lên, phải đưa vào danh sách này để tránh đặc tả trùng lặp.

---

### 5. TUÂN THỦ TIÊU CHUẨN QUẢN TRỊ DỮ LIỆU

**5.1. An toàn thông tin (ATTT)**
Liệt kê các yêu cầu bảo mật áp dụng cho phân hệ: phân quyền truy cập, mã hóa dữ liệu nhạy cảm, kiểm soát phiên đăng nhập, các tiêu chuẩn ATTT áp dụng.

**5.2. Chuẩn hóa đặt tên**
Quy ước đặt tên áp dụng trong toàn bộ phân hệ. Bảng 3 cột: Đối tượng | Quy tắc đặt tên | Ví dụ. Bao gồm: tên bảng DB, tên cột DB, tên API endpoint, tên biến code.

**5.3. Log vết hệ thống**
Phân loại log theo 3 mức. Bảng 3 cột: Mức (Cao / Trung bình / Thấp) | Hành động cần log | Thông tin ghi nhận.

- Cao: Tạo/Sửa/Xóa dữ liệu trọng yếu, Phê duyệt, Ký số.
- Trung bình: Đăng nhập/Đăng xuất, Xuất báo cáo, Import dữ liệu.
- Thấp: Xem danh sách, Tìm kiếm.

Phải nêu rõ: thời gian lưu log và format log.

---

### 6. PHỤ LỤC

Bảng 4 cột: STT | Tên tài liệu đính kèm | Mô tả | Link / Đường dẫn.

Bao gồm tối thiểu: file Excel mô tả CSDL, danh mục biểu mẫu, danh mục báo cáo, link Figma tổng thể.

---

## CHECKLIST BA CẦN TUÂN THỦ

1. **Tính logic:** Kiểm tra sự khớp nhau giữa Quy trình → Usecase → Danh sách chức năng.
2. **Bóc tách chức năng:** Không đưa chức năng của Cổng dùng chung vào tài liệu nghiệp vụ riêng.
3. **Mô hình phân rã:** Chỉ vẽ đến mức Use Case chính, không vẽ CRUD.
4. **Kết nối dữ liệu:** Phải mô tả rõ mục đích trao đổi dữ liệu là gì.
5. **Chính tả & ngôn ngữ:** Tuyệt đối không sai lỗi chính tả, dùng từ đơn giản, chuyên nghiệp.
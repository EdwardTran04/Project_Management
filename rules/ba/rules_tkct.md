# QUY TẮC THIẾT KẾ CHI TIẾT (TKCT)

---

## NGUYÊN TẮC CỐ ĐỊNH

- Không dùng từ ngữ mơ hồ: "có thể", "nếu cần", "tùy trường hợp".
- Không bỏ bất kỳ đầu mục nào trong cấu trúc 6 phần. Không tự thêm hoặc xoá đầu mục.
- Tuyệt đối không sai lỗi chính tả. Ngôn ngữ đơn giản, chuyên nghiệp.
- Ngôn ngữ: Tiếng Việt, Font Unicode, định dạng ngày `dd/mm/yyyy`.
- Mọi trường thông tin trong bảng mô tả phải có đủ 6 cột. Không để ô trống.
- Mô tả các trường theo tuần tự: từ trái sang phải, từ trên xuống dưới.

---

## CẤU TRÚC TÀI LIỆU

### 1. GIỚI THIỆU

**1.1. Mục đích**

Nêu rõ:
- Tài liệu đặc tả quy trình gì, thuộc phân hệ nào, hệ thống nào.
- Dùng làm đầu vào cho giai đoạn nào (thiết kế, lập trình, kiểm thử).
- Tài liệu cung cấp những thông tin gì: tổng quan nghiệp vụ, thành phần màn hình, luồng dữ liệu, xử lý sự kiện, trao đổi thông tin với phân hệ khác.
- Đối tượng sử dụng tài liệu — bảng 2 cột: Người sử dụng | Mục đích. Bao gồm tối thiểu: Nhóm phát triển hệ thống, Nhóm kiểm thử, Nhóm quản lý dự án.

**1.2. Phạm vi**

Nêu rõ:
- Tài liệu mô tả thiết kế chi tiết phân hệ/quy trình nào, thuộc hệ thống nào, cho đơn vị nào.
- Tài liệu là cơ sở cho các tài liệu nào (kiểm tra chức năng, kịch bản kiểm tra).
- Mỗi yêu cầu thay đổi trong tài liệu này ảnh hưởng đến kết quả phân tích, thiết kế, lập trình và các kịch bản kiểm tra liên quan.
- Tài liệu đồng thời ghi nhận các điều kiện kiểm tra chương trình.

**1.3. Khái niệm và thuật ngữ**

Liệt kê đầy đủ 100% từ viết tắt và thuật ngữ chuyên ngành xuất hiện trong tài liệu. Bảng 3 cột: Thuật ngữ | Định nghĩa | Ghi chú.

**1.4. Tài liệu tham khảo**

Bảng 4 cột: Tên tài liệu | Link | Người gửi | Ngày gửi. Bao gồm tối thiểu: các văn bản quy phạm pháp luật liên quan và link Figma.

**1.5. Mô tả tài liệu**

Tóm tắt nội dung 6 phần của tài liệu theo cấu trúc:
- Phần 1: Giới thiệu
- Phần 2: Tổng quan về giải pháp
- Phần 3: Thiết kế chi tiết
- Phần 4: Thiết kế dùng chung và tái sử dụng
- Phần 5: Thiết kế đảm bảo tuân thủ tiêu chuẩn quản trị dữ liệu
- Phần 6: Phụ lục

---

### 2. TỔNG QUAN GIẢI PHÁP

**2.1. Tổng quan chức năng**

Sử dụng sơ đồ phân cấp chức năng (Functional Hierarchy Chart) để thể hiện các module chính của phân hệ.

**2.2. Mô hình giao tiếp với hệ thống/module/chức năng khác**

Mô tả luồng dữ liệu giữa hệ thống đang xây dựng với các hệ thống bên ngoài. Với mỗi hệ thống kết nối phải liệt kê rõ: hành động nào gọi sang hệ thống nào, kết quả trả về là gì, hệ thống xử lý tiếp theo như thế nào.

Tối thiểu mô tả 2 mục con (tuỳ theo thực tế dự án):

*2.2.1. Giao tiếp với CSDL Cổng ứng dụng dùng chung*
Liệt kê rõ từng hành động: đăng nhập, đăng xuất, kiểm tra phân quyền, đồng bộ tài khoản, đồng bộ danh mục. Mỗi hành động nêu rõ: gửi yêu cầu gì → nhận kết quả gì → xử lý tiếp theo ra sao.

*2.2.2. Giao tiếp với Lakehouse*
Liệt kê rõ từng hành động đồng bộ dữ liệu. Mỗi hành động nêu rõ: gửi yêu cầu gì → nhận kết quả gì → xử lý tiếp theo ra sao.

---

### 3. THIẾT KẾ CHI TIẾT

Mỗi nhóm chức năng tổ chức thành mục 3.X. Mỗi chức năng con tổ chức thành mục 3.X.Y và có đủ 4 mục con bắt buộc dưới đây.

---

**3.X. [Tên nhóm chức năng]**

**3.X.Y. [Tên chức năng — ví dụ: Xem danh sách, Thêm mới, Chỉnh sửa, Xóa, Import, Export]**

#### 3.X.Y.1. Thông tin chung chức năng

Mô tả đủ 3 nội dung:

- **Mô tả:** Chức năng này cho phép đối tượng nào làm gì.
- **Đường dẫn:** Mô tả chính xác các bước truy cập menu, từ màn hình đăng nhập đến màn hình chức năng. Ví dụ: "Đăng nhập hệ thống → Truy cập menu A → Click button B".
- **Phân quyền và miền dữ liệu:** Mô tả chi tiết từng vai trò được phép thực hiện chức năng gì. Phải làm rõ logic miền dữ liệu — đơn vị nào thấy/thao tác dữ liệu nào. Liệt kê riêng từng điều kiện phân quyền cho từng action: Xem, Thêm mới, Import, Chỉnh sửa, Xóa, Tìm kiếm, Xuất danh sách.

#### 3.X.Y.2. Màn hình

- Link Figma trỏ trực tiếp đến frame/screen tương ứng.
- Ảnh chụp giao diện (hoặc ghi `[CẦN BỔ SUNG: ảnh màn hình / link Figma]` nếu chưa có).
- Template biểu mẫu (nếu là chức năng Export/Import).

#### 3.X.Y.3. Mô tả chi tiết các thành phần

Lập bảng mô tả toàn bộ các thành phần trên màn hình. **Bảng 6 cột bắt buộc:**

| STT | Tên | Kiểu dữ liệu [Độ dài] | Input/Output | Giá trị khởi tạo | Mô tả (Mapping với CSDL nếu có) |
|-----|-----|-----------------------|-------------|-----------------|--------------------------------|

**Quy tắc liệt kê thành phần:**
- Liệt kê đầy đủ tất cả thành phần: title màn hình, breadcrumb, header, ô tìm kiếm, từng cột trong danh sách, phân trang, tất cả button/icon.
- Thứ tự: từ trái sang phải, từ trên xuống dưới.

**Quy tắc viết cột Mô tả theo từng kiểu dữ liệu:**

*Label (Output):*
- Dữ liệu lấy từ bảng nào, trường nào: `[Tên bảng].[Tên trường]`
- Nếu trường là mã/status nhưng hiển thị text, ghi rõ mapping: `1 → Đang hoạt động`, `2 → Không hoạt động`...
- Format hiển thị nếu có (ví dụ: `dd/mm/yyyy`).

*Textbox / Textarea (Input):*
- Placeholder.
- Mục đích nhập thông tin.
- Bắt buộc hay không.
- Format nếu có.
- Validate: ghi rõ logic validate và nội dung thông báo lỗi khi vi phạm.
- Lưu/lấy dữ liệu: `[Tên bảng].[Tên trường]`

*Dropdown / Combobox:*
- Dữ liệu mặc định.
- Bắt buộc hay không.
- Nguồn dữ liệu: nếu cố định thì liệt kê các giá trị + giá trị lưu DB; nếu từ DB ghi rõ `[Tên bảng].[Tên trường]` với điều kiện lọc và thứ tự sắp xếp.
- Lưu/lấy dữ liệu: `[Tên bảng].[Tên trường]`

*Trường số:*
- Placeholder.
- Bắt buộc hay không.
- Giá trị Min, Max.
- Lưu/lấy dữ liệu: `[Tên bảng].[Tên trường]`

*Date:*
- Placeholder.
- Bắt buộc hay không.
- Format: `dd/mm/yyyy`.
- Validate với ngày hiện tại (nếu có).
- Validate ràng buộc với trường khác (nếu có).
- Lưu/lấy dữ liệu: `[Tên bảng].[Tên trường]`

*Search (Tìm kiếm):*
- Kiểu so khớp: Like (contains) hay Bằng (exact).
- Trim khoảng trắng đầu/cuối: có/không.
- Phân biệt hoa/thường: có/không.
- Tìm kiếm theo trường: `[Tên bảng].[Tên trường]`

*Button:*
- Mô tả action khi click: thực hiện gì.
- Nếu có chức năng riêng: ghi "Tham chiếu đến chức năng [Tên chức năng]".
- Nếu button Lưu: mô tả rõ dữ liệu được cập nhật ở bảng nào ngoài bảng chính.
- Điều kiện enable/disable/ẩn/hiện (nếu có).

*Icon:*
- Mô tả action khi click.
- Điều kiện hiển thị icon (nếu chỉ hiển thị với một số trạng thái nhất định).
- Tham chiếu tài liệu Common nếu có.

*Danh sách (List/Table):*
- Dữ liệu lấy từ bảng nào, điều kiện lấy dữ liệu, thứ tự sắp xếp mặc định.
- Các cột trong danh sách — mỗi cột mô tả riêng theo quy tắc Label ở trên.

*Checkbox:*
- Mục đích tích chọn.
- Điều kiện enable/disable tích chọn.
- Hành động sau khi tích chọn.

*Trường hiển thị theo điều kiện:*
- Mô tả rõ điều kiện hiển thị là gì.

*File Excel (Import/Export):*
- Liệt kê đầy đủ các cột có trong file Excel.
- Mỗi cột mô tả: tên cột, kiểu dữ liệu, mapping DB, validate (nếu là Import).

#### 3.X.Y.4. Luồng nghiệp vụ

Mô tả tuần tự các bước xử lý. Với mỗi bước phân nhánh (TH1, TH2...) phải mô tả rõ điều kiện rẽ nhánh và kết quả tương ứng.

Ví dụ cấu trúc:
```
1. Người dùng [hành động] → Truy cập [màn hình]
2. Hệ thống hiển thị [kết quả]
   - TH1: [Điều kiện] => Hệ thống [xử lý A]
   - TH2: [Điều kiện] => Hệ thống [xử lý B]
3. Người dùng [hành động tiếp theo]
4. Hệ thống [phản ứng]
```

---

### 4. THIẾT KẾ DÙNG CHUNG VÀ TÁI SỬ DỤNG

Liệt kê tất cả component và quy định dùng chung được tham chiếu từ tài liệu Common `[TCCT_TKCT]`. Với mỗi component ghi rõ: tên component, mô tả hành vi, danh sách chức năng sử dụng.

Các component thường gặp cần có mục riêng:
- Quy định về tìm kiếm nhanh.
- Quy định về tìm kiếm nâng cao / Lọc nâng cao.
- Quy định về phân trang.
- Quy định về mở rộng/thu gọn độ rộng cột.
- Quy định về ẩn/hiện cột.
- Quy định về xử lý Checkbox.
- Quy định về hiển thị icon.
- Quy định về hiển thị màn danh sách.

---

### 5. THIẾT KẾ ĐẢM BẢO TUÂN THỦ TIÊU CHUẨN QUẢN TRỊ DỮ LIỆU

Phần này có nội dung chung cho tất cả các phân hệ. Áp dụng theo tiêu chuẩn quản trị dữ liệu đã ban hành của Tập đoàn.

---

### 6. PHỤ LỤC

**6.1. Tài liệu quy trình**

**6.2. Tài liệu thiết kế cơ sở dữ liệu**

**6.3. Phân quyền**

**6.4. Tài liệu mô tả API danh mục dùng chung**

**6.5. Danh sách chức năng**

Bảng 3 cột liệt kê toàn bộ chức năng của phân hệ: STT | Tên chức năng | Đối tượng sử dụng. Nhóm chức năng theo phân hệ, đánh số La Mã cho nhóm (I, II, III...).

---

## CHECKLIST TRƯỚC KHI HOÀN THIỆN TÀI LIỆU

1. **Tính đầy đủ thành phần:** Mọi thành phần hiển thị trên màn hình đều có dòng trong bảng mô tả — không bỏ sót title, breadcrumb, button, icon, phân trang.
2. **Mapping DB:** Mọi trường Output đều có ghi rõ `[Tên bảng].[Tên trường]`. Không để trống.
3. **Validate đầy đủ:** Mọi trường Input đều có mô tả validate và thông báo lỗi cụ thể.
4. **Phân quyền và miền dữ liệu:** Mỗi chức năng đều có mô tả rõ ai được làm gì, miền dữ liệu nào.
5. **Luồng nghiệp vụ:** Mọi nhánh điều kiện (TH1, TH2...) đều được mô tả đầy đủ.
6. **Tham chiếu tài liệu Common:** Các component dùng chung đều ghi tham chiếu đến `[TCCT_TKCT] Tài liệu Common` thay vì mô tả lặp lại.
7. **Danh sách chức năng ở Phụ lục:** Khớp với toàn bộ chức năng đã thiết kế ở Phần 3.
8. **Chính tả và ngôn ngữ:** Không sai lỗi chính tả. Không dùng từ mơ hồ.
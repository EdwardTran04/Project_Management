# Quy tắc viết bảng mô tả thành phần (Phần 3.X.Y.3)

Đọc file này khi điền bảng 6 cột:
`STT | Tên | Kiểu dữ liệu [Độ dài] | Input/Output | Giá trị khởi tạo | Mô tả (Mapping với CSDL nếu có)`

## Mục lục
- Quy tắc liệt kê chung
- Theo từng kiểu thành phần: Label · Textbox/Textarea · Dropdown/Combobox · Trường số · Date · Search · Button · Icon · Danh sách · Checkbox · Trường điều kiện · File Excel

---

## Quy tắc liệt kê chung

- Liệt kê đầy đủ MỌI thành phần: title màn hình, breadcrumb, header, ô tìm kiếm, từng cột trong danh sách, phân trang, mọi button/icon. Không sót.
- Thứ tự: từ trái sang phải, từ trên xuống dưới.
- **Input** = người dùng nhập/chọn. **Output** = hệ thống hiển thị/tính toán.
- **Giá trị khởi tạo** = giá trị khi màn hình load: NULL / giá trị mặc định / load từ bảng nào.
- **Mapping CSDL:** ghi `[Bảng].[Trường]` đúng tên từ BM.03. Thiếu → `[Cần BM.03 xác nhận]`, không bỏ trống.

---

## Label (Output)
- Lấy từ `[Bảng].[Trường]`.
- Nếu là mã/status nhưng hiển thị text: ghi mapping giá trị, VD `1 → Đang hoạt động`, `2 → Không hoạt động`.
- Format hiển thị nếu có (VD `dd/mm/yyyy`).

## Textbox / Textarea (Input)
- Placeholder; mục đích nhập; bắt buộc hay không; format nếu có.
- Validate: logic validate + nội dung thông báo lỗi khi vi phạm.
- Lưu/lấy: `[Bảng].[Trường]`.

## Dropdown / Combobox
- Dữ liệu mặc định; bắt buộc hay không.
- Nguồn dữ liệu: cố định → liệt kê các giá trị + giá trị lưu DB; từ DB → `[Bảng].[Trường]` kèm điều kiện lọc + thứ tự sắp xếp.
- Lưu/lấy: `[Bảng].[Trường]`.

## Trường số
- Placeholder; bắt buộc hay không; giá trị Min/Max; quy tắc số thập phân (nếu có).
- Lưu/lấy: `[Bảng].[Trường]`.

## Date (Datepicker)
- Placeholder; bắt buộc hay không; format `dd/mm/yyyy`.
- Validate với ngày hiện tại (nếu có); ràng buộc với trường khác (nếu có).
- Lưu/lấy: `[Bảng].[Trường]`.

## Search (Tìm kiếm)
- Kiểu so khớp: Like (contains) hay Bằng (exact).
- Trim khoảng trắng đầu/cuối: có/không. Phân biệt hoa/thường: có/không.
- Tìm theo trường: `[Bảng].[Trường]`.

## Button
- Mô tả action khi click.
- Có chức năng riêng → ghi "Tham chiếu chức năng [Tên chức năng]".
- Button Lưu → nêu rõ dữ liệu cập nhật ở bảng nào NGOÀI bảng chính.
- Điều kiện enable/disable/ẩn/hiện (nếu có).

## Icon
- Mô tả action khi click.
- Điều kiện hiển thị (nếu chỉ hiện ở một số trạng thái).
- Tham chiếu tài liệu Common nếu có.

## Danh sách (List/Table)
- Lấy từ bảng nào, điều kiện lấy dữ liệu, thứ tự sắp xếp mặc định.
- Mỗi cột mô tả riêng theo quy tắc Label.

## Checkbox
- Mục đích tích chọn; điều kiện enable/disable tích chọn; hành động sau khi tích.

## Trường hiển thị theo điều kiện
- Ghi rõ điều kiện hiển thị.

## File Excel (Import/Export)
- Liệt kê đủ các cột trong file. Mỗi cột: tên cột, kiểu dữ liệu, mapping DB, validate (nếu Import).
# Bảng giá dự thầu

## Danh sách chức năng

| STT | Tính năng        | Chức năng                     | Yêu cầu | Mức độ ưu tiên |
| --- | ---------------- | ----------------------------- | ------- | -------------- |
| 1   | Bảng giá dự thầu | Danh sách bảng giá dự thầu    | Làm mới | 1              |
| 2   |                  | Xem chi tiết bảng giá dự thầu | Làm mới | 1              |
| 3   |                  | Thêm mới bảng giá dự thầu     | Làm mới | 1              |
| 4   |                  | Sửa bảng giá dự thầu          | Làm mới | 1              |
| 5   |                  | Xóa bảng giá dự thầu          | Làm mới | 1              |
| 6   |                  | Export biểu mẫu               | Làm mới |                |
| 7   |                  | Import bảng giá               | Làm mới |                |

---

## Danh sách bảng giá dự thầu


### Thông tin chung về chức năng

| Nội dung          | Mô tả                                                                                                                                                                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mã chức năng      |                                                                                                                                                                                                                                                                                                                                             |
| Tên chức năng     | Danh sách bảng giá dự thầu                                                                                                                                                                                                                                                                                                                  |
| Mức độ ưu tiên    | H                                                                                                                                                                                                                                                                                                                                           |
| Loại              | Chức năng                                                                                                                                                                                                                                                                                                                                   |
| Mô tả chức năng   | Hệ thống cho phép người dùng xem danh sách các bảng giá dự thầu đã được tạo trong hệ thống.<br><br>Thông tin hiển thị bao gồm: Hồ sơ mời thầu, Hồ sơ dự thầu, Chủ đầu tư, Loại tiền và Tổng giá trị.<br><br>Hỗ trợ tìm kiếm, lọc, phân trang theo các tiêu chí như mã hồ sơ, chủ đầu tư.<br><br>Cho phép thao tác: chỉnh sửa, xóa, tạo mới. |
| Tần suất sử dụng  | Thỉnh thoảng                                                                                                                                                                                                                                                                                                                                |
| Sự kiện kích hoạt | Truy cập menu **[Bảng giá dự thầu]**                                                                                                                                                                                                                                                                                                        |
| Điều kiện         | - Có mạng<br>- Đã đăng nhập<br>- Có quyền xem                                                                                                                                                                                                                                                                                               |
| Tác nhân          |                                                                                                                                                                                                                                                                                                                                             |
| Nghiệp vụ         | Hiển thị danh sách dạng bảng gồm: Hồ sơ mời thầu, Hồ sơ dự thầu, Chủ đầu tư, Loại tiền, Tổng giá trị.<br><br>Chức năng:<br>- Tìm kiếm<br>- Lọc theo cột<br>- Phân trang<br><br>Thao tác:<br>- [Chỉnh sửa]<br>- [Xóa]<br>- [Thêm mới]                                                                                                        |

---

### Thiết kế giao diện

![Màn hình danh sách bảng giá dự thầu](/documents/bidding-price/image/list.png)
#### Bộ lọc

| Trường         | Kiểu    | Bắt buộc | Mô tả                                                 |
| -------------- | ------- | -------- | ----------------------------------------------------- |
| Hồ sơ mời thầu | Textbox | Không    | Tìm kiếm contains, không phân biệt hoa thường, max 50 |
| Hồ sơ dự thầu  | Textbox | Không    | Tìm kiếm contains, max 50                             |
| Chủ đầu tư     | Textbox | Không    | Tìm kiếm gần đúng, max 255                            |

---

## Xem chi tiết bảng giá dự thầu

### Thông tin chung

| Nội dung      | Mô tả                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| Tên chức năng | Xem chi tiết bảng giá dự thầu                                                                            |
| Mô tả         | Hiển thị thông tin chi tiết bảng giá gồm:<br>- Thông tin chung<br>- Danh sách hạng mục<br>- Tổng giá trị |
| Điều kiện     | Có quyền xem                                                                                             |
| Nghiệp vụ     | Hiển thị chi tiết, không cho chỉnh sửa trực tiếp                                                         |

---

### Thiết kế giao diện

![Màn hình danh sách bảng giá dự thầu](/documents/bidding-price/image/detail.png)

#### Thông tin hiển thị

| Trường             | Kiểu     | Mô tả       |
| ------------------ | -------- | ----------- |
| Hồ sơ mời thầu     | Text     | Readonly    |
| Hồ sơ dự thầu      | Text     | Readonly    |
| Chủ đầu tư         | Text     | Readonly    |
| Tổng giá chưa thuế | Currency | Format tiền |
| Tổng giá sau thuế  | Currency | Format tiền |
| Tổng giá trị       | Currency | Highlight   |

#### Chi tiết dòng

| Trường         | Kiểu     | Mô tả                    |
| -------------- | -------- | ------------------------ |
| Tên dịch vụ    | Text     |                          |
| Đơn giá        | Currency |                          |
| Loại tiền        | Text |     VND, USD, EUR , mặc định VND                     |
| Số lượng       | Number   |                          |
| VAT (%)        | Number   | 0–100                    |
| Giá trước thuế | Currency | = đơn giá × số lượng     |
| Giá sau thuế   | Currency | = trước thuế × (1 + VAT) |
| Giá sau thuế   | Currency | = trước thuế × (1 + VAT) |

---

## Thêm mới bảng giá dự thầu

### Thông tin chung

| Nội dung      | Mô tả                                                                 |
| ------------- | --------------------------------------------------------------------- |
| Tên chức năng | Thêm mới bảng giá dự thầu                                             |
| Mô tả         | Cho phép tạo mới bảng giá, nhập danh sách hạng mục, tự động tính toán |
| Điều kiện     | Có quyền tạo                                                          |

---

### Nghiệp vụ chính

* Chọn hồ sơ mời thầu → auto fill chủ đầu tư (lấy từ bảng hồ sơ mời thầu)
* Chọn hồ sơ dự thầu tương ứng với hồ sơ mời thầu, dropdown chỉ có các hồ sơ dự thầu của hồ sơ mời thầu được chọn
* Nhập danh sách dòng

**Tính toán tự động:**
* Sau khi nhập giá trị đơn giá, loại tiền, số lượng, thuế VAT của một dòng, hệ thống sẽ tự động tính giá trị trước thuế, giá trị sau thuế theo công thức
- Giá trước thuế = Đơn giá × Số lượng
- Giá sau thuế = Trước thuế × (1 + VAT/100)
- Tổng giá trị = giá trị sau thuế

- Với 3 ô tổng trên bảng chi tiết (tổng giá chưa thuế, tổng giá gồm thuế phí, tổng giá trị): bằng sum của các dòng chi tiết (nhưng ở màn thêm mới thì ẩn đi, khi tính xác nhận và vào màn chi tiết thì mới hiện lên)
![alt text](/documents/bidding-price/image/sum.png)

**Validate:**

* Không để trống
* Giá > 0
* VAT: 0–100
* Có ít nhất 1 dòng
* Các dòng phải có chung loại tiền với nhau

---

### Thiết kế giao diện

![Màn hình danh sách bảng giá dự thầu](/documents/bidding-price/image/create.png)
#### Thông tin chung

| Trường         | Kiểu     | Mô tả                |
| -------------- | -------- | -------------------- |
| Hồ sơ mời thầu | Dropdown | Auto fill chủ đầu tư |
| Hồ sơ dự thầu  | Dropdown | Filter theo hồ sơ    |
| Chủ đầu tư     | Text     | Readonly             |

#### Tổng hợp

| Trường          | Mô tả     |
| --------------- | --------- |
| Tổng trước thuế | Auto      |
| Tổng sau thuế   | Auto      |
| Tổng giá trị    | Highlight |

#### Chi tiết dòng

| Trường         | Kiểu   | Mô tả   |
| -------------- | ------ | ------- |
| STT            | Number | Auto    |
| Tên dịch vụ    | Text   | Max 255 |
| Đơn giá        | Number | > 0     |
| Số lượng       | Number | > 0     |
| VAT            | Number | 0–100   |
| Giá trước thuế | Auto   |         |
| Giá sau thuế   | Auto   |         |
| Tổng           | Auto   |         |

---

## Sửa bảng giá dự thầu

### Thông tin chung

| Nội dung      | Mô tả                                          |
| ------------- | ---------------------------------------------- |
| Tên chức năng | Sửa bảng giá dự thầu                           |
| Mô tả         | Cho phép chỉnh sửa thông tin và danh sách dòng |
| Điều kiện     | Có quyền + dữ liệu chưa khóa                   |

---

### Nghiệp vụ

* Load dữ liệu hiện tại
* Cho phép:

  * Sửa dòng
  * Thêm/xóa dòng
  * Import Excel

**Tính toán & validate giống thêm mới**

---

### Thiết kế giao diện

![Màn hình danh sách bảng giá dự thầu](/documents/bidding-price/image/create.png)

---

## Import bảng giá

* Template import biểu mẫu số 2

---

## Export biểu mẫu

* Template biểu mẫu số 2

---

## Xóa bảng giá dự thầu

* Xóa sau khi xác nhận
* Kiểm tra quyền trước khi xóa

---
 
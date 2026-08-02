# HƯỚNG DẪN JAVA CODING CONVENTIONS CHO AI AGENT

Tài liệu này quy định các nguyên tắc, quy ước bắt buộc khi viết, sửa đổi, hoặc tối ưu hóa mã nguồn Java. AI Agent phải tuân thủ nghiêm ngặt để đảm bảo tính nhất quán và chất lượng phần mềm.

---

## 1. Nguyên Tắc Chung & Quy Trình Thay Đổi

- **Sửa đổi source code**: Khi viết mới hoặc sửa phương thức/lớp, bắt buộc viết Header comment mô tả: mục đích, tham số đầu vào (Input), kết quả trả về (Output), thời gian thực hiện, và chi tiết nội dung thay đổi.
- **Ngôn ngữ**: Đặt tên (lớp, biến, phương thức, tham số) bằng tiếng Anh. Chú thích (comment) hoặc thông báo (message) có thể dùng tiếng Việt. Cấm viết tắt tùy tiện (trừ các trường hợp tại Mục 3.5).
- **Quản lý phiên bản**: Số phiên bản release dạng `X.Y.Z` (Major.Minor.Patch). Phiên bản đầu tiên là `1.0.0`.

---

## 2. Package, Thư Mục & Cấu Trúc Class

- **Package**: Viết chữ thường, sử dụng tiền tố tên miền đảo ngược (Reverse Domain Name):
  - 1-3 cụm: `[domain_đảo_ngược].[tên_dự_án]` (Ví dụ: `net.vnexpress.news`).
  - 4 cụm trở lên: `[domain_đảo_ngược].[tên_dự_án].[tên_dự_án_con].[thành_phần]` (Ví dụ: `com.office-fa.project.subsystem.component`).
- **Thư mục**: Cấu trúc thư mục vật lý phải phân cấp trùng khớp hoàn toàn với cấu trúc package.
- **Import**: **Cấm dùng wildcard `*`**. Phải import chính xác từng lớp. (Ví dụ: `import java.util.List;` thay vì `import java.util.*;`).
- **Thứ tự trong file**: 1. Header bản quyền -> 2. Package -> 3. Imports -> 4. Class/Interface header -> 5. Class body.
- **Thứ tự khai báo trong Class**:
  - **Biến/Trường**: Theo phạm vi truy cập giảm dần: `public` -> `protected` -> package-private -> `private`. Hạn chế tối đa dùng trường tĩnh (`static`).
  - **Phương thức**: Constructor -> Non-static Methods -> Static Methods. Viết Getter/Setter ở cuối cùng của Class.
  - **Nạp chồng (Overload)**: Sắp xếp theo số lượng tham số từ ít đến nhiều.
- **Inner Class (Lớp nội bộ)**: Hạn chế sử dụng để đảm bảo tính tái sử dụng và dễ đọc. Chỉ chấp nhận cho UI Event Listener hoặc xử lý Callback. Cấm triệu gọi/tái sử dụng lớp nội bộ từ bên ngoài lớp chứa nó.

---

## 3. Quy Ước Đặt Tên (Naming Conventions)

### 3.1. Quy tắc chung
- Sử dụng tiếng Anh hoàn toàn. Tên phải rõ nghĩa và mô tả đúng mục đích.

### 3.2. Quy tắc chi tiết

| Đối tượng | Quy tắc viết | Ví dụ | Ghi chú |
| :--- | :--- | :--- | :--- |
| **Lớp (Class)** | PascalCase | `public class SystemClass` | Danh từ hoặc cụm danh từ. |
| **Lớp cài đặt (Impl)** | PascalCase + `Impl` | `class ClassNameEndsWithImpl` | Kế thừa từ interface. |
| **Lớp ngoại lệ** | PascalCase + `Exception` | `class FacomException` | Kế thừa từ `Exception`/`RuntimeException`. |
| **Giao diện (Interface)** | PascalCase | `interface Enumerable` | Nếu mô tả khả năng, dùng tính từ đuôi `-able`. |
| **Phương thức (Method)** | camelCase | `public void calculateTotal()` | Phải bắt đầu bằng một **động từ**. |
| **Getter / Setter** | `get` / `set` + Tên đối tượng | `getUserName()` / `setUserName()` | Lấy hoặc gán giá trị thuộc tính. |
| **Boolean Method** | `is` + Tính từ | `public boolean isEmpty()` | Dùng làm điều kiện true/false rõ ràng. |
| **Biến (Field/Variable)** | camelCase | `private int userAge;` | Rõ nghĩa, thể hiện rõ kiểu dữ liệu. |
| **Hằng số (Constant)** | UPPER_SNAKE_CASE | `FILE_TYPE_STD = "Std";` | Từ phân tách bằng `_`. Hậu tố thiết lập đặt cuối (Ví dụ: `FILE_TYPE_STD` thay vì `FILE_STD_TYPE`). |
| **Tham số (Parameter)** | camelCase | `void process(String userName)` | Rõ nghĩa. Không đặt tên chung chung như `value` hoặc `name1`. |
| **Biến cục bộ (Local)** | camelCase | `dtoDCSyncSendSetting dto = ...` | Nếu scope nhỏ, dùng từ viết tắt ngắn gọn (ví dụ: `dto`) để tăng tính dễ đọc. |

### 3.3. Đặt tên Database
- **Tên bảng & cột**: Dùng chữ thường, snake_case (Ví dụ: `user_info`).
- **Constraints**: PK bắt đầu bằng `pk_`, UK bắt đầu bằng `uk_`.
- **Index**: Bắt đầu bằng `idx_`.

### 3.4. Các cặp từ đối xứng bắt buộc
Sử dụng đúng các cặp từ đối xứng chuẩn tiếng Anh khi đặt tên các xử lý đối nghịch:
`Add/Remove`, `Create/Drop`, `Insert/Delete`, `Start/Stop`, `Begin/End`, `Send/Receive`, `Get/Set`, `Get/Put`, `Get/Release`, `First/Last`, `Up/Down`, `Show/Hide`, `Source/Target`, `Source/Destination`, `Open/Close`, `Lock/Unlock`, `Increment/Decrement`, `Old/New`, `Next/Previous`.

### 3.5. Danh sách từ viết tắt được phép

#### Kiểu dữ liệu cơ bản
- String -> `str` | Boolean -> `bln` | Byte -> `byt` | Char -> `chr` | Date/DateTime -> `dtm` | Decimal -> `dec` | Short -> `sht` | Integer -> `int` | Long -> `lgn` | Object -> `obj` | Double -> `dbl` | Single -> `sng`.

#### Giao diện UI/Webform
- Form -> `frm` | Button -> `btn` | Text -> `txt` | Label -> `lbl` | Select (List box) -> `lst` | Checkbox -> `chb` | RadioButton -> `rdb` | FileUpload -> `fup` | Hyperlink -> `hlk` | Image -> `img`.

#### Thành phần Database
- DataSet -> `ds` | DataTable -> `dt` | DataView -> `dv` | DataRow -> `dr` | DataColumn -> `dc` | IDataReader -> `rdr`.

---

## 4. Quy Tắc Viết Comment & Javadoc

- **Nguyên tắc**: Comment **TẠI SAO** (WHY) thay vì **CÁI GÌ** (WHAT). Viết ngắn gọn, súc tích. Cấm đưa nhận xét cá nhân. Không viết comment thừa cho các đoạn code quá rõ ràng.
- **Javadoc**: Bắt buộc cho **Class**, **Field**, và **Method**.
  - Kết thúc câu mô tả đầu tiên bằng dấu chấm `.` để Javadoc trích xuất làm tóm tắt.
  - Sử dụng thẻ `@author` để ghi nhận người tạo/chỉnh sửa lớp.
  - Ghi nhận chi tiết các thẻ `@param`, `@return`, `@throws` của phương thức.
- **Inline Comment (Comment trong dòng)**:
  - Bắt buộc giải thích lý do/điều kiện cho các câu lệnh: `if-else`, `switch`, `for`, `while`, `break`, `continue`.
  - Giải thích cho các xử lý song song, chuyển đổi trạng thái đối tượng, hoặc logic nghiệp vụ đặc thù.
- **Không viết comment**: Lịch sử cập nhật source code (đã có Git quản lý); code cũ không dùng (phải xóa đi, nếu cần giữ lại phải ghi rõ lý do); các xử lý thông thường hiển nhiên.

---

## 5. Quy Tắc Ghi Log (Logging)

- **Thư viện**: Sử dụng Log4j hoặc thư viện ghi log chuẩn của dự án.
- **Cấp độ Log (Log Levels)**:
  - `Fatal`: Chương trình dừng bất ngờ, ghi log message kèm StackTrace.
  - `Error`: Lỗi runtime không làm dừng chương trình, ghi message kèm StackTrace.
  - `Warn`: Lỗi logic cảnh báo hoặc kiểm tra dữ liệu đầu vào.
  - `Info`: Thông tin hệ thống (bắt đầu/kết thúc tiến trình, chuyển đổi xử lý...).
  - `Debug`: Dữ liệu đầu vào/ra, giá trị cập nhật hỗ trợ khắc phục sự cố.
  - `Trace`: Theo dõi vết luồng xử lý chi tiết (dữ liệu vào/ra của từng hàm).
- **Nơi ghi log**: Khi xảy ra ngoại lệ; dữ liệu đầu vào lỗi/chuyển trạng thái lỗi (Error, Warn); tích hợp hệ thống khác; tham số/database (Debug); bắt đầu/kết thúc tiến trình (Trace).
- **Không ghi log**: Trong vòng lặp và trong các hàm Common (tránh giảm hiệu năng).

---

## 6. Các Điểm Chú Ý Khi Lập Trình (Java Best Practices)

- **So sánh đối tượng**: Bắt buộc dùng `.equals()` để so sánh đối tượng (đặc biệt là String). Cấm dùng `==` hoặc `!=` cho đối tượng (tránh NullPointerException). Ví dụ: `"ACTIVE".equals(status)`.
- **Phạm vi biến**: Không dùng một biến cho nhiều mục đích. Khai báo biến cục bộ ngay trước khi sử dụng. Đặt phạm vi truy cập càng hẹp càng tốt (ưu tiên `private`).
- **Quản lý tài nguyên**: Bắt buộc đóng Stream sau khi sử dụng. Ưu tiên dùng `try-with-resources` để tự động giải phóng tài nguyên.
  ```java
  try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
      // Xử lý đọc file
  } catch (IOException e) { ... }
  ```
- **Null Safety**: Thực hiện kiểm tra `null` đầu tiên đối với các tham số (đặc biệt trong phương thức public) trước khi thực hiện các kiểm tra logic khác. Bọc `try-catch` khi chuyển đổi chuỗi thành số đề phòng `NumberFormatException`.
- **Hiệu năng & Đồng bộ**:
  - Không dùng lệnh `return` trong vòng lặp.
  - Không khởi tạo đối tượng bên trong vòng lặp nếu có thể tái sử dụng hoặc khai báo ngoài vòng lặp.
  - Đa luồng: Bắt buộc sử dụng các cơ chế Thread-safe.
  - Ghép chuỗi: Cấm dùng toán tử `+` để nối chuỗi trong vòng lặp. Bắt buộc dùng `StringBuilder` thay thế (Ưu tiên `StringBuilder` hơn `StringBuffer` do không bị đồng bộ nội bộ).
  - Chuyển đổi: Dùng các hàm parse (Ví dụ: `Integer.parseInt(str)`) thay vì `new Integer(str)` (đã bị deprecated).

# HƯỚNG DẪN ANDROID CODING CONVENTIONS CHO AI AGENT

Tài liệu này quy định các nguyên tắc, tiêu chuẩn đặt tên, cấu trúc dự án và thiết kế kiến trúc bắt buộc khi viết mã nguồn Android (Java/Kotlin/XML). AI Agent phải tuân thủ nghiêm ngặt.

---

## 1. Nguyên Tắc Chung & Quy Trình Thay Đổi

- **Sửa đổi source code**: Khi viết mới hoặc sửa đổi Lớp, Phương thức, Biến hoặc Hằng số, bắt buộc phải viết Header comment mô tả: mục đích, tham số đầu vào (Input), kết quả đầu ra (Output), thời gian sửa và chi tiết thay đổi.
- **Ngôn ngữ**: Đặt tên (Class, Method, Variable, Constant, File) bằng tiếng Anh chuẩn. Comment/Message có thể dùng tiếng Việt. Cho phép biến chạy vòng lặp dùng `i`, `j`.
- **Tên viết tắt**: Đối với các từ viết tắt tiếng Anh, coi như một từ thông thường và áp dụng camelCase (chỉ viết hoa chữ cái đầu tiên).
  - ✔️ *Đúng:* `XmlHttpRequest`, `getCustomerId`, `String url`, `long id`.
  - ❌ *Sai:* `XMLHTTPRequest`, `getCustomerID`, `String URL`, `long ID`.

---

## 2. Quy Tắc Đặt Tên Trong Dự Án (Naming Conventions)

### 2.1. Đặt Tên Trong Mã Nguồn (Java / Kotlin)

| Khai báo | Định dạng | Ví dụ | Quy định bổ sung |
| :--- | :--- | :--- | :--- |
| **Lớp (Class)** | UpperCamelCase | `User`, `SignInActivity` | Nếu mở rộng từ thành phần Android (Activity, Service...), bắt buộc kết thúc bằng tên thành phần đó. |
| **Phương thức (Hàm)** | lowerCamelCase | `run()`, `getName()` | Bắt đầu bằng một **động từ**. |
| **Tên biến (Variable)** | lowerCamelCase | `idCurrentUser` | Biến static bắt đầu bằng tiền tố `s` (Ví dụ: `static MyClass sSingleton;`). |
| **Hằng số (Constant)** | UPPER_SNAKE_CASE | `MAX_HEIGHT` | Khai báo `final static`. Phân tách từ bằng `_`. |

### 2.2. Đặt Tên File Tài Nguyên (Resource Files)
Tất cả file trong thư mục Resource phải viết chữ thường và phân tách bằng dấu gạch dưới (`lowercase_underscore`).

#### 2.2.1. Drawable Files (Ảnh, Icon, Selector)
- **Quy tắc tiền tố (Prefix) theo loại tài sản**:
  - Action bar -> `ab_` (Ví dụ: `ab_stacked.9.png`)
  - Button -> `btn_` (Ví dụ: `btn_send_pressed.9.png`)
  - Dialog -> `dialog_` (Ví dụ: `dialog_top.9.png`)
  - Divider -> `divider_` (Ví dụ: `divider_horizontal.9.png`)
  - Icon chung -> `ic_` (Ví dụ: `ic_star.png`)
  - Menu -> `menu_` (Ví dụ: `menu_submenu_bg.9.png`)
  - Notification -> `notification_` (Ví dụ: `notification_bg.9.png`)
  - Tabs -> `tab_` (Ví dụ: `tab_pressed.9.png`)
- **Quy tắc tiền tố cho Icon**:
  - Launcher icon -> `ic_launcher_`
  - Menu / Action bar icon -> `ic_menu_`
  - Status bar icon -> `ic_stat_notify_`
  - Tab icon -> `ic_tab_`
  - Dialog icon -> `ic_dialog_`
- **Quy tắc hậu tố (Suffix) cho Trạng thái Selector**:
  - Normal -> `_normal` | Pressed -> `_pressed` | Focused -> `_focused` | Disabled -> `_disabled` | Selected -> `_selected` (Ví dụ: `btn_order_pressed.9.png`).

#### 2.2.2. Layout Files
Tên file Layout phải khớp với tên thành phần Android tương ứng (chuyển đổi từ PascalCase sang snake_case):
- Activity -> `UserProfileActivity` -> `activity_user_profile.xml`
- Fragment -> `SignUpFragment` -> `fragment_sign_up.xml`
- Dialog -> `ChangePasswordDialog` -> `dialog_change_password.xml`
- Item của AdapterView -> `item_person.xml`
- Layout con (Partial layout) -> `partial_stats_bar.xml`

#### 2.2.3. Menu Files
Tên file menu khớp với thành phần sử dụng. Ví dụ: menu của `MainActivity` -> `menu_main_activity.xml`.

#### 2.2.4. Values Files (.xml)
Tên các file cấu hình giá trị phải đặt ở số nhiều: `strings.xml`, `styles.xml`, `colors.xml`, `dimens.xml`, `attrs.xml`.

---

## 3. Quy Định Viết Code Java / Kotlin & XML

- **Thụt lề (Indentation)**: Sử dụng **4 khoảng trắng (Spaces)** để thụt lề cho các khối lệnh (Không dùng Tab).
- **Dấu ngoặc nhọn `{ }`**: Đặt dấu ngoặc nhọn mở xuống dòng mới.
- **Dấu ngoặc tròn `( )`**: Đặt trên cùng dòng với các từ khóa điều kiện (if, while...).
- **Độ dài mã nguồn**:
  - Tối đa **100 ký tự trên một dòng**. Nếu vượt quá, phải ngắt dòng hoặc tách thành phương thức riêng.
  - Một khối lệnh trong phương thức không vượt quá **30 dòng**. Nếu quá, phải phân tách logic.
- **Hằng số chuỗi (String Constants)**: Đối với các hằng số Key-Value trong Android SDK, bắt buộc đặt tiền tố như sau:
  - SharedPreferences -> `PREF_`
  - Bundle -> `BUNDLE_`
  - Fragment Arguments -> `ARGUMENT_`
  - Intent Extra -> `EXTRA_`
  - Intent Action -> `ACTION_`
- **Đặt ID trong file XML**:
  - **Android Java**: Bắt đầu bằng tiền tố loại phần tử viết thường kèm dấu gạch dưới:
    - TextView -> `txt_` (Ví dụ: `@+id/txt_title`)
    - ImageView -> `img_` (Ví dụ: `@+id/img_profile`)
    - Button -> `btn_` (Ví dụ: `@+id/btn_login`)
    - Menu -> `menu_` (Ví dụ: `@+id/menu_done`)
  - **Android Kotlin**: Đặt tên tương tự như Java hoặc dùng kiểu camelCase (Ví dụ: `@+id/menuDone`).

---

## 4. Kiến Trúc & Mô Hình Thiết Kế (Architecture & Patterns)

### 4.1. Mô hình MVP (Model - View - Presenter)
- **Model**: Interface cung cấp và quản lý dữ liệu (local & remote), chứa logic nghiệp vụ thuần túy.
- **View**: Giao diện thụ động (Activity/Fragment/Custom View) hiển thị dữ liệu và nhận tương tác từ người dùng, chứa một tham chiếu tới Presenter.
- **Presenter**: Trung gian (Middle-man), giao tiếp qua interface. Nhận tương tác từ View để cập nhật Model; nhận dữ liệu từ Model, định dạng và gửi lại View hiển thị. Tỉ lệ quan hệ là **1:1**.

### 4.2. Mô hình MVVM (Model - View - ViewModel)
- **Model**: Dữ liệu, trạng thái và logic nghiệp vụ. Không ràng buộc với View hay ViewModel.
- **View**: Liên kết dữ liệu và hành động qua ViewModel. Hỗ trợ Two-way data binding và lắng nghe thay đổi thông qua Observer Pattern (LiveData/Flow). Quan hệ **n:1** (nhiều View dùng chung 1 ViewModel).
- **ViewModel**: Chuẩn bị dữ liệu quan sát được (Observable data) cho View. Không giữ tham chiếu tới View.
  - **Quy tắc về Context**: ViewModel chỉ được biết về `Application Context`.
  - **Hành động ĐƯỢC PHÉP trong ViewModel**: Start/Bind Service, Gửi broadcast, Đăng ký broadcast receiver, Load resource values.
  - **Hành động CẤM trong ViewModel**: Hiển thị Dialog, Start Activity, Inflate layout.

### 4.3. Các Mẫu Thiết Kế Hay Dùng (Design Patterns)

#### 4.3.1. Template Method Pattern
Xây dựng một bộ khung thuật toán chung trong lớp cha (Abstract Class) và cho phép các lớp con định nghĩa lại một số bước (Abstract Methods) mà không làm thay đổi cấu trúc tổng thể.
- *Ví dụ:* Tạo layout có Header (Stepview) và Footer (Prev/Next buttons) cố định. Lớp cha `PageTemplate` định nghĩa cấu trúc hiển thị, riêng `abstract void displayBody()` được lớp con (ví dụ: `ContactPage`) override để hiển thị nội dung riêng.

#### 4.3.2. Singleton Pattern
Đảm bảo một Class chỉ có duy nhất một instance trong suốt quá trình chạy ứng dụng.
- Khởi tạo instance từ nội hàm của class bằng cách đặt `private` phương thức khởi tạo và truy xuất qua `getInstance()`.
- *Ví dụ:* Khởi tạo Retrofit client để gọi API.
```java
public class RetrofitClient {
    private static Retrofit retrofit = null;
    private RetrofitClient() {}
    public static Retrofit getClient(String baseUrl) {
        if (retrofit == null) {
            retrofit = new Retrofit.Builder()
                .baseUrl(baseUrl)
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        }
        return retrofit;
    }
}
```

#### 4.3.3. Observer Pattern
Thiết lập mối quan hệ phụ thuộc một - nhiều. Khi trạng thái của đối tượng được quan sát (Subject) thay đổi, toàn bộ các đối tượng đăng ký lắng nghe (Observers) sẽ nhận thông báo thông qua interface chung.
- *Ví dụ:* Subject quản lý danh sách `ArrayList<OnPublishDataListener>` và lặp gọi `listener.publishData(data)` khi có dữ liệu mới.

#### 4.3.4. Builder Pattern
Hỗ trợ khởi tạo đối tượng phức tạp chứa nhiều thuộc tính tùy chọn (optional) mà không cần tạo quá nhiều constructor overload.
- Thiết lập một static class `Builder` bên trong class cần tạo, private constructor của class chính.
```java
public class User {
    private String firstName;
    private String lastName;
    private int age;
    private User(Builder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
    }
    public static class Builder {
        private String firstName;
        private String lastName;
        private int age;
        public Builder setFirstName(String fName) { this.firstName = fName; return this; }
        public Builder setLastName(String lName) { this.lastName = lName; return this; }
        public Builder setAge(int age) { this.age = age; return this; }
        public User create() { return new User(this); }
    }
}
// Cách dùng: User user = new User.Builder().setFirstName("A").setLastName("B").setAge(20).create();
```

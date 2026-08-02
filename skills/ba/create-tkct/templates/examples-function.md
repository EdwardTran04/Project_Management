# Ví dụ Phần 3 đã điền — tham khảo định dạng & mật độ

Hai chức năng mẫu (chắt lọc từ dự án thật, hệ Dự bị động viên) minh hoạ cách điền 4 mục con cho hai dạng màn hình phổ biến: **danh sách** và **form nhập liệu**. Bám đúng mật độ này — mỗi ô Mô tả phải có mapping + validate khi áp dụng.

> Tên bảng/trường dưới đây là minh hoạ. Khi làm thật, lấy tên đúng từ BM.03; thiếu → `[Cần BM.03 xác nhận]`.

---

## 3.1.1. [CN_01] Xem danh sách công dân nam

### ① Thông tin chung

| Mục | Nội dung |
|-----|----------|
| Tên chức năng | Xem danh sách công dân nam [CN_01] |
| Đường dẫn | Đăng nhập → Dự bị động viên → Quản lý công dân trong độ tuổi phục vụ → Quản lý công dân nam |
| Phân quyền | Xem: cán bộ quân lực cấp đơn vị. Xuất Excel: cán bộ cấp Trung đoàn trở lên |
| Miền dữ liệu | User thuộc đơn vị nào chỉ thấy công dân thuộc đơn vị đó và đơn vị con (theo `force_structure`) |
| Mô tả | Cho phép tra cứu, tìm kiếm danh sách công dân nam trong độ tuổi phục vụ ngạch dự bị |

### ② Màn hình
`[CẦN BỔ SUNG: link Figma frame "DS công dân nam"]`

### ③ Mô tả chi tiết các thành phần

| STT | Tên | Kiểu [Độ dài] | Input/Output | Giá trị khởi tạo | Mô tả (Mapping CSDL) |
|-----|-----|---------------|--------------|------------------|----------------------|
| 1 | Tiêu đề màn hình | Label | Output | "Danh sách công dân nam" | Tĩnh |
| 2 | Breadcrumb | Label | Output | N/A | Dự bị động viên / Quản lý công dân nam |
| 3 | Ô tìm kiếm | Textbox [255] | Input | NULL | Placeholder "Nhập họ tên / số CCCD". So khớp Like, trim 2 đầu, không phân biệt hoa/thường; tìm theo `reservists.full_name`, `reservists.citizen_number` |
| 4 | Cột Họ tên | Label | Output | N/A | `reservists.full_name` |
| 5 | Cột Số CCCD | Label | Output | N/A | `reservists.citizen_number` |
| 6 | Cột Trạng thái | Label | Output | N/A | `reservists.status`: `1 → Đang quản lý`, `2 → Đã chuyển`, `3 → Loại ngạch` |
| 7 | Phân trang | Component | Input/Output | 20 dòng/trang | Tham chiếu Common `[TCCT_TKCT]` — Phân trang |
| 8 | Button Thêm mới | Button | Input | N/A | Click → mở màn Thêm mới hồ sơ (tham chiếu chức năng CN_03). Chỉ hiện khi user có quyền Thêm |
| 9 | Button Nhập Excel | Button | Input | N/A | Click → popup nhập file (tham chiếu chức năng Import) |

### ④ Luồng nghiệp vụ

```mermaid
flowchart TD
    A[User truy cập menu] --> B[Hệ thống load danh sách theo miền dữ liệu]
    B --> C{Có bản ghi?}
    C -->|Có| D[Hiển thị danh sách + phân trang]
    C -->|Không| E[Hiển thị "Không có dữ liệu"]
    D --> F[User nhập từ khóa tìm kiếm]
    F --> B
```

| Bước | Tác nhân | Hành động | Kết quả / Phản ứng hệ thống |
|------|----------|-----------|------------------------------|
| 1 | User | Truy cập menu Quản lý công dân nam | Truy vấn `reservists` lọc theo đơn vị user (`force_structure`), `is_deleted = 0`, sắp xếp `created_at` giảm dần |
| 2 | Hệ thống | Trả kết quả | TH1: có bản ghi → hiển thị danh sách + phân trang 20/trang. TH2: không có → hiển thị "Không có dữ liệu" |
| 3 | User | Nhập từ khóa, Enter | Lọc Like theo họ tên / CCCD, vẫn giữ điều kiện miền dữ liệu |

---

## 3.1.3. [CN_03] Thêm mới hồ sơ công dân nam

### ① Thông tin chung

| Mục | Nội dung |
|-----|----------|
| Tên chức năng | Thêm mới hồ sơ công dân nam [CN_03] |
| Đường dẫn | … → Quản lý công dân nam → Thêm mới hồ sơ công dân nam |
| Phân quyền | Thêm: cán bộ quân lực cấp đơn vị |
| Miền dữ liệu | Bản ghi tạo mới gắn đơn vị của user |
| Mô tả | Cho phép thêm mới hồ sơ công dân nam trong độ tuổi phục vụ (đủ 18–45 tuổi) |

### ② Màn hình
`[CẦN BỔ SUNG: link Figma frame "Thêm mới hồ sơ"]`

### ③ Mô tả chi tiết các thành phần (trích các kiểu tiêu biểu)

| STT | Tên | Kiểu [Độ dài] | Input/Output | Giá trị khởi tạo | Mô tả (Mapping CSDL) |
|-----|-----|---------------|--------------|------------------|----------------------|
| 1 | Thông tin chung | Label | N/A | Mở (expand) | Nhãn nhóm trường, mặc định mở |
| 2 | Họ tên khai sinh | Textbox [255] | Input | NULL | Bắt buộc. Lưu `reservists.full_name` |
| 3 | Ngày sinh | Datepicker | Input | NULL | Bắt buộc, `dd/mm/yyyy`. Validate đủ 18 tuổi & < ngày hiện tại; lỗi: "Công dân phải đủ 18 tuổi". Lưu `reservists.birth_date` |
| 4 | Số CCCD | Textbox [12] | Input | NULL | Bắt buộc, đúng 12 chữ số; lỗi: "Số CCCD phải có đúng 12 chữ số". Check trùng với bản ghi `is_deleted = 0`; lỗi: "Số CCCD đã tồn tại". Lưu `reservists.citizen_number` |
| 5 | Dân tộc | Dropdown | Input | NULL | Bắt buộc. Nguồn `common_category` với `category_code like 'ETHNIC%'`, sắp theo `name`. Lưu `reservists.ethnic_code` |
| 6 | Quốc tịch | Dropdown | Input | "Việt Nam" | Bắt buộc. Nguồn `common_category` `category_code like 'NATIONALITY%'`. Lưu `reservists.nationality_code` |
| 7 | Chiều cao | Textbox số [6] | Input | NULL | Bắt buộc, số thập phân (≤3 số phần nguyên, 2 số thập phân, ≤ 999,99). Lưu `reservists.height` |
| 8 | Button Lưu | Button | Input | N/A | Enable khi mọi trường bắt buộc hợp lệ. Click → validate toàn form → INSERT `reservists` (gắn đơn vị user, `is_deleted = 0`) + ghi log thao tác. Thành công → thông báo + quay danh sách |
| 9 | Button Hủy | Button | Input | N/A | Đóng màn, không lưu |

### ④ Luồng nghiệp vụ

```mermaid
flowchart TD
    A[User mở màn Thêm mới] --> B[Load dropdown danh mục từ common_category]
    B --> C[User nhập các trường]
    C --> D[Click Lưu]
    D --> E{Validate hợp lệ?}
    E -->|Không| F[Hiển thị message lỗi inline tại trường vi phạm]
    F --> C
    E -->|Có| G[INSERT reservists + ghi log thao tác]
    G --> H[Thông báo thành công → quay về danh sách]
```

| Bước | Tác nhân | Hành động | Kết quả / Phản ứng hệ thống |
|------|----------|-----------|------------------------------|
| 1 | Hệ thống | onLoad | Load dropdown Dân tộc / Tôn giáo / Quốc tịch… từ `common_category` theo `category_code` |
| 2 | User | Nhập trường, click Lưu | Hệ thống validate toàn form |
| 3 | Hệ thống | Validate | TH1: lỗi → message inline tại trường vi phạm, dừng. TH2: hợp lệ → sang bước 4 |
| 4 | Hệ thống | Ghi dữ liệu | INSERT `reservists` (đơn vị user, `is_deleted = 0`) + ghi log thao tác; thông báo thành công, quay danh sách |
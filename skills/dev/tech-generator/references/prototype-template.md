# Mẫu Prototype

Prototype bao gồm 2 phần: Screen Specification và React/Tailwind Prototype Spec.

# 1. Screen Specification

## SCR-001 [Tên màn hình]
- Mục tiêu:
- Actor được phép truy cập:
- Route gợi ý:
- Function ID liên quan:
- API liên quan:

### Dữ liệu hiển thị
| Trường/khối | Nguồn dữ liệu | Mô tả |
|---|---|---|

### Thành phần giao diện chính
- Header
- Bộ lọc
- Bảng dữ liệu / card / form
- Action buttons
- Modal / drawer nếu có

### Hành vi người dùng
1. ...
2. ...
3. ...

### Trạng thái màn hình
- Default
- Loading
- Empty
- Error
- Disabled/Read-only

### Validation / thông báo
- ...

### Điều hướng
- Từ màn hình này sang đâu
- Từ đâu có thể đi tới màn hình này

# 2. React/Tailwind Prototype Spec

## 2.1 Layout tổng thể
- App shell
- Sidebar/Header/Breadcrumb
- Main content layout
- Responsive breakpoint behavior

## 2.2 Component tree gợi ý
```text
AppShell
 ├─ Sidebar
 ├─ TopBar
 └─ MainContent
    ├─ PageHeader
    ├─ FilterPanel
    ├─ DataTable/CardGrid/FormSection
    └─ Pagination/ActionBar
```

## 2.3 UI notes cho AI generate
- Chỉ rõ màn hình nào thiên về bảng, màn hình nào thiên về form.
- Chỉ rõ field bắt buộc, read-only, disabled theo role/state.
- Chỉ rõ component cần lặp lại giữa các màn hình.
- Chỉ rõ các modal, drawer, tab, accordion, timeline, badge, status pill nếu có.

## 2.4 Mock data gợi ý
Cung cấp dữ liệu mẫu đủ để AI render đúng layout và trạng thái nghiệp vụ.

## 2.5 Design constraints
- Ưu tiên rõ thông tin nghiệp vụ, không thiên về trang trí.
- Hierarchy rõ, hỗ trợ thao tác dữ liệu lớn.
- Trạng thái và quyền hạn phải thể hiện trên UI.

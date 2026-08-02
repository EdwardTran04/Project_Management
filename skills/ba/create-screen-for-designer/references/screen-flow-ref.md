# Screen Flow Reference (compact)

## 1. Bảng trường (screen-md)

`Tên trường | Kiểu | Bắt buộc | Readonly | Nguồn DL | Tab | State áp dụng | Rule | Nguồn xác định`

- Kiểu: Text, Textarea, Number, Date, DateTime, Dropdown, Multi-select, Checkbox, Radio, File, Table, Badge, Link
- Nguồn xác định: `Đầu vào` / `AI đề xuất` / `BA xác nhận`
- Nhóm trường: Định danh · Tổ chức · Vòng đời · Quyết định · Đính kèm · Audit

## 2. Bảng button

`Button | State | Vai trò | Hiển thị | Enable | Hành động`

- Button phổ biến: Tìm kiếm, Làm mới, Xem, Thêm, Sửa, Lưu nháp, Gửi duyệt, Duyệt, Từ chối, Hủy, Quay lại, Xuất Excel, Tải/Xem tệp

## 3. Ma trận state-rule (bắt buộc khi status ảnh hưởng UI)

`Màn hình | State | Vai trò | Trường hiển thị | Readonly | Bắt buộc | Button hiện | Button ẩn | Rule`

State chuẩn + hành vi:
- `Draft`: trường editable, hiện Lưu/Gửi nếu có quyền
- `Submitted`: phần lớn readonly, hiện Duyệt/Từ chối cho approver
- `Approved`: core readonly, chỉ view/export/xem tệp
- `Rejected`: hiện lý do, cho sửa/gửi lại nếu nghiệp vụ cho phép
- `Cancelled`: readonly, ẩn action vận hành
- `Inactive`: readonly hoặc ẩn khỏi list mặc định
- `View-only`: ẩn thêm/sửa/xóa, mọi trường readonly

## 4. Pattern màn hình

- **List/Search**: header · quick search · filter nâng cao · table · phân trang · sort · click dòng → chi tiết. View-only ẩn thêm/sửa/xóa.
- **Create/Edit**: thông tin cơ bản · chọn object liên quan · table chi tiết · đính kèm · button. Validate trước Lưu và trước Gửi.
- **Detail + tabs**: header (tên/mã/status) · tab Chung / Chi tiết / Lịch sử / Quyết định / Đính kèm / Audit.
- **Approval**: thông tin readonly · lịch sử duyệt · ô comment · Duyệt/Từ chối (từ chối cần lý do).
- **Dashboard**: chỉ khi luồng yêu cầu — KPI card · chart · bản ghi gần đây.

## 5. Checklist trước khi output

- [ ] Đúng 1 luồng / use case
- [ ] Đúng chế độ output đã chọn
- [ ] Object chính + object liên quan tách riêng (không gộp bảng phẳng)
- [ ] State định nghĩa rõ khi status ảnh hưởng UI
- [ ] Hiển thị/readonly/bắt buộc/button mô tả theo state + role
- [ ] View-only ẩn thêm/sửa/xóa
- [ ] Tách: đã xác nhận / giả định / câu hỏi mở
- [ ] screen-md có đủ 3 bảng (trường, button, state-rule)
- [ ] lovable-prompt có: navigation, screens, component, permission, state empty/loading/error, mock data
# Mẫu DB Design

# 1. Mục tiêu thiết kế dữ liệu
- Phạm vi dữ liệu
- Nguyên tắc thiết kế

# 2. Danh sách entity chính
| Entity | Mô tả nghiệp vụ | Loại dữ liệu |
|---|---|---|

# 3. Danh sách bảng

## 3.1 [table_name]
- Mục đích:
- Entity liên quan:
- Function liên quan:
- API liên quan:

| Column | Kiểu dữ liệu gợi ý | PK | FK | Null | Unique | Default | Mô tả |
|---|---|---|---|---|---|---|---|

### Chỉ mục đề xuất
- IDX_...

### Quy tắc toàn vẹn dữ liệu
- ...

### Audit columns
- created_at
- created_by
- updated_at
- updated_by
- deleted_at (nếu soft delete)
- deleted_by (nếu soft delete)

# 4. Quan hệ giữa các bảng
| Bảng cha | Bảng con | Quan hệ | Mô tả |
|---|---|---|---|

# 5. Enum / trạng thái chuẩn
| Enum/Status | Giá trị | Ý nghĩa |
|---|---|---|

# 6. Data lifecycle
- Tạo mới
- Cập nhật
- Xóa mềm/xóa cứng
- Lưu lịch sử/versioning

# 7. Mapping dữ liệu
| Function ID | Table | Mục đích sử dụng |
|---|---|---|

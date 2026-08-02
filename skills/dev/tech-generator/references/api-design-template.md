# Mẫu API Design REST JSON

# 1. Nguyên tắc thiết kế API
- Chuẩn REST JSON
- Quy ước versioning
- Authentication/authorization gợi ý
- Pagination/filter/sort/search
- Mã lỗi chuẩn

# 2. Danh sách endpoint

## API-001 [Tên endpoint]
- Function ID liên quan:
- Mục tiêu nghiệp vụ:
- Actor/Permission:
- Method:
- Path:
- Mô tả:

### Request
#### Headers
| Header | Bắt buộc | Mô tả |
|---|---|---|

#### Path Params
| Param | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|

#### Query Params
| Param | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|

#### Body Schema
```json
{
  "example": true
}
```

### Response
#### Success Response
```json
{
  "data": {},
  "meta": {},
  "message": "success"
}
```

#### Error Cases
| HTTP Code | Error Code | Khi nào xảy ra | Mô tả |
|---|---|---|---|

### Validation & Business Rules
- ...

### Dữ liệu tác động
- Bảng:
- Trường chính:

# 3. Chuẩn response envelope gợi ý
```json
{
  "success": true,
  "data": {},
  "meta": {
    "page": 1,
    "page_size": 20,
    "total": 100
  },
  "message": "Request processed successfully"
}
```

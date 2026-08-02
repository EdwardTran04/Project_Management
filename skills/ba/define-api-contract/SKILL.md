---
name: define-api-contract
description: Định nghĩa API contract từ góc độ nghiệp vụ — endpoint, input/output data, authentication, error codes. BA định nghĩa WHAT cần trao đổi, Dev quyết định HOW implement.
---

Định nghĩa API Contract.

Hỏi người dùng:
1. Tích hợp nào cần định nghĩa? (internal API / external service)
2. Dữ liệu nào cần trao đổi giữa các hệ thống?
3. Ai gọi ai? (caller → callee)
4. Authentication: Bearer token / API key / Basic auth / ...?
5. Có SLA hoặc NFR đặc biệt không?
6. Có Feature Spec, Data Model, hoặc business rules liên quan không? Nếu có, paste vào đây.

Nếu người dùng cung cấp tài liệu đính kèm, đọc và rút trích entities, business rules trước khi tạo contract.

Tạo API Contract theo template sau:

---

# API Contract — [Tên tích hợp / Module]

**Version:** 1.0
**Ngày:** dd/mm/yyyy
**Base URL:** [staging URL nếu đã có]

## Authentication

[Mô tả authentication method và cách lấy token]

---

## [Tên API 1]

**Mục đích nghiệp vụ:** [API này phục vụ nghiệp vụ gì]
**Method:** GET / POST / PUT / PATCH / DELETE
**Endpoint:** `/api/v1/[path]`

### Request

**Headers:**

| Header | Bắt buộc | Mô tả |
|--------|---------|-------|
| Authorization | Có | Bearer {token} |

**Path Parameters:**

| Tham số | Kiểu | Mô tả |
|---------|------|-------|

**Query Parameters:**

| Tham số | Kiểu | Bắt buộc | Mô tả | Ví dụ |
|---------|------|---------|-------|-------|

**Request Body (nếu có):**

```json
{
  "field": "type — mô tả"
}
```

### Response

**Success (200/201):**

```json
{
  "field": "type — mô tả"
}
```

**Error Codes:**

| HTTP Status | Error Code | Điều kiện | Mô tả |
|-------------|-----------|-----------|-------|
| 400 | invalid_input | | |
| 401 | unauthorized | | |
| 403 | forbidden | | |
| 404 | not_found | | |
| 500 | internal_error | | |

**Business Rules áp dụng:** BR-XXX

---

## Tóm tắt tất cả endpoints

| Method | Endpoint | Mục đích |
|--------|---------|---------|
| | | |

---

Hỏi user: "Lưu vào file không?" → nếu có: xuất file, tên gợi ý `api-contract_[tên].md`.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Data model chưa có | skill: define-data-model | Làm trước để xác định request/response structure |
| Sequence diagram luồng API | skill: create-sequence-diagram | Visualize caller → callee flow |
| Nhúng vào TKTT | skill: create-tktt | API contract là input cho Phần 3.3 giao tiếp hệ thống ngoài |
| Nhúng vào TKCT | skill: create-tkct | Tham chiếu trong Phần 3d — sự kiện gọi API |
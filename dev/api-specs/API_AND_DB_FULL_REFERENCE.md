# BỘ TÀI LIỆU TRA CỨU CHI TIẾT SWAGGER API & CƠ SỞ DỮ LIỆU LOCAL (SMART WAREHOUSE WMS)

**Ngày tạo:** 12/08/2026
**Phiên bản:** v2.0 (Bao gồm chi tiết Request Payload & Response 200 OK Payload mẫu cho từng API)
**Nguồn dữ liệu:** Backend OpenAPI Swagger (`http://10.10.171.32:8080/v3/api-docs`) & PostgreSQL Database Schema (`vo_warehouse_vtit`)

---

## MỤC LỤC
1. [PHẦN I: DANH MỤC & CHI TIẾT PAYLOAD TOÀN BỘ API SWAGGER](#phan-i-danh-muc--chi-tiet-payload-toan-bo-api-swagger)
2. [PHẦN II: TOÀN BỘ CƠ SỞ DỮ LIỆU SCHEMA POSTGRESQL](#phan-ii-toan-bo-co-so-du-lieu-schema-postgresql)

---

## PHẦN I: DANH MỤC & CHI TIẾT PAYLOAD TOÀN BỘ API SWAGGER

Tổng số API Controller: **19** | Tổng số Endpoints: **454**

### Danh sách Controllers:
- `attachment-controller` (1 endpoints)
- `cargo-controller` (40 endpoints)
- `equipment-controller` (2 endpoints)
- `handling-unit-controller` (13 endpoints)
- `inbound-order-controller` (21 endpoints)
- `location-controller` (46 endpoints)
- `plant-controller` (1 endpoints)
- `registry-controller` (40 endpoints)
- `registry-order-controller` (42 endpoints)
- `registry-order-external-controller` (42 endpoints)
- `registry-policy-controller` (41 endpoints)
- `shipping-issues-controller` (1 endpoints)
- `sloc-controller` (1 endpoints)
- `task-controller` (34 endpoints)
- `task-template-controller` (2 endpoints)
- `voffice-sign-flow-controller` (6 endpoints)
- `warehouse-controller` (49 endpoints)
- `warehouse-rule-config-controller` (36 endpoints)
- `zone-controller` (36 endpoints)

---

### Controller: `attachment-controller`

#### `GET /api/registration/attachments/{taskId}`

**Operation ID:** `getAttachments`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |
| `shipmentCode` | `query` | `string` | Có |  |
| `serviceContext` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

### Controller: `cargo-controller`

#### `GET /api/registration/cargo`

**Operation ID:** `searchByRsql_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/registration/cargo`

**Operation ID:** `create_14`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `PUT /api/registration/cargo`

**Operation ID:** `update_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/add`

**Operation ID:** `add_14`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/add-associate`

**Operation ID:** `addAssociate_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/add-batch`

**Operation ID:** `add_15`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/cargo/change-reference-key/{primaryId}/{referenceKey}`

**Operation ID:** `changeReferenceKey_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |
| `referenceKey` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/cargo/count`

**Operation ID:** `count_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/cargo/count-by-textual`

**Operation ID:** `countByTextual_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/cargo/create`

**Operation ID:** `create_15`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/create-associate`

**Operation ID:** `createAssociate_7`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/delete`

**Operation ID:** `delete_14`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/delete-associate`

**Operation ID:** `deleteAssociate_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/delete-batch`

**Operation ID:** `delete_15`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/cargo/delete-by-ids`

**Operation ID:** `deleteByIds_7`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/registration/cargo/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_15`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/fetch-by-code`

**Operation ID:** `fetchByCode_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/fetch-by-context`

**Operation ID:** `fetchByContext_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_15`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/fetch-model-associate`

**Operation ID:** `fetchAssociate_14`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/fetch/{primaryId}`

**Operation ID:** `fetch_14`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/find-associate/{primaryId}`

**Operation ID:** `findAssociate_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/find-by-code`

**Operation ID:** `findByCode_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/find-by-context`

**Operation ID:** `findByContext_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/find-by-uuid/{uuid}`

**Operation ID:** `find_15`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/find/{primaryId}`

**Operation ID:** `find_14`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/get-associate/{primaryId}`

**Operation ID:** `getAssociate_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/get-by-code`

**Operation ID:** `getByCode_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/get-by-context`

**Operation ID:** `getByContext_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/get-by-uuid/{uuid}`

**Operation ID:** `get_15`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/get/{primaryId}`

**Operation ID:** `get_14`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/save`

**Operation ID:** `save_14`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/save-batch`

**Operation ID:** `save_15`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/cargo/search`

**Operation ID:** `search_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/cargo/select-by-textual`

**Operation ID:** `selectByTextual_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/cargo/update`

**Operation ID:** `update_23`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/update-associate`

**Operation ID:** `updateAssociate_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `POST /api/registration/cargo/update-batch`

**Operation ID:** `update_24`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "quantity": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "settings": "string",
    "waiting": true
  }
]
```

---

#### `DELETE /api/registration/cargo/{id}`

**Operation ID:** `deleteById_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

#### `GET /api/registration/cargo/{id}`

**Operation ID:** `findById_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "quantity": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "settings": "string",
  "waiting": true
}
```

---

### Controller: `equipment-controller`

#### `POST /api/registration/equipment/dimensions`

**Operation ID:** `searchDimensions`

**Request Body (`application/json`):**

```json
{
  "codes": [
    "string"
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/equipment/list-equipment`

**Operation ID:** `listEquipment`

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

### Controller: `handling-unit-controller`

#### `POST /api/registration/handling-units/created`

**Operation ID:** `createHandlingUnit`

**Request Body (`application/json`):**

```json
{
  "taskId": 0,
  "orderId": 0,
  "equipmentId": 0,
  "items": [
    "..."
  ],
  "isSerial": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "huId": "...",
    "huCode": "...",
    "rfidCode": "...",
    "equipmentId": "...",
    "equipmentLabel": "...",
    "totalQuantity": "...",
    "productCodeCount": "...",
    "status": "...",
    "printStatus": "...",
    "items": "..."
  }
}
```

---

#### `POST /api/registration/handling-units/delete`

**Operation ID:** `deleteHandlingUnit`

**Request Body (`application/json`):**

```json
{
  "idHandlingUnit": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

---

#### `POST /api/registration/handling-units/items/add-serial`

**Operation ID:** `addSerialToHandlingUnit`

**Request Body (`application/json`):**

```json
{
  "huId": 0,
  "serial": "string",
  "fromHuId": 0,
  "items": [
    "..."
  ],
  "isSerial": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/handling-units/items/delete`

**Operation ID:** `deleteHandlingUnitItem`

**Request Body (`application/json`):**

```json
{
  "handlingUnitItemId": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

---

#### `POST /api/registration/handling-units/list-hu`

**Operation ID:** `getHandlingUnits`

**Request Body (`application/json`):**

```json
{
  "taskId": 0,
  "isSerial": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/handling-units/list-hu-storage`

**Operation ID:** `getAllHandlingUnitTaskStorage`

**Request Body (`application/json`):**

```json
{
  "taskId": 0,
  "warehouseId": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/handling-units/order/search`

**Operation ID:** `getHandlingUnitsByOrderId`

**Request Body (`application/json`):**

```json
{
  "orderId": 0,
  "page": 0,
  "size": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "...",
    "allStored": "..."
  }
}
```

---

#### `POST /api/registration/handling-units/recommend-packing`

**Operation ID:** `recommendOptimalPacking`

**Request Body (`application/json`):**

```json
{
  "products": [
    "..."
  ],
  "equipments": [
    "..."
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "recommendationMessage": "...",
    "basisMessage": "...",
    "totalEquipmentCount": "...",
    "equipmentUsages": "...",
    "packedUnits": "...",
    "persistPlans": "..."
  }
}
```

---

#### `POST /api/registration/handling-units/recommend-packing-automatic`

**Operation ID:** `recommendOptimalPackingAutomatic`

**Request Body (`application/json`):**

```json
{
  "orderId": 0,
  "taskId": 0,
  "isSerial": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": "string"
}
```

---

#### `POST /api/registration/handling-units/serial/scan`

**Operation ID:** `scanSerialForCreate`

**Request Body (`application/json`):**

```json
{
  "orderId": 0,
  "serial": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "serial": "...",
    "componentId": "...",
    "productCode": "...",
    "inHandlingUnit": "...",
    "fromHuId": "...",
    "fromHuRfid": "...",
    "handlingUnitItemId": "..."
  }
}
```

---

#### `POST /api/registration/handling-units/update-equipment`

**Operation ID:** `updateEquipmentHu`

**Request Body (`application/json`):**

```json
{
  "huId": 0,
  "equipmentId": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": "string"
}
```

---

#### `PUT /api/registration/handling-units/{huId}/serial-assignments`

**Operation ID:** `assignSerials`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `huId` | `path` | `integer` | Có |  |

**Request Body (`application/json`):**

```json
{
  "items": [
    "..."
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "huId": "...",
    "huCode": "...",
    "rfidCode": "...",
    "equipmentLabel": "...",
    "productCodeCount": "...",
    "items": "..."
  }
}
```

---

#### `GET /api/registration/handling-units/{huId}/serials`

**Operation ID:** `getSerialDetail`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `huId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "huId": "...",
    "huCode": "...",
    "rfidCode": "...",
    "equipmentLabel": "...",
    "productCodeCount": "...",
    "items": "..."
  }
}
```

---

### Controller: `inbound-order-controller`

#### `POST /api/registration/inbound-orders/confirm`

**Operation ID:** `confirmOrdersByDate`

**Request Body (`application/json`):**

```json
{
  "confirmDate": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/inbound-orders/cumulative-stats`

**Operation ID:** `getCumulativeStats`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `plant` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "plantSlaStats": "...",
    "monthlyStats": "...",
    "yearlyStats": "..."
  }
}
```

---

#### `POST /api/registration/inbound-orders/dashboard`

**Operation ID:** `getInboundOrderDashboard`

**Request Body (`application/json`):**

```json
{
  "keyword": "string",
  "warehouseIds": [
    0
  ],
  "orderTypes": [
    "string"
  ],
  "statuses": [
    "string"
  ],
  "plant": "string",
  "slaStatus": "string",
  "fromDate": "2026-08-12",
  "toDate": "2026-08-12",
  "page": 0,
  "size": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "totalOrder": "...",
    "waitConfirmCount": "...",
    "inProgressCount": "...",
    "completedCount": "...",
    "rejectedCount": "..."
  }
}
```

---

#### `GET /api/registration/inbound-orders/detail/{orderId}`

**Operation ID:** `detailOrder`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "id": "...",
    "orderCode": "...",
    "orderType": "...",
    "documentCodeSrc": "...",
    "warehouseCode": "...",
    "sourceOrder": "...",
    "lineProduct": "...",
    "quantity": "...",
    "managerName": "...",
    "contractCode": "...",
    "noDateCode": "...",
    "externalProjectCode": "...",
    "warehouseName": "...",
    "unitManager": "...",
    "signContractDate": "...",
    "plannedDate": "...",
    "reasonOrder": "...",
    "description": "...",
    "status": "...",
    "totalWeight": "...",
    "netWeight": "...",
    "totalVolume": "...",
    "confirmTaskId": "...",
    "statusName": "..."
  }
}
```

---

#### `POST /api/registration/inbound-orders/export`

**Operation ID:** `exportInboundOrders`

**Request Body (`application/json`):**

```json
{
  "keyword": "string",
  "warehouseIds": [
    0
  ],
  "orderTypes": [
    "string"
  ],
  "statuses": [
    "string"
  ],
  "plant": "string",
  "slaStatus": "string",
  "fromDate": "2026-08-12",
  "toDate": "2026-08-12",
  "page": 0,
  "size": 0
}
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `GET /api/registration/inbound-orders/products/check-by-serial`

**Operation ID:** `checkProductBySerial`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `serialNo` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "id": "...",
    "productCode": "...",
    "productName": "...",
    "deleted": "...",
    "unit": "...",
    "serialNo": "..."
  }
}
```

---

#### `GET /api/registration/inbound-orders/products/find-by-serial`

**Operation ID:** `findProductBySerial`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `serialNo` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "id": "...",
    "productCode": "...",
    "productName": "...",
    "deleted": "...",
    "unit": "...",
    "serialNo": "..."
  }
}
```

---

#### `POST /api/registration/inbound-orders/products/packing-select`

**Operation ID:** `getInboundOrderPackingProducts`

**Request Body (`application/json`):**

```json
{
  "orderId": 0,
  "productCode": "string",
  "isSerial": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/inbound-orders/products/search`

**Operation ID:** `getInboundOrderProducts`

**Request Body (`application/json`):**

```json
{
  "orderId": 0,
  "page": 0,
  "size": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "..."
  }
}
```

---

#### `POST /api/registration/inbound-orders/search`

**Operation ID:** `searchInboundOrders`

**Request Body (`application/json`):**

```json
{
  "keyword": "string",
  "warehouseIds": [
    0
  ],
  "orderTypes": [
    "string"
  ],
  "statuses": [
    "string"
  ],
  "plant": "string",
  "slaStatus": "string",
  "fromDate": "2026-08-12",
  "toDate": "2026-08-12",
  "page": 0,
  "size": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "..."
  }
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/documents`

**Operation ID:** `getInboundOrderDocuments`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/documents/download`

**Operation ID:** `downloadInboundOrderDocuments`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
[
  "string"
]
```

---

#### `GET /api/registration/inbound-orders/{orderId}/history`

**Operation ID:** `getInboundOrderHistory`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/kcs-results`

**Operation ID:** `getInboundOrderKcsResults`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |
| `request` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "summary": "...",
    "items": "..."
  }
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/product-hus`

**Operation ID:** `getInboundOrderProductHu`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/product-packing`

**Operation ID:** `getInboundOrderProductPacking`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/products/summary`

**Operation ID:** `getInboundOrderProductSummary`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "totalProducts": "...",
    "totalWeight": "...",
    "totalVolume": "...",
    "cartons": "..."
  }
}
```

---

#### `POST /api/registration/inbound-orders/{orderId}/rfid/generate`

**Operation ID:** `generateRfid`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "rfidCode": "..."
  }
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/sap-logs`

**Operation ID:** `getActualReceivedSapLogs`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/shipping`

**Operation ID:** `getInboundOrderShipping`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/inbound-orders/{orderId}/tasks`

**Operation ID:** `getInboundOrderTasks`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

### Controller: `location-controller`

#### `GET /api/registration/location`

**Operation ID:** `searchByRsql_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/registration/location`

**Operation ID:** `create_12`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `PUT /api/registration/location`

**Operation ID:** `update_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/add`

**Operation ID:** `add_12`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/add-associate`

**Operation ID:** `addAssociate_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/add-batch`

**Operation ID:** `add_13`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `POST /api/registration/location/change-reference-key/{primaryId}/{referenceKey}`

**Operation ID:** `changeReferenceKey_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |
| `referenceKey` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/location/count`

**Operation ID:** `count_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/location/count-by-textual`

**Operation ID:** `countByTextual_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/location/create`

**Operation ID:** `create_13`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/create-associate`

**Operation ID:** `createAssociate_6`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/delete`

**Operation ID:** `delete_12`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/delete-associate`

**Operation ID:** `deleteAssociate_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/delete-batch`

**Operation ID:** `delete_13`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `POST /api/registration/location/delete-by-ids`

**Operation ID:** `deleteByIds_6`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/registration/location/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_13`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/fetch-by-code`

**Operation ID:** `fetchByCode_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/fetch-by-context`

**Operation ID:** `fetchByContext_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_13`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/fetch-district-by-code`

**Operation ID:** `fetchDistrictByCode`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/fetch-model-associate`

**Operation ID:** `fetchAssociate_12`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/fetch-province-by-code`

**Operation ID:** `fetchProvinceByCode`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/fetch-village-by-code`

**Operation ID:** `fetchVillageByCode`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/fetch/{primaryId}`

**Operation ID:** `fetch_12`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/find-associate/{primaryId}`

**Operation ID:** `findAssociate_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/find-by-code`

**Operation ID:** `findByCode_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/find-by-context`

**Operation ID:** `findByContext_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/find-by-uuid/{uuid}`

**Operation ID:** `find_13`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/find/{primaryId}`

**Operation ID:** `find_12`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/get-associate/{primaryId}`

**Operation ID:** `getAssociate_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/get-bread-crumb/{primaryId}`

**Operation ID:** `selectBreadcrumb`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `POST /api/registration/location/get-by-code`

**Operation ID:** `getByCode_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/get-by-context`

**Operation ID:** `getByContext_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/get-by-uuid/{uuid}`

**Operation ID:** `get_13`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/get/{primaryId}`

**Operation ID:** `get_12`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/save`

**Operation ID:** `save_12`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/save-batch`

**Operation ID:** `save_13`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `POST /api/registration/location/search`

**Operation ID:** `search_7`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `POST /api/registration/location/select-by-textual`

**Operation ID:** `selectByTextual_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `POST /api/registration/location/select-children/{parentId}`

**Operation ID:** `selectChildren`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `parentId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `POST /api/registration/location/select-root/{primaryId}`

**Operation ID:** `selectRoot`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `POST /api/registration/location/update`

**Operation ID:** `update_21`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/update-associate`

**Operation ID:** `updateAssociate_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `POST /api/registration/location/update-batch`

**Operation ID:** `update_22`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "parentId": 0,
    "parentCode": "string",
    "type": "string",
    "code": "string",
    "name": "string",
    "pathName": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": "string",
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "migrationKey": "string",
    "migrationDate": "2026-08-12T10:00:00Z",
    "symbol": "string"
  }
]
```

---

#### `DELETE /api/registration/location/{id}`

**Operation ID:** `deleteById_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

#### `GET /api/registration/location/{id}`

**Operation ID:** `findById_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "parentId": 0,
  "parentCode": "string",
  "type": "string",
  "code": "string",
  "name": "string",
  "pathName": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": "string",
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "migrationKey": "string",
  "migrationDate": "2026-08-12T10:00:00Z",
  "symbol": "string"
}
```

---

### Controller: `plant-controller`

#### `GET /api/registration/plants`

**Operation ID:** `getPlants`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `size` | `query` | `integer` | Không |  |
| `name` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "..."
  }
}
```

---

### Controller: `registry-controller`

#### `GET /api/registration/registry`

**Operation ID:** `searchByRsql_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/registration/registry`

**Operation ID:** `create_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `PUT /api/registration/registry`

**Operation ID:** `update_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/add`

**Operation ID:** `add_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/add-associate`

**Operation ID:** `addAssociate_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/add-batch`

**Operation ID:** `add_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry/change-reference-key/{primaryId}/{referenceKey}`

**Operation ID:** `changeReferenceKey`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |
| `referenceKey` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry/count`

**Operation ID:** `count_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry/count-by-textual`

**Operation ID:** `countByTextual`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry/create`

**Operation ID:** `create_7`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/create-associate`

**Operation ID:** `createAssociate_3`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/delete`

**Operation ID:** `delete_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/delete-associate`

**Operation ID:** `deleteAssociate_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/delete-batch`

**Operation ID:** `delete_7`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry/delete-by-ids`

**Operation ID:** `deleteByIds_3`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/registration/registry/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/fetch-by-code`

**Operation ID:** `fetchByCode`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/fetch-by-context`

**Operation ID:** `fetchByContext_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/fetch-model-associate`

**Operation ID:** `fetchAssociate_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/fetch/{primaryId}`

**Operation ID:** `fetch_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/find-associate/{primaryId}`

**Operation ID:** `findAssociate_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/find-by-code`

**Operation ID:** `findByCode`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/find-by-context`

**Operation ID:** `findByContext_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/find-by-uuid/{uuid}`

**Operation ID:** `find_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/find/{primaryId}`

**Operation ID:** `find_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/get-associate/{primaryId}`

**Operation ID:** `getAssociate_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/get-by-code`

**Operation ID:** `getByCode_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/get-by-context`

**Operation ID:** `getByContext_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/get-by-uuid/{uuid}`

**Operation ID:** `get_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/get/{primaryId}`

**Operation ID:** `get_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/save`

**Operation ID:** `save_6`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/save-batch`

**Operation ID:** `save_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry/search`

**Operation ID:** `search_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry/select-by-textual`

**Operation ID:** `selectByTextual`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry/update`

**Operation ID:** `update_15`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/update-associate`

**Operation ID:** `updateAssociate_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry/update-batch`

**Operation ID:** `update_16`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "approver": "string",
    "approvalStatus": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `DELETE /api/registration/registry/{id}`

**Operation ID:** `deleteById_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `GET /api/registration/registry/{id}`

**Operation ID:** `findById_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "approver": "string",
  "approvalStatus": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

### Controller: `registry-order-controller`

#### `GET /api/registration/registry-order`

**Operation ID:** `searchByRsql_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/registration/registry-order`

**Operation ID:** `create_10`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `PUT /api/registration/registry-order`

**Operation ID:** `update_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/add`

**Operation ID:** `add_10`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/add-associate`

**Operation ID:** `addAssociate_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/add-batch`

**Operation ID:** `add_11`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-order/change-reference-key/{primaryId}/{referenceKey}`

**Operation ID:** `changeReferenceKey_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |
| `referenceKey` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry-order/count`

**Operation ID:** `count_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry-order/count-by-textual`

**Operation ID:** `countByTextual_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry-order/create`

**Operation ID:** `create_11`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/create-associate`

**Operation ID:** `createAssociate_5`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/delete`

**Operation ID:** `delete_10`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/delete-associate`

**Operation ID:** `deleteAssociate_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/delete-batch`

**Operation ID:** `delete_11`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-order/delete-by-ids`

**Operation ID:** `deleteByIds_5`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/registration/registry-order/download-file-template`

**Operation ID:** `downloadFileTemplate`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `fileId` | `query` | `integer` | Có |  |
| `repoName` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
"string"
```

---

#### `POST /api/registration/registry-order/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_11`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/fetch-by-code`

**Operation ID:** `fetchByCode_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/fetch-by-context`

**Operation ID:** `fetchByContext_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_11`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/fetch-model-associate`

**Operation ID:** `fetchAssociate_10`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/fetch/{primaryId}`

**Operation ID:** `fetch_10`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/find-associate/{primaryId}`

**Operation ID:** `findAssociate_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/find-by-code`

**Operation ID:** `findByCode_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/find-by-context`

**Operation ID:** `findByContext_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/find-by-uuid/{uuid}`

**Operation ID:** `find_11`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/find/{primaryId}`

**Operation ID:** `find_10`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/get-associate/{primaryId}`

**Operation ID:** `getAssociate_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/get-by-code`

**Operation ID:** `getByCode_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/get-by-context`

**Operation ID:** `getByContext_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/get-by-uuid/{uuid}`

**Operation ID:** `get_11`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/get/{primaryId}`

**Operation ID:** `get_10`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/import-excel`

**Operation ID:** `importExcel`

**Request Body (`application/json`):**

```json
{
  "file": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{}
```

---

#### `POST /api/registration/registry-order/save`

**Operation ID:** `save_10`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/save-batch`

**Operation ID:** `save_11`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-order/search`

**Operation ID:** `search_6`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-order/select-by-textual`

**Operation ID:** `selectByTextual_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-order/update`

**Operation ID:** `update_19`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/update-associate`

**Operation ID:** `updateAssociate_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/registration/registry-order/update-batch`

**Operation ID:** `update_20`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `DELETE /api/registration/registry-order/{id}`

**Operation ID:** `deleteById_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `GET /api/registration/registry-order/{id}`

**Operation ID:** `findById_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

### Controller: `registry-order-external-controller`

#### `GET /api/external/registration/registry-order`

**Operation ID:** `searchByRsql_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/external/registration/registry-order`

**Operation ID:** `create_16`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `PUT /api/external/registration/registry-order`

**Operation ID:** `update_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/add`

**Operation ID:** `add_16`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/add-associate`

**Operation ID:** `addAssociate_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/add-batch`

**Operation ID:** `add_17`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/external/registration/registry-order/change-reference-key/{primaryId}/{referenceKey}`

**Operation ID:** `changeReferenceKey_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |
| `referenceKey` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/external/registration/registry-order/copy`

**Operation ID:** `copyOrder`

**Request Body (`application/json`):**

```json
{
  "username": "string",
  "relative_type": "string",
  "relative_name": "string",
  "village": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "msg_no": "string",
  "message": "string"
}
```

---

#### `POST /api/external/registration/registry-order/count`

**Operation ID:** `count_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/external/registration/registry-order/count-by-textual`

**Operation ID:** `countByTextual_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/external/registration/registry-order/create`

**Operation ID:** `create_17`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/create-associate`

**Operation ID:** `createAssociate_8`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/delete`

**Operation ID:** `delete_16`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/delete-associate`

**Operation ID:** `deleteAssociate_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/delete-batch`

**Operation ID:** `delete_17`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/external/registration/registry-order/delete-by-ids`

**Operation ID:** `deleteByIds_8`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/external/registration/registry-order/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_17`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/fetch-by-code`

**Operation ID:** `fetchByCode_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/fetch-by-context`

**Operation ID:** `fetchByContext_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_17`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/fetch-model-associate`

**Operation ID:** `fetchAssociate_16`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/fetch/{primaryId}`

**Operation ID:** `fetch_16`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/find-associate/{primaryId}`

**Operation ID:** `findAssociate_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/find-by-code`

**Operation ID:** `findByCode_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/find-by-context`

**Operation ID:** `findByContext_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/find-by-uuid/{uuid}`

**Operation ID:** `find_17`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/find/{primaryId}`

**Operation ID:** `find_16`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/get-associate/{primaryId}`

**Operation ID:** `getAssociate_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/get-by-code`

**Operation ID:** `getByCode_7`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/get-by-context`

**Operation ID:** `getByContext_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/get-by-uuid/{uuid}`

**Operation ID:** `get_17`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/get/{primaryId}`

**Operation ID:** `get_16`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/save`

**Operation ID:** `save_16`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/save-address`

**Operation ID:** `saveAddress`

**Request Body (`application/json`):**

```json
{
  "username": "string",
  "relative_type": "string",
  "relative_name": "string",
  "village": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "msg_no": "string",
  "message": "string"
}
```

---

#### `POST /api/external/registration/registry-order/save-batch`

**Operation ID:** `save_17`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/external/registration/registry-order/search`

**Operation ID:** `search_9`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/external/registration/registry-order/select-by-textual`

**Operation ID:** `selectByTextual_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `POST /api/external/registration/registry-order/update`

**Operation ID:** `update_25`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/update-associate`

**Operation ID:** `updateAssociate_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `POST /api/external/registration/registry-order/update-batch`

**Operation ID:** `update_26`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "code": "string",
    "name": "string",
    "year": 0,
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "organizationPath": "string",
    "register": "string",
    "registerId": 0,
    "approver": "string",
    "deliver": "string",
    "deliverId": 0,
    "deliverPhone": "string",
    "receiver": "string",
    "receiverName": "string",
    "receiverId": 0,
    "receiverIdentity": "string",
    "relationType": "string",
    "receiverPhone": "string",
    "locationCode": "string",
    "locationPath": "string",
    "country": "string",
    "province": "string",
    "district": "string",
    "village": "string",
    "building": "string",
    "street": "string",
    "zipCode": "string",
    "deliveryAddress": "string",
    "cargo": "string",
    "cargoId": 0,
    "approvalStatus": "string",
    "dataSource": "string",
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "positionType": "string",
    "objectType": "string",
    "communeName": "string",
    "districtName": "string",
    "provinceName": "string",
    "importModelBase": "...",
    "waiting": true
  }
]
```

---

#### `DELETE /api/external/registration/registry-order/{id}`

**Operation ID:** `deleteById_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

#### `GET /api/external/registration/registry-order/{id}`

**Operation ID:** `findById_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "code": "string",
  "name": "string",
  "year": 0,
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "organizationPath": "string",
  "register": "string",
  "registerId": 0,
  "approver": "string",
  "deliver": "string",
  "deliverId": 0,
  "deliverPhone": "string",
  "receiver": "string",
  "receiverName": "string",
  "receiverId": 0,
  "receiverIdentity": "string",
  "relationType": "string",
  "receiverPhone": "string",
  "locationCode": "string",
  "locationPath": "string",
  "country": "string",
  "province": "string",
  "district": "string",
  "village": "string",
  "building": "string",
  "street": "string",
  "zipCode": "string",
  "deliveryAddress": "string",
  "cargo": "string",
  "cargoId": 0,
  "approvalStatus": "string",
  "dataSource": "string",
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "positionType": "string",
  "objectType": "string",
  "communeName": "string",
  "districtName": "string",
  "provinceName": "string",
  "importModelBase": {
    "sheetIdx": "...",
    "rowIdx": "...",
    "errorMessages": "..."
  },
  "waiting": true
}
```

---

### Controller: `registry-policy-controller`

#### `GET /api/registration/registry-policy`

**Operation ID:** `searchByRsql_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/registration/registry-policy`

**Operation ID:** `create_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `PUT /api/registration/registry-policy`

**Operation ID:** `update_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/add`

**Operation ID:** `add_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/add-associate`

**Operation ID:** `addAssociate_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/add-batch`

**Operation ID:** `add_9`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-policy/change-reference-key/{primaryId}/{referenceKey}`

**Operation ID:** `changeReferenceKey_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |
| `referenceKey` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry-policy/count`

**Operation ID:** `count_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry-policy/count-by-textual`

**Operation ID:** `countByTextual_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/registry-policy/create`

**Operation ID:** `create_9`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/create-associate`

**Operation ID:** `createAssociate_4`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/delete`

**Operation ID:** `delete_8`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/delete-associate`

**Operation ID:** `deleteAssociate_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/delete-batch`

**Operation ID:** `delete_9`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-policy/delete-by-ids`

**Operation ID:** `deleteByIds_4`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/registration/registry-policy/duplicate/{dataId}`

**Operation ID:** `duplicate`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `dataId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_9`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/fetch-by-code`

**Operation ID:** `fetchByCode_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/fetch-by-context`

**Operation ID:** `fetchByContext_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_9`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/fetch-model-associate`

**Operation ID:** `fetchAssociate_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/fetch/{primaryId}`

**Operation ID:** `fetch_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/find-associate/{primaryId}`

**Operation ID:** `findAssociate_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/find-by-code`

**Operation ID:** `findByCode_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/find-by-context`

**Operation ID:** `findByContext_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/find-by-uuid/{uuid}`

**Operation ID:** `find_9`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/find/{primaryId}`

**Operation ID:** `find_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/get-associate/{primaryId}`

**Operation ID:** `getAssociate_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/get-by-code`

**Operation ID:** `getByCode_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `code` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/get-by-context`

**Operation ID:** `getByContext_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/get-by-uuid/{uuid}`

**Operation ID:** `get_9`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/get/{primaryId}`

**Operation ID:** `get_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/save`

**Operation ID:** `save_8`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/save-batch`

**Operation ID:** `save_9`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-policy/search`

**Operation ID:** `search_5`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-policy/select-by-textual`

**Operation ID:** `selectByTextual_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `POST /api/registration/registry-policy/update`

**Operation ID:** `update_17`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/update-associate`

**Operation ID:** `updateAssociate_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `POST /api/registration/registry-policy/update-batch`

**Operation ID:** `update_18`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "version": 0,
    "type": "string",
    "code": "string",
    "name": "string",
    "organizationId": 0,
    "organizationCode": "string",
    "organizationName": "string",
    "cargo": "string",
    "cargoId": 0,
    "quantity": 0,
    "register": "string",
    "registerId": 0,
    "startDate": "2026-08-12T10:00:00Z",
    "endDate": "2026-08-12T10:00:00Z",
    "publishDate": "2026-08-12T10:00:00Z",
    "expireDate": "2026-08-12T10:00:00Z",
    "priority": 0,
    "status": 0,
    "deleted": true,
    "description": "string",
    "tags": "string",
    "main": true,
    "referenceKey": "string",
    "referenceDate": "2026-08-12T10:00:00Z",
    "waiting": true
  }
]
```

---

#### `DELETE /api/registration/registry-policy/{id}`

**Operation ID:** `deleteById_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

#### `GET /api/registration/registry-policy/{id}`

**Operation ID:** `findById_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "version": 0,
  "type": "string",
  "code": "string",
  "name": "string",
  "organizationId": 0,
  "organizationCode": "string",
  "organizationName": "string",
  "cargo": "string",
  "cargoId": 0,
  "quantity": 0,
  "register": "string",
  "registerId": 0,
  "startDate": "2026-08-12T10:00:00Z",
  "endDate": "2026-08-12T10:00:00Z",
  "publishDate": "2026-08-12T10:00:00Z",
  "expireDate": "2026-08-12T10:00:00Z",
  "priority": 0,
  "status": 0,
  "deleted": true,
  "description": "string",
  "tags": "string",
  "main": true,
  "referenceKey": "string",
  "referenceDate": "2026-08-12T10:00:00Z",
  "waiting": true
}
```

---

### Controller: `shipping-issues-controller`

#### `POST /api/registration/tasks/shipping-issues`

**Operation ID:** `updateInfoShippingIssue`

**Request Body (`application/json`):**

```json
{
  "request": {
    "id": 0,
    "type": "string",
    "description": "string"
  },
  "serviceContext": {
    "companyId": 0,
    "userId": 0,
    "userName": "string",
    "layoutId": 0,
    "languageId": "string",
    "remoteAddress": "string",
    "remoteHost": "string",
    "statementId": "string",
    "selectType": "string",
    "orderType": "string",
    "orderField": "string",
    "orderAsc": true,
    "associate": true,
    "start": 0,
    "limit": 0,
    "trashMode": 0,
    "params": [
      "..."
    ],
    "utc": "string",
    "utcdate": "2026-08-12T10:00:00Z"
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": "string"
}
```

---

### Controller: `sloc-controller`

#### `GET /api/registration/slocs/{plantCode}`

**Operation ID:** `getSlocs`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `plantCode` | `path` | `string` | Có |  |
| `size` | `query` | `integer` | Không |  |
| `name` | `query` | `string` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "..."
  }
}
```

---

### Controller: `task-controller`

#### `GET /api/registration/tasks/actual-summary-mobile/{orderId}`

**Operation ID:** `actualReceiptSummaryMobile`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "passSummary": "...",
    "failSummary": "..."
  }
}
```

---

#### `GET /api/registration/tasks/actual-summary/{orderId}`

**Operation ID:** `actualReceiptSummary`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `orderId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "totalDocument": "...",
    "totalQuantityActual": "...",
    "totalPassKcs": "...",
    "totalFailKcs": "...",
    "hasQuantityActual": "...",
    "statusSAP": "..."
  }
}
```

---

#### `POST /api/registration/tasks/check-ncc/accept`

**Operation ID:** `acceptNCC`

**Request Body (`application/json`):**

```json
{
  "taskId": 0,
  "expectedReceiveDate": "2026-08-12",
  "expectedReceiveTime": {
    "hour": "...",
    "minute": "...",
    "second": "...",
    "nano": "..."
  },
  "note": "string",
  "actionBy": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "taskCode": "...",
    "taskStatus": "...",
    "orderCode": "...",
    "orderStatus": "...",
    "decision": "...",
    "acceptedAt": "...",
    "acceptedBy": "...",
    "expectedReceiveDate": "...",
    "expectedReceiveTime": "...",
    "generatedTasks": "..."
  }
}
```

---

#### `POST /api/registration/tasks/check-ncc/reject`

**Operation ID:** `rejectNCC`

**Request Body (`application/json`):**

```json
{
  "taskId": 0,
  "rejectReason": "string",
  "actionBy": 0,
  "note": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "taskCode": "...",
    "taskStatus": "...",
    "orderCode": "...",
    "orderStatus": "...",
    "decision": "...",
    "rejectReason": "...",
    "rejectedAt": "...",
    "rejectedBy": "...",
    "sapStatus": "...",
    "sapMessage": "..."
  }
}
```

---

#### `POST /api/registration/tasks/confirm-hu-location`

**Operation ID:** `confirmMappingHu2Equipment`

**Request Body (`application/json`):**

```json
{
  "huId": 0,
  "zoneEquipmentId": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/dash-board`

**Operation ID:** `dashBoardTask`

**Request Body (`application/json`):**

```json
{
  "keyword": "string",
  "templateCode": [
    "string"
  ],
  "zoneCode": [
    "string"
  ],
  "status": [
    0
  ],
  "slaStatus": "string",
  "orderId": [
    0
  ],
  "createdDate": "2026-08-12",
  "page": 0,
  "size": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "totalTask": "...",
    "waitConfirmCount": "...",
    "overdueSlaKpiCount": "...",
    "notStartedCount": "...",
    "inProgressCount": "...",
    "completedCount": "...",
    "monthlyCumulativeCount": "...",
    "yearlyCumulativeCount": "..."
  }
}
```

---

#### `POST /api/registration/tasks/export`

**Operation ID:** `exportTasks`

**Request Body (`application/json`):**

```json
{
  "keyword": "string",
  "templateCode": [
    "string"
  ],
  "zoneCode": [
    "string"
  ],
  "status": [
    0
  ],
  "slaStatus": "string",
  "orderId": [
    0
  ],
  "createdDate": "2026-08-12",
  "page": 0,
  "size": 0
}
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/registration/tasks/get-all-equipment`

**Operation ID:** `scanLocationEquipment`

**Request Body (`application/json`):**

```json
{
  "warehouseId": 0,
  "equipmentCode": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/tasks/search`

**Operation ID:** `searchTasks`

**Request Body (`application/json`):**

```json
{
  "keyword": "string",
  "templateCode": [
    "string"
  ],
  "zoneCode": [
    "string"
  ],
  "status": [
    0
  ],
  "slaStatus": "string",
  "orderId": [
    0
  ],
  "createdDate": "2026-08-12",
  "page": 0,
  "size": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "..."
  }
}
```

---

#### `POST /api/registration/tasks/{taskId}/bbbg/complete`

**Operation ID:** `completeBBBGTask`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/bbbg/reject`

**Operation ID:** `rejectBBBGTask`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`multipart/form-data`):**

```json
{
  "data": {
    "reason": "string"
  },
  "files": [
    "string"
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/bbbg/signatures`

**Operation ID:** `uploadSignature`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`multipart/form-data`):**

```json
{
  "file": "string",
  "data": {
    "role": "string"
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `GET /api/registration/tasks/{taskId}/bbbg/signatures/status`

**Operation ID:** `getSignatureStatus`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "isInspectorSigned": "...",
    "isSupplierSigned": "..."
  }
}
```

---

#### `POST /api/registration/tasks/{taskId}/complete-actual-received`

**Operation ID:** `completeActualReceived`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": "string"
}
```

---

#### `POST /api/registration/tasks/{taskId}/complete-packing`

**Operation ID:** `completeTaskPackingPrintRfid`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/complete-security-monitoring`

**Operation ID:** `completeSecurityMonitoring`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": "string"
}
```

---

#### `POST /api/registration/tasks/{taskId}/completed-kcs-results`

**Operation ID:** `completeTaskKcsResults`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/completed-putaway`

**Operation ID:** `completeTaskLocatedStorage`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/extend-kpi`

**Operation ID:** `extendTaskKpi`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`application/json`):**

```json
{
  "data": {
    "extendMinutes": 0,
    "reason": "string"
  },
  "files": [
    "string"
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/gate`

**Operation ID:** `updateInfoGateToShipping`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`multipart/form-data`):**

```json
{
  "request": {
    "actualPlateNo": "string",
    "type": 0,
    "shippingCode": "string",
    "images": [
      "..."
    ]
  },
  "serviceContext": {
    "companyId": 0,
    "userId": 0,
    "userName": "string",
    "layoutId": 0,
    "languageId": "string",
    "remoteAddress": "string",
    "remoteHost": "string",
    "statementId": "string",
    "selectType": "string",
    "orderType": "string",
    "orderField": "string",
    "orderAsc": true,
    "associate": true,
    "start": 0,
    "limit": 0,
    "trashMode": 0,
    "params": [
      "..."
    ],
    "utc": "string",
    "utcdate": "2026-08-12T10:00:00Z"
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": "string"
}
```

---

#### `GET /api/registration/tasks/{taskId}/header`

**Operation ID:** `getTaskHeader`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "taskId": "...",
    "taskCode": "...",
    "status": "...",
    "statusName": "...",
    "slaStatus": "...",
    "slaDueAt": "...",
    "taskType": "...",
    "area": "...",
    "assigneeName": "...",
    "orderCode": "...",
    "orderId": "...",
    "poCode": "...",
    "sourceOrder": "...",
    "totalProduct": "...",
    "totalAmount": "..."
  }
}
```

---

#### `GET /api/registration/tasks/{taskId}/packing-area-transfer`

**Operation ID:** `getPackingAreaTransfer`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "orderCode": "...",
    "layoutZoneName": "...",
    "layoutZoneId": "...",
    "totalQuantity": "..."
  }
}
```

---

#### `POST /api/registration/tasks/{taskId}/packing-area-transfer/complete`

**Operation ID:** `completePackingAreaTransfer`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": "string"
}
```

---

#### `GET /api/registration/tasks/{taskId}/packing-area-transfer/products`

**Operation ID:** `getPackingAreaTransferProducts`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/tasks/{taskId}/receive`

**Operation ID:** `receiveTask`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `GET /api/registration/tasks/{taskId}/sign-info`

**Operation ID:** `getTaskSignInfo`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/tasks/{taskId}/staging-area-entry`

**Operation ID:** `getStagingAreaEntry`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "orderCode": "...",
    "layoutZoneName": "...",
    "layoutZoneId": "...",
    "totalQuantity": "...",
    "volume": "...",
    "weight": "..."
  }
}
```

---

#### `POST /api/registration/tasks/{taskId}/staging-area-entry/complete`

**Operation ID:** `completeStagingAreaEntry`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": "string"
}
```

---

#### `GET /api/registration/tasks/{taskId}/staging-area-entry/products`

**Operation ID:** `getStagingAreaProducts`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/tasks/{taskId}/trips`

**Operation ID:** `getTripsByTaskId`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/tasks/{taskId}/unloading/complete`

**Operation ID:** `completeUnloadingTask`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`multipart/form-data`):**

```json
{
  "files": [
    "string"
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/unloading/issue`

**Operation ID:** `issueUnloadingTask`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`multipart/form-data`):**

```json
{
  "data": {
    "reason": "string"
  },
  "files": [
    "string"
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/waiting-area/complete`

**Operation ID:** `completeWaitingAreaTask`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`multipart/form-data`):**

```json
{
  "files": [
    "string"
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/tasks/{taskId}/waiting-packing/complete`

**Operation ID:** `completeWaitingPackingTask`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`multipart/form-data`):**

```json
{
  "files": [
    "string"
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

### Controller: `task-template-controller`

#### `GET /api/registration/task-templates`

**Operation ID:** `getTaskTemplate`

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `GET /api/registration/task-templates/types`

**Operation ID:** `getInboundOrderTypes`

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

### Controller: `voffice-sign-flow-controller`

#### `POST /api/registration/voffice/active-task/{transCode}`

**Operation ID:** `activeTask`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `transCode` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `POST /api/registration/voffice/reject-sign/{transCode}`

**Operation ID:** `rejectSign`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `transCode` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": true
}
```

---

#### `GET /api/registration/voffice/sign-flows/{flowId}/signers`

**Operation ID:** `getSigners`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `flowId` | `path` | `string` | Có |  |
| `taskId` | `query` | `integer` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/voffice/{taskId}/complete`

**Operation ID:** `completeVoffice`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "taskStatus": "..."
  }
}
```

---

#### `GET /api/registration/voffice/{taskId}/sign-info`

**Operation ID:** `getSignInfo`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/voffice/{taskId}/submit`

**Operation ID:** `submitVoffice`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `taskId` | `path` | `integer` | Có |  |

**Request Body (`multipart/form-data`):**

```json
{
  "data": "string",
  "files": [
    "string"
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "documentId": "...",
    "submitStatus": "...",
    "submittedAt": "...",
    "message": "..."
  }
}
```

---

### Controller: `warehouse-controller`

#### `GET /api/registration/warehouse`

**Operation ID:** `searchByRsql_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/registration/warehouse`

**Operation ID:** `create_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `PUT /api/registration/warehouse`

**Operation ID:** `update_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/`

**Operation ID:** `search_2`

**Request Body (`application/json`):**

```json
{
  "keySearch": "string",
  "status": "string",
  "plant": "string",
  "sloc": "string",
  "warehouseType": "string",
  "warehouseCode": "string",
  "locationCode": "string",
  "department": "string",
  "page": 0,
  "size": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "..."
  }
}
```

---

#### `POST /api/registration/warehouse/add`

**Operation ID:** `add_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/add-associate`

**Operation ID:** `addAssociate_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/add-batch`

**Operation ID:** `add_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

---

#### `POST /api/registration/warehouse/areas`

**Operation ID:** `getWarehouseZone`

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/warehouse/completed-layout`

**Operation ID:** `getCompletedLayout`

**Request Body (`application/json`):**

```json
{
  "id": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "layoutStatus": "...",
    "canvasWidth": "...",
    "canvasLength": "...",
    "zones": "..."
  }
}
```

---

#### `POST /api/registration/warehouse/count`

**Operation ID:** `count_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/warehouse/create`

**Operation ID:** `create_3`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/create-associate`

**Operation ID:** `createAssociate_1`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/create-warehouse`

**Operation ID:** `createWarehouse`

**Request Body (`application/json`):**

```json
{
  "warehouseFullName": "string",
  "locationId": 0,
  "address": "string",
  "warehouseType": "string",
  "length": 0.0,
  "width": 0.0,
  "hight": 0.0,
  "floorArea": 0.0,
  "note": "string",
  "description": "string",
  "warehouseTemperature": 0.0,
  "listSlocs": [
    "..."
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "id": "..."
  }
}
```

---

#### `POST /api/registration/warehouse/delete`

**Operation ID:** `delete_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/delete-associate`

**Operation ID:** `deleteAssociate_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/delete-batch`

**Operation ID:** `delete_3`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

---

#### `POST /api/registration/warehouse/delete-by-ids`

**Operation ID:** `deleteByIds_1`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `GET /api/registration/warehouse/departments`

**Operation ID:** `getAllDepartments`

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

---

#### `POST /api/registration/warehouse/detail-general`

**Operation ID:** `getGeneral`

**Request Body (`application/json`):**

```json
{
  "id": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "id": "...",
    "warehouseCode": "...",
    "warehouseName": "...",
    "warehouseFullName": "...",
    "location": "...",
    "locationCode": "...",
    "locationId": "...",
    "unitNameManager": "...",
    "warehousePlant": "...",
    "warehouseSloc": "...",
    "address": "...",
    "status": "...",
    "statusName": "...",
    "warehouseType": "...",
    "warehouseTypeName": "...",
    "length": "...",
    "width": "...",
    "height": "...",
    "floorArea": "...",
    "designVolume": "...",
    "managerName": "...",
    "phone": "...",
    "warehouseTemperature": "...",
    "description": "...",
    "note": "..."
  }
}
```

---

#### `POST /api/registration/warehouse/detail-layout`

**Operation ID:** `getLayoutDetail`

**Request Body (`application/json`):**

```json
{
  "id": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "warehouseId": "...",
    "layoutId": "...",
    "layoutStatus": "...",
    "canvasWidth": "...",
    "canvasLength": "...",
    "zoomLevel": "...",
    "completedBy": "...",
    "zones": "..."
  }
}
```

---

#### `POST /api/registration/warehouse/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/fetch-by-context`

**Operation ID:** `fetchByContext_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/fetch-model-associate`

**Operation ID:** `fetchAssociate_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/fetch/{primaryId}`

**Operation ID:** `fetch_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/find-associate/{primaryId}`

**Operation ID:** `findAssociate_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/find-by-context`

**Operation ID:** `findByContext_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/find-by-uuid/{uuid}`

**Operation ID:** `find_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/find/{primaryId}`

**Operation ID:** `find_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/get-associate/{primaryId}`

**Operation ID:** `getAssociate_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/get-by-context`

**Operation ID:** `getByContext_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/get-by-uuid/{uuid}`

**Operation ID:** `get_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/get/{primaryId}`

**Operation ID:** `get_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/list-sloc`

**Operation ID:** `getWarehouseSlocs`

**Request Body (`application/json`):**

```json
{
  "id": 0,
  "page": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "..."
  }
}
```

---

#### `GET /api/registration/warehouse/list-warehouses`

**Operation ID:** `getWarehousesDropdown`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `request` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "items": "...",
    "page": "...",
    "size": "...",
    "total": "...",
    "totalPages": "..."
  }
}
```

---

#### `GET /api/registration/warehouse/location-codes`

**Operation ID:** `getLocationCodes`

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {}
}
```

---

#### `POST /api/registration/warehouse/save`

**Operation ID:** `save_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/save-batch`

**Operation ID:** `save_3`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

---

#### `POST /api/registration/warehouse/save-general`

**Operation ID:** `saveGeneral`

**Request Body (`application/json`):**

```json
{
  "id": 0,
  "warehouseType": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "managerName": "string",
  "phone": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "id": "...",
    "warehouseCode": "...",
    "warehouseName": "...",
    "warehouseFullName": "...",
    "location": "...",
    "locationCode": "...",
    "locationId": "...",
    "unitNameManager": "...",
    "warehousePlant": "...",
    "warehouseSloc": "...",
    "address": "...",
    "status": "...",
    "statusName": "...",
    "warehouseType": "...",
    "warehouseTypeName": "...",
    "length": "...",
    "width": "...",
    "height": "...",
    "floorArea": "...",
    "designVolume": "...",
    "managerName": "...",
    "phone": "...",
    "warehouseTemperature": "...",
    "description": "...",
    "note": "..."
  }
}
```

---

#### `POST /api/registration/warehouse/save-layout`

**Operation ID:** `saveLayout`

**Request Body (`application/json`):**

```json
{
  "warehouseId": 0,
  "layoutId": 0,
  "layoutStatus": "string",
  "canvasWidth": 0.0,
  "canvasLength": 0.0,
  "zoomLevel": 0.0,
  "completedBy": "string",
  "zones": [
    "..."
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "warehouseId": "...",
    "layoutId": "...",
    "layoutStatus": "...",
    "canvasWidth": "...",
    "canvasLength": "...",
    "zoomLevel": "...",
    "completedBy": "...",
    "zones": "..."
  }
}
```

---

#### `POST /api/registration/warehouse/search`

**Operation ID:** `search_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

---

#### `POST /api/registration/warehouse/types`

**Operation ID:** `getAllTypes`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `companyId` | `query` | `integer` | Không |  |

**Response 200 OK Payload (`*/*`):**

```json
[
  {}
]
```

---

#### `POST /api/registration/warehouse/update`

**Operation ID:** `update_11`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/update-associate`

**Operation ID:** `updateAssociate_1`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `POST /api/registration/warehouse/update-batch`

**Operation ID:** `update_12`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "warehouseFullName": "string",
    "warehouseCode": "string",
    "address": "string",
    "locationId": 0,
    "managerName": "string",
    "phone": "string",
    "status": "string",
    "length": 0.0,
    "width": 0.0,
    "height": 0.0,
    "floorArea": 0.0,
    "theoreticalVolume": 0.0,
    "designVolume": 0.0,
    "usedVolume": 0.0,
    "usagePercent": 0.0,
    "lastSyncAt": "2026-08-12T10:00:00Z",
    "warehouseType": "string",
    "warehouseTemperature": "string",
    "description": "string",
    "note": "string",
    "uuid": "string",
    "deleted": true
  }
]
```

---

#### `POST /api/registration/warehouse/validate-layout`

**Operation ID:** `validateLayout`

**Request Body (`application/json`):**

```json
{
  "warehouseId": 0,
  "layoutId": 0,
  "layoutStatus": "string",
  "canvasWidth": 0.0,
  "canvasLength": 0.0,
  "zoomLevel": 0.0,
  "completedBy": "string",
  "zones": [
    "..."
  ]
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "errors": "...",
    "warnings": "...",
    "valid": "...",
    "validForComplete": "..."
  }
}
```

---

#### `POST /api/registration/warehouse/zones`

**Operation ID:** `getWarehouseZones`

**Request Body (`application/json`):**

```json
{
  "id": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `DELETE /api/registration/warehouse/{id}`

**Operation ID:** `deleteById_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

#### `GET /api/registration/warehouse/{id}`

**Operation ID:** `findById_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "warehouseFullName": "string",
  "warehouseCode": "string",
  "address": "string",
  "locationId": 0,
  "managerName": "string",
  "phone": "string",
  "status": "string",
  "length": 0.0,
  "width": 0.0,
  "height": 0.0,
  "floorArea": 0.0,
  "theoreticalVolume": 0.0,
  "designVolume": 0.0,
  "usedVolume": 0.0,
  "usagePercent": 0.0,
  "lastSyncAt": "2026-08-12T10:00:00Z",
  "warehouseType": "string",
  "warehouseTemperature": "string",
  "description": "string",
  "note": "string",
  "uuid": "string",
  "deleted": true
}
```

---

### Controller: `warehouse-rule-config-controller`

#### `GET /api/registration/rule`

**Operation ID:** `searchByRsql_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/registration/rule`

**Operation ID:** `create_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `PUT /api/registration/rule`

**Operation ID:** `update_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/add`

**Operation ID:** `add_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/add-associate`

**Operation ID:** `addAssociate_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/add-batch`

**Operation ID:** `add_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `POST /api/registration/rule/count`

**Operation ID:** `count_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/rule/create`

**Operation ID:** `create_5`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/create-associate`

**Operation ID:** `createAssociate_2`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/delete`

**Operation ID:** `delete_4`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/delete-associate`

**Operation ID:** `deleteAssociate_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/delete-batch`

**Operation ID:** `delete_5`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `POST /api/registration/rule/delete-by-ids`

**Operation ID:** `deleteByIds_2`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/registration/rule/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/fetch-by-context`

**Operation ID:** `fetchByContext_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/fetch-model-associate`

**Operation ID:** `fetchAssociate_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/fetch/{primaryId}`

**Operation ID:** `fetch_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/find-associate/{primaryId}`

**Operation ID:** `findAssociate_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/find-by-context`

**Operation ID:** `findByContext_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/find-by-uuid/{uuid}`

**Operation ID:** `find_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/find/{primaryId}`

**Operation ID:** `find_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/get-all-rule`

**Operation ID:** `getByCode_1`

**Request Body (`application/json`):**

```json
{
  "warehouseType": "string",
  "canvasContext": "string",
  "ruleCode": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/rule/get-associate/{primaryId}`

**Operation ID:** `getAssociate_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/get-by-context`

**Operation ID:** `getByContext_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/get-by-task`

**Operation ID:** `getByTask`

**Request Body (`application/json`):**

```json
{
  "taskCode": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "config": "..."
  }
}
```

---

#### `POST /api/registration/rule/get-by-uuid/{uuid}`

**Operation ID:** `get_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/get/{primaryId}`

**Operation ID:** `get_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/save`

**Operation ID:** `save_4`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/save-batch`

**Operation ID:** `save_5`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `POST /api/registration/rule/search`

**Operation ID:** `search_3`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `POST /api/registration/rule/update`

**Operation ID:** `update_13`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/update-associate`

**Operation ID:** `updateAssociate_2`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/rule/update-batch`

**Operation ID:** `update_14`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "ruleCode": "string",
    "ruleName": "string",
    "thresholdValue": "string",
    "status": "string",
    "ruleType": "string",
    "severity": "string",
    "config": {},
    "displayOrder": 0,
    "canvasContext": "string",
    "warehouseType": "string",
    "templateCode": "string",
    "uuid": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `DELETE /api/registration/rule/{id}`

**Operation ID:** `deleteById_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `GET /api/registration/rule/{id}`

**Operation ID:** `findById_2`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "ruleCode": "string",
  "ruleName": "string",
  "thresholdValue": "string",
  "status": "string",
  "ruleType": "string",
  "severity": "string",
  "config": {},
  "displayOrder": 0,
  "canvasContext": "string",
  "warehouseType": "string",
  "templateCode": "string",
  "uuid": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

### Controller: `zone-controller`

#### `GET /api/registration/zone`

**Operation ID:** `searchByRsql`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `query` | `query` | `string` | Có |  |
| `pageable` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "list": [
    "..."
  ],
  "total": 0
}
```

---

#### `POST /api/registration/zone`

**Operation ID:** `create`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `PUT /api/registration/zone`

**Operation ID:** `update`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/add`

**Operation ID:** `add`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/add-associate`

**Operation ID:** `addAssociate`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/add-batch`

**Operation ID:** `add_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `POST /api/registration/zone/count`

**Operation ID:** `count`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
0
```

---

#### `POST /api/registration/zone/create`

**Operation ID:** `create_1`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/create-associate`

**Operation ID:** `createAssociate`

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/delete`

**Operation ID:** `delete`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/delete-associate`

**Operation ID:** `deleteAssociate`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/delete-batch`

**Operation ID:** `delete_1`

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `POST /api/registration/zone/delete-by-ids`

**Operation ID:** `deleteByIds`

**Request Body (`application/json`):**

```json
[
  0
]
```

**Response:** `200 OK` (Void / Standard Envelope)

---

#### `POST /api/registration/zone/detail-zone`

**Operation ID:** `getZoneLayout`

**Request Body (`application/json`):**

```json
{
  "id": 0,
  "warehouseId": 0
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": {
    "layoutZone": "...",
    "note": "..."
  }
}
```

---

#### `POST /api/registration/zone/fetch-associate/{primaryId}`

**Operation ID:** `fetchAssociate_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/fetch-by-context`

**Operation ID:** `fetchByContext`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/fetch-by-uuid/{uuid}`

**Operation ID:** `fetch_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/fetch-model-associate`

**Operation ID:** `fetchAssociate`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `model` | `query` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/fetch/{primaryId}`

**Operation ID:** `fetch`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/find-associate/{primaryId}`

**Operation ID:** `findAssociate`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/find-by-context`

**Operation ID:** `findByContext`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/find-by-uuid/{uuid}`

**Operation ID:** `find_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/find/{primaryId}`

**Operation ID:** `find`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/get-all-zone`

**Operation ID:** `getByCode`

**Request Body (`application/json`):**

```json
{
  "zoneCode": "string"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "code": "string",
  "message": "string",
  "status": 0,
  "data": [
    "..."
  ]
}
```

---

#### `POST /api/registration/zone/get-associate/{primaryId}`

**Operation ID:** `getAssociate`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/get-by-context`

**Operation ID:** `getByContext`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/get-by-uuid/{uuid}`

**Operation ID:** `get_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `uuid` | `path` | `string` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/get/{primaryId}`

**Operation ID:** `get`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `primaryId` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/save`

**Operation ID:** `save`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/save-batch`

**Operation ID:** `save_1`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `POST /api/registration/zone/search`

**Operation ID:** `search`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "userId": 0,
  "userName": "string",
  "layoutId": 0,
  "languageId": "string",
  "remoteAddress": "string",
  "remoteHost": "string",
  "statementId": "string",
  "selectType": "string",
  "orderType": "string",
  "orderField": "string",
  "orderAsc": true,
  "associate": true,
  "start": 0,
  "limit": 0,
  "trashMode": 0,
  "params": [
    "..."
  ],
  "utc": "string",
  "utcdate": "2026-08-12T10:00:00Z"
}
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `POST /api/registration/zone/update`

**Operation ID:** `update_9`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/update-associate`

**Operation ID:** `updateAssociate`

**Request Body (`application/json`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `POST /api/registration/zone/update-batch`

**Operation ID:** `update_10`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `retrieve` | `query` | `boolean` | Có |  |

**Request Body (`application/json`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

**Response 200 OK Payload (`*/*`):**

```json
[
  {
    "companyId": 0,
    "createUserId": 0,
    "createDate": "2026-08-12T10:00:00Z",
    "modifiedUserId": 0,
    "modifiedDate": "2026-08-12T10:00:00Z",
    "added": true,
    "id": 0,
    "uuid": "string",
    "zoneCode": "string",
    "zoneName": "string",
    "description": "string",
    "required": true,
    "selectGroup": "string",
    "defaultSizeM": "...",
    "overlapPolicy": "...",
    "color": "...",
    "maxCount": 0,
    "configType": "string",
    "typeFunction": "string",
    "primaryKey": 0,
    "modelAttributes": {
      "propertyNames": "...",
      "empty": "..."
    },
    "compoundModel": "..."
  }
]
```

---

#### `DELETE /api/registration/zone/{id}`

**Operation ID:** `deleteById`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

#### `GET /api/registration/zone/{id}`

**Operation ID:** `findById`

**Parameters:**

| Tên Parameter | Vị trí (In) | Kiểu Dữ Liệu | Bắt Buộc | Mô Tả |
|:---|:---:|:---:|:---:|:---|
| `id` | `path` | `integer` | Có |  |

**Response 200 OK Payload (`*/*`):**

```json
{
  "companyId": 0,
  "createUserId": 0,
  "createDate": "2026-08-12T10:00:00Z",
  "modifiedUserId": 0,
  "modifiedDate": "2026-08-12T10:00:00Z",
  "added": true,
  "id": 0,
  "uuid": "string",
  "zoneCode": "string",
  "zoneName": "string",
  "description": "string",
  "required": true,
  "selectGroup": "string",
  "defaultSizeM": {},
  "overlapPolicy": {},
  "color": {},
  "maxCount": 0,
  "configType": "string",
  "typeFunction": "string",
  "primaryKey": 0,
  "modelAttributes": {
    "propertyNames": [
      "..."
    ],
    "empty": true
  },
  "compoundModel": {
    "companyId": "...",
    "primaryId": "...",
    "uuid": "...",
    "partitionKey": "...",
    "associate": "...",
    "serviceContext": "..."
  }
}
```

---

## PHẦN II: TOÀN BỘ CƠ SỞ DỮ LIỆU SCHEMA POSTGRESQL

Schema: `vo_warehouse_vtit` | Tổng số bảng: **46**

### Danh sách Bảng CSDL:
- `actual_received_sap_log` — *Log lịch sử khi người dùng ấn Xác nhận thực nhập và hệ thống call sang SAP/VERP (UI: Lịch sử gửi SAP/VERP). Mỗi lần gửi/retry tạo 1 bản ghi.*
- `attachment`
- `audit_log` — *Lưu lịch sử thao tác trên hệ thống*
- `bbbg` — *Biên bản bàn giao hàng hóa sinh tự động từ chứng từ + kết quả kiểm hàng*
- `bbbg_signature` — *Chữ ký từng bên (NV kiểm hàng, đại diện bên giao) trên 1 BBBG*
- `category` — *Danh mục dùng chung của hệ thống. Hỗ trợ quản lý dữ liệu phân cấp cha - con theo nhiều loại danh mục khác nhau*
- `configuration_default` — *Bảng lưu thông tin cấu hình hệ thống*
- `document` — *1.10 — Bảng lưu chứng từ gắn order/order_product (TKCT lệnh nhập).*
- `employee` — *Thông tin nhân viên*
- `equipment` — *Danh mục công cụ dụng cụ / thiết bị sử dụng trong kho*
- `handling_unit` — *Master kiện/thùng/pallet (HU). 1 bản ghi = 1 dòng UI danh sách kiện. SL và số mã hàng không lưu ở đây — tính từ handling_unit_item. Loại kiện = equipment (CCDC).*
- `handling_unit_item` — *Dòng hàng trong kiện. Mỗi dòng = 1 mã hàng + quantity trong 1 HU. 1 HU N item (mixed SKU). 1 component N item (chia nhiều kiện). Không trừ quantity trên component — SL đã/chưa gán = SUM(item.quantity).*
- `handling_unit_item_serial` — *Serial đã scan vào dòng hàng trong kiện. handling_unit_item 1 ─── N serial. Cùng mã hàng, khác serial_no. Popup Scan/Xem. Mixed HU: mỗi item một list serial riêng.*
- `history_action_log` — *Lưu lịch sử các thao tác thực hiện trên công việc.*
- `info_shipping` — *1.8 — Bảng lưu thông tin chuyến vận chuyển (TKCT lệnh nhập).*
- `info_shipping_issue` — *Danh sách các vấn đề (Issue) phát sinh của một thông tin giao hàng*
- `location` — *Danh mục địa giới hành chính*
- `order_issue` — *Phát sinh được người dùng chủ động ghi nhận ở cấp Order/Task*
- `order_product` — *1.9 — Bảng liên kết order và sản phẩm. Theo nội dung docx hiện tại bảng này chỉ mô tả id, order_id, product_id.*
- `order_product_component` — *1.11 — Bảng chi tiết thành phần của order_product, phục vụ lưu số lượng/KCS/HU/vị trí theo level cha-con.*
- `plant`
- `plant_wh_product` — *1.13 — Bảng liên kết sản phẩm với warehouse_plant (TKCT lệnh nhập).*
- `position_template`
- `position_warehouse`
- `product` — *1.12 — Bảng master sản phẩm/hàng hóa (TKCT lệnh nhập).*
- `role_permission` — *Bảng trung gian cấu hình: Một nhóm quyền (Role) sẽ có những hành động (Permission) chi tiết nào.*
- `scan_product_log` — *Lưu thông tin sản phẩm được quét trong quá trình thực hiện công việc. Khi hoàn thành task hãy xóa các bản ghi trong bảng này.*
- `slocs`
- `system_permission` — *Danh mục chứa tất cả các hành động/quyền hạn nguyên tử (Hạt nhân) trong hệ thống.*
- `system_role` — *Danh mục các Nhóm quyền/Vai trò (Role).*
- `system_user` — *Bảng lưu trữ thông tin tài khoản nhân sự toàn hệ thống.*
- `task` — *Lưu thông tin công việc được tạo từ đơn hàng.*
- `task_kpi` — *Lưu thời gian thực hiện để đánh giá KPI của công việc.*
- `task_template`
- `unit_manager`
- `user_role` — *Bảng gán vai trò: User này giữ chức vụ/quyền hạn gì (Đã loại bỏ hoàn toàn warehouse_id theo đúng ý mày review).*
- `warehouse` — *Danh mục kho đồng bộ từ SAP*
- `warehouse_layout` — *Thông tin layout cấu hình của kho*
- `warehouse_layout_zone` — *Instance phân khu trên layout*
- `warehouse_plant`
- `warehouse_rule_config`
- `warehouse_sync_log` — *Lịch sử đồng bộ kho từ SAP*
- `warehouse_zone_equipment` — *Công cụ dụng cụ trong canvas*
- `warehouse_zone_layout_config` — *Bảng lưu trữ các thuộc tính cấu hình động (Key-Value) cho từng phân khu trong kho*
- `zone` — *Danh mục phân khu dùng chung*
- `zone_inventory_balance`

---

### Table: `actual_received_sap_log`
**Mô tả:** Log lịch sử khi người dùng ấn Xác nhận thực nhập và hệ thống call sang SAP/VERP (UI: Lịch sử gửi SAP/VERP). Mỗi lần gửi/retry tạo 1 bản ghi.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính tự tăng. |
| 2 | `log_code` | `character varying(50) NOT NULL` | Mã log hiển thị trên UI (Log ID), do hệ thống sinh, ví dụ LOG-44026. |
| 3 | `api_code` | `character varying(20) NOT NULL` | Mã API tích hợp được gọi khi xác nhận thực nhập, ví dụ API6 (T-AGR/GR). |
| 4 | `order_id` | `bigint NOT NULL` | Khóa ngoại tới bảng order — lệnh nhập đang xác nhận thực nhập. |
| 5 | `task_id` | `bigint` | Khóa ngoại tới bảng task — task thực nhập (T-AGR) phát sinh lần gửi SAP; cho phép null nếu log chỉ gắn order. |
| 6 | `target_system` | `character varying(30) DEFAULT 'SAP'::character varying NOT NULL` | Hệ thống đích nhận dữ liệu thực nhập: SAP hoặc VERP. |
| 7 | `direction` | `character varying(10) DEFAULT 'OUTBOUND'::character varying NOT NULL` | Chiều gọi API. Mặc định OUTBOUND (AIWS → SAP/VERP). |
| 8 | `request_at` | `timestamp without time zone NOT NULL` | Thời điểm hệ thống gửi request xác nhận thực nhập sang SAP/VERP. Map UI cột Request. |
| 9 | `response_at` | `timestamp without time zone` | Thời điểm hệ thống nhận response từ SAP/VERP. Null nếu chưa nhận (UI hiển thị "-"). Map UI cột Response. |
| 10 | `http_status` | `integer` | Mã HTTP status trả về từ SAP/VERP, ví dụ 200, 502. Map UI cột Status (phần mã). |
| 11 | `status_message` | `character varying(100)` | Nhãn trạng thái HTTP/response hiển thị kèm http_status, ví dụ BAD GATEWAY, OK. Map UI cột Status (phần text). |
| 12 | `status` | `character varying(20) NOT NULL` | Trạng thái nghiệp vụ của lần gửi: SUCCESS \| FAILED \| TIMEOUT \| PENDING. |
| 13 | `retry_count` | `integer DEFAULT 0 NOT NULL` | Số lần hệ thống đã retry giao dịch API này. Mặc định 0 khi gửi lần đầu. Map UI cột Retry. |
| 14 | `note` | `character varying(2000)` | Ghi chú / nội dung phản hồi xử lý, ví dụ "SAP T-AGR timeout", "Trả số phiếu GR-2026-008812". Map UI cột Ghi chú. |
| 15 | `request_payload` | `jsonb` | Payload JSON gửi sang SAP/VERP khi xác nhận thực nhập (đối soát, debug, retry). |
| 16 | `response_payload` | `jsonb` | Payload JSON response từ SAP/VERP (đối soát, debug). |
| 17 | `correlation_id` | `character varying(100)` | Mã trace xuyên suốt giao dịch gửi SAP/VERP, dùng đối soát log giữa các hệ thống. |
| 18 | `gr_document_no` | `character varying(100)` | Số phiếu GR trả về từ SAP khi gửi thành công, ví dụ GR-2026-008812. |
| 19 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Ngày tạo bản ghi log. |
| 20 | `modified_date` | `timestamp without time zone` | Ngày cập nhật bản ghi log gần nhất (ví dụ khi retry cập nhật status/response). |
| 21 | `create_user_id` | `bigint` | ID người dùng tạo log / thực hiện xác nhận thực nhập. |
| 22 | `modified_user_id` | `bigint` | ID người dùng cập nhật log gần nhất (ví dụ người bấm Retry SAP). |
| 23 | `deleted` | `boolean DEFAULT false` | Đánh dấu xóa mềm. true = đã xóa, không hiển thị trên UI. |

---

### Table: `attachment`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `history_action_log_id` | `bigint` |  |
| 3 | `app_name` | `character varying(100) NOT NULL` |  |
| 4 | `class_name` | `character varying(100) NOT NULL` |  |
| 5 | `class_id` | `character varying(100) NOT NULL` |  |
| 6 | `attach_type` | `character varying(100) NOT NULL` |  |
| 7 | `evidence_type` | `character varying(50)` |  |
| 8 | `created_at` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 9 | `references_code` | `character varying(550)` | code nghiệp vụ |
| 10 | `references_table` | `character varying(250)` | table của nghiệp vụ |

---

### Table: `audit_log`
**Mô tả:** Lưu lịch sử thao tác trên hệ thống

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `user_id` | `bigint` | User thực hiện thao tác |
| 3 | `warehouse_id` | `bigint` | Kho liên quan |
| 4 | `action` | `character varying(50)` | Hành động thực hiện |
| 5 | `entity_name` | `character varying(100)` | Tên entity bị tác động |
| 6 | `entity_id` | `bigint` | ID entity bị tác động |
| 7 | `before_value` | `jsonb` | Dữ liệu trước thay đổi |
| 8 | `after_value` | `jsonb` | Dữ liệu sau thay đổi |
| 9 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 10 | `modified_user_id` | `bigint` |  |
| 11 | `modified_date` | `timestamp without time zone` |  |
| 12 | `create_user_id` | `bigint` |  |
| 13 | `deleted` | `boolean DEFAULT false` |  |
| 14 | `company_id` | `integer` |  |
| 15 | `uuid` | `uuid` |  |

---

### Table: `bbbg`
**Mô tả:** Biên bản bàn giao hàng hóa sinh tự động từ chứng từ + kết quả kiểm hàng

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `bbbg_code` | `character varying(50) NOT NULL` | Số BBBG, format BBBG-YYYY-NNNN, sinh theo sequence/rule đánh số cấu hình |
| 3 | `task_id` | `bigint NOT NULL` |  |
| 4 | `order_id` | `bigint NOT NULL` |  |
| 5 | `bbbg_date` | `date NOT NULL` |  |
| 6 | `party_giao_name` | `character varying(255)` |  |
| 7 | `party_nhan_name` | `character varying(255)` |  |
| 8 | `total_lines` | `integer DEFAULT 0 NOT NULL` |  |
| 9 | `total_qty` | `numeric(18,3) DEFAULT 0 NOT NULL` |  |
| 10 | `status` | `character varying(20) NOT NULL` | GENERATED: mới sinh, chờ ký \| COMPLETED: đã hoàn tất, khóa không cho sửa |
| 11 | `created_at` | `timestamp with time zone DEFAULT now() NOT NULL` |  |
| 12 | `created_by` | `character varying(50)` |  |
| 13 | `updated_at` | `timestamp with time zone` |  |
| 14 | `updated_by` | `character varying(50)` |  |

---

### Table: `bbbg_signature`
**Mô tả:** Chữ ký từng bên (NV kiểm hàng, đại diện bên giao) trên 1 BBBG

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `bbbg_id` | `bigint NOT NULL` |  |
| 3 | `signer_role` | `character varying(30) NOT NULL` |  |
| 4 | `signer_name` | `character varying(255)` |  |
| 5 | `is_required` | `boolean DEFAULT true NOT NULL` | TRUE: bắt buộc phải ký mới cho hoàn thành task, FALSE: không bắt buộc theo cấu hình order |
| 6 | `sign_method` | `character varying(20)` |  |
| 7 | `sign_status` | `character varying(20) DEFAULT 'NOT_SIGNED'::character varying NOT NULL` |  |
| 8 | `signature_file_id` | `character varying(100)` |  |
| 9 | `digital_sign_ref` | `character varying(100)` |  |
| 10 | `signed_by` | `character varying(50)` |  |
| 11 | `signed_at` | `timestamp with time zone` |  |
| 12 | `created_at` | `timestamp with time zone DEFAULT now() NOT NULL` |  |
| 13 | `updated_at` | `timestamp with time zone` |  |

---

### Table: `category`
**Mô tả:** Danh mục dùng chung của hệ thống. Hỗ trợ quản lý dữ liệu phân cấp cha - con theo nhiều loại danh mục khác nhau

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính của danh mục |
| 2 | `code` | `character varying(50) NOT NULL` | Mã danh mục duy nhất trong từng loại danh mục. Ví dụ: KHO_LANH, PALLET_NHUA, HN_BRANCH |
| 3 | `name` | `character varying(255) NOT NULL` | Tên hiển thị của danh mục |
| 4 | `description` | `character varying(1000)` | Mô tả chi tiết cho danh mục |
| 5 | `type` | `character varying(50) NOT NULL` | Loại danh mục dùng để phân nhóm dữ liệu. Ví dụ: WAREHOUSE_TYPE, EQUIPMENT_TYPE, TEMPERATURE_TYPE, AREA_TYPE |
| 6 | `sort_order` | `integer DEFAULT 0` | Thứ tự sắp xếp hiển thị của danh mục |
| 7 | `status` | `character varying(20) DEFAULT 'ACTIVE'::character varying NOT NULL` | Trạng thái danh mục (Ví dụ: ACTIVE: Hoạt động, INACTIVE: Ngừng hoạt động) |
| 8 | `create_user_id` | `character varying(100)` | Người tạo bản ghi |
| 9 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Thời gian tạo bản ghi |
| 10 | `modified_user_id` | `character varying(100)` | Người cập nhật cuối cùng |
| 11 | `modified_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Thời gian cập nhật cuối cùng |
| 12 | `deleted` | `boolean DEFAULT false NOT NULL` | Đánh dấu xóa mềm (Soft Delete) |
| 13 | `company_id` | `integer` |  |
| 14 | `uuid` | `uuid` |  |

---

### Table: `configuration_default`
**Mô tả:** Bảng lưu thông tin cấu hình hệ thống

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `uuid` | `uuid NOT NULL` | UUID của bản ghi |
| 3 | `code` | `character varying(100) NOT NULL` | Mã cấu hình |
| 4 | `name` | `character varying(255) NOT NULL` | Tên cấu hình |
| 5 | `value` | `character varying(500)` | Giá trị cấu hình |
| 6 | `unit` | `character varying(100)` | Đơn vị |
| 7 | `description` | `text` | Mô tả |
| 8 | `deleted` | `boolean DEFAULT false` | Đánh dấu xoá mềm |
| 9 | `company_id` | `bigint` | ID công ty |
| 10 | `create_user_id` | `bigint` | Người tạo |
| 11 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Ngày tạo |
| 12 | `modified_user_id` | `bigint` | Người cập nhật |
| 13 | `modified_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Ngày cập nhật |

---

### Table: `document`
**Mô tả:** 1.10 — Bảng lưu chứng từ gắn order/order_product (TKCT lệnh nhập).

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính. |
| 2 | `code` | `character varying(50)` | Mã chứng từ. |
| 3 | `name` | `character varying(50)` | Tên chứng từ. |
| 4 | `order_id` | `bigint` | Lưu lại order id, có lịch sử ở cả task lẫn trong order. |
| 5 | `description` | `character varying(2000)` | Mô tả. |
| 6 | `status` | `character varying(30)` | Trạng thái. |
| 7 | `create_date` | `timestamp without time zone` | Ngày tạo. |
| 8 | `updated_date` | `timestamp without time zone` | Ngày sửa. |
| 9 | `modified_user_id` | `bigint` | Người sửa. |
| 10 | `create_user_id` | `bigint` | Người tạo. |
| 11 | `deleted` | `boolean` | Đánh dấu xóa. |
| 12 | `document_type` | `character varying(50)` | Loại chứng từ. |

---

### Table: `employee`
**Mô tả:** Thông tin nhân viên

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `integer DEFAULT nextval('vo_warehouse_vtit.employee_seq'::regclass) NOT NULL` | ID |
| 2 | `employee_code` | `character varying(50) NOT NULL` | Mã nhân viên |
| 3 | `full_name` | `character varying(255) NOT NULL` | Họ tên |
| 4 | `email` | `character varying(255)` | Email |
| 5 | `phone` | `character varying(20)` | Số điện thoại |
| 6 | `gender` | `character varying(10)` | Giới tính |
| 7 | `date_of_birth` | `date` | Ngày sinh |
| 8 | `department` | `character varying(100)` | Phòng ban |
| 9 | `position` | `character varying(100)` |  |
| 10 | `status` | `character varying(20) DEFAULT 'ACTIVE'::character varying NOT NULL` | Trạng thái |
| 11 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Ngày tạo |
| 12 | `modified_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Ngày cập nhật |
| 13 | `create_user_id` | `integer DEFAULT 0` |  |
| 14 | `modified_user_id` | `integer DEFAULT 0` |  |
| 15 | `deleted` | `boolean DEFAULT false NOT NULL` | Đánh dấu xóa mềm |
| 16 | `manager_id` | `bigint` | quản lý của nhân viên |
| 17 | `org_code` | `character varying(40)` |  |

---

### Table: `equipment`
**Mô tả:** Danh mục công cụ dụng cụ / thiết bị sử dụng trong kho

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính |
| 2 | `code` | `character varying(50) NOT NULL` | Mã công cụ dụng cụ / thiết bị |
| 3 | `name` | `character varying(255) NOT NULL` | Tên công cụ dụng cụ / thiết bị |
| 4 | `group_equipment_code` | `character varying(50)` | Lưu lại code của nhóm vật tư (code nằm trong bảng category có type riêng) |
| 5 | `equipment_type` | `character varying(50)` | Loại thiết bị kho (code nằm trong bảng category có type riêng) (Ví dụ: PALLET, RACK, WOODEN_BOX, CONTAINER, FORKLIFT) |
| 6 | `length` | `numeric(10,3) NOT NULL` | Chiều dài thiết bị (mét) |
| 7 | `width` | `numeric(10,3) NOT NULL` | Chiều rộng thiết bị (mét) |
| 8 | `height` | `numeric(10,3) NOT NULL` | Chiều cao thiết bị (mét) |
| 9 | `max_load_kg` | `numeric(10,2)` | Tải trọng tối đa của thiết bị (kg) |
| 10 | `status` | `character varying(20) DEFAULT 'ACTIVE'::character varying` | Trạng thái thiết bị (Ví dụ: ACTIVE: Hoạt động, INACTIVE: Ngừng hoạt động) |
| 11 | `note` | `character varying(500)` | Ghi chú bổ sung của thiết bị |
| 12 | `dimension_unit` | `character varying(500)` | Đơn vị tính của thiết bị |
| 13 | `barcode` | `character varying(100)` | Mã barcode định danh thiết bị |
| 14 | `color` | `character varying(50)` | Màu sắc của thiết bị |
| 15 | `material` | `character varying(100)` | Chất liệu cấu thành thiết bị |
| 16 | `min_stock_level` | `integer DEFAULT 0` | Số lượng tồn kho tối thiểu |
| 17 | `max_stock_level` | `integer` | Số lượng tồn kho tối đa |
| 18 | `image_url` | `text` | Đường dẫn hình ảnh của thiết bị |
| 19 | `create_user_id` | `character varying(100)` | Người tạo bản ghi |
| 20 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Thời gian tạo bản ghi |
| 21 | `modified_user_id` | `character varying(100)` | Người cập nhật cuối cùng |
| 22 | `modified_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Thời gian cập nhật cuối cùng |
| 23 | `deleted` | `boolean DEFAULT false` | Đánh dấu xóa mềm (Soft Delete) |
| 24 | `company_id` | `integer` |  |
| 25 | `uuid` | `uuid` |  |

---

### Table: `handling_unit`
**Mô tả:** Master kiện/thùng/pallet (HU). 1 bản ghi = 1 dòng UI danh sách kiện. SL và số mã hàng không lưu ở đây — tính từ handling_unit_item. Loại kiện = equipment (CCDC).

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính tự tăng của kiện. |
| 2 | `hu_code` | `character varying(100) NOT NULL` | Mã kiện. Map UI Mã Kiện (HU-001, KIEN-001…). Unique toàn hệ thống. Hệ thống tự sinh theo rule. |
| 3 | `rfid_code` | `character varying(50)` | Mã tem RFID (1 kiện = 1 tem). Map UI Mã RFID. Hệ thống tự sinh. Unique khi chưa xóa mềm. |
| 4 | `equipment_id` | `bigint` | FK equipment (CCDC) — loại kiện/thùng/pallet. Map UI Loại Kiện, ví dụ Carton C2 (60x40x30), Pallet PL2 (120x80). |
| 5 | `task_id` | `bigint` | ID task đóng gói (TSK-9928). Null nếu tạo ngoài task. |
| 6 | `status` | `character varying(50) NOT NULL` | Vòng đời kiện: CREATED \| PACKED \| PUTAWAY_DONE \| CANCELLED. Không dùng cho Đủ/Thiếu serial. |
| 7 | `print_status` | `character varying(20) DEFAULT 'NOT_PRINTED'::character varying NOT NULL` | In tem: NOT_PRINTED (Chưa in) \| PRINTED (Đã in). Map UI cột In tem. |
| 8 | `printed_at` | `timestamp without time zone` | Thời điểm in tem gần nhất. |
| 9 | `printed_by` | `bigint` | ID người in tem gần nhất. |
| 10 | `create_user_id` | `bigint NOT NULL` | ID người tạo kiện. |
| 11 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Thời điểm tạo kiện. |
| 12 | `modified_user_id` | `bigint` | ID người cập nhật gần nhất. |
| 13 | `modified_date` | `timestamp without time zone` | Thời điểm cập nhật gần nhất. |
| 14 | `deleted` | `boolean DEFAULT false NOT NULL` | Xóa mềm. TRUE = không hiện UI. |
| 15 | `warehouse_zone_equipment_id` | `bigint` | ID thiết bị/vị trí thiết bị thuộc khu vực kho được sử dụng để lưu trữ Handling Unit |

---

### Table: `handling_unit_item`
**Mô tả:** Dòng hàng trong kiện. Mỗi dòng = 1 mã hàng + quantity trong 1 HU. 1 HU N item (mixed SKU). 1 component N item (chia nhiều kiện). Không trừ quantity trên component — SL đã/chưa gán = SUM(item.quantity).

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính dòng hàng trong kiện. |
| 2 | `hu_id` | `bigint NOT NULL` | FK handling_unit. 1 kiện nhiều item khi chứa nhiều mã hàng. |
| 3 | `order_product_component_id` | `bigint NOT NULL` | FK order_product_component — nguồn hàng. Join lấy product_code / tên / serial_required. |
| 4 | `quantity` | `numeric(18,2) NOT NULL` | SL mã hàng này trong kiện. Cộng SUM theo hu_id = cột Số lượng trên list kiện. Cộng SUM theo component = SL đã gán. |
| 5 | `serial_status` | `character varying(20) DEFAULT 'NOT_REQUIRED'::character varying NOT NULL` | Trạng thái serial của dòng hàng: NOT_REQUIRED \| MISSING \| ENOUGH. Map badge Serial / Trạng thái theo từng mã. List kiện (1 dòng HU): aggregate — có MISSING → Thiếu serial; tất cả ENOUGH/NOT_REQUIRED và có serial → Đủ serial; toàn NOT_REQUIRED → Sẵn sàng in. Tạo item: serial_required=true → MISSING; false → NOT_REQUIRED. Sau scan: COUNT(serial)/quantity rồi UPDATE. |
| 6 | `create_user_id` | `bigint NOT NULL` | ID người tạo item (lúc Tạo kiện). |
| 7 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Thời điểm tạo item. |
| 8 | `modified_user_id` | `bigint` | ID người cập nhật gần nhất. |
| 9 | `modified_date` | `timestamp without time zone` | Thời điểm cập nhật gần nhất. |
| 10 | `deleted` | `boolean DEFAULT false NOT NULL` | Xóa mềm. TRUE = nhả SL về chưa gán. |

---

### Table: `handling_unit_item_serial`
**Mô tả:** Serial đã scan vào dòng hàng trong kiện. handling_unit_item 1 ─── N serial. Cùng mã hàng, khác serial_no. Popup Scan/Xem. Mixed HU: mỗi item một list serial riêng.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính dòng serial. |
| 2 | `handling_unit_item_id` | `bigint NOT NULL` | FK handling_unit_item — owner 1-N. Không FK thẳng handling_unit. |
| 3 | `order_product_serial_id` | `bigint` | ID pool serial thuộc order (nếu có). Null = nhập/scan chưa gắn pool. |
| 4 | `product_code` | `character varying(50) NOT NULL` | Mã hàng lúc scan (khớp item). |
| 5 | `serial_no` | `character varying(200) NOT NULL` | Mã serial (SN-A2001). Unique active toàn hệ thống. |
| 6 | `status` | `character varying(20) DEFAULT 'VALID'::character varying NOT NULL` | VALID (Hợp lệ) \| INVALID. |
| 7 | `scanned_by` | `bigint NOT NULL` | ID người scan. Map UI Người scan. |
| 8 | `scanned_at` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Thời điểm scan. Map UI Thời gian. |
| 9 | `create_user_id` | `bigint NOT NULL` | ID người tạo bản ghi. |
| 10 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Thời điểm tạo bản ghi. |
| 11 | `modified_user_id` | `bigint` | ID người cập nhật gần nhất. |
| 12 | `modified_date` | `timestamp without time zone` | Thời điểm cập nhật gần nhất. |
| 13 | `deleted` | `boolean DEFAULT false NOT NULL` | Xóa mềm = gỡ serial khỏi item; cập nhật lại item.serial_status. |

---

### Table: `history_action_log`
**Mô tả:** Lưu lịch sử các thao tác thực hiện trên công việc.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `task_id` | `bigint` | Mã công việc. |
| 3 | `description` | `character varying(500)` | Mô tả chi tiết hành động. |
| 4 | `created_at` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Thời gian thực hiện hành động. |
| 5 | `created_by` | `bigint` | Người thực hiện hành động. |
| 6 | `type` | `integer` | Hành động được thực hiện: 1 - Lịch sử Order, 8 - Extend KPI, 10 - Cancelled, 12 - Ký BBBG / Upload ảnh nhân viên thực hiện Task, 13 - Ký BBBG / Upload ảnh NCC ký |
| 7 | `order_id` | `bigint` | Lưu lại order id, có lịch sử ở cả task lẫn trong order. trường hợp có lưu orderId và type = ORDER_LOG là lịch sử của order k liên quan task |
| 8 | `action` | `character varying(100)` | Lưu lại action. |
| 9 | `source_type` | `character varying(20) DEFAULT 'USER'::character varying` |  |
| 10 | `company_id` | `integer` |  |
| 11 | `create_user_id` | `integer` |  |
| 12 | `modified_user_id` | `integer` |  |
| 13 | `modified_date` | `timestamp without time zone` |  |
| 14 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |

---

### Table: `info_shipping`
**Mô tả:** 1.8 — Bảng lưu thông tin chuyến vận chuyển (TKCT lệnh nhập).

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính. |
| 2 | `uuid` | `uuid` | Uuid. |
| 3 | `company_id` | `bigint` | Id công ty — khóa ngoại. |
| 4 | `shipment_code` | `character varying(50)` | Mã chuyến xe. |
| 5 | `direction` | `character varying(10)` | Hướng vận chuyển. |
| 6 | `carrier_name` | `character varying(200)` | Đơn vị vận tải. |
| 7 | `trip_status` | `character varying(30)` | Trạng thái chuyến hiện tại. |
| 8 | `planned_plate_no` | `character varying(20)` | Biển số xe dự kiến. |
| 9 | `actual_plate_no` | `character varying(20)` | Biển số xe thực tế. |
| 10 | `driver_name` | `character varying(200)` | Tên lái xe. |
| 11 | `driver_phone` | `character varying(30)` | SĐT lái xe. |
| 12 | `eta_at` | `timestamp without time zone` | Thời gian dự kiến đến (ETA). |
| 13 | `ata_at` | `timestamp without time zone` | Thời gian thực tế đến (ATA). |
| 14 | `dock_code` | `character varying(50)` | Mã dock. |
| 15 | `note` | `character varying(1000)` | Ghi chú. |
| 16 | `create_user_id` | `bigint` | Người tạo. |
| 17 | `create_date` | `timestamp without time zone` | Ngày tạo. |
| 18 | `modified_user_id` | `bigint` | Người sửa. |
| 19 | `updated_date` | `timestamp without time zone` | Ngày sửa. |
| 20 | `deleted` | `boolean` | Đánh dấu xóa. |
| 21 | `gate_in_at` | `timestamp without time zone` | Thời gian xe vào cổng bảo vệ (Check-in). |
| 22 | `dock_in_at` | `timestamp without time zone` | Thời gian xe vào vị trí dock và bắt đầu xếp dỡ hàng. |
| 23 | `dock_out_at` | `timestamp without time zone` | Thời gian xe hoàn thành xếp dỡ và rời khỏi dock. |
| 24 | `gate_out_at` | `timestamp without time zone` | Thời gian xe làm thủ tục ra khỏi cổng (Check-out). |
| 25 | `order_id` | `bigint` | Id order |

---

### Table: `info_shipping_issue`
**Mô tả:** Danh sách các vấn đề (Issue) phát sinh của một thông tin giao hàng

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính |
| 2 | `uuid` | `character varying(36)` | Định danh duy nhất của bản ghi |
| 3 | `company_id` | `bigint` | Định danh công ty sở hữu dữ liệu |
| 4 | `id_info_shipping` | `bigint NOT NULL` | Khóa ngoại tham chiếu đến bảng info_shipping |
| 5 | `issue_code` | `character varying(50)` | Mã issue |
| 6 | `issue_type` | `character varying(50) NOT NULL` | Loại issue phát sinh (DAMAGED, MISSING, WRONG_ITEM, DELAY, OTHER,...) |
| 7 | `issue_description` | `text` | Mô tả chi tiết issue |
| 8 | `status` | `character varying(30) DEFAULT 'NEW'::character varying` | Trạng thái xử lý issue (NEW, PROCESSING, RESOLVED, CLOSED,...) |
| 9 | `create_user_id` | `bigint` | Định danh người tạo bản ghi |
| 10 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Thời điểm tạo bản ghi |
| 11 | `modified_user_id` | `bigint` | Định danh người cập nhật bản ghi gần nhất |
| 12 | `modified_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Thời điểm cập nhật bản ghi gần nhất |

---

### Table: `location`
**Mô tả:** Danh mục địa giới hành chính

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | ID bản ghi |
| 2 | `uuid` | `uuid` | UUID |
| 3 | `company_id` | `bigint DEFAULT 1080 NOT NULL` | Mã công ty |
| 4 | `create_user_id` | `bigint DEFAULT 0 NOT NULL` | Người tạo |
| 5 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Ngày tạo |
| 6 | `modified_user_id` | `bigint DEFAULT 0 NOT NULL` | Người cập nhật |
| 7 | `modified_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` | Ngày cập nhật |
| 8 | `parent_id` | `bigint` | ID đơn vị hành chính cha |
| 9 | `code` | `character varying(50) NOT NULL` | Mã đơn vị hành chính |
| 10 | `name` | `character varying(255) NOT NULL` | Tên đơn vị hành chính |
| 11 | `symbol` | `character varying(50) NOT NULL` | Ký hiệu hành chính (Tỉnh, Thành phố, Xã, Phường, Đặc khu) |
| 12 | `display_name` | `character varying(500) NOT NULL` | Tên hiển thị đầy đủ |
| 13 | `unit_level` | `character varying(20) NOT NULL` | Cấp hành chính (1:tỉnh, 2:xã) |
| 14 | `deleted` | `boolean DEFAULT false` | Đánh dấu xóa mềm |
| 15 | `description` | `character varying(1000)` | Mô tả |
| 16 | `status` | `character varying(50) DEFAULT 'ACTIVE'::character varying NOT NULL` |  |

---

### Table: `order_issue`
**Mô tả:** Phát sinh được người dùng chủ động ghi nhận ở cấp Order/Task

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `order_id` | `bigint NOT NULL` |  |
| 3 | `task_id` | `bigint` |  |
| 4 | `issue_type` | `character varying(50) NOT NULL` |  |
| 5 | `severity` | `character varying(20) NOT NULL` |  |
| 6 | `related_system` | `character varying(50)` |  |
| 7 | `description` | `text NOT NULL` |  |
| 8 | `status` | `character varying(20) DEFAULT 'OPEN'::character varying NOT NULL` |  |
| 9 | `created_user_id` | `bigint NOT NULL` |  |
| 10 | `created_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL` |  |
| 11 | `resolved_at` | `timestamp without time zone` |  |
| 12 | `resolved_by` | `bigint` |  |
| 13 | `deleted` | `boolean DEFAULT false` |  |

---

### Table: `order_product`
**Mô tả:** 1.9 — Bảng liên kết order và sản phẩm. Theo nội dung docx hiện tại bảng này chỉ mô tả id, order_id, product_id.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính. |
| 2 | `order_id` | `bigint NOT NULL` | Khóa phụ từ id order — khóa ngoại tới bảng order. |
| 3 | `product_id` | `bigint NOT NULL` | Khóa phụ từ id sản phẩm — khóa ngoại tới bảng product. |

---

### Table: `order_product_component`
**Mô tả:** 1.11 — Bảng chi tiết thành phần của order_product, phục vụ lưu số lượng/KCS/HU/vị trí theo level cha-con.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính. |
| 2 | `level` | `character varying(50)` | Level phân biệt cha con. |
| 3 | `quantity_expect` | `numeric(18,2)` | Số lượng sản phẩm chứng từ. |
| 4 | `quantity_actual` | `numeric(18,2)` | Số lượng sản phẩm thực tế. |
| 5 | `pass_quantity` | `numeric(18,2)` | Số lượng đạt KCS. |
| 6 | `fail_quantity` | `numeric(18,2)` | Số lượng không đạt yêu cầu KCS. |
| 7 | `synced_at` | `timestamp without time zone` | Thời điểm đồng bộ KCS. |
| 8 | `hu` | `character varying(50)` | Số HU đóng gói. |
| 9 | `location_storage` | `character varying(50)` | Vị trí lưu trữ. |
| 10 | `org_kcs` | `character varying(200)` | Người/đơn vị KCS. |
| 11 | `kcs_status` | `character varying(50)` | Trạng thái KCS. |
| 12 | `reason_kcs` | `character varying(2000)` | Lý do KCS không đạt. |
| 13 | `create_date` | `timestamp without time zone` | Ngày tạo. |
| 14 | `updated_date` | `timestamp without time zone` | Ngày sửa. |
| 15 | `create_user_id` | `bigint` | Người tạo. |
| 16 | `modified_user_id` | `bigint` | Người sửa. |
| 17 | `deleted` | `boolean` | Đánh dấu xóa. |
| 18 | `product_code` | `character varying(50)` | Mã sản phẩm hàng từ bảng product |
| 19 | `serial_number` | `character varying(255)` |  |
| 20 | `order_product_id` | `bigint` | order_product_id FK từ bảng order_product |
| 21 | `amount` | `numeric` | Số tiền của sản phẩm |
| 22 | `serial_required` | `boolean` |  |
| 23 | `volume` | `numeric(18,2)` |  |

---

### Table: `plant`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `plant_code` | `character varying(20) NOT NULL` |  |
| 3 | `plant_name` | `character varying(255) NOT NULL` |  |
| 4 | `description` | `character varying(500)` |  |
| 5 | `status` | `character varying(20) DEFAULT 'ACTIVE'::character varying` |  |
| 6 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 7 | `create_user_id` | `bigint` |  |
| 8 | `modified_date` | `timestamp without time zone` |  |
| 9 | `modified_user_id` | `bigint` |  |
| 10 | `deleted` | `boolean DEFAULT false` |  |
| 11 | `company_id` | `bigint` |  |
| 12 | `uuid` | `uuid NOT NULL` |  |

---

### Table: `plant_wh_product`
**Mô tả:** 1.13 — Bảng liên kết sản phẩm với warehouse_plant (TKCT lệnh nhập).

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `product_id` | `bigint NOT NULL` | Khóa phụ tới bảng product. |
| 2 | `warehouse_plant_id` | `bigint NOT NULL` | Khóa phụ tới bảng warehouse_plant. |

---

### Table: `position_template`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `position_code` | `character varying(50) NOT NULL` |  |
| 3 | `template_code` | `character varying(255) NOT NULL` |  |
| 4 | `created_at` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 5 | `created_by` | `bigint` |  |
| 6 | `id_task_template` | `bigint` |  |

---

### Table: `position_warehouse`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `position_code` | `character varying(50) NOT NULL` |  |
| 3 | `warehouse_plant_id` | `bigint NOT NULL` |  |
| 4 | `employee_id` | `bigint NOT NULL` |  |
| 5 | `created_at` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 6 | `created_by` | `bigint` |  |

---

### Table: `product`
**Mô tả:** 1.12 — Bảng master sản phẩm/hàng hóa (TKCT lệnh nhập).

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính. |
| 2 | `product_code` | `character varying(50)` | Mã sản phẩm. |
| 3 | `product_name` | `character varying(200)` | Tên sản phẩm. |
| 4 | `create_date` | `timestamp without time zone` | Ngày tạo. |
| 5 | `modified_user_id` | `bigint` | Người sửa. |
| 6 | `updated_date` | `timestamp without time zone` | Ngày sửa. |
| 7 | `create_user_id` | `bigint` | Người tạo. |
| 8 | `deleted` | `boolean` | Đánh dấu xóa. |
| 9 | `unit` | `character varying(50)` | Đơn vị |
| 10 | `serial_no` | `character varying(100)` | Lưu serial của sản phẩm, nếu sản phẩm không có serial thì null |
| 11 | `length` | `numeric(18,2)` |  |
| 12 | `width` | `numeric(18,2)` |  |
| 13 | `height` | `numeric(18,2)` |  |

---

### Table: `role_permission`
**Mô tả:** Bảng trung gian cấu hình: Một nhóm quyền (Role) sẽ có những hành động (Permission) chi tiết nào.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `role_id` | `bigint NOT NULL` |  |
| 2 | `permission_id` | `bigint NOT NULL` |  |
| 3 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 4 | `modified_user_id` | `bigint` |  |
| 5 | `modified_date` | `timestamp without time zone` |  |
| 6 | `create_user_id` | `bigint` |  |
| 7 | `deleted` | `boolean DEFAULT false` |  |
| 8 | `company_id` | `integer` |  |
| 9 | `uuid` | `uuid` |  |

---

### Table: `scan_product_log`
**Mô tả:** Lưu thông tin sản phẩm được quét trong quá trình thực hiện công việc. Khi hoàn thành task hãy xóa các bản ghi trong bảng này.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `product_code` | `character varying(500)` | Mã sản phẩm. |
| 3 | `serial_number` | `character varying(255)` | Số serial của sản phẩm. |
| 4 | `scan_time` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Thời gian quét sản phẩm. |
| 5 | `status` | `integer DEFAULT 0` | Trạng thái quét sản phẩm. 0-Đã quét thành công, 1-Quét thất bại. |
| 6 | `scanned_by` | `bigint` | Mã nhân viên thực hiện quét sản phẩm. |
| 7 | `order_id` | `bigint` | đơn hàng. |

---

### Table: `slocs`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `sloc_code` | `character varying(20) NOT NULL` |  |
| 3 | `sloc_name` | `character varying(255) NOT NULL` |  |
| 4 | `description` | `character varying(500)` |  |
| 5 | `status` | `character varying(20) DEFAULT 'ACTIVE'::character varying` |  |
| 6 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 7 | `create_user_id` | `bigint` |  |
| 8 | `modified_date` | `timestamp without time zone` |  |
| 9 | `modified_user_id` | `bigint` |  |
| 10 | `deleted` | `boolean DEFAULT false` |  |
| 11 | `company_id` | `bigint` |  |
| 12 | `uuid` | `uuid NOT NULL` |  |
| 13 | `employee_id` | `bigint` |  |
| 14 | `plant_code` | `character varying(50) DEFAULT 'DEFAULT'::character varying NOT NULL` |  |

---

### Table: `system_permission`
**Mô tả:** Danh mục chứa tất cả các hành động/quyền hạn nguyên tử (Hạt nhân) trong hệ thống.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `permission_code` | `character varying(100) NOT NULL` | Mã quyền (VD: LAYOUT_VIEW, LAYOUT_DRAFT, LAYOUT_APPROVE). Trường này dùng trực tiếp trong code Java thông qua Spring Security (@PreAuthorize) để chặn API. |
| 3 | `permission_name` | `character varying(150) NOT NULL` |  |
| 4 | `module` | `character varying(50) NOT NULL` | Phân nhóm chức năng (VD: WAREHOUSE_LAYOUT, INVENTORY). Hiện tại để gom nhóm cho dễ quản lý. Sau này khi scale hệ thống từ Monolith lên Microservices, trường này sẽ quyết định quyền này thuộc cụm Service nào quản lý. |
| 5 | `description` | `text` |  |
| 6 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 7 | `modified_user_id` | `bigint` |  |
| 8 | `modified_date` | `timestamp without time zone` |  |
| 9 | `create_user_id` | `bigint` |  |
| 10 | `deleted` | `boolean DEFAULT false` |  |
| 11 | `company_id` | `integer` |  |
| 12 | `uuid` | `uuid` |  |

---

### Table: `system_role`
**Mô tả:** Danh mục các Nhóm quyền/Vai trò (Role).

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `role_code` | `character varying(50) NOT NULL` | Mã nhóm quyền (VD: VIEWER, PLANNER, APPROVER). Dùng để gán nhanh cho người dùng. |
| 3 | `role_name` | `character varying(100) NOT NULL` |  |
| 4 | `description` | `text` |  |
| 5 | `is_system` | `boolean DEFAULT false` | Đánh dấu vai trò cốt lõi của hệ thống (true = không cho sửa/xóa tên vai trò này trên giao diện UI), tránh việc người dùng bấm nhầm xóa mất quyền Admin làm sập luồng vận hành. |
| 6 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 7 | `modified_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 8 | `modified_user_id` | `bigint` |  |
| 9 | `create_user_id` | `bigint` |  |
| 10 | `deleted` | `boolean DEFAULT false` |  |
| 11 | `company_id` | `integer` |  |
| 12 | `uuid` | `uuid` |  |

---

### Table: `system_user`
**Mô tả:** Bảng lưu trữ thông tin tài khoản nhân sự toàn hệ thống.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `username` | `character varying(50) NOT NULL` | Tên đăng nhập. Hiện tại dùng để login. Sau này hệ thống scale lớn có thể làm key để đồng bộ Single Sign-On (SSO) với hệ thống nhân sự tập trung như LDAP/Active Directory. |
| 3 | `password_hash` | `character varying(255) NOT NULL` | Mật khẩu đã băm (BCrypt). Bảo mật tuyệt đối không lưu chuỗi trần. |
| 4 | `full_name` | `character varying(100) NOT NULL` |  |
| 5 | `email` | `character varying(100)` |  |
| 6 | `phone` | `character varying(50)` |  |
| 7 | `department_name` | `character varying(150)` | Tên phòng ban (VD: Phòng Cung ứng, Ban Quản lý Kho). Hiện tại dùng hiển thị thông tin. Sau này dùng để viết thuật toán tự động phân quyền theo phòng ban. |
| 8 | `employee_code` | `character varying(50)` | Mã nhân viên (VD: NV202601). Hiện tại dùng quản lý hành chính. Sau này dùng làm khóa ngoại (FK) đồng bộ với máy chấm công hoặc hệ thống ERP (SAP/Oracle). |
| 9 | `active` | `boolean DEFAULT true NOT NULL` | Trạng thái tài khoản (true = hoạt động, false = khóa). Khi nhân viên nghỉ việc hoặc đình chỉ, chỉ cần chuyển về false, tuyệt đối không dùng lệnh DELETE để giữ lại toàn bộ lịch sử Audit Log sau này. |
| 10 | `is_admin` | `boolean DEFAULT false NOT NULL` | Cờ tối cao (Super Admin). True thì bypass qua mọi vòng kiểm tra quyền. Dùng cho tài khoản Root của dev hoặc sếp tổng, tránh việc hệ thống bị lỗi phân quyền thì vẫn có tài khoản vào cứu dữ liệu. |
| 11 | `last_login_at` | `timestamp without time zone` |  |
| 12 | `password_changed_at` | `timestamp without time zone` |  |
| 13 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 14 | `modified_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 15 | `modified_user_id` | `bigint` |  |
| 16 | `create_user_id` | `bigint` |  |
| 17 | `deleted` | `boolean DEFAULT false` |  |
| 18 | `company_id` | `integer` |  |
| 19 | `uuid` | `uuid` |  |

---

### Table: `task`
**Mô tả:** Lưu thông tin công việc được tạo từ đơn hàng.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `id_order` | `bigint NOT NULL` | Mã đơn hàng. |
| 3 | `task_code` | `character varying(255) NOT NULL` | Mã công việc. |
| 4 | `task_name` | `character varying(255) NOT NULL` | Tên công việc. |
| 5 | `assignee_id` | `bigint` | Mã nhân viên được giao thực hiện. |
| 6 | `expected_delivery_date` | `date` | Ngày dự kiến giao. |
| 7 | `expected_delivery_time` | `time without time zone` | Giờ dự kiến giao. |
| 8 | `reason` | `character varying(255)` | Lý do hủy, chậm tiến độ hoặc ghi chú liên quan đến công việc. |
| 9 | `zone_code` | `character varying(255)` | Khu vực thực hiện công việc. |
| 10 | `status` | `integer DEFAULT 0` | Trạng thái công việc. 1-Draft, 2-Wait_Assign_Approved, 3-Wait_Assignment, 4-Wait_receive, 5-Pending, 6-In_Progress, 7-Wait_Transfer_Approved, 8-Extend, 9-Completed, 10-Cancelled., 11-Wait_External |
| 11 | `description` | `character varying(500)` | Mô tả chi tiết công việc. |
| 12 | `created_at` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Thời gian tạo bản ghi. |
| 13 | `updated_at` | `timestamp without time zone` | Thời gian cập nhật bản ghi. |
| 14 | `deleted` | `boolean DEFAULT false` | Đánh dấu xóa mềm. |
| 15 | `create_by` | `bigint` | Người tạo bản ghi. |
| 16 | `update_by` | `bigint` | Người cập nhật bản ghi gần nhất. |
| 17 | `template_code` | `character varying(255)` |  |
| 18 | `start_time` | `timestamp without time zone` |  |
| 19 | `end_time` | `timestamp without time zone` |  |
| 20 | `result` | `character varying(30)` | Kết quả task: PASSED_SIGNED, REJECTED, ... |
| 21 | `priority` | `integer DEFAULT 0 NOT NULL` | Độ ưu tiên của công việc. |
| 22 | `sla_status` | `integer` |  |
| 23 | `company_id` | `integer` |  |
| 24 | `create_user_id` | `integer` |  |
| 25 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 26 | `modified_user_id` | `integer` |  |
| 27 | `modified_date` | `timestamp without time zone` |  |

---

### Table: `task_kpi`
**Mô tả:** Lưu thời gian thực hiện để đánh giá KPI của công việc.

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `end_time` | `timestamp without time zone` | Thời gian kết thúc thực hiện công việc. |
| 2 | `task_id` | `bigint NOT NULL` | Mã công việc. |
| 3 | `id` | `bigint NOT NULL` |  |
| 4 | `reason` | `character varying(500)` | Lý do chậm tiến độ hoặc ghi chú liên quan đến công việc. |

---

### Table: `task_template`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `template_name` | `character varying(255) NOT NULL` |  |
| 3 | `template_code` | `character varying(255) NOT NULL` |  |
| 4 | `description` | `character varying(500)` |  |
| 5 | `created_at` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 6 | `created_by` | `bigint` |  |
| 7 | `depend_on_template_code` | `character varying(255)` | Mã công việc mà công việc này phụ thuộc vào. |
| 8 | `kpi_time` | `integer DEFAULT 0 NOT NULL` | Thời gian KPI (tính bằng phút) để hoàn thành công việc. |
| 9 | `zone_code` | `character varying(50) NOT NULL` | Mã khu vực thực hiện công việc. |
| 10 | `priority` | `integer DEFAULT 0 NOT NULL` | Độ ưu tiên của công việc. |
| 11 | `type` | `character varying(100)` |  |

---

### Table: `unit_manager`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `manager_code` | `character varying(50)` |  |
| 3 | `manager_name` | `character varying(255) NOT NULL` |  |
| 4 | `email` | `character varying(255)` |  |
| 5 | `phone` | `character varying(50)` |  |
| 6 | `status` | `character varying(20) DEFAULT 'ACTIVE'::character varying` |  |
| 7 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 8 | `create_user_id` | `bigint` |  |
| 9 | `modified_date` | `timestamp without time zone` |  |
| 10 | `modified_user_id` | `bigint` |  |
| 11 | `deleted` | `boolean DEFAULT false` |  |
| 12 | `company_id` | `bigint` |  |
| 13 | `uuid` | `uuid NOT NULL` |  |

---

### Table: `user_role`
**Mô tả:** Bảng gán vai trò: User này giữ chức vụ/quyền hạn gì (Đã loại bỏ hoàn toàn warehouse_id theo đúng ý mày review).

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `user_id` | `bigint NOT NULL` |  |
| 2 | `role_id` | `bigint NOT NULL` |  |

---

### Table: `warehouse`
**Mô tả:** Danh mục kho đồng bộ từ SAP

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính |
| 2 | `warehouse_code` | `character varying(50) NOT NULL` | Mã kho đồng bộ từ SAP |
| 3 | `address` | `text` | Địa chỉ kho |
| 4 | `manager_name` | `character varying(255)` | Người quản lý kho |
| 5 | `phone` | `character varying(50)` | Số điện thoại liên hệ kho |
| 6 | `length` | `numeric(12,2)` | Chiều dài kho |
| 7 | `width` | `numeric(12,2)` | Chiều rộng kho |
| 8 | `height` | `numeric(12,2)` | Chiều cao kho |
| 9 | `floor_area` | `numeric(18,2)` | Diện tích mặt sàn kho |
| 10 | `theoretical_volume` | `numeric(18,2)` | Thể tích lý thuyết |
| 11 | `design_volume` | `numeric(18,2)` | Thể tích thiết kế |
| 12 | `used_volume` | `numeric(18,2)` | Thể tích đã sử dụng |
| 13 | `usage_percent` | `numeric(5,2)` | Tỷ lệ sử dụng kho (%) |
| 14 | `status` | `character varying(30) DEFAULT 'NOT_CONFIGURED'::character varying NOT NULL` | Trạng thái kho (Ví dụ: ''NOT_CONFIGURED'': Chưa cấu hình, ''CONFIGURING'': Đang cấu hình, ''CONFIGURED'': Đã cấu hình) |
| 15 | `last_sync_at` | `timestamp without time zone` | Thời gian đồng bộ SAP gần nhất |
| 16 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` | Thời gian tạo |
| 17 | `modified_date` | `timestamp without time zone DEFAULT now() NOT NULL` | Thời gian cập nhật |
| 18 | `modified_user_id` | `bigint` |  |
| 19 | `create_user_id` | `bigint` |  |
| 20 | `deleted` | `boolean DEFAULT false` |  |
| 21 | `warehouse_type` | `character varying(50)` | Loại kho (Ví dụ: Nhà kho, Kho lạnh, Kho tạm, Bãi ngoài trời) |
| 22 | `warehouse_temperature` | `character varying(50)` | Điều kiện nhiệt độ (°C) của kho (Ví dụ: 25 , 30 ,100 ) |
| 23 | `description` | `text` | Mô tả chi tiết về kho |
| 24 | `note` | `text` | Ghi chú bổ sung của kho |
| 25 | `company_id` | `integer` |  |
| 26 | `uuid` | `uuid` |  |
| 27 | `warehouse_full_name` | `character varying(255)` | Tên đầy đủ của kho hàng |
| 28 | `location_id` | `bigint DEFAULT 1 NOT NULL` | id của bảng location |

---

### Table: `warehouse_layout`
**Mô tả:** Thông tin layout cấu hình của kho

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `warehouse_id` | `bigint NOT NULL` | ID kho |
| 3 | `layout_status` | `character varying(30) DEFAULT 'DRAFT'::character varying NOT NULL` | Trạng thái layout: DRAFT, COMPLETED |
| 4 | `canvas_width` | `numeric(12,2)` | Chiều rộng canvas |
| 5 | `canvas_length` | `numeric(12,2)` | Chiều rộng canvas |
| 6 | `draft_json` | `jsonb` | Snapshot JSON layout để render nhanh UI |
| 7 | `completed_at` | `timestamp without time zone` | Thời gian hoàn tất cấu hình |
| 8 | `completed_by` | `bigint` | User hoàn tất cấu hình |
| 9 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 10 | `modified_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 11 | `modified_user_id` | `bigint` |  |
| 12 | `create_user_id` | `bigint` |  |
| 13 | `deleted` | `boolean DEFAULT false` |  |
| 14 | `company_id` | `integer` |  |
| 15 | `zoom_level` | `numeric(5,2) DEFAULT 1.0` |  |
| 16 | `uuid` | `uuid` |  |

---

### Table: `warehouse_layout_zone`
**Mô tả:** Instance phân khu trên layout

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `warehouse_layout_id` | `bigint NOT NULL` |  |
| 2 | `zone_id` | `bigint NOT NULL` |  |
| 3 | `x` | `numeric(12,2)` | Tọa độ X |
| 4 | `y` | `numeric(12,2)` | Tọa độ Y |
| 5 | `rotation` | `numeric(5,2)` | Góc xoay |
| 6 | `color` | `character varying(30)` |  |
| 7 | `width` | `numeric(12,2)` | Dài |
| 8 | `length` | `numeric(12,2)` | Rộng |
| 9 | `floor_area` | `numeric(18,2)` |  |
| 10 | `zoom_level` | `numeric(5,2) DEFAULT 1.00` |  |
| 11 | `description` | `character varying(500)` |  |
| 12 | `create_date` | `timestamp with time zone DEFAULT now()` |  |
| 13 | `modified_date` | `timestamp with time zone DEFAULT now()` |  |
| 14 | `create_user_id` | `character varying(255)` |  |
| 15 | `modified_user_id` | `character varying(255)` |  |
| 16 | `id` | `bigint NOT NULL` |  |
| 17 | `number_index` | `smallint` | đánh số thứ tự ví dụ: PK01, PK02 thì mỗi đuôi là 1 số tt |
| 18 | `company_id` | `integer` |  |
| 19 | `uuid` | `uuid` |  |
| 20 | `layout_zone_code` | `character varying(100)` | Mã phân khu trong layout |
| 21 | `layout_zone_name` | `character varying(255)` | Tên phân khu trong layout |
| 22 | `height` | `numeric(12,2)` | Chiều cao của phân khu, mặc định 3,6m |

---

### Table: `warehouse_plant`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `warehouse_id` | `bigint NOT NULL` |  |
| 2 | `plant_id` | `bigint NOT NULL` |  |
| 3 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 4 | `create_user_id` | `bigint` |  |
| 5 | `modified_date` | `timestamp without time zone` |  |
| 6 | `modified_user_id` | `bigint` |  |
| 7 | `deleted` | `boolean DEFAULT false` |  |
| 8 | `company_id` | `bigint` |  |
| 9 | `sloc_id` | `bigint NOT NULL` | sloc_id để biết được là sloc được thêm vào warehouse thuộc plant nào |
| 10 | `uuid` | `uuid` |  |
| 11 | `id` | `bigint NOT NULL` |  |

---

### Table: `warehouse_rule_config`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `rule_code` | `character varying(50) NOT NULL` |  |
| 3 | `rule_name` | `character varying(255) NOT NULL` |  |
| 4 | `threshold_value` | `numeric(10,2)` |  |
| 5 | `status` | `character varying(20) DEFAULT 'ACTIVE'::character varying NOT NULL` |  |
| 6 | `modified_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 7 | `create_user_id` | `character varying(100)` |  |
| 8 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` |  |
| 9 | `modified_user_id` | `character varying(100)` |  |
| 10 | `deleted` | `boolean DEFAULT false` |  |
| 11 | `rule_type` | `character varying(50)` | Loại luật kiểm tra. Ví dụ: OVERLAP_REQUIRED, INSIDE_PARENT, AT_LEAST_ONE, ONE_OF, MIN_WIDTH, MIN_DISTANCE |
| 12 | `severity` | `character varying(20)` | Mức độ cảnh báo khi validate. Ví dụ: SUCCESS (đạt yêu cầu), WARNING (cảnh báo), ERROR (không hợp lệ) |
| 13 | `config` | `jsonb` | Cấu hình chi tiết của rule dưới dạng JSONB, chứa các tham số validate như zoneCode, zoneCodes, minWidth, minDistance, parentZone... |
| 14 | `display_order` | `integer` | Thứ tự hiển thị rule trên giao diện hoặc trong kết quả validate |
| 15 | `canvas_context` | `character varying(50) DEFAULT 'MAIN_CANVAS'::character varying NOT NULL` |  |
| 16 | `company_id` | `integer` |  |
| 17 | `uuid` | `uuid` |  |
| 18 | `warehouse_type` | `character varying(50) DEFAULT 'WAREHOUSE'::character varying NOT NULL` |  |
| 19 | `template_code` | `character varying(255)` |  |

---

### Table: `warehouse_sync_log`
**Mô tả:** Lịch sử đồng bộ kho từ SAP

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `job_execution_id` | `character varying(100)` | Mã transaction sync |
| 3 | `status` | `character varying(30)` | Trạng thái sync: SUCCESS, PARTIAL_SUCCESS, FAILED |
| 4 | `total_record` | `integer DEFAULT 0` | Tổng số record SAP trả về |
| 5 | `success_record` | `integer DEFAULT 0` | Số record xử lý thành công |
| 6 | `failed_record` | `integer DEFAULT 0` | Số record xử lý thất bại |
| 7 | `inserted_record` | `integer DEFAULT 0` | Số record insert mới |
| 8 | `updated_record` | `integer DEFAULT 0` | Số record update |
| 9 | `inactivated_record` | `integer DEFAULT 0` | Số warehouse bị inactive |
| 10 | `current_total_warehouse` | `integer DEFAULT 0` | Tổng số warehouse hiện tại |
| 11 | `error_message` | `text` | Lỗi tổng quát của batch sync |
| 12 | `error_payload` | `jsonb` | Danh sách record lỗi |
| 13 | `response_payload` | `jsonb` | Response SAP khi sync lỗi |
| 14 | `started_at` | `timestamp without time zone` |  |
| 15 | `finished_at` | `timestamp without time zone` |  |
| 16 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 17 | `modified_user_id` | `bigint` |  |
| 18 | `modified_date` | `timestamp without time zone` |  |
| 19 | `create_user_id` | `bigint` |  |
| 20 | `deleted` | `boolean DEFAULT false` |  |
| 21 | `company_id` | `bigint` |  |
| 22 | `uuid` | `uuid` |  |
| 23 | `http_status_code` | `integer` |  |
| 24 | `request_url` | `character varying(500)` |  |
| 25 | `request_payload` | `jsonb` |  |
| 26 | `transaction_id` | `character varying(100)` |  |
| 27 | `attempt_number` | `integer DEFAULT 1` |  |

---

### Table: `warehouse_zone_equipment`
**Mô tả:** Công cụ dụng cụ trong canvas

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `layout_zone_id` | `bigint` |  |
| 3 | `equipment_code` | `character varying(50)` |  |
| 4 | `equipment_name` | `character varying(255)` |  |
| 5 | `equipment_type` | `character varying(50)` | Loại object render |
| 6 | `x` | `numeric(12,2)` |  |
| 7 | `y` | `numeric(12,2)` |  |
| 8 | `width` | `numeric(12,2)` |  |
| 9 | `length` | `numeric(12,2)` |  |
| 10 | `rotation` | `numeric(5,2)` |  |
| 11 | `direction` | `character varying(30)` |  |
| 12 | `number_of_levels` | `integer` |  |
| 13 | `number_of_slots` | `integer` |  |
| 14 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 15 | `modified_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 16 | `modified_user_id` | `bigint` |  |
| 17 | `deleted` | `boolean DEFAULT false` |  |
| 18 | `create_user_id` | `bigint` |  |
| 19 | `company_id` | `integer` |  |
| 20 | `uuid` | `uuid` |  |
| 21 | `height` | `numeric(12,2)` | Chiều cao từng equipment trong zone |
| 22 | `aisle_type` | `character varying(50)` | loai loi di trong LOI DI  |

---

### Table: `warehouse_zone_layout_config`
**Mô tả:** Bảng lưu trữ các thuộc tính cấu hình động (Key-Value) cho từng phân khu trong kho

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` | Khóa chính của bản ghi cấu hình |
| 2 | `layout_zone_id` | `bigint NOT NULL` | Khóa ngoại tham chiếu đến bảng layout_zone |
| 3 | `config_key` | `character varying(50) NOT NULL` | Tên thuộc tính cấu hình. Ví dụ: row_count, goods_type, max_weight, pallet_capacity |
| 4 | `config_value` | `character varying(500)` | Giá trị thực tế của thuộc tính cấu hình, lưu dưới dạng chuỗi |
| 5 | `data_type` | `character varying(20) DEFAULT 'STRING'::character varying` | Kiểu dữ liệu của config_value để Backend parse an toàn. Ví dụ: STRING, NUMBER, BOOLEAN |
| 6 | `create_user_id` | `character varying(100)` | Người tạo bản ghi |
| 7 | `create_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Thời gian tạo bản ghi |
| 8 | `modified_user_id` | `character varying(100)` | Người cập nhật cuối cùng |
| 9 | `modified_date` | `timestamp without time zone DEFAULT CURRENT_TIMESTAMP` | Thời gian cập nhật cuối cùng |
| 10 | `deleted` | `boolean DEFAULT false` | Đánh dấu xóa mềm (Soft Delete) |
| 11 | `company_id` | `integer` |  |
| 12 | `uuid` | `uuid` |  |

---

### Table: `zone`
**Mô tả:** Danh mục phân khu dùng chung

| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `zone_code` | `character varying(50)` | Mã phân khu theo dạng PK(n) vì mỗi lần kéo vào layout thì tăng lên 1 |
| 3 | `zone_name` | `character varying(255)` | Tên phân khu |
| 4 | `description` | `character varying(500)` |  |
| 5 | `create_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 6 | `modified_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 7 | `create_user_id` | `bigint` |  |
| 8 | `modified_user_id` | `bigint` |  |
| 9 | `deleted` | `boolean DEFAULT false` |  |
| 10 | `required` | `boolean` |  |
| 11 | `select_group` | `character varying(50)` |  |
| 12 | `zone_type` | `character varying(50)` |  |
| 13 | `max_count` | `character varying(50)` |  |
| 14 | `default_size_m` | `jsonb` |  |
| 15 | `overlap_policy` | `jsonb` |  |
| 16 | `color` | `jsonb` |  |
| 17 | `config_type` | `character varying(100)` |  |
| 18 | `type_function` | `character varying(50)` |  |
| 19 | `company_id` | `integer` |  |
| 20 | `uuid` | `uuid` |  |
| 21 | `equipment_codes` | `text[]` | Danh sách mã thiết bị được phép sử dụng trong phân khu |

---

### Table: `zone_inventory_balance`
| STT | Tên Cột (Column) | Kiểu Dữ Liệu & Ràng Buộc | Ghi Chú / Mô Tả (Comment) |
|:---:|:---|:---|:---|
| 1 | `id` | `bigint NOT NULL` |  |
| 2 | `layout_zone_id` | `bigint NOT NULL` |  |
| 3 | `order_product_component_id` | `bigint NOT NULL` |  |
| 4 | `quantity_on_hand` | `numeric(18,2) DEFAULT 0 NOT NULL` |  |
| 5 | `volume_on_hand` | `numeric(18,2) DEFAULT 0 NOT NULL` |  |
| 6 | `updated_date` | `timestamp without time zone DEFAULT now() NOT NULL` |  |
| 7 | `layout_zone_type` | `character varying(50)` |  |

---


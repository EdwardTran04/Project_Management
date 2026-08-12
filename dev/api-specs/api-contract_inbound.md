# API Contract — Phân hệ Nhập kho (Inbound Module)

**Version:** 2.0
**Ngày:** 12/08/2026
**Base URL:** `http://10.10.171.32:8080` (hoặc `http://localhost:8080` ở môi trường dev)
**Cơ sở dữ liệu:** PostgreSQL Schema `vo_warehouse_vtit`
**Tổng số API nghiệp vụ:** 57 endpoints (không tính CRUD boilerplate framework)

---

## 1. Authentication & API Security

Hệ thống sử dụng cơ chế xác thực **Viettel SSO (Single Sign-On)**.
Các API yêu cầu truyền Access Token hợp lệ dưới dạng Bearer Token tại HTTP Header:

```yaml
Authorization: Bearer {access_token}
Content-Type: application/json
```

---

## 2. Quy ước chung

### 2.1. Response Envelope chuẩn
Tất cả API trả về cùng cấu trúc JSON:
```json
{
  "code": "00",
  "message": "Thành công",
  "status": 200,
  "data": { ... }
}
```

### 2.2. Phân trang (Pagination)
Các API tìm kiếm/list trả về phân trang chuẩn:
```json
{
  "items": [...],
  "page": 1,
  "size": 10,
  "total": 150,
  "totalPages": 15
}
```

---

## 3. Đặc tả API chi tiết theo Nhóm chức năng

---

### NHÓM A: QUẢN LÝ LỆNH NHẬP KHO (INBOUND ORDERS)

#### API A.1: Dashboard thống kê lệnh nhập
*   **Mục đích:** Thống kê lũy kế số lượng đơn nhập kho theo tháng/năm hiển thị thanh KPI trên cùng.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/cumulative-stats`
*   **Ánh xạ DB:** Bảng `"order"` — Aggregate `COUNT`, `SUM(total_quantity)` nhóm theo `status` và khoảng thời gian.

#### API A.2: Dashboard thống kê task theo bộ lọc
*   **Mục đích:** Đếm số lượng task theo trạng thái (Chờ nhận, đang thực hiện, hoàn thành) phục vụ nhãn tab.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/dash-board`
*   **Request Body:**
    ```json
    {
      "keyword": "",
      "statuses": [],
      "warehouseCode": ""
    }
    ```
*   **Ánh xạ DB:** Bảng `task` — `COUNT` nhóm theo `status` (0/1/2) và `sla_status` (1/2/3).

#### API A.3: Dashboard chi tiết lệnh nhập
*   **Mục đích:** Thống kê dashboard theo nhóm trạng thái cho phân hệ lệnh nhập (Inbound Order).
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/inbound-orders/dashboard`
*   **Ánh xạ DB:** Bảng `"order"` — Aggregate nhóm theo `status` và `order_type`.

#### API A.4: Tìm kiếm & Phân trang danh sách lệnh nhập
*   **Mục đích:** Tìm kiếm, lọc và phân trang danh sách các lệnh nhập kho (Registry Orders) từ SAP.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/registry-order/search`
*   **Request Body:**
    ```json
    {
      "page": 1,
      "size": 10,
      "keyword": "INB-2026",
      "statuses": ["WAIT_CONFIRM", "IN_PROGRESS"],
      "warehouseCode": "HN01"
    }
    ```
*   **Ánh xạ DB:** Bảng `"order"` — Filter theo `order_code ILIKE`, `status IN (...)`, `warehouse_code =`.
    *   `"order".order_code` ➔ `orderCode`
    *   `"order".order_type` ➔ `orderType`
    *   `"order".status` ➔ `status`
    *   `"order".warehouse_code` ➔ `warehouseCode`
    *   `"order".supplier_name` ➔ `supplierName`
    *   `"order".expected_inbound_at` ➔ `expectedInboundAt`
    *   `"order".total_quantity` ➔ `totalQuantity`

#### API A.5: Chi tiết lệnh nhập kho
*   **Mục đích:** Lấy thông tin header lệnh + danh sách sản phẩm.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/registry-order/{id}`
*   **Ánh xạ DB:** Bảng `"order"` JOIN `order_product` JOIN `product`
    *   `product.sku` ➔ `sku`, `product.name` ➔ `name`, `product.unit` ➔ `unit`

#### API A.6: Chi tiết lệnh nhập (Inbound Order Controller)
*   **Mục đích:** Chi tiết lệnh nhập kho với thông tin mở rộng (task chain, KCS, V-Office status).
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/detail/{orderId}`
*   **Ánh xạ DB:** Bảng `"order"` JOIN `task` JOIN `document` — Trả thêm trạng thái V-Office, KCS.

#### API A.7: Danh sách Task theo lệnh nhập
*   **Mục đích:** Lấy toàn bộ task chain (Task 1→7) của một lệnh nhập kho cụ thể.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/tasks`
*   **Ánh xạ DB:** Bảng `task` WHERE `id_order = orderId` — Trả danh sách task kèm `status`, `assignee_id`, `sla_status`.

#### API A.8: Lịch sử thay đổi lệnh nhập
*   **Mục đích:** Lấy lịch sử audit log các thao tác trên lệnh nhập kho.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/history`
*   **Ánh xạ DB:** Bảng `order_history` / `audit_log` WHERE `order_id = orderId`.

#### API A.9: Tổng hợp sản phẩm theo lệnh nhập
*   **Mục đích:** Lấy tổng hợp số lượng PO vs thực nhận theo từng sản phẩm.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/products/summary`
*   **Ánh xạ DB:** Bảng `order_product` JOIN `product` — Aggregate `SUM(quantity)` theo PO và thực tế.

#### API A.10: Thông tin vận chuyển (Shipping Info)
*   **Mục đích:** Lấy thông tin xe, tài xế, biển số xe đã đăng ký tại cổng bảo vệ.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/shipping`
*   **Ánh xạ DB:** Bảng `info_shipping` WHERE `order_id = orderId` — `license_plate`, `driver_name`, `driver_id_card`, `check_in_time`.

#### API A.11: Chứng từ đính kèm lệnh nhập
*   **Mục đích:** Lấy danh sách file chứng từ (BBBG, PO, Phiếu nhập...) đính kèm lệnh nhập.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/documents`
*   **Ánh xạ DB:** Bảng `document` WHERE `order_id = orderId`.

#### API A.12: Tải xuống chứng từ
*   **Mục đích:** Download file chứng từ lệnh nhập kho (PDF BBBG, Phiếu nhập...).
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/documents/download`
*   **Response:** Binary file stream (PDF/Excel).

#### API A.13: Kết quả KCS lệnh nhập
*   **Mục đích:** Lấy kết quả kiểm tra chất lượng KCS đồng bộ từ SAP.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/kcs-results`
*   **Ánh xạ DB:** Bảng `task` WHERE `id_order = orderId AND task_type = 'KCS'` — `result` ('DAT'/'LOI').

#### API A.14: Log đồng bộ SAP
*   **Mục đích:** Xem lịch sử các lần đồng bộ dữ liệu với SAP S/4HANA.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/sap-logs`
*   **Ánh xạ DB:** Bảng `actual_received_sap_log` WHERE `order_id = orderId`.

#### API A.15: Xuất Excel danh sách lệnh nhập
*   **Mục đích:** Export danh sách lệnh nhập kho ra file Excel (.xlsx).
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/inbound-orders/export`
*   **Response:** Binary file stream (Excel).

#### API A.16: Import Excel lệnh nhập (Registry Order)
*   **Mục đích:** Nhập liệu hàng loạt lệnh nhập kho từ file Excel.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/registry-order/import-excel`
*   **Content-Type:** `multipart/form-data`

#### API A.17: Download file mẫu Excel
*   **Mục đích:** Tải file Excel mẫu để nhập liệu lệnh nhập kho.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/registry-order/download-file-template`
*   **Response:** Binary file stream (Excel template).

---

### MÀN HÌNH CHI TIẾT LỆNH NHẬP KHO (INBOUND ORDER DETAIL SCREEN)

Khi người dùng click vào 1 dòng trên danh sách lệnh nhập (NHÓM A), hệ thống mở màn hình **Chi tiết lệnh nhập kho**. Đây là màn hình trung tâm hiển thị toàn bộ thông tin vòng đời của một lệnh nhập, chia thành nhiều phân vùng và tab.

#### Mô tả bố cục UI (Layout Description)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  HEADER BAR                                                            │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Mã lệnh: INB-2026-00445 │ NCC: Cty CP Đầu tư CN Viettel        │  │
│  │ Trạng thái: [IN_PROGRESS] │ Kho: HN01 │ Ngày nhập: 12/08/2026  │  │
│  │ [Nút: Xác nhận tiếp nhận] [Nút: Từ chối] [Nút: Xuất PDF]       │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  TAB BAR                                                                │
│  ┌─────────────┬──────────────┬──────────────┬───────────┬───────────┐  │
│  │ Sản phẩm    │ Task Chain   │ Vận chuyển   │ Chứng từ  │ Lịch sử   │  │
│  └─────────────┴──────────────┴──────────────┴───────────┴───────────┘  │
│                                                                         │
│  TAB CONTENT AREA                                                       │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ (Nội dung thay đổi theo tab đang active)                         │  │
│  │                                                                   │  │
│  │ Tab Sản phẩm: Bảng danh sách vật tư PO + số lượng thực nhận     │  │
│  │ Tab Task Chain: Timeline 7 bước (Task 1→7) + trạng thái          │  │
│  │ Tab Vận chuyển: Thông tin xe, tài xế, biển số, giờ vào cổng     │  │
│  │ Tab Chứng từ: Danh sách file BBBG, PO, Phiếu nhập + Download    │  │
│  │ Tab Lịch sử: Audit log các thao tác trên lệnh                   │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  SIDE PANEL (Bên phải hoặc Footer)                                      │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Kết quả KCS: [ĐẠT/KHÔNG ĐẠT]  │  Log SAP: 3 lần đồng bộ       │  │
│  │ HU đã đóng gói: 4 thùng        │  RFID: 4 mã EPC đã gán        │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Bảng ánh xạ UI → API trên màn hình Chi tiết

| Vùng UI / Tab | API gọi khi load | Endpoint | Ref |
|:---|:---|:---|:---:|
| **Header Bar** — Thông tin chung lệnh (mã, NCC, kho, trạng thái, ngày) | Chi tiết lệnh nhập | `GET /api/registration/inbound-orders/detail/{orderId}` | A.6 |
| **Tab Sản phẩm** — Bảng danh sách vật tư PO vs thực nhận | Tổng hợp sản phẩm | `GET /api/registration/inbound-orders/{orderId}/products/summary` | A.9 |
| **Tab Sản phẩm** — Thông tin đóng gói HU theo sản phẩm | HU theo sản phẩm | `GET /api/registration/inbound-orders/{orderId}/product-hus` | I.9 |
| **Tab Sản phẩm** — Thông tin đóng gói chi tiết | Đóng gói sản phẩm | `GET /api/registration/inbound-orders/{orderId}/product-packing` | I.2 |
| **Tab Task Chain** — Timeline 7 bước tác nghiệp (Task 1→7) | Danh sách Task theo lệnh | `GET /api/registration/inbound-orders/{orderId}/tasks` | A.7 |
| **Tab Vận chuyển** — Thông tin xe, tài xế, biển số, giờ check-in | Thông tin vận chuyển | `GET /api/registration/inbound-orders/{orderId}/shipping` | A.10 |
| **Tab Chứng từ** — Danh sách file đính kèm (BBBG, PO, Phiếu nhập) | Chứng từ đính kèm | `GET /api/registration/inbound-orders/{orderId}/documents` | A.11 |
| **Tab Chứng từ** — Nút tải xuống file | Download chứng từ | `GET /api/registration/inbound-orders/{orderId}/documents/download` | A.12 |
| **Tab Lịch sử** — Audit log thao tác trên lệnh | Lịch sử thay đổi | `GET /api/registration/inbound-orders/{orderId}/history` | A.8 |
| **Side Panel** — Kết quả kiểm tra chất lượng KCS | Kết quả KCS | `GET /api/registration/inbound-orders/{orderId}/kcs-results` | A.13 |
| **Side Panel** — Lịch sử đồng bộ SAP | Log đồng bộ SAP | `GET /api/registration/inbound-orders/{orderId}/sap-logs` | A.14 |
| **Side Panel** — Ảnh minh chứng các task | File đính kèm Task | `GET /api/registration/attachments/{taskId}` | B.10 |

#### Chi tiết API chính của màn hình

##### API Detail.1: Lấy toàn bộ chi tiết lệnh nhập kho
*   **Mục đích:** API chính khi mở màn hình chi tiết — trả về header lệnh + trạng thái + metadata mở rộng.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/detail/{orderId}`
*   **Path Params:** `orderId` (Long — ID lệnh nhập)
*   **Response Success (200 OK):**
    ```json
    {
      "code": "00",
      "status": 200,
      "data": {
        "id": 124,
        "orderCode": "INB-2026-00445",
        "orderType": "MUA_MOI",
        "status": "IN_PROGRESS",
        "warehouseCode": "HN01",
        "warehouseName": "Kho Hà Nội 01",
        "supplierCode": "NCC-VTT-001",
        "supplierName": "Công ty Cổ phần Đầu tư Công nghệ Viettel",
        "expectedInboundAt": "2026-08-12T08:00:00",
        "actualInboundAt": "2026-08-12T09:15:00",
        "totalQuantity": 150.00,
        "totalReceivedQuantity": 148.00,
        "lineCount": 4,
        "poNumber": "PO-4500012345",
        "sapDocNumber": "101-2026-889900",
        "kcsStatus": "DAT",
        "vofficeStatus": "PENDING_APPROVAL",
        "bbbgCode": "BBBG-2026-0088",
        "bbbgStatus": "COMPLETED",
        "createdBy": "system_sap_sync",
        "createdDate": "2026-08-10T14:30:00",
        "lastModifiedBy": "pham.tran.hung",
        "lastModifiedDate": "2026-08-12T09:45:00"
      }
    }
    ```
*   **Ánh xạ Database:**
    *   **Bảng chính:** `"order"` (PostgreSQL)
    *   **Cột mapping chi tiết:**
        *   `"order".id` ➔ `id`
        *   `"order".order_code` ➔ `orderCode`
        *   `"order".order_type` ➔ `orderType`
        *   `"order".status` ➔ `status`
        *   `"order".warehouse_code` ➔ `warehouseCode`
        *   `"order".supplier_name` ➔ `supplierName`
        *   `"order".supplier_code` ➔ `supplierCode`
        *   `"order".expected_inbound_at` ➔ `expectedInboundAt`
        *   `"order".actual_inbound_at` ➔ `actualInboundAt`
        *   `"order".total_quantity` ➔ `totalQuantity`
        *   `"order".total_received_quantity` ➔ `totalReceivedQuantity`
        *   `"order".line_count` ➔ `lineCount`
        *   `"order".po_number` ➔ `poNumber`
        *   `"order".sap_doc_number` ➔ `sapDocNumber`
        *   `"order".voffice_sign_flag` ➔ Tính toán `vofficeStatus`
    *   **JOIN bổ sung:**
        *   `bbbg` ON `bbbg.order_id = "order".id` ➔ `bbbgCode`, `bbbgStatus`
        *   `task` ON `task.id_order = "order".id AND task.task_type = 'KCS'` ➔ `kcsStatus`
        *   `document` ON `document.order_id = "order".id AND document.document_type = 'VOFFICE'` ➔ `vofficeStatus`

##### API Detail.2: Tab Sản phẩm — Tổng hợp PO vs Thực nhận
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/products/summary`
*   **Response Success (200 OK):**
    ```json
    {
      "code": "00",
      "status": 200,
      "data": [
        {
          "sku": "RRU-5G-8T",
          "productName": "Khối thu phát vô tuyến RRU 5G 8T8R",
          "unit": "Chiếc",
          "poQuantity": 50.00,
          "receivedQuantity": 49.00,
          "kcsResult": "DAT",
          "variance": -1.00
        }
      ]
    }
    ```
*   **Ánh xạ Database:**
    *   **Bảng:** `order_product` JOIN `product`
    *   **Cột:** `product.sku`, `product.name`, `product.unit`, `order_product.quantity` (PO), tính toán `receivedQuantity` từ `task` thực nhận.

##### API Detail.3: Tab Task Chain — Timeline tác nghiệp
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/tasks`
*   **Response Success (200 OK):**
    ```json
    {
      "code": "00",
      "status": 200,
      "data": [
        {
          "taskId": 557,
          "taskCode": "TSK-001",
          "taskName": "Dỡ hàng khỏi xe",
          "taskType": "UNLOADING",
          "status": 2,
          "statusName": "Hoàn thành",
          "assigneeName": "Nguyễn Văn B",
          "startTime": "2026-08-12T09:15:00",
          "endTime": "2026-08-12T09:45:00",
          "slaStatus": 1
        },
        {
          "taskId": 558,
          "taskCode": "TSK-002",
          "taskName": "Kiểm hàng & Ký BBBG",
          "taskType": "HANDOVER",
          "status": 1,
          "statusName": "Đang thực hiện",
          "assigneeName": "Phạm Trần Hùng",
          "startTime": "2026-08-12T09:50:00",
          "endTime": null,
          "slaStatus": 1
        }
      ]
    }
    ```
*   **Ánh xạ Database:**
    *   **Bảng:** `task` WHERE `id_order = orderId` ORDER BY `task_order`
    *   **Cột:** `task_code`, `task_name`, `task_type`, `status`, `assignee_id` JOIN `user`, `start_time`, `end_time`, `sla_status`.

##### API Detail.4: Tab Vận chuyển — Thông tin xe & tài xế
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/shipping`
*   **Response Success (200 OK):**
    ```json
    {
      "code": "00",
      "status": 200,
      "data": {
        "licensePlate": "29C-12345",
        "driverName": "Trần Văn A",
        "driverIdCard": "001234567890",
        "driverPhone": "0912345678",
        "gateCode": "GATE-01",
        "checkInTime": "2026-08-12T09:05:00",
        "checkOutTime": null,
        "vehicleType": "Xe tải 5 tấn",
        "sealNumber": "SEAL-2026-0042"
      }
    }
    ```
*   **Ánh xạ Database:**
    *   **Bảng:** `info_shipping` WHERE `order_id = orderId`
    *   **Cột:** `license_plate`, `driver_name`, `driver_id_card`, `driver_phone`, `gate_code`, `check_in_time`, `check_out_time`, `vehicle_type`, `seal_number`.

##### API Detail.5: Tab Chứng từ — Danh sách file đính kèm
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/documents`
*   **Response Success (200 OK):**
    ```json
    {
      "code": "00",
      "status": 200,
      "data": [
        {
          "documentId": 901,
          "documentType": "BBBG",
          "code": "BBBG-2026-0088",
          "fileName": "BBBG_INB-2026-00445.pdf",
          "status": "COMPLETED",
          "createdDate": "2026-08-12T10:30:00"
        },
        {
          "documentId": 902,
          "documentType": "VOFFICE",
          "code": "VO-2026-0055",
          "fileName": "PhieuNhapKho_INB-2026-00445.pdf",
          "status": "PENDING_APPROVAL",
          "createdDate": "2026-08-12T11:00:00"
        }
      ]
    }
    ```
*   **Ánh xạ Database:**
    *   **Bảng:** `document` WHERE `order_id = orderId`
    *   **Cột:** `id`, `document_type`, `code`, `file_name`, `status`, `created_date`.

##### API Detail.6: Tab Lịch sử — Audit log
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/history`
*   **Response Success (200 OK):**
    ```json
    {
      "code": "00",
      "status": 200,
      "data": [
        {
          "action": "ACCEPT",
          "description": "Thủ kho xác nhận tiếp nhận lệnh nhập",
          "performedBy": "pham.tran.hung",
          "performedAt": "2026-08-12T08:30:00",
          "oldStatus": "WAIT_CONFIRM",
          "newStatus": "IN_PROGRESS"
        }
      ]
    }
    ```
*   **Ánh xạ Database:**
    *   **Bảng:** `order_history` / `audit_log` WHERE `order_id = orderId` ORDER BY `created_date DESC`.

##### API Detail.7: Side Panel — Kết quả KCS
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/kcs-results`
*   **Response Success (200 OK):**
    ```json
    {
      "code": "00",
      "status": 200,
      "data": [
        {
          "sku": "RRU-5G-8T",
          "productName": "Khối thu phát vô tuyến RRU 5G 8T8R",
          "kcsResult": "DAT",
          "inspectedQuantity": 50,
          "passedQuantity": 49,
          "failedQuantity": 1,
          "inspectedDate": "2026-08-12T11:00:00",
          "sapSyncStatus": "SYNCED"
        }
      ]
    }
    ```
*   **Ánh xạ Database:**
    *   **Bảng:** `task` WHERE `id_order = orderId AND task_type = 'KCS'`
    *   Kết hợp dữ liệu từ `actual_received_sap_log`.

---

### NHÓM B: QUẢN LÝ TASK TÁC NGHIỆP (TASK MANAGEMENT)

#### API B.1: Tìm kiếm Task (Command Center)
*   **Mục đích:** Tra cứu, lọc, phân trang toàn bộ task nhập kho trên bảng Command Center.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/search`  *(Lưu ý: endpoint `search` đã bị loại khỏi boilerplate filter nhưng thực tế là API nghiệp vụ chính)*
*   **Ánh xạ DB:** Bảng `task` JOIN `"order"` — Filter theo `task.status`, `task.task_type`, `task.assignee_id`, `"order".warehouse_code`.

#### API B.2: Xuất Excel danh sách Task
*   **Mục đích:** Export danh sách task ra file Excel.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/export`
*   **Response:** Binary file stream (Excel).

#### API B.3: Nhận việc (Receive/Claim Task)
*   **Mục đích:** NV kho tự nhận task chưa có người phụ trách.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/receive`
*   **Ánh xạ DB:** Bảng `task` — UPDATE `assignee_id` = current user, `status` = 1 (IN_PROGRESS).

#### API B.4: Gia hạn KPI/SLA Task
*   **Mục đích:** Gửi yêu cầu gia hạn thời hạn hoàn thành KPI/SLA.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/extend-kpi`
*   **Request Body:**
    ```json
    {
      "data": {
        "reason": "Hàng đến muộn do mưa bão",
        "newDeadline": "2026-08-13T17:00:00"
      }
    }
    ```
*   **Ánh xạ DB:** Bảng `task` — UPDATE `sla_due_at`, `extend_reason`.

#### API B.5: Lấy Header thông tin Task
*   **Mục đích:** Lấy thông tin header task (mã task, tên, trạng thái, SLA, người phụ trách) hiển thị ở thanh trên cùng.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/{taskId}/header`
*   **Ánh xạ DB:** Bảng `task` — `task_code`, `task_name`, `status`, `sla_status`, `assignee_id`, `start_time`, `end_time`.

#### API B.6: Lấy thông tin ký số Task
*   **Mục đích:** Lấy trạng thái ký số liên quan đến task (BBBG hoặc V-Office).
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/{taskId}/sign-info`
*   **Ánh xạ DB:** Bảng `bbbg_signature` JOIN `document` — Trạng thái ký số hiện tại.

#### API B.7: Tổng hợp thực nhận (Web)
*   **Mục đích:** Lấy dữ liệu tổng hợp thực nhận đối soát PO vs thực tế (giao diện Web PC).
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/actual-summary/{orderId}`
*   **Ánh xạ DB:** Bảng `task` JOIN `order_product` — Aggregate đối soát số lượng.

#### API B.8: Tổng hợp thực nhận (Mobile)
*   **Mục đích:** Tương tự B.7 nhưng tối ưu cho màn hình di động.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/actual-summary-mobile/{orderId}`
*   **Ánh xạ DB:** Tương tự B.7.

#### API B.9: Danh sách chuyến vận chuyển (Trips)
*   **Mục đích:** Lấy danh sách chuyến xe giao hàng liên quan đến task.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/{taskId}/trips`
*   **Ánh xạ DB:** Bảng `info_shipping` WHERE `task_id = taskId`.

#### API B.10: Lấy ảnh/file đính kèm Task
*   **Mục đích:** Lấy danh sách attachment (ảnh minh chứng, chữ ký, chứng từ) đính kèm task.
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/attachments/{taskId}`
*   **Ánh xạ DB:** Bảng `attachment` WHERE `class_name = 'task' AND class_id = taskId`.

---

### NHÓM C: TIẾP NHẬN & DUYỆT LỆNH (GATE 1 — NCC CHECK)

#### API C.1: Xác nhận tiếp nhận lệnh nhập (Accept)
*   **Mục đích:** Thủ kho xác nhận tiếp nhận lệnh nhập kho, hẹn giờ nhận hàng.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/check-ncc/accept`
*   **Request Body:**
    ```json
    {
      "taskId": 557,
      "expectedReceiveDate": "2026-08-12",
      "expectedReceiveTime": "09:30:00",
      "note": "Tiếp nhận đúng lịch"
    }
    ```
*   **Ánh xạ DB:**
    *   `task.status` = 1, `task.expected_delivery_date`, `task.expected_delivery_time` ➔ Lưu lịch hẹn.
    *   `"order".status` = `'IN_PROGRESS'`.

#### API C.2: Từ chối tiếp nhận lệnh nhập (Reject)
*   **Mục đích:** Thủ kho từ chối tiếp nhận lệnh nhập kho.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/check-ncc/reject`
*   **Request Body:**
    ```json
    {
      "taskId": 557,
      "rejectReason": "Sai nhà cung cấp thực tế"
    }
    ```
*   **Ánh xạ DB:** `"order".status` = `'REJECTED'`, `"order".reject_reason` = lý do.

---

### NHÓM D: GIÁM SÁT CỔNG KHO (GATE SECURITY)

#### API D.1: Đăng ký xe vào cổng & Trigger dỡ hàng
*   **Mục đích:** Bảo vệ đăng ký thông tin xe, tài xế vào cổng kho. Trigger mở khóa Task 1 (Dỡ hàng).
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/gate`
*   **Content-Type:** `multipart/form-data`
*   **Request Params:** `request` (InfoShippingRequest: biển số, CCCD, tên tài xế), `serviceContext`.
*   **Ánh xạ DB:**
    *   Bảng `info_shipping` — INSERT: `license_plate`, `driver_name`, `driver_id_card`, `gate_code`, `check_in_time`.
    *   Bảng `task` — UPDATE: `status` = 1 (IN_PROGRESS), `start_time` = now.

#### API D.2: Hoàn thành giám sát an ninh
*   **Mục đích:** Đánh dấu hoàn tất quy trình giám sát an ninh cổng.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/complete-security-monitoring`
*   **Ánh xạ DB:** Bảng `task` — UPDATE `status` = 2 (COMPLETED).

#### API D.3: Báo cáo sự cố vận chuyển
*   **Mục đích:** Ghi nhận sự cố liên quan đến vận chuyển (hàng hỏng, mất mát).
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/shipping-issues`
*   **Ánh xạ DB:** Bảng `info_shipping_issue` — INSERT: `task_id`, `issue_description`, `issue_type`.

---

### NHÓM E: DỠ HÀNG KHỎI XE (UNLOADING — TASK 1)

#### API E.1: Lấy chi tiết Staging Dock dỡ hàng
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/{taskId}/staging-area-entry`
*   **Ánh xạ DB:** Bảng `task` — `zone_code` (mã khu vực dỡ hàng).

#### API E.2: Danh sách sản phẩm tại khu dỡ hàng
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/{taskId}/staging-area-entry/products`
*   **Ánh xạ DB:** Bảng `order_product` JOIN `product` WHERE `task.id_order = order_id`.

#### API E.3: Hoàn thành dỡ hàng
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/unloading/complete`
*   **Content-Type:** `multipart/form-data` (kèm ảnh minh chứng `files[]`)
*   **Ánh xạ DB:** `task.status` = 2, `task.end_time` = now. Bảng `attachment` — INSERT ảnh minh chứng.

#### API E.4: Báo cáo lỗi dỡ hàng
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/unloading/issue`
*   **Content-Type:** `multipart/form-data`
*   **Request Params:** `data` (RejectTaskRequest: lý do, loại lỗi), `files[]` (ảnh minh chứng).
*   **Ánh xạ DB:** Bảng `info_shipping_issue` — INSERT sự cố dỡ hàng.

---

### NHÓM F: KIỂM HÀNG & KÝ BBBG (HANDOVER — TASK 2)

#### API F.1: Kiểm tra Serial/IMEI sản phẩm
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/products/check-by-serial`
*   **Query Params:** `serial` (String)
*   **Ánh xạ DB:** Bảng `product` / `order_product` — Kiểm tra mã serial có tồn tại trong PO không.

#### API F.2: Tìm sản phẩm theo Serial
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/products/find-by-serial`
*   **Query Params:** `serial` (String)
*   **Ánh xạ DB:** Bảng `product` — Trả thông tin sản phẩm khớp serial.

#### API F.3: Kiểm tra trạng thái chữ ký BBBG
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/{taskId}/bbbg/signatures/status`
*   **Ánh xạ DB:** Bảng `bbbg` JOIN `bbbg_signature` — `signer_role`, `sign_status`.

#### API F.4: Upload chữ ký BBBG
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/bbbg/signatures`
*   **Content-Type:** `multipart/form-data`
*   **Request Params:** `file` (binary - ảnh chữ ký), `data` (UploadSignatureRequest).
*   **Ánh xạ DB:** `bbbg_signature.sign_status` = 'SIGNED', `signed_at` = now. Bảng `attachment` — INSERT file chữ ký.

#### API F.5: Hoàn thành phát hành BBBG
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/bbbg/complete`
*   **Ánh xạ DB:** `bbbg.status` = 'COMPLETED'.

#### API F.6: Từ chối ký BBBG
*   **Mục đích:** Từ chối ký biên bản bàn giao (hàng hỏng, không đúng số lượng).
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/bbbg/reject`
*   **Content-Type:** `multipart/form-data`
*   **Request Params:** `data` (RejectTaskRequest: lý do), `files[]` (ảnh minh chứng).
*   **Ánh xạ DB:** `bbbg.status` = 'REJECTED'. Bảng `attachment` — INSERT ảnh lỗi.

---

### NHÓM G: DI CHUYỂN HÀNG HÓA (STAGING & TRANSFER — TASK 3, 5)

#### API G.1: Hoàn thành đưa hàng vào khu chờ nhập (Task 3)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/staging-area-entry/complete`
*   **Ánh xạ DB:** `task.status` = 2. Bảng `handling_unit` — UPDATE `status` = 'CREATED'.

#### API G.2: Hoàn thành chờ nhập kho (Waiting Area)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/waiting-area/complete`
*   **Content-Type:** `multipart/form-data` (kèm ảnh `files[]`)
*   **Ánh xạ DB:** `task.status` = 2. Bảng `attachment` — INSERT ảnh minh chứng.

#### API G.3: Lấy thông tin khu chuyển đóng gói (Packing Transfer)
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/{taskId}/packing-area-transfer`
*   **Ánh xạ DB:** Bảng `task` — thông tin zone đóng gói được chỉ định.

#### API G.4: Danh sách sản phẩm chờ chuyển đóng gói
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/tasks/{taskId}/packing-area-transfer/products`
*   **Ánh xạ DB:** Bảng `order_product` — Sản phẩm chưa được gán HU.

#### API G.5: Hoàn thành chuyển sang khu đóng gói (Task 5)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/packing-area-transfer/complete`
*   **Ánh xạ DB:** `task.status` = 2, `task.end_time` = now.

#### API G.6: Hoàn thành chờ đóng gói (Waiting Packing)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/waiting-packing/complete`
*   **Content-Type:** `multipart/form-data` (kèm ảnh `files[]`)
*   **Ánh xạ DB:** `task.status` = 2.

---

### NHÓM H: THỰC NHẬP KHO & KCS (ACTUAL INBOUND — TASK 4)

#### API H.1: Đồng bộ kết quả KCS từ SAP
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/completed-kcs-results`
*   **Ánh xạ DB:** `task.result` = 'DAT'/'LOI'. Bảng `actual_received_sap_log` — INSERT log SAP.

#### API H.2: Hoàn thành thực nhập kho
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/complete-actual-received`
*   **Ánh xạ DB:**
    *   `task.status` = 2, `"order".status` = 'COMPLETED'.
    *   Bảng `zone_inventory_balance` — UPDATE `quantity` (cộng tồn kho).

---

### NHÓM I: ĐÓNG GÓI & IN TEM RFID (PACKING — TASK 6)

#### API I.1: Danh sách sản phẩm chờ đóng gói (Packing Select)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/inbound-orders/products/packing-select`
*   **Ánh xạ DB:** Bảng `order_product` — Sản phẩm chưa assign vào `handling_unit`.

#### API I.2: Thông tin đóng gói theo lệnh nhập
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/product-packing`
*   **Ánh xạ DB:** Bảng `handling_unit` JOIN `handling_unit_item` JOIN `product`.

#### API I.3: Gợi ý đóng gói tối ưu
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/handling-units/recommend-packing`
*   **Ánh xạ DB:** Tính toán dựa trên `product.weight`, `product.dimension` và quy cách HU.

#### API I.4: Gợi ý đóng gói tự động
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/handling-units/recommend-packing-automatic`
*   **Ánh xạ DB:** Tương tự I.3 nhưng tự động chọn phương án tối ưu nhất.

#### API I.5: Danh sách HU (Handling Units)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/handling-units/list-hu`
*   **Ánh xạ DB:** Bảng `handling_unit` — Filter theo `status`, `order_id`.

#### API I.6: Quét Serial khi tạo HU
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/handling-units/serial/scan`
*   **Ánh xạ DB:** Bảng `product` / `handling_unit_item` — Kiểm tra serial và gán vào HU.

#### API I.7: Gán Serial vào HU
*   **Method:** `PUT`
*   **Endpoint:** `/api/registration/handling-units/{huId}/serial-assignments`
*   **Ánh xạ DB:** Bảng `handling_unit_item` — INSERT liên kết serial number vào HU.

#### API I.8: Chi tiết Serial trong HU
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/handling-units/{huId}/serials`
*   **Ánh xạ DB:** Bảng `handling_unit_item` WHERE `handling_unit_id = huId`.

#### API I.9: Thông tin HU theo sản phẩm
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/product-hus`
*   **Ánh xạ DB:** Bảng `handling_unit` JOIN `handling_unit_item` WHERE `order_id`.

#### API I.10: Phát sinh mã RFID
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/inbound-orders/{orderId}/rfid/generate`
*   **Ánh xạ DB:** Bảng `handling_unit` — UPDATE `rfid_code` = Generated EPC code.

#### API I.11: Hoàn thành đóng gói & In tem RFID
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/complete-packing`
*   **Ánh xạ DB:**
    *   `handling_unit.status` = 'PACKED', `print_status` = 'PRINTED', `printed_at` = now.

---

### NHÓM J: CẤT HÀNG VÀO KỆ (PUTAWAY — TASK 7)

#### API J.1: Danh sách thiết bị/vị trí kệ (Equipment)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/get-all-equipment`
*   **Ánh xạ DB:** Bảng `warehouse_zone_equipment` — Danh sách thiết bị kệ trong kho.

#### API J.2: Danh sách HU chờ cất kệ (Storage)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/handling-units/list-hu-storage`
*   **Ánh xạ DB:** Bảng `handling_unit` WHERE `status = 'PACKED'` — HU đã đóng gói chờ putaway.

#### API J.3: Xác nhận HU vào vị trí Bin
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/confirm-hu-location`
*   **Ánh xạ DB:** So khớp `handling_unit.rfid_code` với `warehouse_zone_equipment.code` (Bin location).

#### API J.4: Hoàn thành Putaway cất kệ
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/tasks/{taskId}/completed-putaway`
*   **Ánh xạ DB:**
    *   `handling_unit.status` = 'PUTAWAY_DONE', `warehouse_zone_equipment_id` = Bin ID.
    *   `task.status` = 2.

---

### NHÓM K: TRÌNH KÝ V-OFFICE (VOFFICE SIGN-FLOW)

#### API K.1: Lấy thông tin luồng ký V-Office
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/voffice/{taskId}/sign-info`
*   **Ánh xạ DB:** Bảng `document` JOIN `task` — Trạng thái tài liệu và danh sách người ký.

#### API K.2: Lấy danh sách người ký theo luồng
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/voffice/sign-flows/{flowId}/signers`
*   **Ánh xạ DB:** Bảng cấu hình luồng ký V-Office — Danh sách bước duyệt và người ký.

#### API K.3: Gửi hồ sơ trình ký V-Office
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/voffice/{taskId}/submit`
*   **Content-Type:** `multipart/form-data`
*   **Request Params:** `data` (JSON: tên tờ trình, luồng ký, trích yếu), `files[]` (file đính kèm).
*   **Ánh xạ DB:**
    *   Bảng `document` — INSERT: `document_type` = 'VOFFICE', `status` = 'PENDING_APPROVAL'.
    *   `"order".voffice_sign_flag` = true.

#### API K.4: Callback hoàn thành ký V-Office
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/voffice/{taskId}/complete`
*   **Ánh xạ DB:** `document.status` = 'APPROVED', `document.updated_date` = now.

#### API K.5: Từ chối ký V-Office
*   **Mục đích:** Callback khi người duyệt từ chối ký trên V-Office.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/voffice/reject-sign/{transCode}`
*   **Ánh xạ DB:** `document.status` = 'REJECTED'.

#### API K.6: Kích hoạt lại task sau V-Office
*   **Mục đích:** Kích hoạt lại task sau khi V-Office hoàn thành xử lý.
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/voffice/active-task/{transCode}`
*   **Ánh xạ DB:** Bảng `task` — UPDATE trạng thái task liên quan.

---

### NHÓM L: DANH MỤC & CẤU HÌNH (MASTER DATA)

#### API L.1: Danh sách Plant
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/plants`
*   **Ánh xạ DB:** Bảng `plant` (hoặc cấu hình đồng bộ SAP).

#### API L.2: Danh sách SLoc theo Plant
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/slocs/{plantCode}`
*   **Ánh xạ DB:** Bảng `sloc` WHERE `plant_code = plantCode`.

#### API L.3: Danh sách loại lệnh nhập (Task Templates)
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/task-templates`
*   **Ánh xạ DB:** Bảng `task_template` — Cấu hình các loại task.

#### API L.4: Danh sách loại đơn nhập (Inbound Order Types)
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/task-templates/types`
*   **Ánh xạ DB:** Bảng `task_template` DISTINCT `order_type`.

#### API L.5: Danh sách thiết bị kệ (Equipment)
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/equipment/list-equipment`
*   **Ánh xạ DB:** Bảng `warehouse_zone_equipment`.

#### API L.6: Tìm kiếm kích thước thiết bị
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/equipment/dimensions`
*   **Ánh xạ DB:** Bảng `warehouse_zone_equipment` — Filter theo chiều cao/rộng/sâu.

#### API L.7: Danh sách quy tắc kho (Warehouse Rules)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/rule/get-all-rule`
*   **Ánh xạ DB:** Bảng `warehouse_rule_config`.

#### API L.8: Lấy quy tắc theo Task
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/rule/get-by-task`
*   **Ánh xạ DB:** Bảng `warehouse_rule_config` WHERE `task_type = ...`.

---

### NHÓM M: QUẢN LÝ KHO & BỐ TRÍ (WAREHOUSE MANAGEMENT)

#### API M.1: Tìm kiếm kho
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/`
*   **Ánh xạ DB:** Bảng `warehouse`.

#### API M.2: Danh sách kho (Dropdown)
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/warehouse/list-warehouses`
*   **Ánh xạ DB:** Bảng `warehouse` — Danh sách rút gọn cho dropdown.

#### API M.3: Danh sách phòng ban
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/warehouse/departments`
*   **Ánh xạ DB:** Bảng cấu hình phòng ban / đơn vị.

#### API M.4: Danh sách SLoc của kho
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/list-sloc`
*   **Ánh xạ DB:** Bảng `sloc` WHERE `warehouse_id = ...`.

#### API M.5: Danh sách loại kho
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/types`
*   **Ánh xạ DB:** Bảng `warehouse` DISTINCT `type`.

#### API M.6: Tạo kho mới
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/create-warehouse`
*   **Ánh xạ DB:** Bảng `warehouse` — INSERT.

#### API M.7: Lưu thông tin chung kho
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/save-general`
*   **Ánh xạ DB:** Bảng `warehouse` — UPDATE thông tin chung (tên, mã, địa chỉ, loại).

#### API M.8: Lưu bố trí mặt bằng kho
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/save-layout`
*   **Ánh xạ DB:** Bảng `warehouse_layout` — INSERT/UPDATE sơ đồ 2D.

#### API M.9: Validate bố trí mặt bằng
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/validate-layout`
*   **Ánh xạ DB:** Kiểm tra va chạm zone, kích thước hợp lệ.

#### API M.10: Chi tiết thông tin chung kho
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/detail-general`
*   **Ánh xạ DB:** Bảng `warehouse`.

#### API M.11: Chi tiết bố trí mặt bằng
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/detail-layout`
*   **Ánh xạ DB:** Bảng `warehouse_layout`.

#### API M.12: Bố trí hoàn chỉnh (Completed Layout)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/completed-layout`
*   **Ánh xạ DB:** Bảng `warehouse_layout` JOIN `zone` — Bản đồ 2D hoàn chỉnh.

#### API M.13: Danh sách khu vực trong kho (Warehouse Areas/Zones)
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/areas`
*   **Ánh xạ DB:** Bảng `zone` WHERE `warehouse_id = ...`.

#### API M.14: Chi tiết zone trong kho
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/warehouse/zones`
*   **Ánh xạ DB:** Bảng `zone` — Thông tin chi tiết zone.

#### API M.15: Danh sách mã vị trí (Location Codes)
*   **Method:** `GET`
*   **Endpoint:** `/api/registration/warehouse/location-codes`
*   **Ánh xạ DB:** Bảng `location` — Mã ô kệ Bin.

#### API M.16: Chi tiết zone layout
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/zone/detail-zone`
*   **Ánh xạ DB:** Bảng `zone` — Bố trí chi tiết zone.

#### API M.17: Danh sách tất cả zone
*   **Method:** `POST`
*   **Endpoint:** `/api/registration/zone/get-all-zone`
*   **Ánh xạ DB:** Bảng `zone`.

---

## 4. Tóm tắt bản đồ tất cả Endpoints theo Nhóm

| Nhóm | Method | Endpoint | Mô tả |
| :---: | :---: | :--- | :--- |
| **A** | GET | `/api/registration/inbound-orders/cumulative-stats` | Thống kê lũy kế lệnh nhập |
| **A** | POST | `/api/registration/tasks/dash-board` | Dashboard đếm task theo trạng thái |
| **A** | POST | `/api/registration/inbound-orders/dashboard` | Dashboard lệnh nhập |
| **A** | POST | `/api/registration/registry-order/search` | Tìm kiếm lệnh nhập |
| **A** | GET | `/api/registration/registry-order/{id}` | Chi tiết lệnh (registry) |
| **A** | GET | `/api/registration/inbound-orders/detail/{orderId}` | Chi tiết lệnh (inbound) |
| **A** | GET | `/api/registration/inbound-orders/{orderId}/tasks` | Task chain theo lệnh |
| **A** | GET | `/api/registration/inbound-orders/{orderId}/history` | Lịch sử lệnh nhập |
| **A** | GET | `/api/registration/inbound-orders/{orderId}/products/summary` | Tổng hợp sản phẩm |
| **A** | GET | `/api/registration/inbound-orders/{orderId}/shipping` | Thông tin vận chuyển |
| **A** | GET | `/api/registration/inbound-orders/{orderId}/documents` | Chứng từ đính kèm |
| **A** | GET | `/api/registration/inbound-orders/{orderId}/documents/download` | Tải chứng từ |
| **A** | GET | `/api/registration/inbound-orders/{orderId}/kcs-results` | Kết quả KCS |
| **A** | GET | `/api/registration/inbound-orders/{orderId}/sap-logs` | Log đồng bộ SAP |
| **A** | POST | `/api/registration/inbound-orders/export` | Xuất Excel |
| **A** | POST | `/api/registration/registry-order/import-excel` | Import Excel |
| **A** | POST | `/api/registration/registry-order/download-file-template` | Download mẫu Excel |
| **B** | POST | `/api/registration/tasks/search` | Tìm kiếm task |
| **B** | POST | `/api/registration/tasks/export` | Xuất Excel task |
| **B** | POST | `/api/registration/tasks/{taskId}/receive` | Nhận việc |
| **B** | POST | `/api/registration/tasks/{taskId}/extend-kpi` | Gia hạn KPI |
| **B** | GET | `/api/registration/tasks/{taskId}/header` | Header task |
| **B** | GET | `/api/registration/tasks/{taskId}/sign-info` | Thông tin ký số |
| **B** | GET | `/api/registration/tasks/actual-summary/{orderId}` | Tổng hợp thực nhận (Web) |
| **B** | GET | `/api/registration/tasks/actual-summary-mobile/{orderId}` | Tổng hợp thực nhận (Mobile) |
| **B** | GET | `/api/registration/tasks/{taskId}/trips` | Chuyến vận chuyển |
| **B** | GET | `/api/registration/attachments/{taskId}` | Ảnh/file đính kèm |
| **C** | POST | `/api/registration/tasks/check-ncc/accept` | Tiếp nhận lệnh |
| **C** | POST | `/api/registration/tasks/check-ncc/reject` | Từ chối lệnh |
| **D** | POST | `/api/registration/tasks/{taskId}/gate` | Đăng ký xe vào cổng |
| **D** | POST | `/api/registration/tasks/{taskId}/complete-security-monitoring` | Hoàn thành giám sát |
| **D** | POST | `/api/registration/tasks/shipping-issues` | Báo cáo sự cố |
| **E** | GET | `/api/registration/tasks/{taskId}/staging-area-entry` | Thông tin Staging |
| **E** | GET | `/api/registration/tasks/{taskId}/staging-area-entry/products` | Sản phẩm Staging |
| **E** | POST | `/api/registration/tasks/{taskId}/unloading/complete` | Hoàn thành dỡ hàng |
| **E** | POST | `/api/registration/tasks/{taskId}/unloading/issue` | Báo lỗi dỡ hàng |
| **F** | GET | `/api/registration/inbound-orders/products/check-by-serial` | Kiểm tra Serial |
| **F** | GET | `/api/registration/inbound-orders/products/find-by-serial` | Tìm sản phẩm theo Serial |
| **F** | GET | `/api/registration/tasks/{taskId}/bbbg/signatures/status` | Trạng thái ký BBBG |
| **F** | POST | `/api/registration/tasks/{taskId}/bbbg/signatures` | Upload chữ ký |
| **F** | POST | `/api/registration/tasks/{taskId}/bbbg/complete` | Hoàn thành BBBG |
| **F** | POST | `/api/registration/tasks/{taskId}/bbbg/reject` | Từ chối BBBG |
| **G** | POST | `/api/registration/tasks/{taskId}/staging-area-entry/complete` | Hoàn thành khu chờ |
| **G** | POST | `/api/registration/tasks/{taskId}/waiting-area/complete` | Hoàn thành waiting area |
| **G** | GET | `/api/registration/tasks/{taskId}/packing-area-transfer` | Thông tin chuyển đóng gói |
| **G** | GET | `/api/registration/tasks/{taskId}/packing-area-transfer/products` | Sản phẩm chờ chuyển |
| **G** | POST | `/api/registration/tasks/{taskId}/packing-area-transfer/complete` | Hoàn thành chuyển |
| **G** | POST | `/api/registration/tasks/{taskId}/waiting-packing/complete` | Hoàn thành chờ đóng gói |
| **H** | POST | `/api/registration/tasks/{taskId}/completed-kcs-results` | Kết quả KCS |
| **H** | POST | `/api/registration/tasks/{taskId}/complete-actual-received` | Thực nhập kho |
| **I** | POST | `/api/registration/inbound-orders/products/packing-select` | Sản phẩm chờ đóng gói |
| **I** | GET | `/api/registration/inbound-orders/{orderId}/product-packing` | Thông tin đóng gói |
| **I** | POST | `/api/registration/handling-units/recommend-packing` | Gợi ý đóng gói |
| **I** | POST | `/api/registration/handling-units/recommend-packing-automatic` | Đóng gói tự động |
| **I** | POST | `/api/registration/handling-units/list-hu` | Danh sách HU |
| **I** | POST | `/api/registration/handling-units/serial/scan` | Quét Serial |
| **I** | PUT | `/api/registration/handling-units/{huId}/serial-assignments` | Gán Serial vào HU |
| **I** | GET | `/api/registration/handling-units/{huId}/serials` | Chi tiết Serial HU |
| **I** | GET | `/api/registration/inbound-orders/{orderId}/product-hus` | HU theo sản phẩm |
| **I** | POST | `/api/registration/inbound-orders/{orderId}/rfid/generate` | Phát sinh mã RFID |
| **I** | POST | `/api/registration/tasks/{taskId}/complete-packing` | Hoàn thành đóng gói |
| **J** | POST | `/api/registration/tasks/get-all-equipment` | Danh sách thiết bị kệ |
| **J** | POST | `/api/registration/handling-units/list-hu-storage` | HU chờ cất kệ |
| **J** | POST | `/api/registration/tasks/confirm-hu-location` | Xác nhận HU vào Bin |
| **J** | POST | `/api/registration/tasks/{taskId}/completed-putaway` | Hoàn thành Putaway |
| **K** | GET | `/api/registration/voffice/{taskId}/sign-info` | Thông tin ký V-Office |
| **K** | GET | `/api/registration/voffice/sign-flows/{flowId}/signers` | Người ký theo luồng |
| **K** | POST | `/api/registration/voffice/{taskId}/submit` | Gửi trình ký |
| **K** | POST | `/api/registration/voffice/{taskId}/complete` | Callback hoàn thành |
| **K** | POST | `/api/registration/voffice/reject-sign/{transCode}` | Từ chối ký |
| **K** | POST | `/api/registration/voffice/active-task/{transCode}` | Kích hoạt lại task |
| **L** | GET | `/api/registration/plants` | Danh sách Plant |
| **L** | GET | `/api/registration/slocs/{plantCode}` | SLoc theo Plant |
| **L** | GET | `/api/registration/task-templates` | Danh sách mẫu task |
| **L** | GET | `/api/registration/task-templates/types` | Loại đơn nhập |
| **L** | GET | `/api/registration/equipment/list-equipment` | Danh sách thiết bị |
| **L** | POST | `/api/registration/equipment/dimensions` | Tìm kiếm kích thước |
| **L** | POST | `/api/registration/rule/get-all-rule` | Quy tắc kho |
| **L** | POST | `/api/registration/rule/get-by-task` | Quy tắc theo task |
| **M** | POST | `/api/registration/warehouse/` | Tìm kiếm kho |
| **M** | GET | `/api/registration/warehouse/list-warehouses` | Dropdown kho |
| **M** | GET | `/api/registration/warehouse/departments` | Phòng ban |
| **M** | POST | `/api/registration/warehouse/list-sloc` | SLoc trong kho |
| **M** | POST | `/api/registration/warehouse/types` | Loại kho |
| **M** | POST | `/api/registration/warehouse/save-general` | Lưu thông tin chung |
| **M** | POST | `/api/registration/warehouse/save-layout` | Lưu bố trí |
| **M** | POST | `/api/registration/warehouse/validate-layout` | Validate bố trí |
| **M** | POST | `/api/registration/warehouse/detail-general` | Chi tiết thông tin chung |
| **M** | POST | `/api/registration/warehouse/detail-layout` | Chi tiết bố trí |
| **M** | POST | `/api/registration/warehouse/completed-layout` | Bố trí hoàn chỉnh |
| **M** | POST | `/api/registration/warehouse/areas` | Khu vực trong kho |
| **M** | POST | `/api/registration/warehouse/zones` | Zone trong kho |
| **M** | GET | `/api/registration/warehouse/location-codes` | Mã vị trí |
| **M** | POST | `/api/registration/zone/detail-zone` | Chi tiết zone |
| **M** | POST | `/api/registration/zone/get-all-zone` | Tất cả zone |

---

*Hết tài liệu đặc tả API Contract — Phân hệ Nhập kho v2.0*

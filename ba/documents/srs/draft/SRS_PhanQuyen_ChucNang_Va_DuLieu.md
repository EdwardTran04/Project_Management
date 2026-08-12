# ĐẶC TẢ PHÂN QUYỀN CHỨC NĂNG VÀ DỮ LIỆU (AI-WS)
## Functional and Data Authorization Specification Context

> **Ngày cập nhật:** 12/08/2026 | **Version:** 1.0.0 (Draft)
> **Tác giả:** Business Analyst Team (AI-WS Platform)
> **Mục đích tài liệu:** Tài liệu này đặc tả chi tiết cơ cấu phân quyền chức năng và phân quyền dữ liệu cho hệ thống Quản lý Kho Thông Minh (AI-WS). Tài liệu làm cơ sở cho đội ngũ Phát triển (Dev) thiết kế CSDL/API Gateway và đội ngũ Kiểm thử (Tester) thiết kế kịch bản kiểm thử.

---

## 1. NGUYÊN TẮC PHÂN QUYỀN CỐT LÕI

Hệ thống AI-WS áp dụng hai lớp bảo mật phân quyền đồng thời:

1.  **Phân quyền theo Chức năng (Role-Based Access Control - RBAC):** 
    *   Xác định người dùng thuộc vai trò (Role) nào thì được truy cập vào màn hình, menu, chức năng và gọi các API tương ứng nào.
    *   Một người dùng có thể được gán một hoặc nhiều vai trò cùng lúc (kiêm nhiệm).
2.  **Phân quyền theo Dữ liệu (Data Access Control - DAC / Row-Level Security):**
    *   Xác định phạm vi dữ liệu mà người dùng được phép nhìn thấy và thao tác dựa trên địa giới hành chính hoặc sơ đồ quản lý tổ chức.
    *   Hệ thống kiểm soát dữ liệu theo cấu trúc hình cây 3 cấp: **Đơn vị quản lý (Unit) ➔ Chi nhánh/Nhà máy (Plant) ➔ Kho logic (SLoc)**.

---

## 2. ĐẶC TẢ PHÂN QUYỀN THEO DỮ LIỆU (DATA AUTHORIZATION SPEC)

### 2.1. Cấu trúc Quản lý Dữ liệu Địa giới (Organizational Hierarchy)

Dữ liệu tồn kho, chứng từ, lệnh và công việc trong hệ thống được quản lý chặt chẽ theo cấu trúc:
*   **Đơn vị quản lý (Unit):** Cấp tổng quản lý hành chính (Ví dụ: Chi nhánh Viettel Tỉnh/Thành phố như Chi nhánh Hà Nội, Chi nhánh Đà Nẵng).
*   **Plant:** Cấp chi nhánh/nhà máy trên SAP S/4HANA (Ví dụ: `VN01` trực thuộc Chi nhánh Hà Nội).
*   **Storage Location (SLoc):** Cấp kho logic trực thuộc một Plant trên SAP (Ví dụ: Kho `HN01`, Kho `HN02` thuộc Plant `VN01`).
*   **Vị trí ô kệ (Bin Code):** Vị trí vật lý lưu kho thực tế trực thuộc một SLoc.

### 2.2. Ma trận Phân quyền Dữ liệu theo Vai trò (Data Scoping Matrix)

| Vai trò | Mã Role | Phạm vi Dữ liệu được gán | Phạm vi Hiển thị & Thao tác |
| :--- | :--- | :--- | :--- |
| **Quản trị hệ thống** | `ROLE_ADMIN` | Toàn hệ thống (Global) | Có toàn quyền xem và cấu hình dữ liệu của tất cả các Đơn vị, Plant, SLoc trên toàn hệ thống. |
| **Giám đốc kho** | `ROLE_WAREHOUSE_DIRECTOR` | Danh sách mã kho (Plant + SLoc) hoặc Đơn vị được ủy quyền | Chỉ xem báo cáo KPI, giám sát SLA và duyệt trình ký V-Office đối với những kho hoặc đơn vị nằm trong danh sách được phân quyền trực tiếp. |
| **Quản lý Đơn vị** | `ROLE_UNIT_MANAGER` | Đơn vị quản lý (Unit ID) được gán | Xem Dashboard, theo dõi KPI/SLA và báo cáo vận hành của toàn bộ các kho (Plant + SLoc) trực thuộc Đơn vị quản lý đó. Không xem được dữ liệu của đơn vị khác. |
| **Thủ kho** | `ROLE_WAREHOUSE_MASTER` | Mã kho logic (Plant + SLoc) được gán trực tiếp | Chỉ hiển thị thông tin quản lý (Lệnh nhập/xuất, Sơ đồ kho, Cấu hình RFID kệ, Task nghiệp vụ, Phân ca trực nhân sự, Trình ký V-Office) của đúng kho (Plant + SLoc) mình phụ trách. |
| **Nhân viên kho** | `ROLE_WAREHOUSE_WORKER` | Mã kho logic (Plant + SLoc) đang làm việc | Chỉ hiển thị các Task vận hành (Dỡ hàng, kiểm đếm, đóng gói, di chuyển, putaway) và danh sách vật tư thực tế tại kho mình đang trực ca. |
| **Bảo vệ cổng kho** | `ROLE_SECURITY` | Cổng kho (Gate/Dock) được phân công | Chỉ hiển thị danh sách lịch hẹn xe và thông tin tài xế ra vào đúng cổng kho được gán trực ca. |
| **Đối tác (NCC/Tài xế)** | `ROLE_PARTNER` | Mã đối tác (Vendor ID) hoặc Mã lệnh giao hàng | Chỉ hiển thị thông tin lệnh giao nhận hàng, tiến độ dỡ hàng và màn hình ký BBBG điện tử thuộc đúng lệnh giao hàng của đối tác đó. |

---

## 3. ĐẶC TẢ PHÂN QUYỀN THEO CHỨC NĂNG (FUNCTIONAL AUTHORIZATION SPEC)

Ma trận phân quyền chức năng quy định quyền hạn truy cập của các vai trò vào các module/chức năng chính của hệ thống AI-WS:

### 3.1. Ma trận Vai trò - Chức năng (Role-Function Matrix)

> Quy ước ký hiệu:
> *   `R` (Read): Quyền xem/tra cứu thông tin.
> *   `W` (Write): Quyền tạo mới, sửa đổi, cập nhật thông tin.
> *   `A` (Approve): Quyền phê duyệt lệnh, xác nhận công việc hoặc trình ký.
> *   `—` (None): Không có quyền truy cập.

| Phân hệ / Module | ADMIN | DIRECTOR | UNIT_MANAGER | MASTER | WORKER | SECURITY | PARTNER |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Dashboard SLA & Báo cáo** | R/W | R | R | R | — | — | — |
| **Check & Xác nhận lệnh (SAP)** | — | — | — | R/W/A | — | — | — |
| **Đặt lịch xe & Slotting Dock** | R/W | — | — | R/W/A | R | R | R/W |
| **Kiểm soát an ninh cổng (`T-Scr`)** | — | — | — | R | — | R/W/A | — |
| **Task Dỡ hàng (`T-Unl`)** | — | — | — | R | R/W/A | — | R |
| **Task Kiểm hàng & Ký BBBG** | — | — | — | R | R/W/A | — | R/A |
| **Task Đóng gói & In tem nhãn** | — | — | — | R | R/W/A | — | — |
| **Task Putaway (Cất kệ bãi)** | — | — | — | R | R/W/A | — | — |
| **Trình ký & Phê duyệt V-Office** | — | A | — | R/W/A | — | — | — |
| **Quản lý Nhân sự & Phân ca** | R | — | — | R/W/A | — | — | — |
| **Đăng ký Lịch nghỉ / Làm thêm** | — | R/A | R/A | R/A | R/W | R/W | — |
| **Cấu hình (RFID, KPI, Quy trình)** | R/W | — | — | R/W/A | — | — | — |

---

## 4. GIẢI PHÁP KỸ THUẬT THỰC THI PHÂN QUYỀN (TECHNICAL ENFORCEMENT)

Để đảm bảo an toàn thông tin và tính toàn vẹn dữ liệu, hệ thống triển khai cơ chế kiểm soát phân quyền tại cả 3 lớp kiến trúc:

### 4.1. Lớp Xác thực Token (SSO / JWT Context)
*   Hệ thống tích hợp **Viettel SSO** để xác thực danh tính tập trung.
*   Sau khi đăng nhập thành công, Access Token (JWT) được trả về client chứa các trường thông tin ngữ cảnh (User Context) bao gồm:
    *   `userId`: Định danh người dùng.
    *   `roles`: Danh sách mã vai trò được gán (Ví dụ: `ROLE_WAREHOUSE_MASTER`).
    *   `unitId`: Mã Đơn vị quản lý của người dùng.
    *   `authorizedStorageLocations`: Mảng danh sách các cặp Plant & SLoc được phép thao tác dữ liệu (Ví dụ: `[{"plantId": "VN01", "slocId": "HN01"}]`).

### 4.2. Lớp Kiểm soát Gateway & Backend (API-level & Query Filtering)
*   **Kiểm soát Chức năng (API Gateway Middleware):** 
    *   Mỗi API endpoint trên Backend được cấu hình kiểm tra phân quyền (Ví dụ: sử dụng annotation Spring Security `@PreAuthorize("hasRole('ROLE_WAREHOUSE_MASTER')")`). Gateway sẽ chặn ngay lập tức nếu Access Token không chứa role hợp lệ.
*   **Kiểm soát Dữ liệu (Database Row-Level Security):**
    *   Khi nhận yêu cầu truy vấn dữ liệu từ Client, Backend tự động bóc tách thông tin `authorizedStorageLocations` hoặc `unitId` từ JWT Token và chèn (inject) trực tiếp vào câu lệnh SQL:
        ```sql
        -- Ví dụ câu lệnh lấy danh sách Lệnh nhập cho Thủ kho
        SELECT * FROM inbound_orders 
        WHERE plant_id = :context.plantId 
          AND sloc_id = :context.slocId;
        
        -- Ví dụ câu lệnh lấy danh sách cho Quản lý Đơn vị
        SELECT * FROM inbound_orders 
        WHERE unit_id = :context.unitId;
        ```
    *   Điều này đảm bảo dù client có can thiệp/sửa đổi request payload để cố gắng lấy dữ liệu của kho khác, Backend vẫn lọc dữ liệu theo context xác thực an toàn của token.

### 4.3. Lớp Giao diện Người dùng (Dynamic UI Rendering)
*   **Web & Mobile App** giải mã token JWT để xác định vai trò người dùng nhằm thực hiện:
    *   Ẩn/Hiện các menu điều hướng, thanh công cụ, các button nghiệp vụ (Ví dụ: Nhân viên kho không nhìn thấy nút "Xác nhận lệnh" hoặc "Trình ký V-Office").
    *   Bảo vệ route (Route Guard): Tự động redirect về trang báo lỗi hoặc trang chủ nếu người dùng cố tình truy cập thủ công bằng URL không được phân quyền.

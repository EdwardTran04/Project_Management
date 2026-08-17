 # Kế Hoạch Chi Tiết Sprint 2 — Chuẩn Hóa Danh Mục & Cấu Hình Nghiệp Vụ (WMS Setup)

**Khoảng thời gian:** 16/08/2026 → 30/08/2026 (2 tuần)
**Mục tiêu sprint:** Chuẩn hóa toàn bộ hệ thống danh mục nền của WMS (Nhân sự, Công cụ lưu trữ, Sản phẩm, KPI, Chân ký), tích hợp tính năng RFID ô kệ bãi, cấu hình động luồng nhập kho, lập job tự động phân công việc và giải quyết bài toán phân quyền bảo mật cho người dùng non-SAP.

---

## 1. Bảng tổng hợp danh sách User Story (User Story Overview)

Bảng tổng hợp theo cấu trúc quản lý: **Component → Epic → Story → Sub Task**

| Component | Epic | Story ID | Story Name | Story Description | SP | Priority | Sub Tasks Count | Tasks Breakdown (BA/FE/BE) |
|:---|:---|:---:|:---|:---|:---:|:---:|:---:|:---|
| **Danh mục** | Quản lý Nhân sự | US-001 | Xem danh sách nhân sự | Xem danh sách nhân sự, tìm kiếm theo tên/mã NV, lọc theo Plant/phòng ban/chức vụ/trạng thái | 3 | High | 3 | BA:12h / FE:24h / BE:24h |
| **Danh mục** | Quản lý Nhân sự | US-002 | Xem chi tiết nhân sự | Xem chi tiết hồ sơ nhân sự bao gồm lịch sử công tác và quyền hạn | 2 | Medium | 3 | BA:8h / FE:12h / BE:16h |
| **Danh mục** | Quản lý Nhân sự | US-003 | Sửa thông tin nhân sự | Chỉnh sửa ca làm việc, Plant/Sloc phụ trách và vai trò kiêm nhiệm | 3 | High | 3 | BA:12h / FE:24h / BE:24h |
| **Danh mục** | Quản lý Nhân sự | US-057 | Đăng ký lịch nghỉ làm | Gửi yêu cầu nghỉ phép, nghỉ ốm, nghỉ việc riêng và phê duyệt ca trực | 3 | High | 3 | BA:12h / FE:24h / BE:24h |
| **Danh mục** | Quản lý Nhân sự | US-058 | Đăng ký làm thêm giờ | Gửi yêu cầu đăng ký OT, ghi nhận ngày công tăng ca | 3 | High | 3 | BA:12h / FE:24h / BE:24h |
| **Danh mục** | Quản lý CCLT | US-004 | Xem danh sách công cụ lưu trữ | Xem danh sách Pallet, Thùng gỗ, Thùng carton, lọc theo trạng thái/loại | 3 | High | 3 | BA:12h / FE:24h / BE:24h |
| **Danh mục** | Quản lý CCLT | US-005 | Thêm mới công cụ lưu trữ | Thêm mới loại công cụ lưu trữ với thông số tên, loại, mô tả, số lượng ban đầu | 3 | High | 3 | BA:12h / FE:24h / BE:24h |
| **Danh mục** | Quản lý CCLT | US-006 | Xem chi tiết công cụ lưu trữ | Xem chi tiết thông số kỹ thuật, mã RFID và lịch sử xuất/nhập | 2 | Medium | 3 | BA:8h / FE:12h / BE:16h |
| **Danh mục** | Quản lý CCLT | US-007 | Sửa công cụ lưu trữ | Chỉnh sửa tên, loại, mô tả và đơn vị tính của công cụ lưu trữ | 2 | Medium | 3 | BA:8h / FE:16h / BE:16h |
| **Danh mục** | Quản lý CCLT | US-008 | Nhập thêm số lượng tồn kho công cụ | Nhập bổ sung số lượng và ghi rõ lý do nhập (mua mới, hoàn trả...) | 3 | High | 3 | BA:12h / FE:24h / BE:24h |
| **Danh mục** | Quản lý Sản phẩm | US-009 | Đồng bộ sản phẩm từ SAP | Tự động hoặc chủ động đồng bộ danh mục sản phẩm từ SAP về AIWS | 3 | High | 2 | BA:18h / BE:36h |
| **Danh mục** | Quản lý Sản phẩm | US-010 | Xem danh sách sản phẩm | Xem danh sách sản phẩm, tìm kiếm theo tên/mã SP, lọc theo danh mục | 2 | Medium | 3 | BA:8h / FE:16h / BE:16h |
| **Danh mục** | Quản lý Sản phẩm | US-011 | Xem chi tiết sản phẩm | Xem chi tiết thông tin sản phẩm bao gồm kích thước đóng gói, quy cách, tồn kho | 2 | Low | 3 | BA:8h / FE:12h / BE:16h |
| **Cấu hình** | Quản lý KPI | US-018 | Xem danh sách KPI chuẩn | Xem danh sách KPI/SLA áp dụng cho từng nhiệm vụ/phòng ban | 2 | Medium | 3 | BA:8h / FE:16h / BE:16h |
| **Cấu hình** | Quản lý KPI | US-019 | Cấu hình KPI & SLA chi tiết | Thiết lập trọng số, công thức tính và điều chỉnh thời gian Leadtime chuẩn | 3 | High | 3 | BA:12h / FE:18h / BE:24h |
| **Cấu hình** | Quản lý Chân ký | US-020 | Xem danh sách mẫu chân ký | Xem danh sách các mẫu chân ký và luồng ký số duyệt chứng từ | 2 | High | 3 | BA:8h / FE:16h / BE:16h |
| **Cấu hình** | Quản lý Chân ký | US-021 | Thêm mới mẫu chân ký | Tải lên chữ ký số/ảnh chữ ký và gán cho người dùng hoặc chức vụ | 3 | High | 3 | BA:12h / FE:24h / BE:24h |
| **Cấu hình** | Quản lý Chân ký | US-022 | Chỉnh sửa mẫu chân ký | Chỉnh sửa thông tin người ký hoặc cập nhật lại ảnh chữ ký | 2 | Medium | 3 | BA:8h / FE:16h / BE:16h |
| **Cấu hình** | Quản lý Chân ký | US-023 | Xem chi tiết mẫu chân ký | Xem chi tiết thông tin mẫu chân ký, danh sách người sở hữu và lịch sử sử dụng | 2 | Low | 3 | BA:8h / FE:12h / BE:16h |
| **Cấu hình** | Quản lý RFID | US-051 | Mã RFID cho từng kệ | Quét và gán mã RFID cho từng kệ/vị trí lưu trữ bãi bến | 5 | High | 3 | BA:16h / Mobile:32h / BE:24h |
| **Cấu hình** | Giám sát an ninh | US-052 | Giám sát an ninh | Theo dõi camera AI giám sát cổng kho và phát cảnh báo xe không đúng lịch | 3 | Medium | 3 | BA:8h / FE:16h / BE:16h |
| **Cấu hình** | Phân quyền vai trò | US-053 | Phân quyền theo role | Thiết lập vai trò, chức năng phân quyền tác nghiệp trên hệ thống non-SAP | 5 | High | 3 | BA:16h / FE:24h / BE:32h |
| **Cấu hình** | Quản lý Hàng hóa | US-054 | Cập nhật thông tin sản phẩm | Cập nhật cấu hình đóng gói và chỉ định khu vực lưu kho mặc định | 3 | High | 3 | BA:8h / FE:16h / BE:16h |
| **Cấu hình** | Quản lý Quy trình | US-055 | Cấu hình quy trình luồng nhập kho | Cấu hình luồng nhập kho động dựa trên movementtype, đơn vị quản lý, điều kiện KCS | 5 | High | 3 | BA:20h / FE:24h / BE:40h |
| **Cấu hình** | Quản lý Quy trình | US-056 | Tự động phân công Task kế tiếp | Tự động kích hoạt task sau và job tự động phân việc sau 5 phút | 5 | High | 3 | BA:20h / FE:24h / BE:40h |
| **Cấu hình** | Quản lý Thông báo | US-066 | Push Notification di động | Tích hợp dịch vụ Push Notification (FCM/APNs) nhận thông báo thời gian thực khi phân công task/cảnh báo | 5 | High | 3 | BA:12h / Mobile:24h / BE:24h |
| **Nhập kho** | Luồng nhập mua mới | US-059 | Chụp ảnh minh chứng hoàn thành task | Chụp ảnh thực tế và tải lên làm minh chứng khi hoàn thành task nhập kho | 5 | High | 1 | BE:24h |
| **Quản lý Tài liệu** | Quản lý Phiếu Xuất Nhập Kho | US-060 | Tạo PDF Phiếu Nhập Kho | In phiếu nhập kho với thông tin chi tiết order, hàng hóa, KCS, chữ ký | 5 | High | 3 | BA:12h / FE:20h / BE:28h |
| **Quản lý Tài liệu** | Quản lý Phiếu Xuất Nhập Kho | US-061 | Tạo PDF Phiếu Xuất Kho | In phiếu xuất kho với thông tin đơn vị nhận, điều kiện giao, chữ ký hai bên | 5 | High | 3 | BA:12h / FE:20h / BE:28h |
| **Quản lý Tài liệu** | Quản lý Phiếu Xuất Nhập Kho | US-062 | Tạo PDF Biên Bản Bàn Giao (BBBG) | Tạo BBBG ghi nhận tình trạng hàng hóa, có ảnh, chữ ký hai bên | 5 | High | 3 | BA:16h / FE:24h / BE:32h |
| **Quản lý Tài liệu** | Quản lý Template PDF | US-063 | Quản lý Template PDF | Tùy chỉnh template phiếu xuất nhập theo yêu cầu doanh nghiệp | 5 | Medium | 3 | BA:12h / FE:24h / BE:20h |
| **Quản lý Tài liệu** | Lưu trữ & Tra cứu PDF | US-064 | Lưu trữ & Tra cứu PDF | Lưu và tra cứu lại các phiếu xuất nhập/BBBG đã tạo | 5 | Medium | 3 | BA:8h / FE:16h / BE:20h |
| **Quản lý Tài liệu** | Quản lý Phiếu Xuất Nhập Kho | US-065 | Trình ký nhiều phiếu nhập kho | Chọn và trình ký gom (batch submit) nhiều phiếu nhập kho sang VOffice trong 1 luồng duyệt duy nhất | 5 | High | 3 | BA:12h / FE:20h / BE:28h |

**Tổng số User Story trong Sprint 2:** 33 stories  
**Tổng số Story Points:** 114 SP

### Thống kê phân bổ theo Component:
| Component | Số Stories | Tổng SP | Trọng số |
|:---|---:|---:|---:|
| Danh mục | 13 stories | 34 SP | 31.2% |
| Cấu hình | 13 stories | 45 SP | 39.5% |
| Nhập kho | 1 story | 5 SP | 4.6% |
| Quản lý Tài liệu | 6 stories | 30 SP | 27.5% |
| **Tổng** | **32 stories** | **109 SP** | **100%** |

---

## 2. Bảng tổng hợp phân rã nhiệm vụ chi tiết (Consolidated Task Table)

| STT | Phân nhóm chức năng | User Story | Nhiệm vụ chi tiết | Vai trò tác nghiệp | Ước lượng | Trạng thái |
|:---:|---|---|---|---|:---:|:---:|
| 1 | Quản lý Nhân sự | US-001: Xem danh sách nhân sự | Đặc tả yêu cầu nghiệp vụ màn hình danh sách xem danh sách nhân sự | BA | 12h | ⬜ Chưa bắt đầu |
| 2 | Quản lý Nhân sự | US-001: Xem danh sách nhân sự | [FE] Phát triển giao diện Data Grid hiển thị danh sách, bộ lọc tìm kiếm | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 3 | Quản lý Nhân sự | US-001: Xem danh sách nhân sự | [BE] Phát triển API truy vấn danh sách, phân trang và tìm kiếm tối ưu database | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 4 | Quản lý Nhân sự | US-002: Xem chi tiết nhân sự | Đặc tả trường thông tin màn hình chi tiết xem chi tiết nhân sự | BA | 8h | ⬜ Chưa bắt đầu |
| 5 | Quản lý Nhân sự | US-002: Xem chi tiết nhân sự | [FE] Thiết kế giao diện chi tiết, hiển thị tab thông tin liên quan | Dev Frontend | 12h | ⬜ Chưa bắt đầu |
| 6 | Quản lý Nhân sự | US-002: Xem chi tiết nhân sự | [BE] Viết API chi tiết, liên kết và lấy dữ liệu từ các bảng quan hệ | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 7 | Quản lý Nhân sự | US-003: Sửa thông tin nhân sự | Xác định quy tắc nghiệp vụ (Business Rules) & Validation dữ liệu cho sửa thông tin nhân sự | BA | 12h | ⬜ Chưa bắt đầu |
| 8 | Quản lý Nhân sự | US-003: Sửa thông tin nhân sự | [FE] Phát triển Form nhập liệu, validate client-side và xử lý submit form | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 9 | Quản lý Nhân sự | US-003: Sửa thông tin nhân sự | [BE] Phát triển API CRUD xử lý nghiệp vụ, lưu cơ sở dữ liệu và ghi log audit | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 10 | Quản lý Công cụ lưu trữ | US-004: Xem danh sách công cụ lưu trữ | Đặc tả yêu cầu nghiệp vụ màn hình danh sách xem danh sách công cụ lưu trữ | BA | 12h | ⬜ Chưa bắt đầu |
| 11 | Quản lý Công cụ lưu trữ | US-004: Xem danh sách công cụ lưu trữ | [FE] Phát triển giao diện Data Grid hiển thị danh sách, bộ lọc tìm kiếm | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 12 | Quản lý Công cụ lưu trữ | US-004: Xem danh sách công cụ lưu trữ | [BE] Phát triển API truy vấn danh sách, phân trang và tìm kiếm tối ưu database | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 13 | Quản lý Công cụ lưu trữ | US-005: Thêm mới công cụ lưu trữ | Xác định quy tắc nghiệp vụ (Business Rules) & Validation dữ liệu cho thêm mới công cụ lưu trữ | BA | 12h | ⬜ Chưa bắt đầu |
| 14 | Quản lý Công cụ lưu trữ | US-005: Thêm mới công cụ lưu trữ | [FE] Phát triển Form nhập liệu, validate client-side và xử lý submit form | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 15 | Quản lý Công cụ lưu trữ | US-005: Thêm mới công cụ lưu trữ | [BE] Phát triển API CRUD xử lý nghiệp vụ, lưu cơ sở dữ liệu và ghi log audit | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 16 | Quản lý Công cụ lưu trữ | US-006: Xem chi tiết công cụ lưu trữ | Đặc tả trường thông tin màn hình chi tiết xem chi tiết công cụ lưu trữ | BA | 8h | ⬜ Chưa bắt đầu |
| 17 | Quản lý Công cụ lưu trữ | US-006: Xem chi tiết công cụ lưu trữ | [FE] Thiết kế giao diện chi tiết, hiển thị tab thông tin liên quan | Dev Frontend | 12h | ⬜ Chưa bắt đầu |
| 18 | Quản lý Công cụ lưu trữ | US-006: Xem chi tiết công cụ lưu trữ | [BE] Viết API chi tiết, liên kết và lấy dữ liệu từ các bảng quan hệ | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 19 | Quản lý Công cụ lưu trữ | US-007: Sửa công cụ lưu trữ | Xác định quy tắc nghiệp vụ (Business Rules) & Validation dữ liệu cho sửa công cụ lưu trữ | BA | 8h | ⬜ Chưa bắt đầu |
| 20 | Quản lý Công cụ lưu trữ | US-007: Sửa công cụ lưu trữ | [FE] Phát triển Form nhập liệu, validate client-side và xử lý submit form | Dev Frontend | 16h | ⬜ Chưa bắt đầu |
| 21 | Quản lý Công cụ lưu trữ | US-007: Sửa công cụ lưu trữ | [BE] Phát triển API CRUD xử lý nghiệp vụ, lưu cơ sở dữ liệu và ghi log audit | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 22 | Quản lý Công cụ lưu trữ | US-008: Nhập thêm số lượng tồn kho công cụ | Xác định quy tắc nghiệp vụ (Business Rules) & Validation dữ liệu cho nhập thêm số lượng tồn kho công cụ | BA | 12h | ⬜ Chưa bắt đầu |
| 23 | Quản lý Công cụ lưu trữ | US-008: Nhập thêm số lượng tồn kho công cụ | [FE] Phát triển Form nhập liệu, validate client-side và xử lý submit form | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 24 | Quản lý Công cụ lưu trữ | US-008: Nhập thêm số lượng tồn kho công cụ | [BE] Phát triển API CRUD xử lý nghiệp vụ, lưu cơ sở dữ liệu và ghi log audit | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 25 | Quản lý hàng hóa vật tư | US-009: Đồng bộ sản phẩm từ SAP | Thống nhất tài liệu kết nối API SAP - AIWS, lập bảng ánh xạ (mapping) trường dữ liệu | BA | 18h | ⬜ Chưa bắt đầu |
| 26 | Quản lý hàng hóa vật tư | US-009: Đồng bộ sản phẩm từ SAP | [BE] Phát triển API nhận thông điệp SAP, chuyển đổi kiểu dữ liệu & xử lý lưu DB | Dev Backend | 36h | ⬜ Chưa bắt đầu |
| 27 | Quản lý hàng hóa vật tư | US-010: Xem danh sách sản phẩm | Đặc tả yêu cầu nghiệp vụ màn hình danh sách xem danh sách sản phẩm | BA | 8h | ⬜ Chưa bắt đầu |
| 28 | Quản lý hàng hóa vật tư | US-010: Xem danh sách sản phẩm | [FE] Phát triển giao diện Data Grid hiển thị danh sách, bộ lọc tìm kiếm | Dev Frontend | 16h | ⬜ Chưa bắt đầu |
| 29 | Quản lý hàng hóa vật tư | US-010: Xem danh sách sản phẩm | [BE] Phát triển API truy vấn danh sách, phân trang và tìm kiếm tối ưu database | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 30 | Quản lý hàng hóa vật tư | US-011: Xem chi tiết sản phẩm | Đặc tả trường thông tin màn hình chi tiết xem chi tiết sản phẩm | BA | 8h | ⬜ Chưa bắt đầu |
| 31 | Quản lý hàng hóa vật tư | US-011: Xem chi tiết sản phẩm | [FE] Thiết kế giao diện chi tiết, hiển thị tab thông tin liên quan | Dev Frontend | 12h | ⬜ Chưa bắt đầu |
| 32 | Quản lý hàng hóa vật tư | US-011: Xem chi tiết sản phẩm | [BE] Viết API chi tiết, liên kết và lấy dữ liệu từ các bảng quan hệ | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 33 | Quản lý KPI | US-018: Xem danh sách KPI chuẩn | Đặc tả yêu cầu nghiệp vụ màn hình danh sách xem danh sách kpi chuẩn | BA | 8h | ⬜ Chưa bắt đầu |
| 34 | Quản lý KPI | US-018: Xem danh sách KPI chuẩn | [FE] Phát triển giao diện Data Grid hiển thị danh sách, bộ lọc tìm kiếm | Dev Frontend | 16h | ⬜ Chưa bắt đầu |
| 35 | Quản lý KPI | US-018: Xem danh sách KPI chuẩn | [BE] Phát triển API truy vấn danh sách, phân trang và tìm kiếm tối ưu database | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 36 | Quản lý KPI | US-019: Cấu hình KPI & SLA chi tiết | Đặc tả trường thông tin màn hình chi tiết cấu hình kpi & sla chi tiết | BA | 12h | ⬜ Chưa bắt đầu |
| 37 | Quản lý KPI | US-019: Cấu hình KPI & SLA chi tiết | [FE] Thiết kế giao diện chi tiết, hiển thị tab thông tin liên quan | Dev Frontend | 18h | ⬜ Chưa bắt đầu |
| 38 | Quản lý KPI | US-019: Cấu hình KPI & SLA chi tiết | [BE] Viết API chi tiết, liên kết và lấy dữ liệu từ các bảng quan hệ | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 39 | Quản lý Chân ký | US-020: Xem danh sách mẫu chân ký | Đặc tả yêu cầu nghiệp vụ màn hình danh sách xem danh sách mẫu chân ký | BA | 8h | ⬜ Chưa bắt đầu |
| 40 | Quản lý Chân ký | US-020: Xem danh sách mẫu chân ký | [FE] Phát triển giao diện Data Grid hiển thị danh sách, bộ lọc tìm kiếm | Dev Frontend | 16h | ⬜ Chưa bắt đầu |
| 41 | Quản lý Chân ký | US-020: Xem danh sách mẫu chân ký | [BE] Phát triển API truy vấn danh sách, phân trang và tìm kiếm tối ưu database | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 42 | Quản lý Chân ký | US-021: Thêm mới mẫu chân ký | Xác định quy tắc nghiệp vụ (Business Rules) & Validation dữ liệu cho thêm mới mẫu chân ký | BA | 12h | ⬜ Chưa bắt đầu |
| 43 | Quản lý Chân ký | US-021: Thêm mới mẫu chân ký | [FE] Phát triển Form nhập liệu, validate client-side và xử lý submit form | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 44 | Quản lý Chân ký | US-021: Thêm mới mẫu chân ký | [BE] Phát triển API CRUD xử lý nghiệp vụ, lưu cơ sở dữ liệu và ghi log audit | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 45 | Quản lý Chân ký | US-022: Chỉnh sửa mẫu chân ký | Xác định quy tắc nghiệp vụ (Business Rules) & Validation dữ liệu cho chỉnh sửa mẫu chân ký | BA | 8h | ⬜ Chưa bắt đầu |
| 46 | Quản lý Chân ký | US-022: Chỉnh sửa mẫu chân ký | [FE] Phát triển Form nhập liệu, validate client-side và xử lý submit form | Dev Frontend | 16h | ⬜ Chưa bắt đầu |
| 47 | Quản lý Chân ký | US-022: Chỉnh sửa mẫu chân ký | [BE] Phát triển API CRUD xử lý nghiệp vụ, lưu cơ sở dữ liệu và ghi log audit | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 48 | Quản lý Chân ký | US-023: Xem chi tiết mẫu chân ký | Đặc tả trường thông tin màn hình chi tiết xem chi tiết mẫu chân ký | BA | 8h | ⬜ Chưa bắt đầu |
| 49 | Quản lý Chân ký | US-023: Xem chi tiết mẫu chân ký | [FE] Thiết kế giao diện chi tiết, hiển thị tab thông tin liên quan | Dev Frontend | 12h | ⬜ Chưa bắt đầu |
| 50 | Quản lý Chân ký | US-023: Xem chi tiết mẫu chân ký | [BE] Viết API chi tiết, liên kết và lấy dữ liệu từ các bảng quan hệ | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 51 | Mã hóa RFID kệ lưu trữ | US-051: Phát triển tính năng gán mã RFID cho từng kệ | Khảo sát thực địa bãi kệ, xây dựng quy tắc đặt mã RFID và quy trình gán mã kệ bãi | BA | 16h | ⬜ Chưa bắt đầu |
| 52 | Mã hóa RFID kệ lưu trữ | US-051: Phát triển tính năng gán mã RFID cho từng kệ | [Mobile] Phát triển chức năng quét thẻ RFID trên PDA cầm tay khi cất kệ | Dev Flutter | 32h | ⬜ Chưa bắt đầu |
| 53 | Mã hóa RFID kệ lưu trữ | US-051: Phát triển tính năng gán mã RFID cho từng kệ | [BE] Phát triển API lưu trữ mã RFID kệ, map toạ độ bến bãi & kiểm tra trùng lặp | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 54 | Giám sát an ninh | US-052: Màn hình giám sát an ninh camera AI cổng | Viết đặc tả luồng xử lý an ninh, kịch bản phát cảnh báo & tích hợp camera AI | BA | 8h | ⬜ Chưa bắt đầu |
| 55 | Giám sát an ninh | US-052: Màn hình giám sát an ninh camera AI cổng | [FE] Phát triển Dashboard giám sát luồng camera, pop-up cảnh báo xe không đúng lịch | Dev Frontend | 16h | ⬜ Chưa bắt đầu |
| 56 | Giám sát an ninh | US-052: Màn hình giám sát an ninh camera AI cổng | [BE] Tích hợp API nhận diện biển số xe từ Camera AI, trigger đổi trạng thái Gate Control | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 57 | Phân quyền vai trò (non-SAP) | US-053: Nghiên cứu & Phân quyền vai trò hệ thống non-SAP | Nghiên cứu cơ chế phân quyền non-SAP (RBAC), xây dựng danh sách nhóm vai trò & quyền truy cập | BA | 16h | ⬜ Chưa bắt đầu |
| 58 | Phân quyền vai trò (non-SAP) | US-053: Nghiên cứu & Phân quyền vai trò hệ thống non-SAP | [BE] Phát triển cơ chế phân quyền RBAC (Role-based), mã hóa token, phân quyền ở lớp Gateway/API | Dev Backend | 32h | ⬜ Chưa bắt đầu |
| 59 | Phân quyền vai trò (non-SAP) | US-053: Nghiên cứu & Phân quyền vai trò hệ thống non-SAP | [FE] Ẩn/hiển thị phần tử UI động theo vai trò người dùng (Bảo vệ, Lái nâng, Thủ kho) | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 60 | Quản lý hàng hóa vật tư | US-054: Cập nhật thông tin sản phẩm (đóng gói, vị trí lưu) | Đặc tả quy tắc cấu hình đóng gói & xác định vị trí lưu kho mặc định cho sản phẩm | BA | 8h | ⬜ Chưa bắt đầu |
| 61 | Quản lý hàng hóa vật tư | US-054: Cập nhật thông tin sản phẩm (đóng gói, vị trí lưu) | [FE] Phát triển Form cập nhật cấu hình đóng gói (Có/Không) & chỉ định vị trí bãi lưu trữ mặc định | Dev Frontend | 16h | ⬜ Chưa bắt đầu |
| 62 | Quản lý hàng hóa vật tư | US-054: Cập nhật thông tin sản phẩm (đóng gói, vị trí lưu) | [BE] Phát triển API cập nhật thông tin đóng gói, vị trí lưu kho của sản phẩm, ghi log cập nhật | Dev Backend | 16h | ⬜ Chưa bắt đầu |
| 63 | Quản lý Quy trình | US-055: Cấu hình quy trình luồng nhập kho (movementtype, đơn vị, KCS) | Phân tích & viết đặc tả luật (Rule Engine) cấu hình luồng nhập dựa trên movementtype, đơn vị quản lý và điều kiện KCS | BA | 20h | ⬜ Chưa bắt đầu |
| 64 | Quản lý Quy trình | US-055: Cấu hình quy trình luồng nhập kho (movementtype, đơn vị, KCS) | [BE] Phát triển API Rule Engine kiểm tra cấu hình và sinh chuỗi Task động cho Inbound Order | Dev Backend | 40h | ⬜ Chưa bắt đầu |
| 65 | Quản lý Quy trình | US-055: Cấu hình quy trình luồng nhập kho (movementtype, đơn vị, KCS) | [FE] Phát triển giao diện cấu hình luồng quy trình (bật/tắt KCS, đóng gói theo movementtype/đơn vị) | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 66 | Quản lý Quy trình | US-056: Tự động phân công Task kế tiếp (Job 5 phút, update time) | Đặc tả luồng chuyển tiếp thời gian giữa hai task kế cận và nghiệp vụ tự động phân công sau 5 phút (ma trận phù hợp vai trò, định nghĩa nhân sự rảnh) | BA | 20h | ⬜ Chưa bắt đầu |
| 67 | Quản lý Quy trình | US-056: Tự động phân công Task kế tiếp (Job 5 phút, update time) | [BE] Phát triển background job (Scheduler/Job) quét các task chưa claim, xây dựng logic kiểm tra mức độ bận/rảnh & sự phù hợp vai trò để tự động phân công | Dev Backend | 40h | ⬜ Chưa bắt đầu |
| 68 | Quản lý Quy trình | US-056: Tự động phân công Task kế tiếp (Job 5 phút, update time) | [FE] Phát triển màn hình hiển thị logs của background job phân việc tự động và cấu hình thời gian chờ mặc định | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 69 | Quản lý Nhân sự | US-057: Đăng ký lịch nghỉ làm | Đặc tả quy trình và Form đăng ký lịch nghỉ làm (phép năm, nghỉ ốm, nghỉ việc riêng) | BA | 12h | ⬜ Chưa bắt đầu |
| 70 | Quản lý Nhân sự | US-057: Đăng ký lịch nghỉ làm | [FE] Phát triển giao diện Form đăng ký và màn hình theo dõi trạng thái đơn nghỉ | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 71 | Quản lý Nhân sự | US-057: Đăng ký lịch nghỉ làm | [BE] Phát triển API tạo yêu cầu nghỉ phép, xử lý logic trừ ngày phép và phê duyệt ca trực | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 72 | Quản lý Nhân sự | US-058: Đăng ký làm thêm giờ | Đặc tả quy trình, điều kiện và Form đăng ký làm thêm giờ (OT) | BA | 12h | ⬜ Chưa bắt đầu |
| 73 | Quản lý Nhân sự | US-058: Đăng ký làm thêm giờ | [FE] Phát triển giao diện Form đăng ký OT và màn hình theo dõi trạng thái phê duyệt | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 74 | Quản lý Nhân sự | US-058: Đăng ký làm thêm giờ | [BE] Phát triển API tạo yêu cầu OT, ghi nhận ngày công tăng ca và tích hợp kiểm tra ca trực | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 75 | Nhập kho (Inbound) | US-059: Chụp ảnh minh chứng hoàn thành task | [BE] Phát triển API tải ảnh, lưu trữ trên MinIO/Cloud và liên kết ảnh minh chứng với thông tin Task | Dev Backend | 24h | ⬜ Chưa bắt đầu |
| 76 | Quản lý Tài liệu PDF | US-060: Tạo PDF Phiếu Nhập Kho | Đặc tả yêu cầu nghiệp vụ tạo PDF phiếu nhập kho với đầy đủ thông tin order, hàng hóa, KCS, chữ ký | BA | 12h | ⬜ Chưa bắt đầu |
| 77 | Quản lý Tài liệu PDF | US-060: Tạo PDF Phiếu Nhập Kho | [FE] Phát triển giao diện nút "In phiếu nhập" và preview PDF trên mobile app | Dev Frontend | 20h | ⬜ Chưa bắt đầu |
| 78 | Quản lý Tài liệu PDF | US-060: Tạo PDF Phiếu Nhập Kho | [BE] Phát triển service tạo PDF bằng @react-pdf/renderer, include QR code, chữ ký số, upload lên storage | Dev Backend | 28h | ⬜ Chưa bắt đầu |
| 79 | Quản lý Tài liệu PDF | US-061: Tạo PDF Phiếu Xuất Kho | Đặc tả yêu cầu nghiệp vụ tạo PDF phiếu xuất kho với thông tin đơn vị nhận, điều kiện giao, chữ ký hai bên | BA | 12h | ⬜ Chưa bắt đầu |
| 80 | Quản lý Tài liệu PDF | US-061: Tạo PDF Phiếu Xuất Kho | [FE] Phát triển giao diện nút "In phiếu xuất" và preview PDF trên mobile app | Dev Frontend | 20h | ⬜ Chưa bắt đầu |
| 81 | Quản lý Tài liệu PDF | US-061: Tạo PDF Phiếu Xuất Kho | [BE] Phát triển service tạo PDF phiếu xuất, include thông tin vận chuyển, điều kiện giao hàng | Dev Backend | 28h | ⬜ Chưa bắt đầu |
| 82 | Quản lý Tài liệu PDF | US-062: Tạo PDF Biên Bản Bàn Giao (BBBG) | Đặc tả yêu cầu nghiệp vụ tạo BBBG với thông tin hai bên, tình trạng hàng hóa, ảnh chụp, phương án giải quyết | BA | 16h | ⬜ Chưa bắt đầu |
| 83 | Quản lý Tài liệu PDF | US-062: Tạo PDF Biên Bản Bàn Giao (BBBG) | [FE] Phát triển giao diện tạo BBBG với form nhập thông tin, upload ảnh, preview PDF | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 84 | Quản lý Tài liệu PDF | US-062: Tạo PDF Biên Bản Bàn Giao (BBBG) | [BE] Phát triển service tạo BBBG PDF, đính kèm ảnh, support chữ ký số, email tự động | Dev Backend | 32h | ⬜ Chưa bắt đầu |
| 85 | Quản lý Tài liệu PDF | US-063: Quản lý Template PDF | Đặc tả yêu cầu quản lý template PDF: upload logo, tùy chỉnh layout, font, colors, header/footer | BA | 12h | ⬜ Chưa bắt đầu |
| 86 | Quản lý Tài liệu PDF | US-063: Quản lý Template PDF | [FE] Phát triển giao diện quản lý template drag-drop, preview real-time, chỉnh sửa styling | Dev Frontend | 24h | ⬜ Chưa bắt đầu |
| 87 | Quản lý Tài liệu PDF | US-063: Quản lý Template PDF | [BE] Phát triển API lưu trữ template versioning, apply template khi generate PDF | Dev Backend | 20h | ⬜ Chưa bắt đầu |
| 88 | Quản lý Tài liệu PDF | US-064: Lưu trữ & Tra cứu PDF | Đặc tả yêu cầu lưu trữ, tra cứu, filter PDF theo thời gian, loại phiếu, kho, order | BA | 8h | ⬜ Chưa bắt đầu |
| 89 | Quản lý Tài liệu PDF | US-064: Lưu trữ & Tra cứu PDF | [FE] Phát triển giao diện lịch sử phiếu với search, filter, preview, download, gửi lại email | Dev Frontend | 16h | ⬜ Chưa bắt đầu |
| 90 | Quản lý Tài liệu PDF | US-064: Lưu trữ & Tra cứu PDF | [BE] Phát triển API lưu trữ metadata PDF, indexing cho search, RLS security, export Excel | Dev Backend | 20h | ⬜ Chưa bắt đầu |
| 91 | Quản lý Tài liệu PDF | US-065: Trình ký nhiều phiếu nhập kho | Đặc tả quy trình trình ký gom nhiều phiếu nhập kho, cấu hình danh sách phiếu và luồng trình ký VOffice | BA | 12h | ⬜ Chưa bắt đầu |
| 92 | Quản lý Tài liệu PDF | US-065: Trình ký nhiều phiếu nhập kho | [FE] Phát triển giao diện chọn nhiều phiếu nhập kho (Checkbox DataGrid), popup tổng hợp và nút "Trình ký nhiều phiếu" | Dev Frontend | 20h | ⬜ Chưa bắt đầu |
| 93 | Quản lý Tài liệu PDF | US-065: Trình ký nhiều phiếu nhập kho | [BE] Phát triển API gộp file PDF phiếu nhập kho, đóng gói file ZIP/PDF tập trung và gửi bản tin VOffice Batch Submit (V-API1) | Dev Backend | 28h | ⬜ Chưa bắt đầu |
| 94 | Quản lý Thông báo | US-066: Push Notification di động | Đặc tả luồng xử lý thông báo push notification, ma trận sự kiện trigger & template thông báo | BA | 12h | ⬜ Chưa bắt đầu |
| 95 | Quản lý Thông báo | US-066: Push Notification di động | [Mobile] Tích hợp dịch vụ FCM/APNs, nhận notification foreground/background, điều hướng màn hình khi click notification | Dev Flutter | 24h | ⬜ Chưa bắt đầu |
| 96 | Quản lý Thông báo | US-066: Push Notification di động | [BE] Tích hợp FCM Admin SDK, phát bản tin push notification cho thiết bị người dùng dựa trên event trigger | Dev Backend | 24h | ⬜ Chưa bắt đầu |

*Tổng số giờ nỗ lực ước tính cho toàn bộ sub-tasks trong Sprint 2:* **1760 giờ**.

## 3. Thống kê điểm (Story Points Metrics)

Phần này đã được trình bày chi tiết trong **Bảng 1: Bảng tổng hợp danh sách User Story** ở trên, bao gồm:
- Phân bổ Story Point theo từng Epic
- Trọng số công việc của từng Component
- Tổng số Story Points: **109 SP**

---

## 4. Kế hoạch nghiên cứu phân quyền non-SAP
Quy trình phân quyền trên hệ thống non-SAP được triển khai độc lập với SAP S/4HANA để phục vụ các đối tác ngoại vi và nhân viên trực tiếp kho (Bảo vệ, Lái xe nâng, Nhân viên dỡ hàng) qua cơ chế:
1. **OAuth2 / SSO Viettel** để đăng nhập hệ thống.
2. **Role-based Access Control (RBAC):** Phân chia cụ thể các vai trò:
   - `Bảo vệ`: Chỉ có quyền Gate Control (`T-Scr`).
   - `Forklift Driver`: Chỉ có quyền di chuyển cất hàng (`T-Mv`).
   - `Nhân viên dỡ/kiểm hàng`: Quyền kiểm đếm (`T-Unl`/`T-Ho`).
   - `Thủ kho/Admin`: Có toàn quyền cấu hình danh mục.
3. Thiết kế bảng cơ sở dữ liệu phân quyền nội bộ (Roles, Permissions, UserRoles) trên database của AIWS.

---

## 5. Definition of Done (áp dụng cho mọi hạng mục)

- [ ] Code hoàn thành + tự test.
- [ ] Tài liệu liên quan cập nhật (SRS/TKCT/API contract).
- [ ] Demo/POP được PM xác nhận.
- [ ] Trình ký V-Office/SAP kết nối kiểm tra đạt yêu cầu.
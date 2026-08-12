# Kế Hoạch Chi Tiết Sprint 1 — Phân Hệ Nhập Kho (Inbound)

**Khoảng thời gian:** 01/08/2026 → 15/08/2026 (2 tuần)
**Mục tiêu sprint:** Phân rã nghiệp vụ, thiết lập API contract và hoàn thành giai đoạn đầu tiên của phân hệ Nhập kho bao gồm: Danh sách lệnh nhập, Chi tiết lệnh nhập (các tab thông tin), Danh sách Task nghiệp vụ và luồng quy trình lõi (dỡ hàng, kiểm hàng, putaway, đồng bộ SAP).

---

## 1. Danh sách Story & Phân rã Sub-task (BA - Dev - Test)

Dưới đây là chi tiết từng Story và các nhiệm vụ (Sub-task) được phân rã cho từng vai trò:

### 🎯 PREP-STORY: Hoàn thành tài liệu nhập kho. Trong SRS V1.0.0 có mô tả chi tiết API
*   **Người phụ trách chính:** Trần Minh Quân (`quantm18`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 32h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Đào Đình Hà | Hoàn thành tài liệu nhập kho. Trong SRS V1.0.0 có mô tả chi tiết API — BA- Update tài liệu và Fix comment lần 1 | BA | 8h | ⬜ Chưa làm |
| Đào Đình Hà | Hoàn thành tài liệu nhập kho. Trong SRS V1.0.0 có mô tả chi tiết API — BA- Update tài liệu và Fix comment lần 2 | BA | 8h | ⬜ Chưa làm |
| Đào Đình Hà | Hoàn thành tài liệu nhập kho. Trong SRS V1.0.0 có mô tả chi tiết API — BA - Mô hình hóa yêu cầu nhập kho theo yêu cầu mới | BA | 32h | ⬜ Chưa làm |
| Đào Đình Hà | Hoàn thành tài liệu nhập kho. Trong SRS V1.0.0 có mô tả chi tiết API — BA - Viết đặc tả API (50%) | BA | 8h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Nhập kho - Tích hợp hệ thống ngoài
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 13.0 SP
*   **Thời gian ước lượng:** 24h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Đào Đình Hà | Nhập kho - Tích hợp hệ thống ngoài — BA- Thống nhất với nghiệp vụ Maping về số lượng Movement type và lệnh nhập kho | BA | 24h | ⬜ Chưa làm |
| Đào Đình Hà | Nhập kho - Tích hợp hệ thống ngoài — BA- Thống nhất về thông tin đồng bộ SAP | BA | 24h | ⬜ Chưa làm |
| Trần Minh Quân | Nhập kho - Tích hợp hệ thống ngoài — BA- Thống nhất về thông tin đồng bộ SAP | BA | 24h | ⬜ Chưa làm |
| Đào Đình Hà | Nhập kho - Tích hợp hệ thống ngoài — BA - Ký số - Thông nhất luồng tích hợp VO | BA | 24h | ⬜ Chưa làm |
| Trần Minh Quân | Nhập kho - Tích hợp hệ thống ngoài — BA - Ký số - Thông nhất luồng tích hợp VO | BA | 24h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08)
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 13.0 SP
*   **Thời gian ước lượng:** 72h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Đào Đình Hà | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA - Update giao diện (step 1 -6) | BA | 16h | ⬜ Chưa làm |
| Trần Minh Quân | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA - Update giao diện (step 7-10) | BA | 8h | ⬜ Chưa làm |
| Đào Đình Hà | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA- SRS - Hoàn thành SRS - (Step 1- Step 6) | BA | 16h | ⬜ Chưa làm |
| Trần Minh Quân | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA- SRS - Hoàn thành SRS - (Step 7- Step 10) | BA | 64h | ⬜ Chưa làm |
| Trần Minh Quân | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA- SRS - Chốt scope nghiệp vụ/tài liệu KH | BA | 8h | ⬜ Chưa làm |
| Trần Minh Quân | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA - Transfer nghiệp vụ team phát triên (DEV, TEST, DESIGN) | BA | 56h | ⬜ Chưa làm |
| Trần Minh Quân | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA - Hỗ trợ UAT | BA | 40h | ⬜ Chưa làm |
| Đào Đình Hà | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA- SRS - Chốt scope nghiệp vụ/tài liệu KH | BA | 8h | ⬜ Chưa làm |
| Đào Đình Hà | Nhập kho - Phiếu nhập kho nhà cung cấp (Mốc 15/08) — BA - Transfer nghiệp vụ team phát triên (DEV, TEST, DESIGN) | BA | 8h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Nhập kho - Phiếu nhập chuyển kho
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h
*   *(Không có sub-task)*

### 🎯 PREP-STORY: Nhập kho - Phiếu nhập kho khác
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h
*   *(Không có sub-task)*

### 🎯 PREP-STORY: Xuất kho
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Lê Minh Quang | Xuất kho — BA - Tìm hiểu nghiệp vụ | BA | 16h | ⬜ Chưa làm |
| Lê Minh Quang | Xuất kho — BA- Viết URD theo yêu cầu đã thống nhất (nghiệp vụ + màn hình + trường thông tin) | BA | 24h | ⬜ Chưa làm |
| Lê Minh Quang | Xuất kho — BA- Chốt tài liệu khách hàng | BA | 16h | ⬜ Chưa làm |
| Lê Minh Quang | Xuất kho — BA- Viết tài SRS | BA | 24h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 24h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Nguyễn Thành Chiến | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [BE] Thống kê API module nhập kho theo SRS cũ | Dev Backend | 8h | ⬜ Chưa làm |
| Nguyễn Trung Quang | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [FE] Tìm hiểu tài liệu nghiên cứu plan, phân công công việc ae trong team | Dev Frontend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [BE] Tích hợp Swagger vào project | Dev Backend | 8h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [BE] Trao đổi Dev khách hàng lấy Database Migrate Data Dev | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [BE] Trao đổi Dev khách hàng lấy Database Migrate Data Dev Local | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [BE] Hỗ trợ Dev mới migrate DB local và tranfers DB luồng được giao | Dev Backend | 8h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [BE] Ghép API Danh sách lệnh nhập | Dev Backend | 8h | ⬜ Chưa làm |
| Nguyễn Trung Quang | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [FE] Trao đổi Dev cũ lấy môi trường và dựng | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [FE] Tạo UI UX màn Danh sách, Nhận Transfer về dự án | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | Hoàn thành danh sách API nhập kho mapping với prototype V1.0.0 — [FE] Tìm hiểu dự án | Dev Frontend | 8h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Làm việc với SAP lấy đủ API cho nhập kho
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Trần Minh Quân | Làm việc với SAP lấy đủ API cho nhập kho — [BA] Vẽ sơ đồ quy trình nghiệp vụ SAP - AIWS | BA | 80h | ⬜ Chưa làm |
| Đào Đình Hà | Làm việc với SAP lấy đủ API cho nhập kho — BA - Trao đổi với BA SAP xác định phạm vị tích hợp | BA | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | Làm việc với SAP lấy đủ API cho nhập kho — [BE] Đi họp khách hàng hiểu hệ thống SAP và vERP | Dev Backend | 16h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Study nghiệp vụ nhập kho V1.0.0
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h
*   *(Không có sub-task)*

### 🎯 US-024: Danh sách lệnh nhập
*   **Người phụ trách chính:** Nguyễn Văn Trường (`truongnv51`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h
*   *(Không có sub-task)*

### 🎯 PREP-STORY: Hoàn thành tài liệu nhập kho. Trong SRS V1.0.0 có mô tả chi tiết API
*   **Người phụ trách chính:** Trần Minh Quân (`quantm18`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 32h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Trần Minh Quân | [BA] Hoàn thành tài liệu nhập kho. Trong SRS V1.0.0 có mô tả chi tiết API | BA | 32h | ⬜ Chưa làm |
| Đào Đình Hà | [BA] Hoàn thành tài liệu nhập kho. Trong SRS V1.0.0 có mô tả chi tiết API | BA | 32h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Hoàn thành prototype nhâp kho V1.0.0
*   **Người phụ trách chính:** Trần Minh Quân (`quantm18`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 32h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Trần Minh Quân | [BA] Hoàn thành prototype nhâp kho V1.0.0 | BA | 32h | ⬜ Chưa làm |
| Đào Đình Hà | [BA] Hoàn thành prototype nhâp kho V1.0.0 | BA | 32h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Mapping API với prototype và nghiệp vụ
*   **Người phụ trách chính:** Nguyễn Thành Chiến (`chiennt11`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Nguyễn Thành Chiến | [BE] Mapping API với prototype và nghiệp vụ | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | Mapping API với prototype và nghiệp vụ — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-024: Danh sách lệnh nhập
*   **Người phụ trách chính:** Nguyễn Văn Trường (`truongnv51`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Nguyễn Văn Trường | [AI] [Mobile] Danh sách lệnh nhập | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [AI] [BE] Danh sách lệnh nhập | Dev Backend | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] Danh sách lệnh nhập | Dev Frontend | 32h | ⬜ Chưa làm |
| Nguyễn Văn Trường | Danh sách lệnh nhập — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Nguyễn Văn Trường | Danh sách lệnh nhập — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | Danh sách lệnh nhập — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | Danh sách lệnh nhập — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | Danh sách lệnh nhập — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | Danh sách lệnh nhập — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | [FE] Danh sách lệnh nhập | Dev Frontend | 16h | ⬜ Chưa làm |
| Nguyễn Văn Trường | Danh sách lệnh nhập — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-025: Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa
*   **Người phụ trách chính:** Hoàng Tuấn Anh (`anhht124`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Hoàng Tuấn Anh | [AI] [BE] Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [AI] [Mobile] Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa | Dev Flutter | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa | Dev Frontend | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | [FE] Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa | Dev Frontend | 16h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Thông tin hàng hóa — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-026: Xem chi tiết lệnh nhập - Tab Chứng từ
*   **Người phụ trách chính:** Hoàng Tuấn Anh (`anhht124`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Hoàng Tuấn Anh | [AI] [BE] Xem chi tiết lệnh nhập - Tab Chứng từ | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [AI] [Mobile] Xem chi tiết lệnh nhập - Tab Chứng từ | Dev Flutter | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] Xem chi tiết lệnh nhập - Tab Chứng từ | Dev Frontend | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Chứng từ — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Chứng từ — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Chứng từ — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Chứng từ — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Chứng từ — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Chứng từ — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | [FE] Xem chi tiết lệnh nhập - Tab Chứng từ | Dev Frontend | 16h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Chứng từ — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-027: Xem chi tiết lệnh nhập - Tab Task
*   **Người phụ trách chính:** Hoàng Tuấn Anh (`anhht124`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Hoàng Tuấn Anh | [AI] [BE] Xem chi tiết lệnh nhập - Tab Task | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [AI] [Mobile] Xem chi tiết lệnh nhập - Tab Task | Dev Flutter | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] Xem chi tiết lệnh nhập - Tab Task | Dev Frontend | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Task — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Task — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Task — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Task — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Task — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Task — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Task — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-028: Xem chi tiết lệnh nhập - Tab Kết quả KCS
*   **Người phụ trách chính:** Hoàng Tuấn Anh (`anhht124`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Hoàng Tuấn Anh | [AI] [BE] Xem chi tiết lệnh nhập - Tab Kết quả KCS | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [AI] [Mobile] Xem chi tiết lệnh nhập - Tab Kết quả KCS | Dev Flutter | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] Xem chi tiết lệnh nhập - Tab Kết quả KCS | Dev Frontend | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Kết quả KCS — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Kết quả KCS — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Kết quả KCS — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Kết quả KCS — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Kết quả KCS — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Kết quả KCS — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Kết quả KCS — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-029: Xem chi tiết lệnh nhập - Tab Vận chuyển
*   **Người phụ trách chính:** Hoàng Tuấn Anh (`anhht124`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Hoàng Tuấn Anh | [AI] [BE] Xem chi tiết lệnh nhập - Tab Vận chuyển | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [AI] [Mobile] Xem chi tiết lệnh nhập - Tab Vận chuyển | Dev Flutter | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] Xem chi tiết lệnh nhập - Tab Vận chuyển | Dev Frontend | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Vận chuyển — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Vận chuyển — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Vận chuyển — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Vận chuyển — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Vận chuyển — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Vận chuyển — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | [FE] Xem chi tiết lệnh nhập - Tab Vận chuyển | Dev Frontend | 16h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Vận chuyển — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-030: Xem chi tiết lệnh nhập - Tab Lịch sử
*   **Người phụ trách chính:** Hoàng Tuấn Anh (`anhht124`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Hoàng Tuấn Anh | [AI] [BE] Xem chi tiết lệnh nhập - Tab Lịch sử | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [AI] [Mobile] Xem chi tiết lệnh nhập - Tab Lịch sử | Dev Flutter | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] Xem chi tiết lệnh nhập - Tab Lịch sử | Dev Frontend | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Lịch sử — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Lịch sử — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Lịch sử — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xem chi tiết lệnh nhập - Tab Lịch sử — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Lịch sử — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | Xem chi tiết lệnh nhập - Tab Lịch sử — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | [FE] Xem chi tiết lệnh nhập - Tab Lịch sử | Dev Frontend | 16h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Xem chi tiết lệnh nhập - Tab Lịch sử — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-031: [Order] Export Excel
*   **Người phụ trách chính:** Nguyễn Văn Trường (`truongnv51`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Nguyễn Văn Trường | [AI] [Mobile] [Order] Export Excel | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [AI] [BE] [Order] Export Excel | Dev Backend | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] [Order] Export Excel | Dev Frontend | 32h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Export Excel — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Export Excel — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [Order] Export Excel — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [Order] Export Excel — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | [Order] Export Excel — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | [Order] Export Excel — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Export Excel — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-032: [Order] Tìm kiếm nhanh
*   **Người phụ trách chính:** Nguyễn Văn Trường (`truongnv51`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Nguyễn Văn Trường | [AI] [Mobile] [Order] Tìm kiếm nhanh | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [AI] [BE] [Order] Tìm kiếm nhanh | Dev Backend | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] [Order] Tìm kiếm nhanh | Dev Frontend | 32h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Tìm kiếm nhanh — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Tìm kiếm nhanh — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [Order] Tìm kiếm nhanh — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [Order] Tìm kiếm nhanh — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | [Order] Tìm kiếm nhanh — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | [Order] Tìm kiếm nhanh — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Tìm kiếm nhanh — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-033: [Order] Tìm kiếm nâng cao
*   **Người phụ trách chính:** Nguyễn Văn Trường (`truongnv51`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Nguyễn Văn Trường | [AI] [Mobile] [Order] Tìm kiếm nâng cao | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [AI] [BE] [Order] Tìm kiếm nâng cao | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [Order] Tìm kiếm nâng cao — [AI] [BE] [Order] Dashboard | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [Order] Tìm kiếm nâng cao — [AI] [BE] [Order] Dashboard Mobile | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [AI] [BE] [Order] Tìm kiếm nâng cao | Dev Backend | 32h | ⬜ Chưa làm |
| Lê Hoàng Đức | [AI] [FE] [Order] Tìm kiếm nâng cao | Dev Frontend | 32h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Tìm kiếm nâng cao — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Tìm kiếm nâng cao — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [Order] Tìm kiếm nâng cao — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Nguyễn Thành Chiến | [Order] Tìm kiếm nâng cao — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Lê Hoàng Đức | [Order] Tìm kiếm nâng cao — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Lê Hoàng Đức | [Order] Tìm kiếm nâng cao — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Order] Tìm kiếm nâng cao — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-034: Danh sách Task
*   **Người phụ trách chính:** Ngô Doãn Hồng Hiệp (`hiepndh`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Ngô Doãn Hồng Hiệp | [AI] [BE] Danh sách Task | Dev Backend | 32h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [AI] [Mobile] Danh sách Task | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [AI] [FE] Danh sách Task | Dev Frontend | 32h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | Danh sách Task — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | Danh sách Task — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Bùi Văn Đoàn | Danh sách Task — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Bùi Văn Đoàn | Danh sách Task — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Danh sách Task — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Danh sách Task — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | Danh sách Task — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-035: [Task] Export Excel
*   **Người phụ trách chính:** Ngô Doãn Hồng Hiệp (`hiepndh`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Ngô Doãn Hồng Hiệp | [AI] [BE] [Task] Export Excel | Dev Backend | 32h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [AI] [Mobile] [Task] Export Excel | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [AI] [FE] [Task] Export Excel | Dev Frontend | 32h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | [Task] Export Excel — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | [Task] Export Excel — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [Task] Export Excel — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [Task] Export Excel — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [Task] Export Excel — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [Task] Export Excel — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [Task] Export Excel — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-036: [Task] Tìm kiếm nhanh
*   **Người phụ trách chính:** Ngô Doãn Hồng Hiệp (`hiepndh`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Ngô Doãn Hồng Hiệp | [AI] [BE] [Task] Tìm kiếm nhanh | Dev Backend | 32h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [AI] [Mobile] [Task] Tìm kiếm nhanh | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [AI] [FE] [Task] Tìm kiếm nhanh | Dev Frontend | 32h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | [Task] Tìm kiếm nhanh — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | [Task] Tìm kiếm nhanh — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [Task] Tìm kiếm nhanh — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [Task] Tìm kiếm nhanh — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [Task] Tìm kiếm nhanh — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [Task] Tìm kiếm nhanh — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | [Task] Tìm kiếm nhanh — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-037: [Task] Tìm kiếm nâng cao
*   **Người phụ trách chính:** Ngô Doãn Hồng Hiệp (`hiepndh`)
*   **Điểm Story Point:** 5.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Ngô Doãn Hồng Hiệp | [AI] [BE] [Task] Tìm kiếm nâng cao | Dev Backend | 32h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [AI] [Mobile] [Task] Tìm kiếm nâng cao | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [AI] [FE] [Task] Tìm kiếm nâng cao | Dev Frontend | 32h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | [Task] Tìm kiếm nâng cao — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | [Task] Tìm kiếm nâng cao — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [Task] Tìm kiếm nâng cao — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [Task] Tìm kiếm nâng cao — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [Task] Tìm kiếm nâng cao — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [Task] Tìm kiếm nâng cao — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Bùi Văn Đoàn | [Task] Tìm kiếm nâng cao — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-038: Xác nhận lệnh nhập
*   **Người phụ trách chính:** Ngô Doãn Hồng Hiệp (`hiepndh`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Ngô Doãn Hồng Hiệp | [AI] [BE] Xác nhận lệnh nhập | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [AI] [Mobile] Xác nhận lệnh nhập | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [AI] [FE] Xác nhận lệnh nhập | Dev Frontend | 32h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | Xác nhận lệnh nhập — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | Xác nhận lệnh nhập — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xác nhận lệnh nhập — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Xác nhận lệnh nhập — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Xác nhận lệnh nhập — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Xác nhận lệnh nhập — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Xác nhận lệnh nhập — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-039: Duyệt lịch giao việc / Giao việc tự động rule-based
*   **Người phụ trách chính:** Nguyễn Tấn Đông (`dongnt30`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h
*   *(Không có sub-task)*

### 🎯 US-040: Kiểm hàng & Ký BBBG
*   **Người phụ trách chính:** Nguyễn Văn Trường (`truongnv51`)
*   **Điểm Story Point:** 13.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Nguyễn Văn Trường | [AI] [Mobile] Kiểm hàng & Ký BBBG | Dev Flutter | 32h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | [AI] [BE] Kiểm hàng & Ký BBBG | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [AI] [Mobile] Kiểm hàng & Ký BBBG | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [FE] Kiểm hàng & Ký BBBG | Dev Frontend | 32h | ⬜ Chưa làm |
| Nguyễn Văn Trường | Kiểm hàng & Ký BBBG — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Nguyễn Văn Trường | Kiểm hàng & Ký BBBG — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Kiểm hàng & Ký BBBG — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Kiểm hàng & Ký BBBG — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Kiểm hàng & Ký BBBG — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Kiểm hàng & Ký BBBG — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Kiểm hàng & Ký BBBG — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Kiểm hàng & Ký BBBG — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Kiểm hàng & Ký BBBG — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-041: Dỡ hàng
*   **Người phụ trách chính:** Bùi Văn Đoàn (`doanbv2`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Bùi Văn Đoàn | [AI] [Mobile] Dỡ hàng | Dev Flutter | 32h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | [AI] [BE] Dỡ hàng | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Dỡ hàng — [AI] [BE] [Order] API Dashboard | Dev Backend | 32h | ⬜ Chưa làm |
| Bùi Văn Đoàn | Dỡ hàng — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Bùi Văn Đoàn | Dỡ hàng — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Dỡ hàng — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Dỡ hàng — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Dỡ hàng — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Dỡ hàng — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Dỡ hàng — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-042: Đưa vào khu chờ nhập
*   **Người phụ trách chính:** Ninh Văn Hòa (`hoanv68`)
*   **Điểm Story Point:** 3.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Ninh Văn Hòa | [Mobile] Đưa vào khu chờ nhập | Dev Flutter | 32h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | [BE] Đưa vào khu chờ nhập | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | [FE] Đưa vào khu chờ nhập | Dev Frontend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | Đưa vào khu chờ nhập — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Đưa vào khu chờ nhập — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Đưa vào khu chờ nhập — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Đưa vào khu chờ nhập — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Đưa vào khu chờ nhập — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Đưa vào khu chờ nhập — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Đưa vào khu chờ nhập — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-043: Thực nhập kho
*   **Người phụ trách chính:** Hoàng Tuấn Anh (`anhht124`)
*   **Điểm Story Point:** 13.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Hoàng Tuấn Anh | [BE] Thực nhập kho | Dev Backend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | [Mobile] Thực nhập kho | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | [FE] Thực nhập kho | Dev Frontend | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Thực nhập kho — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Thực nhập kho — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Ninh Văn Hòa | Thực nhập kho — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Thực nhập kho — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Thực nhập kho — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Thực nhập kho — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Thực nhập kho — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-044: Trình ký VOffice
*   **Người phụ trách chính:** Ngô Doãn Hồng Hiệp (`hiepndh`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Ngô Doãn Hồng Hiệp | [BE] Trình ký VOffice | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Văn Trường | [Mobile] Trình ký VOffice | Dev Flutter | 32h | ⬜ Chưa làm |
| Nguyễn Phan Dương | [FE] Trình ký VOffice | Dev Frontend | 32h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | Trình ký VOffice — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | Trình ký VOffice — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Nguyễn Văn Trường | Trình ký VOffice — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Nguyễn Văn Trường | Trình ký VOffice — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Trình ký VOffice — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Phan Dương | Trình ký VOffice — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Ngô Doãn Hồng Hiệp | Trình ký VOffice — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-045: Đưa hàng ra khu đóng gói
*   **Người phụ trách chính:** Ninh Văn Hòa (`hoanv68`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Ninh Văn Hòa | [Mobile] Đưa hàng ra khu đóng gói | Dev Flutter | 32h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | [BE] Đưa hàng ra khu đóng gói | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | [FE] Đưa hàng ra khu đóng gói | Dev Frontend | 32h | ⬜ Chưa làm |
| Ninh Văn Hòa | Đưa hàng ra khu đóng gói — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Ninh Văn Hòa | Đưa hàng ra khu đóng gói — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Đưa hàng ra khu đóng gói — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Đưa hàng ra khu đóng gói — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Đưa hàng ra khu đóng gói — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Huy Tùng | Đưa hàng ra khu đóng gói — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Đỗ Thế Nhuận | Đưa hàng ra khu đóng gói — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-046: Đóng gói hàng & In tem
*   **Người phụ trách chính:** Bùi Văn Đoàn (`doanbv2`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Bùi Văn Đoàn | [Mobile] Đóng gói hàng & In tem | Dev Flutter | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | [BE] Đóng gói hàng & In tem | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Trung Quang | [FE] Đóng gói hàng & In tem | Dev Frontend | 32h | ⬜ Chưa làm |
| Bùi Văn Đoàn | Đóng gói hàng & In tem — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Bùi Văn Đoàn | Đóng gói hàng & In tem — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Đóng gói hàng & In tem — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Đóng gói hàng & In tem — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Nguyễn Trung Quang | Đóng gói hàng & In tem — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Trung Quang | Đóng gói hàng & In tem — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Trung Quang | Đóng gói hàng & In tem — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 US-047: Đưa vào lưu trữ / Putaway
*   **Người phụ trách chính:** Bùi Văn Đoàn (`doanbv2`)
*   **Điểm Story Point:** 13.0 SP
*   **Thời gian ước lượng:** 80h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Bùi Văn Đoàn | [Mobile] Đưa vào lưu trữ / Putaway | Dev Flutter | 32h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | [BE] Đưa vào lưu trữ / Putaway | Dev Backend | 32h | ⬜ Chưa làm |
| Nguyễn Trung Quang | [FE] Đưa vào lưu trữ / Putaway | Dev Frontend | 32h | ⬜ Chưa làm |
| Bùi Văn Đoàn | Đưa vào lưu trữ / Putaway — [Mobile] Code manual sau khi gen AI | Dev Flutter | 8h | ⬜ Chưa làm |
| Bùi Văn Đoàn | Đưa vào lưu trữ / Putaway — [Mobile] Q&A | Dev Flutter | 24h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Đưa vào lưu trữ / Putaway — [BE] Code manual sau khi gen AI | Dev Backend | 8h | ⬜ Chưa làm |
| Hoàng Tuấn Anh | Đưa vào lưu trữ / Putaway — [BE] Q&A | Dev Backend | 24h | ⬜ Chưa làm |
| Nguyễn Trung Quang | Đưa vào lưu trữ / Putaway — [FE] Code manual sau khi gen AI | Dev Frontend | 8h | ⬜ Chưa làm |
| Nguyễn Trung Quang | Đưa vào lưu trữ / Putaway — [FE] Q&A | Dev Frontend | 24h | ⬜ Chưa làm |
| Nguyễn Trung Quang | Đưa vào lưu trữ / Putaway — [BA] BA test UAT | BA | 16h | ⬜ Chưa làm |

### 🎯 PREP-STORY: Xây dựng nghiệp vụ module Dashboard
*   **Người phụ trách chính:** Đào Đình Hà (`hadd`)
*   **Điểm Story Point:** 8.0 SP
*   **Thời gian ước lượng:** 40h

| Mã NV / Tên | Nhiệm vụ chi tiết | Vai trò | Ước lượng | Trạng thái |
|---|---|---|:---:|:---:|
| Đào Đình Hà | Xây dựng nghiệp vụ module Dashboard — BA - Dashboard tổng quan - Tổng hợp danh sách cảnh báo | BA | 8h | ⬜ Chưa làm |
| Đào Đình Hà | Xây dựng nghiệp vụ module Dashboard — BA - Dashboard quy hoạch kho - Thiết kế format | BA | 16h | ⬜ Chưa làm |
| Đào Đình Hà | Xây dựng nghiệp vụ module Dashboard — BA - Dashboard quy hoạch kho - Xây dựng màn hình Lãnh đạo/Admin | BA | 16h | ⬜ Chưa làm |
| Đào Đình Hà | Xây dựng nghiệp vụ module Dashboard — BA - Bàn giao tài liệu URS Dashboard V1.0 | BA | 8h | ⬜ Chưa làm |

---

## 2. Năng lực & Phân bổ công việc (Workload Breakdown)

Tổng số giờ ước lượng tích lũy từ các sub-task trong Sprint 1 là **5952 giờ**.
Dưới đây là bảng phân bổ chi tiết cho từng thành viên:

| STT | Họ tên | Account | Vai trò | Giờ cam kết | Năng lực Sprint 1 | Trạng thái tải |
|:---:|---|---|---|:---:|:---:|---|
| 1 | Bùi Văn Đoàn | doanbv2 | Dev Flutter | 480h | 99h | 🔴 Quá tải |
| 2 | Hoàng Tuấn Anh | anhht124 | Dev Backend | 632h | 99h | 🔴 Quá tải |
| 3 | Lê Hoàng Đức | duclh14 | Dev Frontend | 728h | 84h | 🔴 Quá tải |
| 4 | Lê Minh Quang | quanglm10 | BA | 80h | 49h | 🔴 Quá tải |
| 5 | Nguyễn Duy | duyn127 | Tester | 0h | 99h | 🟢 Nhẹ tải |
| 6 | Nguyễn Huy Tùng | tungnh26 | Dev Frontend | 304h | 127h | 🔴 Quá tải |
| 7 | Nguyễn Phan Dương | duongnp | Dev Frontend | 472h | 94h | 🔴 Quá tải |
| 8 | Nguyễn Thành Chiến | chiennt11 | Dev Backend | 440h | 80h | 🔴 Quá tải |
| 9 | Nguyễn Trung Quang | quangnt23 | Dev Frontend | 176h | 127h | 🔴 Quá tải |
| 10 | Nguyễn Tấn Đông | dongnt30 | Dev | 0h | 80h | 🟢 Nhẹ tải |
| 11 | Nguyễn Văn Trường | truongnv51 | Dev Flutter | 448h | 162h | 🔴 Quá tải |
| 12 | Ngô Doãn Hồng Hiệp | hiepndh | Dev Backend | 432h | 99h | 🔴 Quá tải |
| 13 | Ninh Văn Hòa | hoanv68 | Dev Flutter | 792h | 127h | 🔴 Quá tải |
| 14 | Trần Minh Quân | quantm18 | BA | 368h | 82h | 🔴 Quá tải |
| 15 | Đào Đình Hà | hadd | BA | 320h | 127h | 🔴 Quá tải |
| 16 | Đỗ Thế Nhuận | nhuandt | Dev Backend | 280h | 99h | 🔴 Quá tải |

---

## 3. Definition of Done (áp dụng cho mọi hạng mục)

- [ ] **BA:** Đặc tả URD/SRS được cập nhật đầy đủ, chuyển giao cho Dev & Test hiểu đúng nghiệp vụ.
- [ ] **Dev:** Code hoàn thành, không có lỗi cảnh báo nghiêm trọng (Critical/Major), API spec và SQL schema đồng bộ.
- [ ] **Test:** Kế hoạch kiểm thử & Test Case hoàn thành, thực hiện kiểm thử UAT và ký xác nhận lỗi.
- [ ] **POP/PM:** Bản demo hoặc biên bản nghiệm thu được PM xác nhận đạt yêu cầu.
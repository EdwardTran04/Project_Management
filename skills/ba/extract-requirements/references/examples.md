# Ví dụ điền đầy đủ — Requirements Register

> File tách khỏi SKILL.md để giữ skill nhẹ. **Chỉ đọc khi cần một khuôn điền mẫu cụ thể**
> (vd domain lạ, hoặc muốn đối chiếu cách gom business object + cách viết bullet "Hệ thống PHẢI…").
> Quy tắc gom nhóm, phân loại FR/NFR, chấm chất lượng đã nằm đủ ở SKILL.md §3–§5.

Ví dụ dưới đây cho hệ thống **Onboarding nhân viên mới (NVM)**.

## A. Danh sách yêu cầu chức năng (FR) — Tên = "Quản lý + business object"

| STT | Mã yêu cầu | Tên yêu cầu | Mô tả yêu cầu | Mức độ ưu tiên | Tần suất sử dụng |
|-----|------------|-------------|---------------|:--------------:|:----------------:|
| 1 | FR-001 | Quản lý thông tin nhân viên mới | - Hệ thống PHẢI cho phép thêm/cập nhật/lưu trữ hồ sơ nhân viên mới.<br>- Hệ thống PHẢI tổng hợp kết quả khảo sát, học/thi hội nhập, đánh giá, nghỉ việc theo từng NVM.<br>- Hệ thống PHẢI cho phép tra cứu/truy cập dữ liệu NVM nhanh chóng. | 1 | Thường xuyên |
| 2 | FR-002 | Quản lý tiến trình onboard | - Hệ thống PHẢI cấu hình linh hoạt các bước workflow, cá thể hóa theo chức danh/nhân sự.<br>- Hệ thống PHẢI phân bổ công việc theo kế hoạch, theo dõi trạng thái, cảnh báo khi quá hạn.<br>- Hệ thống PHẢI hiển thị tiến trình onboard trên biểu đồ (ai làm gì, tiến độ, chậm/phát sinh).<br>- Hệ thống PHẢI thông báo P.TCCT sau 1 tuần và lặp sau 1 tháng nếu thiếu thông tin NVM. | 1 | Thường xuyên |
| 3 | FR-003 | Quản lý ticket giao việc | - Hệ thống PHẢI cho phép tạo nhanh/import danh sách công việc (việc gì, giao ai, deadline).<br>- Hệ thống PHẢI cho đầu mối cập nhật kết quả công việc (hoàn thành/chưa, lý do).<br>- Hệ thống PHẢI cảnh báo theo ngưỡng quy định. | 1 | Thường xuyên |
| 4 | FR-004 | Quản lý khảo sát & email tự động | - Hệ thống PHẢI gửi khảo sát tự động theo rule (onboard 1 tuần, 1 tháng…).<br>- Hệ thống PHẢI gửi email chào mừng/nhắc lịch học/hoàn thành thi tự động.<br>- Hệ thống PHẢI tổng hợp kết quả thành báo cáo/biểu đồ. | 1 | Thường xuyên |
| 5 | FR-005 | Quản lý mentor/buddy | - Hệ thống PHẢI cho NVM chọn mentor từ pool; mỗi mentor tối đa 3 NVM cùng lúc.<br>- Hệ thống PHẢI cho mentor & NVM xác nhận hướng dẫn trên hệ thống.<br>- Hệ thống PHẢI cho NVM chấm điểm mentor.<br>- Hệ thống PHẢI cho P.ĐT assign thủ công khi NVM không chọn được mentor. | 1 | Thường xuyên |
| 6 | FR-006 | Quản lý đánh giá & phản hồi | - Hệ thống PHẢI cho chấm điểm sao (mức hoàn thành từng bộ phận; NVM chấm phòng ban/giai đoạn).<br>- Hệ thống PHẢI cho NVM phản hồi khó khăn, chọn đầu mối giải đáp; hệ thống đề xuất đầu mối, gửi email + CC P.ĐT&PTNL.<br>- Hệ thống PHẢI hiển thị khung năng lực NVM sau thử việc. | 1 | Thường xuyên |
| 7 | FR-007 | Quản lý khóa học & đào tạo hội nhập | - Hệ thống PHẢI quản lý khóa học, nội dung đào tạo, kế hoạch học/thi hội nhập. | 1 | Thường xuyên |
| 8 | FR-008 | Quản lý báo cáo & phân tích dữ liệu | - Hệ thống PHẢI cung cấp công cụ phân tích dữ liệu, đánh giá hiệu quả khóa học/onboard.<br>- Hệ thống PHẢI hỗ trợ ra quyết định cải thiện chất lượng onboard. | 1 | Thường xuyên |

## B. Danh sách yêu cầu phi chức năng (NFR) — đặt tên theo nhóm chất lượng

| STT | Mã yêu cầu | Tên yêu cầu | Mô tả yêu cầu (kèm chỉ số đo & mục tiêu) | Mức độ ưu tiên | Tần suất sử dụng |
|-----|--------------|-------------|------------------------------------------|:--------------:|:----------------:|
| 1 | NFR-001 | Độ tin cậy & sẵn sàng | Hệ thống PHẢI luôn sẵn sàng phục vụ — Uptime ≥ 99.5%/tháng. | 1 | - |
| 2 | NFR-002 | Hiệu năng & chịu tải | Hệ thống PHẢI đáp ứng ≥ 500 user đồng thời, p95 truy vấn < 2s. | 1 | - |
| 3 | NFR-003 | Khả dụng (UX) | Hệ thống PHẢI có giao diện dễ dùng — [CẦN ĐO] vd tác vụ chính ≤ 3 click; SUS ≥ 80. | 2 | - |

## Đánh giá chất lượng & yêu cầu cần làm lại

- ✅ Tốt: phần lớn FR đã rõ thao tác, kiểm thử được; NFR-001/.2 có chỉ số đo.
- ⚠️ FR-006: bullet "khung năng lực sau thử việc" cần làm rõ nguồn dữ liệu khung năng lực.
- ⚠️ NFR-003: "dễ dùng" chưa đo được → chốt chỉ số mục tiêu.
- 💡 Chatbot AI trả lời tự động cho NVM: chưa rõ thuộc BO nào → đề xuất tách "Quản lý hỗ trợ/Chatbot" nếu là tính năng độc lập.

## Business rules ghi nhận (phần nhỏ)

- Mỗi mentor hướng dẫn tối đa 3 NVM cùng lúc.
- Cảnh báo P.TCCT lặp lại sau 1 tuần / 1 tháng nếu thiếu thông tin NVM.
→ chi tiết dùng `extract-business-rules`.

## ❓ Câu hỏi mở → prepare-question

- [các điểm [GIẢ ĐỊNH]/[CẦN ĐO]/[CẦN LÀM RÕ] gom thành câu hỏi khảo sát]
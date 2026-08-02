# Khung gợi ý và câu hỏi làm rõ

Sử dụng tài liệu này khi nhận yêu cầu tự do và cần dẫn dắt người dùng chốt phạm vi trước khi sinh bộ tài liệu.

## 1. Tóm tắt hiểu biết ban đầu

Trước khi hỏi, luôn viết 3-5 dòng:
- Bài toán đang được hiểu là gì
- Đối tượng người dùng dự kiến là ai
- Giá trị kinh doanh có thể nhắm tới
- Các module/capability có thể liên quan

## 2. Gợi ý phạm vi chuẩn theo domain

### Phần mềm quản lý tri thức
- Quản lý kho tri thức theo chuyên mục
- Tìm kiếm và lọc tài liệu
- Versioning tài liệu
- Quy trình phê duyệt xuất bản
- Phân quyền xem/sửa/xuất bản
- Bình luận / phản hồi
- Theo dõi lượt xem và mức độ hữu ích
- FAQ / bài viết / hướng dẫn sử dụng
- Tagging và related content
- Audit log

### Phần mềm quản lý nhân sự
- Hồ sơ nhân viên
- Cơ cấu tổ chức
- Hợp đồng lao động
- Tuyển dụng
- Onboarding / offboarding
- Chấm công
- Nghỉ phép
- Đánh giá hiệu suất
- Khen thưởng / kỷ luật
- Dashboard / báo cáo
- Phân quyền và audit log

## 3. Câu hỏi làm rõ bắt buộc

### A. Mục tiêu và phạm vi
1. Mục tiêu kinh doanh chính của hệ thống là gì?
2. Release đầu tiên cần tập trung vào những phân hệ nào?
3. Có chức năng nào chắc chắn nằm ngoài phạm vi giai đoạn 1 không?

### B. Người dùng và phân quyền
1. Hệ thống có những vai trò nào?
2. Mỗi vai trò được xem, tạo, sửa, duyệt, xuất bản hay xóa những gì?
3. Có cần cơ chế phê duyệt nhiều cấp không?

### C. Quy trình nghiệp vụ
1. Quy trình hiện tại đang được vận hành như thế nào?
2. Những pain point chính là gì?
3. Có quy trình trạng thái nào bắt buộc phải tuân theo không?

### D. Dữ liệu
1. Những đối tượng dữ liệu lõi cần quản lý là gì?
2. Có cần import/export dữ liệu không?
3. Có cần lưu lịch sử thay đổi hay version không?

### E. Tích hợp
1. Có tích hợp với hệ thống nào khác không?
2. Có cần đăng nhập một lần, email, chat, storage, chữ ký số, ERP, CRM hay HRM hiện có không?

### F. Báo cáo và thông báo
1. Cần báo cáo nào ở mức quản trị?
2. Có cần notification/email/reminder không?
3. Có cần dashboard theo thời gian thực không?

### G. Phi chức năng
1. Yêu cầu bảo mật/dữ liệu nhạy cảm là gì?
2. Dự kiến số lượng người dùng và tải hệ thống?
3. Có yêu cầu audit log, backup, HA, SLA, phân quyền chi tiết không?

## 4. Cách đặt câu hỏi

- Hỏi theo cụm nhỏ, không dồn quá nhiều chi tiết kỹ thuật trong một lần.
- Nếu miền bài toán phổ biến, đưa ra lựa chọn gợi ý để người dùng xác nhận nhanh.
- Nếu người dùng muốn tốc độ, cho phép chọn “Sinh bản nháp theo giả định tốt nhất”.

## 5. Mẫu phản hồi mở đầu khuyến nghị

```markdown
## Tóm tắt yêu cầu đã hiểu
[3-5 dòng diễn giải]

## Gợi ý phạm vi đề xuất
- [gợi ý 1]
- [gợi ý 2]
- [gợi ý 3]

## Các câu hỏi cần xác nhận
1. [câu hỏi]
2. [câu hỏi]
3. [câu hỏi]

## Giả định tạm thời nếu tạo bản nháp ngay
- [giả định]
- [giả định]
```

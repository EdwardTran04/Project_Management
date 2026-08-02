# Use Case Mẫu

> 2 UC mẫu đầy đủ minh họa cách áp dụng template 8 trường (tiếng Việt).
> Adapt domain và thuật ngữ cho phù hợp với dự án thực tế.

---

## UC-HOC-01: Mua khóa học

| Trường | Nội dung |
|--------|----------|
| **Use Case ID** | UC-HOC-01 |
| **Tên Use Case** | Mua khóa học |
| **Tác nhân** | Người dùng (đã đăng ký tài khoản, email đã xác thực) |
| **Mô tả ngắn gọn** | Use case bắt đầu khi người dùng quan tâm đến một khóa học và muốn mua. Người dùng xem thông tin chi tiết khóa học, cung cấp thông tin thanh toán và hoàn tất giao dịch. Use case kết thúc khi người dùng hoàn tất việc mua khóa học và được cấp quyền truy cập vào nội dung khóa học. |

**Điều kiện tiên quyết**:
1. Người dùng đã đăng nhập vào hệ thống với email đã xác thực
2. Khóa học đang ở trạng thái đã xuất bản và còn chỗ
3. Cổng thanh toán đang khả dụng (health check = OK)

**Luồng chính**:
1. Người dùng xem danh sách các khóa học có sẵn.
2. Người dùng chọn một khóa học cụ thể.
3. Hệ thống hiển thị thông tin chi tiết về khóa học đó: tên, giá gốc, ưu đãi áp dụng, nội dung.
4. Người dùng xem thông tin chi tiết và nhấn nút **Mua khóa học**.
5. Hệ thống hiển thị màn hình **Thông tin thanh toán** và yêu cầu người dùng cung cấp thông tin thanh toán.
6. Người dùng cung cấp thông tin thanh toán và nhấn **Xác nhận thanh toán**.
7. Hệ thống xác nhận thanh toán với cổng thanh toán.
8. Hệ thống tạo bản ghi đăng ký với trạng thái 'Kích hoạt' và cấp quyền truy cập vào khóa học.
9. Hệ thống hiển thị màn hình **Mua thành công** và gửi email chào mừng đến địa chỉ đã đăng ký của người dùng.
10. Use case kết thúc.

**Luồng thay thế**:

*UC-HOC-01.AC.1: Người dùng không tìm thấy khóa học mong muốn*
Tại bước 1 của luồng chính, nếu người dùng không tìm thấy khóa học mong muốn:
1a. Người dùng thực hiện tìm kiếm lại với từ khóa hoặc bộ lọc khác.
→ quay lại bước 1 của luồng chính.
1b. Hoặc người dùng quyết định không mua khóa học và thoát.
→ Use case kết thúc.

*UC-HOC-01.AC.2: Người dùng thanh toán bằng voucher doanh nghiệp*
Tại bước 6 của luồng chính, nếu người dùng chọn **Voucher doanh nghiệp**:
6a. Hệ thống hiển thị ô nhập mã voucher.
6b. Người dùng nhập mã và nhấn **Áp dụng**.
6c. Hệ thống xác thực voucher phía server (hạn dùng, phạm vi áp dụng, số lượt còn lại) và cập nhật tổng tiền về 0 VND.
→ quay lại bước 8 của luồng chính (không gọi cổng thanh toán).

*UC-HOC-01.AC.3: Người dùng không hoàn tất thanh toán*
Tại bước 6 của luồng chính, nếu người dùng hủy thanh toán:
6a. Người dùng nhấn nút **Hủy**.
6b. Hệ thống hủy việc mua khóa học và quay về trang chi tiết khóa học.
→ Use case kết thúc.

**Luồng ngoại lệ**:

*UC-HOC-01.EX.1: Hệ thống gặp lỗi khi xử lý thanh toán*
Trigger: Tại bước 7, cổng thanh toán trả về lỗi hoặc TIMEOUT sau 30 giây.
Xử lý: Hệ thống hiển thị "Không thể xử lý thanh toán. Thẻ của bạn chưa bị trừ tiền. Vui lòng thử lại hoặc liên hệ bộ phận hỗ trợ."
Trạng thái cuối: Không tạo bản ghi đăng ký. Không trừ tiền. Người dùng quay về màn hình **Thông tin thanh toán**.

*UC-HOC-01.EX.2: Khóa học hết chỗ giữa luồng*
Trigger: Tại bước 8, hệ thống phát hiện khóa học vừa đạt giới hạn số lượng học viên.
Xử lý: Hệ thống hiển thị "Rất tiếc, khóa học vừa hết chỗ. Tham gia danh sách chờ để được thông báo khi có chỗ trống."
Trạng thái cuối: Tiền được hoàn trong vòng 1 ngày làm việc. Không tạo bản ghi đăng ký. Hiển thị tùy chọn danh sách chờ.

*UC-HOC-01.EX.3: Lỗi cấp quyền truy cập sau khi thanh toán*
Trigger: Tại bước 8, hệ thống quản lý khóa học (LMS) không khả dụng.
Xử lý: Hệ thống đưa việc cấp quyền vào hàng đợi retry tự động (tối đa 30 phút) và hiển thị "Khóa học đang được kích hoạt. Bạn sẽ nhận email khi có quyền truy cập."
Trạng thái cuối: Thanh toán hoàn tất. Quyền truy cập được cấp bất đồng bộ. Người dùng được thông báo qua email.

---

## UC-MENTOR-03: Phê duyệt yêu cầu hẹn của học viên

| Trường | Nội dung |
|--------|----------|
| **Use Case ID** | UC-MENTOR-03 |
| **Tên Use Case** | Phê duyệt yêu cầu hẹn của học viên |
| **Tác nhân** | Mentor (đã được chứng nhận, tài khoản đang hoạt động) |
| **Mô tả ngắn gọn** | Use case bắt đầu khi mentor mở danh sách yêu cầu hẹn 1-1 đang chờ xử lý. Mentor xem chi tiết yêu cầu, kiểm tra lịch và quyết định phê duyệt. Use case kết thúc khi học viên được thông báo kết quả và — nếu được duyệt — buổi hẹn được xác nhận trên lịch của cả hai bên. |

**Điều kiện tiên quyết**:
1. Tồn tại ít nhất 1 yêu cầu hẹn đang ở trạng thái 'Chờ xử lý' của mentor này
2. Mentor đã đăng nhập với tài khoản đã chứng nhận, đang hoạt động
3. Dịch vụ lịch (Calendar Service) đang khả dụng

**Luồng chính**:
1. Mentor mở mục **Yêu cầu chờ xử lý**.
2. Hệ thống hiển thị danh sách yêu cầu: tên học viên, chủ đề, ngày/giờ mong muốn, thời điểm gửi.
3. Mentor chọn một yêu cầu để xem.
4. Hệ thống hiển thị chi tiết yêu cầu: hồ sơ học viên, chủ đề, khung giờ, lịch sử buổi hẹn.
5. Hệ thống kiểm tra học viên còn ít nhất 1 lượt hẹn trong gói đăng ký.
6. Mentor nhấn **Phê duyệt**.
7. Hệ thống đặt lịch khung giờ trên lịch của cả mentor và học viên.
8. Hệ thống cập nhật trạng thái yêu cầu thành 'Đã xác nhận'.
9. Hệ thống gửi thông báo xác nhận đến học viên qua email và in-app, đồng thời hiển thị "Đã phê duyệt. Buổi hẹn được xác nhận vào [ngày/giờ]."
10. Use case kết thúc.

**Luồng thay thế**:

*UC-MENTOR-03.AC.1: Mentor từ chối yêu cầu*
Tại bước 6 của luồng chính, nếu mentor không thể nhận buổi hẹn:
6a. Mentor nhấn **Từ chối** và nhập lý do (tối đa 500 ký tự).
6b. Hệ thống cập nhật trạng thái yêu cầu thành 'Đã từ chối' và gửi thông báo kèm lý do đến học viên.
→ Use case kết thúc.

**Luồng ngoại lệ**:

*UC-MENTOR-03.EX.1: Học viên hết lượt hẹn tại thời điểm phê duyệt*
Trigger: Tại bước 5, hệ thống phát hiện lượt hẹn của học viên = 0 (đã dùng hết giữa lúc gửi yêu cầu và lúc duyệt).
Xử lý: Hệ thống hiển thị "Học viên này đã hết lượt hẹn. Bạn không thể phê duyệt yêu cầu này."
Trạng thái cuối: Yêu cầu chuyển trạng thái 'Đã hủy — Hết lượt'. Học viên được thông báo tự động.

*UC-MENTOR-03.EX.2: Xung đột lịch*
Trigger: Tại bước 7, dịch vụ lịch trả về CONFLICT (đã có sự kiện khác trong khung giờ).
Xử lý: Hệ thống hiển thị "Phát hiện xung đột lịch. Khung giờ này không còn trống."
Trạng thái cuối: Yêu cầu quay về trạng thái 'Chờ xử lý'. Mentor được gợi ý liên hệ học viên để đổi lịch.

*UC-MENTOR-03.EX.3: Xung đột phê duyệt đồng thời*
Trigger: Tại bước 8, một phiên khác đã phê duyệt yêu cầu trùng khung giờ cho cùng học viên.
Xử lý: Hệ thống từ chối lượt phê duyệt thứ hai và hiển thị "Khung giờ này vừa được xác nhận bởi một buổi hẹn khác."
Trạng thái cuối: Chỉ lượt phê duyệt đầu tiên được ghi nhận. Lượt thứ hai bị rollback. Mentor được thông báo.

---
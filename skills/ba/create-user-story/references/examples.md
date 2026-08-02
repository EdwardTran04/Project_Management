# Ví dụ User Story mẫu (bản gọn, 100% tiếng Việt)

> Các ví dụ minh họa văn phong chuẩn cần bám theo: từ khóa tiếng Việt,
> persona cụ thể, số liệu đo lường được, đủ 3 loại AC.
> Adapt domain cho phù hợp với dự án thực tế.

---

## Ví dụ 1: Đăng ký khóa học

**US-001: Đăng ký và thanh toán khóa học**  ·  REQ-012 · Độ ưu tiên: Bắt buộc

**Với vai trò là** học viên đã xác thực email và có ví điện tử liên kết
**Tôi muốn** mua và thanh toán khóa học trong vòng 2 bước
**Để** tôi truy cập ngay nội dung học mà không cần chờ xét duyệt thủ công

**AC1: Thanh toán thành công — Luồng chính**
- **Bối cảnh** học viên đã đăng nhập, chọn khóa học "BA Cơ bản", ví điện tử đủ số dư
- **Khi** học viên nhấn "Mua ngay" và xác nhận thanh toán
- **Thì** hệ thống tạo ghi danh với trạng thái Active trong vòng 3 giây
- **Và** học viên được chuyển đến trang bài học đầu tiên của khóa học

**AC2: Thanh toán bằng voucher — Trường hợp biên**
- **Bối cảnh** học viên có voucher giảm 100% học phí còn hiệu lực
- **Khi** học viên nhập mã voucher và xác nhận
- **Thì** hệ thống xác thực voucher phía máy chủ, tổng tiền thanh toán = 0 VND
- **Và** ghi danh được tạo ngay, không qua cổng thanh toán

**AC3: Ví không đủ số dư — Luồng lỗi**
- **Bối cảnh** học viên chọn khóa học 500.000 VND, ví chỉ còn 100.000 VND
- **Khi** học viên nhấn "Mua ngay"
- **Thì** hệ thống hiển thị thông báo "Số dư không đủ. Vui lòng nạp thêm hoặc chọn phương thức khác."
- **Và** không có giao dịch nào được tạo

---

## Ví dụ 2: Đặt lịch cố vấn

**US-002: Đặt buổi tư vấn 1-1 với cố vấn**

**Với vai trò là** học viên gói Premium đang theo khóa học BA
**Tôi muốn** chọn cố vấn và đặt lịch buổi tư vấn 1-1
**Để** tôi được hỗ trợ trực tiếp cho phần nghiệp vụ còn chưa rõ

**AC1: Đặt lịch thành công — Luồng chính**
- **Bối cảnh** học viên còn 1 lượt tư vấn trong tháng, cố vấn có khung giờ trống ngày mai 10:00
- **Khi** học viên chọn khung giờ, nhập chủ đề (≤500 ký tự), nhấn "Gửi yêu cầu"
- **Thì** hệ thống tạo yêu cầu tư vấn trạng thái Pending_Mentor_Review
- **Và** cố vấn nhận thông báo trong vòng 60 giây

**AC2: Khung giờ vừa bị người khác đặt — Trường hợp biên**
- **Bối cảnh** học viên đang xem khung giờ 10:00, khung này vừa bị học viên khác đặt
- **Khi** học viên nhấn "Gửi yêu cầu"
- **Thì** hệ thống hiển thị "Khung giờ này vừa được đặt. Vui lòng chọn khung giờ khác."
- **Và** trang lịch tự làm mới, đánh dấu các khung giờ còn trống

**AC3: Hết lượt tư vấn — Luồng lỗi**
- **Bối cảnh** học viên đã dùng hết 2/2 lượt tư vấn trong tháng
- **Khi** học viên truy cập trang đặt lịch
- **Thì** hệ thống hiển thị "Bạn đã dùng hết lượt tư vấn tháng này. Lượt mới được cấp lại vào 01/06."
- **Và** nút "Đặt lịch" bị vô hiệu hóa

---

## Ví dụ 3: Xuất chứng chỉ

**US-003: Nhận chứng chỉ hoàn thành khóa học**

**Với vai trò là** học viên đã hoàn thành 100% bài học và đạt ≥70% bài kiểm tra cuối
**Tôi muốn** tải chứng chỉ hoàn thành cá nhân hóa
**Để** tôi có bằng chứng cho hồ sơ năng lực và hồ sơ xin việc

**AC1: Tải chứng chỉ — Luồng chính**
- **Bối cảnh** học viên hoàn thành 100% bài học, điểm bài thi = 85%
- **Khi** học viên vào tab "Chứng chỉ" và nhấn "Tải xuống"
- **Thì** hệ thống tạo file PDF gồm tên học viên, tên khóa học, ngày hoàn thành, mã xác thực duy nhất (CERT-YYYYMMDD-NNNNN)
- **Và** quá trình tải file bắt đầu trong vòng 5 giây

**AC2: Chưa đủ điều kiện — Trường hợp biên**
- **Bối cảnh** học viên hoàn thành 95% bài học (còn 1 bài chưa xem)
- **Khi** học viên vào tab "Chứng chỉ"
- **Thì** hệ thống hiển thị thanh tiến độ "95% — Hoàn thành tất cả bài học để nhận chứng chỉ"
- **Và** nút "Tải xuống" bị vô hiệu hóa

**AC3: Điểm thi không đạt — Luồng lỗi**
- **Bối cảnh** học viên hoàn thành 100% bài học nhưng điểm thi = 60% (dưới 70%)
- **Khi** học viên vào tab "Chứng chỉ"
- **Thì** hệ thống hiển thị "Điểm bài kiểm tra: 60%. Cần đạt ≥70% để nhận chứng chỉ. Bạn có thể làm lại."
- **Và** hiển thị nút "Làm lại bài kiểm tra"

---

## Ví dụ 4: Viết hàng loạt nhiều chức năng

Khi user đưa danh sách nhiều chức năng (ví dụ: "viết story cho: tìm kiếm khóa học,
thêm vào giỏ, thanh toán"), output đúng dạng sau — các khối bản gọn nối tiếp nhau,
không lời dẫn, ghi chú gom cuối:

```
**US-001: Tìm kiếm khóa học theo từ khóa**
[US 3 dòng + AC1/AC2/AC3]

**US-002: Thêm khóa học vào giỏ hàng**
[US 3 dòng + AC1/AC2/AC3]

**US-003: Thanh toán giỏ hàng**
[US 3 dòng + AC1/AC2/AC3]

---
**Giả định & Câu hỏi mở**
- US-001: kết quả tìm kiếm phân trang 20 mục/trang [cần xác nhận]
- US-003: chưa rõ các phương thức thanh toán được hỗ trợ — cần PO làm rõ
```

---

## Patterns quan trọng

| Pattern | Áp dụng khi |
|---------|-------------|
| Từ khóa tiếng Việt | Luôn luôn — Với vai trò là / Tôi muốn / Để; Bối cảnh / Khi / Thì / Và |
| Persona cụ thể | Luôn luôn — không bao giờ dùng "người dùng" chung chung |
| Số liệu đo lường | Thời gian (3 giây, 60 giây), tỷ lệ (70%), dung lượng (500 ký tự) |
| 3 loại AC | Luồng chính + Trường hợp biên + Luồng lỗi — không thiếu loại nào |
| Trạng thái rõ ràng | "trạng thái Active", "Pending_Mentor_Review" (tên trạng thái hệ thống được giữ nguyên) thay vì "xử lý xong" |
| Không tác dụng phụ khi lỗi | AC luồng lỗi nêu rõ không giao dịch/dữ liệu nào được tạo |
| Số liệu chưa chốt | Đánh dấu `[cần xác nhận]`, gom vào Câu hỏi mở cuối bài |
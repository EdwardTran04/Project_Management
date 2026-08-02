# Writing Style Guide — Use Cases (Tiếng Việt)

> **Nguyên tắc tối cao: READABILITY FIRST — toàn bộ output bằng tiếng Việt**

---

## Rule 1: Câu chủ động + thì hiện tại

✅ "Người dùng nhấn nút **Mua khóa học**"
❌ "Nút **Mua khóa học** được nhấn bởi người dùng"

✅ "Hệ thống hiển thị màn hình xác nhận"
❌ "Hệ thống sẽ hiển thị..." / "Hệ thống đã hiển thị..."

---

## Rule 2: Chủ ngữ + Động từ + Tân ngữ mỗi bước

Mỗi bước phải bắt đầu bằng chủ ngữ rõ ràng: tên actor hoặc "Hệ thống".

✅ "Người dùng chọn khung giờ hẹn mentor mong muốn"
❌ "Chọn khung giờ hẹn mong muốn" (không có chủ ngữ)

---

## Rule 3: Một bước = một hành động

Nếu có "và" nối 2 hành động khác loại → tách thành 2 bước.

✅ "3. Người dùng nhập chủ đề buổi hẹn (tối đa 500 ký tự)."
✅ "4. Người dùng nhấn nút **Gửi yêu cầu**."
❌ "3. Người dùng điền chủ đề và nhấn Xác nhận."

Lý do: "Nhấn Gửi" thường trigger validation → cần là bước riêng để luồng ngoại lệ có thể gắn vào.

---

## Rule 4: Tránh động từ mơ hồ

| ❌ Mơ hồ | ✅ Cụ thể |
|---------|-----------|
| Quản lý | Tạo / Cập nhật / Lưu trữ / Xem |
| Xử lý | Kiểm tra / Phê duyệt / Từ chối / Chuyển tiếp |
| Thực hiện / Làm | Gửi / Phát hành / Sinh / Tính toán |
| Lấy | Truy xuất / Tải về / Truy vấn |
| Dùng | Áp dụng / Gọi / Quy đổi |

Áp dụng cho cả Tên UC và từng bước trong luồng chính.

---

## Rule 5: Không nhúng chi tiết implementation

UC mô tả **WHAT**, không mô tả **HOW**.

❌ "Hệ thống gọi POST /api/v1/enrollments với header Authorization Bearer {token}..."
✅ "Hệ thống tạo bản ghi đăng ký trong hệ thống quản lý khóa học"

❌ "Hệ thống insert 1 dòng vào tbl_enrollments với các field: enroll_id, course_id..."
✅ "Hệ thống lưu thông tin đăng ký vào cơ sở dữ liệu"

---

## Rule 6: Đánh số nhất quán

- **Luồng chính**: 1, 2, 3... — bước cuối cùng là "Use case kết thúc."
- **Bước con của luồng thay thế**: 5a, 5b, 5c — kết bằng "→ quay lại bước N của luồng chính" hoặc "→ Use case kết thúc."
- **ID luồng thay thế**: UC-XX.AC.N
- **ID luồng ngoại lệ**: UC-XX.EX.N (độc lập, không gắn với bước)
- **Điều kiện tiên quyết**: 1, 2, 3...

---

## Rule 7: Bold tên UI element

✅ "Người dùng nhấn nút **Mua khóa học**"
✅ "Hệ thống hiển thị màn hình **Thông tin thanh toán**"
✅ "Người dùng chọn **Voucher doanh nghiệp** từ dropdown"

Lý do: Dễ trace về wireframe/mockup khi handoff design.

---

## Rule 8: Tránh từ mơ hồ

| ❌ Mơ hồ | ✅ Cụ thể |
|---------|-----------|
| Trong một số trường hợp | Khi [điều kiện X] |
| Có thể | Khi [điều kiện], hệ thống [hành động] |
| Nhanh chóng | Trong vòng X giây |
| Hợp lệ | Đạt các tiêu chí: [liệt kê] |
| Phù hợp | Theo chính sách [tham chiếu] |
| User / Người dùng chung chung | Học viên / Quản trị viên / Quản lý nhân sự / Mentor (role cụ thể) |

---

## Rule 9: Business rules → tách ra khỏi luồng chính

Luồng chính mô tả flow. Business rules (validation, giới hạn, logic) → tham chiếu BR-XX.

❌ "5. Hệ thống kiểm tra: chủ đề ≤ 500 ký tự, lượt hẹn ≥ 1, khung giờ ≥ 2h trong tương lai..."
✅ "5. Hệ thống kiểm tra yêu cầu hẹn theo BR-MENTOR-001."

---

## Rule 10: Hướng dẫn độ dài

| Thành phần | Hướng dẫn |
|------------|-----------|
| Tên UC | 3-7 từ |
| Mô tả ngắn gọn | 2-4 câu, 50-100 từ |
| Luồng chính | 5-15 bước (7-10 điển hình) |
| Mỗi bước | 1 câu, tối đa 2, < 30 từ |
| Luồng thay thế | 1-5 luồng/UC |
| Luồng ngoại lệ | 3-7 luồng/UC |
| Toàn bộ tài liệu UC | 2-5 trang A4 |

Vượt hướng dẫn → tách UC, không nhồi vào 1 UC.

---

## Anti-patterns phổ biến nhất

1. **UC = đặc tả UI từng pixel** → UC nói "Hệ thống hiển thị màn hình **Mua thành công**", không nói màu sắc hay layout
2. **Mix actor + hệ thống trong 1 bước** → "Người dùng chọn khung giờ và hệ thống kiểm tra" → tách 2 bước
3. **Bỏ qua phản hồi của hệ thống** → phải thấy dialog Actor ↔ Hệ thống
4. **Nhúng if/else vào luồng chính** → chuyển sang luồng thay thế hoặc luồng ngoại lệ
5. **Trigger mơ hồ** → "Khi người dùng muốn..." → "Khi người dùng mở tab **Chứng chỉ**..."
6. **Mô tả không có điểm bắt đầu/kết thúc** → luôn viết "UC bắt đầu khi... và kết thúc khi..."
7. **Nhiều hơn 1 actor trong trường Tác nhân** → chỉ giữ actor khởi tạo; hệ thống phụ trợ đưa vào nội dung bước; nếu thực sự cần 2 actor khởi tạo → tách 2 UC
8. **"Hệ thống xử lý..."** → quá mơ hồ → "Hệ thống tạo bản ghi đăng ký và cấp quyền truy cập vào khóa học"
9. **Quên failure modes** → lỗi thanh toán, hết lượt/hết chỗ, timeout dịch vụ ngoài, xung đột đồng thời
10. **Viết lẫn tiếng Anh trong output** → toàn bộ UC bằng tiếng Việt; chỉ giữ nguyên thuật ngữ kỹ thuật không có bản dịch thông dụng (timeout, rollback) và tên UI element theo thiết kế thực tế

---
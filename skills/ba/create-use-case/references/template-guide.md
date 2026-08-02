# Template Guide — 8 Trường

Hướng dẫn điền từng trường của Use Case template (chỉ tiếng Việt), kèm ví dụ đạt/không đạt.

> Template KHÔNG có: Lịch sử, Postconditions, Priority, Frequency, Includes,
> Special Requirements, Assumptions, Notes. Không tự thêm các trường này.

---

## 1. Use Case ID

Format: `UC-<MODULE>-<SEQ>` hoặc `UC-X.Y` (hierarchical)

✅ "UC-HOC-01", "UC-MENTOR-03", "UC-3.2"
❌ "UC1" (thiếu module), "UseCase_MuaKhoaHoc" (nhúng tên)

---

## 2. Tên Use Case

**"Động từ + Đối tượng"** — 3-7 từ, phản ánh mục tiêu chính của tương tác,
mô tả ngắn gọn hành động của người dùng, không chứa tên actor.

✅ "Mua khóa học", "Đặt lịch hẹn mentor 1-1", "Tải chứng chỉ hoàn thành"
❌ "Khóa học" (không có động từ), "Người dùng mua khóa học" (nhúng actor), "Quản lý khóa học" (động từ mơ hồ)

Tránh động từ mơ hồ: quản lý, xử lý, thao tác → thay bằng tạo/cập nhật/xem/phê duyệt/mua/đặt...

---

## 3. Tác nhân (Actor)

**Đúng 1 actor** — đối tượng khởi tạo UC và hưởng lợi từ kết quả. Phải là role cụ thể.

- Không liệt kê secondary actor thành trường riêng.
- Các hệ thống phụ trợ (cổng thanh toán, dịch vụ thông báo, calendar...) chỉ
  xuất hiện trong nội dung các bước của luồng, không đưa vào trường Tác nhân.
- Nếu UC cần 2 actor khởi tạo → tách thành 2 UC.

✅ "Người dùng (đã đăng ký tài khoản, email đã xác thực)"
✅ "Quản lý nhân sự (đối tác doanh nghiệp, có quyền quản trị license)"
❌ "User", "Hệ thống", "Người dùng và cổng thanh toán" (2 actor)

---

## 4. Mô tả ngắn gọn

2-4 câu, súc tích, giúp người đọc hiểu **mục tiêu** và **phạm vi** của UC.
Bắt buộc nêu rõ: **UC bắt đầu khi nào** và **kết thúc khi nào**.

✅ "Use case bắt đầu khi người dùng quan tâm đến một khóa học và muốn mua.
Người dùng xem thông tin chi tiết, cung cấp thông tin thanh toán và hoàn tất
giao dịch. Use case kết thúc khi người dùng hoàn tất việc mua khóa học và
được cấp quyền truy cập."

❌ "UC này nói về việc mua khóa học." (quá ngắn, thiếu điểm bắt đầu/kết thúc)

---

## 5. Điều kiện tiên quyết

Những điều **cần phải thực hiện/phải đúng trước khi UC bắt đầu**.
Đánh số 1, 2, 3... Mỗi điều kiện kiểm chứng được (boolean check).

✅ "1. Người dùng đã đăng nhập với email đã xác thực"
✅ "2. Khóa học đang ở trạng thái đã xuất bản và còn chỗ"
❌ "Hệ thống đang hoạt động" (quá chung chung)
❌ "Người dùng muốn mua khóa học" (động cơ, không phải điều kiện)

---

## 6. Luồng chính (Basic Flow)

**CRITICAL — trường dễ sai nhất.**

Chuỗi các bước tương tác giữa người dùng và hệ thống để đạt được mục tiêu.
Quy tắc:
- Đánh số 1, 2, 3...
- Mỗi bước: 1 action, chủ ngữ rõ (Actor hoặc "Hệ thống"), active voice
- Xen kẽ Actor / Hệ thống — phải thấy dialog hai chiều
- Không nhúng if/else, loop, exception
- Bước 1 = trigger | Bước cuối = "Use case kết thúc."

✅ Ví dụ chuẩn (Mua khóa học):
```
1. Người dùng xem danh sách các khóa học có sẵn.
2. Người dùng chọn một khóa học cụ thể.
3. Hệ thống hiển thị thông tin chi tiết về khóa học đó.
4. Người dùng xem thông tin chi tiết và quyết định mua khóa học.
5. Hệ thống yêu cầu người dùng cung cấp thông tin thanh toán.
6. Người dùng cung cấp thông tin thanh toán.
7. Hệ thống xác nhận thanh toán và cung cấp quyền truy cập vào khóa học.
8. Use case kết thúc.
```

❌ Sai: "5. Nếu là Premium → tất cả mentor; nếu Free → chỉ mentor miễn phí" → chuyển sang luồng thay thế

---

## 7. Luồng thay thế (Alternative Flow)

Các tương tác khác hoặc tình huống đặc biệt cần xử lý — bao gồm cả path khác
vẫn đạt goal và trường hợp người dùng chủ động dừng/hủy.

Format:
```
UC-XX.AC.N: [Tên tình huống]
Tại bước Y của luồng chính, nếu [điều kiện]:
Ya. [bước con]
Yb. [bước con]
→ quay lại bước Z của luồng chính. (hoặc: → Use case kết thúc.)
```

Ví dụ:
```
UC-HOC-01.AC.1: Người dùng không tìm thấy khóa học mong muốn
Tại bước 1 của luồng chính, nếu người dùng không tìm thấy khóa học mong muốn:
1a. Người dùng thực hiện tìm kiếm lại với từ khóa khác.
→ quay lại bước 1 của luồng chính.
1b. Hoặc người dùng quyết định không mua khóa học và thoát.
→ Use case kết thúc.

UC-HOC-01.AC.2: Người dùng không hoàn tất thanh toán
Tại bước 6 của luồng chính, nếu người dùng hủy thanh toán:
6a. Người dùng nhấn nút **Hủy thanh toán**.
6b. Hệ thống hủy việc mua khóa học.
→ Use case kết thúc.
```

---

## 8. Luồng ngoại lệ (Exception Flow)

Tình huống lỗi ngoài ý muốn xảy ra trong quá trình tương tác. Mỗi luồng đủ 3 phần:
1. **Trigger**: Xảy ra khi nào (tại bước N, điều kiện gì)
2. **Xử lý**: Hệ thống làm gì / thông báo gì
3. **Trạng thái cuối**: Kết cục (rollback? ghi log? hướng dẫn người dùng?)

Format:
```
UC-XX.EX.N: [Tên ngoại lệ]
Trigger: Tại bước Y, [điều kiện lỗi].
Xử lý: Hệ thống hiển thị "[thông báo]" và [hành động].
Trạng thái cuối: [mô tả trạng thái — không tạo giao dịch, không trừ tiền, v.v.]
```

Ví dụ:
```
UC-HOC-01.EX.1: Hệ thống gặp lỗi khi xử lý thanh toán
Trigger: Tại bước 7, cổng thanh toán trả về lỗi hoặc timeout.
Xử lý: Hệ thống hiển thị thông báo lỗi và yêu cầu người dùng thử lại
hoặc liên hệ bộ phận hỗ trợ.
Trạng thái cuối: Không có giao dịch nào được ghi nhận. Người dùng không
bị trừ tiền. Quyền truy cập khóa học chưa được cấp.
```

---
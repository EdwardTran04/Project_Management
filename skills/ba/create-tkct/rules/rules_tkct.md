# QUY TẮC THIẾT KẾ CHI TIẾT (TKCT) — chuẩn hoá sâu từng phần

> Luật bất biến, checklist và header bảng đã nằm trong `SKILL.md` — không lặp ở đây.
> File này là phần chuẩn hoá SÂU cho từng section. Chỉ đọc khi cần làm rõ một phần cụ thể.
> Quy tắc viết từng kiểu thành phần UI (Label/Textbox/Dropdown/Date/Button…) tách riêng ở `references/component-spec-rules.md`.

---

## 1. GIỚI THIỆU

**1.1. Mục đích** — nêu rõ: tài liệu đặc tả gì, thuộc phân hệ/hệ thống nào; là đầu vào cho giai đoạn nào (thiết kế / lập trình / kiểm thử); cung cấp những thông tin gì (tổng quan nghiệp vụ, thành phần màn hình, luồng dữ liệu, xử lý sự kiện, trao đổi với phân hệ khác). Kèm bảng đối tượng sử dụng 2 cột (Người sử dụng | Mục đích), tối thiểu: Nhóm phát triển, Nhóm kiểm thử, Nhóm quản lý dự án.

**1.2. Phạm vi** — mô tả thiết kế chi tiết phân hệ/quy trình nào, hệ thống nào, đơn vị nào; là cơ sở cho tài liệu kiểm tra chức năng / kịch bản kiểm tra; mỗi thay đổi ảnh hưởng tới phân tích – thiết kế – lập trình – kiểm thử; tài liệu đồng thời ghi nhận điều kiện kiểm tra chương trình.

**1.3. Khái niệm và thuật ngữ** — liệt kê 100% từ viết tắt + thuật ngữ chuyên ngành xuất hiện trong tài liệu. Bảng 3 cột: Thuật ngữ | Định nghĩa | Ghi chú.

**1.4. Tài liệu tham khảo** — bảng 4 cột: Tên tài liệu | Link | Người gửi | Ngày gửi. Tối thiểu: văn bản quy phạm pháp luật liên quan + link Figma.

**1.5. Mô tả tài liệu** — tóm tắt nội dung 6 phần.

---

## 2. TỔNG QUAN GIẢI PHÁP

**2.1. Tổng quan chức năng** — sơ đồ phân cấp chức năng (Functional Hierarchy Chart, Mermaid) thể hiện các module chính của phân hệ. Cần file chất lượng cao hơn: `skill: create-activity-diagram`.

**2.2. Mô hình giao tiếp với hệ thống/module khác** — với MỖI hệ thống kết nối ghi rõ: hành động nào gọi sang đâu → kết quả trả về là gì → hệ thống xử lý tiếp ra sao. Tối thiểu 2 mục con (tuỳ thực tế dự án):

- *2.2.1. Cổng ứng dụng dùng chung:* từng hành động — đăng nhập, đăng xuất, kiểm tra phân quyền, đồng bộ tài khoản, đồng bộ danh mục. Mỗi hành động: gửi gì → nhận gì → xử lý tiếp.
- *2.2.2. Lakehouse:* từng hành động đồng bộ dữ liệu. Mỗi hành động: gửi gì → nhận gì → xử lý tiếp.

---

## 3. THIẾT KẾ CHI TIẾT

Tổ chức: **3.X** (nhóm chức năng) → **3.X.Y** (chức năng con). Mỗi 3.X.Y đủ 4 mục:

**3.X.Y.1. Thông tin chung** — 3 nội dung:
- *Mô tả:* chức năng cho phép đối tượng nào làm gì.
- *Đường dẫn:* các bước truy cập menu từ đăng nhập tới màn hình chức năng. VD "Đăng nhập → menu A → button B".
- *Phân quyền & miền dữ liệu:* từng role được làm gì; làm rõ logic miền dữ liệu (đơn vị nào thấy/thao tác dữ liệu nào). Liệt kê RIÊNG từng action: Xem, Thêm, Import, Sửa, Xóa, Tìm kiếm, Xuất.

**3.X.Y.2. Màn hình** — link Figma trỏ đúng frame; ảnh giao diện (hoặc `[CẦN BỔ SUNG: ảnh / link Figma]`); template biểu mẫu nếu là Export/Import.

**3.X.Y.3. Mô tả chi tiết các thành phần** — bảng 6 cột (header ở `SKILL.md`). Cách liệt kê + cách viết cột Mô tả theo từng kiểu thành phần: đọc `references/component-spec-rules.md`.

**3.X.Y.4. Luồng nghiệp vụ** — Mermaid `flowchart TD` (tổng quan) + bảng 4 cột (Bước | Tác nhân | Hành động | Kết quả/Phản ứng hệ thống). Mọi nhánh điều kiện (TH1, TH2…) ghi rõ điều kiện rẽ nhánh + kết quả trong cột "Kết quả". Mô tả đủ:
- onLoad: load dropdown từ bảng nào, điều kiện truy vấn.
- Mỗi sự kiện (onClick/onChange/onSelect): điều kiện trigger → xử lý → kết quả.
- Logic tính toán: công thức đầy đủ với tên trường CSDL thật.
- Lưu dữ liệu: INSERT/UPDATE vào bảng nào, mapping từng field.
- Luồng ngoại lệ: lỗi validate, hết quyền, dữ liệu trùng…

---

## 4. THIẾT KẾ DÙNG CHUNG VÀ TÁI SỬ DỤNG

Bảng 4 cột: STT | Tên component | Mô tả hành vi | Danh sách chức năng sử dụng. Tham chiếu tài liệu Common `[TCCT_TKCT]` thay vì mô tả lặp. Các nhóm thường có mục riêng: tìm kiếm nhanh; tìm kiếm / lọc nâng cao; phân trang; mở rộng/thu gọn độ rộng cột; ẩn/hiện cột; xử lý Checkbox; hiển thị icon; hiển thị màn danh sách.

---

## 5. TUÂN THỦ TIÊU CHUẨN QUẢN TRỊ DỮ LIỆU

Áp dụng tiêu chuẩn quản trị dữ liệu đã ban hành của Tập đoàn. Lấy nội dung từ BM.01 §4.12 nếu đã có. Thiết kế cụ thể 5 mục:

- **CDE:** bảng 7 cột — STT | Tên trường | Mô tả | Bảng | Trường | Loại DL | Chủ sở hữu.
- **Bảo mật dữ liệu:** bảng dữ liệu mật + giải pháp (phân quyền / masking / log / chia sẻ).
- **Chất lượng dữ liệu:** bảng rule check + câu SQL kiểm tra + giải pháp.
- **Siêu dữ liệu:** thông tin đối tượng DL, luồng, thuật ngữ + cách tích hợp kho siêu dữ liệu tập trung.
- **Lưu trữ & vận hành:** bảng STT | Dữ liệu | Thời gian lưu | Tần suất backup.

---

## 6. PHỤ LỤC

- **6.1.** Tài liệu quy trình nghiệp vụ.
- **6.2.** Tài liệu thiết kế CSDL (BM.03).
- **6.3.** Phân quyền.
- **6.4.** Tài liệu mô tả API danh mục dùng chung.
- **6.5.** Danh sách chức năng — bảng 3 cột: STT | Tên chức năng | Đối tượng sử dụng. Nhóm theo phân hệ, đánh số La Mã (I, II, III…). Khớp toàn bộ chức năng đã thiết kế ở Phần 3.
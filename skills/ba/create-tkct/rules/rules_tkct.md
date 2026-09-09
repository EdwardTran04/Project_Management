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

**3.X.Y.1. Thông tin chung** — Trình bày dưới dạng Bảng 2 cột (`| Mục | Nội dung |`) gồm đầy đủ các trường thông tin sau:

| Mục | Yêu cầu nội dung |
|---|---|
| **Tên chức năng** | Tên chức năng cụ thể kèm mã định danh [Mã_CN]. |
| **Mục tiêu** | Mục tiêu nghiệp vụ của chức năng, giải quyết bài toán gì cho hệ thống/vận hành, mô tả chức năng cho phép đối tượng nào làm gì. |
| **Tác nhân** | Danh sách các đối tượng người dùng (User Role) hoặc hệ thống liên quan trực tiếp đến chức năng. |
| **Điều kiện kích hoạt** | Sự kiện, trạng thái của quy trình, lệnh, hoặc task làm phát sinh/kích hoạt chức năng này kèm các bước truy cập menu từ khi đăng nhập tới màn hình chức năng. VD: "Đăng nhập → Menu A → Button B". |
| **Điều kiện đầu vào** | Trạng thái dữ liệu tiền đề, các task phụ thuộc đã hoàn thành, danh sách dữ liệu/cấu hình cần có trước khi thực hiện. |
| **Điều kiện đầu ra** | Kết quả nghiệp vụ sau khi hoàn thành: dữ liệu được ghi nhận/cập nhật vào CSDL, trạng thái task/lệnh, mở task tiếp theo, trừ tồn/in tem; và xử lý ngoại lệ (chuyển Có phát sinh/Chờ xử lý) nếu có lỗi. |
| **Phân quyền & miền dữ liệu** | • **Logic miền dữ liệu:** Làm rõ đơn vị/kho/chi nhánh nào được thấy và thao tác trên phạm vi dữ liệu nào.<br>• **Phân quyền chi tiết (Liệt kê RIÊNG từng action):**<br>- **Xem:** Role nào được xem dữ liệu gì, phạm vi miền dữ liệu nào.<br>- **Thêm:** Role nào được tạo mới, dữ liệu sinh ra gắn với đơn vị nào.<br>- **Import:** Role nào được import file dữ liệu, định dạng file.<br>- **Sửa:** Role nào được sửa, trong điều kiện/trạng thái nào.<br>- **Xóa:** Role nào được xóa, điều kiện ràng buộc để được xóa.<br>- **Tìm kiếm:** Role nào được tìm kiếm/tra cứu, tiêu chí tìm kiếm theo miền dữ liệu.<br>- **Xuất:** Role nào được xuất dữ liệu ra file Excel/PDF. |

*Ví dụ bảng mẫu cho mục 3.X.Y.1. Thông tin chung:*

| Mục | Nội dung |
|---|---|
| **Tên chức năng** | Đóng gói hàng |
| **Mục tiêu** | Cho phép nhân sự kho thực hiện đóng gói hàng hóa theo quy cách được hệ thống tự động đề xuất, mapping hàng hóa vào HU/thùng/pallet, sinh hoặc scan mã tem RFID, in tem RFID và hoàn thành task đóng gói. |
| **Tác nhân** | Nhân viên đóng gói, Thủ kho, Điều phối viên kho, Quản lý kho hoặc người dùng được phân quyền xử lý task đóng gói. |
| **Điều kiện kích hoạt** | Task được sinh sau khi lệnh nhập được xác nhận xử lý và hệ thống xác định có hàng cần đóng gói theo cấu hình hàng hóa. Nếu hàng không cần đóng gói, task có thể tự hoàn thành/không áp dụng theo cấu hình. |
| **Điều kiện đầu vào** | Lệnh nhập hợp lệ; task tiền đề đã hoàn thành; có danh sách hàng cần đóng gói; hàng hóa có cấu hình đóng gói gồm kích thước, trọng lượng, quy cách đóng gói, loại HU/thùng/pallet; có mã RFID hoặc cơ chế sinh/scan RFID nếu bắt buộc. |
| **Điều kiện đầu ra** | Hàng được mapping vào HU/thùng/pallet hợp lệ; RFID hợp lệ nếu bắt buộc; tem được in nếu quy trình yêu cầu; tồn vật tư đóng gói được trừ nếu có sử dụng; task chuyển Hoàn thành và mở task Đưa vào lưu trữ/Putaway. Nếu thiếu cấu hình, RFID lỗi, không đủ HU/vật tư hoặc in tem lỗi thì task chuyển Có phát sinh/Chờ xử lý. |
| **Mô tả** | Cho phép nhân viên kho theo dõi thông tin task đóng gói, thực hiện phân loại, mapping sản phẩm/serial vào kiện HU, in tem dán và chốt cấu trúc kiện. |
| **Đường dẫn** | Đăng nhập → Phân hệ Nhập kho → Danh sách task nhập kho → Chọn Task loại "Đóng gói" |
| **Phân quyền & miền dữ liệu** | • **Miền dữ liệu:** Nhân sự chỉ xem và thao tác trên các Lệnh nhập kho và Task thuộc phạm vi Kho (Plant / SLoc) được phân công phụ trách.<br>• **Xem:** `ROLE_WAREHOUSE_WORKER`, `ROLE_WAREHOUSE_MASTER`, `ROLE_WAREHOUSE_DIRECTOR` (xem danh sách kiện, chi tiết vật tư, tóm tắt task).<br>• **Thêm:** `ROLE_WAREHOUSE_WORKER`, `ROLE_WAREHOUSE_MASTER` (tạo kiện hàng mới, thêm sản phẩm vào kiện).<br>• **Import:** `ROLE_WAREHOUSE_WORKER`, `ROLE_WAREHOUSE_MASTER` (import file danh sách serial và kiện đóng gói).<br>• **Sửa:** `ROLE_WAREHOUSE_WORKER`, `ROLE_WAREHOUSE_MASTER` (sửa loại thùng, thay đổi phân bổ serial khi chưa bấm Lưu kiện).<br>• **Xóa:** `ROLE_WAREHOUSE_WORKER`, `ROLE_WAREHOUSE_MASTER` (xóa kiện, xóa sản phẩm khỏi kiện khi chưa bấm Lưu kiện).<br>• **Tìm kiếm:** Toàn bộ user có quyền Xem được tra cứu theo mã HU, Serial, Mã vật tư.<br>• **Xuất:** `ROLE_WAREHOUSE_WORKER`, `ROLE_WAREHOUSE_MASTER` (xuất file excel cấu trúc đóng gói). |

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
# Template — Danh sách quy trình & chức năng bị thay đổi (delta)

**Nguyên tắc: chỉ liệt kê quy trình/chức năng bị thay đổi hoặc thêm mới — KHÔNG liệt kê phần không bị ảnh hưởng.**

Cột `Δ` đứng đầu, nhãn: `[MỚI]` (thêm mới) · `[SỬA]` (hiện có, bị thay đổi) · `[XÓA]` (loại bỏ).

## 2a. Danh sách quy trình bị thay đổi

Liệt kê ở mức **danh sách quy trình** (như output "danh sách quy trình" của skill create-process) — KHÔNG xuất bảng mô tả các bước/transition chi tiết:

| Δ | STT | Tên quy trình | Mô tả thay đổi | Nguồn |
|---|---|---|---|---|

Quy tắc cột **Mô tả thay đổi** — trả lời "thay đổi CÁI GÌ":
- `[SỬA]`: nêu cụ thể điểm đổi trong quy trình — thêm/bớt bước nào, đổi điều kiện gì, thêm tác nhân/trạng thái nào. Không mô tả lại toàn bộ quy trình.
- `[MỚI]`: tóm tắt 1 câu quy trình mới làm gì, tác nhân chính.
- `[XÓA]`: lý do loại bỏ.
- Cột Nguồn: mã CR (CR-xx).

## 2b. Danh sách chức năng bị thay đổi

Giữ y format 5 cột của skill extract-function-list:

| Δ | STT | Chức năng | Tính năng | Mô tả thay đổi | Độ ưu tiên |
|---|---|---|---|---|:---:|

Quy tắc:
- Cột **Mô tả thay đổi**: dòng `[SỬA]` nêu đúng điểm đổi (điều kiện/ràng buộc/luồng mới) so với hiện tại; dòng `[MỚI]` mô tả tính năng như chuẩn extract-function-list.
- Đối tượng quản lý mới → break đủ tính năng Basic → Workflow → Advance theo quy tắc extract-function-list, tất cả gắn `[MỚI]`.
- Ghi nguồn `(CR-xx)` cuối ô mô tả khi có nhiều CR.

## Ví dụ

**2a:**

| Δ | STT | Tên quy trình | Mô tả thay đổi | Nguồn |
|---|---|---|---|---|
| [SỬA] | 1 | Quy trình nhập kho | Thêm giai đoạn tạo + duyệt Phiếu yêu cầu nhập kho (PYC) trước bước tạo phiếu nhập kho; tạo phiếu nhập kho phải tham chiếu PYC Đã duyệt | CR-01 |

**2b (trích):**

| Δ | STT | Chức năng | Tính năng | Mô tả thay đổi | Độ ưu tiên |
|---|---|---|---|---|:---:|
| [MỚI] | 1 | Quản lý PYC nhập kho | Thêm mới PYC | Cho phép QLTS tạo PYC nhập kho (CR-01) | High |
| [MỚI] | 2 | Quản lý PYC nhập kho | Duyệt PYC | Lãnh đạo duyệt, chuyển Chờ duyệt → Đã duyệt (CR-01) | High |
| [SỬA] | 3 | Quản lý phiếu nhập kho | Thêm mới phiếu nhập kho | Bổ sung điều kiện: bắt buộc chọn PYC trạng thái Đã duyệt (CR-01) | High |
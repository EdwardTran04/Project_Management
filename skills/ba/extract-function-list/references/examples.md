# Ví dụ đầy đủ — Danh sách chức năng

> File tách khỏi SKILL.md để giữ skill nhẹ. **Chỉ đọc khi cần một khuôn bảng điền mẫu**
> (vd muốn đối chiếu thứ tự Basic → Workflow → Advance, cách viết mô tả tính năng workflow
> kèm chuyển trạng thái, cách gán độ ưu tiên). Logic break đã nằm đủ ở SKILL.md §3–§5.

Ví dụ cho đối tượng **Đơn nghỉ phép** (đối tượng nghiệp vụ chính, có workflow) — thể hiện đủ
3 nhóm tính năng trong một khối, xếp theo thứ tự Basic → Workflow → Advance.

| STT | Chức năng | Tính năng | Mô tả | Độ ưu tiên |
|---|---|---|---|:---:|
| 1 | Quản lý đơn nghỉ phép | Thêm mới đơn nghỉ phép | Cho phép nhân viên tạo đơn nghỉ phép mới | High |
| 2 | Quản lý đơn nghỉ phép | Sửa đơn nghỉ phép | Cho phép nhân viên sửa đơn khi còn ở trạng thái Nháp | Medium |
| 3 | Quản lý đơn nghỉ phép | Xóa đơn nghỉ phép | Cho phép nhân viên xóa đơn ở trạng thái Nháp (xóa mềm) | Medium |
| 4 | Quản lý đơn nghỉ phép | Xem chi tiết đơn nghỉ phép | Hiển thị đầy đủ thông tin một đơn | High |
| 5 | Quản lý đơn nghỉ phép | Xem danh sách đơn nghỉ phép | Hiển thị danh sách đơn theo bộ lọc/phân trang | High |
| 6 | Quản lý đơn nghỉ phép | Tìm kiếm đơn nghỉ phép | Tìm kiếm đơn theo từ khóa và tiêu chí | Medium |
| 7 | Quản lý đơn nghỉ phép | Gửi duyệt đơn | Cho phép nhân viên gửi đơn, chuyển từ Nháp sang Chờ duyệt | High |
| 8 | Quản lý đơn nghỉ phép | Duyệt đơn | Cho phép quản lý duyệt đơn, chuyển từ Chờ duyệt sang Đã duyệt | High |
| 9 | Quản lý đơn nghỉ phép | Từ chối đơn | Cho phép quản lý từ chối đơn, chuyển từ Chờ duyệt sang Từ chối | High |
| 10 | Quản lý đơn nghỉ phép | Yêu cầu bổ sung | Cho phép quản lý trả đơn yêu cầu nhân viên bổ sung, chuyển sang Chờ bổ sung | Medium |
| 11 | Quản lý đơn nghỉ phép | Xuất danh sách đơn ra Excel | Cho phép quản lý xuất danh sách đơn theo bộ lọc ra file Excel | Medium |
| 12 | Quản lý đơn nghỉ phép | In đơn nghỉ phép | Cho phép in một đơn đã duyệt | Low |

**Đọc khối ví dụ này thế nào:**
- STT 1–6 = nhóm **Basic** (6 CRUD chuẩn). STT 7–10 = nhóm **Workflow** (bám đúng "Tên bước" trong bảng transition, mô tả kèm chuyển trạng thái). STT 11–12 = nhóm **Advance**.
- Tính năng luồng chính (gửi duyệt/duyệt/từ chối) = **High**; nhánh phụ (yêu cầu bổ sung) = **Medium**; Advance phụ trợ (in) = **Low** — đúng quy tắc §5.
- Mô tả workflow luôn ghi rõ "chuyển [đối tượng] từ [trạng thái vào] sang [trạng thái ra]" để truy vết ngược về bảng transition.
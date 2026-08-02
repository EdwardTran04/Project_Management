---
name: extract-function-list
description: 'Sinh DANH SÁCH CHỨC NĂNG (function list) cho hệ thống từ output của skill create-process (bảng workflow transition + danh sách đối tượng) hoặc từ danh sách yêu cầu / mô tả nghiệp vụ. Skill làm 2 việc cốt lõi: (1) XÁC ĐỊNH CHÍNH XÁC các ĐỐI TƯỢNG QUẢN LÝ của hệ thống — mỗi đối tượng thành một mục "Quản lý [Đối tượng]"; (2) với mỗi đối tượng, break ra đầy đủ tính năng theo 3 nhóm: BASIC (thêm/sửa/xóa/xem chi tiết/xem danh sách/tìm kiếm), WORKFLOW (mỗi "Tên bước" đổi trạng thái trong bảng transition = một tính năng workflow như duyệt/từ chối/yêu cầu bổ sung/chuyển xử lý), và ADVANCE (in, xuất Excel, import, báo cáo, đính kèm...). Output là bảng 5 cột: STT | Chức năng | Tính năng | Mô tả | Độ ưu tiên (High/Medium/Low). Trigger CẢ KHI BA không nhắc "skill" — chỉ cần ngữ cảnh là "break chức năng", "lên danh sách chức năng", "list tính năng cho hệ thống này". Nối tiếp tốt sau skill create-process.'
---

# Create Function List — Break danh sách chức năng

## 1. Vai trò & nguyên tắc

Bạn là BA lập **danh sách chức năng** của hệ thống. Đầu vào là kết quả phân tích quy trình/yêu cầu; đầu ra là **bảng chức năng 5 cột** sẵn sàng đưa vào SRS hoặc báo giá.

- **Đối tượng quản lý là gốc.** Xác định sai đối tượng thì cả danh sách sai. Phần khó nhất nằm ở Bước 1 — làm kỹ.
- **3 nhóm dẫn dắt việc break:** mỗi đối tượng → Basic → Workflow → Advance. Đây là logic sinh chức năng, không phải cột trong bảng.
- **Không bịa.** Tính năng Advance suy luận mà đầu vào chưa nêu → đánh dấu **[Cần xác nhận]** trong cột Mô tả, không khẳng định.
- **Không đọc file từ máy.** BA paste nội dung trong hội thoại.
- Output **in trong chat trước**, hỏi BA rồi mới lưu file. Tiếng Việt, ngày `dd/mm/yyyy`.

---

## 2. Đầu vào

Theo thứ tự ưu tiên:

1. **Tốt nhất** — output của `create-process`: bảng workflow transition (có cột **"Tên bước"** + cột **"Đối tượng"** + tập trạng thái) và danh sách đối tượng nghiệp vụ.
2. Danh sách yêu cầu (FR/NFR), mô tả nghiệp vụ, danh sách trường thông tin của các đối tượng.

Nếu BA chưa đưa gì, hỏi **đúng 1 câu**: *"Anh paste giúp bảng quy trình (transition) hoặc danh sách yêu cầu / mô tả nghiệp vụ vào đây để tôi break chức năng nhé?"* — rồi dừng. Không hỏi dồn.

---

## 3. Quy trình 4 bước

### BƯỚC 1 — Xác định đối tượng quản lý (QUAN TRỌNG NHẤT)

Mỗi **đối tượng quản lý** sẽ thành một mục **"Quản lý [Đối tượng]"** ở cột *Chức năng*. Lấy ứng viên từ **3 nguồn, đối chiếu chéo**:

1. **Cột "Đối tượng" trong bảng transition** — nguồn mạnh nhất; thứ gì có trạng thái + workflow chắc chắn là đối tượng nghiệp vụ chính.
2. **Danh từ trong danh sách yêu cầu** — thứ hệ thống *lưu / quản lý / theo dõi / cấp / duyệt*.
3. **Danh sách trường thông tin** — thứ sở hữu một bộ trường riêng là đối tượng, không phải thuộc tính.

**Lọc bằng 4 phép thử** (đạt mới giữ làm đối tượng):

| Phép thử | Câu hỏi | Ví dụ ĐẠT / KHÔNG |
|---|---|---|
| Định danh độc lập | Tồn tại & tham chiếu riêng được? | Nhân viên ✓ · "SĐT của nhân viên" ✗ (thuộc tính) |
| Vòng đời | Có tập trạng thái / create-delete riêng? | Đơn nghỉ phép ✓ |
| Bộ thuộc tính | Sở hữu một nhóm trường riêng? | Hợp đồng ✓ |
| Bị tác động | Có actor làm CRUD/workflow lên nó? | Hồ sơ ✓ |

**Phân tầng** (tầng quyết định nhóm chức năng nào áp vào — xem `references/function-catalog.md` §1):

| Tầng | Ví dụ | Nhóm áp dụng |
|---|---|---|
| Nghiệp vụ chính (có trạng thái) | Vụ việc, Hồ sơ, Đơn | Basic + **Workflow** + Advance |
| Danh mục / Master data | Phòng ban, Chức vụ | Basic + Advance nhẹ (import) — **không** workflow |
| Đối tượng phụ thuộc / chi tiết | Dòng chi tiết, File đính kèm | Gộp vào CRUD của đối tượng cha |
| Chỉ tham chiếu | dropdown hệ thống khác quản lý | **Bỏ** |

> Bẫy thường gặp: tách thuộc tính thành đối tượng (over-decompose) · coi 1 màn hình = 1 đối tượng · **bỏ sót đối tượng chỉ hiện trong workflow** (cột "Đối tượng" của bảng transition là lưới an toàn) · trùng tên khác cách gọi → chuẩn hóa về 1 tên.

Liệt kê đối tượng đã chốt + tầng của từng đối tượng trước khi sang Bước 2.

### BƯỚC 2 — Break 3 nhóm tính năng cho từng đối tượng

Theo `references/function-catalog.md`:

- **Basic** — 6 tính năng CRUD chuẩn (thêm / sửa / xóa / xem chi tiết / xem danh sách / tìm kiếm). Chỉ sinh nếu đối tượng có màn hình quản lý.
- **Workflow** — gom mọi **"Tên bước"** đổi trạng thái của đối tượng đó trong bảng transition (luồng chính + luồng con), **dedupe** trùng tên, mỗi bước = 1 tính năng. Chỉ áp cho đối tượng tầng nghiệp vụ chính.
- **Advance** — In / Xuất Excel / Import / Báo cáo / Đính kèm / Nhật ký... lấy từ yêu cầu. Suy luận chưa có căn cứ → **[Cần xác nhận]**.

### BƯỚC 3 — Viết mô tả + gán độ ưu tiên

- **Mô tả**: 1 câu, mẫu *"Cho phép [actor] [làm gì] đối với [đối tượng]"*. Tính năng workflow ghi rõ chuyển trạng thái: *"…chuyển [đối tượng] từ [trạng thái vào] sang [trạng thái ra]"*.
- **Độ ưu tiên** theo §5.

### BƯỚC 4 — Xuất bảng 5 cột

Trình bày theo §4. Mỗi đối tượng là một khối, trong khối xếp tính năng theo thứ tự **Basic → Workflow → Advance**.

---

## 4. Bảng output (đúng 5 cột)

> Cột *Chức năng* = `Quản lý [Đối tượng]`. Cột *Tính năng* = từng item. Không có cột Loại/Nguồn.
> Mỗi đối tượng là một khối; trong khối xếp tính năng theo thứ tự **Basic → Workflow → Advance**.

| STT | Chức năng | Tính năng | Mô tả | Độ ưu tiên |
|---|---|---|---|:---:|
| 1 | Quản lý đơn nghỉ phép | Thêm mới đơn nghỉ phép | Cho phép nhân viên tạo đơn nghỉ phép mới | High |
| 7 | Quản lý đơn nghỉ phép | Gửi duyệt đơn | …chuyển đơn từ Nháp sang Chờ duyệt (workflow, bám "Tên bước" transition) | High |
| 11 | Quản lý đơn nghỉ phép | Xuất danh sách ra Excel | Advance — xuất theo bộ lọc | Medium |

> **Ví dụ điền đầy đủ một khối 12 tính năng (Basic + Workflow + Advance) xem `references/examples.md`** — chỉ đọc khi cần khuôn mẫu cụ thể, đừng load mặc định.

---

## 5. Quy tắc gán độ ưu tiên (High / Medium / Low)

- **High** — CRUD lõi (thêm, xem chi tiết, xem danh sách) + tính năng workflow **luồng chính** (gửi duyệt, duyệt, từ chối). Là xương sống, thiếu thì hệ thống không chạy được.
- **Medium** — sửa, xóa (xóa mềm), tìm kiếm, tính năng workflow **nhánh phụ/ngoại lệ** (yêu cầu bổ sung, trả lại), Advance được yêu cầu rõ (xuất Excel, import).
- **Low** — Advance phụ trợ (in, chia sẻ, nhật ký) hoặc tính năng **[Cần xác nhận]** chưa chốt.

> Nếu đầu vào nêu rõ độ ưu tiên (MoSCoW / mức KH yêu cầu), bám theo đầu vào và quy về High/Medium/Low.

---

## 6. Quy tắc đặt tên

- *Chức năng* luôn dạng **"Quản lý [Đối tượng]"** (vd "Quản lý nhân viên").
- *Tính năng* dạng **động từ + đối tượng**, rõ, có ý nghĩa triển khai (vd "Thêm mới nhân viên", "Chuyển xử lý hồ sơ"). Tránh mơ hồ ("Xử lý", "Quản lý", "Cập nhật" trống).
- Tên tính năng workflow **bám đúng "Tên bước"** trong bảng transition để truy vết ngược được.

---

## 7. Giữ nhẹ token (bắt buộc)

- Không in lại toàn bộ đầu vào — đọc, chốt đối tượng, rồi xuất bảng.
- Chỉ đọc `references/function-catalog.md` khi cần bộ chức năng chuẩn cho từng tầng đối tượng; chỉ đọc `references/examples.md` khi cần khuôn bảng điền mẫu đầy đủ. Logic chính đã nằm ở đây — đừng load mặc định.
- Không gọi skill khác trừ khi BA yêu cầu.
- Với hệ thống lớn nhiều đối tượng, hỏi BA muốn break **tất cả** hay **một nhóm đối tượng** trước.

---

## 8. Ranh giới (khi nào KHÔNG dùng)

- Cần **danh sách/sơ đồ quy trình + bảng transition** → đó là việc của `create-process` (chạy trước skill này).
- Cần **bóc tách & chấm chất lượng FR/NFR** → dùng skill extract-requirements.
- Cần **đặc tả chi tiết từng chức năng / màn hình / trường** → là bước sau (SRS / PTYC), không thuộc skill này.
- Skill này dừng ở "break ra danh sách chức năng", không đặc tả sâu.
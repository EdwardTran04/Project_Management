# Process Guide

> Hướng dẫn: chọn quy trình cần vẽ, chọn bước chính, quy ước vẽ swimlane thành ảnh, lập bảng transition. Kèm 1 ví dụ chuẩn.

---

## 1. Khi nào vẽ swimlane cho một quy trình
Vẽ khi quy trình có ≥1 đặc điểm: nhiều actor/phòng ban/hệ thống cùng tham gia; có chuyển trạng thái; có phê duyệt / thẩm định / phân công / phối hợp / trả lại; có tích hợp ngoài; có nhánh ngoại lệ (từ chối, hủy, bổ sung, quá hạn, trùng lặp); có yêu cầu audit / tuân thủ.

CRUD đơn, truy vấn, báo cáo đơn → **không** vẽ riêng, trừ khi là một bước đổi trạng thái trong luồng.

---

## 2. Chọn "bước chính" (chỉ bước đổi trạng thái)
- **GIỮ:** gửi / chuyển xử lý / phân công / phối hợp / gửi ý kiến / gửi duyệt / thông qua / từ chối / trả lại / yêu cầu bổ sung / ngoài thẩm quyền / chỉ đạo / báo cáo / hoàn thành / tích hợp đổi trạng thái / quá hạn tự động.
- **BỎ:** xem / tìm kiếm / lọc / sắp xếp / in / xuất / mô tả thuần — không tạo dòng nếu không đổi trạng thái và không phải thao tác hệ thống bắt buộc.
- Một bước = một dòng transition khi xác định được `(Trạng thái đầu vào → Tên bước → Trạng thái đầu ra)`.


---

## 3. Phân loại 3 loại flow — nhận diện exception & alternative

Mỗi quy trình có 3 loại đường đi cần phân biệt rõ trước khi vẽ:

### 3.1. Định nghĩa & dấu hiệu nhận biết trong tài liệu thô

| Loại | Bản chất | Dấu hiệu trong văn bản | Trên sơ đồ |
|---|---|---|---|
| **Main flow** (M) | Đường happy path: KH/người dùng hoàn thành mục tiêu theo cách phổ biến nhất | "Thông thường…", "Đa số trường hợp…", mô tả tuyến tính không điều kiện | task xám (`task`) → task xanh (`task_ok`) tại bước kết quả tích cực; mũi tên xám |
| **Alternative flow** (A) | Đường đi khác main flow nhưng **hợp lệ** — đến cùng đích hoặc đích hợp lệ khác | "Hoặc…", "Trong trường hợp…", "Đối với khách VIP / hợp đồng đặc biệt", "Nếu số lượng < X / giá trị > Y", "Cũng có thể…", "Fast-track…" | Gateway rẽ nhánh hoặc subprocess riêng — vẫn dùng `task` / `task_ok`, **mũi tên xanh dương** (`type: "alt"`) |
| **Exception flow** (E) | Đường bất thường: quay lui, hủy, lỗi, escalation, kết thúc sớm | "Nếu thất bại / từ chối / hủy / quá hạn / vượt hạn mức", "Trường hợp lỗi", "Khi không đủ…", "Sau X ngày không xử lý" | Node `task_err` (đỏ), **mũi tên nét đứt đỏ** (`type: "error"`) |

### 3.2. Checklist trích exception — 8 nhóm phải soát đủ

BA đọc tài liệu thô thường bỏ sót exception vì KH ít chủ động mô tả. Mỗi quy trình rà đủ 8 nhóm — nhóm nào không nêu rõ thì ghi Open Question, **không bịa**:

| # | Nhóm exception | Câu hỏi rà soát |
|---|---|---|
| 1 | Từ chối / không phê duyệt | Ai có quyền từ chối? Sau từ chối: quay về sửa lại hay đóng hẳn? |
| 2 | Yêu cầu bổ sung | Người duyệt yêu cầu bổ sung thông tin trước khi quyết định — quy trình quay về trạng thái nào? |
| 3 | Hủy sau khi đã duyệt | Có cho hủy sau khi đã vào quy trình không? Ai có quyền hủy? Phải rollback gì (tồn, kế toán, thông báo)? |
| 4 | Quá hạn / SLA timeout | Mỗi bước có deadline không? Quá hạn xử lý thế nào: tự động chuyển / leo thang / đóng? |
| 5 | Escalation (leo thang) | Khi không xử lý đúng hạn → ai là cấp trên nhận chuyển? Sau bao lâu? |
| 6 | Lỗi tích hợp / callback fail | Gọi sang hệ thống ngoài thất bại: retry mấy lần, sau đó báo ai? |
| 7 | Duplicate / trùng lặp | Có chống tạo trùng không? Phát hiện ở đâu (theo mã, theo nội dung)? |
| 8 | Thiếu điều kiện / dữ liệu không hợp lệ | Dữ liệu đầu vào không đầy đủ / sai định dạng → quy trình dừng tại đâu, thông báo ai? |

### 3.3. Quyết định: alternative flow → gateway trong main hay subprocess riêng?

| Tiêu chí | Gateway trong main flow | Subprocess riêng |
|---|---|---|
| Số bước của nhánh thay thế | 1–2 bước | ≥ 3 bước |
| Số actor mới nhánh thay thế đem vào | 0–1 actor mới | ≥ 2 actor mới |
| Có khả năng tái sử dụng ở quy trình khác? | Không | Có |
| Có vòng lặp nội bộ trong nhánh? | Không | Có |

Quy ước: ≥ 2 tiêu chí thiên về cột phải → tách subprocess riêng (file `assets/<...>-alt-<ten>.json` + sơ đồ + bảng transition riêng, giống quy ước luồng con).

---

## 4. Quy ước vẽ swimlane (xuất file .drawio + ảnh)
Lane = một actor hoặc hệ thống. Quy ước node (loại `type` trong layout model — chi tiết màu/kích thước/XML: `references/drawio-swimlane.md`):

| Phần tử BPMN | Thể hiện trên draw.io | `type` | Ghi chú |
|---|---|---|---|
| Start event | Tròn đặc đen, r=13 | `start` | điểm khởi tạo |
| End event | 2 vòng tròn lồng đen | `end` | trạng thái cuối (có thể kèm nhãn dưới node) |
| Bước/Task | Chữ nhật bo góc, xám `#f5f5f5` | `task` | hành động người dùng; bước tích cực dùng `task_ok` (xanh lá), bước từ chối/trả lại dùng `task_err` (đỏ) |
| System/Auto task | Chữ nhật bo góc, tím `#E8E6FC`, prefix `System:` | `system` | xử lý tự động, quá hạn; tích hợp ngoài dùng `external` (xanh dương) |
| Gateway / quyết định | Hình thoi vàng `#fff2cc` | `gateway` | rẽ nhánh |
| Subprocess (luồng con) | Chữ nhật bo góc cam `#FFE6CC`, viền dày | `subprocess` | mở ra luồng riêng |

Bố cục: pool ngang (tiêu đề trên), mỗi lane = một actor (tiêu đề xoay dọc trái), luồng chạy **trái → phải** theo cột trình tự (`col`), node rẽ nhánh cùng cột xếp dọc (`row`); **mũi tên giữa các lane mang nhãn = trạng thái đầu ra hoặc điều kiện gateway**. Mỗi nhánh exception (từ chối / bổ sung / quá hạn) phải có mũi tên + nhãn riêng — **nét đứt đỏ** (`type: "error"`). Nhánh **alternative flow** dùng **mũi tên xanh dương** (`type: "alt"`) để phân biệt với main flow xám. Sơ đồ luôn kèm khung Chú thích.

---

## 5. Ví dụ chuẩn — Quy trình "Vụ việc"

### 5.1. Sơ đồ swimlane — luồng chính

Layout model đầy đủ: **`assets/vi-du-vu-viec.json`** — render: `python3 scripts/render_swimlane.py assets/vi-du-vu-viec.json <out_dir>` → ra `.drawio` + `.png`.

Tóm tắt bố trí (4 lane, 9 cột):

| Lane (actor) | Node theo cột trái → phải |
|---|---|
| Người trình báo | `start`(c0) → Gửi báo cáo vụ việc(c1) · Báo cáo kết quả thực hiện(c7) → `end`(c8) |
| Thủ trưởng đơn vị chủ trì | Chuyển xử lý(c2) · Gửi thủ trưởng cục(c4) · Chỉ đạo thực hiện(c6) |
| Thủ trưởng phối hợp / Trợ lý | `subprocess` Phối hợp vụ việc(c3) |
| Cục trưởng | `gateway` Quyết định?(c5) · Thông qua `task_ok`(c6,r0) · Ngoài thẩm quyền `task_ok`(c6,r1) · Từ chối `task_err`(c6,r2) |

Edge (nhãn = trạng thái đầu ra): S→A; A→B `Chờ xử lý`; B→P `Đang xử lý`; P→C `Kết thúc phối hợp`; C→D `Chờ thông qua`; D→T `Hợp lệ`; D→O `Ngoài thẩm quyền`; D→R `Không hợp lệ`; **R→B `Từ chối → xử lý lại` (error)**; T→G, O→G `Đã thông qua`; G→H `Chờ báo cáo`; H→E `Đã báo cáo`.

> Lưu ý: "Gửi thủ trưởng cục" có thể đi thẳng từ "Chờ xử lý / Từ chối" (không bắt buộc qua phối hợp) — **Cần xác nhận** điều kiện bắt buộc phối hợp.

### 5.2. Bảng workflow transition — luồng chính

> **STT prefix**: `M` = main flow, `A` = alternative flow, `E` = exception flow (xem mục 3).

| STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan |
|---|---|---|---|---|---|---|
| M1 | N/A | Người trình báo | Gửi báo cáo vụ việc | Vụ việc | Chờ xử lý | Thêm mới và gửi báo cáo |
| M2 | Chờ xử lý, Từ chối | Thủ trưởng đơn vị chủ trì | Chuyển xử lý | Vụ việc | Đang xử lý | Gửi yêu cầu đến đơn vị phối hợp và trợ lý → luồng Phối hợp bên dưới |
| M3 | Kết thúc phối hợp | Thủ trưởng đơn vị chủ trì | Gửi thủ trưởng cục | Vụ việc | Chờ thông qua | Tiếp nhận và gửi lên thủ trưởng cục |
| M4 | Đang xử lý | Trợ lý, Thủ trưởng phối hợp | (đi luồng con) | Phối hợp vụ việc | — | → luồng Phối hợp bên dưới |
| M5 | Chờ thông qua | Cục trưởng | Thông qua | Vụ việc | Đã thông qua | Thông qua, gửi thông báo cho chủ trì |
| A1 | Chờ thông qua | Cục trưởng | Ngoài thẩm quyền | Vụ việc | Đã thông qua | Thông qua (ngoài thẩm quyền) — kết quả tương tự nhưng cơ chế khác, gửi thông báo cho chủ trì |
| E1 | Chờ thông qua | Cục trưởng | Từ chối | Vụ việc | Từ chối | Tiếp nhận và từ chối; quay về M2 để xử lý lại |
| M6 | Đã thông qua | Thủ trưởng đơn vị chủ trì | Chỉ đạo thực hiện | Vụ việc | Chờ báo cáo | Chỉ đạo, gửi thông báo đến người trình báo |
| M7 | Chờ báo cáo | Người trình báo | Báo cáo kết quả thực hiện | Vụ việc | Đã báo cáo | Tiếp nhận và báo cáo kết quả |

### 5.3. Sơ đồ swimlane — luồng con "Phối hợp vụ việc"

Layout model đầy đủ: **`assets/vi-du-vu-viec-luong-con.json`** (render như 4.1; file riêng cho luồng con).

| Lane (actor) | Node theo cột trái → phải |
|---|---|
| Thủ trưởng phối hợp | `start`(c0) → Chuyển xử lý(c1) · `gateway` Duyệt ý kiến?(c3) · Gửi ý kiến `task_ok`(c4,r0) · Từ chối `task_err`(c4,r1) → `end` "Hoàn thành / Kết thúc phối hợp"(c5) |
| Trợ lý | Gửi ý kiến(c2) |
| Hệ thống | `system` Quá hạn hoàn thành(c4) |

Edge: CS→CA; CA→CT `Đã phân công`; CT→CG `Chờ duyệt`; CG→CY `Đồng ý`; CG→CR `Từ chối`; **CR→CT `Từ chối → gửi lại` (error)**; CY→CE `Hoàn thành phối hợp`; CSYS→CE `Quá hạn → Kết thúc phối hợp`.

### 5.4. Bảng workflow transition — luồng con

| STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan |
|---|---|---|---|---|---|---|
| M1 | N/A, Đang xử lý | Thủ trưởng phối hợp | Chuyển xử lý | Phối hợp vụ việc | Đã phân công | Gửi yêu cầu xử lý đến trợ lý |
| A1 | N/A | Thủ trưởng phối hợp | Gửi ý kiến trực tiếp | Phối hợp vụ việc | Hoàn thành phối hợp | Bỏ qua trợ lý, TT phối hợp gửi luôn ý kiến — **alt** so với M1→M2 |
| M2 | Đã phân công, Từ chối | Trợ lý | Gửi ý kiến | Phối hợp vụ việc | Chờ duyệt | Trợ lý gửi ý kiến cho thủ trưởng phối hợp |
| M3 | Chờ duyệt | Thủ trưởng phối hợp | Gửi ý kiến | Phối hợp vụ việc | Hoàn thành phối hợp | Duyệt OK, gửi lại ý kiến |
| E1 | Chờ duyệt | Thủ trưởng phối hợp | Từ chối | Phối hợp vụ việc | Từ chối | Tiếp nhận và từ chối; quay về M2 để gửi lại |
| E2 | Đang phối hợp | Hệ thống / Thủ trưởng phối hợp | Quá hạn hoàn thành | Phối hợp vụ việc | Kết thúc phối hợp | Tất cả đã gửi ý kiến hoặc quá hạn đóng góp |

---

## 6. Quy tắc điền bảng transition
- `Trạng thái đầu vào`: trạng thái đối tượng **trước** bước. Nhiều giá trị → liệt kê cách nhau dấu phẩy. Bước khởi tạo → `N/A`.
- `Tác nhân`: actor/lane/hệ thống thực hiện.
- `Tên bước`: tên hành động rõ, ngắn, có ý nghĩa triển khai (vd "Gửi ý kiến", "Chuyển xử lý") — tránh mơ hồ ("Xử lý", "Cập nhật").
- `Đối tượng`: business object bị tác động.
- `Trạng thái đầu ra`: trạng thái **sau** bước.
- `Nghiệp vụ liên quan`: logic / thông báo / phân công / tích hợp / điều kiện đi kèm; ghi rõ điểm gọi luồng con.

---

## 7. Mapping BPMN → phân tích (rút gọn)
| BPMN | Xử lý |
|---|---|
| User Task | Bước người dùng → 1 dòng transition + node trong lane actor. |
| Service/System Task | Xử lý tự động / tích hợp / quá hạn → node `system` (tím, prefix `System:`), đặt ở lane "Hệ thống". |
| Gateway | Điều kiện rẽ nhánh → node `gateway` (thoi vàng), không thành dòng transition riêng. |
| Send/Receive Task | Thông báo / callback → ghi trong "Nghiệp vụ liên quan". |
| Subprocess | Luồng con → node `subprocess` (cam, viền dày) + bảng + sơ đồ riêng. |
| Data Object + status | Đối tượng + tập trạng thái trong header quy trình. |
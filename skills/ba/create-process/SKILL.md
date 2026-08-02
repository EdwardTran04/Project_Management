    ---
name: create-process
description: Phân tích đầu vào BA (biên bản phỏng vấn, tài liệu nghiệp vụ, mô tả as-is/to-be, bảng mô tả luồng) để tạo DANH SÁCH QUY TRÌNH và MÔ TẢ QUY TRÌNH. Hai output chính bắt buộc cho mỗi quy trình: (1) sơ đồ swimlane xuất KÉP thành file .drawio chỉnh sửa được (mở bằng draw.io / diagrams.net) + ảnh PNG/SVG — có pool/lane/actor/bước/gateway/start-end/exception, tô màu theo ý nghĩa bước; (2) bảng luồng trạng thái (workflow transition table). Chỉ lấy các BƯỚC CHÍNH làm thay đổi trạng thái đối tượng nghiệp vụ. Dùng khi user cần: liệt kê quy trình, vẽ/diễn họa lại quy trình, chuẩn hóa luồng trạng thái, tách bước nghiệp vụ chính, xác định actor và lane, tách luồng con (sub-flow), hoặc tạo đầu vào quy trình cho SRS. Hỗ trợ BPMN, swimlane, workflow, state transition, xuất drawio.
---

# BA Process Mapping

## Nguyên tắc
Process-first. Đầu vào → **danh sách quy trình** → với mỗi quy trình → **sơ đồ swimlane (file `.drawio` + ảnh PNG/SVG)** + **bảng luồng trạng thái**.

Chỉ lấy **bước chính làm thay đổi trạng thái** đối tượng nghiệp vụ. Bỏ thao tác xem/tìm/lọc/in/mô tả thuần (không đổi trạng thái).

Tách fact và suy luận. Mọi nội dung AI suy ra phải đánh dấu **Cần xác nhận**. Không bịa scope.

## Quy trình làm việc
1. Quét đầu vào → lập **danh sách quy trình** (template), chọn quy trình cần vẽ.
2. Mỗi quy trình: xác định đối tượng nghiệp vụ + tập trạng thái + actor/lane + trigger bắt đầu + kết quả kết thúc.
3. Trích **bước chính** đổi trạng thái (gửi / chuyển xử lý / phân công ---
name: create-process
description: Phân tích đầu vào BA (biên bản phỏng vấn, tài liệu nghiệp vụ, mô tả as-is/to-be, bảng mô tả luồng) để tạo DANH SÁCH QUY TRÌNH và MÔ TẢ QUY TRÌNH. Hai output chính bắt buộc cho mỗi quy trình: (1) sơ đồ swimlane xuất KÉP thành file .drawio chỉnh sửa được (mở bằng draw.io / diagrams.net) + ảnh PNG/SVG — có pool/lane/actor/bước/gateway/start-end/exception, tô màu theo ý nghĩa bước; (2) bảng luồng trạng thái (workflow transition table). Chỉ lấy các BƯỚC CHÍNH làm thay đổi trạng thái đối tượng nghiệp vụ. Dùng khi user cần: liệt kê quy trình, vẽ/diễn họa lại quy trình, chuẩn hóa luồng trạng thái, tách bước nghiệp vụ chính, xác định actor và lane, tách luồng con (sub-flow), hoặc tạo đầu vào quy trình cho SRS. Hỗ trợ BPMN, swimlane, workflow, state transition, xuất drawio.
---

# BA Process Mapping

## Nguyên tắc
Process-first. Đầu vào → **danh sách quy trình** → với mỗi quy trình → **sơ đồ swimlane (file `.drawio` + ảnh PNG/SVG)** + **bảng luồng trạng thái**.

Chỉ lấy **bước chính làm thay đổi trạng thái** đối tượng nghiệp vụ. Bỏ thao tác xem/tìm/lọc/in/mô tả thuần (không đổi trạng thái).

Tách fact và suy luận. Mọi nội dung AI suy ra phải đánh dấu **Cần xác nhận**. Không bịa scope.

## Quy trình làm việc
1. Quét đầu vào → lập **danh sách quy trình** (template), chọn quy trình cần vẽ.
2. Mỗi quy trình: xác định đối tượng nghiệp vụ + tập trạng thái + actor/lane + trigger bắt đầu + kết quả kết thúc.
3. Trích **bước chính** đổi trạng thái (gửi / chuyển xử lý / phân công / phối hợp / gửi ý kiến / gửi duyệt / thông qua / từ chối / trả lại / bổ sung / ngoài thẩm quyền / chỉ đạo / báo cáo / hoàn thành / tích hợp callback / quá hạn auto). Phát hiện và tách **luồng con** nếu có.
3a. **Phân loại từng bước thành 3 loại flow**: Main (M) / Alternative (A) / Exception (E) — định nghĩa và dấu hiệu trong `references/process-guide.md` mục 3.1. Soát đủ **8 nhóm exception** (mục 3.2): từ chối, bổ sung, hủy, quá hạn, escalation, lỗi tích hợp, duplicate, thiếu dữ liệu. Nhóm nào tài liệu không nêu rõ → ghi Open Question, không bịa. Alternative flow phức tạp → cân nhắc tách subprocess (mục 3.3).
4. **Vẽ sơ đồ swimlane**: lane = actor, node theo quy ước BPMN, đủ start/end + gateway + nhánh exception (`references/process-guide.md` mục 4). Dựng **layout model JSON** rồi xuất KÉP từ cùng bộ tọa độ: file `.drawio` + ảnh PNG/SVG — ưu tiên chạy `scripts/render_swimlane.py`; spec màu/shape/route và fallback: `references/drawio-swimlane.md` (chỉ đọc ở bước này).
5. Lập **bảng workflow transition** theo template.
6. Liệt kê **open questions** + (tùy chọn) handoff sang SRS.

## Quy tắc tốc độ (mục tiêu: trọn bộ output trong MỘT lượt trả lời, ~2–3 phút)
1. **Gộp tool call.** Khi sẽ vẽ sơ đồ (đa số trường hợp): đọc references bằng MỘT lệnh `cat references/process-guide.md references/drawio-swimlane.md references/templates.md`. Chỉ lập danh sách quy trình chưa vẽ: chỉ đọc `process-guide.md`. File đã có trong context thì không đọc lại.
2. **Một lệnh bash cho toàn bộ render**: ghi layout JSON (heredoc) + thử cài `cairosvg` nếu thiếu (`... || true`, **không retry, không làm hỏng lệnh**) + render TẤT CẢ sơ đồ (chính + luồng con) trong cùng một lệnh. SVG + `.drawio` luôn ra ngay; PNG chỉ bổ sung khi có cairosvg.
3. **Phạm vi 1 lần chạy = 1 quy trình + luồng con của nó.** Đầu vào có nhiều quy trình → lập danh sách đầy đủ, chạy trọn quy trình ưu tiên nhất, các quy trình còn lại hẹn lượt sau (nêu rõ).
4. **Chạy một mạch, không dừng hỏi giữa chừng** — mọi thắc mắc dồn vào Open questions. Chỉ mở xem lại ảnh PNG khi sơ đồ **>10 node hoặc có gateway >3 nhánh** (tối đa 1 vòng chỉnh); lỗi thẩm mỹ nhỏ bỏ qua — BA chỉnh tiếp trong draw.io.

## Tài liệu tham chiếu (chỉ đọc khi cần)
- `references/process-guide.md` — tiêu chí chọn bước chính, quy ước vẽ swimlane, mapping, ví dụ chuẩn (Vụ việc).
- `references/templates.md` — template danh sách quy trình, mô tả quy trình, bảng transition, khung sơ đồ.
- `references/drawio-swimlane.md` — spec vẽ swimlane draw.io: layout model JSON, bảng màu, style, route, render ảnh, fallback. **Chỉ đọc khi đến bước vẽ sơ đồ.**
- `scripts/render_swimlane.py` — script sinh `.drawio` + `.svg` + `.png` từ layout model (không cần đọc, chỉ chạy).
- `assets/vi-du-vu-viec*.json` — 2 layout model mẫu (luồng chính + luồng con) của ví dụ chuẩn.

## Quy tắc output
- Mỗi quy trình gồm: **header** (tên, đối tượng, trạng thái, actor/lane, trigger/kết quả) + **sơ đồ swimlane (ảnh)** + **bảng transition** + **open questions**.
- Sơ đồ: **không dùng Mermaid**. Xuất KÉP từ cùng bộ tọa độ: (1) **ảnh PNG/SVG** để xem ngay & chèn tài liệu; (2) **file `.drawio`** để BA mở trong draw.io copy & chỉnh sửa. Lane = actor; mũi tên liên-lane gắn nhãn = trạng thái đầu ra hoặc điều kiện gateway; nhánh exception nét đứt đỏ.
- Đặt tên file: `YYYY-MM-DD_process_[ten-quy-trinh-kebab-case].drawio` (ảnh cùng tên `.png`/`.svg`; luồng con thêm hậu tố `_luong-con-[ten]`).
- Môi trường không có code execution: sinh XML `.drawio` trong code block + vẽ SVG qua canvas/visualizer theo đúng spec `references/drawio-swimlane.md`.
- Bảng transition giữ **đúng 7 cột**: `STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan`. **STT bắt buộc prefix loại flow**: `M`/`A`/`E` (vd M1, A1, E1).
- Phân biệt flow trên sơ đồ: main = mũi tên xám; **alternative = mũi tên xanh dương** (`edge.type: "alt"`); **exception = mũi tên nét đứt đỏ** (`edge.type: "error"`).
- `Trạng thái đầu vào` được phép nhiều giá trị (vd "Chờ xử lý, Từ chối"). Bước khởi tạo dùng `N/A`.
- Luồng con: ở luồng chính ghi nhãn "→ luồng [Tên] bên dưới"; vẽ + lập bảng riêng cho luồng con; điểm quay lại = trạng thái kết thúc luồng con.

## Chuẩn hoàn thành
Đủ để BA chuyển sang thiết kế màn hình / SRS: danh sách quy trình, sơ đồ swimlane từng quy trình, bảng transition đầy đủ nhánh chính + exception, luồng con tách bạch, open questions.

## Handoff → extract-function-list
Sau khi có **bảng transition + đối tượng nghiệp vụ**, gợi ý chuyển sang skill `extract-function-list` để sinh danh sách chức năng cho từng đối tượng:
- **Cơ bản (CRUD + tìm kiếm):** Thêm / Sửa / Xóa / Xem chi tiết / Xem danh sách / Tìm kiếm nhanh / Tìm kiếm nâng cao.
- **Workflow:** mỗi `Tên bước` đổi trạng thái trong bảng transition (luồng chính + luồng con) = 1 chức năng workflow, truy vết về bước BPMN.
- **Nâng cao:** Xuất báo cáo / Xuất Excel / Import danh sách / In / Chia sẻ... (đánh dấu **Cần xác nhận** nếu chưa nêu trong đầu vào).

Đầu vào bàn giao tối thiểu: tên đối tượng + tập trạng thái + bảng transition + actor/lane./ phối hợp / gửi ý kiến / gửi duyệt / thông qua / từ chối / trả lại / bổ sung / ngoài thẩm quyền / chỉ đạo / báo cáo / hoàn thành / tích hợp callback / quá hạn auto). Phát hiện và tách **luồng con** nếu có.
3a. **Phân loại từng bước thành 3 loại flow**: Main (M) / Alternative (A) / Exception (E) — định nghĩa và dấu hiệu trong `references/process-guide.md` mục 3.1. Soát đủ **8 nhóm exception** (mục 3.2): từ chối, bổ sung, hủy, quá hạn, escalation, lỗi tích hợp, duplicate, thiếu dữ liệu. Nhóm nào tài liệu không nêu rõ → ghi Open Question, không bịa. Alternative flow phức tạp → cân nhắc tách subprocess (mục 3.3).
4. **Vẽ sơ đồ swimlane**: lane = actor, node theo quy ước BPMN, đủ start/end + gateway + nhánh exception (`references/process-guide.md` mục 4). Dựng **layout model JSON** rồi xuất KÉP từ cùng bộ tọa độ: file `.drawio` + ảnh PNG/SVG — ưu tiên chạy `scripts/render_swimlane.py`; spec màu/shape/route và fallback: `references/drawio-swimlane.md` (chỉ đọc ở bước này).
5. Lập **bảng workflow transition** theo template.
6. Liệt kê **open questions** + (tùy chọn) handoff sang SRS.

## Quy tắc tốc độ (mục tiêu: trọn bộ output trong MỘT lượt trả lời, ~2–3 phút)
1. **Gộp tool call.** Khi sẽ vẽ sơ đồ (đa số trường hợp): đọc references bằng MỘT lệnh `cat references/process-guide.md references/drawio-swimlane.md references/templates.md`. Chỉ lập danh sách quy trình chưa vẽ: chỉ đọc `process-guide.md`. File đã có trong context thì không đọc lại.
2. **Một lệnh bash cho toàn bộ render**: ghi layout JSON (heredoc) + cài `cairosvg` nếu thiếu + render TẤT CẢ sơ đồ (chính + luồng con) trong cùng một lệnh.
3. **Phạm vi 1 lần chạy = 1 quy trình + luồng con của nó.** Đầu vào có nhiều quy trình → lập danh sách đầy đủ, chạy trọn quy trình ưu tiên nhất, các quy trình còn lại hẹn lượt sau (nêu rõ).
4. **Chạy một mạch, không dừng hỏi giữa chừng** — mọi thắc mắc dồn vào Open questions. Chỉ mở xem lại ảnh PNG khi sơ đồ **>10 node hoặc có gateway >3 nhánh** (tối đa 1 vòng chỉnh); lỗi thẩm mỹ nhỏ bỏ qua — BA chỉnh tiếp trong draw.io.

## Tài liệu tham chiếu (chỉ đọc khi cần)
- `references/process-guide.md` — tiêu chí chọn bước chính, quy ước vẽ swimlane, mapping, ví dụ chuẩn (Vụ việc).
- `references/templates.md` — template danh sách quy trình, mô tả quy trình, bảng transition, khung sơ đồ.
- `references/drawio-swimlane.md` — spec vẽ swimlane draw.io: layout model JSON, bảng màu, style, route, render ảnh, fallback. **Chỉ đọc khi đến bước vẽ sơ đồ.**
- `scripts/render_swimlane.py` — script sinh `.drawio` + `.svg` + `.png` từ layout model (không cần đọc, chỉ chạy).
- `assets/vi-du-vu-viec*.json` — 2 layout model mẫu (luồng chính + luồng con) của ví dụ chuẩn.

## Quy tắc output
- Mỗi quy trình gồm: **header** (tên, đối tượng, trạng thái, actor/lane, trigger/kết quả) + **sơ đồ swimlane (ảnh)** + **bảng transition** + **open questions**.
- Sơ đồ: **không dùng Mermaid**. Xuất KÉP từ cùng bộ tọa độ: (1) **ảnh PNG/SVG** để xem ngay & chèn tài liệu; (2) **file `.drawio`** để BA mở trong draw.io copy & chỉnh sửa. Lane = actor; mũi tên liên-lane gắn nhãn = trạng thái đầu ra hoặc điều kiện gateway; nhánh exception nét đứt đỏ.
- Đặt tên file: `YYYY-MM-DD_process_[ten-quy-trinh-kebab-case].drawio` (ảnh cùng tên `.png`/`.svg`; luồng con thêm hậu tố `_luong-con-[ten]`).
- Môi trường không có code execution: sinh XML `.drawio` trong code block + vẽ SVG qua canvas/visualizer theo đúng spec `references/drawio-swimlane.md`.
- Bảng transition giữ **đúng 7 cột**: `STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan`. **STT bắt buộc prefix loại flow**: `M`/`A`/`E` (vd M1, A1, E1).
- Phân biệt flow trên sơ đồ: main = mũi tên xám; **alternative = mũi tên xanh dương** (`edge.type: "alt"`); **exception = mũi tên nét đứt đỏ** (`edge.type: "error"`).
- `Trạng thái đầu vào` được phép nhiều giá trị (vd "Chờ xử lý, Từ chối"). Bước khởi tạo dùng `N/A`.
- Luồng con: ở luồng chính ghi nhãn "→ luồng [Tên] bên dưới"; vẽ + lập bảng riêng cho luồng con; điểm quay lại = trạng thái kết thúc luồng con.

## Chuẩn hoàn thành
Đủ để BA chuyển sang thiết kế màn hình / SRS: danh sách quy trình, sơ đồ swimlane từng quy trình, bảng transition đầy đủ nhánh chính + exception, luồng con tách bạch, open questions.

## Handoff → extract-function-list
Sau khi có **bảng transition + đối tượng nghiệp vụ**, gợi ý chuyển sang skill `extract-function-list` để sinh danh sách chức năng cho từng đối tượng:
- **Cơ bản (CRUD + tìm kiếm):** Thêm / Sửa / Xóa / Xem chi tiết / Xem danh sách / Tìm kiếm nhanh / Tìm kiếm nâng cao.
- **Workflow:** mỗi `Tên bước` đổi trạng thái trong bảng transition (luồng chính + luồng con) = 1 chức năng workflow, truy vết về bước BPMN.
- **Nâng cao:** Xuất báo cáo / Xuất Excel / Import danh sách / In / Chia sẻ... (đánh dấu **Cần xác nhận** nếu chưa nêu trong đầu vào).

Đầu vào bàn giao tối thiểu: tên đối tượng + tập trạng thái + bảng transition + actor/lane.
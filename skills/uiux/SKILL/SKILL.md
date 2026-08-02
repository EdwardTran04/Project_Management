---
name: UIUX_VTIT_01
description: Quy trình thiết kế UI/UX VTIT 01 - khởi động dự án thiết kế UI/UX theo 6 bước - thu thập thông tin qua project-brief.md, đọc rules quy định thiết kế, kết nối MCP Figma Design System (nguồn), test popup chào mừng trong Figma đích, thiết kế các màn hình từ folder SRS, và xuất file spec .md cho dev. Sử dụng skill này bất cứ khi nào người dùng nói "UIUX VTIT 01", "UIUX_VTIT_01", "chạy UIUX VTIT", "UI/UX VTIT", "khởi động dự án", "bắt đầu dự án mới", "khởi động project", hoặc khi họ mô tả ý định bắt đầu một dự án UI/UX với Figma + Design System + SRS folder. Trigger cả khi user nói ngắn "chạy uiux", "start vtit", "bắt đầu nào", "khởi động" trong ngữ cảnh thiết kế UI/UX. Đây là skill entry-point cho mọi dự án UI/UX VTIT - chạy đầu tiên khi có dự án mới hoặc tiếp tục dự án cũ.
---

# UIUX_VTIT_01 — Khởi động dự án UI/UX

Skill này điều phối quy trình **6 bước** để khởi động một dự án thiết kế UI/UX. Mỗi bước phân định rõ thao tác của **bạn (user)** và của **AI** để tránh nhầm vai.

## Tổng quan 6 bước

| Bước | Vai trò chính | Việc làm |
|---|---|---|
| B1 | User điền + AI hỏi | Nạp / tạo `project-brief.md` |
| B2 | AI đọc rules | Đọc `references/design-system-rules.md` — quy định thiết kế nền tảng |
| B3 | AI đọc Figma | Học Design System (nguồn) — chỉ lần đầu hoặc khi có Template UI mới |
| B4 | AI viết Figma | Test MCP bằng popup chào mừng trong Figma đích |
| B5 | AI thiết kế | Build từng màn theo file SRS vào Figma đích |
| B6 | AI export (chỉ khi user yêu cầu) | Xuất file `.md` spec UI/UX cho dev/AI code |

**Logic thứ tự**: rules trước (B2) → DS sau (B3). AI có rules trong tay rồi mới khảo sát DS sẽ biết cần tìm gì, đánh giá DS theo chuẩn nào, và áp dụng đúng quy trình "khảo sát" của rules.

**Nguyên tắc chung**: AI luôn báo rõ đang ở bước nào. Sau mỗi bước, dừng và báo cáo gọn trước khi sang bước tiếp.

## Cấu trúc folder dự án (working directory)

Sau khi chạy đủ skill, folder dự án có cấu trúc:

```
<project-root>/                     # working directory
├── Start/
│   └── project-brief.md            # B1 tạo (copy từ skill bundle, AI điền)
├── references/
│   └── design-system-rules.md      # B2 tạo (copy từ skill bundle, có thể tuỳ biến)
├── SRS/                            # user tự cung cấp
│   └── *.{md,docx,pdf,xlsx}
└── screens-spec/                   # B6 tạo (chỉ khi user yêu cầu)
    ├── _index.md
    └── <screen>.md
```

User cần chuẩn bị sẵn folder `SRS/`. Các folder khác AI sẽ tự tạo theo từng bước.

---

## Bước 1 — Nạp / tạo `Start/project-brief.md`

**Mục tiêu**: AI hiểu rõ dự án trước khi đụng vào Figma.

### Thao tác của AI

1. Kiểm tra trong working directory đã có file `Start/project-brief.md` chưa.
   - **Có** → đọc, tóm tắt lại nội dung cho user xác nhận, rồi sang B2.
   - **Chưa có** → tạo folder `Start/` (nếu chưa có) rồi copy template từ skill bundle `<skill>/templates/project-brief.md` ra `<working-dir>/Start/project-brief.md`.
2. Nếu phải tạo mới, **hỏi user từng mục 1–9 theo thứ tự**. Một lần hỏi 1–2 mục, không đổ dồn cả 9 mục cùng lúc — user sẽ ngợp.
3. Sau khi user trả lời mỗi mục, AI điền vào file `Start/project-brief.md` (dùng Edit tool) rồi hỏi mục tiếp theo.
4. Cho phép user nói "skip" hoặc "TBD" cho mục chưa quyết — AI ghi `TBD` vào file, không tự bịa.
5. Khi xong cả 9 mục, AI tóm tắt và xin xác nhận: *"Project brief đã đầy đủ. Sang B2 (đọc design-system-rules) chứ?"*

### Thao tác của user

- Trả lời lần lượt câu hỏi của AI.
- Cung cấp 2 link Figma quan trọng: **Design System (nguồn)** và **Figma đích (output)**.
- Có thể nói "đã có file rồi" + paste/upload sẵn `project-brief.md` để skip phần phỏng vấn.
- **Quan trọng — chuẩn bị Figma đích NGAY từ đầu**: copy page `Template UI` / sample screens từ file Design System sang file đích. Lý do: MCP `use_figma` chỉ chạy trên **file active**, không clone cross-file được — nếu không copy trước, B5 không có template để clone.

### Các mục trong project-brief.md

1. Thông tin chung (tên dự án, codename, deadline, lead)
2. Mô tả dự án (bối cảnh, mục tiêu, domain, tính năng lớn)
3. Đối tượng người dùng (persona, ngữ cảnh)
4. **Design System (nguồn)** — link Figma + file key + phạm vi
5. **Figma đích (output)** — link Figma + file key + cấu trúc page
6. Ràng buộc thiết kế (platform, brand, accessibility, localization)
7. Quy định cho AI (phải làm / không được làm / khi nào dừng)
8. Tham chiếu (tài liệu, stakeholder)
9. Checklist trước khi giao cho AI

### Gate
Không sang B2 cho đến khi mục 4 (Design System link) và mục 5 (Figma đích link) đã có.

---

## Bước 2 — AI đọc design-system-rules

**Mục tiêu**: AI nắm các **quy định nền tảng** về cách thiết kế với Design System **trước khi đụng vào Figma** — tránh các lỗi Plugin API và sai pattern hay gặp. Đồng thời tạo bản local của rules để dự án có thể tuỳ biến.

**Tại sao đọc rules trước DS**: rules dạy AI *cách khảo sát DS* (Bước A của rules), *cách quyết định reuse vs custom*, *cách xử lý font/component import*. Đọc rules trước → B3 khảo sát DS có chuẩn để bám vào.

### Thao tác của AI

1. **Kiểm tra working directory đã có `references/design-system-rules.md` chưa**:
   - **Chưa có** → tạo folder `references/` (nếu chưa có) rồi copy file `design-system-rules.md` từ skill bundle (`<skill>/references/design-system-rules.md`) ra `<working-dir>/references/design-system-rules.md`. Báo user: *"Đã copy rules mẫu ra `references/design-system-rules.md`, bạn có thể sửa thêm rule riêng cho dự án nếu muốn."*
   - **Đã có** → đọc bản local hiện tại (có thể user đã sửa). Báo user: *"Đã load `references/design-system-rules.md` của dự án (đã được tuỳ chỉnh)."*
2. Đọc file `references/design-system-rules.md` (bản trong working dir).
3. Tóm tắt cho user 1 đoạn ngắn các nguyên tắc cốt lõi sẽ áp dụng:
   - Dùng instance component có sẵn, không tự build lại
   - Frame tự tạo chỉ làm layout container (không styling)
   - Khảo sát DS trước khi viết code Figma (template-level → composite → atom → frame)
   - Quyết định detach vs giữ instance theo bảng
   - Tuân thủ Plugin API rules (preload fonts, tách `setProperties`, `appendChild` rồi mới `FILL`, không append vào instance)
   - **Override content (text/data/header) qua `setProperties` + sửa text node = việc bình thường, KHÔNG cần hỏi user.**
   - **Chỉ DỪNG-HỎI khi**: thêm/xóa node con, đổi cấu trúc layout, hoặc buộc phải `detach`.
   - **Preload font đúng cách**: `findAll(TEXT)` rồi loop load HẾT font xuất hiện — không hardcode danh sách font cố định.
4. Báo: *"Đã nạp design-system-rules. Sang B3 (khảo sát Design System theo đúng quy trình rules)?"*

### Thao tác của user

- Không cần làm gì, chỉ chờ AI báo xong rồi confirm sang B3.
- Nếu muốn override/bổ sung rule cho dự án này → có 2 cách:
  - Nói trong chat → AI ghi nhận trong context turn này (không persist).
  - **Sửa trực tiếp `references/design-system-rules.md` trong working dir** → persist cho dự án, AI sẽ đọc bản đã sửa ở các lần chạy sau.

### Gate
Không sang B3 nếu user phản hồi *"khoan, có rule X tôi muốn đổi"* — dừng lại discuss.

---

## Bước 3 — AI học Design System (nguồn)

**Mục tiêu**: AI nắm chắc components, tokens, patterns có sẵn để **reuse** ở B4/B5. Áp dụng đúng quy trình "khảo sát" của rules đã đọc ở B2.

### Logic chạy

```
Nếu là lần đầu chạy dự án này:
    → Chạy quy trình ĐẦY ĐỦ (3.1)
Ngược lại:
    → Chạy quy trình INCREMENTAL — chỉ check page "Template UI" (3.2)
```

### 3.1. Quy trình ĐẦY ĐỦ (lần đầu)

1. **Đọc skill `figma-use`** — bắt buộc trước mỗi `use_figma` call.
2. Kiểm tra MCP Figma available. Nếu không → `search_mcp_registry(["figma"])` + `suggest_connectors`.
3. Dùng MCP đọc file Design System ở link trong Start/project-brief.md mục 4:
   - `Figma:get_metadata` để xem cấu trúc file (page nào, có page Template/Sample/Patterns/Template UI không)
   - `Figma:get_variable_defs` cho tokens (color/spacing/typo)
   - `Figma:search_design_system` cho components
   - `Figma:get_screenshot` cho ảnh đại diện component quan trọng
4. **Khảo sát theo Bước A của rules B2** (thứ tự ưu tiên):
   - Đọc page chứa template/sample TRƯỚC (tên có thể là `Template`, `Sample`, `Example`, `Patterns`, hoặc `Template UI`) — học pattern chuẩn user đang dùng
   - Quét COMPONENT/COMPONENT_SET size lớn (≥400×200) → template-level components quan trọng
   - Quét atoms (Button, Input, Table, Sidebar, Modal...)
5. Tóm tắt cho user trong chat (không cần tạo folder design-system/ trừ khi user yêu cầu):
   ```
   Đã đọc Design System:
   - Tokens: N color, M typo, K spacing
   - Components atomic: <liệt kê>
   - Components molecules: <liệt kê>
   - Components organisms: <liệt kê>
   - Patterns / template pages: <nếu có>
   - Lưu ý: <component nào deprecated, primary version nào>
   ```
6. Lưu nhẹ kết quả trong context — không cần file output để giữ skill gọn.

### 3.2. Quy trình INCREMENTAL (lần thứ 2+)

Chỉ kiểm tra **page tên "Template UI"** (hoặc tên tương đương user đã chỉ định trong project-brief.md):

1. `Figma:get_metadata` chỉ page "Template UI"
2. So sánh với những gì AI đã biết (từ context hoặc file ghi chú trước đó).
3. Nếu có **template/component mới** → đọc thêm, báo user.
4. Nếu **không có gì mới** → báo: *"Không phát hiện template mới trong page 'Template UI'. Tiếp tục B4?"*

User có thể chủ động nói: *"Có Template UI mới tên X, đọc giúp"* — AI nhảy thẳng vào đọc component đó.

### Gate
MCP fail → dừng, báo lỗi, không tự sang B4.

---

## Bước 4 — Test MCP bằng popup chào mừng

**Mục tiêu**: kiểm chứng MCP có quyền **ghi** vào Figma đích trước khi đầu tư thiết kế thật. Đồng thời là phép thử áp dụng đúng rules ở B2 + DS ở B3.

### Thao tác của AI

1. **Đọc skill `figma-use`** trước khi gọi `use_figma`.
2. Mở file Figma đích (link từ Start/project-brief.md mục 5).
3. Tạo **một Page mới tên `🧪 MCP Connection Test`** (nếu chưa có).
4. Trong page đó, tạo **một popup/modal** với:
   - **Title**: "Chào mừng bạn đến với dự án mới"
   - **Button**: "Quẩy thôi"
   - **Bắt buộc**: dùng component Modal/Popup + Button **có sẵn trong Design System** đã đọc ở B3. Không vẽ shape mới.
   - Bind variables (color/typo/radius) từ Design System — không hardcode.
   - Auto-layout cho popup container.
   - Áp dụng các Plugin API rules từ B2: preload fonts, tách `setProperties`, append rồi mới set `FILL`.
5. Verify bằng `Figma:get_screenshot` node-id popup vừa tạo.
6. Báo cáo:
   ```
   ✅ MCP write OK
   - Frame popup: <node-id>
   - Components reused: Modal/<tên>, Button/<tên>
   - Screenshot: <attach hoặc nói đã chụp>
   - Tokens dùng: primary-500, text-100, radius-md
   ```

### Thao tác của user

- Mở Figma kiểm tra popup hiển thị đúng.
- Confirm: "ok B4", "đẹp rồi", "tiếp" → AI sang B5.
- Nếu sai (popup xấu, sai component) → user feedback cụ thể, AI sửa rồi test lại.

### Gate
- Nếu Design System **thiếu component Modal hoặc Button** → dừng, báo user, không vẽ shape thô.
- Không sang B5 nếu user chưa confirm.

---

## Bước 5 — Thiết kế màn hình từ SRS

**Mục tiêu**: build thiết kế thật vào Figma đích cho từng màn trong folder `SRS/`.

### Thao tác của AI

#### 5.1. Đọc folder SRS

1. Liệt kê file trong folder `SRS/` (user đã cung cấp đường dẫn hoặc mặc định cùng cấp với working dir).
2. Đọc theo định dạng (`.md`, `.docx`, `.pdf`, `.xlsx`).
3. Trích danh sách màn hình thành bảng:
   | # | Tên màn | Mục đích | States cần design | Ưu tiên |
4. Báo user bảng tổng quan + đề xuất thứ tự thiết kế (màn gốc trước, phụ thuộc sau).

#### 5.2. Auto-trigger khi có SRS mới

- Mỗi lần user nói "có SRS mới", "thêm file vào SRS rồi", hoặc skill phát hiện file mới so với lần đọc trước → **tự động** đọc và bổ sung vào danh sách màn hình.
- Báo user: *"Phát hiện N file SRS mới. Sẽ thiết kế: <liệt kê>. OK chạy chứ?"*

#### 5.3. Thiết kế từng màn

Với **mỗi màn**, lặp:

1. **Plan ngắn** trong chat (1–2 dòng): frame size, layout, components sẽ dùng.
   - Áp dụng quy trình map yêu cầu → component từ rules B2: hỏi tuần tự template-level → composite → atom → cuối mới Frame tự tạo
   - Quyết định **detach vs giữ instance** theo bảng ở rules B2
2. **CLONE template trước, KHÔNG build app-shell from scratch** (quy tắc đầu tiên của B5):
   - Tìm frame template gần nhất với màn cần làm trong page `Template UI` của file đích (đã copy sẵn ở B1)
   - Clone bằng `clone()` hoặc duplicate node → rename thành `Screen/<Tên màn>`
   - **Post-clone bắt buộc**: scan `visible` của TẤT CẢ node con trước khi override — template hay có cột/element ẩn sẵn (`visible=false`), không scan dễ override nhầm hoặc miss data slot.
3. **Override theo thứ tự cố định** (tránh re-render lung tung):
   1. Title / heading
   2. Tabs / navigation
   3. Table headers
   4. Data cells (rows/items)
   5. Cuối cùng: ẩn (`visible=false`) cột/dòng/element thừa không cần cho màn này
4. **Build** qua `use_figma`:
   - Tuân thủ Plugin API rules ở B2: preload fonts (`findAll(TEXT)` load hết), tách `setProperties`, `appendChild` rồi mới `FILL`, không append vào instance
   - Auto-layout mọi container
   - Reuse component Design System (không vẽ lại)
   - Bind variables (không hardcode)
   - Tên frame: `Screen/<Tên màn>` (không dấu tiếng Việt)
5. **Fix overflow/lệch sau khi set text vào cell** (rất hay gặp):
   - Gán `textAutoResize = 'HEIGHT'` cho text node → cao tự co theo nội dung
   - Gán `layoutSizingHorizontal = 'FILL'` cho text node → rộng fill theo cell parent (lưu ý phải `appendChild` xong mới set được)
6. **Verify** bằng `Figma:get_screenshot`.
7. **Self-check theo Checklist của rules B2** trước khi xin confirm:
   - Mọi UI element là instance từ DS (`findAll(n => n.type === 'INSTANCE')`)
   - Không có Rectangle/Ellipse/Text tự custom thay component DS
   - Frame container chỉ làm layout
   - Background bind variable
8. **Xin confirm từng màn**:
   > *"✅ Đã design `Screen/<Tên>` — node-id `X:YY`. Xác nhận hoàn thành màn này? (yes / sửa <gì>)"*
9. Sau khi user confirm → đánh dấu màn đó **done**, sang màn tiếp.

#### 5.4. Chế độ chạy hàng loạt (mass-confirm)

User có thể nói:
- *"Chạy hàng loạt, không cần confirm từng màn"* → AI design liên tục, chỉ báo cáo cuối.
- *"Huỷ chạy hàng loạt"* / *"Confirm từng màn lại"* → AI quay về chế độ confirm-mỗi-màn ngay lập tức (kể cả đang giữa quá trình).

AI **phải** tôn trọng yêu cầu huỷ ngay khi user nói — không "chạy nốt màn này rồi mới dừng".

### Gate
- Design System thiếu component cần thiết → **dừng và hỏi**, không tự vẽ mới.
- SRS có mâu thuẫn / thiếu thông tin chặn → dừng, hỏi user.

### Output B5

Bảng tiến độ cập nhật liên tục:
```
| # | Màn hình | Status | Frame node-id | Components reused |
|---|----------|--------|---------------|-------------------|
| 1 | Login    | ✅ confirmed | 1:23 | Modal, Button, Input |
| 2 | Dashboard| ⏳ chờ confirm | 1:45 | Card, Chart, Nav |
```

---

## Bước 6 — Xuất file spec `.md` cho dev

**⚠️ Bước này CHỈ chạy khi user yêu cầu rõ ràng.** Không tự động chạy sau B5.

Trigger phrase: *"xuất spec"*, *"tạo file spec cho dev"*, *"chạy B6"*, *"export markdown cho code AI"*, v.v.

### Thao tác của AI

1. Hỏi user phạm vi: *"Xuất spec cho tất cả màn đã design, hay chỉ vài màn cụ thể?"*
2. Tạo folder `screens-spec/` trong working directory.
3. Với mỗi màn được chọn, đọc lại frame trên Figma bằng `Figma:get_design_context` + `Figma:get_variable_defs` + `Figma:get_screenshot`.
4. Tạo file `screens-spec/<ten-man-normalize>.md` theo template dưới.
5. Tạo `screens-spec/_index.md` tổng hợp.

### Quy tắc đặt tên file
- Frame `Screen/Login` → `login.md`
- Frame `Screen/User Profile` → `user-profile.md`
- Lowercase, dash, bỏ ký tự đặc biệt và dấu tiếng Việt.

### Format file spec (framework-agnostic)

Mỗi file `.md` gồm:

```markdown
# <Tên màn>

## Metadata
- Figma frame: <link node-id>
- Cập nhật: <ngày>
- Đến từ SRS: <file>

## Mục đích & ngữ cảnh
<User goal — từ đâu đến, đi đâu>

## Layout structure
<Header / sidebar / main / footer — mô tả thuần UI>

## Components used
- <Tên component DS> — link `design-system/components/...` (nếu có)
- ...

## Visual specs
- Spacing: <token>
- Typography: <token>
- Colors: <token, KHÔNG hex>
- Borders / radius / shadow: <token>

## Interactive behaviors
- Click X → ...
- Hover Y → ...
- Form validation: ...
- Loading trigger: ...

## States
- Default: ...
- Empty: ...
- Loading: ...
- Error: ...
- Success: ...

## Responsive
<Breakpoint behavior nếu có>

## Accessibility
- ARIA roles, keyboard nav, focus order

## Acceptance criteria
- [ ] Checklist dev/QA verify

## Open questions
- ...
```

### Nguyên tắc framework-agnostic
- Không nhắc React/Vue/Angular trong file spec
- Không viết code (JSX, template)
- Mô tả bằng vocabulary chung của UI (component, container, list, form)
- AI code đủ thông minh để map sang framework đích

### File `_index.md`

Tổng hợp:
- Bảng tất cả màn (tên / link spec / link Figma / status)
- Sơ đồ navigation
- Components DS dùng nhiều nhất
- **Prompt template gợi ý** để paste cho AI code:
  ```
  Đọc screens-spec/<tên màn>.md.
  Generate code <React/Vue/HTML> với <Tailwind/SCSS/...>.
  Tuân thủ token và component naming trong spec.
  ```

### Output B6

```
✅ Đã tạo screens-spec/:
- _index.md
- N file <screen>.md
- Folder sẵn sàng để paste cho AI code (Cursor / Claude Code / v0 / ...)
```

---

## Nguyên tắc xuyên suốt

- **Báo rõ đang ở bước nào** trong mỗi turn AI phản hồi.
- **Đọc trước, viết sau, spec sau cùng.** Không nhảy bước.
- **Rules trước, DS sau, Figma cuối.** B2 → B3 → B4/B5 là thứ tự đã được tối ưu: AI có rules trong tay mới biết khảo sát DS đúng cách, có DS rồi mới đụng vào file đích.
- **Reuse > Recreate.** Mọi popup/modal/button ở B4 và mọi màn ở B5 đều phải từ Design System.
- **Bind variables.** Không hardcode color/typo/spacing ở Figma.
- **Hỏi khi mơ hồ** thay vì giả định. Đặc biệt khi DS thiếu component, hoặc SRS thiếu thông tin.
- **Tôn trọng confirm gate**: B4 chờ confirm popup OK, B5 confirm từng màn (trừ khi user bật mass-confirm), B6 chỉ chạy khi yêu cầu.
- **Xử lý phản hồi "chưa ok" tại mọi confirm gate**: hỏi **thẳng 1 câu chọn nhanh** (yes/no, A/B) hoặc xin user chỉ điểm cụ thể chỗ chưa ổn. **KHÔNG tự đoán lan man** rồi sửa nhiều thứ một lúc — vừa lãng phí MCP call vừa khó truy lỗi.
- **Báo cáo gọn**: bảng + bullet ngắn. Không đổ tường text.

---

## Bundled resources

- `templates/project-brief.md` — template Bước 1 copy ra working dir
- `references/design-system-rules.md` — quy định nền tảng đọc ở **B2**. Tham chiếu lại ở B3 (khảo sát DS), B4 (test popup), B5 (thiết kế màn).

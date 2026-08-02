---
name: handoff
description: Bàn giao tài liệu nội bộ từ BA sang role khác — tạo file .md (+ .json nếu BM.0x) theo template chuẩn và lưu vào folder phù hợp dưới ../99_document/01_internal_document/ (02_qa/, 03_requirements/ cho BM.0x, 04_user-stories/, 05_clarifications/, 06_glossary/). Dùng khi BA cần share Q&A request gửi PM, BM.01-04, US final, clarification, design decision, pending OQ, glossary cho Dev/Tester/PM. Trigger khi user nói "bàn giao", "share US cho Dev", "trả lời clarification", "publish nội bộ", "hỏi KH".
---

# BA Handoff — Bàn giao nội bộ

Tạo file `.md` (+ `.json` nếu BM.0x) trong folder phù hợp dưới `../99_document/01_internal_document/` để share Dev/Tester/PM. Delivery `.docx`/`.xlsx` formal cho KH (BM.01–04, ULNL, ...) chỉ tạo khi **PM trigger convert** — không tạo trong skill này.

## Khi nào dùng skill này

- **Q&A request gửi KH (qua PM)** — BA tạo file câu hỏi → PM forward KH
- **BM.01–04 push** — sau khi `.md`+`.json` final → copy sang `01_internal_document/03_requirements/` cho Dev/Tester/PM đọc
- **User Story final** → copy sang `01_internal_document/04_user-stories/` cho Dev/Tester
- **Clarification** — Dev/Tester hỏi → BA giải thích bằng `.md`
- **Design decision** — BA + Tech Lead chốt phương án design/framework/architecture
- **Pending OQ** — OQ chưa close vẫn block công việc role khác
- **Domain glossary update** — cập nhật `06_glossary/domain-glossary.md`

Tham chiếu: `../../PROJECT-WORKFLOW.md` section 2 (BA→Dev) và section 3 (BA→Tester), `../../99_document/01_internal_document/README.md`.

## Bước 1 — Xác định loại handoff

| Loại | Tên file đề xuất | Đối tượng nhận chính |
| ---- | ---------------- | -------------------- |
| **BM.01–04 (.md tương ứng .docx Approved)** | `bm0x/BM0X_<tên>_vX.Y.Z.md` | Dev FE/BE, Tester |
| User Story final | `us-<XXX>.md` | Dev FE/BE, Tester |
| Clarification (trả lời Dev/Tester hỏi) | `clarification-<topic>.md` | Role hỏi |
| Design decision | `design-decision-<topic>-<YYYY-MM-DD>.md` | Dev + Tech Lead |
| Pending OQ (chưa close mà block role khác) | `pending-oq-<XXX>.md` | Role bị block |
| Domain glossary update | (cập nhật `../99_document/01_internal_document/06_glossary/domain-glossary.md` thay vì tạo file mới) | Mọi role |
| Khác (ad-hoc) | `<chủ-đề-ngắn>-<YYYY-MM-DD>.md` | (Hỏi user) |

> **Quan trọng — BM.01–04:** mỗi lần `/export-docx` cho ra `.docx` mới trong `99_document/02_delivery_document/04_requirements/`, **bắt buộc** copy file `.md` source tương ứng từ `03_output/md/` sang `../99_document/01_internal_document/03_requirements/` (cùng tên + version) để Dev/Tester đọc nhanh không cần mở `.docx`.

## Bước 2 — Đọc input

Đọc file gốc trong workspace BA trước khi viết handoff:

- **BM.01–04 (.md)**: `03_output/md/BM0X_<tên>_vX.Y.Z.md` — đây là source of truth, đã được BA leader review
- US final: `02_analysis/user-stories/US-XXX_*.md`
- Clarification: BM.0x liên quan (`03_output/md/BM01_PTYC_*.md` hoặc `BM04_TKCT_*.md`) + câu hỏi của Dev/Tester
- Design decision: `02_analysis/analysis/as-is-to-be_*.md` + `nfr_*.md` + ý kiến Tech Lead
- Pending OQ: `.claude/memory/open-questions.md` (mục OQ-XXX cần share)

## Bước 3 — Action theo loại

### Loại 1 — Copy BM.01–04 (.md tương ứng .docx)

**Khi nào:** ngay sau khi `/export-docx` chạy xong cho 1 BM.0x — `.docx` đã xuất vào `99_document/02_delivery_document/04_requirements/`.

**Hành động:** copy file `.md` từ `03_output/md/` sang `../99_document/01_internal_document/03_requirements/`:

```powershell
# Ví dụ với BM.01 v1.0.0
copy 03_output\md\BM01_PTYC_<tên>_v1.0.0.md ..\99_document\01_internal_document\ba\bm0x\BM01_PTYC_<tên>_v1.0.0.md
```

**Quy tắc:**

- **Tên file giữ nguyên** (cùng version với .docx và .json) — Dev/Tester có thể đối chiếu version chính xác
- **KHÔNG sửa nội dung** trong khi copy — file `.md` ở `99_document/01_internal_document/` là "read-only view" cho role khác
- **Giữ mọi version** — không xoá file cũ khi bump version
- Nếu version mới (1.1.0, 2.0.0…) → copy file mới song song, không ghi đè file cũ
- Mention Dev + Tester trong Slack/Jira: "BM.01 v1.1.0 đã publish, đọc tại `99_document/01_internal_document/03_requirements/BM01_PTYC_<tên>_v1.1.0.md`"

**Vì sao copy .md không phải .docx:**

- Dev/Tester preview nhanh trên Git/VSCode (không cần Word)
- Diff giữa version dễ đọc trên Git
- AI agent đọc được trực tiếp (không cần parse .docx)
- Reference từ `99_document/01_internal_document/04_user-stories/us-*.md` đến section cụ thể của BM.0x dễ hơn (link Markdown anchor)

### Loại 2+ — Tạo các file .md handoff khác

(US final, clarification, design-decision, pending-oq — xem template Bước 4)

## Bước 4 — Viết file .md theo template (cho loại 2+)

### Template: User Story final (`us-<XXX>.md`)

```markdown
---
type: ba-handoff
subtype: user-story
us_id: US-<XXX>
from: BA
to: Dev, Tester
date: YYYY-MM-DD
status: Approved | In Review
related_bm: BM01_PTYC_*.docx, BM04_TKCT_*.docx
---

# US-<XXX>: [Tiêu đề ngắn]

**As a** [role]
**I want** [action]
**So that** [benefit]

## Acceptance Criteria

### AC1 — [Tên ngắn]

**Given** [trạng thái ban đầu]
**When** [hành động]
**Then** [kết quả mong đợi]

### AC2 — ...

## Reference

- BM.01 PTYC: `99_document/02_delivery_document/04_requirements/BM01_PTYC_*.docx` § [Section]
- BM.04 TKCT: `99_document/02_delivery_document/04_requirements/BM04_TKCT_*.docx` § [Màn hình]
- Business rules: `02_ba/02_analysis/analysis/business-rules_*.md` § [BR-XXX]
- Figma: [link]

## Notes cho Dev / Tester

- [Note cụ thể, edge case, assumption nếu có]
```

### Template: Clarification (`clarification-<topic>.md`)

```markdown
---
type: ba-handoff
subtype: clarification
from: BA
to: [Dev | Tester | Dev+Tester]
date: YYYY-MM-DD
asked_by: [Tên role + người hỏi]
---

# Clarification: [Tiêu đề câu hỏi gốc]

## Câu hỏi gốc

[Quote nguyên văn câu hỏi từ Dev/Tester]

## Trả lời

[Trả lời chi tiết — bullet point hoặc bảng]

## Reference

- BM.0x: `99_document/02_delivery_document/04_requirements/BM0X_*.docx` § [Section]
- Decision: `[DEC-XXX nếu có]`
- Workshop / Email: `01_input/meeting-notes/YYYY-MM-DD_*.md`

## Tác động

- US nào bị ảnh hưởng: [US-XXX]
- AC nào cần sửa: [AC-Y]
- Có cần bump version BM.0x không: [Có/Không]
```

### Template: Design decision (`design-decision-<topic>-<YYYY-MM-DD>.md`)

```markdown
---
type: ba-handoff
subtype: design-decision
from: BA + Dev
to: Dev, Tester, PM
date: YYYY-MM-DD
status: Confirmed
---

# Design Decision: [Tiêu đề]

## Bối cảnh

[Tại sao cần quyết định này]

## Phương án xem xét

| # | Phương án | Ưu | Nhược |
| - | --------- | -- | ----- |

## Quyết định

[Phương án đã chọn, tại sao]

## Tác động

| Role | Tác động |

## Reference

- NFR: `02_ba/02_analysis/analysis/nfr_*.md`
- Tech Lead consultation: [tên]
```

### Template: Pending OQ (`pending-oq-<XXX>.md`)

```markdown
---
type: ba-handoff
subtype: pending-oq
oq_id: OQ-<XXX>
from: BA
to: [Role bị block]
date: YYYY-MM-DD
status: Pending KH reply | Pending PM decision
priority: P0 | P1 | P2
---

# OQ-<XXX>: [Câu hỏi]

## Tình trạng

- Đang chờ: [Ai trả lời — KH / PM / Tech Lead]
- Deadline kỳ vọng: [YYYY-MM-DD]
- Block: [Role nào không làm tiếp được + công việc cụ thể bị block]

## Assumption tạm (để role khác không block)

[BA đề xuất assumption tạm. Role khác tag `[PENDING-OQ-<XXX>]` trong artifact của họ.]

## Khi nào sẽ resolve

- [Mô tả điều kiện trigger resolve — vd: sau workshop KH ngày X]
```

## Bước 5 — Lưu vào folder phù hợp dưới 99_document/01_internal_document/

| Loại file | Folder đích |
| --------- | ----------- |
| BM.01-04 (`.md` + `.json`, copy từ `03_output/md/` + `03_output/json/`) | `03_requirements/` |
| User Story `us-*.md` | `04_user-stories/` |
| Clarification, design-decision, pending-oq | `05_clarifications/` |
| Q&A request gửi PM forward KH | `02_qa/` |
| Domain glossary update | `06_glossary/` |

Cấu trúc minh hoạ:

```text
../99_document/01_internal_document/
├── 02_qa/
│   └── qa-<topic>-<YYYY-MM-DD>_request.md
├── 03_requirements/
│   ├── BM01_PTYC_<tên>_vX.Y.Z.md  + .json
│   ├── BM02_TKTT_<tên>_vX.Y.Z.md  + .json
│   ├── BM03_TKCSSDL_<tên>_vX.Y.Z.md + .json
│   └── BM04_TKCT_<tên>_vX.Y.Z.md  + .json
├── 04_user-stories/
│   └── us-<XXX>.md
├── 05_clarifications/
│   ├── clarification-<topic>-<YYYY-MM-DD>.md
│   ├── design-decision-<topic>-<YYYY-MM-DD>.md
│   └── pending-oq-<XXX>.md
└── 06_glossary/
    └── domain-glossary.md
```

## Bước 6 — Thông báo

Sau khi tạo file, gợi ý BA:

1. Notify Slack/Teams channel + mention role nhận
2. Nếu là quyết định lớn (design decision, scope clarification) → cập nhật `../99_document/01_internal_document/05_clarifications/decisions.md`
3. Nếu là US final → mention Dev+Tester check + comment back nếu có thắc mắc

## Quy ước

- **Không edit file đã publish** — nếu cần update → tạo file mới mention "update của file gốc".
- **US final** publish khi: BM.04 Approved + AC đã được Tester confirm testable.
- **Pending OQ** sẽ remove khi OQ close — replace bằng `clarification-<topic>.md` mô tả câu trả lời cuối.

# SYSTEM RULES — AI-WMS Workspace

> **Phạm vi áp dụng:** Toàn bộ Agent hoạt động trong workspace `ai-agent-wms`.  
> **Ưu tiên:** Rule này có độ ưu tiên CAO NHẤT. Nếu có xung đột với rule cấp dưới, rule này thắng.  
> **Cập nhật:** 2026-08-02 | v2.0.0

---

## PHẦN 1 — NGUYÊN TẮC CỐT LÕI (BẤT BIẾN)

Đây là 5 nguyên tắc không được vi phạm trong bất kỳ tình huống nào:

### 1.1 Không bịa — Đánh dấu thay vì đoán

Khi thiếu thông tin, KHÔNG được tự suy diễn hay điền nội dung không có căn cứ. Phải dùng các nhãn:
- `[CẦN XÁC NHẬN]` — thông tin cần hỏi lại stakeholder
- `[CẦN BỔ SUNG]` — nội dung chưa có, cần cung cấp
- `[GIẢ ĐỊNH: ...]` — rõ ràng là giả định, ghi rõ căn cứ
- `⚠ CONFLICT` — mâu thuẫn với baseline đã ký, cần chốt trước khi tiếp tục

### 1.2 In trong chat trước — Xác nhận rồi mới ghi file

Mọi output phải được hiển thị trong chat cho người dùng xem trước. Chỉ xuất file (`.md`, `.docx`, `.drawio`, `.json`...) sau khi người dùng **xác nhận hoặc yêu cầu xuất**.  
Ngoại lệ duy nhất: người dùng chủ động nói "xuất ngay" hoặc "lưu luôn" trong yêu cầu.

### 1.3 Tiếng Việt — Định dạng chuẩn

- **Ngôn ngữ:** Tiếng Việt toàn bộ nội dung tài liệu. Kỹ thuật/tên hệ thống giữ nguyên tiếng Anh.
- **Ngày tháng:** `dd/mm/yyyy` (không dùng ISO 8601 trong tài liệu)
- **Font:** Unicode (không dùng TCVN, không dùng ký tự đặc biệt thay thế)
- **Không dùng từ mơ hồ:** "có thể", "nếu cần", "tùy trường hợp", "thường thì"

### 1.4 Baseline là nguồn sự thật duy nhất

- `ba/documents/*/baseline/` là **Single Source of Truth (SSoT)** cho Dev, Test và AI Agent.
- Mọi quyết định kỹ thuật, viết code, viết test case phải tham chiếu về baseline.
- Baseline chỉ được tạo ra sau khi có **sign-off** từ phía khách hàng hoặc BA Lead.
- Khi có CR thay đổi baseline → phải chạy `evaluate-cr` → `update-cr-docs` → promote lên baseline mới, version cũ move sang `old/`.

### 1.5 Không tự thêm/xóa cấu trúc tài liệu chuẩn

Các tài liệu chuẩn (PTYC BM.01, TKCT BM.04, QTCT) có cấu trúc cố định. Agent KHÔNG được:
- Tự thêm section không có trong template
- Bỏ section dù section đó "có vẻ không áp dụng" (phải ghi `(Không áp dụng)` + lý do)
- Đổi tên heading section

---

## PHẦN 2 — KIẾN TRÚC THƯ MỤC VÀ VAI TRÒ

### 2.1 Sơ đồ tổng quan

```
ai-agent-wms/
├── rules/          ← Rule cho Agent (file này nằm đây)
├── skills/         ← Kỹ năng Agent (50+ skills)
├── workflows/      ← Luồng tự động hóa
│
├── raw/            ← File GỐC từ khách (KHÔNG chỉnh sửa)
├── knowledge/      ← File .md đã chuyển đổi từ raw/ (Agent đọc ở đây)
│
├── ba/             ← Sản phẩm BA (trọng tâm)
├── deliverables/   ← File .docx gửi khách (build artifact)
├── dev/            ← Sản phẩm Dev
├── test/           ← Sản phẩm Test
└── tools/          ← Scripts tiện ích
```

### 2.2 Vai trò của từng thư mục

| Thư mục | Mục đích | Ai tạo | Ai đọc |
|---------|----------|--------|--------|
| `raw/` | File gốc khách gửi (pdf, docx, png, xlsx) | Khách hàng | Không ai đọc trực tiếp |
| `knowledge/` | File .md chuyển đổi từ `raw/` | Tools (pdf/doc_to_markdown) | Agent, BA |
| `ba/stakeholders/` | Quản lý Stakeholder | BA | BA, PM |
| `ba/requirements/` | Requirement Log, Traceability, Business Rules, Glossary | BA | BA, Dev, Test |
| `ba/documents/mom/` | Biên bản họp | BA | BA, KH |
| `ba/documents/brd/` | Business Requirements Document | BA | BA, KH |
| `ba/documents/srs/` | SRS/PTYC (BM.01 + BM.04) | BA | BA, Dev, Test, KH |
| `ba/documents/cr/` | Change Requests | BA | BA, PM, KH |
| `ba/documents/diagrams/` | Sơ đồ quy trình, activity, sequence | BA + Skills | Dev, Test |
| `ba/project/` | Overview, version log, scope | BA, PM | Tất cả |
| `ba/qa/` | Q&A với khách hàng | BA | BA, PM |
| `deliverables/` | File docx/pdf gửi khách | Tools (export_to_word) | KH |
| `dev/design/baseline/` | TKCT đã ký | BA, Dev | Dev, Test |
| `test/` | Test plan, TC, results, bugs | Test | Dev, Test |
| `tools/` | Scripts chuyển đổi | BA | BA |

### 2.3 Quy tắc tuyệt đối về `raw/`

- **KHÔNG BAO GIỜ** chỉnh sửa file trong `raw/`.
- **KHÔNG** đặt file tạm, output, hay file làm việc vào `raw/`.
- Khi khách gửi file mới, **copy vào `raw/` rồi chạy tools** để tạo bản `.md` trong `knowledge/`.

---

## PHẦN 3 — VÒNG ĐỜI TÀI LIỆU

### 3.1 Chuỗi trạng thái

```
[Nhận yêu cầu]
     │
     ▼
  draft/          ← BA soạn thảo, chỉnh sửa tự do
     │
     ▼ (BA hoàn thiện, sẵn sàng gửi KH)
   new/           ← Chờ review từ khách hàng / BA Lead
     │
     ├──(KH yêu cầu sửa)──► draft/ (lặp lại)
     │
     ▼ (KH SIGN-OFF)
 baseline/        ⭐ NGUỒN SỰ THẬT — Dev & Test đọc tại đây
     │
     ▼ (CR được duyệt, version mới lên baseline)
   old/           ← Lưu trữ, không sửa, tra cứu lịch sử
```

### 3.2 Điều kiện promote tài liệu

| Từ → Đến | Điều kiện bắt buộc |
|---|---|
| `draft/` → `new/` | BA hoàn thiện bản thảo, tự review xong |
| `new/` → `baseline/` | Có xác nhận sign-off (email/V-Office/MoM) từ khách hoặc PM |
| `baseline/` → `old/` | Baseline mới đã được tạo và ký (sau CR) |

### 3.3 Quy tắc khi promote

Khi move file từ `baseline/` sang `old/`:
1. **Đổi tên file** để phân biệt: thêm suffix `_v{version}` vào tên file trong `old/`
2. **Cập nhật** `ba/project/version_log.md` với thông tin: ngày, version cũ, version mới, lý do
3. **Không xóa** bất kỳ file nào trong `old/`

---

## PHẦN 4 — QUY ƯỚC ĐẶT TÊN FILE

### 4.1 File Markdown làm việc (trong `draft/`, `new/`, `baseline/`)

```
{TenTaiLieu}.md
```
> Ví dụ: `SRS_NhapKho.md`, `MOM_KickOff_20260728.md`
> KHÔNG có date prefix — version quản lý qua Git commit history và `version_log.md`

### 4.2 File trong `old/` (lưu trữ)

```
{TenTaiLieu}_v{MAJOR}.{MINOR}.md
```
> Ví dụ: `SRS_NhapKho_v1.0.md` (phiên bản bị thay thế bởi v2.0 ở baseline)

### 4.3 File deliverables gửi khách

```
{DDMMYYYY}_{LoaiTL}_{TenTaiLieu}_v{MAJOR}.{MINOR}.{PATCH}.docx
```
> Ví dụ: `14072026_SRS_XuatKho_v1.0.0.docx`
> Có ngày + version vì là snapshot giao khách, cần truy vết

### 4.4 File sơ đồ (trong `ba/documents/diagrams/`)

```
{YYYY-MM-DD}_{loai}_{TenQuyTrinh}.{ext}
```
> Ví dụ: `2026-07-31_process_nhap-kho-thu-hoi.drawio`

### 4.5 File CR

```
CR-{NNN}_{YYYY-MM-DD}_{TomTat}.md
```
> Ví dụ: `CR-001_2026-08-01_bo-sung-man-hinh-tiep-nhan.md`

---

## PHẦN 5 — QUY TẮC GIAO TIẾP VÀ OUTPUT CHO AGENT

### 5.1 Trước khi bắt đầu bất kỳ task nào

Agent phải xác định:
1. **Context dự án** — đọc `ba/project/project_overview.md` nếu chưa có trong context
2. **Tài liệu baseline hiện tại** — xác định file nào đang là SSoT cho task này
3. **Giai đoạn** — đang ở đâu trong workflow BA (tiếp nhận / phân tích / soạn tài liệu / CR)

### 5.2 Khi tạo/sửa tài liệu

- Xuất draft vào `ba/documents/{loai}/draft/` hoặc subfolder tương ứng
- KHÔNG ghi thẳng vào `baseline/` hoặc `new/` — phải qua đúng quy trình promote
- Mọi output trung gian (spec JSON, layout JSON, script tạm) lưu vào subfolder tương ứng, không để lộn vào thư mục chính

### 5.3 Khi đọc tài liệu để làm context

Thứ tự ưu tiên đọc:
1. `ba/documents/*/baseline/` — ưu tiên cao nhất (SSoT)
2. `knowledge/processes/` — quy trình nghiệp vụ
3. `knowledge/requirements/` — tài liệu yêu cầu gốc
4. `ba/requirements/requirement_log.md` — danh sách yêu cầu
5. `ba/requirements/glossary.md` — thuật ngữ

### 5.4 Sơ đồ và diagram

| Trường hợp | Tool sử dụng |
|---|---|
| Sơ đồ trong tài liệu .md (PTYC, TKCT) | Mermaid code block |
| Sơ đồ quy trình swimlane cho BA | Skill `create-process` → file `.drawio` |
| Activity diagram luồng nghiệp vụ | Skill `create-activity-diagram` → file `.drawio` |
| Sequence diagram | Skill `create-sequence-diagram` → file `.mermaid` |
| ERD, Class diagram | Skill `create-uml` → Mermaid nhúng trong `.md` |

---

## PHẦN 6 — PHÂN CÔNG ROLES

### 6.1 Ranh giới trách nhiệm

| Role | Sản phẩm chính | Nguồn đọc | Folder output |
|------|---------------|-----------|--------------|
| BA | PTYC, TKCT, MoM, BRD, Diagrams, CR analysis | `knowledge/`, `ba/documents/baseline/` | `ba/` |
| Dev | TKCT (technical), API Spec, Code Review | `ba/documents/srs/baseline/`, `dev/design/baseline/` | `dev/` |
| Test | Test Plan, Test Cases, Bug Reports | `ba/documents/srs/baseline/`, `test/test-plan/baseline/` | `test/` |
| PM | Version Log, CR approval, Deliverables | `ba/project/`, `deliverables/` | `ba/project/`, `deliverables/` |

### 6.2 Ai được đọc gì

- `raw/` — Không ai đọc trực tiếp (chỉ tools chuyển đổi)
- `knowledge/` — BA, Agent
- `ba/documents/*/draft/` — BA only
- `ba/documents/*/new/` — BA + Khách hàng review
- `ba/documents/*/baseline/` — Tất cả (Dev, Test, Agent, PM, KH)
- `ba/documents/*/old/` — BA khi cần tra cứu lịch sử

---

## PHẦN 7 — CHẤT LƯỢNG VÀ KIỂM SOÁT

### 7.1 Trước khi xuất file bất kỳ

Agent tự kiểm tra:
- [ ] Không có nhãn `[CẦN XÁC NHẬN]` chưa được xử lý
- [ ] Không có bảng rỗng (phải có ít nhất 1 dòng dữ liệu hoặc `(Không áp dụng)`)
- [ ] Không dùng từ mơ hồ trong tài liệu chuẩn
- [ ] Tên file đúng quy ước
- [ ] Lưu vào đúng subfolder theo vòng đời

### 7.2 Không tự promote baseline

Agent KHÔNG tự ý chuyển file từ `draft/` sang `new/` hay `new/` sang `baseline/`. Việc này phải do BA/PM thực hiện sau khi có xác nhận thực tế từ các bên liên quan.

### 7.3 Version log

Mọi thay đổi quan trọng (promote baseline, CR approve, rollback) phải được ghi vào `ba/project/version_log.md` với format:

```
| Ngày | Tài liệu | Từ version | Đến version | Lý do | Người thực hiện |
```

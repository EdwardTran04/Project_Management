# BA RULES — Quy Tắc Hoạt Động Vai Trò Business Analyst

> **Phạm vi áp dụng:** Agent khi hoạt động với vai trò BA trong dự án AI-WMS.  
> **Kế thừa:** Toàn bộ rule từ `rules/AGENTS.md` (System Rules). File này bổ sung quy tắc chuyên biệt cho BA.  
> **Cập nhật:** 2026-08-02 | v2.0.0

---

## PHẦN 1 — ĐỊNH NGHĨA VAI TRÒ BA

BA trong dự án AI-WMS là cầu nối giữa khách hàng (Viettel) và đội kỹ thuật (Dev, Test). BA chịu trách nhiệm:

1. **Tiếp nhận & hiểu yêu cầu** từ khách hàng
2. **Phân tích & cấu trúc hóa** yêu cầu thành tài liệu chuẩn
3. **Quản lý vòng đời tài liệu** từ draft đến baseline
4. **Quản lý thay đổi** khi có CR
5. **Đảm bảo Dev & Test** hiểu đúng và đủ yêu cầu

**Nguyên tắc cốt lõi của BA:** Không bịa, không phán đoán, không suy diễn. Chỉ ghi những gì đã được xác nhận.

---

## PHẦN 2 — QUY TRÌNH LÀM VIỆC THEO GIAI ĐOẠN

### GIAI ĐOẠN 1 — Tiếp nhận & Hiểu Domain

**Khi nào:** Bắt đầu dự án hoặc tiếp nhận module/tính năng mới.

**Luồng làm việc:**
```
Nhận tài liệu gốc từ KH
   │
   ├── Copy vào raw/ (KHÔNG chỉnh sửa)
   │
   ├── Chạy tools/ để convert → knowledge/
   │
   ├── Dùng skill: ba-domain-onboarding (nếu domain lạ)
   │
   ├── Dùng skill: as-is-to-be (nếu có quy trình hiện tại cần so sánh)
   │
   └── Cập nhật ba/project/project_overview.md
```

**Outputs:**
- `knowledge/requirements/` — tài liệu gốc đã convert sang .md
- `knowledge/processes/` — quy trình nghiệp vụ đã phân tích
- `ba/project/project_overview.md` — bối cảnh dự án

**Quy tắc:**
- Đọc kỹ toàn bộ tài liệu gốc trước khi bắt đầu bất kỳ phân tích nào
- Nếu tài liệu gốc mâu thuẫn hoặc không rõ → lập danh sách câu hỏi, dùng skill `prepare-question`
- Không giả định nội dung khi tài liệu gốc chưa rõ

---

### GIAI ĐOẠN 2 — Phân Tích Yêu Cầu

**Khi nào:** Sau khi đã có đủ thông tin từ khách hàng (qua MoM, tài liệu gốc, phỏng vấn).

**Luồng làm việc:**
```
Input: MoM / tài liệu gốc / phỏng vấn
   │
   ├── skill: create-process → Sơ đồ quy trình + bảng transition
   │   └── Output: ba/documents/diagrams/process/*.drawio
   │
   ├── skill: extract-requirements → Bảng FR/NFR
   │
   ├── skill: extract-function-list → Danh sách chức năng
   │
   ├── skill: extract-business-rules → Business Rules
   │   └── Cập nhật: ba/requirements/business_rules.md
   │
   ├── skill: define-nfr → Yêu cầu phi chức năng
   │
   └── Cập nhật: ba/requirements/requirement_log.md
```

**Thứ tự bắt buộc:**
1. `create-process` TRƯỚC (sơ đồ quy trình là nền tảng)
2. `extract-function-list` SAU `create-process` (phụ thuộc vào bảng transition)
3. `create-ptyc` SAU KHI có bảng transition + danh sách chức năng

**Quy tắc viết yêu cầu:**
- Mỗi requirement có mã định danh: `REQ-{NNN}` (ví dụ: REQ-001)
- Mỗi business rule có mã: `BR-{NNN}`
- Requirement phải có nguồn trích dẫn (MoM ngày, tài liệu tên)
- Cập nhật `ba/requirements/requirement_log.md` và `ba/requirements/traceability_matrix.md` ngay khi có requirement mới

---

### GIAI ĐOẠN 3 — Soạn Tài Liệu Chuẩn

**Khi nào:** Sau khi đã có đủ phân tích từ Giai đoạn 2.

#### 3A. Tài Liệu MoM (Biên Bản Họp)

```
Mỗi buổi họp → dùng skill: create-mom
   │
   ├── Output draft: ba/documents/mom/draft/MOM_{TenBuoi}_{DDMMYYYY}.md
   │
   ├── BA review nội dung
   │
   ├── Gửi KH review → move sang: ba/documents/mom/new/
   │
   └── KH ký/xác nhận → move sang: ba/documents/mom/baseline/
```

**Quy tắc MoM:**
- Phải ghi đủ: ngày/giờ/địa điểm, danh sách tham dự, nội dung thảo luận, kết luận, action items (ai làm gì, deadline)
- Action items phải có người thực hiện và ngày hoàn thành cụ thể
- Không để ô trống trong bảng action items

#### 3B. Tài Liệu PTYC/BRD (BM.01)

```
Input: Kết quả Giai đoạn 2 (bảng transition + danh sách chức năng)
   │
   ├── Dùng skill: create-ptyc
   │
   ├── Tuân thủ: rules/ba/rules_ptyc.md (cấu trúc 6 phần BM.01)
   │
   ├── Output draft: ba/documents/srs/draft/PTYC_{TenModule}.md
   │
   ├── BA review → move sang: ba/documents/srs/new/
   │
   └── KH sign-off → move sang: ba/documents/srs/baseline/
```

**Quy tắc bắt buộc cho PTYC:**

Xem chi tiết tại `rules/ba/rules_ptyc.md`. Tóm tắt:
- 6 phần, không thêm/bớt: Giới thiệu → Tổng quan → Nguồn dữ liệu → Yêu cầu chức năng → Yêu cầu phi chức năng → Nghiệm thu
- Bảng Mô tả các bước: ĐÚNG 7 cột (`STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan`)
- Danh sách chức năng: ĐÚNG 5 cột (`STT | Chức năng | Tính năng | Mô tả | Độ ưu tiên`)
- Không để bảng rỗng
- Mọi sơ đồ dùng Mermaid (trong .md); file chỉnh sửa được dùng skill diagram tương ứng

#### 3C. Tài Liệu TKCT (BM.04)

```
Input: PTYC (baseline) + Figma (nếu có) + TKCSSDL
   │
   ├── Dùng skill: create-tkct
   │
   ├── Tuân thủ: rules/ba/rules_tkct.md (cấu trúc 6 phần)
   │
   ├── Mô tả màn hình: dùng skill: create-screen-desc
   │
   ├── Output draft: ba/documents/srs/draft/TKCT_{TenModule}.md
   │
   └── Quy trình promote tương tự PTYC
```

**Quy tắc bắt buộc cho TKCT:**

Xem chi tiết tại `rules/ba/rules_tkct.md`. Tóm tắt:
- Bảng mô tả thành phần màn hình: ĐÚNG 6 cột (`STT | Tên | Kiểu dữ liệu [Độ dài] | Input/Output | Giá trị khởi tạo | Mô tả (Mapping CSDL)`)
- Không để trống cột Mapping CSDL cho trường Output
- Validate phải chi tiết: regex, min/max, bắt buộc hay không, thông báo lỗi cụ thể
- Luồng nghiệp vụ phải mô tả đủ nhánh chính và nhánh ngoại lệ

#### 3D. Tài Liệu CR (Change Request)

```
KH gửi yêu cầu thay đổi
   │
   ├── Tạo file: ba/documents/cr/pending/CR-{NNN}_{date}_{tomtat}.md
   │
   ├── Dùng skill: evaluate-cr
   │   ├── Bảng so sánh Cũ-Mới
   │   ├── Danh sách quy trình/chức năng bị thay đổi
   │   └── Bảng đánh giá 7 hạng mục
   │
   ├── BA review + PM xem xét → move sang: ba/documents/cr/analyzing/
   │
   ├── Trình duyệt → KH phê duyệt → move sang: ba/documents/cr/approved/
   │
   ├── Dùng skill: update-cr-docs → Cập nhật tài liệu baseline
   │
   ├── Promote tài liệu baseline mới
   │
   └── move CR sang: ba/documents/cr/completed/
```

**Quy tắc CR:**
- Phải dùng `evaluate-cr` trước khi approve bất kỳ CR nào
- Không tự áp CR vào baseline khi chưa có kết quả `evaluate-cr` được BA xác nhận
- Cập nhật `ba/documents/cr/cr_log.md` mỗi khi CR thay đổi trạng thái
- CR bị từ chối → move sang `rejected/` kèm lý do

---

### GIAI ĐOẠN 4 — Sơ Đồ & Mô Hình Hóa

**Khi nào:** Song song với Giai đoạn 2 hoặc 3 khi cần diễn đạt bằng hình ảnh.

| Nhu cầu | Skill | Output | Lưu tại |
|---------|-------|--------|---------|
| Quy trình nghiệp vụ (swimlane, BPMN-style) | `create-process` | `.drawio` + `.svg` | `ba/documents/diagrams/process/` |
| Luồng hoạt động hệ thống (phân scope) | `create-activity-diagram` | `.drawio` + `.svg` | `ba/documents/diagrams/activity/` |
| Tương tác giữa các thành phần | `create-sequence-diagram` | `.mermaid` | `ba/documents/diagrams/sequence/` |
| ERD, Class diagram, Use Case diagram | `create-uml` | Mermaid trong `.md` | `ba/documents/diagrams/` |
| Mô tả màn hình từ ảnh/Figma | `create-screen-desc` | Bảng .md | Nhúng vào TKCT |

**Quy tắc sơ đồ:**
- Sơ đồ swimlane quy trình: tên lane = tên actor/vai trò thực tế trong nghiệp vụ
- Tên bước trong sơ đồ PHẢI khớp với tên bước trong bảng mô tả transition (để truy vết)
- File sơ đồ đặt tên theo quy ước: `{YYYY-MM-DD}_{loai}_{TenQuyTrinh}.drawio`

---

### GIAI ĐOẠN 5 — Kiểm Tra & Bàn Giao

**Khi nào:** Trước khi promote lên baseline, trước khi sprint kết thúc, trước khi bàn giao.

```
├── Dùng skill: create-traceability-matrix
│   → Kiểm tra REQ → Chức năng → Test Case coverage
│
├── Dùng skill: review-ac
│   → Rà soát chất lượng Acceptance Criteria
│
├── Dùng skill: doc-status
│   → Tổng hợp trạng thái toàn bộ tài liệu
│
├── Xuất deliverables:
│   → Chuyển baseline .md → .docx → lưu vào deliverables/{loai}/
│
└── Cập nhật ba/project/version_log.md
```

---

## PHẦN 3 — QUẢN LÝ STAKEHOLDER

### 3.1 Stakeholder Register

File: `ba/stakeholders/stakeholder_register.md`

- Cập nhật khi có stakeholder mới hoặc vai trò thay đổi
- Đặc biệt chú ý cột "Mức ảnh hưởng" và "Kênh liên lạc"
- Không để thông tin lỗi thời quá 1 sprint

### 3.2 Q&A Log

File: `ba/qa/questions_log.md`

- **Mọi câu hỏi** gửi cho khách hàng phải được ghi vào đây trước khi gửi
- Khi nhận được câu trả lời → cập nhật ngay vào log, đổi trạng thái thành `✅ Đã trả lời`
- Câu hỏi quá 5 ngày chưa trả lời → escalate lên PM
- Q&A Log là bằng chứng audit cho mọi quyết định nghiệp vụ

### 3.3 Communication Plan

File: `ba/stakeholders/communication_plan.md`

- Cập nhật khi có thay đổi kênh giao tiếp hoặc lịch họp định kỳ

---

## PHẦN 4 — QUẢN LÝ REQUIREMENTS

### 4.1 Requirement Log

File: `ba/requirements/requirement_log.md`

**Quy tắc cập nhật:**
- Mỗi requirement mới từ bất kỳ nguồn nào (MoM, email, phỏng vấn) → thêm ngay vào log
- REQ-ID phải unique và không được tái sử dụng (ngay cả khi requirement bị rejected)
- Trạng thái REQ phải được cập nhật realtime (không để lag > 1 ngày)

**Vòng đời requirement:**
```
New → Analyzing → Approved → In Progress → Done
         │                        │
         ▼                        ▼
     Deferred                 Rejected
```

### 4.2 Traceability Matrix

File: `ba/requirements/traceability_matrix.md`

- Cập nhật sau mỗi sprint
- Mọi REQ phải map được ít nhất 1 SRS section
- Mọi SRS section phải có ít nhất 1 Test Case (TC)
- Báo cáo gaps trong matrix trước khi bàn giao sprint

### 4.3 Business Rules

File: `ba/requirements/business_rules.md`

- Business Rule là ràng buộc nghiệp vụ cố định (ví dụ: "Phiếu nhập kho phải được phê duyệt trước khi ghi nhận vào SAP")
- BR phải có nguồn tham chiếu (MoM, văn bản quy định)
- Khi CR thay đổi BR → phải đánh dấu BR cũ là `Deprecated` và tạo BR mới

### 4.4 Glossary

File: `ba/requirements/glossary.md`

- Cập nhật ngay khi gặp thuật ngữ mới trong dự án
- Mọi thuật ngữ chuyên ngành trong tài liệu BM phải có trong glossary
- Không để một thuật ngữ có 2 định nghĩa khác nhau trong cùng dự án

---

## PHẦN 5 — QUY TẮC SOẠN THẢO TÀI LIỆU BA

### 5.1 Nguyên tắc viết không bịa

```
Câu hỏi BA cần tự hỏi trước khi viết bất kỳ câu nào:
  "Thông tin này đến từ đâu?"

  Có nguồn rõ ràng (MoM, email, tài liệu KH)
    → Viết bình thường, ghi nguồn ở cột "Ghi chú" hoặc footnote

  Không có nguồn, nhưng cần hợp lý để hoàn chỉnh tài liệu
    → Gắn [GIẢ ĐỊNH: ...] và liệt kê để hỏi KH

  Hoàn toàn không biết
    → Gắn [CẦN XÁC NHẬN] và dừng phần đó lại
```

### 5.2 Ngôn ngữ tài liệu chuẩn BM

**DÙNG:**
- Câu khẳng định, chủ động: "Hệ thống hiển thị danh sách..."
- Động từ rõ ràng: "tạo mới", "phê duyệt", "từ chối", "gửi thông báo"
- Con số cụ thể: "tối đa 50 ký tự", "trong vòng 5 giây"

**KHÔNG DÙNG:**
- "có thể", "nếu cần", "tùy trường hợp", "thường thì", "ít nhất là"
- Câu bị động mơ hồ: "được xử lý", "được thực hiện" (bởi ai?)
- Từ không đo được: "nhanh", "nhiều", "đủ", "phù hợp"

### 5.3 Bảng trong tài liệu BM

- Không để ô trống trong bất kỳ bảng nào của tài liệu BM
- Nếu không áp dụng → ghi rõ "(Không áp dụng)" + lý do ngắn
- Header bảng phải đúng số cột quy định (không thêm/bớt cột)
- Không merge cell trong bảng (gây khó đọc và khó maintain)

### 5.4 Sơ đồ trong tài liệu BM

- Sơ đồ trong file `.md`: dùng Mermaid code block
- Sơ đồ cần chỉnh sửa được hoặc in đẹp: dùng skill diagram → file `.drawio`
- Mỗi sơ đồ phải có tiêu đề (Hình X.X: Tên sơ đồ)
- Không dùng ảnh chụp màn hình từ PowerPoint/Word để thay thế sơ đồ

---

## PHẦN 6 — BỘ SKILLS BA VÀ KHI NÀO DÙNG

### 6.1 Chọn skill theo tình huống

| Tình huống | Skill ưu tiên |
|------------|---------------|
| Mới nhận dự án, domain lạ | `ba-domain-onboarding` |
| Cần chuẩn bị câu hỏi trước buổi họp | `prepare-question` |
| Sau buổi họp, cần viết biên bản | `create-mom` |
| Có quy trình hiện tại cần phân tích gap | `as-is-to-be` |
| Cần vẽ quy trình nghiệp vụ (swimlane) | `create-process` |
| Cần break chức năng từ quy trình | `extract-function-list` |
| Cần rút trích FR/NFR từ tài liệu | `extract-requirements` |
| Cần trích xuất business rules | `extract-business-rules` |
| Cần viết Use Case | `create-use-case` |
| Cần viết User Story + AC | `create-user-story` |
| Cần viết tài liệu PTYC BM.01 | `create-ptyc` |
| Cần viết tài liệu TKCT BM.04 | `create-tkct` |
| Cần mô tả màn hình từ Figma/ảnh | `create-screen-desc` |
| Cần xây dựng ERD / Class diagram | `define-data-model` + `create-uml` |
| Khách có thay đổi yêu cầu | `evaluate-cr` → `update-cr-docs` |
| Cần kiểm tra coverage trước bàn giao | `create-traceability-matrix` → `doc-status` |
| Không biết làm gì tiếp theo | `ba-workflow` |

### 6.2 Thứ tự phụ thuộc skill (KHÔNG được đảo)

```
ba-domain-onboarding (nếu cần)
       │
       ▼
as-is-to-be (nếu có quy trình hiện tại)
       │
       ▼
create-process   ←── (PHẢI chạy trước extract-function-list)
       │
       ├──► extract-function-list
       ├──► extract-business-rules
       └──► define-nfr
              │
              ▼
         create-ptyc   ←── (PHẢI có bảng transition + danh sách chức năng)
              │
              ├──► create-tkct
              ├──► define-data-model → create-uml (ERD)
              └──► create-business-testcase → create-traceability-matrix
                                               │
                                               ▼
                                           doc-status (bàn giao)
```

### 6.3 Pipelines tự động (dùng khi yêu cầu rất rõ ràng)

| Pipeline | Khi nào dùng | Input cần |
|----------|-------------|-----------|
| `pipeline-from-mom` | MoM đầy đủ → cần PTYC ngay | MoM + thông tin dự án |
| `pipeline-from-figma` | Có Figma → cần TKCT | Link Figma + PTYC/TKCSSDL |
| `pipeline-full-delivery` | Bàn giao trọn bộ BM.01→04 | MoM + Figma + tech stack |

**Cảnh báo:** Pipeline không tự chạy. Phải gọi đích danh và xác nhận input đầy đủ trước khi chạy.

---

## PHẦN 7 — CHECKLIST BA THEO GIAI ĐOẠN

### 7.1 Checklist Giai đoạn 1 (Tiếp nhận)

- [ ] File gốc đã copy vào `raw/` đúng subfolder
- [ ] File đã convert sang `.md` và lưu vào `knowledge/`
- [ ] `ba/project/project_overview.md` đã cập nhật
- [ ] Danh sách câu hỏi mở đã ghi vào `ba/qa/questions_log.md`
- [ ] Stakeholder register đã cập nhật

### 7.2 Checklist Giai đoạn 2 (Phân tích)

- [ ] Sơ đồ quy trình (swimlane) đã vẽ và lưu vào `ba/documents/diagrams/process/`
- [ ] Bảng transition (7 cột) đã có và đúng format
- [ ] Danh sách chức năng (5 cột) đã có và đúng format
- [ ] Business Rules đã trích xuất và ghi vào `ba/requirements/business_rules.md`
- [ ] Requirement Log đã cập nhật với mọi requirement mới
- [ ] Không còn nhãn `[CẦN XÁC NHẬN]` nào chưa hỏi KH

### 7.3 Checklist trước khi promote lên `new/`

- [ ] Tài liệu đủ 6 phần (PTYC) hoặc 6 phần (TKCT)
- [ ] Không bảng rỗng
- [ ] Không từ mơ hồ
- [ ] Sơ đồ đã render và hiển thị đúng
- [ ] Thuật ngữ mới đã thêm vào Glossary
- [ ] Số REQ-ID trong tài liệu khớp với Requirement Log

### 7.4 Checklist trước khi promote lên `baseline/`

- [ ] Đã có xác nhận sign-off bằng văn bản (email/MoM/V-Office)
- [ ] `ba/project/version_log.md` đã cập nhật
- [ ] File cũ đã move sang `old/` với tên đúng quy ước
- [ ] Traceability Matrix đã cập nhật
- [ ] Team Dev và Test đã được thông báo về baseline mới

### 7.5 Checklist khi có CR

- [ ] CR đã ghi vào `ba/documents/cr/cr_log.md`
- [ ] Đã chạy `evaluate-cr` và có 3 khối output
- [ ] Không còn nhãn `⚠ CONFLICT` chưa được chốt
- [ ] PM đã review bảng đánh giá 7 hạng mục
- [ ] Có sign-off trước khi chạy `update-cr-docs`

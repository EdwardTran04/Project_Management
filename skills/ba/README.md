# BA Skill Suite — Bộ trợ lý Business Analyst chuẩn Viettel Software (VTIT)

> Một bộ ~37 skill ghép thành **dây chuyền làm tài liệu BA hoàn chỉnh**: từ lúc nhận dự án và hiểu nghiệp vụ, đến phân tích yêu cầu, thiết kế tài liệu chuẩn BM.01–BM.04, vẽ sơ đồ, và kiểm thử – bàn giao. Mục tiêu: rút công việc tài liệu của BA từ *hàng giờ gõ tay* xuống *vài phút*, mà vẫn **đúng chuẩn, truy vết được, không bịa**.

---

## 1. Bộ skill này giúp BA làm được gì?

Đọc lần đầu, bạn cần nắm đúng một câu: **đưa nội dung thô của khách hàng vào — nhận tài liệu BA chuẩn ra.** Cụ thể, suite đáp ứng:

- **Hiểu nhanh một domain lạ** trước khi đi gặp khách (banking, insurance, logistics…), kèm khung tài nguyên tham khảo (APQC, sách, nguồn web uy tín).
- **Chuẩn bị khảo sát**: biến tài liệu/MOM thành bộ câu hỏi phỏng vấn phân loại theo BABOK.
- **Ghi biên bản họp (MOM)** đúng mẫu công văn, xuất `.docx`.
- **Phân tích yêu cầu**: bóc tách FR/NFR có chấm chất lượng, trích business rules, phân tích As-Is/To-Be, break danh sách chức năng, viết Use Case / User Story chuẩn.
- **Soạn trọn bộ tài liệu thiết kế**: PTYC (URD/ BRD) → TKTT → TKCSSDL → TKCT (SRS).
- **Đảm bảo chất lượng & bàn giao**: ma trận truy vết (RTM), kiểm tra trạng thái tài liệu.
- **Phân tích đánh giá khi khách hàng có CR hoặc bổ sung/ thay đổi yêu cầu: 
- **Tự động hóa cả dây chuyền** bằng 3 pipeline (MOM→PTYC, Figma→TKCT, full delivery): Áp dụng trong trường hợp yêu cầu bài toán đã rất chi tiết và rõ ràng, BA chỉ cần phân tích yêu cầu và ra tài liệu

**Nguyên tắc xuyên suốt mọi skill:** tiếng Việt · ngày `dd/mm/yyyy` · **không bịa** (thiếu thông tin thì hỏi hoặc đánh dấu `[CẦN XÁC NHẬN]`) · **in kết quả trong chat trước, hỏi rồi mới xuất file** · giữ nhẹ token (chi tiết nằm trong `references/`, chỉ nạp khi cần).

---

## 2. Cách dùng

- **Chưa biết bắt đầu từ đâu** → gọi **`ba-workflow`**: nó hỏi bạn đang ở giai đoạn nào và gợi ý skill phù hợp.
- **Gọi 1 skill lẻ**: chỉ cần mô tả việc cần làm (vd "viết biên bản họp", "break chức năng cho hệ thống này") — skill tự kích hoạt theo `description`, không cần nhớ tên.
- **Chạy cả dây chuyền**: gọi **đích danh** pipeline (`/pipeline-from-mom`, `/pipeline-from-figma`, `/pipeline-full-delivery`). Pipeline **không tự chạy** kể cả khi bạn paste MOM — phải gọi rõ.
- **Mỗi skill đều có mục "Bước tiếp theo"** chỉ ra skill nên dùng kế tiếp → cứ lần theo đó.

> Khuyến nghị nền tảng: chạy `create-project-overview` **một lần đầu dự án** để có `project-overview.md`, rồi paste kèm vào các skill sau làm context.

---

## 3. Danh sách skill theo giai đoạn (kèm Đầu vào → Đầu ra)


### 1 Tiếp nhận & hiểu domain

| Skill | Công dụng | Đầu vào | Đầu ra |
|---|---|---|---|
| `ba-domain-onboarding` | Giải thích domain/ngành & thuật ngữ dưới lăng kính BA | Tên ngành / thuật ngữ / quy trình cần hiểu | Giải thích end-to-end + khung tài nguyên (APQC, sách, nguồn web) |
| `prepare-question` | Sinh câu hỏi khảo sát trước khi gặp khách | Tài liệu / MOM / yêu cầu KH | Bức tranh sơ bộ + bộ câu hỏi BABOK (đã có / cần xác nhận / cần hỏi mới) |
| `as-is-to-be` | Phân tích hiện trạng vs tương lai, tìm gap | Mô tả quy trình hiện tại + pain points | As-Is/To-Be Analysis + Gap Analysis + Business Benefits |


### 2 Họp & trao đổi

| Skill | Công dụng | Đầu vào | Đầu ra |
|---|---|---|---|
| `create-mom` | Viết biên bản họp đúng mẫu | Transcript / note buổi họp | Biên bản (chat) + tùy chọn xuất `.docx` đúng mẫu biên bản họp |
| `process-qa` | Xử lý Q&A, đóng open question sau họp | Danh sách câu hỏi mở / phản hồi KH | Q&A đã xử lý, open question được đóng/cập nhật |

### 3 Phân tích yêu cầu

| Skill | Công dụng | Đầu vào | Đầu ra |
|---|---|---|---|
| `extract-requirements` | Bóc tách FR/NFR + đánh giá sự đầy đủ và rõ ràng của requirements | MOM / phiếu yêu cầu / tài liệu KH | Bảng danh sách requirement theo format có sẵn (FR + NFR, có mã, truy vết, gắn cờ ✅/⚠️) |
| `extract-business-rules` | Từ requirements sẽ trích xuất, tổng hợp ra business rules | Tài liệu yêu cầu / BRD / open-questions | Bảng business rule theo format có sẵn (BR-ID, phân nhóm, Assumed/Confirmed) |
| `create-process` | Vẽ quy trình + bảng mô tả quy trình | Mô tả quy trình nghiệp vụ | Danh sách quy trình + Sơ đồ quy trình + bảng mô tả |
| `extract-function-list` | Break danh sách chức năng | Bảng mô tả quy trình (từ `create-process`) hoặc danh sách yêu cầu | Bảng danh sách chức năng 5 cột (STT/Chức năng/Tính năng/Mô tả/Ưu tiên) |
| `define-nfr` | Định nghĩa yêu cầu phi chức năng | MOM / context dự án | Danh sách yêu cầu phi chức năng theo format có sẵn |
| `create-project-overview` | Tạo tài liệu tổng quan dự án, làm đầu vào cho các skill tiếp sau | Spec / MOM / mô tả hệ thống (thô, dài) | `project-overview.md` cô đọng (input nền cho mọi skill sau) |
| `create-use-case` | Viết Use Case chuẩn + đánh giá chất lượng mô tả | Mô tả tính năng/hệ thống cho từng actor | Mô tả usecase theo format và đánh giá chất lượng |
| `create-user-story` | Viết User Story + AC | Feature / REQ-ID + mô tả | Mô tả User story + Mô tả AC theo format |
| `create-screen` | Tạo màn hình thiết + prompt cho AI UI builder | project-overview/PTYC/BPMN/MOM/danh sách chức năng/ mô tả màn hình | screen-md hoặc prompt Lovable/Figma (theo mode) |
| `create-screen-desc` | Mô tả màn hình từ ảnh/Figma | Screenshot / wireframe màn hình | Bảng mô tả màn hình (Format A 6 cột BO / Format B 8 cột Mobile) |
| `create-feature-spec` đánh giá lại| Đặc tả chi tiết một tính năng | REQ-ID / mô tả feature + màn hình liên quan | Đặc tả chi tiết tính năng theo format (luồng, màn hình, BR áp dụng) |
| `create-traceability-matrix` | Ma trận truy vết REQ→US→UC→TC | Danh sách REQ/US/UC/TC | Ma trận traceability để đối chiếu giữa các yêu cầu và UC/US |
| `review-ac` | Rà soát chất lượng AC trước khi giao Dev/Tester | User Story / AC cần review | Bảng rà soát chất lượng AC (testability, coverage, consistency) |

### 4 Thiết kế tài liệu (chuẩn Viettel — BM.01 → BM.04)

| Skill | Công dụng | Đầu vào | Đầu ra |
|---|---|---|---|
| `create-ptyc` | Phân tích yêu cầu người dùng (URD/ BRD) | MOM/BRD + As-Is/To-Be + BR + NFR | Tài liệu PTYC (BRD/URD) theo format |
| `create-tkct` | Đặc tả chức năng (SRS) | PTYC(URD/ BRD) + TKTT + TKCSSDL + screen desc/Figma | Đặc tả chức năng (mô tả màn hình/ usecase/ us, mapping DB, phân quyền) theo format |
| `define-data-model` | Xây dựng Logical Data Model + vẽ mô hình ERD | Tài liệu PTYC (URD/ BRD)/ Tài liệu SRS/ Đối tượng nghiệp vụ + quan hệ | Mô hình dữ liệu (entity, attribute, relationship, constraint) + Mô hình ERD |

### 5 Tiếp nhận CR, so sánh đánh giá và cập nhật tài liệu
### Lưu ý khi dùng
- Nội dung skill suy luận không có căn cứ sẽ gắn `[Cần xác nhận]`; CR mâu thuẫn baseline đã ký gắn `⚠ CONFLICT` — phải chốt hết các nhãn này trước khi cho update-cr-docs chạy.
- Hạng mục Tiến độ / Nguồn lực / Ngân sách chỉ có số liệu khi BA cung cấp định mức; mặc định là mô tả định tính + `[Cần PM/Dev xác nhận]` — skill không tự bịa man-days/chi phí.
- Muốn đổi format bảng nào → sửa đúng file trong `evaluate-cr/templates/`, không cần đụng SKILL.md.
- Tài liệu mới sau cập nhật cần trình ký lại nếu bản gốc đã được phê duyệt.

| Skill | Công dụng | Đầu vào | Đầu ra |
|---|---|---|---|
| `evaluate-cr` | So sánh yêu cầu Cũ–Mới và đánh giá tác động CR trước khi trình duyệt. | (1) Baseline: file PTYC/URD/SRS hoặc kết quả create-process / extract-function-list trong chat. (2) Nội dung CR: mô tả, email, phiếu CR, danh sách CR. |bảng so sánh yêu cầu Cũ–Mới; danh sách quy trình bị thay đổi + danh sách chức năng bị thay đổi |
| `update-cr-docs` | Áp CR đã duyệt vào tài liệu: đọc lại toàn bộ tài liệu gốc, sửa đúng phần cần sửa, version mới + changelog. | Tài liệu gốc (.docx/.md/.pdf) + Kết quả evaluate-cr đã được BA xác nhận . | Kế hoạch sửa (vị trí mục thực tế → nội dung hiện tại → sửa thành) để BA chốt; file tài liệu bản mới `[tên-gốc]_v[version]_CR-[mã]`

### 🧭 Nhóm điều phối (orchestration - nhóm này chỉ nên được sử dụng khi BA đã clear được toàn bộ yêu cầu của khách hàng)

| Skill | Công dụng | Đầu vào | Đầu ra |
|---|---|---|---|
| `ba-orchestrator` | Điều phối toàn bộ các pipeline tự động hóa từ | MOM khảo sát + thông tin dự án | Tài liệu đầu ra hoàn chỉnh của BA |
| `pipeline-from-mom` | Tự động MOM → PTYC | MOM khảo sát + thông tin dự án | PTYC (BM.01) hoàn chỉnh |
| `pipeline-from-figma` | Tự động Figma → TKCT | Link Figma (+ PTYC/TKCSSDL nếu có) | TKCT (BM.04) hoàn chỉnh |
| `pipeline-full-delivery` | Bàn giao trọn bộ BM.01→04 | MOM + Figma + tech stack + tích hợp | BM.01→BM.04 + checklist bàn giao |
| `ba-workflow` | Bản đồ tổng & gợi ý skill theo giai đoạn | Giai đoạn dự án, output đã có, điểm vướng | Workflow map + skill nên dùng tiếp |

### Nhóm skill advance cho BA
| Skill | Công dụng | Đầu vào | Đầu ra |
|---|---|---|---|
| `define-api-contract` | Xây dựng tài liệu đặc tả API nghiệp vụ | Tích hợp cần định nghĩa + dữ liệu trao đổi | API Contract (endpoint, request/response, error codes) |
| `create-business-testcase` | Test case nghiệp vụ (UAT) | Feature/US + AC + BR | Bộ Business Test Cases (cover AC + edge nghiệp vụ) |
| `doc-status` | Kiểm tra trạng thái tài liệu dự án | Danh sách tài liệu (tên/loại/version/trạng thái) | Document Status Report + cảnh báo + gaps traceability |

### Nhóm skill extend cho BA ( Nhóm skill này có thể chạy độc lập hoặc là vệ tinh của skill lớn hơn)
| Skill | Công dụng | Đầu vào | Đầu ra |
|---|---|---|---|
| `create-activity-diagram` | Activity/User Flow có màu | Mô tả luồng nghiệp vụ | File `.drawio` (import draw.io/Confluence) |
| `create-sequence-diagram` | Sequence diagram phân pha | Mô tả luồng chức năng | File `.mermaid` (đánh số bước, có pha) |
| `create-uml` | Flowchart/ERD/State/Use-Case bằng Mermaid | Nghiệp vụ / entity / use case | Mermaid nhúng trực tiếp vào `.md` |
---

## 4. Phụ thuộc tài liệu (đọc để biết làm cái nào trước)

```
MOM / tài liệu KH
      │
      ▼
project-overview ──► as-is-to-be ─┐
                                  ├─► extract-business-rules ─┐
                                  ├─► define-nfr ─────────────┤
                                  └─► extract-requirements ───┤
                                                              ▼
                                        BM.01 PTYC  ◄──  create-process/extract-function-list
                                              │
              ┌───────────────┬──────────────┼───────────────┐
              ▼               ▼               ▼               ▼
        BM.02 TKTT      BM.03 TKCSSDL    (Use Case /     analyze-figma
         (cần NFR)     (cần data-model)   User Story)    (nếu có Figma)
              └───────────────┴───────────────┴──────────────┘
                                  ▼
                            BM.04 TKCT  ──► create-business-testcase ──► RTM ──► doc-status (bàn giao)
```

Quy tắc cốt lõi: **PTYC (BM.01) là tài liệu gốc** — TKTT, TKCSSDL, TKCT đều tham chiếu ngược về nó.

---

## 5. Quy ước chung của toàn suite

- **Ngôn ngữ:** Tiếng Việt; ngày `dd/mm/yyyy`.
- **Không bịa:** thiếu thông tin → hỏi hoặc đánh dấu `[CẦN XÁC NHẬN]` / `[CẦN BỔ SUNG]` / `[GIẢ ĐỊNH]`.
- **In trong chat trước**, BA xác nhận rồi mới xuất file (`.md` / `.docx` / `.xlsx` / `.drawio` / `.mermaid` tùy skill).
- **Token-light:** SKILL.md giữ gọn, đẩy chi tiết sang `references/` và chỉ đọc khi cần.
- **Bảng không để rỗng** (tài liệu BM): mỗi bảng tối thiểu 1 dòng dữ liệu thật hoặc `(Không áp dụng)` + lý do.
- **Sơ đồ trong tài liệu BM** dùng Mermaid; cần file chỉnh sửa được thì chuyển sang skill diagram tương ứng.

---

*BA Skill Suite · chuẩn Viettel Software (VTIT) · BM.01–BM.04*
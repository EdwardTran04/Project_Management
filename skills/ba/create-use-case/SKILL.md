---
name: create-use-case
description: |
  Viết Use Case specification chuẩn Karl Wiegers/IIBA 13-field template cho
  IT Business Analysts. Enforce Cockburn's scoping framework (coffee-break test,
  goal levels), workflow 4 bước tuần tự với confirmation gate, và 20-point
  quality checklist trước khi output.

  Hỗ trợ 4 mode: viết mới UC từ feature description, tách feature lớn thành
  danh sách UC, review UC có sẵn, viết section cụ thể.
  Output: tiếng Anh (mặc định) hoặc tiếng Việt (theo yêu cầu).

  Dùng khi user nói: "viết use case", "tạo UC", "viết đặc tả use case",
  "UC cho feature này", "review use case", "tách feature thành UC list",
  "viết normal course", "viết exception", "viết precondition".

  KHÔNG dùng cho: User Story (dùng skill: create-user-story),
  activity/flowchart (dùng skill: create-activity-diagram).
---

# Use Case Writer

> Chuẩn Karl Wiegers / IIBA — 13-field template · scoping theo Alistair Cockburn.

## Nguyên tắc tốc độ (đọc trước tiên)

**Sinh TRỌN bản nháp trong MỘT lượt, rồi mới mời chỉnh sửa.** Không dừng-hỏi sau từng field/từng nhóm. Mọi kiểm tra chất lượng (scope, 20-point) chạy **ngầm trong đầu**, chỉ báo kết quả gọn ở cuối — không phải cổng chặn.

- **Không bịa.** Thiếu thông tin *cốt yếu* (đủ làm sai UC) → hỏi **một block tối đa 3 câu**, rồi sinh luôn. Thiếu thông tin phụ → ghi `[GIẢ ĐỊNH]` / `[TBD]` trong UC, không hỏi.
- **Ngôn ngữ:** bám theo ngôn ngữ hội thoại (mặc định tiếng Việt). Không hỏi lại.
- Đọc reference **chỉ khi cần** (xem §Reference) — đừng load sớm để giữ nhẹ token.

---

## Bước 1 — Nhận diện mode (tự suy luận, KHÔNG hỏi xác nhận)

| Mode | Dấu hiệu input | Hành động |
|------|----------------|-----------|
| **A — Viết mới** | Có mô tả feature | Sinh 1 UC đầy đủ ngay |
| **B — Tách feature** | Feature lớn / nhiều mục tiêu | Output danh sách UC (ID + Name + 1 câu) — KHÔNG viết đầy đủ trừ khi được yêu cầu |
| **C — Review** | User paste UC có sẵn | Chạy 20-point (đọc `references/quality-checklist.md`), báo cáo bảng kết quả |
| **D — Viết 1 section** | Chỉ cần Normal Course / Exceptions… | Sinh đúng section đó |

Chỉ khi input mơ hồ tới mức không đoán nổi mode mới hỏi 1 câu.

---

## Bước 2 — Scope ngầm (Cockburn) — tự kiểm, không hỏi

Tự áp 3 phép thử **trong đầu** trước khi viết; nếu phát hiện sai scope thì nêu cảnh báo ngắn ở phần Notes, không dừng lại chờ duyệt:

- **Coffee-break test:** kết quả UC đủ để actor nghỉ giải lao? Quá nhỏ (vd "OTP được xác thực") → gộp; kéo dài nhiều session → tách.
- **Goal level:** đúng ở **user-goal** (1 mục tiêu hoàn chỉnh). Summary = Epic; Sub-function = Includes.
- **Boundary:** 1 primary actor · 1 goal · 1 session · 1 system. Cần 2 primary actor → đề xuất tách thành 2 UC (ghi ở Notes).

---

## Bước 3 — Sinh trọn 13 field trong một lượt

Viết liền mạch toàn bộ UC theo skeleton dưới. Hướng dẫn điền chi tiết + ví dụ pass/fail: `references/template-guide.md` (chỉ mở khi phân vân cách điền một field).

```
## UC-<MODULE>-<SEQ>: <Verb + Object>

| Field | Nội dung |
|---|---|
| Use Case ID | UC-LEARN-01 |
| Use Case Name | "Verb + Object", 3–7 từ, active voice, không chứa tên actor |
| Actor | 1 role cụ thể (không "User"/"Person") |
| Description | 2–4 câu: WHY + WHAT + OUTCOME |
| Preconditions | điều kiện boolean kiểm chứng được |
| Postconditions | TRẠNG THÁI hệ thống sau khi thành công (không phải action) |
| Priority | MoSCoW |
| Frequency | số liệu cụ thể (vd ~500/ngày) |

### Normal Course
1. [Actor/System] [1 action] …   (xen kẽ actor/system, active voice, KHÔNG if/else/loop)
2. …

### Alternative Courses
- **UC-XX.AC.1** — At step N, if [condition] … → rejoin at step M (vẫn đạt goal)

### Exceptions
- **UC-XX.EX.1** — Trigger → System response → Final state (UC FAIL)

### Supporting
| Includes | UC con có ID thật |
| Special Requirements | non-functional (performance/security/compliance) |
| Assumptions | tin đúng nhưng chưa xác minh |
| Notes & Issues | [TBD-N] \| Owner \| Due \| Resolution + cảnh báo scope nếu có |
```

Quy ước viết (readability-first) tóm tắt: 1 action/bước · chủ ngữ rõ · không nhồi "and" nối 2 action khác loại · cover đủ failure modes ở Exceptions (validation / business rule / external service / auth / concurrency). Chi tiết: `references/writing-style.md`.

---

## Bước 4 — Self-check NGẦM + báo cáo gọn

Tự rà 20 điểm trong đầu (nhóm A–F: Scope, Actor/Context, Pre/Post, Normal, Alt/Exception, Completeness). **Không in bảng 20 dòng.** Chỉ append một dòng kết:

> ✅ Self-check: 18/20 đạt. ⚠️ Cần lưu ý: (C8) Frequency chưa có số liệu → đã ghi [TBD]; (C10) Postcondition thiếu nhánh notification.

Nếu là **Mode C (Review)** thì mới đọc `references/quality-checklist.md` và in bảng đầy đủ — vì đó chính là sản phẩm user yêu cầu.

---

## Xuất kết quả

Trạng thái ban đầu **Draft**. Sau khi in UC + self-check, hỏi **một câu duy nhất**: *"Anh muốn tôi chỉnh gì thêm, hay xuất ra file (`UC-XXX_[tên].md`)?"* — gộp cả mời-sửa và mời-xuất vào một lượt.

## Reference (chỉ đọc khi cần)
- `references/template-guide.md` — cách điền 13 field + pass/fail. Đọc khi phân vân một field.
- `references/quality-checklist.md` — 20-point chi tiết. Đọc khi **Mode C** hoặc self-check ngầm phát hiện ≥3 lỗi cần soi kỹ.
- `references/writing-style.md` — quy tắc văn phong Normal Course. Đọc khi user phàn nàn về cách diễn đạt bước.
- `references/examples.md` — 2 UC mẫu đầy đủ. Đọc khi cần một khuôn tham chiếu cụ thể cho domain lạ.

## Bước tiếp theo
| Output | Skill | Ghi chú |
|--------|-------|---------|
| User Story từ UC | create-user-story | Mỗi UC → 1–3 US |
| Use Case diagram | create-uml | Nhóm UC theo actor/module |
| Business Test Case | create-business-testcase | Từ Normal Course + Exceptions |
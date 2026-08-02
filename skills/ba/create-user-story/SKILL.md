---
name: create-user-story
description: |
  Sinh User Story và Acceptance Criteria chuẩn INVEST + Given-When-Then
  cho BA/PO. Enforce 6 tiêu chí INVEST, tối thiểu 3 AC (happy path, edge
  case, negative path). Hỗ trợ 3 mode: viết mới, refine US có sẵn, bổ
  sung AC. Tích hợp REQ-XXX traceability và Figma design specs.

  Dùng khi user nói: "viết user story", "viết US", "tạo user story",
  "viết AC", "viết acceptance criteria", "tạo AC cho story",
  "user story chuẩn INVEST", "AC theo Given-When-Then", "refine user story",
  "review US này", "US này đã chuẩn chưa", "bổ sung AC", "split user story",
  "story quá to cần tách", hoặc paste feature description + "viết story đi".

  KHÔNG dùng cho: viết Use Case formal (dùng skill: create-use-case),
  viết test case kỹ thuật chi tiết (AC ≠ test case).
---

# User Story & Acceptance Criteria Writer

## Nguyên tắc tốc độ (đọc trước tiên)

**Sinh TRỌN US + AC trong MỘT lượt, rồi mới mời chỉnh sửa.** Không hỏi tuần tự từng input. Suy luận tối đa từ nội dung user đã paste; chỉ hỏi khi thật sự thiếu thông tin cốt yếu.

- **Persona / Goal / Value / Scope:** đọc và **tự rút** từ feature description. Không hỏi nếu suy ra được.
- Thiếu thông tin cốt yếu (đủ làm sai story) → gộp **một block tối đa 3 câu** rồi sinh luôn. Thiếu phụ → ghi `[GIẢ ĐỊNH]`.
- **REQ ref / Figma link / Priority:** nếu user không đưa, để `[chưa có]` trong Metadata — đừng chặn lại để hỏi. Có Figma link → dùng MCP figma đọc spec bổ sung AC.
- **Ngôn ngữ:** bám hội thoại (mặc định tiếng Việt). INVEST chi tiết / ví dụ / template chỉ đọc khi cần (§Reference).

---

## Bước 1 — Nhận diện mode (tự suy luận)

| Mode | Dấu hiệu | Hành động |
|------|----------|-----------|
| **A — Viết mới** | Có feature description | Sinh US + ≥3 AC ngay |
| **B — Refine** | User paste US/AC sẵn | Rà INVEST + AC, đề xuất bản sửa |
| **C — Bổ sung AC** | Có US, cần thêm AC | Sinh thêm AC còn thiếu (edge/negative) |

Tự suy mode từ input, không hỏi xác nhận trừ khi mơ hồ hoàn toàn.

---

## Bước 2 — Sinh trọn trong một lượt

Trình bày theo đúng thứ tự sau, liền mạch:

**1) User Story**
```
**US-[ID]**: [tiêu đề 5–10 từ]
**As a** [persona cụ thể — không "user"]
**I want to** [hành động cụ thể, đo lường được]
**So that** [business value — không lặp lại "I want"]
```

**2) Metadata** — Epic · REQ ref · Priority (MoSCoW) · Story Points (nếu ước lượng được) · Figma link.

**3) INVEST self-check (NGẦM → báo gọn)** — tự rà 6 tiêu chí trong đầu, in **một bảng 6 dòng ✅/⚠️/❌ + 1 câu fix** cho mỗi ⚠️/❌. Không giải thích dài về INVEST (chi tiết ở `references/invest-criteria.md`, chỉ đọc khi user hỏi sâu).

| I/N/V/E/S/T | ✅/⚠️/❌ | Fix nếu fail |

**4) Acceptance Criteria** — **tối thiểu 3 AC**, Gherkin:
```
**AC1: [happy path]**  — Given… / When… / Then… (đo lường được) / And…
**AC2: [edge case / validation]**
**AC3: [negative path / error]**
```
Quy tắc: 1 AC = 1 scenario · điều kiện đo được · KHÔNG mô tả UI ("button turns blue") · KHÔNG logic kỹ thuật ("call API /v1/…"). Khung chi tiết: `templates/ac-template.md`.

**5) Notes** — dependency · assumption · câu hỏi cần PO làm rõ.

---

## Anti-patterns (tự tránh khi sinh)

❌ "As a user" → ✅ "As a học viên đã xác thực email"
❌ "I want to manage profile" → ✅ "I want to update my email address"
❌ "So that I can manage profile" (lặp goal) → ✅ value thật
❌ "Then button turns blue" → ✅ "Then system displays confirmation"
❌ chỉ 1 happy path → ✅ ≥3 AC

## Khi nào đề xuất SPLIT
Tiêu đề có "AND" · nhiều persona · cover nhiều CRUD · >7–8 AC · estimate >5 ngày.
Pattern: theo CRUD / theo persona / theo business rule / theo workflow step.
Khi split → output danh sách US con (mỗi cái ID + 1 dòng), không viết đầy đủ tất cả trừ khi được yêu cầu.

---

## Xuất kết quả

Trạng thái **Draft**. Sau khi in xong, hỏi **một câu gộp**: *"Anh muốn chỉnh gì, hay xuất file / paste sang Jira?"* — mời sửa và mời xuất cùng lúc.

## Reference (chỉ đọc khi cần)
- `references/invest-criteria.md` — INVEST chi tiết. Đọc khi user hỏi "tại sao fail" / cần giải thích sâu.
- `references/examples.md` — US + AC mẫu đạt chuẩn. Đọc khi cần khuôn tham chiếu domain lạ.
- `templates/user-story-template.md`, `templates/ac-template.md` — khung. Tham chiếu khi user muốn đúng template chuẩn.

## Bước tiếp theo
| Output | Skill | Ghi chú |
|--------|-------|---------|
| Use Case formal từ US | create-use-case | Khi cần 13-field |
| Business Test Case | create-business-testcase | Từ AC |
| Luồng nghiệp vụ | create-activity-diagram | Khi US mô tả nhiều bước |
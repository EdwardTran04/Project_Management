---
name: create-traceability-matrix
description: |
  Tạo Requirements Traceability Matrix (RTM) — bảng liên kết Requirements
  (REQ-XXX) → User Stories (US-XXX) → Use Cases (UC-XXX) → Test Cases (TC-XXX).
  Giúp BA đảm bảo mọi requirement đều có coverage và không bị bỏ sót.
  Tester dùng RTM để map test case về requirement.
  Dùng khi user nói: "tạo RTM", "traceability matrix", "map requirements",
  "check coverage", "liên kết requirement với user story", "requirements có
  được test hết không".
---

# Create Traceability Matrix (RTM)

## Mục đích

RTM đảm bảo:
- Mỗi requirement có ít nhất 1 User Story implement.
- Mỗi User Story có ít nhất 1 Test Case verify.
- Phát hiện: requirement không có coverage, US orphan (không link requirement).

## Thu thập thông tin

Hỏi người dùng:
1. Paste danh sách Requirements (REQ-XXX + mô tả) — hoặc đính kèm PTYC/TKCT.
2. Paste danh sách User Stories (US-XXX + mô tả) nếu đã có.
3. Paste danh sách Use Cases (UC-XXX) nếu đã có.
4. Paste danh sách Test Cases (TC-XXX) từ Tester nếu đã có.

Nếu chưa có đủ → tạo RTM với phần còn thiếu đánh dấu `TBD`. Không block việc tạo RTM vì thiếu TC.

Nếu người dùng đính kèm tài liệu (PTYC, User Story, feature spec), đọc và rút trích REQ-ID, US-ID, UC-ID từ đó trước khi hỏi thêm.

---

## Format RTM output

```markdown
# Requirements Traceability Matrix

**Dự án:** [Tên dự án]
**Ngày tạo:** dd/mm/yyyy
**Version:** 1.0

## Ma trận truy vết

| REQ ID | Mô tả requirement | US ID | Use Case ID | TC ID | Status |
|--------|------------------|-------|-------------|-------|--------|
| REQ-001 | [Mô tả ngắn] | US-001, US-002 | UC-01 | TC-001 | ✅ Covered |
| REQ-002 | [Mô tả ngắn] | US-003 | — | TBD | ⚠️ No TC yet |
| REQ-003 | [Mô tả ngắn] | — | — | — | ❌ No coverage |

## Phân tích coverage

### Requirements không có User Story (BA cần xử lý):
- REQ-003: [Mô tả] — chưa có US implement

### User Stories không link Requirement (orphan):
- US-010: [Mô tả] — kiểm tra lại có cần không?

### Requirements chưa có Test Case:
- REQ-002 → nhắc Tester tạo TC

## Tóm tắt

| Metric | Số lượng |
|--------|---------|
| Tổng Requirements | [N] |
| Requirements có US | [N] |
| Requirements có TC | [N] |
| Coverage % | [N]% |
```

---

## Cập nhật RTM

RTM cần được cập nhật khi:
- Thêm requirement mới.
- Thêm User Story / Use Case mới.
- Tester hoàn thành Test Case và cung cấp TC-ID.

Khi cần cập nhật: chạy lại `skill: create-traceability-matrix`, paste RTM hiện có + danh sách thay đổi mới → append rows mới và cập nhật status.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Tạo Business Test Case còn thiếu | skill: create-business-testcase | Từ danh sách "No TC yet" |
| Tạo User Story còn thiếu | skill: create-user-story | Từ danh sách "No coverage" |
| Tạo Use Case còn thiếu | skill: create-use-case | Nếu cột Use Case ID còn TBD |
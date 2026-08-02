---
name: intake-update
description: Tiếp nhận input bổ sung từ KH/PM khi dự án đã có baseline — so sánh với baseline hiện tại, tổng hợp Added/Modified/Removed/Conflicting, kích hoạt chuỗi update tài liệu.
disable-model-invocation: true
---

# Tiếp nhận input bổ sung từ KH/PM

## Trigger

Gọi skill này khi:

- KH/PM gửi file yêu cầu bổ sung sau khi dự án đã chạy GĐ2 hoặc đã có BM.01 Approved.
- User nói "có input mới", "tiếp nhận file bổ sung", "có thêm yêu cầu từ KH", "KH gửi thêm tài liệu".
- File mới đã được đặt vào `01_input/` (raw-requirements / existing-system / samples).

**Không gọi skill này cho lần tiếp nhận đầu tiên** — đó là GĐ1 với `/project-onboard` hoặc tự tổ chức `01_input/`.

## Mục đích

Phân biệt với `/impact-analysis` (1 requirement thay đổi) và `/scope-check` (1 request rời rạc):

- `/intake-update` = phân tích **toàn bộ 1 file/batch mới** so với baseline.
- Output là danh sách thay đổi nhóm → từ đó gọi `/impact-analysis` cho từng item, `/scope-check` cho item nghi out-scope, `/update-doc` cho tài liệu liên đới.

## Hành động

### Bước 1 — Xác định baseline

Hỏi user (nếu chưa rõ): "Baseline đối chiếu là gì?"

- Nếu BM.01 đã Approved → baseline = `../99_document/02_delivery_document/04_requirements/requirements/*PTYC*.docx` (gần nhất).
- Nếu chưa có BM.01 → baseline = tổng hợp `02_analysis/analysis/` hiện tại (business-rules + nfr + requirements-priority + open-questions).

Glob `01_input/` để xác định file mới (mtime gần đây nhất hoặc user chỉ định).

### Bước 2 — Đọc & so sánh

Đọc:

1. File input mới (đầy đủ).
2. Baseline ở Bước 1.
3. `.claude/memory/open-questions.md` — kiểm tra item nào trong file mới chính là câu trả lời cho OQ cũ.
4. `.claude/memory/decisions.md` (nếu có) — quyết định đã chốt.

Phân nhóm thay đổi thành 4 loại:

| Loại | Định nghĩa |
| ---- | ---------- |
| **Added** | Yêu cầu/rule/NFR/feature mới — chưa có trong baseline |
| **Modified** | Yêu cầu cũ có trong baseline nhưng nội dung khác (đổi logic, đổi số liệu, mở rộng/thu hẹp scope) |
| **Removed** | Yêu cầu trong baseline không còn xuất hiện hoặc bị KH huỷ rõ ràng |
| **Conflicting** | Yêu cầu mới mâu thuẫn với baseline đã Approved hoặc với decisions đã chốt |
| **Clarifying** | Yêu cầu mới chính là answer cho OQ đã ghi nhận — không thay đổi scope, chỉ làm rõ |

### Bước 3 — Tạo Intake Update Report

Lưu vào `02_analysis/analysis/YYYY-MM-DD_intake-update_[tên-input].md`:

```markdown
# Intake Update Report — [Tên file input mới]
**Ngày tiếp nhận:** YYYY-MM-DD
**File input mới:** `01_input/.../filename`
**Baseline đối chiếu:** [BM.01 PTYC v1.0.0 / 02_analysis/analysis/ hiện tại]
**Người gửi:** [KH / PM / Stakeholder]

## Tóm tắt
- Added: X items
- Modified: Y items
- Removed: Z items
- Conflicting: W items (CẦN GIẢI QUYẾT TRƯỚC)
- Clarifying (trả lời OQ): V items

## 1. Added (yêu cầu mới)
| ID | Mô tả | Nghi In/Out scope | Skill tiếp theo |
| -- | ----- | ----------------- | --------------- |
| ADD-001 | ... | In / Borderline / Out | `/scope-check` nếu Borderline/Out |

## 2. Modified (thay đổi yêu cầu cũ)
| ID | REQ-ID baseline | Before → After | Mức độ | Skill tiếp theo |
| -- | --------------- | -------------- | ------ | --------------- |
| MOD-001 | FR-XXX / BR-YYY | ... → ... | High/Med/Low | `/impact-analysis` |

## 3. Removed
| ID | REQ-ID baseline | Lý do KH huỷ | Tác động |
| -- | --------------- | ------------ | -------- |
| REM-001 | ... | ... | ... |

## 4. Conflicting (CẦN GIẢI QUYẾT TRƯỚC)
| ID | Mâu thuẫn với | Mô tả mâu thuẫn | Khuyến nghị |
| -- | ------------- | ---------------- | ----------- |
| CON-001 | DEC-XXX / BR-YYY | ... | Hỏi KH chọn 1 trong 2 |

## 5. Clarifying (trả lời OQ)
| ID | OQ liên kết | Câu trả lời | Hành động |
| -- | ----------- | ----------- | --------- |
| CLR-001 | OQ-XXX | ... | Đóng OQ, update BR/NFR liên đới |

## Tài liệu liên đới cần cập nhật
| Tài liệu | Items ảnh hưởng | Bump version đề xuất |
| -------- | ---------------- | -------------------- |
| BM.01 PTYC | ADD-001, MOD-001, ... | Minor (x.+1.0) |
| Business Rules Catalog | ADD-002, MOD-003 | — (file analysis, không bump) |
| NFR Spec | MOD-005 | — |
| Requirements Priority | toàn bộ Added | — |

## Chuỗi skill đề xuất chạy tiếp
1. Giải quyết Conflicting → hỏi KH chốt, ghi `decisions.md`.
2. `/scope-check` cho mọi item ADD-* nghi Borderline/Out.
3. `/impact-analysis` cho mọi item MOD-* mức Med/High.
4. Chạy lại skill phân tích liên quan để cập nhật file `.md` trong `02_analysis/analysis/` (business-rules / nfr / requirements-priority) — ghi rõ "Cập nhật từ intake YYYY-MM-DD" trong nội dung.
5. Chạy lại `/create-ptyc` (hoặc `/create-tktt`/`/create-tkcssdl`/`/create-tkct`) để cập nhật file `.md` BM tương ứng trong `02_analysis/requirements/`.
6. `/export-docx` → tạo `.docx` + `.json` version mới trong `../99_document/02_delivery_document/04_requirements/` (giữ nguyên file cũ).
7. Đóng OQ đã trả lời trong `open-questions.md` — điền vào cột "Câu trả lời" + đổi "Trạng thái" → `Resolved`. Không xóa dòng.
```

### Bước 4 — Action tự động sau report

- **Update `open-questions.md`** — đánh dấu OQ đã được trả lời bởi item Clarifying.
- **Nhắc user** chạy các skill ở "Chuỗi skill đề xuất" theo thứ tự.
- **Không tự gọi** các skill khác — user chủ động.

## Lưu ý quan trọng

- Không sửa trực tiếp file `02_analysis/requirements/` đã Approved — phải qua `/update-doc`.
- File analysis (`02_analysis/analysis/`) là tài liệu nội bộ → có thể cập nhật in-place, nhưng ghi rõ dòng "Cập nhật từ intake YYYY-MM-DD" để traceability.
- Nếu file input mới quá khác baseline (> 50% items thay đổi) → đề xuất user xem có nên **viết lại** BM.01 (Major bump) thay vì update từng phần.
- Nếu phát hiện > 3 Conflicting items → STOP, escalate PM trước khi đề xuất bất kỳ thay đổi nào.

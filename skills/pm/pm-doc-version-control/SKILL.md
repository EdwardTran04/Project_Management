---
name: pm-doc-version-control
description: Skill quản lý phiên bản tài liệu dự án theo mô hình Old/Baseline/New + quản lý CR (Change Request) theo lifecycle + quản lý MOM (Biên bản họp) theo timeline. Hỗ trợ PM kiểm tra trạng thái tài liệu, promote phiên bản mới thành baseline, rollback, diff report, tiếp nhận CR, đánh giá triage CR, chuyển trạng thái CR, và lưu trữ MOM. Gọi khi cần "kiểm tra phiên bản tài liệu", "promote tài liệu", "rollback tài liệu", "so sánh baseline vs new", "trạng thái tài liệu dự án", "tiếp nhận CR", "có CR mới", "cập nhật trạng thái CR", "xem CR", "tạo biên bản họp", "lưu MOM".
---

# PM Document Version Control

Bạn đang hoạt động với vai trò **PM (Project Manager)** — quản lý phiên bản tài liệu dự án theo mô hình **Old / Baseline / New**.

---

## 📐 Kiến trúc Folder

```
documents/
├── version_log.md          ← Audit trail toàn bộ hành động
├── ba/
│   ├── draft/              ← Bản nháp — soạn thô, brainstorm, chưa hoàn chỉnh
│   ├── old/                ← Phiên bản cũ (đã thay thế)
│   ├── baseline/           ← Phiên bản hiện tại (NGUỒN SỰ THẬT DUY NHẤT)
│   └── new/                ← Phiên bản mới hoàn chỉnh, chờ promote lên baseline
├── tester/
│   ├── draft/
│   ├── old/
│   ├── baseline/
│   └── new/
├── mom/                    ← Biên bản họp (timeline, immutable)
│   └── YYYY-MM-DD_[chủ-đề].md
├── cr/                     ← Change Request (lifecycle management)
│   ├── pending/            ← CR mới tiếp nhận, chưa phân tích
│   ├── analyzing/          ← Đang phân tích impact, effort, scope
│   ├── approved/           ← Đã duyệt, đưa vào backlog
│   ├── completed/          ← Đã implement xong
│   ├── rejected/           ← Từ chối
│   └── cr_log.md           ← Audit trail CR
└── [nhóm-khác]/            ← Mở rộng tương tự khi cần
    ├── draft/
    ├── old/
    ├── baseline/
    └── new/
```

**Luồng vòng đời tài liệu:**

```
draft/  →  new/  →  baseline/  →  old/
(nháp)    (hoàn     (chính        (lưu trữ
           chỉnh,    thức,         lịch sử)
           chờ       nguồn sự
           duyệt)    thật)
```

| Folder | Vai trò | Ai được sửa | Khi nào chuyển tiếp |
|--------|---------|-------------|---------------------|
| `draft/` | Bản nháp — soạn thô, brainstorm, chưa hoàn chỉnh | Mọi người | Khi tác giả xác nhận bản nháp đã đủ tốt |
| `new/` | Bản mới hoàn chỉnh — chờ PM duyệt promote | Tác giả chịu trách nhiệm | Khi PM approve promote |
| `baseline/` | Phiên bản chính thức — nguồn sự thật duy nhất | Chỉ qua promote | Khi có promote mới (tự động sang old) |
| `old/` | Lưu trữ lịch sử — read-only | Không ai | Không chuyển tiếp |

---

## 🔢 Semantic Versioning — Quy tắc Version `MAJOR.MINOR.PATCH`

Mỗi tài liệu khi được quản lý phải kèm version number theo Semantic Versioning:

| Loại thay đổi | Bump | Ví dụ | Mô tả chi tiết |
|---------------|------|-------|-----------------|
| **PATCH** | +0.0.1 | 1.0.0 → 1.0.1 | Chỉnh sửa nhỏ: sửa lỗi chính tả, cập nhật formatting, bổ sung ghi chú nhỏ, sửa link, cập nhật ngày tháng |
| **MINOR** | +0.1.0 | 1.0.1 → 1.1.0 | Chỉnh sửa trung bình: thêm tính năng nhỏ, bổ sung section mới, cập nhật logic nghiệp vụ một phần, thêm trường dữ liệu, mở rộng use case |
| **MAJOR** | +1.0.0 | 1.1.0 → 2.0.0 | Cập nhật lớn: thay đổi kiến trúc tài liệu, viết lại toàn bộ phân hệ, thêm module/phân hệ mới, thay đổi mô hình dữ liệu cốt lõi, đổi quy trình nghiệp vụ chính |

### Quy tắc bump

- Khi bump MINOR → reset PATCH về 0 (1.2.3 → 1.3.0)
- Khi bump MAJOR → reset cả MINOR và PATCH về 0 (1.3.2 → 2.0.0)
- Version bắt đầu từ `1.0.0` khi tài liệu lần đầu vào baseline
- Tài liệu trong `new/` mang version dự kiến (proposed version), chỉ chính thức khi promote

---

## ⚡ Điều kiện kích hoạt

Skill này kích hoạt khi PM (hoặc user) nói một trong các câu sau:

**Document Versioning:**
- "Kiểm tra trạng thái tài liệu" / "doc version status"
- "Promote tài liệu" / "baseline tài liệu mới"
- "Rollback tài liệu" / "khôi phục phiên bản cũ"
- "So sánh baseline và new" / "diff tài liệu"
- "Xem lịch sử phiên bản" / "version history"
- "Baseline theo phiên bản X.Y.Z"

**Change Request (CR):**
- "Có CR mới" / "tiếp nhận CR" / "KH yêu cầu thay đổi"
- "Đánh giá CR" / "triage CR" / "phân tích CR"
- "Duyệt CR" / "approve CR" / "reject CR"
- "Trạng thái CR" / "xem danh sách CR"
- "CR nào cần xử lý" / "CR backlog"

**MOM (Biên bản họp):**
- "Tạo biên bản họp" / "lưu MOM" / "ghi nhận buổi họp"
- "Xem lịch sử họp" / "tìm MOM"

---

## 🛠️ Các chức năng

### 1. Status Check — Kiểm tra trạng thái

**Trigger:** "Kiểm tra trạng thái tài liệu", "doc status"

**Hành động:**
1. Quét toàn bộ `documents/*/` — liệt kê 4 folder (draft, old, baseline, new) của mỗi nhóm.
2. Với mỗi nhóm, tạo bảng:

```markdown
## Trạng thái tài liệu — [Nhóm]

| Tài liệu | Draft | Old | Baseline (Version) | New (Proposed Version) | Trạng thái |
|----------|-------|-----|--------------------|-----------------------|-----------|
| project_overview.md | ❌ | ❌ | ✅ v1.0.0 | ❌ | ✅ Stable |
| qtct.md | ❌ | ❌ | ✅ v1.0.0 | ✅ v1.1.0 | ⚠️ Có bản mới chưa baseline |
| tkct_module_x.md | ✅ | ❌ | ❌ | ❌ | 📝 Đang soạn nháp |
```

**Trạng thái:**
- ✅ **Stable** — Chỉ có baseline, không có draft/new pending
- 📝 **Drafting** — Đang soạn nháp trong draft/, chưa chuyển sang new/
- ⚠️ **Pending** — Có bản mới trong new/ chưa promote
- 🔴 **Missing baseline** — Có new/ nhưng không có baseline (tài liệu mới hoàn toàn)

---

### 2. Finalize Draft — Chuyển draft thành new

**Trigger:** "Hoàn thiện bản nháp [tên]", "chuyển draft sang new", "finalize draft"

**Quy trình:**

```
Bước 1: Kiểm tra
  → File có tồn tại trong draft/ không?
  → File đã đủ hoàn chỉnh chưa? (hỏi tác giả xác nhận)

Bước 2: Move
  → Move draft/[file] → new/[file]
  → Nếu new/ đã có file cùng tên → hỏi ghi đè hay giữ cả hai

Bước 3: Log
  → Ghi vào version_log.md:
  | Finalize draft | [nhóm] | [tên] | — | draft/ | new/ | Chuyển nháp sang new |
```

---

### 3. Promote — Chuyển new thành baseline

**Trigger:** "Promote tài liệu [tên]", "Baseline tài liệu [tên]"

**Quy trình Promote đơn lẻ (1 tài liệu):**

```
Bước 1: Xác nhận
  → Hỏi PM: "Xác nhận promote [tên] từ new/ → baseline/?"
  → Hiển thị diff tóm tắt (nếu baseline cũ tồn tại)

Bước 2: Xác định version bump
  → Hỏi PM: "Loại thay đổi? PATCH / MINOR / MAJOR"
  → Hoặc PM chỉ định version cụ thể

Bước 3: Archive baseline cũ
  → Copy baseline/[file] → old/[file]_v[old-version]_[YYYYMMDD].md
  → VD: old/qtct_v1.0.0_20260728.md

Bước 4: Promote
  → Move new/[file] → baseline/[file]

Bước 5: Clear
  → new/ trống (cho tài liệu đó)

Bước 6: Log
  → Ghi vào documents/version_log.md:
  | 2026-07-28 16:00 | Promote | ba | qtct.md | 1.1.0 | new/ | baseline/ | MINOR bump: thêm section X |
```

**Quy trình Promote theo phiên bản (Batch — toàn bộ nhóm):**

> Khi PM yêu cầu: "Baseline toàn bộ theo phiên bản X.Y.Z"

```
Bước 1: Xác nhận scope
  → Liệt kê toàn bộ file trong new/ của nhóm được chỉ định
  → Hỏi PM: "Promote TẤT CẢ [N] tài liệu sau thành baseline v[X.Y.Z]?"

Bước 2: Archive hàng loạt
  → Với mỗi file có baseline cũ:
     Copy baseline/[file] → old/[file]_v[old-version]_[YYYYMMDD].md

Bước 3: Promote hàng loạt
  → Move tất cả new/* → baseline/

Bước 4: Log hàng loạt
  → Ghi từng dòng vào version_log.md

Bước 5: Báo cáo tổng kết
  → Tạo bảng tóm tắt: bao nhiêu file promote, version mới, file nào bị ghi đè
```

---

### 3. Rollback — Phục hồi phiên bản cũ

**Trigger:** "Rollback tài liệu [tên]", "Khôi phục [tên] về phiên bản cũ"

**Quy trình:**

```
Bước 1: Liệt kê các phiên bản trong old/
  → Tìm tất cả file matching pattern: old/[tên]_v*_*.md
  → Hiển thị danh sách kèm version + ngày

Bước 2: PM chọn phiên bản muốn rollback

Bước 3: Archive baseline hiện tại
  → Copy baseline/[file] → old/[file]_v[current]_[YYYYMMDD].md
  → Ghi log: "Archive trước rollback"

Bước 4: Rollback
  → Copy old/[file_chọn] → baseline/[file] (tên gốc, không có suffix version)

Bước 5: Log
  → | Rollback | ba | qtct.md | 1.0.0 | old/ | baseline/ | Rollback từ v1.1.0 về v1.0.0 |
```

---

### 4. Diff Report — So sánh baseline vs new

**Trigger:** "So sánh baseline và new", "Diff [tên tài liệu]"

**Hành động:**
1. Đọc `baseline/[file]` và `new/[file]`
2. Tạo báo cáo diff:

```markdown
# Diff Report — [Tên tài liệu]

**Baseline version:** 1.0.0
**New proposed version:** 1.1.0
**Ngày so sánh:** YYYY-MM-DD

## Tóm tắt thay đổi
- Sections thêm mới: [liệt kê]
- Sections sửa đổi: [liệt kê]
- Sections xóa: [liệt kê]

## Chi tiết

### Added
+ [Nội dung mới]

### Modified
- [Nội dung cũ]
+ [Nội dung mới]

### Removed
- [Nội dung bị xóa]

## Đề xuất version bump
→ MINOR (thêm section mới, không breaking change)
```

---

### 5. Version History — Xem lịch sử

**Trigger:** "Xem lịch sử phiên bản [tên/nhóm]"

**Hành động:**
1. Đọc `documents/version_log.md`
2. Lọc theo tên tài liệu hoặc nhóm
3. Hiển thị timeline:

```markdown
## Lịch sử phiên bản — [Tên tài liệu]

| Version | Ngày | Hành động | Ghi chú |
|---------|------|-----------|---------|
| 1.0.0 | 2026-07-28 | Init baseline | Khởi tạo |
| 1.1.0 | 2026-08-05 | Promote (MINOR) | Thêm section Bảo lãnh |
| 1.0.0 | 2026-08-10 | Rollback | Rollback về v1.0.0 do lỗi |
```

---

### 6. CR Intake — Tiếp nhận Change Request mới

**Trigger:** "Có CR mới", "tiếp nhận CR", "KH yêu cầu thay đổi"

**Quy trình:**

```
Bước 1: Thu thập thông tin CR
  → Hỏi PM hoặc đọc từ input:
  - Nguồn: KH / Nội bộ / MOM nào?
  - Mô tả yêu cầu thay đổi
  - Lý do / bối cảnh
  - Mức độ ưu tiên từ KH (nếu có)

Bước 2: Tạo file CR
  → Tạo file: documents/cr/pending/CR-[NNN]_[tên-ngắn].md
  → Sử dụng template CR (xem bên dưới)

Bước 3: Log
  → Ghi vào documents/cr/cr_log.md
  → | YYYY-MM-DD HH:mm | CR-NNN | Intake | — | pending/ | PM | Tiếp nhận từ KH |
```

**Template CR:**

```markdown
# CR-[NNN]: [Tiêu đề ngắn gọn]

**Ngày tiếp nhận:** YYYY-MM-DD
**Nguồn:** [KH / Nội bộ / MOM-YYYY-MM-DD]
**Người yêu cầu:** [Tên]
**Trạng thái:** Pending
**Triage:** Chưa đánh giá

## Mô tả yêu cầu
[Nội dung chi tiết yêu cầu thay đổi]

## Lý do / Bối cảnh
[Tại sao cần thay đổi]

## Triage (PM điền sau khi phân tích)
| Tiêu chí | Đánh giá |
|----------|----------|
| Effort | — |
| Impact scope | — |
| Tài liệu ảnh hưởng | — |
| Version bump dự kiến | — |
| **Size tổng** | — |

## Quyết định
- [ ] Đưa vào backlog
- [ ] Tách sprint riêng
- [ ] Reject (ghi lý do)

## Tài liệu baseline bị ảnh hưởng
| Nhóm | Tài liệu | Version hiện tại | Bump dự kiến |
|------|----------|-----------------|-------------|
| | | | |

## Ghi chú
```

---

### 7. CR Triage — Đánh giá và phân loại CR

**Trigger:** "Đánh giá CR", "triage CR-[NNN]"

**Quy trình:**

```
Bước 1: Đọc CR từ pending/
  → Mở file CR-[NNN]_[tên].md

Bước 2: Phân tích impact
  → Đọc baseline/ của các nhóm tài liệu liên quan
  → Xác định modules, files, business rules bị ảnh hưởng

Bước 3: Đánh giá Triage theo bảng tiêu chí

  | Tiêu chí         | S (nhỏ)    | M (trung bình) | L (lớn)      | XL (rất lớn)     |
  |-------------------|------------|----------------|--------------|------------------|
  | Effort (ngày công) | ≤ 1 ngày   | 2–5 ngày       | 6–15 ngày    | > 15 ngày        |
  | Impact scope      | 1 module   | 2–3 modules    | > 3 modules  | Toàn hệ thống    |
  | Tài liệu ảnh hưởng | 1–2 file   | 3–5 files      | 6–10 files   | > 10 files       |
  | Version bump      | PATCH      | MINOR          | MINOR–MAJOR  | MAJOR            |

Bước 4: Đề xuất hành động
  → S/M: Đưa vào backlog sprint hiện tại
  → L: Cân nhắc tách sprint hoặc đưa vào sprint tiếp theo
  → XL: Đề xuất tạo dự án con / phase mới, escalate PM/PO

Bước 5: Chuyển trạng thái
  → Move CR file: pending/ → analyzing/
  → Cập nhật phần Triage trong file CR
  → Log vào cr_log.md
```

---

### 8. CR Lifecycle — Chuyển trạng thái CR

**Trigger:** "Duyệt CR", "approve CR-[NNN]", "reject CR-[NNN]", "hoàn thành CR"

**Các transition hợp lệ:**

```
pending → analyzing     (bắt đầu phân tích)
analyzing → approved    (PM duyệt, đưa vào backlog)
analyzing → rejected    (từ chối)
approved → completed    (implement xong, baseline đã cập nhật)
approved → rejected     (hủy sau khi đã duyệt — phải ghi lý do)
```

**Quy trình chuyển trạng thái:**

```
Bước 1: Xác nhận transition hợp lệ
  → Kiểm tra CR hiện đang ở folder nào
  → Kiểm tra transition có hợp lệ không

Bước 2: Cập nhật file CR
  → Đổi trường "Trạng thái" trong file
  → Nếu approved: điền checklist "Đưa vào backlog"
  → Nếu rejected: ghi lý do reject
  → Nếu completed: liệt kê tài liệu baseline đã cập nhật + version mới

Bước 3: Di chuyển file
  → Move CR file sang folder tương ứng

Bước 4: Log
  → Ghi vào cr_log.md với đầy đủ thông tin

Bước 5 (chỉ khi completed): Liên kết với version_log.md
  → Ghi nhận version bump của các tài liệu baseline bị ảnh hưởng
  → Ghi chú "Triggered by CR-[NNN]" trong version_log
```

---

### 9. CR Status — Xem tổng quan CR

**Trigger:** "Trạng thái CR", "xem danh sách CR", "CR nào cần xử lý"

**Hành động:**
1. Quét tất cả folder trong `documents/cr/`
2. Tạo báo cáo:

```markdown
# CR Dashboard — [Ngày]

## Tổng quan
| Trạng thái | Số lượng |
|-----------|----------|
| Pending | X |
| Analyzing | Y |
| Approved (Backlog) | Z |
| Completed | W |
| Rejected | V |

## Cần xử lý ngay
| CR-ID | Tiêu đề | Size | Ngày tiếp nhận | Số ngày chờ |
|-------|---------|------|---------------|-------------|
| CR-001 | ... | M | 2026-07-28 | 3 ngày |

## Backlog (Approved, chưa implement)
| CR-ID | Tiêu đề | Size | Ưu tiên | Sprint dự kiến |
|-------|---------|------|---------|----------------|
```

---

### 10. MOM — Lưu biên bản họp

**Trigger:** "Tạo biên bản họp", "lưu MOM", "ghi nhận buổi họp"

**Quy trình:**

```
Bước 1: Thu thập thông tin
  → Ngày họp
  → Chủ đề / Mục đích
  → Thành phần tham dự
  → Nội dung thảo luận
  → Quyết định / Action items

Bước 2: Tạo file MOM
  → Tạo: documents/mom/YYYY-MM-DD_[chủ-đề-slug].md
  → Sử dụng template MOM (xem bên dưới)

Bước 3: Liên kết CR (nếu có)
  → Nếu buổi họp sinh ra CR → tạo CR mới, ghi nguồn = MOM-YYYY-MM-DD
```

**Template MOM:**

```markdown
# Biên bản họp — [Chủ đề]

**Ngày họp:** YYYY-MM-DD
**Thời gian:** HH:mm – HH:mm
**Địa điểm / Kênh:** [Phòng họp / Online]
**Người chủ trì:** [Tên]

## Thành phần tham dự
| STT | Họ tên | Vai trò | Đơn vị |
|-----|--------|---------|--------|
| 1 | | | |

## Nội dung thảo luận
### 1. [Chủ đề 1]
- [Nội dung]
- [Ý kiến]

### 2. [Chủ đề 2]
- [Nội dung]

## Quyết định
| STT | Nội dung quyết định | Người chịu trách nhiệm |
|-----|--------------------|-----------------------|
| 1 | | |

## Action Items
| STT | Công việc | Người phụ trách | Deadline | Trạng thái |
|-----|----------|----------------|----------|------------|
| 1 | | | | ⬜ Chưa làm |

## CR phát sinh (nếu có)
| CR-ID | Mô tả ngắn |
|-------|------------|
| | |

## Ghi chú
```

**Quy tắc MOM:**
- MOM là **immutable** — sau khi finalize không được sửa nội dung
- Nếu cần đính chính → tạo file mới: `YYYY-MM-DD_dinh-chinh-[chủ-đề].md`
- File MOM đặt tên theo ngày → tự động sắp xếp theo timeline
- Mỗi buổi họp = 1 file duy nhất

---

### 11. MOM Search — Tìm biên bản họp

**Trigger:** "Xem lịch sử họp", "tìm MOM", "biên bản họp về [chủ đề]"

**Hành động:**
1. Quét `documents/mom/`
2. Lọc theo keyword hoặc khoảng thời gian
3. Hiển thị danh sách:

```markdown
## Lịch sử biên bản họp

| Ngày | Chủ đề | Thành phần | CR phát sinh |
|------|--------|------------|-------------|
| 2026-07-28 | Kickoff ILMS | PM, BA, Dev | CR-001 |
| 2026-08-01 | Review PTYC | PM, BA, KH | — |
```

## 🚫 Quy tắc bắt buộc

### 1. Baseline là nguồn sự thật duy nhất
- Mọi skill khác (BA, Tester, Dev, QA) khi cần đọc tài liệu → **PHẢI đọc từ `baseline/`**
- Tài liệu trong `new/` chỉ có giá trị tham khảo, **KHÔNG có hiệu lực chính thức**
- Tài liệu trong `old/` chỉ dùng để truy vết lịch sử

### 2. Không promote khi chưa có xác nhận PM
- Mọi hành động promote phải có xác nhận rõ ràng từ PM
- Không tự động promote dù tài liệu trong `new/` đã hoàn thiện

### 3. Luôn archive trước khi ghi đè
- Trước khi promote hoặc rollback → **PHẢI** copy baseline hiện tại vào `old/` kèm version + timestamp
- Không bao giờ xóa vĩnh viễn — mọi phiên bản đều được giữ trong `old/`

### 4. Luôn ghi log
- Mọi hành động (Init, Promote, Rollback) → **PHẢI** ghi vào `documents/version_log.md`
- Mọi hành động CR → **PHẢI** ghi vào `documents/cr/cr_log.md`
- Không có exception — log là bắt buộc

### 5. Naming convention trong old/
- Pattern: `[tên-gốc]_v[version]_[YYYYMMDD].[ext]`
- VD: `project_overview_v1.0.0_20260728.md`
- Folder: `[tên-folder]_v[version]_[YYYYMMDD]/`

### 6. Khi tạo nhóm tài liệu mới
- Nếu phát hiện nhóm tài liệu mới cần quản lý (VD: `documents/design/`)
- → Tự động tạo cấu trúc `draft/ old/ baseline/ new/`
- → Ghi log Init

### 7. Draft không có hiệu lực
- Tài liệu trong `draft/` là bản nháp — **KHÔNG được tham chiếu** bởi bất kỳ skill nào
- Draft chỉ có giá trị khi tác giả chủ động finalize sang `new/`
- Không giới hạn số lượng file trong draft/ — có thể có nhiều bản nháp cùng lúc

### 8. CR lifecycle integrity
- CR chỉ được chuyển trạng thái theo transition hợp lệ (pending→analyzing→approved→completed)
- Không skip trạng thái (VD: pending → completed là **KHÔNG hợp lệ**)
- CR completed **PHẢI** liên kết với version bump tương ứng trong version_log.md
- CR rejected **PHẢI** ghi lý do rõ ràng

### 8. MOM immutability
- MOM đã finalize **KHÔNG được sửa** — tạo file đính chính riêng nếu cần
- MOM PHẢI đặt tên theo pattern: `YYYY-MM-DD_[slug].md`

---

## 📁 Cấu trúc hiện tại (Khởi tạo 2026-07-28)

### BA (`documents/ba/`)

| Tài liệu | Baseline Version | Trạng thái |
|----------|-----------------|-----------|
| project_overview.md | 1.0.0 | ✅ Stable |
| qtct.md | 1.0.0 | ✅ Stable |
| ui-base-context.md | 1.0.0 | ✅ Stable |

### Tester (`documents/tester/`)

| Tài liệu | Baseline Version | Trạng thái |
|----------|-----------------|-----------|
| GEMINI.md | 1.0.0 | ✅ Stable |
| README.md | 1.0.0 | ✅ Stable |
| RULE_GLOBAL.md | 1.0.0 | ✅ Stable |
| TIPS_QUOTA.md | 1.0.0 | ✅ Stable |
| plans/ | 1.0.0 | ✅ Stable |
| practices/ | 1.0.0 | ✅ Stable |
| prompt_templates/ | 1.0.0 | ✅ Stable |
| scripts/ | 1.0.0 | ✅ Stable |
| Selium-java-framework/ | 1.0.0 | ✅ Stable |

### MOM (`documents/mom/`)

| Trạng thái | Ghi chú |
|-----------|---------|
| 📂 Sẵn sàng | Chưa có MOM — tạo khi có buổi họp |

### CR (`documents/cr/`)

| Trạng thái | Số lượng |
|-----------|----------|
| Pending | 0 |
| Analyzing | 0 |
| Approved | 0 |
| Completed | 0 |
| Rejected | 0 |

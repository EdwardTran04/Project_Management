---
name: process-qa
description: Xử lý file Q&A KH trả lời — match câu trả lời vào danh sách Open Questions, đóng OQ đã Resolved, ghi quyết định quan trọng vào Decisions Log. Dùng sau khi nhận được phản hồi từ KH cho danh sách câu hỏi đang mở.
---

# Xử lý Q&A từ KH

## Bước 1 — Nhận nội dung Q&A

Hỏi BA cung cấp:
1. **Nội dung Q&A từ KH** — paste trực tiếp vào đây. Nếu file `.xlsx`/`.docx` không paste được, mô tả từng câu trả lời theo format:
   ```
   OQ-001: [Câu trả lời của KH]
   OQ-002: [Câu trả lời của KH]
   ```
2. **Danh sách Open Questions hiện tại** — paste danh sách OQ đang Open (OQ-ID + nội dung câu hỏi).
3. **Tên file / nguồn Q&A** (để ghi vào Decisions Log).

## Bước 2 — Match câu trả lời vào OQ

Với mỗi câu trả lời trong Q&A:
1. Match với OQ theo ID (OQ-001, OQ-002...) hoặc theo nội dung câu hỏi gần nhất.
2. Nếu match được → điền Câu trả lời, đổi Trạng thái → `Resolved`.
3. Nếu không match OQ nào → liệt kê riêng, hỏi BA: *"Câu trả lời '[nội dung]' tương ứng OQ nào?"*

## Bước 3 — Phân loại câu trả lời

| Loại | Dấu hiệu nhận biết | Hành động thêm |
|------|-------------------|----------------|
| Làm rõ thông tin | Bổ sung chi tiết kỹ thuật / nghiệp vụ | Không cần làm thêm |
| Quyết định quan trọng | KH chốt phương án, confirm/reject tính năng, đặt giới hạn rõ ràng | Ghi vào Decisions Log |
| Thay đổi scope | Thêm yêu cầu mới hoặc bỏ yêu cầu cũ | Nhắc BA cập nhật PTYC / Feature Spec |

## Bước 4 — Tạo output

### 4a. Bảng OQ đã cập nhật

| OQ-ID | Câu hỏi | Câu trả lời KH | Trạng thái | Người trả lời |
|-------|---------|---------------|-----------|--------------|
| OQ-001 | | | Resolved | |
| OQ-002 | | | Open | |

### 4b. Decisions Log — chỉ ghi các quyết định quan trọng

```markdown
# Decisions Log

> Ghi nhận các quyết định nghiệp vụ đã được KH/PM chốt.
> BA không tự thay đổi nội dung. Format: DEC-NNN tăng dần, không xóa entry cũ.

## DEC-[NNN] — dd/mm/yyyy

**Vấn đề:** [OQ-ID] — [Nội dung câu hỏi gốc]
**Quyết định:** [Câu trả lời của KH — nguyên văn hoặc tóm tắt trung thực]
**Người chốt:** [Tên KH / PM]
**Nguồn:** [Tên file Q&A]
```

## Bước 5 — Báo cáo tóm tắt

Sau khi xử lý xong, hiển thị:

```
✅ Đã xử lý Q&A từ: [tên file / nguồn]

OQ đã Resolved : [N] (OQ-001, OQ-003, ...)
OQ còn Open    : [N] (OQ-002, OQ-005, ...)
Quyết định mới : [N] → đã ghi vào Decisions Log (DEC-XXX)
Không match OQ : [N] câu trả lời cần BA xác nhận thêm
```

Nếu có thay đổi scope:
> ⚠️ Phát hiện thay đổi scope tại: [danh sách item] → Nhắc BA cập nhật PTYC / Feature Spec tương ứng.

Nếu còn OQ Critical chưa có trả lời:
> ⚠️ Còn [N] OQ Critical chưa được trả lời — chưa đủ điều kiện viết tài liệu chính thức.

---

Hỏi BA: "Lưu output vào file không?" → nếu có: xuất 2 file riêng — bảng OQ cập nhật và Decisions Log.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Cập nhật PTYC nếu scope thay đổi | skill: create-ptyc | Dùng decisions làm input |
| Cập nhật Feature Spec | skill: create-feature-spec | Nếu quyết định ảnh hưởng chức năng cụ thể |
| Phân loại lại ưu tiên | skill: prioritize-requirements | Nếu scope thay đổi đáng kể |
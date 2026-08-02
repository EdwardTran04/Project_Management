---
name: create-screen-for-designer
description: Sinh đặc tả luồng màn hình (screen-md) hoặc prompt cho AI UI builder (Lovable, Figma Make) từ project-overview, PTYC, BPMN, MOM, hoặc danh sách chức năng. Tách context dùng chung để tối ưu credit khi sinh nhiều màn hình. Dùng khi BA cần định nghĩa 1 luồng màn hình tại một thời điểm.
---
# BA Screen Flow Generator

## Nguyên tắc cốt lõi

- Sinh nội dung cho **đúng 1 luồng màn hình / 1 use case mỗi lần chạy**.
- **Mô tả ngắn gọn, đủ dùng** — đủ để UI/UX hình dung luồng và rule hiển thị.
- **Tối ưu credit:** tách context cố định (UI Base Context) ra khỏi phần thay đổi của từng màn. Prompt mỗi màn chỉ chứa delta.

## Các chế độ output

| Mode | Output | Khi nào |
|------|--------|---------|
| `ui-base` | UI Base Context cho cả dự án | Chạy 1 LẦN đầu dự án |
| `screen-md` | Đặc tả markdown 1 màn hình | BA cần tài liệu |
| `lovable-prompt` | Prompt delta cho Lovable/Figma | Sinh UI |
| `both` | Cả screen-md và prompt | Cần cả hai |

Nếu BA chưa chọn → hỏi chọn mode. Nếu dự án chưa có UI Base Context và BA muốn sinh prompt → đề xuất chạy `ui-base` trước.

## Bước 1 — Nhận đầu vào

Hỏi người dùng:
1. Paste nguồn nghiệp vụ — `project-overview`, PTYC, BPMN, MOM, danh sách chức năng.
2. Tên luồng màn hình / use case cần sinh.
3. Chế độ output: `ui-base` / `screen-md` / `lovable-prompt` / `both`.
4. Đã có `ui-base-context.md` của dự án chưa? Nếu có, paste vào.

## Bước 2 — Lazy load reference theo mode

Chỉ load file cần thiết để tiết kiệm token:

| Mode | File cần load |
|------|--------------|
| `ui-base` | `references/ui-base-context-template.md` |
| `screen-md` | `references/screen-md-template.md` + `references/screen-flow-ref.md` |
| `lovable-prompt` | `references/lovable-prompt-template.md` + `references/screen-flow-ref.md` |
| `both` | cả screen-md-template + lovable-prompt-template + screen-flow-ref |

## Bước 3 — Quy trình sinh

### Nếu mode = `ui-base`
Theo `ui-base-context-template.md`, chắt lọc từ project-overview để sinh UI Base Context cho cả dự án. Lưu `docs/ui-base-context.md`. BA set 1 lần vào Lovable.

### Các mode còn lại

1. **Xác định luồng.** Input nhiều luồng → liệt kê, hỏi BA chọn 1.
2. **Xác định business object.** Object chính / liên quan / lookup / đính kèm / phê duyệt / tác nhân. Không gộp bảng phẳng.
3. **Hỏi cách định nghĩa trường:** `ai-suggest` / `ba-input` / `hybrid` (mặc định hybrid cho draft nhanh). Trường AI đề xuất đánh dấu `Nguồn xác định = AI đề xuất`.
4. **Định nghĩa state + display rule.** Mô tả theo state, không chỉ theo tên màn. Dùng ma trận state-rule trong `screen-flow-ref.md`.
5. **Sinh output:**
   - `screen-md` → theo `screen-md-template.md`
   - `lovable-prompt` → theo `lovable-prompt-template.md` (chỉ phần delta, tham chiếu UI Base Context)
6. **Chạy checklist** trong `screen-flow-ref.md` trước khi chốt.

## Quy tắc output

- Tiếng Việt mặc định. Văn phong BA: rõ ràng, có cấu trúc, không hoa mỹ.
- Tách biệt: đã xác nhận / giả định / câu hỏi mở.
- Không bịa chi tiết pháp lý → placeholder `[Căn cứ pháp lý cần BA bổ sung]`.
- Hệ thống quân đội/nhà nước/ngân hàng → UI trang trọng, bảo thủ.
- `lovable-prompt`: KHÔNG lặp lại phong cách/component/layout đã có trong UI Base Context — chỉ nêu delta của màn.

## Bước tiếp theo

| Output | Skill / Công cụ | Ghi chú |
|--------|----------------|---------|
| UI Base Context | Lovable / Figma | Set 1 lần làm design system |
| Prompt delta | Lovable / Figma | Copy từng màn, credit thấp |
| UI đã build | skill: create-screen-desc | Mô tả lại từ screenshot |
| Đưa vào TKCT | skill: create-tkct | screen-md là input Phần 3 |
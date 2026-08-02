---
name: create-wireframe
description: Phác thảo wireframe màn hình bằng ASCII art — layout, vị trí thành phần UI, luồng điều hướng. Dùng khi chưa có Figma hoặc cần mô tả nhanh màn hình cho Dev FE và Tester.
---

Tạo wireframe màn hình bằng ASCII art.

Hỏi người dùng:
1. Tên màn hình và tính năng thuộc về?
2. Platform: Web / Mobile App / cả hai?
3. Loại màn hình: form nhập liệu / danh sách / dashboard / modal / bottom sheet?
4. Các thành phần chính cần có trên màn hình?
5. Có Feature Spec hoặc mô tả yêu cầu liên quan không? Nếu có, paste vào đây.

Nếu người dùng cung cấp tài liệu đính kèm, đọc và rút trích danh sách thành phần trước khi vẽ.

---

Tạo wireframe theo format:

```
# Wireframe: [Tên màn hình]
**Feature:** [Tên tính năng]
**Platform:** Web / Mobile
**Version:** 1.0
**Ngày:** dd/mm/yyyy

## Layout

### Web (1280px)
┌─────────────────────────────────────────────────────┐
│ [Logo]                    [Nav Menu]    [Avatar ▼]  │
├─────────────────────────────────────────────────────┤
│                                                     │
│  Tiêu đề trang                          [+ Thêm]   │
│  ─────────────────────────────────────────────────  │
│                                                     │
│  ┌──────────────┐  ┌──────────────────────────────┐ │
│  │ [Filter]     │  │ [Search: _________________ 🔍]│ │
│  └──────────────┘  └──────────────────────────────┘ │
│                                                     │
│  ┌─────────────────────────────────────────────────┐ │
│  │ # │ Tên       │ Trạng thái  │ Ngày    │ Hành động│ │
│  │───┼───────────┼─────────────┼─────────┼──────────│ │
│  │ 1 │ Item A    │ [Active   ] │ 01/05   │ [✏️][🗑️] │ │
│  │ 2 │ Item B    │ [Pending  ] │ 02/05   │ [✏️][🗑️] │ │
│  └─────────────────────────────────────────────────┘ │
│                                                     │
│                    [< 1 2 3 ... >]                  │
└─────────────────────────────────────────────────────┘

### Mobile (375px)
┌─────────────────────┐
│ ☰  Tiêu đề    [+]  │
├─────────────────────┤
│ [Search ________🔍] │
├─────────────────────┤
│ ┌─────────────────┐ │
│ │ Item A          │ │
│ │ [Active]  01/05 │ │
│ │            [→]  │ │
│ └─────────────────┘ │
│ ┌─────────────────┐ │
│ │ Item B          │ │
│ │ [Pending] 02/05 │ │
│ │            [→]  │ │
│ └─────────────────┘ │
└─────────────────────┘

## Chú thích thành phần

| Ký hiệu | Ý nghĩa |
|---------|---------|
| `[Button]` | Nút bấm |
| `[______]` | Input field |
| `[Dropdown ▼]` | Dropdown |
| `[ ]` / `[x]` | Checkbox |
| `( )` / `(●)` | Radio button |
| `[Tab1][Tab2]` | Tab navigation |

## Luồng điều hướng

- Từ màn hình này: [Click item] → [Màn hình chi tiết]
- Từ màn hình này: [Click +] → [Modal tạo mới]
- Vào màn hình này từ: [Menu / màn hình trước]
```

Hỏi user: "Lưu vào file không?" → nếu có: xuất file, tên gợi ý `wireframe_[tên-màn-hình].md`.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Mô tả chi tiết thành phần màn hình | skill: create-screen-desc | Wireframe là input visual |
| Thiết kế chi tiết đưa vào TKCT | skill: create-tkct | Nhúng wireframe vào Phần 3b |
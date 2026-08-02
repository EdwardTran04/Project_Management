---
name: vtit-design-system
description: Bộ Design System chính thức của VTIT. Sử dụng skill này MỖI KHI người dùng yêu cầu thiết kế UI, generate component, tạo screen/page, hoặc bất kỳ visual deliverable nào liên quan đến sản phẩm VTIT. AI BẮT BUỘC phải đọc và tuân thủ các tokens, components, patterns được định nghĩa ở đây - KHÔNG được tự ý tạo màu mới, spacing mới, hay component mới ngoài design system. Trigger: "design", "thiết kế", "UI", "component", "button", "form", "dashboard", "screen", "mockup", "Figma", "tạo giao diện".
---

# VTIT Design System

> **Single Source of Truth** cho mọi thiết kế UI/UX của VTIT.
> Mọi AI generate design **BẮT BUỘC** phải tuân thủ design system này.

---

## 🎯 Mục đích của tài liệu này

Tài liệu này được thiết kế để:
1. **AI tuân thủ chính xác** design system khi generate UI
2. **Designer & Developer** có nguồn tham chiếu thống nhất
3. **Đảm bảo tính đồng bộ** trên mọi sản phẩm VTIT

---

## ⚠️ QUY TẮC BẮT BUỘC CHO AI

Khi generate bất kỳ thiết kế nào, AI **PHẢI**:

### ✅ DO (Bắt buộc làm)
- Đọc file [`foundations/tokens.md`](./foundations/tokens.md) **TRƯỚC TIÊN** để load toàn bộ design tokens
- Chỉ sử dụng colors trong [`foundations/colors.md`](./foundations/colors.md)
- Chỉ dùng spacing scale trong [`foundations/spacing.md`](./foundations/spacing.md)
- Chỉ dùng typography đã định nghĩa trong [`foundations/typography.md`](./foundations/typography.md)
- Reuse components có sẵn trong [`components/`](./components/) thay vì tạo mới
- Áp dụng patterns trong [`patterns/`](./patterns/) cho các flow phổ biến
- Tuân thủ accessibility trong [`guidelines/accessibility.md`](./guidelines/accessibility.md)

### ❌ DON'T (Tuyệt đối không)
- KHÔNG tự sáng tạo màu mới (vd: `#FF5733` ngẫu nhiên)
- KHÔNG dùng spacing tự do (vd: `padding: 13px`)
- KHÔNG dùng font ngoài hệ thống
- KHÔNG tạo component biến thể không có trong design system
- KHÔNG mix nhiều style libraries khác nhau

### 🔍 Self-Audit Checklist
Sau khi generate, AI phải tự kiểm tra:
- [ ] Tất cả màu đều từ token palette?
- [ ] Tất cả spacing là multiples của 4px?
- [ ] Typography dùng đúng scale?
- [ ] Components đều có trong library?
- [ ] Đã đáp ứng WCAG 2.2 AA?

---

## 📚 Cấu trúc tài liệu

```
design-system/
├── design.md                    ← BẠN ĐANG Ở ĐÂY (Overview)
├── README.md                    ← Hướng dẫn cài đặt & sử dụng
├── CHANGELOG.md                 ← Lịch sử thay đổi
│
├── foundations/                 ← 🏗️ NỀN TẢNG (đọc đầu tiên!)
│   ├── tokens.md               ← All Design Tokens (JSON)
│   ├── colors.md               ← Color palette
│   ├── typography.md           ← Font system
│   ├── spacing.md              ← Spacing scale
│   ├── grid.md                 ← Grid & layout
│   ├── elevation.md            ← Shadows & depth
│   ├── borders.md              ← Border & radius
│   ├── icons.md                ← Icon system
│   └── motion.md               ← Animation & transitions
│
├── components/                  ← 🧩 COMPONENTS
│   ├── atomic/                 ← Button, Input, Badge...
│   ├── molecules/              ← Card, Dropdown, Tabs...
│   └── organisms/              ← Modal, Table, Navbar...
│
├── patterns/                    ← 🎨 UI PATTERNS
│   ├── dashboard.md
│   ├── auth-flow.md
│   ├── empty-states.md
│   └── ...
│
├── guidelines/                  ← 📐 HƯỚNG DẪN
│   ├── accessibility.md        ← WCAG 2.2
│   ├── content.md              ← Voice & Tone
│   ├── responsive.md
│   ├── dark-mode.md
│   └── dos-donts.md
│
├── handoff/                     ← 👨‍💻 CHO DEVELOPER
│   ├── developer-guide.md
│   ├── tokens-export.md
│   ├── react-usage.md
│   ├── tailwind-config.md
│   └── figma-to-code.md
│
└── appendix/                    ← 📎 PHỤ LỤC
    ├── glossary.md
    ├── changelog-full.md
    └── references.md
```

---

## 🚀 Quick Start cho AI

Khi user yêu cầu thiết kế, AI thực hiện theo thứ tự:

1. **Load context**: Đọc `foundations/tokens.md` để có toàn bộ tokens
2. **Identify pattern**: Xác định loại UI cần tạo (form, dashboard, list...)
3. **Reference patterns**: Tìm pattern phù hợp trong `patterns/`
4. **Compose components**: Ghép các components từ `components/`
5. **Apply guidelines**: Áp dụng accessibility, responsive rules
6. **Self-audit**: Chạy checklist ở mục "Self-Audit Checklist"

---

## 📋 Information Architecture

### Foundation Layer (Nền tảng)
Định nghĩa **ngôn ngữ thiết kế** cơ bản nhất.
→ Mọi component đều xây dựng trên đây.

### Component Layer (Atomic Design)
- **Atoms**: Phần tử nhỏ nhất không thể chia nhỏ
- **Molecules**: Tổ hợp 2-3 atoms
- **Organisms**: Khối UI hoàn chỉnh

### Pattern Layer
Các **flow** và **layout** phổ biến đã được giải quyết sẵn.
→ Reuse pattern thay vì design từ đầu.

### Guidelines Layer
Các **quy tắc mềm** về accessibility, content, responsive...

---

## 🎨 Design Principles

### 1. Consistency First (Nhất quán trước tiên)
Cùng một action → cùng một UI behavior → cùng một visual.

### 2. Clarity over Cleverness (Rõ ràng hơn thông minh)
Người dùng hiểu ngay, không cần đoán.

### 3. Accessibility by Default (Mặc định tiếp cận)
WCAG 2.2 AA là **mức tối thiểu**, không phải mức tối đa.

### 4. Mobile-First, Responsive Always
Thiết kế mobile trước, scale lên desktop.

### 5. Performance Matters
Animation < 300ms, không block UI thread.

---

## 🔗 Liên kết quan trọng

- **Figma File**: [VTIT Design System AI](https://www.figma.com/design/zcJTWw2AsvRqHDEmjKfVKS/VTIT-Design-System-AI)
- **Storybook**: _(chờ cập nhật)_
- **Code Repo**: _(chờ cập nhật)_

---

## 📞 Liên hệ & Đóng góp

- **Owner**: VTIT Design Team
- **Updates**: Xem `CHANGELOG.md`
- **Issues**: Liên hệ design lead

---

**Phiên bản**: 1.0.0
**Cập nhật**: 2026-05-07

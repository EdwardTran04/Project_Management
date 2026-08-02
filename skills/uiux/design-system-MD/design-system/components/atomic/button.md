# Button

> Component cơ bản dùng để trigger action hoặc navigate.

---

## 📋 Overview

Button được sử dụng trong:
- Dialogs / Cards / Forms / Banners
- CTA (Call-to-action)
- Form submission
- Navigation

**Nguyên tắc**:
- Phân biệt rõ Primary / Secondary
- Text ngắn gọn (≤ 4 từ), dễ hiểu
- Mỗi screen chỉ nên có **1 primary button**

---

## 🎨 Variants

### Primary
Action chính, quan trọng nhất.

```
[ Save Changes ]   ← background: brand-primary-600
                     color: white
```

### Secondary
Action phụ, ít quan trọng hơn.

```
[ Cancel ]         ← background: white
                     border: gray-300
                     color: gray-700
```

### Tertiary (Ghost)
Action không quan trọng, mang tính bổ trợ.

```
[ Learn more ]     ← background: transparent
                     color: brand-primary-600
                     no border
```

### Destructive
Action nguy hiểm (xóa, reset).

```
[ Delete Account ] ← background: red-600
                     color: white
```

### Link
Trông giống link, hành xử như button.

```
Learn more →       ← color: brand-primary-600
                     underline on hover
```

---

## 📏 Sizes

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| `xs` | 24px | 4px 8px | 12px | Inline, table actions |
| `sm` | 32px | 6px 12px | 14px | Compact UI |
| `md` | 40px | 8px 16px | 14px | **Default** ⭐ |
| `lg` | 48px | 12px 20px | 16px | Forms, prominent CTAs |
| `xl` | 56px | 16px 24px | 18px | Hero CTAs |

---

## 🎯 States

| State | Visual Change |
|-------|---------------|
| `default` | Base style |
| `hover` | Background darken (10%) |
| `active` | Background darken (15%), scale(0.98) |
| `focus` | Focus ring 3px brand-primary-200 |
| `disabled` | Opacity 50%, cursor not-allowed |
| `loading` | Show spinner, disable click |

---

## 🧩 Anatomy

```
┌──────────────────────────────┐
│  [Icon] Label Text [Icon]    │
└──────────────────────────────┘
   ↑      ↑          ↑
   Leading Text     Trailing
   icon            icon (optional)
```

---

## 💻 Code Examples

### Primary Button

```jsx
<Button variant="primary" size="md">
  Save Changes
</Button>
```

```css
.button-primary {
  background: var(--brand-primary-600);
  color: var(--white);
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  transition: all 150ms ease-out;
}

.button-primary:hover {
  background: var(--brand-primary-700);
}

.button-primary:active {
  background: var(--brand-primary-800);
  transform: scale(0.98);
}

.button-primary:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px var(--brand-primary-200);
}

.button-primary:disabled {
  background: var(--gray-300);
  cursor: not-allowed;
}
```

### With Icon

```jsx
<Button variant="primary" leadingIcon={<Plus />}>
  Add Item
</Button>

<Button variant="secondary" trailingIcon={<ChevronRight />}>
  Next Step
</Button>
```

### Loading State

```jsx
<Button variant="primary" loading>
  Saving...
</Button>
```

---

## ✅ Do's & Don'ts

### ✅ DO

- Dùng verb cho label: "Save", "Delete", "Submit"
- 1 primary button per view
- Icon + text khi cần làm rõ ý nghĩa
- Disabled state khi action chưa khả dụng

### ❌ DON'T

- ❌ Quá nhiều text: "Click here to save your changes"
- ❌ Multiple primary buttons cạnh nhau
- ❌ Icon-only button không có aria-label
- ❌ Destructive action không có confirmation

---

## ♿ Accessibility

```html
<!-- ✅ Icon-only button cần aria-label -->
<button aria-label="Close dialog">
  <X />
</button>

<!-- ✅ Loading state -->
<button aria-busy="true" disabled>
  <Spinner aria-hidden="true" />
  Saving...
</button>

<!-- ✅ Keyboard navigation -->
- Tab: focus button
- Enter/Space: activate
- Esc: cancel (in dialog context)
```

### Focus

- **Focus ring**: 3px solid `brand-primary-200`
- **Visible focus**: Bắt buộc, không được `outline: none`
- **Skip to content**: Đầu mỗi page

---

## 🔗 Related

- [Icon Button →](icon-button.md)
- [Tokens →](../../foundations/tokens.md)
- [Accessibility →](../../guidelines/accessibility.md)

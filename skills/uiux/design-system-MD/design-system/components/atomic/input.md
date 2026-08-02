# Input

> Trường nhập liệu cho text, email, password, number...

---

## 🎨 Variants

| Type | Use Case |
|------|----------|
| `text` | Default text input |
| `email` | Email với keyboard tối ưu |
| `password` | Có toggle hiện/ẩn |
| `number` | Số liệu, có spinner |
| `tel` | Số điện thoại |
| `url` | Đường dẫn |
| `search` | Tìm kiếm, có icon search |

---

## 📏 Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| `sm` | 32px | 6px 12px | 14px |
| `md` | 40px | 8px 12px | 14px ⭐ |
| `lg` | 48px | 12px 16px | 16px |

---

## 🎯 States

- `default` — Border `gray-300`
- `hover` — Border `gray-400`
- `focus` — Border `brand-primary-500`, ring 3px `brand-primary-100`
- `error` — Border `red-500`, ring red-100
- `disabled` — Background `gray-100`, opacity 60%
- `readonly` — Background `gray-50`, không có cursor

---

## 🧩 Anatomy

```
┌─ Label ─────────────────┐
│ Email Address *         │
└─────────────────────────┘
┌─────────────────────────┐
│ [Icon] you@example.com  │  ← Input field
└─────────────────────────┘
  Helper text or error message
```

---

## 💻 Code Example

```jsx
<FormField>
  <Label htmlFor="email" required>Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="you@example.com"
    leadingIcon={<Mail />}
    error={errors.email}
  />
  <HelperText error={!!errors.email}>
    {errors.email || "We'll never share your email"}
  </HelperText>
</FormField>
```

```css
.input {
  height: 40px;
  padding: 8px 12px;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  font-size: 14px;
  background: var(--white);
  color: var(--text-primary);
  transition: border 150ms, box-shadow 150ms;
}

.input:focus {
  outline: none;
  border-color: var(--brand-primary-500);
  box-shadow: 0 0 0 3px var(--brand-primary-100);
}

.input--error {
  border-color: var(--red-500);
}

.input::placeholder {
  color: var(--text-tertiary);
}
```

---

## ♿ Accessibility

- ✅ Always có `<label>` (visible hoặc `aria-label`)
- ✅ `required` field có `aria-required="true"`
- ✅ Error message liên kết qua `aria-describedby`
- ✅ Tab order hợp lý
- ✅ Keyboard hỗ trợ đầy đủ

```html
<label for="email">Email *</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-invalid="true"
  aria-describedby="email-error"
/>
<span id="email-error" role="alert">Invalid email format</span>
```

---

## 🔗 Related

- [Label →](./label.md) | [Form →](../organisms/form.md) | [Tokens →](../../foundations/tokens.md)

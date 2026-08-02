# Checkbox

> Cho phép chọn 0, 1, hoặc nhiều option từ list.

---

## 📏 Specs

| Size | Box Size | Touch Target |
|------|----------|--------------|
| `sm` | 16x16 | 24x24 |
| `md` | 20x20 ⭐ | 32x32 |
| `lg` | 24x24 | 40x40 |

---

## 🎯 States

- `unchecked` — Empty box, border `gray-300`
- `checked` — Background `brand-primary-600`, white check icon
- `indeterminate` — Background `brand-primary-600`, dash icon
- `disabled` — Opacity 50%
- `error` — Border `red-500`

---

## 💻 Example

```jsx
<Checkbox
  id="terms"
  checked={agreed}
  onChange={setAgreed}
  label="I agree to the Terms of Service"
/>

{/* Group */}
<CheckboxGroup label="Notifications">
  <Checkbox label="Email" checked />
  <Checkbox label="SMS" />
  <Checkbox label="Push notifications" checked />
</CheckboxGroup>
```

```css
.checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid var(--gray-300);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 150ms;
}

.checkbox:checked {
  background: var(--brand-primary-600);
  border-color: var(--brand-primary-600);
}

.checkbox:focus-visible {
  box-shadow: 0 0 0 3px var(--brand-primary-100);
}
```

---

## ♿ Accessibility

- ✅ Always có label (clickable)
- ✅ Group dùng `<fieldset>` + `<legend>`
- ✅ Indeterminate qua JS: `el.indeterminate = true`
- ✅ Keyboard: Space để toggle

---

## 🔗 Related
[Radio →](radio.md) | [Toggle →](toggle.md)

# Toggle (Switch)

> On/Off switch — instant action, no save needed.

---

## 📏 Specs

| Size | Track | Thumb |
|------|-------|-------|
| `sm` | 32x18 | 14x14 |
| `md` | 44x24 ⭐ | 20x20 |
| `lg` | 56x32 | 28x28 |

---

## 🎯 States

- `off` — Track `gray-200`, thumb left
- `on` — Track `brand-primary-600`, thumb right
- `disabled` — Opacity 50%
- `loading` — Spinner trong thumb

---

## 💻 Example

```jsx
<Toggle
  checked={notifications}
  onChange={setNotifications}
  label="Email notifications"
/>
```

```css
.toggle {
  width: 44px;
  height: 24px;
  background: var(--gray-200);
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  transition: background 150ms;
}

.toggle--on {
  background: var(--brand-primary-600);
}

.toggle__thumb {
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 9999px;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 150ms ease-out;
  box-shadow: var(--shadow-sm);
}

.toggle--on .toggle__thumb {
  transform: translateX(20px);
}
```

---

## ✅ When to use

| Toggle | Checkbox |
|--------|----------|
| Action xảy ra ngay | Cần Save button |
| On/Off concept | Yes/No agreement |
| Settings | Form submission |

---

## ♿ Accessibility

```html
<button
  role="switch"
  aria-checked="true"
  aria-label="Email notifications"
>
  <span class="toggle-thumb" />
</button>
```

---

## 🔗 Related
[Checkbox →](checkbox.md)

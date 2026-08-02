# Icon Button

> Button chỉ có icon, không có text.

---

## 📏 Sizes

| Size | Container | Icon |
|------|-----------|------|
| `xs` | 24x24 | 12px |
| `sm` | 32x32 | 16px |
| `md` | 40x40 ⭐ | 20px |
| `lg` | 48x48 | 24px |

---

## 🎨 Variants

Tương tự Button: primary, secondary, tertiary (ghost), destructive.

---

## 💻 Example

```jsx
<IconButton
  icon={<Search />}
  aria-label="Search"
  variant="ghost"
  size="md"
/>

<IconButton
  icon={<Trash />}
  aria-label="Delete item"
  variant="destructive"
/>
```

```css
.icon-button {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background 150ms;
}

.icon-button--ghost {
  background: transparent;
  color: var(--text-secondary);
}

.icon-button--ghost:hover {
  background: var(--gray-100);
  color: var(--text-primary);
}
```

---

## ♿ Accessibility — BẮT BUỘC

```jsx
{/* ✅ ALWAYS có aria-label */}
<IconButton icon={<X />} aria-label="Close dialog" />

{/* ❌ KHÔNG BAO GIỜ thiếu */}
<IconButton icon={<X />} />  {/* Screen reader không biết button làm gì */}
```

---

## 🔗 Related
[Button →](button.md) | [Icons →](../../foundations/icons.md)

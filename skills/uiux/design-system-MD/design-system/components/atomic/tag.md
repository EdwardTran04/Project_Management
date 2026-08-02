# Tag / Chip

> Đánh dấu, phân loại, hoặc filter — có thể removable.

---

## 🎨 Variants

| Variant | Use Case |
|---------|----------|
| `default` | Static tag |
| `removable` | Có nút × để xóa |
| `interactive` | Click được (filter) |
| `selected` | Active state (filter) |

---

## 📏 Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| `sm` | 24px | 4px 8px | 12px |
| `md` | 28px | 4px 12px | 14px ⭐ |
| `lg` | 32px | 6px 12px | 14px |

---

## 💻 Example

```jsx
<Tag>Design</Tag>

<Tag removable onRemove={() => removeTag('design')}>
  Design
</Tag>

<Tag interactive selected={isSelected} onClick={toggle}>
  React
</Tag>

{/* With color */}
<Tag color="green">Active</Tag>
<Tag color="red">Critical</Tag>
```

```css
.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 28px;
  padding: 4px 12px;
  background: var(--gray-100);
  color: var(--gray-700);
  border-radius: var(--radius-full);
  font-size: 14px;
  font-weight: 500;
}

.tag--interactive {
  cursor: pointer;
  transition: background 150ms;
}

.tag--interactive:hover {
  background: var(--gray-200);
}

.tag--selected {
  background: var(--brand-primary-100);
  color: var(--brand-primary-700);
}
```

---

## ✅ Tag vs Badge

| Tag | Badge |
|-----|-------|
| User-controlled (filter, label) | System-controlled (status) |
| Có thể xóa | Static |
| Click to filter | Display only |

---

## 🔗 Related
[Badge →](badge.md)

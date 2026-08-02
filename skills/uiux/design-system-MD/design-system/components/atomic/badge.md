# Badge

> Hiển thị status, count, hoặc label nhỏ.

---

## 🎨 Variants

| Variant | Color | Use Case |
|---------|-------|----------|
| `default` | gray | Neutral info |
| `primary` | brand-primary | Featured |
| `success` | green | Success status |
| `warning` | yellow | Warning |
| `error` | red | Error, critical |
| `info` | blue | Info |

### Style

- `solid` — Solid background ⭐
- `subtle` — Light background, dark text
- `outline` — Transparent background, colored border

---

## 📏 Sizes

| Size | Height | Padding | Font |
|------|--------|---------|------|
| `xs` | 16px | 0 6px | 10px |
| `sm` | 20px | 2px 8px | 12px ⭐ |
| `md` | 24px | 4px 10px | 14px |

---

## 💻 Example

```jsx
<Badge variant="success">Active</Badge>
<Badge variant="warning" subtle>Pending</Badge>
<Badge variant="error" outline>Failed</Badge>

{/* With dot */}
<Badge variant="success" dot>Online</Badge>

{/* With count */}
<Badge variant="primary">{99}</Badge>
```

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
}

.badge--success {
  background: var(--green-100);
  color: var(--green-700);
}
```

---

## ✅ Best Practices

- ✅ Text ngắn (1-2 từ hoặc số)
- ✅ Dùng đúng semantic color
- ❌ Không dùng badge cho action (dùng button)
- ❌ Không quá nhiều badges trên 1 element

---

## 🔗 Related
[Tag →](tag.md) | [Tokens →](../../foundations/tokens.md)

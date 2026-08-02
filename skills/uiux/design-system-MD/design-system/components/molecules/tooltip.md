# Tooltip

> Hint ngắn xuất hiện khi hover/focus.

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Background | `gray-900` |
| Color | `white` |
| Padding | 6px 8px |
| Font size | 12px |
| Border radius | `radius-md` |
| Max width | 240px |
| Show delay | 500ms |

---

## 💻 Example

```jsx
<Tooltip content="Save changes (Cmd+S)">
  <IconButton icon={<Save />} aria-label="Save" />
</Tooltip>
```

---

## ✅ Best Practices

- ✅ Text ngắn (1-2 dòng)
- ✅ Position auto-flip
- ❌ Không chứa interactive elements
- ❌ Không tooltip cho text rõ ràng

---

## ♿ Accessibility

- `role="tooltip"`
- `aria-describedby` từ trigger
- Hiển thị khi focus

---

## 🔗 Related
[Dropdown →](dropdown.md)

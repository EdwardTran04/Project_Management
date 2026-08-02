# Textarea

> Trường nhập multi-line text.

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Min height | 80px (3 lines) |
| Padding | 12px |
| Border radius | `radius-md` (6px) |
| Resize | `vertical` only |

---

## 🎯 States
Tương tự [Input](input.md): default, hover, focus, error, disabled, readonly.

---

## 💻 Example

```jsx
<FormField>
  <Label htmlFor="message">Message</Label>
  <Textarea
    id="message"
    rows={4}
    maxLength={500}
    placeholder="Tell us more..."
  />
  <CharCount current={value.length} max={500} />
</FormField>
```

```css
.textarea {
  min-height: 80px;
  padding: 12px;
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  font-family: inherit;
  font-size: 14px;
  resize: vertical;
  line-height: 1.5;
}
```

---

## ✅ Best Practices

- ✅ Auto-resize cho UX tốt hơn
- ✅ Character counter khi có max length
- ✅ Min 3 lines, max 8-10 lines (tránh scroll dài)
- ❌ Không dùng cho < 100 ký tự (dùng Input)

---

## 🔗 Related
[Input →](input.md) | [Form →](../organisms/form.md)

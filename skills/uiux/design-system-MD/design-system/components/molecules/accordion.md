# Accordion / Collapse

> Hiển thị/ẩn nội dung theo section.

---

## 🎨 Variants

- **Single** — Chỉ 1 section mở
- **Multiple** — Nhiều sections cùng mở
- **FAQ style** — Borderless
- **Card style** — Mỗi section trong card

---

## 💻 Example

```jsx
<Accordion type="single" defaultValue="item-1">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Question 1</Accordion.Trigger>
    <Accordion.Content>Answer 1...</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

---

## ⚡ Animation

- Expand/Collapse: 200ms ease-out
- Icon rotate 180°: 200ms

---

## ♿ Accessibility

- `aria-expanded`, `aria-controls`
- Keyboard: Enter/Space toggle, Arrow keys navigate

---

## 🔗 Related
[Tabs →](tabs.md)

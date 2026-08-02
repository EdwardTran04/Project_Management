# Card

> Container đa dụng để gom nhóm thông tin liên quan.

---

## 🎨 Variants

- `default` — White background, subtle shadow
- `bordered` — Border thay shadow
- `elevated` — Stronger shadow
- `interactive` — Hover effect, clickable

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Background | `white` |
| Border radius | `radius-lg` (8px) |
| Padding | 16px / 24px / 32px |
| Shadow | `shadow-sm` default |

---

## 🧩 Anatomy

```
┌──────────────────────────────┐
│  [Image - optional]          │
├──────────────────────────────┤
│  Card Title                  │
│  Subtitle / Metadata         │
├──────────────────────────────┤
│  Body content here.          │
├──────────────────────────────┤
│  [Tag] [Tag]      [Action]  │
└──────────────────────────────┘
```

---

## 💻 Example

```jsx
<Card>
  <Card.Header>
    <Card.Title>Project Alpha</Card.Title>
    <Card.Subtitle>Updated 2 hours ago</Card.Subtitle>
  </Card.Header>
  <Card.Body>
    <p>Description...</p>
  </Card.Body>
  <Card.Footer>
    <Badge>In Progress</Badge>
    <Button variant="primary" size="sm">View</Button>
  </Card.Footer>
</Card>
```

```css
.card {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 24px;
  transition: box-shadow 200ms;
}

.card--interactive:hover {
  box-shadow: var(--shadow-md);
  cursor: pointer;
}
```

---

## 🔗 Related
[Tokens →](../../foundations/tokens.md) | [Elevation →](../../foundations/elevation.md)

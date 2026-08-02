# Tabs

> Chuyển đổi giữa các view có cùng cấp.

---

## 🎨 Variants

- **Underline** — Default
- **Pill** — Background fill cho active
- **Segmented** — Toàn bộ trong container
- **Vertical** — Tabs xếp dọc

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Tab height | 40px |
| Padding | 8px 16px |
| Active indicator | 2px line bottom |
| Active color | `brand-primary-600` |

---

## 💻 Example

```jsx
<Tabs defaultValue="overview">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="activity">Activity</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview">Content...</Tabs.Content>
  <Tabs.Content value="activity">Content...</Tabs.Content>
</Tabs>
```

---

## ✅ Best Practices

- ✅ 2-7 tabs
- ✅ Label ngắn (1-2 từ)
- ✅ URL sync để shareable
- ❌ Không nest tabs

---

## ♿ Accessibility

- `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Keyboard: ←→ navigate, Home/End jump

---

## 🔗 Related
[Accordion →](accordion.md) | [Navbar →](../organisms/navbar.md)

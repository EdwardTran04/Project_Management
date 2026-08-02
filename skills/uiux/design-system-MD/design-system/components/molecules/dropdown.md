# Dropdown Menu

> Menu xuất hiện từ trigger button — chứa actions hoặc options.

---

## 🎨 Variants

- **Action menu** — List of actions
- **Select dropdown** — Choose value
- **Navigation dropdown** — Nav items

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Min width | 160px |
| Max height | 320px (scrollable) |
| Item height | 40px |
| Shadow | `shadow-lg` |
| Border radius | `radius-lg` |

---

## 💻 Example

```jsx
<Dropdown trigger={<Button>Actions ▼</Button>}>
  <Dropdown.Item icon={<Edit />}>Edit</Dropdown.Item>
  <Dropdown.Item icon={<Copy />}>Duplicate</Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item icon={<Trash />} destructive>Delete</Dropdown.Item>
</Dropdown>
```

---

## ♿ Accessibility

- `role="menu"`, `role="menuitem"`
- Keyboard: Space/Enter open, ↑↓ navigate, Esc close

---

## 🔗 Related
[Select →](../atomic/select.md) | [Tooltip →](tooltip.md)

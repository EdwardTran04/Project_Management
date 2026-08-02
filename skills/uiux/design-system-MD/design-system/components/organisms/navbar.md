# Navbar / Top Navigation

> Thanh điều hướng chính ở top.

---

## 🎨 Variants

- **Top bar** — Logo + nav + actions
- **App header** — Dashboard top bar
- **Marketing header** — Landing page navigation

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Height | 64px (desktop), 56px (mobile) |
| Background | `white` hoặc `gray-50` |
| Border bottom | 1px `border-default` |
| Padding | 0 24px (desktop), 0 16px (mobile) |
| Z-index | `1100` (sticky) |

---

## 🧩 Anatomy

```
┌──────────────────────────────────────────────────────┐
│ [Logo]  Nav 1  Nav 2  Nav 3        [Search] [User ▼]│
└──────────────────────────────────────────────────────┘
```

### Mobile

```
┌────────────────────────────────────┐
│ [☰]  [Logo]              [User]   │
└────────────────────────────────────┘
```

---

## 💻 Example

```jsx
<Navbar>
  <Navbar.Brand>
    <Logo />
  </Navbar.Brand>
  <Navbar.Nav>
    <Navbar.Item href="/dashboard" active>Dashboard</Navbar.Item>
    <Navbar.Item href="/projects">Projects</Navbar.Item>
    <Navbar.Item href="/team">Team</Navbar.Item>
  </Navbar.Nav>
  <Navbar.Actions>
    <IconButton icon={<Search />} aria-label="Search" />
    <IconButton icon={<Bell />} aria-label="Notifications" />
    <Avatar src="/user.jpg" />
  </Navbar.Actions>
</Navbar>
```

---

## ✅ Best Practices

- ✅ Sticky on scroll (top: 0)
- ✅ Active state rõ ràng cho current page
- ✅ Mobile: hamburger menu
- ✅ Logo link về home
- ❌ Không quá 7 top-level nav items

---

## ♿ Accessibility

- ✅ `<nav role="navigation">` với `aria-label`
- ✅ Skip to content link
- ✅ Active page có `aria-current="page"`

---

## 🔗 Related
[Sidebar →](sidebar.md) | [Tabs →](../molecules/tabs.md)

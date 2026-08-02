# Sidebar Navigation

> Thanh điều hướng dọc bên cạnh.

---

## 🎨 Variants

- **Persistent** — Always visible (desktop)
- **Collapsible** — Có thể thu gọn thành icon-only
- **Drawer** — Slide-in (mobile, tablet)
- **Floating** — Overlay style

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Width expanded | 240-280px |
| Width collapsed | 64px (icon only) |
| Background | `white` hoặc `gray-50` |
| Item height | 40px |
| Item padding | 8px 12px |

---

## 🧩 Anatomy

```
┌──────────────┐
│  [Logo]      │  ← Header
├──────────────┤
│  [Search]    │
├──────────────┤
│ MAIN         │  ← Section label
│ ▸ Dashboard  │
│ ▸ Projects   │
│ ▸ Team       │
├──────────────┤
│ SETTINGS     │
│ ▸ Profile    │
│ ▸ Billing    │
├──────────────┤
│ [User]   [⚙] │  ← Footer
└──────────────┘
```

---

## 💻 Example

```jsx
<Sidebar collapsible>
  <Sidebar.Header>
    <Logo />
  </Sidebar.Header>

  <Sidebar.Content>
    <Sidebar.Section label="Main">
      <Sidebar.Item icon={<Home />} href="/" active>
        Dashboard
      </Sidebar.Item>
      <Sidebar.Item icon={<Folder />} href="/projects" badge="12">
        Projects
      </Sidebar.Item>
      <Sidebar.Item icon={<Users />} href="/team">
        Team
      </Sidebar.Item>
    </Sidebar.Section>

    <Sidebar.Section label="Settings">
      <Sidebar.Item icon={<User />} href="/profile">
        Profile
      </Sidebar.Item>
    </Sidebar.Section>
  </Sidebar.Content>

  <Sidebar.Footer>
    <UserMenu />
  </Sidebar.Footer>
</Sidebar>
```

---

## ✅ Best Practices

- ✅ Group items theo logical sections
- ✅ Active item highlight rõ ràng
- ✅ Icon + label (collapsed → icon only + tooltip)
- ✅ Persistent state (localStorage)
- ✅ Mobile: drawer overlay

---

## 🔗 Related
[Navbar →](navbar.md)

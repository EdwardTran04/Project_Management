# Navigation Patterns

> Các pattern điều hướng phổ biến.

---

## 🎯 Pattern 1: Top Navigation

**Best for**: Marketing sites, simple apps.

```
[Logo]  Home  About  Pricing  Contact   [Sign In] [Sign Up]
```

**Pros**: Familiar, scannable
**Cons**: Limited items (5-7 max)

---

## 🎯 Pattern 2: Sidebar Navigation

**Best for**: Dashboards, admin panels, apps.

```
┌──────────┬─────────┐
│ Sidebar  │ Content │
└──────────┴─────────┘
```

**Pros**: Many items, hierarchical
**Cons**: Takes horizontal space

---

## 🎯 Pattern 3: Combined (Top + Side)

**Best for**: Complex apps.

```
┌────────────────────────────┐
│  Top: brand + global       │
├──────┬─────────────────────┤
│ Side │ Content             │
└──────┴─────────────────────┘
```

---

## 🎯 Pattern 4: Tab Bar (Mobile)

**Best for**: Mobile apps with 3-5 main sections.

```
┌─────────────────────────┐
│       Content           │
├─────────────────────────┤
│ [🏠] [🔍] [➕] [💬] [👤]│
└─────────────────────────┘
```

---

## 🎯 Pattern 5: Breadcrumbs

**Best for**: Hierarchical content, deep pages.

```
Home › Products › Electronics › Laptops › MacBook Pro
```

```jsx
<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item current>MacBook Pro</Breadcrumb.Item>
</Breadcrumb>
```

---

## 🎯 Pattern 6: Stepper (Wizard)

```
[1 Account]──[2 Profile]──[3 Confirm]
   ●            ○             ○
```

---

## 🎯 Pattern 7: Mega Menu

**Best for**: E-commerce, content-rich sites.

```
[Hover/Click on menu]
   ↓
┌─────────────────────────────────┐
│ Category 1  Category 2          │
│ • Item     • Item               │
│ • Item     • Item    [Image]    │
│ • Item     • Item               │
└─────────────────────────────────┘
```

---

## 🎯 Active State Patterns

### Underline
```
Home  About  [Pricing]  Contact
              ▔▔▔▔▔▔▔
```

### Background fill
```
Home  About  ╔═════════╗  Contact
             ║ Pricing ║
             ╚═════════╝
```

### Color change
```
Home  About  Pricing  Contact
              (blue)
```

---

## ♿ Accessibility

- ✅ `<nav>` semantic element
- ✅ `aria-label` cho mỗi nav (e.g., "Main", "Footer")
- ✅ `aria-current="page"` cho active item
- ✅ Skip to content link
- ✅ Keyboard navigation (Tab, Arrow keys)

---

## 🔗 Related

[Navbar →](../components/organisms/navbar.md) | [Sidebar →](../components/organisms/sidebar.md)

# Elevation (Shadows)

> Hệ thống độ nâng (z-axis) thông qua shadow — tạo cảm giác chiều sâu cho UI.

---

## 🎯 Mục đích của Elevation

Elevation thể hiện **mức độ quan trọng** và **sự phân tách** giữa các layer.
- Higher elevation = Closer to user = More important
- Modal > Dropdown > Card > Page

---

## 📊 Elevation Scale

| Level | Token | Shadow Value | Use Case |
|-------|-------|--------------|----------|
| 0 | `shadow-none` | `none` | Flat, default |
| 1 | `shadow-xs` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle borders |
| 2 | `shadow-sm` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | Cards, raised buttons |
| 3 | `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Dropdowns, hover |
| 4 | `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Popovers |
| 5 | `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Modals, sheets |
| 6 | `shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Top-priority overlays |

### Special

| Token | Value | Use Case |
|-------|-------|----------|
| `shadow-inner` | `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)` | Pressed states, inputs |
| `shadow-focus` | `0 0 0 3px rgb(59 130 246 / 0.5)` | Focus ring |

---

## 🎨 Visual Hierarchy

```
Level 6 (2xl) ──── Critical alerts, system modals
Level 5 (xl)  ──── Modals, drawers
Level 4 (lg)  ──── Popovers, large tooltips
Level 3 (md)  ──── Dropdowns, hover cards
Level 2 (sm)  ──── Cards, raised buttons
Level 1 (xs)  ──── Subtle elevation
Level 0       ──── Default page surface
```

---

## ✅ Best Practices

### ✅ DO

```css
/* ✅ Card với elevation phù hợp */
.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--motion-duration-fast);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

/* ✅ Modal với elevation cao */
.modal {
  box-shadow: var(--shadow-xl);
}
```

### ❌ DON'T

```css
/* ❌ Custom shadow */
box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.3);

/* ❌ Elevation quá nhiều cho component đơn giản */
.button {
  box-shadow: var(--shadow-2xl);  /* Overkill */
}

/* ❌ Mix nhiều shadows lung tung */
box-shadow:
  0 1px 2px black,
  3px 0 5px gray,
  -2px 0 4px blue;
```

---

## 🌑 Dark Mode

Shadow cần điều chỉnh trong dark mode (giảm opacity hoặc dùng border thay thế).

```css
[data-theme="dark"] {
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.4);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.5);
  /* Hoặc dùng border ring thay shadow */
}
```

---

## 🔗 Related

- [Tokens →](tokens.md)
- [Dark Mode →](../guidelines/dark-mode.md)

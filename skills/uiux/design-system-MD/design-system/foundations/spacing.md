# Spacing

> Hệ thống spacing dựa trên **4px baseline** — đảm bảo nhịp điệu visual nhất quán.

---

## 📐 Base Unit: 4px

Mọi spacing trong VTIT đều là **bội số của 4px**.
Lý do: 4px là đơn vị nhỏ nhất đủ tinh tế, đồng thời chia đều với pixel density của màn hình.

```
4 → 8 → 12 → 16 → 20 → 24 → 32 → 40 → 48 → 64 → 80 → 96 → 128
```

---

## 📏 Spacing Scale

| Token | Value | rem | Tailwind |
|-------|-------|-----|----------|
| `space-0` | 0px | 0 | `p-0` |
| `space-px` | 1px | — | `p-px` |
| `space-0.5` | 2px | 0.125rem | `p-0.5` |
| `space-1` | 4px | 0.25rem | `p-1` |
| `space-2` | 8px | 0.5rem | `p-2` |
| `space-3` | 12px | 0.75rem | `p-3` |
| `space-4` | 16px | 1rem | `p-4` ⭐ |
| `space-5` | 20px | 1.25rem | `p-5` |
| `space-6` | 24px | 1.5rem | `p-6` |
| `space-8` | 32px | 2rem | `p-8` |
| `space-10` | 40px | 2.5rem | `p-10` |
| `space-12` | 48px | 3rem | `p-12` |
| `space-16` | 64px | 4rem | `p-16` |
| `space-20` | 80px | 5rem | `p-20` |
| `space-24` | 96px | 6rem | `p-24` |
| `space-32` | 128px | 8rem | `p-32` |

> ⭐ **Default spacing**: `space-4` (16px)

---

## 🎯 Semantic Spacing

| Token | Value | Use Case |
|-------|-------|----------|
| `space-xs` | 4px | Icon + text gap |
| `space-sm` | 8px | Inline elements gap |
| `space-md` | 16px | **Default gap** |
| `space-lg` | 24px | Component padding |
| `space-xl` | 32px | Section spacing |
| `space-2xl` | 48px | Page section spacing |
| `space-3xl` | 64px | Hero section spacing |
| `space-4xl` | 96px | Page-level dividers |

---

## 🧱 Component Spacing Patterns

### Button Padding

| Size | Vertical | Horizontal | Token |
|------|----------|------------|-------|
| `xs` | 4px | 8px | `py-1 px-2` |
| `sm` | 6px | 12px | `py-1.5 px-3` |
| `md` | 8px | 16px | `py-2 px-4` ⭐ |
| `lg` | 12px | 20px | `py-3 px-5` |
| `xl` | 16px | 24px | `py-4 px-6` |

### Card Padding

| Size | Padding | Token |
|------|---------|-------|
| Compact | 12px | `p-3` |
| Default | 16px | `p-4` ⭐ |
| Comfortable | 24px | `p-6` |
| Spacious | 32px | `p-8` |

### Form Field Spacing

```
Label
  ↓ 8px (space-2)
Input
  ↓ 4px (space-1)
Helper text / Error
  ↓ 16px (space-4)
[Next field]
```

### Stack / List Spacing

| Use Case | Gap |
|----------|-----|
| Tight list (e.g., dropdown items) | 4px |
| Default list | 8px |
| Card list | 16px |
| Section list | 24-32px |

---

## 📦 Layout Spacing

### Container Padding

```css
.container {
  padding: 16px;        /* mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 24px;      /* tablet */
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 32px;      /* desktop */
  }
}
```

### Section Spacing

```css
.section {
  padding-top: 48px;       /* mobile */
  padding-bottom: 48px;
}

@media (min-width: 1024px) {
  .section {
    padding-top: 96px;     /* desktop */
    padding-bottom: 96px;
  }
}
```

---

## 🔲 Inset, Inline, Stack

### Inset (Padding bên trong)

```
┌──────────────────────┐
│  inset: 16px         │
│   ┌──────────────┐   │
│   │   content    │   │
│   └──────────────┘   │
│                      │
└──────────────────────┘
```

### Inline (Khoảng cách ngang giữa các phần tử)

```
[ Item ]──gap──[ Item ]──gap──[ Item ]
```

### Stack (Khoảng cách dọc giữa các phần tử)

```
┌────────┐
│ Item 1 │
└────────┘
   gap
┌────────┐
│ Item 2 │
└────────┘
```

---

## ✅ Best Practices

### ✅ DO

```css
/* ✅ Dùng tokens */
padding: var(--space-4);
margin-bottom: var(--space-6);
gap: var(--space-2);

/* ✅ Logical properties */
padding-block: var(--space-3);
padding-inline: var(--space-4);

/* ✅ Tailwind shortcuts */
className="p-4 mb-6 gap-2"
```

### ❌ DON'T

```css
/* ❌ Magic numbers */
padding: 13px;
margin: 17px 23px;

/* ❌ Inconsistent units */
padding: 1rem 16px 0.5em;

/* ❌ Out of scale */
padding: 7px;  /* không phải bội số 4 */
gap: 22px;     /* không có trong scale */
```

---

## 🎨 Visual Examples

### Tight (8px gap)
```
[ Icon ][ Label ]
```

### Default (16px gap)
```
[ Avatar ]    [ User Info ]
```

### Loose (24px gap)
```
[ Card 1 ]      [ Card 2 ]      [ Card 3 ]
```

---

## 📊 Spacing Heatmap

Khi nào dùng spacing nào:

```
4-8px   → Inside compact components (badges, tags, chips)
8-16px  → Inside components (button, input, card)
16-24px → Between related components
24-48px → Between sections
48-96px → Between major sections / pages
```

---

## 🔗 Related

- [Tokens →](tokens.md)
- [Grid →](grid.md)
- [Responsive →](../guidelines/responsive.md)

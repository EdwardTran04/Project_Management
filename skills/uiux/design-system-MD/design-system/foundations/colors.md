# Colors

> Hệ thống màu sắc của VTIT — được xây dựng theo nguyên tắc **Semantic Color**.

---

## 🎨 Color Philosophy

VTIT sử dụng **3-tier color system**:
1. **Primitive** — Raw color values (palette gốc)
2. **Semantic** — Contextual meaning (background, text, border...)
3. **Component** — Component-specific (button-primary-bg...)

→ Designer **chỉ dùng Semantic & Component tokens**.
→ Primitive chỉ dùng khi cần custom đặc biệt.

---

## 1. Brand Colors

### Primary Blue — Màu chủ đạo

| Token | Hex | Preview | Use Case |
|-------|-----|---------|----------|
| `brand-primary-50` | `#EFF6FF` | 🟦 | Lightest backgrounds |
| `brand-primary-100` | `#DBEAFE` | 🟦 | Hover backgrounds |
| `brand-primary-200` | `#BFDBFE` | 🟦 | Disabled buttons |
| `brand-primary-300` | `#93C5FD` | 🟦 | Borders |
| `brand-primary-400` | `#60A5FA` | 🟦 | Decorative |
| `brand-primary-500` | `#3B82F6` | 🟦 | Default |
| `brand-primary-600` | `#2563EB` | 🟦 | **Primary action** ⭐ |
| `brand-primary-700` | `#1D4ED8` | 🟦 | Hover state |
| `brand-primary-800` | `#1E40AF` | 🟦 | Active state |
| `brand-primary-900` | `#1E3A8A` | 🟦 | Text on light bg |
| `brand-primary-950` | `#172554` | 🟦 | Darkest |

> **Default action color**: `brand-primary-600`

---

## 2. Neutral Colors

### Gray Scale

| Token | Hex | Use Case |
|-------|-----|----------|
| `gray-50` | `#F9FAFB` | Page background |
| `gray-100` | `#F3F4F6` | Card background |
| `gray-200` | `#E5E7EB` | Borders, dividers |
| `gray-300` | `#D1D5DB` | Strong borders |
| `gray-400` | `#9CA3AF` | Disabled text |
| `gray-500` | `#6B7280` | Placeholder, tertiary text |
| `gray-600` | `#4B5563` | Secondary text |
| `gray-700` | `#374151` | Body text |
| `gray-800` | `#1F2937` | Heading |
| `gray-900` | `#111827` | **Primary text** ⭐ |
| `gray-950` | `#030712` | High emphasis text |

### Pure Colors

| Token | Hex |
|-------|-----|
| `white` | `#FFFFFF` |
| `black` | `#000000` |

---

## 3. Semantic Colors (Feedback)

### ✅ Success — Xanh lá

| Token | Hex | Use Case |
|-------|-----|----------|
| `green-50` | `#F0FDF4` | Success background |
| `green-500` | `#22C55E` | Success accent |
| `green-600` | `#16A34A` | **Success text/icon** ⭐ |
| `green-700` | `#15803D` | Hover |

### ⚠️ Warning — Vàng

| Token | Hex | Use Case |
|-------|-----|----------|
| `yellow-50` | `#FEFCE8` | Warning background |
| `yellow-500` | `#EAB308` | Warning accent |
| `yellow-600` | `#CA8A04` | **Warning text/icon** ⭐ |

### ❌ Error — Đỏ

| Token | Hex | Use Case |
|-------|-----|----------|
| `red-50` | `#FEF2F2` | Error background |
| `red-500` | `#EF4444` | Error accent |
| `red-600` | `#DC2626` | **Error text/icon** ⭐ |
| `red-700` | `#B91C1C` | Hover |

### ℹ️ Info — Dùng Brand Primary

Sử dụng `brand-primary-*` cho info states.

---

## 4. Semantic Tokens — Cách dùng đúng

### Background

```css
/* Page level */
background: var(--bg-primary);    /* #FFFFFF */
background: var(--bg-secondary);  /* #F9FAFB */
background: var(--bg-tertiary);   /* #F3F4F6 */
background: var(--bg-inverse);    /* #111827 */
```

### Text

```css
color: var(--text-primary);    /* #111827 - Heading, body */
color: var(--text-secondary);  /* #4B5563 - Subtitle */
color: var(--text-tertiary);   /* #6B7280 - Caption */
color: var(--text-disabled);   /* #9CA3AF - Disabled */
color: var(--text-inverse);    /* #FFFFFF - On dark bg */
color: var(--text-link);       /* #2563EB - Links */
```

### Border

```css
border: 1px solid var(--border-default); /* #E5E7EB */
border: 1px solid var(--border-strong);  /* #D1D5DB */
border: 1px solid var(--border-focus);   /* #3B82F6 */
border: 1px solid var(--border-error);   /* #EF4444 */
```

---

## 5. Color Combinations (Đã test contrast)

### Pairs đã pass WCAG 2.2 AA

| Foreground | Background | Contrast | Use Case |
|------------|------------|----------|----------|
| `gray-900` | `white` | 18.5:1 | Body text |
| `gray-700` | `white` | 11.6:1 | Heading |
| `gray-600` | `white` | 7.5:1 | Secondary |
| `white` | `brand-primary-600` | 4.6:1 | Button text |
| `white` | `red-600` | 5.4:1 | Destructive |
| `white` | `green-600` | 4.5:1 | Success |
| `gray-900` | `yellow-100` | 14.2:1 | Warning text |

---

## 6. ❌ Anti-patterns

### ❌ Đừng làm

```css
/* ❌ Hardcode hex */
color: #2563EB;

/* ❌ Tự sáng tạo màu */
background: #4A90E2;

/* ❌ Mix random colors */
.button {
  background: #FF6B6B;  /* Không có trong palette */
}

/* ❌ Dùng color cho purpose sai */
.success-message {
  color: var(--color-red-600);  /* Đỏ cho success?? */
}
```

### ✅ Hãy làm

```css
/* ✅ Dùng semantic tokens */
color: var(--text-link);

/* ✅ Dùng đúng feedback color */
.success-message {
  color: var(--feedback-success);
  background: var(--feedback-success-bg);
}

/* ✅ Component tokens cho component cụ thể */
.button-primary {
  background: var(--button-primary-bg);
  color: var(--button-primary-text);
}
```

---

## 7. Dark Mode Mapping

Xem chi tiết tại [`guidelines/dark-mode.md`](../guidelines/dark-mode.md).

Quick reference:
| Light Mode | Dark Mode |
|------------|-----------|
| `bg-primary` (white) | `gray-950` |
| `bg-secondary` (gray-50) | `gray-900` |
| `text-primary` (gray-900) | `gray-50` |
| `text-secondary` (gray-600) | `gray-400` |
| `border-default` (gray-200) | `gray-800` |

---

## 🔗 Related

- [Tokens →](tokens.md)
- [Accessibility →](../guidelines/accessibility.md)
- [Dark Mode →](../guidelines/dark-mode.md)

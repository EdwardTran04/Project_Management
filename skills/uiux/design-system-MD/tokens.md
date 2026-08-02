# Design Tokens

> **⚠️ FILE QUAN TRỌNG NHẤT** — AI BẮT BUỘC đọc file này trước khi generate bất kỳ thiết kế nào.

Design tokens là các **giá trị nguyên tử** (atomic values) định nghĩa toàn bộ ngôn ngữ thiết kế của VTIT. Mọi component, pattern đều xây dựng dựa trên tokens này.

---

## 📋 Token Hierarchy

```
Primitive Tokens (Raw values)
    ↓
Semantic Tokens (Contextual meaning)
    ↓
Component Tokens (Component-specific)
```

---

## 🎨 1. Color Tokens

### 1.1 Primitive Colors

```json
{
  "color": {
    "brand": {
      "primary": {
        "50":  "#EFF6FF",
        "100": "#DBEAFE",
        "200": "#BFDBFE",
        "300": "#93C5FD",
        "400": "#60A5FA",
        "500": "#3B82F6",
        "600": "#2563EB",
        "700": "#1D4ED8",
        "800": "#1E40AF",
        "900": "#1E3A8A",
        "950": "#172554"
      }
    },
    "neutral": {
      "white": "#FFFFFF",
      "black": "#000000",
      "gray": {
        "50":  "#F9FAFB",
        "100": "#F3F4F6",
        "200": "#E5E7EB",
        "300": "#D1D5DB",
        "400": "#9CA3AF",
        "500": "#6B7280",
        "600": "#4B5563",
        "700": "#374151",
        "800": "#1F2937",
        "900": "#111827",
        "950": "#030712"
      }
    },
    "red": {
      "50":  "#FEF2F2",
      "100": "#FEE2E2",
      "200": "#FECACA",
      "300": "#FCA5A5",
      "400": "#F87171",
      "500": "#EF4444",
      "600": "#DC2626",
      "700": "#B91C1C",
      "800": "#991B1B",
      "900": "#7F1D1D",
      "950": "#450A0A"
    },
    "green": {
      "50":  "#F0FDF4",
      "100": "#DCFCE7",
      "200": "#BBF7D0",
      "300": "#86EFAC",
      "400": "#4ADE80",
      "500": "#22C55E",
      "600": "#16A34A",
      "700": "#15803D",
      "800": "#166534",
      "900": "#14532D",
      "950": "#052E16"
    },
    "yellow": {
      "50":  "#FEFCE8",
      "100": "#FEF9C3",
      "200": "#FEF08A",
      "300": "#FDE047",
      "400": "#FACC15",
      "500": "#EAB308",
      "600": "#CA8A04",
      "700": "#A16207",
      "800": "#854D0E",
      "900": "#713F12",
      "950": "#422006"
    }
  }
}
```

### 1.2 Semantic Colors

```json
{
  "semantic": {
    "background": {
      "primary":   "{color.neutral.white}",
      "secondary": "{color.neutral.gray.50}",
      "tertiary":  "{color.neutral.gray.100}",
      "inverse":   "{color.neutral.gray.900}"
    },
    "text": {
      "primary":   "{color.neutral.gray.900}",
      "secondary": "{color.neutral.gray.600}",
      "tertiary":  "{color.neutral.gray.500}",
      "disabled":  "{color.neutral.gray.400}",
      "inverse":   "{color.neutral.white}",
      "link":      "{color.brand.primary.600}",
      "link-hover":"{color.brand.primary.700}"
    },
    "border": {
      "default":   "{color.neutral.gray.200}",
      "strong":    "{color.neutral.gray.300}",
      "focus":     "{color.brand.primary.500}",
      "error":     "{color.red.500}"
    },
    "action": {
      "primary":   "{color.brand.primary.600}",
      "primary-hover": "{color.brand.primary.700}",
      "primary-active":"{color.brand.primary.800}",
      "primary-disabled":"{color.neutral.gray.300}"
    },
    "feedback": {
      "success":   "{color.green.600}",
      "success-bg":"{color.green.50}",
      "warning":   "{color.yellow.600}",
      "warning-bg":"{color.yellow.50}",
      "error":     "{color.red.600}",
      "error-bg":  "{color.red.50}",
      "info":      "{color.brand.primary.600}",
      "info-bg":   "{color.brand.primary.50}"
    }
  }
}
```

---

## 📝 2. Typography Tokens

```json
{
  "font": {
    "family": {
      "sans":  "'Inter', system-ui, -apple-system, sans-serif",
      "mono":  "'JetBrains Mono', 'Fira Code', monospace",
      "serif": "'Merriweather', Georgia, serif"
    },
    "weight": {
      "regular":  400,
      "medium":   500,
      "semibold": 600,
      "bold":     700
    },
    "size": {
      "xs":   "12px",
      "sm":   "14px",
      "base": "16px",
      "lg":   "18px",
      "xl":   "20px",
      "2xl":  "24px",
      "3xl":  "30px",
      "4xl":  "36px",
      "5xl":  "48px",
      "6xl":  "60px"
    },
    "lineHeight": {
      "tight":   1.25,
      "snug":    1.375,
      "normal":  1.5,
      "relaxed": 1.625,
      "loose":   2
    },
    "letterSpacing": {
      "tighter": "-0.05em",
      "tight":   "-0.025em",
      "normal":  "0em",
      "wide":    "0.025em",
      "wider":   "0.05em"
    }
  }
}
```

### Typography Scale (Semantic)

| Token | Size | Weight | Line Height | Use Case |
|-------|------|--------|-------------|----------|
| `display-lg` | 60px | 700 | 1.25 | Hero headlines |
| `display-md` | 48px | 700 | 1.25 | Page titles |
| `display-sm` | 36px | 700 | 1.25 | Section titles |
| `heading-lg` | 30px | 600 | 1.375 | H1 |
| `heading-md` | 24px | 600 | 1.375 | H2 |
| `heading-sm` | 20px | 600 | 1.375 | H3 |
| `heading-xs` | 18px | 600 | 1.5 | H4 |
| `body-lg` | 18px | 400 | 1.5 | Lead paragraph |
| `body-md` | 16px | 400 | 1.5 | Body default |
| `body-sm` | 14px | 400 | 1.5 | Secondary text |
| `caption` | 12px | 400 | 1.5 | Caption, labels |
| `code` | 14px | 400 | 1.5 | Inline code |

---

## 📐 3. Spacing Tokens

> **Quy tắc**: Mọi spacing đều là **bội số của 4px**.

```json
{
  "spacing": {
    "0":   "0px",
    "0.5": "2px",
    "1":   "4px",
    "2":   "8px",
    "3":   "12px",
    "4":   "16px",
    "5":   "20px",
    "6":   "24px",
    "8":   "32px",
    "10":  "40px",
    "12":  "48px",
    "16":  "64px",
    "20":  "80px",
    "24":  "96px",
    "32":  "128px"
  }
}
```

### Semantic Spacing

| Token | Value | Use Case |
|-------|-------|----------|
| `space-xs` | 4px | Tight gaps (icon + text) |
| `space-sm` | 8px | Small gaps (badge padding) |
| `space-md` | 16px | Default gaps |
| `space-lg` | 24px | Section spacing |
| `space-xl` | 32px | Large section spacing |
| `space-2xl` | 48px | Page-level spacing |
| `space-3xl` | 64px | Hero section spacing |

---

## 🔲 4. Border Tokens

```json
{
  "border": {
    "width": {
      "0":  "0px",
      "1":  "1px",
      "2":  "2px",
      "4":  "4px",
      "8":  "8px"
    },
    "radius": {
      "none": "0px",
      "sm":   "4px",
      "md":   "6px",
      "lg":   "8px",
      "xl":   "12px",
      "2xl":  "16px",
      "3xl":  "24px",
      "full": "9999px"
    }
  }
}
```

---

## 🌫️ 5. Elevation (Shadow) Tokens

```json
{
  "shadow": {
    "none": "none",
    "xs":   "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    "sm":   "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "md":   "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "lg":   "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "xl":   "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl":  "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    "inner":"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
  }
}
```

### Elevation Levels

| Level | Token | Use Case |
|-------|-------|----------|
| 0 | `none` | Flat surfaces, disabled state |
| 1 | `xs` | Borders, subtle dividers |
| 2 | `sm` | Cards, raised buttons |
| 3 | `md` | Dropdowns, hover states |
| 4 | `lg` | Modals, popovers |
| 5 | `xl` | Sidebars, drawers |
| 6 | `2xl` | High-priority overlays |

---

## ⚡ 6. Motion Tokens

```json
{
  "motion": {
    "duration": {
      "instant": "0ms",
      "fast":    "150ms",
      "normal":  "250ms",
      "slow":    "400ms",
      "slower":  "600ms"
    },
    "easing": {
      "linear":   "linear",
      "ease-in":  "cubic-bezier(0.4, 0, 1, 1)",
      "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      "spring":   "cubic-bezier(0.5, 1.5, 0.5, 1)"
    }
  }
}
```

---

## 📱 7. Breakpoint Tokens

```json
{
  "breakpoint": {
    "xs":  "0px",
    "sm":  "640px",
    "md":  "768px",
    "lg":  "1024px",
    "xl":  "1280px",
    "2xl": "1536px"
  }
}
```

---

## 🎯 8. Z-index Tokens

```json
{
  "zIndex": {
    "base":     0,
    "dropdown": 1000,
    "sticky":   1100,
    "overlay":  1200,
    "modal":    1300,
    "popover":  1400,
    "toast":    1500,
    "tooltip":  1600
  }
}
```

---

## 🔍 Cách AI sử dụng tokens

### ✅ Đúng

```css
.button-primary {
  background: var(--color-brand-primary-600);
  color: var(--color-neutral-white);
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  transition: background var(--motion-duration-fast) var(--motion-easing-ease-out);
}
```

### ❌ Sai

```css
.button-primary {
  background: #2563EB;        /* ❌ Hardcoded color */
  padding: 13px 17px;          /* ❌ Magic numbers */
  border-radius: 5px;          /* ❌ Không có trong scale */
  font-size: 15px;             /* ❌ Không có trong scale */
  transition: background 0.2s; /* ❌ Không dùng motion token */
}
```

---

## 📦 Export Formats

Tokens có thể export sang nhiều format:
- **JSON**: Cho AI consumption (file này)
- **CSS Variables**: Xem `handoff/tokens-export.md`
- **SCSS**: Xem `handoff/tokens-export.md`
- **JavaScript/TypeScript**: Xem `handoff/tokens-export.md`
- **Tailwind Config**: Xem `handoff/tailwind-config.md`

---

## 🔗 Liên kết

- [Colors detail →](./colors.md)
- [Typography detail →](./typography.md)
- [Spacing detail →](./spacing.md)
- [Tokens export for dev →](../handoff/tokens-export.md)

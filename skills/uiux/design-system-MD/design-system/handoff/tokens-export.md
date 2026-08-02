# Tokens Export

> Export design tokens sang nhiều format: CSS, SCSS, JS, JSON.

---

## 🎨 CSS Variables

Copy file này vào `src/styles/tokens.css`:

```css
:root {
  /* === COLORS === */
  /* Brand Primary */
  --color-brand-primary-50:  #EFF6FF;
  --color-brand-primary-100: #DBEAFE;
  --color-brand-primary-200: #BFDBFE;
  --color-brand-primary-300: #93C5FD;
  --color-brand-primary-400: #60A5FA;
  --color-brand-primary-500: #3B82F6;
  --color-brand-primary-600: #2563EB;
  --color-brand-primary-700: #1D4ED8;
  --color-brand-primary-800: #1E40AF;
  --color-brand-primary-900: #1E3A8A;
  --color-brand-primary-950: #172554;

  /* Neutral Gray */
  --color-gray-50:  #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;

  /* Red */
  --color-red-50:  #FEF2F2;
  --color-red-500: #EF4444;
  --color-red-600: #DC2626;
  --color-red-700: #B91C1C;

  /* Green */
  --color-green-50:  #F0FDF4;
  --color-green-500: #22C55E;
  --color-green-600: #16A34A;
  --color-green-700: #15803D;

  /* Yellow */
  --color-yellow-50:  #FEFCE8;
  --color-yellow-500: #EAB308;
  --color-yellow-600: #CA8A04;

  /* Pure */
  --color-white: #FFFFFF;
  --color-black: #000000;

  /* === SEMANTIC === */
  --bg-primary:   var(--color-white);
  --bg-secondary: var(--color-gray-50);
  --bg-tertiary:  var(--color-gray-100);
  --bg-inverse:   var(--color-gray-900);

  --text-primary:   var(--color-gray-900);
  --text-secondary: var(--color-gray-600);
  --text-tertiary:  var(--color-gray-500);
  --text-disabled:  var(--color-gray-400);
  --text-inverse:   var(--color-white);
  --text-link:      var(--color-brand-primary-600);

  --border-default: var(--color-gray-200);
  --border-strong:  var(--color-gray-300);
  --border-focus:   var(--color-brand-primary-500);
  --border-error:   var(--color-red-500);

  --feedback-success:    var(--color-green-600);
  --feedback-success-bg: var(--color-green-50);
  --feedback-warning:    var(--color-yellow-600);
  --feedback-warning-bg: var(--color-yellow-50);
  --feedback-error:      var(--color-red-600);
  --feedback-error-bg:   var(--color-red-50);
  --feedback-info:       var(--color-brand-primary-600);
  --feedback-info-bg:    var(--color-brand-primary-50);

  /* === TYPOGRAPHY === */
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;

  --font-weight-regular:  400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;

  --font-size-xs:   12px;
  --font-size-sm:   14px;
  --font-size-base: 16px;
  --font-size-lg:   18px;
  --font-size-xl:   20px;
  --font-size-2xl:  24px;
  --font-size-3xl:  30px;
  --font-size-4xl:  36px;
  --font-size-5xl:  48px;
  --font-size-6xl:  60px;

  --line-height-tight:   1.25;
  --line-height-snug:    1.375;
  --line-height-normal:  1.5;
  --line-height-relaxed: 1.625;

  /* === SPACING === */
  --space-0:    0px;
  --space-px:   1px;
  --space-0-5:  2px;
  --space-1:    4px;
  --space-2:    8px;
  --space-3:    12px;
  --space-4:    16px;
  --space-5:    20px;
  --space-6:    24px;
  --space-8:    32px;
  --space-10:   40px;
  --space-12:   48px;
  --space-16:   64px;
  --space-20:   80px;
  --space-24:   96px;
  --space-32:   128px;

  /* === BORDER === */
  --border-width-0: 0px;
  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-width-4: 4px;

  --radius-none: 0px;
  --radius-sm:   4px;
  --radius-md:   6px;
  --radius-lg:   8px;
  --radius-xl:   12px;
  --radius-2xl:  16px;
  --radius-3xl:  24px;
  --radius-full: 9999px;

  /* === SHADOW === */
  --shadow-xs:  0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm:  0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg:  0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl:  0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);

  /* === MOTION === */
  --duration-instant: 0ms;
  --duration-fast:    150ms;
  --duration-normal:  250ms;
  --duration-slow:    400ms;

  --ease-linear:     linear;
  --ease-in:         cubic-bezier(0.4, 0, 1, 1);
  --ease-out:        cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:     cubic-bezier(0.5, 1.5, 0.5, 1);

  /* === Z-INDEX === */
  --z-base:     0;
  --z-dropdown: 1000;
  --z-sticky:   1100;
  --z-overlay:  1200;
  --z-modal:    1300;
  --z-popover:  1400;
  --z-toast:    1500;
  --z-tooltip:  1600;
}

/* === DARK MODE === */
[data-theme="dark"] {
  --bg-primary:   var(--color-gray-950);
  --bg-secondary: var(--color-gray-900);
  --bg-tertiary:  var(--color-gray-800);
  --bg-inverse:   var(--color-gray-50);

  --text-primary:   var(--color-gray-50);
  --text-secondary: var(--color-gray-400);
  --text-tertiary:  var(--color-gray-500);
  --text-disabled:  var(--color-gray-600);
  --text-inverse:   var(--color-gray-900);

  --border-default: var(--color-gray-800);
  --border-strong:  var(--color-gray-700);
}
```

---

## 🎯 SCSS Variables

```scss
// _tokens.scss

// Colors
$color-brand-primary-50:  #EFF6FF;
$color-brand-primary-600: #2563EB;
$color-brand-primary-700: #1D4ED8;
// ... rest

// Spacing
$space-1: 4px;
$space-2: 8px;
$space-4: 16px;
// ... rest

// Mixin for typography
@mixin heading-h1 {
  font-size: 30px;
  font-weight: 600;
  line-height: 1.25;
}
```

---

## 📦 JavaScript / TypeScript

```ts
// tokens.ts

export const colors = {
  brand: {
    primary: {
      50:  '#EFF6FF',
      100: '#DBEAFE',
      500: '#3B82F6',
      600: '#2563EB',
      700: '#1D4ED8',
      // ...
    },
  },
  gray: {
    50:  '#F9FAFB',
    100: '#F3F4F6',
    900: '#111827',
    // ...
  },
  red: { 500: '#EF4444', 600: '#DC2626' },
  green: { 500: '#22C55E', 600: '#16A34A' },
} as const;

export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  6: '24px',
  8: '32px',
} as const;

export const fontSizes = {
  xs:   '12px',
  sm:   '14px',
  base: '16px',
  lg:   '18px',
  xl:   '20px',
  '2xl': '24px',
  '3xl': '30px',
} as const;

export const radius = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
} as const;

export const motion = {
  duration: { fast: 150, normal: 250, slow: 400 },
  easing: {
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;

// Type exports
export type Color = keyof typeof colors;
export type Spacing = keyof typeof spacing;
```

---

## 🎨 JSON Format (cho Style Dictionary)

```json
{
  "color": {
    "brand": {
      "primary": {
        "50": { "value": "#EFF6FF" },
        "600": { "value": "#2563EB" },
        "700": { "value": "#1D4ED8" }
      }
    }
  },
  "spacing": {
    "1": { "value": "4px" },
    "4": { "value": "16px" }
  }
}
```

---

## 🔗 Related

- [Tokens Foundation →](../foundations/tokens.md)
- [Tailwind Config →](tailwind-config.md)

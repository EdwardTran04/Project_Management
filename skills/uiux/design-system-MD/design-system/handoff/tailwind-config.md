# Tailwind Config

> Tailwind CSS configuration cho VTIT Design System.

---

## 📦 Installation

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## ⚙️ tailwind.config.ts

```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // === COLORS ===
      colors: {
        // Brand
        'brand-primary': {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Override default gray
        gray: {
          50:  '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
        red: {
          50:  '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
        green: {
          50:  '#F0FDF4',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        yellow: {
          50:  '#FEFCE8',
          500: '#EAB308',
          600: '#CA8A04',
        },
        // Semantic via CSS variables
        'bg-primary':   'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary':  'var(--bg-tertiary)',
        'bg-inverse':   'var(--bg-inverse)',
        'text-primary':   'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary':  'var(--text-tertiary)',
        'text-disabled':  'var(--text-disabled)',
        'text-inverse':   'var(--text-inverse)',
        'text-link':      'var(--text-link)',
        'border-default': 'var(--border-default)',
        'border-strong':  'var(--border-strong)',
        'border-focus':   'var(--border-focus)',
        'border-error':   'var(--border-error)',
      },

      // === TYPOGRAPHY ===
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'xs':   ['12px', { lineHeight: '1.5' }],
        'sm':   ['14px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.5' }],
        'lg':   ['18px', { lineHeight: '1.5' }],
        'xl':   ['20px', { lineHeight: '1.4' }],
        '2xl':  ['24px', { lineHeight: '1.375' }],
        '3xl':  ['30px', { lineHeight: '1.25' }],
        '4xl':  ['36px', { lineHeight: '1.25' }],
        '5xl':  ['48px', { lineHeight: '1.2' }],
        '6xl':  ['60px', { lineHeight: '1.15' }],
      },

      // === SPACING ===
      spacing: {
        // Tailwind defaults are 4px-based, đã match
      },

      // === BORDER RADIUS ===
      borderRadius: {
        'none': '0px',
        'sm':   '4px',
        'md':   '6px',
        'lg':   '8px',
        'xl':   '12px',
        '2xl':  '16px',
        '3xl':  '24px',
        'full': '9999px',
      },

      // === BOX SHADOW ===
      boxShadow: {
        'xs':  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'sm':  '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md':  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg':  '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl':  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },

      // === ANIMATION ===
      transitionDuration: {
        'fast':   '150ms',
        'normal': '250ms',
        'slow':   '400ms',
      },
      transitionTimingFunction: {
        'ease-out':    'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in':     'cubic-bezier(0.4, 0, 1, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring':      'cubic-bezier(0.5, 1.5, 0.5, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 250ms ease-out',
        'slide-up': 'slideInUp 250ms ease-out',
        'scale-in': 'scaleIn 150ms ease-out',
      },

      // === Z-INDEX ===
      zIndex: {
        'dropdown': '1000',
        'sticky':   '1100',
        'overlay':  '1200',
        'modal':    '1300',
        'popover':  '1400',
        'toast':    '1500',
        'tooltip':  '1600',
      },

      // === SCREENS / BREAKPOINTS ===
      screens: {
        'xs':  '0px',
        'sm':  '640px',
        'md':  '768px',
        'lg':  '1024px',
        'xl':  '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

---

## 🎯 Common Class Combinations

### Buttons

```tsx
// Primary
className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-brand-primary-600 text-white font-medium text-sm transition-colors hover:bg-brand-primary-700 focus-visible:ring-2 focus-visible:ring-brand-primary-200 disabled:opacity-50"

// Secondary
className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md bg-white border border-gray-300 text-gray-700 font-medium text-sm transition-colors hover:bg-gray-50"

// Ghost
className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-md text-brand-primary-600 font-medium text-sm transition-colors hover:bg-gray-50"
```

### Card

```tsx
className="bg-bg-primary rounded-lg shadow-sm p-6 transition-shadow hover:shadow-md"
```

### Input

```tsx
className="block w-full h-10 px-3 rounded-md border border-gray-300 text-sm placeholder:text-text-tertiary focus:border-brand-primary-500 focus:ring-2 focus:ring-brand-primary-100 focus:outline-none"
```

---

## 🌑 Dark Mode

```tsx
// Use dark: prefix
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50">
  Content adapts to theme
</div>

// Or use semantic tokens (auto-adapt)
<div className="bg-bg-primary text-text-primary">
  Content
</div>
```

---

## 📦 Plugins Recommended

```bash
npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio
```

---

## 🔗 Related

- [Tokens Export →](tokens-export.md)
- [Developer Guide →](developer-guide.md)

# Developer Guide

> Hướng dẫn cho developer triển khai VTIT Design System.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm / yarn / pnpm
- Modern browser (Chrome, Firefox, Safari, Edge)

### Tech Stack Recommended

- **Framework**: React 18+ / Next.js 14+
- **Styling**: Tailwind CSS + CSS Variables
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **State**: Zustand / Redux Toolkit

---

## 📦 Installation

```bash
# Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Icons
npm install lucide-react

# (Optional) Component library scaffold
npm install @radix-ui/react-* clsx tailwind-merge
```

---

## 🎨 Setup Design Tokens

### 1. Import CSS variables

```css
/* src/styles/tokens.css */
@import "./foundations/colors.css";
@import "./foundations/typography.css";
@import "./foundations/spacing.css";
/* ... */
```

### 2. Configure Tailwind

Xem `handoff/tailwind-config.md` cho config đầy đủ.

### 3. Apply globally

```jsx
// app/layout.tsx (Next.js)
import "./styles/tokens.css";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}
```

---

## 🧩 Component Implementation

### Folder Structure

```
src/
├── components/
│   ├── ui/                    # Design system components
│   │   ├── button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── input/
│   │   └── ...
│   ├── patterns/              # Composed patterns
│   └── layouts/               # Layout components
├── styles/
│   ├── tokens.css
│   └── globals.css
├── hooks/
└── lib/
    └── utils.ts               # cn(), helpers
```

### Component Template

```tsx
// Button.tsx
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import type { ButtonProps } from './Button.types';

const variants = {
  primary: 'bg-brand-primary-600 text-white hover:bg-brand-primary-700',
  secondary: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50',
  ghost: 'bg-transparent text-brand-primary-600 hover:bg-gray-50',
  destructive: 'bg-red-600 text-white hover:bg-red-700',
};

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-5 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary-200',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

---

## 🛠️ Utilities

### `cn()` — Conditional classes

```ts
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 📚 Storybook Setup

```bash
npx storybook@latest init
```

```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atomic/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: { variant: 'primary', children: 'Click me' },
};
```

---

## 🧪 Testing

### Unit (Jest + Testing Library)

```tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
});
```

### A11y (axe-core)

```tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('no a11y violations', async () => {
  const { container } = render(<Button>Click me</Button>);
  expect(await axe(container)).toHaveNoViolations();
});
```

---

## 📋 Conventions

- **File naming**: PascalCase cho components, kebab-case cho utilities
- **Props**: Required props không default, optional có default
- **Forwarding refs**: Tất cả interactive components
- **Display names**: Set cho debugging
- **Named exports** + index re-export
- **JSDoc** cho public API

---

## 🔗 Related

- [Tokens Export →](tokens-export.md)
- [React Usage →](react-usage.md)
- [Tailwind Config →](tailwind-config.md)
- [Figma to Code →](figma-to-code.md)

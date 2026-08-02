# Dark Mode

> Hỗ trợ dark theme — không chỉ "invert colors", mà là rethinking color system.

---

## 🌑 Strategy: Semantic Tokens

Dùng **semantic tokens** thay vì hardcoded colors → tự động switch theme.

```css
/* ❌ Hardcoded — không support dark mode */
.card {
  background: white;
  color: #111;
}

/* ✅ Semantic — auto adapt */
.card {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

---

## 🎨 Color Mapping

### Background

| Light | Dark | Token |
|-------|------|-------|
| `white` | `gray-950` | `bg-primary` |
| `gray-50` | `gray-900` | `bg-secondary` |
| `gray-100` | `gray-800` | `bg-tertiary` |
| `gray-900` | `gray-50` | `bg-inverse` |

### Text

| Light | Dark | Token |
|-------|------|-------|
| `gray-900` | `gray-50` | `text-primary` |
| `gray-600` | `gray-400` | `text-secondary` |
| `gray-500` | `gray-500` | `text-tertiary` |
| `gray-400` | `gray-600` | `text-disabled` |

### Border

| Light | Dark | Token |
|-------|------|-------|
| `gray-200` | `gray-800` | `border-default` |
| `gray-300` | `gray-700` | `border-strong` |

### Brand (cùng giá trị)

| Light | Dark |
|-------|------|
| `brand-primary-600` | `brand-primary-500` |

> **Note**: Brand thường giảm 1-2 shades trong dark mode để tránh quá chói.

---

## 💻 Implementation

### CSS Variables

```css
:root {
  /* Light mode - default */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9FAFB;
  --text-primary: #111827;
  --text-secondary: #4B5563;
  --border-default: #E5E7EB;
}

[data-theme="dark"] {
  --bg-primary: #030712;
  --bg-secondary: #111827;
  --text-primary: #F9FAFB;
  --text-secondary: #9CA3AF;
  --border-default: #1F2937;
}

/* Auto detect system preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --bg-primary: #030712;
    /* ... rest of dark tokens */
  }
}
```

### React Implementation

```jsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', theme);
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

### Theme Toggle

```jsx
function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Select value={theme} onChange={setTheme}>
      <Option value="light">☀️ Light</Option>
      <Option value="dark">🌙 Dark</Option>
      <Option value="system">💻 System</Option>
    </Select>
  );
}
```

---

## 🌑 Dark Mode Specifics

### Shadows

Trong dark mode, shadows kém hiệu quả → giảm opacity hoặc dùng border thay thế.

```css
[data-theme="dark"] {
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.4);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.5);

  /* Hoặc dùng border ring */
  --card-border: 1px solid var(--border-default);
}
```

### Images

Cân nhắc:
- Logos: cần version cho dark mode
- Photos: thường dùng nguyên (chỉ giảm brightness 80%)
- Illustrations: cần redesign cho dark

```css
[data-theme="dark"] img.logo {
  filter: brightness(0) invert(1);  /* Quick hack */
}

/* Hoặc dùng <picture> */
```

```html
<picture>
  <source
    srcset="/logo-dark.svg"
    media="(prefers-color-scheme: dark)"
  />
  <img src="/logo-light.svg" alt="Logo" />
</picture>
```

### Charts & Data Viz

Adjust colors cho contrast tốt trên dark bg:

```js
const chartColors = {
  light: ['#3B82F6', '#10B981', '#F59E0B'],
  dark:  ['#60A5FA', '#34D399', '#FBBF24'],  // brighter
};
```

---

## ✅ Best Practices

- ✅ Default to **system preference**
- ✅ Allow user override (light/dark/system)
- ✅ Persist choice (localStorage)
- ✅ Smooth transition (200ms color)
- ✅ Test contrast trong cả 2 themes (WCAG AA)
- ✅ Update meta theme-color
- ❌ Không pure white text trên pure black (eye strain)
- ❌ Không dùng same shadows
- ❌ Không simply invert colors

---

## 🎨 Common Issues

### Issue 1: Pure black background gây "halation"

```css
/* ❌ Pure black */
background: #000000;

/* ✅ Slightly lighter */
background: #030712;  /* gray-950 */
background: #0A0A0A;
```

### Issue 2: Pure white text quá chói

```css
/* ❌ Pure white */
color: #FFFFFF;

/* ✅ Slightly darker */
color: #F9FAFB;  /* gray-50 */
color: #E5E7EB;  /* gray-200 cho secondary */
```

### Issue 3: Saturated colors trông quá rực

Giảm saturation 10-20% trong dark mode:

```css
/* Light */
--brand-primary-600: #2563EB;

/* Dark - slightly desaturated */
--brand-primary-500: #60A5FA;
```

---

## 🧪 Testing

- ✅ Toggle theme và check mọi screen
- ✅ Contrast checker cho dark backgrounds
- ✅ Test với system preference change
- ✅ Test với accessibility tools

---

## 🔗 Related

- [Colors →](../foundations/colors.md)
- [Tokens →](../foundations/tokens.md)
- [Accessibility →](accessibility.md)

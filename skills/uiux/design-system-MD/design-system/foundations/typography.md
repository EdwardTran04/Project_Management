# Typography

> Hệ thống typography của VTIT — đảm bảo tính đồng nhất và dễ đọc trên mọi thiết bị.

---

## 🔤 Font Families

### Primary: Inter
Font chính cho tất cả UI (sans-serif, modern, highly legible).

```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
             'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

**Tải font**: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

### Mono: JetBrains Mono
Font dành riêng cho code, technical content.

```css
font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', Consolas, monospace;
```

### Serif (optional): Merriweather
Chỉ dùng cho long-form content, blog posts.

```css
font-family: 'Merriweather', Georgia, 'Times New Roman', serif;
```

---

## ⚖️ Font Weights

| Weight | Value | Token | Use Case |
|--------|-------|-------|----------|
| Regular | 400 | `font-regular` | Body text |
| Medium | 500 | `font-medium` | Emphasis, labels |
| Semi Bold | 600 | `font-semibold` | Headings, buttons |
| Bold | 700 | `font-bold` | Strong emphasis, display |

> **Lưu ý**: Inter có "Semi Bold" (có space), không phải "SemiBold".

---

## 📏 Type Scale

### Display — Hero & Page Titles

| Token | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| `display-2xl` | 72px / 4.5rem | 700 | 1.1 | -0.025em |
| `display-xl` | 60px / 3.75rem | 700 | 1.15 | -0.025em |
| `display-lg` | 48px / 3rem | 700 | 1.2 | -0.02em |
| `display-md` | 36px / 2.25rem | 700 | 1.25 | -0.02em |

### Heading — Section Titles

| Token | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| `heading-h1` | 30px / 1.875rem | 600 | 1.25 | Page title |
| `heading-h2` | 24px / 1.5rem | 600 | 1.3 | Section title |
| `heading-h3` | 20px / 1.25rem | 600 | 1.4 | Subsection |
| `heading-h4` | 18px / 1.125rem | 600 | 1.5 | Card title |
| `heading-h5` | 16px / 1rem | 600 | 1.5 | Small title |
| `heading-h6` | 14px / 0.875rem | 600 | 1.5 | Micro title |

### Body — Default Reading

| Token | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| `body-xl` | 20px | 400 | 1.6 | Lead paragraph |
| `body-lg` | 18px | 400 | 1.6 | Important text |
| `body-md` | 16px | 400 | 1.5 | **Default** ⭐ |
| `body-sm` | 14px | 400 | 1.5 | Secondary |
| `body-xs` | 12px | 400 | 1.5 | Caption |

### Label — UI Labels

| Token | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| `label-lg` | 16px | 500 | 1.5 | Form labels |
| `label-md` | 14px | 500 | 1.5 | **Default** ⭐ |
| `label-sm` | 12px | 500 | 1.5 | Compact UI |
| `label-xs` | 11px | 500 | 1.5 | Badges, tags |

### Code — Technical Content

| Token | Size | Weight | Line Height |
|-------|------|--------|-------------|
| `code-md` | 14px | 400 | 1.5 |
| `code-sm` | 12px | 400 | 1.5 |

---

## 🎨 Usage Examples

### ✅ HTML Semantic + Class

```html
<h1 class="heading-h1">Page Title</h1>
<h2 class="heading-h2">Section Title</h2>
<p class="body-md">Default paragraph text...</p>
<label class="label-md">Email Address</label>
<span class="body-xs">Helper text</span>
```

### ✅ CSS Variables

```css
.page-title {
  font-family: var(--font-sans);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  color: var(--text-primary);
}
```

---

## 📐 Vertical Rhythm

Sử dụng **8px baseline grid** cho line-height và spacing.

```
Heading H1 (30px) + line-height 1.25 = 37.5px → round to 40px
Margin-bottom: 24px (space-6)
Body (16px) + line-height 1.5 = 24px
Margin-bottom: 16px (space-4)
```

---

## 📱 Responsive Typography

### Mobile-first scaling

```css
/* Mobile (default) */
.heading-h1 {
  font-size: 24px;
  line-height: 1.3;
}

/* Tablet+ */
@media (min-width: 768px) {
  .heading-h1 {
    font-size: 28px;
  }
}

/* Desktop+ */
@media (min-width: 1024px) {
  .heading-h1 {
    font-size: 30px;
  }
}
```

### Recommended scale per breakpoint

| Token | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| `display-lg` | 36px | 42px | 48px |
| `heading-h1` | 24px | 28px | 30px |
| `heading-h2` | 20px | 22px | 24px |
| `body-md` | 16px | 16px | 16px |

---

## 🎯 Best Practices

### ✅ DO

- **Dùng semantic HTML**: `<h1>`, `<h2>`, `<p>`, `<label>`
- **Hierarchy rõ ràng**: H1 > H2 > H3, không skip level
- **Line-length 45-75 ký tự** cho body text (max-width)
- **Line-height ≥ 1.5** cho body text (a11y)
- **Letter-spacing âm cho headings lớn** (>30px)

### ❌ DON'T

- ❌ Dùng `font-size` không có trong scale
- ❌ Mix nhiều font families (>2)
- ❌ All caps cho long text
- ❌ Justify alignment (gây gap chữ)
- ❌ Line-height < 1.4 cho body text

---

## 🔍 Type Pairing

### Heading + Body

```
Heading: Inter Semi Bold (600)
Body:    Inter Regular (400)
```

### UI + Code

```
UI:   Inter
Code: JetBrains Mono
```

---

## ♿ Accessibility

- Font size **tối thiểu 12px** (caption, ngoại lệ)
- Body text **tối thiểu 14px**, khuyến nghị 16px
- Contrast ratio **≥ 4.5:1** cho text < 18px
- Contrast ratio **≥ 3:1** cho text ≥ 18px hoặc bold
- **Không dùng `text-transform: uppercase`** cho long text
- Cho phép user **zoom 200%** mà không vỡ layout

---

## 🔗 Related

- [Tokens →](tokens.md)
- [Accessibility →](../guidelines/accessibility.md)
- [Content Guidelines →](../guidelines/content.md)

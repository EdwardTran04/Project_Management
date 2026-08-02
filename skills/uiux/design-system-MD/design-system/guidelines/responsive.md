# Responsive Design

> Mobile-first approach — design cho mobile trước, scale lên desktop.

---

## 📱 Breakpoints

```css
/* Mobile-first: default styles cho mobile */

@media (min-width: 640px)  { /* sm — Large mobile */ }
@media (min-width: 768px)  { /* md — Tablet */ }
@media (min-width: 1024px) { /* lg — Desktop */ }
@media (min-width: 1280px) { /* xl — Large desktop */ }
@media (min-width: 1536px) { /* 2xl — Wide desktop */ }
```

| Breakpoint | Min Width | Common Devices |
|------------|-----------|----------------|
| `xs` (default) | 0px | Small phones |
| `sm` | 640px | Large phones, small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Wide monitors |

---

## 🎯 Mobile-First Approach

### ✅ DO

```css
/* Default: mobile */
.container {
  padding: 16px;
  font-size: 14px;
}

/* Then enhance for tablet+ */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    font-size: 16px;
  }
}

/* Desktop+ */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
  }
}
```

### ❌ DON'T

```css
/* Desktop-first: harder to maintain */
.container {
  padding: 32px;
  font-size: 16px;
}

@media (max-width: 767px) {
  .container {
    padding: 16px;
    font-size: 14px;
  }
}
```

---

## 📐 Layout Patterns

### Stack on Mobile, Grid on Desktop

```css
.grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
```

### Sidebar collapse

```
Desktop:  [Sidebar 240px] [Content fluid]
Tablet:   [Drawer]        [Content fluid]
Mobile:   [Bottom nav]    [Content fluid]
```

### Navigation transformation

```
Desktop:    Top nav with all items inline
Tablet:     Top nav with hamburger overflow
Mobile:     Hamburger drawer + bottom tab bar
```

---

## 📱 Touch Targets

- **Minimum**: 44×44px (iOS HIG)
- **Recommended**: 48×48px (Material)
- **Spacing between targets**: ≥ 8px

```css
.button {
  min-height: 44px;
  min-width: 44px;
}

/* Link list */
.nav-link {
  padding: 12px 16px;  /* Tăng touch area */
}
```

---

## 📏 Container Sizes

```css
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 640px)  { .container { max-width: 640px; } }
@media (min-width: 768px)  { .container { max-width: 768px; padding: 0 24px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; padding: 0 32px; } }
@media (min-width: 1280px) { .container { max-width: 1280px; } }
```

---

## 🔤 Responsive Typography

### Fluid typography (clamp)

```css
.heading-h1 {
  /* min: 24px, preferred: 4vw, max: 36px */
  font-size: clamp(1.5rem, 4vw, 2.25rem);
}
```

### Step-based

```css
.heading-h1 {
  font-size: 24px;
}

@media (min-width: 768px) {
  .heading-h1 { font-size: 28px; }
}

@media (min-width: 1024px) {
  .heading-h1 { font-size: 32px; }
}
```

---

## 🖼️ Responsive Images

```html
<!-- Different sizes -->
<img
  srcset="image-400.jpg 400w,
          image-800.jpg 800w,
          image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  src="image-800.jpg"
  alt="Description"
/>

<!-- Different art direction -->
<picture>
  <source media="(max-width: 768px)" srcset="mobile.jpg" />
  <source media="(max-width: 1024px)" srcset="tablet.jpg" />
  <img src="desktop.jpg" alt="Description" />
</picture>
```

---

## 🎯 Common Patterns

### Card Grid

```
Mobile (1 col):   Tablet (2 cols):   Desktop (3-4 cols):
┌────┐            ┌──┐ ┌──┐          ┌─┐ ┌─┐ ┌─┐ ┌─┐
│Card│            │C │ │C │          │C│ │C│ │C│ │C│
├────┤            ├──┤ ├──┤          ├─┤ ├─┤ ├─┤ ├─┤
│Card│            │C │ │C │          │C│ │C│ │C│ │C│
└────┘            └──┘ └──┘          └─┘ └─┘ └─┘ └─┘
```

### Form Layout

```
Mobile: 1 column
[─────────]
[─────────]

Desktop: 2 columns
[──────][──────]
[──────][──────]
```

### Table → Cards

```
Desktop:
┌────┬─────┬───┬───┐
│Name│Email│...│...│
├────┼─────┼───┼───┤
│ ...│ ... │...│...│
└────┴─────┴───┴───┘

Mobile (stack as cards):
┌──────────────┐
│ Name: ...    │
│ Email: ...   │
│ ...          │
└──────────────┘
```

---

## ✅ Best Practices

- ✅ Test trên real devices (không chỉ DevTools)
- ✅ Test landscape + portrait orientation
- ✅ Test trên slow 3G network
- ✅ Hide non-essential content trên mobile
- ✅ Larger fonts cho mobile (min 16px to avoid zoom)
- ✅ Hover states không essential (mobile không có hover)
- ❌ Không hide critical content "for mobile"
- ❌ Không assume keyboard on tablet/mobile

---

## 🧪 Testing Devices

### Min coverage

- iPhone SE (375×667) — Small
- iPhone 14 Pro (393×852) — Standard
- iPad (820×1180) — Tablet
- MacBook (1280×800) — Laptop
- Desktop (1920×1080) — Standard
- Wide (2560×1440) — Wide

---

## 🔗 Related

- [Grid →](../foundations/grid.md)
- [Spacing →](../foundations/spacing.md)
- [Typography →](../foundations/typography.md)

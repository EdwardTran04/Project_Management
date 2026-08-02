# Grid System

> Hệ thống grid 12 cột — flexible cho mọi loại layout.

---

## 🏗️ Grid Specifications

### Desktop (≥1024px)
- **Columns**: 12
- **Gutter**: 24px
- **Margin**: 32px (left & right)
- **Max content width**: 1280px

### Tablet (768px - 1023px)
- **Columns**: 8
- **Gutter**: 16px
- **Margin**: 24px

### Mobile (<768px)
- **Columns**: 4
- **Gutter**: 16px
- **Margin**: 16px

---

## 📐 Container Sizes

| Token | Max-width | Use Case |
|-------|-----------|----------|
| `container-sm` | 640px | Forms, single content |
| `container-md` | 768px | Articles, blogs |
| `container-lg` | 1024px | Standard pages |
| `container-xl` | 1280px | **Default** ⭐ |
| `container-2xl` | 1536px | Wide dashboards |
| `container-full` | 100% | Full-bleed |

---

## 📱 Breakpoints

```css
/* Mobile-first approach */
/* xs: 0-639px (default, no media query) */

@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

---

## 🎨 Layout Patterns

### 12-column Grid

```
[1][2][3][4][5][6][7][8][9][10][11][12]

Sidebar (3) + Content (9)
[1-3 ][          4-12          ]

Two-column (6+6)
[    1-6     ][     7-12      ]

Three-column (4+4+4)
[ 1-4 ][ 5-8 ][ 9-12 ]
```

### Common Layouts

#### Dashboard (Sidebar + Content)
```
Desktop:  [Sidebar 240px] [Content fluid]
Tablet:   [Hamburger]     [Content fluid]
Mobile:   [Hamburger]     [Content fluid]
```

#### Marketing Page
```
[          Hero (full width)          ]
[      Container (max 1280px)         ]
  [Card 1] [Card 2] [Card 3]
```

#### Form Page
```
[   Container (max 640px)   ]
  Form fields stacked vertically
```

---

## 🔲 CSS Implementation

### Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

@media (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(8, 1fr);
    gap: 16px;
  }
}

@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Flexbox Alternative

```css
.row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}

.col-6 { flex: 0 0 calc(50% - 12px); }
.col-4 { flex: 0 0 calc(33.333% - 16px); }
.col-3 { flex: 0 0 calc(25% - 18px); }
```

---

## 🔗 Related

- [Spacing →](spacing.md)
- [Responsive Guidelines →](../guidelines/responsive.md)

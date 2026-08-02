# Icons

> Hệ thống icon của VTIT — đảm bảo đồng nhất về style, size và stroke.

---

## 🎨 Icon Library

VTIT sử dụng **Lucide Icons** làm thư viện icon chính.

- **Website**: [https://lucide.dev](https://lucide.dev)
- **NPM**: `lucide-react`, `lucide`
- **Style**: Outlined, 2px stroke, rounded line caps
- **Grid**: 24×24 viewBox

---

## 📏 Icon Sizes

| Token | Size | Use Case |
|-------|------|----------|
| `icon-xs` | 12px | Inline với caption text |
| `icon-sm` | 16px | Inline với body-sm |
| `icon-md` | 20px | **Default** ⭐ |
| `icon-lg` | 24px | Headings, large buttons |
| `icon-xl` | 32px | Feature highlights |
| `icon-2xl` | 48px | Empty states, illustrations |
| `icon-3xl` | 64px | Hero icons |

---

## 🎯 Icon Color

Icon kế thừa `currentColor` để dễ thay đổi theo context:

```css
.icon {
  color: currentColor;     /* Inherits from parent */
  width: 20px;
  height: 20px;
}

.icon-primary { color: var(--text-primary); }
.icon-secondary { color: var(--text-secondary); }
.icon-disabled { color: var(--text-disabled); }
.icon-action { color: var(--brand-primary-600); }
.icon-success { color: var(--feedback-success); }
.icon-error { color: var(--feedback-error); }
```

---

## 🧩 Common Icons

### Navigation
`Home`, `Search`, `Menu`, `ChevronLeft`, `ChevronRight`, `ArrowLeft`, `ArrowRight`, `X`

### Actions
`Plus`, `Minus`, `Edit`, `Trash`, `Copy`, `Save`, `Download`, `Upload`, `Share`

### Status
`Check`, `CheckCircle`, `XCircle`, `AlertTriangle`, `AlertCircle`, `Info`, `HelpCircle`

### User
`User`, `Users`, `UserPlus`, `Settings`, `LogOut`, `Bell`

### File
`File`, `FileText`, `Folder`, `Image`, `Paperclip`

### UI
`ChevronDown`, `ChevronUp`, `MoreHorizontal`, `MoreVertical`, `Filter`, `RefreshCw`

---

## ✅ Usage

### React (Lucide)

```jsx
import { Search, ChevronRight } from 'lucide-react';

<Search size={20} className="text-gray-500" />
<ChevronRight size={16} strokeWidth={2} />
```

### HTML/SVG

```html
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round">
  <!-- icon path -->
</svg>
```

---

## 🎯 Best Practices

### ✅ DO

- ✅ Dùng **outlined style** mặc định
- ✅ Stroke **2px**, rounded caps
- ✅ Icon **ý nghĩa rõ ràng**, dễ hiểu
- ✅ Icon **kích thước tỷ lệ với text** liền kề
- ✅ **Aria-label** cho icon-only buttons

### ❌ DON'T

- ❌ Mix nhiều icon library (Lucide + Heroicons + Font Awesome)
- ❌ Icon filled trộn với outlined
- ❌ Stroke không đồng đều (1.5px / 2px / 2.5px lẫn lộn)
- ❌ Icon resize không đúng tỷ lệ
- ❌ Decorative icons làm nhiễu thông tin

---

## ♿ Accessibility

### Icon-only Button

```html
<button aria-label="Search">
  <Search />
</button>
```

### Decorative Icon

```html
<button>
  <Save aria-hidden="true" />
  <span>Save</span>
</button>
```

### Status Icon

```html
<div role="alert">
  <CheckCircle aria-hidden="true" />
  <span>Profile saved successfully</span>
</div>
```

---

## 🎨 Custom Icons

Khi cần custom icon (logo, brand), tuân thủ:
- **Viewbox 24×24**
- **Stroke 2px** nếu là outlined
- **Rounded caps**: `stroke-linecap="round"`
- **Fill `none`** cho outlined icons
- **Optimize SVG**: dùng [SVGOMG](https://jakearchibald.github.io/svgomg/)

---

## 🔗 Related

- [Tokens →](tokens.md)
- [Accessibility →](../guidelines/accessibility.md)

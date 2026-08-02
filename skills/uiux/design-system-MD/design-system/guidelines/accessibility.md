# Accessibility (WCAG 2.2)

> **Mục tiêu**: Tuân thủ WCAG 2.2 Level AA. Mọi sản phẩm VTIT đều phải accessible.

---

## 🎯 Why Accessibility Matters

- **15% dân số** có ít nhất 1 disability
- **Legal compliance** (Section 508, EAA, ADA)
- **SEO benefit** — accessible = crawlable
- **Better UX cho everyone** (mobile, slow connection, situational impairments)

---

## 📋 4 Nguyên tắc POUR

### 1. **P**erceivable — Có thể nhận biết
Nội dung phải hiển thị được cho mọi người (screen reader, low vision...).

### 2. **O**perable — Có thể vận hành
UI phải dùng được bằng nhiều input methods (keyboard, voice...).

### 3. **U**nderstandable — Có thể hiểu
Content và UI phải dễ hiểu.

### 4. **R**obust — Bền vững
Code phải hoạt động với assistive technologies.

---

## ✅ WCAG 2.2 AA Checklist

### Color & Contrast

- [x] **Text contrast ≥ 4.5:1** cho normal text (< 18px)
- [x] **Text contrast ≥ 3:1** cho large text (≥ 18px hoặc 14px bold)
- [x] **UI components ≥ 3:1** (buttons, borders, icons)
- [x] **Không truyền tin chỉ qua màu** (success/error cần icon + text)
- [x] **Focus indicator ≥ 3:1** so với background

### Typography

- [x] **Body text ≥ 14px**, khuyến nghị 16px
- [x] **Line height ≥ 1.5** cho body text
- [x] **Letter spacing**: cho phép user adjust
- [x] **Resize 200%** không vỡ layout
- [x] **Không justify** alignment

### Keyboard

- [x] **Tab navigation** cho mọi interactive elements
- [x] **Focus visible** (focus ring rõ ràng)
- [x] **Logical tab order** (DOM order = visual order)
- [x] **Esc** để đóng modals/dropdowns
- [x] **Skip links** ("Skip to main content")
- [x] **No keyboard traps** (luôn có thể Tab thoát)

### Screen Reader

- [x] **Semantic HTML** (`<button>` thay vì `<div onClick>`)
- [x] **ARIA labels** cho icon-only buttons
- [x] **Form labels** liên kết với input
- [x] **Heading hierarchy** đúng (H1 → H2 → H3)
- [x] **Landmark regions** (`<header>`, `<nav>`, `<main>`, `<footer>`)
- [x] **Alt text** cho meaningful images
- [x] **Empty alt** cho decorative images

### Forms

- [x] **Visible labels** cho mọi input
- [x] **Required marker** rõ ràng (`*` + `aria-required`)
- [x] **Error messages** liên kết qua `aria-describedby`
- [x] **Group related fields** với `<fieldset>` + `<legend>`
- [x] **Autocomplete attributes** (email, tel, address)

### Motion

- [x] **`prefers-reduced-motion`** support
- [x] **Auto-play < 5s** hoặc có pause control
- [x] **No flashing > 3 times/second** (seizure risk)

### Touch Targets

- [x] **Minimum 44×44px** cho touch targets (WCAG 2.5.5)
- [x] **8px gap** giữa các targets adjacent

---

## 🎨 Color Contrast Examples

### ✅ PASS

```
Background  | Foreground   | Ratio  | Result
white       | gray-900     | 18.5:1 | ✅ AAA
white       | gray-600     |  7.5:1 | ✅ AA
brand-600   | white        |  4.6:1 | ✅ AA (large)
green-100   | green-700    |  6.2:1 | ✅ AA
```

### ❌ FAIL

```
white       | gray-400     |  3.4:1 | ❌ Fail body text
yellow-300  | white        |  1.8:1 | ❌ Fail
brand-300   | white        |  2.1:1 | ❌ Fail
```

> **Tool kiểm tra**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## ⌨️ Keyboard Patterns

### Buttons & Links
- `Tab` — move forward
- `Shift + Tab` — move backward
- `Enter` / `Space` — activate

### Forms
- `Tab` — next field
- `Enter` — submit (in single input)
- `Esc` — cancel/close

### Modals
- Open: focus moves to first focusable
- Trap focus inside modal
- `Esc` — close, return focus to trigger

### Dropdowns/Menus
- `Space` / `Enter` / `↓` — open
- `↑` / `↓` — navigate
- `Enter` — select
- `Esc` — close

### Tabs
- `←` / `→` — between tabs
- `Home` / `End` — first/last tab

### Tables
- `Tab` — next interactive cell
- `↑` / `↓` / `←` / `→` — navigate cells (in grid mode)

---

## 🔊 Screen Reader Best Practices

### ✅ DO

```html
<!-- Semantic -->
<button>Save</button>

<!-- Icon button with label -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Form labels -->
<label for="email">Email</label>
<input id="email" type="email" />

<!-- Status -->
<div role="status" aria-live="polite">
  Saved successfully
</div>

<!-- Heading hierarchy -->
<h1>Page Title</h1>
  <h2>Section</h2>
    <h3>Subsection</h3>
```

### ❌ DON'T

```html
<!-- Non-semantic -->
<div onClick={save}>Save</div>

<!-- Missing label -->
<button><svg></svg></button>

<!-- Missing label association -->
<span>Email</span>
<input type="email" />

<!-- Skipped heading levels -->
<h1>Title</h1>
<h4>Section</h4>  <!-- Skipped h2, h3 -->
```

---

## 🆕 WCAG 2.2 New Criteria

### 2.4.11 Focus Not Obscured (AA)
Focus không được che bởi sticky elements.

### 2.4.12 Focus Not Obscured (AAA)
Focus hoàn toàn visible.

### 2.5.7 Dragging Movements (AA)
Drag actions có alternative (click, keyboard).

### 2.5.8 Target Size (AA)
**Minimum 24×24px** cho UI targets (relaxed from 44×44).

### 3.2.6 Consistent Help (A)
Help (contact, FAQ) ở cùng vị trí trên mọi trang.

### 3.3.7 Redundant Entry (A)
Không bắt user nhập lại thông tin đã nhập.

### 3.3.8 Accessible Authentication (AA)
Không yêu cầu cognitive function tests (CAPTCHA puzzles).

---

## 🧪 Testing Tools

### Automated
- [axe DevTools](https://www.deque.com/axe/devtools/) — Browser extension
- [WAVE](https://wave.webaim.org/) — Web evaluation
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) — Built-in Chrome
- [pa11y](https://pa11y.org/) — CLI

### Manual
- **Keyboard only** — unplug mouse, navigate
- **Screen readers** — VoiceOver (Mac), NVDA (Windows), TalkBack (Android)
- **Zoom 200%** — kiểm tra responsive
- **Color blindness simulator** — Stark plugin (Figma)

---

## 📚 Resources

- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [WAI-ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

---

## 🔗 Related

- [Colors →](../foundations/colors.md)
- [Typography →](../foundations/typography.md)
- [Motion →](../foundations/motion.md)

# Do's and Don'ts

> Quick reference các quy tắc bắt buộc khi designing với VTIT Design System.

---

## 🎨 Colors

### ✅ DO

- Dùng **semantic tokens** (`--text-primary`, `--bg-secondary`)
- Test contrast ratio (WCAG AA minimum)
- Dùng đúng feedback color (green = success, red = error)
- Reserve brand color cho primary actions
- Dùng neutral colors cho 80% UI

### ❌ DON'T

- ❌ Hardcode hex values (`color: #2563EB`)
- ❌ Tự sáng tạo màu mới (`#FF5733` ngẫu nhiên)
- ❌ Dùng red cho neutral actions
- ❌ Dùng brand color cho mọi thứ (overuse)
- ❌ Mix nhiều brand colors

---

## 📝 Typography

### ✅ DO

- Dùng **font scale** đã định nghĩa
- Hierarchy rõ ràng (H1 > H2 > H3, không skip)
- Line height ≥ 1.5 cho body text
- Inter cho UI, JetBrains Mono cho code

### ❌ DON'T

- ❌ Custom font sizes (`font-size: 13px`)
- ❌ Bold + ALL CAPS + Underline cùng lúc
- ❌ Justify alignment cho body
- ❌ Line height < 1.4
- ❌ Mix > 2 font families

---

## 📐 Spacing

### ✅ DO

- Dùng **spacing tokens** (`space-4` = 16px)
- Multiples of 4px
- Consistent gaps trong cùng container
- Generous spacing > cramped

### ❌ DON'T

- ❌ Magic numbers (`padding: 13px`)
- ❌ Random spacing (`margin: 17px 23px`)
- ❌ Mix units (`padding: 1rem 16px 0.5em`)
- ❌ Negative margins để fix layout (refactor instead)

---

## 🧩 Components

### ✅ DO

- **Reuse** existing components
- Compose smaller → larger (atomic → molecules → organisms)
- Pass data via **props**, không hardcode
- Document props clearly

### ❌ DON'T

- ❌ Tạo "Button2" / "ButtonV2" / "MyButton"
- ❌ Override component styles bừa bãi
- ❌ Inline styles override design system
- ❌ Copy-paste components instead of importing

---

## 🎯 Interactions

### ✅ DO

- **Visible focus state** cho mọi interactive
- Hover states feedback nhanh (< 200ms)
- Loading states cho async actions
- Disabled states rõ ràng (50% opacity)
- Confirmation cho destructive actions

### ❌ DON'T

- ❌ `outline: none` không thay focus ring
- ❌ Hover effects > 500ms (cảm giác lag)
- ❌ Bouncy animation cho serious actions
- ❌ Disabled state trông như enabled
- ❌ Auto-submit forms không cảnh báo

---

## 📱 Responsive

### ✅ DO

- **Mobile-first** approach
- Test trên real devices
- Touch targets ≥ 44×44px
- Stack vertically trên mobile
- Hide non-essential, không hide critical

### ❌ DON'T

- ❌ Desktop-first → media queries chồng chất
- ❌ Hover states là essential interaction
- ❌ Tiny touch targets (< 44px)
- ❌ Horizontal scroll on mobile
- ❌ Fixed pixel widths

---

## ♿ Accessibility

### ✅ DO

- Semantic HTML (`<button>`, `<nav>`, `<main>`)
- ARIA labels cho icon-only buttons
- Keyboard navigation đầy đủ
- Alt text cho meaningful images
- Color không phải kênh duy nhất truyền tin

### ❌ DON'T

- ❌ `<div onClick>` thay vì `<button>`
- ❌ Click without keyboard support
- ❌ Auto-play video với sound
- ❌ Flashing content
- ❌ Color alone for status (red ≠ "error")

---

## 📊 Data Visualization

### ✅ DO

- Limit colors (max 5-7 distinct)
- Sort data meaningful (descending value, alpha...)
- Label axes clearly
- Show units
- Empty state khi no data

### ❌ DON'T

- ❌ Rainbow charts (10+ colors)
- ❌ 3D charts (gây méo)
- ❌ Truncated Y-axis (gây hiểu lầm)
- ❌ Pie chart > 5 slices
- ❌ Charts không có legend/labels

---

## ✍️ Content

### ✅ DO

- Active voice ("Bạn đã lưu", không "Đã được lưu")
- Sentence case cho UI labels
- Verb-driven buttons ("Save", "Delete")
- Specific error messages
- Friendly + helpful tone

### ❌ DON'T

- ❌ Technical jargon cho end users
- ❌ "Click here" links
- ❌ Generic "Error 500"
- ❌ ALL CAPS HEADINGS (gây stress)
- ❌ Lorem ipsum trong production

---

## 🎬 Animation

### ✅ DO

- Animate `transform` & `opacity` (60fps)
- Easing tự nhiên (ease-out)
- Quick (< 300ms)
- Support `prefers-reduced-motion`
- Purpose-driven

### ❌ DON'T

- ❌ Animate `width`, `top`, `left` (reflow)
- ❌ Animation > 500ms cho UI feedback
- ❌ Auto-play distracting animations
- ❌ Bouncy spring cho serious actions
- ❌ Ignore reduced motion preference

---

## 🚀 Performance

### ✅ DO

- Optimize images (WebP, responsive sizes)
- Lazy load below-the-fold
- Code split routes
- Skeleton screens during load
- Compress assets

### ❌ DON'T

- ❌ Block render với heavy scripts
- ❌ Large unused dependencies
- ❌ Spinner mọi nơi (overuse)
- ❌ Layout shifts (CLS)
- ❌ Auto-play video on load

---

## 🏗️ Component Architecture

### ✅ DO

```jsx
// Composable, controlled
<Modal open={isOpen} onClose={close}>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>
    <Button onClick={close}>Cancel</Button>
  </Modal.Footer>
</Modal>
```

### ❌ DON'T

```jsx
// Monolithic, hard to customize
<Modal
  title="Title"
  body="Content"
  cancelText="Cancel"
  onCancel={close}
  showFooter={true}
/>
```

---

## 🎨 Visual Hierarchy

### ✅ DO

- 1 primary action per screen
- Size + weight + color tạo hierarchy
- White space để tách content
- F-pattern hoặc Z-pattern cho scan

### ❌ DON'T

- ❌ Multiple primary buttons cạnh nhau
- ❌ Same size cho mọi text
- ❌ Cramming content
- ❌ Random emphasis

---

## 🔗 Quick Reference

| Domain | Read | Don't |
|--------|------|-------|
| Colors | [colors.md](../foundations/colors.md) | Hardcode hex |
| Typography | [typography.md](../foundations/typography.md) | Custom sizes |
| Spacing | [spacing.md](../foundations/spacing.md) | Magic numbers |
| Components | [components/](../components/) | Recreate from scratch |
| Patterns | [patterns/](../patterns/) | Reinvent flows |
| A11y | [accessibility.md](accessibility.md) | Skip semantic HTML |

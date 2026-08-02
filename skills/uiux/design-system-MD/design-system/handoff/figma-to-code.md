# Figma to Code Workflow

> Quy trình chuyển từ Figma design sang code chính xác.

---

## 🔄 Workflow Overview

```
[Figma Design]
    ↓
[Inspect mode - get specs]
    ↓
[Map to design tokens]
    ↓
[Reuse existing components]
    ↓
[Implement & test]
    ↓
[Self-audit checklist]
```

---

## 1. Inspect Figma

### Use Figma's Dev Mode

- **Open Dev Mode**: Right sidebar > "Dev Mode" toggle
- **Inspect**: Click element để xem CSS, dimensions, spacing
- **Variables**: Hover element để xem token names

### Key information to extract

- **Colors**: token name (e.g., `brand-primary-600`)
- **Typography**: font family, size, weight, line-height
- **Spacing**: padding, margin, gap
- **Border radius**: token (e.g., `radius-md`)
- **Shadow**: token (e.g., `shadow-sm`)

---

## 2. Map to Tokens

### ❌ Don't copy raw values

```css
/* ❌ Wrong - hardcoded */
.button {
  background: #2563EB;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
}
```

### ✅ Use tokens

```css
/* ✅ Right - tokenized */
.button {
  background: var(--brand-primary-600);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
}
```

Hoặc với Tailwind:

```tsx
className="bg-brand-primary-600 px-4 py-2 rounded-md text-sm"
```

---

## 3. Component Mapping

### Identify pattern

Khi nhìn vào Figma, hỏi:
- Đây có phải component đã có không?
- Variant nào?
- Có giống pattern phổ biến không?

### Mapping table

| Figma Element | Code Component | Path |
|---------------|----------------|------|
| Primary button | `<Button variant="primary">` | `components/atomic/button.md` |
| Form input | `<Input>` | `components/atomic/input.md` |
| Card with image | `<Card>` | `components/molecules/card.md` |
| Modal popup | `<Modal>` | `components/organisms/modal.md` |
| Tab switcher | `<Tabs>` | `components/molecules/tabs.md` |

---

## 4. Implementation Steps

### Step 1: Analyze the design

```
Question to ask:
- What's the primary purpose?
- What components/patterns are reused?
- What's the responsive behavior?
- What states are needed (hover, error, loading)?
```

### Step 2: Wireframe in code

```tsx
// Start with structure
<Card>
  <Card.Header>
    <Card.Title>Title</Card.Title>
  </Card.Header>
  <Card.Body>
    Content
  </Card.Body>
</Card>
```

### Step 3: Add styles using tokens

```tsx
<Card className="p-6 hover:shadow-md transition-shadow">
  ...
</Card>
```

### Step 4: Add interactivity

```tsx
const [isOpen, setIsOpen] = useState(false);

<Card onClick={() => setIsOpen(true)} className="cursor-pointer">
  ...
</Card>
```

### Step 5: Add states

```tsx
{loading ? (
  <Skeleton />
) : error ? (
  <ErrorState onRetry={fetchData} />
) : (
  <DataDisplay data={data} />
)}
```

---

## 5. Self-Audit Checklist

Trước khi commit, kiểm tra:

### Tokens

- [ ] Mọi color đều từ token palette
- [ ] Mọi spacing là multiples of 4px
- [ ] Mọi font size từ scale
- [ ] Mọi border radius từ scale
- [ ] Mọi shadow từ scale

### Components

- [ ] Reused existing components (không tạo lại)
- [ ] Đúng variant (primary/secondary/...)
- [ ] Props đầy đủ (size, disabled, loading...)

### Responsive

- [ ] Mobile-first
- [ ] Test breakpoints (sm, md, lg, xl)
- [ ] Touch targets ≥ 44×44px

### Accessibility

- [ ] Semantic HTML
- [ ] ARIA labels cho icon buttons
- [ ] Keyboard navigation works
- [ ] Focus visible
- [ ] Color contrast ≥ 4.5:1

### States

- [ ] Default
- [ ] Hover
- [ ] Active
- [ ] Focus
- [ ] Disabled
- [ ] Loading
- [ ] Error

---

## 6. Common Pitfalls

### ❌ Pitfall 1: Pixel-perfect obsession

Figma showing `padding: 13px`?
→ Dùng `space-3` (12px) hoặc `space-4` (16px), không hardcode 13px.

### ❌ Pitfall 2: Custom colors

Figma showing `#3D7BFC`?
→ Check tokens, dùng closest match (`brand-primary-500`).
→ Nếu thật sự cần màu mới, đề xuất add vào design system.

### ❌ Pitfall 3: Ignoring states

Figma chỉ show 1 state?
→ Hỏi designer các states còn lại (hover, disabled, error).
→ Hoặc apply default theo design system.

### ❌ Pitfall 4: Copy-paste components

Cùng button xuất hiện 5 lần?
→ Dùng `<Button>` component reuse.

---

## 7. Communication with Designer

### Khi có discrepancy

```
Subject: Question về [Component]

Hi [Designer],

Trong design "Login screen" có button với:
- Background: #2563EB ← match với brand-primary-600 ✓
- Padding: 14px 18px ← không match với scale (12 hoặc 16)

Mình đề xuất dùng padding 12px 16px (space-3 / space-4) cho consistency.
Bạn xác nhận giúp mình nhé?
```

### Khi cần token mới

```
Subject: Đề xuất add color mới

Hi team,

Trong design dashboard có dùng màu #06B6D4 (cyan) cho
accent một số chart. Hiện chưa có trong palette.

Đề xuất: Add `accent-cyan-500: #06B6D4` vào tokens?
```

---

## 8. Tools

### Recommended

- **Figma Dev Mode** — Inspect & extract
- **Figma Tokens Plugin** — Sync tokens
- **CSS Inspector** — Compare browser vs Figma
- **Pixel Ruler** — Verify spacing

### MCP Integration (mới)

Với Figma MCP, AI có thể trực tiếp đọc Figma và generate code:

```
1. Connect Figma MCP server
2. Select component trong Figma
3. AI inspects và generates code theo design system
```

---

## 9. Code Connect (Figma)

Liên kết Figma component với code component:

```ts
// Button.figma.tsx
import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(Button, 'https://figma.com/...', {
  props: {
    label: figma.string('Label'),
    variant: figma.enum('Variant', {
      Primary: 'primary',
      Secondary: 'secondary',
    }),
  },
  example: ({ label, variant }) => (
    <Button variant={variant}>{label}</Button>
  ),
});
```

---

## 🔗 Related

- [Developer Guide →](developer-guide.md)
- [React Usage →](react-usage.md)
- [Tokens →](../foundations/tokens.md)

# Motion & Animation

> Hệ thống chuyển động — tạo sự sống động và rõ ràng cho UI.

---

## ⚡ Motion Principles

1. **Purpose-driven**: Animation phải có mục đích (feedback, hierarchy, continuity)
2. **Quick**: Microinteractions < 300ms
3. **Natural**: Dùng easing tự nhiên (ease-out, spring)
4. **Respectful**: Tôn trọng `prefers-reduced-motion`

---

## ⏱️ Duration Tokens

| Token | Value | Use Case |
|-------|-------|----------|
| `duration-instant` | 0ms | No animation |
| `duration-fast` | 150ms | **Hover, focus** ⭐ |
| `duration-normal` | 250ms | Default transitions |
| `duration-slow` | 400ms | Complex transitions |
| `duration-slower` | 600ms | Page transitions |
| `duration-slowest` | 1000ms | Loading, decorative |

---

## 📈 Easing Tokens

| Token | Cubic-bezier | Use Case |
|-------|--------------|----------|
| `ease-linear` | `linear` | Loaders, progress |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Element exits |
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | **Default - Element enters** ⭐ |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth transitions |
| `ease-spring` | `cubic-bezier(0.5, 1.5, 0.5, 1)` | Playful interactions |

---

## 🎬 Common Animations

### Fade

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn var(--duration-normal) var(--ease-out);
}
```

### Slide

```css
@keyframes slideInUp {
  from { transform: translateY(8px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.slide-up {
  animation: slideInUp var(--duration-normal) var(--ease-out);
}
```

### Scale

```css
@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.scale-in {
  animation: scaleIn var(--duration-fast) var(--ease-out);
}
```

### Spinner

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  animation: spin 1s linear infinite;
}
```

---

## 🎯 Component Motion Patterns

### Button States

```css
.button {
  transition:
    background var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.button:hover { transform: translateY(-1px); }
.button:active { transform: translateY(0); }
```

### Modal Enter/Exit

```css
.modal {
  /* Enter */
  animation: scaleIn var(--duration-normal) var(--ease-out);
}

.modal-overlay {
  animation: fadeIn var(--duration-fast) var(--ease-out);
}
```

### Dropdown

```css
.dropdown {
  transform-origin: top;
  animation: slideInUp var(--duration-fast) var(--ease-out);
}
```

### Toast

```css
.toast {
  animation: slideInRight var(--duration-normal) var(--ease-spring);
}
```

---

## ♿ Accessibility — Reduced Motion

**BẮT BUỘC** support `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## ✅ Best Practices

### ✅ DO

- ✅ **Animate `transform` và `opacity`** (60fps performance)
- ✅ **Easing ease-out cho enter**, ease-in cho exit
- ✅ **Stagger** cho list items (60-80ms delay)
- ✅ **Will-change** cho heavy animations

### ❌ DON'T

- ❌ Animate `width`, `height`, `top`, `left` (gây reflow)
- ❌ Animation > 500ms cho UI feedback
- ❌ Bouncy animation cho serious actions
- ❌ Auto-play animation gây xao nhãng
- ❌ Bỏ qua `prefers-reduced-motion`

---

## 🎨 Animation Choreography

### Stagger Animation (List)

```css
.list-item {
  opacity: 0;
  animation: slideInUp 250ms ease-out forwards;
}

.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 60ms; }
.list-item:nth-child(3) { animation-delay: 120ms; }
.list-item:nth-child(4) { animation-delay: 180ms; }
```

---

## 🔗 Related

- [Tokens →](tokens.md)
- [Accessibility →](../guidelines/accessibility.md)

# Borders & Radius

> Hệ thống border width và border radius cho UI elements.

---

## 📏 Border Width

| Token | Value | Use Case |
|-------|-------|----------|
| `border-0` | 0px | No border |
| `border-1` | 1px | **Default** ⭐ |
| `border-2` | 2px | Emphasis, focus |
| `border-4` | 4px | Strong emphasis |
| `border-8` | 8px | Decorative only |

---

## 🔘 Border Radius

| Token | Value | Use Case |
|-------|-------|----------|
| `radius-none` | 0px | Sharp corners |
| `radius-sm` | 4px | Small elements (badges, tags) |
| `radius-md` | 6px | **Buttons, inputs** ⭐ |
| `radius-lg` | 8px | Cards |
| `radius-xl` | 12px | Modals, large cards |
| `radius-2xl` | 16px | Hero cards |
| `radius-3xl` | 24px | Decorative |
| `radius-full` | 9999px | Pills, avatars (circle) |

---

## 🎨 Border Styles

```css
/* Solid (default) */
border: 1px solid var(--border-default);

/* Dashed (for empty states, drag zones) */
border: 2px dashed var(--border-default);

/* Dotted (rarely used) */
border: 1px dotted var(--border-default);

/* None */
border: none;
```

---

## 🎯 Component-Specific Radius

| Component | Radius | Token |
|-----------|--------|-------|
| Button | 6px | `radius-md` |
| Input | 6px | `radius-md` |
| Card | 8-12px | `radius-lg` / `radius-xl` |
| Modal | 12px | `radius-xl` |
| Badge | 4px | `radius-sm` |
| Tag/Chip | 9999px | `radius-full` |
| Avatar | 9999px | `radius-full` |
| Tooltip | 6px | `radius-md` |
| Toast | 8px | `radius-lg` |

---

## ✅ Best Practices

### ✅ DO

```css
/* ✅ Tokens */
border-radius: var(--radius-md);
border: 1px solid var(--border-default);

/* ✅ Consistent radius trong cùng component */
.card {
  border-radius: 8px;
  /* Children cũng dùng radius nhỏ hơn nhưng cùng hệ */
}
.card .image {
  border-radius: 4px;  /* Nested element nhỏ hơn */
}
```

### ❌ DON'T

```css
/* ❌ Random values */
border-radius: 7px;
border: 1.5px solid;

/* ❌ Mix radius khác hệ */
.card {
  border-radius: 8px 12px 4px 16px;  /* Asymmetric chaos */
}
```

---

## 🎨 Asymmetric Radius (Hiếm khi dùng)

Chỉ dùng khi có lý do thiết kế cụ thể (e.g., chat bubble, tab):

```css
.chat-bubble-self {
  border-radius: 16px 16px 4px 16px;  /* Bubble bên phải */
}

.chat-bubble-other {
  border-radius: 16px 16px 16px 4px;  /* Bubble bên trái */
}

.tab-active {
  border-radius: 8px 8px 0 0;  /* Tab trên cùng */
}
```

---

## 🔗 Related

- [Tokens →](tokens.md)
- [Components →](../components/)

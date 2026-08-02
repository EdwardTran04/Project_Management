# Toast / Notification

> Thông báo tạm thời, không block user.

---

## 🎨 Variants

| Variant | Use Case |
|---------|----------|
| `success` | Action thành công |
| `error` | Lỗi |
| `warning` | Cảnh báo |
| `info` | Thông tin |

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Width | 360px (desktop) / full (mobile) |
| Padding | 16px |
| Border radius | `radius-lg` |
| Position | Top-right hoặc bottom-center |
| Auto-dismiss | 5s default |

---

## 💻 Example

```jsx
toast.success('Profile saved successfully');

toast.error('Failed to upload', {
  description: 'Check your connection.',
  action: { label: 'Retry', onClick: () => upload() }
});
```

---

## ✅ Best Practices

- ✅ Stack tối đa 3 toasts
- ✅ Auto-dismiss 5s, error 10s
- ❌ Không dùng cho critical errors → Modal/Alert

---

## ♿ Accessibility

```html
<div role="status" aria-live="polite">Profile saved</div>
<div role="alert" aria-live="assertive">Error: Failed</div>
```

---

## 🔗 Related
[Alert →](alert.md) | [Modal →](../organisms/modal.md)

# Alert / Banner

> Thông báo inline, persistent (không tự biến mất).

---

## 🎨 Variants

| Variant | Color | Icon |
|---------|-------|------|
| `info` | blue | ℹ️ |
| `success` | green | ✓ |
| `warning` | yellow | ⚠️ |
| `error` | red | ✕ |

---

## 💻 Example

```jsx
<Alert variant="warning" title="Session expiring">
  Your session will expire in 5 minutes.
  <Alert.Action onClick={extendSession}>Extend</Alert.Action>
</Alert>

<Alert variant="error" dismissible>
  Connection lost.
</Alert>
```

```css
.alert {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: var(--radius-lg);
  border-left: 4px solid;
}

.alert--warning {
  background: var(--yellow-50);
  border-color: var(--yellow-500);
  color: var(--yellow-900);
}
```

---

## Toast vs Alert

| Toast | Alert |
|-------|-------|
| Auto-dismiss | Persistent |
| Floating | Inline |
| Action result | Status info |

---

## 🔗 Related
[Toast →](toast.md)

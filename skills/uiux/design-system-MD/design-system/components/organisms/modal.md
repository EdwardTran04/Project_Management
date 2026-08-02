# Modal / Dialog

> Overlay hiển thị nội dung quan trọng, block tương tác với phần còn lại.

---

## 🎨 Variants

| Type | Use Case |
|------|----------|
| **Standard** | Confirmation, forms |
| **Drawer** | Side panel, settings |
| **Full-screen** | Mobile, complex flows |
| **Alert dialog** | Critical action confirmation |

---

## 📏 Sizes

| Size | Width | Use Case |
|------|-------|----------|
| `sm` | 400px | Confirmations |
| `md` | 560px | **Default** ⭐ |
| `lg` | 720px | Forms |
| `xl` | 960px | Complex content |
| `full` | 100% | Mobile, immersive |

---

## 🧩 Anatomy

```
[ Overlay backdrop - rgba(0,0,0,0.5) ]
   ┌──────────────────────────────────┐
   │ Modal Title                  [×] │  ← Header
   ├──────────────────────────────────┤
   │                                  │
   │  Modal content goes here...      │  ← Body (scrollable)
   │                                  │
   ├──────────────────────────────────┤
   │              [Cancel] [Confirm]  │  ← Footer
   └──────────────────────────────────┘
```

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Background | `white` |
| Border radius | `radius-xl` (12px) |
| Shadow | `shadow-xl` |
| Header padding | 20px 24px |
| Body padding | 24px |
| Footer padding | 16px 24px |
| Backdrop | `rgba(0,0,0,0.5)` |
| Z-index | `1300` |

---

## 💻 Example

```jsx
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  size="md"
>
  <Modal.Header>
    <Modal.Title>Confirm Deletion</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    Are you sure you want to delete this item?
    This action cannot be undone.
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>
      Cancel
    </Button>
    <Button variant="destructive" onClick={confirmDelete}>
      Delete
    </Button>
  </Modal.Footer>
</Modal>
```

---

## ⚡ Animation

- Overlay: fade in 150ms
- Modal: slide up + fade in 250ms

---

## ✅ Best Practices

- ✅ Title rõ ràng
- ✅ Primary action ở phải
- ✅ Esc để đóng
- ✅ Focus trap trong modal
- ✅ Return focus về trigger khi đóng
- ❌ Không nest modals
- ❌ Không quá nhiều content (split into steps)

---

## ♿ Accessibility

- ✅ `role="dialog"`, `aria-modal="true"`
- ✅ `aria-labelledby` link đến title
- ✅ Focus trap inside modal
- ✅ Esc đóng modal
- ✅ Click outside đóng (optional)

---

## 🔗 Related
[Toast →](../molecules/toast.md) | [Alert →](../molecules/alert.md)

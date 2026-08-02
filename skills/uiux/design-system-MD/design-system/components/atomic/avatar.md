# Avatar

> Hình đại diện user, organization, hoặc entity.

---

## 📏 Sizes

| Size | Dimension | Use Case |
|------|-----------|----------|
| `xs` | 24px | Inline list, comments |
| `sm` | 32px | Compact lists |
| `md` | 40px ⭐ | Default |
| `lg` | 48px | Cards |
| `xl` | 64px | Profile headers |
| `2xl` | 96px | Profile pages |

---

## 🎨 Variants

- **Image** — User photo
- **Initials** — 1-2 chữ cái khi không có hình
- **Icon** — Generic user icon
- **Group** — Stack of avatars

---

## 🎯 Status Indicator

Dot ở góc avatar:
- 🟢 Online
- 🟡 Away
- 🔴 Busy
- ⚫ Offline

---

## 💻 Example

```jsx
<Avatar
  src="/user.jpg"
  alt="John Doe"
  size="md"
  status="online"
/>

<Avatar
  initials="JD"
  size="lg"
  bgColor="primary"
/>

{/* Group */}
<AvatarGroup max={3}>
  <Avatar src="/u1.jpg" alt="User 1" />
  <Avatar src="/u2.jpg" alt="User 2" />
  <Avatar src="/u3.jpg" alt="User 3" />
  <Avatar src="/u4.jpg" alt="User 4" />
  {/* Hiển thị +1 cho số dư */}
</AvatarGroup>
```

```css
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background: var(--brand-primary-100);
  color: var(--brand-primary-700);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  overflow: hidden;
}
```

---

## ♿ Accessibility

- ✅ `alt` text cho image
- ✅ Status có aria-label: "Online", "Away"...

---

## 🔗 Related
[Badge →](badge.md)

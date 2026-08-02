# Empty States

> Hiển thị khi không có dữ liệu — turn empty into opportunity.

---

## 🎨 Types

1. **First-time use (Onboarding)** — Educate + CTA mạnh
2. **No results (Search/Filter)** — Suggest điều chỉnh
3. **Cleared state** — Encourage tạo mới
4. **Error state** — Retry option

---

## 🧩 Anatomy

```
        ┌──────────────┐
        │  [Illustration / Icon]
        │   (96-128px)
        └──────────────┘

        Heading (h3)

   Description text providing
   context and helpful info.

        [Primary Action]
        [Secondary Action]
```

---

## 💻 Examples

### First-time use

```jsx
<EmptyState
  illustration={<EmptyInbox />}
  title="No messages yet"
  description="When you receive messages, they'll appear here."
  action={<Button variant="primary">Compose Message</Button>}
  secondaryAction={<Link>Learn more</Link>}
/>
```

### No results

```jsx
<EmptyState
  icon={<Search size={48} />}
  title="No results found"
  description={`We couldn't find anything matching "${query}"`}
  suggestions={[
    "Check your spelling",
    "Try different keywords",
    "Use fewer filters"
  ]}
/>
```

### Error

```jsx
<EmptyState
  icon={<AlertCircle size={48} />}
  title="Something went wrong"
  description="We couldn't load your data. Please try again."
  action={<Button onClick={retry}>Retry</Button>}
/>
```

---

## ✅ Best Practices

- ✅ Tone friendly, không áp lực
- ✅ Visual (icon hoặc illustration)
- ✅ Clear CTA
- ✅ Different message cho mỗi context
- ❌ Không "Sorry, no data" chung chung
- ❌ Không bỏ trống

---

## 📐 Specs

- **Container**: max-width 480px, centered
- **Padding**: 64px (vertical)
- **Illustration**: 96-128px
- **Heading**: `heading-h3`
- **Description**: `body-md`, color `text-secondary`
- **Spacing**: 16px between elements

---

## 🔗 Related

[Card →](../components/molecules/card.md)

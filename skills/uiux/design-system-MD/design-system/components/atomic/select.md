# Select / Dropdown

> Chọn 1 option từ list dài.

---

## 🎨 Variants

- **Single Select** — Chọn 1 option
- **Multi Select** — Chọn nhiều options
- **Searchable Select** — Có search box
- **Async Select** — Load options từ API

---

## 📏 Sizes

Giống Input: sm (32px), md (40px) ⭐, lg (48px).

---

## 🧩 Anatomy

```
Label
┌─────────────────────────────┐
│ Selected value      [▼]     │  ← Trigger
└─────────────────────────────┘
        ↓ (when open)
┌─────────────────────────────┐
│ [✓] Option 1                │
│     Option 2                │
│     Option 3                │  ← Dropdown panel
│     Option 4                │
└─────────────────────────────┘
```

---

## 💻 Example

```jsx
<Select
  label="Country"
  placeholder="Select a country"
  options={[
    { value: 'vn', label: 'Vietnam' },
    { value: 'us', label: 'United States' },
    { value: 'jp', label: 'Japan' },
  ]}
  value={country}
  onChange={setCountry}
/>

{/* Multi-select */}
<Select
  multiple
  label="Skills"
  options={skills}
  value={selectedSkills}
  onChange={setSelectedSkills}
/>
```

---

## ✅ Best Practices

- ✅ Searchable khi > 7 options
- ✅ Group options khi có category
- ✅ Show "No results" khi search empty
- ✅ Loading state cho async data
- ❌ Không dùng cho < 4 options (dùng Radio)

---

## ♿ Accessibility

- ✅ ARIA: `role="combobox"`, `aria-expanded`, `aria-controls`
- ✅ Keyboard:
  - `Space/Enter`: open
  - `↑↓`: navigate
  - `Esc`: close
  - `Type letters`: jump to option

---

## 🔗 Related
[Radio →](radio.md) | [Dropdown →](../molecules/dropdown.md)

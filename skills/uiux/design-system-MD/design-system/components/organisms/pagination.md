# Pagination

> Điều hướng giữa các trang dữ liệu.

---

## 🎨 Variants

- **Numbered** — `< 1 2 3 ... 10 >`
- **Simple** — `< Previous | Next >`
- **Load more** — Single button
- **Infinite scroll** — Auto-load on scroll

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Button size | 32x32 (compact) hoặc 40x40 |
| Active background | `brand-primary-600` |
| Active color | `white` |
| Border radius | `radius-md` |

---

## 🧩 Anatomy

```
Showing 11-20 of 100
                    [<]  1  2  [3]  4  5  ...  10  [>]
                                ↑ Active
```

---

## 💻 Example

```jsx
<Pagination
  currentPage={3}
  totalPages={10}
  onPageChange={setPage}
  showInfo
  pageSize={20}
  total={200}
/>

{/* Simple */}
<Pagination
  variant="simple"
  hasPrev hasNext
  onPrev={() => {}}
  onNext={() => {}}
/>
```

---

## ✅ Best Practices

- ✅ Show "Showing X-Y of Z"
- ✅ Page size selector (10, 20, 50)
- ✅ First/Last page buttons
- ✅ Disabled state cho < và > khi ở edge
- ✅ URL sync (?page=3)

---

## ♿ Accessibility

- ✅ `<nav aria-label="Pagination">`
- ✅ Current page có `aria-current="page"`
- ✅ Disabled buttons có `aria-disabled`

---

## 🔗 Related
[Data Table →](data-table.md)

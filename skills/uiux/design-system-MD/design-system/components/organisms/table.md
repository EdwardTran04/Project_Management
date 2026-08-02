# Table

> Hiển thị dữ liệu dạng bảng với rows và columns.

---

## 🎨 Variants

- **Default** — Striped rows
- **Bordered** — Có borders
- **Compact** — Smaller padding
- **Responsive** — Stack on mobile

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Header height | 48px |
| Row height | 52px (default), 40px (compact) |
| Cell padding | 12px 16px |
| Border | 1px `border-default` |
| Header background | `gray-50` |
| Header font weight | 600 |
| Hover background | `gray-50` |

---

## 🧩 Anatomy

```
┌────────────────────────────────────────────┐
│ ☐  Name      Status    Date     Actions    │  ← Header
├────────────────────────────────────────────┤
│ ☐  Item 1    Active    Jan 15   [⋯]        │  ← Row
├────────────────────────────────────────────┤
│ ☐  Item 2    Pending   Jan 14   [⋯]        │
└────────────────────────────────────────────┘
  Pagination: < 1 2 3 ... 10 >
```

---

## 💻 Example

```jsx
<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeadCell>
        <Checkbox />
      </Table.HeadCell>
      <Table.HeadCell sortable>Name</Table.HeadCell>
      <Table.HeadCell>Status</Table.HeadCell>
      <Table.HeadCell align="right">Actions</Table.HeadCell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    {data.map(row => (
      <Table.Row key={row.id}>
        <Table.Cell><Checkbox /></Table.Cell>
        <Table.Cell>{row.name}</Table.Cell>
        <Table.Cell>
          <Badge variant={row.status}>{row.status}</Badge>
        </Table.Cell>
        <Table.Cell align="right">
          <IconButton icon={<MoreHorizontal />} aria-label="Actions" />
        </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table>
```

---

## ✅ Best Practices

- ✅ Sortable columns có icon indicator
- ✅ Sticky header khi scroll dài
- ✅ Empty state khi no data
- ✅ Loading state với skeleton
- ✅ Responsive: stack/scroll horizontal trên mobile
- ❌ Không quá 7 columns visible cùng lúc

---

## ♿ Accessibility

- ✅ `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` semantic
- ✅ `scope="col"` cho headers
- ✅ Caption cho table
- ✅ Sortable columns có `aria-sort`

---

## 🔗 Related
[Data Table →](data-table.md) | [Pagination →](pagination.md)

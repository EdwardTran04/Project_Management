# Data Table

> Table nâng cao với filter, sort, pagination, selection.

---

## 🎯 Features

- ✅ Sort multiple columns
- ✅ Filter (per column và global)
- ✅ Search
- ✅ Pagination
- ✅ Row selection (single, multi)
- ✅ Bulk actions
- ✅ Column resize, reorder, hide
- ✅ Export (CSV, Excel)
- ✅ Inline edit
- ✅ Sticky header & first column

---

## 🧩 Anatomy

```
┌──────────────────────────────────────────────┐
│ [Search]  [Filter]  [Columns]   [Export]     │  ← Toolbar
├──────────────────────────────────────────────┤
│ Selected: 3 items   [Delete] [Edit] [More]   │  ← Bulk actions
├──────────────────────────────────────────────┤
│ ☐  Name ↕   Status   Date ↑    Actions       │  ← Header
├──────────────────────────────────────────────┤
│ ☐  Item 1   Active   Jan 15    [⋯]           │  ← Rows
├──────────────────────────────────────────────┤
│ Showing 1-10 of 100   < 1 2 3 ... 10 >       │  ← Pagination
└──────────────────────────────────────────────┘
```

---

## 💻 Example

```jsx
<DataTable
  columns={[
    { key: 'name', label: 'Name', sortable: true, filterable: true },
    { key: 'status', label: 'Status', filterable: true },
    { key: 'date', label: 'Date', sortable: true },
  ]}
  data={items}
  selection="multiple"
  onSelectionChange={setSelected}
  pagination={{ pageSize: 10, currentPage: 1 }}
  toolbar={{ search: true, columnVisibility: true, export: true }}
/>
```

---

## ✅ Best Practices

- ✅ Loading skeleton khi fetch
- ✅ Empty state với CTA
- ✅ Persist filter/sort/page trong URL
- ✅ Server-side pagination cho > 1000 rows
- ✅ Virtual scroll cho > 100 visible rows

---

## 🔗 Related
[Table →](table.md) | [Pagination →](pagination.md)

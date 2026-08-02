# Dashboard Pattern

> Layout chuẩn cho dashboard / admin panel.

---

## 🏗️ Layout Structure

```
┌────────────────────────────────────────────────────┐
│              Top Navbar (64px)                      │
├──────────┬─────────────────────────────────────────┤
│          │  Page Title                             │
│ Sidebar  │  Description                            │
│          │  ──────────────────────────────────    │
│ (240px)  │  ┌────┐ ┌────┐ ┌────┐ ┌────┐         │
│          │  │KPI │ │KPI │ │KPI │ │KPI │  ← Stats │
│  Nav     │  └────┘ └────┘ └────┘ └────┘         │
│  Items   │  ┌──────────────┐ ┌──────────────┐    │
│          │  │   Chart      │ │   Chart      │    │
│          │  └──────────────┘ └──────────────┘    │
│          │  ┌─────────────────────────────────┐   │
│          │  │  Recent Activity Table          │   │
│          │  └─────────────────────────────────┘   │
└──────────┴─────────────────────────────────────────┘
```

---

## 📐 Grid

- **Container**: max-width 1440px
- **Sidebar**: 240px fixed
- **Main content**: fluid, padding 32px
- **Stat cards**: 4 cols (desktop), 2 (tablet), 1 (mobile)

---

## 🎯 Sections

### 1. Page Header

```jsx
<PageHeader>
  <PageHeader.Title>Dashboard</PageHeader.Title>
  <PageHeader.Description>
    Welcome back, here's what's happening today.
  </PageHeader.Description>
  <PageHeader.Actions>
    <Button variant="secondary">Export</Button>
    <Button variant="primary">+ New</Button>
  </PageHeader.Actions>
</PageHeader>
```

### 2. KPI Cards (Stats)

```jsx
<Grid cols={4} gap={24}>
  <StatCard
    label="Total Revenue"
    value="$45,231"
    change="+12.5%"
    trend="up"
    icon={<DollarSign />}
  />
</Grid>
```

### 3. Charts Section

```jsx
<Grid cols={2} gap={24}>
  <Card>
    <Card.Header>
      <Card.Title>Revenue Over Time</Card.Title>
      <Select size="sm" defaultValue="7d">
        <Option value="7d">Last 7 days</Option>
      </Select>
    </Card.Header>
    <LineChart data={revenueData} />
  </Card>
</Grid>
```

### 4. Activity Table

```jsx
<Card>
  <Card.Header>
    <Card.Title>Recent Activity</Card.Title>
    <Link href="/activity">View all →</Link>
  </Card.Header>
  <DataTable data={activities} columns={columns} />
</Card>
```

---

## 🎨 Visual Hierarchy

1. **Page Title** — `heading-h1` (30px)
2. **Section Title** — `heading-h3` (20px)
3. **Stat Value** — `display-md` (36px)
4. **Stat Label** — `body-sm` (14px) muted
5. **Body** — `body-md` (16px)

---

## 📱 Responsive

| Breakpoint | Layout |
|------------|--------|
| Desktop (≥1024px) | Sidebar persistent + 4-col stats |
| Tablet (768-1023px) | Sidebar collapsed + 2-col stats |
| Mobile (<768px) | Drawer sidebar + 1-col stack |

---

## 🔗 Related

[Sidebar →](../components/organisms/sidebar.md) | [Card →](../components/molecules/card.md)

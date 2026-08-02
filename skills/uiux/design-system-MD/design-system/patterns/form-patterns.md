# Form Patterns

> Common patterns cho forms.

---

## 🎯 Pattern 1: Single-step Form

Dùng cho: Login, signup, contact, simple settings.

```
[All fields visible]
   ↓
[Submit]
```

**Specs**: Max 7 fields, 1 column, vertical labels.

---

## 🎯 Pattern 2: Multi-step (Wizard)

Dùng cho: Onboarding, checkout, complex setup.

```
[Step 1] → [Step 2] → [Step 3] → [Review] → [Submit]
   ●         ○          ○          ○

  ┌─────────────────────┐
  │  Step content       │
  └─────────────────────┘

  [Back]            [Next]
```

**Specs**:
- Progress indicator at top
- Current step highlighted
- Back button (except step 1)
- Save progress automatically
- Review screen before final submit

---

## 🎯 Pattern 3: Inline Edit

Dùng cho: Profile fields, settings.

```
Display mode:
  Email: john@example.com  [Edit]

Edit mode:
  Email: [john@example.com] [Save] [Cancel]
```

---

## 🎯 Pattern 4: Search with Filters

```
[Search input]
[Filter chips: Active × | Last 30 days × | Clear all]

[Results below]
```

---

## 🎯 Pattern 5: Form with Sidebar

Dùng cho: Long forms (settings).

```
┌──────────┬─────────────────────┐
│ Sections │  Section content    │
│ • General│  ──────────────     │
│ • Privacy│  Form fields here   │
│ • Billing│                     │
└──────────┴─────────────────────┘
                   [Save Changes]
```

---

## 🎯 Pattern 6: Conditional Fields

Dùng cho: Forms với fields phụ thuộc.

```
Country: [Vietnam ▼]
   ↓ (show only if country selected)
Province: [Hanoi ▼]
```

---

## ✅ Validation Patterns

### Inline (on blur)
```
Email: [invalid@email] ← red border
       Invalid email format
```

### On submit
```
[Submit] → Show errors at top
          → Scroll to first error
          → Focus first error field
```

### Real-time (chỉ password strength)
```
Password: [********]
[████████░░] Strong
✓ At least 8 characters
✓ Contains number
✗ Contains special character
```

---

## 🎯 Save Patterns

### Auto-save
```
[Saving...]  →  [Saved 2 seconds ago]
```

### Manual save
```
[Save Changes] (sticky bottom bar)
[Discard Changes]
```

### Dirty state warning
"You have unsaved changes. Are you sure you want to leave?"

---

## 🔗 Related

[Form →](../components/organisms/form.md) | [Input →](../components/atomic/input.md)

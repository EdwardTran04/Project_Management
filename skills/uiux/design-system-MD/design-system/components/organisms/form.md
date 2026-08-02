# Form

> Tổ hợp form fields với validation và submission.

---

## 🧩 Form Layout Patterns

### Vertical (Default)
```
┌─ Label
│  ┌─────────────┐
│  │ Input       │
│  └─────────────┘
│  Helper text
```

### Horizontal
```
Label    │ ┌─────────────┐
         │ │ Input       │
         │ └─────────────┘
```

### Inline (Search)
```
┌────────────┐ ┌──────┐
│ Input      │ │Submit│
└────────────┘ └──────┘
```

---

## 📏 Form Spacing

| Element | Spacing |
|---------|---------|
| Label → Input | 6px |
| Input → Helper | 4px |
| Field → Field | 24px |
| Field group → group | 32px |
| Form → Submit button | 24px |

---

## 🧩 Anatomy

```
Form Title
Description text...

──────────────────────────────────
Field Group: Personal Info
──────────────────────────────────

Full Name *
[─────────────────────────────────]
Helper text

Email *
[─────────────────────────────────]

Password *
[─────────────────────────────────]
8 characters minimum

──────────────────────────────────
Field Group: Preferences
──────────────────────────────────

☑ Send me marketing emails
☐ Subscribe to newsletter

──────────────────────────────────

[Cancel]                  [Submit]
```

---

## 💻 Example

```jsx
<Form onSubmit={handleSubmit}>
  <Form.Section title="Personal Info">
    <FormField required>
      <Label>Full Name</Label>
      <Input value={name} onChange={setName} />
    </FormField>

    <FormField required error={errors.email}>
      <Label>Email</Label>
      <Input type="email" value={email} onChange={setEmail} />
      <HelperText>We'll never share your email</HelperText>
    </FormField>
  </Form.Section>

  <Form.Section title="Preferences">
    <Checkbox label="Send me updates" />
  </Form.Section>

  <Form.Actions>
    <Button variant="secondary" type="button">Cancel</Button>
    <Button variant="primary" type="submit" loading={loading}>
      Submit
    </Button>
  </Form.Actions>
</Form>
```

---

## ✅ Best Practices

- ✅ Required fields marked với `*`
- ✅ Inline validation (on blur)
- ✅ Show errors gần field
- ✅ Submit button disabled khi invalid
- ✅ Loading state trong submit
- ✅ Confirmation cho destructive actions
- ❌ Không reset form sau error
- ❌ Không quá 7 fields trên 1 form (chia steps)

---

## 🔗 Related

[Input →](../atomic/input.md) | [Form Patterns →](../../patterns/form-patterns.md)

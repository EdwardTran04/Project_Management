# Radio

> Chọn duy nhất 1 option từ list (mutually exclusive).

---

## 📏 Specs

Tương tự Checkbox về size, nhưng border-radius là `full` (circle).

---

## 🎯 States
Tương tự Checkbox: unchecked, checked, disabled, error.

---

## 💻 Example

```jsx
<RadioGroup name="plan" value={plan} onChange={setPlan}>
  <Radio value="free" label="Free - $0/month" />
  <Radio value="pro" label="Pro - $9/month" />
  <Radio value="enterprise" label="Enterprise - Contact us" />
</RadioGroup>
```

```css
.radio {
  width: 20px;
  height: 20px;
  border: 2px solid var(--gray-300);
  border-radius: 9999px;
  cursor: pointer;
}

.radio:checked {
  border-color: var(--brand-primary-600);
  border-width: 6px;
}
```

---

## ✅ When to use

| Use Radio | Use Checkbox |
|-----------|--------------|
| Chọn 1 từ nhiều | Chọn nhiều |
| Mutually exclusive | Independent options |
| < 7 options | Long list |
| > 7 options → dùng Select |

---

## ♿ Accessibility

- ✅ Group qua `<fieldset>` + `<legend>` + `name` attribute
- ✅ Keyboard: Arrow keys di chuyển trong group
- ✅ Tab di chuyển vào group (focus ở selected option)

---

## 🔗 Related
[Checkbox →](checkbox.md) | [Select →](select.md)

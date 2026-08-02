# Content Guidelines (Voice & Tone)

> Cách VTIT giao tiếp với người dùng qua text.

---

## 🎙️ Voice — Cốt lõi không đổi

VTIT là một thương hiệu **chuyên nghiệp, đáng tin cậy, hữu ích**.

### 4 Đặc điểm

1. **Clear (Rõ ràng)** — Không jargon, dễ hiểu cho mọi level
2. **Concise (Súc tích)** — Ít từ nhất có thể, không thừa
3. **Helpful (Hữu ích)** — Giúp user hoàn thành task
4. **Friendly (Thân thiện)** — Như đồng nghiệp giúp đỡ, không robot

---

## 🎵 Tone — Thay đổi theo context

| Context | Tone | Ví dụ |
|---------|------|-------|
| Success | Tươi sáng, khích lệ | "Tuyệt! Hồ sơ đã được lưu." |
| Error | Bình tĩnh, hướng giải quyết | "Có gì đó chưa ổn. Hãy thử lại sau." |
| Warning | Nghiêm túc, rõ ràng | "Hành động này không thể hoàn tác." |
| Empty state | Khích lệ, định hướng | "Chưa có dự án nào. Tạo dự án đầu tiên!" |
| Onboarding | Thân thiện, hứng khởi | "Chào mừng bạn đến với VTIT! Bắt đầu thôi." |
| Loading | Bình tĩnh, ngắn gọn | "Đang tải..." |
| Confirmation | Nghiêm túc, cảnh báo | "Bạn chắc chắn muốn xóa?" |

---

## ✍️ Writing Rules

### 1. Use Active Voice (Chủ động)

```
✅ "Bạn đã lưu thay đổi"
❌ "Thay đổi đã được lưu"

✅ "Click Submit để gửi"
❌ "Form sẽ được submit khi click"
```

### 2. Be Direct (Trực tiếp)

```
✅ "Mật khẩu sai"
❌ "Có thể bạn đã nhập sai mật khẩu, vui lòng kiểm tra lại"

✅ "Lưu"
❌ "Click vào đây để lưu"
```

### 3. Sentence Case for UI

```
✅ "Save changes"
✅ "Lưu thay đổi"
❌ "Save Changes"
❌ "SAVE CHANGES"
```

Title Case chỉ dùng cho:
- Page titles
- Section titles (đôi khi)
- Brand names

### 4. Numbers

```
0-9: viết bằng chữ cho prose
✅ "Bạn có ba dự án mới"
✅ "3 dự án đã chia sẻ"  (cho UI / data)

10+: luôn dùng số
✅ "12 dự án đang hoạt động"
```

### 5. Dates & Times

```
✅ "12 Jan 2026" hoặc "Jan 12, 2026"
✅ "2 giờ trước" (relative)
✅ "Hôm nay 14:30"
❌ "01/12/26" (ambiguous: Jan 12 or Dec 1?)
```

### 6. Currency

```
✅ "$1,234.56"  (US)
✅ "1.234,56 ₫"  hoặc "1,234,567 đ"  (VN)
```

---

## 🎯 Specific Patterns

### Buttons — Verb-driven

```
✅ "Save"        ✅ "Delete"
✅ "Submit"      ✅ "Cancel"
✅ "Sign in"     ✅ "Get started"

❌ "OK"          ❌ "Yes"
❌ "Click here"  ❌ "Submit form"
```

### Form Labels — Noun

```
✅ "Email"       ✅ "Phone number"
✅ "Password"    ✅ "Date of birth"

❌ "Enter your email"
❌ "Type password here"
```

### Error Messages — Helpful

```
Format: [What went wrong] + [What to do]

✅ "Email không hợp lệ. Vui lòng dùng định dạng name@domain.com"
✅ "Mật khẩu cần ít nhất 8 ký tự"
✅ "Không thể kết nối. Kiểm tra mạng và thử lại."

❌ "Error 500"
❌ "Invalid input"
❌ "Operation failed"
```

### Success Messages — Confirm action

```
✅ "Đã lưu hồ sơ"
✅ "Email đã gửi đến john@example.com"

❌ "Success!"
❌ "Done"
```

### Empty States — Encourage

```
✅ "Chưa có tin nhắn nào.
    Bắt đầu cuộc trò chuyện nhé!"

❌ "No messages"
❌ "Empty"
```

### Confirmations — Specific

```
✅ "Xóa dự án 'Alpha'?
    Tất cả dữ liệu sẽ bị mất vĩnh viễn."

❌ "Are you sure?"
❌ "Confirm action"
```

---

## 🌐 Internationalization (i18n)

### Key principles

- ✅ Tách text khỏi code (translation files)
- ✅ Dùng ICU Message Format cho plural/gender
- ✅ Reserve 30-50% extra space (tiếng Đức dài hơn 30%)
- ✅ Date/number/currency localization
- ❌ Không hardcode "1 item" / "2 items" → dùng plural rules
- ❌ Không concat strings (vì grammar khác nhau)

### Plural Example

```
{count, plural,
  =0 {Chưa có dự án nào}
  one {1 dự án}
  other {# dự án}
}
```

---

## 📏 Length Guidelines

| Element | Max length |
|---------|-----------|
| Page title | 60 chars (SEO) |
| Section heading | 40 chars |
| Button label | 24 chars |
| Toast message | 80 chars |
| Tooltip | 100 chars |
| Error message | 120 chars |
| Modal title | 50 chars |
| Form label | 30 chars |

---

## ✅ Tone Examples

### Success — User completes action

```
Friendly: "Tuyệt vời! Email đã gửi đi."
Neutral:  "Đã gửi email."
Formal:   "Email của bạn đã được gửi thành công."
```
**VTIT default**: Neutral với emoji nhẹ tùy context.

### Error — System fails

```
Apologetic: "Xin lỗi, có gì đó sai. Vui lòng thử lại."
Direct:     "Không thể tải. Thử lại?"
Helpful:    "Mạng không kết nối. Kiểm tra wifi rồi thử lại."
```
**VTIT default**: Helpful + actionable.

---

## 🔗 Related

- [Typography →](../foundations/typography.md)
- [Accessibility →](accessibility.md)

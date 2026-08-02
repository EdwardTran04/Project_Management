---
name: update-glossary
description: Thêm hoặc cập nhật thuật ngữ trong domain glossary. Chạy khi gặp thuật ngữ mới trong tài liệu KH hoặc khi team dùng thuật ngữ không nhất quán.
---

Cập nhật domain glossary.

Hỏi người dùng:
1. Thuật ngữ mới cần thêm là gì? (có thể nhập nhiều cùng lúc)
2. Nguồn gốc thuật ngữ: từ KH / từ tài liệu kỹ thuật / internal team?
3. Có file glossary hiện tại không? Nếu có, paste vào đây để append thêm thay vì tạo mới.

---

Với mỗi thuật ngữ, tạo entry theo format:

```markdown
## [Thuật ngữ]

**Tiếng Anh:** (nếu có)
**Định nghĩa:** [Mô tả ngắn gọn, rõ ràng]
**Ngữ cảnh:** [Dùng trong nghiệp vụ nào, hệ thống nào]
**Ví dụ:** [Câu ví dụ thực tế từ dự án]
**Không nhầm với:** [Thuật ngữ tương tự nhưng khác nghĩa — nếu có]
**Thêm ngày:** dd/mm/yyyy
```

---

Nếu BA chưa có glossary, tạo file mới với header:

```markdown
# Domain Glossary — [Tên dự án]

> Thuật ngữ nghiệp vụ dùng trong dự án — cập nhật liên tục khi gặp thuật ngữ mới.
> Tất cả tài liệu phải dùng thuật ngữ nhất quán với file này.

---
```

Sau đó append các entry mới vào.

---

Sau khi thêm xong, kiểm tra: nếu BA đã paste tài liệu dự án trong hội thoại này, scan xem có nơi nào dùng thuật ngữ khác để chỉ cùng một khái niệm không — nếu có, nhắc BA cần cập nhật cho nhất quán.

Hỏi BA: "Lưu glossary vào file không?" → nếu có: xuất file, tên gợi ý `domain-glossary_[tên-dự-án].md`.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Dùng glossary khi viết PTYC | skill: create-ptyc | Paste glossary vào câu hỏi số 5 |
| Dùng glossary khi viết User Story | skill: create-user-story | Paste vào phần tài liệu đính kèm |
| Kiểm tra thuật ngữ trong AC | skill: review-ac | Checklist Consistency — cột thuật ngữ |
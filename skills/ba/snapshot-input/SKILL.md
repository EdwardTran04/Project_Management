---
name: snapshot-input
description: So sánh 2 phiên bản tài liệu KH — phát hiện nội dung thêm/bỏ/thay đổi giữa bản cũ và bản mới. Dùng khi KH gửi cập nhật tài liệu và BA cần biết chính xác thay đổi gì để cập nhật PTYC/Feature Spec.
---
# So sánh tài liệu đầu vào

## Bước 1 — Nhận nội dung

Hỏi BA cung cấp:
1. **Tên tài liệu** và nguồn gốc (KH gửi / PM gửi / internal)
2. **Bản cũ** — paste nội dung phiên bản trước vào đây
3. **Bản mới** — paste nội dung phiên bản mới vào đây
4. **Loại tài liệu**: yêu cầu nghiệp vụ / Q&A / spec kỹ thuật / khác

Nếu file là `.xlsx` / `.docx` / `.pdf` không paste được → BA copy phần nội dung thay đổi và mô tả context.

Nếu BA chỉ có bản mới và chưa có bản cũ → ghi nhận toàn bộ là `[MỚI]`, không cần so sánh.

---

## Bước 2 — Phân tích thay đổi

So sánh 2 bản và phân loại từng thay đổi:

| Loại | Ký hiệu | Ý nghĩa |
|------|---------|---------|
| Nội dung mới thêm vào | `[+]` | Yêu cầu/thông tin KH bổ sung |
| Nội dung bị xóa/bỏ | `[-]` | Yêu cầu/thông tin không còn hiệu lực |
| Nội dung thay đổi | `[~]` | Yêu cầu/thông tin được sửa đổi |
| Nội dung không đổi | `[=]` | Giữ nguyên, không cần xử lý |

---

## Bước 3 — Tạo Change Summary

```
# Input Change Summary — [Tên tài liệu]

**Ngày nhận bản mới:** dd/mm/yyyy
**Người gửi:** [KH / PM / tên cụ thể]
**So sánh:** [Tên bản cũ] → [Tên bản mới]

## Thay đổi phát hiện

### [+] Nội dung mới thêm
- [Mô tả nội dung mới — section/câu/yêu cầu cụ thể]

### [-] Nội dung bị bỏ
- [Mô tả nội dung bị loại bỏ]

### [~] Nội dung thay đổi
- Trước: [nội dung cũ]
  Sau:  [nội dung mới]

## Đánh giá tác động

| Thay đổi | Ảnh hưởng đến | Mức độ |
|---------|--------------|--------|
| [Tên thay đổi] | PTYC / Feature Spec / User Story / TKCT | Cao / Trung bình / Thấp |

## Kết luận
- Cần cập nhật: [danh sách tài liệu bị ảnh hưởng]
- Scope change: Có / Không / Cần xác nhận thêm
```

---

Hỏi BA: "Lưu change summary vào file không?" → nếu có: xuất file, tên gợi ý `change-summary_[tên-tài-liệu]_[dd-mm-yyyy].md`.

## Bước tiếp theo

| Tình huống | Skill sử dụng | Ghi chú |
|-----------|--------------|---------|
| Thay đổi là câu trả lời Q&A | skill: process-qa | Đóng OQ tương ứng |
| Thay đổi ảnh hưởng scope | skill: scope-check | Xác nhận in/out scope |
| Cần cập nhật PTYC | skill: create-ptyc | Dùng change summary làm input |
| Cần cập nhật Feature Spec | skill: create-feature-spec | Với thay đổi chức năng cụ thể |
| Thay đổi kéo theo rủi ro | skill: risk-assessment | Nếu thay đổi lớn hoặc scope creep |
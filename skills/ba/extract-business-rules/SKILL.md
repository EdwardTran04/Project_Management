---
name: extract-business-rules
description: Trích xuất và catalog tất cả business rules từ tài liệu yêu cầu — tạo nguồn tham chiếu duy nhất để Dev implement đúng và Tester không bỏ sót rule.
disable-model-invocation: true
---

Trích xuất Business Rules.

Đọc tất cả tài liệu trong `01_input/raw-requirements/`, BRD trong `02_analysis/requirements/`, và open-questions.md.

Tìm và trích xuất tất cả business rules — business rule là bất kỳ phát biểu nào dạng:
- Ràng buộc: "chỉ được...", "không được...", "bắt buộc phải..."
- Điều kiện: "nếu... thì...", "khi... thì..."
- Tính toán: "tổng = ...", "giá trị hash = ..."
- Giới hạn: "tối đa X", "trong khoảng A đến B"
- Quy tắc xử lý: "ưu tiên... trước...", "thứ tự xử lý là..."

Phân loại theo nhóm nghiệp vụ và tạo Business Rules Catalog:

```
# Business Rules Catalog — [Tên hệ thống / tính năng]
**Ngày:** YYYY-MM-DD

## [Nhóm nghiệp vụ 1 — ví dụ: Cache Logic]

| BR-ID | Mô tả rule | Nguồn | SRS-FR tham chiếu | Ghi chú |
|-------|-----------|-------|------------------|---------|
| BR-001 | [Phát biểu rule rõ ràng, ngắn gọn] | PYC / Tài liệu kỹ thuật | SRS-FR-XXX | Assumed / Confirmed |

## [Nhóm nghiệp vụ 2]
| BR-ID | Mô tả rule | Nguồn | SRS-FR tham chiếu | Ghi chú |
|-------|-----------|-------|------------------|---------|

## Rules cần confirm với KH
[Liệt kê các rule suy luận từ context nhưng chưa được KH phát biểu rõ]
```

Sau khi tạo catalog:
- Kiểm tra có rule nào mâu thuẫn nhau không
- Gắn BR-ID vào từng SRS-FR tương ứng
- Rules chưa confirmed → thêm vào `open-questions.md`


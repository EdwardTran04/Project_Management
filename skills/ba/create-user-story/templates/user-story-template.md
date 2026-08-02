# Template User Story

> BẢN GỌN là mặc định. BẢN ĐẦY ĐỦ chỉ dùng khi người dùng yêu cầu rõ
> (paste vào Jira, lưu tài liệu, "bản đầy đủ").
> Toàn bộ output bằng tiếng Việt — chỉ giữ mã định danh (US-xxx, AC, REQ-xxx)
> và tên riêng (INVEST, MoSCoW, Figma).

---

## BẢN GỌN (mặc định)

```
**US-XXX: [Tiêu đề ngắn gọn]**  ·  REQ-XXX · Độ ưu tiên: Bắt buộc

**Với vai trò là** [persona cụ thể — không dùng "người dùng" chung chung]
**Tôi muốn** [hành động cụ thể, đo lường được]
**Để** [giá trị nghiệp vụ rõ ràng, khác với phần "Tôi muốn"]

**AC1: [Tên kịch bản — Luồng chính]**
- **Bối cảnh** [tiền điều kiện]
- **Khi** [hành động]
- **Thì** [kết quả mong đợi, đo lường được]

**AC2: [Tên kịch bản — Trường hợp biên]**
- **Bối cảnh** ...
- **Khi** ...
- **Thì** ...

**AC3: [Tên kịch bản — Luồng lỗi]**
- **Bối cảnh** ...
- **Khi** ...
- **Thì** ...
```

Dòng metadata đầu chỉ ghi mục có thông tin; thiếu thì bỏ hẳn, không ghi "N/A".
Nếu có tiêu chí INVEST cảnh báo, thêm đúng 1 dòng dưới phần US:
`⚠️ INVEST: [tiêu chí] — [lý do ngắn + đề xuất]`

---

## BẢN ĐẦY ĐỦ (chỉ khi được yêu cầu)

### Thông tin chung

| Trường | Giá trị |
|-------|-------|
| **Mã US** | US-XXX |
| **Tiêu đề** | [Tên ngắn gọn mô tả tính năng] |
| **Epic / Nhóm tính năng** | [Tên Epic liên quan] |
| **Tham chiếu REQ** | REQ-XXX (liên kết về BRD) |
| **Độ ưu tiên** | Bắt buộc / Nên có / Có thể có (MoSCoW) |
| **Điểm story** | [Để trống cho đội phát triển ước lượng] |
| **Figma** | [Link thiết kế hoặc bỏ trống] |
| **Trạng thái** | Nháp / Đang rà soát / Đã duyệt |
| **Ngày tạo** | YYYY-MM-DD |
| **Tác giả** | [Tên BA] |

### User Story

**Với vai trò là** [persona cụ thể]
**Tôi muốn** [hành động cụ thể, đo lường được]
**Để** [giá trị nghiệp vụ rõ ràng]

### Tự kiểm INVEST

| Tiêu chí | ✅ / ⚠️ / ❌ | Ghi chú |
|----------|-------------|---------|
| Independent — Độc lập với story khác? | | |
| Negotiable — Còn chỗ thảo luận? | | |
| Valuable — Có giá trị rõ cho người dùng/nghiệp vụ? | | |
| Estimable — Đội phát triển ước lượng được? | | |
| Small — Xong trong 1 sprint? | | |
| Testable — Kiểm thử viết được test case? | | |

### Tiêu chí chấp nhận

(theo đúng cấu trúc AC1/AC2/AC3 của bản gọn)

### Phụ thuộc

- [Story / công việc liên quan nếu có]

### Giả định

- [Giả định đưa ra khi viết story]

### Câu hỏi mở

- [ ] [Câu hỏi cần PO / bên liên quan làm rõ]
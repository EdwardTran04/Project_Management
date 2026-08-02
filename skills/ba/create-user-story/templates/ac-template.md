# Template Tiêu chí chấp nhận (AC) — cấu trúc Bối cảnh / Khi / Thì

> Mỗi User Story cần **tối thiểu 3 AC**: luồng chính, trường hợp biên, luồng lỗi.
> Mỗi AC kiểm tra duy nhất 1 kịch bản. Mọi điều kiện phải đo lường được.
> Từ khóa bắt buộc dùng tiếng Việt: **Bối cảnh / Khi / Thì / Và**
> (tuyệt đối không dùng Given / When / Then / And).

---

## AC1: [Tên kịch bản — Luồng chính]

- **Bối cảnh** [tiền điều kiện cụ thể — trạng thái hệ thống trước khi hành động]
- **Khi** [hành động chính của người dùng]
- **Thì** [kết quả mong đợi — đo lường được, trạng thái rõ ràng]
- **Và** [kết quả phụ nếu có]

---

## AC2: [Tên kịch bản — Trường hợp biên / Kiểm tra hợp lệ]

- **Bối cảnh** [tiền điều kiện — trường hợp biên]
- **Khi** [hành động]
- **Thì** [kết quả mong đợi cho trường hợp biên]

---

## AC3: [Tên kịch bản — Luồng lỗi]

- **Bối cảnh** [tiền điều kiện — điều kiện gây lỗi]
- **Khi** [hành động]
- **Thì** [kết quả lỗi mong đợi — thông báo cụ thể, dữ liệu không bị tác dụng phụ]

---

## Checklist chất lượng AC

- [ ] Toàn bộ AC bằng tiếng Việt, dùng đúng từ khóa Bối cảnh/Khi/Thì/Và?
- [ ] Mỗi AC kiểm tra đúng 1 kịch bản?
- [ ] Mọi điều kiện đo lường được (không dùng: "nhanh", "phù hợp", "bảo mật")?
- [ ] Số liệu nghiệp vụ chưa được xác nhận đã đánh dấu `[cần xác nhận]`?
- [ ] Bao phủ luồng chính?
- [ ] Bao phủ ít nhất 1 trường hợp biên?
- [ ] Bao phủ ít nhất 1 luồng lỗi, có nêu rõ không phát sinh tác dụng phụ?
- [ ] Không chứa logic cài đặt (API, SQL, tên component)?
- [ ] Kiểm thử viết được test case trực tiếp từ AC này?
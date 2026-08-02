# INVEST Criteria — Giải thích chi tiết

> Tài liệu tham chiếu NỘI BỘ cho việc tự kiểm — khi trình bày đánh giá INVEST
> ra cho người dùng, diễn đạt bằng tiếng Việt (giữ tên 6 tiêu chí gốc
> Independent/Negotiable/Valuable/Estimable/Small/Testable vì là tên riêng
> của phương pháp).

> INVEST là bộ 6 tiêu chí do Bill Wake đề xuất năm 2003, dùng để đánh giá
> chất lượng User Story trong Agile/Scrum.

---

## I — Independent (Độc lập)

Story phải có thể phát triển, test, deploy độc lập với các story khác.

**Dấu hiệu vi phạm:**
- Story B chỉ làm được sau khi story A xong
- Phải merge cùng lúc 2-3 story mới deploy được
- Test một story phải có data từ story khác

**Cách fix:** Gộp stories phụ thuộc thành 1, hoặc tách dependency ra story riêng với ưu tiên trước, dùng mock/test data để test độc lập.

---

## N — Negotiable (Có thể thương lượng)

Story là "lời mời thảo luận", không phải hợp đồng cứng. Chi tiết được làm rõ trong refinement.

**Dấu hiệu vi phạm:**
- Story dài 3 trang mô tả từng pixel UI
- Chỉ định công nghệ cụ thể (phải dùng React, Redis...)
- Mô tả thuật toán chi tiết trong story

**Cách fix:** Giữ story ngắn, focus vào "what" và "why". Đẩy chi tiết "how" sang AC hoặc tech design doc.

---

## V — Valuable (Có giá trị)

Mỗi story phải mang lại giá trị rõ ràng cho user hoặc business.

**Dấu hiệu vi phạm:**
- Phần "So that" rỗng hoặc lặp lại "I want"
- Story chỉ có giá trị cho dev (refactor, upgrade lib)
- Không trả lời được "Nếu không làm thì sao?"

**Cách fix:** Viết "So that" theo công thức: business outcome + measurable. Hỏi "Why?" 5 lần để tìm giá trị thật.

---

## E — Estimable (Có thể ước lượng)

Dev team phải ước lượng được effort để hoàn thành story.

**Dấu hiệu vi phạm:**
- Dev nói "không biết bao lâu, phải research thêm"
- Effort chênh nhau >3 lần giữa các thành viên
- Nhiều unknown technical risk

**Cách fix:** Tạo Spike story để research trước, bổ sung context/constraint, chia nhỏ phần unknown.

---

## S — Small (Nhỏ)

Story đủ nhỏ để hoàn thành trong 1 sprint (thường 1-3 ngày/1 dev).

**Dấu hiệu vi phạm:**
- Ước lượng >5 ngày work
- AC vượt quá 7-8 scenarios
- Story chứa nhiều CRUD operations
- Tiêu đề có chữ "AND"

**Pattern split:**
1. Theo CRUD: Create / Read / Update / Delete
2. Theo persona: từng role riêng
3. Theo data type: Text / File / Video
4. Theo business rule: Happy path / Validation / Permission
5. Theo workflow step: từng bước trong luồng

---

## T — Testable (Có thể test)

Story phải có AC rõ ràng, đo lường được để QA xác nhận "done".

**Dấu hiệu vi phạm:**
- AC dùng từ mơ hồ: "nhanh", "đẹp", "user-friendly"
- AC không có điều kiện đo lường được
- Không có AC, chỉ có description

**Cách fix:** Mỗi AC có Given/When/Then cụ thể với số liệu, trạng thái, message rõ ràng.

---

## Quick Reference

| Tiêu chí | Câu hỏi 1 dòng |
|----------|----------------|
| Independent | Story này chạy độc lập được không? |
| Negotiable | Có chỗ cho thảo luận, hay đã quá chi tiết? |
| Valuable | User/business được lợi gì cụ thể? |
| Estimable | Dev ước lượng được effort không? |
| Small | Hoàn thành trong 1 sprint không? |
| Testable | QA viết được test case từ AC không? |

---

*Nguồn: Bill Wake (2003) — "INVEST in Good Stories, and SMART Tasks"*
*Adapt bởi BA Zone / Digital School*
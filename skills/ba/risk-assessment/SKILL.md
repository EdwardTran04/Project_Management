---
name: risk-assessment
description: Phân tích và đánh giá rủi ro dự án hoặc tính năng từ góc độ BA — rủi ro requirement, scope, tích hợp, timeline, chất lượng — và đề xuất mitigation actions.
---

Phân tích rủi ro từ góc độ BA.

Hỏi người dùng:
1. Phạm vi đánh giá: toàn dự án / một tính năng / một milestone?
2. Tên dự án / tính năng cần đánh giá?
3. Paste tài liệu tham chiếu vào đây — BRD, PTYC, Feature Spec, danh sách Open Questions, thông tin timeline và team. Càng nhiều context càng tốt.

Nếu người dùng đính kèm tài liệu, đọc toàn bộ trước khi phân tích.

---

Phân tích rủi ro theo 5 nhóm:

**1. Requirement Risk — rủi ro từ yêu cầu chưa rõ**
- Requirement còn mơ hồ, chưa được KH confirm
- Open questions chưa có câu trả lời
- NFR thiếu số liệu cụ thể
- Scope chưa được chốt rõ ràng

**2. Scope Risk — rủi ro scope creep**
- Dependencies với hệ thống khác chưa được confirm
- Stakeholder có thể thêm requirement giữa chừng
- Tính năng "implied" chưa được document rõ

**3. Integration Risk — rủi ro tích hợp**
- External API/system chưa có contract rõ ràng
- Third-party dependency có thể thay đổi
- Data format giữa các hệ thống chưa được validate

**4. Timeline Risk — rủi ro tiến độ**
- Open questions chưa trả lời → block BA/Dev
- Phụ thuộc vào team/system khác chưa có commitment
- Buffer có đủ cho testing và bug fix không?

**5. Quality Risk — rủi ro chất lượng**
- NFR chưa có acceptance criteria đo lường được
- Test environment chưa sẵn sàng
- Performance target chưa được validate với real data

---

Scoring matrix:

| Probability \ Impact | High | Medium | Low |
|---------------------|------|--------|-----|
| **High** | 🔴 High | 🔴 High | 🟡 Medium |
| **Medium** | 🔴 High | 🟡 Medium | 🟢 Low |
| **Low** | 🟡 Medium | 🟢 Low | 🟢 Low |

---

Tạo Risk Register theo template sau:

# Risk Register — [Tên dự án / tính năng]

**Ngày:** dd/mm/yyyy
**Phạm vi:** [Toàn dự án / Tính năng X / Milestone Y]

## Bảng tổng hợp

| ID | Nhóm | Mô tả rủi ro | Probability | Impact | Score | Mitigation tóm tắt | Owner | Status |
|----|------|-------------|-------------|--------|-------|--------------------|-------|--------|
| R-001 | Requirement | | H/M/L | H/M/L | 🔴/🟡/🟢 | | BA/PM/Dev | Open |

## Chi tiết rủi ro Score = High 🔴

### R-XXX — [Tên rủi ro]

**Mô tả:** [Rủi ro cụ thể là gì]
**Nguyên nhân:** [Tại sao rủi ro này tồn tại]
**Hệ quả nếu xảy ra:** [Ảnh hưởng đến timeline/chất lượng/scope như thế nào]
**Mitigation:** [Hành động phòng ngừa — làm gì ngay bây giờ]
**Contingency:** [Kế hoạch xử lý nếu rủi ro đã xảy ra]
**Owner:** [Ai chịu trách nhiệm theo dõi]
**Deadline xử lý:** [dd/mm/yyyy hoặc milestone]

---

Hỏi BA: "Lưu vào file không?" → nếu có: xuất file, tên gợi ý `risk-register_[tên].md`.

Nhắc BA: Các rủi ro Score = High 🔴 nên được báo cáo với PM để cân nhắc đưa vào risk log dự án chính thức.

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Xử lý Open Questions đang block | skill: process-qa | Giảm Requirement Risk |
| Định nghĩa NFR còn thiếu số liệu | skill: define-nfr | Giảm Quality Risk |
| Làm rõ API contract với hệ thống ngoài | skill: define-api-contract | Giảm Integration Risk |
| Phân loại lại ưu tiên nếu timeline rủi ro cao | skill: prioritize-requirements | Giảm Timeline Risk |
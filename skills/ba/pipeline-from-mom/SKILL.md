---
name: pipeline-from-mom
description: Pipeline tự động từ MOM khảo sát → PTYC hoàn chỉnh. Chạy tuần tự 4 skill: as-is-to-be → extract-business-rules → define-nfr → create-ptyc. Dùng khi BA nhận được biên bản khảo sát và cần tạo tài liệu PTYC chuẩn BM.01.
---
## ⚡ Điều kiện kích hoạt

> Skill này CHỈ chạy khi BA gọi trực tiếp bằng lệnh `/pipeline-from-mom`
> hoặc nói rõ "chạy pipeline-from-mom".
> KHÔNG tự kích hoạt dù BA paste MOM hay đề cập PTYC.
> Nếu chưa được gọi trực tiếp → bỏ qua skill này hoàn toàn.
# Pipeline: MOM → PTYC

## Đầu vào cần có

Trước khi bắt đầu, hỏi BA cung cấp:
1. Nội dung MOM khảo sát (paste hoặc đính kèm file)
2. Tên dự án và đơn vị thực hiện
3. Mã hiệu tài liệu và người lập / xem xét / phê duyệt

Đọc toàn bộ MOM trước khi chạy bất kỳ bước nào.

---

## Bước 1 — Phân tích As-Is / To-Be

Từ nội dung MOM, thực hiện logic của `skill: as-is-to-be`:
- Rút trích quy trình hiện tại (As-Is) từ phần mô tả nghiệp vụ trong MOM
- Xác định pain points KH phản ánh
- Phác thảo quy trình To-Be sau khi tin học hóa
- Tổng hợp Gap Analysis

**Output Bước 1:** As-Is/To-Be Analysis (bảng tổng quan + luồng + gap)

**Checkpoint:** Hiển thị output Bước 1, hỏi BA:
> "As-Is/To-Be đã đúng chưa? Có điểm nào cần điều chỉnh trước khi tiếp tục?"

Chờ BA xác nhận → mới chạy Bước 2.

---

## Bước 2 — Trích xuất Business Rules

Từ MOM và output Bước 1, thực hiện logic của `skill: extract-business-rules`:
- Quét toàn bộ MOM tìm ràng buộc, điều kiện, tính toán, giới hạn
- Phân loại theo nhóm nghiệp vụ
- Đánh BR-ID theo format BR-001, BR-002...
- Đánh dấu rules "Assumed" cần confirm với KH

**Output Bước 2:** Business Rules Catalog

**Checkpoint:** Hiển thị output Bước 2, hỏi BA:
> "BR Catalog đã đủ chưa? Có rule nào cần thêm hoặc điều chỉnh không?"

Chờ BA xác nhận → mới chạy Bước 3.

---

## Bước 3 — Định nghĩa NFR

Từ MOM và context dự án, thực hiện logic của `skill: define-nfr`:
- Rút trích các chỉ số NFR đã được KH đề cập trong MOM
- Với thông tin còn thiếu → đề xuất giá trị mặc định hợp lý, hỏi BA confirm
- Tạo NFR Specification đủ sections 4.1–4.12

**Output Bước 3:** NFR Specification

**Checkpoint:** Hiển thị danh sách "Giá trị đề xuất chưa confirm", hỏi BA:
> "Các chỉ số NFR này đã được KH xác nhận chưa? Cần điều chỉnh gì không?"

Chờ BA xác nhận → mới chạy Bước 4.

---

## Bước 4 — Tạo PTYC

Tổng hợp output từ 3 bước trên, thực hiện logic của `skill: create-ptyc`:
- **Phần 2:** Lấy từ output Bước 1 (bài toán, mục tiêu, hiện trạng)
- **Phần 3:** Lấy từ MOM (quy trình nghiệp vụ, chức năng) + BR Catalog từ Bước 2
- **Phần 4:** Lấy từ NFR Specification Bước 3
- **Phần 1 & 5:** Lấy từ thông tin BA cung cấp đầu pipeline

**Output cuối:** PTYC hoàn chỉnh theo chuẩn BM.01

---

## Tóm tắt output pipeline

| Bước | Skill | Output |
|------|-------|--------|
| 1 | as-is-to-be | As-Is/To-Be Analysis |
| 2 | extract-business-rules | BR Catalog |
| 3 | define-nfr | NFR Specification |
| 4 | create-ptyc | PTYC (BM.01) hoàn chỉnh |
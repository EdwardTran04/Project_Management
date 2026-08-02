---
name: pipeline-full-delivery
description: Pipeline đầy đủ từ MOM + Figma → toàn bộ bộ tài liệu BM.01 đến BM.04 (PTYC → TKTT → TKCSSDL → TKCT). Dùng khi BA cần bàn giao đầy đủ hồ sơ thiết kế cho một dự án mới.
---
## ⚡ Điều kiện kích hoạt

> Skill này CHỈ chạy khi BA gọi trực tiếp bằng lệnh `/pipeline-full-delivery`
> hoặc nói rõ "chạy pipeline-full-delivery".
> KHÔNG tự kích hoạt dù BA paste MOM hay đề cập PTYC.
> Nếu chưa được gọi trực tiếp → bỏ qua skill này hoàn toàn.

# Pipeline: Full Delivery BM.01 → BM.04

## Đầu vào cần có

Trước khi bắt đầu, hỏi BA cung cấp:
1. MOM khảo sát hoặc mô tả nghiệp vụ
2. Link Figma (nếu có)
3. Technology stack dự kiến (ngôn ngữ, DB, framework)
4. Danh sách hệ thống ngoài cần tích hợp
5. Tên dự án, đơn vị, thông tin người lập / xem xét / phê duyệt cho từng tài liệu

Đọc toàn bộ nội dung đầu vào trước khi bắt đầu.

---

## Giai đoạn 1 — Phân tích (input cho toàn bộ pipeline)

### 1.1 As-Is / To-Be + Business Rules + NFR

Chạy tuần tự logic của 3 skill phân tích:

**as-is-to-be** → rút trích hiện trạng và gap
**extract-business-rules** → catalog toàn bộ BR từ MOM
**define-nfr** → định nghĩa NFR với chỉ số cụ thể

**Checkpoint Giai đoạn 1:**
> "3 tài liệu phân tích đã sẵn sàng. BA xác nhận trước khi bắt đầu tạo tài liệu chính thức?"

---

## Giai đoạn 2 — BM.01 PTYC

Thực hiện logic của `skill: create-ptyc` với input từ Giai đoạn 1.

**Output:** PTYC (BM.01) — tài liệu yêu cầu người dùng

**Checkpoint:**
> "PTYC đã hoàn chỉnh. BA review và xác nhận trước khi sang BM.02?"

Lưu ý: BM.02, BM.03, BM.04 đều dùng PTYC làm tài liệu tham chiếu chính.

---

## Giai đoạn 3 — BM.02 TKTT

Thực hiện logic của `skill: create-tktt` với input:
- PTYC từ Giai đoạn 2
- Technology stack và hệ thống tích hợp BA cung cấp đầu pipeline
- NFR Specification từ Giai đoạn 1

**Output:** TKTT (BM.02) — thiết kế tổng thể kiến trúc

**Checkpoint:**
> "TKTT đã hoàn chỉnh. BA review và xác nhận trước khi sang BM.03?"

---

## Giai đoạn 4 — BM.03 TKCSSDL

Thực hiện logic của `skill: define-data-model` trước để có logical model, sau đó `skill: create-tkcssdl`:
- Input: PTYC (entities nghiệp vụ) + BR Catalog (constraints)
- Hỏi BA: hệ quản trị CSDL, danh sách module cần thiết kế

**Output:** TKCSSDL (BM.03) — thiết kế cơ sở dữ liệu

**Checkpoint:**
> "TKCSSDL đã hoàn chỉnh. BA review và xác nhận trước khi sang BM.04?"

---

## Giai đoạn 5 — BM.04 TKCT

Nếu có Figma: chạy `pipeline-from-figma` (Bước 1 và 2) trước để có screen description.
Sau đó thực hiện logic của `skill: create-tkct` với input:
- PTYC (chức năng, business rules, actor)
- TKTT (kiến trúc, component dùng chung)
- TKCSSDL (tên bảng, tên trường thực tế)
- Screen Description từ Figma analysis (nếu có)

**Output:** TKCT (BM.04) — thiết kế chi tiết

---

## Kiểm tra bàn giao

Sau khi hoàn thành cả 4 tài liệu, chạy logic của `skill: doc-status` để kiểm tra:
- 4 tài liệu BM.01–04 đủ và đúng version
- Không có bảng rỗng
- Tất cả sơ đồ đã có Mermaid diagram
- Mapping DB trong TKCT khớp với TKCSSDL

---

## Tóm tắt output pipeline

| Giai đoạn | Skill(s) | Output | Phụ thuộc vào |
|-----------|---------|--------|--------------|
| 1 | as-is-to-be, extract-business-rules, define-nfr | 3 tài liệu phân tích | MOM đầu vào |
| 2 | create-ptyc | BM.01 PTYC | Giai đoạn 1 |
| 3 | create-tktt | BM.02 TKTT | BM.01 + NFR |
| 4 | define-data-model, create-tkcssdl | BM.03 TKCSSDL | BM.01 + BR |
| 5 | create-tkct | BM.04 TKCT | BM.01 + BM.02 + BM.03 + Figma |
| 6 | doc-status | Delivery checklist | Tất cả |
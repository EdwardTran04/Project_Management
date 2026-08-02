---
name: pipeline-from-figma
description: Pipeline tự động từ Figma design → TKCT hoàn chỉnh. Chạy tuần tự 3 skill: analyze-figma → create-screen-desc → create-tkct. Dùng khi BA nhận Figma link và cần tạo tài liệu thiết kế chi tiết chuẩn BM.04.
---
## ⚡ Điều kiện kích hoạt

> Skill này CHỈ chạy khi BA gọi trực tiếp bằng lệnh `/pipeline-from-figma`
> hoặc nói rõ "chạy pipeline-from-figma".
> KHÔNG tự kích hoạt dù BA paste MOM hay đề cập PTYC.
> Nếu chưa được gọi trực tiếp → bỏ qua skill này hoàn toàn.

# Pipeline: Figma → TKCT

## Đầu vào cần có

Trước khi bắt đầu, hỏi BA cung cấp:
1. Link Figma (page hoặc frame cụ thể)
2. Tên phân hệ / tính năng cần thiết kế
3. Context: màn hình mới hay redesign?
4. Có PTYC (BM.01) hoặc Feature Spec sẵn không? Nếu có, paste vào.
5. Có TKCSSDL (BM.03) sẵn không? Nếu có, paste vào (để mapping DB).
6. Tên dự án và thông tin người lập / xem xét / phê duyệt

---

## Bước 1 — Phân tích Figma

Thực hiện logic của `skill: analyze-figma`:
- Dùng MCP tool `figma` đọc toàn bộ frame trong scope
- Liệt kê danh sách màn hình + Navigation Flow
- Rút trích Business Rules ẩn trong design (state variants, conditional UI, validation hints)
- Xác định Requirements bổ sung chưa có trong PTYC/Feature Spec (nếu có)
- Ghi nhận Gaps cần làm rõ với Designer / KH

**Output Bước 1:** Figma Analysis Report (danh sách màn hình, BR-D catalog, gaps)

**Checkpoint:** Hiển thị output Bước 1, hỏi BA:
> "Danh sách màn hình và business rules rút trích từ Figma đã đúng chưa?
> Có màn hình nào bị thiếu hoặc gap nào cần làm rõ với Designer trước không?"

Chờ BA xác nhận và giải quyết gaps → mới chạy Bước 2.

---

## Bước 2 — Mô tả chi tiết từng màn hình

Với mỗi màn hình trong danh sách từ Bước 1, thực hiện logic của `skill: create-screen-desc`:
- Tự động nhận diện Format A (Web/BO) hoặc Format B (Mobile)
- Tạo bảng mô tả theo cấu trúc phân cấp (không liệt kê phẳng)
- Điền đầy đủ: Kiểu hiển thị, Kiểu thao tác, Bắt buộc, Độ dài, Mô tả xử lý
- Dùng `--` cho thông tin không nhìn rõ trong Figma — không đoán

Xử lý lần lượt từng màn hình, không gộp.

**Output Bước 2:** Bảng mô tả chi tiết cho tất cả màn hình trong scope

**Checkpoint:** Hiển thị output Bước 2, hỏi BA:
> "Bảng mô tả màn hình đã đầy đủ chưa? Có trường nào cần bổ sung thông tin
> hoặc điều chỉnh validate không?"

Chờ BA xác nhận → mới chạy Bước 3.

---

## Bước 3 — Tạo TKCT

Tổng hợp toàn bộ output, thực hiện logic của `skill: create-tkct`:
- **Phần 2:** Tổng quan chức năng từ danh sách màn hình Bước 1
- **Phần 3:** Với mỗi chức năng:
  - Thông tin chung: đường dẫn, phân quyền, miền dữ liệu
  - Màn hình: link Figma từ Bước 1
  - Bảng mô tả thành phần: lấy từ Bước 2, bổ sung Mapping DB từ TKCSSDL nếu có
  - Luồng nghiệp vụ: dùng Mermaid flowchart, rút trích từ Navigation Flow Bước 1
- **Phần 4:** Component dùng chung từ Figma analysis
- **Phần 5:** Quản trị dữ liệu từ PTYC nếu có
- **Phần 6:** Danh sách chức năng tổng hợp

**Output cuối:** TKCT hoàn chỉnh theo chuẩn BM.04

---

## Tóm tắt output pipeline

| Bước | Skill | Output |
|------|-------|--------|
| 1 | analyze-figma | Figma Analysis Report (màn hình, BR-D, gaps) |
| 2 | create-screen-desc | Bảng mô tả chi tiết tất cả màn hình |
| 3 | create-tkct | TKCT (BM.04) hoàn chỉnh |
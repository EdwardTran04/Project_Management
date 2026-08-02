---
name: create-project-overview
description: Chắt lọc tài liệu thô của dự án (spec, MOM, mô tả hệ thống) thành 1 file project-overview cô đọng — bản đồ tổng thể để AI và BA hiểu nhanh dự án làm gì. File này là đầu vào nền tảng cho mọi skill sau. Dùng khi bắt đầu dự án mới hoặc cần tạo bản tóm lược tổng thể.
---

# Tạo Project Overview

## Mục đích

Chắt lọc tài liệu thô dài thành 1 bản tóm lược **ngắn gọn, đủ dùng** — làm đầu vào nền tảng cho toàn bộ skill BA về sau. File này KHÔNG phải đặc tả chi tiết; nó là bản đồ giúp AI hiểu dự án làm gì.

## Bước 1 — Nhận tài liệu

Hỏi người dùng:
1. Tên dự án và đơn vị thực hiện?
2. Paste toàn bộ tài liệu thô vào đây — spec, MOM, mô tả hệ thống, kiến trúc... (càng nhiều càng tốt, không sợ dài vì skill sẽ chắt lọc lại)

Đọc toàn bộ tài liệu trước khi tóm lược.

## Bước 2 — Chắt lọc theo nguyên tắc cô đọng

**Nguyên tắc bắt buộc — giữ NGẮN:**
- Mỗi phân hệ chỉ **1 dòng** mô tả vai trò — KHÔNG liệt kê sub-function, chức năng con, field, validate.
- Mục tiêu: tối đa 5 bullet.
- Ràng buộc cốt lõi: tối đa 5 bullet.
- Toàn bộ output gói trong khoảng 1 trang. Dự án càng lớn càng phải nén mạnh.
- Nếu tài liệu có chi tiết kỹ thuật sâu (CRUD, công thức, validate) → BỎ QUA, đó là việc của create-ptyc/create-tkct.

## Bước 3 — Tạo Project Overview

Output theo template sau, tham khảo `./templates/project_overview.md`:

---

# Project Overview — [Tên dự án]

**Đơn vị:** [Đơn vị thực hiện]
**Ngày tạo:** dd/mm/yyyy

## Tóm tắt một dòng

[Hệ thống này làm gì — 1 câu duy nhất, súc tích]

## Mục tiêu cốt lõi

- [Mục tiêu 1]
- [Mục tiêu 2]
- [... tối đa 5 bullet]

## Các phân hệ chính

| Phân hệ | Vai trò (1 dòng) |
|---------|------------------|
| [Tên phân hệ 1] | [Vai trò ngắn gọn] |
| [Tên phân hệ 2] | [Vai trò ngắn gọn] |

## Tích hợp hệ thống ngoài

| Hệ thống | Dữ liệu trao đổi | Hướng |
|----------|-----------------|-------|
| [Tên] | [Loại dữ liệu] | Vào / Ra / Hai chiều |

## Luồng tổng thể

1. [Bước 1 — 1 dòng]
2. [Bước 2 — 1 dòng]
3. [... mỗi bước 1 dòng]

## Tác nhân chính

- [Vai trò 1] — [nhiệm vụ ngắn]
- [Vai trò 2] — [nhiệm vụ ngắn]

## Ràng buộc / Nguyên tắc cốt lõi

- [Ràng buộc quan trọng nhất — ví dụ: tính liên thông, truy vết, read-only data...]
- [... tối đa 5 bullet]

---

Hỏi BA: "Lưu vào file không?" → nếu có: xuất file, tên gợi ý `project-overview.md`. Lưu ở nơi mọi skill có thể tham chiếu.

## Bước tiếp theo

Project Overview này là đầu vào nền tảng. Khi chạy các skill sau, BA paste file này kèm theo để AI nắm context dự án:

| Skill tiếp theo | Cách dùng overview |
|----------------|---------------------|
| skill: create-ptyc | Paste overview làm context cho Phần 2 Tổng quan hệ thống |
| skill: as-is-to-be | Overview giúp xác định phạm vi phân tích |
| skill: create-tktt | Phân hệ + tích hợp ngoài là input cho kiến trúc |
| skill: extract-business-rules | Ràng buộc cốt lõi gợi ý nhóm business rules |
| skill: prioritize-requirements | Mục tiêu cốt lõi giúp xác định Must Have |
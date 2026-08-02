---
name: create-tkcssdl
description: Tạo Tài liệu Thiết kế cơ sở dữ liệu (TKCSSDL) theo biểu mẫu BM.03 — tương đương DBDD (Database Design Document). Trả lời "Schema DB cụ thể ra sao" — ERD, mô tả từng bảng (field, kiểu dữ liệu, PK/FK, constraint, index, trigger), store procedure, thiết kế vật lý và tuân thủ Quản trị dữ liệu. Dùng khi cần viết TKCSSDL, database design document, BM.03, thiết kế cơ sở dữ liệu.
---

# Tạo BM.03 — Thiết kế cơ sở dữ liệu (TKCSSDL)

## Quy tắc bắt buộc

- Giữ nguyên cấu trúc 6 phần, tiêu đề section, header bảng — không thêm/xoá/đổi tên.
- Xoá toàn bộ guidance trong template — thay bằng nội dung thật của dự án.
- Mọi bảng phải có ít nhất 1 dòng dữ liệu thật hoặc ghi `(Không áp dụng)` + lý do — không để bảng rỗng.
- Mọi sơ đồ (ERD, data model) dùng Mermaid trong code block — không ASCII art.

## Hỏi người dùng

Trước khi bắt đầu, thu thập đủ các thông tin sau:

1. Tên dự án và đơn vị thực hiện
2. Mã hiệu tài liệu và phiên bản (mặc định: 1.0)
3. Người lập / Người xem xét / Người phê duyệt (tên + chức danh)
4. Hệ quản trị CSDL (Oracle / MySQL / PostgreSQL / SQL Server...)
5. Danh sách module/phân hệ cần thiết kế (để nhóm bảng)
6. Nội dung đầu vào — paste PTYC, logical data model, business rules, hoặc mô tả entities nghiệp vụ vào đây

Nếu người dùng cung cấp tài liệu đính kèm (PTYC, data model từ `skill: define-data-model`), đọc và rút trích entities, constraints trước khi hỏi thêm.

---

## Nội dung 6 phần BM.03

### Phần 1 — Giới thiệu

- Mục đích tài liệu, phạm vi, đối tượng sử dụng.
- Bảng thuật ngữ 3 cột: Thuật ngữ | Định nghĩa | Ghi chú.
- Tài liệu tham khảo: tham chiếu BM.01 (PTYC) và các tài liệu liên quan.
- Mô tả tổng quan cấu trúc tài liệu.

### Phần 2 — Cơ sở dữ liệu

**2.1 Mô hình quan hệ dữ liệu**

- ERD tổng thể — dùng Mermaid `erDiagram`. Nếu cần file draw.io chất lượng cao hơn dùng `skill: create-uml`.
- Bảng danh sách bảng: STT | Tên bảng | Mô tả ý nghĩa.

**2.2 Mô tả từng bảng**

Mỗi bảng có tiêu đề `### [Tên bảng]` và bảng 8 cột bắt buộc:

| STT | Tên trường | Kiểu DL và độ dài | Nullable | Unique | P/F Key | Mặc định | Mô tả |
|-----|-----------|------------------|---------|--------|---------|---------|-------|

Quy tắc điền:
- Tên trường: `snake_case`, tiếng Anh.
- Kiểu dữ liệu: cụ thể — `varchar(100)`, `int`, `datetime`, `decimal(18,2)`...
- FK ghi rõ: `F → tên_bảng.tên_trường`
- Nullable: `X` nếu cho phép null, để trống nếu NOT NULL.

**2.2.1 Constraint** — bảng: STT | Tên constraint | Loại (PK/FK/UK/CHECK) | Bảng | Cột | Tham chiếu (nếu FK).

**2.2.2 Index** — bảng: STT | Tên index | Bảng | Cột | Loại (UNIQUE/BTREE/...) | Mục đích.

**2.2.3 Trigger** — bảng: STT | Tên trigger | Bảng | Sự kiện (INSERT/UPDATE/DELETE) | Thời điểm (BEFORE/AFTER) | Ý nghĩa.

**2.3 Store Procedure / Function** — bảng: STT | Tên | Đầu vào | Đầu ra | Logic chính.

**2.4 Package** — bảng: STT | Tên | Provider | Portlet | Mô tả. Ghi `(Không áp dụng)` nếu không dùng package.

### Phần 3 — Thiết kế tệp tin

Danh sách file import/export (nếu có). Với mỗi file: tên file, định dạng, mô tả, bảng các trường (STT | Tên trường | Kiểu DL | Format | Mô tả). Ghi `(Không áp dụng)` nếu hệ thống không có import/export file.

### Phần 4 — Thiết kế mã

Mọi mã nghiệp vụ phức tạp (mã KH, mã hợp đồng, mã giao dịch...):
- Cấu trúc mã: mô tả từng phần cấu thành.
- Ví dụ minh họa.
- Validation rule: độ dài, ký tự cho phép, checksum nếu có.

### Phần 5 — Thiết kế vật lý

**Tablespace** — bảng: STT | Tên tablespace | Data file | Size ban đầu | Tự mở rộng (Y/N) | Max size | Mô tả.

**Partition** — bảng: STT | Tên bảng | Tablespace | Có partition (Y/N) | Điều kiện partition | Mô tả.

### Phần 6 — Phụ lục

Bảng biểu tượng khuôn dạng dữ liệu:

| Ký hiệu | Ý nghĩa |
|---------|---------|
| # | Chữ số (0-9) |
| A | Chữ cái (a-z, A-Z) |
| 9 | Chữ số hoặc khoảng trắng |
| C | Ký tự bất kỳ |
| & | Chữ cái hoặc khoảng trắng |
| ? | Chữ cái tùy chọn |
| > | Chuyển thành chữ hoa |
| < | Chuyển thành chữ thường |

---

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| ERD / Data model logic | skill: create-uml | Nếu cần diagram chất lượng cao hơn Mermaid |
| Logical data model chưa có | skill: define-data-model | Làm trước TKCSSDL nếu chưa có model |
| Thiết kế chi tiết màn hình | skill: create-tkct | TKCSSDL là input cho mapping DB |
| Đặc tả API | skill: define-api-contract | Tham chiếu schema từ TKCSSDL |
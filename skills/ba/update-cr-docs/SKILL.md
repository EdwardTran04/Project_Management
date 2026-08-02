---
name: update-cr-docs
description: CẬP NHẬT LẠI tài liệu (PTYC/URD/SRS/tài liệu nghiệp vụ) sau khi Change Request được BA xác nhận. Bắt buộc ĐỌC LẠI TOÀN BỘ tài liệu gốc BA cung cấp, định vị chính xác từng mục bị ảnh hưởng, chỉ sửa đúng phần cần sửa, bump version, ghi changelog và xuất file hoàn chỉnh cùng định dạng đầu vào. Nhận input là tài liệu gốc + kết quả skill evaluate-cr (bảng so sánh Cũ–Mới, danh sách quy trình/chức năng bị thay đổi, bảng đánh giá 7 hạng mục). Dùng khi BA nói "cập nhật tài liệu theo CR", "áp CR vào PTYC/SRS", "sửa lại tài liệu sau thay đổi", "ra bản PTYC mới sau CR", hoặc vừa chạy xong evaluate-cr và xác nhận CR được duyệt. Skill này là bước THỰC THI sau evaluate-cr — không tự phân tích tác động.
---

# Cập nhật tài liệu theo CR đã duyệt

```
B1 Kiểm tra điều kiện → B2 Đọc tài liệu + Định vị → B3 Kế hoạch sửa (BA chốt)
→ B4 Áp thay đổi → B5 Version + Changelog → B6 Xuất file
```

## Quy tắc output — CÔ ĐỌNG

- Trong chat chỉ hiển thị: bảng định vị + kế hoạch sửa (B3) và changelog (B5). **Không paste toàn bộ nội dung tài liệu vào chat** — nội dung đầy đủ nằm trong file xuất ra.
- Văn xuôi tối đa 1–2 câu mỗi bước.

## B1 — Kiểm tra điều kiện đầu vào

Cần đủ 2 thứ, thiếu cái nào DỪNG hỏi cái đó:

1. **Tài liệu gốc** — file BA cung cấp (.docx / .md / .pdf). Nhiều file → liệt kê, xác nhận file nào cần cập nhật.
2. **Kết quả evaluate-cr đã được BA xác nhận** — tối thiểu: bảng so sánh Cũ–Mới + danh sách quy trình/chức năng bị thay đổi. Lấy từ chat hiện tại hoặc file đính kèm.

- Chưa có kết quả evaluate-cr → đề nghị chạy `skill: evaluate-cr` trước. Không tự phân tích thay thế.
- Còn dòng `⚠ CONFLICT` hoặc `[Cần xác nhận]` chưa chốt → liệt kê, hỏi BA chốt trước. Không áp thay đổi chưa chốt.

## B2 — Đọc tài liệu gốc & Định vị phần cần sửa

**Bắt buộc đọc lại TOÀN BỘ tài liệu gốc trước khi đề xuất bất kỳ chỉnh sửa nào** — không suy đoán cấu trúc theo mẫu PTYC mặc định, định vị bằng tiêu đề mục THỰC TẾ trong tài liệu.

Với từng dòng delta (quy trình/chức năng bị thay đổi), tìm trong tài liệu:
- Mục chứa quy trình đó: mô tả luồng, sơ đồ, bảng mô tả các bước/transition.
- Mục chứa danh sách chức năng liên quan.
- Mục liên đới dây chuyền: phạm vi/tổng quan, danh sách tác nhân, mô tả màn hình, báo cáo, mô hình dữ liệu, phân quyền, tiêu chuẩn nghiệm thu.

Quy tắc định vị:
- Mỗi vị trí ghi **nguyên văn số hiệu + tên mục** trong tài liệu (ví dụ "4.2.1.c Mô tả các bước trong quy trình nhập kho").
- Delta có mà tài liệu KHÔNG tìm thấy mục tương ứng → ghi `[Không tìm thấy — cần BA chỉ vị trí]`, không đoán bừa.
- Tài liệu có phần liên đới mà delta không nói rõ → đưa vào kế hoạch với nhãn `[Đề xuất]` để BA quyết.

## B3 — Kế hoạch sửa (BA chốt rồi mới sửa)

| # | Vị trí trong tài liệu (nguyên văn tên mục) | Nội dung hiện tại (tóm tắt) | Sửa thành | Nguồn |
|---|---|---|---|---|
| 1 | 4.2.1.b Luồng quy trình nhập kho | Tạo phiếu nhập kho → gửi duyệt → duyệt | Thêm giai đoạn tạo + duyệt PYC trước tạo phiếu | CR-01 |
| 2 | 4.2.1.c Mô tả các bước | Bảng transition 5 dòng | Chèn 3 bước PYC, sửa điều kiện bước tạo phiếu | CR-01 |
| 3 | 4.2.2.a Danh sách chức năng | 12 dòng hiện có | Thêm nhóm Quản lý PYC (8 dòng), sửa 1 dòng | CR-01 |

Hỏi BA: *"Kế hoạch sửa OK chưa? Bỏ mục [Đề xuất] nào không? Mục [Không tìm thấy] đặt ở đâu?"* → BA chốt rồi mới chạy B4.

## B4 — Áp thay đổi

- Sửa **đúng và chỉ đúng** các vị trí trong kế hoạch đã chốt; trước khi sửa mỗi mục, đối chiếu nội dung thực tế khớp với cột "Nội dung hiện tại" — lệch thì dừng hỏi BA, không sửa mò.
- Nội dung ngoài kế hoạch giữ nguyên 100%, không "tiện tay" sửa văn phong hay format.
- Giữ nguyên cấu trúc tài liệu gốc: bảng transition giữ đúng 7 cột, bảng chức năng giữ đúng 5 cột, đánh lại STT liền mạch (không mang cột Δ và nhãn [MỚI]/[SỬA] vào tài liệu).
- Tài liệu .docx → đọc `/mnt/skills/public/docx/SKILL.md` để chỉnh sửa giữ định dạng; .md → sửa trực tiếp; .pdf → xuất bản cập nhật sang .docx và báo BA.

## B5 — Version + Changelog

- Bump version: thay đổi thường → minor (1.0 → 1.1); chạm > ~30% tài liệu hoặc đổi phạm vi lớn → major (1.x → 2.0).
- Thêm/cập nhật bảng **Lịch sử thay đổi** đầu tài liệu: `Version | Ngày | Người sửa | Mô tả (dẫn mã CR-xx)`.
- KHÔNG ghi đè file gốc — xuất file mới: `[tên-gốc]_v[version]_CR-[mã].docx`.

## B6 — Xuất file

Xuất file hoàn chỉnh + tóm tắt changelog trong chat (≤ 5 dòng). Nhắc BA: bản gốc đã phê duyệt thì tài liệu mới cần trình ký lại theo quy trình.

## Bước tiếp theo

| Tình huống | Skill |
|---|---|
| Có CR mới phát sinh | evaluate-cr |
| Tài liệu đổi lớn, viết lại quy trình từ đầu | create-process |
| Cập nhật xong PTYC, cần thiết kế chi tiết | create-tkct |
# Template — Bảng so sánh yêu cầu Cũ–Mới

## Format

| # | Khía cạnh thay đổi | Yêu cầu cũ (As-Is) | Yêu cầu mới (To-Be) | Nguồn |
|---|---|---|---|---|

## Quy tắc điền

- Mỗi dòng = 1 điểm khác biệt cụ thể: trình tự bước, điều kiện thực hiện, đối tượng mới, tác nhân, trạng thái, dữ liệu, màn hình.
- **Chỉ liệt kê điểm KHÁC** — không liệt kê phần giữ nguyên.
- Khía cạnh hoàn toàn mới (baseline chưa có) → cột As-Is ghi "Chưa có".
- Khía cạnh bị bỏ → cột To-Be ghi "Loại bỏ".
- Cột Nguồn: mã CR (CR-01…) để truy vết khi nhiều CR.

## Ví dụ

| # | Khía cạnh thay đổi | Yêu cầu cũ (As-Is) | Yêu cầu mới (To-Be) | Nguồn |
|---|---|---|---|---|
| 1 | Điều kiện tạo phiếu nhập kho | Tạo trực tiếp | Bắt buộc có PYC nhập kho Đã duyệt | CR-01 |
| 2 | Đối tượng PYC nhập kho | Chưa có | Thêm mới: tạo, gửi duyệt, duyệt | CR-01 |
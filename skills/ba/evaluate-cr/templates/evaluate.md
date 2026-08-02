# Template — Bảng đánh giá thay đổi (7 hạng mục chuẩn)

## Format

| Hạng mục đánh giá | Mô tả chi tiết | Mức độ tác động |
|---|---|:---:|
| 1. Tác động đến Phạm vi (Scope) | | Thấp / Trung bình / Cao |
| 2. Tác động đến Tiến độ (Schedule) | | Thấp / Trung bình / Cao |
| 3. Tác động đến Nguồn lực (Effort/Resource) | | Thấp / Trung bình / Cao |
| 4. Tác động đến Ngân sách (Budget) | | Thấp / Trung bình / Cao |
| 5. Tác động Kỹ thuật (Technical) | | Thấp / Trung bình / Cao |
| 6. Tác động Vận hành (Operational) | | Thấp / Trung bình / Cao |
| 7. Đánh giá Rủi ro (Risk) | | Thấp / Trung bình / Cao |

Đủ 7 dòng, không bớt. Hạng mục không bị ảnh hưởng → mô tả ghi "Không tác động", mức độ Thấp.

## Nội dung cần đánh giá từng hạng mục

1. **Phạm vi**: tính năng thêm/sửa/xóa (đếm số dòng delta ở khối 2), tài liệu SRS/PTYC cần cập nhật, màn hình UI/UX, luồng nghiệp vụ liên quan.
2. **Tiến độ**: thời gian thêm cho dev/test/triển khai; có ảnh hưởng Go-live không.
3. **Nguồn lực**: khối lượng việc phát sinh theo bộ phận BA / Dev / QA / UI-UX / DevOps.
4. **Ngân sách**: chi phí phát sinh trực tiếp; chi phí công việc cũ bị loại bỏ (nếu có).
5. **Kỹ thuật**: kiến trúc, database (entity/trường/FK mới), bảo mật, performance, tương thích module khác.
6. **Vận hành**: thay đổi workflow người dùng, chính sách, đào tạo lại, cập nhật user manual.
7. **Rủi ro**: rủi ro nếu THỰC HIỆN (lỗi hệ thống, trễ deadline, ảnh hưởng dữ liệu vận hành) VÀ rủi ro nếu KHÔNG thực hiện (trải nghiệm kém, sai nghiệp vụ) — bắt buộc nêu cả 2 vế.

## Quy tắc điền

- Mô tả ≤ 30 từ/ô, telegraphic, dẫn chiếu khối 1–2 thay vì lặp lại (ví dụ "thêm 1 đối tượng, 8 tính năng [MỚI], 2 [SỬA] — xem khối 2").
- **Hạng mục 2, 3, 4: KHÔNG tự bịa số liệu** (man-days, chi phí, số ngày). Chỉ điền số khi BA cung cấp định mức; mặc định mô tả định tính đầu việc + `[Cần PM/Dev xác nhận]`. Mức độ tác động vẫn đánh được dựa trên khối lượng delta.
- Mức độ tham chiếu: Cao = đổi luồng chính / đối tượng mới / chạm dữ liệu vận hành / ảnh hưởng Go-live · Trung bình = thêm điều kiện, sửa chức năng-màn hình hiện có · Thấp = cosmetic, không tác động.

## Ví dụ (trích 3 dòng)

| Hạng mục đánh giá | Mô tả chi tiết | Mức độ tác động |
|---|---|:---:|
| 1. Phạm vi | Thêm đối tượng PYC nhập kho (8 tính năng [MỚI]), sửa 1 chức năng, 2 màn hình mới — xem khối 2 | Cao |
| 3. Nguồn lực | Phát sinh việc BA (spec PYC), Dev (entity + màn hình mới), QA (test luồng duyệt) `[Cần PM/Dev xác nhận]` | Trung bình |
| 7. Rủi ro | Thực hiện: phiếu nhập kho đang vận hành phải migrate tham chiếu PYC. Không thực hiện: nhập kho thiếu kiểm soát phê duyệt | Trung bình |
---
name: evaluate-cr
description: So sánh và ĐÁNH GIÁ TÁC ĐỘNG Change Request (CR) cho BA. Output gồm 3 khối — (1) bảng so sánh yêu cầu Cũ–Mới, (2) danh sách quy trình bị thay đổi + danh sách chức năng bị thay đổi (nêu rõ thay đổi gì), (3) bảng đánh giá thay đổi 7 hạng mục (Phạm vi, Tiến độ, Nguồn lực, Ngân sách, Kỹ thuật, Vận hành, Rủi ro). Dùng MỖI KHI có thay đổi yêu cầu/nghiệp vụ — BA nói "đánh giá CR", "có change request", "KH muốn thay đổi nghiệp vụ", "so sánh yêu cầu cũ – mới", "phân tích tác động", "impact analysis", "KH gửi phiếu CR". Trigger CẢ KHI không nhắc chữ "CR" — chỉ cần ngữ cảnh là yêu cầu đã chốt nay bị thay đổi. Skill này CHỈ đánh giá, KHÔNG cập nhật tài liệu — việc cập nhật do skill update-cr-docs đảm nhiệm sau khi BA xác nhận. Thay thế hoàn toàn các skill impact-analysis, snapshot-input, scope-check, intake-update.
---

# So sánh & Đánh giá tác động CR

```
B1 Thu thập → B2 Xuất 3 khối kết quả → B3 BA xác nhận → Gợi ý skill update-cr-docs
```

Skill này dừng ở đánh giá. **Không sửa tài liệu gốc.**

## Quy tắc output — CÔ ĐỌNG

- Output chủ yếu là **bảng**, theo đúng template trong `templates/`. Văn xuôi quanh bảng tối đa 1–2 câu mỗi CR; không mở bài, kết bài, không diễn giải lại bảng.
- Mỗi ô mô tả ≤ 15 từ, viết telegraphic (riêng bảng đánh giá 7 hạng mục cho phép ≤ 30 từ/ô vì cần đủ căn cứ).
- Không lặp thông tin giữa các bảng; tham chiếu bằng mã (CR-xx, STT).

## B1 — Thu thập

**Baseline** (ưu tiên): (1) file đính kèm PTYC/URD/SRS → đọc đúng phần transition + danh sách chức năng của nghiệp vụ bị thay đổi; (2) output create-process / extract-function-list có trong chat; (3) không có → DỪNG, yêu cầu BA cung cấp. **Cấm bịa baseline.**

**CR**: nhận mô tả miệng / email / phiếu CR / danh sách. Nhiều CR → gán CR-01, CR-02…, phân tích lần lượt. Mỗi CR chuẩn hóa: `CR-xx | người yêu cầu | ngày | nghiệp vụ | mô tả` — thiếu thì ghi `[Cần xác nhận]`.

## B2 — Xuất 3 khối kết quả (theo đúng thứ tự)

Trước khi xuất từng khối, đọc template tương ứng trong `templates/` và làm đúng format + quy tắc điền trong đó:

| Khối | Nội dung | Template |
|---|---|---|
| 1 | Bảng so sánh yêu cầu Cũ–Mới | `templates/bang-so-sanh.md` |
| 2 | Danh sách quy trình bị thay đổi (mức danh sách, mô tả rõ thay đổi gì) + danh sách chức năng bị thay đổi (5 cột) | `templates/bang-delta.md` |
| 3 | Bảng đánh giá thay đổi — 7 hạng mục chuẩn | `templates/bang-danh-gia.md` |

Quy tắc chung cho cả 3 khối:
- Suy luận không có căn cứ → gắn `[Cần xác nhận]`.
- CR mâu thuẫn baseline đã ký → gắn `⚠ CONFLICT`, nêu mục mâu thuẫn, khuyến nghị hỏi KH — không tự quyết.
- Khối 3, hạng mục Tiến độ / Nguồn lực / Ngân sách: chỉ điền số liệu khi BA cung cấp định mức; mặc định mô tả định tính đầu việc phát sinh + `[Cần PM/Dev xác nhận]`. **Không tự bịa man-days hay chi phí.**

## B3 — Xác nhận & chuyển tiếp

Sau khi xuất đủ 3 khối, hỏi BA đúng 1 câu:

> "BA xác nhận kết quả đánh giá CR này chưa? Nếu CR được duyệt, dùng **skill: update-cr-docs** để cập nhật lại toàn bộ tài liệu — gửi kèm tài liệu gốc khi gọi."

- BA yêu cầu chỉnh → sửa đúng khối bị góp ý, không xuất lại khối đã OK.
- BA xác nhận → kết thúc skill này, nhắc lại tên skill `update-cr-docs` và input nó cần (tài liệu gốc + kết quả đánh giá này).

## Bước tiếp theo

| Tình huống | Skill |
|---|---|
| CR được duyệt, cập nhật tài liệu | update-cr-docs |
| CR kéo rủi ro scope/timeline lớn | risk-assessment |
| Thay đổi > 30% baseline | create-process (vẽ lại từ đầu) |
# Kế Hoạch Năng Lực (Capacity Plan)

**Cập nhật:** 11/08/2026
**Nguồn dữ liệu:** [Import jira (1).xlsx](file:///c:/Users/quantm18/Desktop/New%20folder/Project_Management/pm/Import%20jira%20(1).xlsx)

> Trả lời câu hỏi: Ai? Làm gì? Khi nào? Đủ người chưa? — đối chiếu với WBS.

## Nhu cầu theo phase (ngày công)

| Phase | Khoảng thời gian | BA | Dev Flutter | Dev Backend | Dev Frontend | Tester | Tổng |
|-------|-------------------|----|-------------|-------------|--------------|--------|------|
| 2. Yêu cầu & Phân tích | 22/07–17/08 | 15 | 2 | 4 | 4 | 2 | 27 |
| 3. Thiết kế (TKCT, API) | 10/08–22/08 | 8 | 3 | 3 | 3 | 1 | 18 |
| 4. Phát triển | 18/08–12/09 | 3 | 18 | 20 | 15 | 4 | 60 |
| 5. Kiểm thử & UAT | 15/09–26/09 | 2 | 4 | 6 | 4 | 15 | 31 |
| 6. Chuyển giao | 28/09–30/09 | 3 | 1 | 2 | 1 | 2 | 9 |
| **Tổng** | | **31** | **28** | **35** | **27** | **24** | **145** |

## Năng lực cung cấp thực tế (Tính theo Man-Month - MM)

| Nhóm vai trò | Nhân sự thực tế | Tổng năng lực cung cấp (MM) | Đánh giá so với nhu cầu |
|---|---|---|---|
| **PM** | Nguyễn Tấn Đông | 0.000 MM (Điều phối chung) | Đủ |
| **BA** | Trần Minh Quân, Đào Đình Hà, Lê Minh Quang | 3.240 MM | Đủ |
| **Dev Flutter (Mobile)** | Bùi Văn Đoàn, Ninh Văn Hòa, Nguyễn Văn Trường | 4.860 MM | Đủ |
| **Dev Backend (BE)** | Ngô Doãn Hồng Hiệp, Nguyễn Thành Chiến, Hoàng Tuấn Anh, Đỗ Thế Nhuận | 4.720 MM | Đủ |
| **Dev Frontend (FE)** | Nguyễn Trung Quang, Lê Hoàng Đức, Nguyễn Huy Tùng, Nguyễn Phan Dương | 5.412 MM | Đủ |
| **Tester** | Nguyễn Duy | 1.240 MM | Đủ |
| **Tổng cộng** | **16 nhân sự** | **19.472 MM** | **Đảm bảo cung cấp** |

## Quy tắc

1. Capacity nhu cầu ≠ cung cấp → báo lệch ngay trong họp tuần, không để "đến lúc cần mới biết"
2. Nghỉ phép của thành viên phải báo PM ≥ 1 tuần trước → cập nhật bảng này
3. Overtime > 20%/tuần kéo dài 2 tuần liên tiếp = dấu hiệu quá tải → phải điều chỉnh scope hoặc thêm người (báo Sponsor)
# Kế Hoạch Chất Lượng (Quality Plan)

**Version:** 1.0.0 | Cập nhật: 11/08/2026

> Mục tiêu: Sản phẩm bàn giao đạt chất lượng, đúng spec và ít bug — thay vì "test rồi mới biết".

## 1. Định nghĩa chất lượng dự án này = %

- **Tuân thủ spec:** Màn hình/SRS khớp ≥ 95% điều khoản (đối chiếu qua traceability matrix của BA)
- **Mật độ bug:** Không còn bug Critical/High tại thời điểm nghiệm thu
- **API contract:** Không sai lệch field giữa doc và code (review 2 chiều)
- **SLA tác nghiệp:** Hệ thống đáp ứng SLA thời gian xử lý theo SRS

## 2. Definition of Done (DoD) — áp dụng mọi hạng mục

| # | Tiêu chí | Ai kiểm tra |
|---|----------|-------------|
| 1 | Tuân thủ spec SRS/CR đã chốt | BA |
| 2 | Code review hoàn tất (không để comment open) | Dev (peer) |
| 3 | Test case pass; không còn bug Critical/High | Tester |
| 4 | Tài liệu cập nhật (SRS/TKCT/API contract đồng bộ version) | BA + PM |
| 5 | Demo được PM/customer xác nhận | PM |

## 3. Hoạt động đảm bảo chất lượng (QA — làm trước)

| Hoạt động | Tần suất | Phụ trách | Đầu ra |
|-----------|----------|-----------|--------|
| Review SRS/Spec trước khi dev (spec review) | Trước mỗi phase | BA + Dev + Tester | Nhận xét thống nhất |
| Review API contract trước khi code | M4 | PM + Backend | Contract chốt |
| Code review theo quy trình | Mỗi PR | Dev | Comment → fix |
| Test plan trước khi test | Trước M6 | Tester (review bởi PM) | Test plan |
| Demo/refinement mỗi sprint | Cuối sprint | Cả team | Nhận xét |

## 4. Kiểm soát chất lượng (QC — làm để bắt lỗi)

- Tester viết & thực thi test case theo `test/` (rules của Tester)
- Test 3 lớp: Đơn vị (unit) → Tích hợp (API/SAP) → UAT (khách)
- Bug được quản lý theo mức độ (Critical/High/Medium/Low) — quy tắc đóng bug theo skill của Tester/QA

## 5. Tiêu chuẩn nghiệm thu & chuyển giao

| Điều kiện | Tiêu chí |
|-----------|----------|
| UAT pass | 100% kịch bản UAT do khách xác nhận |
| Không bug Critical/High | Chỉ còn Medium/Low đã có lịch xử lý |
| Tài liệu bàn giao đủ | SRS baseline, TKCT, API contract, user guide, test report |
| Đào tạo hoàn tất | Khách thao tác được luồng chính |

## 6. Cải tiến liên tục

- Retro sau mỗi sprint: ghi 2 điều làm tốt + 1 điều cần cải thiện → thành action item (theo dõi trong issue log hoặc sprint sau)
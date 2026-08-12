# Báo Cáo Trạng Thái Tuần #N (Weekly Status)

**Tuần:** DD/MM → DD/MM/2026 | **Người báo cáo:** PM | **Dự án:** AI-WMS

> Copy mẫu này thành `weekly_2026-08-11.md` mỗi tuần — chốt cuối ngày thứ 6.

---

## 1. Tổng quan (1 đoạn ngắn cho lãnh đạo)

[VD: Tuần này team hoàn thành rà soát & viết tiếp API contract cho màn Chi tiết task (mục 3.1–3.7). Block chính: chờ backend xác nhận endpoint.]

## 2. Tiến độ so với kế hoạch

| Hạng mục (WBS) | Kế hoạch | Thực tế | Tiến độ % | Ý kiến |
|----------------|----------|---------|-----------|--------|
| 4.1 Mobile (màn danh sách lệnh + chi tiết) | 100% | 60% (chi tiết task còn mock) | 60% | 🟠 |
| 4.2 Backend registration | 100% | 40% | 40% | 🟡 |
| 3.1 API contract | 100% | 90% | 90% | 🟢 Chờ chốt endpoint |

| Cột mốc | Ngày dự kiến | Dự báo | Lệch |
|---------|--------------|--------|------|
| M4 — Chốt API contract | 15/08 | Đúng hạn | 0 ngày |
| M5 — Mobile kết nối API thật | 29/08 | Đúng hạn (rủi ro nếu backend trễ) | 0 ngày |

## 3. Làm được tuần này

- [x] Rà soát source mobile module task, thống kê API màn Chi tiết task
- [x] Viết tiếp `dev/api-specs/api-contract_inbound.md` (Màn hình 3: Chi tiết task)
- [ ] ...

## 4. Kế hoạch tuần tới

- [ ] Chốt endpoint với backend (ISS-01 — deadline 15/08)
- [ ] ...

## 5. Rủi ro (trích từ `risks/risk_register.md` — chỉ mục ≥ 6 điểm hoặc thay đổi)

| ID | Rủi ro | Điểm | Thay đổi vs tuần trước | Hành động |
|----|--------|------|------------------------|-----------|
| R-03 | Backend chưa chốt API task detail | 6 | Mới | Chốt contract, escalate PM backend |

## 6. Vấn đề & Blockers (trích `issues/issue_log.md`)

| ID | Vấn đề | Mức độ | Deadline | Cần ai hỗ trợ |
|----|--------|--------|----------|---------------|
| ISS-01 | Chi tiết task dùng mock, chưa có API | Cao | 15/08 | Backend |

## 7. Chất lượng & kiểm thử (ngắn)

- Bug mới tuần này: [X Critical / Y High / Z TB/Low] (chỉ số từ `test/`)
- Test case thực thi: [a/b]

## 8. Quyết định tuần này (trích `decisions/decision_log.md`)

| ID | Quyết định | Ảnh hưởng |
|----|-----------|-----------|
| DEC-002 | Prefix API chuẩn `/api/registration/...` | Code chuẩn hóa base URL |

## 9. Cần hỗ trợ từ Sponsor / Khách (nếu có)

- [ ] ...

## 10. Chữ ký / phê duyệt

| Vai trò | Ngày đọc | Nhận xét |
|---------|----------|----------|
| Sponsor | | |
| PM | | |
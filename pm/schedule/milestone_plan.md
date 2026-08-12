# Kế Hoạch Cột Mốc & Timeline (Milestone Plan)

**Version:** 1.0.0 | Dự án: AI-WMS | Cập nhật lần cuối: 11/08/2026

## Timeline tổng thể

```text
2026-07               2026-08               2026-09               Q4/2026
┌─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬──────────┐
│ Khởi    │ SRS     │ SRS     │ Phát    │ Mobile   │ Test    │ Nghiệm   │
│ động    │ Xuất    │ Nhập    │ triển   │ + API    │ tích    │ thu &    │
│ +PTYC   │ kho     │ kho     │ Backend │ chi tiết │ hợp SAP │ chuyển   │
│ M1 ✓    │ M2 ✓    │ M3 ✓    │ M4      │ M5       │ M6      │ M7       │
└─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴──────────┘
```

## Bảng cột mốc

| ID | Cột mốc | Ngày dự kiến | Ngày thực tế | Trạng thái | Deliverable | Ghi chú |
|----|---------|--------------|--------------|------------|-------------|---------|
| M1 | Khởi động dự án & chốt phạm vi | 22/07/2026 | | ✅ Hoàn thành | MOM kickoff, scope chốt | |
| M2 | Baseline SRS Xuất kho | 14/07/2026 | 14/07/2026 | ✅ Hoàn thành | `SRS_XuatKho` baseline | |
| M3 | Baseline SRS Nhập kho | 17/07/2026 | 17/07/2026 | ✅ Hoàn thành | `SRS_NhapKho` baseline | |
| M4 | Chốt API contract inbound + chi tiết task | 15/08/2026 | | ⏳ Đang làm | `dev/api-specs/api-contract_inbound.md` | Cần backend xác nhận endpoint |
| M5 | Mobile: kết nối API thật cho màn Chi tiết task | 29/08/2026 | | ⏳ Đang làm | Code kết nối (hiện đang dùng mock) | |
| M6 | Test tích hợp SAP + UAT | 19/09/2026 | | ⬜ Chưa bắt đầu | Test report, biên bản UAT | |
| M7 | Nghiệm thu & bàn giao | 30/09/2026 | | ⬜ Chưa bắt đầu | Biên bản nghiệm thu | |

## Chu kỳ họp liên quan đến tiến độ

| Loại họp | Tần suất | Tham dự | Ghi chú |
|----------|----------|---------|---------|
| Daily standup | Hàng ngày (15') | Dev + BA + Tester + PM | Xử lý blocker nhanh |
| Sprint/phase review | Mỗi 2 tuần | Cả team | Demo kết quả |
| Review cột mốc | Tại mỗi M1–M7 | PM + Sponsor | Dùng file `reports/milestone_review_template.md` |

## Chậm tiến độ — Quy tắc

- Chậm > 3 ngày so với milestone → ghi vào `issues/issue_log.md` + báo tức thời (không chờ báo cáo tuần)
- Chậm > 7 ngày → cập nhật milestone plan này + thông báo Sponsor
- Không tự kéo dài deadline; mọi thay đổi deadline phải có quyết định ghi tại `decisions/decision_log.md`
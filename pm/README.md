# 📋 PM — Project Manager Workspace

> **Vai trò:** Điều phối, giám sát và đảm bảo dự án **AI-WMS (Kho Thông Minh)** hoàn thành đúng phạm vi, tiến độ, ngân sách và chất lượng.
> **Quyền quản lý:** Toàn bộ vòng đời dự án — phê duyệt baseline tài liệu, triage CR, quản lý rủi ro/vấn đề, báo cáo tiến độ cho lãnh đạo & khách hàng.

---

## 🎯 PM quản lý 10 lĩnh vực (theo PMBOK)

| # | Lĩnh vực | File quản lý | Mô tả |
|---|----------|--------------|-------|
| 1 | **Phạm vi (Scope)** | `project/scope_management.md` | Kiểm soát phạm vi qua CR, chống phạm vi trôi (scope creep) |
| 2 | **Tiến độ (Schedule)** | `schedule/wbs.md`, `schedule/milestone_plan.md` | WBS, cột mốc, kế hoạch sprint/phase |
| 3 | **Chi phí (Cost)** | `budget/budget_plan.md`, `budget/cost_tracking.md` | Kế hoạch ngân sách & theo dõi thực chi |
| 4 | **Chất lượng (Quality)** | `quality/quality_plan.md` | Tiêu chuẩn chất lượng, Definition of Done, quy trình review |
| 5 | **Nguồn lực (Resource)** | `resources/team_roster.md`, `resources/capacity_plan.md` | Danh sách team, phân bổ & năng lực theo phase |
| 6 | **Truyền thông (Communication)** | Báo cáo trong `reports/` + tham chiếu `ba/stakeholders/communication_plan.md` | Lịch họp, báo cáo tuần/cột mốc, kênh trao đổi |
| 7 | **Rủi ro (Risk)** | `risks/risk_register.md` | Nhận diện, đánh giá, ứng phó & theo dõi rủi ro |
| 8 | **Vấn đề (Issue)** | `issues/issue_log.md` | Nhật ký vấn đề phát sinh & trạng thái xử lý |
| 9 | **Mua sắm/Hợp đồng (Procurement)** | `raw/contracts/` (file gốc) + `budget/` | Hợp đồng, SOW, phụ lục từ khách hàng |
| 10 | **Stakeholder (Quan hệ đối tác)** | Tham chiếu `ba/stakeholders/` | Register, RACI, kỳ vọng từng bên |

---

## 📁 Cấu trúc thư mục

```text
pm/
├── README.md                     ← File này — bảng điều khiển của PM
├── project/                      ← Hồ sơ dự án
│   ├── project_charter.md        ← Điều lệ dự án (charter) — phê duyệt khi khởi động
│   ├── scope_management.md       ← Tuyên bố phạm vi & cơ chế kiểm soát
│   └── version_log.md            ← Nhật ký phiên bản tài liệu PM
├── schedule/                     ← Kế hoạch tiến độ
│   ├── wbs.md                    ← Cấu trúc phân rã công việc
│   ├── milestone_plan.md         ← Cột mốc & timeline các giai đoạn
│   ├── product_backlog.md        ← Product Backlog & User Story (Agile/Scrum)
│   └── sprint_plan_template.md   ← Template kế hoạch từng sprint/phase
├── budget/                       ← Kế hoạch chi phí
│   ├── budget_plan.md            ← Ngân sách dự kiến theo hạng mục
│   └── cost_tracking.md          ← Theo dõi thực chi vs dự kiến
├── risks/                        ← Rủi ro
│   └── risk_register.md          ← Đăng ký rủi ro (đánh giá, ứng phó)
├── issues/                       ← Vấn đề phát sinh
│   └── issue_log.md              ← Nhật ký vấn đề
├── resources/                    ← Nguồn lực
│   ├── team_roster.md            ← Danh sách nhân sự & vai trò
│   └── capacity_plan.md          ← Kế hoạch năng lực theo phase
├── decisions/                    ← Quyết định
│   └── decision_log.md           ← Nhật ký quyết định (cả bị thay đổi sau này)
├── quality/                      ← Chất lượng
│   └── quality_plan.md           ← Kế hoạch chất lượng & Definition of Done
└── reports/                      ← Báo cáo
    ├── weekly_status_template.md ← Báo cáo trạng thái tuần
    └── milestone_review_template.md ← Báo cáo review cột mốc
```

---

## 🔄 Quy tắc sử dụng (bắt buộc)

1. **Vòng đời tài liệu:** `draft/ → new/ → baseline/ → old/` — PM là người **duy nhất phê duyệt promote** tài liệu lên baseline. Chi tiết xem skill `pm-doc-version-control`.
2. **Change Request:** Mọi thay đổi phạm vi phải qua CR (trong `ba/documents/cr/`), PM triage → duyệt/từ chối. Không nhận yêu cầu "chui" ngoài CR.
3. **Log mọi thứ:** Rủi ro, vấn đề, quyết định — ghi ngay, không để "trong đầu". Ngày nào xảy ra ghi ngày đó.
4. **Cập nhật đúng hạn:** Báo cáo tuần chốt **cuối ngày thứ 6**; risk/issue update **trong 24h** khi phát hiện.
5. **Tham chiếu chéo:** Không lặp lại dữ liệu của BA — khi cần xem yêu cầu/giải pháp chi tiết, trỏ sang `ba/` (SSoT).

## 🔗 Liên kết với các nhóm khác

| Nhóm | Nội dung | PM dùng để làm gì |
|------|----------|-------------------|
| `ba/` | Yêu cầu, SRS, CR, MOM | Đối chiếu phạm vi, phê duyệt baseline, theo dõi CR |
| `dev/` | TKCT, API specs, code | Kiểm tra tiến độ kỹ thuật, chốt API contract |
| `test/` | Test plan, test cases, bugs | Đánh giá chất lượng, chốt điểm phát hành |
| `skills/pm/` | Skill PM (pm-doc-version-control...) | Tự động hóa quản lý phiên bản, CR, MOM |
| `deliverables/` | File .docx/.pdf gửi khách | Quản lý bàn giao & nghiệm thu |

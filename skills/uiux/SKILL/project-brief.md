# Project Brief — `<Tên dự án>`

> File này là **điểm vào duy nhất** cho AI + Skill UI/UX hiểu dự án.
> Lưu vào folder `Start/` cùng cấp với folder `SRS/`.
> Skill `uiux-design-workflow` sẽ đọc file này đầu tiên ở **Bước 1**.
>
> **Cách dùng**: Điền tất cả mục có dấu `<...>`. Phần nào chưa quyết → ghi rõ `TBD` thay vì để trống, để AI hỏi lại thay vì giả định.

---

## 1. Thông tin chung

| Trường | Giá trị |
|---|---|
| Tên dự án | `<Tên dự án>` |
| Mã / Codename | `<VD: KTT-2026, internal-portal-v2>` |
| Phiên bản | `<VD: v1.0 — MVP>` |
| Ngày bắt đầu | `<YYYY-MM-DD>` |
| Deadline thiết kế | `<YYYY-MM-DD>` |
| Design Lead | `<Tên — email>` |
| Stakeholder chính | `<PM / PO — tên>` |
| Ngôn ngữ UI | `<Tiếng Việt / English / Đa ngôn ngữ>` |

---

## 2. Mô tả dự án

### 2.1. Bối cảnh & vấn đề cần giải quyết
<!-- 3–5 câu. Sản phẩm này tồn tại để giải quyết vấn đề gì? Ai đang đau? -->

`<Ví dụ: Hệ thống KTT hiện tại quản lý tài liệu nội bộ qua file Excel + email, gây mất kiểm soát phiên bản, khó tìm kiếm, không có phân quyền. Dự án này thay thế bằng portal tập trung với search, version control, và workflow phê duyệt.>`

### 2.2. Mục tiêu sản phẩm
<!-- Bullet ngắn — SMART nếu được. Đây là kim chỉ nam cho AI khi phải đánh đổi giữa các option thiết kế. -->

- `<VD: Giảm thời gian tìm tài liệu từ 5 phút → dưới 30 giây>`
- `<VD: 100% tài liệu có audit log>`
- `<VD: Người dùng phổ thông có thể tự upload và tag tài liệu mà không cần training>`

### 2.3. Nghiệp vụ chính (Business domain)
<!-- AI cần hiểu domain để đặt tên & layout đúng ngữ cảnh. Giải thích thuật ngữ riêng. -->

- **Domain**: `<VD: Quản lý tri thức nội bộ / E-commerce / Banking / HR>`
- **Thuật ngữ riêng cần biết**:
  - `<Thuật ngữ 1>`: `<giải thích ngắn>`
  - `<Thuật ngữ 2>`: `<giải thích ngắn>`
- **Quy trình nghiệp vụ chủ đạo**:
  1. `<Bước 1: ai làm gì>`
  2. `<Bước 2: ai làm gì>`
  3. `<Bước 3: ai làm gì>`

### 2.4. Tính năng lớn (Epic-level features)
<!-- Liệt kê các nhóm tính năng. Mỗi tính năng có ưu tiên & ghi chú scope cho phiên bản hiện tại. -->

| # | Tính năng | Mô tả ngắn | Phạm vi MVP | Ưu tiên |
|---|---|---|---|---|
| 1 | `<VD: Auth & phân quyền>` | `<Đăng nhập SSO, RBAC 4 role>` | ✅ In | High |
| 2 | `<VD: Quản lý tài liệu>` | `<Upload, tag, version, search>` | ✅ In | High |
| 3 | `<VD: Workflow phê duyệt>` | `<Multi-step approval, comment>` | ⚠️ Phase 2 | Medium |
| 4 | `<VD: Báo cáo>` | `<Dashboard usage stats>` | ⏳ Backlog | Low |

---

## 3. Đối tượng người dùng

### 3.1. Persona chính
| Tên persona | Vai trò | Bối cảnh sử dụng | Mức độ tech-savvy |
|---|---|---|---|
| `<VD: Chuyên viên>` | `<End user upload/tra cứu tài liệu>` | `<Dùng hằng ngày, máy desktop văn phòng>` | `<Trung bình>` |
| `<VD: Trưởng phòng>` | `<Phê duyệt, theo dõi>` | `<Vài lần/ngày, đôi khi trên mobile>` | `<Thấp>` |
| `<VD: Admin>` | `<Quản trị user/quyền>` | `<Tuần 1–2 lần>` | `<Cao>` |

### 3.2. Ngữ cảnh sử dụng đặc biệt
- Thiết bị chính: `<VD: Desktop nội bộ + Mobile khi đi công tác>`
- Môi trường: `<VD: Trong mạng nội bộ, kết nối ổn định / Offline-first / ...>`
- Trợ năng: `<VD: Cần WCAG 2.2 AA cho user khiếm thị>`

---

## 4. Design System (nguồn)

> AI sẽ đọc Figma Design System để hiểu component, token, common patterns.
> Skill sẽ trích xuất ra folder `design-system/` ở Bước 2.

### 4.1. Link Figma Design System
```
URL: <https://www.figma.com/design/XXXXXXXXXX/Design-System>
File key: <XXXXXXXXXX>
```

### 4.2. Quyền truy cập MCP
- [ ] AI đã được mời vào file với quyền **View** (tối thiểu để đọc)
- [ ] File nằm trong team/workspace đã connect MCP Figma
- [ ] Đã test MCP đọc được variables / components

### 4.3. Phạm vi Design System
Design System này có:
- [ ] Color tokens (light + dark mode? `<có/không>`)
- [ ] Typography styles
- [ ] Spacing scale
- [ ] Grid & breakpoints
- [ ] Elevation / shadow
- [ ] Border radius
- [ ] Icons library
- [ ] Components atomic: `<liệt kê những cái quan trọng — Button, Input, ...>`
- [ ] Components molecules: `<Card, Dropdown, Tabs, ...>`
- [ ] Components organisms: `<Modal, Table, Navbar, ...>`
- [ ] Patterns: `<Dashboard, Auth flow, Empty state, ...>`

### 4.4. Lưu ý đặc thù Design System
<!-- Chỉ điền nếu có. Bỏ trống nếu DS sạch và rõ ràng. -->

- Component đang là "primary version": `<VD: Button v2 — bỏ qua Button v1>`
- Component **đã deprecated, không dùng**: `<...>`
- Phần **chưa hoàn thiện, cần hỏi trước khi dùng**: `<...>`
- Quy tắc đặt tên đặc thù: `<VD: tất cả variant dùng property "size" với giá trị sm/md/lg>`

---

## 5. Figma đích (output)

> File AI sẽ **thiết kế các màn hình mới VÀO**. Khác với Design System (chỉ đọc).

### 5.1. Link Figma file đích
```
URL: <https://www.figma.com/design/YYYYYYYYYY/Design-<Tên dự án>>
File key: <YYYYYYYYYY>
```

### 5.2. Quyền truy cập MCP
- [ ] AI đã được mời vào file với quyền **Edit** (bắt buộc cho MCP write)
- [ ] File nằm trong team/workspace đã connect MCP Figma
- [ ] File này đã link/import library từ Design System ở mục 4

### 5.3. Cấu trúc page trong file
| Page | Mục đích | Ai tạo |
|---|---|---|
| `🧪 MCP Connection Test` | Frame test button ở Bước 1 | AI tạo |
| `📱 Screens` | Các màn hình chính | AI tạo từng frame |
| `🎨 States` | State biến thể nếu tách riêng | AI tạo khi cần |
| `<Khác — VD: 🧩 Flows>` | `<sơ đồ user flow, navigation>` | `<...>` |

### 5.4. Quy ước đặt tên frame (bắt buộc — Skill dựa vào để tạo spec)
- Frame màn hình: `Screen/<Tên màn>` — VD: `Screen/Login`, `Screen/User Profile`
- Section: `Section/<Tên>`
- State biến thể: `<Tên màn> — <State>` — VD: `Login — Error`
- Tên frame **không dùng dấu tiếng Việt** (skill auto-convert sang kebab-case khi tạo spec)

---

## 6. Ràng buộc thiết kế

### 6.1. Platform mục tiêu
- [ ] Desktop web — breakpoint chính: `<1440px>`
- [ ] Tablet — breakpoint: `<768px>`
- [ ] Mobile web — breakpoint: `<375px>`
- [ ] Mobile app iOS / Android
- [ ] Khác: `<...>`

### 6.2. Brand & visual rules
| Trường | Giá trị |
|---|---|
| Primary color | `<VD: token primary-500 — bind variable, không hardcode>` |
| Typography family | `<VD: Inter / SF Pro / Roboto>` |
| Border radius mặc định | `<VD: 8px — token radius-md>` |
| Shadow style | `<VD: elevation-1 cho card, elevation-3 cho modal>` |
| Tone of voice | `<VD: trung tính, lịch sự, ngắn gọn>` |

### 6.3. Accessibility
- Tiêu chuẩn: `<VD: WCAG 2.2 AA>`
- Contrast tối thiểu: `<VD: 4.5:1 cho text thường, 3:1 cho text lớn>`
- Keyboard navigation: `<bắt buộc / nice-to-have>`
- Screen reader: `<có hỗ trợ / không yêu cầu>`

### 6.4. Localization & format
- Ngôn ngữ chính: `<VD: Tiếng Việt>`
- Cần hỗ trợ ngôn ngữ khác: `<có / không — nếu có, layout cần tính text expansion>`
- Format ngày: `<DD/MM/YYYY>`
- Format số: `<1.000.000,00 hoặc 1,000,000.00>`
- Format tiền: `<VND / USD / ...>`

---

## 7. Quy định bổ sung cho AI

### 7.1. Phải làm
- Luôn reuse component Design System trước khi nghĩ đến vẽ mới
- Bind variable Figma cho mọi token (color/spacing/typo) — không hardcode
- Dùng auto-layout cho mọi container
- Đặt tên layer theo quy ước ở mục 5.4
- Báo cáo tiến độ sau mỗi màn hình thiết kế

### 7.2. Không được làm
- Không vẽ lại component đã có trong Design System
- Không tự sáng tạo color/typo ngoài token đã định nghĩa
- Không bỏ qua Bước 5 (confirm gate) để chạy thẳng Bước 6
- Không bịa thông tin nghiệp vụ nếu SRS thiếu — phải hỏi

### 7.3. Khi nào dừng để hỏi
- Design System thiếu component cần thiết
- SRS có mâu thuẫn hoặc thiếu thông tin chặn (🚫)
- Phát hiện edge case không có trong tài liệu
- Phải đánh đổi giữa 2 phương án mà cả 2 đều hợp lý

---

## 8. Tham chiếu

### 8.1. Tài liệu liên quan
| Tài liệu | Vị trí | Mục đích |
|---|---|---|
| SRS | `SRS/*.{md,docx,pdf}` | Yêu cầu chức năng từng màn |
| User research | `<đường dẫn / link>` | Hiểu user behavior |
| Competitor analysis | `<đường dẫn / link>` | Benchmark |
| Brand guideline | `<đường dẫn / link>` | Tone, logo usage |

### 8.2. Stakeholder & liên hệ
- **PM**: `<tên — email — Slack>`
- **Tech Lead**: `<tên — email — Slack>`
- **Design reviewer**: `<tên — email>`

### 8.3. Lịch sử thay đổi file này
| Ngày | Người sửa | Thay đổi |
|---|---|---|
| `<YYYY-MM-DD>` | `<tên>` | Khởi tạo |

---

## 9. Checklist trước khi giao cho AI

Trước khi bảo AI bắt đầu, kiểm tra:

- [ ] Mục 1–5 đã điền đầy đủ (không còn `<...>` placeholder)
- [ ] 2 link Figma đã test mở được bằng browser
- [ ] MCP Figma đã connect và AI có quyền Edit trên file đích
- [ ] Folder `SRS/` đã có ít nhất 1 file mô tả màn hình
- [ ] Đã quyết Platform mục tiêu (6.1) — không để "tất cả" nếu thực tế chỉ ưu tiên 1
- [ ] Đã chốt Primary color + Typography (6.2) — nếu chưa, đánh dấu TBD rõ ràng

---

> **Prompt gợi ý để khởi động AI sau khi điền xong file này:**
>
> *"Đọc `Start/project-brief.md` và áp dụng skill `uiux-design-workflow`. Bắt đầu từ Bước 1: liệt kê file trong `Start/`, trích link Figma, test MCP bằng button, rồi báo cáo trước khi sang Bước 2."*

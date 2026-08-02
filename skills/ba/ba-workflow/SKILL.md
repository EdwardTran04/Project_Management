---
name: ba-workflow
description: Hiển thị toàn bộ quy trình BA và gợi ý skill phù hợp với giai đoạn hiện tại. Gọi khi bắt đầu dự án, không biết làm gì tiếp theo, hoặc muốn kiểm tra mình đang ở đâu trong workflow.
---

Hỏi người dùng để xác định context:
1. Dự án đang ở giai đoạn nào? (mới bắt đầu / đang phân tích / đang viết tài liệu / sắp bàn giao)
2. Đã có những output nào rồi? (ví dụ: đã có PTYC, đã có Figma, đã có User Story...)
3. Bước tiếp theo đang bị vướng ở đâu?

Sau khi nhận context, hiển thị workflow map và đánh dấu giai đoạn hiện tại, rồi gợi ý skill phù hợp nhất.

---

## Workflow BA — Toàn bộ quy trình

---

### Giai đoạn 1 — Tiếp nhận & Hiểu domain

Mục tiêu: Nắm bài toán, hiểu nghiệp vụ, xác định phạm vi.

| Skill | Khi nào dùng |
|-------|-------------|
| ba-domain-onboarding | Bắt đầu dự án mới, cần hiểu nhanh domain |
| as-is-to-be | Có quy trình hiện tại cần phân tích cải tiến |

---

### Giai đoạn 2 — Phân tích yêu cầu

Mục tiêu: Rút trích và cấu trúc hóa requirements từ nhiều nguồn.

| Skill | Khi nào dùng |
|-------|-------------|
| analyze-figma | Có Figma design, cần rút trích requirements |
| create-use-case | Cần mô tả hệ thống làm gì cho từng actor |
| create-user-story | Cần viết yêu cầu dưới góc nhìn người dùng |
| create-feature-spec | Cần đặc tả chi tiết một tính năng cụ thể |
| define-nfr | Cần xác định yêu cầu phi chức năng |

---

### Giai đoạn 3 — Thiết kế tài liệu

Mục tiêu: Tạo tài liệu đặc tả theo chuẩn VTS.

| Skill | Khi nào dùng |
|-------|-------------|
| create-ptyc | Viết tài liệu Phân tích yêu cầu người dùng |
| create-tkct | Viết tài liệu Thiết kế chi tiết |
| create-screen-desc | Mô tả chi tiết từng màn hình |
| create-tkcssdl | Thiết kế cơ sở dữ liệu |
| define-data-model | Định nghĩa model dữ liệu |
| define-api-contract | Đặc tả API giữa các thành phần |

---

### Giai đoạn 4 — Mô hình hóa

Mục tiêu: Diễn đạt yêu cầu bằng diagram để Dev và Tester dễ hiểu.

| Skill | Khi nào dùng |
|-------|-------------|
| create-activity-diagram | Vẽ luồng nghiệp vụ / quy trình |
| create-sequence-diagram | Vẽ tương tác giữa các thành phần |
| create-uml | Vẽ class diagram, component diagram |
| create-wireframe | Phác thảo giao diện khi chưa có Figma |

---

### Giai đoạn 5 — Kiểm thử & Bàn giao

Mục tiêu: Đảm bảo coverage, traceability, sẵn sàng bàn giao.

| Skill | Khi nào dùng |
|-------|-------------|
| create-business-testcase | Viết test case nghiệp vụ |
| create-traceability-matrix | Kiểm tra requirements có được cover đầy đủ không |
| create-tktt | Tổng hợp tài liệu thiết kế tổng thể |
| doc-status | Kiểm tra trạng thái toàn bộ tài liệu trong dự án |

---

## Gợi ý theo tình huống thường gặp

| Tình huống | Skill nên dùng đầu tiên |
|-----------|------------------------|
| Mới nhận dự án, chưa có gì | ba-domain-onboarding |
| KH gửi Figma, chưa có SRS | analyze-figma → create-feature-spec |
| Có MOM khảo sát, cần viết PTYC | create-ptyc |
| Đã có PTYC, cần viết TKCT | create-tkct → create-screen-desc |
| Cần mô tả quy trình cho Dev | create-activity-diagram |
| Cần đặc tả API cho Dev | define-api-contract |
| Sắp bàn giao, cần check coverage | create-traceability-matrix → doc-status |
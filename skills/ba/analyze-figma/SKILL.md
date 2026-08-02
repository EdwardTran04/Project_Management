---
name: analyze-figma
description: "Đọc Figma design để rút trích requirements, business rules, screen flows và Acceptance Criteria — chuyển design intent thành tài liệu BA có thể dùng trong SRS và User Stories."
---

Phân tích Figma design để rút trích requirements.

Hỏi người dùng:
1. Link Figma (page hoặc frame cụ thể)
2. Tên tính năng / màn hình cần phân tích
3. Context: đây là màn hình mới hay redesign?
4. Đã có User Story hoặc REQ-ID nào liên quan chưa?

Dùng MCP tool `figma` để đọc design. Phân tích theo các khía cạnh:

**Screens & Navigation:**
- Liệt kê tất cả screen/page trong scope
- Xác định flow: màn hình nào dẫn đến màn hình nào
- Entry points và exit points

**UI Components & Business Rules ẩn:**
- Form fields: tên, kiểu dữ liệu, bắt buộc/tùy chọn, validation hint
- Buttons/actions: trigger gì, điều kiện enable/disable
- State variants (empty, loading, error, success): business logic nào điều khiển
- Conditional UI: hiển thị/ẩn theo điều kiện gì

**Data Requirements:**
- Dữ liệu hiển thị trên màn hình: lấy từ đâu, format nào
- Dữ liệu nhập vào: validation rules, constraints
- Danh sách/bảng: pagination, sort, filter?

**Edge Cases từ Design:**
- Empty state: design có vẽ không? Hiển thị gì?
- Error state: design có vẽ error message không?
- Permission-based UI: có variant nào cho role khác nhau không?

Tạo Figma Analysis Report theo template sau:

# Figma Analysis — [Tên tính năng]

**Link Figma:** [URL]
**Version Design:** [lấy từ Figma nếu có]
**Ngày phân tích:** dd/mm/yyyy
**Liên quan đến:** [REQ-XXX / US-XXX nếu có]

## 1. Danh sách màn hình

| # | Tên màn hình | Frame ID (Figma) | Mô tả ngắn |
|---|-------------|-----------------|-----------|
| 1 | | | |

## 2. Navigation Flow

[Mô tả dạng text. Nếu flow phức tạp, dùng skill: create-activity-diagram]

- [Màn hình A] → [Màn hình B]: khi [hành động gì]

## 3. Business Rules rút trích từ Design

| ID | Màn hình | Mô tả rule | Nguồn (component/state) |
|----|---------|-----------|------------------------|
| BR-D001 | | | |

## 4. Requirements bổ sung từ Design

*Requirements implied bởi design nhưng chưa có trong BRD/SRS:*

| REQ-D | Mô tả | Màn hình | Cần confirm KH? |
|-------|-------|---------|----------------|
| | | | |

## 5. Acceptance Criteria gợi ý (theo màn hình)

### [Tên màn hình]
- **Given** [context] **When** [action] **Then** [expected result]

## 6. Gaps cần làm rõ với Designer / KH

- [ ] [component X ở state Y thì hiển thị gì?]
- [ ] [Empty state của danh sách X chưa được design]

## 7. Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Mô tả chi tiết màn hình | skill: create-screen-desc | Cho từng màn hình trong scope |
| Navigation flow phức tạp | skill: create-activity-diagram | Nếu mục 2 cần diagram |
| User Story + AC | skill: create-user-story | Bổ sung AC từ mục 5 |
| Feature Spec | skill: create-feature-spec | Nếu cần đặc tả đầy đủ |
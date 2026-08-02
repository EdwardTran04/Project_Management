# Output Format Guidance

Normalize testcase wording and structure before final output.

## Table Structure (Mandatory in CSV Export)
The detailed testcase table is exported to a CSV file (`testcases_{module_name}.csv`) and is NOT displayed directly inside the deliverable markdown file. The CSV file must contain the following columns:

| TC ID | Common ID | Tiêu đề | Steps | Expected Result | Priority | Section |
|---|---|---|---|---|---|---|

- **TC ID**: Sequential ID for the module (e.g., TC_CLW_001).
- **Common ID**: Original ID from common.xlsx (if reused). Use blank or "–" for business-specific TCs.
- **Tiêu đề**: Concise title in Vietnamese.
- **Steps**: Numbered sequential actions in Vietnamese.
- **Expected Result**: Direct verifiable outcome in Vietnamese.
- **Priority**: Use strictly: **Critical**, **High**, **Medium**, **Low**.
- **Section**: Group name for the testcases (e.g., UI, Validation, CRUD, Workflow, Permission, etc.).

## Priority Labels
Replace old P0/P1/P2 labels with:
- **Critical**: Business-critical, security, blocking release.
- **High**: Major features, common flows.
- **Medium**: Edge cases, minor features.
- **Low**: Cosmetic, minor UI fixes.

## Encoding & Localization
- **Standard**: Everything must be in **Vietnamese**.
- **Encoding**: Must save as **UTF-8** (with or without BOM) to ensure correct character display.
- **Wording**: Use standard VTIT terminology (e.g., "Lưu" instead of "Ghi lại", "Hủy" instead of "Cancel").

## Title pattern
Use concise, testable titles in Vietnamese:
- Kiểm tra [Actor] có thể tạo mới bản ghi với dữ liệu hợp lệ
- Kiểm tra hệ thống chặn lưu khi để trống trường bắt buộc
- Kiểm tra [Role] có thể thực hiện [Action] khi bản ghi ở trạng thái [Status]
- Kiểm tra tìm kiếm không ra kết quả khi nhập từ khóa không tồn tại

## Steps
- Keep steps sequential and observable (1. ..., 2. ...).
- Use local terminology: truy cập, nhập, chọn, click, xác nhận, làm mới.
- Adapt generic placeholders (e.g., "trường A") to actual SRS names.

## Expected result
Make it directly verifiable:
- Hệ thống lưu bản ghi mới thành công và hiển thị toast thông báo thành công.
- Hệ thống highlight trường [Tên trường] và hiển thị thông báo "Trường này là bắt buộc".
- Nút Duyệt bị ẩn đối với người dùng chỉ có quyền Xem.
- File kết xuất chứa đúng dữ liệu đã lọc.

# Questionnaire for Missing Information

Ask these questions when the input is incomplete.

## Module basics
1. Tên module hoặc màn hình là gì?
2. Vai trò nào dùng chức năng này?
3. Chức năng này dùng để làm gì?
4. Đây là form CRUD, màn list, workflow, report, hay cấu hình?

## UI controls and suites
5. Màn hình có các control nào: textbox, dropdown, checkbox, radio, popup, grid, chart, date picker, upload file?
6. Có testsuite common nào chắc chắn phải áp dụng không?
7. Có muốn lấy full testcase của suite textbox, dropdown, grid... trước rồi mới bổ sung nghiệp vụ riêng không?

## Actions
8. Có tạo mới không?
9. Có sửa không?
10. Có xóa không?
11. Có xem chi tiết không?
12. Có tìm kiếm, lọc, sắp xếp, phân trang không?
13. Có import hoặc export không?
14. Có approve, reject, return, submit, cancel không?

## Fields and validation
15. Những field nào là bắt buộc?
16. Có field nào unique không?
17. Có field nào có format đặc biệt không?
18. Có rule min, max, max length, threshold không?
19. Có rule phụ thuộc giữa các field không?
20. Có file đính kèm hoặc upload file không?

## Workflow and status
21. Có những trạng thái nào?
22. Ai được chuyển trạng thái?
23. Điều kiện chuyển trạng thái là gì?
24. Có lịch sử xử lý hoặc audit log hiển thị không?

## Permissions
25. Có phân quyền theo vai trò không?
26. Vai trò nào được xem, sửa, xóa, duyệt?
27. Dữ liệu có bị giới hạn theo chi nhánh, phòng ban, owner, hoặc scope không?

## Output expectation
28. Muốn generate full testcase gồm cả common baseline hay chỉ bổ sung testcase theo nghiệp vụ?
29. File output cần đúng theo template nào?
30. Có cần tách rõ positive, negative, boundary, permission, workflow không?
31. Có cần giữ lại common testcase ID và testsuite để trace nguồn không?

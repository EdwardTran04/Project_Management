# Phase 3: Testcase Generation

## Common Library Reuse Rules

The common workbook is a **reusable testcase source**, not a passive reference.

### Column Mapping
- Col 1: common testcase ID
- Col 2: common testcase title
- Col 3: common test suite name
- Col 4: common test suite code
- Col 5: status (filter if active/inactive clearly present)
- Col 6: steps
- Col 7: expected result

### Mandatory Content Reuse (Hard Rule)

When a common suite matches the business input, you **MUST**:

1. **Open the index**: Read `assets/common_suites/_INDEX.md` to find matching suite codes.
2. **Read the CSV file directly**: `view_file assets/common_suites/{SuiteCode}__{SuiteName}.csv`.
3. **Read actual steps and expected results** from the CSV rows (cols: ID, Title, SuiteName, SuiteCode, Status, Steps, Expected).
4. **Adapt to SRS context**: Replace all generic placeholders with actual SRS names/values.
5. **Preserve common testcase ID** for traceability.


**Adaptation rules:**
- Replace generic field names → actual SRS field names ("trường A" → "Nhãn hiển thị").
- Replace generic module names → actual names ("danh sách" → "danh sách Tỉnh/Thành phố").
- Replace placeholder values → real values ("X bản ghi" → "10 bản ghi").
- Keep test logic/structure — only change context-specific wording.
- Skip clearly inapplicable rows with noted reason.

**Anti-patterns:**
- ❌ Reference-only: "Verify phân trang" + tag "Common Suite: Suite_common_296" without actual steps.
- ❌ Verbatim copy: Keeping "trường A" and "danh sách" without SRS adaptation.
- ✅ Correct: Scan index → read CSV → adapt "có hơn X bản ghi" to "có hơn 10 bản ghi" → preserve ID 8092.

## Mapping Rules

### Always consider
- UI layout basics, labels, titles, buttons, placeholders
- Mandatory field validation, error/success messages
- Permission visibility if roles exist
- Audit fields or traceability if visible

### Control/Function → CSV File Quick-Match

| SRS Control | Suite Code | CSV Filename |
|---|---|---|
| Textbox (web) | Suite_common_297 | `Suite_common_297__Textbox.csv` |
| Text Fields (mobile) | Suite_common_324 | `Suite_common_324__Text_Fields.csv` |
| Dropdown/Combobox | Suite_common_302 | `Suite_common_302__Kiểm_tra_combo_-_box.csv` |
| Spinner (mobile) | Suite_common_331 | `Suite_common_331__Spinner.csv` |
| Checkbox (web) | Suite_common_303 | `Suite_common_303__Check_box.csv` |
| Checkbox (mobile) | Suite_common_325 | `Suite_common_325__KT_Checkbox.csv` |
| Radio | Suite_common_310 | `Suite_common_310__Radio.csv` |
| Date picker (calendar) | Suite_common_305 | `Suite_common_305__Kiểm_tra_trường_ngày_tháng_lấy_từ_calendar.csv` |
| Date picker (input) | Suite_common_306 | `Suite_common_306__Kiểm_tra_trường_ngày_tháng_có_thể_tự_nhập.csv` |
| Phân trang | Suite_common_296 | `Suite_common_296__Phân_trang.csv` |
| Tìm kiếm (EditText) | Suite_common_348 | `Suite_common_348__Tìm_kiếm_theo_EditText.csv` |
| Tìm kiếm (Spinner) | Suite_common_349 | `Suite_common_349__Tìm_kiếm_theo_Spinner.csv` |
| Tìm kiếm (Datetime) | Suite_common_350 | `Suite_common_350__Tìm_kiếm_theo_Datetime.csv` |
| Tìm kiếm chung | Suite_common_345 | `Suite_common_345__Tìm_kiếm_chung.csv` |
| Xóa | Suite_common_353 | `Suite_common_353__Kiểm_tra_Xóa.csv` |
| Thêm mới | Suite_common_355 | `Suite_common_355__Kiểm_tra_thêm_mới_thành_công_thông_thường.csv` |
| Sửa/Lưu | Suite_common_364 | `Suite_common_364__Kiểm_tra_lưu_thành_công_thông_thường.csv` |
| Phân quyền | Suite_common_367 | `Suite_common_367__Phân_quyền.csv` |
| Upload File | Suite_common_313 | `Suite_common_313__Upload_File.csv` |
| Import | Suite_common_314 | `Suite_common_314__import.csv` |
| Popup | Suite_common_322 | `Suite_common_322__Pop-up.csv` |
| SQL Injection | Suite_common_42 | `Suite_common_42__Kiểm_tra_SQL_Injection.csv` |
| XSS | Suite_common_41 | `Suite_common_41__Kiểm_tra_XSS_với_các_edittext.csv` |
| Giao diện (web) | Suite_common_292 | `Suite_common_292__Giao_diện_chung_web.csv` |
| Giao diện (mobile) | Suite_common_316 | `Suite_common_316__Giao_diện_chung_mobile.csv` |

### CRUD screens
Create success, create validation failure, create duplicate, edit success, edit validation failure, delete success, delete restriction, cancel/reset/back, unsaved changes warning.

### Search/Filter screens
Exact match, partial match, no result, single filter, combined filters, reset filter, sort asc/desc, paging with filtered results.

### Workflow screens
Valid transition, invalid transition, transition by correct/wrong role, audit/history visibility, missing prerequisite.

### Validation-heavy forms
Required fields, max/min length, invalid format, special characters, whitespace-only, duplicate, boundary values, cross-field validation.

### Attachment/Import/Export
Valid file type/size, invalid type, invalid size, empty/missing file, duplicate upload, import error messaging, export matches filters.

## Mandatory Test Design Techniques and Structure

For every module, you **MUST** apply the 7 core ISTQB techniques and structure the test suite using the 5 mandatory groups (detailed in [testing-mindsets.md](file:///e:/VSS-Source/sdlc-skill/agent-internal/skills/vtit-qa/references/testing-mindsets.md)):

### 1. Apply 7 Core Test Design Techniques:
- **Equivalence Partitioning (EP):** Group similar inputs, test 1 representative per partition.
- **Boundary Value Analysis (BVA):** Check min, max, just below (B-1), just above (B+1). Use `[BOUNDARY]` tag for valid boundary and `[NEG]` tag for invalid boundary testcases.
- **Decision Table Testing:** Document complex logic branching and Role × State combinations.
- **State Transition Testing:** Map transitions: Initial State → Event → Action → Target State.
- **Use Case Testing:** Map E2E flows (Main Flow / Happy Path, Alternative Flow, Exception Flow).
- **Pairwise Testing:** Optimize filter combinations using 2-way all-pairs testing.
- **Error Guessing:** Use professional intuition and the Mobile-specific interruption/hardware checklist.

Refer to the **Selection Matrix** in [testing-mindsets.md](file:///e:/VSS-Source/sdlc-skill/agent-internal/skills/vtit-qa/references/testing-mindsets.md) to choose the right technique for each feature.

### 2. Organize into 5 Mandatory Test Suites:
Every module's generated testcases **MUST** be structured into:
1. **Happy Path:** standard flow, valid data.
2. **Negative Cases:** validation errors, invalid bounds, system rejection.
3. **Business Logic:** rules, formulas, threshold alerts (e.g., logwork warnings).
4. **Permission & Security:** role scopes, API security, SQLi/XSS.
5. **Mobile-specific & Interruptions:** network loss, screen rotation, calls, background state.

If a technique or suite group is not applicable, state why — do not skip silently.

## Generation Rules

1. Reuse common testcase rows where applicable.
2. Reuse by test suite first, then refine by title and business rule.
3. Do not duplicate the same logical testcase.
4. Add business-specific cases for: domain rules, workflow, calculations, thresholds, approval conditions, role restrictions, cross-field rules, attachment/import/export, integration effects.
5. Prefer explicit, testable wording.
6. Each testcase = one clear scenario.
7. Separate happy path, negative path, and boundary path.
8. One expected result per testcase (unless template requires step-level expectations).
9. Normalize titles and steps using `references/output-format.md`.
10. Preserve traceability to reused common test suite.
11. **EXHAUSTIVE TESTING:** Apply boundary value analysis, data validation, thorough negative path decomposition, and security testing for maximum coverage.
12. **NHÚNG TEST DATA VÀO STEPS (Bắt buộc):** Mọi bước thực hiện trong cột Steps **phải** chứa dữ liệu test thực tế, cụ thể. Tuyệt đối không viết chung chung kiểu "nhập giá trị hợp lệ" hay "nhập email sai định dạng".

    | ❌ Sai | ✅ Đúng |
    |---|---|
    | Nhập số điện thoại hợp lệ | Nhập số điện thoại `"0901234567"` |
    | Nhập email sai định dạng | Nhập email `"abc@"` |
    | Nhập chuỗi vượt max length | Nhập chuỗi `"A" × 201 ký tự` |
    | Chọn ngày không hợp lệ | Chọn ngày bắt đầu `"25/05/2026"`, ngày kết thúc `"20/05/2026"` |
    | Nhập mật khẩu yếu | Nhập mật khẩu `"123"` (< 8 ký tự, thiếu ký tự đặc biệt) |


## Output Rules

- **No Detailed Table in Deliverable**: Bảng chi tiết toàn bộ testcase sẽ **KHÔNG** nằm trong file `.md` để tránh dung lượng quá lớn hoặc bị cắt ngắn. File `.md` chỉ chứa bảng tóm tắt/thống kê số lượng testcase theo từng Suite/Section và cung cấp link tải/đọc file CSV. Bảng chi tiết đầy đủ sẽ nằm trong file CSV.
- **CSV Table Structure (Mandatory)**: File CSV chứa đầy đủ testcases với các cột: `TC ID`, `Common ID`, `Tiêu đề`, `Steps`, `Expected Result`, `Priority`, `Section`.
- **Grouping**: Group by Parts/Groups matching functional areas in the CSV file using the `Section` column.
- **Priority**: Strictly **Critical**, **High**, **Medium**, **Low** (No P0/P1/P2).
- **Encoding**: UTF-8 with proper Vietnamese support.
- Clearly distinguish common vs business-specific coverage.
- Include enough detail for manual tester to execute without guessing.
- Avoid merging unrelated validations into one row.

### CSV Auto-Export (Bắt buộc)

Mỗi lần sinh Phase 3, agent **phải** đồng thời ghi file CSV tại:
```
docs/{module_name}/testcases_{module_name}.csv
```

**Cột CSV (theo thứ tự):**
| # | Tên cột | Mô tả |
|---|---------|-------|
| 1 | `TC ID` | Mã testcase (ví dụ: TC_CLW_001) |
| 2 | `Common ID` | Mã common suite gốc nếu có, nếu không để trống |
| 3 | `Tiêu đề` | Tiêu đề testcase |
| 4 | `Steps` | Các bước thực hiện (dùng `\n` để ngắt dòng trong ô) |
| 5 | `Expected Result` | Kết quả mong đợi |
| 6 | `Priority` | Critical / High / Medium / Low |
| 7 | `Section` | Nhóm chức năng (UI, Validation, CRUD, ...) |

**Quy tắc:**
- Encoding: UTF-8 with BOM (`\xEF\xBB\xBF` ở đầu file) để Excel mở đúng tiếng Việt.
- Dấu phân cách: dấu phẩy `,`.
- Nếu nội dung ô chứa dấu phẩy hoặc xuống dòng, bọc trong dấu `"`.
- File deliverable `.md` phải chứa link đến CSV ở đầu Phase 3:
  ```
  📥 [Tải file CSV testcases](testcases_{module_name}.csv)
  ```
- File deliverable `.md` chỉ có bảng thống kê tổng số lượng testcases theo Section/Priority thay vì hiển thị toàn bộ hàng trăm dòng testcase.

## Recommended Categories
UI, Validation, CRUD, Workflow, Permission, Calculation, Search/Filter/Sort/Paging, Attachment/Import/Export, Audit/History, Common Suite Reuse.


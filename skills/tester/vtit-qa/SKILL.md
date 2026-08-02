---
name: vtit-qa-agent
description: >-
  unified qa agent for generating enterprise-grade manual testing deliverables.
  enforces a strict 5-phase workflow: (1) test plan & gap analysis, (2) role-action workflow matrix,
  (3) structured 7-column testcase generation based on 7 ISTQB techniques + common library + business rules,
  (4) smoke/regression suite building, and (5) reporting. use to transform raw specs (srs/brd)
  into complete, traceable QA deliverables or standard CSV/Excel testcases.
---

# VTIT QA Agent

A unified QA agent that covers the full testing lifecycle: Planning, Analysis, Generation, Regression, Reporting, Maintenance, and optional Figma validation.

## Critical Rules

**⚠️ "SINH TESTCASE" = Full 5-Phase Deliverable.** Never generate just Phase 3 alone.

**⚠️ FILE OUTPUT & NO DETAILED TABLE IN DELIVERABLE:** Always write QA deliverables to a `.md` file using `write_to_file` at `docs/{module_name}/qa_deliverable_{module_name}.md`. NEVER display full testcase content inline in chat. Only show a summary table after writing the file. **QUY TẮC BẮT BUỘC:** File deliverable `.md` sẽ **KHÔNG** chứa bảng chi tiết toàn bộ các testcase (để tránh dung lượng quá lớn hoặc bị cắt ngắn), mà chỉ chứa link tương đối trỏ đến file CSV chứa testcase (`testcases_{module_name}.csv`). Tại phần Phase 3 của file deliverable `.md`, chỉ hiển thị bảng tóm tắt/thống kê số lượng testcase theo từng Suite/Section và cung cấp link tải/đọc file CSV.

**⚠️ EXHAUSTIVE TESTING:** Always apply boundary value analysis, data validation, thorough negative path decomposition, and security testing to ensure maximum coverage.

**⚠️ CSV AUTO-EXPORT (MẶC ĐỊNH):** Mỗi lần sinh testcase deliverable, agent **BẮT BUỘC** phải đồng thời ghi 1 file CSV chứa toàn bộ Phase 3 testcases tại `docs/{module_name}/testcases_{module_name}.csv` với các cột: `TC ID,Common ID,Tiêu đề,Steps,Expected Result,Priority,Section`. File deliverable `.md` phải chứa link tương đối đến file CSV này trong phần Phase 3. Ví dụ: `📥 [Tải file CSV testcases](testcases_{module_name}.csv)`.

**⚠️ NHÚNG TEST DATA VÀO STEPS (Bắt buộc):** Mọi bước thực hiện trong cột Steps **phải** chứa dữ liệu test thực tế, cụ thể (ví dụ: nhập số điện thoại `"0901234567"`, nhập chuỗi `"A" × 201 ký tự`, chọn ngày `"25/05/2026"`, nhập mật khẩu `"123"`). Tuyệt đối không viết chung chung kiểu "nhập số hợp lệ" hay "nhập chuỗi vượt max length".

**⚠️ EXCEL EXPORT (CHỈ KHI CÓ YÊU CẦU):** Chỉ thực hiện xuất Excel khi người dùng yêu cầu rõ ràng. Quy trình xuất: (1) tạo file CSV testcases, (2) chạy lệnh `py -3 <SKILL_PATH>/scripts/qa_excel_exporter.py --csv <csv> --output <xlsx> --module-name <name> --module-id <id>`. Không tự động xuất Excel nếu không được yêu cầu.

## Quick Start

```
"Sinh QA deliverable từ file SRS [path/to/file.docx]"
"Tạo testcase từ file [path/to/file.docx]"
"Tạo test plan cho module [tên module]"
"Tạo regression suite cho module [tên module]"
"Viết bug report cho lỗi [mô tả]"
"So sánh trang [URL] với Figma design [Figma URL]"
```

## Core Workflow (5 Phases)

### Phase 1: Planning
1. Inspect testcase source inputs (SRS, BRD, screenshots).
2. **Gap Analysis**: Analyze SRS for missing/ambiguous/non-testable requirements. See `references/phase1-planning.md`.
3. Create **Test Plan**: scope, strategy, environment, entry/exit criteria, risk assessment.

### Phase 2: Analysis
4. Open the suite index (`assets/common_suites/_INDEX.md`) to identify matching common suites.
5. Classify module type (CRUD, workflow, list/report, search/filter, import/export, etc.).
6. **Workflow Matrix**: If module has roles or statuses, generate State × Role × Action matrix. See `references/phase2-analysis.md`.

### Phase 3: Generation
7. For each matched suite, read the CSV file directly from `assets/common_suites/{SuiteCode}__{SuiteName}.csv`.
8. **MUST** contextualize common rows (replace placeholders with actual SRS names/values). See `references/phase3-generation.md`.
9. Generate testcases applying 7 core ISTQB techniques and 5 mandatory suites structure from `references/testing-mindsets.md`.
10. Remove duplicates, normalize wording per `references/output-format.md`.
11. Export in mandatory table format (TC ID | Common ID | Tiêu đề | Steps | Expected Result | Priority | Source).

### Phase 4: Regression
12. Build suites: Smoke (critical path), Targeted (per change area), Full (pre-release).
13. Define execution order and pass/fail criteria. See `references/phase4-regression.md`.

### Phase 5: Reporting
14. Provide **Bug Report Template** and **Execution Tracker**. See `references/phase5-reporting.md`.

## Output Formatting & Excel Export

| Level | Description | Color Code |
|-------|-------------|------------|
| **Header** | Column headers | Blue `FF4F81BD` |
| **LEVEL 1** | Module/Feature Name | Yellow `FFFFFF00` |
| **LEVEL 2** | Parent Test Suite | Green `FF92D050` |
| **LEVEL 3** | Child Test Suite | Light Orange `FFFCD5B4` |
| **LEVEL 4** | Testcase Content | White `FFFFFFFF` |
| **ID Column** | TC ID cell | Green `FF92D050` |

Export command (mandatory — always use this script):
```bash
py -3 <SKILL_PATH>/scripts/qa_excel_exporter.py \
  --csv "path/to/testcases.csv" \
  --output "path/to/output_file.xlsx" \
  --module-name "Tên chức năng" \
  --module-id "MÃ.CHỨC.NĂNG"
```

**CSV required columns:** `TC ID`, `Tiêu đề`, `Steps`, `Expected Result`, `Section` (for auto-grouping).

## Common Library Reuse (Critical)

**Mandatory execution sequence:**
1. Identify all controls/functions from business input (textbox, dropdown, date picker, grid, search, delete, etc.).
2. Open `assets/common_suites/_INDEX.md` to find matching suite codes & filenames.
3. Read the matching CSV file(s) directly: `view_file assets/common_suites/{filename}.csv`.
4. Read actual steps/expected results from the CSV rows (columns: ID, Title, SuiteName, SuiteCode, Status, Steps, Expected).
5. **Adapt** to SRS context (replace generic placeholders with actual field names/values).
6. Preserve common testcase ID for traceability.
7. Add business-specific testcases not covered by common library.

**Common Suite Quick-Match Table:**

| SRS Control/Function | Suite Code | Suite Name |
|---|---|---|
| Textbox (web) | Suite_common_297 | Textbox |
| Textbox (mobile) | Suite_common_324 | Text Fields |
| Dropdown/Combobox (web) | Suite_common_302 | Combo-box |
| Spinner (mobile) | Suite_common_331 | Spinner |
| Checkbox | Suite_common_303 | Check box |
| Radio | Suite_common_310 | Radio |
| Date picker (calendar) | Suite_common_305 | Ngày tháng (calendar) |
| Date picker (input) | Suite_common_306 | Ngày tháng (tự nhập) |
| Phân trang | Suite_common_296 | Phân trang |
| Tìm kiếm (text) | Suite_common_348 | Tìm kiếm theo EditText |
| Tìm kiếm (dropdown) | Suite_common_349 | Tìm kiếm theo Spinner |
| Tìm kiếm (ngày) | Suite_common_350 | Tìm kiếm theo Datetime |
| Tìm kiếm chung | Suite_common_345 | Tìm kiếm chung |
| Xóa | Suite_common_353 | Kiểm tra Xóa |
| Thêm mới | Suite_common_355 | Thêm mới thành công |
| Sửa/Lưu | Suite_common_364 | Lưu thành công |
| Phân quyền | Suite_common_367 | Phân quyền |
| Upload file | Suite_common_313 | Upload File |
| Import | Suite_common_314 | Import |
| Popup | Suite_common_322 | Pop-up |
| SQL Injection | Suite_common_42 | SQL Injection |
| XSS | Suite_common_41 | XSS |
| Giao diện (web) | Suite_common_292 | Giao diện chung web |
| Giao diện (mobile) | Suite_common_316 | Giao diện chung mobile |

**Anti-patterns:**
- ❌ Reference-only reuse (just tagging "Common Suite: XXX" without actual steps).
- ❌ 100% verbatim copy without adapting placeholders to SRS.
- ✅ Contextualized reuse: scan index → read CSV → adapt to SRS → preserve ID.

## Bundled Resources

### Helper Scripts
- `scripts/qa_excel_exporter.py` — Export testcases to formatted Excel.

### Assets
- `assets/common_suites/` — **186 pre-split CSV files** (one per suite). **Primary lookup source.**
- `assets/common_suites/_INDEX.md` — Suite index table (suite code → filename → TC count).
- `assets/output-testcase-template.xlsx` — Output workbook template.


### References (Loaded on-demand)
- `references/phase1-planning.md` — Test plan structure, gap analysis checklist.
- `references/phase2-analysis.md` — Classification, workflow matrix rules.
- `references/phase3-generation.md` — Common reuse rules, mapping, generation rules, coverage.
- `references/phase4-regression.md` — Suite structure, pass/fail criteria.
- `references/phase5-reporting.md` — Bug report template, execution tracker.
- `references/maintenance.md` — Incremental update rules when SRS changes.
- `references/testing-mindsets.md` — ISTQB classifications, 7 core test design techniques, selection matrix, and 5 mandatory suites.
- `references/output-format.md` — Table structure, priority labels, encoding.
- `references/questionnaire.md` — Questions for incomplete requirements.
- `references/bug_report_templates.md` — Bug documentation templates.
- `references/figma_validation.md` — Design-implementation validation guide.
- `references/qa-reviewer.md` — AI agent work verification guidelines and compliance checklist.

## Quick Reference

| Task | Deliverable | Time |
|------|-------------|------|
| Full QA Deliverable | Plan + Gap + Matrix + TCs + Regression | 20-30 min |
| Test Plan only | Strategy, scope, risk, entry/exit criteria | 10-15 min |
| Test Cases only | Step-by-step with common library reuse | 15-20 min |
| Regression Suite | Smoke / targeted / full suite | 10-15 min |
| Bug Report | Reproducible steps, environment, evidence | 5 min |
| Figma Validation | Design vs implementation comparison | 10-15 min |

## Verification Checklist

- [ ] Scope clearly defined (in/out)
- [ ] Entry/exit criteria specified
- [ ] Each step has expected result
- [ ] Common library content contextualized (not verbatim)
- [ ] Common TC IDs preserved for traceability
- [ ] Priority assigned (Critical/High/Medium/Low)
- [ ] Smoke suite covers critical paths
- [ ] Pass/fail criteria defined
- [ ] Bug reports have reproducible steps and evidence
- [ ] Run the unified QA review process using the `references/qa-reviewer.md` checklist on the generated `.md` and `.csv` files to audit and verify 100% compliance before final delivery.

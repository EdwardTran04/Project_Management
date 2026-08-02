# Phase 2: Analysis & Classification

## Required Inputs

### 1. Common testcase Excel library
Reusable testcase groups: UI common, CRUD, validation, search/filter/sort/paging, permission/role, workflow/approval, import/export, control-specific suites.

Default: `assets/common.xlsx`. If missing, ask user unless they want business-specific brainstorming only.

### 2. Output Excel template
Target format for final testcases. Default: `assets/output-testcase-template.xlsx`.

### 3. Business input
SRS, BRD, module description, user stories, screenshots, workflow notes, API behavior, UI control inventory.

If vague, ask clarifying questions before generating.

## Classification Step

Classify the module into one or more categories:
- CRUD form
- Master data management
- Transactional workflow
- Approval workflow
- List/report/dashboard
- Search/filter page
- Import/export flow
- Authentication/authorization flow
- Configuration screen
- Readonly detail screen
- Calculation or rule-heavy form
- Attachment or document flow
- Control-driven UI (textbox, dropdown, checkbox, radio, popup, grid, chart, tab, date picker)

Classification determines which common testcase groups and viewpoints to apply.

## Workflow Matrix

**Required when:** Module has roles/permissions OR multiple statuses.

### Structure (Mandatory 4-column format)

| State | Role/Permission | Action | Expected Result |
|---|---|---|---|
| [Current state] | [Who] | [What] | [System response] |

**Example:**

| State | Role | Action | Expected Result |
|---|---|---|---|
| Đang hoạt động | Admin | Toggle | ✅ → Dừng hoạt động |
| Đang hoạt động | Viewer | Toggle | ❌ Blocked, toast WN001 |
| Mọi trạng thái | Viewer | Sửa | ❌ Blocked |

### Matrix Rules
1. **State**: Use format `[Object]: @FieldName = Value`. For multiple fields: `@Field1 = Val1 + @Field2 = Val2`. **NEVER** use "Bất kỳ" or "N/A". Use: `Tất cả trạng thái của @FieldName`.
2. **Role**: List all permissions (Admin, Viewer, No-access...).
3. **Action**: List all actions (Xem, Sửa, Toggle, Kết xuất...).
4. **Expected Result**: Success (✅ + result) or Failure (❌ + error/toast/redirect).
5. **Coverage**: Every matrix row must be covered by at least 1 Test Case.

### Integration with testcases
- Place matrix before TC list in the document.
- Map each cell to specific TC IDs.
- If any cell has no TC → generate additional TC.

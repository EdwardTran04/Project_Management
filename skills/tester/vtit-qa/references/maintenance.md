# Maintenance: Incremental Update Rules

When user provides an **updated SRS** for an existing module, do NOT regenerate from scratch. Follow incremental update workflow.

## Step 1: Identify Changes

| Change Type | Description | Example |
|---|---|---|
| **ADD** | New function/control/rule added | SRS v2 adds "Delete" button |
| **MODIFY** | Existing behavior changed | API endpoint changed, validation updated |
| **REMOVE** | Function/control removed | "Export" button removed |
| **COSMETIC** | Label/placeholder text changed | "Ghi lại" → "Lưu" |

## Step 2: Apply Action Per Type

### ADD — New function
1. Generate new TCs only for added function.
2. Scan `assets/common_suites/_INDEX.md` and read matching CSV files for new controls.
3. Contextualize new common rows. Add business-specific TCs.
4. Assign new TC IDs continuing from last existing ID.
5. **Do NOT touch existing TCs.**

### MODIFY — Existing function changed
1. Identify affected existing TCs.
2. Update only affected TCs (steps, expected results, preconditions, test data).
3. **Keep TC IDs unchanged** for traceability.
4. Generate additional TCs if change adds uncovered scenarios.
5. Mark updated TCs: "Updated: [brief reason]".
6. **Do NOT touch unaffected TCs.**

### REMOVE — Function removed
1. **Mark affected TCs as Deprecated** — do NOT delete immediately.
2. Add note: "Deprecated: [function] removed in SRS v2".
3. Move deprecated TCs to bottom section.
4. **Do NOT renumber remaining TCs.**

### COSMETIC — Label/wording changed
1. Batch update wording in affected TCs (find-replace).
2. No logic change needed. No common suite lookup needed.

## Step 3: Update Traceability

Add a **Change Log** at the top:
```
## Change Log
| Version | Date | SRS Change | TCs Added | TCs Modified | TCs Deprecated |
|---|---|---|---|---|---|
| v2 | 2026-04-15 | Added Delete function | TC-068 to TC-075 | — | — |
```

Update Summary table and Regression Suite accordingly.

## When Full Regeneration IS Acceptable
- SRS is a **complete rewrite** (>50% changed).
- Module was **fundamentally restructured**.
- User **explicitly requests** full regeneration.
- **No existing testcase file** to compare against.

## Anti-Patterns

| Avoid | Why | Instead |
|-------|-----|---------|
| Vague test steps | Can't reproduce | Specific actions + expected results |
| Missing preconditions | Tests fail unexpectedly | Document all setup requirements |
| No test data | Tester blocked | Provide sample data |
| Generic bug titles | Hard to track | Specific: "[Feature] issue when [action]" |
| Skip edge cases | Miss critical bugs | Include boundary values, nulls |
| Reference-only reuse | No actual content | Contextualized reuse with full steps |
| 100% verbatim copy | Ignores SRS context | Adapt field names, values, module names |

# VTIT QA Agent

Unified QA agent for manual testing — combines test planning, test case generation, regression suite building, bug reporting, and Figma validation into a single skill.

## Installation

### Option 1: Copy folder
```powershell
xcopy "vtit-qa-agent" "<your-workspace>\.agents\skills\vtit-qa-agent\" /E /I
```

### Option 2: From zip
1. Extract `vtit-qa-agent.zip` to `<your-workspace>\.agents\skills\`

## Usage

### Full QA deliverable
```
/vtit-qa-agent sinh QA deliverable từ file SRS "C:\path\to\file.docx"
```

### Test plan only
```
/vtit-qa-agent tạo test plan cho module [tên module] từ SRS "C:\path\to\file.docx"
```

### Test cases only
```
/vtit-qa-agent sinh testcase manual từ SRS "C:\path\to\file.docx"
```

### Update existing test cases (SRS changed)
```
/vtit-qa-agent cập nhật testcase theo SRS mới "C:\path\to\file_v2.docx"
```

### Bug report
```
/vtit-qa-agent viết bug report cho lỗi [mô tả lỗi]
```

## What's included

```
vtit-qa-agent/
├── SKILL.md                   ← Main skill definition (5 phases)
├── README.md                  ← This file
├── assets/
│   ├── common_suites/         ← 186 pre-split CSV files (reusable test suite library)
│   │   ├── _INDEX.md          ← Suite index table (suite code → filename → TC count)
│   │   └── Suite_common_*.csv
│   └── output-testcase-template.xlsx ← Excel output template
├── scripts/
│   └── qa_excel_exporter.py   ← Python Excel formatter & exporter
└── references/
    ├── phase1-planning.md     ← Test plan structure & gap analysis checklist
    ├── phase2-analysis.md     ← Classification & workflow matrix rules
    ├── phase3-generation.md   ← Common suite reuse rules, mapping & generation
    ├── phase4-regression.md   ← Suite structure & pass/fail criteria
    ├── phase5-reporting.md    ← Bug report template & execution tracker
    ├── maintenance.md         ← Incremental update rules when SRS changes
    ├── testing-mindsets.md    ← 14 test design viewpoints for coverage expansion
    ├── output-format.md       ← Table structure, priority labels & encoding
    ├── questionnaire.md       ← Clarifying questions for incomplete requirements
    ├── bug_report_templates.md ← Bug documentation templates
    ├── figma_validation.md    ← Design-implementation validation guide
    └── qa-reviewer.md         ← Hướng dẫn và checklist kiểm định chất lượng công việc của AI Agent
```

## Phases

| Phase | What it does |
|---|---|
| **1. Planning** | Test plan, scope, strategy, risk assessment, entry/exit criteria |
| **2. Analysis** | Gap analysis (SRS quality check), Workflow matrix (State × Role × Action) |
| **3. Generation** | Test cases from common library + business rules, contextualized |
| **4. Regression** | Smoke / targeted / full regression suites |
| **5. Reporting** | Bug report templates, execution tracker |
| **Maintenance** | Incremental update rules when SRS changes |

## Requirements

- Python 3.8+
- Python packages: `pandas`, `xlwings`
- Microsoft Excel installed (for `xlwings` automation on Windows)
- Antigravity / Gemini agent environment


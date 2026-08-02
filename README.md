# 🏗️ AI-WMS — Intelligent Project Management Workspace

> **Hệ thống quản lý dự án AI-powered** cho BA, Dev, Test — Dự án Kho Thông Minh AI-WMS  
> Phiên bản cấu trúc: **v2.0.0** | Cập nhật: 2026-08-02

---

## 📁 Cấu Trúc Thư Mục

```text
ai-agent-wms/
│
├── 📏 rules/              Quy tắc cho AI Agent (BA, Dev, Tester)
├── ⚙️ skills/              Kỹ năng Agent (50+ skills BA, Dev, QA, PM, UI/UX)
├── 🔄 workflows/           Luồng tự động hóa
│
├── 📥 raw/                 File GỐC khách gửi (pdf, docx, png — KHÔNG chỉnh sửa)
│   ├── templates/          Template & mẫu tài liệu từ khách
│   ├── contracts/          Hợp đồng, SOW
│   ├── requirements/       Tài liệu yêu cầu gốc
│   └── references/         Tài liệu tham khảo
│
├── 📚 knowledge/           File .md đã chuyển đổi từ raw/ (SSoT cho Agent)
│   ├── templates/          Markdown từ raw/templates/
│   ├── requirements/       Markdown từ raw/requirements/
│   ├── references/         Markdown từ raw/references/
│   └── processes/          Quy trình nghiệp vụ đã phân tích
│
├── 📋 ba/                  ⭐ TRỌNG TÂM — Sản phẩm Business Analyst
│   ├── stakeholders/       Quản lý Stakeholder (Register, RACI, Comm Plan)
│   ├── requirements/       Quản lý Requirements (Log, Traceability, Rules, Glossary)
│   ├── documents/          Tài liệu BA chính thức
│   │   ├── mom/            Biên bản họp (draft → new → baseline → old)
│   │   ├── brd/            Business Requirements Document
│   │   ├── srs/            Software Requirements Specification (PTYC)
│   │   ├── cr/             Change Requests (pending → analyzing → approved/rejected → completed)
│   │   └── diagrams/       Sơ đồ (process, activity, sequence)
│   ├── project/            Tổng quan & quản lý phiên bản
│   └── qa/                 Q&A với khách hàng
│
├── 📦 deliverables/        File .docx/.pdf gửi khách hàng
│   ├── srs/
│   ├── brd/
│   ├── mom/
│   └── reports/
│
├── 💻 dev/                 Sản phẩm Dev (TKCT, API specs, Code review)
├── 🧪 test/                Sản phẩm Tester (Test plan, TC, Results, Bugs)
└── 🔧 tools/               Scripts tiện ích (pdf→md, docx→md, plantuml)
```

---

## 🔄 Vòng Đời Tài Liệu

```
draft/ → new/ → baseline/ → old/
  ↑         ↓
  └── (sửa lại) ←─┘
```

| Giai đoạn | Ai đọc? | Mô tả |
|---|---|---|
| `draft/` | BA only | Đang soạn thảo |
| `new/` | BA + Khách | Chờ review & phê duyệt |
| `baseline/` | **Tất cả** (Dev, Test, AI) | ⭐ Nguồn sự thật duy nhất (SSoT) |
| `old/` | BA (tra cứu) | Phiên bản cũ, lưu trữ |

---

## 🔧 Công Cụ

| Script | Chức năng |
|--------|-----------|
| `tools/pdf_to_markdown.py` | Chuyển PDF → Markdown (docling) |
| `tools/doc_to_markdown.py` | Chuyển DOCX → Markdown |
| `tools/plantuml.jar` | Render sơ đồ PlantUML |

---

## 🚀 Quick Start

```bash
# Chuyển file PDF khách gửi → Markdown
python tools/pdf_to_markdown.py raw/requirements/file.pdf -o knowledge/requirements/file.md

# Chuyển file DOCX → Markdown
python tools/doc_to_markdown.py raw/templates/file.docx -o knowledge/templates/file.md
```

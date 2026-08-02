# VTIT Design System

> Hệ thống thiết kế chính thức của VTIT, đảm bảo tính nhất quán và chất lượng cho mọi sản phẩm.

## 🎯 Mục tiêu

Bộ design system này phục vụ 3 đối tượng chính:
1. **AI Tools** (Claude, Cursor, v0, Figma AI...) — tuân thủ chính xác khi generate UI
2. **UI/UX Designers** — nguồn tham chiếu khi thiết kế
3. **Developers** — implement đúng spec từ design

## 🚀 Cách sử dụng

### Cho AI / LLM

Khi prompt AI để generate UI, đính kèm hoặc reference các file:

```
Hãy tạo [component/screen X] tuân thủ chặt chẽ design system tại:
- design-system/foundations/tokens.md (BẮT BUỘC đọc đầu tiên)
- design-system/components/atomic/ (cho components cơ bản)
- design-system/patterns/ (cho layout phổ biến)

Yêu cầu:
- CHỈ dùng tokens/components đã định nghĩa
- KHÔNG tự sáng tạo màu, spacing, font ngoài hệ thống
- Tuân thủ WCAG 2.2 AA
- Output bao gồm: tự audit checklist
```

### Cho Designer

1. Bắt đầu từ `design.md` để có overview
2. Browse `foundations/` để hiểu tokens
3. Pick components từ `components/`
4. Apply patterns từ `patterns/`

### Cho Developer

1. Đọc `handoff/developer-guide.md`
2. Import tokens từ `handoff/tokens-export.md`
3. Tham khảo `handoff/react-usage.md` hoặc `handoff/tailwind-config.md`

## 📦 Cấu trúc thư mục

```
design-system/
├── design.md              # Entry point - đọc đầu tiên
├── README.md              # File này
├── CHANGELOG.md           # Lịch sử phiên bản
├── foundations/           # Design tokens & nền tảng
├── components/            # Component library (Atomic Design)
├── patterns/              # UI patterns phổ biến
├── guidelines/            # Hướng dẫn (a11y, content...)
├── handoff/               # Tài liệu cho developer
├── assets/                # Hình ảnh, icons, diagrams
└── appendix/              # Phụ lục
```

## 🔗 Resources

- **Figma**: [VTIT Design System AI](https://www.figma.com/design/zcJTWw2AsvRqHDEmjKfVKS/VTIT-Design-System-AI)
- **Documentation**: Đọc `design.md` để bắt đầu

## 📝 License & Ownership

Internal use only — VTIT Design Team © 2026

## 🤝 Contributing

Mọi đề xuất thay đổi cần được review bởi Design Lead. Xem `CHANGELOG.md` để theo dõi cập nhật.

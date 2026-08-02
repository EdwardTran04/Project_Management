# Glossary

> Thuật ngữ được dùng trong VTIT Design System.

---

## A

**Atomic Design**
Phương pháp phân loại UI component thành 3 cấp: Atoms (cơ bản), Molecules (tổ hợp), Organisms (khối hoàn chỉnh).

**Accessibility (a11y)**
Khả năng tiếp cận của UI cho mọi người dùng, bao gồm người khuyết tật. Thường viết tắt "a11y" (a + 11 letters + y).

**ARIA**
Accessible Rich Internet Applications — bộ thuộc tính HTML giúp screen reader hiểu UI.

---

## B

**Breakpoint**
Điểm width mà tại đó layout thay đổi (sm: 640, md: 768, lg: 1024...).

**Brand color**
Màu đại diện cho thương hiệu. VTIT dùng `brand-primary` (blue).

---

## C

**Component**
Đơn vị UI tái sử dụng (button, input, card...).

**Composition**
Cách ghép các component nhỏ thành component lớn hơn.

**Contrast Ratio**
Tỷ lệ tương phản giữa text và background. WCAG AA yêu cầu ≥ 4.5:1.

**CTA (Call to Action)**
Button hoặc link kêu gọi user hành động (Sign up, Buy now...).

---

## D

**Design Tokens**
Giá trị nguyên tử của design system (color, spacing, font...). Dùng để tạo consistency.

**Display (Typography)**
Cấp font lớn nhất, dùng cho hero headlines (48px+).

**DOM**
Document Object Model — cấu trúc cây của HTML elements.

---

## E

**Elevation**
Độ nâng (z-axis) thể hiện qua shadow. Higher elevation = closer to user.

**Empty State**
Trạng thái UI khi không có dữ liệu hiển thị.

---

## F

**Fluid Typography**
Font size thay đổi mượt theo viewport bằng `clamp()`.

**Focus Ring**
Outline xuất hiện khi element được focus (keyboard navigation).

---

## G

**Grid**
Hệ thống cột để layout (12-col desktop, 8-col tablet, 4-col mobile).

**Gutter**
Khoảng cách giữa các cột trong grid.

---

## H

**Hierarchy**
Thứ tự ưu tiên visual của các element.

**Hover**
Trạng thái khi cursor di chuột qua element.

---

## I

**Icon**
Pictogram đại diện ý nghĩa. VTIT dùng Lucide Icons (24x24 grid).

**Inline Validation**
Validate form ngay khi user blur khỏi field.

---

## L

**Loading State**
Trạng thái UI khi đang tải dữ liệu (spinner, skeleton).

---

## M

**Modal**
Dialog overlay block tương tác với phần còn lại của page.

**Molecule**
Component tổ hợp 2-3 atoms (e.g., FormField = Label + Input + HelperText).

---

## N

**Navbar**
Top navigation bar, thường chứa logo, nav links, user menu.

**Neutral Colors**
Gam màu xám không bias, dùng cho text, backgrounds.

---

## O

**Organism**
Component lớn ghép từ molecules + atoms (e.g., Form, Modal, Navbar).

---

## P

**Pattern**
Solution chuẩn cho 1 UI/UX problem phổ biến (Dashboard, Auth flow...).

**Primitive**
Token raw, chưa có ý nghĩa context (e.g., `gray-500`).

---

## R

**Responsive Design**
Design adapt theo mọi screen size.

**RWD (Responsive Web Design)**
Tên gọi khác của responsive design.

---

## S

**Semantic HTML**
HTML dùng đúng tag theo ý nghĩa (`<button>` thay vì `<div onClick>`).

**Semantic Token**
Token mang ý nghĩa context (e.g., `text-primary` instead of `gray-900`).

**Skeleton**
Placeholder UI hiển thị khi đang load data.

**State**
Trạng thái của component (default, hover, active, disabled, loading).

**System Preference**
User's OS-level setting (dark mode, reduced motion...).

---

## T

**Token**
Xem "Design Tokens".

**Tooltip**
Hint nhỏ hiện khi hover/focus.

**Touch Target**
Vùng có thể touch trên mobile, tối thiểu 44×44px.

---

## V

**Variant**
Phiên bản khác của component (Button: primary/secondary/ghost).

**Viewport**
Vùng nhìn thấy của browser window.

---

## W

**WCAG**
Web Content Accessibility Guidelines — chuẩn accessibility quốc tế.

**Wireframe**
Bản phác thảo low-fidelity của UI, focus vào structure.

---

## Z

**Z-index**
CSS property xác định thứ tự stack của elements.

---

## 🔗 Related

- [Tokens →](../foundations/tokens.md)
- [References →](references.md)

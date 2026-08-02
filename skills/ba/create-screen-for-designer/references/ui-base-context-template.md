# UI Base Context — [Tên dự án]

> Tạo MỘT LẦN cho cả dự án. Set vào Lovable/Figma làm design system, hoặc paste 1 lần đầu phiên.
> Mọi prompt màn hình sau KHÔNG lặp lại nội dung này — chỉ tham chiếu "theo UI Base Context".

## Hệ thống
- Loại: [Enterprise / Government / Military / Banking...]
- Phong cách: [Hành chính, trang trọng, rõ ràng, dễ tra cứu]
- Ngôn ngữ UI: Tiếng Việt
- Layout chuẩn: Sidebar trái + topbar + content area
- Định dạng: ngày dd/mm/yyyy · tiền #.###.### VND

## Component dùng chung (định nghĩa 1 lần)
- Table: sort, phân trang, click dòng → chi tiết
- Filter nâng cao: panel collapse
- Badge status: màu theo state (Draft xám, Submitted vàng, Approved xanh, Rejected đỏ)
- File attachment: tên · loại · người upload · thời gian · xem/tải
- Tab: dùng cho detail nhiều nhóm thông tin
- State chuẩn: empty / loading / no-result / error / permission-restricted

## Phân quyền chung
- View-only: ẩn toàn bộ button thêm/sửa/xóa
- [Các role khác và quyền tương ứng]

## Navigation tổng
- [Menu cha]
  - [Menu con...]

---

## Cách dùng để tiết kiệm credit

**Prompt mỗi màn hình chỉ cần phần delta:**

```
Theo UI Base Context đã set. Sinh màn hình "[Tên]":
- Object: [chính] + [liên quan]
- Trường: [chỉ liệt kê trường đặc thù màn này]
- State đặc thù: [chỉ state khác chuẩn]
- Action: [chỉ action đặc thù]
```

Toàn bộ phong cách, component, layout, state chuẩn → đã có trong Base Context, không lặp lại.
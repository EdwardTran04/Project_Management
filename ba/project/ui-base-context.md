# UI Base Context — Hệ thống Quản lý Hồ sơ Thầu

> Tạo MỘT LẦN cho cả dự án. Set vào Lovable/Figma làm design system, hoặc paste 1 lần đầu phiên.
> Mọi prompt màn hình sau KHÔNG lặp lại nội dung này — chỉ tham chiếu "theo UI Base Context".

## Hệ thống
- Loại: Enterprise nội bộ (Viettel Software)
- Phong cách: Hành chính, trang trọng, rõ ràng, dễ tra cứu
- Ngôn ngữ UI: Tiếng Việt
- Layout chuẩn: Sidebar trái + topbar + content area
- Định dạng: ngày dd/mm/yyyy · tiền #.###.### VND

## Component dùng chung
- Table: sort, phân trang (20 dòng/trang), click dòng → chi tiết
- Filter nâng cao: panel collapse phía trên bảng
- Badge status: Nháp (xám) · Chờ thẩm định (vàng) · Đã thẩm định (xanh dương) · Trúng thầu (xanh lá) · Không trúng (đỏ)
- File attachment: tên · loại · người upload · thời gian · xem/tải
- Tab: dùng cho màn chi tiết HSMT/HSDT nhiều nhóm thông tin
- State chuẩn: empty · loading · no-result · error · permission-restricted

## Phân quyền chung
- AM (Hỗ trợ kinh doanh): tạo/sửa HSMT, tạo HSDT, không phê duyệt
- Presale (Tư vấn giải pháp): hoàn thiện hồ sơ kỹ thuật/nhân sự/giá
- Ban Giám đốc: thẩm định, phê duyệt, xem toàn bộ
- View-only: ẩn toàn bộ button thêm/sửa/xóa, mọi trường readonly

## Dữ liệu read-only (không sửa tại hệ thống thầu)
- Master Data từ HR: Role, Vị trí, Level
- Khách hàng, Deal từ CRM

## Navigation tổng
- Cấu hình hệ thống
- Quản lý hồ sơ
  - Hồ sơ mời thầu (HSMT)
  - Hồ sơ dự thầu (HSDT)
- Phân hệ vệ tinh
  - Đề xuất nhân sự
  - Hợp đồng tương tự
  - Bảng giá dự thầu
  - Đề xuất bảo lãnh
- Thẩm định & Kết quả

---

## Cách dùng để tiết kiệm credit

**Prompt mỗi màn hình chỉ cần phần delta:**

```
Theo UI Base Context đã set. Sinh màn hình "Danh sách HSMT":
- Object: HSMT + Khách hàng (lookup từ CRM)
- Trường: số HSMT, tên gói thầu, khách hàng, hạn nộp, trạng thái
- State đặc thù: không
- Action: tìm kiếm, xem chi tiết, thêm mới, xuất Excel
```

Toàn bộ phong cách, sidebar, table, badge màu theo state, phân trang, phân quyền AM/Presale/BGĐ → đã có trong Base Context, không lặp lại.
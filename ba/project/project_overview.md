# Project Overview — Hệ thống Quản lý Hồ sơ Thầu

## Tóm tắt một dòng

Hệ thống số hóa toàn bộ vòng đời gói thầu — từ hồ sơ mời thầu, dự thầu, đến kết quả — đảm bảo liên thông dữ liệu, kiểm soát rủi ro và truy vết đầy đủ.

## Mục tiêu cốt lõi

- Số hóa quy trình quản lý hồ sơ đấu thầu từ đầu vào đến kết quả cuối
- Chuẩn hóa dữ liệu và quy trình phối hợp giữa Hỗ trợ kinh doanh – Tư vấn giải pháp – Ban Giám đốc
- Đảm bảo tính liên thông, kiểm soát rủi ro và truy vết toàn bộ vòng đời gói thầu

## Các phân hệ chính

| Phân hệ | Vai trò (1 dòng) |
|---------|------------------|
| Cấu hình hệ thống (Master Data) | Nền tảng định danh và ràng buộc, dữ liệu read-only đồng bộ từ HR/CRM |
| Hồ sơ mời thầu (HSMT) | Tiếp nhận yêu cầu thầu, nhập tay hoặc OCR, tích hợp CRM |
| Hồ sơ dự thầu (HSDT) | Bộ hồ sơ hoàn chỉnh, bắt buộc gắn 1 HSMT, kế thừa toàn bộ yêu cầu |
| Đề xuất nhân sự | Tìm và xác nhận nhân sự nội bộ theo tiêu chí HSMT |
| Hồ sơ hợp đồng tương tự | Tái sử dụng hợp đồng quá khứ chứng minh năng lực |
| Bảng giá dự thầu | Quản lý chi phí, tự tính VAT và tổng giá trị |
| Đề xuất bảo lãnh | Quản lý yêu cầu bảo lãnh, tích hợp hệ thống DRP |
| Thẩm định & Kết quả | Gửi hồ sơ thẩm định và ghi nhận kết quả trúng/không trúng |

## Tích hợp hệ thống ngoài

| Hệ thống | Dữ liệu trao đổi | Hướng |
|----------|-----------------|-------|
| HR | Role, Vị trí, Level | Vào |
| CRM | Khách hàng, Deal | Vào |
| DRP | Đề xuất và file bảo lãnh | Hai chiều |
| Hệ thống thẩm định | Hồ sơ HSDT, ý kiến góp ý | Hai chiều |

## Luồng tổng thể

1. Khởi tạo hệ thống — đồng bộ HR, thiết lập danh mục cấu hình
2. Tiếp nhận HSMT — upload/OCR, link CRM Deal lấy thông tin khách hàng
3. Tạo HSDT — chọn HSMT, kế thừa toàn bộ yêu cầu
4. Hoàn thiện hồ sơ song song — bảng giá, bảo lãnh, nhân sự, hợp đồng tương tự
5. Thẩm định — gửi API, nhận phản hồi
6. Nộp thầu — chuyển trạng thái Đã nộp
7. Kết quả — cập nhật trúng/không trúng, hệ thống tự sinh bản ghi kết quả

## Tác nhân chính

- Hỗ trợ kinh doanh (AM) — tiếp nhận deal, khởi tạo hồ sơ
- Tư vấn giải pháp (Presale) — hoàn thiện hồ sơ kỹ thuật, nhân sự, giá
- Ban Giám đốc — thẩm định, phê duyệt

## Ràng buộc / Nguyên tắc cốt lõi

- Dữ liệu Master Data read-only — không sửa/xóa tại hệ thống thầu
- HSDT bắt buộc gắn 1 HSMT và kế thừa toàn bộ ràng buộc
- Nhân sự không được trùng: đang tham gia HSDT khác hoặc đã trúng thầu trong 1 năm
- Dữ liệu bước trước là ràng buộc bắt buộc cho bước sau (đường ống khép kín)
- Toàn bộ vòng đời gói thầu phải truy vết được
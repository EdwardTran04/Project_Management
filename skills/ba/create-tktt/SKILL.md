---
name: create-tktt
description: Tạo Tài liệu Thiết kế tổng thể (TKTT) theo biểu mẫu BM.02 — tương đương SAD (Software Architecture Document). Trả lời "Kiến trúc tổng thể như thế nào" — kiến trúc ứng dụng, mô hình phân lớp, phân rã chức năng/phân hệ, giao tiếp hệ thống ngoài, giải pháp bảo mật và Quản trị dữ liệu. Dùng khi cần viết TKTT, software architecture document, BM.02, thiết kế tổng thể kiến trúc.
---

# Tạo BM.02 — Thiết kế tổng thể (TKTT)

## Quy tắc bắt buộc

- Giữ nguyên cấu trúc 4 phần, tiêu đề section, header bảng — không thêm/xoá/đổi tên.
- Xoá toàn bộ guidance trong template — thay bằng nội dung thật của dự án.
- Mọi bảng phải có ít nhất 1 dòng dữ liệu thật hoặc ghi `(Không áp dụng)` + lý do.
- Mọi sơ đồ (kiến trúc, phân rã, context, sequence) dùng Mermaid trong code block — không ASCII art.

## Hỏi người dùng

Trước khi bắt đầu, thu thập đủ các thông tin sau:

1. Tên dự án và đơn vị thực hiện
2. Mã hiệu tài liệu và phiên bản (mặc định: 1.0)
3. Người lập / Người xem xét / Người phê duyệt (tên + chức danh)
4. Framework / technology stack dự kiến (nếu đã có quyết định)
5. Danh sách hệ thống ngoài cần tích hợp (tên + giao thức + hướng dữ liệu)
6. Nội dung đầu vào — paste PTYC (BM.01), NFR, as-is-to-be, hoặc mô tả kiến trúc vào đây

Nếu người dùng cung cấp tài liệu đính kèm (PTYC, output của `skill: define-nfr`, `skill: as-is-to-be`), đọc và rút trích các số liệu NFR, context hệ thống trước khi hỏi thêm.

---

## Nội dung 4 phần BM.02

### Phần 1 — Giới thiệu

- Mục đích, phạm vi, đối tượng sử dụng tài liệu.
- Bảng thuật ngữ 3 cột: Thuật ngữ | Định nghĩa | Ghi chú.
- Tài liệu tham khảo: BM.01 (PTYC) đã được Approved và các tài liệu liên quan. Bảng 4 cột: Tên tài liệu | Ngày | Nguồn | Ghi chú.
- Mô tả tổng quan cấu trúc tài liệu (4 phần).

### Phần 2 — Yêu cầu ảnh hưởng đến kiến trúc

Tổng hợp từ NFR và nội dung KH cung cấp. Nếu đã có output của `skill: define-nfr`, lấy số liệu từ đó.

Bảng tổng hợp các yêu cầu kiến trúc:

| Yêu cầu | Hiện tại | Sau 3–5 năm | Ghi chú |
|---------|---------|------------|---------|
| Độ lớn dữ liệu (GB/TB) | | | |
| Transaction/ngày | | | |
| Transaction/giờ cao điểm | | | |
| Concurrent connections tối đa | | | |

Mô tả bổ sung:
- Xử lý real-time vs batch: phân loại từng chức năng.
- Yêu cầu môi trường KH: CSDL, OS, số lớp triển khai.
- Ràng buộc bảo mật ảnh hưởng kiến trúc.
- RPO / RTO yêu cầu backup và phục hồi.

### Phần 3 — Kiến trúc ứng dụng

**3.1 Mô hình phân lớp**
- Mô hình MVC/layered, framework áp dụng.
- Luồng xử lý giao dịch giữa các lớp — dùng Mermaid `sequenceDiagram`. Nếu cần file chất lượng cao hơn dùng `skill: create-sequence-diagram`.

**3.2 Mô hình phân rã chức năng/phân hệ**
- Sơ đồ tổng thể theo module — dùng Mermaid `flowchart TD` hoặc `graph`. Nếu cần file draw.io dùng `skill: create-uml`.
- Bảng mô tả từng phân hệ: STT | Tên phân hệ | Ý nghĩa | Chức năng chính | Giao tiếp nội bộ với phân hệ nào.

**3.3 Giao tiếp với hệ thống ngoài**
- Context diagram — dùng Mermaid `graph LR`.
- Bảng mô tả từng hệ thống: STT | Tên hệ thống | Giao thức (HTTP/HTTPS/TCP/SMPP/Webservice) | Hướng dữ liệu (vào/ra/hai chiều) | Xác thực | Mục đích trao đổi.

### Phần 4 — Giải pháp kiến trúc bổ sung

**4.1 Kiến trúc bảo mật – ATTT**
- Giải pháp VSA, authentication, authorization.
- Firewall, CA, SSL/TLS.
- Bảng phân mức nguy cơ ATTT: Nghiêm trọng / Cao / Trung bình / Thấp.

**4.2 Sao lưu và phục hồi**
- Giải pháp backup, restore, failover.
- Bảng: STT | Loại dữ liệu | Chu kỳ backup | RPO | RTO | Giải pháp.

**4.3 Giải pháp đặc biệt**
- Xử lý dữ liệu lớn (nếu có).
- Giải pháp concurrent cao, performance tuning.
- Ghi `(Không áp dụng)` nếu không có yêu cầu đặc biệt.

**4.4 Tuân thủ Quản trị dữ liệu**
- **CDE:** Giải pháp xác định và quản lý chủ sở hữu dữ liệu.
- **Bảo mật dữ liệu:** Phân quyền, masking, log chia sẻ, SSL/TLS — tuân thủ TC.CNVTQĐ.QTDL.01.
- **Chất lượng dữ liệu:** Giải pháp kiểm tra và cảnh báo — tuân thủ TC.CNVTQĐ.QTDL.02.
- **Siêu dữ liệu:** API truy xuất + data exchange format tích hợp kho tập trung — tuân thủ TC.CNVTQĐ.QTDL.04.6.
- **Lưu trữ & vận hành:** Backup, sao lưu dự phòng — tuân thủ TC.CNVTQĐ.QTDL.03.

---

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| NFR chưa có số liệu | skill: define-nfr | Điền vào Phần 2 |
| Diagram kiến trúc chất lượng cao | skill: create-uml | Từ Phần 3.2 — phân rã phân hệ |
| Sequence diagram luồng xử lý | skill: create-sequence-diagram | Từ Phần 3.1 — mô hình phân lớp |
| Thiết kế chi tiết từng màn hình | skill: create-tkct | TKTT là input đầu vào |
| Thiết kế CSDL | skill: create-tkcssdl | TKTT là input đầu vào |
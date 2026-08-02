---
name: create-ptyc
description: Tạo Tài liệu Phân tích yêu cầu người dùng (PTYC) theo biểu mẫu BM.01 chuẩn Viettel — tương đương SRS theo IEEE 830 / ISO 29148. Trả lời "Hệ thống làm GÌ" — bao gồm tổng quan hệ thống, yêu cầu chức năng/nghiệp vụ (FR), yêu cầu phi chức năng (NFR) và tiêu chuẩn nghiệm thu. Phần mô tả các bước tái sử dụng nguyên bảng luồng trạng thái (transition) từ skill create-process; phần danh sách chức năng tái sử dụng nguyên bảng chức năng từ skill extract-function-list. Dùng khi cần viết PTYC, SRS, tài liệu yêu cầu người dùng, tài liệu BM.01.
---

# Tạo BM.01 — Phân tích yêu cầu người dùng (PTYC)

## Quy tắc bắt buộc

Tuân thủ toàn bộ quy tắc trong `rules/ptyc.md`. Điểm chính:

- Giữ nguyên cấu trúc 6 phần, tiêu đề section, header bảng — không thêm/xoá/đổi tên.
- Xoá toàn bộ guidance trong template — không copy hướng dẫn vào output, thay bằng nội dung thật.
- Mọi bảng phải có ít nhất 1 dòng dữ liệu thật hoặc ghi `(Không áp dụng)` + lý do — không để bảng rỗng.
- Mọi sơ đồ dùng Mermaid trong code block — không ASCII art.

## Hỏi người dùng

Trước khi bắt đầu, thu thập đủ các thông tin sau:

1. Tên dự án và đơn vị thực hiện
2. Mã hiệu tài liệu (ví dụ: PTYC-2026-001) và phiên bản (mặc định: 1.0)
3. Người lập / Người xem xét / Người phê duyệt (tên + chức danh)
4. Tài liệu tham khảo đầu vào (tên + ngày + nguồn)
5. Nội dung yêu cầu dự án — paste MOM khảo sát, BRD, mô tả nghiệp vụ, hoặc bất kỳ tài liệu đầu vào nào vào đây

Nếu người dùng cung cấp tài liệu đính kèm, đọc và rút trích thông tin từ đó trước khi hỏi thêm. Thông tin còn thiếu sau khi đọc tài liệu mới hỏi bổ sung.

Nếu đã có **output của `skill: create-process`** (bảng luồng trạng thái) hoặc **output của `skill: extract-function-list`** (bảng chức năng), yêu cầu người dùng paste vào — các bảng này được **đưa nguyên định dạng** vào Phần 3 (xem bên dưới), không tự bịa lại.

---

## Nội dung 6 phần BM.01

### Phần 1 — Giới thiệu

- **1.1 Mục đích:** Trả lời tài liệu viết về gì, ai dùng, dùng để làm gì.
- **1.2 Phạm vi:** Tên sản phẩm, phạm vi đáp ứng và không đáp ứng, điều kiện nghiệm thu.
- **1.3 Thuật ngữ:** Bảng 3 cột — Thuật ngữ | Định nghĩa | Ghi chú. Lấy từ nội dung dự án KH cung cấp.
- **1.4 Tài liệu tham khảo:** Bảng 4 cột — Tên tài liệu | Ngày phát sinh | Nguồn | Ghi chú.
- **1.5 Mô tả tài liệu:** Tóm tắt nội dung từng phần.

### Phần 2 — Tổng quan hệ thống

- **2.1 Phát biểu bài toán:** Hiện trạng, pain points, hướng tin học hóa. Lấy từ nội dung KH cung cấp hoặc output của `skill: as-is-to-be` nếu đã có.
- **2.2 Mục tiêu hệ thống:** Liệt kê bullet — kết quả cần đạt được.
- **2.3.1 Danh sách nhóm người dùng:** Sơ đồ phân cấp hình cây + bảng 3 cột (STT | Vai trò | Nhiệm vụ).
- **2.3.2 Mô hình tổng thể:** Use Case diagram dùng Mermaid. Nếu cần file chất lượng cao hơn dùng `skill: create-uml`.

### Phần 3 — Yêu cầu chức năng/nghiệp vụ

Với mỗi quy trình/chức năng:

**3.1 Quy trình nghiệp vụ (nếu có):**
- Thông tin chung: mô tả ngắn, tác nhân tham gia.
- Luồng quy trình: cross-function swimlane dùng Mermaid (flowchart). Nếu cần file draw.io dùng `skill: create-activity-diagram`.
  - Đặt tên bước: Động từ + Danh từ, 4–10 bước (không kể Start/Finish).
  - Validate đủ: 1 Start, 1 Finish, bước V có ≥2 nhánh, sau Start phải có A/B/S, trước Finish phải có A/C/D.
- **Mô tả các bước = BẢNG LUỒNG TRẠNG THÁI (workflow transition) — lấy y hệt định dạng output của `skill: create-process`. ĐÚNG 7 cột, không đổi tên/không thêm bớt cột:**

  `STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan`

  - Nếu đã chạy `create-process`: **copy nguyên bảng transition** (cả luồng chính + luồng con + nhánh ngoại lệ) vào đây.
  - `Trạng thái đầu vào` cho phép nhiều giá trị (vd "Chờ xử lý, Từ chối"); bước khởi tạo ghi `N/A`.
  - Bước hệ thống/tự động (quá hạn, batch, callback) ghi tác nhân = "Hệ thống" và vẫn là một dòng transition.
  - Tên bước bám đúng tên trong sơ đồ swimlane để truy vết.

**3.2 Yêu cầu chi tiết chức năng:**
- **Danh sách chức năng = BẢNG CHỨC NĂNG — lấy y hệt định dạng output của `skill: extract-function-list`. ĐÚNG 5 cột:**

  `STT | Chức năng | Tính năng | Mô tả | Độ ưu tiên`

  - Cột *Chức năng* dạng **"Quản lý [Đối tượng]"**; gom theo đối tượng, trong mỗi đối tượng xếp tính năng **Basic → Workflow → Advance**.
  - Tính năng workflow bám đúng "Tên bước" trong bảng transition ở 3.1 để truy vết ngược.
  - Nếu đã chạy `extract-function-list`: **copy nguyên bảng** vào đây.
- Mô hình phân rã chức năng: cây phân rã, mỗi chức năng có mã (F-01, UC-01). Phân loại: Bắt buộc / Mong muốn / Lựa chọn / Tương lai.
- Với mỗi chức năng — bảng thông tin chung:

| Tên chức năng | |
|--------------|---|
| Mô tả | |
| Tác nhân | |
| Điều kiện trước | |
| Điều kiện sau | |
| Ngoại lệ | |
| Yêu cầu đặc biệt | |

- Biểu đồ luồng xử lý: dùng Mermaid (flowchart), thể hiện các thao tác A/B/C/D/S/V.
- Basic Flow: bảng 3 cột — Hành động tác nhân | Phản ứng hệ thống | Dữ liệu (C/R/U/D).
- Alternative Flow: bảng 3 cột (cấu trúc tương tự Basic Flow).
- Ghi chú: business rules, công thức tính, quy tắc sinh mã, validate dữ liệu.

### Phần 4 — Yêu cầu phi chức năng

Lấy số liệu từ nội dung KH cung cấp hoặc output của `skill: define-nfr` nếu đã có.

4 section bắt buộc không được bỏ:
- **4.1 Bảo mật:** Bảng phân mức nguy cơ — Nghiêm trọng / Cao / Trung bình / Thấp.
- **4.4 Hiệu năng:** Bảng 5 KPI — Response time / Throughput / Concurrency / CPU / RAM. Kèm bảng active user, bảng thời gian xử lý.
- **4.10 Vận hành khai thác:** Tool giám sát, mã hóa config, điều kiện triển khai.
- **4.11 Ghi log:** Bảng 3 mức (Cao/Trung bình/Thấp) + thời gian lưu log.
- **4.12 Quản trị dữ liệu:** 5 bảng con — CDE, Bảo mật dữ liệu, Chất lượng dữ liệu, Siêu dữ liệu, Lưu trữ & vận hành.

### Phần 5 — Tiêu chuẩn nghiệm thu

Bảng 2 cột — STT | Chức năng nghiệm thu. Chỉ liệt kê chức năng bắt buộc làm điều kiện nghiệm thu.

### Header tài liệu (bắt buộc)

```
Tập đoàn Công nghiệp - Viễn thông Quân đội | [Đơn vị] | [Tên dự án]
Tài liệu Phân tích yêu cầu người dùng
Mã hiệu dự án: [...] | Mã hiệu tài liệu: [...]
Bảng ghi nhận thay đổi: Ngày | Vị trí | A/M/D | Nguồn gốc | Phiên bản cũ | Mô tả | Phiên bản mới
Trang ký: Người lập | Người xem xét (x2) | Người phê duyệt — ngày + chức danh
```

---

## Bước tiếp theo

| Output | Skill sử dụng | Ghi chú |
|--------|--------------|---------|
| Luồng nghiệp vụ cần diagram riêng | skill: create-activity-diagram | Từ Phần 3 — quy trình nghiệp vụ |
| Use Case / Class diagram | skill: create-uml | Từ Phần 2 — mô hình tổng thể |
| Thiết kế chi tiết màn hình | skill: create-tkct | PTYC là input đầu vào |
| NFR chưa có số liệu | skill: define-nfr | Điền vào Phần 4 |
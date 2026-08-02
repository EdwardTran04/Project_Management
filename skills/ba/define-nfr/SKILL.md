---
name: define-nfr
description: Định nghĩa Non-Functional Requirements theo cấu trúc PTYC sections 4.1–4.12, với chỉ số cụ thể, đo lường được. Output dùng trực tiếp làm input cho skill: create-ptyc Section 4. Tránh để N/A hoặc mô tả chung chung.
---

# Định nghĩa NFR theo cấu trúc PTYC

Output của skill này là input trực tiếp cho `skill: create-ptyc` Phần 4. Cấu trúc output khớp với sections 4.1–4.12 của PTYC.

## Thu thập thông tin

Hỏi từng nhóm theo thứ tự. Với mỗi mục, nếu KH chưa có con số → đề xuất giá trị mặc định hợp lý và xin confirm. Ghi rõ mục nào là "đề xuất chưa confirm".

Nếu người dùng cung cấp tài liệu đính kèm (MOM, BRD, yêu cầu KH), đọc và rút trích các chỉ số NFR từ đó trước khi hỏi thêm.

---

### 4.1 Bảo mật

- Các loại nguy cơ bảo mật liên quan đến hệ thống này?
- Phân loại theo mức độ: **Nghiêm trọng / Cao / Trung bình / Thấp**?
- Bảo mật hệ thống: firewall, chứng chỉ CA, VPN?
- Bảo mật dữ liệu: dữ liệu nào cần mã hóa (PII, tài chính, thông tin nhạy cảm)?
- Authentication: SSO / token / session / OTP?
- Authorization: RBAC hay ABAC?

### 4.2 Sao lưu

- KH có yêu cầu sao lưu không? Nếu có: tần suất (hàng ngày/tuần/tháng)?
- RPO (mất tối đa bao nhiêu dữ liệu khi sự cố)?
- RTO (restore trong bao lâu)?
- Lưu backup ở đâu (on-prem / cloud / offsite)?

### 4.3 Ổn định

- Uptime yêu cầu (99% / 99.9% / 99.95%)?
- Downtime cho phép tối đa theo tháng / năm?
- Maintenance window có được phép? Khung giờ nào?

### 4.4 Hiệu năng

Với mỗi chức năng quan trọng (mật độ cao / nghiệp vụ quan trọng / tích hợp nhiều):
- Response time yêu cầu (P95, P99)?
- Throughput (request/giây hoặc transaction/phút)?
- Số user đồng thời tối đa (Concurrency)?
- Giới hạn CPU usage (%)?
- Giới hạn RAM usage (%)?

### 4.5 Giao tiếp

- Giao diện người dùng: font chữ, độ phân giải tối thiểu, ngôn ngữ, định dạng ngày/số/tiền?
- Phần cứng đặc thù (scanner, máy in, thiết bị ngoại vi)?
- Hệ thống tích hợp ngoài: tên hệ thống + giao thức (REST/SOAP/MQ)?

### 4.6 Hỗ trợ

- Cam kết bảo trì: bao lâu sau go-live?
- Mức ưu tiên xử lý lỗi (Critical < Xh, Major < Yh, Minor < Zh)?

### 4.7 Công nghệ & Ràng buộc

- Tech stack bắt buộc (ngôn ngữ, framework, DB)?
- Browser/OS/platform hỗ trợ?
- Ràng buộc kiến trúc (on-prem, cloud, hybrid)?

### 4.8 Tài liệu người dùng

- HDSD dạng nào (PDF, video, help online)?
- FAQs, đầu mối hỗ trợ (email, SĐT hotline)?

### 4.9 Thành phần mua ngoài

- Có license phần mềm mua ngoài không? License nào?
- Hạn chế sử dụng, điều khoản tương thích?

### 4.10 Vận hành khai thác

- Tool giám sát hệ thống (APM, log aggregator, alert)?
- File cấu hình có cần mã hóa không?
- Điều kiện cần thiết để vận hành: tài khoản, phân quyền, hạ tầng?
- Quy trình deploy / rollback?

### 4.11 Ghi log

- Loại log nghiệp vụ cần ghi (audit log, transaction log, error log)?
- Với mỗi loại: nội dung ghi (ai làm gì, khi nào, dữ liệu trước/sau)?
- Dữ liệu quan trọng cần log đặc biệt (tiền, hàng hóa, dữ liệu lõi)?
- Phân mức trọng số: **Cao / Trung bình / Thấp**?
- Thời gian lưu tối thiểu (log CSDL: mặc định không xóa)?

### 4.12 Quản trị dữ liệu

**CDE (Critical Data Elements):**
- Các trường dữ liệu quan trọng cần quản trị? Bảng nào? Loại dữ liệu? Chủ sở hữu?

**Bảo mật dữ liệu:**
- Trường nào cần bảo mật? Phân cấp bảo mật (Confidential/Internal/Public)?
- Role nào được xem/sửa? Trường nào cần masking?

**Chất lượng dữ liệu:**
- Rule kiểm tra chất lượng: Chính xác / Đầy đủ / Nhất quán / Kịp thời / Duy nhất / Hợp lệ?
- Câu lệnh check cụ thể (SQL hoặc mô tả)?

**Siêu dữ liệu:**
- Loại siêu dữ liệu cần quản lý (technical metadata, business metadata)?
- Thông tin cần lưu về mỗi loại?

**Lưu trữ & Vận hành:**
- Thời gian lưu log?
- Thời gian lưu các miền dữ liệu nghiệp vụ?
- Tần suất sao lưu dự phòng, backup?

---

## Output

Tạo NFR Specification theo template sau:

---

# NFR Specification — [Tên hệ thống]

**Ngày:** dd/mm/yyyy
**Dự án:** [Tên dự án]

---

## 4.1 Bảo mật

### Bảng phân mức nguy cơ

| Mức độ | Nguy cơ |
|--------|---------|
| Nghiêm trọng | [SQL injection, privilege escalation, data breach…] |
| Cao | [XSS, session hijacking, unauthorized access…] |
| Trung bình | [Brute force, log injection…] |
| Thấp | [Information disclosure ở log…] |

### Biện pháp

| Loại | Yêu cầu |
|------|---------|
| Hệ thống | [Firewall, CA, VPN…] |
| Dữ liệu | [Mã hóa AES-256 cho PII, TLS 1.2+ cho truyền dẫn…] |
| Xác thực | [SSO / JWT / OTP…] |
| Phân quyền | [RBAC — liệt kê role chính…] |

---

## 4.2 Sao lưu

| Chỉ số | Giá trị |
|--------|---------|
| Tần suất backup | [Hàng ngày / Thứ 6 hàng tuần…] |
| RPO | [≤ X giờ] |
| RTO | [≤ Y giờ] |
| Vị trí lưu | [On-prem / Cloud / Offsite] |

> Nếu KH không yêu cầu sao lưu: ghi rõ "Khách hàng không có yêu cầu sao lưu" — KHÔNG để N/A.

---

## 4.3 Ổn định

| Chỉ số | Giá trị |
|--------|---------|
| Uptime | ≥ X% |
| Downtime tối đa / tháng | ≤ X giờ |
| Maintenance window | [Thứ 7, 22:00–02:00] hoặc Không có |

---

## 4.4 Hiệu năng

| ID | Chức năng | Response time | Throughput | Concurrency | CPU | RAM |
|----|-----------|--------------|-----------|-------------|-----|-----|
| NFR-P-001 | [Tên chức năng] | ≤ Xms (P95) | X req/s | X users | ≤ X% | ≤ X% |

---

## 4.5 Giao tiếp

### 4.5.1 Giao diện người dùng

| Thuộc tính | Yêu cầu |
|-----------|---------|
| Font | [Arial 12pt / Roboto…] |
| Độ phân giải tối thiểu | [1280×768] |
| Ngôn ngữ | [Tiếng Việt / Tiếng Anh] |
| Định dạng ngày | [dd/mm/yyyy] |
| Định dạng tiền | [#.###.### VND] |

### 4.5.2 Phần cứng

[Mô tả hoặc "Không áp dụng"]

### 4.5.3 Hệ thống tích hợp

| Hệ thống | Giao thức | Mô tả |
|----------|----------|-------|
| [Tên] | REST / SOAP / MQ | [Chức năng tích hợp] |

---

## 4.6 Hỗ trợ

| Mức lỗi | SLA xử lý |
|---------|----------|
| Critical | ≤ X giờ |
| Major | ≤ Y giờ |
| Minor | ≤ Z ngày |

Bảo trì: [X tháng / X năm] sau go-live.

---

## 4.7 Công nghệ & Ràng buộc

| Thành phần | Yêu cầu |
|-----------|---------|
| Ngôn ngữ / Framework | [Java Spring Boot / .NET / Node.js…] |
| Database | [PostgreSQL / Oracle / MySQL…] |
| Browser hỗ trợ | [Chrome ≥ 90, Firefox ≥ 88…] |
| Kiến trúc | [On-prem / Cloud AWS / Hybrid] |

---

## 4.8 Tài liệu người dùng

| Loại | Mô tả |
|------|-------|
| HDSD | [PDF / Video hướng dẫn] |
| Help online | [Có / Không] |
| Đầu mối hỗ trợ | Email: … / SĐT: … |

---

## 4.9 Thành phần mua ngoài

[Mô tả license + ràng buộc, hoặc "Không áp dụng"]

---

## 4.10 Vận hành khai thác

| Hạng mục | Yêu cầu |
|----------|---------|
| Tool giám sát | [Prometheus + Grafana / ELK Stack / Datadog…] |
| Mã hóa config | [Có — dùng Vault / KMS / Không] |
| Phân quyền vận hành | [DevOps team, account riêng, không dùng root] |
| Quy trình deploy | [CI/CD pipeline — Jenkins / GitLab CI…] |
| Quy trình rollback | [Blue-green / Feature flag / Restore snapshot] |

---

## 4.11 Ghi log

| Mức | Loại log | Nội dung ghi | Thời gian lưu |
|-----|----------|-------------|--------------|
| Cao | Transaction log (tiền, đơn hàng, dữ liệu lõi) | User ID, timestamp, action, giá trị trước/sau | Không xóa (vĩnh viễn) |
| Trung bình | Audit log (đăng nhập, phân quyền, thay đổi cấu hình) | User ID, IP, timestamp, action | ≥ X năm |
| Thấp | Error log, debug log | Stack trace, error code, request payload | ≥ X tháng |

---

## 4.12 Quản trị dữ liệu

### CDE (TC.CNVTQĐ.QTDL.05.5)

| STT | Tên trường | Mô tả | Bảng dữ liệu | Trường dữ liệu | Loại dữ liệu | Chủ sở hữu |
|-----|-----------|-------|-------------|--------------|------------|-----------|
| 1 | | | | | | |

### Bảo mật dữ liệu (TC.CNVTQĐ.QTDL.01)

| STT | Tên trường | Hệ thống - Module | Phân cấp bảo mật | Phân loại | Role & Phân quyền | Masking |
|-----|-----------|-----------------|-----------------|----------|-----------------|---------|
| 1 | | | Confidential / Internal / Public | PII / Financial / … | [Role được xem] | Có / Không |

Giải pháp đảm bảo: [mô tả phân cấp, masking rule, hình thức chia sẻ, giám sát log bất thường]

### Chất lượng dữ liệu (TC.CNVTQĐ.QTDL.02)

| Bảng | Tiêu chuẩn | Luật check | Đối tượng check | Trường dữ liệu | Mô tả chi tiết | Câu lệnh check |
|------|-----------|-----------|----------------|--------------|--------------|--------------|
| | Chính xác / Đầy đủ / Nhất quán / Kịp thời / Duy nhất / Hợp lệ | | | | | |

### Siêu dữ liệu (TC.CNVTQĐ.QTDL.04.6)

| STT | Hệ thống | Loại siêu dữ liệu | Các thông tin cần quản lý |
|-----|----------|-----------------|--------------------------|
| 1 | | Technical / Business | |

### Lưu trữ và vận hành (TC.CNVTQĐ.QTDL.03)

| Miền dữ liệu | Thời gian lưu | Backup | Ghi chú |
|-------------|--------------|--------|---------|
| Log hệ thống | Không xóa | Hàng ngày | |
| Dữ liệu nghiệp vụ | ≥ X năm | Hàng tuần | |
| Dữ liệu archive | ≥ X năm | Hàng tháng | |

---

## Giá trị đề xuất chưa được KH confirm

| Section | Chỉ số | Giá trị đề xuất | Cần confirm với |
|---------|--------|----------------|----------------|
| | | | KH / PM / Dev Lead |

---

Hỏi user: "Lưu vào file không?" → nếu có: xuất file, tên gợi ý `nfr_[tên-dự-án].md`.

**Sau khi hoàn thành:** Nhắc user kiểm tra bảng "Giá trị đề xuất chưa confirm" và xác nhận với KH/PM trước khi dùng làm input cho `skill: create-ptyc`.
# APQC Process Classification Framework (PCF) - Hướng dẫn chi tiết

## APQC là gì?

**APQC** (American Productivity & Quality Center) là một tổ chức phi lợi nhuận chuyên về benchmarking và best practices, được thành lập từ 1977. Họ phát triển **Process Classification Framework (PCF)** - một bộ khung phân loại process kinh doanh được sử dụng rộng rãi trên toàn cầu.

**Website**: https://www.apqc.org/process-frameworks

## Tại sao PCF có giá trị cho BA?

1. **Common language** - PCF cho bạn vocabulary chuẩn để mô tả process bất kỳ company nào
2. **Comprehensive** - Cover 12-13 Level 1 categories đủ cho mọi loại business
3. **Industry-specific variants** - Có version riêng cho 25+ industry
4. **Free** - Bạn có thể download (sau khi register)
5. **Benchmarking-ready** - Khi bạn cần so sánh client với # APQC Process Classification Framework (PCF) - Hướng dẫn chi tiết

> Đọc file này khi trả lời câu hỏi loại E (định vị process) hoặc khi cần neo một quy trình vào bức tranh tổng thể của domain.

## APQC là gì?

**APQC** (American Productivity & Quality Center) là tổ chức phi lợi nhuận về benchmarking và best practices (thành lập 1977). Họ phát triển **Process Classification Framework (PCF)** - bộ khung phân loại process kinh doanh dùng rộng rãi toàn cầu.

**Website**: https://www.apqc.org/process-frameworks

## Tại sao PCF có giá trị cho BA?

1. **Common language** - vocabulary chuẩn để mô tả process bất kỳ company nào
2. **Comprehensive** - 12-13 Level 1 categories đủ cho mọi loại business
3. **Industry-specific variants** - có version riêng cho 25+ industry
4. **Vendor-neutral** - không bias theo product/tool
5. **Benchmarking-ready** - baseline để so sánh client với industry

## Cấu trúc PCF - 5 Levels

```
Level 1: Category   (vd "3.0 Market and Sell Products and Services")
Level 2: Process Group (vd "3.1 Understand markets, customers, and capabilities")
Level 3: Process    (vd "3.1.1 Perform customer and market intelligence analysis")
Level 4: Activity   (vd "3.1.1.1 Conduct customer and market research")
Level 5: Task       (chi tiết nhất, không phải process nào cũng có)
```

→ Mỗi item có unique Process ID dạng X.Y.Z.W để reference.

## 13 Categories (PCF Cross-Industry)

| ID | Category | Loại |
|----|----------|------|
| 1.0 | Develop Vision and Strategy | Operating |
| 2.0 | Develop and Manage Products and Services | Operating |
| 3.0 | Market and Sell Products and Services | Operating |
| 4.0 | Deliver Physical Products | Operating |
| 5.0 | Deliver Services | Operating |
| 6.0 | Manage Customer Service | Operating |
| 7.0 | Develop and Manage Human Capital | Management & Support |
| 8.0 | Manage Information Technology (IT) | Management & Support |
| 9.0 | Manage Financial Resources | Management & Support |
| 10.0 | Acquire, Construct, and Manage Assets | Management & Support |
| 11.0 | Manage Enterprise Risk, Compliance, Remediation, and Resiliency | Management & Support |
| 12.0 | Manage External Relationships | Management & Support |
| 13.0 | Develop and Manage Business Capabilities | Management & Support |

**Operating (1-6)**: trực tiếp tạo value cho customer.
**Management & Support (7-13)**: hỗ trợ operating.

## Industry-specific PCFs nổi bật

Aerospace & Defense · Automotive · Banking · Broadcasting · Consumer Electronics · Consumer Products · Education · Electric Utilities · Government · Healthcare Payer · Healthcare Provider · Petroleum Downstream/Upstream · Pharmaceutical · Retail · Telecommunications · ... (danh sách cập nhật trên APQC).

> 💡 Domain chưa có PCF riêng (fintech, agritech...) → dùng PCF gần nhất (banking cho fintech, retail cho e-commerce) và tự điều chỉnh.

## Cách dùng PCF để định vị process

1. **Tìm & xem PCF phù hợp** tại apqc.org (register free).
2. **Skim Level 1-2** để có big picture, không cố nhớ hết.
3. **Map vào client**: với mỗi Level 2, hỏi — client có process này không? gọi là gì? làm thế nào? pain point gì? → nguồn vàng cho discovery.
4. **Deep dive 1-3 category** mà dự án focus (đọc Level 3-4).
5. **Dùng Process ID làm anchor** xuyên suốt: "requirement này liên quan APQC 3.5.2".

## Ví dụ: loan origination cho ngân hàng

```
4.0 Deliver Products and Services
   4.3 Manage Lending
      4.3.1 Originate loans (← FOCUS dự án)
         4.3.1.1 Solicit and accept loan applications
         4.3.1.2 Evaluate credit
         4.3.1.3 Approve/decline loan
         4.3.1.4 Disburse funds
      4.3.2 Service loans (ngoài scope)
```

→ Ngay lập tức có structure để define scope, identify stakeholders, build process flow.

## Limitations

1. PCF mô tả "WHAT" chứ không "HOW".
2. Update không thường xuyên — process emerging (crypto banking) có thể chưa có.
3. Cross-industry PCF khá generic → ưu tiên industry-specific nếu có.
4. Không thay thế domain knowledge — PCF là khung, knowledge là nội dung.industry, PCF chính là baseline

## Cấu trúc PCF - 5 Levels

```
Level 1: Category (ví dụ "3.0 Market and Sell Products and Services")
   ↓
Level 2: Process Group (ví dụ "3.1 Understand markets, customers, and capabilities")
   ↓
Level 3: Process (ví dụ "3.1.1 Perform customer and market intelligence analysis")
   ↓
Level 4: Activity (ví dụ "3.1.1.1 Conduct customer and market research")
   ↓
Level 5: Task (chi tiết nhất, đôi khi không có cho mọi process)
```

→ **Mỗi item có unique Process ID** dạng X.Y.Z.W để reference dễ dàng.

## 13 Categories chính (PCF Cross-Industry)

| ID | Category | Loại |
|----|----------|------|
| 1.0 | Develop Vision and Strategy | Operating |
| 2.0 | Develop and Manage Products and Services | Operating |
| 3.0 | Market and Sell Products and Services | Operating |
| 4.0 | Deliver Physical Products | Operating |
| 5.0 | Deliver Services | Operating |
| 6.0 | Manage Customer Service | Operating |
| 7.0 | Develop and Manage Human Capital | Management & Support |
| 8.0 | Manage Information Technology (IT) | Management & Support |
| 9.0 | Manage Financial Resources | Management & Support |
| 10.0 | Acquire, Construct, and Manage Assets | Management & Support |
| 11.0 | Manage Enterprise Risk, Compliance, Remediation, and Resiliency | Management & Support |
| 12.0 | Manage External Relationships | Management & Support |
| 13.0 | Develop and Manage Business Capabilities | Management & Support |

**Operating processes** (1-6): trực tiếp tạo value cho customer.
**Management & Support** (7-13): hỗ trợ operating processes.

## Industry-specific PCFs có sẵn

Một số PCF nổi bật (danh sách cập nhật trên APQC):

- Aerospace & Defense
- Automotive
- Banking
- Broadcasting
- Consumer Electronics
- Consumer Products
- Education
- Electric Utilities
- Government
- Healthcare Payer
- Healthcare Provider
- Petroleum Downstream
- Petroleum Upstream
- Pharmaceutical
- Retail
- Telecommunications
- ... (và nhiều cái khác)

> 💡 **Tip cho domain Việt Nam**: Nhiều domain chưa có PCF riêng (như fintech, agritech). Lúc đó dùng PCF gần nhất (banking cho fintech, retail cho e-commerce) và tự điều chỉnh.

## Cách sử dụng PCF cho việc học domain mới

### Step 1: Download PCF phù hợp

1. Truy cập https://www.apqc.org/process-frameworks
2. Register free account
3. Tìm và download PCF của industry bạn cần
4. Files thường có format Excel/PDF

### Step 2: Skim toàn bộ trong 2-3 giờ

- Đọc lướt qua tất cả Level 1 và Level 2
- **Không cố nhớ hết** - chỉ cần có "big picture"
- Highlight những process bạn không hiểu

### Step 3: Map vào client/project

Với mỗi Level 2 process group, hỏi:
- Client của tôi có process này không?
- Họ gọi nó là gì? (terminology mapping)
- Họ làm như thế nào? (process variation)
- Pain points hiện tại là gì?

→ Đây là source vàng cho **discovery interview questions**.

### Step 4: Deep dive vào focus area

Project của bạn thường focus vào 1-3 categories. Với những category đó:
- Đọc kỹ Level 3-4
- Tìm hiểu best practices APQC khuyến nghị
- So sánh client thực tế với best practice

### Step 5: Maintain PCF như "anchor"

Trong suốt project, dùng Process ID của PCF làm reference:
- Khi viết requirement: "This relates to APQC PCF 3.5.2"
- Khi document process: dùng cấu trúc PCF
- Khi report gap: rõ ràng gap đang ở category nào

## Ví dụ thực tế: Map vào project banking

**Project**: Triển khai loan origination system cho ngân hàng XYZ.

**APQC Banking PCF mapping**:
```
4.0 Deliver Products and Services
   4.3 Manage Lending
      4.3.1 Originate loans (← FOCUS chính của project)
         4.3.1.1 Solicit and accept loan applications
         4.3.1.2 Evaluate credit
         4.3.1.3 Approve/decline loan
         4.3.1.4 Disburse funds
      4.3.2 Service loans
         4.3.2.1 Manage loan accounts
         ...
```

→ Ngay lập tức bạn có structure để:
- Define scope rõ ràng (project chỉ cover 4.3.1, không cover 4.3.2)
- Identify stakeholders (ai own mỗi sub-process)
- Build process flow chuẩn

## Limitations cần biết

1. **PCF mô tả "WHAT" chứ không "HOW"** - bạn vẫn cần biết best practices riêng
2. **Update không thường xuyên** - một số process emerging (như crypto banking) chưa có
3. **Cross-industry PCF khá generic** - nên ưu tiên industry-specific version nếu có
4. **Không thay thế được domain knowledge** - PCF là khung, knowledge thực mới là nội dung

## Resources bổ sung từ APQC

Ngoài PCF, APQC còn cung cấp:
- **Benchmarking data**: KPI/metric benchmarks theo industry
- **Best practices research**: case studies về process improvement
- **Training & certifications**
- **Community of practice**

→ Free account đủ access PCF. Membership trả phí mở thêm nhiều content.

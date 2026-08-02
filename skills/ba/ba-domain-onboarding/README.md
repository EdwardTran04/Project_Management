# BA Domain Onboarding Skill — Domain Expert Tutor

> **Hỏi bất cứ điều gì về một domain, nhận lời giải thích cặn kẽ như từ một chuyên gia ngành — dưới lăng kính của một Business Analyst.**

Thay vì tự mò mẫm Google, bạn hỏi Claude như hỏi một expert ngồi cạnh: "Quy trình thanh toán quốc tế của ngân hàng hoạt động ra sao?", "Bancassurance là gì?", "L/C khác nhờ thu thế nào?" — và được giải thích rõ ràng, có thể hỏi tiếp vô hạn.

## Dành cho ai
- **BA / Consultant / PM** sắp vào dự án ở một ngành xa lạ
- Bất kỳ ai cần hiểu nhanh khái niệm, thuật ngữ, quy trình nghiệp vụ của một lĩnh vực

## Cách hoạt động
Skill đóng vai **Expert Tutor**. Mỗi câu trả lời:
1. Neo plain-language — khái niệm đó là gì, giải quyết vấn đề gì
2. Giải thích nội dung (luồng nghiệp vụ / khái niệm / so sánh)
3. **Lăng kính BA** — actors, systems, data, business rules, pain points, KPIs, compliance
4. **Cờ verify** — fact dễ đổi (quy định, chuẩn, players) được web_search và đánh dấu
5. Mở nhánh đào sâu + mời hỏi tiếp

**Hai quy tắc cốt lõi:**
- **Không jargon trần**: mọi thuật ngữ được làm rõ ngay khi xuất hiện, ở mức độ phân tầng (trung tâm = giải thích đủ, hỗ trợ = gloss ngắn, nhánh sâu = nêu tên rồi đẩy thành nhánh hỏi tiếp).
- **Verify bắt buộc**: quy định/chuẩn/phí/players/trends luôn được search trước khi khẳng định.

## Quick Start
```
"Tôi muốn tìm hiểu quy trình thanh toán quốc tế của ngân hàng"
"Bancassurance là gì và BA cần lưu ý gì?"
"So sánh L/C và nhờ thu trong thanh toán quốc tế"
"Mới join dự án cảng biển, giải thích nghiệp vụ khai thác cảng"
```
Cho thêm context (sub-domain, vùng quy định VN/US/Global) sẽ nhận câu trả lời sát hơn.

## Cấu trúc skill
```
ba-domain-onboarding/
├── SKILL.md                          ← Workflow chính (Claude tự đọc)
├── README.md                         ← File này
├── references/                       ← Load on-demand
│   ├── golden-examples.md            ← Ví dụ mẫu đạt chuẩn (loại A + B)
│   ├── ba-lens.md                    ← 8 chiều lăng kính BA
│   ├── apqc-framework-guide.md       ← Khung process APQC PCF
│   ├── recommended-books.md          ← Sách theo domain
│   └── authoritative-resources.md    ← Nguồn web theo domain
└── templates/                        ← Tùy chọn, khi muốn lưu lại
    ├── domain-glossary.md
    └── domain-knowledge-map.md
```
→ Bạn không cần đọc các file references — Claude tự load khi cần.

## FAQ
**Có thay thế việc đọc sách/gặp expert không?** Không. Skill cho kiến thức nền đủ để gặp expert tự tin; đào sâu thật sự vẫn cần đọc + thực chiến.

**Accuracy?** Khái niệm/quy trình ổn định: cao. Quy định/URL/trends: skill bắt buộc verify, nhưng vẫn nên đối chiếu nguồn gốc trước khi đưa vào BRD/SRS.

**Output tiếng Việt hay Anh?** Theo ngôn ngữ bạn hỏi; thuật ngữ giữ gốc tiếng Anh kèm giải thích tiếng Việt.

**Domain quá niche không có trong references?** Cứ hỏi — skill dùng web_search dựng kiến thức nền từ regulator, hiệp hội ngành, top vendors.

## Khi nào KHÔNG phù hợp
Bạn đã là expert lâu năm · cần phân tích 1 công ty cụ thể · cần dự báo/tư vấn chiến lược.

---
*Expert tutor cho BA. Vocabulary first. Không jargon trần. Verify mọi fact dễ đổi.*
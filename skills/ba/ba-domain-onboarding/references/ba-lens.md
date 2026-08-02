# Lăng kính BA — 8 chiều khai thác bất kỳ quy trình nghiệp vụ nào

> File này để expert tutor làm sâu phần [3] "Lăng kính BA" trong response pattern.
> Khi giải thích một process, chạy ngầm cả 8 chiều, chỉ nói ra những chiều đáng kể.

## Mục lục
1. Actors
2. Trigger / Events
3. Data / Chứng từ
4. Systems
5. Business Rules
6. Pain Points
7. KPIs
8. Compliance
9. Cách dùng tổng hợp

---

## 1. Actors (Ai tham gia)

**Câu hỏi cốt lõi**: Ai khởi tạo, ai xử lý, ai phê duyệt, ai thụ hưởng?

- Phân biệt actor *bên trong* (nhân viên, bộ phận) và *bên ngoài* (khách hàng, đối tác, regulator).
- Mỗi actor thường tương ứng một role/permission trong hệ thống → liên quan trực tiếp tới thiết kế phân quyền.
- Lưu ý actor "vô hình": hệ thống tự động, batch job, bên thứ ba (vd mạng SWIFT, cổng thanh toán).

**BA dùng để**: vẽ swimlane, xác định stakeholder, thiết kế role-based access.

---

## 2. Trigger / Events (Cái gì khởi động)

**Câu hỏi cốt lõi**: Process bắt đầu khi nào, do sự kiện gì?

- Trigger thủ công (khách nộp đơn) vs tự động (đến hạn, đạt ngưỡng).
- Event giữa chừng: cái gì làm process rẽ nhánh, tạm dừng, hủy.
- Sự kiện kết thúc: khi nào coi là "done".

**BA dùng để**: định nghĩa entry/exit criteria, state machine, event-driven design.

---

## 3. Data / Chứng từ (Thông tin luân chuyển)

**Câu hỏi cốt lõi**: Dữ liệu/tài liệu nào đi vào, biến đổi, đi ra?

- Master data (khách hàng, sản phẩm) vs transaction data (giao dịch).
- System of record: dữ liệu này "thật" ở đâu, ai là nguồn chuẩn.
- Chứng từ giấy/điện tử kèm theo (vận đơn, hóa đơn, bộ chứng từ L/C...).

**BA dùng để**: data model, định nghĩa field, mapping, integration contract.

---

## 4. Systems (Hệ thống hỗ trợ)

**Câu hỏi cốt lõi**: Process này chạy trên/qua những hệ thống nào?

- Hệ thống lõi (core banking, ERP, LOS...), hệ thống vệ tinh, tích hợp giữa chúng.
- Khâu nào còn thủ công/Excel — thường là điểm đau và cơ hội tự động hóa.
- Điểm tích hợp (API, file batch, message queue) — nơi hay phát sinh lỗi.

**BA dùng để**: context diagram, integration map, xác định scope hệ thống.

---

## 5. Business Rules (Quy tắc, điều kiện, biến thể)

**Câu hỏi cốt lõi**: Quy tắc nào chi phối? Có những trường hợp đặc biệt nào?

- Điều kiện rẽ nhánh (nếu... thì...), ngưỡng phê duyệt, hạn mức.
- Biến thể (variants): cùng process nhưng khác nhau theo loại khách/sản phẩm/kênh.
- Exception: trường hợp ngoại lệ, xử lý tay.

**BA dùng để**: decision table, business rule catalogue — *mỏ vàng* vì rule ẩn là nguồn lỗi requirement lớn nhất.

---

## 6. Pain Points (Chỗ trục trặc, rủi ro)

**Câu hỏi cốt lõi**: Khâu nào chậm, dễ lỗi, tốn người, gây bức xúc?

- Bottleneck, rework, xử lý thủ công, chờ đợi giữa các bước.
- Rủi ro: gian lận, sai sót, mất dữ liệu, vi phạm compliance.
- Đây thường chính là *lý do dự án tồn tại* → BA phải đào sâu nhất.

**BA dùng để**: định vị giá trị dự án, ưu tiên hóa requirement, business case.

---

## 7. KPIs (Đo lường thành công)

**Câu hỏi cốt lõi**: "Tốt" nghĩa là gì? Đo bằng con số nào?

- Hiệu suất (thời gian xử lý, throughput, STP rate), chất lượng (tỷ lệ lỗi), chi phí.
- Baseline hiện tại vs mục tiêu sau dự án → cơ sở đo ROI.

**BA dùng để**: success criteria, acceptance criteria, đo lường before/after.

---

## 8. Compliance (Ràng buộc pháp lý)

**Câu hỏi cốt lõi**: Quy định/chuẩn nào bắt buộc phải tuân thủ?

- Luật, thông tư, nghị định trong nước + chuẩn quốc tế (Basel, UCP, ISO, GDPR...).
- Yêu cầu lưu vết (audit trail), báo cáo cho regulator, bảo mật dữ liệu.
- ⚠️ Đây là chiều **bắt buộc verify bằng web_search** vì quy định thay đổi liên tục.

**BA dùng để**: non-functional requirement, audit/log design, ràng buộc thiết kế.

---

## 9. Cách dùng tổng hợp

- **Process lớn**: surface 4-6 chiều liên quan nhất, mỗi chiều 1-2 câu.
- **Concept nhỏ**: thường chỉ 1 chiều ("đây là lý do có khâu X").
- Mỗi chiều có thể đẻ ra một câu hỏi sắc để BA mang đi gặp khách hàng — gài tự nhiên vào phần mở nhánh, không liệt kê thành danh sách dài.
- Luôn ưu tiên chiều **Pain Points** và **Business Rules** khi BA chuẩn bị cho dự án cải tiến/triển khai hệ thống — đó là nơi giá trị nằm.
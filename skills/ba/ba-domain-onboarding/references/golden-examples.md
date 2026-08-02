# Ví dụ vàng — chuẩn để bám theo

> File này tách khỏi SKILL.md để giữ skill nhẹ. **Chỉ đọc khi cần một khuôn mẫu đầy đủ** —
> ví dụ khi onboard vào domain lạ, khi câu trả lời loại A (process lớn) đầu tiên trong phiên,
> hoặc khi muốn đối chiếu xem câu trả lời của mình đã đạt chuẩn "không jargon trần" + phân tầng chưa.
> Nguyên tắc đã nằm đủ trong SKILL.md §2–§8; file này chỉ minh họa cách áp dụng.

---

## Ví dụ A — Process lớn (loại A): Quy trình thanh toán quốc tế của ngân hàng

**BA hỏi:** *"Tôi muốn tìm hiểu quy trình thanh toán quốc tế của ngân hàng."*

> Thanh toán quốc tế là việc chuyển tiền giữa hai bên ở hai quốc gia khác nhau qua hệ thống ngân hàng. Bài toán cốt lõi nó giải quyết: hai bên thường *không có tài khoản chung* và *không hoàn toàn tin nhau*, nên cần ngân hàng làm trung gian dàn xếp.
>
> Trước hết, một khái niệm nền mà mọi thứ khác dựa lên: **tài khoản đại lý (correspondent banking)**. Ngân hàng VN không có chi nhánh khắp thế giới, nên họ mở tài khoản tại ngân hàng nước ngoài để giữ tiền ở đó. Tài khoản "của mình gửi ở ngân hàng bạn" gọi là **nostro**, còn "ngân hàng bạn gửi ở mình" gọi là **vostro**. Điểm mấu chốt với BA: khi nói "chuyển tiền quốc tế", tiền không thật sự *bay* qua biên giới — các ngân hàng chỉ **ghi nợ/ghi có lẫn nhau trên các tài khoản nostro/vostro này**. Hệ quả: luôn phải có khâu **đối soát (reconciliation)** để khớp số dư.
>
> Vậy lệnh chuyển đi bằng cách nào? Qua **SWIFT** — một mạng nhắn tin chuẩn hóa giữa các ngân hàng. Lưu ý: SWIFT *chỉ truyền thông điệp/lệnh*, không chuyển tiền. Lệnh chuyển tiền cá nhân hiện đi dưới định dạng **MT103**; ngành đang chuyển dần sang chuẩn mới giàu dữ liệu hơn là **ISO 20022** (một nhánh có thể đào sâu sau).
>
> Trên nền đó, BA sẽ gặp 3 *phương thức*, khác nhau ở **mức độ ngân hàng đứng ra bảo đảm**:
> - **Chuyển tiền điện (T/T – Telegraphic Transfer)**: ngân hàng chỉ gửi lệnh theo yêu cầu khách, *không cam kết gì về hàng hóa*. Nhanh, rẻ, nhưng rủi ro cho bên trả trước.
> - **Thư tín dụng (L/C – Letter of Credit)**: ngân hàng **cam kết trả tiền thay người mua** cho người bán, *với điều kiện* xuất trình đúng bộ chứng từ. Giải bài toán "hai bên không tin nhau"; luật chơi quốc tế cho L/C là **UCP 600** (gloss nhẹ → nhánh sâu).
> - **Nhờ thu kèm chứng từ (Documentary Collection)**: ngân hàng thu hộ, trao chứng từ khi người mua thanh toán/chấp nhận, *nhưng không cam kết trả thay* như L/C. Nằm giữa T/T và L/C về mức bảo đảm.
>
> **Dưới lăng kính BA**: hệ thống liên quan thường gồm core banking, SWIFT gateway và hệ thống **sàng lọc cấm vận/AML** (AML = chống rửa tiền — kiểm tra giao dịch/đối tượng có trong danh sách trừng phạt hay có dấu hiệu rửa tiền). Pain point kinh điển là tỷ lệ **STP (Straight-Through Processing — xử lý tự động hoàn toàn)** thấp, do thông tin sai lệch khiến giao dịch "rớt" ra xử lý thủ công. KPI hay đo là STP rate và thời gian xử lý so với **cut-off time** (mốc giờ trong ngày; lệnh sau mốc bị đẩy sang ngày kế tiếp).
>
> ⚠️ Hai thứ cần verify trước khi đưa vào tài liệu: lộ trình chuyển MT → ISO 20022, và các thông tư NHNN về quản lý ngoại hối hiện hành — để tôi search cập nhật.
>
> Muốn đào sâu nhánh nào: (1) cơ chế L/C và UCP 600 từng bước, (2) ISO 20022 khác MT ra sao, hay (3) khâu compliance/sàng lọc cấm vận?

**Vì sao đây là chuẩn vàng:** mỗi thuật ngữ (correspondent banking, nostro/vostro, SWIFT, T/T, L/C, AML, STP, cut-off) đều được làm rõ *ngay khi xuất hiện*; UCP 600 và ISO 20022 chỉ gloss nhẹ rồi đẩy thành nhánh — đúng tinh thần phân tầng (§3). Phần thân theo loại A (luồng end-to-end + actors + biến thể); lăng kính BA chọn lọc đúng chiều đáng kể; có cờ verify; kết bằng 2–3 nhánh mở.

---

## Ví dụ B — Concept nhỏ (loại B): "Bancassurance là gì?"

> Bancassurance là mô hình **ngân hàng bán sản phẩm bảo hiểm** của một công ty bảo hiểm cho chính khách hàng của mình. Sinh ra để giải hai bài toán cùng lúc: công ty bảo hiểm cần kênh phân phối có sẵn tệp khách, còn ngân hàng cần thêm nguồn thu phí (hoa hồng) ngoài tín dụng.
>
> Cơ chế thường thấy: ngân hàng ký **thỏa thuận phân phối độc quyền** với một hãng bảo hiểm, nhân viên ngân hàng (hoặc đội chuyên trách) tư vấn và bán hợp đồng ngay tại quầy/trên app. Dưới lăng kính BA: điểm cần soi nhất là **ranh giới dữ liệu và quy trình bồi thường** — hợp đồng do bên bảo hiểm quản lý, nhưng điểm chạm khách hàng lại ở ngân hàng, nên luôn có bài toán tích hợp + phân định trách nhiệm.
>
> Đào sâu được: (1) các mô hình hợp tác (độc quyền vs đa đối tác), (2) luồng dữ liệu ngân hàng ↔ bảo hiểm, hay (3) quy định về bán chéo bảo hiểm qua ngân hàng ở VN (cần verify thông tư hiện hành)?

**Vì sao là chuẩn cho loại B:** gọn (~150 từ), chỉ **1 câu** lăng kính BA, không nhồi đủ 8 chiều, gloss thuật ngữ tại chỗ, kết bằng nhánh mở. Đúng tinh thần §8 — câu hỏi nhỏ thì trả lời gọn, không độc thoại.
# example.md — Mẫu & lăng kính sinh câu hỏi

> File này được `SKILL.md` mở ở **Bước 2**. Dùng làm nguồn để sinh câu hỏi đúng trọng tâm, không phải để in nguyên ra cho BA.

---

## A. Lăng kính sinh câu hỏi: BABOK × 5W1H

Bên trong, soi mỗi điểm trong tài liệu KH qua **6 nhóm yêu cầu** và **5W1H** (Ai / Cái gì / Khi nào / Ở đâu / Tại sao / Như thế nào) để bảo đảm độ phủ. **KHÔNG in nhãn BABOK ra ngoài** — đầu ra luôn nằm trong 6 mục của biểu mẫu.

| Nhóm yêu cầu | Trả lời câu hỏi gốc | Rơi vào mục biểu mẫu |
|---|---|---|
| Nghiệp vụ (Business) | *Tại sao* làm dự án | Mục 1 |
| Bên liên quan (Stakeholder) | *Ai* cần gì | Mục 1 + 6 (phân quyền) |
| Chức năng (Functional) | Hệ thống *làm gì* | Mục 2, 3, 4, 5 |
| Phi chức năng (Non-functional) | Hệ thống *tốt cỡ nào* | Mục 6 |
| Chuyển tiếp (Transition) | *Triển khai & chuyển đổi* ra sao | Mục 6 |

**Quy tắc:** ưu tiên câu hỏi xuất phát từ chính tài liệu KH; nhóm nào đầu vào không chạm tới thì để ít câu, không nhồi.

---

## B. Nguyên tắc viết một dòng câu hỏi

- **Cột "Nội dung chính"** = nhãn ngắn chủ đề (2–5 từ): vd "Tích hợp", "Tiếp nhận yêu cầu nghỉ", "Gửi mail nhắc nhở".
- **Cột "Câu hỏi"** = 1–4 câu nhỏ cùng chủ đề, gói trong một dòng. Đi thẳng vào điểm cần làm rõ.
- Một dòng = một chủ đề cần chốt. Đừng dồn 2 chủ đề khác nhau; cũng đừng tách 1 chủ đề thành 3 dòng.
- Ưu tiên câu hỏi làm lộ ra **quy tắc, trạng thái, ngoại lệ, người chịu trách nhiệm, đầu ra** — thứ thiết kế hệ thống cần.

---

## C. Thư viện câu hỏi mẫu theo từng mục

> Đây là **mẫu để phỏng theo và tùy biến theo tài liệu KH**, không phải để chép nguyên. Chỉ lấy câu phù hợp với đầu vào.

### Mục 1 — Mục tiêu và Cấu trúc hệ thống
- Các nghiệp vụ chính hệ thống cần xử lý là gì? Phạm vi nào nằm trong / ngoài lần triển khai này?
- Vấn đề lớn nhất với cách làm hiện tại (thủ công/Excel/hệ thống cũ) là gì? Tiêu chí nào coi là thành công (KPI)?
- Hệ thống cần tích hợp với những ứng dụng nào? Mỗi tích hợp trao đổi dữ liệu gì, chiều nào (lấy/đẩy), tần suất?

### Mục 2 — Chi tiết các bước quy trình (lõi — chia nhóm con theo từng quy trình)
- Quy trình [X] thực hiện qua từng bước nào? Ai thực hiện mỗi bước? Đầu vào / đầu ra mỗi bước là gì?
- Đối tượng [X] có những trạng thái nào? Điều kiện chuyển từ trạng thái này sang trạng thái khác?
- Trường hợp nào bị từ chối/hủy/quá hạn? Khi đó trạng thái là gì, ai xử lý, có quay lại bước nào không?
- Có quy tắc nghiệp vụ/điều kiện ràng buộc nào khi thực hiện bước này không (hạn mức, thời hạn, cấp duyệt)?
- Ai là người phê duyệt cuối cùng? Có nhiều cấp duyệt không?

### Mục 3 — Form / trường thông tin & danh mục
- Đối tượng [X] cần quản lý những trường thông tin nào? Trường nào bắt buộc, trường nào tùy chọn?
- Có danh mục dùng chung nào cần khai báo (đơn vị, loại, lý do…)? Ai quản lý danh mục?
- Có quy tắc kiểm tra dữ liệu (định dạng, giá trị hợp lệ, trùng lặp) không?
- *(Nếu KH có sẵn)* Anh/chị gửi giúp mẫu form/trường hiện đang dùng để đối chiếu được không?

### Mục 4 — Báo cáo & thống kê
- Cần những báo cáo/thống kê nào? Phục vụ ai, ra quyết định gì?
- Mỗi báo cáo xem theo những chiều nào (thời gian, đơn vị, trạng thái, loại…)?
- Định dạng xuất là gì (Excel/PDF), có mẫu file sẵn để bám theo không?

### Mục 5 — Thông báo (notification/email/SMS)
- Sự kiện nào kích hoạt gửi thông báo? Gửi qua kênh nào (app/email/SMS)?
- Thông báo gửi cho ai? Có khác nhau theo vai trò/đơn vị không? Có cần cấu hình được không?
- Có template sẵn không? Trường hợp dữ liệu thay đổi / bị từ chối thì có gửi lại không?

### Mục 6 — Yêu cầu đặc biệt khác (phi chức năng + chuyển tiếp)
- Bao nhiêu người dùng đồng thời? Có yêu cầu hiệu năng/thời gian phản hồi cụ thể không?
- Phân quyền giữa các vai trò ra sao? Yêu cầu bảo mật/ATTT/tuân thủ nào cần đáp ứng?
- Dữ liệu cũ có cần di trú không? Khối lượng bao nhiêu, định dạng gì?
- Mốc go-live mong muốn? Có cần vận hành song song / đào tạo người dùng / hỗ trợ sau triển khai không?

---

## D. Hệ thống đánh dấu trạng thái

Với MỖI dòng, đối chiếu đầu vào và gắn 1 trạng thái:

| Ký hiệu | Trạng thái | Nghĩa | Ghi chú kèm theo |
|:--:|---|---|---|
| ✅ | Đã có trả lời | Tài liệu KH đã nêu rõ | trích ngắn nguồn: *"đã nêu trong MOM mục X"* |
| ⚠️ | Cần xác nhận lại | Có nhưng mơ hồ / mâu thuẫn / là giả định | ghi lý do: *"nêu chung chung, chưa rõ con số"* |
| ❓ | Cần hỏi mới | Tài liệu chưa đề cập | *"chưa thấy đề cập"* |

- Câu ✅ vẫn giữ trong danh sách để BA đối chiếu khi gặp khách, không xóa.
- Câu ⚠️ và ❓ là phần BA thực sự cần mang đi khảo sát — đánh **⭐** trước 2–3 câu ❓/⚠️ quan trọng nhất (thường nằm ở "3 vùng mờ" tại Bước 1).
- Khi xuất Excel: ghi trạng thái + ⭐ vào cột **Ghi chú** (D→J để trống cho KH điền lúc khảo sát).

---

## E. Ví dụ đầy đủ (chuẩn để bám)

**BA đưa MOM:** *"VTIT muốn làm hệ thống quản lý quy trình nghỉ việc. TCCT tiếp nhận đơn nghỉ, tra cứu nhân sự, quản lý duyệt/từ chối, hệ thống tự gửi mail thông báo & nhắc nhở. Cần tích hợp dữ liệu nhân sự. Khách nói 'càng nhanh càng tốt'."*

**Bức tranh sơ bộ**
- **Mục tiêu:** số hóa quy trình nghỉ việc tập trung tại VTIT; lõi là tiếp nhận đơn → duyệt → thông báo tự động.
- **Đối tượng/quy trình:** Quản lý xin nghỉ của CBCNV; Gửi mail thông báo; Gửi mail nhắc nhở.
- **Bên liên quan:** TCCT (tiếp nhận/duyệt), cấp quản lý (duyệt), nhân viên (xin nghỉ) — cần xác nhận.
- **3 vùng mờ:** (1) quy trình từ chối & trạng thái sau từ chối, (2) hệ thống nhân sự cần tích hợp gì, (3) "càng nhanh" = mốc nào.

**Câu hỏi khảo sát (8 dòng / 20)**

*1. Mục tiêu và Cấu trúc hệ thống*
| STT | Nội dung chính | Câu hỏi | TT | Ghi chú |
|:--:|---|---|:--:|---|
| 1 | Nghiệp vụ chính | Các nghiệp vụ chính hệ thống cần xử lý? Mục tiêu/KPI khi vận hành? | ⚠️ | ⭐ |
| 2 | Tích hợp | Cần tích hợp hệ thống nào (nhân sự…)? Mỗi tích hợp lấy/đẩy dữ liệu gì? | ❓ | ⭐ chưa rõ |

*2. Chi tiết các bước thực hiện quy trình nghiệp vụ*
**» Quản lý xin nghỉ với CBCNV**
| 1 | Tiếp nhận yêu cầu | Từng bước thế nào? Tiếp nhận đơn qua kênh nào? Cần tính năng tự xin nghỉ không? | ⚠️ | |
| 2 | Duyệt / từ chối | Trường hợp nào bị từ chối? Trạng thái sau từ chối? Ai quyết định cuối, output mỗi bước? | ❓ | ⭐ |
**» Quản lý gửi mail thông báo**
| 3 | Trigger gửi mail | Sự kiện nào kích hoạt gửi mail? Có template sẵn? Cấp QL và nhân viên khác mẫu không? | ⚠️ | |
| 4 | Trường hợp từ chối | Khi bị từ chối có gửi mail không? Gửi cho ai? | ❓ | |

*6. Các yêu cầu đặc biệt khác*
| 1 | Thời gian go-live | "Càng nhanh càng tốt" là mốc cụ thể nào? Có cần vận hành song song không? | ⚠️ | ⭐ |
| 2 | Phân quyền | Phân quyền giữa TCCT / quản lý / nhân viên ra sao? | ❓ | |

**Tổng kết nhanh**
- ✅ Đã có: 0 | ⚠️ Cần xác nhận: 4 | ❓ Cần hỏi mới: 4 | Tổng: 8/20
- 3 câu ⭐ ưu tiên: Mục 1 #2 (tích hợp), Mục 2 #2 (duyệt/từ chối), Mục 6 #1 (go-live).

**Chú ý:** mỗi dòng gom nhiều câu nhỏ cùng chủ đề; bám sát MOM; vùng mờ ở Bước 1 thành câu ⭐; tổng gọn dưới 20.
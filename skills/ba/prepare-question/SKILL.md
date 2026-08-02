---
name: prepare-question
description: 'Sinh bộ câu hỏi khảo sát (elicitation) CÔ ĐỌNG, ĐÚNG TRỌNG TÂM (tối đa 20 dòng câu hỏi) cho Business Analyst trước khi gặp/khảo sát khách hàng, dựa trên mọi thông tin khách hàng đã cung cấp — tài liệu yêu cầu, email, MOM khảo sát, mô tả nghiệp vụ thô. Skill làm 2 việc: (1) tóm tắt SƠ BỘ yêu cầu khách hàng để BA hình dung nhanh bức tranh tổng quan, (2) lên danh sách câu hỏi theo đúng BIỂU MẪU KHẢO SÁT CHUẨN (11 cột, 6 mục cố định), gom câu hỏi theo đối tượng/quy trình, đánh dấu câu nào ĐÃ có trả lời / CẦN xác nhận / CẦN hỏi mới. Xuất được ra file Excel đúng biểu mẫu. Dùng skill này MỖI KHI BA cần: chuẩn bị câu hỏi phỏng vấn/workshop/khảo sát khách hàng, "list câu hỏi đi hỏi khách", rà soát xem tài liệu KH còn thiếu thông tin gì, biến một MOM hoặc tài liệu yêu cầu thành danh sách câu hỏi cần làm rõ. Trigger CẢ KHI BA không nhắc "skill" — chỉ cần ngữ cảnh là "chuẩn bị đi khảo sát", "cần hỏi khách hàng những gì", "gợi ý câu hỏi từ tài liệu này", "tài liệu này còn thiếu gì cần làm rõ". Skill cố ý NHẸ: phần phân tích chỉ tổng quan, không bóc tách sâu yêu cầu.'
---

# Prepare Elicitation — Sinh câu hỏi khảo sát cho BA

## 1. Vai trò & nguyên tắc cốt lõi

Bạn là BA chuẩn bị một buổi khảo sát khách hàng. Đầu vào là tất cả những gì khách đã cung cấp; đầu ra là **bức tranh sơ bộ + bộ câu hỏi gọn, sẵn sàng mang đi hỏi**, trình bày đúng **biểu mẫu khảo sát chuẩn**.

**8 nguyên tắc khi một BA lên danh sách câu hỏi từ tài liệu khách hàng — bắt buộc tuân thủ:**

1. **Đọc kỹ trước, chỉ hỏi cái còn thiếu.** Không hỏi lại cái tài liệu đã nêu rõ. Câu hỏi sinh ra để *lấp khoảng trống, làm rõ điểm mơ hồ, xác nhận giả định*.
2. **Mỗi câu hỏi phải có mục đích.** Gắn với một quyết định thiết kế / một yêu cầu cần chốt. Không hỏi cho có, không hỏi chung chung.
3. **Cô đọng — gom nhóm.** Một dòng "Câu hỏi" gom nhiều câu nhỏ cùng chủ đề (vd: "Quy trình từng bước thế nào? Ai thực hiện? Output mỗi bước là gì?"). KHÔNG tách thành chục dòng nhỏ rời rạc.
4. **Bám sát đầu vào.** Mỗi câu hỏi phải truy được về một điểm trong tài liệu KH. Không rải câu hỏi mẫu sách vở.
5. **Ưu tiên theo rủi ro & độ mờ.** Tập trung vào chỗ thiếu thông tin / mâu thuẫn / ảnh hưởng lớn nhất tới thiết kế.
6. **Câu hỏi mở, hỏi được ngay trong meeting.** Cụ thể, đối tượng rõ. Tránh yes/no trừ khi để chốt một điểm.
7. **Tổ chức theo nghiệp vụ.** Gom theo đối tượng/quy trình để buổi khảo sát chạy mạch lạc theo dòng nghiệp vụ.
8. **Đủ nhưng không thừa.** Chất lượng > số lượng. **Tối đa 20 dòng câu hỏi cho toàn bộ tài liệu** (xem §4).

**Ràng buộc khác:**
- **Không bịa.** Thiếu thông tin thì biến thành câu hỏi, không tự suy diễn rồi khẳng định.
- **Nhẹ là ưu tiên.** Phần phân tích chỉ để BA hình dung tổng quan, KHÔNG bóc tách sâu (việc đó để `extract-requirements`, `extract-business-rules`, `create-ptyc`).
- Output in trong chat trước, **hỏi BA trước khi xuất file**.

---

## 2. Đầu vào

BA cung cấp một hoặc nhiều: tài liệu yêu cầu (RFP, đề bài), MOM khảo sát, email trao đổi, mô tả nghiệp vụ, slide giới thiệu, mockup/Figma kèm chú thích.

Nếu BA chưa đưa gì, hỏi **đúng 1 câu**: *"Anh paste/đính kèm giúp tài liệu/MOM/yêu cầu khách hàng vào đây để tôi đọc nhé? Tiện thì cho tôi biết tên nghiệp vụ và đơn vị khách để điền tiêu đề biểu mẫu."* — rồi dừng. Không hỏi dồn.

---

## 3. Quy trình 3 bước

### BƯỚC 1 — Bức tranh sơ bộ (giữ NGẮN, ≤120 từ)

Đọc đầu vào, tổng hợp 4 ý gọn để BA định hình nhanh (đây là phần *định hướng*, không phải tài liệu phân tích):

1. **Mục tiêu KH muốn đạt** — vấn đề đang giải / kết quả mong đợi (1–2 gạch).
2. **Đối tượng & quy trình nhận diện được** — các đối tượng quản lý + quy trình chính (đây là khung để chia Mục 2).
3. **Bên liên quan** — ai dùng, ai duyệt (nếu có dấu hiệu).
4. **3 vùng mờ lớn nhất** — chỗ thiếu/mâu thuẫn nhất → sẽ thành câu ⭐ ưu tiên.

> Không phân tích sâu hơn mức này.

### BƯỚC 2 — Sinh câu hỏi theo biểu mẫu

Sinh câu hỏi theo khung 6 mục §4, viết câu hỏi theo nguyên tắc §5, đánh dấu trạng thái §6, trình bày §7. **Cap cứng ≤20 dòng.**

### BƯỚC 3 — Xuất file (chỉ khi BA đồng ý)

Hỏi BA có xuất ra Excel đúng biểu mẫu không. Nếu có → dựng file theo §8.

---

## 4. Khung 6 mục của biểu mẫu khảo sát (cấu trúc đầu ra)

Đầu ra **luôn** tổ chức theo đúng 6 mục cố định dưới đây (đây chính là cấu trúc của biểu mẫu Excel). Bên trong, dùng lăng kính **BABOK + 5W1H** để bảo đảm độ phủ, nhưng KHÔNG in nhãn BABOK ra ngoài.

| Mục biểu mẫu | Hỏi về | Phủ nhóm BABOK | Gợi ý số dòng |
|---|---|---|---|
| **1. Mục tiêu và Cấu trúc hệ thống** | Nghiệp vụ chính hệ thống xử lý, phạm vi, mục tiêu/KPI, các hệ thống cần tích hợp (tích hợp cái gì, với ai) | Business + Stakeholder + tích hợp tổng thể | 2–4 |
| **2. Chi tiết các bước quy trình nghiệp vụ** | Với MỖI đối tượng/quy trình: từng bước thực hiện, ai làm, đầu vào/đầu ra mỗi bước, trạng thái & chuyển trạng thái, quy tắc nghiệp vụ, luồng ngoại lệ (từ chối/hủy/quá hạn) | Functional (lõi) | 8–12 (chia theo từng quy trình con) |
| **3. Form / trường thông tin & danh mục** | Các trường cần quản lý cho từng đối tượng, danh mục dùng chung, trường bắt buộc/tùy chọn, validate | Functional – Data | 1–3 |
| **4. Báo cáo & thống kê** | Báo cáo cần có, các chiều xem (theo thời gian/đơn vị/trạng thái…), mẫu file, định dạng xuất | Functional – Reporting | 1–3 |
| **5. Thông báo (notification/email/SMS)** | Sự kiện kích hoạt, gửi cho ai, kênh nào, template, cấu hình theo đơn vị | Functional – Notification | 1–2 |
| **6. Yêu cầu đặc biệt khác** | Phi chức năng (số người dùng, hiệu năng, bảo mật/phân quyền, ATTT, tuân thủ) + chuyển tiếp (di trú dữ liệu cũ, đào tạo, cutover/go-live) | Non-functional + Transition | 1–3 |

**Quy tắc phân bổ:**
- **Tổng không quá 20 dòng.** Mục 2 là trọng tâm (chiếm nhiều nhất). Mục nào đầu vào không chạm tới → để ít hoặc bỏ qua, KHÔNG nhồi cho đủ.
- Mục 2 chia thành các **nhóm con theo từng quy trình/đối tượng** (vd "Quản lý xin nghỉ", "Quản lý gửi mail thông báo"…). STT chạy liên tục trong mỗi mục.
- Nếu một mục thực chất là "xin khách cung cấp mẫu" (form/báo cáo/notification), viết 1 câu hỏi gọn yêu cầu mẫu thay vì liệt kê suy đoán.

---

## 5. Nguyên tắc viết một dòng câu hỏi

- **Cột "Nội dung chính"**: nhãn ngắn chủ đề câu hỏi (2–5 từ), vd "Tích hợp", "Tiếp nhận yêu cầu nghỉ", "Gửi mail nhắc nhở".
- **Cột "Câu hỏi"**: 1–4 câu nhỏ cùng chủ đề, gói lại trong một dòng. Đi thẳng vào điểm cần làm rõ, không lan man.
- Một dòng = một chủ đề cần chốt. Đừng dồn 2 chủ đề khác nhau vào một dòng; cũng đừng tách 1 chủ đề thành 3 dòng.
- Ưu tiên dạng câu hỏi giúp lộ ra **quy tắc, trạng thái, ngoại lệ, người chịu trách nhiệm, đầu ra** — đó là thứ thiết kế hệ thống cần.

---

## 6. Trạng thái & ưu tiên (nhẹ — chỉ để BA biết tập trung vào đâu)

Với mỗi dòng, đối chiếu đầu vào và gắn 1 trạng thái (hiển thị trong bản xem ở chat; khi xuất Excel ghi gọn vào cột **Ghi chú**):

| Ký hiệu | Nghĩa | Ghi chú |
|---|---|---|
| ✅ | Tài liệu đã nêu rõ | trích ngắn nguồn: *"đã nêu trong MOM mục X"* |
| ⚠️ | Có nhưng mơ hồ / mâu thuẫn / là giả định | ghi lý do: *"chưa rõ con số"* |
| ❓ | Chưa đề cập | *"chưa thấy đề cập"* |

- Câu ✅ vẫn giữ để BA đối chiếu khi gặp khách.
- Đánh ⭐ trước **2–3 câu ❓/⚠️ quan trọng nhất** (thường ở "3 vùng mờ" tại Bước 1).

---

## 7. Định dạng output trong chat

```
## Bức tranh sơ bộ
[4 ý ngắn theo Bước 1]

## Câu hỏi khảo sát (tổng: N dòng / tối đa 20)

### 1. Mục tiêu và Cấu trúc hệ thống
| STT | Nội dung chính | Câu hỏi | TT | Ghi chú |
|:--:|---|---|:--:|---|
| 1 | Nghiệp vụ chính | ... | ❓ | ⭐ |

### 2. Chi tiết các bước quy trình nghiệp vụ
**» [Tên quy trình con 1]**
| STT | Nội dung chính | Câu hỏi | TT | Ghi chú |
|:--:|---|---|:--:|---|
| 1 | ... | ... | ⚠️ | ... |
**» [Tên quy trình con 2]**
| 3 | ... | ... | ❓ | ⭐ |

### 3–6 ... (chỉ in mục có câu hỏi)

## Tổng kết nhanh
- ✅ Đã có: N  |  ⚠️ Cần xác nhận: N  |  ❓ Cần hỏi mới: N  |  Tổng: N/20
- 3 câu ⭐ ưu tiên hỏi đầu tiên: [liệt kê]
```

Cuối cùng hỏi BA: *"Anh muốn tôi xuất danh sách này ra file Excel đúng biểu mẫu khảo sát không?"* — chỉ dựng file khi BA đồng ý.

---

## 8. Biểu mẫu Excel — cấu trúc & cách dựng

Khi BA đồng ý xuất, dựng **đúng** biểu mẫu sau (đọc skill `xlsx` nếu cần). Tên file: `[Tên nghiệp vụ]_Câu hỏi khảo sát nghiệp vụ.xlsx`.

**Cấu trúc bắt buộc:**
- **Dòng 1 (merge A1:K1):** tiêu đề `KHẢO SÁT VỀ NGHIỆP VỤ [TÊN NGHIỆP VỤ] TẠI [ĐƠN VỊ]` — Times New Roman, **bold, 12, canh giữa**.
- **Dòng 2 — header 11 cột** (fill xanh `FF92D050`, bold, wrap, canh giữa, có viền): `STT | Nội dung chính | Câu hỏi | Câu trả lời | Kết luận | Thời gian khảo sát | Người được khảo sát | Đơn vị được khảo sát | Chức vụ | SĐT/Email | Ghi chú`.
- **Header mục (merge A:K):** `1. Mục tiêu và Cấu trúc hệ thống`, `2. Chi tiết các bước thực hiện quy trình nghiệp vụ`, `3. Mẫu form các trường thông tin cần quản lý cho các danh mục khác`, `4. Danh sách các báo cáo thống kê cần thiết cho ứng dụng, mẫu file báo cáo`, `5. Mẫu thông báo notification trên app, thông báo qua email/SMS nếu có`, `6. Các yêu cầu đặc biệt khác nếu có` — bold, fill xám nhạt `D9D9D9`.
- **Header nhóm con (chỉ trong Mục 2, merge A:D):** tên quy trình con — bold, canh trái.
- **Dòng câu hỏi:** A=STT (chạy liên tục trong mỗi mục, reset ở mỗi mục), B=Nội dung chính, C=Câu hỏi, **D→K để trống** (KH điền khi khảo sát). Có thể ghi trạng thái/⭐ vào K (Ghi chú). Tất cả ô có viền `thin`, canh trên (`top`), wrap text.
- **Độ rộng cột:** A=6.7, B=23.4, C=70.1, D=63.6, E=43.1, F=18, G=18.9, H=27.3, I=15.3, J=17.6, K=14.3.

**Snippet tham chiếu (openpyxl):**
```python
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

wb = Workbook(); ws = wb.active
F = "Times New Roman"
thin = Side(style="thin"); border = Border(thin,thin,thin,thin)
green = PatternFill("solid", fgColor="FF92D050")
grey  = PatternFill("solid", fgColor="D9D9D9")
widths = {"A":6.7,"B":23.4,"C":70.1,"D":63.6,"E":43.1,"F":18,"G":18.9,"H":27.3,"I":15.3,"J":17.6,"K":14.3}
for c,w in widths.items(): ws.column_dimensions[c].width = w

# Tiêu đề
ws.merge_cells("A1:K1")
ws["A1"] = "KHẢO SÁT VỀ NGHIỆP VỤ <TÊN> TẠI <ĐƠN VỊ>"
ws["A1"].font = Font(F, bold=True, size=12); ws["A1"].alignment = Alignment("center","center")

# Header 11 cột
hdr = ["STT","Nội dung chính","Câu hỏi","Câu trả lời","Kết luận","Thời gian khảo sát",
       "Người được khảo sát","Đơn vị được khảo sát","Chức vụ","SĐT/Email","Ghi chú"]
ws.append(hdr)
for cell in ws[2]:
    cell.font=Font(F,bold=True,size=12); cell.fill=green; cell.border=border
    cell.alignment=Alignment("center","center",wrap_text=True)

def section(title):
    r = ws.max_row + 1
    ws.merge_cells(f"A{r}:K{r}"); c=ws[f"A{r}"]
    c.value=title; c.font=Font(F,bold=True,size=12); c.fill=grey; c.alignment=Alignment("left","center")

def subgroup(title):              # chỉ dùng trong Mục 2
    r = ws.max_row + 1
    ws.merge_cells(f"A{r}:D{r}"); c=ws[f"A{r}"]
    c.value=title; c.font=Font(F,bold=True,size=12); c.alignment=Alignment("left","center")

def q(stt, noi_dung, cau_hoi, ghi_chu=""):
    ws.append([stt, noi_dung, cau_hoi, "","","","","","","", ghi_chu])
    for cell in ws[ws.max_row]:
        cell.font=Font(F,size=12); cell.border=border
        cell.alignment=Alignment("left","top",wrap_text=True)

# Ví dụ dùng:
# section("1. Mục tiêu và Cấu trúc hệ thống")
# q(1,"Nghiệp vụ chính","Các nghiệp vụ chính hệ thống cần xử lý?","❓ ⭐")
# section("2. Chi tiết các bước thực hiện quy trình nghiệp vụ")
# subgroup("Quản lý xin nghỉ với CBCNV")
# q(1,"Tiếp nhận yêu cầu","Từng bước thế nào? Tiếp nhận qua kênh nào? Ai duyệt cuối?","⚠️")

wb.save("output.xlsx")
```
> Biểu mẫu không có công thức → không cần recalc. Lưu vào `/mnt/user-data/outputs/`, dùng `present_files`. Nếu BA muốn Word/Markdown thay vì Excel thì chiều theo, nhưng **mặc định là Excel đúng biểu mẫu**.

---

## 9. Ví dụ ngắn (chuẩn để bám)

**BA đưa MOM:** *"VTIT muốn làm hệ thống quản lý quy trình nghỉ việc. TCCT tiếp nhận đơn nghỉ, tra cứu nhân sự, quản lý duyệt/từ chối, hệ thống tự gửi mail thông báo & nhắc nhở. Cần tích hợp dữ liệu nhân sự. Khách nói 'càng nhanh càng tốt'."*

> **Bức tranh sơ bộ**
> - **Mục tiêu:** số hóa quy trình nghỉ việc tập trung tại VTIT; lõi là tiếp nhận đơn → duyệt → thông báo tự động.
> - **Đối tượng/quy trình:** Quản lý xin nghỉ của CBCNV; Gửi mail thông báo; Gửi mail nhắc nhở.
> - **Bên liên quan:** TCCT (tiếp nhận/duyệt), cấp quản lý (duyệt), nhân viên (xin nghỉ) — cần xác nhận.
> - **3 vùng mờ:** (1) quy trình từ chối & trạng thái sau từ chối, (2) hệ thống nhân sự cần tích hợp gì, (3) "càng nhanh" = mốc nào.
>
> **Câu hỏi khảo sát (8 dòng / 20)**
>
> *1. Mục tiêu và Cấu trúc hệ thống*
> | STT | Nội dung chính | Câu hỏi | TT | Ghi chú |
> |:--:|---|---|:--:|---|
> | 1 | Nghiệp vụ chính | Các nghiệp vụ chính hệ thống cần xử lý? Mục tiêu/KPI khi vận hành? | ⚠️ | ⭐ |
> | 2 | Tích hợp | Cần tích hợp hệ thống nào (nhân sự…)? Mỗi tích hợp lấy/đẩy dữ liệu gì? | ❓ | ⭐ chưa rõ |
>
> *2. Chi tiết các bước thực hiện quy trình nghiệp vụ*
> **» Quản lý xin nghỉ với CBCNV**
> | 1 | Tiếp nhận yêu cầu | Từng bước thế nào? Tiếp nhận đơn qua kênh nào? Cần tính năng tự xin nghỉ không? | ⚠️ | |
> | 2 | Duyệt / từ chối | Trường hợp nào bị từ chối? Trạng thái sau từ chối? Ai quyết định cuối, output mỗi bước? | ❓ | ⭐ |
> **» Quản lý gửi mail thông báo**
> | 3 | Trigger gửi mail | Sự kiện nào kích hoạt gửi mail? Có template sẵn? Cấp QL và nhân viên khác mẫu không? | ⚠️ | |
> | 4 | Trường hợp từ chối | Khi bị từ chối có gửi mail không? Gửi cho ai? | ❓ | |
>
> *6. Các yêu cầu đặc biệt khác*
> | 1 | Thời gian go-live | "Càng nhanh càng tốt" là mốc cụ thể nào? Có cần vận hành song song không? | ⚠️ | ⭐ |
> | 2 | Phân quyền | Phân quyền giữa TCCT / quản lý / nhân viên ra sao? | ❓ | |

**Chú ý:** mỗi dòng gom nhiều câu nhỏ cùng chủ đề; bám sát MOM; vùng mờ ở Bước 1 thành câu ⭐; tổng gọn dưới 20.

---

## 10. Giữ nhẹ token (bắt buộc)

- Bức tranh sơ bộ **≤120 từ**. Tổng câu hỏi **≤20 dòng**.
- Không lặp lại nội dung tài liệu KH — chỉ trích ngắn khi đánh dấu ✅.
- Không tự load reference, không gọi skill khác trừ khi BA yêu cầu.
- Đầu vào dài → tóm tắt trong đầu rồi sinh câu hỏi, đừng in lại toàn bộ tài liệu.

---

## 11. Ranh giới (khi nào KHÔNG dùng)

- BA cần **bóc tách & lập danh sách yêu cầu / đặc tả sâu** → `extract-requirements`, `extract-business-rules`, `as-is-to-be`, `create-ptyc`.
- Cần **xử lý câu trả lời KH sau khảo sát** (đóng open question) → `process-qa`.
- Skill này dừng ở "chuẩn bị câu hỏi trước khi gặp khách", không thay thế các bước phân tích phía sau.
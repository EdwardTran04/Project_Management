# output-template.md — Template đầu ra

> File này được `SKILL.md` mở ở **Bước 3** (khi BA đồng ý xuất file) và để tham chiếu format bảng in trong chat ở Bước 2.

---

## A. Format bảng in trong chat (Bước 2)

```
## Bức tranh sơ bộ
[4 ý ngắn theo Bước 1, ≤120 từ]

## Câu hỏi khảo sát (tổng: N dòng / tối đa 20)

### 1. Mục tiêu và Cấu trúc hệ thống
| STT | Nội dung chính | Câu hỏi | TT | Ghi chú |
|:--:|---|---|:--:|---|
| 1 | Nghiệp vụ chính | ... | ❓ | ⭐ |

### 2. Chi tiết các bước thực hiện quy trình nghiệp vụ
**» [Tên quy trình con 1]**
| STT | Nội dung chính | Câu hỏi | TT | Ghi chú |
|:--:|---|---|:--:|---|
| 1 | ... | ... | ⚠️ | |
**» [Tên quy trình con 2]**
| 3 | ... | ... | ❓ | ⭐ |

### 3–6 ... (chỉ in mục có câu hỏi)

## Tổng kết nhanh
- ✅ Đã có: N  |  ⚠️ Cần xác nhận: N  |  ❓ Cần hỏi mới: N  |  Tổng: N/20
- 3 câu ⭐ ưu tiên hỏi đầu tiên: [liệt kê]
```

Sau khi in, hỏi: *"Anh muốn tôi xuất danh sách này ra file Excel đúng biểu mẫu khảo sát không?"* — chỉ dựng file khi BA đồng ý.

---

## B. Cấu trúc biểu mẫu Excel (bắt buộc khớp 100%)

Tên file: `[Tên nghiệp vụ]_Câu hỏi khảo sát nghiệp vụ.xlsx`. Lưu vào `/mnt/user-data/outputs/`, dùng `present_files`.

- **Dòng 1 — Tiêu đề (merge A1:K1):** `KHẢO SÁT VỀ NGHIỆP VỤ [TÊN NGHIỆP VỤ] TẠI [ĐƠN VỊ]` — Times New Roman, **bold, 12, canh giữa**.
- **Dòng 2 — Header 11 cột** (fill xanh `FF92D050`, bold, wrap, canh giữa, viền `thin`):
  `STT | Nội dung chính | Câu hỏi | Câu trả lời | Kết luận | Thời gian khảo sát | Người được khảo sát | Đơn vị được khảo sát | Chức vụ | SĐT/Email | Ghi chú`
- **Header mục (merge A:K, bold, fill xám `D9D9D9`, canh trái):** in đúng 6 mục:
  1. `1. Mục tiêu và Cấu trúc hệ thống`
  2. `2. Chi tiết các bước thực hiện quy trình nghiệp vụ`
  3. `3. Mẫu form các trường thông tin cần quản lý cho các danh mục khác`
  4. `4. Danh sách các báo cáo thống kê cần thiết cho ứng dụng, mẫu file báo cáo`
  5. `5. Mẫu thông báo notification trên app, thông báo qua email/SMS nếu có`
  6. `6. Các yêu cầu đặc biệt khác nếu có`
- **Header nhóm con (chỉ trong Mục 2, merge A:D, bold, canh trái):** tên từng quy trình con.
- **Dòng câu hỏi:** `A`=STT (chạy liên tục trong mỗi mục, reset ở mỗi mục mới), `B`=Nội dung chính, `C`=Câu hỏi, **`D`→`K` để trống** cho KH điền khi khảo sát (có thể ghi trạng thái + ⭐ vào `K`=Ghi chú). Mọi ô viền `thin`, canh **trên** (`top`), **wrap text**.
- **Độ rộng cột:** A=6.7, B=23.4, C=70.1, D=63.6, E=43.1, F=18, G=18.9, H=27.3, I=15.3, J=17.6, K=14.3.

---

## C. Snippet dựng file (openpyxl — đã kiểm chứng)

```python
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

wb = Workbook(); ws = wb.active
F = "Times New Roman"
thin = Side(style="thin"); border = Border(thin, thin, thin, thin)
green = PatternFill("solid", fgColor="FF92D050")
grey  = PatternFill("solid", fgColor="D9D9D9")
widths = {"A":6.7,"B":23.4,"C":70.1,"D":63.6,"E":43.1,"F":18,"G":18.9,"H":27.3,"I":15.3,"J":17.6,"K":14.3}
for c, w in widths.items(): ws.column_dimensions[c].width = w

# Tiêu đề
ws.merge_cells("A1:K1")
ws["A1"] = "KHẢO SÁT VỀ NGHIỆP VỤ <TÊN> TẠI <ĐƠN VỊ>"
ws["A1"].font = Font(F, bold=True, size=12); ws["A1"].alignment = Alignment("center", "center")

# Header 11 cột
hdr = ["STT","Nội dung chính","Câu hỏi","Câu trả lời","Kết luận","Thời gian khảo sát",
       "Người được khảo sát","Đơn vị được khảo sát","Chức vụ","SĐT/Email","Ghi chú"]
ws.append(hdr)
for cell in ws[2]:
    cell.font = Font(F, bold=True, size=12); cell.fill = green; cell.border = border
    cell.alignment = Alignment("center", "center", wrap_text=True)

def section(title):                       # header mục, merge A:K
    r = ws.max_row + 1
    ws.merge_cells(f"A{r}:K{r}"); c = ws[f"A{r}"]
    c.value = title; c.font = Font(F, bold=True, size=12); c.fill = grey
    c.alignment = Alignment("left", "center")

def subgroup(title):                      # nhóm con (Mục 2), merge A:D
    r = ws.max_row + 1
    ws.merge_cells(f"A{r}:D{r}"); c = ws[f"A{r}"]
    c.value = title; c.font = Font(F, bold=True, size=12); c.alignment = Alignment("left", "center")

def q(stt, noi_dung, cau_hoi, ghi_chu=""):  # một dòng câu hỏi; D→K trống (trừ Ghi chú)
    ws.append([stt, noi_dung, cau_hoi, "", "", "", "", "", "", "", ghi_chu])
    for cell in ws[ws.max_row]:
        cell.font = Font(F, size=12); cell.border = border
        cell.alignment = Alignment("left", "top", wrap_text=True)

# --- Dựng nội dung (STT reset mỗi mục) ---
# section("1. Mục tiêu và Cấu trúc hệ thống             ")
# q(1, "Nghiệp vụ chính", "Các nghiệp vụ chính hệ thống cần xử lý?", "❓ ⭐")
# q(2, "Tích hợp", "Cần tích hợp hệ thống nào? Trao đổi dữ liệu gì?", "❓ ⭐")
# section("2. Chi tiết các bước thực hiện quy trình nghiệp vụ")
# subgroup("Quản lý xin nghỉ với CBCNV")
# q(1, "Tiếp nhận yêu cầu", "Từng bước thế nào? Ai duyệt cuối?", "⚠️")
# ... (các mục 3–6 tương tự; mục nào không có câu hỏi vẫn nên in header để KH bổ sung)
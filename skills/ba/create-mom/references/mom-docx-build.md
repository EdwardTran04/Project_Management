# Quy cách dựng file .docx Biên bản họp

> File này CHỈ đọc khi BA đồng ý xuất .docx (bước §7 của SKILL.md). Kết hợp với skill `docx` để sinh file. Mục tiêu: file ra giống mẫu công văn chuẩn.

## Thiết lập chung

- **Trang:** A4 (mặc định của Word VN), lề 1 inch (2.54 cm) bốn phía.
- **Font toàn tài liệu:** Times New Roman, cỡ **13pt** (= `sz` 26 half-points). Tiếng Việt Unicode.
- **Bảng:** dùng `WidthType.DXA`, set cả `columnWidths` (bảng) lẫn `width` (từng cell); viền mảnh; `ShadingType.CLEAR`; padding cell `{ top:80, bottom:80, left:120, right:120 }`.
- Không dùng bullet unicode — dùng numbering config (`LevelFormat.BULLET`).

## Bố cục theo thứ tự (đúng mẫu)

### 1. Bảng header (2 cột, KHÔNG viền)
| Cột trái (căn giữa) | Cột phải (căn giữa) |
|---|---|
| `[ĐƠN VỊ CẤP TRÊN]` — chữ thường, không đậm | `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM` — **đậm** |
| `[TÊN CÔNG TY / ĐƠN VỊ]` — **đậm** | `Độc lập – Tự do – Hạnh phúc` — **đậm** |
|  | một đường gạch ngang ngắn (────) căn giữa dưới dòng motto |

- Bảng này **ẩn viền** (border none) — chỉ dùng để chia 2 khối trái/phải.
- Hai cột rộng bằng nhau.

### 2. Tiêu đề
- `BIÊN BẢN HỌP [CHỦ ĐỀ] [BUỔI N]` — **đậm, căn giữa**, cách dòng trên/dưới.

### 3. Thời gian & địa điểm (in nghiêng, căn giữa hoặc trái như mẫu)
- `Thời gian: [hh]h[mm] – [hh]h[mm] ngày [dd/mm/yyyy]`
- `Địa điểm: [...]`

### 4. Heading "THÀNH PHẦN" (Heading1, đậm) + bảng 3 cột
Cột: **Đơn vị | Họ và tên | Chức danh**. Hàng tiêu đề in đậm, nền nhạt.

### 5. Heading "NỘI DUNG" (Heading1, đậm)
- Vài bullet tóm tắt + bullet "Tài liệu tiếp nhận: …" + bullet "Chi tiết: *Theo bảng dưới*".
- Bảng 3 cột: **TT | Nội dung | Chi tiết**. Cột Chi tiết rộng nhất (diễn giải dài). Trong cột Chi tiết, các ý phân nhánh (A, B, C…) tách dòng cho dễ đọc; tên người chịu trách nhiệm in đậm như mẫu.

### 6. Heading "KẾT LUẬN" (Heading1, đậm) + bảng 4 cột
Cột: **TT | Kết luận | Người thực hiện | Thời hạn**. Người thực hiện in đậm. Mỗi hàng gộp các đầu việc của một người.

### 7. Dòng cuối
- `Người ghi biên bản: [Họ và tên]` — đặt cuối, in đậm phần tên (như mẫu).

## Tỉ lệ cột gợi ý (trên khổ A4, content ~9026 DXA)
- THÀNH PHẦN (3 cột): ~3200 / ~3400 / ~2426
- NỘI DUNG (3 cột): ~700 (TT) / ~2800 (Nội dung) / ~5526 (Chi tiết)
- KẾT LUẬN (4 cột): ~500 (TT) / ~5026 (Kết luận) / ~2000 (Người TH) / ~1500 (Thời hạn)

## Sau khi sinh file
1. Validate: `python /mnt/skills/public/docx/scripts/office/validate.py <file>.docx` — lỗi thì sửa rồi đóng gói lại.
2. Lưu vào `/mnt/user-data/outputs/`, đặt tên gợi nhớ (vd `BienBanHop_<chủ đề>_<ddmmyyyy>.docx`).
3. `present_files` trả file cho BA.

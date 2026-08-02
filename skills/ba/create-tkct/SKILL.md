---
name: create-tkct
description: Tạo Tài liệu Thiết kế chi tiết (TKCT) theo biểu mẫu BM.04 — tương đương DDD (Detailed Design Document). Trả lời "Mỗi màn hình + logic hoạt động ra sao" — mô tả màn hình, chi tiết các thành phần UI (mapping CSDL), luồng nghiệp vụ từng sự kiện, phân quyền theo role, component dùng chung và tuân thủ Quản trị dữ liệu. Dùng khi cần viết TKCT, detailed design document, BM.04, thiết kế chi tiết màn hình.
---

# Tạo BM.04 — Thiết kế chi tiết (TKCT)

Sinh tài liệu thiết kế chi tiết: mỗi màn hình gồm thành phần UI (mapping CSDL), luồng xử lý từng sự kiện, phân quyền + miền dữ liệu. Đầu vào: PTYC (BM.01), TKCSSDL (BM.03), screen spec, hoặc mô tả chức năng.

## Luật bất biến — áp dụng xuyên suốt (không cần đọc lại file rules)

- 6 phần cố định. Không thêm/xoá/đổi tên section, không đổi header bảng.
- **Không bịa.** Thiếu tên bảng/trường, số liệu, hoặc thông tin → ghi `[Cần BM.03 xác nhận: <thứ thiếu>]` hoặc `[Cần PM xác nhận]` ngay tại ô đó. Không tự chế tên bảng/trường/giá trị.
- Mỗi bảng phải có ≥1 dòng dữ liệu thật, hoặc ghi `(Không áp dụng)` + lý do.
- Mỗi ô trong bảng 6 cột thành phần phải đầy đủ — không để trống.
- Tiếng Việt, ngày `dd/mm/yyyy`. Cấm từ mơ hồ: "có thể", "nếu cần", "tùy trường hợp".
- Sơ đồ phân cấp / giao tiếp (Phần 2): Mermaid trong code block. **Luồng nghiệp vụ (mục ④): vẽ bằng `skill: create-activity-diagram` → xuất `.drawio`** (có badge ĐỌC/LƯU). Không ASCII art.

## Quy trình — single-pass theo TỪNG chức năng

Đơn vị sinh là **một chức năng**, không phải cả tài liệu (tài liệu thật quá lớn để one-shot). Chốt scope một lần, sau đó sinh liền — KHÔNG chèn câu hỏi xác nhận giữa các chức năng.

1. **Bóc đầu vào trước, hỏi sau.** Đọc tài liệu đính kèm, rút sẵn: actor, business rule, tên bảng/trường (từ BM.03), danh sách chức năng. Chỉ hỏi phần thật sự thiếu — gộp trong 1 lần (xem "Thu thập tối thiểu").
2. **Chốt danh sách chức năng** cần thiết kế (1 lần duy nhất).
3. **Sinh khung**: Phần 1, 2, 4, 5, 6 + mục lục Phần 3. Các phần này ngắn / tái sử dụng → sinh nhanh trong 1 lượt.
4. **Sinh Phần 3 theo từng chức năng.** Chức năng đầu làm mẫu đầy đủ; các chức năng sau sinh liên tục cùng format.
   - Khi điền **bảng 6 cột thành phần** (mục ③): đọc `references/component-spec-rules.md`.
   - **Luồng nghiệp vụ (mục ④):** vẽ sơ đồ bằng `skill: create-activity-diagram` (xuất `.drawio` + `.svg`, có badge ĐỌC/LƯU), kèm bảng 4 cột. Lập spec ngay từ bảng 4 cột — data-op ở cột "Kết quả" → `reads`/`writes`.
   - Cần mẫu đã điền cụ thể: đọc `references/example-function.md`.
5. **Tự rà checklist** (cuối file) trong cùng lượt sinh — không xuất câu hỏi rà soát ra ngoài.

Nhiều chức năng: báo trước "sinh theo từng đợt", rồi sinh liền từng đợt. Tuyệt đối không gate giữa từng chức năng.

## Thu thập tối thiểu

**Bắt buộc cho phần thân:**
- Danh sách chức năng cần thiết kế (theo BM.01).
- Nội dung đầu vào: PTYC / TKCSSDL / screen spec / mô tả chức năng.

**KHÔNG chặn việc sinh (dùng placeholder thay vì hỏi):**
- Metadata bìa (tên dự án, mã hiệu tài liệu, phiên bản — mặc định 1.0, người lập/xem xét/phê duyệt): chưa có → để `[…]`.
- Thiếu tên bảng/trường để mapping: vẫn sinh, đánh `[Cần BM.03 xác nhận: bảng.trường]` tại ô tương ứng.

## Cấu trúc 6 phần — bản đồ

Chi tiết chuẩn hoá từng phần: `rules/rules_tkct.md` (đọc khi cần precision; map dưới đủ để định hình).

- **Phần 1 — Giới thiệu:** mục đích, phạm vi, đối tượng sử dụng; thuật ngữ (liệt kê 100% từ viết tắt); tài liệu tham khảo; mô tả 6 phần.
- **Phần 2 — Tổng quan giải pháp:** sơ đồ phân cấp chức năng (Mermaid) + mô hình giao tiếp hệ thống ngoài (mỗi kết nối: *gọi gì → nhận gì → xử lý tiếp*).
- **Phần 3 — Thiết kế chi tiết:** lặp 3.X (nhóm) → 3.X.Y (chức năng); mỗi chức năng đủ 4 mục (chi tiết dưới).
- **Phần 4 — Thiết kế dùng chung:** bảng 4 cột, tham chiếu Common `[TCCT_TKCT]`.
- **Phần 5 — Quản trị dữ liệu:** CDE / Bảo mật / Chất lượng / Siêu dữ liệu / Lưu trữ (lấy từ BM.01 §4.12 nếu có).
- **Phần 6 — Phụ lục:** quy trình, BM.03, phân quyền, API danh mục, Danh sách chức năng (3 cột, nhóm số La Mã).

**Phần 3 — 4 mục con bắt buộc:**

① *Thông tin chung* — bảng 5 dòng: Tên chức năng | Đường dẫn (các bước truy cập menu) | Phân quyền (từng role làm gì) | Miền dữ liệu (đơn vị nào thấy/thao tác dữ liệu nào) | Mô tả.
② *Màn hình* — link Figma trỏ đúng frame + ảnh; chưa có → `skill: create-wireframe`.
③ *Bảng 6 cột thành phần* (header dưới) → đọc `references/component-spec-rules.md`.
④ *Luồng nghiệp vụ* — sơ đồ vẽ bằng `skill: create-activity-diagram` (xuất `.drawio`, có badge ĐỌC/LƯU) + bảng 4 cột; mọi nhánh TH1/TH2 ghi rõ điều kiện + kết quả trong cột "Kết quả".

**Header bảng cố định** (không đổi):

Bảng thành phần (mục ③):

```
| STT | Tên | Kiểu dữ liệu [Độ dài] | Input/Output | Giá trị khởi tạo | Mô tả (Mapping với CSDL nếu có) |
```

Bảng luồng nghiệp vụ (mục ④):

```
| Bước | Tác nhân | Hành động | Kết quả / Phản ứng hệ thống |
```

## Checklist tự rà trước khi xuất (trong cùng lượt sinh)

1. Mọi thành phần trên màn hình đều có dòng trong bảng (title, breadcrumb, search, từng cột list, button, icon, phân trang) — không sót.
2. Mọi trường Output có `[Bảng].[Trường]`; thiếu → `[Cần BM.03 xác nhận]`, không để trống.
3. Mọi trường Input có validate + nội dung thông báo lỗi cụ thể.
4. Mỗi chức năng rõ phân quyền + miền dữ liệu cho từng action (Xem/Thêm/Sửa/Xóa/Import/Export/Tìm kiếm).
5. Mọi nhánh điều kiện (TH1, TH2…) trong luồng nghiệp vụ được mô tả đủ.
6. Component dùng chung tham chiếu `[TCCT_TKCT]`, không mô tả lặp.
7. Danh sách chức năng ở Phụ lục khớp toàn bộ chức năng đã thiết kế ở Phần 3.
8. Không sai chính tả, không từ mơ hồ.

## Bước tiếp theo

| Output | Skill | Ghi chú |
|--------|-------|---------|
| Wireframe màn hình chưa có | `create-wireframe` | Trước khi điền Phần 3 mục ② |
| Mô tả màn hình từ ảnh/Figma | `create-screen-desc` | Input nhanh cho bảng 6 cột |
| TKCSSDL chưa có | `create-tkcssdl` | Cần trước khi mapping CSDL |
| **Vẽ luồng nghiệp vụ (mục ④)** — .drawio + badge ĐỌC/LƯU | `create-activity-diagram` | Bắt buộc; lập spec từ bảng 4 cột |
| Sequence diagram luồng API | `[sắp có: create-sequence-diagram]` | Chưa khả dụng |
| Đặc tả API danh mục | `[sắp có: define-api-contract]` | Chưa khả dụng |
# Function Catalog — Bộ chức năng chuẩn & quy tắc break

> Đọc khi cần bộ chức năng chuẩn đầy đủ, quy tắc suy ra, hoặc ví dụ vàng.
> Logic tóm tắt đã có trong SKILL.md — đây là phần chi tiết.

## Mục lục
1. Nhận diện & phân tầng đối tượng quản lý
2. Nhóm BASIC — bộ CRUD chuẩn
3. Nhóm WORKFLOW — suy từ bảng transition
4. Nhóm ADVANCE — catalog tính năng nâng cao
5. Bảng độ ưu tiên mặc định
6. Template output
7. Ví dụ vàng (đầy đủ 2 đối tượng)

---

## 1. Nhận diện & phân tầng đối tượng quản lý

### 1.1. Quy trình nhận diện
1. Gom **ứng viên** từ 3 nguồn: cột "Đối tượng" của bảng transition · danh từ trong yêu cầu · danh sách trường.
2. Chạy **4 phép thử** (định danh độc lập / vòng đời / bộ thuộc tính / bị tác động). Trượt → loại hoặc gộp vào đối tượng cha.
3. **Chuẩn hóa tên**: cùng một thứ gọi khác nhau giữa các tài liệu → gộp về một tên duy nhất.
4. **Phân tầng** để biết nhóm chức năng nào áp vào.

### 1.2. Bốn tầng đối tượng

| Tầng | Dấu hiệu | Basic | Workflow | Advance |
|---|---|:---:|:---:|:---:|
| **Nghiệp vụ chính** | có tập trạng thái, xuất hiện trong bảng transition | ✓ | ✓ | ✓ |
| **Danh mục / Master data** | dữ liệu tham chiếu tương đối tĩnh, không có luồng duyệt | ✓ | ✗ | Import/Export nhẹ |
| **Phụ thuộc / chi tiết** | chỉ tồn tại bên trong đối tượng cha (line item, file) | gộp vào cha | theo cha | — |
| **Chỉ tham chiếu** | dropdown, do hệ thống/đơn vị khác quản lý | ✗ | ✗ | ✗ |

### 1.3. Phân biệt nhanh đối tượng vs thuộc tính
- Có nhiều bản ghi độc lập, mỗi bản ghi có "lý lịch" riêng → **đối tượng**.
- Chỉ là một ô dữ liệu mô tả cho đối tượng khác → **thuộc tính** (không break riêng).
- Khi phân vân: hỏi "thứ này có cần một màn hình danh sách riêng không?" Có → đối tượng.

---

## 2. Nhóm BASIC — bộ CRUD chuẩn (6 tính năng)

| Tính năng | Mô tả mẫu | Ưu tiên mặc định |
|---|---|:---:|
| Thêm mới [X] | Cho phép [actor] tạo mới một [X] | High |
| Sửa [X] | Cho phép [actor] chỉnh sửa thông tin [X] | Medium |
| Xóa [X] | Cho phép [actor] xóa [X] (ưu tiên xóa mềm) | Medium |
| Xem chi tiết [X] | Hiển thị đầy đủ thông tin một [X] | High |
| Xem danh sách [X] | Hiển thị danh sách [X] có lọc/phân trang | High |
| Tìm kiếm [X] | Tìm [X] theo từ khóa và tiêu chí | Medium |

- Đối tượng có màn hình quản lý → sinh đủ 6 tính năng.
- Tách "Tìm kiếm nhanh" và "Tìm kiếm nâng cao" thành 2 dòng **chỉ khi** yêu cầu nêu rõ nhu cầu lọc nhiều tiêu chí.
- Master data đơn giản có thể bỏ "Tìm kiếm" nếu danh sách ngắn.

---

## 3. Nhóm WORKFLOW — suy từ bảng transition

- Mỗi **"Tên bước"** làm **đổi trạng thái** (luồng chính + luồng con) → 1 tính năng workflow.
- **Dedupe**: cùng tên bước ở nhiều dòng transition → gộp 1 tính năng, mô tả gộp các điều kiện đầu vào.
- Tên tính năng **bám đúng "Tên bước"** để truy vết.
- Mô tả nêu rõ chuyển trạng thái: *"Cho phép [tác nhân] [tên bước] đối với [đối tượng], chuyển từ [trạng thái vào] sang [trạng thái ra]. Hệ thống [thông báo/kiểm tra/tích hợp nếu có]."*
- **Không** đưa bước chỉ xem/tra cứu (không đổi trạng thái) vào đây.
- Ưu tiên: luồng chính → High; nhánh phụ/ngoại lệ → Medium/Low.

Các "Tên bước" hay gặp: Gửi duyệt · Duyệt / Thông qua · Từ chối · Trả lại · Yêu cầu bổ sung · Chuyển xử lý · Phân công · Phối hợp · Gửi ý kiến · Báo cáo · Hoàn thành · (System) Quá hạn tự động.

---

## 4. Nhóm ADVANCE — catalog tính năng nâng cao

Chỉ thêm khi đầu vào có căn cứ; suy luận → **[Cần xác nhận]**.

| Tính năng | Khi nào thêm | Ưu tiên |
|---|---|:---:|
| Xuất danh sách ra Excel | có nhu cầu báo cáo/đối soát | Medium |
| Import danh sách | nhập liệu hàng loạt / di trú dữ liệu cũ | Medium |
| In [X] / In biểu mẫu | cần bản cứng (đơn, hợp đồng, hóa đơn) | Low–Medium |
| Báo cáo / Thống kê | yêu cầu nêu chỉ số, dashboard | Medium |
| Đính kèm tài liệu | hồ sơ cần file kèm | Medium |
| Lịch sử / Nhật ký thao tác | yêu cầu audit / truy vết | Low–Medium |
| Thông báo / Nhắc việc | có deadline, cảnh báo quá hạn | Medium |
| Gán nhãn / Phân loại | cần nhóm/lọc nâng cao | Low |

---

## 5. Bảng độ ưu tiên mặc định

| Loại tính năng | Ưu tiên |
|---|:---:|
| Thêm mới, Xem chi tiết, Xem danh sách | High |
| Workflow luồng chính (gửi duyệt, duyệt, từ chối) | High |
| Sửa, Xóa, Tìm kiếm | Medium |
| Workflow nhánh phụ/ngoại lệ | Medium |
| Advance được yêu cầu rõ | Medium |
| Advance phụ trợ / [Cần xác nhận] | Low |

Đầu vào có MoSCoW/mức ưu tiên KH → ưu tiên theo đầu vào, quy về High/Medium/Low.

---

## 6. Template output

```
# Danh sách chức năng — [Tên hệ thống]
Ngày: dd/mm/yyyy

## Đối tượng quản lý đã xác định
| # | Đối tượng | Tầng | Ghi chú |
|---|---|---|---|
| 1 | ... | Nghiệp vụ chính | ... |

## Danh sách chức năng
| STT | Chức năng | Tính năng | Mô tả | Độ ưu tiên |
|---|---|---|---|:---:|
| 1 | Quản lý [X] | Thêm mới [X] | ... | High |
| ... |

## Tổng kết
- Số đối tượng: N  |  Tổng tính năng: M
- Tính năng [Cần xác nhận]: liệt kê để BA chốt với KH
```

---

## 7. Ví dụ vàng

**Đầu vào (rút gọn):** Hệ thống quản lý nghỉ phép. Bảng transition có đối tượng **Đơn nghỉ phép** (trạng thái: Nháp → Chờ duyệt → Đã duyệt / Từ chối / Chờ bổ sung), với các Tên bước: Gửi duyệt, Duyệt, Từ chối, Yêu cầu bổ sung. Có nhắc tới quản lý **Phòng ban** để gán nhân viên. Khách muốn xuất Excel danh sách đơn.

### Đối tượng quản lý đã xác định
| # | Đối tượng | Tầng | Ghi chú |
|---|---|---|---|
| 1 | Đơn nghỉ phép | Nghiệp vụ chính | có trạng thái + workflow |
| 2 | Phòng ban | Master data | chỉ CRUD, không workflow |

### Danh sách chức năng
| STT | Chức năng | Tính năng | Mô tả | Độ ưu tiên |
|---|---|---|---|:---:|
| 1 | Quản lý đơn nghỉ phép | Thêm mới đơn nghỉ phép | Cho phép nhân viên tạo đơn nghỉ phép mới | High |
| 2 | Quản lý đơn nghỉ phép | Sửa đơn nghỉ phép | Cho phép nhân viên sửa đơn khi còn ở trạng thái Nháp | Medium |
| 3 | Quản lý đơn nghỉ phép | Xóa đơn nghỉ phép | Cho phép nhân viên xóa đơn ở trạng thái Nháp (xóa mềm) | Medium |
| 4 | Quản lý đơn nghỉ phép | Xem chi tiết đơn nghỉ phép | Hiển thị đầy đủ thông tin một đơn | High |
| 5 | Quản lý đơn nghỉ phép | Xem danh sách đơn nghỉ phép | Hiển thị danh sách đơn theo bộ lọc/phân trang | High |
| 6 | Quản lý đơn nghỉ phép | Tìm kiếm đơn nghỉ phép | Tìm đơn theo từ khóa và tiêu chí | Medium |
| 7 | Quản lý đơn nghỉ phép | Gửi duyệt đơn | Cho phép nhân viên gửi đơn, chuyển từ Nháp sang Chờ duyệt | High |
| 8 | Quản lý đơn nghỉ phép | Duyệt đơn | Cho phép quản lý duyệt đơn, chuyển từ Chờ duyệt sang Đã duyệt | High |
| 9 | Quản lý đơn nghỉ phép | Từ chối đơn | Cho phép quản lý từ chối đơn, chuyển từ Chờ duyệt sang Từ chối | High |
| 10 | Quản lý đơn nghỉ phép | Yêu cầu bổ sung | Cho phép quản lý trả đơn yêu cầu bổ sung, chuyển sang Chờ bổ sung | Medium |
| 11 | Quản lý đơn nghỉ phép | Xuất danh sách đơn ra Excel | Cho phép quản lý xuất danh sách đơn theo bộ lọc ra Excel | Medium |
| 12 | Quản lý đơn nghỉ phép | In đơn nghỉ phép | Cho phép in một đơn đã duyệt | Low |
| 13 | Quản lý phòng ban | Thêm mới phòng ban | Cho phép quản trị viên tạo phòng ban mới | High |
| 14 | Quản lý phòng ban | Sửa phòng ban | Cho phép quản trị viên chỉnh sửa thông tin phòng ban | Medium |
| 15 | Quản lý phòng ban | Xóa phòng ban | Cho phép quản trị viên xóa phòng ban (xóa mềm) | Medium |
| 16 | Quản lý phòng ban | Xem chi tiết phòng ban | Hiển thị thông tin một phòng ban | High |
| 17 | Quản lý phòng ban | Xem danh sách phòng ban | Hiển thị danh sách phòng ban | High |
| 18 | Quản lý phòng ban | Import phòng ban | Nhập danh sách phòng ban từ Excel — [Cần xác nhận] | Low |

### Tổng kết
- Số đối tượng: 2  |  Tổng tính năng: 18
- [Cần xác nhận]: tính năng "Import phòng ban" (#18) — chưa nêu trong đầu vào, BA chốt với KH.

**Chú ý ở ví dụ:** Đơn nghỉ phép (nghiệp vụ chính) có đủ 3 nhóm; Phòng ban (master data) chỉ có Basic + 1 Advance nhẹ, **không** có workflow; mọi tính năng workflow bám đúng "Tên bước"; tính năng suy luận được đánh dấu rõ.
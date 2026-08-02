---
name: extract-requirements
description: 'Bóc tách và lập DANH SÁCH YÊU CẦU (Requirements Register) từ MOM, phiếu yêu cầu, email hay tài liệu khách hàng — sản phẩm chính là danh sách FR (yêu cầu chức năng) và NFR (yêu cầu phi chức năng), gom theo business object, mỗi yêu cầu được phân loại, truy vết về nguồn, và CHẤM CHẤT LƯỢNG (chỉ rõ yêu cầu nào tốt, yêu cầu nào còn yếu và yếu vì sao). Business rules chỉ là phần nhỏ đi kèm, đào sâu để skill extract-business-rules lo. Dùng skill này MỖI KHI BA cần: bóc tách yêu cầu, lập danh sách FR/NFR, "ra requirement từ tài liệu này", rà chất lượng yêu cầu, biến MOM/phiếu yêu cầu thành bảng yêu cầu chuẩn để đặc tả. Trigger CẢ KHI không nhắc "skill" — chỉ cần ngữ cảnh là trích yêu cầu / lập danh sách yêu cầu từ nội dung khách hàng.'
---

# Extract Requirements — Bóc tách danh sách yêu cầu (FR & NFR)

## 1. Vai trò & nguyên tắc

Biến nội dung thô của khách thành **Requirements Register** đúng mẫu BM của dự án: danh sách FR + NFR **gom theo business object**, có mã, truy vết được, và **đã chấm chất lượng**.

- **Mục tiêu chính:** danh sách FR và NFR chất lượng tốt. Business rules chỉ liệt kê gọn (§8), đào sâu để `extract-business-rules`.
- **Không đọc file từ máy.** BA paste nội dung trong hội thoại.
- **Không bịa.** Yêu cầu suy luận (ẩn) phải đánh dấu `[GIẢ ĐỊNH]`, không ghi như sự thật.
- **Output in trong chat trước**, hỏi BA rồi mới xuất file (§9). Tiếng Việt, ngày `dd/mm/yyyy`.

---

## 2. Đầu vào

MOM, phiếu yêu cầu, tài liệu/email khách, biên bản họp. Nếu BA chưa đưa: hỏi **đúng 1 câu** — *"Anh paste MOM / phiếu yêu cầu / tài liệu khách vào đây để tôi bóc requirement nhé?"* — rồi dừng.

Mã yêu cầu đánh tự động: **FR-001, FR-002…** cho chức năng và **NFR-001, NFR-002…** cho phi chức năng (không cần hỏi mã module).

---

## 3. Nguyên tắc bóc tách — GOM THEO BUSINESS OBJECT (làm đúng từ gốc)

1. **Xác định business object (đối tượng nghiệp vụ) trước.** Quét tài liệu, gom các yêu cầu về cùng một đối tượng nghiệp vụ thành **một dòng**. BO là danh từ nghiệp vụ hệ thống quản lý: *nhân viên mới, khóa học, tiến trình onboard, ticket giao việc, khảo sát, mentor/buddy, đánh giá, báo cáo…*
2. **Mỗi dòng = một business object.** Đây là đơn vị trình bày, KHÔNG vỡ vụn từng thao tác thành một mã riêng.
3. **Tên yêu cầu = "Quản lý + <business object>".** Vd: *Quản lý thông tin nhân viên mới*, *Quản lý khóa học*, *Quản lý mentor/buddy*. (Quy ước này áp cho bảng FR; NFR đặt tên theo nhóm chất lượng — §6.B.)
4. **Mô tả yêu cầu = liệt kê tất cả thao tác/yêu cầu thuộc BO đó**, dạng gạch đầu dòng, mỗi dòng theo mẫu **"Hệ thống PHẢI [làm gì] [điều kiện]"**. Đây là nơi gom nhóm để BA nắm trọn một đối tượng trong một ô.
5. **Phân tích nguyên tử ở mức bullet:** trong ô Mô tả, mỗi bullet là một yêu cầu kiểm thử được độc lập (để chấm chất lượng chính xác), nhưng vẫn nằm chung dưới BO.
6. **Tách nhu cầu khỏi giải pháp:** ghi nhu cầu, không khóa giải pháp sớm. **Bắt yêu cầu ẩn** ("thay Excel" ⇒ nhập liệu, lưu tập trung, phân quyền, báo cáo…) và gắn `[GIẢ ĐỊNH]`.

> Nếu một BO phình quá lớn (rất nhiều bullet khác bản chất), cân nhắc tách thành 2 BO con (vd "Quản lý tiến trình onboard" vs "Quản lý ticket giao việc") — ghi gợi ý ở mục chất lượng §6.

---

## 4. Phân loại FR / NFR — nguyên tắc cốt lõi (làm đúng từ đây)

### 4.1 Nguyên tắc gốc: WHAT vs HOW

- **FR — Yêu cầu chức năng = hệ thống LÀM GÌ.** Hành vi/chức năng cụ thể cho ra kết quả quan sát được. *Những việc* hệ thống nên làm → gom theo business object.
- **NFR — Yêu cầu phi chức năng = hệ thống HOẠT ĐỘNG NHƯ THẾ NÀO.** Thuộc tính chất lượng bao trùm — nhanh/sẵn sàng/an toàn/chịu tải/dễ dùng tới mức nào. *Cách* vận hành, không thêm chức năng.

> FR là **động từ nghiệp vụ** (thêm, sửa, xóa, tìm kiếm, tạo báo cáo, duyệt, gửi, tính). NFR là **tính từ/thước đo chất lượng** (sẵn sàng, đồng thời, nhanh, an toàn, thân thiện).

### 4.2 Phép thử phân loại (chạy cho từng bullet trong Mô tả)

1. **"Đây có phải một việc hệ thống thực hiện và kích hoạt/quan sát được kết quả không?"** → Có ⇒ **FR**.
2. **"Đây có phải tiêu chí về làm tốt/nhanh/an toàn/sẵn sàng/chịu tải/dễ dùng đến MỨC NÀO không?"** → Có ⇒ **NFR** (gắn nhóm 25010 §4.4).
3. **Phép thử loại bỏ (khi phân vân):** bỏ đi thì hệ thống MẤT chức năng (FR) hay chỉ làm việc-đang-có TỆ hơn (NFR)?

### 4.3 Bảng đối chiếu ví dụ

| Câu yêu cầu | Loại | Vì sao |
|---|:--:|---|
| Thêm/cập nhật/xóa hồ sơ nhân viên | FR | Hành vi cụ thể, ra kết quả |
| Tìm kiếm/tra cứu hồ sơ | FR | Một việc hệ thống làm, trả kết quả |
| Tạo báo cáo hàng tháng | FR | Sinh đầu ra cụ thể |
| Hệ thống luôn sẵn sàng | NFR | Thuộc tính độ sẵn sàng |
| Hỗ trợ cùng lúc 500 người dùng | NFR | Thuộc tính chịu tải/hiệu năng |
| Giao diện thân thiện với người dùng | NFR | Thuộc tính khả dụng (UX) |

### 4.4 Các nhóm NFR (ISO/IEC 25010) cần soi đủ

NFR hầu như không được khách nói rõ → **chủ động soi đủ**, đặc biệt **ATTT**:
Hiệu năng · Bảo mật/ATTT · Độ tin cậy & sẵn sàng · Khả dụng (UX) · Tương thích · Bảo trì · Khả chuyển · Khả mở rộng.

### 4.5 ⚠️ Bẫy phân loại thường gặp

- **"Giao diện thân thiện/dễ dùng/đẹp"** → **NFR** (Khả dụng), KHÔNG phải FR.
- **"Tìm kiếm/lọc/tra cứu"** → **FR**.
- **"Phân quyền"**: *cấu hình/gán quyền* = **FR**; *"chỉ vai trò X mới truy cập Y"* = **NFR (ATTT)** + business rule.
- **"Báo cáo xuất < 5s"**: *xuất báo cáo* = **FR**; *< 5s* = **NFR (Hiệu năng)**.
- Một câu trộn cả FR lẫn NFR → tách thành bullet FR (vào ô Mô tả của BO) + dòng NFR riêng (bảng B).

---

## 5. CHẤM CHẤT LƯỢNG (giữ riêng, không nằm trong bảng BM)

Đánh giá ngầm ✅ **Tốt** / ⚠️ **Yếu** cho từng bullet & từng dòng; kết quả đưa xuống mục §6, **không** thêm cột vào bảng.

**FR tốt khi:** nguyên tử · không mơ hồ · kiểm thử được · là nhu cầu (không phải giải pháp) · điều kiện rõ.
**NFR tốt khi:** có **CHỈ SỐ ĐO + MỤC TIÊU cụ thể** · gắn đúng nhóm 25010 · kiểm thử được.
> Phép thử số 1 cho NFR: *đo được không?* "Phải nhanh" = ⚠️. "95% truy vấn < 2s @ 500 user" = ✅.

Với mỗi mục ⚠️: **ghi lý do + gợi ý viết lại**.

---

## 6. Format output (bám mẫu BM 6 cột — gom theo business object)

> Cột **Mức độ ưu tiên**: số **1 = Cao/bắt buộc · 2 = Trung bình · 3 = Thấp**.
> Cột **Tần suất sử dụng**: Thường xuyên / Thỉnh thoảng / Hiếm khi (NFR để `-`).

Output gồm **5 phần** theo đúng thứ tự sau. Khung cột như dưới; **ví dụ điền đầy đủ cho cả 5 phần xem `references/examples.md`** (chỉ đọc khi cần khuôn mẫu cụ thể — đừng load mặc định).

**A. Danh sách yêu cầu chức năng (FR)** — Tên = "Quản lý + business object". Khung 6 cột:
```
| STT | Mã yêu cầu | Tên yêu cầu | Mô tả yêu cầu | Mức độ ưu tiên | Tần suất sử dụng |
```
Mỗi dòng = 1 business object; cột *Mô tả* gom mọi bullet "Hệ thống PHẢI…" của BO đó.

**B. Danh sách yêu cầu phi chức năng (NFR)** — Tên theo nhóm chất lượng 25010. Cùng 6 cột; cột *Mô tả* nhúng **chỉ số đo + mục tiêu** (vd "p95 < 2s @ 500 user"), *Tần suất* để `-`.

**C. Đánh giá chất lượng & yêu cầu cần làm lại** — danh sách ✅ Tốt / ⚠️ Yếu (kèm lý do + gợi ý viết lại) / 💡 đề xuất tách BO. Kết quả của §5, KHÔNG thêm cột vào bảng A/B.

**D. Business rules ghi nhận** — danh sách rule ngắn bắt gặp (→ chi tiết dùng `extract-business-rules`).

**E. Câu hỏi mở → prepare-question** — gom các điểm `[GIẢ ĐỊNH]`/`[CẦN ĐO]`/`[CẦN LÀM RÕ]` thành câu hỏi khảo sát.

---

## 7. Quy ước mã & cột (theo mẫu BM)

- **STT:** số thứ tự liên tục trong từng bảng.
- **Mã yêu cầu:** FR dùng `FR-001, FR-002…`; NFR dùng `NFR-001, NFR-002…`. Đánh số liên tục theo thứ tự xuất hiện trong từng bảng, không zero-pad quá 3 chữ số.
- **Tên yêu cầu (FR):** **bắt buộc theo mẫu "Quản lý + <business object>"** (vd *Quản lý khóa học*). Trường hợp bản chất không phải "quản lý" mà rất riêng (vd Portal, tích hợp), vẫn ưu tiên gói vào một BO; nếu không gói được thì đặt tên động từ phù hợp và ghi chú.
- **Tên yêu cầu (NFR):** theo nhóm chất lượng 25010 (Hiệu năng, Bảo mật/ATTT, Độ tin cậy & sẵn sàng…).
- **Mô tả yêu cầu:** **gom toàn bộ thao tác/yêu cầu của BO đó** thành bullet "Hệ thống PHẢI…". NFR nhúng chỉ số đo + nhóm 25010.
- **Mức độ ưu tiên:** số **1/2/3** (1 = cao nhất). Xếp kỹ → `prioritize-requirements`.
- **Tần suất sử dụng:** Thường xuyên / Thỉnh thoảng / Hiếm khi; NFR để `-`.

---

## 8. Business rules — chỉ phần nhỏ

Ghi nhận rule bắt gặp vào mục "Business rules ghi nhận" dạng danh sách ngắn. **Không** lập catalog đầy đủ tại đây — đề nghị BA chạy `extract-business-rules` nếu cần đào sâu logic/điều kiện/công thức.

---

## 9. Xuất file (chỉ khi BA đồng ý)

Sau khi in register trong chat, hỏi: *"Anh có cần xuất register này ra file không?"*
- **.xlsx** (khuyên dùng cho register sống) → skill `xlsx`. Giữ đúng 6 cột, 2 sheet/2 bảng FR & NFR.
- **.docx** (khi cần đính kèm tài liệu) → skill `docx`.
- Lưu `/mnt/user-data/outputs/`, đặt tên `requirements_<tên>_<ddmmyyyy>`, rồi `present_files`.

---

## 10. Ranh giới (khi nào KHÔNG dùng)

- Đào sâu **logic/điều kiện/công thức** → `extract-business-rules`.
- **Xếp ưu tiên** kỹ cả danh sách → `prioritize-requirements`.
- **Viết PTYC hoàn chỉnh** → `create-ptyc` (register này là đầu vào).
- **Đặc tả NFR chi tiết** → `define-nfr`.
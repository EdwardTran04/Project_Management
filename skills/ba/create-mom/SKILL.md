---
name: create-mom
description: 'Sinh BIÊN BẢN HỌP (MOM - Minutes of Meeting) đúng format chuẩn từ nội dung thô của cuộc họp. Đầu vào là bản ghi (transcript) của file ghi âm, file note, hoặc bất kỳ tài liệu nào ghi nhận lại nội dung cuộc họp / buổi làm việc với khách hàng. Đầu ra là biên bản họp đúng mẫu, chỉ rõ: cuộc họp bàn về vấn đề gì (NỘI DUNG), kết luận & phân công (KẾT LUẬN), và các tài liệu được tiếp nhận trong cuộc họp. Sau khi ra biên bản trong chat, HỎI BA có cần xuất file .docx không rồi mới xuất. Dùng skill này MỖI KHI BA cần: viết biên bản họp, làm MOM, biên bản cuộc họp với khách hàng / nội bộ, "ghi lại nội dung buổi họp", "chuyển transcript/note thành biên bản", tổng hợp một buổi làm việc thành tài liệu chính thức. Trigger CẢ KHI không nhắc "skill" — chỉ cần ngữ cảnh là biến nội dung cuộc họp/buổi làm việc thành biên bản. Họp với khách hàng thì cách điền form tương tự, chỉ khác thành phần và đơn vị.'
---

# Create MOM — Biên bản họp

## 1. Vai trò & nguyên tắc

Biến nội dung thô của một cuộc họp thành **biên bản họp chính thức, đúng format**.

- **Bám sát nguồn, không bịa.** Chỉ ghi điều thực sự có trong transcript/note. Thông tin metadata thiếu thì đánh dấu `[CẦN BỔ SUNG]`, không tự suy diễn người tham dự, giờ giấc, kết luận.
- **Không đọc file từ máy.** BA paste/đính kèm nội dung trong hội thoại.
- **Output in trong chat trước.** Chỉ xuất .docx khi BA xác nhận (xem §7).
- Ngôn ngữ Tiếng Việt, ngày `dd/mm/yyyy`.

> **Về file ghi âm:** không nghe trực tiếp được audio. Nếu BA chỉ có file ghi âm, đề nghị họ cung cấp **bản gỡ băng (transcript)** — rồi làm việc trên transcript đó cùng các file note kèm theo.

---

## 2. Đầu vào

Một hoặc nhiều: transcript ghi âm, note tay/đánh máy của buổi họp, tài liệu khách hàng cung cấp tại cuộc họp, chat log. Có thể lộn xộn, không theo thứ tự — skill sẽ sắp xếp lại.

Nếu BA chưa đưa gì: hỏi **đúng 1 câu** — *"Anh paste transcript/note của buổi họp vào đây nhé? Kèm luôn ngày họp, địa điểm và danh sách người tham dự nếu có."* — rồi dừng.

---

## 3. Quy trình

1. **Đọc & gom nhóm** nội dung thô theo từng chủ đề/đầu mục được bàn.
2. **Trích xuất 3 trục bắt buộc** (xem §5): Nội dung thảo luận · Kết luận & phân công · Tài liệu tiếp nhận.
3. **Trích metadata**: tên/chủ đề cuộc họp, thời gian, địa điểm, thành phần (đơn vị – họ tên – chức danh), người chủ trì, người ghi biên bản.
4. **Điền vào cấu trúc §4**, in toàn bộ trong chat.
5. **Đánh dấu thiếu**: mọi metadata không tìm thấy → `[CẦN BỔ SUNG]`.
6. **Hỏi xuất file** theo §7.

---

## 4. Cấu trúc biên bản (điền đúng thứ tự)

```
┌─────────────────────────────────┬─────────────────────────────────┐
│ [ĐƠN VỊ CẤP TRÊN]               │ CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM│
│ [TÊN CÔNG TY / ĐƠN VỊ] (in đậm) │ Độc lập – Tự do – Hạnh phúc      │
│                                 │ ———————                          │
└─────────────────────────────────┴─────────────────────────────────┘

              BIÊN BẢN HỌP [CHỦ ĐỀ] [BUỔI N nếu có]      (căn giữa, in đậm)

    Thời gian: [giờ bắt đầu – giờ kết thúc] ngày [dd/mm/yyyy]   (in nghiêng)
    Địa điểm: [...]                                              (in nghiêng)

# THÀNH PHẦN
| Đơn vị | Họ và tên | Chức danh |
|--------|-----------|-----------|
| ...    | ...       | Chủ trì cuộc họp / Thư ký / (để trống) |

# NỘI DUNG
- [1-2 dòng tóm tắt cuộc họp bàn về vấn đề gì]
- Tài liệu tiếp nhận: [liệt kê các file/tài liệu được trao đổi, gửi, nhận tại buổi họp — link nếu có]
- Chi tiết: Theo bảng dưới

| TT | Nội dung | Chi tiết |
|----|----------|----------|
| 1  | [đầu mục] | [diễn giải: ai nói gì, đề xuất gì, ai chịu trách nhiệm, mốc thời gian] |

# KẾT LUẬN
| TT | Kết luận | Người thực hiện | Thời hạn |
|----|----------|-----------------|----------|
| 1. | [việc cần làm, gộp theo người] | [Tên] | [dd/mm hoặc [CẦN BỔ SUNG]] |

Người ghi biên bản: [Họ và tên]
```

**Lưu ý điền form:**
- **Khối header trái** = đơn vị tổ chức cuộc họp. Họp nội bộ → đơn vị mình; **họp với khách hàng → điền đơn vị chủ trì/đăng cai** (thường là phía mình hoặc ghi cả hai bên ở THÀNH PHẦN).
- Cột **Chức danh** chỉ điền khi rõ; trống thì để trống (như mẫu), không bịa.
- Bảng **NỘI DUNG** = diễn biến thảo luận (chi tiết, có thể dài). Bảng **KẾT LUẬN** = cô đọng thành đầu việc, **gộp theo từng người thực hiện**, kèm thời hạn.
- Một việc thường xuất hiện ở cả NỘI DUNG (bàn bạc) và KẾT LUẬN (chốt) — đó là đúng, không phải lặp thừa.

---

## 5. Ba trục bắt buộc phải làm rõ

Biên bản BẮT BUỘC trả lời được 3 câu (yêu cầu cốt lõi của tài liệu này):

| Trục | Đổ vào đâu | Phải thể hiện |
|---|---|---|
| **Bàn về vấn đề gì** | Tóm tắt NỘI DUNG + bảng Nội dung | Các chủ đề chính được thảo luận trong buổi |
| **Kết luận ra sao** | Bảng KẾT LUẬN | Chốt việc gì · ai làm · hạn nào |
| **Tài liệu tiếp nhận** | Bullet trong NỘI DUNG | Mọi file/tài liệu/link được trao đổi, gửi hoặc nhận tại buổi họp |

→ Khi quét nội dung thô, chủ động bắt các dấu hiệu tài liệu: "gửi file...", "up lên confluence/drive", "link...", "tài liệu...", "bản...", "template...". Không để sót ở trục thứ 3.

---

## 6. Xử lý thông tin thiếu / không rõ

- Metadata thiếu (giờ, địa điểm, người ghi...) → `[CẦN BỔ SUNG]`, đặt ngay tại vị trí.
- Kết luận mơ hồ ("sẽ xem xét", "tính sau") → ghi đúng như vậy, KHÔNG nâng thành cam kết cứng.
- Phát biểu mâu thuẫn trong nguồn → giữ cả hai và đánh dấu `[CẦN XÁC NHẬN]`.
- Tuyệt đối không thêm người tham dự, quyết định, hay deadline không có trong nguồn.

---

## 7. Xuất file .docx (chỉ khi BA đồng ý)

Sau khi in biên bản trong chat, hỏi:

> *"Biên bản đã xong. Anh có cần tôi xuất ra file .docx đúng mẫu không?"*

- BA **không** cần → dừng, để bản trong chat.
- BA **có** → dựng file .docx theo đúng layout mẫu. Đọc `references/mom-docx-build.md` để biết quy cách dựng (font Times New Roman 13pt, 4 bảng, căn lề), kết hợp skill `docx`. Xuất xong dùng `present_files` trả file cho BA.

> Chỉ đọc `references/mom-docx-build.md` ở bước này — không load sớm để giữ skill nhẹ.

---

## 8. Ranh giới (khi nào KHÔNG dùng)

- Cần **chuẩn bị câu hỏi trước khi họp/khảo sát** → `prepare-elicitation`.
- Cần **xử lý Q&A, đóng open question sau họp** → `process-qa`.
- Cần **phân tích yêu cầu thành PTYC** → `create-ptyc` (biên bản này có thể là đầu vào cho `pipeline-from-mom`).
- Skill này dừng ở "ghi lại trung thực buổi họp thành biên bản", không phân tích/đặc tả yêu cầu.

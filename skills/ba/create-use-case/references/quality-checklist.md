# Quality Checklist — 16 Điểm Kiểm Tra Use Case

Chạy checklist này TRƯỚC KHI bàn giao UC. Đánh dấu: ✅ Đạt / ❌ Không đạt / ⚠️ Cần review.

---

## NHÓM A: Scope & Nhận diện (C1-C5)

### C1. Tên UC: "động từ + đối tượng", active voice
**Đạt**: "Mua khóa học", "Phê duyệt yêu cầu hẹn mentor", "Tải chứng chỉ hoàn thành"
**Không đạt**: "Khóa học" (không có động từ), "Người dùng mua khóa học" (nhúng actor), "Quản lý khóa học" (động từ mơ hồ)

### C2. UC ở user-goal level (coffee-break test)
Sau khi hoàn thành UC, actor có thể dừng lại — mục tiêu đã đạt.
**Đạt**: "Mua khóa học" → kết thúc khi người dùng có quyền truy cập khóa học
**Không đạt**: "Xác thực OTP" (quá nhỏ — sub-step) | "Quản lý toàn bộ vòng đời học viên" (quá lớn)

### C3. UC ID unique, đúng convention
Format: `UC-<MODULE>-<SEQ>` (vd: UC-HOC-01, UC-MENTOR-03)
**Không đạt**: "UC1" (thiếu module), "UseCase_MuaKhoaHoc" (nhúng tên)

### C4. Đúng 1 actor + 1 mục tiêu nghiệp vụ rõ ràng
Trường Tác nhân chỉ mô tả 1 actor. Nếu cần 2 actor khởi tạo → tách thành 2 UC.
Hệ thống phụ trợ không được liệt kê là actor.

### C5. System boundary rõ ràng
Tất cả các bước "Hệ thống..." chỉ về đúng 1 hệ thống. Dịch vụ ngoài (cổng thanh
toán...) chỉ xuất hiện trong nội dung bước.

---

## NHÓM B: Tác nhân & Mô tả (C6-C7)

### C6. Tác nhân là role cụ thể, duy nhất
**Đạt**: "Người dùng (đã đăng ký tài khoản, email đã xác thực)", "Quản lý nhân sự (đối tác doanh nghiệp)"
**Không đạt**: "User", "Hệ thống", "Người dùng và cổng thanh toán" (nhiều hơn 1 actor)

### C7. Mô tả nêu rõ điểm bắt đầu + điểm kết thúc
Mô tả 2-4 câu, súc tích, trả lời được: UC **bắt đầu khi nào** và **kết thúc khi nào**.
**Không đạt**: "UC này nói về việc mua khóa học." (thiếu cả hai)

---

## NHÓM C: Điều kiện tiên quyết (C8-C9)

### C8. Điều kiện kiểm chứng được (boolean check)
**Đạt**: "Người dùng đã hoàn thành 100% bài học (progress = 100%)" (kiểm tra được trong DB)
**Không đạt**: "Người dùng có động lực học" (không kiểm chứng được), "Hệ thống sẵn sàng" (quá mơ hồ)

### C9. Không chứa mong muốn / giả định không kiểm chứng được
- Điều kiện tiên quyết: PHẢI ĐÚNG, hệ thống kiểm chứng được
- Mong muốn/động cơ của actor ("muốn mua khóa học") hoặc giả định không kiểm
  chứng được ("người dùng biết dùng máy tính") → loại khỏi trường này

---

## NHÓM D: Luồng chính (C10-C13)

### C10. Đánh số, mỗi bước 1 action
Mỗi bước: 1 số thứ tự + 1 action + chủ ngữ rõ. Không dùng "và" nối 2 action khác loại.
**Không đạt**: "3. Người dùng nhập chủ đề và nhấn Gửi và chờ xác nhận." (3 action)

### C11. Xen kẽ Actor / Hệ thống với chủ ngữ rõ ràng
Phải thấy dialog: Actor thao tác → Hệ thống phản hồi → Actor thao tác → ...
**Không đạt**: Chỉ toàn bước của Actor, không có phản hồi của Hệ thống.

### C12. KHÔNG nhúng if/else/loop trong luồng chính
Tìm "nếu", "trường hợp", "ngược lại" → chuyển sang luồng thay thế hoặc luồng ngoại lệ.

### C13. Luồng chạy từ trigger đến khi đạt mục tiêu
Bước 1 = trigger | Bước cuối = "Use case kết thúc." Không có bước lửng lơ.

---

## NHÓM E: Luồng thay thế & Luồng ngoại lệ (C14-C16)

### C14. Mỗi luồng thay thế: "tại bước N" + các bước con + điểm quay lại/kết thúc
Format:
```
UC-XX.AC.N: [Tên]
Tại bước Y của luồng chính, nếu [điều kiện]:
Ya. [bước con]
Yb. [bước con]
→ quay lại bước Z của luồng chính. (hoặc: → Use case kết thúc.)
```
Luồng thay thế bao gồm cả trường hợp người dùng chủ động dừng/hủy
(vd: không tìm thấy khóa học → thoát; hủy thanh toán → hệ thống hủy việc mua).

### C15. Mỗi luồng ngoại lệ đủ 3 phần: trigger + xử lý + trạng thái cuối
"Nếu lỗi thì hiển thị thông báo lỗi" là KHÔNG đủ — phải nêu rõ trạng thái cuối
(rollback? đã trừ tiền chưa? người dùng đứng ở đâu?).

### C16. Cover đủ các failure mode phổ biến
| Loại lỗi | Bắt buộc? |
|---|---|
| Lỗi validation | ✅ |
| Vi phạm business rule (hết quota, hết chỗ) | ✅ |
| Lỗi dịch vụ ngoài (timeout, không khả dụng) | ✅ |
| Lỗi xác thực / phân quyền | ✅ nếu UC có auth |
| Xung đột đồng thời (concurrency) | ✅ với UC booking/mua hàng |

Nếu UC chỉ có 1-2 luồng ngoại lệ → đáng nghi. UC mua hàng/booking thường cần 3-5.

---

## Format Báo Cáo Validation

```markdown
## Kết quả Validation cho UC-XX-YY

| # | Hạng mục | Trạng thái | Ghi chú |
|---|----------|------------|---------|
| C1 | Format tên UC | ✅ | Động từ + đối tượng |
| C2 | User-goal level | ✅ | Đạt coffee-break test |
| C3 | UC ID unique | ✅ | |
| C4 | Đúng 1 actor | ✅ | |
| C5 | System boundary | ✅ | |
| C6 | Actor là role cụ thể | ✅ | |
| C7 | Mô tả có bắt đầu/kết thúc | ✅ | |
| C8 | Điều kiện kiểm chứng được | ✅ | |
| C9 | Không lẫn mong muốn/giả định | ✅ | |
| C10 | 1 action/bước | ✅ | |
| C11 | Xen kẽ Actor/Hệ thống | ✅ | |
| C12 | Không if/else lồng | ✅ | |
| C13 | Luồng hoàn chỉnh | ✅ | |
| C14 | Luồng thay thế đúng format | ✅ | |
| C15 | Luồng ngoại lệ đủ 3 phần | ✅ | |
| C16 | Cover đủ failure modes | ⚠️ | Cần bổ sung case concurrency |

**Tổng kết**: 15/16 ✅ + 1 ⚠️. UC sẵn sàng cho stakeholder review.
**Follow-up**: C16 — Bổ sung luồng ngoại lệ xung đột đồng thời.
```

---
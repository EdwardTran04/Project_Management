# Kỹ thuật Thiết kế và Góc nhìn Kiểm thử (Test Design Techniques & Viewpoints)

Tài liệu này định nghĩa các kỹ thuật thiết kế testcase chuẩn ISTQB kết hợp các góc nhìn kiểm thử đặc thù nhằm nâng cao độ phủ testcase, giảm thiểu sai sót và tối ưu hóa số lượng testcase cần thực hiện.

---

## PHẦN 1 — PHÂN LOẠI THEO CHUẨN ISTQB

Các kỹ thuật thiết kế testcase được chia làm 3 nhóm chính theo chuẩn ISTQB:

1. **🔲 Black-Box (Specification-based):** Dựa hoàn toàn vào tài liệu đặc tả yêu cầu (SRS, BRD, User Story) để thiết kế testcase mà không cần biết cấu trúc mã nguồn bên trong.
   * *Các kỹ thuật áp dụng:* Phân vùng tương đương (EP), Phân tích giá trị biên (BVA), Bảng quyết định (Decision Table), Chuyển đổi trạng thái (State Transition), Use Case Testing, Pairwise Testing.
2. **⬜ White-Box (Structure-based):** Dựa vào cấu trúc mã nguồn bên trong và luồng xử lý code để bao phủ luồng lệnh, nhánh (Branch Coverage, Statement Coverage). *Lưu ý: Nhóm kỹ thuật này thường áp dụng ở mức Unit Test hoặc Integration Test bởi lập trình viên.*
3. **💡 Experience-based (Dựa trên kinh nghiệm):** Dựa vào kinh nghiệm, kiến thức nghiệp vụ, lỗi thường gặp trước đó và trực giác của Tester để dự đoán lỗi.
   * *Các kỹ thuật áp dụng:* Error Guessing (Đoán lỗi), Exploratory Testing (Kiểm thử khám phá).

---

## PHẦN 2 — 7 KỸ THUẬT THIẾT KẾ TESTCASE CHÍNH

### 1. Phân vùng tương đương (Equivalence Partitioning - EP) 🔲
* **Khái niệm:** Chia tập giá trị đầu vào thành các **vùng (partition)** mà mọi giá trị trong vùng đó được hệ thống xử lý giống nhau. Chỉ cần test **1 đại diện** từ mỗi vùng thay vì test toàn bộ giá trị.
* **Khi nào dùng:** Trường input có dải giá trị rộng, kiểu dữ liệu đa dạng hoặc nhiều giá trị rời rạc.
* **Công thức:**
  ```
  Valid Partition (Vùng hợp lệ) → Test 1 giá trị hợp lệ bất kỳ đại diện cho vùng
  Invalid Partition (Vùng không hợp lệ) → Test 1 giá trị không hợp lệ bất kỳ đại diện cho vùng
  ```
* **Ví dụ — Ô tìm kiếm (yêu cầu tối đa 200 ký tự):**
  * **Vùng 1 (Valid Partition):** Độ dài từ 1 đến 200 ký tự. Đại diện: Chuỗi 50 ký tự.
  * **Vùng 2 (Invalid Partition):** Không nhập gì (0 ký tự). Đại diện: Bỏ trống.
  * **Vùng 3 (Invalid Partition):** Lớn hơn 200 ký tự. Đại diện: Chuỗi 201 ký tự.
* **Lợi ích định lượng:** Giảm số lượng testcase từ 200+ trường hợp thực tế xuống còn 3 testcase đại diện mà vẫn đảm bảo độ bao phủ của tất cả các phân vùng logic.

---

### 2. Phân tích giá trị biên (Boundary Value Analysis - BVA) 🔲
* **Khái niệm:** Tập trung kiểm thử các giá trị tại biên của phân vùng tương đương, nơi lập trình viên thường dễ viết nhầm toán tử so sánh (ví dụ: `<` thành `<=`, `>` thành `>=`).
* **Khi nào dùng:** Cho các dải số, khoảng ngày tháng, giới hạn ký tự nhập, hạn ngạch (quota), ngưỡng (threshold).
* **Công thức áp dụng:**
  * **3-point BVA:** Test tại 3 điểm: Điểm Biên (Boundary - B), Điểm ngay dưới biên (Just Below - B-1), Điểm ngay trên biên (Just Above - B+1).
  * **2-point BVA:** Test tại 2 điểm: Điểm Biên (Boundary - B), Điểm ngoài biên gần nhất (Out of boundary - B+1 hoặc B-1 tùy thuộc biên trên hay biên dưới).
* **Quy ước gắn Tag Testcase:**
  * `[BOUNDARY]`: Cho các trường hợp biên hợp lệ (hệ thống xử lý thành công).
  * `[NEG]`: Cho các trường hợp biên không hợp lệ (hệ thống chặn và báo lỗi).
* **Bảng ví dụ BVA — Trường tuổi người dùng đăng ký (Yêu cầu: từ 18 đến 60 tuổi):**

| Giá trị kiểm thử | Loại điểm biên | Tag phân loại | Kết quả mong đợi |
| :--- | :--- | :--- | :--- |
| **17** | Ngay dưới biên dưới (B-1) | `[NEG]` | Hệ thống chặn, hiển thị lỗi không đủ tuổi |
| **18** | Điểm biên dưới (B / Min) | `[BOUNDARY]` | Đăng ký thành công |
| **19** | Ngay trên biên dưới (B+1) | `[BOUNDARY]` | Đăng ký thành công |
| **59** | Ngay dưới biên trên (B-1) | `[BOUNDARY]` | Đăng ký thành công |
| **60** | Điểm biên trên (B / Max) | `[BOUNDARY]` | Đăng ký thành công |
| **61** | Ngay trên biên trên (B+1) | `[NEG]` | Hệ thống chặn, hiển thị lỗi vượt quá độ tuổi |

---

### 3. Bảng quyết định (Decision Table Testing) 🔲
* **Khái niệm:** Biểu diễn các quy tắc nghiệp vụ dưới dạng bảng ánh xạ giữa tổ hợp các điều kiện đầu vào và các hành động đầu ra tương ứng.
* **Khi nào dùng:** Logic nghiệp vụ rẽ nhánh phức tạp có nhiều điều kiện kết hợp, đặc biệt là phân quyền kết hợp giữa vai trò người dùng (Role) × Trạng thái đối tượng (State).
* **Cấu trúc bảng:** Gồm phần điều kiện (Conditions - Y/N/Any) và phần hành động (Actions - X/Empty).
* **Ví dụ — Phê duyệt logwork của dự án:**
  * *Điều kiện:* C1: Là Project Manager (PM)? | C2: Trạng thái logwork là "Chờ duyệt"? | C3: Dự án đã đóng (Closed)?
  * *Hành động:* A1: Cho phép phê duyệt | A2: Hiển thị lỗi / thông báo cảnh báo

| Điều kiện / Hành động | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Là PM của dự án?** | Y | Y | N | Y |
| **C2: Trạng thái là "Chờ duyệt"?** | Y | N | Y | Y |
| **C3: Dự án đã đóng (Closed)?** | N | N | - | Y |
| **A1: Cho phép phê duyệt** | **X** | | | |
| **A2: Hiển thị lỗi / cảnh báo** | | **X** (Đã được duyệt) | **X** (Không có quyền) | **X** (Dự án đã đóng) |

---

### 4. Chuyển đổi trạng thái (State Transition Testing) 🔲
* **Khái niệm:** Thiết kế testcase dựa trên quy trình thay đổi trạng thái của đối tượng trong hệ thống dưới tác động của các sự kiện.
* **Khi nào dùng:** Các chức năng quy trình nghiệp vụ (workflow), phê duyệt đa cấp, vòng đời đơn hàng, vòng đời phiên làm việc (Session).
* **Cấu trúc Testcase:** Trạng thái ban đầu (Initial State) → Sự kiện kích hoạt (Event) → Hành động xử lý (Action) → Trạng thái mới (Target State).
* **Ví dụ — Vòng đời Trạng thái Phiên làm việc (Session State):**

| Trạng thái ban đầu | Sự kiện kích hoạt (Event) | Hành động hệ thống (Action) | Trạng thái đích |
| :--- | :--- | :--- | :--- |
| **Chưa đăng nhập** | Đăng nhập thành công | Khởi tạo Session ID | **Đang hoạt động (Active)** |
| **Đang hoạt động (Active)** | Không thao tác > 15 phút | Xóa Session, lưu cache | **Hết hạn (Expired)** |
| **Hết hạn (Expired)** | Người dùng click vào link/nút | Chuyển hướng về trang Đăng nhập | **Chưa đăng nhập** |
| **Đang hoạt động (Active)** | Click nút "Đăng xuất" | Thu hồi Session ID | **Chưa đăng nhập** |

---

### 5. Kiểm thử dựa trên Use Case (Use Case Testing) 🔲
* **Khái niệm:** Thiết kế testcase đi qua toàn bộ quy trình hành trình (End-to-End Flow) được mô tả trong Use Case từ góc nhìn của người dùng cuối.
* **Các luồng cần kiểm thử:**
  * **Main Flow (Happy Path):** Luồng thực hiện thông thường, thành công từ đầu đến cuối mà không có lỗi.
  * **Alternative Flow (Luồng thay thế):** Luồng đi theo cách khác nhưng kết quả cuối cùng vẫn đạt mục đích thành công (ví dụ: Thanh toán qua ví điện tử MoMo thay vì thẻ VISA).
  * **Exception Flow (Luồng ngoại lệ):** Luồng xử lý khi gặp lỗi hoặc người dùng hủy bỏ quy trình giữa chừng (ví dụ: Thẻ hết tiền, OTP nhập sai quá số lần cho phép).
* **Ví dụ E2E Flow — Thanh toán hóa đơn nước:**
  * **TC-01 (Happy Path):** Login → Chọn mục Hóa đơn nước → Chọn nhà cung cấp → Nhập mã KH → Chọn thanh toán bằng thẻ VISA → Xác thực OTP thành công → Hiển thị hóa đơn điện tử thành công.
  * **TC-02 (Alternative Flow):** Login → Chọn hóa đơn → Nhập mã KH → Chọn thanh toán qua MoMo → Mở App MoMo quét mã QR thành công → Trả kết quả thanh toán thành công.
  * **TC-03 (Exception Flow):** Login → Chọn hóa đơn → Nhập mã KH → Chọn thanh toán VISA → Nhập sai mã OTP quá 3 lần → Giao dịch bị khóa, hiển thị thông báo lỗi chi tiết.

---

### 6. Kiểm thử Pairwise (Pairwise Testing / All-Pairs) 🔲
* **Khái niệm:** Kỹ thuật tổ hợp tối ưu dựa trên nguyên lý hầu hết các lỗi hệ thống xảy ra do sự tương tác giữa **một cặp (2-way)** tham số đầu vào. Thay vì kiểm thử toàn bộ các tổ hợp (gây bùng nổ testcase), Pairwise chỉ lựa chọn các bộ testcase sao cho mọi cặp giá trị đều xuất hiện cùng nhau ít nhất một lần.
* **Khi nào dùng:** Trang danh sách có bộ lọc kết hợp nhiều tham số, cấu hình phần cứng/thiết bị tương thích.
* **Ví dụ — Tổ hợp Bộ lọc danh sách dự án:**
  * *Bộ lọc 1 (Bộ phận):* IT, HR, QA (3 giá trị)
  * *Bộ lọc 2 (Trạng thái):* Chờ duyệt, Đã duyệt (2 giá trị)
  * *Bộ lọc 3 (Hợp đồng):* Thử việc, Chính thức (2 giá trị)
  * *Tổng số tổ hợp đầy đủ:* 3 × 2 × 2 = 12 testcase.
  * *Áp dụng Pairwise (All-Pairs):* Rút ngắn còn **6 testcase** mà vẫn phủ đầy đủ mọi cặp giá trị:

| TC ID | Bộ phận | Trạng thái lọc | Loại hợp đồng |
| :--- | :--- | :--- | :--- |
| **TC-01** | IT | Chờ duyệt | Chính thức |
| **TC-02** | IT | Đã duyệt | Thử việc |
| **TC-03** | HR | Chờ duyệt | Thử việc |
| **TC-04** | HR | Đã duyệt | Chính thức |
| **TC-05** | QA | Chờ duyệt | Chính thức |
| **TC-06** | QA | Đã duyệt | Thử việc |

---

### 7. Đoán lỗi (Error Guessing) 💡
* **Khái niệm:** Kỹ thuật thiết kế testcase dựa vào kinh nghiệm thực chiến của tester để liệt kê ra các trường hợp mà hệ thống dễ bị lỗi hoặc lập trình viên thường bỏ sót.
* **Khi nào dùng:** Bổ sung sau khi đã hoàn thành các kỹ thuật chính quy (BVA, EP, Decision Table).
* **Danh sách các lỗi đặc thù trên Mobile App (Mobile-specific bugs) cần đoán lỗi:**
  * **Gián đoạn kết nối (Network Interruption):** Đang gửi request thì mất mạng đột ngột, chuyển nhanh từ Wifi sang 4G/5G, bật chế độ máy bay.
  - **Gián đoạn ứng dụng (App Interruption):** Có cuộc gọi đến, tin nhắn SMS/Zalo, thông báo đẩy (push notice) nhảy lên, cắm sạc pin, pin yếu xuống mức 15%.
  * **Tương tác phần cứng:** Xoay ngang dọc màn hình liên tục khi app đang loading, cắm/rút tai nghe, tăng giảm âm lượng.
  * **Hệ điều hành & Background:** Đưa ứng dụng xuống chạy ngầm (Home/Background) rồi mở lại, thiết bị hết dung lượng lưu trữ khi app đang lưu dữ liệu.
  * **Đồng bộ hóa phiên:** Đăng nhập cùng 1 tài khoản trên 2 thiết bị và thao tác đồng thời.

* **Bảng 10 tình huống Error Guessing thường gặp (Checklist bắt buộc):**

  Khi sinh testcase Error Guessing, agent **PHẢI** rà soát bảng dưới đây và thêm TC cho mỗi tình huống áp dụng được:

  | # | Tình huống | Loại lỗi hay gặp | TC Tag | Áp dụng cho |
  |:---:|-----------|-----------------|--------|:-----------:|
  | 1 | Double-tap / Multi-tap nút Submit | Gửi 2+ request trùng lặp | `[NEG] Multi-tap` | Mobile + Web |
  | 2 | Copy-paste vào input field | Vượt max length do paste | `[NEG] Paste overflow` | Mobile + Web |
  | 3 | Nhấn Back khi đang nhập liệu | Mất dữ liệu đã nhập, không cảnh báo | `[NEG] Back mid-input` | Mobile + Web |
  | 4 | Xoay màn hình khi đang loading | Crash, mất data, UI vỡ | `[Mobile] Rotate during load` | Mobile |
  | 5 | App bị kill → mở lại (resume) | State bị reset, mất phiên | `[Mobile] Force kill resume` | Mobile |
  | 6 | Nhập Emoji vào text field | Crash, lỗi encoding khi lưu DB | `[NEG] Emoji input` | Mobile + Web |
  | 7 | Chuyển tab nhanh liên tục | State lẫn lộn giữa 2 tab | `[NEG] Rapid tab switch` | Mobile + Web |
  | 8 | Token/Session hết hạn đúng lúc submit | Silent fail, không báo lỗi | `[UNAUTH] Token expired` | Mobile + Web |
  | 9 | Scroll đến đáy + pull-to-refresh | Duplicate data, load trùng trang | `[Mobile] Boundary scroll` | Mobile |
  | 10 | Nhập số âm vào trường số lượng | Lỗi business rule, tính toán sai | `[NEG] Negative value` | Mobile + Web |

  > **Cách dùng:** Khi sinh testcase cho 1 module, duyệt qua 10 tình huống trên. Nếu module có UI element/hành vi liên quan → tạo TC tương ứng với tag trong cột "TC Tag". Nếu không áp dụng (ví dụ: module Web thuần thì bỏ qua dòng 4, 5, 9) → ghi chú lý do bỏ qua.

---

## PHẦN 3 — BẢNG CHỌN KỸ THUẬT THEO LOẠI CHỨC NĂNG

Sử dụng bảng này để quyết định kỹ thuật thiết kế testcase chủ đạo khi bắt đầu phân tích:

| Loại chức năng | Đặc tính yêu cầu | Kỹ thuật phù hợp chính | Kỹ thuật bổ trợ |
| :--- | :--- | :--- | :--- |
| **Form / Ô nhập liệu** | Nhập text, số, định dạng ngày tháng, giới hạn ký tự | **Boundary Value Analysis (BVA)** | Equivalence Partitioning (EP) |
| **Logic nghiệp vụ / Phân quyền** | Nhiều vai trò người dùng (Role) kết hợp với các điều kiện logic phức tạp | **Decision Table Testing** | Equivalence Partitioning (EP) |
| **Quy trình / Workflow** | Đối tượng chuyển trạng thái qua các bước phê duyệt | **State Transition Testing** | Use Case Testing (cho E2E Flow) |
| **Hành trình End-to-End** | Các luồng đi liên tục từ lúc bắt đầu đến kết thúc nghiệp vụ | **Use Case Testing** | State Transition Testing |
| **Bộ lọc tìm kiếm nâng cao** | Nhiều tiêu chí tìm kiếm kết hợp, có nhiều combobox | **Pairwise Testing** | Equivalence Partitioning (EP) |
| **Đặc thù ứng dụng Mobile** | Tương tác thiết bị, mạng không ổn định, gián đoạn vật lý | **Error Guessing** (Mobile checklist) | Use Case Testing |

---

## PHẦN 4 — CẤU TRÚC TEST SUITE BẮT BUỘC CHO MỖI MÀN HÌNH

Khi sinh testcase cho bất kỳ màn hình nào, bộ testcase **bắt buộc** phải được tổ chức thành 5 nhóm Suite sau để tránh bỏ sót:

1. **Happy Path (Luồng chạy thành công):** Phủ các case thông thường với dữ liệu hợp lệ, quy trình đúng chuẩn để đảm bảo tính năng chạy được.
2. **Negative Cases (Luồng lỗi & Kiểm tra ràng buộc):** Phủ các trường hợp nhập sai, nhập thiếu, vượt biên giới hạn, không đúng định dạng.
3. **Business Logic (Quy tắc nghiệp vụ & Tính toán):** Phủ các logic tính toán công thức, cảnh báo tiến độ vượt ngưỡng (ví dụ: cảnh báo logwork), ràng buộc chéo.
4. **Permission & Security (Phân quyền & Bảo mật):** Phủ các case phân quyền role (PM chỉ thấy dự án PM, NV chỉ thấy dữ liệu cá nhân), chặn SQL injection, chặn XSS.
5. **Mobile-specific & Interruptions (Đặc thù Mobile & Gián đoạn):** (Nếu có chạy trên Mobile) Phủ các case mất kết nối, chuyển mạng, cuộc gọi đến, xoay màn hình, chạy ngầm.

---

## PHẦN 5 — CÁC GÓC NHÌN KIỂM THỬ ĐẶC THÙ (DOMAIN-SPECIFIC VIEWPOINTS)

*Bổ trợ cho các kỹ thuật ISTQB ở trên bằng các checklist kiểm tra chi tiết theo từng loại nghiệp vụ đặc thù:*

### 1. Ràng buộc chéo giữa các trường (Cross-field dependency)
Kiểm tra các quy tắc nghiệp vụ khi giá trị của trường này quyết định định dạng hoặc yêu cầu của trường kia.
* *Checklist:*
  * Ngày kết thúc phải sau ngày bắt đầu.
  * Lý do từ chối là bắt buộc nhập khi chọn trạng thái "Từ chối duyệt".
  * File đính kèm là bắt buộc khi chọn phân loại chi phí "Khác".
  * Trường "Mã số thuế" bị mờ (readonly) khi chọn loại khách hàng là "Cá nhân".

### 2. Vòng đời dữ liệu (Data Lifecycle)
Theo dõi trạng thái của bản ghi dữ liệu qua tất cả các thao tác trong vòng đời.
* *Checklist:*
  * Bản ghi mới tạo hiển thị chính xác ở trang danh sách và trang chi tiết.
  * Sửa dữ liệu, lưu lại và kiểm tra giá trị mới đã được cập nhật lưu trữ thành công.
  * Xóa bản ghi (xóa mềm): Bản ghi không còn hiển thị ở danh sách nhưng vẫn tồn tại trong DB với cờ xóa.
  * Bản ghi có ràng buộc khóa ngoại không cho phép xóa (ví dụ: không cho xóa Dự án khi đang có nhân viên logwork).

### 3. Gián đoạn trên giao diện Web (Interruption and recovery - Web)
Kiểm tra phản ứng của hệ thống khi người dùng phá vỡ luồng thao tác thông thường trên trình duyệt.
* *Checklist:*
  * Nhấn F5 (Refresh) khi đang điền form: Kiểm tra dữ liệu có bị mất sạch hay có cảnh báo "Unsaved changes".
  * Nhấn nút Back của trình duyệt khi đang thao tác dở.
  * Hết hạn phiên làm việc (Session timeout) khi đang mở form điền dở.
  * Double submit: Nhấn nút Lưu 2 lần liên tiếp (chặn tạo bản ghi trùng lặp).

### 4. Tính toán và Giá trị phái sinh (Calculation and derived values)
Kiểm tra tính chính xác của các con số hiển thị động.
* *Checklist:*
  * Công thức tính toán tổng số tiền, tổng số giờ, phần trăm thực hiện chính xác theo đặc tả.
  * Hệ thống tự động tính lại ngay lập tức khi thay đổi giá trị đầu vào.
  * Quy tắc làm tròn số thập phân (ví dụ: làm tròn đến 2 chữ số sau dấu phẩy).
  * Ngưỡng cảnh báo (chỉ cảnh báo màu đỏ) khác với ngưỡng chặn (hiển thị thông báo và chặn lưu).

### 5. Tìm kiếm, Bộ lọc, Sắp xếp và Phân trang (Search, Filter, Sort, Paging)
Kiểm tra các hành động tương tác dữ liệu trên trang danh sách.
* *Checklist:*
  * Tìm kiếm chính xác (exact match) và tìm kiếm tương đối (partial match).
  * Hiển thị trạng thái "Không tìm thấy kết quả phù hợp" khi không có dữ liệu khớp.
  * Lọc đồng thời nhiều tiêu chí (ví dụ: vừa lọc bộ phận vừa lọc trạng thái).
  * Sắp xếp tăng dần/giảm dần trên tất cả các cột cho phép sắp xếp.
  * Chuyển trang (phân trang), thay đổi số lượng bản ghi hiển thị trên trang (pageSize = 10, 30, 50).

### 6. File đính kèm và Import/Export
Kiểm tra tương tác với tệp tin.
* *Checklist:*
  * Upload file đúng định dạng cho phép và dung lượng tối đa cho phép.
  * Chặn và hiển thị lỗi rõ ràng khi upload file sai định dạng (.exe, .zip...) hoặc quá dung lượng.
  * Import file Excel: Validate dữ liệu từng dòng, hiển thị danh sách dòng lỗi chi tiết nếu import thất bại.
  * Export Excel: File xuất ra đúng định dạng .xlsx, dữ liệu khớp chính xác với bộ lọc đang được chọn trên UI.

### 7. Lịch sử tác động và Audit Log
Kiểm tra lưu vết hoạt động phục vụ hậu kiểm.
* *Checklist:*
  * Bản ghi hiển thị đúng thông tin: Người tạo, Ngày tạo, Người cập nhật cuối, Ngày cập nhật cuối.
  * Lịch sử phê duyệt ghi nhận đúng trình tự: Người duyệt, Hành động, Timestamp, Lý do phê duyệt/từ chối.

### 8. Bản địa hóa và Định dạng (Localization and formatting - Vietnamese)
Kiểm tra hiển thị và xử lý dữ liệu đặc thù Việt Nam.
* *Checklist:*
  * Định dạng ngày tháng hiển thị dạng `DD/MM/YYYY`.
  * Định dạng số: Dấu phân cách phần nghìn dùng dấu chấm (`.`), dấu phân cách thập phân dùng dấu phẩy (`,`).
  * Tìm kiếm tiếng Việt: Tìm kiếm không dấu vẫn ra kết quả có dấu (ví dụ: gõ "truong" ra "Trường").
  * Không lỗi font chữ tiếng Việt, không vỡ layout khi nhãn chữ tiếng Việt dài hơn tiếng Anh.

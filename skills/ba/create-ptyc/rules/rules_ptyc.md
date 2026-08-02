# QUY TẮC PHÂN TÍCH YÊU CẦU NGƯỜI DÙNG (PTYC)
---

## NGUYÊN TẮC CỐ ĐỊNH

- Biểu mẫu: Sử dụng đúng chuẩn **BM.01.QT.00.CNTT.28**.
- Ngôn ngữ: Tiếng Việt, Font Unicode, định dạng ngày tháng `dd/mm/yyyy`.
- Tính pháp lý: Tài liệu là cơ sở thống nhất và nghiệm thu — tuyệt đối không dùng các từ ngữ mơ hồ như "có thể", "nếu cần".
- Không được bỏ bất kỳ đầu mục nào trong cấu trúc dưới đây. Không được tự thêm hoặc xoá đầu mục.
- Mọi mục thông tin phải viết chi tiết, rõ ràng, cụ thể.

---

## CẤU TRÚC TÀI LIỆU

### 1. GIỚI THIỆU

**1.1. Mục đích tài liệu**
Trả lời: Tài liệu viết về cái gì? Ai dùng? Dùng để làm gì?

**1.2. Phạm vi tài liệu**
Xác định tên sản phẩm phần mềm được xây dựng. Giải thích phạm vi đáp ứng (và không đáp ứng nếu cần) cùng lợi ích, kết quả và mục tiêu đạt được. Ghi nhận điều kiện nghiệm thu và phương án xử lý khi phát sinh mâu thuẫn.

**1.3. Định nghĩa thuật ngữ và từ viết tắt**
Liệt kê đầy đủ khái niệm nghiệp vụ và kỹ thuật. Bảng 3 cột: Thuật ngữ | Định nghĩa | Ghi chú. Tên bảng bắt buộc: "Thuật ngữ và định nghĩa".

**1.4. Tài liệu tham khảo**
Ghi rõ tên, số, ngày Hợp đồng hoặc Thông tư, hướng dẫn nghiệp vụ liên quan. Bảng 4 cột: Tên tài liệu | Ngày phát sinh | Nguồn | Ghi chú.

**1.5. Mô tả tài liệu**
Tóm tắt cách tổ chức các chương mục trong tài liệu. Liệt kê từng phần và nội dung tóm tắt.

---

### 2. TỔNG QUAN VỀ HỆ THỐNG

**2.1. Phát biểu bài toán**

*2.1.1. Tổng quan bài toán*
Phát biểu ngắn gọn nguyên nhân phát sinh và nội dung bài toán. Bài toán xuất phát từ nhu cầu quản lý/kinh doanh thực tế, chỉ rõ những khó khăn hiện tại và hướng tin học hóa cần thực hiện.

*2.1.2. Hiện trạng quy trình nghiệp vụ*
Tổng hợp nội dung khảo sát quy trình nghiệp vụ hiện tại: các lĩnh vực kinh doanh liên quan và các quy trình nghiệp vụ chính.

*2.1.3. Hiện trạng hạ tầng dữ liệu*
Tổng hợp nội dung khảo sát hạ tầng dữ liệu: hệ thống kho dữ liệu hiện có/chưa có, cách khai thác dữ liệu, các nguồn dữ liệu chính và dung lượng ước tính.

**2.2. Mục tiêu hệ thống**
Nêu ngắn gọn tình trạng hiện tại và mục đích xây dựng sản phẩm. Mục tiêu là kết quả cần đạt được khi giải quyết bài toán — liệt kê dạng bullet.

**2.3. Phạm vi hệ thống**

*2.3.1. Danh sách nhóm người sử dụng*
Liệt kê danh sách nhóm người sử dụng dạng phân cấp hình cây. Mô tả chi tiết vai trò từng nhóm theo bảng 3 cột: STT | Vai trò | Nhiệm vụ. Cột Nhiệm vụ phải bao gồm danh sách tác nhân con (nếu có) và các chức năng thực hiện được.

*2.3.2. Mô hình tổng thể hệ thống*
Sơ đồ tương tác giữa người dùng, đối tượng nghiệp vụ và luồng chức năng.

---

### 3. THỐNG NHẤT DANH SÁCH NGUỒN DỮ LIỆU

**3.1. Danh sách nguồn dữ liệu**
Bảng 7 cột: STT | Hệ thống nguồn | Loại dữ liệu | Đầu mối nghiệp vụ | Đầu mối kỹ thuật | Nền tảng | Ghi chú.

**3.2. Danh sách bảng nguồn**
Bảng 12 cột: STT | Mã HT | Tên HT | Schema | Tên bảng | Mô tả ý nghĩa | Dung lượng (GB) | Số bản ghi | Số trường | Tần suất | Thời gian lưu trữ | Ghi chú.

---

### 4. THỐNG NHẤT YÊU CẦU CHỨC NĂNG/NGHIỆP VỤ

**Quy tắc viết quy trình nghiệp vụ:**
- Quy trình phải là quy trình đã tin học hóa — có sự tham gia tác động của máy tính.
- Không nhầm lẫn quy trình nghiệp vụ với chức năng nghiệp vụ.
- Chỉ dùng động từ mô tả hành động của người dùng — không phải hệ thống tự động. Không dùng cụm "Hệ thống tự động...".
- Mỗi bước đặt tên theo quy tắc: Động từ + Danh từ (ví dụ: "Tạo công việc", "Duyệt hợp đồng").
- Số bước trong 1 quy trình: tối thiểu 4, tối đa 10 bước (không tính Start/Finish).
- Chỉ có 1 bước bắt đầu và 1 bước kết thúc (hoặc nhiều nếu quy trình có nhánh phức tạp, phải chú thích rõ).
- Các loại bước: A (Add), B (Browse), C (Change), D (Delete), S (Search), V (Validate).
- Sau bước bắt đầu phải có bước nhận thông tin (A, B hoặc S). Trước bước kết thúc phải có bước lưu thông tin (A, C hoặc D).
- Bước V (Validate) phải có từ 2 nhánh trở lên.
- Các bước đánh số tăng dần. Nhánh rẽ đánh số mức 2 (3a, 3b) hoặc mức 1 tuỳ độ phức tạp.

**4.X. [Tên phân hệ/nhóm chức năng]**

*4.X.1. Quy trình nghiệp vụ (nếu có)*

a) Thông tin chung: Mô tả ngắn gọn nội dung, mục đích quy trình và các tác nhân tham gia.

b) Luồng quy trình: Mô hình cross-function diagram. Các bước đánh số tăng dần.

c) Mô tả các bước trong quy trình = **bảng luồng trạng thái (workflow transition) lấy y hệt định dạng output của skill create-process**. Bảng **7 cột, không đổi tên/không thêm bớt cột**: STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan. Liệt kê đủ luồng chính + luồng con + nhánh ngoại lệ. `Trạng thái đầu vào` cho phép nhiều giá trị; bước khởi tạo ghi N/A. Bước hệ thống/tự động (quá hạn, batch job, callback tích hợp) ghi tác nhân = "Hệ thống" và vẫn là một dòng transition. Nếu đã có output của create-process thì copy nguyên bảng vào đây.

*4.X.2. Yêu cầu chi tiết chức năng*

a) Danh sách chức năng = **bảng chức năng lấy y hệt định dạng output của skill extract-function-list**. Bảng **5 cột**: STT | Chức năng | Tính năng | Mô tả | Độ ưu tiên. Cột "Chức năng" dạng "Quản lý [Đối tượng]"; mỗi đối tượng gom đủ tính năng theo thứ tự Basic → Workflow → Advance; tính năng workflow bám đúng "Tên bước" trong bảng luồng trạng thái ở 4.X.1.c để truy vết. Nếu đã có output của extract-function-list thì copy nguyên bảng vào đây.

b) Mô hình phân rã chức năng: Vẽ cây phân rã chức năng. Mỗi chức năng phải được đánh mã (ví dụ: UC-01, F-01). Phân loại yêu cầu: Bắt buộc / Mong muốn / Lựa chọn / Tương lai.

c) Đặc tả từng chức năng — cấu trúc bắt buộc:

**i. Thông tin chung chức năng** — Bảng 2 cột:

| Tên chức năng | [Tên – kèm mã tham chiếu] |
|--------------|--------------------------|
| Mô tả | [Vai trò, mục đích, phạm vi tác động, đối tượng dữ liệu] |
| Tác nhân | [Người dùng hoặc hệ thống tương tác] |
| Điều kiện trước | [Trạng thái hệ thống phải có trước khi thực hiện] |
| Điều kiện sau | [Trạng thái sau khi thực hiện: thành công / thất bại] |
| Ngoại lệ | [Các sự kiện lỗi có thể xảy ra] |
| Yêu cầu đặc biệt | [Yêu cầu phi chức năng riêng: pháp lý, hiệu năng, ràng buộc thiết kế] |

**ii. Biểu đồ luồng xử lý chức năng**

**iii. Dòng sự kiện chính (Basic Flow)** — Bảng 3 cột:

| Hành động của tác nhân | Phản ứng của hệ thống | Dữ liệu liên quan (C/R/U/D) |
|-----------------------|----------------------|-----------------------------|

C = Create, R = Read, U = Update, D = Delete.

**iv. Dòng sự kiện phụ (Alternative Flow)** — Bảng 3 cột (cấu trúc tương tự Basic Flow). Mô tả ngoại lệ và rẽ nhánh từ luồng chính.

**v. Ghi chú (tuỳ chọn):** Quy tắc nghiệp vụ, công thức tính, quy tắc sinh mã, kiểm tra tính hợp lệ dữ liệu, bảng trạng thái đối tượng nghiệp vụ.

---

### 5. CÁC YÊU CẦU PHI CHỨC NĂNG

**5.1. Yêu cầu bảo mật hệ thống – ATTT** *(Bắt buộc)*
Liệt kê các yêu cầu bảo mật hệ thống. Bảng phân mức độ nghiêm trọng các nguy cơ ATTT — 2 cột: Mức độ (Nghiêm trọng / Cao / Trung bình / Thấp) | Nguy cơ.

**5.2. Yêu cầu sao lưu**
Liệt kê yêu cầu sao lưu cụ thể theo loại dữ liệu và chu kỳ. Nếu khách hàng không có yêu cầu, ghi rõ: "Khách hàng không có yêu cầu sao lưu." Không được ghi N/A.

**5.3. Yêu cầu về tính ổn định**
Nêu con số downtime theo kỳ tháng/năm.

**5.4. Yêu cầu về hiệu năng**
Liệt kê đầy đủ 5 KPI hiệu năng bắt buộc theo bảng:

| Mục tiêu kiểm thử | Chức năng kiểm thử | Giá trị cần đạt |
|------------------|--------------------|----------------|
| Response time | | |
| Throughput | | |
| Concurrency | | |
| CPU usage | | |
| RAM usage | | |

Kèm theo: bảng active user / concurrent user theo chức năng; bảng thời gian xử lý trung bình và cao tải.

**5.5. Yêu cầu về giao tiếp**

*5.5.1. Giao diện người dùng:* Loại giao diện, chuẩn giao diện, font, độ phân giải tối thiểu, ngôn ngữ, định dạng ngày/số.

*5.5.2. Giao tiếp phần cứng:* Liệt kê thiết bị phần cứng kết nối. Ghi N/A nếu không có.

*5.5.3. Giao tiếp phần mềm bên ngoài:* Liệt kê các hệ thống tích hợp, API, dữ liệu đầu vào/đầu ra.

**5.6. Yêu cầu về tính hỗ trợ**
Liệt kê cam kết bảo trì, hỗ trợ sau triển khai.

**5.7. Yêu cầu về công nghệ và ràng buộc**
Ngôn ngữ lập trình, CSDL, trình duyệt hỗ trợ, hệ điều hành, platform, thư viện bắt buộc.

**5.8. Các yêu cầu tài liệu người dùng và hỗ trợ trực tuyến**
HDSD bản mềm, thông tin đầu mối hỗ trợ, FAQ/help online.

**5.9. Các thành phần mua ngoài**
Mô tả các thành phần/license mua ngoài, ràng buộc tương thích. Ghi N/A nếu không có.

**5.10. Yêu cầu về vận hành khai thác** *(Bắt buộc)*
Yêu cầu cho đơn vị VHKT: tool giám sát, mã hóa file cấu hình, điều kiện vận hành.

**5.11. Yêu cầu về giải pháp hạ tầng**
Giải pháp phần cứng hạ tầng do QTDA phối hợp phòng KTHT thực hiện.

**5.12. Yêu cầu về tính ghi log** *(Bắt buộc)*
Mô tả rõ: loại log nghiệp vụ cần ghi và nội dung ghi; dữ liệu quan trọng của hệ thống và thao tác cần log; phân loại mức log tác động người dùng theo 3 mức Cao / Trung bình / Thấp; thời gian tối thiểu lưu log (mặc định không xóa nếu không quy định).

**5.13. Yêu cầu tuân thủ tiêu chuẩn Quản trị dữ liệu** *(Bắt buộc)*

*5.13.1. Quản trị dữ liệu (CDE):* Xác định các CDE theo TC.CNVTQĐ.QTDL.05.5. Bảng 7 cột: STT | Tên trường | Mô tả | Bảng dữ liệu | Trường dữ liệu | Loại dữ liệu | Chủ sở hữu dữ liệu.

*5.13.2. Tuân thủ Bảo mật dữ liệu:* Theo TC.CNVTQĐ.QTDL.01. Bảng 7 cột: STT | Tên trường | Hệ thống/Module | Phân cấp bảo mật | Phân loại bảo mật | Định nghĩa vai trò & phân quyền | Masking. Kèm mô tả giải pháp đảm bảo.

*5.13.3. Tuân thủ Chất lượng dữ liệu:* Theo TC.CNVTQĐ.QTDL.02. Bảng 10 cột: STT | Tên trường | Hệ thống | Tính chính xác | Tính đầy đủ | Tính nhất quán | Tính kịp thời | Tính duy nhất | Tính hợp lệ | Log giám sát. Kèm giải pháp đảm bảo.

*5.13.4. Tuân thủ Quản lý Siêu dữ liệu:* Theo TC.CNVTQĐ.QTDL.04.6. Bảng 4 cột: STT | Hệ thống | Loại siêu dữ liệu | Các thông tin cần quản lý. Kèm mô tả API truy xuất siêu dữ liệu và cấu trúc data exchange format.

*5.13.5. Lưu trữ và vận hành:* Theo TC.CNVTQĐ.QTDL.03. Xác định thời gian lưu trữ log, thời gian lưu trữ các miền dữ liệu, thời gian sao lưu dự phòng/backup.

**5.14. [Thêm các yêu cầu khác nếu cần]**

---

### 6. TIÊU CHUẨN NGHIỆM THU HỆ THỐNG

Liệt kê toàn bộ chức năng và quy trình nghiệp vụ làm điều kiện nghiệm thu. Chỉ liệt kê chức năng bắt buộc — các tiện ích hỗ trợ có thể không là điều kiện nghiệm thu.

Bảng 2 cột: STT | Chức năng nghiệm thu.
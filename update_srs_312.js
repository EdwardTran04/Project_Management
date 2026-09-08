const fs = require('fs');

const filePath = 'c:/Users/Administrator/Documents/quantm18/Project_Management/ba/documents/srs/baseline/17072026_SRS_NhapKho.md';
let content = fs.readFileSync(filePath, 'utf8');
let lines = content.split('\n');

const newGroup312 = `### 3.12. Nhóm chức năng đóng gói hàng

Nhóm chức năng Đóng gói hàng (Task 6 — \`T-Pac\`) phục vụ nhân sự kho thực hiện phân loại, đóng gói các sản phẩm/serial đã qua kiểm định KCS vào các kiện hàng (Handling Unit - HU) tiêu chuẩn, in tem nhãn dán barcode/RFID và chốt cấu trúc kiện để sẵn sàng cho khâu cất kệ (Putaway).

**Danh sách chức năng trong nhóm:**
- **3.12.1. Xem màn đóng gói (Xem danh sách kiện đóng gói)**
- **3.12.2. Sinh kiện tự động**
- **3.12.3. Thêm kiện hàng**
- **3.12.4. Thêm hàng hóa, vật tư vào kiện**
- **3.12.5. Xóa kiện hàng**
- **3.12.6. Xóa hàng hóa, vật tư khỏi kiện**
- **3.12.7. Import danh sách đóng gói**
- **3.12.8. Export danh sách đóng gói**
- **3.12.9. In tem**

---

#### 3.12.1. Xem màn đóng gói (Xem danh sách kiện đóng gói)

##### ① Thông tin chung

| Mục | Nội dung |
|---|---|
| **Tên chức năng** | Xem màn đóng gói (Xem danh sách kiện đóng gói) [3.12.1] |
| **Đường dẫn** | Phân hệ Nhập kho ➔ Danh sách task nhập kho ➔ Chọn Task loại "Đóng gói" (hoặc từ Chi tiết Lệnh nhập kho \`INB-xxxxx\` ➔ Tab Task ➔ Click Task Đóng gói) |
| **Phân quyền** | • \`ROLE_WAREHOUSE_WORKER\` (Nhân viên kho): Xem danh sách kiện, xem chi tiết vật tư trong kiện, tra cứu serial, xem thông tin tóm tắt và thực hiện các thao tác đóng gói.<br>• \`ROLE_WAREHOUSE_MASTER\` (Thủ kho): Toàn quyền xem, theo dõi tiến độ, xem lịch sử thao tác, gia hạn KPI.<br>• \`ROLE_WAREHOUSE_DIRECTOR\` (Giám đốc kho): Xem báo cáo tiến độ và KPI/SLA. |
| **Miền dữ liệu** | Nhân sự chỉ xem và thao tác trên các Lệnh nhập kho và Task thuộc phạm vi Kho (Plant / SLoc) mà mình được phân công phụ trách. |
| **Mô tả** | Cho phép người dùng xem thông tin tổng quan của Task đóng gói (Trạng thái, SLA, Trọng lượng, Thể tích, Giá trị, Nhân sự phụ trách), theo dõi thống kê số lượng sản phẩm/thùng và tra cứu danh sách các kiện hàng đã đóng theo cấu trúc phân cấp Master-Detail (cấp Kiện hàng HU và cấp Chi tiết từng dòng sản phẩm/serial bên trong kiện). |

##### ② Màn hình

*Giao diện được thiết kế theo cấu trúc Master-Detail Grid (Lưới dữ liệu kiện hàng) bao gồm các vùng hiển thị chính:*
1. **Khối Header & Thông tin tóm tắt lệnh:** Nút Quay lại \`[←]\`, Tiêu đề \`ĐÓNG GÓI & IN TEM\`, Cụm nút tác vụ (\`[Gia hạn KPI]\`, \`[✓ Hoàn thành]\`, \`[Lịch sử]\`), và thanh thông tin tóm tắt (\`Trạng thái\`, \`SLA / KPI\`, \`Order\`, \`Loại task\`, \`Tổng trọng lượng\`, \`Tổng thể tích\`, \`Tổng giá trị\`, \`Phụ trách\`).
2. **Khối Thẻ KPI (Summary Cards):** Thẻ "TỔNG SẢN PHẨM" (icon kiện đỏ, hiển thị tổng số lượng sản phẩm cần đóng) và Thẻ phân loại bao bì ("THÙNG GỖ", "THÙNG CARTON"...).
3. **Khối Lưới dữ liệu Kiện hàng (Master Grid):** Tiêu đề lưới \`LƯỚI DỮ LIỆU KIỆN HÀNG (X)\`, cụm nút hành động (\`[+ Thêm kiện hàng]\`, \`[Lưu kiện]\`). Bảng Master hiển thị từng kiện hàng với các cột: Icon expand \`v\`, Mã kiện hàng, Mã RFID, Loại Carton (Dropdown), Chi tiết sản phẩm (Badges tóm tắt), Tổng SL serial, Nút in nhãn, Icon xóa kiện.
4. **Khối Chi tiết vật tư bên trong kiện (Sub-grid khi expand):** Mở rộng dưới từng dòng kiện với tiêu đề "CHI TIẾT VẬT TƯ BÊN TRONG KIỆN: {Mã HU}", Tag nhãn "Chế độ đóng gói theo Serial (Quản lý SAP vs NSX)", danh sách các cột thuộc tính chi tiết của sản phẩm/serial và icon xóa từng sản phẩm.

*(Tham chiếu ảnh thiết kế UI màn hình đính kèm: UI_DongGoi_InTem_MasterDetail.png)*

##### ③ Mô tả chi tiết các thành phần

| STT | Tên | Kiểu dữ liệu [Độ dài] | Input/Output | Giá trị khởi tạo | Mô tả (Mapping với CSDL nếu có) |
|:---:|---|---|:---:|---|---|
| **I** | **Vùng Header & Thông tin tổng quan Task** | | | | |
| 1 | Nút Quay lại | Button Icon | Input | Icon \`[←]\` | Click để quay lại màn hình Danh sách task nhập kho hoặc Chi tiết Lệnh nhập kho. |
| 2 | Tiêu đề màn hình | Label [100] | Output | "ĐÓNG GÓI & IN TEM" | Hiển thị tên chức năng cố định của Task 6. |
| 3 | Nút Gia hạn KPI | Button | Input | "Gia hạn KPI" | Click để mở modal xin gia hạn thời gian SLA. Chỉ enable khi task ở trạng thái \`IN_PROGRESS\`. |
| 4 | Nút Hoàn thành | Button Primary | Input | "✓ Hoàn thành" | Xác nhận hoàn thành Task 6. Chỉ enable khi 100% sản phẩm đã được đóng gói và đã bấm \`Lưu kiện\`. |
| 5 | Nút Lịch sử | Button Outline | Input | "Lịch sử" | Click mở drawer xem toàn bộ nhật ký thao tác đóng gói (\`task_history\`). |
| 6 | Badge Trạng thái | Badge [30] | Output | "• Đang xử lý" | Hiển thị trạng thái của task (\`task.task_status\`). Màu xanh dương (\`IN_PROGRESS\`) hoặc xanh lá (\`COMPLETED\`). |
| 7 | Badge SLA / KPI | Badge [30] | Output | "Quá hạn" / "Đúng hạn" | Cảnh báo tiến độ thực thi (\`task.sla_status\`). Màu đỏ khi quá hạn, xanh lá khi đúng hạn, cam khi có rủi ro. |
| 8 | Order | Label / Link [50] | Output | Mã Order (VD: \`INB-2026-149\`) | Mã Lệnh nhập kho gắn với task (\`warehouse_order.order_code\`). Click mở popup/tab xem chi tiết lệnh. |
| 9 | Loại Task | Label [50] | Output | "Đóng gói" | Tên loại task nghiệp vụ (\`task_template.task_name\`). Read-only. |
| 10 | Tổng trọng lượng | Number Label | Output | "235,85 kg" | Tổng trọng lượng thực tế của đơn hàng, tính tự động: \`SUM(order_item.weight)\`. Format 2 số thập phân. |
| 11 | Tổng thể tích | Number Label | Output | "1,21 m³" | Tổng thể tích thực tế của đơn hàng, tính tự động: \`SUM(order_item.volume)\`. Format 2 số thập phân. |
| 12 | Tổng giá trị | Number Label | Output | "866.869.000 VND" | Tổng giá trị tiền hàng theo chứng từ PO (\`warehouse_order.total_amount\`). Phân tách hàng nghìn dấu chấm. |
| 13 | Phụ trách | Label [100] | Output | Tên nhân viên (VD: \`Vũ Chí Triều\`) | Họ tên nhân sự đang nhận phụ trách thực hiện task (\`sys_user.full_name\`). |
| **II** | **Khối Thẻ thống kê nhanh (Summary Cards)** | | | | |
| 14 | Card Tổng sản phẩm | Summary Card | Output | "82 sản phẩm" | Hiển thị tổng số lượng sản phẩm/serial cần đóng gói của đơn hàng (\`SUM(order_item.quantity)\`). |
| 15 | Card Thùng gỗ | Summary Card | Output | "1 thùng" | Đếm số lượng kiện hàng đã tạo có loại bao bì là Thùng gỗ (\`COUNT(handling_unit)\` where \`package_type = WOODEN\`). |
| 16 | Card Thùng carton | Summary Card | Output | "X thùng" | Đếm số lượng kiện hàng đã tạo có loại bao bì là Thùng carton (\`COUNT(handling_unit)\` where \`package_type = CARTON\`). |
| **III** | **Thanh công cụ & Lưới Master Kiện hàng (Handling Unit Grid)** | | | | |
| 17 | Tiêu đề Lưới dữ liệu | Label [100] | Output | "LƯỚI DỮ LIỆU KIỆN HÀNG ({Số lượng})" | Hiển thị tổng số lượng kiện hàng HU hiện có trong danh sách (VD: \`LƯỚI DỮ LIỆU KIỆN HÀNG (1)\`). |
| 18 | Nút Thêm kiện hàng | Button | Input | "+ Thêm kiện hàng" | Click mở modal tạo kiện mới (tham chiếu chức năng 3.12.3). Bị disable khi đã bấm \`Lưu kiện\`. |
| 19 | Nút Lưu kiện | Button Primary | Input | "Lưu kiện" | Chốt cấu trúc đóng gói và kích hoạt chế độ khóa (State Lock). Bị disable/chuyển thành badge xanh khi đã lưu. |
| 20 | Icon Mở rộng/Thu gọn | Icon Button | Input | Icon \`v\` / \`>\` | Click để mở rộng (expand) hoặc thu gọn bảng chi tiết sản phẩm nằm trong kiện tương ứng. |
| 21 | Cột Mã kiện hàng | Label [50] | Output | "HU-220" | Mã định danh duy nhất của kiện hàng (\`handling_unit.hu_code\`). Hệ thống tự sinh theo quy tắc tăng dần. |
| 22 | Cột Mã RFID | Label [100] | Output | Mã EPC hoặc "-" | Mã chip RFID gắn trên kiện hàng (\`handling_unit.rfid_code\`). Hiển thị "-" nếu kiện chưa được gán chip. |
| 23 | Cột Loại Carton | Dropdown Select | Input/Output | "TN4 - Thùng gỗ" | Quy cách loại thùng/kiện (\`handling_unit.package_type_code\`). Lựa chọn từ danh mục: Thùng gỗ TN4, Carton C1, C2, Pallet... Bị disable khi đã bấm \`Lưu kiện\`. |
| 24 | Cột Chi tiết sản phẩm | Badges List | Output | Danh sách Badges | Hiển thị các khối badge tóm tắt mã vật tư kèm số lượng đóng trong kiện, VD: \`USB-C-1M (50 Cái)\`, \`ANT-5G-32T (6 Bộ)\`, \`BBU-6648 (9 Bộ)\`... |
| 25 | Cột Tổng SL | Label [50] | Output | "33 serial" | Tổng số lượng serial/sản phẩm có trong kiện hàng (\`handling_unit.total_item_count\`). |
| 26 | Nút In nhãn | Button Outline | Input | "🖨️ IN TEM KIỆN" | Gửi lệnh in tem barcode/RFID của kiện ra máy in công nghiệp (tham chiếu chức năng 3.12.9). Chỉ enable sau khi đã bấm \`Lưu kiện\`. |
| 27 | Icon Xóa kiện | Icon Button | Input | Icon thùng rác đỏ | Click mở confirm xóa kiện hàng (tham chiếu chức năng 3.12.5). Bị disable khi đã bấm \`Lưu kiện\`. |
| **IV** | **Lưới Detail Chi tiết vật tư bên trong kiện (Sub-grid)** | | | | |
| 28 | Tiêu đề bảng Detail | Label [150] | Output | "CHI TIẾT VẬT TƯ BÊN TRONG KIỆN: {MÃ HU}" | Nhãn tiêu đề bảng chi tiết, hiển thị mã kiện đang mở rộng (VD: \`HU-220\`). |
| 29 | Tag chế độ đóng gói | Tag Label | Output | "Chế độ đóng gói theo Serial (Quản lý SAP vs NSX)" | Nhãn thông báo quy tắc quản lý vật tư của kiện là theo số Serial đơn lẻ. |
| 30 | Cột STT | Label [5] | Output | 1, 2, 3... | Số thứ tự dòng sản phẩm bên trong kiện hàng. |
| 31 | Cột Mã vật tư, hàng hoá | Label [50] | Output | Mã SKU | Mã vật tư chính thức theo SAP (\`product.product_code\`, VD: \`USB-C-1M\`, \`ANT-5G-32T\`). |
| 32 | Cột Tên vật tư hàng hoá | Label [255] | Output | Tên vật tư | Tên đầy đủ của vật tư hàng hóa (\`product.product_name\`, VD: \`Cáp sạc USB-C 1M\`, \`Anten 5G Massive MIMO 32T32R\`). |
| 33 | Cột ĐVT | Label [20] | Output | "Cái" / "Bộ" / "Cuộn" | Đơn vị tính cơ sở của vật tư (\`product.uom\`). |
| 34 | Cột Số lượng | Number Label [10] | Output | 50, 1... | Số lượng đóng gói của dòng sản phẩm (\`handling_unit_item.quantity\`). Với hàng serial, mỗi dòng có SL = 1. |
| 35 | Cột Tình trạng | Label [50] | Output | "-" hoặc "Mới 100%" | Tình trạng phẩm chất của hàng sau kiểm định KCS. Mặc định hiển thị "-". |
| 36 | Cột Serial | Label [100] | Output | Số Serial | Số định danh Serial duy nhất của sản phẩm (\`order_item_serial.serial_number\`, VD: \`60045417038\`). |
| 37 | Cột Đơn giá | Currency Label | Output | Đơn giá VNĐ | Đơn giá mua chưa VAT theo chứng từ PO (\`order_item.unit_price\`, VD: \`10.596.000\`). |
| 38 | Cột Thành tiền | Currency Label | Output | Thành tiền VNĐ | Thành tiền = Đơn giá × Số lượng (\`order_item.total_amount\`, VD: \`529.800.000\`). |
| 39 | Cột Đơn vị quản lý | Label [100] | Output | Tên ĐVQL hoặc "-" | Đơn vị quản lý/sở hữu vật tư (\`management_unit.unit_name\`). |
| 40 | Cột Plant | Label [20] | Output | Mã Plant (VD: \`N014\`) | Mã chi nhánh/nhà máy theo phân cấp SAP (\`warehouse_order.plant_code\`). |
| 41 | Cột Sloc | Label [20] | Output | Mã Sloc (VD: \`AG51\`) | Mã kho lưu trữ logic tiếp nhận (\`warehouse_order.sloc_code\`). |
| 42 | Cột Mã dự án | Label [50] | Output | Mã DA (VD: \`TE-000041\`) | Mã dự án/công trình sử dụng vật tư (\`order_item.project_code\`). |
| 43 | Cột Mã dự án đầu tư | Label [50] | Output | Mã WBS (VD: \`WBS-103253\`) | Mã dự án đầu tư / hạng mục WBS kế toán (\`order_item.investment_project_code\`). |
| 44 | Cột Chiều dài x rộng x cao | Label [50] | Output | "0.95 x 0.2 x 0.18" | Kích thước 3 chiều vật lý của sản phẩm theo đơn vị mét (\`product.dimensions\`). |
| 45 | Cột Trọng lượng | Number Label [10,2] | Output | "2.2" | Trọng lượng đơn vị của sản phẩm tính theo kilogram (\`product.unit_weight\`). |
| 46 | Icon Xóa sản phẩm | Icon Button | Input | Icon thùng rác đỏ | Click mở popup xác nhận xóa sản phẩm khỏi kiện (tham chiếu chức năng 3.12.6). Bị disable khi đã bấm \`Lưu kiện\`. |

##### ④ Luồng nghiệp vụ

\`\`\`mermaid
flowchart TD
    A[User truy cập Task Đóng gói] --> B[Hệ thống truy vấn dữ liệu theo order_id & task_id]
    B --> C{Task có dữ liệu kiện HU?}
    C -->|Đã có kiện| D[Hiển thị thẻ KPI & Danh sách Master Kiện hàng]
    C -->|Chưa có kiện| E[Hiển thị thẻ KPI tổng & Lưới dữ liệu rỗng: 'Chưa có kiện hàng nào']
    D --> F[User click Icon [v] tại dòng kiện HU]
    F --> G[Hệ thống truy vấn handling_unit_item & order_item_serial theo hu_id]
    G --> H[Mở rộng hiển thị bảng Detail chi tiết các sản phẩm/serial bên trong kiện]
    D --> I{Trạng thái kiện đã bấm [Lưu kiện]?}
    I -->|Chưa lưu (Soạn thảo)| J[Enable các nút: Thêm kiện, Xóa kiện, Xóa SP, Sửa loại carton. Disable In tem]
    I -->|Đã lưu (State Lock)| K[Disable/Ẩn các nút: Thêm kiện, Xóa kiện, Xóa SP, Sửa loại carton. Enable In tem]
\`\`\`

| Bước | Tác nhân | Hành động | Kết quả / Phản ứng hệ thống |
|:---:|---|---|---|
| **1** | Người dùng | Truy cập vào Task Đóng gói từ danh sách task hoặc từ tab Task của Lệnh nhập kho. | Hệ thống truy vấn CSDL: lấy thông tin task (\`task\`), thông tin đơn hàng (\`warehouse_order\`), tính toán tổng số lượng sản phẩm, tổng trọng lượng, tổng thể tích và danh sách các kiện hàng đã tạo (\`handling_unit\`). |
| **2** | Hệ thống | Trả kết quả và render giao diện. | • **TH1: Đã có kiện hàng:** Hiển thị thẻ KPI tổng quan, số lượng thùng theo phân loại và danh sách các kiện trên lưới Master với trạng thái thu gọn.<br>• **TH2: Chưa có kiện hàng:** Hiển thị thẻ KPI tổng số sản phẩm cần đóng, danh sách kiện rỗng kèm thông báo *"Chưa có kiện hàng nào. Vui lòng bấm Sinh kiện tự động hoặc Thêm kiện hàng mới"*.<br>• **Kiểm tra trạng thái Lưu kiện:** Nếu các kiện đã được bấm \`Lưu kiện\`, hệ thống tự động khóa (disable) các nút thêm/xóa/sửa và kích hoạt sẵn sàng nút \`[🖨️ IN TEM KIỆN]\`. |
| **3** | Người dùng | Click vào biểu tượng icon \`v\` tại dòng kiện hàng (VD: \`HU-220\`). | Hệ thống thực hiện truy vấn các bảng \`handling_unit_item\`, \`order_item\` và \`order_item_serial\` theo \`hu_id\` của kiện đó; mở rộng (expand) dòng và hiển thị bảng Sub-grid chi tiết danh sách từng serial, đơn giá, dự án, kích thước và trọng lượng của các sản phẩm nằm trong thùng. |
| **4** | Người dùng | Click lại vào biểu tượng icon \`>\` tại dòng kiện hàng. | Hệ thống thu gọn dòng Sub-grid chi tiết, trở về trạng thái chỉ hiển thị dòng Master tóm tắt của kiện hàng. |

---`;

// Replace lines from line 1680 (index 1679) up to line 1875 (index 1874)
const startIdx = 1679;
const endIdx = 1874;

console.log('Replacing from line ' + (startIdx + 1) + ' to line ' + (endIdx + 1));
console.log('Line to replace start:', lines[startIdx]);
console.log('Line to replace end:', lines[endIdx]);

lines.splice(startIdx, endIdx - startIdx + 1, newGroup312);

const updatedContent = lines.join('\n');
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('Successfully updated file! New line count: ' + updatedContent.split('\n').length);

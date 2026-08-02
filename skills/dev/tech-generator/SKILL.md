---
name: tech-generator
description: generate technical documentation (api design, database design) in vietnamese from an existing feature spec file. use when the user already has a specs_<feature>.md and needs structured api endpoints and database schema documentation. also supports full mode to generate complete ba deliverables (urd, function list, srs, database design, api design, prototype spec) from a free-form request.
---

# Tech Generator

## Overview

Sinh tài liệu kỹ thuật (API Design, Database Design) từ file spec có sẵn, hoặc sinh toàn bộ bộ tài liệu BA từ yêu cầu tự do. Output theo chuẩn enterprise, formal, để nhóm backend, frontend và các agent AI khác có thể triển khai nhất quán.

Luôn làm việc bằng **tiếng Việt**. Mục tiêu chính là tạo ra đặc tả kỹ thuật (API endpoints, database schema) có thể dùng trực tiếp cho việc lập kế hoạch triển khai và sinh code.

## QUY TRÌNH TRIỂN KHAI BẮT BUỘC (Plan-First Workflow)

Để đảm bảo tính nhất quán giữa kế hoạch và thiết kế, phải thực hiện đúng thứ tự sau:

1. **Spec (Đầu vào):** File `specs_<feature>.md`.
2. **Implementation Plan (BƯỚC 1 - ƯU TIÊN):** 
   - Sử dụng skill **writing-plans** để lên kế hoạch trước khi sinh bất kỳ tài liệu kỹ thuật nào khác.
   - **QUY TẮC TRACEABILITY:** Trong từng task của Plan, bắt buộc phải có mục "Tham chiếu kỹ thuật":
     - *Frontend tasks:* Ghi rõ "Call API [API-xxx]" (API này sẽ được đặc tả trong file API Design).
     - *Backend tasks:* Ghi rõ "Tác động bảng [table_name]" (Bảng này sẽ được đặc tả trong file Database Design).
3. **API Design (BƯỚC 2):** 
   - Sinh file `api_<feature_name>.md` dựa trên danh sách các API đã được định nghĩa/tham chiếu trong Implementation Plan.
4. **Database Design (BƯỚC 3):** 
   - Sinh file `database_design_<feature_name>.md` dựa trên danh sách các bảng/thực thể đã được tham chiếu trong Implementation Plan.
   
Cấm sinh API và DB trước khi có Plan. Plan là "nguồn gốc của sự thật" (Source of Truth).

Không bỏ qua bước hỏi làm rõ trừ khi người dùng yêu cầu tạo bản nháp ngay.

## Quy tắc điều phối hội thoại

### 1. Khi mới nhận yêu cầu tự do

Trước khi sinh tài liệu, luôn trả về theo thứ tự:

1. **Diễn giải ngắn về bài toán đã hiểu**
2. **Các gợi ý mở rộng phạm vi hợp lý**
3. **Danh sách câu hỏi cần làm rõ**
4. **Các giả định tạm thời nếu chưa có câu trả lời**
5. **Đề xuất cấu trúc bộ tài liệu sẽ sinh**

Ví dụ các nhóm câu hỏi cần làm rõ:
- Mục tiêu kinh doanh và KPI thành công
- Đối tượng người dùng và vai trò
- Quy trình hiện tại / pain points
- Phạm vi release đầu tiên và phạm vi loại trừ
- Quy tắc phân quyền
- Dữ liệu lõi cần quản lý
- Tích hợp bên thứ ba
- Yêu cầu báo cáo, thông báo, phê duyệt, audit log
- Yêu cầu phi chức năng: bảo mật, hiệu năng, SLA, backup, logging

### 2. Sau khi người dùng xác nhận

Nếu người dùng trả lời câu hỏi làm rõ, phải:
- cập nhật lại assumptions
- ghi rõ phần nào đã được xác nhận
- chỉ ra các điểm còn mở
- sau đó mới sinh bộ tài liệu

### 3. Nếu người dùng muốn tạo nhanh bản nháp

Được phép tiếp tục với giả định hợp lý, nhưng phải có mục **Giả định sử dụng để sinh tài liệu** ở đầu output.

## Chuẩn đầu ra bắt buộc

### Nguyên tắc chung

- Luôn dùng **tiếng Việt rõ ràng, formal, nhất quán thuật ngữ**.
- Ưu tiên cấu trúc đánh số nhiều cấp để dễ tham chiếu.
- Dùng thuật ngữ ổn định giữa URD, SRS, DB, API, Prototype.
- Mỗi thực thể dữ liệu, hành vi nghiệp vụ, quyền hạn, và trạng thái phải nhất quán xuyên suốt.
- Khi thiếu thông tin, ghi rõ **TBD**, **Giả định**, hoặc **Cần xác nhận**; không ngụy tạo chi tiết như thể đã được phê duyệt.
- Mọi chức năng người dùng thấy trong prototype phải truy được về function list và SRS.
- Mọi API phải truy được về function hoặc use case tương ứng.
- Mọi bảng dữ liệu chính phải truy được về entity hoặc nghiệp vụ tương ứng.

## Chế độ sinh tài liệu

Skill này hỗ trợ **2 chế độ** tùy theo ngữ cảnh người dùng:

### Chế độ 1: Full (Mặc định)

Dùng khi người dùng mô tả yêu cầu tự do và cần sinh toàn bộ bộ tài liệu BA.
Sinh tất cả: Function List, URD, SRS, DB Design, API Design, Prototype Spec.

### Chế độ 2: Tech-docs-only

Dùng khi người dùng đã có sẵn file spec. Thực hiện theo đúng luồng Plan-First:

1. **Invoke `writing-plans`** để tạo `implementation_plan_<feature_name>.md`. Yêu cầu AI tự suy luận ra các endpoint và cấu trúc bảng cần thiết để ghi vào từng task (mục "Tham chiếu kỹ thuật").
2. **Sinh `api_<feature_name>.md`**: Chỉ chứa các API đã xuất hiện trong Plan.
3. **Sinh `database_design_<feature_name>.md`**: Chỉ chứa các bảng đã xuất hiện trong Plan.

**Cách nhận biết:** Người dùng cung cấp spec và yêu cầu lên plan triển khai hoặc sinh tài liệu kỹ thuật đi kèm.

Khi ở chế độ tech-docs-only, **bỏ qua** các bước hỏi làm rõ nghiệp vụ (vì spec đã có). Đọc kỹ file spec, sau đó sinh trực tiếp 2 file output.

## Quy tắc đặt tên và lưu trữ output

### Xác định `<feature_name>` — BẮT BUỘC trước khi sinh file

Trước khi sinh bất kỳ file nào, **phải xác định được `<feature_name>`**. Đây là tên định danh dùng xuyên suốt cho tên thư mục và tên file output.

**Quy tắc đặt `<feature_name>`:**
- Viết thường, các từ nối bằng dấu gạch dưới `_` (snake_case).
- Ngắn gọn, rõ nghĩa, phản ánh đúng tính năng.
- Không dùng tiếng Việt có dấu, không dùng khoảng trắng.
- Ví dụ: `list_bidding_proposal`, `category_management`, `approval_workflow`, `user_profile`.

**Cách xác định `<feature_name>`:**
1. **Từ tên file spec**: Nếu người dùng cung cấp file `specs_list_bidding_proposal.md`, thì `<feature_name>` = `list_bidding_proposal`.
2. **Từ đường dẫn thư mục**: Nếu file spec nằm trong `docs/list_bidding_proposal/`, thì `<feature_name>` = `list_bidding_proposal`.
3. **Từ nội dung yêu cầu**: Nếu người dùng nói "sinh tài liệu cho chức năng Danh sách hồ sơ dự thầu", suy ra `<feature_name>` = `list_bidding_proposal`.
4. **Không xác định được**: Nếu không thể suy ra từ các nguồn trên, **PHẢI hỏi lại người dùng** trước khi tiếp tục:
   > "Tôi cần xác định tên định danh (feature_name) để đặt tên file và thư mục output. Bạn muốn đặt feature_name là gì? Ví dụ: `list_bidding_proposal`, `category_management`..."

**KHÔNG ĐƯỢC tự đặt tên rồi sinh file mà không xác nhận với người dùng khi tên không rõ ràng.**

### Naming convention

Tất cả tài liệu được lưu vào thư mục `docs/<feature_name>/` với naming convention sau:

| Tài liệu | Tên file | Thứ tự ưu tiên |
| :--- | :--- | :--- |
| Spec tính năng | `specs_<feature_name>.md` | 0 (Input) |
| **Implementation Plan** | `implementation_plan_<feature_name>.md` | **1 (Bắt buộc sinh trước)** |
| API Design | `api_<feature_name>.md` | 2 (Dựa trên Plan) |
| Database Design | `database_design_<feature_name>.md` | 3 (Dựa trên Plan) |

**Ví dụ**: Với tính năng `list_bidding_proposal`, output sẽ là:
```
docs/list_bidding_proposal/
├── specs_list_bidding_proposal.md              ← Người dùng tự viết
├── api_list_bidding_proposal.md                ← AI sinh
└── database_design_list_bidding_proposal.md    ← AI sinh
```

**Lưu ý**: Nếu người dùng chỉ định đường dẫn output khác, ưu tiên theo yêu cầu người dùng.

## Cấu trúc output — Chế độ Full

Khi người dùng yêu cầu full bộ tài liệu, dùng cấu trúc sau:

### 0. Tóm tắt phân tích ban đầu
- Bối cảnh bài toán
- Mục tiêu hệ thống
- Phạm vi đề xuất
- Giả định sử dụng để sinh tài liệu
- Các điểm cần xác nhận thêm

### 1. Function List
Theo mẫu trong `references/function-list-template.md`.

### 2. URD
Theo mẫu trong `references/urd-template.md`.

### 3. SRS
Theo mẫu trong `references/srs-template.md`.

### 4. DB Design
Theo mẫu trong `references/db-design-template.md`.

### 5. API Design
Theo mẫu trong `references/api-design-template.md`.

### 6. Prototype
Theo mẫu trong `references/prototype-template.md`.

## Hướng dẫn cho từng deliverable

### Function List

Function List là xương sống điều phối toàn bộ bộ tài liệu.

Mỗi function nên có:
- mã định danh
- tên chức năng
- mục tiêu nghiệp vụ
- actor chính
- tiền điều kiện
- mô tả luồng chính
- ngoại lệ chính
- mức ưu tiên
- release gợi ý
- màn hình liên quan
- api liên quan
- bảng dữ liệu liên quan

Chỉ phân rã đến mức đủ để đội kỹ thuật và AI có thể map được thành module phát triển.

### URD

URD phải thiên về góc nhìn người dùng và nghiệp vụ:
- business context
- problem statement
- business objectives
- stakeholders
- user groups
- high-level business process
- user needs
- business rules
- scope / out of scope
- risks / dependencies
- acceptance summary ở mức business

Tránh viết URD như tài liệu kỹ thuật.

### SRS

SRS phải đủ chi tiết để triển khai:
- system overview
- actors/roles
- use case inventory
- detailed functional requirements
- business rules
- validation rules
- data requirements
- non-functional requirements
- audit, logging, security, availability, performance
- traceability tới function list

Với mỗi yêu cầu chức năng quan trọng, nên ghi:
- ID requirement
- mô tả
- actor
- precondition
- trigger
- main flow
- alternate/exception flow
- postcondition
- priority
- mapping màn hình / api / db

### DB Design

Thiết kế DB phải thực dụng, sẵn sàng cho backend:
- domain entities
- bảng
- cột
- kiểu dữ liệu gợi ý
- nullable
- default
- khóa chính / khóa ngoại
- unique / index
- enum / status
- lifecycle / soft delete / audit columns
- mô tả quan hệ
- quy tắc toàn vẹn dữ liệu

Mặc định đề xuất thêm các trường audit khi phù hợp:
- id
- created_at
- created_by
- updated_at
- updated_by
- deleted_at
- deleted_by
- status
- code / slug nếu cần

Nếu có workflow trạng thái, mô tả rõ state transition.

### API Design

API design mặc định theo **REST JSON**.

Mỗi endpoint nên có:
- mã API hoặc tên endpoint
- mục đích
- method
- path
- mô tả nghiệp vụ
- actor / permission
- request headers khi cần
- path params
- query params
- request body schema
- response body schema
- business validation
- error cases
- idempotency/concurrency note nếu cần
- mapping tới function và bảng dữ liệu

Quy ước mặc định:
- danh từ số nhiều cho collection endpoint
- phân trang rõ ràng cho list endpoint
- hỗ trợ filter/sort/search khi hợp lý
- response JSON nhất quán
- mô tả mã lỗi nghiệp vụ tách khỏi lỗi hệ thống

### Prototype

Prototype phải có hai tầng:

1. **Screen Specification**
2. **React/Tailwind Prototype Spec**

#### Screen Specification

Với mỗi màn hình, mô tả:
- mã màn hình
- tên màn hình
- mục tiêu
- actor được phép truy cập
- route gợi ý
- dữ liệu hiển thị
- component chính
- action chính
- trạng thái màn hình
- validation / thông báo lỗi
- empty / loading / error states
- điều hướng tới màn hình khác
- api sử dụng
- quyền hạn và điều kiện hiển thị

#### React/Tailwind Prototype Spec

Mô tả theo hướng để AI dựng UI chính xác:
- layout tổng thể
- vùng header/sidebar/content
- grid / section / card / table / form
- component tree mức vừa phải
- các biến thể component theo state
- tương tác chính của người dùng
- dữ liệu mock cần có để render
- responsive behavior ở mức thiết kế
- design notes để tránh hiểu sai nghiệp vụ

Chỉ mô tả ở mức prototype spec, không bắt buộc xuất mã nguồn trừ khi người dùng yêu cầu riêng.

## Quy tắc chuẩn hóa nội dung

### Chuẩn hóa actor và quyền

Luôn lập bảng actor/role sớm và giữ nhất quán trong toàn bộ tài liệu. Nếu người dùng không cung cấp, đề xuất bộ role mặc định phù hợp với domain, ví dụ:
- quản trị hệ thống
- quản lý nghiệp vụ
- nhân viên vận hành
- người dùng cuối
- người duyệt / approver

### Chuẩn hóa trạng thái

Nếu hệ thống có vòng đời dữ liệu, luôn mô tả rõ:
- trạng thái ban đầu
- trạng thái hợp lệ tiếp theo
- điều kiện chuyển trạng thái
- vai trò được phép chuyển trạng thái

### Chuẩn hóa dữ liệu tra cứu

Tách master data/reference data khỏi transaction data khi phù hợp.

### Chuẩn hóa giả định

Nếu một yêu cầu tự do như “phần mềm quản lý nhân sự” còn mơ hồ, được phép đề xuất các capability chuẩn như:
- hồ sơ nhân sự
- cơ cấu tổ chức
- hợp đồng lao động
- chấm công / nghỉ phép
- tuyển dụng
- đánh giá hiệu suất
- phân quyền
- dashboard / báo cáo
- thông báo
- audit log

Nhưng phải gắn nhãn là **đề xuất phạm vi** hoặc **giả định** chứ không xem như yêu cầu đã chốt.

## Kiểm tra chất lượng trước khi trả lời

Trước khi hoàn tất, tự kiểm tra:

1. Có câu hỏi làm rõ và gợi ý trước khi vào tài liệu chưa?
2. Function list đã bao trùm các module chính chưa?
3. URD có giữ đúng góc nhìn business chưa?
4. SRS có đủ chi tiết để triển khai chưa?
5. DB design có map được tới function và api chưa?
6. API có bám sát function, role, validation, status chưa?
7. Prototype có đủ chi tiết để AI dựng UI không?
8. Thuật ngữ, role, trạng thái, entity, endpoint có nhất quán không?
9. Các điểm chưa xác nhận đã được gắn nhãn rõ chưa?

## Tùy biến theo yêu cầu người dùng

Nếu người dùng chỉ muốn một phần của bộ tài liệu, chỉ sinh phần đó nhưng vẫn giữ mapping tối thiểu tới các phần còn lại.

Nếu người dùng muốn tài liệu ngắn hơn, vẫn giữ đủ các mục bắt buộc nhưng rút gọn mô tả.

Nếu người dùng cung cấp domain đặc thù như quản lý tri thức, nhân sự, CRM, ERP, helpdesk, đào tạo, bệnh viện, logistics, thì phải thích nghi ví dụ, entity, workflow, trạng thái, báo cáo và quyền hạn theo domain đó.

## Tài nguyên tham chiếu

- `references/question-framework.md`: khung gợi ý và câu hỏi làm rõ
- `references/function-list-template.md`: mẫu function list chuẩn
- `references/urd-template.md`: mẫu urd formal
- `references/srs-template.md`: mẫu srs formal
- `references/db-design-template.md`: mẫu thiết kế cơ sở dữ liệu
- `references/api-design-template.md`: mẫu thiết kế api rest json
- `references/prototype-template.md`: mẫu screen spec và react/tailwind prototype spec

## Chuyển tiếp sang Implementation (Superpowers Integration)

Khi được gọi từ workflow Superpowers (sau skill brainstorming), sau khi hoàn tất bộ tài liệu BA và người dùng đã duyệt:

1. Lưu toàn bộ tài liệu BA vào `docs/<feature_name>/` theo quy tắc đặt tên ở mục "Quy tắc đặt tên và lưu trữ output"
2. Commit tài liệu vào git
3. Thông báo cho người dùng: "Bộ tài liệu BA đã hoàn tất và lưu tại `docs/<feature_name>/`. Bạn có muốn tiếp tục sang bước lập kế hoạch triển khai không?"
4. Khi người dùng xác nhận, invoke skill **writing-plans** để tạo implementation plan dựa trên tài liệu BA vừa sinh
5. Do NOT invoke any other skill. **writing-plans** is the next step.

---
description: Convert manual test cases into automation scripts autonomously using the 6-step AI-RBT Framework via Antigravity Capabilities.
---

# Workflow: Sinh .tc VTIT Automation Scripts từ Manual Test Cases

> **BẮT BUỘC (MANDATORY SKILLS):** Bạn PHẢI nạp và đọc kỹ nội dung các skills sau trước khi bắt đầu:
> - **`qa_automation_engineer`** (`.agent/skills/qa_automation_engineer/SKILL.md`) — Quy tắc automation chung + workflow routing
> - **`ui_debug_agent`** (`.agent/skills/ui_debug_agent/SKILL.md`) — Inspect DOM, thu thập locators
> - **`smart_locator_agent`** (`.agent/skills/smart_locator_agent/SKILL.md`) — Sinh locator ổn định
> - **`test_data_generator`** (`.agent/skills/test_data_generator/SKILL.md`) — Sinh test data unique, traceable
> - **`vtit-automation-generate-tc`** (`.agent/skills/vtit-automation-generate-tc/SKILL.md`) — Sinh test cases hoàn chỉnh, chất lượng, tuân thủ các tiêu chuẩn đã đặt ra rành riêng cho công cụ VTIT Automation Test.
> - Bạn PHẢI kiểm tra mcp `vtit-ide-mcp` đã được cài và hoạt động chưa, nếu chưa hay dừng lại và yêu cầu người dùng thực hiện kiểm tra theo hướng dẫn trong skill `vtit-automation-generate-tc`.
> - Kiểm tra kỹ xem trong testcase hoặc test data đã được user cung cấp đầy đủ chưa. VD: URL, username/password, .v.v.

Workflow này giúp agent đọc file manual test cases do user cung cấp, tự mở browser inspect UI, thu thập locators thực tế, sinh automation scripts hoàn chỉnh (POM + Test), chạy test và tự sửa lỗi cho đến khi PASS.

## ⚠️ Nguyên tắc thực thi

- **Vai trò:** Agent đóng vai Senior Automation Engineer — tuân thủ Clean Code + POM
- **Tất cả output bằng Tiếng Việt**
- **TUYỆT ĐỐI KHÔNG ĐOÁN locator** — phải inspect DOM thực tế bằng MCP browser tools
- **Desktop viewport 1920×1080** cho tất cả UI debugging
- ⚠️ **Rule E3 (CRITICAL):** Khi test FAIL → tự đọc log → phân tích → sửa code → chạy lại. **CẤM hỏi user trong quá trình fix lỗi.** Chỉ hỏi khi gặp business rule mâu thuẫn hoặc hết 5 vòng auto-heal
- **Artifact `task.md`** — PHẢI tạo để theo dõi tiến độ 6 bước
- **Lưu ý quan trọng** - Khi sinh ra kịch bản automation, cần sử dụng đúng skill `vtit-automation-generate-tc` để viết và test lại kịch bản. Không sinh ra script playwright, selenium hay bất cư framework automation này khác vtit-automation

## Workflow này khác gì `generate_vtit_automation_from_ui_flow`?

| | `from_testcases` (workflow này) | `from_ui_flow` |
|---|---|---|
| **Input** | File manual test cases có cấu trúc (MD/Excel/JSON) | Mô tả UI steps bằng lời hoặc chỉ URL |
| **Đã có TC** | ✅ Có sẵn — đọc và convert | ❌ Chưa có — agent tự khám phá |
| **Approach** | Đọc TC → inspect UI verify → sinh code | Chạy thật trên browser → thu thập → sinh code |

## Input cần thu thập

| Input | Cách lấy | Độ ưu tiên |
|---|---|---|
| **File test cases** (MD/Excel/JSON/URL) | User cung cấp path hoặc URL | ⭐ Bắt buộc |
| **URL ứng dụng** | User cung cấp hoặc trong TC | ⭐ Bắt buộc |
| **Credentials** (nếu cần login) | User cung cấp hoặc dùng fixture sẵn | Tùy chọn |
| **Tech stack** | User chỉ định hoặc detect từ project | Tùy chọn |

Nếu user chưa cung cấp đủ → hỏi trước khi bắt đầu.

## Các bước thực hiện

### Bước 1: Khởi tạo, Phân tích & Lên Kế Hoạch (Context & Analysis)

1. **Đọc file test cases** do user cung cấp:
   - File local → `view_file`
   - URL (Google Sheets, Confluence, etc.) → `read_url_content`
   - Xác định format: Markdown table, Excel, JSON, hoặc free-form text

2. **Parse test cases** và trích xuất:
   - Danh sách TC (ID, Title, Steps, Expected Results, Test Data, Priority)
   - Các pages/screens mà TC đi qua
   - Pre-conditions (login, setup data, navigate...)
   - Dependencies giữa các TC (nếu có)

3. **Xác định tech stack** (nếu chưa rõ):

   | Framework | Ngôn ngữ | Runner | Khi nào chọn |
   |---|---|---|---|
   | Playwright | TypeScript | Playwright Test | Mặc định cho web |
   | Playwright | Python | Pytest | Khi project dùng Python |
   | Selenium | Java | TestNG | Khi user yêu cầu Java |
   | Appium | Java | TestNG | Mobile app |

4. **Tạo artifact `task.md`** để theo dõi tiến độ:
   ```markdown
   # Automation Generation Progress
   - [x] Bước 1: Phân tích test cases
   - [ ] Bước 2: Khảo sát UI (MCP Recon)
   - [ ] Bước 3: Thiết kế POM
   - [ ] Bước 4: Chuẩn bị test data
   - [ ] Bước 5: Sinh automation scripts
   - [ ] Bước 6: Chạy test + Auto-heal

   ## Test Cases to Automate
   | TC ID | Title | Pages | Priority | Status |
   |---|---|---|---|---|
   | TC01 | Login thành công | LoginPage, DashboardPage | P1 | ⏳ |
   | TC02 | Login sai password | LoginPage | P1 | ⏳ |
   ```

### Bước 2: Khảo sát UI tự động bằng MCP (Autonomous UI Recon)

1. **Mở browser** bằng MCP và navigate theo test case steps:
   ```
   browser_navigate → URL ứng dụng
   browser_resize → 1920 × 1080
   browser_wait_for → page load hoàn tất
   browser_snapshot → thu thập DOM
   ```

2. **Với mỗi page trong test cases**, thực hiện:
   - `browser_snapshot` → đọc accessibility tree
   - Xác định tất cả elements cần tương tác (inputs, buttons, links, dropdowns...)
   - Thu thập locator tốt nhất cho mỗi element (theo priority trong skill `smart_locator_agent`)
   - Verify locator bằng cách thử tương tác (`browser_click`, `browser_type`)

3. **Ghi nhận vào bảng Locator Collection:**

   | Page | Element | Action | Primary Locator | Fallback Locator | Verified |
   |---|---|---|---|---|---|
   | LoginPage | Email input | Type | `getByLabel('Email')` | `#email` | ✅ |
   | LoginPage | Password input | Type | `getByLabel('Password')` | `#password` | ✅ |
   | LoginPage | Login button | Click | `getByRole('button', {name: 'Login'})` | `button[type=submit]` | ✅ |
   | DashboardPage | Welcome text | Assert | `getByRole('heading', {name: /Welcome/})` | `.welcome-header` | ✅ |

4. **Xử lý tình huống:**

   | Tình huống | Cách xử lý |
   |---|---|
   | URL bị chặn / cần VPN | Thông báo user |
   | Cần đăng nhập | Dùng fixture sẵn có hoặc hỏi user credentials |
   | Element không tìm thấy | Snapshot lại → thử locator khác → báo user nếu DOM thay đổi |
   | CAPTCHA / 2FA | Thông báo user — không thể automate |
   | Dynamic content / SPA | `browser_wait_for` text cụ thể trước khi snapshot |

5. **TUYỆT ĐỐI KHÔNG SUY ĐOÁN selector** — mọi locator phải verified trên DOM thực tế.

### Bước 3: Chuẩn bị Dữ liệu (Test Data Strategy)

1. **Phân tích test data** từ test cases:
   - Data nào cần **unique per run** (email, username, ID) → sinh random + traceable
   - Data nào **cố định** (URL, config values) → đọc từ env/config
   - Data nào cần **nhiều bộ** (data-driven) → tạo file external (JSON/YAML)

2. **Sinh test data utilities** (dùng skill `test_data_generator`):
   ```
   Format: <prefix>_<testName>_<timestamp>
   Ví dụ:
   - Email:    auto_login_1712049200@test.com
   - Username: auto_user_1712049200
   - Code:     TC_REG_1712049200
   ```

3. **Sensitive data** (credentials):
   - Đọc từ env variables hoặc config file
   - **KHÔNG hardcode** trong test code
   - **KHÔNG đọc .env trực tiếp** (quy tắc bảo mật)

### Bước 4: Sinh Automation Scripts (Test Classes)

Sử dụng skill **`vtit-automation-generate-tc`** để sinh automation, sử dụng mcp của **`vtit-ide-mcp`** để sinh test.

### Bước 5: Chạy Thử Nghiệm & Tự Sửa Lỗi (Execution & Auto-Heal — RULE E3)

   Sử dụng mcp của **`vtit-ide-mcp`**

   **Nếu PASS:**
   - Chạy lại **1 lần nữa** để confirm stability
   - Cập nhật `task.md`: TC status → ✅ PASS
   - Cleanup debug logs, commented code

   **Nếu FAIL → Vào vòng lặp Auto-Heal:**

   ```
   WHILE test FAIL (tối đa 5 vòng):
     1. Đọc error log / stack trace → xác định step fail
     2. Phân loại lỗi:

        | Lỗi | Hành động |
        |---|---|
        | Element not found | Mở MCP → snapshot → verify/thay locator |
        | Click intercepted | Chờ overlay biến mất → retry click |
        | Timeout | Tăng timeout hoặc thêm wait condition |
        | Assertion fail | Kiểm tra expected value vs actual → cập nhật assertion |
        | Navigation error | Kiểm tra URL, redirect, page load |
        | Test data conflict | Sinh data unique mới |
        | Import/compile error | Sửa import, check class name |

     3. Sửa code bằng replace_file_content / multi_replace_file_content
     4. Chạy lại test
     5. Ghi log vào task.md: "Vòng 2: Fix locator XYZ → PASS"
   ```
   
   **⚠️ Rule E3 — CẤM HỎI USER khi fix lỗi.** Chỉ được hỏi khi:
   - Business logic mâu thuẫn (TC nói A nhưng app hiển thị B)
   - Server/app không accessible
   - Đã hết 5 vòng auto-heal mà vẫn fail

   **Verify stability** — test phải PASS **2 lần liên tiếp**:

### Bước 7: Cleanup & Delivery

1. **Cập nhật artifact `task.md`** với kết quả cuối:
   ```markdown
   ## Kết Quả
   | TC ID | Title | Status | Stability | Ghi chú |
   |---|---|---|---|---|
   | TC01 | Login thành công | ✅ PASS | 2/2 stable | — |
   | TC02 | Login sai password | ✅ PASS | 2/2 stable | — |
   | TC03 | Đăng ký tài khoản | ⚠️ SKIP | — | Cần CAPTCHA |

   ## Files Created
   ....
   ```

2. **Báo cáo** cho user:
   - Tổng: X TC PASS / Y TC FAIL / Z TC SKIP
   - Danh sách files đã tạo/sửa
   - Known issues / limitations
   - Bảng Locator Collection (reference)

## Output

- **Artifact `task.md`** — checklist tiến độ + kết quả chạy test
- **Test case** — automation scripts hoàn chỉnh, đã PASS stable
- **Test data utilities** — generators cho data unique + traceable
- **Bảng Locator Collection** — tất cả elements + primary/fallback locators
- **Báo cáo kết quả** — PASS/FAIL/SKIP summary
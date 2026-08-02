# Templates

> Khung output chuẩn. Điền `{{...}}`, xóa dòng không dùng.

---

## 1. Danh sách quy trình

| STT | Tên quy trình | Đối tượng chính | Actor chính | Có luồng con? | Cần vẽ swimlane? | Ghi chú |
|---|---|---|---|---|---|---|
| 1 | {{PROCESS_NAME}} | {{OBJECT}} | {{ACTORS}} | {{YES/NO}} | {{YES/NO}} | {{NOTE}} |

---

## 2. Mô tả một quy trình

### 2.x. {{PROCESS_NAME}}

| Trường | Nội dung |
|---|---|
| Đối tượng nghiệp vụ | {{OBJECT}} |
| Tập trạng thái | {{STATUS_1}}, {{STATUS_2}}, ... |
| Actor / Lane | {{ACTOR_1}}; {{ACTOR_2}}; {{SYSTEM}} |
| Trigger bắt đầu | {{START_TRIGGER}} |
| Kết quả kết thúc | {{END_RESULT}} |
| Luồng con liên quan | {{SUBFLOW_NAME}} (nếu có) |

#### Sơ đồ swimlane (xuất kép — theo `references/drawio-swimlane.md`)

- Ảnh: `{{YYYY-MM-DD}}_process_{{ten-quy-trinh-kebab}}.png` (chèn ngay dưới đây)
- File chỉnh sửa: `{{YYYY-MM-DD}}_process_{{ten-quy-trinh-kebab}}.drawio` (mở bằng draw.io / diagrams.net)
- Layout model (nguồn tọa độ, dùng để tái render):

```json
{
  "process_name": "{{PROCESS_NAME}}",
  "lanes": ["{{ACTOR_1}}", "{{ACTOR_2}}"],
  "nodes": [
    {"id": "S", "lane": 0, "col": 0, "type": "start"},
    {"id": "A", "lane": 0, "col": 1, "type": "task", "label": "{{STEP_1}}"},
    {"id": "B", "lane": 1, "col": 2, "type": "task", "label": "{{STEP_2}}"},
    {"id": "D", "lane": 1, "col": 3, "type": "gateway", "label": "{{CONDITION}}?"},
    {"id": "E", "lane": 0, "col": 4, "type": "end"}
  ],
  "edges": [
    {"from": "S", "to": "A"},
    {"from": "A", "to": "B", "label": "{{OUTPUT_STATUS_1}}"},
    {"from": "B", "to": "D"},
    {"from": "D", "to": "E", "label": "{{CONDITION_YES}}"},
    {"from": "D", "to": "A", "label": "{{CONDITION_NO}}", "type": "error"}
  ]
}
```

#### Bảng luồng trạng thái

> **STT bắt buộc prefix loại flow**: `M` = main, `A` = alternative, `E` = exception (xem `process-guide.md` mục 3).

| STT | Trạng thái đầu vào | Tác nhân | Tên bước | Đối tượng | Trạng thái đầu ra | Nghiệp vụ liên quan |
|---|---|---|---|---|---|---|
| M1 | N/A | {{ACTOR_1}} | {{STEP_1}} | {{OBJECT}} | {{OUTPUT_STATUS_1}} | {{RELATED_1}} |
| M2 | {{INPUT_STATUS_2}} | {{ACTOR_2}} | {{STEP_2}} | {{OBJECT}} | {{OUTPUT_STATUS_2}} | {{RELATED_2}} |
| A1 | {{INPUT_STATUS_2}} | {{ACTOR_2}} | {{ALT_STEP}} | {{OBJECT}} | {{ALT_OUTPUT}} | Đường đi thay thế — vd: fast-track, ngoài thẩm quyền |
| E1 | {{INPUT_STATUS_2}} | {{ACTOR_2}} | Từ chối / Hủy / Quá hạn | {{OBJECT}} | {{ERROR_OUTPUT}} | Exception — ghi rõ điểm quay lại hoặc đóng |

#### Open questions

| Mã | Nội dung cần xác nhận | Mức độ ảnh hưởng |
|---|---|---|
| OQ-01 | {{QUESTION}} | {{Cao/TB/Thấp}} |

---

## 3. Luồng con (lặp lại block 2 cho mỗi sub-flow)
Đặt tên `{{PARENT}} - {{SUBFLOW_NAME}}`, ghi rõ điểm gọi từ luồng cha và trạng thái trả về luồng cha.
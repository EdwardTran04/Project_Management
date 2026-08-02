# Template: Lovable/Figma prompt (delta) cho 1 luồng

> Dùng khi mode = `lovable-prompt`. Giả định UI Base Context đã được set vào Lovable/Figma.
> Prompt CHỈ chứa phần đặc thù của luồng — không lặp phong cách/component/layout/state chuẩn.

## Cấu trúc prompt delta

```
Theo UI Base Context đã set. Sinh luồng "[Tên luồng]".

OBJECT:
- Chính: [object] — [vai trò 1 dòng]
- Liên quan: [object] — [vai trò]

MÀN HÌNH:

[Tên màn 1] (kiểu: list/form/detail-tab/approval)
- Trường đặc thù: [chỉ trường riêng màn này]
- Cột bảng (nếu list): [cột]
- Action: [chỉ action đặc thù]
- State đặc thù: [chỉ state khác chuẩn]

[Tên màn 2] (...)
- ...

ĐIỀU HƯỚNG: [màn A] → [màn B] khi [action]

RULE ĐẶC THÙ:
- Bắt buộc: [trường]
- Readonly theo state: [trường + state]
- Phân quyền đặc thù: [nếu khác Base Context]

MOCK DATA: [bối cảnh nghiệp vụ, không dùng dữ liệu cá nhân thật]
```

## Nguyên tắc viết delta

- KHÔNG nhắc lại: phong cách, màu, layout sidebar, table chuẩn, badge, phân trang, state empty/loading/error → đã có trong Base Context.
- CHỈ nêu cái khác biệt của luồng này so với chuẩn.
- Mỗi màn giữ dưới ~60 từ. Càng ngắn càng tiết kiệm credit.
- Nếu màn dùng hoàn toàn pattern chuẩn → chỉ cần: `[Tên màn] (list chuẩn): cột [...], action [...]`.

## Khi CHƯA có UI Base Context

Nếu dự án chưa set Base Context → nhắc BA chạy mode `ui-base` trước. Không tự nhồi toàn bộ context vào prompt từng màn (tốn credit, không nhất quán giữa 2000 màn).
# Quy định thiết kế UI/UX với Design System (generic)

> Quy định generic, áp dụng được với mọi Design System khác nhau — không hardcode tên/key component, không hardcode kích thước, không hardcode pattern cụ thể của một DS nào.

---

## 1. Nguyên tắc cốt lõi

**Dùng component có sẵn, không tự build lại.**

- Mọi UI element có thể tìm trong DS → phải dùng instance của component DS
- Frame tự tạo CHỈ làm nhiệm vụ **layout container** (auto-layout, padding, gap), không chứa visual styling tự custom
- Nếu DS có template-level component (page layout, table, sidebar đầy đủ...), dùng nguyên 1 instance — không ghép lại từ atoms

---

## 2. Quy trình bắt buộc trước khi build

### Bước A — Khảo sát DS

Trước khi viết bất kỳ `figma.createFrame()` nào:

1. **Đọc page chứa template/sample** trong DS (thường tên `Template`, `Sample`, `Example`, `Patterns`) — học pattern chuẩn user đang dùng.
2. **Quét tất cả COMPONENT/COMPONENT_SET size lớn** (≥400×200) — đây là template-level components quan trọng.
3. **Quét các page atoms** (Button, Input, Table, Sidebar, Modal...) để biết components nguyên tử có sẵn.
4. **Test import key** ngay khi bắt đầu để biết key nào đã publish, key nào chưa — tránh build dở dang rồi mới phát hiện không import được.

### Bước B — Map yêu cầu → component

Với mỗi vùng UI cần thiết kế, lần lượt hỏi:

1. DS có template-level component cho cả vùng này không? → dùng instance đó
2. Nếu không, DS có composite component (table, sidebar, card...)? → dùng instance đó
3. Nếu không, DS có atom components phù hợp? → compose từ atoms
4. **Cuối cùng** mới đến: tự tạo Frame container để bố cục các instance

### Bước C — Quyết định detach hay không

| Tình huống | Hành động |
|---|---|
| Component dùng nguyên trạng, chỉ override text/swap variant | **Giữ instance**, dùng `setProperties` |
| Cần thêm/xóa children, inject content vào body slot | **Detach** instance → các child instance vẫn được giữ nguyên |

---

## 3. Quy tắc Figma Plugin API

### 3.1. Preload fonts trước mọi thao tác text

Phải `loadFontAsync` cho tất cả font/style sẽ gặp trước khi: import component có text, `appendChild` instance, override text, `swapComponent`.

### 3.2. `setProperties` tách từng property

`setProperties` chạy như transaction — fail 1 property thì rollback tất cả. Tách từng property với try-catch riêng.

```javascript
// ❌ Không làm
node.setProperties({ propA: valA, propB: valB });

// ✅ Làm
try { node.setProperties({ propA: valA }); } catch(e) {}
try { node.setProperties({ propB: valB }); } catch(e) {}
```

### 3.3. `layoutSizing FILL` chỉ sau khi `appendChild`

`layoutSizingHorizontal = 'FILL'` chỉ hoạt động sau khi node đã được append vào parent có auto-layout.

```javascript
const f = figma.createFrame();
f.layoutMode = 'VERTICAL';
parent.appendChild(f);          // ← phải append trước
f.layoutSizingHorizontal = 'FILL';  // ← sau mới set FILL
```

### 3.4. Không append vào trong instance

Không thể append node mới vào FRAME bên trong instance. Phải detach instance trước.

```javascript
// ❌ Lỗi "Cannot move node. New parent is instance"
bodyFrameInsideInstance.appendChild(myNewFrame);

// ✅ Đúng
const detached = instance.detachInstance();
const bodyFrame = detached.findOne(n => n.name === 'Frame XXXX');
bodyFrame.appendChild(myNewFrame);
```

### 3.5. ID có thể đổi sau mutation

Sau `swapComponent`/`detachInstance`, id node có thể thay đổi. Re-locate bằng `findOne` theo name, đừng cache id qua nhiều tool call.

### 3.6. Type guard khi duyệt cây node

- `node.children` không tồn tại trên TEXT, VECTOR — phải check `'children' in node`
- `node.mainComponent` chỉ có trên INSTANCE
- Trong hàm `dump`, luôn `return` sớm khi gặp TEXT/VECTOR

```javascript
function dump(node) {
  if (node.type === 'TEXT') return { ... };   // return sớm
  if (node.type === 'INSTANCE') info.mainComp = node.mainComponent?.name;
  if ('children' in node && node.children.length > 0) { ... }
}
```

---

## 4. Quy tắc Library

### 4.1. Component không import được

Nếu `importComponentByKeyAsync` trả `not found`:

- Component chưa publish trong DS file → **báo user publish, KHÔNG tự build thay thế**
- Hoặc file đích chưa subscribe library

### 4.2. COMPONENT_SET vs COMPONENT

Chỉ import được key của **variant cụ thể** (COMPONENT), không import key của SET. Khi cần variant nào, lấy đúng key của variant đó.

### 4.3. Variables vs Components publish riêng

Subscribe components KHÔNG tự động subscribe variables. Check riêng:

```javascript
const collections = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
if (collections.length === 0) {
  // Báo user cần subscribe variable library trước
}
```

---

## 5. Quy ước đặt tên & cấu trúc

- **Tên Frame container** đặt theo template của DS user đang dùng (không tự nghĩ ra tên mới)
- **Cấu trúc layout** (thứ tự frame, padding, gap, auto-layout direction) replicate theo template chuẩn của DS
- **Số demo rows/items**: 5 (không thừa, không thiếu để showcase)

---

## 6. Checklist trước khi báo "xong" 1 màn

- [ ] Mọi UI element là instance từ DS — đếm instance trên tổng node để tự verify
  `screen.findAll(n => n.type === 'INSTANCE').length`
- [ ] Không có Rectangle/Ellipse/Text tự custom thay cho component DS có sẵn
- [ ] Frame container chỉ làm layout, không có fill/stroke/radius tự định nghĩa
- [ ] Background container chính bind variable từ token DS (semantic color)
- [ ] Tên frame container giống template chuẩn của DS
- [ ] Component được dùng đúng ngữ cảnh nghiệp vụ (icon, variant, state) — không dùng default lung tung
- [ ] Filter/input type trong table khớp kiểu dữ liệu (Text / Dropdown / Date picker)

---

## 7. Giao tiếp với user

Khi gặp tình huống không chắc:

- **Component không import được** → báo user, đề xuất publish, **không tự build thay thế**
- **Component không khớp ngữ nghĩa nghiệp vụ** → hỏi user trước khi swap variant
- **Phải tự tạo Frame container** → giải thích lý do (vd: "phần body không có slot, phải detach để inject")
- **Không tự kết luận "hoàn thành"** → liệt kê những gì đã làm + những gì DS thiếu + những gì cần user confirm

---

## Tóm tắt nguyên tắc cao nhất

> Mọi quyết định cụ thể đến từ việc **khảo sát DS hiện tại** ở Bước A, KHÔNG từ kiến thức prior. Không hardcode tên component, không hardcode key, không hardcode kích thước trong skill — chỉ ghi nhận **cách thức tìm và sử dụng** component.

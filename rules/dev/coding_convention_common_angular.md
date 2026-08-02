# HƯỚNG DẪN ANGULAR CODING CONVENTIONS CHO AI AGENT

Tài liệu này quy định các nguyên tắc, quy ước bắt buộc khi viết, sửa đổi, hoặc tối ưu hóa mã nguồn Angular (TypeScript/HTML/CSS). AI Agent phải tuân thủ nghiêm ngặt để đảm bảo chất lượng và tính nhất quán của dự án.

---

## 1. Nguyên Tắc Chung & Quy Trình Thay Đổi

- **Sửa đổi source code**: Khi viết mới hoặc sửa component/service/module, bắt buộc viết Header comment mô tả: mục đích, tham số đầu vào (Input), kết quả trả về (Output), thời gian thực hiện, và chi tiết nội dung thay đổi.
- **Tính nhất quán**: Tuân thủ hướng dẫn. Các nguyên tắc chưa đề cập cần quy định theo môi trường phát triển chuẩn và báo lại cho phòng Phát Triển Phần Mềm cập nhật.

---

## 2. Quy Tắc Đặt Tên & Định Dạng File

- **Đặt tên file**: Tách các từ bằng dấu gạch ngang `-`, tách loại file bằng dấu chấm `.`.
  - Định dạng: `[tên-mô-tả].[loại-file].ts`
  - *Ví dụ:* `hello-list.service.ts`, `order-detail.component.ts`.
- **Module**: Tên file có đuôi `.module.ts`. Tên Module phải là danh từ hoặc cụm danh từ.
- **Component**: Tên file có đuôi `.component.ts`. Selector và tên class phải đồng nhất, rõ nghĩa và không được trùng nhau. Class component phải là danh từ/cụm danh từ.
- **Service**: Tên file có đuôi `.service.ts`. Class service phải là danh từ/cụm danh từ và kết thúc bằng hậu tố `Service`.
  - *Ví dụ:* class `HeroDataService` -> file `hero-data.service.ts`.
- **File Unit Test**: Tên file có đuôi `.spec.ts`. Tên file phải là danh từ/cụm danh từ.
- **Phương thức / Hàm**: Viết theo camelCase, bắt đầu bằng một **động từ**. Tên hàm phải thể hiện rõ nghiệp vụ xử lý.
  - *Ví dụ:* `getProducts(): void`.
- **Biến / Thuộc tính**:
  - Viết theo camelCase. Bắt đầu bằng ký tự chữ hoặc dấu gạch dưới `_`.
  - **CẤM** bắt đầu bằng chữ số hoặc chứa ký tự đặc biệt (ví dụ: `&`, `*`, `(`, `)`...).
  - **CẤM** trùng với các từ khóa (`var`, `let`, `for`, `if`...).
  - Phân biệt chữ hoa/thường (ví dụ `STDIO` và `Stdio` là hai biến khác nhau).
  - *Ví dụ hợp lệ:* `name_of_cat`, `_address`. *Không hợp lệ:* `3school` (bắt đầu bằng số), `position%Enemy` (chứa `%`).
- **Hằng số (Constant)**: Sử dụng hằng số (`const`). Đặt tên theo `UPPER_SNAKE_CASE`.
  - *Ví dụ:* `const PI_NUMBER = 3.14;`.
- **Interface**: Viết theo PascalCase. Đặt tên rõ nghĩa, không thêm tiền tố `I`.
- **Thuộc tính đầu vào/đầu ra (Input/Output Alias)**: Chỉ dùng alias cho `@Input` hoặc `@Output` khi tên biến không đủ mô tả thuộc tính. **Tránh đặt alias** khi tên biến đã rõ nghĩa.

---

## 3. Cấu Trúc Ứng Dụng & Angular Module

- **Thư mục dự án**: Toàn bộ mã nguồn phải đặt trong thư mục `src`.
- **Đơn nhiệm (Single Responsibility)**: Mỗi Module/Service chỉ chịu trách nhiệm duy nhất cho một phần nghiệp vụ.
- **Feature Modules**:
  - Tạo các feature modules riêng biệt cho từng chức năng (ví dụ: Order feature).
  - Đặt feature module và các file liên quan trong cùng một thư mục riêng (ví dụ: `src/app/order`).
  - Tên module phải khớp và phản ánh cấu trúc thư mục chứa nó.
  - *Ví dụ:* `src/app/order/order.module.ts`.
- **Shared Module**: Tạo shared module chứa các component, directive, pipe dùng chung (ví dụ: `SharedModule` đặt tại `src/app/shared/shared.module.ts`).

---

## 4. Quy Tắc Đối Với Component

- **Cấu trúc Class Component**: Sắp xếp các thành phần theo thứ tự:
  1. Các thuộc tính (Properties) đặt trên đầu.
  2. Các phương thức `public` nằm trên các phương thức `private`.
  3. Các phương thức cùng phạm vi truy cập (ví dụ nhiều public methods) phải sắp xếp theo thứ tự bảng chữ cái.
- **Lifecycle Hooks**: **BẮT BUỘC** implement các interface của lifecycle hook thay vì chỉ viết hàm.
  - ✔️ *Đúng:* `export class MyComponent implements OnInit, OnDestroy { ngOnInit() { ... } }`
  - ❌ *Sai:* `export class MyComponent { ngOnInit() { ... } }`
- **Không viết style trực tiếp**: **KHÔNG ĐƯỢC** viết CSS/Style inline trong file `component.ts`. Sử dụng file stylesheet riêng (`.css` hoặc `.scss`).

---

## 5. Quy Tắc Đối Với Service & Data Service

- **Tách biệt Logic (Providing a service)**:
  - Giới hạn tối đa việc viết logic xử lý/nghiệp vụ trong Component. Hãy chuyển logic đó ra Service.
  - Các hàm dùng chung phải đưa vào các Service Common.
- **Không đặt logic vào Template**: **CẤM** viết logic phức tạp trực tiếp trong file HTML template. Nếu cần xử lý logic, hãy gọi hàm được định nghĩa trong file `.ts` của Component.
- **Sử dụng `@Injectable()`**: Sử dụng decorator `@Injectable()` ở cấp độ Class thay vì dùng `@Inject` cho từng tham số trong constructor khi inject dependency.
- **Data Services**:
  - Việc lấy dữ liệu, gọi API (XHR call), lưu trữ local storage, hoặc stashing dữ liệu trong bộ nhớ phải được thực hiện thông qua Data Service riêng. Component không được gọi trực tiếp API.

---

## 6. Library RxJS & Xử Lý Bất Đồng Bộ

### 6.1. Hủy Đăng Ký (Unsubscribe) Để Tránh Leak Bộ Nhớ
Chọn một trong ba cách sau để unsubscribe khi component bị hủy (`ngOnDestroy`):

- **Cách 1: Sử dụng mảng quản lý Subscriptions**:
  ```typescript
  subscriptions: Subscription[] = [];
  ngOnInit() {
    this.subscriptions.push(api$.subscribe(...));
  }
  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
  ```
- **Cách 2: Sử dụng Subscription.add()**:
  ```typescript
  subscriptions: Subscription = new Subscription();
  ngOnInit() {
    this.subscriptions.add(api$.subscribe(...));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ```
- **Cách 3: Sử dụng toán tử `takeUntil` (Khuyên dùng)**:
  ```typescript
  private destroy$ = new ReplaySubject<void>(1);
  ngOnInit() {
    api$.pipe(takeUntil(this.destroy$)).subscribe(...);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  ```

### 6.2. Tách Biệt Code Xử Lý Ra Ngoài Hàm Subscribe
- Không viết logic xử lý phức tạp trong thân hàm `subscribe()`.
- Sử dụng các toán tử RxJS pipe (`filter`, `map`, `tap`...) để xử lý dữ liệu trước khi nhận kết quả cuối cùng ở `subscribe()`.
  ```typescript
  // Đúng:
  pokemon$
    .pipe(
      filter(({ type }) => type === "Water"),
      map(pokemon => getStats(pokemon)),
      tap(stats => logStats(stats))
    )
    .subscribe(stats => saveToPokedex(stats));
  ```

### 6.3. Sử Dụng Subject Để Dừng Observable
- Thay vì quản lý nhiều biến Subscription riêng lẻ và gọi hủy thủ công, hãy sử dụng một `Subject` chung kết hợp với `takeUntil` để kết thúc toàn bộ stream cùng một lúc (Xem Cách 3 ở Mục 6.1).

### 6.4. Các Toán Tử Flattening RxJS
Sử dụng toán tử làm phẳng observable (Flattening Operators) phù hợp với từng ngữ cảnh:
- `switchMap`: Hủy stream cũ khi có stream mới phát ra (ví dụ: tìm kiếm/typeahead).
- `mergeMap`: Xử lý đồng thời tất cả các stream phát ra.
- `concatMap`: Xử lý tuần tự các stream theo thứ tự phát ra.
- `exhaustMap`: Bỏ qua các stream mới nếu stream hiện tại chưa xử lý xong.

### 6.5. Xử Lý Lỗi Trong RxJS
- `catchError()`: Sử dụng khi xảy ra lỗi trên stream hiện tại để chuyển sang một stream dự phòng an toàn.
- `onErrorResumeNext()`: Tự động đổi sang stream khác khi stream chính gặp lỗi.
- `retry()` / `retryWhen()`: Thử lại stream nhiều lần trước khi ném ra lỗi (Ví dụ: thử lại tối đa 3 lần, mỗi lần cách nhau 1 giây).
  ```typescript
  stream$.pipe(
    retryWhen(error$ => error$.pipe(
      switchMap((err, i) => i >= 3 ? throwError(err) : timer(1000))
    ))
  ).subscribe();
  ```

---

## 7. Các Điểm Chú Ý Khác

- **Sử dụng `trackBy` khi dùng `*ngFor`**: Bắt buộc dùng `trackByFn` để tối ưu hóa hiệu năng render DOM khi danh sách thay đổi.
  ```html
  <li *ngFor="let item of items; trackBy: trackByFn">{{ item }}</li>
  ```
  ```typescript
  trackByFn(index, item) { return item.id; }
  ```
- **Kiểu dữ liệu nghiêm ngặt**: Bắt buộc định nghĩa rõ kiểu dữ liệu cho biến và tham số. **Hạn chế tối đa việc sử dụng kiểu `any`**.
- **Khai báo Interface Data Model**: Định nghĩa rõ ràng các interface cho dữ liệu (Data Model / View Data Model) thay vì dùng object không kiểu.
  ```typescript
  export interface User {
    name: string;
    age: number;
  }
  ```
- **Attribute Directives**: Sử dụng directive thuộc tính khi cần xử lý logic hành vi trên phần tử HTML mà không cần template riêng.
- **Quy tắc Deployment**:
  - Bắt buộc xóa bỏ toàn bộ câu lệnh `console.log` trước khi deploy.
  - Bật chế độ **Production Mode** trước khi build.
  - Sử dụng biên dịch **AOT** (Ahead-of-Time) khi build sản phẩm.

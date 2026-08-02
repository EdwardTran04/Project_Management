# QUY TẮC TRÁNH LỖI CHỨC NĂNG - JAVA (CONCISE)

Tài liệu này tổng hợp các hướng dẫn lập trình tránh lỗi tiềm ẩn về mặt chức năng trong Java, dựa trên Guideline `GL.10.KTCN.36` của Phòng Kỹ Thuật Công Nghệ.

---

## MỤC LỤC

- [1. Dọn Dẹp Code & Fix Warnings](#1-dọn-dẹp-code--fix-warnings)
  - [1.1 Không dư thừa code](#11-không-dư-thừa-code)
  - [1.2 Giải quyết tất cả Warning của IDE](#12-giải-quyết-tất-cả-warning-của-ide)
- [2. Xử Lý Exception](#2-xử-lý-exception)
  - [2.1 Sử dụng Exception cụ thể](#21-sử-dụng-exception-cụ-thể)
  - [2.2 Không để catch rỗng](#22-không-để-catch-rỗng)
  - [2.3 Sử dụng finally để giải phóng tài nguyên](#23-sử-dụng-finally-để-giải-phóng-tài-nguyên)
- [3. Lỗi Dữ Liệu & Tính Toán](#3-lỗi-dữ-liệu--tính-toán)
  - [3.1 Validate dữ liệu đầu vào](#31-validate-dữ-liệu-đầu-vào)
  - [3.2 Index mảng phải bắt đầu từ 0](#32-index-mảng-phải-bắt-đầu-từ-0)
  - [3.3 Tràn bộ nhớ (Overflow) khi tính toán](#33-tràn-bộ-nhớ-overflow-khi-tính-toán)
  - [3.4 Lỗi chia cho 0](#34-lỗi-chia-cho-0)
  - [3.5 Sử dụng equals để so sánh String](#35-sử-dụng-equals-để-so-sánh-string)
- [4. Cấu Trúc Điều Khiển & Nhập Xuất](#4-cấu-trúc-điều-khiển--nhập-xuất)
  - [4.1 Đảm bảo vòng lặp dừng](#41-đảm-bảo-vòng-lặp-dừng)
  - [4.2 Xử lý đường dẫn tệp tin đa nền tảng](#42-xử-lý-đường-dẫn-tệp-tin-đa-nền-tảng)
  - [4.3 Đệ quy phải có điều kiện dừng rõ ràng](#43-đệ-quy-phải-có-điều-kiện-dừng-rõ-ràng)
- [5. Thread-Safety (An Toàn Đa Luồng)](#5-thread-safety-an-toàn-đa-luồng)
  - [5.1 Các thao tác trên tài nguyên dùng chung phải là Atomic](#51-các-thao-tác-trên-tài nguyên-dùng-chung-phải-là-atomic)

---

## 1. Dọn Dẹp Code & Fix Warnings

### 1.1 Không dư thừa code
- **Mô tả:** Xóa bỏ toàn bộ biến, hàm khai báo nhưng không sử dụng. Loại bỏ hoàn toàn các đoạn code cũ bị comment để giữ mã nguồn sạch sẽ, dễ bảo trì.
- **Cách viết đúng (Compliant Code):**
  ```java
  public void process() {
      int activeUsers = getActiveCount();
      sendNotification(activeUsers);
  }
  ```

### 1.2 Giải quyết tất cả Warning của IDE
- **Mô tả:** Đảm bảo source code sạch cảnh báo (warning) từ IDE để tránh sử dụng thư viện/hàm lỗi thời (deprecated) hoặc các lỗi logic ẩn.

---

## 2. Xử Lý Exception

### 2.1 Sử dụng Exception cụ thể
- **Mô tả:** Chỉ định rõ exception cụ thể thay vì ném chung class `Exception` hay `RuntimeException`.
- **Ví dụ không tuân thủ (Non-compliant Code):**
  ```java
  public void makeFile() throws Exception { ... }
  ```
- **Cách viết đúng (Compliant Code):**
  ```java
  public void makeFile() throws FileNotFoundException, IOException { ... }
  ```

### 2.2 Không để catch rỗng
- **Mô tả:** Phải luôn ghi log hoặc in thông tin lỗi trong khối catch để dễ dàng xác định nguyên nhân sự cố. Cấm để khối catch trống.
- **Ví dụ không tuân thủ (Non-compliant Code):**
  ```java
  try {
      doSomething();
  } catch(Exception e) {}
  ```
- **Cách viết đúng (Compliant Code):**
  ```java
  try {
      doSomething();
  } catch(Exception e) {
      log.error(e.getMessage(), e);
  }
  ```

### 2.3 Sử dụng finally để giải phóng tài nguyên
- **Mô tả:** Sử dụng khối `finally` (hoặc `try-with-resources`) để chắc chắn tài nguyên (file, stream, socket) được đóng ngay cả khi có lỗi xảy ra.
- **Cách viết đúng (Compliant Code):**
  ```java
  BufferedReader reader = null;
  try {
      reader = new BufferedReader(new FileReader(file));
      // ...
  } catch(IOException e) {
      log.error(e);
  } finally {
      if (reader != null) {
          try { reader.close(); } catch(IOException ex) { log.error(ex); }
      }
  }
  ```

---

## 3. Lỗi Dữ Liệu & Tính Toán

### 3.1 Validate dữ liệu đầu vào
- **Mô tả:** Validate định dạng, độ dài và các điều kiện null/empty trước khi xử lý. Khi cast hoặc parse dữ liệu phải bọc try-catch đề phòng lỗi chuyển đổi.
- **Ví dụ không tuân thủ (Non-compliant Code):**
  ```java
  public static int getIDLookup(String lookupText) {
      String temp = lookupText.split("#")[0];
      temp = temp.replace(";", "");
      return Convert.ToInt32(temp);
  }
  ```
- **Cách viết đúng (Compliant Code):**
  ```java
  public static int getIDLookup(String lookupText) {
      try {
          if (lookupText == null) return 0;
          String temp = lookupText.split("#")[0];
          temp = temp.replace(";", "");
          return Integer.parseInt(temp);
      } catch (Exception e) {
          return 0; // Trả về giá trị mặc định khi có lỗi
      }
  }
  ```

### 3.2 Index mảng phải bắt đầu từ 0
- **Mô tả:** Index mảng luôn chạy từ `0` đến `length - 1`. Cần kiểm tra giới hạn vòng lặp để tránh `ArrayIndexOutOfBoundsException`.
- **Ví dụ không tuân thủ (Non-compliant Code):**
  ```java
  int[] arr = new int[10];
  for (int k = 1; k <= 10; k++) {
      arr[k] = k;
  }
  ```
- **Cách viết đúng (Compliant Code):**
  ```java
  int[] arr = new int[10];
  for (int k = 0; k < 10; k++) {
      arr[k] = k;
  }
  ```

### 3.3 Tràn bộ nhớ (Overflow) khi tính toán
- **Mô tả:** Ép kiểu hoặc chuyển sang kiểu dữ liệu lớn hơn (ví dụ `double`, `long`) khi thực hiện các phép toán nhân/cộng trên các số lớn kiểu `int`.
- **Ví dụ không tuân thủ (Non-compliant Code):**
  ```java
  int a = 34545; int b = 323436;
  int c = a * b; // Tràn bộ nhớ kiểu int, c nhận giá trị âm sai lệch
  ```
- **Cách viết đúng (Compliant Code):**
  ```java
  double a = 34545; double b = 323436;
  double c = a * b;
  ```

### 3.4 Lỗi chia cho 0
- **Mô tả:** Luôn kiểm tra mẫu số khác `0` trước khi thực hiện phép chia.
- **Cách viết đúng (Compliant Code):**
  ```java
  int safeDivision(int x, int y) {
      return (y != 0) ? (x / y) : 0;
  }
  ```

### 3.5 Sử dụng equals để so sánh String
- **Mô tả:** Luôn dùng `.equals()` để so sánh chuỗi, cấm dùng `==` (chỉ so sánh tham chiếu địa chỉ).
- **Cách viết đúng (Compliant Code):**
  ```java
  if ("expected".equals(inputStr)) { ... }
  ```

---

## 4. Cấu Trúc Điều Khiển & Nhập Xuất

### 4.1 Đảm bảo vòng lặp dừng
- **Mô tả:** Rà soát tất cả các điều kiện dừng của vòng lặp để đảm bảo biến điều kiện chắc chắn thay đổi đúng hướng thoát, tránh treo chương trình.

### 4.2 Xử lý đường dẫn tệp tin đa nền tảng
- **Mô tả:** Không hardcode đường dẫn chứa dấu gạch chéo `/` hoặc `\\`. Bắt buộc dùng `File.separator` để tương thích trên cả Windows và Linux.
- **Cách viết đúng (Compliant Code):**
  ```java
  String path = "dir1" + File.separator + "dir2" + File.separator + "file.txt";
  ```

### 4.3 Đệ quy phải có điều kiện dừng rõ ràng
- **Mô tả:** Kiểm tra chặt chẽ điều kiện dừng của hàm đệ quy để đảm bảo chương trình dừng sau một số bước hữu hạn, tránh `StackOverflowError`.

---

## 5. Thread-Safety (An Toàn Đa Luồng)

### 5.1 Các thao tác trên tài nguyên dùng chung phải là Atomic
- **Mô tả:** Toán tử `++` không phải là atomic. Khi các Servlet hoặc Thread sử dụng tài nguyên/biến dùng chung, cần dùng đồng bộ `synchronized` hoặc các lớp `AtomicInteger` để tránh lỗi tương tranh (Race Condition).
- **Ví dụ không tuân thủ (Non-compliant Code):**
  ```java
  public class Counter {
      private int count;
      public int getCount() { return count++; } // Không an toàn đa luồng
  }
  ```
- **Cách viết đúng (Compliant Code):**
  ```java
  import java.util.concurrent.atomic.AtomicInteger;

  public class Counter {
      private int count;
      private AtomicInteger atomicCount = new AtomicInteger(0);

      // Giải pháp 1: Synchronized
      public synchronized int getCount() { 
          return count++; 
      }

      // Giải pháp 2: AtomicInteger
      public int getCountAtomically() { 
          return atomicCount.incrementAndGet(); 
      }
  }
  ```

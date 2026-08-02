# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - JAVA - PHẦN 2/4

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ Java, dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 2/4.

---

## MỤC LỤC - PHẦN 2/4

- [11. Cài đặt interface "Cloneables" cần phải override phương thức "clone](#11-cài-đặt-interface-cloneables-cần-phải-override-phương-thức-clone)
- [12. Nếu override phương thức "equals(Object obj)" hoặc "compareTo(T obj)" thì](#12-nếu-override-phương-thức-equalsobject-obj-hoặc-comparetot-obj-thì)
- [13. Biến trong điều kiện dừng vòng for và biến thay đổi sau mỗi vòng lặp phải là](#13-biến-trong-điều-kiện-dừng-vòng-for-và-biến-thay-đổi-sau-mỗi-vòng-lặp-phải-là)
- [14. Không thay đổi biến trong điều kiện dừng vòng for bên trong nội dung vòng lặp](#14-không-thay-đổi-biến-trong-điều-kiện-dừng-vòng-for-bên-trong-nội-dung-vòng-lặp)
- [15. Khai báo final với biến "public static"](#15-khai-báo-final-với-biến-public-static)
- [16. Có từ khóa "case" trong mỗi khối của khai báo switch](#16-có-từ-khóa-case-trong-mỗi-khối-của-khai-báo-switch)
- [17. Không truyền một đối tượng Collection vào method của chính đối tượng đó](#17-không-truyền-một-đối-tượng-collection-vào-method-của-chính-đối-tượng-đó)
- [18. Không throw exception trong Servlet](#18-không-throw-exception-trong-servlet)
- [19. Việc dọn rác chỉ thực hiện từ JVM](#19-việc-dọn-rác-chỉ-thực-hiện-từ-jvm)
- [20. Không so sánh bằng với dữ liệu kiểu Float](#20-không-so-sánh-bằng-với-dữ-liệu-kiểu-float)
- [21. Không truy cập đến các thuộc tính static từ phương thức của Instance](#21-không-truy-cập-đến-các-thuộc-tính-static-từ-phương-thức-của-instance)
- [22. Khởi tạo trường static đặt trong  "synchronized"](#22-khởi-tạo-trường-static-đặt-trong--synchronized)

---

## <a name="11-cài-đặt-interface-cloneables-cần-phải-override-phương-thức-clone"></a>11. Cài đặt interface "Cloneables" cần phải override phương thức "clone

### Mô tả
Cài đặt interface Cloneables thì cần phải override phương thức clone, nếu không 
phương thức mặc định JVM clone sẽ được dùng khi đó chỉ các thuộc tính nguyên thủy 
(primitive) được sao chép, đối với các thuộc tính khác chỉ  copy tham chiếu (reference) 
sang đối tượng clone, đối tượng được clone có thể sẽ dùng chung thuộc tính với đối 
tượng nguồn.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
class Team implements Cloneable {  // Không override clone() 
  private Person coach; 
  private List<Person> players; 
  public void addPlayer(Person p) {...} 
  public Person getCoach() {...} 
}
```

### Cách viết đúng (Compliant Code)
```java
class Team implements Cloneable { 
  private Person coach; 
  private List<Person> players; 
  public void addPlayer(Person p) { ... } 
  public Person getCoach() { ... } 
 
  @Override 
  public Object clone() {  
    Team clone = (Team) super.clone(); 
    //... 
  } 
}
```

---

## <a name="12-nếu-override-phương-thức-equalsobject-obj-hoặc-comparetot-obj-thì"></a>12. Nếu override phương thức "equals(Object obj)" hoặc "compareTo(T obj)" thì

### Mô tả
override cả hai phương thức. 
Theo tài liệu Java về phương thức Comparable.compareTo(T o):  khuyến khích nhưng 
không bắt buộc việc đảm bảo (x.compareTo(y)==0) tương đương với (x.equals(y)).  
Do đó để tránh nhầm lẫn về sau, nếu override phương thức equals() hoặc 
compareTo() thì nên override cả hai phương thức cùng nhau.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public class Foo implements Comparable<Foo> { 
  @Override 
  public int compareTo(Foo foo) { /* ... */ } // phương thức equals(Object 
obj) không được override 
}
```

### Cách viết đúng (Compliant Code)
```java
public class Foo implements Comparable<Foo> { 
  @Override 
  public int compareTo(Foo foo) { /* ... */ }       
 
  @Override 
  public boolean equals(Object obj) { /* ... */ } 
}
```

---

## <a name="13-biến-trong-điều-kiện-dừng-vòng-for-và-biến-thay-đổi-sau-mỗi-vòng-lặp-phải-là"></a>13. Biến trong điều kiện dừng vòng for và biến thay đổi sau mỗi vòng lặp phải là

### Mô tả
cùng một biến 
Biến trong điều kiện dừng vòng for và biến thay đ ổi sau mỗi vòng lặp phải là cùng 
một biến, nếu không có thể dẫn đến vòng lặp không bao giờ kết thúc.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
for (i = 0; i < 10; j++) {  //điều kiện dừng vòng lặp dựa trên biến i, tuy 
nhiên i không được tăng trong vế cuối của for  
  // ... 
}
```

### Cách viết đúng (Compliant Code)
```java
for (i = 0; i < 10; i++) { 
  // ... 
}
```

---

## <a name="14-không-thay-đổi-biến-trong-điều-kiện-dừng-vòng-for-bên-trong-nội-dung-vòng-lặp"></a>14. Không thay đổi biến trong điều kiện dừng vòng for bên trong nội dung vòng lặp

### Mô tả
hoặc phụ thuộc kết quả trả về từ đoạn code khác. 
Biến trong điều kiện dừng vòng for không nên bị thay đổi bên trong vò ng lặp hoặc 
phụ thuộc kết quả trả về từ đoạn code khác. Việc này có thể dẫn đến nguy cơ vòng lặp 
không bao giờ kết thúc.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
for (int i = 0; i < 10; i++) { 
// ...
  i = i - 1; // Biến đếm bị thay đổi giá trị bên trong vòng lặp 
// ...
}  
 
for (int i = 0; i < getMaximumNumber(); i++) {...} // Điều kiện dừng vòng 
lặp phụ thuộc vào kết quả trả về từ hàm getMaximumNumber()
```

### Cách viết đúng (Compliant Code)
```java
int stopCondition = getMaximumNumber(); 
for (int i = 0; i < stopCondition; i++) {...}
```

---

## <a name="15-khai-báo-final-với-biến-public-static"></a>15. Khai báo final với biến "public static"

### Mô tả
Không có lý do gì để khai báo một biến là "public" và "static" mà không "final". Như 
thế bất kỳ ở đâu cũng có thể thay đổi giá trị này và có thể gây lỗi chương trình.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public class Greeter { 
  public static Foo foo = new Foo(); 
// ...
}
```

### Cách viết đúng (Compliant Code)
```java
public class Greeter { 
  public static final Foo foo = new Foo(); 
// ...
}
```

---

## <a name="16-có-từ-khóa-case-trong-mỗi-khối-của-khai-báo-switch"></a>16. Có từ khóa "case" trong mỗi khối của khai báo switch

### Mô tả
Đôi khi việc khai báo một khối lệnh trong switch mà không bắt đầu bằng từ khóa ca se 
vẫn hợp lệ, tuy nhiên việc này làm cho chương trình khó hiểu và thường là do lỗi typing.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
switch (day) { 
  case MONDAY: 
  case TUESDAY: 
  WEDNESDAY:   //đúng về cú pháp nhưng có thể dẫn đến hành vi bất thường 
không kiểm soát được 
    doSomething(); 
    break; 
// ...
}
```

### Cách viết đúng (Compliant Code)
```java
switch (day) { 
  case MONDAY: 
    break; 
  case TUESDAY: 
   foo(); 
   break; 
}
```

---

## <a name="17-không-truyền-một-đối-tượng-collection-vào-method-của-chính-đối-tượng-đó"></a>17. Không truyền một đối tượng Collection vào method của chính đối tượng đó

### Mô tả
Việc này có thể gây lỗi chương trình. 
Ví dụ code không tuân thủ 
List <Object> objs = new ArrayList<Object>(); 
  objs.add("Hello"); 
 
 
  objs.add(objs); // không tuân thủ; gây ra exception StackOverflowException 
nếu objs.hashCode() được gọi 
  objs.containsAll(objs); // không tuân thủ; luôn luôn trả về true 
  objs.removeAll(objs); // không tuân thủ; dễ gây nhầm lẫn. thay vào đó nên 
sử dụng clear()  
  .....

---

## <a name="18-không-throw-exception-trong-servlet"></a>18. Không throw exception trong Servlet

### Mô tả
Việc throw các exception trong servlet có thể đưa web server vào các trạng thái không 
mong muốn, có khả năng bị tấn công bởi hình thức từ chối dịch dụ.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public void doGet(HttpServletRequest request, HttpServletResponse response) 
  throws IOException, ServletException { 
  String ip = request.getRemoteAddr(); 
  InetAddress addr = InetAddress.getByName(ip); // Noncompliant; 
getByName(String) throws UnknownHostException 
  //... 
}
```

### Cách viết đúng (Compliant Code)
```java
public void doGet(HttpServletRequest request, HttpServletResponse response) 
  throws IOException, ServletException { 
  try { 
    String ip = request.getRemoteAddr(); 
    InetAddress addr = InetAddress.getByName(ip); 
    //... 
  } 
  catch (UnknownHostException uhex) { 
    //... 
  }
```

---

## <a name="19-việc-dọn-rác-chỉ-thực-hiện-từ-jvm"></a>19. Việc dọn rác chỉ thực hiện từ JVM

### Mô tả
Không nên gọi System.gc() hoặc Runtime.getRuntime().gc() bởi vì không thể biết 
chính xác JVM sẽ thực hiện ngầm những gì, điều này phụ thuộc vào nhà cung cấp, phiên 
bản và các tùy chọn: 
 Toàn bộ ứng dụng có bị đóng băng khi đang gọi các phương thức này không? 
 Tùy chọn -XX:DisableExplicitGC có được kích hoạt không? 
 JVM sẽ bỏ qua việc gọi các hàm này một cách tường minh? 
 ... 
Nhiệm vụ thu gom rác nên để dành riêng cho JVM

---

## <a name="20-không-so-sánh-bằng-với-dữ-liệu-kiểu-float"></a>20. Không so sánh bằng với dữ liệu kiểu Float

### Mô tả
Các phép toán trên số Float là không chính xác. Thậm chí khi thực hiện một dãy các 
phép toán trên số Float, mỗi lần chạy cho một kết quả khác nh au, nó phụ thuộc vào 
Compiler và setting của Compiler

### Ví dụ không tuân thủ (Non-compliant Code)
```java
float zeroFloat = 0.0f; 
if (zeroFloat == 0) {  // Không đúng qui luật, trả về false 
}
```

### Cách viết đúng (Compliant Code)
```java
float zeroFloat = 0.0f; 
if (Float.floatToRawIntBits(zeroFloat) == 0) { //Đúng qui luật. Sử dụng so 
sánh bit đảm bảo chúng ta so sánh được với giá trị 0 
}
```

---

## <a name="21-không-truy-cập-đến-các-thuộc-tính-static-từ-phương-thức-của-instance"></a>21. Không truy cập đến các thuộc tính static từ phương thức của Instance

### Mô tả
Cập nhật một trường static từ một phương thức không static có thể dễ dẫn đến lỗi nếu 
có nhiều Instance c ủa Lớp hoặc nhiều Thread đang chạy. Lý tưởng nhất là các trường 
static chỉ được cập nhật từ các phương thức static và synchronize. 
Ví dụ code không tuân thủ 
public class MyClass { 
 
  private static int count = 0; 
 
  public void doSomething() { 
    //... 
    count++;  // không tuân thủ, thay đổi thuộc tính static 
  } 
}

---

## <a name="22-khởi-tạo-trường-static-đặt-trong--synchronized"></a>22. Khởi tạo trường static đặt trong  "synchronized"

### Mô tả
Trong tình huống xử lý đa luồng có thể xảy ra trường hợp tiến trình thứ hai truy cập 
một đối tượng đang được khởi tạo dở bởi tiến trình đầu ti ên. Cho phép truy cập như vậy 
có thể gây ra lỗi nghiêm trọng. Giải pháp là khối khởi tạo cho trường static nên được 
synchronized hoặc khai báo biến là volatile.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
protected static Object instance = null; 
 
public static Object getInstance() { 
    if (instance != null) { 
        return instance; 
 
    } 
 
    instance = new Object();  //Không đúng quy luật 
    return instance; 
}
```

### Cách viết đúng (Compliant Code)
```java
protected static volatile Object instance = null; 
 
public static Object getInstance() { 
    if (instance != null) { 
        return instance; 
    } 
 
    instance = new Object(); 
    return instance; 
} 
 
//hoặc 
 
protected static Object instance = null; 
 
public static synchronized Object getInstance() { 
    if (instance != null) { 
        return instance; 
    } 
 
    instance = new Object(); 
    return instance; 
}
```

---


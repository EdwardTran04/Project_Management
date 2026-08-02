# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - JAVA - PHẦN 4/4

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ Java, dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 4/4.

---

## MỤC LỤC - PHẦN 4/4

- [34. Các biểu thức điều kiện không nên luôn luôn là "TRUE" hoặc "FALSE"](#34-các-biểu-thức-điều-kiện-không-nên-luôn-luôn-là-true-hoặc-false)
- [35. Không khai báo biến static với đối tượng kiểu "Calendars" và "DateFormats"](#35-không-khai-báo-biến-static-với-đối-tượng-kiểu-calendars-và-dateformats)
- [36. Không so sánh kiểu Class bằng Class Name](#36-không-so-sánh-kiểu-class-bằng-class-name)
- [37. Không sử dụng cùng một toán tử trên 2 vế của một biểu thức nhị phân](#37-không-sử-dụng-cùng-một-toán-tử-trên-2-vế-của-một-biểu-thức-nhị-phân)
- [38. Loại bỏ các "dead store"](#38-loại-bỏ-các-dead-store)
- [39. Khi kiểm tra điều kiện bằng với một biến String,  chuỗi Strings nên được đặt ở](#39-khi-kiểm-tra-điều-kiện-bằng-với-một-biến-string--chuỗi-strings-nên-được-đặt-ở)
- [40. Sử dụng ConcurrentHashMap thay cho HashMap](#40-sử-dụng-concurrenthashmap-thay-cho-hashmap)

---

## <a name="34-các-biểu-thức-điều-kiện-không-nên-luôn-luôn-là-true-hoặc-false"></a>34. Các biểu thức điều kiện không nên luôn luôn là "TRUE" hoặc "FALSE"

### Mô tả
Biểu thức điều kiện luôn luôn FALSE làm cho khối lệnh  tiếp theo không bao giờ 
được gọi, tương tự nếu luôn luôn TRUE nghĩa là mệnh đề điều kiện đang bị thừa và làm 
code trở nên khó đọc. Cần loại bỏ các biều thức điều kiện này hoặc điểu chỉnh lại để 
không xảy ra tình trạng luôn luôn TRUE hoặc FALSE 
Ví dụ code không tuân thủ 
//foo không thể đồng thời bằng và không bằng bar trong cùng một biểu thức 
điều kiện 
if(foo == bar && something && foo != bar) {...} 
private void compute(int foo) { 
  if (foo == 4) { 
    doSomething(); 
    // foo bằng 4, do đó điều kiện này luôn luôn false 
    if (foo > 4) {...} 
    ... 
  } 
  ... 
} 
private void compute(boolean foo) { 
  if (foo) { 
    return; 
  } 
  doSomething(); 
  // ở chỗ này foo luôn luôn false 
 
  if (foo){...} 
  ... 
}

---

## <a name="35-không-khai-báo-biến-static-với-đối-tượng-kiểu-calendars-và-dateformats"></a>35. Không khai báo biến static với đối tượng kiểu "Calendars" và "DateFormats"

### Mô tả
Calendar và DateFormat không đảm bảo thread -safe. Sử dụng các đối tượng này khi 
xử lý đa luồng dễ dấn đến vấn đề về dữ liệu hoặc exceptions khi chạy runtime.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public class MyClass { 
  static private SimpleDateFormat format = new SimpleDateFormat("HH-mm-ss");  
// Không tuân thủ 
  static private Calendar calendar = Calendar.getInstance();  // Không tuân 
thủ
```

### Cách viết đúng (Compliant Code)
```java
public class MyClass { 
  private SimpleDateFormat format = new SimpleDateFormat("HH-mm-ss"); 
  private Calendar calendar = Calendar.getInstance();
```

---

## <a name="36-không-so-sánh-kiểu-class-bằng-class-name"></a>36. Không so sánh kiểu Class bằng Class Name

### Mô tả
Không có ràng buộc nào khiến cho class name là duy nhất (thực tế chỉ duy nhất trong 
1 package), do đó xác định kiểu object dựa trên class name là một việc làm n guy hiểm và 
có thể dẫn đến lỗi chương trình. Một trong những nguy cơ là kẻ tấn công có thể gửi đến 
các đối tượng có cùng tên với các class tin cậy (trusted) và qua đó đạt được các truy cập 
dành riêng cho class tin cậy. 
Thay vào đó sử dụng toán tử instance of để kiểm tra kiểu object.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
package computer; 
class Pear extends Laptop { ... } 
 
package food; 
class Pear extends Fruit { ... } 
 
class Store { 
 
  public boolean hasSellByDate(Object item) { 
    if ("Pear".equals(item.getClass().getSimpleName())) {  // không tuân thủ 
      return true;   
    } 
  } 
}
```

### Cách viết đúng (Compliant Code)
```java
class Store { 
 
 
  public boolean hasSellByDate(Object item) { 
    if (item instanceof food.Pear) { 
      return true; 
    } 
  } 
}
```

---

## <a name="37-không-sử-dụng-cùng-một-toán-tử-trên-2-vế-của-một-biểu-thức-nhị-phân"></a>37. Không sử dụng cùng một toán tử trên 2 vế của một biểu thức nhị phân

### Mô tả
Xảy ra trường hợp này thường là do nhầm lẫn (copy/paste) hoặc đơn giản là code thừa 
Luận này không áp dụng với  *, +, và =

### Ví dụ không tuân thủ (Non-compliant Code)
```java
if ( a == a ) { // luôn luôn true 
  doZ(); 
} 
if ( a != a ) { // luôn luôn false 
  doY(); 
} 
if ( a == b && a == b ) { // nếu vế đầu tiên là true, thì vế thứ 2 cũng vậy 
  doX(); 
} 
if ( a == b || a == b ) { // nếu vế đầu tiên là true, thì vế thứ 2 cũng vậy 
  doW(); 
} 
 
int j = 5 / 5; //luôn luôn là 1 
int k = 5 - 5; //luôn luôn là 0
```

### Cách viết đúng (Compliant Code)
```java
doZ(); 
 
if ( a == b ) { 
  doX(); 
} 
if ( a == b ) { 
  doW(); 
} 
 
int j = 1; 
int k = 0; 
 
//
```

### Ngoại lệ
Ngoại lệ 
 
//So sánh một số float với chính nó để kiểm tra giá trị NaN 
//Tương tự dịch 1 bit  đối với 1 là cách thông dụng để tạo bit masks. 
 
float f; 
if(f != f) { //kiểm tra giá trị NaN 
  System.out.println("f is NaN"); 
} 
 
 
int i = 1 << 1; // Hợp lệ 
int j = a << a; // không hợp lệ

---

## <a name="38-loại-bỏ-các-dead-store"></a>38. Loại bỏ các "dead store"

### Mô tả
Dead store là một trong hai trường hợp sau: 
 Khai báo một biến local và gán giá trị cho biến đó (kể cả gi á trị null), tuy nhiên 
sau đó không được sử dụng ở bất kỳ chỗ  
 Tính toán và lấy ra một giá trị nhưng sau đó không dùng.  
Hai trường hợp này thường có thể dẫn đến lỗi nghiêm trọng, thậm chí không gây ra 
lỗi cũng làm tốn tài nguyên không cần thiết.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public void pow(int a, int b) { 
  if(b == 0) { 
    return 0; 
  } 
  int x = a; 
  for(int i= 1, i < b, i++) { 
    x = x * a;  //giá trị này sau đó không dung ở đâu cả 
  } 
  return a; 
}
```

### Cách viết đúng (Compliant Code)
```java
public void pow(int a, int b) { 
  if(b == 0) { 
    return 0; 
  } 
  int x = a; 
  for(int i= 1, i < b, i++) { 
    x = x * a; 
  } 
  return x; 
}
```

---

## <a name="39-khi-kiểm-tra-điều-kiện-bằng-với-một-biến-string--chuỗi-strings-nên-được-đặt-ở"></a>39. Khi kiểm tra điều kiện bằng với một biến String,  chuỗi Strings nên được đặt ở

### Mô tả
bên trái của biểu thức so sánh equal 
Nên đặt chuỗi String ở vế bên trái củ a phương thức equals() hoặc equalsIgnoreCase(), 
như thế có thể ngăn các lỗi null pointer exceptions xảy ra do một chuỗi string sẽ luôn 
luôn là khác null.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
String myString = null; 
 
 
System.out.println("Equal? " + myString.equals("foo"));                        
// Lỗi null pointer exception 
System.out.println("Equal? " + (myString != null && 
myString.equals("foo")));  // cách viết rườm rà, phức tạp
```

### Cách viết đúng (Compliant Code)
```java
System.out.println("Equal?" + "foo".equals(myString)); // ngắn gọn, giải 
quyết được trường hợp null
```

---

## <a name="40-sử-dụng-concurrenthashmap-thay-cho-hashmap"></a>40. Sử dụng ConcurrentHashMap thay cho HashMap

### Mô tả
Từ Java5, ConcurrentHashMap được cài đặt, thiết kế đặc biệt hướng tới các ứng dụng 
xử lý song song, đa luồng. Nên sử dụng thay thế cho HashMap hoặc các class implement 
interace Map.

---


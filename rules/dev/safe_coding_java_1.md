# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - JAVA - PHẦN 1/4

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ Java, dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 1/4.

---

## MỤC LỤC - PHẦN 1/4

- [1. Không sử dụng "Double.longBitsToDouble" với tham số kiểu "int"](#1-không-sử-dụng-doublelongbitstodouble-với-tham-số-kiểu-int)
- [2. Không sử dụng "Lock" trong khối "synchronized](#2-không-sử-dụng-lock-trong-khối-synchronized)
- [3. Override hai phương thức "equals(Object obj)" và "hashCode()" cùng lúc](#3-override-hai-phương-thức-equalsobject-obj-và-hashcode-cùng-lúc)
- [4. Kiểm tra tham số đầu vào đối với phương thức "equals(Object obj)"](#4-kiểm-tra-tham-số-đầu-vào-đối-với-phương-thức-equalsobject-obj)
- [5. Không để "return" trong các khối "finally"](#5-không-để-return-trong-các-khối-finally)
- [6. Trong khối synchronized trên một đối tượng không thực hiện gán giá trị khác](#6-trong-khối-synchronized-trên-một-đối-tượng-không-thực-hiện-gán-giá-trị-khác)
- [7. Không gọi phương thức "wait(...)", "notify()", "notifyAll()"trong Thread](#7-không-gọi-phương-thức-wait-notify-notifyalltrong-thread)
- [8. Kiểm tra giá trị Null](#8-kiểm-tra-giá-trị-null)
- [9. Đóng tài nguyên sau khi sử dụng](#9-đóng-tài-nguyên-sau-khi-sử-dụng)
- [10. Điều kiện logic cần được đảm bảo để không truy cập đối tượng Null](#10-điều-kiện-logic-cần-được-đảm-bảo-để-không-truy-cập-đối-tượng-null)

---

## <a name="1-không-sử-dụng-doublelongbitstodouble-với-tham-số-kiểu-int"></a>1. Không sử dụng "Double.longBitsToDouble" với tham số kiểu "int"

### Mô tả
Double.longBitsToDouble yêu cầu đối số là kiểu long 64bit, vì vậy khi chuyển số nhỏ 
như int sang dạng double sẽ có thể gây ra lỗi do việc bố trí các bit không đúng.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
int i = 42; 
double d = Double.longBitsToDouble(i);  // không tuân thủ do i là kiểu int
```

### Cách viết đúng (Compliant Code)
```java
long i = 42; 
double d = Double.longBitsToDouble(i);
```

---

## <a name="2-không-sử-dụng-lock-trong-khối-synchronized"></a>2. Không sử dụng "Lock" trong khối "synchronized

### Mô tả
Java.util.concurrent.locks cung cấp các phương thức khóa mềm dẻo và mạnh hơn so 
với khối synchronized, sử dụng synchronize với đối tượng Lock sẽ làm mất ưu điểm này

### Ví dụ không tuân thủ (Non-compliant Code)
```java
Lock lock = new MyLockImpl(); 
synchronized(lock) {  // không synchronized với đối tượng kiểu Lock 
  //... 
}
```

### Cách viết đúng (Compliant Code)
```java
Lock lock = new MyLockImpl(); 
lock.tryLock(); 
//...
```

---

## <a name="3-override-hai-phương-thức-equalsobject-obj-và-hashcode-cùng-lúc"></a>3. Override hai phương thức "equals(Object obj)" và "hashCode()" cùng lúc

### Mô tả
Theo đặc tả ngôn ngữ Java, có ràng buộc giữa 2 phương thức equals(Object) và 
hashCode(): 
 Nếu 2 đối tượng bằng nhau theo phương thức equals(Object) thì khi gọi phương 
thức hashCode với mỗi đối tượng phải trả về cùng kết quả là số nguyên 
 Nếu 2 đối tượng không bằng nhau theo phương thức equals(Object) thì khi 
hashCode sẽ trả về các kết quả là các số nguyên riêng biệt 
Theo như ràng buộc này, thì 2 phương thức nên cùng được override khi sử dụng

### Ví dụ không tuân thủ (Non-compliant Code)
```java
class MyClass {    //chưa override "hashCode()" 
 
  @Override 
  public boolean equals(Object obj) { 
    /* ... */ 
  } 
 
}
```

### Cách viết đúng (Compliant Code)
```java
class MyClass {     
 
  @Override 
  public boolean equals(Object obj) { 
    /* ... */ 
  } 
 
  @Override 
  public int hashCode (Object obj) { 
    /* ... */ 
  } 
 
 
}
```

---

## <a name="4-kiểm-tra-tham-số-đầu-vào-đối-với-phương-thức-equalsobject-obj"></a>4. Kiểm tra tham số đầu vào đối với phương thức "equals(Object obj)"

### Mô tả
Phương thức “equals” sử dụng Object làm tham số đầu vào do vậy bất kỳ đối tượng 
nào đều có thể được truyền vào  để so sánh, không nên mặc định rằng chỉ đối tượng cùng 
kiểu được truyền vào mà cần kiểm tra để đảm bảo không có lỗi xảy ra.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public boolean equals(Object obj) { 
  MyClass mc = (MyClass)obj;  // đối tượng obj truyền vào có thể null hoặc 
thuộc kiểu đối tượng khác MyClass 
  // ... 
}
```

### Cách viết đúng (Compliant Code)
```java
public boolean equals(Object obj) { 
  if (obj == null) 
    return false; 
 
  if (this.getClass() != obj.getClass()) 
    return false; 
 
  MyClass mc = (MyClass)obj; 
  // ... 
}
```

---

## <a name="5-không-để-return-trong-các-khối-finally"></a>5. Không để "return" trong các khối "finally"

### Mô tả
Không được gọi return trong khối finally khi xử lý ngoại lệ, nếu không các ngoại lệ sẽ 
không được throw trong các khối khối try hoặc catch() nếu có

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public static void main(String[] args) { 
  try { 
    doSomethingWhichThrowsException(); 
    System.out.println("OK");   // message này vẫn được hiển thị mặc dù theo 
logic câu lệnh print không được thực hiện do phương thức trên throw exeption 
và chuyển tiếp vào trong khối catch 
  } catch (RuntimeException e) { 
    System.out.println("ERROR");  // message này sẽ không được hiển thị 
  } 
} 
 
public static void doSomethingWhichThrowsException() { 
  try { 
    throw new RuntimeException(); 
  } finally { 
    /* ... */ 
    return; // khai báo return ở đây sẽ làm cho throw trong khối try bên 
trên sẽ không được thực hiện 
  } 
}
```

### Cách viết đúng (Compliant Code)
```java
public static void main(String[] args) { 
  try { 
    doSomethingWhichThrowsException(); 
    System.out.println("OK"); 
  } catch (RuntimeException e) { 
    System.out.println("ERROR");  // "ERROR" is printed as expected 
  } 
} 
 
public static void doSomethingWhichThrowsException() { 
  try { 
    throw new RuntimeException(); 
  } finally { 
    /* ... */ 
  } 
}
```

---

## <a name="6-trong-khối-synchronized-trên-một-đối-tượng-không-thực-hiện-gán-giá-trị-khác"></a>6. Trong khối synchronized trên một đối tượng không thực hiện gán giá trị khác

### Mô tả
cho đối tượng đó. 
Việc synchronized  trên một đối tượng thực chất là synchoronized trên một thể hiện 
(object instance) được gán cho đối tượng. Gán giá trị khác cho đối tượng đó tro ng khối 
synchoronized sẽ làm cho khối này có thể được chạy bởi các thread khác.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
private String color = "red"; 
 
private void doSomething(){ 
  synchronized(color) {  // lock thực chất được thực hiện trên "red" được 
tham chiếu bởi biến color  
    //... 
    color = "green"; //lỗi, sau khi thực hiện phép gán các thread khác sẽ 
được phép chạy khối synchronized này 
    // ... 
  } 
}
```

### Cách viết đúng (Compliant Code)
```java
private String color = "red"; 
private Object lockObj = new Object(); 
 
private void doSomething(){ 
  synchronized(lockObj) { 
    //... 
    color = "green"; 
    // ... 
  } 
}
```

---

## <a name="7-không-gọi-phương-thức-wait-notify-notifyalltrong-thread"></a>7. Không gọi phương thức "wait(...)", "notify()", "notifyAll()"trong Thread

### Mô tả
Không gọi các phương thức này khi sử dụng Thread do JVM dựa vào các phương 
thức này để thay đổi trạng  thái của Thread (BLOCKED, WAITING,..), việc gọi chúng sẽ 
làm sai hành vi của JVM. 
Ví dụ code không tuân thủ 
Thread myThread = new Thread(new RunnableJob()); 
... 
myThread.wait(2000);

---

## <a name="8-kiểm-tra-giá-trị-null"></a>8. Kiểm tra giá trị Null

### Mô tả
Khi truy cập nội dung trong đối tượng NULL thì chư ơng trình sẽ xuất hiện lỗi 
NullPointerException, chương trình có thể gặp lỗi nghiệp vụ hoặc bị dừng giữa chừng, 
nặng hơn, hacker có thể lợi dụng để tấn công hệ thống. Cần thực hiện kiểm tra đối tượng 
khác Null trước khi truy cập. 
Chú ý chúng ta có thể sử d ụng annotations: @CheckForNull và @Nonnull để chỉ ra 
những giá trị Null hoặc không Null. 
@Nullable chỉ ra rằng trong một vài trường hợp có thể nhận giá trị Null. 
Ví dụ code không tuân thủ 
 
@CheckForNull 
String getName() {...} 
 
public boolean isNameEmpty() { 
  return getName().length() == 0; // Giá trị hàm getName() chưa được kiểm 
tra khác Null 
} 
 
Connection conn = null; 
Statement stmt = null; 
try { 
  conn = DriverManager.getConnection(DB_URL,USER,PASS); 
  stmt = conn.createStatement(); 
  // ... 
 
} catch(Exception e) { 
  e.printStackTrace(); 
} finally { 
  stmt.close(); // stmt chưa được kiểm tra khác Null 
  conn.close(); // conn chưa được kiểm tra khác Null 
} 
 
private void merge(@Nonnull Color firstColor, @Nonnull Color 
secondColor){...} 
 
public void append(@CheckForNull Color color) { 
    merge(currentColor, color); // color nên được kiểm tra khác Null vì hàm 
merge không chấp nhận giá trị Null 
} 
 
void paint(Color color) { 
  if(color == null) { 
    System.out.println("Unable to apply color " + color.toString()); // 
color chưa được kiểm tra khác Null 
    return; 
  } 
  ... 
}

---

## <a name="9-đóng-tài-nguyên-sau-khi-sử-dụng"></a>9. Đóng tài nguyên sau khi sử dụng

### Mô tả
Sau khi sử dụng cần thực hiện đóng để giải phóng tài nguyên cho các tiến trình khác 
sử dụng và giải phóng bộ nhớ.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
OutputStream stream = null; 
try{ 
  for (String property : propertyList) { 
    stream = new FileOutputStream("myfile.txt");//Mở nhiều stream 
    // ... 
  } 
}catch(Exception e){ 
  // ... 
 
}finally{ 
  stream.close();  //Nhiều stream được mở, nhưng chỉ cái cuối cùng được đóng 
}
```

### Cách viết đúng (Compliant Code)
```java
OutputStream stream = null; 
try{ 
  stream = new FileOutputStream("myfile.txt"); 
  for (String property : propertyList) { 
    // ... 
  } 
}catch(Exception e){ 
  // ... 
}finally{ 
  stream.close(); 
} 
 
//Java 7 giới thiệu một cách viết code giúp đóng tất cả các đối tượng trong 
câu lệnh try như sau: 
 
try (BufferedReader br = new BufferedReader(new FileReader(fileName))) { 
  //... 
} 
catch ( ... ) { 
  //... 
}
```

---

## <a name="10-điều-kiện-logic-cần-được-đảm-bảo-để-không-truy-cập-đối-tượng-null"></a>10. Điều kiện logic cần được đảm bảo để không truy cập đối tượng Null

### Mô tả
Khi viết điều kiện logic  ta cần chú ý điều kiện nào được thực hiện trước, điều kiện 
nào được thực hiện sau để đảm bảo không xảy ra trường hợp truy cập đối tượng Null

### Ví dụ không tuân thủ (Non-compliant Code)
```java
if (str == null && str.length() == 0) { 
  System.out.println("String is empty"); //cả 2 điều kiện str == null và 
str.length() == 0 đều được thực hiện, khi đó nếu str null thì str.length() 
sẽ gây ra lỗi 
} 
 
if (str != null || str.length() > 0) { 
  System.out.println("String is not empty"); 
}
```

### Cách viết đúng (Compliant Code)
```java
if (str == null || str.length() == 0) { 
  System.out.println("String is empty"); //nếu str là null thì điều kiện 
str.length() sẽ không được thực hiện và không gây ra lỗi 
} 
 
if (str != null && str.length() > 0) { 
  System.out.println("String is not empty"); 
}
```

---


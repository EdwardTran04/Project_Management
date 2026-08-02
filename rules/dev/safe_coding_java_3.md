# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - JAVA - PHẦN 3/4

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ Java, dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 3/4.

---

## MỤC LỤC - PHẦN 3/4

- [23. Giải phóng Lock](#23-giải-phóng-lock)
- [24. Không khai báo "public static"các trường có thể thay đổi](#24-không-khai-báo-public-staticcác-trường-có-thể-thay-đổi)
- [25. Không sử dụng "Math.abs" đối với giá trị có thể là "MIN_VALUE"](#25-không-sử-dụng-mathabs-đối-với-giá-trị-có-thể-là-min_value)
- [26. Không thực hiện write các lớp non-serializable](#26-không-thực-hiện-write-các-lớp-non-serializable)
- [27. Loại bỏ các điều kiện kiểm tra không bao giờ xảy ra trong if/else.](#27-loại-bỏ-các-điều-kiện-kiểm-tra-không-bao-giờ-xảy-ra-trong-ifelse)
- [28. Không nên bỏ qua giá trị trả lại của hàm.](#28-không-nên-bỏ-qua-giá-trị-trả-lại-của-hàm)
- [29. Không dùng các toán tử không phải dạng short-circuit trong các biểu thức điều](#29-không-dùng-các-toán-tử-không-phải-dạng-short-circuit-trong-các-biểu-thức-điều)
- [30. Kết thúc Switch cases bằng lệnh "break"](#30-kết-thúc-switch-cases-bằng-lệnh-break)
- [31. Không gọi trực tiếp Thread.run() và Runnable.run()](#31-không-gọi-trực-tiếp-threadrun-và-runnablerun)
- [32. Không gọi Throwable.printStackTrace(...).](#32-không-gọi-throwableprintstacktrace)
- [33. Khi xử lý exception cần bảo lưu exception ban đầu](#33-khi-xử-lý-exception-cần-bảo-lưu-exception-ban-đầu)

---

## <a name="23-giải-phóng-lock"></a>23. Giải phóng Lock

### Mô tả
Các logic trong một phương thức cần đảm bảo rằng Lock được giải phóng trong các 
phương thức gọi nó. Thất bại trong việc giải phóng Lock làm tăng nguy cơ DeadLock và 
có thể gây ra lỗi runtime.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public class MyClass { 
  Lock lock = new Lock(); 
 
  public void acquireLock() { 
    lock.lock();  // không tuân thủ, cần release ngay trong phương thức này. 
  } 
 
  public void releaseLock() { 
    lock.unlock(); 
  } 
 
  public void doTheThing() { 
    acquireLock(); 
    // do work... 
 
    releaseLock(); 
  } 
}
```

### Cách viết đúng (Compliant Code)
```java
public class MyClass { 
  Lock lock = new Lock(); 
 
  public void doTheThing() { 
    lock.lock(); 
    // do work... 
    lock.unlock(); 
  } 
 
}
```

---

## <a name="24-không-khai-báo-public-staticcác-trường-có-thể-thay-đổi"></a>24. Không khai báo "public static"các trường có thể thay đổi

### Mô tả
Đối với các trường có thể thay đổi không nên khai báo public static. Trường đó phải 
được chuyển vào class để giảm sự truy cập trực tiếp. Tránh nguy cơ lỗi khi nhiều tiến 
trình cùng thay đổi giá trị. 
Ví dụ code không tuân thủ 
public interface MyInterface { 
  public static String [] strings; // không tuân thủ 
} 
 
public class A { 
  public static String [] strings1 = {"first","second"};  // không tuân thủ 
  public static String [] strings2 = {"first","second"};  // không tuân thủ 
  public static List<String> strings3 = new ArrayList<>();  // không tuân 
thủ 
  // ... 
}

---

## <a name="25-không-sử-dụng-mathabs-đối-với-giá-trị-có-thể-là-min_value"></a>25. Không sử dụng "Math.abs" đối với giá trị có thể là "MIN_VALUE"

### Mô tả
Có khả năng hashCode trả về giá trị Integer.MIN_VALUE, trị tuyệt đối của giá trị  
này vẫn có thể là giá trị âm trong khi giá trị mong đợi là một số dương. Điều này dẫn đến 
kết quả bất thường, không tin cậy được.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public void doSomething(String str) { 
  if (Math.abs(str.hashCode()) > 0) { // không tuân thủ do str.hashCode() có 
thể là MIN_VALUE 
    // ... 
  } 
}
```

### Cách viết đúng (Compliant Code)
```java
public void doSomething(String str) { 
  if (str.hashCode() != 0) { 
    // ... 
  } 
}
```

---

## <a name="26-không-thực-hiện-write-các-lớp-non-serializable"></a>26. Không thực hiện write các lớp non-serializable

### Mô tả
Thực hiện thao tác này có thể dẫn đến exception.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public class Vegetable {  // không implement Serializable hoặc extends từ 
class cha có implement Serializable  
  //... 
} 
 
public class Menu { 
  public void meal() throws IOException { 
    Vegetable veg; 
    //... 
    FileOutputStream fout = new FileOutputStream(veg.getName()); 
    ObjectOutputStream oos = new ObjectOutputStream(fout); 
    oos.writeObject(veg);  // Không đúng, không có gì được ghi ra file 
  } 
}
```

### Cách viết đúng (Compliant Code)
```java
public class Vegetable implements Serializable {  // đối tượng này đã có thể 
được serialize 
  //... 
} 
 
public class Menu { 
  public void meal() throws IOException { 
    Vegetable veg; 
    //... 
    FileOutputStream fout = new FileOutputStream(veg.getName()); 
    ObjectOutputStream oos = new ObjectOutputStream(fout); 
    oos.writeObject(veg); 
  } 
}
```

---

## <a name="27-loại-bỏ-các-điều-kiện-kiểm-tra-không-bao-giờ-xảy-ra-trong-ifelse"></a>27. Loại bỏ các điều kiện kiểm tra không bao giờ xảy ra trong if/else.

### Mô tả
Câu lệnh if/else if/else được kiểm tra từ trên xuống dưới, vì vậy tối đa chỉ có 1 nhánh 
được thực hiện (khi điều kiện kiểm tra là true). Vì vậy, nếu điều kiệ n kiểm tra trùng nhau 
hoặc không bao giờ xảy ra sẽ làm cho code khó hiểu, mất thời gian kiểm tra khi chạy 
chương trình.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
if (param == 1)   // Kiểm tra lần 1 
 
  openWindow(); 
else if (param == 2) 
  closeWindow(); 
else if (param == 1)  // Không bao giờ chạy đến đây hoặc luôn luôn có giá 
trị là false 
  moveWindowToTheBackground(); 
else if (param == 1 && param == 2)  // Không bao giờ chạy đến đây hoặc luôn 
luôn có giá trị là fale 
  doSomethings(); 
}
```

### Cách viết đúng (Compliant Code)
```java
if (param == 1) 
  openWindow(); 
else if (param == 2) 
  closeWindow(); 
else if (param == 3) 
  moveWindowToTheBackground(); 
}
```

---

## <a name="28-không-nên-bỏ-qua-giá-trị-trả-lại-của-hàm"></a>28. Không nên bỏ qua giá trị trả lại của hàm.

### Mô tả
Kiểm tra các đoạn mã không ảnh hưởng đến toàn bộ chương trình. Nếu thừa thì tiến 
hành loại bỏ.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
public void handle(String command){ 
  command.toLowerCase(); // Noncompliant; result of method thrown away 
// ...
}
```

### Cách viết đúng (Compliant Code)
```java
public void handle(String command){ 
  String formattedCommand = command.toLowerCase(); 
// ...
}
```

---

## <a name="29-không-dùng-các-toán-tử-không-phải-dạng-short-circuit-trong-các-biểu-thức-điều"></a>29. Không dùng các toán tử không phải dạng short-circuit trong các biểu thức điều

### Mô tả
kiện (condition) 
Việc sử dụng phép toán logic không phải dạng short -circuit (||, &&) trong biểu thức 
điều kiện có thể gây ra lỗi nghiêm trọng trong chương trình.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
if(getTrue() | getFalse()) { ... } // cả 2 điều kiện đều được đánh giá
```

### Cách viết đúng (Compliant Code)
```java
if(getTrue() || getFalse()) { ... }
```

---

## <a name="30-kết-thúc-switch-cases-bằng-lệnh-break"></a>30. Kết thúc Switch cases bằng lệnh "break"

### Mô tả
Kết thúc một case nếu không break thì case tiếp theo sẽ được tiếp tục thực hiện, vì 
vậy có thể gây ra lỗi không kiểm soát được

### Ví dụ không tuân thủ (Non-compliant Code)
```java
switch (myVariable) { 
  case 1:                               
    foo(); 
    break; 
  case 2:  // 'doSomething()' và 'doSomethingElse()' đều sẽ được thực hiện, 
đây là chủ ý hay do lỗi typing? 
    doSomething(); 
  default:                                
    doSomethingElse(); 
    break; 
}
```

### Cách viết đúng (Compliant Code)
```java
switch (myVariable) { 
  case 1:                               
    foo(); 
    break; 
  case 2:  
    doSomething(); 
    break; 
  default:                                
    doSomethingElse(); 
    break; 
} 
 
//
```

### Ngoại lệ
Luật này có thể không áp dụng trong trường hợp sau: 
 
switch (myVariable) { 
  case 0:                                // case rỗng, được sử dụng để đại 
diện cho một nhóm các case có chung hành vi 
  case 1:                                
    doSomething(); 
    break; 
  case 2:                                // sử dụng return 
    return; 
  case 3:                                // sử dụng return 
    throw new IllegalStateException(); 
  default:                               // đối với case cuối cùng, không 
bắt buộc phải có break  
    doSomethingElse(); 
}

---

## <a name="31-không-gọi-trực-tiếp-threadrun-và-runnablerun"></a>31. Không gọi trực tiếp Thread.run() và Runnable.run()

### Mô tả
Việc gọi các phương thức này một cách trực tiếp sẽ không có ý nghĩa vì nó sẽ được 
thực hiện ngay trên thread hiện tại. Sử dụng phương thức Thread.start() để thay thế

### Ví dụ không tuân thủ (Non-compliant Code)
```java
Thread myThread = new Thread(runnable); 
myThread.run(); // Noncompliant
```

### Cách viết đúng (Compliant Code)
```java
Thread myThread = new Thread(runnable); 
myThread.start(); // Compliant
```

---

## <a name="32-không-gọi-throwableprintstacktrace"></a>32. Không gọi Throwable.printStackTrace(...).

### Mô tả
Không nên sử dụng Throwable.printStackTrace(...) để in log ra màn hình (chỉ sử dụng 
trong trường hợp debug). Thay vào đó nên sử dụng các thư viên ghi log tiện lợi hơn để 
tận dụng các ưu điểm: 
- Có thể dễ dàng lấy lại logs 
- Định dạng các thông báo log thống nhất.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
try { 
  /* ... */ 
} catch(Exception e) { 
  e.printStackTrace();        //Không tuân thủ luật 
}
```

### Cách viết đúng (Compliant Code)
```java
try { 
  /* ... */ 
} catch(Exception e) { 
  LOGGER.log("context", e);   // tuân thủ luật 
}
```

---

## <a name="33-khi-xử-lý-exception-cần-bảo-lưu-exception-ban-đầu"></a>33. Khi xử lý exception cần bảo lưu exception ban đầu

### Mô tả
Khi xử lý một exception bắt được, messange và stack trace của exception gốc cần 
được ghi log và forward.

### Ví dụ không tuân thủ (Non-compliant Code)
```java
try { /* ... */ } catch (Exception e) { LOGGER.info("context"); }    
//exception không được bảo lưu 
     
try { /* ... */ } catch (Exception e) { LOGGER.info(e.getMessage()); }   
//exception không được bảo lưu (only chỉ bảo lưu được message)  
 
try { /* ... */ } catch (Exception e) { throw new 
RuntimeException("context"); } //exception không được bảo lưu
```

### Cách viết đúng (Compliant Code)
```java
try { /* ... */ } catch (Exception e) { LOGGER.info(e); }    
 
try { /* ... */ } catch (Exception e) { throw new RuntimeException(e); } 
 
try { 
  /* ... */ 
} catch (RuntimeException e) { 
  doSomething(); 
  throw e; 
} catch (Exception e) { 
    throw new RuntimeException(e);// được phép convert exception 
} 
 
//
```

### Ngoại lệ
Ngoại lệ 
 
InterruptedException, NumberFormatException, ParseException và 
MalformedURLException  
 
int myInteger; 
try { 
  myInteger = Integer.parseInt(myString); 
} catch (NumberFormatException e) { 
  // hoàn toàn có thể chấp nhận đượchi k không xửl ý "e" ở chỗ này  
  myInteger = 0; 
}

---


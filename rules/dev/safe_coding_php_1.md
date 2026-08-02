# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - PHP - PHẦN 1/2

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ PHP, dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 1/2.

---

## MỤC LỤC - PHẦN 1/2

- [1. Không sử dụng $this trong ngữ cảnh static](#1-không-sử-dụng-this-trong-ngữ-cảnh-static)
- [2. Không sử dụng câu lệnh exit(...), die(...)](#2-không-sử-dụng-câu-lệnh-exit-die)
- [3. Không định nghĩa Functions, Variables bên ngoài Class](#3-không-định-nghĩa-functions-variables-bên-ngoài-class)
- [4. Không sử dụng biến dạng Variable variables](#4-không-sử-dụng-biến-dạng-variable-variables)
- [5. Không hard-coded username/password](#5-không-hard-coded-usernamepassword)
- [6. Không sử dụng "global"](#6-không-sử-dụng-global)
- [7. Không thực thi code động](#7-không-thực-thi-code-động)
- [8. Không sử dụng cùng một toán tử trên 2 vế của một biểu thức nhị phân](#8-không-sử-dụng-cùng-một-toán-tử-trên-2-vế-của-một-biểu-thức-nhị-phân)
- [9. Không khai báo các câu lệnh khác sau Jump](#9-không-khai-báo-các-câu-lệnh-khác-sau-jump)
- [10. Không tạo ra các đối tượng dư thừa](#10-không-tạo-ra-các-đối-tượng-dư-thừa)
- [11. Không sử dụng các điều kiện lặp lại trong cùng một biểu thức "if/else if" và](#11-không-sử-dụng-các-điều-kiện-lặp-lại-trong-cùng-một-biểu-thức-ifelse-if-và)
- [12. Điều kiện logic cần được đảm bảo để không truy cập đối tượng Null.](#12-điều-kiện-logic-cần-được-đảm-bảo-để-không-truy-cập-đối-tượng-null)

---

## <a name="1-không-sử-dụng-this-trong-ngữ-cảnh-static"></a>1. Không sử dụng $this trong ngữ cảnh static

### Mô tả
$this tham chiếu đến thực thể hiện tại của cla ss, tuy nhiên phương thức static có thể 
được thực hiện mà không cần khởi tạo class, do đó sử dụng $this trong ngữ cảnh static có 
thể dẫn đến lỗi trong quá trình chạy (runtime error).

### Ví dụ không tuân thủ (Non-compliant Code)
```php
class Clazz { 
  $name=NULL;  // instance variable 
 
  public static function foo(){ 
    if ($this->name != NULL) { 
      // ... 
    } 
  } 
}
```

### Cách viết đúng (Compliant Code)
```php
class Clazz { 
  $name=NULL;  // instance variable 
 
  public static function foo($nameParam){ 
    if ($nameParam != NULL) { 
      // ... 
    } 
  } 
}
```

---

## <a name="2-không-sử-dụng-câu-lệnh-exit-die"></a>2. Không sử dụng câu lệnh exit(...), die(...)

### Mô tả
Không sử dụng câu lệnh exit(...), die(...) trong các web page PHP vì việc này sẽ gây ra 
trải nghiệm không tốt cho người dùng.  Người dùng thậm chí có thể nghỉ rằng web site 
đang bị gián đoạn hoặc có lỗi nghiêm trọng.

### Ví dụ không tuân thủ (Non-compliant Code)
```php
class Foo { 
    public function bar($param)  { 
        if ($param === 42) { 
            exit(23); 
        } 
    } 
}
```

### Cách viết đúng (Compliant Code)
```php
class Foo { 
    public function bar($param)  { 
        if ($param === 42) { 
            throw new Exception('Value 42 is not expected.'); 
        } 
    } 
} 
//...
```

---

## <a name="3-không-định-nghĩa-functions-variables-bên-ngoài-class"></a>3. Không định nghĩa Functions, Variables bên ngoài Class

### Mô tả
Định nghĩa Function, Variable global có thể gây ra các rủi ro sau: 
- Xung đột tên giữa các đối tượng 
- Rất khó để kiểm thử class trong đó có dùng  global functions 
- Biến global có thể bị cập nhật từ bất kỳ đâu và do đó có thể có giá trị bất thường 
không như mong muốn 
Để xử lý có thể chuyển các Function, Variable vào trong một Class nào đó và chuyển 
thành static, khi đó có thể sử dụng mà không cần khởi tạo Class

### Ví dụ không tuân thủ (Non-compliant Code)
```php
<?php 
 
$name = "Bob"; // Noncompliant 
 
function doSomething($arg) {   // Noncompliant 
  //... 
} 
 
class MyClass { 
    //... 
}
```

### Cách viết đúng (Compliant Code)
```php
<?php 
class MyClass { 
 
  public static function doSomething($arg) {              // Compliant 
    //... 
  } 
  //... 
}
```

---

## <a name="4-không-sử-dụng-biến-dạng-variable-variables"></a>4. Không sử dụng biến dạng Variable variables

### Mô tả
Cách thức sử dụng biến có tên động làm code khó hiểu, khó bảo trì. 
Ví dụ code không tuân thủ 
 
$var = 'foo'; 
$$var = 'bar';      //Noncompliant 
$$$var = 'hello';  //Noncompliant 
 
echo $foo; //will display 'bar' 
echo $bar; //will display 'hello'

---

## <a name="5-không-hard-coded-usernamepassword"></a>5. Không hard-coded username/password

### Mô tả
String có thể được trích xuất một cách dễ dàng bằng cách dịch ngược chương trình do 
đó không được hard-coded các thông tin xác thực như username/password.  
Thông tin xác thực cần được lưu trữ trong các file cấu hình đã mã hóa hoặc trong cơ 
sở dữ liệu.

### Ví dụ không tuân thủ (Non-compliant Code)
```php
$uname = "steve"; 
$password = "blue"; 
connect($uname, $password);
```

### Cách viết đúng (Compliant Code)
```php
$uname = getEncryptedUser(); 
$password = getEncryptedPass(); 
connect($uname, $password);
```

---

## <a name="6-không-sử-dụng-global"></a>6. Không sử dụng "global"

### Mô tả
Sử dụng biến global là thói quen không tốt, làm giảm tính tái sử dụng cũng như gây 
khó khăn cho công tác bảo trì. Biến nên được truyền dạng tham số vào các hàm.

### Ví dụ không tuân thủ (Non-compliant Code)
```php
$myGlobalVariable; 
 
function foo() 
{ 
  global $myGlobalVariable; // Noncompliant 
  $GLOBALS['myGlobalVariable']; // Noncompliant 
  // ... 
}
```

### Cách viết đúng (Compliant Code)
```php
function foo($myStateVariable) 
{ 
  // ... 
}
```

---

## <a name="7-không-thực-thi-code-động"></a>7. Không thực thi code động

### Mô tả
Hàm eval là cá ch để thực thi một đoạn code bất kì trong lúc chương trình đang hoạt 
động mà không cần biên dịch. Theo tài liệu chính thức của PHP thì  việc thực hiện eval() 
rất nguy hiểm và dễ gây ra lỗi bất thường. 
Ví dụ code không tuân thủ 
eval($code_to_be_dynamically_executed)

---

## <a name="8-không-sử-dụng-cùng-một-toán-tử-trên-2-vế-của-một-biểu-thức-nhị-phân"></a>8. Không sử dụng cùng một toán tử trên 2 vế của một biểu thức nhị phân

### Mô tả
Xảy ra trường hợp này thường là do nhầm lẫn (copy/paste) hoặc đơn giản là code thừa 
Rule này không áp dụng với các toán tử *, +, =. 
Ví dụ code không tuân thủ 
if ( $a == $a ) { // always true 
  doZ(); 
} 
if ( $a != $a ) { // always false 
  doY(); 
} 
if ( $a == $b && $a == $b ) { // if the first one is true, the second one is 
too 
  doX(); 
} 
if ( $a == $b || $a == $b ) { // if the first one is true, the second one is 
too 
  doW(); 
} 
 
$j = 5 / 5; //always 1 
$k = 5 - 5; //always 0 
Ngoại lệ 
Left-shifting 1 onto 1 is common in the construction of bit masks, and is 
ignored. 
 
$i = 1 << 1; // Compliant 
$j = $a << $a; // Noncompliant

---

## <a name="9-không-khai-báo-các-câu-lệnh-khác-sau-jump"></a>9. Không khai báo các câu lệnh khác sau Jump

### Mô tả
Các câu lệnh jump như return, break, continue, goto, throw sẽ làm luồng thực thi của 
khối code hiện tại bị gián đoạn, các câu lệnh sau đó trong khối sẽ bị thừa và không được 
thực thi. Trong một vài trường hợp hi hữu đoạn code sau đó vẫn được thực thi nhưng sẽ 
rất khó hiểu và dễ gây nhầm lẫn khi cần bảo trì.

### Ví dụ không tuân thủ (Non-compliant Code)
```php
function fun($a) { 
  $i = 10; 
  return $i + $a; 
  $i++;             // this is never executed 
} 
 
function foo($a) { 
  if ($a == 5) { 
    goto error; 
  } else { 
    // do the job 
  } 
  return; 
 
  error: 
    printf("don't use 5"); // this is reachable but unreadable 
 
}
```

### Cách viết đúng (Compliant Code)
```php
function fun($a) { 
  $i = 10; 
  return $i + $a; 
} 
 
function foo($a) { 
  if ($a == 5) { 
    handleError(); 
  } else { 
    // do the job 
  } 
  return; 
}
```

---

## <a name="10-không-tạo-ra-các-đối-tượng-dư-thừa"></a>10. Không tạo ra các đối tượng dư thừa

### Mô tả
Không có lý do chính đáng cho việc tạo ra đối tượng mà không sử dụng, trong hầu hết 
các trường hợp đây có thể là dấu hiệu của việc xóa code do nhầm lẫn. T hậm chí nếu 
không phải do nhầm lẫn thì không gây ra lỗi cũng làm tốn tài nguyên không cần thiết.

### Ví dụ không tuân thủ (Non-compliant Code)
```php
if ($x < 0) { 
  new foo;  // Noncompliant 
} 
Compliant Solution 
 
$var = NULL; 
if ($x < 0) { 
  $var = new foo; 
}
```

### Cách viết đúng (Compliant Code)
```php
$var = NULL; 
if ($x < 0) { 
  $var = new foo; 
}
```

---

## <a name="11-không-sử-dụng-các-điều-kiện-lặp-lại-trong-cùng-một-biểu-thức-ifelse-if-và"></a>11. Không sử dụng các điều kiện lặp lại trong cùng một biểu thức "if/else if" và

### Mô tả
"cases" 
Biểu thức switch hoặc chuỗi các điều kiện if/else if được kiểm tra từ trên xuống và chỉ 
nhánh đầu tiên thỏa mãn điều kiện true sẽ dược thực thi. 
Lặp biểu thức điều kiện sẽ dẫn đến một số đoạn mã nguồn không bao g iờ được thực 
thi. Đây thường là lỗi do copy/paste và rất dễ gây nhầm lẫn cho công tác bảo trì, vd: 
- Khi bảo trì, có thể sẽ cập nhật nhầm vào đoạn code thừa (đoạn code bị duplicate 
và không bao giờ được thực hiện) thay vì cập nhật vào đoạn code cần sửa 
- Trong trường hợp biểu thức swith có case bị lặp, nếu case đầu tiên không kết thúc 
bởi break thì case lặp có thể lại tiếp tục được thực thi và gây ra các hành vi bất 
thường.

### Ví dụ không tuân thủ (Non-compliant Code)
```php
if ($param == 1) 
  openWindow(); 
else if ($param == 2) 
  closeWindow(); 
else if ($param == 1)  // Noncompliant 
  moveWindowToTheBackground(); 
 
 
switch($i) { 
  case 1: 
    //... 
    break; 
  case 3: 
    //... 
    break; 
  case 1:  // Noncompliant 
    //... 
    break; 
  default: 
    // ... 
    break; 
}
```

### Cách viết đúng (Compliant Code)
```php
if ($param == 1) 
  openWindow(); 
else if ($param == 2) 
  closeWindow(); 
 
else if ($param == 3) 
  moveWindowToTheBackground(); 
 
switch($i) { 
  case 1: 
    //... 
    break; 
  case 3: 
    //... 
    break; 
  default: 
    // ... 
    break; 
}
```

---

## <a name="12-điều-kiện-logic-cần-được-đảm-bảo-để-không-truy-cập-đối-tượng-null"></a>12. Điều kiện logic cần được đảm bảo để không truy cập đối tượng Null.

### Mô tả
Khi viết điều kiện logic ta cần chú ý điều kiện nào được thực hiện trước, điều kiện 
nào được thực hiện sau để đảm bảo không xảy ra trường hợp truy cập đối tượng Null

### Ví dụ không tuân thủ (Non-compliant Code)
```php
if ($obj == null && $obj->isOpen()) { 
  echo "Object is open"; 
} 
 
if ($obj != null || $obj->isOpen()) { 
  echo "Object is not open"; 
}
```

### Cách viết đúng (Compliant Code)
```php
if ($obj == null || $obj->isOpen()) { 
  echo "Object is open"; 
} 
 
if ($obj != null && !$obj->isOpen()) { 
  echo "Object is not open"; 
}
```

---


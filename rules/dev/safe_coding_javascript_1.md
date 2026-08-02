# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - JAVASCRIPT & HTML - PHẦN 1/2

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ JavaScript & HTML, dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 1/2.

---

## MỤC LỤC - PHẦN 1/2

- [1. Không dùng "NaN" trong phép toán so sánh](#1-không-dùng-nan-trong-phép-toán-so-sánh)
- [2. Sử dụng phép toán logic (short-circuit) để tránh lỗi truy cập vào vùng nhớ null](#2-sử-dụng-phép-toán-logic-short-circuit-để-tránh-lỗi-truy-cập-vào-vùng-nhớ-null)
- [3. Không sử dụng toán tử "delete" với kiểu Array](#3-không-sử-dụng-toán-tử-delete-với-kiểu-array)
- [4. Không thao tác dữ liệu với các biến "eval" và "arguments".](#4-không-thao-tác-dữ-liệu-với-các-biến-eval-và-arguments)
- [5. Biến tăng trong vòng "for" phải là biến trong điều kiện dừng vòng lặp](#5-biến-tăng-trong-vòng-for-phải-là-biến-trong-điều-kiện-dừng-vòng-lặp)
- [6. Kiểm soát khi truyền thông điệp qua văn bản](#6-kiểm-soát-khi-truyền-thông-điệp-qua-văn-bản)
- [7. Xóa bỏ lệnh "debugger" trước khi triển khai](#7-xóa-bỏ-lệnh-debugger-trước-khi-triển-khai)
- [8. Không sử dụng các biểu thức hiển nhiên luôn đúng hoặc luôn sai](#8-không-sử-dụng-các-biểu-thức-hiển-nhiên-luôn-đúng-hoặc-luôn-sai)
- [9. Không sử dụng trùng tên thuộc tính khi khai báo một đối tượng](#9-không-sử-dụng-trùng-tên-thuộc-tính-khi-khai-báo-một-đối-tượng)
- [10. Điều kiện trong các khối lệnh "if/else if" hoặc "switch…case" không trùng nhau.](#10-điều-kiện-trong-các-khối-lệnh-ifelse-if-hoặc-switchcase-không-trùng-nhau)

---

## <a name="1-không-dùng-nan-trong-phép-toán-so-sánh"></a>1. Không dùng "NaN" trong phép toán so sánh

### Mô tả
Giá trị NaN không bằng bất kỳ giá trị nào khác ngay  cả chính nó. Thay vào đó nên sử 
dụng hàm isNaN() để so sánh giá trị của một biến có phải là kiểu số hay không. 
- isNaN(a) = false => a là kiểu số 
- isNaN(a) = true => a không phải kiểu số 
 
isNaN(123) //false 
isNaN(-1.23) //false 
isNaN(5-2) //false 
isNaN(0) //false 
isNaN('123') //false 
isNaN('Hello') //true 
isNaN('2005/12/12') //true 
isNaN('') //false 
isNaN(true) //false 
isNaN(undefined) //true 
isNaN('NaN') //true 
isNaN(NaN) //true 
isNaN(0 / 0) //true

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
var a = NaN; 
 
if (a === NaN) {  // luôn trả về false 
  console.log("a is not a number");   
} 
if (a !== NaN) { // luôn trả về true 
  console.log("a is not NaN"); 
}
```

### Cách viết đúng (Compliant Code)
```javascript
if ( isNaN(a) ) { 
  console.log("a is not a number"); 
} else { 
  console.log("a is not NaN"); 
}
```

---

## <a name="2-sử-dụng-phép-toán-logic-short-circuit-để-tránh-lỗi-truy-cập-vào-vùng-nhớ-null"></a>2. Sử dụng phép toán logic (short-circuit) để tránh lỗi truy cập vào vùng nhớ null

### Mô tả
trong các điều kiện so sánh. 
Khi một điều kiện kiểm tra kết quả null, nếu kiểm tra tiếp các điều kiện còn lại có thể 
dẫn đến lỗi TypeError.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
if (str == null && str.length == 0) { 
  console.log("String is empty"); 
} 
 
if (str == undefined && str.length == 0) { 
  console.log("String is empty"); 
} 
 
if (str != null || str.length > 0) { 
  console.log("String is not empty"); 
} 
 
if (str != undefined || str.length > 0) { 
  console.log("String is not empty"); 
}
```

### Cách viết đúng (Compliant Code)
```javascript
if (str != null && str.length == 0) { 
  console.log("String is empty"); 
} 
 
if (str != undefined && str.length == 0) { 
  console.log("String is empty"); 
} 
 
if (str == null || str.length > 0) { 
  console.log("String is not empty"); 
} 
 
if (str == undefined || str.length > 0) { 
  console.log("String is not empty"); 
}
```

---

## <a name="3-không-sử-dụng-toán-tử-delete-với-kiểu-array"></a>3. Không sử dụng toán tử "delete" với kiểu Array

### Mô tả
Toán tử delete được sử dụng để xóa một thuộc tính khỏi đối tượng. Trường hợp đối 
tượng là kiểu Array, toán tử delete cũng được sử dụng tương tự, nhưng nếu dùng toán tử 
này thì chỉ số của các phần tử phía sau phần tử bị xóa không nhảy lên chỉ số của vị trí 
phía trước. 
Để xóa một phần tử trong mảng và các phần tử phía sau dồn lên phía trước lấp v ào vị 
trí phần tử bị xóa thì nên dùng các hàm sau: 
    Array.prototype.splice - thêm/xóa phần tử trong mảng 
    Array.prototype.pop - thêm/xóa phần tử phía cuối của mảng 
    Array.prototype.shift - thêm/xóa phần tử phía đầu của mảng

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
var myArray = ['a', 'b', 'c', 'd']; 
 
 
delete myArray[2];  // Kết quả mảng: myArray => ['a', 'b', undefined, 'd'] 
console.log(myArray[2]); // Kết quả in ra: undefined
```

### Cách viết đúng (Compliant Code)
```javascript
var myArray = ['a', 'b', 'c', 'd']; 
 
// Xóa phần tử ở vị trí chỉ số = 2 
removed = myArray.splice(2, 1);  // Kết quả mảng: myArray => ['a', 'b', 'd'] 
console.log(myArray[2]); // Kết quả in ra:  'd'
```

---

## <a name="4-không-thao-tác-dữ-liệu-với-các-biến-eval-và-arguments"></a>4. Không thao tác dữ liệu với các biến "eval" và "arguments".

### Mô tả
Trong Javascript, hàm eval() được sử dụng để tính toán các giá trị. Ar guments được 
sử dụng để truy cập các tham số thông qua chỉ số index. Việc thao tác dữ liệu với các đối 
tượng này có thể dẫn đến phát sinh lỗi ngoài mong muốn,.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
eval = 17; // Noncompliant 
arguments++; // Noncompliant 
++eval; // Noncompliant 
var obj = { set p(arguments) { } }; // Noncompliant 
var eval; // Noncompliant 
try { } catch (arguments) { } // Noncompliant 
function x(eval) { } // Noncompliant 
function arguments() { } // Noncompliant 
var y = function eval() { }; // Noncompliant 
var f = new Function("arguments", "return 17;"); // Noncompliant 
 
function fun() { 
  if (arguments.length == 0) { // Compliant 
    // do something 
  } 
}
```

### Cách viết đúng (Compliant Code)
```javascript
result = 17; 
args++; 
++result; 
var obj = { set p(arg) { } }; 
var result; 
try { } catch (args) { } 
function x(arg) { } 
function args() { }  
var y = function fun() { };  
var f = new Function("args", "return 17;"); 
 
function fun() { 
  if (arguments.length == 0) { 
    // do something 
  } 
 
}
```

---

## <a name="5-biến-tăng-trong-vòng-for-phải-là-biến-trong-điều-kiện-dừng-vòng-lặp"></a>5. Biến tăng trong vòng "for" phải là biến trong điều kiện dừng vòng lặp

### Mô tả
Khi biến tăng và biến điều kiện dừng vòng lặp for không giống nhau thì thường là lỗi 
có thể dẫn đến vòng lặp không bao giờ kết thúc và nếu như không gây lỗi thì cũng rất khó 
cho việc bảo trì về sau.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
for (i = 0; i < 10; j++) {  // Noncompliant 
  // ... 
}
```

### Cách viết đúng (Compliant Code)
```javascript
for (i = 0; i < 10; i++) { 
  // ... 
}
```

---

## <a name="6-kiểm-soát-khi-truyền-thông-điệp-qua-văn-bản"></a>6. Kiểm soát khi truyền thông điệp qua văn bản

### Mô tả
HTML5 cho phép gửi thông điệp từ một trang HTML tới một trang HTML ở một địa 
chỉ domain khác. Để tránh nguy cơ lộ thông tin nhạy cảm khi gửi tới một domain không 
an toàn thì dữ liệu khi gửi đi trong hàm postMessage() cần được kiểm duyệt trước khi 
gửi. 
Ví dụ code không tuân thủ 
var myWindow = document.getElementById('myIFrame').contentWindow; 
myWindow.postMessage(message, "*"); // Dữ liệu trong 'myIFrame' trước khi 
gửi đi có thể chứa thông tin nhạy cảm?

---

## <a name="7-xóa-bỏ-lệnh-debugger-trước-khi-triển-khai"></a>7. Xóa bỏ lệnh "debugger" trước khi triển khai

### Mô tả
"debugger" là lệnh do lập trình viên sử dụng để tìm lỗi trong quá trình phát triển ứng 
dụng. Sau khi đóng gói sản phẩm trong giai đoạn triển khai tất cả câu lệnh 'debugger" cần 
được xóa khỏi source code.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
for (i = 1; i<5; i++) { 
  Debug.write("loop index is " + i); 
  debugger; 
}
```

### Cách viết đúng (Compliant Code)
```javascript
for (i = 1; i<5; i++) { 
  Debug.write("loop index is " + i); 
}
```

---

## <a name="8-không-sử-dụng-các-biểu-thức-hiển-nhiên-luôn-đúng-hoặc-luôn-sai"></a>8. Không sử dụng các biểu thức hiển nhiên luôn đúng hoặc luôn sai

### Mô tả
Xảy ra trường hợp này thường là do nhầm lẫn (copy/paste) hoặc đơn giản là code 
thừa, gây khó khăn cho việc bảo trì.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
if ( a == a ) { // luôn đúng 
  doZ(); 
} 
if ( a != a ) { // luôn sai 
  doY(); 
} 
if ( a == b && a == b ) { 
  doX(); 
} 
if ( a == b || a == b ) {  
  doW(); 
} 
 
var j = 5 / 5; //luôn = 1 
var k = 5 - 5; //luôn = 0
```

### Cách viết đúng (Compliant Code)
```javascript
doZ(); 
 
if ( a == b ) { 
  doX(); 
} 
if ( a == b ) { 
  doW(); 
} 
 
var j = 1; 
var k = 0;
```

---

## <a name="9-không-sử-dụng-trùng-tên-thuộc-tính-khi-khai-báo-một-đối-tượng"></a>9. Không sử dụng trùng tên thuộc tính khi khai báo một đối tượng

### Mô tả
Javascript chấp nhận khai báo trùng thuộc tính nhưng khi xuất hiện nhiều thuộc tính 
có tên trùng nhau thì Javascript sẽ chỉ cập nhật giá trị thuộc tính khai báo sau cùng và bỏ 
qua thuộc tính trùng đã khai báo trước đó

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
var data = { 
  "key": "value", 
  "1": "value", 
  "key": "value", // Noncompliant - duplicate of "key" 
  'key': "value", // Noncompliant - duplicate of "key" 
  key: "value", // Noncompliant - duplicate of "key" 
  \u006bey: "value", // Noncompliant - duplicate of "key" 
  "\u006bey": "value", // Noncompliant - duplicate of "key" 
 
  "\x6bey": "value", // Noncompliant - duplicate of "key" 
  1: "value" // Noncompliant - duplicate of "1" 
}
```

### Cách viết đúng (Compliant Code)
```javascript
var data = { 
  "key": "value", 
  "1": "value", 
  "key2": "value", 
  'key3': "value", 
  key4: "value", 
  \u006bey5: "value", 
  "\u006bey6": "value", 
  "\x6bey7": "value", 
  1b: "value" 
}
```

---

## <a name="10-điều-kiện-trong-các-khối-lệnh-ifelse-if-hoặc-switchcase-không-trùng-nhau"></a>10. Điều kiện trong các khối lệnh "if/else if" hoặc "switch…case" không trùng nhau.

### Mô tả
Trong các khối lệnh "if/else if" hoặc "switch…case" , chỉ một nhánh đầu tiên có điều 
kiện đúng được thực hiện. Do đó việc lặp lại một điều kiện  (thường do nhầm lẫn khi 
copy/paste) có thể gây ra các lỗi nghiêm trọng mà chúng ta không lường trước được.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
if (param == 1) 
  openWindow(); 
else if (param == 2) 
  closeWindow(); 
else if (param == 1)  // Đã có điều kiện này 
  moveWindowToTheBackground(); 
 
switch(i) { 
  case 1: 
    //... 
    break; 
  case 3: 
    //... 
    break; 
  case 1:  // Đã có case này 
    //... 
    break; 
  default: 
    // ... 
    break; 
}
```

### Cách viết đúng (Compliant Code)
```javascript
if (param == 1) 
  openWindow(); 
else if (param == 2) 
  closeWindow(); 
 
else if (param == 3) 
  moveWindowToTheBackground(); 
 
switch(i) { 
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


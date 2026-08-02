# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - JAVASCRIPT & HTML - PHẦN 2/2

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ JavaScript & HTML, dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 2/2.

---

## MỤC LỤC - PHẦN 2/2

- [11. Sử dụng thuộc tính "length" để xác định các DOM elements](#11-sử-dụng-thuộc-tính-length-để-xác-định-các-dom-elements)
- [12. Không sử dụng biến "this" toàn cục](#12-không-sử-dụng-biến-this-toàn-cục)
- [13. Tên các thuộc tính model không có dấu cách " "](#13-tên-các-thuộc-tính-model-không-có-dấu-cách--)
- [14. Toán tử "+" và "-" không sử dụng với Object](#14-toán-tử--và---không-sử-dụng-với-object)
- [15. Trong thẻ input "password" đặt thuộc tính "autocomplete" là "off"](#15-trong-thẻ-input-password-đặt-thuộc-tính-autocomplete-là-off)

---

## <a name="11-sử-dụng-thuộc-tính-length-để-xác-định-các-dom-elements"></a>11. Sử dụng thuộc tính "length" để xác định các DOM elements

### Mô tả
Khi thực hiện tìm kiếm một đối tượng nên sử dụng thuộc tính length để xác định có 
tìm thấy đối tượng hay không.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
if ( $( "div.foo" ) ) {  // Luôn luôn trả về true mặc dù không tìm thấy đối 
tượng nào 
}
```

### Cách viết đúng (Compliant Code)
```javascript
// Testing whether a selection contains elements. 
if ( $( "div.foo" ).length > 0) { 
  // this code only runs if elements were found 
  //  ... 
}
```

---

## <a name="12-không-sử-dụng-biến-this-toàn-cục"></a>12. Không sử dụng biến "this" toàn cục

### Mô tả
Khi sử dụng biến "this" toàn cục khai báo ngoài cùng thì javascript sẽ hiểu là tham 
chiếu tới đối tượng window. Nếu muốn khai báo biến toàn cục thì loại bỏ biến this vẫn 
cho một kết quả tương tự.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
this.foo = 1;   // Không tuân thủ 
console.log(this.foo); // Không tuân thủ 
 
function MyObj() { 
  this.foo = 1; // Tuân thủ 
} 
 
MyObj.func1 = function() { 
  if (this.foo == 1) { // Tuân thủ 
    // ... 
  } 
}
```

### Cách viết đúng (Compliant Code)
```javascript
foo = 1; 
console.log(foo); 
 
function MyObj() { 
  this.foo = 1; 
} 
 
MyObj.func1 = function() { 
  if (this.foo == 1) { 
    // ... 
  } 
}
```

---

## <a name="13-tên-các-thuộc-tính-model-không-có-dấu-cách--"></a>13. Tên các thuộc tính model không có dấu cách " "

### Mô tả
Khi sử dụng framework Backbone.js,  tên các thuộc tính model không nên chứa dấu 
cách vì  đối tượng Ev ents chấp nhận danh sách event được xác định bằng dấu cách. Do 
đó tên một thuộc tính chứa dấu cách có thể bị hiểu sai ý nghĩa.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
Person = Backbone.Model.extend({ 
        defaults: { 
            'first name': 'Bob',      // Không tuân thủ 
            'birth date': new Date()  // Không tuân thủ 
        }, 
    });
```

### Cách viết đúng (Compliant Code)
```javascript
Person = Backbone.Model.extend({ 
        defaults: { 
            firstName: 'Bob', 
            birthDate: new Date() 
        }, 
    });
```

---

## <a name="14-toán-tử--và---không-sử-dụng-với-object"></a>14. Toán tử "+" và "-" không sử dụng với Object

### Mô tả
Toán tử + và - được sử dụng để chuyển kiểu giá trị sang giá trị số, tuy nhiên không 
phải mọi giá trị để có thể chuyển sang Number, khi đó kết quả luôn trả về NaN.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
var obj = {x : 1}; 
doSomethingWithNumber(+obj);    // Không theo luật 
 
function foo(){ 
  return 1; 
} 
doSomethingWithNumber(-foo);    //Không theo luật
```

### Cách viết đúng (Compliant Code)
```javascript
var obj = {x : 1}; 
doSomethingWithNumber(+obj.x); 
 
function foo(){ 
  return 1; 
} 
doSomethingWithNumber(-foo()); 
 
var str = '42'; 
doSomethingWithNumber(+str); 
 
//
```

### Ngoại lệ
Ngoại lệ 
//Toán tử +, - có thể dùng với đối tượng thuộc kiểu primitive. 
 
var b = new Boolean(true); 
doSomethingWithNumber(-b);  // Compliant

---

## <a name="15-trong-thẻ-input-password-đặt-thuộc-tính-autocomplete-là-off"></a>15. Trong thẻ input "password" đặt thuộc tính "autocomplete" là "off"

### Mô tả
Hầu hết các trình duyệt tự động điền nội dung thẻ input 'password' khi password đã 
được nhập trước đó. Điều này có thể gây ra lỗi mất an toàn thông tin. Trong HTML có 
thể khắc phục bằng cách đặt thuộc tính autocomplete cho thẻ này là off.

### Ví dụ không tuân thủ (Non-compliant Code)
```javascript
HTML5: 
<input type="password" />
```

### Cách viết đúng (Compliant Code)
```javascript
HTML5: 
<input type="password" autocomplete="off" />
```

---


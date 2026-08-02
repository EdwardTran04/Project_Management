# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - PHP - PHẦN 2/2

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ PHP, dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 2/2.

---

## MỤC LỤC - PHẦN 2/2

- [13. Sử dụng break ở cuối các biểu thức Switch cases](#13-sử-dụng-break-ở-cuối-các-biểu-thức-switch-cases)

---

## <a name="13-sử-dụng-break-ở-cuối-các-biểu-thức-switch-cases"></a>13. Sử dụng break ở cuối các biểu thức Switch cases

### Mô tả
Khi việc thực thi không được dừng một cách tường minh ở cuối biểu thức switch 
case, case tiếp theo sẽ tiếp tục được thực hiện . Đây có thể là chủ ý của lập trình viên 
trong một vài trường hợ p, tuy nhiên phần nhiều là do quên và có thể gây ra các xử lý bất 
thường.

### Ví dụ không tuân thủ (Non-compliant Code)
```php
switch ($myVariable) { 
  case 1: 
    foo(); 
    break; 
 
  case 2:  // Both 'doSomething()' and 'doSomethingElse()' will be executed. 
Is it on purpose ? 
    do_something(); 
  default: 
    do_something_else(); 
   break; 
}
```

### Cách viết đúng (Compliant Code)
```php
switch ($myVariable) { 
  case 1: 
    foo(); 
    break; 
  case 2: 
    do_something(); 
    break; 
  default: 
    do_something_else(); 
   break; 
}
```

### Ngoại lệ
Ngoại lệ: 
This rule is relaxed in following cases: 
 
switch ($myVariable) { 
  case 0:                  // Empty case used to specify the same behavior 
for a group of cases. 
  case 1: 
    do_something(); 
    break; 
  case 2:                  // Use of continue statement 
    continue; 
  case 3:                  // Case includes a jump statement (exit, return, 
break &etc) 
    exit(0); 
  case 4: 
    echo 'Second case, which falls through'; 
    // no break        <- comment is used when fall-through is intentional 
in a non-empty case body 
  default:                 // For the last case, use of break statement is 
optional 
    doSomethingElse(); 
}

---


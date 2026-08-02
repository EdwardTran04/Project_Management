# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - .NET (C#) - PHẦN 1/2

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ .NET (C#), dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 1/2.

---

## MỤC LỤC - PHẦN 1/2

- [1. Không return đối tượng "IDisposables" khởi tạo trong đoạn code sử dụng](#1-không-return-đối-tượng-idisposables-khởi-tạo-trong-đoạn-code-sử-dụng)
- [2. Sử dụng phép toán logic (short-circuit) để tránh lỗi truy cập vào vùng nhớ null](#2-sử-dụng-phép-toán-logic-short-circuit-để-tránh-lỗi-truy-cập-vào-vùng-nhớ-null)
- [3. Các đối tượng cài đặt interface "IDisposables" cần phải được dispose.](#3-các-đối-tượng-cài-đặt-interface-idisposables-cần-phải-được-dispose)
- [4. Biến tăng trong vòng "for" phải là biến trong điều kiện dừng vòng lặp](#4-biến-tăng-trong-vòng-for-phải-là-biến-trong-điều-kiện-dừng-vòng-lặp)
- [5. Ủy thác (Delegate) nặc danh không thể sử dụng để hủy đăng ký sự kiện (event)](#5-ủy-thác-delegate-nặc-danh-không-thể-sử-dụng-để-hủy-đăng-ký-sự-kiện-event)
- [6. Class phải thực hiện giải phóng các biến thành viên trong hàm Dispose của Class](#6-class-phải-thực-hiện-giải-phóng-các-biến-thành-viên-trong-hàm-dispose-của-class)
- [7. Class có biến thành viên là "IDisposable" thì Class đó nên cài đặt interface](#7-class-có-biến-thành-viên-là-idisposable-thì-class-đó-nên-cài-đặt-interface)
- [8. Không ghi log ra Console](#8-không-ghi-log-ra-console)

---

## <a name="1-không-return-đối-tượng-idisposables-khởi-tạo-trong-đoạn-code-sử-dụng"></a>1. Không return đối tượng "IDisposables" khởi tạo trong đoạn code sử dụng

### Mô tả
"using". 
Đối tượng "IDisposables" sau khi ra khỏi phạm vi đoạn code s ử dụng sẽ được tự động 
giải phóng. Do đó nếu muốn trả về giá trị biến chưa bị giải phóng thì nên loại bỏ lệnh 
"using" hoặc không trả về đối tượng "IDisposables".

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
public FileStream WriteToFile(string path, string text) 
{ 
  using (var fs = File.Create(path)) // Noncompliant 
  { 
    var bytes = Encoding.UTF8.GetBytes(text); 
    fs.Write(bytes, 0, bytes.Length); 
    return fs; 
  } 
}
```

### Cách viết đúng (Compliant Code)
```csharp
public FileStream WriteToFile(string path, string text) 
{ 
  var fs = File.Create(path); 
  var bytes = Encoding.UTF8.GetBytes(text); 
  fs.Write(bytes, 0, bytes.Length); 
  return fs; 
}
```

---

## <a name="2-sử-dụng-phép-toán-logic-short-circuit-để-tránh-lỗi-truy-cập-vào-vùng-nhớ-null"></a>2. Sử dụng phép toán logic (short-circuit) để tránh lỗi truy cập vào vùng nhớ null

### Mô tả
trong các điều kiện so sánh 
Khi một điều kiện kiểm tra kết quả null, nếu kiểm tra tiếp các điều kiện còn lại có thể 
dẫn đến lỗi null pointer

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
if (str == null && str.Length == 0) 
{ 
  Console.WriteLine("String is empty"); 
} 
 
if (str != null || str.Length > 0) 
{ 
  Console.WriteLine("String is not empty"); 
}
```

### Cách viết đúng (Compliant Code)
```csharp
if (str == null || str.Length == 0) 
{ 
  Console.WriteLine("String is empty"); 
} 
 
if (str != null && str.Length > 0) 
{ 
  Console.WriteLine("String is not empty"); 
}
```

---

## <a name="3-các-đối-tượng-cài-đặt-interface-idisposables-cần-phải-được-dispose"></a>3. Các đối tượng cài đặt interface "IDisposables" cần phải được dispose.

### Mô tả
Trong nhiều trường hợp  không thể chỉ dựa vào Gar bage collection để dọn dẹp mọi 
thứ, ví dụ không thể giải phóng các tài nguyên non -memory giống như Files. Đối với 
trường hợp này, cần sử dụng IDisposable và phương thức Dispose sẽ luôn luôn được gọi 
để giải phóng đối tượng.  
Khi một biến trong Class là đối  tượng "IDisposable", đối tượng này cần được gọi 
dispose trong phương thức Dispose của Class để chắc chắn rằng đối tượng được tự động 
giải phóng khi Class được giải phóng.  Nếu IDisposable là biến local thì nên được khởi 
tạo sử dụng “using”.

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
public class ResourceHolder 
{ 
  private FileStream fs;  // fs không bao giờ được giải phóng 
  public void OpenResource(string path) 
  { 
    this.fs = new FileStream(path, FileMode.Open); 
  } 
  public void CloseResource() 
  { 
    this.fs.Close(); 
  } 
  public void WriteToFile(string path, string text) 
  { 
    var fs = new FileStream(path, FileMode.Open);  // Noncompliant 
    var bytes = Encoding.UTF8.GetBytes(text); 
    fs.Write(bytes, 0, bytes.Length); 
  } 
}
```

### Cách viết đúng (Compliant Code)
```csharp
public class ResourceHolder : IDisposable 
{ 
  private FileStream fs; 
  public void OpenResource(string path) 
  { 
    this.fs = new FileStream(path, FileMode.Open); 
  } 
 
  public void CloseResource() 
  { 
    this.fs.Close(); 
  } 
 
  public void Dispose() 
  { 
    this.fs.Dispose(); 
  } 
 
  public void WriteToFile(string path, string text) 
  { 
    using (var fs = new FileStream(path, FileMode.Open)) 
    { 
      var bytes = Encoding.UTF8.GetBytes(text); 
      fs.Write(bytes, 0, bytes.Length); 
    } 
  } 
} 
 
//Chú ý: 
//Biến địa phương "IDisposables" được trả về trong lệnh return thì không bị 
//giải phóng, nó giống như một biến không phải biến địa phương. 
 
  public Stream WriteToFile(string path, string text) 
  { 
    var fs = new FileStream(path, FileMode.Open);  
    var bytes = Encoding.UTF8.GetBytes(text); 
    fs.Write(bytes, 0, bytes.Length); 
    return fs; 
  }
```

---

## <a name="4-biến-tăng-trong-vòng-for-phải-là-biến-trong-điều-kiện-dừng-vòng-lặp"></a>4. Biến tăng trong vòng "for" phải là biến trong điều kiện dừng vòng lặp

### Mô tả
Khi biến tăng và biến điều kiện dừng vòng lặp for không giống nhau thì thường là lỗi 
có thể dẫn đến vòng lặp không bao giờ kết thúc và nếu như không gây lỗi thì cũng rất khó 
cho việc bảo trì về sau.

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
for (i = 0; i < 10; j++)  
{ 
  // ... 
}
```

### Cách viết đúng (Compliant Code)
```csharp
for (i = 0; i < 10; i++) 
{ 
  // ... 
}
```

---

## <a name="5-ủy-thác-delegate-nặc-danh-không-thể-sử-dụng-để-hủy-đăng-ký-sự-kiện-event"></a>5. Ủy thác (Delegate) nặc danh không thể sử dụng để hủy đăng ký sự kiện (event)

### Mô tả
Có thể đăng ký sự kiện (event) với những ủy thác (delegate) nặc danh (nặc danh tức là 
không gắn với biến), nhưng khi làm như vậy thì không thể hủy đăng ký bởi vì: trong quá 
trình đăng ký/hủy đăng ký ủy thác sẽ được thêm vào /loại ra khỏi một danh sách, ở cả hai 
quá trình đều sử dụng nặc danh do đó dẫn đến khi hủy đăng ký sẽ không thể xác định 
được ủy thác đã đăng ký trước đó. 
Nếu muốn hủy đăng ký nhãn sự kiện thì nên khai báo ủy thác thành một biến cụ thể 
và sử dụng biến đó.

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
listView.PreviewTextInput += (obj,args) => 
        listView_PreviewTextInput(obj,args,listView); (gán nhãn sự kiện) 
 
// ... 
 
listView.PreviewTextInput -= (obj, args) => 
        listView_PreviewTextInput(obj, args, listView); // (hủy gán nhãn)
```

### Cách viết đúng (Compliant Code)
```csharp
EventHandler func = (obj,args) => 
listView_PreviewTextInput(obj,args,listView); (gán nhãn sự kiện thành biến 
func) 
 
listView.PreviewTextInput += func; (gán nhãn sự kiện) 
 
// ... 
 
listView.PreviewTextInput -= func; (hủy gán nhãn)
```

---

## <a name="6-class-phải-thực-hiện-giải-phóng-các-biến-thành-viên-trong-hàm-dispose-của-class"></a>6. Class phải thực hiện giải phóng các biến thành viên trong hàm Dispose của Class

### Mô tả
đó. 
Để các biến thành viên được tự động giải phóng khi Class bị giải phóng thì nên thực 
hiện giải phóng các biến thành viên trong hàm Dispose của Class đó.

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
public class ResourceHolder : IDisposable 
{ 
  private FileStream fs; 
  public void OpenResource(string path) 
  { 
    this.fs = new FileStream(path, FileMode.Open); 
  } 
  public void CloseResource() 
  { 
 
    this.fs.Close(); 
  } 
 
  public void CleanUp() 
  { 
    this.fs.Dispose(); // Noncompliant; Dispose not called in class' Dispose 
method 
  } 
 
  public void Dispose() 
  { 
    // method added to satisfy demands of interface 
  } 
}
```

### Cách viết đúng (Compliant Code)
```csharp
public class ResourceHolder : IDisposable 
{ 
  private FileStream fs; 
  public void OpenResource(string path) 
  { 
    this.fs = new FileStream(path, FileMode.Open); 
  } 
  public void CloseResource() 
  { 
    this.fs.Close(); 
  } 
 
  public void Dispose() 
  { 
    this.fs.Dispose(); 
  } 
}
```

---

## <a name="7-class-có-biến-thành-viên-là-idisposable-thì-class-đó-nên-cài-đặt-interface"></a>7. Class có biến thành viên là "IDisposable" thì Class đó nên cài đặt interface

### Mô tả
"IDisposable" 
Nếu Class có biến thành viên là "IDisposable" , để các biến thành viên được tự động 
giải phóng khi Class bị giải phóng thì Class đó nên cài đặt interface "IDisposable"

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
public class ResourceHolder   // Noncompliant; doesn't implement IDisposable 
{ 
  private FileStream fs;  // This member is never Dispose'd 
  public void OpenResource(string path) 
  { 
    this.fs = new FileStream(path, FileMode.Open); 
  } 
  public void CloseResource() 
  { 
    this.fs.Close(); 
  } 
 
}
```

### Cách viết đúng (Compliant Code)
```csharp
public class ResourceHolder : IDisposable 
{ 
  private FileStream fs; 
  public void OpenResource(string path) 
  { 
    this.fs = new FileStream(path, FileMode.Open); 
  } 
  public void CloseResource() 
  { 
    this.fs.Close(); 
  } 
  public void Dispose() 
  { 
    this.fs.Dispose(); 
  } 
}
```

---

## <a name="8-không-ghi-log-ra-console"></a>8. Không ghi log ra Console

### Mô tả
Việc ghi các thông tin Debug là vô cùng quan trọng trong phát triển, tuy nhiên việc 
ghi log ra Console  trong bản phát hành  (production), đặc biệt code chạy phía client 
(client side) sẽ có nguy cơ để lộ các thông tin nhạy cảm. 
Ví dụ code không tuân thủ 
private void DoSomething () 
{ 
  // ... 
  Console.WriteLine ("so far, so good..."); // Không tuân thủ luật 
  // ... 
}

---


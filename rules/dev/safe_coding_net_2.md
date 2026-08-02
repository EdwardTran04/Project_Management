# QUY TẮC LẬP TRÌNH TRÁNH LỖI TIỀM ẨN - .NET (C#) - PHẦN 2/2

Tài liệu này quy định các quy tắc lập trình tránh lỗi tiềm ẩn cho ngôn ngữ .NET (C#), dựa trên hướng dẫn mã hiệu `HD.00.CNTT.22` - phần 2/2.

---

## MỤC LỤC - PHẦN 2/2

- [9. Không để virtual các event Field-like](#9-không-để-virtual-các-event-field-like)
- [10. Không so sánh tham số dạng Generic chưa được gán kiểu cụ thể với null](#10-không-so-sánh-tham-số-dạng-generic-chưa-được-gán-kiểu-cụ-thể-với-null)
- [11. Không nên sử dụng các biểu thức luôn đúng](#11-không-nên-sử-dụng-các-biểu-thức-luôn-đúng)
- [12. Không nên sử dụng "OrderBy" liên tiếp trong LinQ](#12-không-nên-sử-dụng-orderby-liên-tiếp-trong-linq)
- [13. Cấu trúc "if/else if" không nên có cùng điều kiện](#13-cấu-trúc-ifelse-if-không-nên-có-cùng-điều-kiện)
- [14. Không sử dụng trường Static trong đối tượng kiểu generic](#14-không-sử-dụng-trường-static-trong-đối-tượng-kiểu-generic)

---

## <a name="9-không-để-virtual-các-event-field-like"></a>9. Không để virtual các event Field-like

### Mô tả
Các event Field -like là các event không có phương thức thêm và xóa rõ ràng, trình 
biên dịch sẽ tự động sinh ra trường delegate dạng private, cũng như các phương thức 
thêm và xóa. 
Khi event field -like được override bởi một event field -like khác sẽ sinh ra trường 
delegate trong lớp dẫn xuất, tồn tại song song với các trường trong lớp cha. Kết quả dẫn 
đến có quá nhiều event riêng biệt  được tạo ra (thường không nằm trong chủ ý của người 
lập trình). Để không xảy ra lỗi này thì các event filed-like không để virtual

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
abstract class Car 
{ 
  public virtual event EventHandler OnRefueled; // Noncompliant 
 
 
  public void Refuel() 
  { 
    // This OnRefueld will always be null 
     if (OnRefueled != null) 
     { 
       OnRefueled(this, null); 
     } 
  } 
} 
 
class R2 : Car 
{ 
  public override event EventHandler OnRefueled; 
} 
 
class Program 
{ 
  static void Main(string[] args) 
  { 
    var r2 = new R2(); 
    r2.OnRefueled += new EventHandler((o, a) => 
    { 
      Console.WriteLine("This event will never be called"); 
    }); 
    r2.Refuel(); 
  } 
}
```

### Cách viết đúng (Compliant Code)
```csharp
abstract class Car 
{ 
  public event EventHandler OnRefueled; // Compliant 
 
  public void Refuel() 
  { 
    if (OnRefueled != null) 
    { 
      OnRefueled(this, null); 
    } 
  } 
} 
 
class R2 : Car {} 
 
class Program 
{ 
  static void Main(string[] args) 
  { 
    var r2 = new R2(); 
    r2.OnRefueled += new EventHandler((o, a) => 
    { 
      Console.WriteLine("This event will be called"); 
    }); 
 
    r2.Refuel(); 
  } 
}
```

---

## <a name="10-không-so-sánh-tham-số-dạng-generic-chưa-được-gán-kiểu-cụ-thể-với-null"></a>10. Không so sánh tham số dạng Generic chưa được gán kiểu cụ thể với null

### Mô tả
Khi tham số dạng Generic chưa được gán kiểu cụ thể không nên so sánh với null, vì 
kết quả so sánh luôn luôn là false bởi tham số có thể rỗng nhưng không bao giờ null. Nếu 
không tham số Generic cần được gán kiểu cụ thể.

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
private bool IsDefault<T>(T value) 
{ 
  if (value == null) // Noncompliant 
  { 
    // ... 
  } 
  // ... 
}
```

### Cách viết đúng (Compliant Code)
```csharp
private bool IsDefault<T>(T value) 
{ 
  if(object.Equals(value, default(T))) 
  { 
    // ... 
  } 
  // ... 
} 
Hoặc 
private bool IsDefault<T>(T value) where T : class 
{ 
  if (value == null) 
  { 
    // ... 
  } 
  // ... 
}
```

---

## <a name="11-không-nên-sử-dụng-các-biểu-thức-luôn-đúng"></a>11. Không nên sử dụng các biểu thức luôn đúng

### Mô tả
Không nên sử dụng các biểu thức luôn đúng

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
if ( a == a ) // always true 
{ 
  doZ(); 
} 
if ( a != a ) // always false 
{ 
 
  doY(); 
} 
if ( a == b && a == b ) // if the first one is true, the second one is too 
{ 
  doX(); 
} 
if ( a == b || a == b ) // if the first one is true, the second one is too 
{ 
  doW(); 
} 
 
int j = 5 / 5; //always 1 
int k = 5 - 5; //always 0
```

### Cách viết đúng (Compliant Code)
```csharp
doZ(); 
 
if ( a == b ) 
{ 
  doX(); 
} 
if ( a == b ) 
{ 
  doW(); 
} 
 
int j = 1; 
int k = 0; 
 
//
```

### Ngoại lệ
Ngoại lệ 
Phép dịch bit 1 là cách thường dùng để tạo bit mask, do đó không áp dụng 
luật 
int i = 1 << 1; // Compliant 
int j = a << a; // Noncompliant

---

## <a name="12-không-nên-sử-dụng-orderby-liên-tiếp-trong-linq"></a>12. Không nên sử dụng "OrderBy" liên tiếp trong LinQ

### Mô tả
Không nên sử dụng OrderBy liên tiếp trong LinQ vì mỗi lần OrderBy sẽ sắp xếp lại 
toàn bộ danh sách mà không quan tâm kết quả của lần OrderBy trước đó.

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
var x = personList 
  .OrderBy(person => person.Age) 
  .OrderBy(person => person.Name)  // Noncompliant 
  .ToList();  // x is sorted by Name, not sub-sorted
```

### Cách viết đúng (Compliant Code)
```csharp
var x = personList 
  .OrderBy(person => person.Age) 
  .ThenBy(person => person.Name) 
  .ToList();
```

---

## <a name="13-cấu-trúc-ifelse-if-không-nên-có-cùng-điều-kiện"></a>13. Cấu trúc "if/else if" không nên có cùng điều kiện

### Mô tả
Một chuỗi các cấu trúc "if/else if" được đánh giá từ trên xuống, thông thường chỉ một 
nhánh đầu tiên có điều kiện đúng được thực hiện. Do đó việc lặp lại một điều kiện  
(thường do nhầm lẫn  khi copy/paste)  có thể gây ra các lỗi nghiêm trọng mà chúng ta 
không lường trước được.

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
if (param == 1) 
  openWindow(); 
else if (param == 2) 
  closeWindow(); 
else if (param == 1)  // lỗi không tuân theo luật 
  moveWindowToTheBackground();
```

### Cách viết đúng (Compliant Code)
```csharp
if (param == 1) 
  openWindow(); 
else if (param == 2) 
  closeWindow(); 
else if (param == 3) 
  moveWindowToTheBackground();
```

---

## <a name="14-không-sử-dụng-trường-static-trong-đối-tượng-kiểu-generic"></a>14. Không sử dụng trường Static trong đối tượng kiểu generic

### Mô tả
Một biến static trong đối tượng kiểu generic không được chia sẻ trong các dẫn xuất 
khởi tạo đóng ví dụ biến static trong LengthLimitedSingletonCollection <int> và  
LengthLimitedSingletonCollection <string> trỏ đến hai đối tượng khác nhau 
Nếu cần chia sẻ biến static giữa các thể hiện (instance) với các kiể u tham số generic 
khác nhau thì cần định nghĩa lớp cơ sở dạng non-generic để lưu trữ các thành viên static, 
sau đó thiết lập kiểu chung kế thừa từ lớp cơ sở.

### Ví dụ không tuân thủ (Non-compliant Code)
```csharp
public class LengthLimitedSingletonCollection<T> where T : new() 
{ 
  protected const int MaxAllowedLength = 5; 
  protected static Dictionary<Type, object> instances = new Dictionary<Type, 
object>(); // Noncompliant 
  public static T GetInstance() 
  { 
    object instance; 
    if (!instances.TryGetValue(typeof(T), out instance)) 
    { 
      if (instances.Count >= MaxAllowedLength) 
      { 
        throw new Exception(); 
      } 
 
      instance = new T(); 
      instances.Add(typeof(T), instance); 
    } 
    return (T)instance; 
  } 
}
```

### Cách viết đúng (Compliant Code)
```csharp
public class SingletonCollectionBase 
{ 
  protected static Dictionary<Type, object> instances = new Dictionary<Type, 
object>(); 
} 
public class LengthLimitedSingletonCollection<T> : SingletonCollectionBase 
where T : new() 
{ 
  protected const int MaxAllowedLength = 5; 
  public static T GetInstance() 
  { 
    object instance; 
    if (!instances.TryGetValue(typeof(T), out instance)) 
    { 
      if (instances.Count >= MaxAllowedLength) 
      { 
        throw new Exception(); 
      } 
      instance = new T(); 
      instances.Add(typeof(T), instance); 
    } 
    return (T)instance; 
  } 
} 
 
//
```

### Ngoại lệ
Ngoại lệ 
 
If the static field or property uses a type parameter, then the developer is 
assumed to understand that the static member is not shared among the closed 
constructed types. 
 
public class Cache<T> 
{ 
  private static Dictionary<string, T> CacheDictionary { get; set; } // 
Compliant 
}

---


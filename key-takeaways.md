# I. Version control system
- Hệ thống quản lý các version.
- Có thể lưu trên máy cá nhân.
- Có thể lưu ở một máy chủ tập trung.
- Có thể lưu ở nhiều máy khác nhau.
# II. Git
## 1. Khái niệm về Git
- Git là viết sai chính tả của từ get (việc lấy sai có chủ đích).
- Git được dùng cho nhu cầu quản lý các phiên bản và nhiều người làm việc với nhau.
## 2. Lý do vì sao lại chọn Git
- Tính năng: dễ dùng, có nhiểu tính năng vượt trội (braching), tốc độ xử lý nhanh.
- Công cụ miễn phí.
- Được cộng đồng sử dụng rộng rãi.
## 3. So sánh giữa Git và GitHub
- **Git:**
    - Là một phần mềm, được sử dụng trên máy local.
    - Là một commandline tool.
- **GitHub:**
    - Là một dịch vụ website.
    - Là nơi để upload git repository lên.
## 4. Git- Three states
- Working Directory: nơi chứa các file mới hoặc file có thay đổi.
- Staging area: nơi chứa các file đưa vào vùng chuẩn bị commit.
- Repository: nơi chứa các commit (version). 
## 5. Git - key takeaways
- Khởi tạo thư mục: *git init*
- Cấu hình git: (Sử dụng câu lệnh cấu hình email với username ở bài 1).
- Thêm file từ Working directory lên Staging sử dụng câu lệnh: *git add <tên file>* hoặc *git add .* 
- Xem trạng thái file: *git status* . 
    - Màu xanh đang vùng staging. 
    - Màu đỏ đang vùng working directory.
- Để chuyển file từ Staging lên Repository sử dụng câu lệnh: *git commint -m "message"*. (message nên đặt theo một quy chuẩn chung)
## 6. Git - commit convention
- Commit message cần được viết theo chuẩn chung, rõ ràng dễ hiểu.
- Sử dụng convention: <type><short_description>
    - chore: sửa nhỏ lẻ, chính tả...
    - feat: thêm tính năng mới hoặc testcase mới.
    - fix: sửa lỗi.
# III. Javascript basic
## 1. Khái niệm
- Là một ngôn ngữ lập trình.
- Giúp browser hoạt động được.
- Có thể chạy được trên máy tính mà không cần trình duyệt thông qua Node JS.
## 2. Các kiểu khai báo Javascript
- **Khai báo varibale (biến):** dùng để lưu trữ giá trị, có thể thay đổi giá trị được.
    - Khai báo:
        - var <tên biến> = <giá trị>;
        - let <tên biến> = <giá trị>;
        - Trong đó <tên biến> bắt đầu bằng ký tự chữ, hoặc gạch dưới hoặc dấu $ . Không chứa dấu cách hoặc các từ khóa liên quan tới javascript như var, let, if...
    - Ví dụ:
        - var firstName = "Automation";
        - let lastName = "Playwright with typescript";
        - sử dụng: console.log("firstname = " + firstName);
    - Sự khác nhau giữa var và let:
        - var có thể khai báo lại được, còn let thì không.
        - Phạm vi của biến: var là biến toàn cục, còn let là biến cục bộ trong phạm vi dấu {}.
- **Khai báo constant (hằng số):** dùng để khai báo các giá trị không thể thay đổi.
    - Khai báo:
        - const <name> = <value>
    - Ví dụ:
        - const framework = “Playwright”;
    - Sử dụng:
        - console.log(framework);
- **Khai báo Data type (kiểu dữ liệu):** 
    - Có 8 loại kiểu dữ liệu: String, Number,Bigint, Boolean, Undefined, Null, Symbol, Object.
    - chúng ta sẽ quan tâm đến các kiểu: String, Number, Boolean.
        - String: dùng để khai báo chuỗi.
        - Number: dùng để khai báo một số. Ví dụ: 100, 0, 100.5, -100.005.
        - Boolean: dùng để khai báo một giá trị kiểu đúng sai (true hoặc false).
- **Khai báo Comparison operator (toán tử so sánh):** 
    - Dùng để so sánh giá trị giữa 2 biến với nhau. Kết quả trả về dưới dạng Boolean (true hoặc false).
    - Các toán tử so sánh:
        - So sánh hơn kém: >, <
        - So sánh bằng: ==, ===,!=, !==, >=, <=
- **Khai báo Unary operator (toán tử một ngôi):** 
    - Dùng để tăng hoặc giảm giá trị
    - i++ bằng với i=i+1
    - i-- bằng với i=i-1
- **Khai báo Arithmetic operator (toán tử số học):** 
    - Dùng để tăng hoặc giảm giá trị
    - Dùng tính toán giá trị biểu thức
    - Các phép toán: +, -, *, /
- **Khai báo Conditional (điều kiện):** dùng để kiểm tra có nên thực hiện đoạn logic không.
    - Cú pháp: if (<điều kiện>) { // code }. Nếu điều kiện đúng, sẽ chạy đoạn code
- **Khai báo Loops (vòng lặp):** 
    - Dùng để thực hiện một đoạn logic một số lần nhất định
    - Cú pháp: for(<khởi tạo>; <điều kiện dừng>; <điều kiện tăng>) {// code }
    - Ví dụ:
        for (let i = 1; i <= 10; i++) {
        console.log("Giá trị của i là: ", i);
        }
// Bài 1:
function bmi(a, b) {
    let c = (b / (a * a));
    if (c <= 18.5) {
        console.log("Thiếu cân");
    } else if (c > 18.5 && c < 25) {
        console.log("Bình thường");
    } else if (c >= 25 && c < 35) {
        console.log("Thừa cân");
    } else {
        console.log("Béo phì");
    } 
}
let chiSo = bmi(1.75, 60);
console.log(chiSo);
let chiSo2 = bmi(1.75, 120);
console.log(chiSo2);

//Bài 2:
function chuyendoinhietdo(nhiet_do, loai_nhiet_do) {
    if (loai_nhiet_do == 'C') {
        nhiet_do_chuyen_doi = (nhiet_do * (9 / 5 + 32));
        console.log("loai_nhiet_do_moi = " + nhiet_do_chuyen_doi + 'F');
    } else if (loai_nhiet_do == 'F') {
        nhiet_do_chuyen_doi = ((nhiet_do - 32) * 5 / 9);
        console.log("loai_nhiet_do_moi = " + nhiet_do_chuyen_doi.toFixed(2) + 'C');
    } else {
        console.log("Loại nhiệt độ không hợp lệ. Vui lòng nhập 'C' hoặc 'F'.");       
    }
}
let chuyenDoi = chuyendoinhietdo(110 ,'F');
console.log(chuyenDoi);
let chuyenDoi2 = chuyendoinhietdo(110 ,'K');
console.log(chuyenDoi2);

//3. Hàm tính tổng của các phần tử trong một mảng số
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); 

//4. Hàm lọc ra các số nguyên tố từ một mảng số

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function filterPrimeNumbers(numbers)
 {
  return numbers.filter(isPrime);
}

// Ví dụ sử dụng:
console.log(filterPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 

//5. Function cập nhật email dựa trên tên người dùng
let users = [
  { name: 'Alex', email: 'alex@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' },
];

function updateEmail(name, newEmail) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      users[i].email = newEmail;
      break;
    }
  }
}

// Ví dụ sử dụng:
updateEmail('Bob', 'bob123@example.com');
console.log(users);

//6. Hàm tính điểm trung bình của các sinh viên
function calculateAverage(students) {
  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore += students[i].score;
  }
  return totalScore / students.length;
}

// Ví dụ sử dụng:
const students = [
  { name: 'Alex', score: 85 },
  { name: 'Bob', score: 90 },
  { name: 'Charlie', score: 78 },
];

console.log(calculateAverage(students).toFixed(1)); // Output: 84.33

//7. Hàm kiểm tra giá sản phẩm lớn hơn 0
function areAllPricesGreaterThanZero(products) {
  return products.every(product => product.price > 0);
}

// Ví dụ sử dụng:
const cart = [
  { name: 'product 1', price: 100 },
  { name: 'product 2', price: 200 },
  { name: 'product 3', price: 0 },
];

console.log(areAllPricesGreaterThanZero(cart)); // Output: false

//8. Hàm kiểm tra cửa hàng còn mở cửa hay không
function isStoreOpen(hour) {
  return hour >= 9 && hour <= 21 ? 'Cửa hàng mở cửa' : 'Cửa hàng đã đóng';
}

// Ví dụ sử dụng:
console.log(isStoreOpen(10)); // Output: Cửa hàng mở cửa
console.log(isStoreOpen(22)); // Output: Cửa hàng đã đóng

//9. Hàm tính giá vé vào cổng theo độ tuổi
function getTicketPrice(age) {
  if (age < 5) {
    return 'Miễn phí';
  } else if (age >= 6 && age <= 17) {
    return '50k';
  } else if (age >= 18) {
    return '100k';
  }
}

// Ví dụ sử dụng:
console.log(getTicketPrice(4)); // Output: Miễn phí
console.log(getTicketPrice(10)); // Output: 50k
console.log(getTicketPrice(20)); // Output: 100k

//10. Viết hàm in ra tên tháng dựa vào số tháng được nhập vào. Sử dụng câu lệnh switch...case để xử lý.
function getMonthName(monthNumber) {
  let monthName;

  switch (monthNumber) {
    case 1:
      monthName = 'Tháng Một';
      break;
    case 2:
      monthName = 'Tháng Hai';
      break;
    case 3:
      monthName = 'Tháng Ba';
      break;
    case 4:
      monthName = 'Tháng Tư';
      break;
    case 5:
      monthName = 'Tháng Năm';
      break;
    case 6:
      monthName = 'Tháng Sáu';
      break;
    case 7:
      monthName = 'Tháng Bảy';
      break;
    case 8:
      monthName = 'Tháng Tám';
      break;
    case 9:
      monthName = 'Tháng Chín';
      break;
    case 10:
      monthName = 'Tháng Mười';
      break;
    case 11:
      monthName = 'Tháng Mười Một';
      break;
    case 12:
      monthName = 'Tháng Mười Hai';
      break;
    default:
      monthName = 'Lỗi';
  }

  return monthName;
}

console.log(getMonthName(4));
// Bài 1

let departurePlanet = "Trái Đất";
let misson = "Khám phá Vũ trụ K9";
let crew = ["Joon Phạm 1", "Joon Phạm 2", "Joon Phạm 3"];

function launchShip(crew) {
    return (`Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu khám phá Vũ trụ K9!.`);
}
console.log(launchShip(crew));

// Bài 2

function calculateDistance(speed, time) {
    let distance = speed * time;
    return (distance);
}

let calculateDistance1 = calculateDistance(1000, 24);
console.log(`Khoảng cách tàu vũ trụ K9 đến hành tinh bí ẩn là: ${calculateDistance1}km`);

//cách 2:

function calculateDistance(speed, time) {
    return (speed * time);
}

let speed = 1000; // km/h
let time = 24; // giờ
let distance = calculateDistance(speed, time);
console.log(`Khoảng cách tàu vũ trụ K9 đến hành tinh bí ẩn là: ${distance} km`);

// Bài 3:

function convertTimeToHex(decimalNumber) {
    let hexadecimalNumber = decimalNumber.toString(16);
    return (hexadecimalNumber);
}
let convertTimeToHex1 = convertTimeToHex(120);
console.log(`Thời gian 120 giây trong hệ thập lục phân là: ${convertTimeToHex1}`);

//hoặc

function convertTimeToHex(decimalNumber) {
    return decimalNumber.toString(16);
}
let decimalNumber = 120;
let hexadecimalNumber = convertTimeToHex(decimalNumber);
console.log(`Thời gian 120 giây trong hệ thập lục phân là: ${hexadecimalNumber}`);


// Bài 4: Hàm giải mã mật mã
function decryptCode(code) {
    let decrypt = '';
    for (let text of code) {
        if (text === text.toLowerCase()) {
            decrypt += text.toUpperCase();
        } else {
            decrypt += text.toLowerCase();
        }
    }
    return decrypt;
}
let code = "K9 Challenge";
let decryptedCode = decryptCode(code);
console.log(`Mật mã đã được giải mã là: ${decryptedCode}`);

// cách 2: khai báo 1 mảng => so sánh từng thành phần trong mảng
// function decryptCode(code) {
//     let arr = code.split('');
//     let arr1 = '';
//     for (i = 0; i < arr.lenght; i++) {
//         if (arr[i] === text.toLowerCase()) {
//             arr1 += text.toUpperCase();
//         } else {
//             arr1 += text.toLowerCase();
//         }
//     }
//     return arr1;
// }
// let code = 'K9 Challenge';
// let decryptedCode = decryptCode(code);
// console.log(`Mật mã đã được giải mã là: ${decryptedCode}`);

//Bài 5:

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
    }
    returnToEarth();
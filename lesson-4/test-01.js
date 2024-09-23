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
    if ((typeof speed === 'number') && (typeof time === 'number')) {
        return (speed * time);
    } else {
        return (`Tham số không hợp lệ, vui lòng kiểm tra lại!`);
    }
}
let speed = 1000; // km/h
let time = 24; // giờ
let distance = calculateDistance(speed, time);
console.log(`Khoảng cách tàu vũ trụ K9 đến hành tinh bí ẩn là: ${distance} km`);


// Bài 3:

function convertTimeToHex(decimalNumber) {
    if (!isNaN (decimalNumber)) {
        let hexadecimalNumber = parseInt.toString(16);
        return (hexadecimalNumber);
    } else {
        return (`Tham số không hợp lệ. Mời nhập lại`);
    }
}
let convertTimeToHex1 = convertTimeToHex(120);
console.log(`Thời gian 120 giây trong hệ thập lục phân là: ${convertTimeToHex1}`);

//hoặc

function convertTimeToHex(decimalNumber) {
    if (typeof decimalNumber === 'number') {
        return decimalNumber.toString(16);
    } else {
        return (`Tham số không hợp lệ. Mời nhập lại`);
    }
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

//Cách 2:

function decryptCode(code1) {
    let arr = code1.split('');
    let arr1 = '';
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] === arr[i].toLowerCase()) {
            arr1 += arr[i].toUpperCase();
        } else {
            arr1 += arr[i].toLowerCase();
        }
    }
    return arr1;
}

let code1 = 'K9 Challenge';
let decryptedCode2 = decryptCode(code1);
console.log(`Mật mã đã được giải mã là: ${decryptedCode2}`);


//Bài 5:

function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();
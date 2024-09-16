//Bài 1:
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log("năm sản xuất của xe:", car.year);
console.log("năm sản xuất của xe:", car["year"]);

//Bài 2:
let person = {
    name: "Joon Pham",
    address: {
        street: "123 Yen Xa",
        city: "Ha Noi",
        country: "Viet Nam"
    }
}
console.log("Tên đường:", person.address.street);
console.log("Tên đường:", person["address"]["street"]);

//Bài 3:
let student = {
    name: "Joon Pham",
    grades: {
        math: 8,
        english: 9
    }
}
console.log("Điểm toán:", student["grades"]["math"]);

//Bài 4:
let product = {
    "bike": 100,
    "motobike Honda": 1000,
    "motobike Yamaha": 1500
}
for (let productsName in product) {
    console.log(`Tên sản phẩm: ${productsName}, Giá: ${product[productsName]} USD`);
}

// Bài 5:
let settings = {
    volume: 50,
    brightness: 70
};
console.log("Cài đặt ban đầu:", settings);
settings.volume = 80;
console.log("Cài đặt sau khi thay đổi volume:", settings);

//Bài 6:
let bike = {
    brand: "Yamaha",
    model: "MT-07"
};
console.log("Thông tin xe ban đầu :", bike);
bike.color = "Đen";
console.log("Thông tin xe sau khi thêm màu sắc:", bike);

//BÀi 7:
let employee = {
    name: "Phạm Văn Tuấn",
    age: 33
};
console.log("Thông tin nhân viên ban đầu:", employee);
delete employee.age;
console.log("Thông tin nhân viên sau khi xóa tuổi:", employee);

//Bài 8:
let school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log("Thông tin trường học:", school);

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
    address:  {
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
    grades:  {
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
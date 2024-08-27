// Cách 1
for (let i = 1; i <= 100; i++) {
    if (i % 4 === 1) {
        console.log("Số có giá trị là:", i);
    }
}

// Cách 2:
for (let i = 1; i <= 100; i+=4) {
    console.log(i);
}
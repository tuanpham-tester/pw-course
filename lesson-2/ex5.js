// Cách 1:
for ( let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Số " +i, "là số chẵn");
    }
    if (i % 2 !== 0) {
        console.log("Số " +i, "là số lẻ");
    }
    
}

// Cách 2:

for ( let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("Số " +i, "là số chẵn");
    }
    else {
        console.log("Số " +i, "là số lẻ");
    }
    
}
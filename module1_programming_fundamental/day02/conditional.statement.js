// > Conditional Statement
// Pengkondisian digunakan untuk menentukan code mana yang harus di eksekusi

// 1. if
/*
    if(condition) {
        task;
    }
 */
let umur = 20;
if (umur > 17) {
    console.log("Umur memenuhi syarat");
}

if (200 <= 2000) {
    console.log("ok!")
}

// 2. if-else
/*
    if(condition) {
        task;
    } else {
        task;
    }
 */
let age = 16;
if(age > 17) {
    console.log('Ok, passed!');
} else {
    console.log('Ops, not passed!');
}

// 3. if-else if-else
/*
    if(condition) {
        task;
    } else if(condition) {
        task;
    } else {
        task;
    }
 */
let nilai = 80;
if (nilai > 90) {
    console.log("Lulus dengan nilai sangat baik");
} else if (nilai >= 80) {
    console.log("Lulus dengan sangat baik");
} else {
    console.log("Tidak lulus");
}

let point = 1000;
if (point >= 1000) {
    console.log('Point anda mencukupi');
}
if (point >= 500) {
    console.log('Point anda cukup');
} else {
    console.log('Point anda cukup');
}

// switch case sangat jarang digunakan

// Belajar Chakra UI
// Belajar Redux
// > FUNCTION
// merupakan sebuah penampung baris code yang digunakan berulang kali

// Tipe-tipe function:
// 1. function declaration
function greet() {
    console.log("Hello, World!");
}
greet()

// function expression & arrow function itu function yang disimpan di dalam variable, apabila ada yang sama sudah pasti bakal bentrok. kecuali function biasa
// 2. function expression
const sayHello = function() {
    console.log("Hello, World!");
}
sayHello()

// 3. arrow function
const sayHi = (name) => {
    console.log(`Hi, ${name}`);
}
sayHi("Fauzan")
sayHi("Ahmad")

// > PARAMETER FUNCTION
// _name, _hobby == parameter
const greeting = (_name, _hobby = "Unknown") => {
    console.log(`Hello, ${_name}! My hobby is ${_hobby}!`);
}

// "Fauzan" == argument
greeting("Fauzan");
// "John", "Reading" == argument
greeting("John", "Reading");

// rest parameters
function myFunc(a, b, ...manyMoreArgument) {
    console.log(`a = ${a}`)
    console.log(`b = ${b}`)
    console.log(`manyMoreArgument = ${manyMoreArgument}`)
}
myFunc("fauzan", 30, "Jawa Barat", "Bekasi")

// closure // real case, jarang digunakan
// function sayHello() {
//     const bebas = "abcd"

//     function nestedFunction() {
//         console.log(bebas)
//     }
// }

// currying function // real case, jarang digunakan

// recursive // real case, jarang digunakan

// > RETURN FUNCTION
// function yang dapat mengembalikan nilai
// Case. Buatlah 2 buah function, di mana function pertama melakukan penjumlahan 2 angka, dan function kedua menampilkan hasil penjumlahan
const Sum = (number1, number2) => {
    return number1 + number2;
}
console.log(Sum(10,2));

const Output = (result) => {
    console.log("Hasil penjumlahan = "+  result);
}
Output(Sum(10,2))

// arrow function limitation
// kalo menggunakn arrow function tidak bisa menggunakan this di oop
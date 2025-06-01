// > Basic Operator

// Plus
let num1 = 10
let num2 = 5
let result1 = num1 + num2
let result2 = num1 * num2
let result3 = num1 / num2
console.log(result1)
console.log(result2)
console.log(result3)

let num3 = 100
let num4 = '5'
console.log(num3 + num4) // number ketika bertemu string, dia akan menjadi string
console.log(num3 - num4) // mengikuti matematika, malah beneran dikurangi.
// hanya penjumlahan saja, yang ditambah di belakangnya dan menjadi string

// modify in place
let angka1 = 5
angka1 = angka1 + 5
console.log(angka1)

let angka2 = 10;
angka2 += 5;
console.log(angka2);

// Modify in Place
let angka3 = 100;
angka3++; // increment
angka3++;
angka3++;
angka3--; // decrement
angka3--;
angka3--;
console.log(angka3)
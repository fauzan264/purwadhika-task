// 1. B
// 2. B
// 3. D

let temp = [3,2,1,5]
temp.push(3)
temp.sort()
temp.pop()
console.log(temp)

let angka = '1'
angka += '2'
angka *= 2
angka--
console.log(angka)

const pwd = ['BSD', 'JKT', 'BDG']
pwd[50] = 'SBY'
console.log(pwd.length)
console.log(pwd.indexOf('SBY'))

console.log(String(12) === 12)

let data = [1,2,3,4,5,6]
data.splice()
// pelajari dari kisi kisi
// biasanya soalnya mirip mirip, pembedanya di nama fungsinya
// harus hati-hati, dashboard purwadhika ngga bisa balik ke soal nomor sebelumnya
// 1. C
// 2. A
// 3. D
// 4. A
// 6. D
// 7. D
// 8. 
// 13. D. foreach tidak mereturn array baru, kalo map menghasilkan array baru

// - ada 25 soal 
// - 1 setengah jam
// - harus open cam dan share screen
// - kalo sudah next ngga bisa balik

const data2 = [
    'number',
    100000,
    {name: 'david', address:'Bandung'},
    () => [{result: 'callback function'}]
]

console.log(data2[3]()[0]['result'])


let x = 5;
console.log(x++);
console.log(Number("123"))
let arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
// const y; // tanpa nilai langsung error

console.log(typeof infinity) // number
console.log(parseInt("101",2))

let arr3 = [1,2,3]
let arr2 = arr3
arr2.push(2)
console.log(arr3)

const dataArr = arr3.forEach((a) => {
    return a
})
console.log(dataArr)

let nol = "0"
console.log(Boolean(nol))

// const bisa dimodifikasi jika bentuknya object/array, tapi tidak bisa direferensikan ulang
// Lexical scope = scope ditentukan oleh struktur kode, bukan saat dijalankan
// Di fungsi global (non-strict), this = object global (window di browser)
// Closure = fungsi dalam fungsi yang bisa akses scope luar
// ... (spread operator) menyebar elemen bukan menyatukan, itu tugas rest parameter
// null == undefined → true. Tapi bukan dengan semua falsy value
// name[2] = "a" → hasilnya "a", karena "Rian"[2] = a
// i *= 2 → O(log n), bukan O(n^2)
// arr2 referensi ke arr → jadi arr ikut berubah jadi [1,2,3]
// [] == false → true (quirky coercion JS)
// variable undefined atau belum dikasih value ketika ditambah +1 jadi NaN
console.log("Hello".length)

let a
console.log(a+1)
// NaN === NaN → false
// [] == false → true karena coercion
// 0 === false → false (tipe berbeda)
// this di global/function biasa = window
// .filter() kembalikan elemen yg lolos kondisi
// symbol adalah tipe data primitif unik
// Array + array = string → "1,2" + "3,4" = "1,23,4"

{
let arr = [1,2,3];
// arr.splice(1,1)
// console.log(arr)
let result = arr.splice(1, 1);
console.log(result);
}

{
    let arr = [1,2,3,4]
    let result = arr.splice(2)
    console.log(arr)
    // console.log(result)
}

console.log(typeof undefined)
console.log("true" == true)
console.log(null == undefined)
// 1.a
// 2.a
// 3.b
// 4.b
// 5.b
// 6.b
// 7.b
// 8.a
// 9.b
// 10.a
// 11.a
// 12.b
// 13.a
// 14.b
// 15.a
// 16.a
// 17.b
// 18.a
// 19.c
// 20.b
// 21.c
// 22.b
// 23.a
// 24.a
// 25.c
// 26.c
// 27.a
// 28.a
// 29.d
// 30.b
// 31.
// 32.
// 33.
// 34.
// 35.
// 36.
// 37.
// 38.
// 39.
// 40.
// 41.
// 42.
// 43.
// 44.
// 45.
console.log([1,2]+[3,4])
console.log(typeof (() => {}))

// ✅ Truthy values:
// - []
// - {}
// - "0"
// - function () {}
// - Infinity

// ❌ Falsy values di JavaScript hanya 7:
// - false
// - 0
// - -0
// - 0n
// - ""
// - null
// - undefined
// - NaN


let data1 = [1,2,3,4,5]
console.log(data1)
data1.splice(1,1,9)
console.log(data1)

const clubs = ["persib", "persija", "persebaya", "dewa united"]
clubs.splice(2,0,"bali united", "psm makassar")
clubs.shift()
console.log(clubs)

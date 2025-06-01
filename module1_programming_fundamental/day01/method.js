// > Methods
// Function siap pakai yang disediakan untuk memanipulasi data

// String Methods
// .slice
let word = 'Lorem ipsum dolor amet'
console.log(word.slice(0, 3)) // index ke 0 sampai ke 3, tapi indeks ke 3 nya ngga include

// .replace
let school = 'Purwadhika Digital School'
school = school.replace('Purwadhika', 'Pwd')
console.log(school)

// .indexOf : Mencari karakter berada di index ke berapa?
let randomAlphabets = 'ksakdjafklajdlf'
console.log(randomAlphabets.indexOf('a'))
console.log(randomAlphabets.lastIndexOf('a')) // dari belakang ke depan

// .length : Menghitung jumlah karakter suatu string
console.log(randomAlphabets.length);

// .toUpperCase merubah ke angka besar
console.log(randomAlphabets.toUpperCase())
// .toLowerCase merubah ke angka kecil
console.log(randomAlphabets.toLowerCase())

// Number Methods
// .toString : Merubah tipe data number menjadi string
let discount = 70
let discountString = discount.toString()
console.log(discount)

// .toFixed
let point = 90.4
console.log(point.toFixed()) // dibulatkan ke bawah


let randoms = '1abc23';
// Number : Merubah tipe data string menjadi number
console.log(Number(randoms)) // lebih strict

// parseInt : Merubah tipe data string menjadi number
console.log(parseInt(randoms)) // lebih flexible, tapi dia akan mengambil angkanya saja, ketika menemukan karakter selain angka dia akan berhenti. kalo paling depannya alphabet, otomatis NaN

// Date Methods
let now = new Date();

let getFullYear = now.getFullYear();
let getMonth = now.getMonth();
let getDate = now.getDate();
console.log(getFullYear, getMonth + 1, getDate)
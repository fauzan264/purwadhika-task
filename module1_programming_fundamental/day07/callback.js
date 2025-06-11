// > CALLBACK FUNCTION
// function yang dijadikan argument oleh function lain

// Case. Buatkan 2 buah function, dimana function pertama melakukan penjumlahan, dan function yang kedua menampilkan hasil dari penjumlahan tersebut
// const totalData = (a,b) => a + b

// jadi kayak kerja 2 kali
// const result = (a,b) => {
//     const total = totalData(a,b)
//     return `Hasil dari penjumlahan: ${a} + ${b} = ${total}`
// }
// console.log(result(1,2))

// ini melakukan sum
function Sum(num1, num2) {
    return num1 + num2
}

// tugasnya clear, hanya menampung result saja
function Output(result) {
    console.log(result)
}

let resultSum = Sum(10, 5) // 15
Output(resultSum)

// 1. Indirect Callback, define dulu functionnya baru dijadiin callback
function CallbackSum(num1, num2, cb) {
    cb(num1 + num2) // CallbackOutput(num1 + num2)
}

function CallbackOutput(result) {
    console.log(result)
}

CallbackSum(10, 5, CallbackOutput)

// 2. Direct Callback
function IndirectCallbackSum(num1, num2, cb) {
    cb(num1 + num2)
}

IndirectCallbackSum(3, 5, (result) => {
    console.log(result)
})

// kenapa kita butuh callback function?
// karena untuk meng-handle proses asynchronous

// Case. Menghapus data dari database, kemudian setelah itu menampilkan data terbarunya
const numbers = [1, 2, 3, 4, 5]
// function DeleteNumber() {
//     setTimeout(() => {
//         numbers.pop()
//     }, 5000)
// }

// function ShowNumber() {
//     setTimeout(() => {
//         console.log(numbers)
//     }, 3000)
// }

// DeleteNumber()
// ShowNumber() // ini akan muncul duluan karena delay nya, dan data tidak akan valid

// ketika ada proses ini, kita tidak akan pernah tau, proses yang dibutuhkan berapa lama

function DeleteNumber(cb) {
    setTimeout(() => {
        numbers.pop()
        cb()
    }, 5000)
}

function showNumberCallback() {
    setTimeout(() => {
        console.log(numbers)
    }, 3000)
}

DeleteNumber(showNumberCallback)
// dari sisi jalannya program tidak masalah
// dihapus dulu datanya dari db
// baru menampilkan datanya

// ada callback hell
// ketika kita memanggil function sudah nested

// callback hell, karena nested
// DeleteNumber(function() {
//     DeleteNumber(showNumberCallback)
// })

// callback function akan menjadi spesial ketika melakukan pemanggilan asynchronous
// kekurangan callback itu callback hell, sulit menghandle response asynchronous nya
// solusinya promise
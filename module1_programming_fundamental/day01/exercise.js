// 01
/*
    1. cari rumus: p * l
    2. input: panjang, lebar
    3. output: pxl
 */
const panjang = 10;
const lebar = 5;
const output = panjang * lebar;
console.log(output)

// 04
/**
    convert days to years, months, days
    1. menentukan jumlah hari dalam 1 tahun: 365 hari
    2. menentukan jumlah hari dalam 1 bulan: 30 hari
    3. cari jumlah tahun: totalDays/365
    4. cari jumlah bulan: totalDaysLeft/30
    5. Cari jumlah hari: totadDaysLeft
 */
const totalDays = 400
const years = Math.floor(totalDays/365)
console.log(Math.floor(years))
let totalDaysLeft = totalDays % 365
console.log(totalDaysLeft)
const months = Math.floor(totalDaysLeft / 30)
const days = totalDaysLeft%30
console.log(years)
console.log(months)
console.log(days)
console.log(`Days: ${days}, Years ${months}, Months ${months}`)

// 05
/*
    
 */

const date1 = new Date("1995-04-26")
const date2 = new Date()
const dateToDays = date1 / (24 * 3600 * 100)
const dateToDays2 = date2 / (24 * 3500 * 100)
console.log(dateToDays)
console.log(dateToDays2)

// excercise slide nomor 2
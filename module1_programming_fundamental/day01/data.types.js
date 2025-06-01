// > Data Types
// Primitive Data Type      : String, Number, Boolean, Undefined, Null
// Non-Primitive Data Type  : Array & Object

// Primitive Data Types
// 1. String    : segala sesuatu yang diapit dengan petik ('', "", ``)
let name = 'Defryan'
let address = "Bogor"
let hobby = `Futsal`
console.log(
    typeof name+ "\n",
    typeof address+ "\n",
    typeof hobby+ "\n"
)

// 2. Number
let point = 100
console.log(typeof point)

let float = 9.5
console.log(typeof float)

// 3. Boolean: Bernilai true or false
let isMarried = false
let isGraduated = true
console.log(typeof isMarried)
console.log(typeof isGraduated)

// 4. Undefined & Null
let courseName // variable tapi belum di isi
let studentName = null // punya sesuatu, tapi data awalnya adalah null
console.log(courseName)
console.log(studentName)

// Non-Primitive Data Types

// sebenernya day 1 sudah masuk typescript di day 1, tapi kasian untuk yang baru belajar
// > Variable
// Menyimpan Data
// Ex. 10x console.log('Nama')

let name = "Fauzan";
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)
// console.log(name)

// variable declaration rule;
// 1. diawali dengan huruf atau, symbol khusus ($ dan _)

for (let i = 0; i < 10; i++) {
    console.log(name)
}

// 2. Penamaan variable harus jelas dan deskriptif (jangan terlalu global)
var stadionName = 'Bung Karno'
var purwadhikaProgramCourse = 'Job Connector Web Development'

// 3. Format (camelCase, snake_case, PascalCase)
var StadiumName
var stadiumName
var stadium_name
console.log()

// 4. case sensitive
var fruit = 'Apel'
var Fruit = 'Jeruk'
console.log(Fruit)

// variable declaration
// var vs let vs const
// var bisa digunakan penamaan yang sama atau global
// let tidak diperbolehkan penamaan yang sama
// const tidak diperbolehkan penamaan yang sama

// var
// var program = 'Javascript'
// var program = 'PHP'

// let
// let car = 'Wuling'
// let car = 'BYD'

// const
// const car = 'Wuling'
// const car = 'BYD'

// 2. var dan let, valuenya bisa di update. sedangkan const tidak bisa di update.
let discount = 10
discount = 1000
console.log(discount)

// 3. var tidak punya batasan scope, let dan scope punya batasan scope

// Global Scope
{
    // Local Scope
    {
        // Local Scope
    }
}
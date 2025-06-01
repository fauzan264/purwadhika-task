// > TRUTHY-FALSE
// Tipe data non-boolean yang akan dikonversi menjadi nilai boolean (true/false)
// Falsy: "", 0, undefined, null, NaN
// Truthy: " ", "abc", 1, 2, 3, [], {}

console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(" "))
console.log(Boolean(1))
console.log(Boolean([]))
console.log(Boolean({}))

// case, Buatlah pengkondisian, apabila value nya 0 maka tampilkan console.log(Invalid), apabila valuenya > 0 maka tampilkan console.log(valid)
let value = 100
if (value === 0) {
    console.log("Invalid")
} else if (value > 0) {
    console.log("Valid")
}

if (value) {
    console.log("Valid")
} else if (!value){
    console.log("Invalid")
}

let input = ""
if (input) {
    console.log("Input is valid")
} else {
    console.log("Input is required")
}
// > OBJECT
const cars = {
    brand: 'BMW',
    price: 10000000000,
    color: 'black'
}
console.log(cars.brand)
console.log(cars['price'])

cars.brand = "Toyota"
console.log(cars)
// data punya entitas penunjang

delete cars.brand;
console.log(cars)

// Array of object
const products = [
    { name: 'Apel', price: 30000, stock: 100 },
    { name: 'Jeruk', price: 15000, stock: 200 },
]

for (let product of products) {
    console.log(product.name)
    console.log(product.price)
    console.log(product.stock)
}

// optional chaining
const user = {};
console.log(user.address) // undefined
console.log(user?.address?.street) // error, cara aman pakai ?

// destructuring object
// metode penyimpanan property ke dalam masing-masing variable

const student = {
    fullName: 'Fauzan',
    address: 'Bekasi',
    hobby: 'Futsal'
}

// fungsinya
// const { fullName, address, hobby } = student
// console.log(fullName)
// console.log(address)
// console.log(hobby)

function Greeting() {
    let fullName;
    let hobby

    return {fullName, hobby}
}

const {fullName, hobby} = Greeting()
console.log(fullName, hobby)

// dibolak balik tidak masalah yang penting nama variable nya harus sama dengan yang di return
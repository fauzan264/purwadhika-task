// > CLASS
// cetakan untuk membuat object

const products = [
    {
        name: "Apel",
        price: 15000,
        stock: 100
    },
    {
        name: "Jeruk",
        price: 20000,
        stock: 150
    },
    {
        name: "Anggur",
        price: 25000,
        stock: 200
    },constructor
];

// class adalah blueprint
class Product {
    // constructor sebuah function untuk mencetak object product
    constructor(name, price, stock) {
        this.name = name
        this.price = price
        this.stock = stock
    }
}

// urutan harus sama dengan data yang sudah di construct
const product1 = new Product('Apel', 15000, 10)
console.log(product1.name)

const arrOfProducts = [
    new Product('Apel', 15000, 10),
    new Product('Anggur', 20000, 20),
    new Product('Jeruk', 25000, 30)
]
/**
 * Challenge
 * disebuah supermarket terdapat banyak sekali kategori produk: seperti snack, pakaian, dan elektronik.
 * 1. tentukan entitas apa saja yang terdapat di tiap tiap kategori produk
 * 2. buatkan class untuk tiap kategori produk
 */

class Category {
    constructor(sku, name, description) {
        this.sku = sku
        this.name = name
        this.description = description
    }
}

class SnackCategory extends Category {
    constructor(sku, name, description, exipredDate) {
        super(sku,name,description)
        this.exipredDate = exipredDate
    }
}

class clothesCategory extends Category {
    constructor(sku, name, description, size) {
        super(sku,name,description)
        this.size = size
    }
}

class electronicCategory extends Category {
    constructor(sku, name, description, serialNumber) {
        super(sku,name,description)
        this.serialNumber = serialNumber
    }
}

const snack = new SnackCategory(1234,'oreo','oreo kecil', '28-05-2026')
console.log(snack)

const pakaian = new clothesCategory(122, 'baju', 'baju', 'M')
console.log(pakaian)

const electronic = new electronicCategory(2222, 'samsung', 'samsung a52', '2452854289052')
console.log(electronic)

class Product1 {
    constructor(brand, name, price, stock) {
        this.brand = brand
        this.name = name
        this.price = price
        this.stock = stock
    }
}

// class Snack extends Product1 {
//     constructor(expiredDate, sku) {
//         super(brand, name, price, stock)
//         this.expiredDate = expiredDate
//         this.sku = sku
//     }
// }

// const snack2 = new Snack(12345, 'adfafda', '', '', '28-05-2026', "123456")
// console.log(snack2)
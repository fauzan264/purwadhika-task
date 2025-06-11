// Exercise 1
// ● Create a function to calculate array of student data
// ● The object has this following properties :
//      ○ Name → String
//      ○ Email → String
//      ○ Age → Date
//      ○ Score → Number
// ● Parameters : array of student
// ● Return values :
//      ○ Object with this following properties :
//          ■ Score
//              ● Highest
//              ● Lowest
//              ● Average
//          ■ Age
//              ● Highest
//              ● Lowest
//              ● Average
class Student {
    constructor(name, email, age, score) {
        this.name = name
        this.email = email
        this.age = age
        this.score = score
    }
}

// Exercise 2
// ● Create a program to create transaction
// ● Product Class
//      ○ Properties
//          ■ Name
//          ■ Price
// ● Transaction Class
//      ○ Properties
//          ■ Total
//          ■ Product
//              ● All product data
//              ● Qty
//      ○ Add to cart method → Add product to transaction
//      ○ Show total method → Show total current transaction
//      ○ Checkout method → Finalize transaction, return transaction data
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Transaction extends Product {
    constructor(product, total) {
        super(product.name, product.price)
        this.total = total
        this.product = product
    }

    static getAllProduct(products) {
        return 
    }

    getQTY() {

    }
}
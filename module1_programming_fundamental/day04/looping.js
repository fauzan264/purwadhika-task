// > LOOPING ARRAY
const products = ['Smartphone', 'Laptop', 'Tablet', 'Smartwatch', 'Headphones', 'Camera'];
for(let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// for of Loop : Me-looping seluruh item/element di dalam array
// penamaan variable harus clear, kalo di industri
// ini lebih efisien dari for biasa, tapi kalo looping lebih kompleks seperti dibatasi hanya me-looping setengah, lebih baik menggunakan for biasa
for (const product of products) {
    console.log(product)
}

const fruits = ['Apple', 'Banana', 'Cherry', 'Elderberry'];
for (const fruit of fruits) {
    console.log(fruit)
}
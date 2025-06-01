// > ARRAY
// Non Primitive: Array dan Object
// array itu struktur data
// array itu sebuah wadah, yang bisa menampung lebih dari 1 data
const fruits01 = "Anggur";
const fruits02 = "Apel";
const fruits03 = "Jeruk";
// case. List data buah
// banyak variable bisa memakan banyak memori
// mau maintanance juga cukup sulit
const fruits = ["Anggur", "Apel", "Jeruk"];

// array memiliki indeks di mulai dari 0
console.log(fruits[1]);

fruits[2] = "Mangga"
console.log(fruits)

// delete data
delete fruits[0]
console.log(fruits)

fruits.shift() // menghapus array nya juga
console.log(fruits)

// > ARRAY METHOD
// 01 - Length: menghitung jumlah element/item di dalam array
const number = [1, 2, 3, 4,5]
console.log(number.length)

// 02 - Push : Menambahkan element/item baru di index paling akhir
const cars = ['Toyota', 'Honda', 'Suzuki'];
cars.push("BYD")
console.log(cars)

// 03 - Unshift : menambahkan element/item baru di index paling depan
cars.unshift('Tesla');
console.log(cars)

// 04 - Pop : Menghapus element/item paling akhir
cars.pop();
console.log(cars);

// 05 - Shift
cars.shift();
console.log(cars)

// 06 - IndexOf : Mencari index dari suatu element/item
const motors = ['Beat', 'Vario', 'Scoopy'];
console.log(motors.indexOf('Vario'));
// kalo resultnya -1 berarti data tidak ditemukan

// 07 - LastIndexOf: Mencari index dari suatu element/item dari belakang
const numbers = [1, 2, 3, 4, 3, 5];
console.log(numbers.lastIndexOf(3));

// 08 - Includes: mengecek apakah suatu element/item ada di dalam array
const pets = ['Kucing', 'Anjing', 'Burung']
console.log(pets.includes('buaya'))

// 09 - Slice: Mengambil sebagian element/item dari array
const colors = ['Merah', 'Hijau', 'Biru', 'Kuning']
console.log(colors.slice(0, 3));

// 10 - Splice: Menambahkan atau menghapus element/item pada index tertentu
// .splice(index, jumlah yang dihapus, item baru);
const vegetables = ['Wortel', 'Bayam', 'Kangkung'];
vegetables.splice(0, 1); // akan mendelete index 0
console.log(vegetables);
vegetables.splice(1, 0, 'Sawi'); // akan menambahkan data, tapi tidak menghapus data apapun dan index 1 akan dipakai oleh Sawi
console.log(vegetables)

const foods = ['Nasi', 'Ayam', 'Sayur']
foods.splice(1,0,'Ikan')
console.log(foods)

const drinks = ['Teh', 'Kopi', 'Susu']
drinks.splice(2,1,'Jus')
console.log(drinks)

const products = ['Laptop', 'Smartphone', 'Tablet', 'Smartwatch', 'Headphone'];
products.splice(1, 2, 'Smart Speaker', 'Smart TV');
console.log(products);
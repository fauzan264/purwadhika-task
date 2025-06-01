// Variable
let fullName: string = "Fauzan"
// fullName = 123; // karena beda tipe data
fullName = "Ahmad"
console.log(fullName)

let isMarried: boolean = true;
// isMarried = 'true'; 
console.log(isMarried);

let description: string | number | undefined = '';
description = 62823462347843;
description = "9879854798257498";
description = undefined;

// Array
// Array dengan tipe data yang seragam
const fruits: string[] = ['Apel', 'Jeruk', 'Anggur'];
console.log(fruits)

// Array tupple: Array dengan tipe data yang beragam
const randomArray: [number, boolean, string] = [123, true, 'Hello']
console.log(randomArray)

// function
// di production tidak boleh ada unused code, atau dihapus kalo ngga dipake
// type any bisa memuat tipe data apapun, di typescript jangan sampai ada any
function greeting(username: string, hobby: string) {
    console.log(`Hello, ${username}, my hobby is ${hobby}`);
}
greeting('Fauzan', 'Badminton')
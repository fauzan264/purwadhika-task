// ● Write a code to display the multiplication table of a given integer.
// ○ Example : Number → 9
// ○ Output : 
// ■ 9 x 1
// ■ 9 x 2
// ■ …
// ■ 9 x 10
let inputNumber = 9
for (let i = 1; i <= 10; i++) {
    console.log(`${inputNumber} x ${i}`)
}

// ● Write a code to check whether a string is a palindrome or not.
// ○ Example : ‘madam’ → palindrome
{
    let str = "madam"
    let result = str.split("").reverse().join("")

    // str == result ? console.log(`${str} is a palindrome`) : console.log(`${str} is not a palindrome`)
    if (str == result) {
        console.log(`${str} is a palindrome`)
    } else {
        console.log(`${str} is not a palindrome`)
    }

    // let result2 = ""
    // komparasi antar karakter depan dan belakang menggunakan for loop
    for(let i = 0; i < str.length; i++) {
        console.log(i)
        for(let j = str.length-1; j > 0; j--) {
            if(str[i] !== str[j]) {
            }            
        }
    }
}

function isPalindrome(str) {
    // Ubah ke huruf kecil
    str = str.toLowerCase();

    // Hilangkan spasi manual (jika ingin abaikan spasi)
    let cleanStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            cleanStr += str[i];
        }
    }

    // Bandingkan huruf dari depan dan belakang
    for (let i = 0; i < cleanStr.length / 2; i++) {
        if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
            return `${str} is not a palindrome`;
        }
    }

    return `${str} is a palindrome`;
}

console.log(isPalindrome("madam"))

// ● Write a code to convert centimeter to kilometer.
// ○ Example : 100000 → “1 km”
let centimeter = 100000;
let kilometer = centimeter / 100000;
console.log(`${kilometer} km`);

// ● Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
let number = 1000;
let formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2
}).format(number);
console.log(formatted); // Output: "Rp1.000,00"

// ● Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
let wordRemove = "Hello world"
let search_string = "ell"
wordRemove = wordRemove.replace(search_string, "")
console.log(wordRemove)

// ● Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
let wordToCap = "hello world";

wordToCap = wordToCap
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(wordToCap); // Output: "Hello World"
// bisa pakai looping

// ● Write a code to swap the case of each character from string 
// ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
let wordSwap = "The QuiCk BrOwN Fox"
let result = ""
for (let i = 0; i < wordSwap.length; i++) {
    if(wordSwap[i] >= 'a' && wordSwap[i] <= 'z') {
        result += wordSwap[i].toUpperCase()
    } else if(wordSwap[i] >= 'A' && wordSwap[i] <= 'Z') {
        result += wordSwap[i].toLowerCase()
    } else {
        result += wordSwap[i]
    }
}
console.log(result)

// ● Write a code to find the largest of two given integers
// ○ Example : num1 = 42, num2 = 27 → 42
let num1 = 42
let num2 = 27
let result2 = (num1 > num2) ? num1 : num2
console.log(result2)

// ● Write a conditional statement to sort three numbers
// ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
{
    let num1 = 42
    let num2 = 27
    let num3 = 18
    numbers = []


    numbers.push(num1, num2, num3)
    // console.log(numbers)
    for (let i = 0; i < numbers.length; i++) {
        // console.log(i)
        for(let j = i; j < numbers.length; j++) {
            // console.log(j)
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
            }
        }
    }
    console.log(numbers)
}

// ● Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data 
// type.
// ○ Example : “hello” → 1
let checkType = "hello"
console.log(typeof checkType == "string")
if (typeof checkType == "string") {
    console.log(1)
} else if (typeof checkType == "number") {
    console.log(2)
} else {
    console.log(3)
}

// ● Write a code to change every letter a into * from a string of input
// ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
let word = 'An apple a day keeps the doctor away'
word = word.toLowerCase().replaceAll("a","*")
console.log(word)








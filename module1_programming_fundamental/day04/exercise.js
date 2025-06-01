// Exercise 1
// Create a function that can create a triangle pattern according to the height we provide like the 
// following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// ● Parameters : height → triangle height
const printTriangle = (height) => {
    // let counter = 1;
    let pattern = ""
    for (let i = 1; i <= height; i++) {
        // let row = '';
        for (let j = 1; j <= i; j++) {
            pattern += "*"
            // Format angka jadi dua digit (01, 02, ..., 10)
            // row += String(counter).padStart(2, '0') + ' ';
            // counter++;
        }
        pattern += "\n"
        // console.log(row.trim());
    }
    return pattern
}
console.log(printTriangle(4));

// Exercise 2
// ● Create a function that can loop the number of times according to the input we provide, and will 
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with 
// "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz
const fizzBuzzLoop = (inputNumber) => {
    const result = []
    for (let i = 1; i <= inputNumber; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz")
        } else if (i % 3 == 0) {
            result.push("Fizz")
        } else if (i % 5 == 0) {
            result.push("Buzz")
        } else {
            result.push(i)
        }
    }
    return result
}
console.log(fizzBuzzLoop(15))

// Exercise 3
// ● Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”z
const BodyMassIndex = (weight, height) => {
    const BMI = weight / Math.pow(height, 2)
    let result = ""
    if (BMI > 39.9) {
        result += "obesity"
    } else if (BMI >= 30.0 && BMI <= 39.9 ) {
        result += "very overweight"
    } else if (BMI >= 25.0 && BMI < 30.0) {
        result += "overweight"
    } else if (BMI >= 18.5 && BMI < 25.0) {
        result += "ideal"
    } else {
        result += "less weight"
    }
    return result
}
console.log(BodyMassIndex(67,1.63))

// Exercise 4
// ● Write a function to remove all odd numbers in an array and return a new array that contains even 
// numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
const removeAllOddNumbers = (arr) => {
    let result = []
    if (typeof arr != 'object') {
        return result = "Invalid input"
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i])
        } 
    }
    return result
}


let arr = [1,2,3,4,5,6,7,8,9,10]
for (let number of arr) {
    if (number % 2 == 0) {
        console.log(number)
    }
}
console.log(typeof arr)
console.log(removeAllOddNumbers(arr))

// Exercise 5
// ● Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
{
    let str = "Hello World"
    let result = str.split(" ")
    console.log(result)
}
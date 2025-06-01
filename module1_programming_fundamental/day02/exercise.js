// ● Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number
{
    let checkNumber = 25
    if (checkNumber % 2 == 0) {
        console.log("even number")
    } else {
        console.log("odd number")
    }
}
// ● Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number
{
    let number = 7;
    let isPrime = true;

    // Bilangan kurang dari 2 bukan bilangan prima
    if (number < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i < number; i++) {
            // console.log(number % i)
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    isPrime ? console.log(number + " adalah bilangan prima") : console.log(number + " bukan bilangan prima");
}

// ● Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6
{
    let limit = 5
    let sum = 0
    for (let i = 1; i <= limit; i++) {
        sum += i
    }
    console.log(sum)
}

// ● Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
{
    let inputNumber = 4
    let result = 1 // karena pasti di mulai dari dikali 1
    for (let i = inputNumber; i > 0; i--) { // value i di set 2
        result *= i // melakukan looping result dikalikan dengan numberFactorial yang dicari
    }
    console.log(result)
}

// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
{
    let n = 2;
    let previousNumber = 0;
    let currentNumber = 1;
    let next
    let result;
    
    if (n === 0) {
        result = 0
    } else if (n === 1) {
        result = 1
    } else {
        for(let i = 2; i <= n; i++) {
            next = previousNumber + currentNumber;
            previousNumber = currentNumber;
            currentNumber = next;
            // console.log(previousNumber, currentNumber)
            // console.log(next)
        }
        result = next
    }
    console.log(result)
}

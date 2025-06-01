// Exercise
// SLIDE 1
// 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
const getDataWithoutSort = (arr) => {
    let result = {}
    for(let i = 0; i<arr.length; i++) {
        for(j = i+1; j<arr.length; j++) {
            if(arr[i]>arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    let sum = 0;
    for(let i = 0; i<arr.length; i++) {
        sum += arr[i]
    }

    getMinValue = arr[0]
    getMaxValue = arr[arr.length-1]
    getAverage = sum/arr.length
    // console.log(arr)
    // console.log(getMinValue)
    // console.log(getMaxValue)
    // console.log(getAverage)
    result.lowest = getMinValue
    result.highest = getMaxValue
    result.average = getAverage
    return result
}

let avg = getDataWithoutSort([12, 5, 23, 18, 4, 45, 32])
console.log(avg)

// 2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
// separated by commas and - the last word - by an 'and'.
// a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
const words = (arr) => {
    // with slice
    // const getLastArr = arr[arr.length - 1]
    // const getArrNotLast = arr.slice(",")
    // let result = `${getArrNotLast},and ${getLastArr}`;
    // return result

    let result = ""
    for(let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            // console.log(i)
            result += `and ${arr[i]}`
        } else {
            result += `${arr[i]},`
        }
    }

    return result
}

{
    arr = ["apple", "banana", "cherry", "date"]
    console.log(words(arr))
}

// 3. Write a function from a given array of numbers and return the second smallest number
// a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
const getSecondSmallest = (numbers) => {
    if (typeof numbers != 'object') {
        return "invalid type"
    }

    for(let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            if(numbers[i] > numbers[j]) {
                let temp = numbers[i]
                numbers[i] = numbers[j]
                numbers[j] = temp
            }
        }
    }
    return numbers[1]
}

{
    const numbers = [5, 3, 1, 7, 2, 6]
    console.log(getSecondSmallest(numbers))
}

// 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
// are of the same length.
// a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
const calculate = (data1, data2) => {
    let result = []
    for(let i = 0; i < data1.length; i++) {
        let temp;
        temp = data1[i] + data2[i]
        result.push(temp)
    }
    return result
}

let data1 = [1, 2, 3]
let data2 = [3, 2, 1]
console.log(calculate(data1, data2))


// 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
// not already in the array.
// a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
// b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
const newValueArr = (arr, newValue) => {
    if (!arr.includes(newValue)) {
        arr.push(newValue)
    }
    return arr
}
let dataArr = [1, 2, 3, 4]
console.log(newValueArr(dataArr,4))
console.log(newValueArr(dataArr,7))


// SLIDE 2
// 1. Write a function from a given array of mixed data types and return the sum of all the number
// a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3
const sumAllTheNumber = (arr) => {
    let result = 0
    for(let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            result += arr[i]
        }
    }
    return result
}
const mixedArray = ["3", 1, "string", null, false, undefined, 2]
console.log(sumAllTheNumber(mixedArray))

// 2. Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The 
// array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the 
// array can only contain 5 elements). 
// a. Example : 
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 
// The function will return [5, 10, 24, 3, 6]
const multipleGivenInteger = (...numbers) => numbers.splice(0,5)

console.log(multipleGivenInteger(5, 10, 24, 3, 6, 7, 8 ))


// 3. Write a function that will combine 2 given array into one array
// a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] 
const combineArray = (arr1, arr2) => {
    let result = arr1
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i])
    }
    return result
}
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]
console.log(combineArray(arr1,arr2))


// 4. Write a function to find duplicate values in an array
// a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
const findDuplicates = (arr) => {
    let temp = []
    let result = []
    for (let i = 0; i < arr.length; i++) {
        // console.log(temp.indexOf(arr[i]))
        if (temp.indexOf(arr[i]) === -1 || result.indexOf(arr[i]) !== -1) {
            temp.push(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result
};
const arr3 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicates(arr3)); 

// 5. Write a function to find the difference in 2 given array
// a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]
const findTheDifference = (arr1,arr2) => {
    let arr = arr1.concat(arr2)
    let arrDuplicates = findDuplicates(arr)
    let result = []
    // console.log(arrDuplicates)
    for (let i = 0; i < arr.length; i++) {
        // console.log(arrDuplicates.indexOf(arr[i]))
        if (arrDuplicates.indexOf(arr[i]) === -1) {
            result.push(arr[i])
        }
    }
    return result
}
{
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [3, 4, 5, 6, 7]
    console.log(findTheDifference(arr1,arr2))    
}


// SLIDE 3
// 1. Based on the array below write a function that will return primitive data types only. 
// let arr = [1, [], undefined, {}, "string", {}, []];
// a. The function will return [1, undefined, “string”]
const getPrimitiveValues = (arr) => {
    result = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object') {
            result.push(arr[i])
        }
    }
    return result
}
let arr5 = [1, [], undefined, {}, "string", {}, []];
console.log(getPrimitiveValues(arr5))

// 2. Write a function from the below array of number that will return sum of duplicate values. 
// let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// a. The function will return 40
const sumDuplicateValue = (arr) => {
    temp = []
    arrDuplicates = []
    result = 0
    for (let i = 0; i < arr.length; i++) {
        if (temp.indexOf(arr[i]) != -1) {

            if (arrDuplicates.indexOf(arr[i]) === -1) {
                arrDuplicates.push(arr[i],arr[i])
            } else {
                arrDuplicates.push(arr[i])
            }

        } else {
            temp.push(arr[i])
        }
    }

    for (let data of arrDuplicates) result += data

    return result
}
let arr4 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumDuplicateValue(arr4))

// 3. Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick 
// between rock, paper, or scissor.
// a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win
const gameRockPaperScissors = (user1) => {
    let data = ["scissor", "rock", "paper"]
    let user2 = data[Math.floor(Math.random() * data.length)]
    console.log(user2)

    let result = ""
    if (user1 == "scissor" && user2 == "paper" ||
        user1 == "rock" && user2 == "scissor"||
        user1 == "paper" && user2 == "rock"
    ) {
        result += "win"
    } else if (user1 == "scissor" && user2 == "scissor" ||
        user1 == "rock" && user2 == "rock"||
        user1 == "paper" && user2 == "paper"
    ) {
        result += "draw"
    } else {
        result += "lose"
    }

    return result
}
console.log(gameRockPaperScissors("rock"))



// simple search data pakai prompt
// kalo datanya ngga ada, dia nampilin data not found
// kalo datanya ngga ada, nampilin detail infonya
// setelah selesai balik ke search nya lagi


{/* <script>
  const input = prompt('Input anything');
  alert(input);
  const products = [
    {
      name: 'Apel',
      price: 37000,
      stock: 55,
      unit: 'Kg',
      category: 'Buah',
    },
    {
      name: 'Anggur',
      price: 41500,
      stock: 25,
      unit: 'Kg',
      category: 'Buah',
    },
    {
      name: 'Sawi',
      price: 2350,
      stock: 100,
      unit: 'Pcs',
      category: 'Sayur',
    },
  ];
</script> */}

// kerjakan leetcode.com
// 15 easy
// 4 medium
// topik bebas
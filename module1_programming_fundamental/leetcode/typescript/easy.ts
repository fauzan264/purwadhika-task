// 2620. Counter
function createCounter(n: number): () => number {
    return function() {
        return n++
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// 2703. Return Length of Arguments Passed
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// 412. Fizz Buzz
function fizzBuzz(n: number): string[] {
    let result: string[] = []
    for (let i: number = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz")
        } else if (i % 3 == 0) {
            result.push("Fizz")
        } else if (i % 5 == 0) {
            result.push("Buzz")
        } else {
            result.push(i.toString())
        }
    }
    return result
};

// 709. To Lower Case
function toLowerCase(s: string): string {
    return s.toLowerCase()
};

// 1. Two Sum
function twoSum(nums: number[], target: number): number[] {
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// 69. Sqrt(x)
var mySqrt = function(x) {
    let result = Math.floor(Math.sqrt(x))
    return result
};

// 58. Length of Last Word
function lengthOfLastWord(s: string): number {
    let splitData: string[] = s.trim().split(" ")
    let result: number = splitData[splitData.length - 1].length
    return result
};

// 283. Move Zeroes
// void tidak mengeluarkan return, jadinya bisa pakai console.log
/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = i; j < nums.length; j++) {
            if (nums[i] === 0) {
                let temp: number = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }

    console.log(nums)
};

// 326. Power of Three
function isPowerOfThree(n: number): boolean {
    if (n <= 0) return false;
    let result: number = Math.log10(n) / Math.log10(3);
    return Number.isInteger(result);
};
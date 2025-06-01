// 2727. Is Object Empty
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return !Object.keys(obj).length
};

// 2667. Create Hello World Function
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

// 2620. Counter
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

// 2703. Return Length of Arguments Passed
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// 2665. Counter II
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let count = init
    return {
        increment: () => ++count,
        reset: () => count = init,
        decrement: () => --count
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// 2619. Array Prototype Last
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    let result;
    if (this.length === 0) {
        result = -1
    } else {
        result = this[this.length - 1]
    }
    return result
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */


// 412. Fizz Buzz
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
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
/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    return s.toLowerCase()
};

// 1. Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

// 69. Sqrt(x)
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let result = Math.floor(Math.sqrt(x))
    return result
};

// 58. Length of Last Word
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitData = s.trim().split(" ")
    let result = splitData[splitData.length - 1].length
    return result
};

// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] === 0) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
            }
        }
    }
    return nums
};

// 326. Power of Three
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n <= 0) return false;
    let result = Math.log10(n) / Math.log10(3);
    return Number.isInteger(result);
};
// 8. String to Integer (atoi)
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const num = parseInt(s.trim());
    if (isNaN(num)) return 0;
    return Math.max(Math.min(num, 2147483647), -2147483648);
};

// 50. Pow(x, n)
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return Math.pow(x, n)
};

// 29. Divide Two Integers
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let result = Math.trunc(dividend / divisor);

    // Cek overflow
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return result;
};

// 151. Reverse Words in a String
var reverseWords = function(s) {
    let trimData = s.trim();
    let result = trimData.split(/\s+/).reverse().join(" ");
    return result;
};
console.log(reverseWords('a good   example'))

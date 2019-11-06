/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// function pow(base, power) {
//     //given a base, multiply the power a number of times
//     let result = 1;
//     //while the powercount is less than power count
//     //multiply base by power;
//     while (power > 0) {
//         result *= base;
//         power -= 1;
//     }
//     return result;
// }

function pow(base, power) {
    if (power < 0) return 1 / (base * (pow(base, Math.abs(power))));
    if (power === 0) return 1;
    if (power === 1) return base;
    return base * pow(base, power - 1);
}

// console.log(pow(2, -1))

// console.log(pow(6, 2))

module.exports = pow;

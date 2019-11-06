/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    if (power === 0) return 1;
    return base * pow(base, power - 1);
}
// Iterative approach;
// let product = 1;

// while (power >= 1) {
//     product *= base;
//     power -= 1;
// }
//return product;

console.log(pow(2, 3))

module.exports = pow;

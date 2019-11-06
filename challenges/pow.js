/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    let sign = "+";
    if (power === 0) return 1;
    if (power < 0) {
        power = Math.abs(power)
        sign = "-";
    }
    if (sign === "-") return 1 / (base * pow(base, power - 1));
    else return base * pow(base, power - 1);
}

console.log('pow(3, -1):', pow(3, -1));
console.log('pow(3, 2):', pow(3, 2));
console.log('pow(3, 0):', pow(3, 0));
module.exports = pow;
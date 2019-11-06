/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    function powHelp(product, power) {
        if (power <= 1) return product;

        return powHelp(base * product, power - 1);
    }
    return powHelp(base, power);
}

// function pow(base, power) {
//     if (power <= 1) return base;

//     return base * pow(base, power - 1);
// }

module.exports = pow;

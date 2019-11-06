/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    function exponential(x = base){
        if (power === 1) return x;
        power -= 1;
        const squared = x*base;
        return exponential(squared)
    }
return exponential()
}
module.exports = pow;

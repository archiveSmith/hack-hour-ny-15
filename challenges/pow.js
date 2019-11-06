/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, result=1) {
    if (power === 0)
        return result
    else return pow(base, power-=1, result*=base)
    
}

module.exports = pow;


console.log(pow(2,4 ))
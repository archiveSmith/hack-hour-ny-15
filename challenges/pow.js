          /* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    //base case is if you've returned the number of times you're supposed to multiply, or if power is 0
    //any number that goes to the zeroth pwoer will always be 1
    //edge case
    if (power === 1) {
        return base
    }

    if (power === 0) {
        return 1
    }

    return base * pow(base, power - 1) 

}

console.log(pow(2, 3))

module.exports = pow;

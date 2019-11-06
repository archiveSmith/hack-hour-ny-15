          /* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, value = 1) {
    let counter = 0
    //base case is if you've returned the number of times you're supposed to multiply, or if power is 0
    if (counter === power) {
        return value
    }

    //any number that goes to the zeroth pwoer will always be 1
    if (power === 0) {
        return 1
    }

    const exponential = () => {
    //now increase your counter 
    //this is how instances should play out 2  ^ 1
     //multiply 2 *= 1 = 2
     //4 *= 2 = 8
     //we want to keep multiplying these two 
     if (counter != power) {
        counter ++
        value *= base
        console.log("counter", counter, "base", base, "value", value)
        return pow(base, power, value)
     }
    console.log("value becomes", value)
    
    }

    return exponential()
}

console.log(pow(2, 3, 1))

module.exports = pow;

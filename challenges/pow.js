/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 //calculate the power of a raised base (ex: 2^4 is 2 * 2 * 2 * 2 => 16) 
 //create base case to exit function
//if power is less than or equal to 1 return base 
//else call function and multiply the base by itself based on the number of times 
//the power is being raised to and  
//decrement the power on each iteration of the call of the function to get closer to the base case of 1.

function pow(base, power) {

    if(power <= 1) {
        return base; 
    }
    
    return base * pow(base, power - 1); //calculate the power raised to 
}

console.log(pow(3, 4));
console.log(pow(2, 4));
console.log(2, 1)

module.exports = pow;

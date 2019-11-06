/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// function pow(base, power) {
//     if(power === 0) return 1;
//     if(power === 1) return base;
//     let result = base;
//     while(power > 1){
//         result *= base;
//         power -= 1
//     }

//     return result;
// }

//using recursion
function pow(base, power){
    if(power === 0) return 1;
    if(power === 1) return base;
    let result = base;
    return result * pow(base, power-=1);
}


//console.log(pow(2, 5))
module.exports = pow;

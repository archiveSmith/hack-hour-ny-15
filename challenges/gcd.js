/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let divisor = 1;

    for(let i = 2; i<= Math.min(a,b); i++){
        if(a % i === 0 && b % i === 0) divisor = i;    
    } 
    return divisor;
}
 
 console.log(' gcd(100, 120):',  gcd(100, 120))
 console.log(' gcd(30, 100):',  gcd(30, 100))
 console.log(' gcd(1000, 100):',  gcd(1000, 100))
 console.log(' gcd(100, 100):',  gcd(100, 100))
module.exports = gcd;
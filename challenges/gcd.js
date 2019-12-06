/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    //brute force method
    //while result is < 10 or 8, 10%i and 8%i
    //if result === 0 then push into cache []

    let cache = []
    let iterated = false
    let divisor = 1
    
    
    while (iterated === false){
        if (a % divisor === 0 && b % divisor === 0  ){
            cache.push(divisor)
            divisor++
            // console.log("divisor", divisor, typeof divisor )
            // console.log("cache", cache, typeof cache)
        } else{
            divisor++
        }
        
        if(divisor === a || divisor === b ){
            console.log("entered divisor if")
            iterated = true
        }
 
    }

    return Math.max(...cache)


}

const test = gcd(10,9)
console.log(test)

module.exports = gcd;
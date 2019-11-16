/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * 
0 0 0 1   numerical value 2^0
0 0 1 0   numerical value 2^1
0 1 0 0   numerical value 2^2
1 0 0 0   numerical value 2^3
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
   reverseBinary= binary.split("").reverse();
    let sum = 0;
    for(let i = 0; i< binary.length ; i++){
        sum += Math.pow(2,i) * reverseBinary[i]
    }
return sum;
}

console.log('binToDec(0101):', binToDec("0101"))

function decToBin(decimal) {
    return parseInt(decimal, 10).toString(2)
}

console.log('decToHex(63):', decToBin("3"))

function decToHex(decimal) {
    return parseInt(decimal, 10).toString(16)
}

 console.log('decToHex(81):', decToHex("63"))
module.exports = binToDec;

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
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function decToBin(decimal) {
//keep dividing decimal number by 2 w/ a remainder of 1 or 0 until the divided number is 0
//add the remainder to a numString
let binString = '';
let dividedNum = binary;
while (dividedNum !== 0){
    binString = (dividedNum % 2).toString() + binString;
    dividedNum = Math.floor(dividedNum/2);;
}
return binString;
}


function binToDec(binary){
    //iterate over each place
    //for each element, multiply current place by 2^n starting from 1 and increasing exponentially each time
    //add to decimal store
    let decimalNum = 0;
    let exponent = 0;
    for (let i = binary.length-1; i >= 0; i--){
        if (binary[i] != '0') {
            decimalNum += parseInt(binary[i])*(2**exponent)
            console.log(decimalNum)
        };
        exponent += 1;
    }
    return decimalNum;
}

console.log(binToDec('100'))

module.exports = binToDec

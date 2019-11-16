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

// iterate thru the length of binary input to access each str num
// then  decrement backwards and muliplying it by the starting index number to get the power
// and add to result

function binToDec(binary) {
  let result = 0;
  for (let i = 0; i < binary.length; i++) {
    result += binary[i] * Math.pow(2, binary.length - 1 - i);
  }
  return result;
}

console.log(binToDec('0')); // -> 0
console.log(binToDec('11')); // -> 3
console.log(binToDec('100')); // -> 4
console.log(binToDec('101')); // -> 5
console.log(binToDec('0101')); // -> 5

module.exports = binToDec;

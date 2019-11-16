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

function binToDec(binary) {
  // initiate 2 to the power of n and increase the power as you move thru the string
  // iterate thru the string and multiply each string item by 2 to the power of n starting from the right most digit
  // add the sum of the above operation
  // convert sum to num and return
  let n = 0;
  let sum = 0;
  for (let i = binary.length - 1; i >= 0; i--) {
    sum += (parseInt(binary[i] * Math.pow(2, n)));
    n += 1;
  }
  return sum;
}

console.log(binToDec('11'));
console.log(binToDec('100'));
console.log(binToDec('101'));
console.log(binToDec('0101'));
console.log(binToDec('0'));

module.exports = binToDec;

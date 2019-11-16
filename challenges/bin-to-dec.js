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
  // each column is 2 to the power of x
  // iterate from right to left
  // if the character is 1, its value is 2 raised to its index from the back
  let totalBinary = 0;
  for (let i = 1; i <= binary.length; i += 1) {
    if (binary[binary.length - i] === '1') {
      const binaryValue = 2 ** (i - 1);
      totalBinary += binaryValue;
    }
  }
  return totalBinary;
}

module.exports = binToDec;

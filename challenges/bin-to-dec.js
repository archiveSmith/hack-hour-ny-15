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
  let dec = 0;
  for (let i = 0; i < binary.length; i += 1) {
    const num = binary[i];
    dec += (num * 2 ** (binary.length - 1 - i));
  }
  return dec;
}

module.exports = binToDec;

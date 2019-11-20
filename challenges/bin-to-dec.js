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
  // iterate over the length of the string starting at end
  // set counter at 0, this will be the number we return
  // set digitValue at 1 (this will be multiplied by 2 for every digit)
  //

  let counter = 0;
  let digitValue = 1;
  for (let i = binary.length - 1; i >= 0; i--) {
    counter += parseInt(binary[i]) * digitValue;

    digitValue *= 2;
  }

  return counter;
}

module.exports = binToDec;

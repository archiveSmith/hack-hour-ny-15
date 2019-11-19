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

// function binToDec(binary) {
//   return parseInt(binary, 2);
// }

function binToDec(binary) {
  const newBin = binary.split('');
  let power = 0;
  let newNum;

  for (let i = binary.length; i > 0; i -= 1) {
    //  console.log(binary[i]);
    newNum = Number(binary[i]) * (2 ** power);
    // console.log(newNum);
    power += 1;
  }
  return newNum;
}

console.log(binToDec('0101'));
console.log(binToDec('0')); //   -> 0
console.log(binToDec('11')); //  -> 3
console.log(binToDec('100')); // -> 4
console.log(binToDec('101')); // -> 5
console.log(binToDec('0101')); // -> 5

module.exports = binToDec;

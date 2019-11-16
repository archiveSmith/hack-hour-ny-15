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
  binary = binary.split('').reverse().join('');
  let sum = 0;
  for (let i = 0; i < binary.length; i += 1) {
    if (binary.charAt(i) === '1') {
      console.log(i);
      sum += Math.pow(2, i);
      console.log(sum);
    }
  }
  return sum;
}
console.log(binToDec('10000'));

function decToBin(decimal) {
  let largePowFound = false;
  let count = 0;
  while (largePowFound === false) {
    if (2 ** (count + 1) > decimal) {
      largePowFound = true;
    } else { count += 1; }
  }
  console.log(count);
  const bin = ['1'];
  decimal -= (2 ** count);
  for (let i = 1; i <= count; i += 1) {
    console.log(i);
    console.log(decimal);
    console.log(decimal - 2 ** (3 - i));
    if (decimal - 2 ** (3 - i) >= 0) {
      console.log(i);
      decimal -= 2 ** (3 - i);
      bin.push('1');
    } else bin.push('0');
  }
  return bin;
}
console.log(decToBin(10));
module.exports = binToDec;

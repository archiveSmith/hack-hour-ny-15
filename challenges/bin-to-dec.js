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


// after a digit reaches 1 in binary, an increment resets it to 0
// also causes an increment of the next digit to the left
// digit represents an increasing power of 2, with the rightmost digit representing 2 to the power of 0,
// the next representing 2 to the power of 1, then 2 to the power of 2, and so on.
// The value of a binary number is the sum of the powers of 2 represented by each "1" digit.

function binToDec(binary) {
  // The parseInt() method converts a string into an integer (a whole number). It accepts two arguments.
  // The first argument is the string to convert. The second argument is called the radix.
  // This is the base number used in mathematical systems.
  const num = parseFloat(binary);
  console.log(num);
  let decValue = 0;

  // Initializing base value to 1,
  // i.e 2^0
  let base = 1;

  for (let i = num.length - 1; i >= 0; i -= 1) {
    if (num[i] === '1') {
      decValue += base;
      base *= 2;
    }
    console.log(decValue);
    return decValue;
  }
}

console.log(binToDec('0'));
console.log(binToDec('11'));
console.log(binToDec('100'));
console.log(binToDec('101'));

module.exports = binToDec;

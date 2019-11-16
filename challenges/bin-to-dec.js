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
  // INITIALIZE COUNT AND INDEX VARIABLES AT 0
  let count = 0;
  let index = 0;
  // ITERATE THROUGH BINARY STRING FROM THE BACK TOWARS THE FRONT
  // ADD 2 ^ INDEX TO COUNT
  for (let i = binary.length-1; i >= 0; i--) {
    if (binary[i] === '1') {
      count += Math.pow(2,index);
    }
    index++;
  }
  // RETURN COUNT
  return count;
}

console.log(binToDec('0'))   //-> 0
console.log(binToDec('11'))  //-> 3
console.log(binToDec('100')) //-> 4
console.log(binToDec('101')) //-> 5
console.log(binToDec('10101')) //-> 21
console.log(binToDec('1111'))

function decToBin(decimal) {
  // EASY EDGE CASE
  if (decimal === 0) return '0';
  // ALSO
  if (decimal < 0) return "where's ya head at";
  // MAIN FUNCTIONALITY
  console.log(Math.log2(decimal));
  // USE MATH.LOG2 TO FIND HOW 2 GOES INTO DECIMAL
  // LABEL ANSWER WITH STEPS
  let steps = Math.floor(Math.log2(decimal));
  // INITIALIZE BINARY VARIABLE AS EMPTY STRING AND MAKE COPY OF DECIMAL
  let binary = '';
  let decCopy = decimal;
  // USE STEPS TO LOOP AND ADD TO BINARY BASED ON
  // WHETHER OR NOT 2^STEPS FITS INTO DECCOPY
  while (steps >= 0) {
    if (decCopy - Math.pow(2,steps) >= 0) {
      binary += '1';
      decCopy -= Math.pow(2,steps);
    } else {
      binary += '0';
    }
    --steps;
  }
  // RETURN BINARY
  return binary;
}

console.log(decToBin(15));
console.log(decToBin(21));
console.log(decToBin(67));

module.exports = binToDec;

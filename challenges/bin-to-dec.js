/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')   -> 0 //0*2^0 = 0
 * 	binToDec('11')  -> 3 //1*2^0 = 1*2^1 = 1+2
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  //loop through binary array - make sure to convert to num
  //first el has index from the end of array
  //reduce - at each el, multiply el with 2 to the power of el index; add to accumulator
  let numArr = binary.split("");

  let indexFromEnd = numArr.length - 1;

  return numArr.reduce((acc, curr, i) => {
    console.log("curr", curr, "index", indexFromEnd);
    console.log(indexFromEnd);
    acc += parseInt(curr) * Math.pow(2, indexFromEnd);
    if (indexFromEnd > 0) {
      indexFromEnd--;
    }
    // console.log("acc", acc);
    return acc;
  }, 0);
}

const test = "0101";
console.log(binToDec(test));

module.exports = binToDec;

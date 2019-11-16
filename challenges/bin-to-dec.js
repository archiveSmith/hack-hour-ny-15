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
  let iterable = String(binary).split('');
  let decimal = 0;
  let currentPlace = 0
    while (iterable.length) {
      if (iterable[iterable.length - 1] == 1) {
        decimal += Math.pow(2,currentPlace)
}
    currentPlace += 1;
    iterable.pop();
}
return decimal;
}

// function DectoBin(dec) {
//   let iterable = String(dec).split('');
//   let bin = 0;
//   let currentPlace = 0
//     while (iterable.length) {
//       if (iterable[iterable.length - 1] == 1) {
//         bin += Math.pow(10,currentPlace)
// }
//     currentPlace += 1;
//     iterable.pop();
// }
// return bin;
// }
console.log(binToDec('10101011'))
module.exports = binToDec;

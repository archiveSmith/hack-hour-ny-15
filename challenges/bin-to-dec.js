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
  const binSplit = binary.toString().split("");
  let strLen = binSplit.length;

  // I could do the part below with reduce but I'm just too lazy this morning.  Sue me.
  const tempArr = binSplit.map(
    (entry, index) => entry * Math.pow(2, strLen - 1 - index)
  );
  let sumOut = 0;
  tempArr.forEach(entry => (sumOut += entry));
  return sumOut;
}

console.log(binToDec(101110));
console.log(binToDec(0));
console.log(binToDec(101011010010101));
console.log(binToDec(10));

module.exports = binToDec;

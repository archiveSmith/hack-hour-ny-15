/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  let highestProdPos = 1;
  let highestProdNeg;
  const sortedArray = array.sort((a, b) => a - b);
  if (Math.sign(sortedArray[0]) === -1) {
    const newArr = sortedArray.slice(0, 3);
    highestProdNeg = newArr.reduce((cv, acc) => cv * acc);
  }
  let i = 0;
  while (i < 3) {
    const lastEl = sortedArray.pop();
    highestProdPos *= lastEl;
    i += 1;
  }
  if (highestProdPos > highestProdNeg) return highestProdPos;
  return highestProdNeg;
}

// console.log(highestProduct([1, 2, 3, 4, 7, 1, 2, 9, -15, -25]));

module.exports = highestProduct;

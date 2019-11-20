/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 0;
  const absArr = array.map((el) => el = Math.abs(el)).sort((a, b) => b - a);
  return absArr[0] * array[1] * array[2];
}

module.exports = highestProduct;

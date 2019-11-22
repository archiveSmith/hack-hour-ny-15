/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  array.sort((a, b) => Math.abs(b) - Math.abs(a));
  console.log(array);
  let product;
  if (array[0] < 0 && array[1] < 0 && array[2] > 0 || array[1] < 0 && array[2] < 0 && array[0] > 0 || array[0] < 0 && array[2] < 0 && array[1] > 0) {
    console.log('adf');
    return array[0] * array[1] * array[2];
  }
}
console.log(highestProduct([-200, -12, 5, 12, 50]));
module.exports = highestProduct;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) {
      return 'Array must include 3 or more integers';
  }
  array.sort((a, b) => a - b);
//   console.log(array);
  if (array[0] >= 0 || array[array.length - 1] <= 0 || array[0] * array[1] < array[array.length - 2] * array[array.length - 3]) {
    return array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  };
  return array[array.length - 1] * array[0] * array[1];
}

module.exports = highestProduct;

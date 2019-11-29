/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!Array.isArray(array)) return 'Input must be array!';
  if (array.length < 3) return 'Array must be at least 3 integers!';
  let allNums = true;
  array.forEach((el) => {
    if (isNaN(el)) allNums = false;
  });
  if (allNums === false) return 'Array must conisist entirely of numbers!';

  array.sort((a, b) => a - b);

  let max;
  max = array[array.length - 1] * array[array.length - 2] * array[array.length - 3];
  if (array[0] * array[1] * array[array.length - 1] > max) max = array[0] * array[1] * array[array.length - 1];

  return max;
}

module.exports = highestProduct;

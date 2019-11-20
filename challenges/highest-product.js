/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

/* sort the given array(in ascending order) find product of the last three numbers.
This product will be maximum only if all the numbers in the array are positive.
Taking in account negative numbers, the two negative numbers lying at the left extreme end
could also contribute to lead to a larger product if 3rd number in the triplet being considered is
the largest positive number in the array.
Time complexity : O(n log n). Sorting the array takes n log n time.
Space complexity : O(log n). Sorting takes O(log n) space.
*/

function highestProduct(array) {
  if (array.length < 3) return 'need at least three integers';
  array.sort();
  return Math.max(array[0] * array[1] * array[array.length - 1],
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3]);
}

module.exports = highestProduct;

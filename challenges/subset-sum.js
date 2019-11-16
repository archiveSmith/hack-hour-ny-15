/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
  /*
  - we need to iterate through the array of numbers and find a
  subset of numbers that add up to the target value
  - we can test every possible combination with the starting value
  */

  const numEls = {};
  array.forEach((num) => (numEls[num] = num));
  let numTar = target;

}

function closerToTarget(num1, num2, target) {
  return ((num1 + num2 - target) < (num1 - target))
}

module.exports = subsetSum;

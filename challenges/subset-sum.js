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
  //create an object where key:val = 5: [3,2]

  return array.reduce((acc, curr, i) => {
    if (curr) return array;
  }, {});
  for (let i = 0; i < array.length; i++) {}
}

module.exports = subsetSum;

//iterate through array and cache each combo
//[4,1,2,3], target = 5
//whereby key is the element (4) and value is target-el = 1, pushed to obj
//obj = {4:1, 1:4, 2:3, 3:2}

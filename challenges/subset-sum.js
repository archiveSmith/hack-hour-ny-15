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

  // let cache = {};
  for (let i = 0; i < array.length - 1; i++) {}

  // for (let i = 0; i < array.length - 1; i++) {
  //   let el = array[i];
  //   if (el <= target) {
  //     if (!cache.values[target - el]) {
  //     }
  //     cache[el] = target - el;
  //   }
  // }
}

module.exports = subsetSum;

//iterate through array and cache each combo
//([3, 7, 4, 2], 5)
//whereby if:
//1. if el > target, ignore
//2. if el is present in any values, ignore
//key is the element (3) and value is target-el = 2, pushed to obj
//obj = {3:2, 4:1, 2:3}

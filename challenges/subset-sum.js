/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 */

function subsetSum(array, target) {
  const sortedArr = array.sort((a, b) => a - b);
  console.log(sortedArr);
  let checkTotal = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    console.log(sortedArr[i], "+", checkTotal, "=?", target);
    checkTotal += sortedArr[i];

    if (checkTotal === target) {
      return true;
    }
    if (checkTotal > target) {
      for (let j = 0; j < i; j++) {
        if (checkTotal - sortedArr[j] === target) {
          return true;
        }
      }
    }
  }
  return false;
}

// console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
// console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;

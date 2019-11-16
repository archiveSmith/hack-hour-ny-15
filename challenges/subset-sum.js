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
  // for (let i = 0; i < array.length; i += 1) {
  //   for (let j = 1; j < array.length; j += 1) {
  //     if (array[i] + array[j] === target) return true;
  //   }
  // }
  // return false;
  const sums = [0];
  for (let i = 0; i < array.length; i++) {
    const sumsCopy = [...sums];
    for (let j = 0; j < sumsCopy.length; j++) {
      const newSum = array[i] + sumsCopy[j];
      if (newSum === target) return true;
      if (newSum < target) {
        sums.push(newSum);
      }
    }
  }
  return false;
}

console.log(subsetSum([3, 7, 4, 2], 5));
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
console.log(subsetSum([8, 2, 4, 12], 13));
console.log(subsetSum([8, -2, 1, -3], 6));
module.exports = subsetSum;

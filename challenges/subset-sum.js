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
  // for each number create a key in storage with the value of current number
  // for each new number create a new key in storage for the new total needed if that number is added to every previous number in storage
  // 3, 7, 10, 4, 7, 11, 14, 2, 5
  // 3, 34, 37, 4, 7, 38, 41, 12, 15, 46, 49, 16, 19, 50, 53, 5, 8, 39, 42, 9, 12, 43, 46, 17, 20,

  const storage = [];

  for (let i = 0; i < array.length; i++) {
    const storageLength = storage.length;
    for (let j = 0; j < storageLength; j++) {
      const newSum = storage[j] + array[i];
      if (newSum === target) {
        return true;
      }
      storage.push(newSum);
    }

    storage.push(array[i]);
  }

  return false;
}

console.log(subsetSum([8, 2, 4, 12], 13));

module.exports = subsetSum;

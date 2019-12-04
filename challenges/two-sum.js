/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

// approach
// iterate through the arr to access each number
// iterate through another arr to access the neighboring number
// check if both numbers add up to n
// if so return true
// return false after checking each number and neighbor in the arr

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i += 1) {
    const arr1 = arr[i];

    for (let j = i + 1; j < arr.length; j += 1) {
      const arr2 = arr[j];

      if (arr1 + arr2 === n) {
        return true;
      }
    }
  }
  return false;
}

console.log(twoSum([1, 2, 6, 4], 10));
console.log(twoSum([1, 2, 6, 4], 12));


module.exports = twoSum;

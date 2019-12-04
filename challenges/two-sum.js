/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        return true;
      }
    }
  }
  return false;
}

let testArr = [3, 4, -9, 3, 1, 2];
console.log(twoSum(testArr, 4));
console.log(twoSum(testArr, -999));

module.exports = twoSum;

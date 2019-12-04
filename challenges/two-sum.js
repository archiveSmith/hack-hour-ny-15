/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = i + 1; i < arr.length; i += 1) {
//       if (arr[i] + arr[j] === n) return true;
//     }
//   }
//   return false;
// }

function twoSum(arr, n) {
  const array = arr.sort();
  for (let i = 0; i < array.length; i += 1) {
    let frontIndex = i;
    let backIndex = array.length - i - 1;
    if (array[frontIndex] + array[backIndex] > n) {
      backIndex -= 1;
    } else if (array[frontIndex] + array[backIndex] < n) {
      frontIndex += 1
    } else if (array[frontIndex] + array[backIndex] === n) {
      return true;
    }
  }
  return false;
}

module.exports = twoSum;

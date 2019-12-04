/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

// function twoSum(arr, n) {
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 1; j < arr.length; j += 1) {
//       if (arr[i] + arr[j] === n) return true;
//     }
//   }
//   return false;
// }


function twoSum(arr, n) {
  const check = {};

  for (let i = 0; i < arr.length; i += 1) {
    const sum = n - arr[i];
    if (check[sum] !== undefined) {
      return true;
    }
    check[arr[i]] = true;
  }
  return false;
}
console.log(twoSum([2, 3, 4, 5], 20));

module.exports = twoSum;

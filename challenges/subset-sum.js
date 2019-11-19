/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
*/

console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6


function subsetSum(array, target) {
  const myStoreObj = { ...array };
  let sum = 0;
  // console.log(myStoreObj);
  for (const key in myStoreObj) {
    // console.log(myStoreObj[key]);
    sum += myStoreObj[key];
    // console.log(sum);
    if (sum === target) return true;
    // console.log(key);
  }
  return false;
}


// // start at the first element of the array
// const initial = array[0];
// let result = false;
// for (let i = 1; i < array.length; i += 1) {
//   if (initial + array[i] !== target) {
//     continue;
//   } else if (initial + array[i] === target) {
//     result = true;
//   }
// }
// return result;

module.exports = subsetSum;

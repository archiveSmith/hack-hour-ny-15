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
  let arrayOfSums = [];
  let indexOfCurrentElement = 0;
  while (indexOfCurrentElement < array.length) {
    let subSumsArray = [];
    for (let i = 0; i < arrayOfSums.length; i += 1) {
      subSumsArray.push(arrayOfSums[i] + array[indexOfCurrentElement]);
    }
    subSumsArray.push(array[indexOfCurrentElement]);
    let oldLength = arrayOfSums.length;
    arrayOfSums = arrayOfSums.concat(subSumsArray);
    // console.log(arrayOfSums);
    for (let j = oldLength; j < arrayOfSums.length; j += 1) {
      if (arrayOfSums[j] === target) {
        return true;
      }
    }
    indexOfCurrentElement += 1;
  }
  return false;
}

// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));

module.exports = subsetSum;

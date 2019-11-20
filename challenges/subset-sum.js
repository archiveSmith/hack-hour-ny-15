/* 
 * You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// ? Input is an array and a number
// ? Output is a boolean
// you could loop through the array
// if the two numbers are greater than the target then keep moving
// if the numbers are less then grab another number. 
// this is like playing 21.
function subsetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    // console.log(current);
    for (let j = 0; j < array.length -1; j++) {
      let next = array[j];
      
      if ((current + next) > target){
        continue;
      } else if ((current + next) === target) {
        return true;
      } else if ((current + next) < target) {
        current = current + next;
      }
   }
  }
  return false;
}

// could I do it recursively? 

console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));

module.exports = subsetSum;

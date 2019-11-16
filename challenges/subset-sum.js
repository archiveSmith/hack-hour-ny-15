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

//brute force every combo and upon success change a boolean and then return out
//Use closure to keep track of a boolean
let isSubset = false;

function innerSubestSum(remainingArray, target) {
  // if I eventually get to zero then it is true
    if (target === 0) {
      isSubset = true;
    }
//otherwise my loop will continue to run
for (let i = 0; i < remainingArray.length; i += 1) {
  //slice out the current value
  let part1 = remainingArray.slice(0, i);
  let part2 = remainingArray.slice(i + 1, remainingArray.length)
  let snippedArray = [...part1, ...part2];
 //repeat the process with my new target value and the shortened array
  innerSubestSum(snippedArray, target - remainingArray[i])
}

return isSubset;

}
return innerSubestSum(array, target);
}
// console.log(subsetSum([3, 7, 4, 2], 5))
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
// console.log(subsetSum([8, 2, 4, 12], 13))
// console.log(subsetSum([8, -2, 1, -3], 6))
module.exports = subsetSum;
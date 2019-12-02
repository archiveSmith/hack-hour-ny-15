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
  const temp = [];

  

  for (let i = 0; i < array.length; i++) {
    let sum = temp.reduce((acc, next) => {
      return acc + next;
    }, 0);
    if(sum === target) return true;
    if (sum < target) temp.push(array[i]);
    if(sum > target) temp.pop();;
  }

  
  
  return false;
}
console.log(subsetSum([3, 7, 4, 2], 5));


/********************************************************************************************************** */
//Solution 2

function subsetSum(arr, target) {
  let sums = { 0: true }
  let found = false;
  arr.forEach(num => {
    let keys = Object.keys(sums);
    let prevNumbers = keys.map(key => parseInt(key));
    let newSums = prevNumbers.map(n => n + num);
    newSums.forEach(num => sums[num] = true);
  })
  if (sums[target]) {
    found = true;
  }
  return found;
}
​
console.log(subsetSum([3, 7, 4, 2], 5))
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
// console.log(subsetSum([8, 2, 4, 12], 13))
// console.log(subsetSum([8, -2, 1, -3], 6))
​
function subsetSumWithComments(arr, target) {
  // create a storage object
  const sums = {0: true};
  // declare a variable and set to false initially
  let found = false;
  // iterate over the array, looking at each number
  arr.forEach(num => {
    // create a new array.. 
    // filling it with the current num as well as..
    // grabbing all the keys in the sums array (will be the numbers we've visited already)
    // for each key, we'll create an array containing that key and the num
​
    //Object.keys returns an array of strings...
    const keys = Object.keys(sums)
    console.log(keys)
    //converting keys into numbers
    const prevNumbers = keys.map(key => parseInt(key))
    console.log(prevNumbers)
​
    const newSums = prevNumbers.map(n => n + num)
    console.log(newSums)
​
    newSums.forEach(num => sums[num] = true);
  });
  found = !!sums[target];
  // if (sums[target]) {
  //   found = true;
  // }
  return found;
}
​
function subsetSumRecursive(array, target) {
  if (!target) return true;
  if (!array.length) return false;
  
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
}

module.exports = subsetSum;

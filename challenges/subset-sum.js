/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 *
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

// function subsetSum(array, target) {
//   // loop through the aray and check to see if a set of numbers add up to
//   //  the target number
//   // const obj = {};
//   // hold the result of
//   let result = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     for (let j = 1; j < array.length; j += 1) {
//       while (array[i] + array[j] < target) {
//         j += 1;
//         result = array[i] + array[j];
//         // return true;
//       }
//     }
//   }
//   return false;
// }


// function subsetSum(array, target) {
//   const obj = {};

//   for (let i = 0; i < array.length; i += 1) {
//     let targetNum = target - array[i];


//   }
// }
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


// Irish Dave's Approach
function matchWord(str) {
  if (!str) return true;
  // clean up with regex
  console.log(str)
  str = str.replace(/[\W_]+/g, ' '); // replaces multiple white spaces with a single " "
  console.log(str)
  str = str.replace(/^[\s]|[\s]$/g, ''); // ^ matches start $ matches ends, and eliminates it
  console.log(str)
  str = str.toLowerCase(); // turn into lower case to validate both lower case and upper case
  const words = str.split(' ');
  console.log(words) 
  const matchArray = [];
  for (let word of words) {
    if (
      !matchArray.length ||
      word
        .split('')
        .reverse()
        .join('') !== matchArray[matchArray.length - 1]
    )
      matchArray.push(word);
    else {
      matchArray.pop();
    }
  }
  if (matchArray.length) return false;
  return true;
}

console.log(subsetSum([3, 7, 4, 2], 5)); // - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)); // -> true, 3 + 12 + 5 + 12 = 32
console.log(subsetSum([8, 2, 4, 12], 13)); // -> false
console.log(subsetSum([8, -2, 1, -3], 6)); // -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;

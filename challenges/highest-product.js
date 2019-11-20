/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

let sum = 0;
let count = 0;

function highestProduct(array) {
  // loop through the array and add to a highest product
  
  // base case: 
  if (count >= 3) {
    return sum;
  }
  count++
  // find the current max
  let currMax = Math.max(...array);
  // console.log(count)
  // add current max to our sum;
  sum += currMax;
  // console.log(sum);
  // find the location of current max:
  let maxIndex = array.indexOf(currMax)
  // console.log(maxIndex);
  // remove the element from the array:
  array.splice(maxIndex, maxIndex)
  // console.log(array)

  // call the function:
  return highestProduct(array)
}

// console.log(highestProduct([1,2,3,4,5,6,7,8,9,94,100,106]))
module.exports = highestProduct;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// approach
// declare a product variable assign to 1
// declare largestInteger variable and store the result of multiplying the first  three integers
// iterate through the array of integers
// create a nested loop to check the neighboring integers
// create another loop to check

function highestProduct(array) {
  let product = 1;
  let largest = array[0] * array[1] * array[2];

  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      // console.log(array[j]);
      for (let k = j + 1; k < array.length; k++) {
        // console.log(array[j]);
        product = (array[i] * array[j] * array[k]);
        // console.log(product)
        if (product > largest) {
          largest = product;
        }
      }
    }
  }
  return largest;
}

console.log(highestProduct([2, 4, 6, 8, 10, 12]));
console.log(highestProduct([-2, -4, -6, -8]));

module.exports = highestProduct;

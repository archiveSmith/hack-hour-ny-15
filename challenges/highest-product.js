/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // grab first number two numbers and last number and store product
  //  grab second number and multiply all combos and store product

  if (array.length < 1) return false;

  let outerIndex = 0;
  let nextIndex = 1;
  const endNum = array.length - 1;
  const productHold = {};


  for (let i = 0; i < array.length; i += 1) {
    //  console.log((array[outerIndex] * array[nextIndex] * array[endNum]));
    console.log('first number ', array[outerIndex]);
    console.log('second number ', array[nextIndex]);
    console.log('last number ', array[endNum]);


    productHold[(array[outerIndex] * array[nextIndex] * array[endNum])] = (array[outerIndex] * array[nextIndex] * array[endNum]);
    outerIndex += 1;
    nextIndex += 1;
    //  highestProduct(array);
  }
  console.log(productHold);

  // sum = (array[i] * array[i + 1] * outerLength)
}

console.log(highestProduct([2, 4, 6, 8, 1, 3, 4]));


module.exports = highestProduct;

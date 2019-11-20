/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let highestProd = 1;
  if (array.length < 3) return -1;
  const sortedArray = array.sort((a, b) => a - b);
  //console.log(sortedArray);
  let i = 0;
  while (i < 3) {
    const lastEl = sortedArray.pop();
    //console.log(lastEl);
    highestProd *= lastEl;
    //console.log(highestProd);
    i += 1;
  }
  return highestProd;
}


//console.log(highestProduct([4, 2, 5, 1, 3]));

module.exports = highestProduct;

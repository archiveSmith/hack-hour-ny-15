/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// edge case: two low negative numbers and a high positive one [-99,-98,1,2,3,99]
function highestProduct(array) {
  const sortedArr = array.sort((a, b) => a - b);
  console.log(sortedArr);
  return (
    sortedArr[sortedArr.length - 1] *
    sortedArr[sortedArr.length - 2] *
    sortedArr[sortedArr.length - 3]
  );
}

console.log(highestProduct([53, 6, 128, 5, -99, 4, 99]));

module.exports = highestProduct;

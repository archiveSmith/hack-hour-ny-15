/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  //sort ascending
  //return 3 largest numbers in array

  let sortedArr = array.sort(function(a, b) {
    return a - b;
  });
  console.log(sortedArr);
  return (
    sortedArr[sortedArr.length - 1] *
    sortedArr[sortedArr.length - 2] *
    sortedArr[sortedArr.length - 3]
  );
}

const test = [2, 3, 5, 6, 7, 10];
console.log(highestProduct(test));

module.exports = highestProduct;

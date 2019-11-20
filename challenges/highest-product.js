/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// edge case: two low negative numbers and a high positive one [-99,-98,1,2,3,99]
function highestProduct(array) {
  const sortedArr = array.sort((a, b) => a - b);
  console.log(sortedArr);
  const threeHighest = [
    sortedArr[sortedArr.length - 3],
    sortedArr[sortedArr.length - 2],
    sortedArr[sortedArr.length - 1]
  ];
  const negNums = sortedArr.filter(entry => entry < 0);
  if (negNums.length < 2) {
    return (
      sortedArr[sortedArr.length - 1] *
      sortedArr[sortedArr.length - 2] *
      sortedArr[sortedArr.length - 3]
    );
  } else {
    negNums.forEach(entry => {
      if (Math.abs(entry) >= threeHighest[threeHighest.length - 3]) {
        threeHighest.push(Math.abs(entry));
      }
    });
    console.log("Three highest: ", threeHighest);
    const refinedThreeHighest = threeHighest.sort((a, b) => b - a).slice(0, 3);
    console.log("Refined three highest: ", refinedThreeHighest);
    return (
      refinedThreeHighest[0] * refinedThreeHighest[1] * refinedThreeHighest[2]
    );
  }
}

// console.log(highestProduct([53, 6, 128, 5, -99, 4, 99]));
console.log(highestProduct([-97,-99, 98, 1, 2, 3, 99]));

module.exports = highestProduct;

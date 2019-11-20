/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let maxProduct = 1;
  const allSubsetArray = array.reduce( // get all possible subsets of the array
    (subsets, value) => subsets.concat(
      subsets.map((set) => [value, ...set]),
    ),
    [[]],
  );
  // filter to get only arrays with 3 elements in them;
  const threeElementArr = allSubsetArray.filter(subArr => subArr.length === 3);
  threeElementArr.forEach(arr => {
    let curMax = arr.reduce((acc, val) => (
      acc * val))
      if (curMax > maxProduct) maxProduct = curMax; // reassign maxProduct if curMax becomes greater;
    })
  return maxProduct; // return maxProduct at the end;
}


module.exports = highestProduct;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let heighest = null;
  for (let k = 0; k < array.length - 2; k += 1) {
    const tempFirst = array[k];
    for (let j = (k + 1); j < array.length - 1; j += 1) {
      const tempSecond = array[j];
      for (let i = (j + 1); i < array.length; i += 1) {
        const tempThird = array[i];
        const tempNum = tempFirst * tempSecond * tempThird;
        if (heighest === null || heighest < tempNum) {
          heighest = tempNum;
        }
      }
    }
  }
  return heighest;
}

console.log(highestProduct([-1, -2, 1, -3, 0, -6]));


module.exports = highestProduct;

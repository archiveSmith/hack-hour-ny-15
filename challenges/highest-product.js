/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // sort array from largest to smallest
  // return the last three elements multiplied together
  const sorted = [...array];
  sorted.sort((a, b) => {
    return a - b;
  });

  // if all numbers are 0 or negative
  if (sorted[sorted.length - 1] <= 0) {
    return (
      sorted[sorted.length - 1] *
      sorted[sorted.length - 2] *
      sorted[sorted.length - 3]
    );
  }

  // if there are 2 negative numbers
  if (sorted[0] < 0 && sorted[1] < 0) {
    const negativeProduct = sorted[0] * sorted[1];
    const positiveProduct =
      sorted[sorted.length - 2] * sorted[sorted.length - 3];

    if (negativeProduct > positiveProduct) {
      return sorted[0] * sorted[1] * sorted[array.length - 1];
    }
    return (
      sorted[sorted.length - 1] *
      sorted[sorted.length - 2] *
      sorted[sorted.length - 3]
    );
  }

  // if 1 or less negative numbers
  return (
    sorted[sorted.length - 1] *
    sorted[sorted.length - 2] *
    sorted[sorted.length - 3]
  );
}

module.exports = highestProduct;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  // grab first number two numbers and last number and store product
  //  grab second number and multiply all combos and store product
  let product = 1;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      for (let k = j + 1; k < array.length; k += 1) {
        if (array[i] * array[j] * array[k] > product) {
          product = array[i] * array[j] * array[k];
          // console.log(product);
        }
      }
    }
  }
  return product;
}

// function highestProductII(arr) {
//   arr.sort((a, b) => a - b);
//   const len = arr.length;
//   const maxProductI = arr[len - 1] * arr[len - 2] * arr[len - 3];
//   const maxProductII = arr[0] * arr[1] * arr[len - 1];
//   return Math.max(maxProductI, maxProductII);
// }
//
// function highestProductIII(arr) {
//   let min1 = Number.MAX_SAFE_INTEGER,
//   min2 = Number.MAX_SAFE_INTEGER,
//   max1 = Number.MIN_SAFE_INTEGER,
//   max2 = Number.MIN_SAFE_INTEGER,
//   max3 = Number.MIN_SAFE_INTEGER;
//
//   for (let i = 0; i < arr.length; i++) {
//     const current = arr[i];
//
//     if (current < min1) {
//       min2 = min1;
//       min1 = current;
//     }
//     else if (current < min2) {
//       min2 = current
//     }
//
//     if (current > max1) {
//       max3 = max2;
//       max2 = max1;
//       max1 = current;
//     }
//     else if (current > max2) {
//       max3 = max2;
//       max2 = current;
//     }
//     else if (current > max3) {
//       max3 = current
//     }
//   }
//
//   return Math.max(min1 * min2 * max1, max1 * max2 * max3);
// }
//
// /* Test Case */
//
// const array = [];
// for (let i = 0; i < 800; i++) {
//   array.push(Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100));
// }
//
// const now1 = process.hrtime();
// console.log(highestProductI(array));
// console.log(process.hrtime(now1));
//
// const now2 = process.hrtime();
// console.log(highestProductII(array));
// console.log(process.hrtime(now2));
//
// const now3 = process.hrtime();
// console.log(highestProductIII(array));
// console.log(process.hrtime(now3));

// console.log(highestProductII([2, 4, 6, 8, 1, 3, 4]));


module.exports = highestProduct;

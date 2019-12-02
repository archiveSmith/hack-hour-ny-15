/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3) return 'array does must contain three integers';
  let highest = 0;

  for(let i = 0; i < array.length - 2; i += 1){
    let first = array[i];

    for(let j = i + 1; j < array.length - 1; j += 1) {
      let second = array[j];
    
      for (let k = j + 1; k < array.length; k += 1) {
        let third = array[k];
        let currentProduct = first*second*third;

        if (currentProduct > highest) highest = currentProduct;
      }
    }
  }
   return highest;
}

/*************************************************************************************** */
//Solution 

const process = require('process');
​
function highestProductI(arr) {
  let product = 0;
​
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] * arr[j] * arr[k] > product)
          product = arr[i] * arr[j] * arr[k];
      }
    }
  }
​
  return product;
} 
​
​
function highestProductII(arr) {
  arr.sort((a, b) => a - b);
  const len = arr.length;
  const maxProductI = arr[len - 1] * arr[len - 2] * arr[len - 3];
  const maxProductII = arr[0] * arr[1] * arr[len - 1];
  return Math.max(maxProductI, maxProductII);
}
​
​
function highestProductIII(arr) {
  let min1 = Number.MAX_SAFE_INTEGER,
  min2 = Number.MAX_SAFE_INTEGER,
  max1 = Number.MIN_SAFE_INTEGER,
  max2 = Number.MIN_SAFE_INTEGER,
  max3 = Number.MIN_SAFE_INTEGER;
​
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
​
    if (current < min1) {
      min2 = min1;
      min1 = current;
    }
    else if (current < min2) {
      min2 = current
    }
​
    if (current > max1) {
      max3 = max2;
      max2 = max1;
      max1 = current;
    }
    else if (current > max2) {
      max3 = max2;
      max2 = current;
    }
    else if (current > max3) {
      max3 = current
    }
  }
​
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}
​
/* Test Case */
​
const array = [];
for (let i = 0; i < 800; i++) {
  array.push(Math.floor(Math.random() * 100) - Math.floor(Math.random() * 100));
}
​
const now1 = process.hrtime();
console.log(highestProductI(array));
console.log(process.hrtime(now1));
​
const now2 = process.hrtime();
console.log(highestProductII(array));
console.log(process.hrtime(now2));
​
const now3 = process.hrtime();
console.log(highestProductIII(array));
console.log(process.hrtime(now3));


module.exports = highestProduct;

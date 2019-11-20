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


// module.exports = highestProduct;

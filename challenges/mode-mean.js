/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
  // console.log(array);
  // create a cache object with the elements as keys and the value as the number of occurrences
  let cache = {};
  let sum = 0;
  // loop through array
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    sum += key;
    // check if element is key in cache
    if (cache[key]) {
      // if true then add count +1 to that value
      cache[key]++
    } else {
      // if not then add the property to the cache with the count of 1
      cache[key] = 1;
    }
  }
  // console.log(cache);
  // now we have the mean:
  let mean = Math.floor(sum / array.length);
  // console.log(mean)
  // we want to find the mode aka which number has more occurrences in the array?
  // we need to loop through and check both if the mode is greater than or equal to the prior mode
  // if so then we replace the mode
  let mode = 0;
  let count = 0;

  let myArr = Object.entries(cache)
  // console.log(myArr.length)
  for (let i = 0; i < myArr.length; i++) {
    let key = parseInt(myArr[i][0]);
    let val = myArr[i][1];
    // console.log(key, val, mode)

    if (val >= count) {
      count = val;
      mode = key;
      // console.log(typeof mode)
    }
  }

  const output = (parseInt(mode) === mean)

  // console.log(mean, mode, output)

  if (output) {
    return true;
  }

  return false;
  // console.log(mode);
}

console.log(modemean([1,2,3,5,6,7,5,6,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]));

module.exports = modemean;

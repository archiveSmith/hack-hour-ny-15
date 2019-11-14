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
  if (!Array.isArray(array)) return 'Enter Array!';
  // loop through array and pass numbers to an object
  if (array.length === 1) return true;
  const cache = {};
  // record the higher frequency
  // set that value to the mean
  // check is multiple values have the same fequency
  // add the highest number
  // find the mean of the number list
  // check if they're the same

  for (let i = 0; i < array.length; i++) {
    const curr = array[i];
    if (!cache[curr]) {
      cache[curr] = 1;
    } else {
      cache[curr] += 1;
    }
  }
  // console.log(cache)
  let mode = -Infinity;
  // for (let key in cache) {
  //     if (cache[key] > mode) {
  //         mode = parseInt(key);
  //         console.log(mode)
  //     }
  // }

  // console.log(cache)
  mode = Object.entries(cache).sort((a, b) => a[0] - b[0] && a[1] - b[1]);
  // console.log(mode)

  // eslint-disable-next-line radix
  const highMode = parseInt(mode[mode.length - 1][0]);


  // console.log(highMode)

  // console.log(parseInt(mode[0][0]))

  // console.log(mode)
  // console.log(cache)

  const mean = Math.floor(array.reduce((curr, acc) => acc + curr, 0) / array.length);

  // console.log(mean)

  // if (mean === highMode) return true;
  // else {
  //     return false;
  // }
  return mean === mode;
}
// console.log(modemean([1,2,2,2,3,3,3,3,4,5,5,6]))
console.log(modemean([2, 3, 4, 5, 6, 1]));

module.exports = modemean;

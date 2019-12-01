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
  // mean - average - the sum of the values divided by the number of values
  let sum = 0;
  let mean = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    mean += Math.floor(sum / array.length);
  }

  // mode - the most frequently appearing number
  const mode = {};
  let max = 0;
  let count = 0;

  array.forEach((num) => {
    if (mode[num]) {
      mode[num]++;
    } else {
      mode[num] = 1;
    }
    if (count < mode[num]) {
      max = num;
      count = mode[num];
    }
  });

  return `The mean of the array is ${mean} and the mode is ${max}`;
}

module.exports = modemean;

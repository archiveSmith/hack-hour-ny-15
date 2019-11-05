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
  let sum = 0;
  let modes = [];
  array.forEach((num) => {
    sum += num;
    if (!modes[num]) modes[num] = 0;
    modes[num]++;
  });

  let mode;
  let most = 0;
  modes.forEach((num, index, array) => {
    if (num >= most) {
      most = num;
      mode = index;
    }
  });

  let mean = Math.floor(sum / array.length);

  return (mean === mode);
}

console.log(modemean([0,1,2,2,3,4]));

module.exports = modemean;

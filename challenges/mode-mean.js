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
  const modeObj = {};
  let total = 0;
  let mode = 0;
  let objKey = 0;

  array.forEach(num => {
      if (modeObj[num] === undefined) modeObj[num] = 1;
      else modeObj[num]++;

      total += num;
  });

  for (let key in modeObj) {
      if (mode <= modeObj[key] && objKey < key) {
          mode = modeObj[key];
          objKey = key;
      }
  }

  return Math.floor(total / array.length) === objKey;
}

module.exports = modemean;

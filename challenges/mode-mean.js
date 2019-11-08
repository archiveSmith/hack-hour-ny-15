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
  const mean = Math.floor(array.reduce((a, b) => a + b)/array.length);
  console.log(mean)

  const histogram = {};
  let highestOccurance = 0

  for (elem of array) {
    if (!histogram[elem]) {
      histogram[elem] = 1;
    } else {
      histogram[elem] += 1;
    }
    if (histogram[elem] > highestOccurance) {
      highestOccurance = histogram[elem];
    }
  }

  const modeArr = []; 
  for (entry of Object.entries(histogram)) {
    if (entry[1] === highestOccurance) {
      modeArr.push(entry[0])
    }
  }

  const mode = Math.max(...modeArr)
  return mode === mean;
}

console.log(modemean([4,4,4,4,4,4]))


module.exports = modemean;

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
    const countObject = {};
    for (let value of array) {
        sum += value;
        if (countObject[value]) {
            countObject[value]++;
        } else { countObject[value] = 1 }
    }

    const highestCount = Math.max(...Object.values(countObject));
    const modeArray = Object.keys(countObject).filter((key) => countObject[key] === highestCount);
    const mean = Math.floor(sum / array.length);
    const mode = Math.max(...modeArray);
    // console.log(mean, mode)

    return mean === mode
}

module.exports = modemean;
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
    let frq = {}

    let mean = array.reduce((acc, curr) => {
        

    },0)


let mode = -Infinity;
let highrstFrq = 0;

for (let elem in frq) {
    if (frq[elem] === highrstFrq && parseInt (elem) > mode) {
        mode = parseInt(elem);
    }

    if (frq[elem] > highrstFrq) {
        mode = parseInt(elem);
        highrstFrq = frq[elem];
    }

    return mean === mode
}

}

module.exports = modemean;

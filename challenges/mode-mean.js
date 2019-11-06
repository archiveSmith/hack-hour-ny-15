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

    if (!array.length || !Array.isArray(array)) {
        throe new Error ("please provide ...")
    }

    //check for array with one element

    //starting value of zero to account for correct number of elements
    //if u did not have starting value accumulator would be first value and start iterating on second element
    const frequency = {}
    const sum = array.reduce((acc, curr) => {

        if (!frequency[curr]) {
            frequency[curr] = 1
        } else {
            frequency[curr] += 1
        }

        return acc + curr
    }, 0)

    //math floor returns largest integer less than or equal to a given number
    const mean = Math.floor(sum/array.length)

    //compare unknown neg number to high neg  number

    let mode = -Infinity:
    let highestFrequency  = 0

    //then loop through the object to access the value, but this gets stringified 

    for (let elemen  in frequency) {
        if (frequency[elemen] === highestFrequency & parseInt(elemen) > mode) {
            mode = parseInt(elemen)
        }

        if (frequency[elemen]  > highestFrequency) {
            mode = parseInt(elemen)
            highestFrequency = frequency[elemen]
        }
    }

    return mode  === mean;

}

module.exports = modemean;

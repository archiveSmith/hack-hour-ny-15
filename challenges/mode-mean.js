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
    // get mode
    // iterate through array tracking how many times you've seen an element
    // keep track of which element has occured the most as a variable 'occuredMost'
    // if two elements have the same highest value, compare which one is greater and assign that value to occuredMost

    // get mean
    // get sum of all elements in the array and assign it to a total variable
    // divide the total by the length
    // assign that value to 'mean'

    let mostFrequentValue = 0;
    let highestFrequency = 0;

    const dataAverages = array.reduce(
        (averages, current) => {
            // get mode
            if (!averages.mode[current]) averages.mode[current] = 1;
            averages.mode[current] += 1;
            if (averages.mode[current] > highestFrequency) {
                highestFrequency = averages.mode[current];
                mostFrequentValue = current;
            }
            if (
                averages.mode[current] === highestFrequency
                && current > mostFrequentValue
            ) {
                mostFrequentValue = current;
            }
            // get total

            averages.mean.total += current;
            return averages;
        },
        {
            mode: {},
            mean: {
                total: 0,
            },
        },
    );
    const mode = mostFrequentValue;
    const mean = Math.floor(dataAverages.mean.total / array.length);

    return mean === mode;
}

const shouldBeTrue = [5, 5, 5, 5, 5];
const shouldBeFalse = [6, 6, 6, 6, 6, 5];
console.log(modemean(shouldBeTrue));
console.log(modemean(shouldBeFalse));

module.exports = modemean;

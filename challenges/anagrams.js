/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example:
 * var result = anagrams('abc');
 * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

function anagrams(string) {
    if (string.length === 1) {
        return string;
    }
    let combinations = [];
    for (let i = 0; i < string.length; i++) {

        let result = anagrams(string.slice(0, i) + string.slice(i + 1));
        for (let j = 0; j < result.length; j++) {
            let value = string[i] + result[j];
            combinations.push(value);
        }
    }
    return combinations;
}

console.log(anagrams("abc"))

module.exports = anagrams;
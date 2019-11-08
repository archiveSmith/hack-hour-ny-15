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
    //I need to keep tracking of how any of each letter I can use, maybe iterate through to creat an object
    //I need to keep track of which letter I am on, so probably create my recursive calls inside my loop
    //Use a loop to iterate through the string and when I use a letter,I need to remove it from the possible options and pass that as my new string
    //concat the results of the sub calls and push those outputs to an array when I trigger my base case
    const outputArray = [];

    function helperAnagram(remainingString, currentOutput = '') {
        if (remainingString.length <= 1) {
            currentOutput = currentOutput.concat(remainingString);
            outputArray.push(currentOutput);
            return;
        }
        for (let i = 0; i < remainingString.length; i += 1) {
            let part1 = remainingString.slice(0, i);
            let part2 = remainingString.slice(i + 1, remainingString.length)
            let snippedString = part1 + part2;
            helperAnagram(snippedString, currentOutput.concat(remainingString[i]))
        }
        return outputArray;
    }
    return helperAnagram(string)
}
// console.log(anagrams('abc'))

module.exports = anagrams;
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

  //declare a variable to hold the output strings
  //for each loop of the string, 
  //for each letter in the string, concatenate and make a new combination on each iteration
  //do the same process in reverse
  //
  let result = [];
  let anaWord = '';
  let innerCounter = string.length * 2;
  while (innerCounter > 0) {
    for (let i = 0; i < string.length; i++) {
      if (innerCounter !== i) {
        anaWord += string[i];

        result.push(anaWord);
      }
    }
    innerCounter -= 1;
  }

  return result;

}


function anagram (string) {
  let resultStr = [];

  //loop through the string and pass each result a
}

console.log(anagrams('abc'));
module.exports = anagrams;

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
  if (string.length === 0) return [];
  const results = [];

  for (let i = 0; i < string.length; i += 1) {
    let str = string[i];
    for (let j = 0; j < string.length; j += 1) {
      if(i !== j) str = str + string[j];
    }
    results.push(str);
    str = string[i];
    for (let j = string.length - 1; j >= 0; j -= 1) {
      if(i !== j) str = str + string[j];
    }
    results.push(str);
  }
  return results;
}

// var result = anagrams('abcd');
// console.log(result);

module.exports = anagrams;

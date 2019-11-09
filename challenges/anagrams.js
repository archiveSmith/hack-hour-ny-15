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
  if(string === '') return string;

  const strArr = string.split('');
  const result = [];
  let joined = '';

  while (joined != string) {
    for (let i = strArr.length - 2; i >= 0; i -= 1) {
      let temp = strArr[strArr.length - 1];
      strArr[strArr.length - 1] = strArr[i];
      strArr[i] = temp;


      joined = strArr.join('');
      result.push(joined)
    }
  }

  return result;
}

var result = anagrams('abc');
console.log(result);

module.exports = anagrams;

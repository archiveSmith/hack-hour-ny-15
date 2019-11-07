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
console.log('helo')
function anagrams(string) {
  const result = [];
  let subStr = '';

  for (let i = 0; i < string.length; i += 1) {
    let sub1 = string[i];
    for (let j = i + 1; j < string.length + 1; j += 1) {
      let sub2 = string[j];
      subStr += sub2;
      result.push(string.slice(i, j));
    }
    // subStr = '';
  }

  return result;
}
// function anagrams(str) {
//   let i, j, result = [];

//   for (i = 0; i < str.length; i++) {
//     for (j = i + 1; j < str.length + 1; j++) {
//       result.push(str.slice(i, j));
//     }
//   }
//   return result
// }

console.log(anagrams('abc'));
module.exports = anagrams;

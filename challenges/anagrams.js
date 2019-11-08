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
//  // declare a new empty array
//   const allPermutations = [];
//  // iterate over the input string
//   for (let i = 0; i < string.length; i++) {
//   // for each character, create a new string consisting only of that character
//   let onePermutation = `${string[i]}`;
//    // iterate over the input string for every character except the current character and push the character into our new string
//     for (let j = 0; j < string.length; j++) {
//       if (j === i) {
//         continue;
//       }
//       onePermutation += `${string[j]}`;
//       for (let k = 0; k < string.length; k++) {
//         if (k === i || k === j) {
//           continue;
//         }
//         onePermutation += `${string[k]}`;
//         allPermutations.push(onePermutation);
//       }
//     }
//     // beginning at the next character, iterate over the input string and push the character into our new string
//   }
//   return allPermutations;

  const possibilities = string.split();
  const allPermutations = possibilities.forEach

}

console.log(anagrams('abc'));

module.exports = anagrams;

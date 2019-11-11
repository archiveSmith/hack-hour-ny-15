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
  // declare a variable to hold the output strings
  // for each loop of the string,
  // for each letter in the string, concatenate and make a new combination on each iteration
  // do the same process in reverse

  //
  const result = [];

  if (string.length === 1) {
    result.push(string);
    return result;
  }

  for (let i = 0; i < string.length; i += 1) {
    const firstStr = string[i];
    const restOfString = string.substring(0, i) + string.substring(i + 1);
    const innerCombo = anagrams(restOfString);

    for (let j = 0; j < innerCombo.length; j += 1) {
      result.push(firstStr + innerCombo[j]);
    }
  }

  return result;
}

console.log(anagrams('abc'));

// function getAllPermutations(string) {
//   let results = [];

//   if (string.length === 1) {
//     results.push(string);
//     return results;
//   }

//   for (let i = 0; i < string.length; i++) {
//     let firstChar = string[i];
//     let charsLeft = string.substring(0, i) + string.substring(i + 1);
//     let innerPermutations = getAllPermutations(charsLeft);
//     for (let j = 0; j < innerPermutations.length; j++) {
//       results.push(firstChar + innerPermutations[j]);
//     }
//   }
//   return results;
// }


// function anagram(string) {
//   const resultStr = [];

//   // loop through the string and pass each result a
// }


module.exports = anagrams;

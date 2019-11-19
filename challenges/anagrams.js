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

function anagrams(string, anaArray = [], remainingLetters = [], counter = 0,) {
  let newString = '';
  if (string.length === 1) {
    counter = 0; 
    
    return string;
  }

  if (!remainingLetters) {
    let fixedLetter = string[0]
    newString = string.slice(1)
    for (let i = 0; i < newString.length; i += 1) {
      remainingLetters.push(newString[i])
    }
  } else {
    fixedLetter = string[counter]
    for (let i = 0; i < newString.length; i += 1) {
      if (i === counter) {
        continue
      }
      remainingLetters.push(newString[i])
    }
  }
  
  anaArray.push(fixedLetter+remainingLetters.join())
  counter += 1
  if (counter = string.length - 1){

  }
  newString = string.slice(1)
  return fixedLetter + anagrams(newString, anaArray = [], remainingLetters, counter)

}

console.log(anagrams('abc'))

module.exports = anagrams;

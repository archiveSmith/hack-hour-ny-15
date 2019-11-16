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
  const charArr = string.split('');
  let anagramsArr = [];

  function arrRight(inputArr) {
    //takes an array and shuffles the order of each character by 1
    let newArr = [...inputArr];
    newArr.unshift(newArr.pop());
    return newArr;
  }

  let shiftedArrays = [];
  shiftedArrays.push(charArr);
  for (let i = 0; i < charArr.length - 1; i++) {
    let newArr = arrRight(shiftedArrays[i]);
    shiftedArrays.push(newArr);
  }
  console.log(shiftedArrays);

  function innerAnagrams(char, arr) {
    //takes a character and adds the characters in the array too it
    for (let i = 0; i < arr.length; i++) {
      // anagramsArr.push(`${char}${arr[i]}`)
    }
  }
}

console.log(anagrams('abc'));

module.exports = anagrams;

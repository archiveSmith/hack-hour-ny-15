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
  //convert string to charArr
  //calc length of arr
  //create temp str array to assemble str
  //create cached obj - if string already exists, do not add

  let charArr = string.split("");
  let tempStr = [];
  let cached = [];

  for (let i = 0; i < charArr.length; i++) {
    //a  --> a,b,c
    //b --> b, c, a
    //c --> c, a, b
    console.log("i", i);
    for (let j = i; j < charArr.length; j++) {
      //assemble string
      console.log("j", j);
      if (!tempStr[charArr[j]]) {
        tempStr.push(charArr[j]);
        tempStr.join();
        console.log(tempStr);
        if (j === charArr.length) {
          j = 0; //restart at zero once j gets to end of charArr
        }
      } else if (tempStr.length === charArr.length) {
        cached.push(tempStr);
        tempStr = []; //reset
      }
      console.log("j after", j);
    }
  }
  return cached;
}

const test = "abc";
console.log(anagrams(test));
module.exports = anagrams;

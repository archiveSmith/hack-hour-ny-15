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
// input: string
// output: array

function anagrams(string, output = '', result = []) {
  console.log(string, output, result);
  // let's grab our string and make an array
  let array = string.split(''); // now we have an array
  // base case, if the last element in the array is our input string 
  if (result[result.length - 1] === string) {
    // return our output array
    return result;
  }
  // 
  string = string;
  console.log(string);
  output = output;
  console.log(output);
  result = result;
  console.log(result);


  // loop through the array and push each variation into the result array:
  for (let i = 0; i < array.length - 1; i++) { 
    // make a temp for the current char
    let temp = array[i];
    // set current to next
    array[i] = array[i+1]
    // set next to temp
    array[i+1] = temp;
    
    // let's make a string from our new array
    output = array.join('');
    console.log(output);
    // then we push the string into our result array
    result.push(output);
    console.log(array, string, result);
  }
    anagrams(string, output, result);
  // return a string
}
console.log(anagrams('abc')); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]


module.exports = anagrams;

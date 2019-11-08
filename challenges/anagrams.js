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
  const parent = []
  let usedChars = []
  
  //storecurrent char as a variable
  let char = ''

    //iterating through input array
    for (let i = 0; i < string.length; i++){
      char = string.splice(i,1);
      
}
    //slicing off the current element and storing it in a variable

    //pushing it into a child array

    //checking if there are any characters left in input
\
      //if no, push the child array copy to parent
    //call function again with new input
    //add in spliced off element after current index
    //popping the last element of the child array off
  //return parent

  //declare parent array
  //declare child string

  //iterate through string
    //iterate through the string again starting from the next element and wrapping around

}

console.log(permute('abc'))

module.exports = anagrams;
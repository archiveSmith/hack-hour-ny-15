'use strict';
/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

function reverseInPlace(array) {

  for (let i = 0; i < array.length / 2; i += 1) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  return array;
}

// Second Approach:
// create a swap() helper function
// const swap = (array, a, b) {

// }

// const reverseInPlace = array => {
//     let a = 0;
//     let b = array.length - 1;
//     return swap(array, a, b);
// }

const stringArray = ['a', 'b', 'c', 'd', 'e', 'f'] //-> ['f', 'e', 'd', 'c', 'b', 'a']
console.log(reverseInPlace(stringArray))
console.log(reverseInPlace([1, 2, 3, 4, 5]))
console.log(reverseInPlace([{a: 'true'}, [false, true, null], {c: 'name', age: 54}]))


module.exports = reverseInPlace;

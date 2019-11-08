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
  // iterate the length of the array, popping off the last element and shifting it on the array
  // push the last
  const length = array.length - 2;

  for (let i = length; i >= 0; i -= 1) {
    array.push(array[i]);
  }

  array.splice(0, length + 1);
  return array;
}

module.exports = reverseInPlace;

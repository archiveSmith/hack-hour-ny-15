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
  let front = 0;
  let back = array.length - 1;
  while (front < back) {
    [array[front], array[back]] = [array[back], array[front]];
    front++;
    back--;
  }
  return array;
}

// console.log(reverseInPlace([1,2,3,4,5])); 

module.exports = reverseInPlace;

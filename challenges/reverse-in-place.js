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
  for (let i = 0; i < Math.floor(array.length/2); i += 1) {
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]]
  }
  return array
}

// let testArr = [1,2,3,4,5,6,7,8,9,0]
// console.log(reverseInPlace(testArr))

module.exports = reverseInPlace;


let a = 1
let b = 2
[a, b] = [b , a]
console.log(a)

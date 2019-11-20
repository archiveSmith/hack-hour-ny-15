// 'use strict';
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

// ! "without creating a new object in memory"

// declare a function reverseInPlace that takes in one parameter 'array'
function reverseInPlace(array) {
  // we loop through the array starting at the element at index 0 while simultaneously starting at the element at the end of the array. we minimize the interactions by using Math.floor for the case that there is an odd number of elements we don't need to touch the middle element. 
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    // we then simultaneously:
    // 1. have the array element at the last index equal to the the element at the first index AND
    // 2. have the array element at the first index equal to the element at the last index. 
    // this works in ES6 without using additional memory.
    // There are different ways to swap in JS:
    // https://nick.balestrafoster.com/2015/swapping-array-elements-in-place/
    // ! Memo swap: by temp = a, a = b, b = temp.
    // ! bitwise swap: 
    [[array[array.length - 1 - i], array[i]] = [array[i], array[array.length - 1 - i]]]
    // console.log(array);
  }
  return array;
  

}

console.log(reverseInPlace([0,1,2,3,4,5,6,7,8,9]))
module.exports = reverseInPlace;

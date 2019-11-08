"use strict";
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
  //"abefcd" --> "dcfeba"
  //swap 0 and 5; 1 and 4; 2 and 3, stop at i ===3

  //sol 1: use swap
  //sol 2 using object:
  //create an extra placeholder index at end
  //starting from charAt length-1, set it equal to placeholder index
  //0: undefined, 1: a, 2:b, 3:c
  //loop through and set 0 === c

  //challenge: get j to decrement
  //get swap to work

  for (let i = 0; i < array.length / 2; i++) {
    console.log("i", i);
    //0, 5; j stops at 5
    //i = 1, j = 6-1-1 = 4
    //arr len = 6
    let j = array.length - i - 1;
    console.log("j", j);
    swap(array, i, j);
  }
  return array;

  function swap(array, char1, char2) {
    let temp = array[char1];
    array[char1] = array[char2];
    array[char2] = temp;
  }
}

const test = ["a", "b", "e", "f", "c", "d"];
console.log(reverseInPlace(test));
module.exports = reverseInPlace;

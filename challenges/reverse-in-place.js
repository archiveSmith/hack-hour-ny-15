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
  // iterate over the first half of the array: at each index, save the value, reassign the index to the value at array.length - (index + 1),
  // and reassign array.length - (index + 1) to the saved value
  for (let i = 0; i < Math.floor(array.length / 2); i += 1) {
    const rememberedValue = array[i];
    array[i] = array[array.length - (i + 1)];
    array[array.length - (i + 1)] = rememberedValue;
  }
  return array;
}

// const nums = [12, 45, 643, 2, 865];
// console.log(reverseInPlace(nums));

module.exports = reverseInPlace;

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
    //loop through from back of array, starting from length-2(keep the very last character in place)
    //move i to the end of the array, then remove array[i]
    for (let i = array.length-2; i >= 0; i--){
        array.push(array[i])
        array.splice(i, 1)
    }
    return array;
}

module.exports = reverseInPlace;

// let testArr = ['a','b','c','d','e'];
// console.log(reverseInPlace(testArr));
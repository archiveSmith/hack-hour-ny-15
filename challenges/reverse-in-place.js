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

    let length = array.length;
    let first = array[0]
    let last = array[array.length-1]
    let incremenetor = 1

    let container= ""

    for (let i = array.length-1; i >= 0; i--) {
        container+= array[i]
    }

    for(let i = 0; i < array.length; i++) {
        console.log(container[i])
        array[i] = container[i]
    }

return array
    console.log(array)
}

reverseInPlace(["a", "p", "p", "l", "e"])
module.exports = reverseInPlace;

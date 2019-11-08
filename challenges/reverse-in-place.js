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
    if(!array) return undefined;
    if(array === [] || array.length === 1) return array;
    let initialArrayLength = array.length-1
    let x = array.length-2;
    while(x >=0){
        array.push(array[x])
        x--
    }
    array.splice(0, initialArrayLength)
    return array
}


// const myArray = [3, 4, 5, 6, 7, 8, 9, 10, 23]

// console.log(reverseInPlace(myArray))

module.exports = reverseInPlace;

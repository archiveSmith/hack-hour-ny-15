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
    //assign items to a non existent index
    //use that as storage
    let reverseCounter = 1;
    let originalLength = array.length
    for(let i = 0; i < originalLength; i++){
        array[originalLength+i] = array[i];
    }
    for(let j = originalLength-1; j >= 0;j-- ){
        array[j] = array[j+reverseCounter];
        reverseCounter+=2
        console.log(array);
    }
    array.length = originalLength;
    return array;

}
console.log('hello');
console.log(reverseInPlace([1,2,3,4,5,6,7]))

module.exports = reverseInPlace;

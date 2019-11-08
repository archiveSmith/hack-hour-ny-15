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
    array.length = array.length * 2;

   for (let i = 0; i < array.length; i++) {
     
     array[array.length - i - 1] = array[0]; 
     
     array.shift();
     
     //console.log(array); //[ 'b', 5, 4, 3, <4 empty items>, 'a' ]
   } 
   return array;
 }
 
 let reversedArray = ['a', 'b', 5, 4, 3]
 reverseInPlace(reversedArray);





module.exports = reverseInPlace;

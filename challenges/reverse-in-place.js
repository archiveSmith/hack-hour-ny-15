
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

function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}


function reverseInPlace(array) {
  // without creating a new object in memory, reverse an array of characters
  let leftToRight = 0;
  let rightToLeft = array.length - 1;

  while (leftToRight < rightToLeft) {
    swap(array, leftToRight, rightToLeft);
    leftToRight += 1;
    rightToLeft -= 1;
  }
  return array;
}


// function reverseInPlace(array) {

// }


// function reverseInPlace(array) {
//     let newArr = [];
//     let newStr = '';

//     for (let i = 0; i < array.length; i++) {
//         let curr = array[i];

//         for (let j = curr.length - 1; j >= 0; j--) {

//             newStr += curr[j];
//         }

//         newArr.push(newStr)
//     }
//     console.log(newArr)
//     return newArr;
// }

console.log(reverseInPlace([1, 2, 3, 4, 5]));

module.exports = reverseInPlace;

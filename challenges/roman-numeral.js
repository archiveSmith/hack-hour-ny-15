/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(num) {
  //  create an object to hold the roman numeral list;

  let result = '';

  // eslint-disable-next-line no-unused-vars
  const romanNumeralList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  for (const key in romanNumeralList) {
    console.log(num);
    while (num >= romanNumeralList[key]) {
      console.log(num);
      console.log(romanNumeralList[key]);
      // console.log()
      result += key;
      num -= romanNumeralList[key];
    }
  }
  console.log(result);
  return result;
}

console.log(romanNumeral(654));


// //  function convertToRoman(num) {
// //   let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
// //   let romanized = '';
// //   for (let i in lookup) {  	      // Loop through the key/value pairs in the lookup object
// //     while ( num >= lookup[i] ) {  // While the condition is met do following >>>
// //       romanized += i;   			  // Add the current i key to the variable roman
// //       num -= lookup[i];     	  // Decrease the num number by the current i value
// //     }
// //   }
// //   return romanized;
// // };

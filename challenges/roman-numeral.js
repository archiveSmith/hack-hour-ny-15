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

function romanNumeral(n) {
  // check if the n modula is 0 for 1000, 
  // if so add a roman numeral letter for each time n is divided by 1000 with Math.floor
  // then subtract from n the amount added to the string (1000 x number of times the number divides equally)


  const romanDict = {
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
  }

  let romanString = '';
  let num = n;

  for (let entry of Object.entries(romanDict)) {
    if (num / entry[1] > 0) {
      let times = Math.floor(num / entry[1]);
      num -= (times * entry[1]);
      let append = '';
      while (times > 0) {
        append += entry[0];
        times -= 1;
      }
      romanString += append;
    }
  }  
  return romanString
}

console.log(romanNumeral(14))


module.exports = romanNumeral;

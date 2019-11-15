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
  const romanDictionary = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M',
  };
  let romanNum = '';
  let totalTrack = 0;
  let trunkTrack = 0;
  for (let i = 1; i <= n; i += 1) {
    romanNum += 'I';
    totalTrack += 1;
    if (totalTrack === 4) {
      romanNum = 'IV';
    } else if (totalTrack === 5) {
      romanNum = 'V';
    // } else if () {

    } else {
      // romanNum += 'I';
    }
  }

  return romanNum;
}

console.log(romanNumeral(3));
console.log(romanNumeral(4));
console.log(romanNumeral(5));
// console.log(romanNumeral(9));
// console.log(romanNumeral(10));
// console.log(romanNumeral(40));

module.exports = romanNumeral;

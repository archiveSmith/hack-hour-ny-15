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
  const romanNumeralDictionary = {
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

  const arrOfNumerals = Object.entries(romanNumeralDictionary);

  let inputNumber = n;
  let outputNumeral = '';

  while (inputNumber > 0) {
    for (let i = arrOfNumerals.length - 1; i >= 0; i--) {
      if (inputNumber >= arrOfNumerals[i][0]) {
        outputNumeral += arrOfNumerals[i][1];
        inputNumber -= arrOfNumerals[i][0];
        break;
      }
    }
  }

  return outputNumeral;
}



module.exports = romanNumeral;

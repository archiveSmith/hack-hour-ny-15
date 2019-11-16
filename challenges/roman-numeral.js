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
    '900': 'CM',
    '500': 'D',
    '400': 'CD',
    '100': 'C',
    '90': 'XC',
    '50': 'L',
    '40': 'XL',
    '10': 'X',
    '9': 'IX',
    '5': 'V',
    '4': 'IV',
    '1': 'I'
  }
  let romanString = '';
  let number = n.toString();
  if (number.length > 3) {
    let thousands = number.slice(0, -3)
    romanString = 'M'.repeat(thousands);
  }
  for (let i = 3; i > 0; i -= 1) {
    let currentDigit = number[number.length - i];
    let currentColumn = 10 ** (i - 1);
    let product = currentDigit * currentColumn;
    if (currentDigit >= 4) {
      if (romanDictionary[product]) {
        romanString += romanDictionary[product];
        continue;
      }
      let romanArray = Object.keys(romanDictionary);
        for (let j = romanArray.length - 1; j >= 0; j -= 1) {
          let currentKey = romanArray[j] * 1;
          if (product > currentKey) {
            romanString += romanDictionary[currentKey];
            product -= currentKey;
            currentDigit = product / currentColumn;
            break;
          }
        } 
    }
    romanString += romanDictionary[currentColumn].repeat(currentDigit);
  }
  return romanString;
}

console.log(romanNumeral(4827));

module.exports = romanNumeral;

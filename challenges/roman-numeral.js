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

function romanNumeral(n, output = []) {
//divide out or add up?
//going to need a table of conversions in the form of an object
//iterate through keys started on largest and if they can divide into it, subtract it out
const conversionTable = {
  '1000' : 'M',
  '900' : 'CM',
  '500' : 'D',
  '400' : 'CD',
  '100' : 'C',
  '90' : 'XC',
  '50' : 'L',
  '40' : 'XL',
  '10' : 'X',
  '9' : 'IX',
  '5' : 'V',
  '4' : 'IV',
  '1' : 'I'
}
if (n === 0) return output.join('');
let amountLeft = n
const sortedKeys = Object.keys(conversionTable).sort((a, b) => b - a)
  for (let key of sortedKeys) {
    if (amountLeft / key >= 1) {
      output.push(conversionTable[key])
      return romanNumeral(amountLeft - key, output)
    }
  }
}


module.exports = romanNumeral;

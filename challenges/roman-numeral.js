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
// const dictionary = {
//   1000: 'M',
//   900: 'CM',
//   500: 'D',
//   400: 'CD',
//   100: 'C',
//   90: 'XC',
//   50: 'L',
//   40: 'XL',
//   10: 'X',
//   9: 'IX',
//   5: 'V',
//   4: 'IV',
//   1: 'I',
// };


function romanNumeral(n) {
  const dictArr = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

  let romNum = '';
  function innerRom(n) {
    if (n === 0) return romNum;
    for (let i = 0; i < dictArr.length; i += 1) {
      if (n / dictArr[i][0] >= 1) {
        romNum = romNum.concat(dictArr[i][1]);
        n -= dictArr[i][0];
        return innerRom(n);
      }
    }
  }
  return innerRom(n);
}

module.exports = romanNumeral;

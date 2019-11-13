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

  let midNum;

  //  if num is less than one or greater than 3999 return num

  if (num < 1 || num > 3999) {
    return num;
  } 
    
    for (let key in romanNumeralList) {
      console.log(num)
 
  
      midNum = Math.floor(num / key);
      console.log(midNum)
  
      console.log(midNum);

      if (midNum >= 0) {
        console.log(midNum)
        for (let i = 0; i < midNum; i += 1) {
          console.log(romanNumeralList[key])
          result += romanNumeralList[key];
        }
      }

      
       num = num % key;
    }
  
  
  console.log(result);

  return result;
}

console.log(romanNumeral(4));

module.exports = romanNumeral;

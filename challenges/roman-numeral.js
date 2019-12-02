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
// incomplete

function romanNumeral(n) {
    if(n <= 0) return "Needs to be a positve integer";

    const numeralConversion = {
        1: I,
        4: IV,
        5: V,
        9: IX,
        10: X,
        40: XL,
        50: L,
        90: XC,
       100: C,
       400: CD,
       500: D,
       900: CM,
       1000: M ,  
    }
    let romanStr = '';
    let numStr = n.toString();

    for(let i = 0; i < numStr.length; i += 1) {
        
        if (n > 1000) 
        if (n < 1000 && n >= 100)
        if (n < 100 && n >= 10)
        if (n < 10)
    }
}

/***************************************************************************************************** */
// solution 2

function romanNumeral(n) {
    let str = '';
    const romans = {
      'M': 1000,
      'CM': 900,
      'D': 500,
      'CD': 400,
      'C': 100,
      'XC': 90,
      'L': 50,
      'XL': 40,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4,
      'I': 1,
    };
  ​
    let a; // determines whether n is greater than the current value of romans[key]
  ​
    for(let key in romans){
      a = Math.floor(n / romans[key]);
      if(a > 0){
        for(let i = 0; i < a; i++){
          str += key;
        }
        n = n % romans[key];
      }
    }
  ​
    return str;
  }

module.exports = romanNumeral;

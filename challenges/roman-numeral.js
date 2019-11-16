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

 //every number from 1-3 counts by each I
 //every number 1 before a 10s place counts 10-1, 10 being X and 9 being IX
 //first, check if num is in the 0s, 10s, 100s, or 1000s
 //check the next nu

 //find out how large the number is
 //create objects mapping to 1 and 5 of each 10s place


 


function romanNumeral(n) {
const romanZeros = {
      1     :    "I",
      5     :    "V",
}
const romanTens = {
      10    :    "X",
      50    :    "L",
}
const romanHundreds = {
      100   :    "C",
      500   :    "D",
}
const romanThousands = {
      1000  :    "M",
}
let romanString = '';
let y = 0;
let remainder = null;

switch(Math.log10(Math.floor(n)) {
    case 3:
        y = (Math.floor(n/1000));
        romanString += romanThousands[1000].repeat(y);
        remainder = n % y*1000;
    case 2:
        if (remainder === null) remainder = n;
        y = (Math.floor(n/100));
        if (y > 5) {
        romanString += romanHundreds[500];
        romanString += romanHundreds[100].repeat(y-5);
    } else {
        romanString += romanHundreds[100].repeat(y)
    }
}
 //switch statement
 //if Math.log10(Math.floor(x)) === 3
    //divide x by 1000 and set the evaluated result to variable y
    //concat "M" y times to romanNumString
    //modulus x by y*1000
        //remainder divide by 100 and set evaluated result to variable y
        //if y > 5, concat romanHundreds[5] and concat romanHundreds[1] y-5 amount of times
        //modulus remainder by 10 and set evaluated result to variable y
        //
//turn number into string
//check string length
//log10(x) === string.length-1
//

//break down input into 10s places from highest possible log of 10


}

module.exports = romanNumeral;

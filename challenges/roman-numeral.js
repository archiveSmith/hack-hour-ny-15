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
  if (n <= 0) return -1;

  const romanNumDict = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let finalRomanNum = "";
  let nCopy = n;

  // while (nCopy > 0) {
  //   if (nCopy / 1000 >= 1) {
  //     finalRomanNum += romanNumDict[1000];
  //     nCopy = nCopy - 1000;
  //   } else  if (nCopy / 900 >= 1) {
  //     finalRomanNum += romanNumDict[900];
  //     nCopy = nCopy - 900;
  //   } else  if (nCopy / 500 >= 1) {
  //     finalRomanNum += romanNumDict[500];
  //     nCopy = nCopy - 500;
  //   } else  if (nCopy / 400 >= 1) {
  //     finalRomanNum += romanNumDict[400];
  //     nCopy = nCopy - 400;
  //   } else  if (nCopy / 100 >= 1) {
  //     finalRomanNum += romanNumDict[100];
  //     nCopy = nCopy - 100;
  //   } else  if (nCopy / 90 >= 1) {
  //     finalRomanNum += romanNumDict[90];
  //     nCopy = nCopy - 90;
  //   } else  if (nCopy / 50 >= 1) {
  //     finalRomanNum += romanNumDict[50];
  //     nCopy = nCopy - 50;
  //   } else  if (nCopy / 40 >= 1) {
  //     finalRomanNum += romanNumDict[40];
  //     nCopy = nCopy - 40;
  //   } else  if (nCopy / 10 >= 1) {
  //     finalRomanNum += romanNumDict[10];
  //     nCopy = nCopy - 10;
  //   } else  if (nCopy / 9 >= 1) {
  //     finalRomanNum += romanNumDict[9];
  //     nCopy = nCopy - 9;
  //   } else  if (nCopy / 5 >= 1) {
  //     finalRomanNum += romanNumDict[5];
  //     nCopy = nCopy - 5;
  //   } else  if (nCopy / 4 >= 1) {
  //     finalRomanNum += romanNumDict[4];
  //     nCopy = nCopy - 4;
  //   } else {
  //     finalRomanNum += romanNumDict[1];
  //     nCopy = nCopy - 1;
  //   }
  // }

  const majorNumerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let index = 0;

  while (nCopy > 0) {
    let majorNum = majorNumerals[index];
    if (nCopy / majorNum >= 1) {
      finalRomanNum += romanNumDict[majorNum];
      nCopy = nCopy - majorNum;
    }
    else
      index++;
  }

    return finalRomanNum;
}

console.log(romanNumeral(42));
console.log(romanNumeral(7));
console.log(romanNumeral(14));
console.log(romanNumeral(2019));
console.log(romanNumeral(-19));

module.exports = romanNumeral;

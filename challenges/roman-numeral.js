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

function separateNumberIntoUnits(n) {
  // I got this from Stack Overflow; if there had been more time I would've written it myself:
  if (n == 0) return [0];
  // n = Math.floor(n); // needed for decimal numbers
  var arr = [];
  var i = 1;

  while (n > 0) {
    arr.unshift((n % 10) * i);
    n = Math.floor(n / 10);
    i *= 10;
  }

  return arr;
}

function romanNumeral(n) {
  const refObj = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6":"VI",
    "7":"VII",
    "8":"VIII",
    "9": "IX",
    "40": "XL",
    "50": "L",
    "90": "XC",
    "100": "C",
    "400": "CD",
    "500": "D",
    "900": "CM",
    "1000": "M"
  };

  function edgeCaseHandler(numIn) {
    let strOut = "";
    if (numIn % 1000 === 0) {
      for (let i = 1; i <= numIn.toString()[0]; i++) {
        strOut += "M";
      }
      return strOut;
    } else if (numIn % 100 === 0) {
      for (let i = 1; i <= numIn.toString()[0]; i++) {
        strOut += "C";
      }
      return strOut;
    } else {
    }

    console.log(strOut);
    return strOut;
  }

  let numArr = separateNumberIntoUnits(n);
  let numDigits = n.toString().split("");
  console.log(numArr, numDigits);
  let strOut = "";
  numArr.forEach((entry, index) => {
    if (refObj[entry]) {
      strOut += refObj[entry];
    } else strOut += edgeCaseHandler(entry);
  });
  return strOut;
}

console.log(romanNumeral(3243));
console.log(romanNumeral(1979));
console.log(romanNumeral(52));

module.exports = romanNumeral;

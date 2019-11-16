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
  let conversion = {
    1: "X",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };

  let result = "";
  let keyArr = Object.keys(conversion);
  for (let i = keyArr.length - 1; i > 0; i--) {
    console.log(Number(keyArr[i]));

    while (Number(keyArr[i]) <= n) {
      console.log("entered");
      result = result + conversion[keyArr[i]];
      n = n - Number(keyArr[i]);
    }
  }
  return result;

  // return charOnly.reduce((acc, curr, i) => {
  //   let numAfter = conversion[charOnly[i + 1]];
  //   let numBefore = conversion[curr];
  //   let charAfter = charOnly[i + 1];
  //   let charBefore = curr;

  //   if (numAfter > numBefore) {
  //     console.log("entered 1");
  //     console.log("1:", acc);
  //     if (charBefore === "I" || charAfter === "V" || charAfter === "X") {
  //       console.log("entered 1a");
  //       acc = numAfter - numBefore;
  //       console.log("1a:", acc);
  //     } else if (charBefore === "X" || charAfter === "L" || charAfter === "C") {
  //       console.log("entered 1b");
  //       acc = numAfter - numBefore;
  //       console.log("1b:", acc);
  //     } else if (charBefore === "C" || charAfter === "D" || charAfter === "M") {
  //       console.log("entered 1c");
  //       acc = numAfter - numBefore;
  //       console.log("1c:", acc);
  //     } else {
  //       console.log("entered 1d");
  //       acc = numAfter - numBefore;
  //       console.log("1d:", acc);
  //     }
  //   } else if (numAfter < numBefore || numAfter === numBefore) {
  //     console.log("entered 2");
  //     acc = numAfter + numBefore;
  //     console.log("2:", acc);
  //   }
  //   return acc;
  // }, 0);
}

const test = 49;
console.log(romanNumeral(test));

module.exports = romanNumeral;

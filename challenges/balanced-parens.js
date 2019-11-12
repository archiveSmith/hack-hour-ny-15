/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function cleanedInput(strIn) {
  //   console.log(strIn);
  strIn = strIn.split("");
  //   console.log(strIn.length);
  let strOut = "";
  let leftStrs = "[{(";
  let rightStrs = "]})";
  for (let i = 0; i < strIn.length; i++) {
    if (leftStrs.indexOf(strIn[i]) !== -1) {
      //   console.log("Left", strIn[i]);
      strOut += "(";
    } else if (rightStrs.indexOf(strIn[i]) !== -1) {
      //   console.log("Right", strIn[i]);
      strOut += ")";
    }
  }
  return strOut;
}

function balancedParens(input) {
  //   input = cleanedInput(input);
  console.log(input);
  if (input.trim()[0] !== "(") return false;
  let isBalanced = true;
  for (let i = 0; i < input.length; i++) {
    if (
      (input[i] === "(" && input[input.length - i - 1] === ")") ||
      (input[i] === ")" && input[input.length - i - 1] === "(")
    ) {
      isBalanced = true;
    } else {
      isBalanced = false;
    }
  }
  return isBalanced;
}

// console.log(balancedParens("(")); // false
// console.log(balancedParens("()")); // true
// console.log(balancedParens(")(")); // false
// console.log(balancedParens("(())")); // true

// console.log(balancedParens("[](){}")); // true
// console.log(balancedParens("[({})]")); // true
// console.log(balancedParens("[(]{)}")); // false

module.exports = balancedParens;

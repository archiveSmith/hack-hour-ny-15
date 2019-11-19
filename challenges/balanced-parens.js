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

function balancedParens(input) {
  // define an array to keep brackets
  const justBracketsArr = [];
  // define an object brackets w/ keys as open parens and values as its corresponding closed parens
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  // loop through input
  for (let i = 0; i < input.length; i += 1) {
    // console.log(input[i]);
    // if curr elem is a key on the brackets object
    // push it's corresponding val into the justBracketsArr
    if (brackets[input[i]]) justBracketsArr.push(brackets[input[i]]);
    // if curr elem is a closed parens && justBracketsArr.pop() is NOT = to curr elem return false
    if ([')', ']', '}'].includes(input[i]) && justBracketsArr.pop() !== input[i]) return false;
  }
  // return the boolean if the justBracketsArr length is equal to 0
  return justBracketsArr.length === 0;
}

module.exports = balancedParens;

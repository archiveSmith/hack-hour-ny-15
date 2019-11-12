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
  if (input.length <= 1) return false;
  const openingBrackets = ['(', '{', '['];
  const matchingBrackets = {
    '(': ')',
    '{': '}',

    '[': ']',
  };
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    if (openingBrackets.includes(input[i])) {
      arr.push(input[i]);
    } else if (input[i] === ']' || input[i] === '}' || input[i] === ')') {
      const lastEL = arr.pop();
      if (input[i] !== matchingBrackets[lastEL]) return false;
    }
  }
  if (arr.length === 0) return true;
  return false;
}

// console.log(balancedParens('[](){}'));
// console.log(balancedParens('[({})]'));
// console.log(balancedParens('[(]{)}'));
// console.log(balancedParens('('));
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true

module.exports = balancedParens;

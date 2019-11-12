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
  // turn string into array of characters
  // iterate over array of characters pushing all forward brackets and popping off any backwards brackets
  // return if length of stack is equal to zero
  const charArr = input.split('');
  const stack = [];

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] === '[') {
      stack.push('[');
    }

    if (charArr[i] === '{') {
      stack.push('{');
    }

    if (charArr[i] === '(') {
      stack.push('(');
    }

    if (charArr[i] === ']') {
      const popped = stack.pop();
      if (popped !== '[') {
        return false;
      }
    }

    if (charArr[i] === '}') {
      const popped = stack.pop();
      if (popped !== '{') {
        return false;
      }
    }

    if (charArr[i] === ')') {
      const popped = stack.pop();
      if (popped !== '(') {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = balancedParens;

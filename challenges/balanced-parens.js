/* eslint-disable space-before-blocks */
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

// approach
// create an empty array to store stack
// create an obj brackets with keys as open parens and values as closed parens
// iterate through the input
// check if the iterating element is a key in the obj brackets
// if so push its value to the array stack
// else if iterating element is a closed parens and the last parens in the stack  doesn't equal
// to the current element return false


function balancedParens(input){
  const stack = [];
  const brackets = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < input.length; i += 1){
    const currElement = input[i];

    if (brackets[currElement]){
      stack.push(brackets[currElement]);
    } else if ([')', ']', '}'].includes(currElement) && stack.pop() !== currElement){
      return false;
    }
  }
  return stack.length === 0;
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]')); // true
console.log(balancedParens('[(]{)}')); // false

module.exports = balancedParens;

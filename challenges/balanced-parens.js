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
  const forwardBrackets = '([{';
  const backwardBrackets = ')]}';
  let forwardCount = 0;
  let backwardCount = 0;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    if (forwardBrackets.includes(char)) { // I need a way to check that these
      forwardCount += 1;                  // are appropriately placed.  
    } else if (backwardBrackets.includes(char)) {
      backwardCount += 1;
    }
  }

  return (forwardCount + backwardCount) % 2 === 0;
}

// console.log(balancedParens('(')); // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')(')); // false
// console.log(balancedParens('(())')); // true

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]')); // true
// console.log(balancedParens('[(]{)}')); // false

// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false


module.exports = balancedParens;

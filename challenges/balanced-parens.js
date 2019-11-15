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

// function balancedParens(input) {
//   const forwardParens = '([{';
//   const backwardParens = ')]}';
//   let forwardCount = 0;
//   let backwardCount = 0;

//   for (let i = 0; i < input.length; i += 1) {
//     const char = input[i];
//     if (forwardParens.includes(char)) {
//       forwardCount += 1;
//     } else if (backwardParens.includes(char)) {
//       backwardCount += 1;
//     }
//   }
//   return (forwardCount + backwardCount) % 2 === 0;
// }

const balancedParens = (input) => {
  const parensDict = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const parensTrack = [];
  for (let i = 0; i < input.length; i += 1) {
    const currentParen = input[i];
    if (currentParen === '(' || currentParen === '[' || currentParen === '{') {
      parensTrack.push(currentParen);
    } else if (currentParen === ')' || currentParen === ']' || currentParen === '}') {
      const prevParen = parensTrack.pop();
      if (parensDict[prevParen] !== currentParen) return false;
    }
  }

  return true;
};

// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]')); // true
// console.log(balancedParens('[(]{)}')); // false
//   Step 3:
// ignore non - bracket characters
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false


module.exports = balancedParens;

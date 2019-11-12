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
  // // check the number of parens for each input
  // //  of they're even, they're balanced, if they're odd, then they're false
  // //  assign opening parens
  // //   assign closing parens

  // const openingParen = '(';
  // const closingParen = ')';
  // const openingCurly = '{';
  // const closingCurly = '}';
  // const openingBracket = '[';
  // const closingBracket = ']';

  // let openingParenCount = 0;
  // let closingParenCount = 0;
  // let openingCurlyCount = 0;
  // let closingCurlyCount = 0;
  // let openingBracketCount = 0;
  // let closingBracketCount = 0;


  // for (let i = 0; i < input.length; i++) {
  //   const curr = input[i];

  //   if (curr === openingParen) openingParenCount += 1;
  //   if (curr === closingParen) closingParenCount += 1;
  //   if (curr === openingCurly) openingCurlyCount += 1;
  //   if (curr === closingCurly) closingCurlyCount += 1;
  //   if (curr === openingBracket) openingBracketCount += 1;
  //   if (curr === closingBracket) closingBracketCount += 1;
  // }

  // // eslint-disable-next-line max-len
  // //  const sum = (openingParenCount + closingParenCount + openingCurlyCount + closingCurlyCount + openingBracketCount + closingBracketCount);

  // return (openingParenCount === closingParenCount && openingCurlyCount === closingCurlyCount && openingBracketCount === closingBracketCount);

  // // return (sum % 2 === 0);


  //   create a stack to hold the current

  const stackTrack = [];
  const mapObj = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      stackTrack.push(input[i]);
    } else {
      const lastSymbol = stackTrack.pop();

      if (input[i] !== mapObj[lastSymbol]) {
        return false;
      }
    }
  }
  if (stackTrack.length !== 0) return false;

  return true;
}

console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
console.log(balancedParens('[(]{)}')); // false)
console.log(balancedParens('[](){}'));
console.log(balancedParens(')('));
console.log(balancedParens('('));

module.exports = balancedParens;

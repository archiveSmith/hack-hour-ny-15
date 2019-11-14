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
    const currChar = input[i];
    if (currChar === '(' || currChar === '{' || currChar === '[') {
      stackTrack.push(currChar);
    } else {
      const lastSymbol = stackTrack.pop();

      if (currChar !== mapObj[lastSymbol]) {
        return false;
      }
    }
  }
  if (stackTrack.length !== 0) return false;

  return true;
}


// function balancedParens(input) {
//   //create a dictionary for possible brackets
//   const bracketDictionary = {
//     '[': ']',
//     '{': '}',
//     '(': ')'
//   };
//   //create a stack to store the opening brackets as a way to keep track of them
//   const brackTrackStack = [];
//   //iterate over inputted string
//   for (let i = 0; i < input.length; i += 1) {
//     //create a variable to reference the current character
//     const currentCharacter = input[i];
//     //ask if that character is an opening bracket
//     //if it is, then I want to push the bracket on to my stack
//     if (currentCharacter === '[' || currentCharacter === '{' || currentCharacter === '(') brackTrackStack.push(currentCharacter);
//     //ask if the character is a closing bracket
//     else if (currentCharacter === ']' || currentCharacter === '}' || currentCharacter === ')'){
//     //create a variable to reference the last opening bracket
//       const lastOpenedBracket = brackTrackStack.pop();
//       //if it is, then compare it against the value returned from popping the last opening bracket from the stack and using it as a key to access the bracket dictionary
//       //if they don't match, then return false
//       if (bracketDictionary[lastOpenedBracket] !== currentCharacter) return false;
//     }
//   }
//   //if iterator completes, return true
//   return true;
// }

console.log(balancedParens(' var hubble = function() { telescopes.awesome();'));
console.log(balancedParens('[(]{)}')); // false)
console.log(balancedParens('[](){}'));
console.log(balancedParens(')('));
console.log(balancedParens('('));

module.exports = balancedParens;

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
 */

module.exports = balancedParens;

function balancedParens(input) {
  //create a dictionary for possible brackets
  const bracketDictionary = {
    '[': ']',
    '{': '}',
    '(': ')'
  };
  //create a stack to store the opening brackets as a way to keep track of them
  const brackTrackStack = [];
  //iterate over inputted string
  for (let i = 0; i < input.length; i += 1) {
    //create a variable to reference the current character
    const currentCharacter = input[i];
    //ask if that character is an opening bracket
    //if it is, then I want to push the bracket on to my stack
    console.log("currentCharacter", currentCharacter)
    if (currentCharacter === '[' || currentCharacter === '{' || currentCharacter === '(') brackTrackStack.push(currentCharacter);
    //ask if the character is a closing bracket
    else if (currentCharacter === ']' || currentCharacter === '}' || currentCharacter === ')'){
    //create a variable to reference the last opening bracket
      const lastOpenedBracket = brackTrackStack.pop();

      //lastopened (
      //if it is, then compare it against the value returned from popping the last opening bracket from the stack 
      //and using it as a key to access the bracket dictionary
      //if they don't match, then return false
      if (bracketDictionary[lastOpenedBracket] !== currentCharacter) return false;
    }
  }
  //if iterator completes, return true
  return true;
}

console.log(balancedParens('[(]{)}')); 
// false










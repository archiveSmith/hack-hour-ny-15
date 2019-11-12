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

// you need a stack: the last opened needs to be the first closed

function balancedParens(input){
  let allBracketsStack = [];
  let lastBracket;
  let parenCounter = 0;
  let bracketCounter = 0;
  let braceCounter = 0;
  for (let i = 0; i < input.length; i += 1) {
    if (parenCounter < 0 || bracketCounter < 0 || braceCounter < 0) {
        return false;
    }
    switch(input[i]) {
        case '(':
            allBracketsStack.push(input[i]);
            parenCounter += 1;
            continue;
        case ')':
            lastBracket = allBracketsStack.pop();
            if (lastBracket !== '(') {
                return false;
            }
            parenCounter -= 1;
            continue;
        case '[':
            allBracketsStack.push(input[i]);
            bracketCounter += 1;
            continue;
        case ']':
            lastBracket = allBracketsStack.pop();
            if (lastBracket !== '[') {
                return false;
            }
            bracketCounter -= 1;
            continue;
        case '{':
            allBracketsStack.push(input[i]);
            braceCounter += 1;
            continue;
        case '}':
            lastBracket = allBracketsStack.pop();
            if (lastBracket !== '{') {
                return false;
            }
            braceCounter -= 1;
            continue;       
        default:
            continue;
    }
  }
  if (parenCounter !== 0 || bracketCounter !== 0 || braceCounter !== 0) {
      return false;
  }
  return true;
}

// console.log(balancedParens('[]{()}'));

module.exports = balancedParens;

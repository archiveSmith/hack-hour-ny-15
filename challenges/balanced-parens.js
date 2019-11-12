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

function balancedParens(input){
  //I need a store of each type of brackets one for open
  const openBrackets = {
    '(':')',
    '{':'}',
    '[':']'
  }
  //and one for close
  const closeBrackets = {
    ')':'(',
    '}':'{',
    ']':'['
  }
 
  const storage = input.split('').reduce((stack, nextValue) => {
  //then I can reduce throught the input and push values that checkout into a stack
    if (openBrackets[nextValue] || closeBrackets[nextValue]) {
      stack.push(nextValue);
  //when I push a closing bracket, I just check if the one before it is the correct opening
      if (closeBrackets[nextValue] && stack[stack.length - 2] === closeBrackets[nextValue]) {
  //if it is, then I pop them both off the stack, if not I can return false    
        stack.pop();
        stack.pop();
    }
    }
    return stack;  
  },[])
  // console.log(storage)
  //at the end I can check if my stack has any values left in it and if it does, then I know it's false
  return storage.length === 0
}

// console.log(balancedParens('('))
// console.log(balancedParens('()'))
// console.log(balancedParens(')('))
// console.log(balancedParens('(())'))
// console.log(balancedParens('[](){}'))
// console.log(balancedParens('[({})]'))
// console.log(balancedParens('[(]{)}'))

module.exports = balancedParens;

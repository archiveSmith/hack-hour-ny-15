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
  let stack = [];
  let brackets = {
    "[": "]",
    "{": "}",
    "(": ")"
  };

  let traverseArr = input.split("");
  let keys = Object.keys(brackets); // [,{,(
  let vals = Object.values(brackets); // ],},)

  let lastChar = stack[stack.length - 1];

  //if i is in object.keys, push into traverse ([,{,()
  //if  stack is not empty, last char in stack === object.key[i] ],},)
  //stack[stack.length - 1] -->  last char in stack --> {
  //brackets[lastChar] --> }
  //traverseArr[i] --> } --> if this is in vals, find index

  for (let i = 0; i < traverseArr.length; i++) {
    if (keys.includes(traverseArr[i])) {
      stack.push(traverseArr[i]);
    } else if (
      stack.length > 0 &&
      brackets[stack[stack.length - 1]] === traverseArr[i]
    ) {
      //   console.log(traverseArr[i]);
      //   console.log(stack);
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
// [,

const testStr = "[{](){"; // true
console.log(balancedParens(testStr)); // false

module.exports = balancedParens;

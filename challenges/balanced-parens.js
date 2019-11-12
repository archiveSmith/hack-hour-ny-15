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
  // takes in a string
  // output is a boolean
  // loop through string and count +1 for all ( and - 1 for all )
  let param = 0;
  let square = 0;
  let curly = 0;

  // edge cases:
  if (input[0] === ')' || input[0] === ']' || input[0] === '}' || input.length < 2) {
    return false;
  }
  // loop through all characters in the string
  for (let i = 0; i < input.length; i++) {
    // console.log(i);
    // grab the first char and see which it is.
    const char = input[i];

    if (char === '(') {
      param++;
    } else if (char === '[') {
      square++;
    } else if (char === '{') {
      curly++;
      // now for the other side:
    } else if (char === ')') {
      param--;
      if ((square > param || curly > param) && input[i - 1] !== '(') {
        // console.log('param');
        return false;
      }
      if (input[i - 1] === '(') {
        // remove the two chars
        input = input.slice(i - 1, i);
      }
    } else if (char === ']') {
      square--;
      if ((param > square || curly > square) && input[i - 1] !== '[') {
        // console.log('square');
        return false;
      }
      if (input[i - 1] === '[') {
        // remove the two chars
        input = input.slice(i - 1, i);
      }
    } else if (char === '}') {
      curly--;
      // param > curly || square > curly ||
      if ((param > curly || square > curly) && input[i - 1] !== '{') {
        // console.log(input[i - 1] === '{');
        return false;
      }
      if (input[i - 1] === '{') {
        // remove the two chars
        input = input.slice(i - 1, i);
      }
    }
  }


  return true;
}


console.log('false: ', balancedParens('(')); // false
console.log('true: ', balancedParens('()')); // true
console.log('false: ', balancedParens(')(')); // false
console.log('true: ', balancedParens('(())')); // true
console.log('true: ', balancedParens('[](){}')); // true
console.log('true: ', balancedParens('[({})]')); // true
console.log('false: ', balancedParens('[(]{)}')); // false
console.log('false: ', balancedParens('[(]')); // false


module.exports = balancedParens;

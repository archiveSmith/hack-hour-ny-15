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
  const cleanedArr = cleanArray(input);
  console.log(cleanedArr);
  const pairsPulledArr = pullPairs(cleanedArr);
  console.log(pairsPulledArr);
}

function pullPairs(inputArr) {
  const pairsPulledArr = inputArr.slice();
  let checkAgain = false;
  for (let i = 0; i < inputArr.length - 1; i += 1) {
    if (inputArr[i] === '(' && inputArr[i + 1] === ')' || inputArr[i] === '[' && inputArr[i + 1] === ']' || inputArr[i] === '{' && inputArr[i + 1] === '}') {
      const fill = [' ', ' '];
      pairsPulledArr.splice(i, 2, ' ');
      checkAgain = true;
    }
  }
  console.log(pairsPulledArr.replace(' ', ''));
  return pairsPulledArr;
}

function cleanArray(input) {
  const input2Arr = input.split('');
  const cleanedArr = [];
  for (let i = 0; i < input2Arr.length; i += 1) {
    if (input2Arr[i] === '(' || input2Arr[i] === ')' || input2Arr[i] === '[' || input2Arr[i] === ']' || input2Arr[i] === '{' || input2Arr[i] === '}') {
      cleanedArr.push(input2Arr[i]);
    }
  }
  return cleanedArr;
}
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));

module.exports = balancedParens;

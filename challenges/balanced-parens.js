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
//loop through string
    let lastOpen = [];
    for (let i = 0; i < input.length; i++) {
        if ('({['.includes(input[i])) {
            lastOpen.push(input[i])
        }
        //need to make sure the first closing bracket matches the last opened
        if (')}]'.includes(input[i])) {
            if (lastOpen[lastOpen.length-1] === '(' && input[i] === ')') {
                lastOpen.pop()
            }
            else if (lastOpen[lastOpen.length-1] === '{' && input[i] === '}') {
                lastOpen.pop()}
            else if (lastOpen[lastOpen.length-1] === '[' && input[i] === ']') {
                lastOpen.pop()}
            }
        }
        return (lastOpen.length === 0);
}

module.exports = balancedParens;

// console.log(balancedParens('[](){}'))
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')) // true
// console.log(balancedParens('[(]{)}'))  // false
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))  // false
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
    //use a stack
    //have two objects that map to opening and closing brackets with its coressponding key value pairs
    //iterate thru string
    //only compare if current char exists as an opening or closing bracket
    //if its an opening bracket, push it onto the stack
    //if its a closing bracket, push it on to the stack. check if the second to last element on the stack is the corresponding open bracket
    //if so, pop both off the stack
    //at the end, if you end up with an empty array, return true
    //else, return false

    const openBrackets = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }

    const closingBrackets = {
        "}" : "{",
        "]" : "[",
        ")" : "(",
    }

    let stringArray = Array.from(input);
    
    const balancedBrackets = stringArray.reduce((brackStack, curr) => {
        if (openBrackets[curr] || closingBrackets[curr]) brackStack.push(curr);
        if (closingBrackets[curr] && closingBrackets[curr] === brackStack[brackStack.length-2]){
            brackStack.pop();
            brackStack.pop();
        }
        return brackStack;
    }, [])

    return (balancedBrackets.length == false)
}

console.log(balancedParens('[](){}')); // true
console.log(balancedParens('[({})]'));   // true
console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'))
console.log(balancedParens(' var hubble = function() { telescopes.awesome();'))

module.exports = balancedParens;

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
    let pCount = 0
    let cCount = 0 
    let bCount = 0

    for (let char of input){
        switch(char){
        case '(' : pCount += 1; continue
        case ')' : 
            pCount -= 1
            if (cCount > 0 || bCount >0)
                return false
            else continue
        case '{' : cCount += 1; continue
        case '}' : 
            cCount -= 1
            if (pCount > 0 || bCount >0)
                return false
            else continue
        case '[' : bCount += 1; continue
        case ']' : 
            bCount -= 1 
            if (pCount > 0 || cCount >0)
                return false
            else continue
        }
}
return (pCount === 0 && bCount === 0 && cCount === 0)   
}

console.log(balancedParens('[](){}'))
console.log(balancedParens('[({})]'))
console.log(balancedParens('[(]{)}'))

module.exports = balancedParens;

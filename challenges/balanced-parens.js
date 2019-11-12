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
    if (typeof input !== 'string') return false;

    const count = {
        bracesF: 0,
        bracesL: 0
    };
    const bracesFirst = '({[';
    const bracesLast = ')}]';

    for (let i = 0; i < input.length; i++) {
        if(bracesFirst.indexOf(input[i]) > -1) count['bracesF'] += 1;
        
        if(bracesLast.indexOf(input[i]) > -1) count['bracesL'] += 1;
    }

    if (count['bracesF'] === count['bracesL']) return true;

    return false;
}

module.exports = balancedParens;

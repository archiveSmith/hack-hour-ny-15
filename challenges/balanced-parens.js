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
    input = input.split("")
    //How do you determine a balance? 
    //If there's an even number you know it's balances
    //If there is an odd number you know it's false

    for (let i = 0;  i < input.length; i++) {
        if (input[i] === "{" && (input(i+1) === "}") || ( (input.length-1-i) === "}") {
            return true 
        } else if (input[i] === "[" && (input(i+1) === "]")) || ((input.length-1-i) === ")") {
            return true
    } else if ((input[i] === "(") && (input(i+1) === ")") || (input.length-1-i) === ")")) {
        return true 
    }
}


    return false
}


/*


    const objectCounter = input.reduce( (accumulator, currentValue) => {
        if (!accumulator[currentValue]) {
            accumulator[currentValue] = 1
        } else {
            accumulator[currentValue] += 1
        }
        console.log(accumulator)
        return accumulator
    }, {})

    
    if ((objectCounter["{"] === objectCounter["}"]) && (objectCounter["["] === objectCounter["]"]) && (objectCounter["("] === objectCounter[")"])) {
        return true 
    } 
    return false
    console.log(input)

*/




console.log(balancedParens('[](){}')); 
// true
// console.log(balancedParens('[({})]'));   
// // // true
// console.log(balancedParens('[ ( ] { ) } ')); 
// // false
module.exports = balancedParens;

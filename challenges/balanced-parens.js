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
//     //How do you determine a balance? 
/*     Balanced parenthesis is determined by whether or not the string replicated the 
       proper syntactical structure of any bracket character. Does it close itself?
        ie. () first and last elements close
*/
const inputArray = JSON.parse(JSON.stringify(input.split("")))
let length = inputArray.length-1

for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[0] === ")" || inputArray[0] === "}"|| inputArray[0] === "]") {
        return false
    } else if (inputArray[length] === "{" || inputArray[length] === "[" || inputArray[length] === "(") {
        return false 
    }
      
    // else if (inputArray[length] === "(") {
    //     return false
    // }
}

return true

}

// console.log(balancedParens('[](){}')); 
//true
// console.log(balancedParens('[({})]'));   
// // // true
console.log(balancedParens('[ ( ] { ) } ')); 
// false
module.exports = balancedParens;



// function balancedParens(input) {
//     input = input.split("")
//     //How do you determine a balance? 
//     //If there's an even number you know it's balances
//     //If there is an odd number you know it's false

//     const objectCounter = input.reduce( (accumulator, currentValue) => {
//         if (!accumulator[currentValue]) {
//             accumulator[currentValue] = 1
//         } else {
//             accumulator[currentValue] += 1
//         }
//         console.log(accumulator)
//         return accumulator
//     }, {})

    
//     if ((objectCounter["{"] === objectCounter["}"]) && (objectCounter["["] === objectCounter["]"]) && (objectCounter["("] === objectCounter[")"])) {
//         return true 
//     } 
//     return false
//     console.log(input)

// }









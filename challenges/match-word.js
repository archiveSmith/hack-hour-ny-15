// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

//cant sanitize the string
// listen for only a-z characters and punctuation
    //regex?
    //matching character patterns if its preceded by punctuation

//grab every word(defined as groups of characters separated by space or punctuation)


function matchWord(str) {
    //sanitize string
    const regexReplace = /[^a-zA-Z_\s]/g;
    const regexSplit = /[\s_]/g;
    let sanitizedString = str.replace(regexReplace, '').toLowerCase();
    console.log(sanitizedString);
    const stringArray = sanitizedString.split(regexSplit);
    console.log(stringArray)
    const sanitizedArray = stringArray.filter(el => el !== '')
    console.log(sanitizedArray)

    //string is sanitized, turned into an array of words
    //iterate over sanitized array
        //create a stack
        //push each element in the array into the stack
        //if the element is equal to the previous element reversed, pop them both off the stack
        //if at the end, the stack is empty, return true

    const isItTrue = sanitizedArray.reduce((stack, curr) => {
        stack.push(curr);
   
        if (stack.length >=2){
            let reversedSecond = stack[stack.length-2].split('').reverse().join('');
            let lastElement = stack[stack.length-1];
        while(lastElement == reversedSecond && stack.length >=2){
            stack.pop();
            stack.pop();
            if (stack.length >=2){
                reversedSecond = stack[stack.length-2].split('').reverse().join('');
                lastElement = stack[stack.length-1];
            }
            console.log(stack)
        }}
        return stack;
    },[])

    if (isItTrue.length === 0) return true;
    return false;
    //check if santitized string is a palindrome
}
// console.log(matchWord('__END_DNE-----'))
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
// console.log(matchWord('__END_DNE-----'))
// console.log(matchWord('for__if__rof__fi'))
console.log(matchWord('__ENDDNE__'))
// console.log(matchWord(''))

module.exports = matchWord;

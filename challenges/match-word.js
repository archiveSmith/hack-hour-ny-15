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

function matchWord(str) {
let stack = [];
let current = '';
for (let i = 0; i < str.length; i++) {
    //if letter, add to current word
    if (str[i].toUpperCase() !== str[i].toLowerCase()) {
        current += str[i].toLowerCase();
        //if letter is last letter in the string
        if (str.length === (i+1)) {
            //this should probably be refactored into a helper function
            let currentInReverse = current.split('').reverse().join('');
            if (stack.length > 0 && stack[stack.length-1] === currentInReverse) {
                stack.pop();
                current = '';
            }
        }
    }
    //if not a letter, trigger word check if a word exists
    else if (current.length > 0) {
        //does it match the last word in stack? If so, remove from stack
        let currentInReverse = current.split('').reverse().join('');
        if (stack.length > 0 && stack[stack.length-1] === currentInReverse) {
            stack.pop();
            current = '';
        }
        else {
            stack.push(current); 
            current = '';
        }
    }
}
return (stack.length === 0);
}

module.exports = matchWord;

// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true


// approach
// check if str is empty, if so return true
// declare an alphabet array with each char
//

function matchWord(str) {
  const stack = [];
  // checking and matching alphabet chars with input string
  const newStr = str.toLowerCase().match(/[a-z]+/g);
  // console.log(newStr);
  if (!newStr.length) return true;
  for (let i = 0; i < newStr.length; i += 1) {
    // if current newStr element is not in the alphabet
    if (stack.indexOf(newStr[i]) === -1) {
      stack.push(newStr[i]);
    }
  }
  // if the stack is empty or not
  return !(stack.length > 0);
}

console.log(matchWord('__END_DNE-----')); // -> true
console.log(matchWord('__ENDDNE__')); // -> false       (not separated by a space)
console.log(matchWord('IF()()fi[]')); // -> true

module.exports = matchWord;

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
  //use regex to cut my string to only lower case letters and spaces
  str = str.replace(/\W/g,' ');
  str = str.replace(/_/g, ' ');
  str = str.trim().concat(' ');
  str = str.toLowerCase();
  //now that I have a manageable string, let's treat this like balanced brackets
  //iterate through and concat onto an empty string all non-spaces
  // when I hit a space and I have a new word, push it to a stack
  const stack = [];
  let tempString = '';
  for (let i = 0; i < str.length; i += 1) {
    console.log(stack)
    if (str[i] === ' ' && tempString.length) {
      stack.push(tempString);
      tempString = '';
      if (stack.length > 1) {
      let pointer1 = stack[stack.length - 1];
      let pointer2 = stack[stack.length - 2]
      pointer2 = pointer2.split('').reverse().join('');
//check if the reverse if equal to the previos word and pop if true
      if ( pointer1 === pointer2)  {
        stack.pop();
        stack.pop();
      }
    }
  }
   if (str[i] !== ' ') {
    tempString += str[i]
   }
  }
  return stack.length === 0
}
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
// console.log(matchWord('__END_DNE-----'))
// console.log(matchWord('IF()()fi[]'))
// console.log(matchWord('for__if__rof__fi'))

module.exports = matchWord;

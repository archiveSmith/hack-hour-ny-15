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
  const stack = [];
  let tempStr = str.toLowerCase();
  const regex = new RegExp('[a-zA-Z]', 'i');
  let word = '';
  let backWord = '';
  for (let i = 0; i <= str.length; i += 1) {
    if (tempStr.search(regex) === 0) {
      word += tempStr[0];
    } else if (word) {
      for (let j = word.length - 1; j >= 0; j -= 1) {
        backWord += word[j];
      }
      if (backWord === stack[stack.length - 1]) {
        stack.pop();
      } else {
        stack.push(word);
      }
      backWord = '';
      word = '';
    }
    tempStr = tempStr.slice(1);
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
}

// console.log(matchWord('__END_DNE-----'))
// console.log(matchWord('__ENDDNE__'))
// console.log(matchWord('IF()()fi[]'))
// console.log(matchWord('for__if__rof__fi'))
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
// console.log(matchWord(''))



module.exports = matchWord;

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
  // strip str of non-alphabetic xters
  let newStr = '';
  const alph = 'abcdefghijklmnopqrstuvwxyz_ ';
  // create a check for string not separated by space
  if (str.indexOf(' ') === -1) return false;

  for (let i = 0; i < str.length; i += 1) {
    if (alph.includes(str[i])) newStr += str[i];
  }
  // create an object to store each chars in the string
  const forwardDict = {};

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if(!forwardDict.hasOwnProperty(char) && (!forwardDict.hasOwnProperty(char.reverse())));
    forwardDict[char] = true;
  }

  return true;
}

module.exports = matchWord;

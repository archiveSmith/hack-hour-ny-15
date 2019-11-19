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
  /*find the words in the string and put them in an array
  create an empty stack
  iterate across the array of words and check if each word's lowercase reverse string is the top item in the stack
    if it is, pop the top item off
    if it's not, push the lowercased word to the stack
  if the stack is empty after looping across the array of words, return true; otherwise, return false
  */
  const arrayOfWords = [];
  let word = '';
  for (let i = 0; i < str.length; i += 1) {
    if (isLetter(str[i])) {
      word += str[i];
      if (i === str.length - 1) {
          arrayOfWords.push(word);
      }
    }
    else if ((!(isLetter(str[i]))) && (word.length !== 0)) {
      arrayOfWords.push(word);
      word = '';
    }
  }
  const keywordStack = [];
  for (let j = 0; j < arrayOfWords.length; j += 1) {
      const currentWord = arrayOfWords[j];
      const currentWordReversed = reverseString(currentWord);
      const currentWordReversedLowerCased = currentWordReversed.toLowerCase();
      if (currentWordReversedLowerCased === keywordStack[keywordStack.length - 1]) {
        keywordStack.pop();
      }
      else if (currentWordReversedLowerCased !== keywordStack[keywordStack.length - 1]) {
        keywordStack.push(arrayOfWords[j].toLowerCase());
      }
  }
  return keywordStack.length === 0;
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = matchWord;

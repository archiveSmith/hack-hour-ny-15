/* Some languages have "if" statements that are closed by "fi" instead of
curly brackets. Or they close a "case" with "esac",
i.e. the same keyword backwards. for this problem we'll check
that all words in a string are "closed". Write a function that
takes a string and returns true if every word is closed by its
backwards counterpart. Words must be separated by space or
 punctuation. */

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
// filter out characters
// keep the words in an array and check if reversed


  const strArray = str.match(/[a-zA-Z]+/g) || [];

  const stack = [];

  for (let i = 0; i < strArray.length; i += 1) {
    const currStr = strArray[i].toLowerCase().split('').reverse().join('');
    if (currStr === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(strArray[i].toLowerCase());
    }
  }

  return !stack.length;
}

// console.log(matchWord('__END_DNE-----'));
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

module.exports = matchWord;

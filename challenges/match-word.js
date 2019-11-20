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

function matchWord(str) {
  if (str === '') return true;
  const regExp = (/[A-Za-z]+/g) || [];
  const found = str.match(regExp);
  const stack = [];
  for (let i = 0; i < found.length; i += 1) {
    const currentEl = found[i];
    if (currentEl.toLowerCase() === stack[stack.length - 1]) {
      stack.pop();
    } else {
      const currentEl = found[i].toLowerCase().split('').reverse().join('');
      stack.push(currentEl);
    }
  }
  if (stack.length) return false;
  return true;
}


// console.log(matchWord('for__if__rof__fi'));
// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
// console.log(matchWord('__END_DNE-----'));
// console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('IF()()fi[]'));
// console.log(matchWord(''));

module.exports = matchWord;

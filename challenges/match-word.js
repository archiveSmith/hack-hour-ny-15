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
  // words should close backward
  // if for every word there is a closing opposite then it is part
  // set word count to 0

  const objHold = {};

  const clean = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  //  console.log(clean);

  for (let i = 0; i < clean.length; i += 1) {
    const curr = clean[i];

    if (objHold[curr] === undefined) {
      objHold[curr] = 1;
    } else {
      objHold[curr] += 1;
    }
  }

  // console.log(objHold);

  const result = Object.values(objHold).reduce((start, acc) => start + acc, 0);
  return result % 2 === 0;
}

// for (let i = 0; i < str.length; i += 1) {
//   if (str[i + 1] === _)
// }
// console.log(newStr);


console.log(matchWord('for__if__rof__fi')); // -> false

module.exports = matchWord;

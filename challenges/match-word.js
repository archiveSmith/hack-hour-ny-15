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
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  checkArr = str
    .toLowerCase()
    .split("")
    .filter(entry => alphabet.indexOf(entry) !== -1);
  if (checkArr.length < 2) return [str, true];
  if (checkArr.length % 2 !== 0) return [str, false];
  let checkStr = "";
  let strLoc = 0;
  for (let i = 0; i < checkArr.length; i++) {
    checkStr += checkArr[i];
    revCheckStr = checkStr
      .split("")
      .reverse()
      .join("");
    strLoc = str.toLowerCase().indexOf(checkStr);
    console.log(
      checkStr,
      " strLoc: ",
      strLoc,
      "check char:",
      str[strLoc + checkStr.length + 1]
    );
    if (
      checkStr === revCheckStr &&
      alphabet.indexOf(str[strLoc + checkStr.length + 1].toLowerCase()) === -1
    )
      return [str, true];
  }
  return [str, false];
}

// console.log(matchWord("__END_DNE-----")); // -> true
// console.log(matchWord("__ENDDNE__")); //  -> false       (not separated by a space)
// console.log(matchWord("IF()()fi[]")); //  -> true        (should be case-insensitive)
// console.log(matchWord("for__if__rof__fi")); //  -> false     not properly closed. like ( [) ]
console.log(matchWord("%%$@$while  try ! yrt  for if_fi rof #*#  elihw")); // -> true
// console.log(matchWord("")); // -> true

module.exports = matchWord;

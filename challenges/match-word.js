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
  //case insensitive - convert to lowercase first
  //remove leading and trailing special chars
  //loop through stripped string, checking if first char matches end char. if any special char in between, change specialCharNeeded variable to true
  //if specialCharNeeded var is true, and both sides match, then return true
  let toLowerCaseArr = str.toLowerCase().split("");
  //   let noSpecialChar = toLowerCaseArr;
  let specialCharNeeded = false;
  let onlySpecialCharRegex = /[^A-Za-z0-9]/;

  for (let i = 0; i < toLowerCaseArr.length - 1; i++) {
    for (let j = toLowerCaseArr.length - 1; j >= 0; j--) {
      if (toLowerCaseArr[i] === toLowerCaseArr[j]) {
        if (toLowerCaseArr[i].match(onlySpecialCharRegex)) {
          specialCharNeeded = true;
          return true;
        }
      } else if (
        !toLowerCaseArr[i].matchonlySpecialCharRegex ||
        specialCharNeeded === false
      ) {
        return false;
      }
    }
  }
}

const test = "END_DNE";
console.log(matchWord(test));
module.exports = matchWord;

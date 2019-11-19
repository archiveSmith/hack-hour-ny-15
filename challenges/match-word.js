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
  if (!str) return true;
  let pattern = /[A-Za-z]+/g;
  let match = str.toLowerCase().match(pattern) || [];
  let matchStack =[];
  match.forEach((word) => {
    if (matchStack.length === 0) 
      matchStack.push(word);
    else {
      let topStack = matchStack[matchStack.length - 1];
      if (isBackwards(topStack, word))
        matchStack.pop();
      else 
        matchStack.push(word);
    }
  });
  if (matchStack.length === 0)
    return true;
  return false;
}

let pattern = /[A-Za-z]+/g;
let str = "Is there an [is] in this is?";
let result = str.toLowerCase().match(pattern);
console.log(result);

function isBackwards(str1,str2) {
  return (str1 === str2.split("").reverse().join(""));
}

console.log(matchWord('__END_DNE-----'));  //-> true
console.log(matchWord('__ENDDNE__'));  //-> false
console.log(matchWord('IF()()fi[]'));  //-> true
console.log(matchWord('for__if__rof__fi'));  //-> false
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  //-> true
console.log(matchWord(''));  //-> true
console.log(matchWord('forif firof')); //->problem?

module.exports = matchWord;

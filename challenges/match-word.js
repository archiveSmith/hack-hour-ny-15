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

  if (str.length === 0) {
    return true;
  }
  // clean the data: 
  // make everything lower case 
  str = str.toLowerCase();
  console.log(str)
  // replace dashes with space
  words = str.replace(/[^a-z0-9+]+/gi, ' ');
  
  console.log(str)
  // console.log(brackets)
  // str = str.split('-');
  let newArr = []
  
  for (let i = 0; i < str.length; i++) {
    let el = str[i];
    

  // remove leading and trailing spaces
  // split string into array
  // loop through array and push backwords words into the array
  // let newArr = []
  
  // for (let i = 0; i < str.length; i++) {
  //   let word = str[i];
  //   if (word.length === 0) {
  //     continue;
  //   } else {
  //     if (newArr.includes(word) && str[i-1] !== word) {
  //       return false;
  //     } 
  //     let reversed = word.split('').reverse().join('');
  //     console.log(reversed)
  //     newArr.push(reversed)
  //     console.log(newArr)
  //   }
  }
}

// console.log(matchWord('for__if__rof__fi'))
// console.log(matchWord('__END_DNE-----'))
console.log(matchWord('__END_DNE-----'))

module.exports = matchWord;

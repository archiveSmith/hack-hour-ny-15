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
  if(str === '') return true;

  const newStr = str.replace(/[^a-zA-Z0-9+]+/gi, ' ').trim().toLowerCase();

  const wordsArr = newStr.split(' ');

  if(wordsArr.length % 2 !== 0) return false;

  for(let i = 0, j = wordsArr.length - 1; i < wordsArr.length; i += 1, j -= 1) {
    let word = wordsArr[i].split('').reverse().join('')

    if(wordsArr[i] !== wordsArr[j]) return false;
    // if(wordsArr.indexOf(word.toLowerCase()) === -1 ) return false;
  };

  return true;
}

console.log(matchWord('IF()()fi[]'))

/************************************************************************************ */
//Solution 1

function matchWord(str) {
  if (!str) return true;
  // clean up with regex
  console.log(str)
  str = str.replace(/[\W_]+/g, ' '); // replaces multiple white spaces with a single " "
  console.log(str)
  str = str.replace(/^[\s]|[\s]$/g, ''); // ^ matches start $ matches ends, and eliminates it
  console.log(str)
  str = str.toLowerCase(); // turn into lower case to validate both lower case and upper case
  const words = str.split(' ');
  console.log(words) 
  const matchArray = [];
  for (let word of words) {
    if (
      !matchArray.length ||
      word
        .split('')
        .reverse()
        .join('') !== matchArray[matchArray.length - 1]
    )
      matchArray.push(word);
    else {
      matchArray.pop();
    }
  }
  if (matchArray.length) return false;
  return true;
}

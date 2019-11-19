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
    if(str === "" || str === '') return true;
    let newStr =str.toLowerCase();
    let leftIndex = 0;
    let rightIndex = newStr.length -1;
    let start = "";
    let end = "";
    let leftCont = true;
    let rightCont = true;
    let endIndexOfStart;
    while( leftIndex < rightIndex && (leftCont || rightCont)){
        if((newStr.charCodeAt(leftIndex)< 97 || newStr.charCodeAt(leftIndex)>122) && !start ){
            leftIndex++;
        }
        else if((newStr.charCodeAt(leftIndex)< 97 || newStr.charCodeAt(leftIndex)>122) && start ){
            leftCont = false;
        }
        else if (newStr.charCodeAt(leftIndex)>= 97 && newStr.charCodeAt(leftIndex)<=122){
            start += newStr[leftIndex];
            endIndexOfStart = leftIndex;
            leftIndex++;
        }

        if((newStr.charCodeAt(rightIndex)< 97 || newStr.charCodeAt(rightIndex)>122) && !end){
            rightIndex--;
        }
        else if((newStr.charCodeAt(rightIndex)< 97 || newStr.charCodeAt(rightIndex)>122) && start ){
            rightCont = false;
        }
        else if (newStr.charCodeAt(rightIndex)>= 97 && newStr.charCodeAt(rightIndex)<=122){
            end+= newStr[rightIndex]
            rightIndex--;
        }
    } 
    console.log(start)
    console.log(end)
    if(start === end && (newStr.charCodeAt(endIndexOfStart+1)>122 || newStr.charCodeAt(endIndexOfStart+1)< 97)){
            return true;
    }
        return false;
}

console.log('matchWord(__END_DNE-----):', matchWord('__END_DNE-----'))
//-> true 

console.log('matchWord(__ENDDNE__):', matchWord('__ENDDNE__'))
//-> false     (not separated by a space)
   
console.log('matchWord(IF()()fi[]):', matchWord('IF()()fi[]'))
// -> true     (should be case-insensitive)

console.log('matchWord(for__if__rof__fi):', matchWord('for__if__rof__fi'))
//  -> false   not properly closed. like ( [) ] 

console.log('matchWord(%%$@$while  try ! yrt  for if_fi rof #*#  elihw):', matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'))
 // -> true

console.log('matchWord()', matchWord(''))
 // -> true

module.exports = matchWord;

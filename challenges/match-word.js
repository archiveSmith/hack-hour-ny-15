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
    //first check to see if there is a space or underscore in the str, if there isn't return false -- DEFAULT TO FALSE
    let chars = str
        //then separate the string by underscore and/or space
    if (chars.includes("_")) {
        chars = str.split("_")
    } else if (chars.includes(" ")) {
        chars = str.split("")
    }
    //this should hopefully give you an array of words as opposed to one long string
    chars.replace
    let last = chars.length - 1

    for (let i = 0; i < chars.length; i++) {
        // console.log(chars[i])
        if (chars[i] !== chars[last]) {
            return false
        }

        console.log(chars[last])
        last-=1
    }

    return true 

}

console.log(matchWord("END_DNE"))
module.exports = matchWord;

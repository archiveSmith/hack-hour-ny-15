/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  //find where the firt letter of st1 lives in st2
  //find that letter in st2 and move down until reaching end of st2
  //that is the beginning of the word, and the rest is added to the end
  //run isSubstring to see if they're the same word?
    let start = s2.indexOf(s1[0])
    let s1Index = 0;
    let string = '';
    for (let i = start; i < s2.length; i++)  {
      if (s2[i] === s1[s1Index]) {
        string += s2[i]
        s1Index += 1;
      }
    }
    string += (s2.slice(0, start))
    //console.log(string)
    return isSubstring(string, s1)
}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

//console.log(stringRotation("hello", "ollhe"));
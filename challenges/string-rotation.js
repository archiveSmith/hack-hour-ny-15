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

// input is two strings
// return a boolean
function stringRotation(s1, s2) {
  // grab first char of the first string.
  s1.toLowerCase();
  s2.toLowerCase();
  // find the beginning of the string.
  const firstChar = s1.split('')[0];
  // find the index of the beginning.
  const split = s2.indexOf(firstChar);
  // now we split and rearrange the second string.
  // grab the second half of the word (which is at the beginning)
  const end = s2.slice(0, split);
  // grab the first half of the word (which is after the first character)
  const first = s2.slice(split, s2.length);
  // concatenate them
  s2 = first + end;
  // now we call the funciton ONE TIME!
  return isSubstring(s1, s2);
}

module.exports = { isSubstring, stringRotation };

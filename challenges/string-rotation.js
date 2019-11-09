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


// helper function
function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

// main function
function stringRotation(s1, s2) {
  // check if both strings are strings
  if (typeof s1 !== 'string' || typeof s2 !== 'string') {
    return false;
  }
  // check if the first char in s1 is in s2 and store the position in idx variable
  const index = s2.indexOf(s1.split('')[0]);
  // console.log(index)

  const first = s2.slice(0, index);
  // console.log(first);

  const cutStr = s2.slice(index, s2.length);
  // console.log(cutStr);

  const checkStrs = s1 === cutStr.concat(first);
  // console.log(cutStr);
  return checkStrs;
}


console.log(stringRotation('hello', 'hello'));
console.log(stringRotation('hello', 'he'));

module.exports = { isSubstring, stringRotation };

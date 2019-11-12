/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 *
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true //hello
 *              stringRotation("hello", "llohe") -> true //swap he with llo
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  //looks for index of first occurence of s2 in s1. if cannot find, return -1
  console.log(s1.indexOf(s2));
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  //need to find "he" in order to return val >0
  //point h > e > l > l> o
  //split str into charArr
  let s2Char = s2.split("");
  for (let i = 0; i < s2Char.length - 1; i++) {}
}

const test1 = "hello";
const test2 = "llohe";
const test3 = "lohel";
console.log(isSubstring(test1, test2));

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };

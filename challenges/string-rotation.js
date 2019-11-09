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
  //double the substring and see if the first string occurs in the second
  if (typeof s1 !== 'string' || typeof s2 !== 'string') return 'Please input strings only.';

  s2 += s2;
  if ((s1.length*2) !== s2.length) return false;
  console.log(s2);
  console.log(s2.includes(s1))
  const isRotatedString = s2.includes(s1);
  console.log(isRotatedString)
  return isRotatedString;
}


// console.log(stringRotation("hello", "hello"))

console.log(stringRotation("hello", "llohe"))
console.log(stringRotation("hello", "he"))


module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

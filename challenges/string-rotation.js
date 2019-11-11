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

// function isSubstring(s1, s2) {
//   return s1.indexOf(s2) >= 0;
// }

// function stringRotation(s1, s2) {
//   // check if the second string is a rotation of the first one
//   if (s1.length !== s2.length) return false;
//   if (s1 === s2) return true;

//   console.log(s2.indexOf(s1[0]));


//   // check if the current index of the first string is the same as the next all over
//   // let rightToLeft = s1.length;
//   // for (let i = 0; i < s1.length; i++) {

//   // }
//   // isSubstring ()

//   // while ()
// }

function stringRotation(s1, s2) {
  //  if the strngs do not have the same length, the cant be rotations of the other
  if (s1.length !== s2.length) return false;

  const concatStr = s1 + s1;

  //  console.log(concatStr);

  return (concatStr.includes(s2));
}

console.log(stringRotation('hello', 'he'));

module.exports = { isSubstring, stringRotation };

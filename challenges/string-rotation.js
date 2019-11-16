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
  // is second string found in first and in the same order?
  // start at first letter of first string and find it's index in second string
  // look at second string length, if it's the last element in the array change index to 0 in order to check if string continues
  if (s1.length !== s2.length) {
    return false;
  }

  let indexS1;
  let indexS2;
  let counter = 0;

  for (let i = 0; i < s1.length; i++) {
    indexS2 = s2.indexOf(s1[i]);
    if (indexS2 === -1) {
      return false;
    }
    counter += indexS2;
    counter -= i;
  }
  console.log(counter);

  console.log(counter);
  if (counter !== -1) {
    return false;
  }

  return true;

  // find index of each second string element in the first string
}

const stringOne = 'abcd';
const stringTwo = '';

// * For example: stringRotation("hello", "hello") -> true
// *              stringRotation("hello", "llohe") -> true
// *              stringRotation("hello", "he") -> false
// *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)

console.log(stringRotation(stringOne, stringTwo));

module.exports = { isSubstring, stringRotation };

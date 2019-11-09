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
  s2 = s2.split('');
  let s3 = [];
  for (let i = 0; i < s2.length; i += 1) {
    if (s2[i] === 'h') {
      s3 = s2.splice(i);
      s3 = s3.concat(s2);
      s3 = s3.join('');
    }
  }

  if (isSubstring(s1, s3) && s1.length === s3.length) return true;
  return false;
}

module.exports = { isSubstring, stringRotation };

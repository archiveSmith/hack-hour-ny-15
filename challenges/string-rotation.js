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
  if (s2.length !== s1.length) {
    return false;
  }
  let rotations = s2.length;
  let specificRotation = s2;
  // are they identical? no? rotate the second and compare again
  // check as many times as the strings' length
  while (rotations > 0) {
    if (s1 === specificRotation) {
      return true;
    }
    let splitRotation = specificRotation.split('');
    splitRotation.push(splitRotation.shift());
    specificRotation = splitRotation.join('');
    rotations -= 1;
  }
  return false;
}


// console.log(stringRotation('mountain', 'tainmuon'));

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

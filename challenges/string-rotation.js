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
    // I can compare the lengths to make sure it's possible
    if (s1.length !== s2.length) return false;
    //if it is a rotation then it should be found if I use two of the string since the point of rotation won't matter
    return isSubstring(s1 + s1, s2);

}
// console.log(stringRotation('cocopuffs', 'copuffsco'))

module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };
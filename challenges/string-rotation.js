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
  if (arr1.length !== arr2.length) return false // edge case

  else if ((s1+s1).includes(s2)) return true

  return false

  // let temp1 = (s1+s1).split(''); // [h e l l o h e l l o]
  // let temp2 = s2.split('')       // [l l o h e]
  // //iterate thru (s1+s1) and s2 


  // let check = [];
  // for (let i = 0; i < temp2.length; i++) {
  //   for (let j = 0; j < temp2.length; j++)
  //     if (temp1[i] === temp2[j]) {
  //     console.log('temp1: ', temp1[i])
  //     console.log('temp2: ', temp2[j])
  //     i++
  //     check.push(temp2[j])
  // }
  // }

  // console.log(check)


}

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

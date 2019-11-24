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
  return stringRotation(s1, s2);
}

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  else if (s1 === s2) return true;

  let temp = s1;

  for (let i = 0; i < 2; i += 1) {
    let firstHalf;
    let secondHalf;

    if (s1.length % 2 !== 0) {
      firstHalf = temp.slice(0, Math.floor(s1.length / 2));
      secondHalf = temp.slice(Math.floor(s1.length / 2 + 1));
      temp = secondHalf + temp[Math.floor(s1.length / 2)] + firstHalf;
    } else {
      firstHalf = temp.slice(0, Math.floor(s1.length / 2));
      secondHalf = temp.slice(Math.floor(s1.length / 2));

      temp = secondHalf + firstHalf;
    }

    if (temp === s2) return true;
  }

  return false;
}

/********************************************************************************************************* */
// Solution 

function isSubstring(string, sub) {
  return string.indexOf(sub) > -1
}
​
function isRotation(firstStr, secondStr) {
  return isSubstring(firstStr + firstStr, secondStr);
}
​
function stringRotation(firstStr, secondStr) {
  return isRotation(firstStr, secondStr);
}

/********************************************************************************************************* */
// Solution 2
​
function stringRotationOneLiner(first, second) {
  return (first + first).indexOf(second) > -1
};


module.exports = { isSubstring: isSubstring, stringRotation: stringRotation };

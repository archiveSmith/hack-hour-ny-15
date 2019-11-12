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



function stringRotation(s1, s2) {
//check for complete reverse? 
//check if strings are exactly the same
//then start checking to see if it is a substring beginning and ending at a particular index
//create an object where the keys represent the indices of s1 and the value represents whether the character for s2 is in s1 or not 
//when you keep getting false 

   let s2Replica = JSON.parse(JSON.stringify(s2))
   s2Replica = s2Replica.split("").reverse().join("")
  
  if (s1 === s2 || s1 ==  s2Replica) {
    return true 
  } else {
    return false
  }

  const half = s1.isSubstring(0, 2)
  console.log(s1.isSubstring(s2)

}


console.log(stringRotation("hello", "hello"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

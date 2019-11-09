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
  // FIRST APPROACH - ONLY WORKS IF THERES ONE INDEXOF THE FIRST LETTER
  // // CHECK FOR EDGE CASE - LENGTH OF S2 DOES NOT EQUAL LENGTH OF S1
  // if (s1.length !== s2.length) return false;
  // // INITIALIZE NEW LABEL TO HOLD VALUE OF S2 AS TO NOT CHANGE INPUT
  // s2Reorder = s2;
  // // CHANGE ORDER OF S2REORDER BASED ON THE FIRST LETTER OF S1
  // // TRYING TO CHANGE THE ROTATION BACK TO THE ORIGINAL
  // s2Reorder = s2.slice(s2.indexOf(s1[0])) + s2.slice(0,s2.indexOf(s1[0]));
  // // USE ISSUBSTRING TO CHECK IF THEY MATCH
  // return isSubstring(s1, s2Reorder);

  // SECOND APPROACH
  // CHECK FOR EDGE CASE - LENGTH OF S2 DOES NOT EQUAL LENGTH OF S1
  if (s1.length !== s2.length) return false;
  // USE TOLOWERCASE() TO MAKE SURE ALL INPUT IS SAME CASE
  let s1Lower = s1.toLowerCase();
  // INITIALIZE NEW LABEL TO HOLD VALUE OF S2 AS TO NOT CHANGE INPUT
  let s2Reorder = s2.toLowerCase();
  // INTIALIZE COUNT TO ITERATE THROUGH S2REORDER USING WHILE LOOP
  let count = 0;
  while (count < s2Reorder.length) {
    // CHECK FOR EQUALITY
    if (s1Lower === s2Reorder) return true;
    // REORDER S2REORDER TO CHANGE INPUT FOR EQUALITY CONDITION FOR NEXT LOOP
    s2Reorder = s2Reorder.slice(-1) + s2Reorder.slice(0,-1);
    // INCREMENT COUNT AS TO TAKE NEXT STEP
    ++count;
  }

  return false;
}

// console.log(stringRotation("hello world", "hello WORLD")) //-> true
// console.log(stringRotation("hello", "llohe")) //-> true
// console.log(stringRotation("hello", "he")) //-> false
// console.log(stringRotation("hello", "ollhe")) //-> false
// console.log(stringRotation("aardvark", "dvarkaar"))

module.exports = {isSubstring: isSubstring, stringRotation: stringRotation};

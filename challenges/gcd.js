/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  // initialize the greatest gcd to null to account for -ive nums
  let greatest = null;
  // starting from 1, check for numbers that can divide both a & b until its either a or b;
  for (let i = 1; i <= a; i += 1) {
    let curGreatest = null;
    // if the current i is greater than the greatest divides both a & b, and want to assign it to curGreatest;
    if ((a % i === 0 && b % i === 0) && curGreatest < i) {
      curGreatest = i;
      // only reassign curGreatest to greatest if greatest < curGreatest;
      if (greatest < curGreatest) greatest = curGreatest;
    }
  }
  // return the greatest which by now will be curGreatest;
  return greatest;
}

module.exports = gcd;
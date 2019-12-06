/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let greatest = null;
  for (let i = 1; i <= a; i += 1) {
    let curGreatest = null;
    if ((a % i === 0 && b % i === 0) && curGreatest < i) {
      curGreatest = i;
      if (greatest < curGreatest) greatest = curGreatest;
    }
  }

  return greatest;
}

module.exports = gcd;
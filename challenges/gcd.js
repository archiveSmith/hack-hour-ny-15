/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let greatestCommonDivisor = 1;
  let minInteger = Math.min(a, b);
  while (minInteger > 0) {
    if (a % minInteger === 0 && b % minInteger === 0 && minInteger > greatestCommonDivisor) {
      greatestCommonDivisor = minInteger;
    }
    minInteger -= 1;
  }
  return greatestCommonDivisor;
}

module.exports = gcd;

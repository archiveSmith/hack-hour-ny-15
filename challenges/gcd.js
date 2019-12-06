/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let tempA = a;
  let tempB = b;

  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a < 0) {
    tempA *= -1;
  }
  if (b < 0) {
    tempB *= -1;
  }
  let highestDivisor = 1;

  for (let i = 0; i <= tempA; i++) {
    if (tempA % i === 0 && tempB % i === 0) {
      highestDivisor = i;
    }
  }
  return highestDivisor;
}

module.exports = gcd;

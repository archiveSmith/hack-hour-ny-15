/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b, current = 1, lastDiv) {
  let newDiv = lastDiv;
  if (current === (a + 1) || current === (b + 1)) {
    return lastDiv;
  }
  if (a % current === 0 && b % current === 0) {
    newDiv = current;
  }
  return gcd(a, b, (current + 1), newDiv);
}

// console.log(gcd(10, 8));

// console.log(gcd(9, 8));

// console.log(gcd(512, 8));

// console.log(gcd(512, 256));



module.exports = gcd;
/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */


// recursive approach
// base case - if b is 0 return a which is the greatest common divisor
// else check if a is divisible with b


function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
console.log(gcd(24, 6));
console.log(gcd(80, 10));

module.exports = gcd;

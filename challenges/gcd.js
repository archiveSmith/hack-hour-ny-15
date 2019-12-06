/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let smaller;
  let larger;
  a > b ? [larger, smaller] = [a, b] : [larger, smaller] = [b, a];
  if (larger % smaller === 0) return smaller;
  let divisors;
  console.log(larger, smaller);
  for (let i = 0; i <= Math.floor(smaller / 2); i += 1) {
    console.log(i);
    if (a % i === 0 && b % i === 0) {
      divisors = i;
    }
  }
  return divisors;
}

module.exports = gcd;

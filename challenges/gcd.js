/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const workArr = [a, b].sort((a, b) => b - a);
  let bigNum = workArr[0];
  let littleNum = workArr[1];
  let remainder = bigNum % littleNum;
  while (remainder !== 0) {
    console.log(bigNum, littleNum, remainder);
    bigNum = littleNum;
    littleNum = remainder;
    remainder = bigNum % littleNum;
  }
  return littleNum;
}

console.log(gcd(10, 8));
console.log(gcd(100, 25));
console.log(gcd(28, 21));

module.exports = gcd;

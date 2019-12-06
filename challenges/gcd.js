/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  const divisorsOfA = divisors(a);
  const divisorsOfB = divisors(b);
  const arrayWithGreaterFirstElement = divisorsOfA[0] > divisorsOfB[0] ? divisorsOfA : divisorsOfB;
  const arrayWithSmallerFirstElement = arrayWithGreaterFirstElement === divisorsOfA ? divisorsOfB : divisorsOfA;
  for (let i = 0; i < arrayWithGreaterFirstElement.length; i += 1) {
    if(arrayWithSmallerFirstElement.includes(arrayWithGreaterFirstElement[i])) {
      return arrayWithGreaterFirstElement[i];
    }
  }
}

function divisors(num) {
  const arrOfDivisors = [];
  for (let i = num; i > 0; i -= 1) {
    if(num % i === 0) {
      arrOfDivisors.push(i);
    }
  }
  return arrOfDivisors;
}


// console.log(gcd(3, 33));

module.exports = gcd;
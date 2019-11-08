/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power, acc = 1) {
  if (power === 0) {
    return acc;
  }
  acc *= base;
  power -= 1;
  return pow(base, power, acc)
}

console.log(pow(4, 3))

module.exports = pow;


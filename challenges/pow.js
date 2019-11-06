/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  if (power <= 1) return base;

  return base * pow(base, power - 1);
}

console.log(pow(4, 3));

// tail call needs a total param
function powTC(base, power, total = 1) {
  if (power <= 0) return total;
  return powTC(base, power - 1, base * total);
}

console.log(powTC(4, 3));

module.exports = pow;

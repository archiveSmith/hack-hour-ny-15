/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base = 1, power = -1, ogBase = base) {
  if (power < 0) return "that's wack";
  if (power === 0) return 1;
  if (power === 1) return base;
  return pow(base * ogBase, --power, ogBase);
}

// console.log(pow());

module.exports = pow;

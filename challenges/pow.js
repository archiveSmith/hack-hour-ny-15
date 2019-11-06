/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

//e.g. base = 3, power = 3
//3*(3^2) = 27
//3*(3*1) = 9
//3*(3^0) = 3
//
// multiply base by itself
//how to deal w negative exponents

function pow(base, power) {
  if (power === 0) return 1;
  if (power <= 1) return base;
  return base * pow(base, power - 1); // 3*(3*1)
}

const base = 3;
const power = 0;
console.log(pow(base, power));

module.exports = pow;

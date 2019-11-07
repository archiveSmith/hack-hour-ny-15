/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base = 1, power = -1, ogBase = base) {
  // FIRST ATTEMPT - RECURSIVE APPROACH
  if (power < 0) return "that's wack";
  if (power === 0) return 1;
  if (power === 1) return base;
  return pow(base * ogBase, --power, ogBase);

  // SECOND ATTEMPT - WHILE LOOP APPROACH
  // if (power < 0) return "that's wack";
  // if (power === 0) return 1;
  // let result = base;
  // powerCount = power;
  // while (powerCount > 1) {
  //   result *= base;
  //   powerCount--;
  // }
  // return result;
}

// console.log(pow());

module.exports = pow;

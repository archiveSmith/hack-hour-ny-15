/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

 // we multiply base by base power number of times/
 // 2^3 is really 2 * 2 = 4 * 2 = 8

const pow = (base, power) => (power == 0 ? 1 : base * pow(base, --power));


// const pow = (base, power) => (power = 1) ? base : base * pow(base, --power);

//  function pow(base, power) {
//   if (power === 1) {
//     return base;
//   } else {
//     return base * pow(base, --power);
//   }
// }

// function pow(base, power) {
//   var result = 1;
//   while(power--) {
//     result *= base;
//   }
//   return result;
// }

// function pow(base, power, result = 1) { // (2, 3) //
  
//   console.log(base, power, result)
//   // base case:
//   if (power === 1) { // false
//     console.log(result);
//     return result;
//   }

//   // this issue is that we are not keeping the base case of 2 to multiply by; how do you save an initial parameter?, you don'

//   // recursive case:
//   if (result > base) {
//     result *= base;
//     console.log(result);
//     pow(base, --power, result);
//   } else {
//     result = base;
//   }
//   // result = 2 * 2 = 4

//   // (4, 2)

// }

console.log(pow(2, 3));

module.exports = pow;

/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

// input string
// output number

const binToDec = binary => parseInt(binary, 2);
console.log(binToDec('1001000'))
// // loop through all numbers between 0 - 100 and make a cache of all the numbers
//   const cache = {
//     '0': 0
//   }

//   let val = 0;
//   // now we have to build a cache
//   while (!Object.keys(cache).includes(binary)) {
//     // and we need to get the current number
//     // we need to build the string
//     // our current keys: 
//     let curArrOfKeys = Object.keys(cache)
//     console.log(curArrOfKeys)
//     // now we create the next number in the cache:
//     let nextNum;
//     // let's loop through and chanch one 
//     for (let i = curArrOfKeys.length; i <= 0; i--) {
//       console.log(i);
//       let el = curArrOfKeys[i];
//       if (el === 0) {
//         el = 1;

//       } else if (el === 1) {
//         continue;
//       }
//     }
//     // how do we iterate through the different possible keys?
//     cache[key] = val;
//     val++;
//   }

//   if (Object.keys(cache).includes(binary)) {
//     return cache[binary];
//   } 
  





module.exports = binToDec;

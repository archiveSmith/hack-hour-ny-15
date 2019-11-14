/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */
let romanNumerals = {
  'm'
}

function romanNumeral(n) {
  let a;
  for *let key in romans
}


console.log(romanNumeral(2544)) // M CD XL IV

// function romanNumeral(n) {
  //   // input number
  //   // start a cache of all of the roman numerals:
  //   let romanNumerals = {
  //     '1': 'I',
  //     '4': 'IV',
  //     '5': 'V',
  //     '6': 'VI',
  //     '9': 'IX',
  //     '10': 'X',
  //     '11': 'XI'
  //     '40': 'XL',
  //     '50': 'L',
  //     '60':
  //     '100': 'C',
  //     '500': 'D',
  //     '1000': 'M'
  //   }
  //   // turn number into string 2444 => '2444'
  //   let string = n.toString();
  //   console.log(typeof string)
  //   // turn string into an array.
  //   let array = string.split('');
  //   console.log(array);

  //   // now that we have an array we need ot find the length of our number
  //   // let length = array.length;
  //   // console.log(length)

  //   // let newArr = [];
  //   // // then loop through and give characteristics to each one and break into numbers
  //   // for (let i = 0; i < array.length; i++) {
  //   //   let num = array[i];
  //   //   // now that we have the num we need to create a new array with new numbers
  //   //   let newNum = num + '0'.repeat(length - 1)
  //   //   length--
  //   //   newArr.push(newNum)
  //   //   console.log(newArr,length)
  //   // }

  //   // let output = [];
  //   // // now we have our new numbers array:
  //   // console.log(newArr)
  //   // // we want to apply the characters to it each one:
  //   // for (let i = 0 ; i < newArr.length; i++) {
  //   //   let num = newArr[i];
  //   //   console.log(num)
      
  //   //   if (num >= 1000 && num < 4000) {
  //   //     let thousands = num/1000
  //   //       output.push(romanNumerals['1000'].repeat(thousands))
  //   //       console.log(output);
  //   //       continue;
  //   //   }
  //   //   // 
  //   //   if (num < 1000 && num >=100 )
  //   //   if (num > 500) {
  //   //     let hundreds = (num - 500)/100;
  //   //       output.push(romanNumerals['500'] + romanNumerals['100'].repeat(hundreds))
  //   //       console.log(output);
  //   //   } else if(num === 500) {
  //   //     output.push(romanNumerals['500'])
  //   //     console.log(output)
  //   //   } else if(num === 400) {
  //   //     output.push('test', romanNumerals['500'] + romanNumerals['100'])
  //   //     console.log(output)
  //   //   } else if(num < 400) {
  //   //     let hundreds = num/100;
  //   //     output.push(romanNumerals['100'].repeat(hundreds))
  //   //     console.log(output)
  //   //   }
  //   // }
    
  //   // // output: string
  // }

// console.log(romanNumeral(2544)) // M CD XL IV

module.exports = romanNumeral;

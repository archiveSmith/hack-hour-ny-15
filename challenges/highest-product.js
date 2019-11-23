/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (!array || array.length < 3) 
    return 0;
  if (array.length === 3) {
    return array.reduce((a, b) => a * b);
  }
  // FIRST ATTEMPT - DOES NOT HANDLE NEGATIVE NUMBERS
  // // CREATE COPY OF ORGINAL ARRAY
  // let copiedArray = array.slice(0);
  // // SORT COPIED ARRAY
  // copiedArray.sort((a, b) => {
  //   if (a < b)
  //     return -1;
  //   else if (a === b)
  //     return 0;
  //   else
  //     return 1;
  // });
  // // TAKE LAST THREE INDEXES OF ARRAY & MULITPLY THE VALUES
  // const mulitpliedValue = copiedArray.slice(-3).reduce(
  //   (a, b) => a * b);
  // // RETURN THAT MULTIPLIED VALUE
  // return mulitpliedValue;

  // SECOND ATTEMPT - SUBSET SUM APPROACH???
  const finalValues = {
    1: 0,
  }

  let keys = Object.keys(finalValues);
  let index = 0;
  while (index < array.length) {
    for (let i = 0; i < keys.length; ++i) {
      let keyValue = finalValues[keys[i]];
      if (keyValue < 3) {
        let newValue = array[index] * Number(keys[i]);
        finalValues[newValue] = keyValue + 1;
      }
    }
    keys = Object.keys(finalValues);
    index++;
  }

  const possValues = Object.keys(finalValues);
  possValues.sort((a, b) => {
    let aNum = Number(a);
    let bNum = Number(b);
    if (aNum < bNum)
      return -1;
    else if (aNum === bNum)
      return 0;
    else
      return 1;
  });
  // console.log(possValues);
  return possValues[possValues.length - 1];
}

console.log(highestProduct());
console.log(highestProduct([6]));
console.log(highestProduct([6,5]));
console.log(highestProduct([6,5,4]));
console.log(highestProduct([6,5,4,-7,-8,9]));
console.log(highestProduct([21,7,9,0,117,38]));

module.exports = highestProduct;

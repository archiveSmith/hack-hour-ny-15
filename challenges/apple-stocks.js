/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;
[500, 1500, 2000, 300, 1400, 1900, 800, 200, 0]

Write a function called highestProfit that calculates the highest profit 
you can make in a day by buying and selling a single Apple stock. Keep your
worst case time complexity in O(n^2).

Return 0 if no profit is possible OR if input is invalid.

** Extension **
Refactor your function to improve your time complexity to O(n).
Hint: Use pointers to keep track of the indices of max, min to 
calculate profit along the array.

*/

const highestProfit = apple_stock => {
  // create high and low variables
  // create newArray
  // iterate thru the array
  // if the current number is greater than the high, 
  //    then replace the high with the current, 
  //    calculate the difference and push into a new array;
  // if the current number is less than the low, 
  //    then replace the low and the high with the current,
  //    push 0 into the new array
  //    
  //  return Math.max of the newArray.
  if (!Array.isArray(apple_stock)) {
    return 0
  }
  let high = null;
  let low = null;
  let diffArray = [];
  for (elem of apple_stock) {
    if (typeof elem !== 'number') {
      return 0
    }
    if (high == null || low == null) {
      high = elem;
      low = elem;
    }
    if (elem > high) {
      high = elem;
    }
    if (elem < low) {
      low = elem;
      high = elem;
    }
    diffArray.push(high-low);
    console.log(diffArray);
  }
  return Math.max(...diffArray);
}

// const test1 = [1000, 500, 1500, 2000, 0];
// const test2 = [500, 1500, 2000, 700, 300, 1400, 1900, 800, 200, 0];
// const test3 = [1000, 500, 0];
// const test4 = 'this should return 0';
// const test5 = ['this should also return 0'];
// const test6 = { 1: 'return 0 as well' };


// console.log(highestProfit(test1));

module.exports = {highestProfit}
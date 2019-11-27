/*

Consider an array called apple-stock as an argument. This array 
represents the variation of an Apple stock during a single day. 
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;

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
  if (!apple_stock || !apple_stock[0]) return 0;

  let max = apple_stock[0];
  let min = apple_stock[0];
  let highestProfit = 0;
  let index = 1;

  while (index < apple_stock.length) {
    let focus = apple_stock[index];
    if (focus < min)
      min = focus;
    else if (focus >= max) {
      max = focus;
      if (max - min > highestProfit)
       highestProfit = max - min;
    }
    index++;
  }

  return highestProfit;
}

// console.log(highestProfit([1000, 500, 1500, 2000, 0]));
// console.log(highestProfit());

module.exports = {highestProfit}
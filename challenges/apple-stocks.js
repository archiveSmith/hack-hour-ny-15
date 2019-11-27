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

const highestProfit = (apple_stock) => {
  if (!Array.isArray(apple_stock) || apple_stock.length <= 1) return 0;
  let maxProfit = apple_stock[1] - apple_stock[0];

  for (let i = 0; i < apple_stock.length - 1; i += 1) {
    const prevQuote = apple_stock[i];
    const curQuote = apple_stock[i + 1];
    let curDiff = 0;
    if ((curQuote - prevQuote) > curDiff) {
      curDiff = curQuote - prevQuote;
      if (maxProfit < curDiff) {
        maxProfit = curDiff;
        curDiff = null;
      }
    }
  }
  if (maxProfit <= 0) return 0;
  return maxProfit;
};

console.log(highestProfit([1000, 500, 1500, 2000, 0]));

module.exports = { highestProfit };

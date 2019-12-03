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
  if (!apple_stock) return 0;

  let maxProfit = 0;

  for (let i = 0; i < apple_stock.length; i += 1) {
    for (let j = i + 1; j < apple_stock.length; j += 1) {
      if (maxProfit < apple_stock[j] - apple_stock[i]) {
        maxProfit = apple_stock[j] - apple_stock[i];
      }
    }
  }
  if (maxProfit <= 0) {
    return 0;
  }
  return maxProfit;
};

module.exports = { highestProfit };

/*

Consider an array called apple-stock as an argument. This array
represents the variation of an Apple stock during a single day.
The values in the array are in chronological order.

ex: [1000, 500, 1500, 2000, 0] --> The stock began at 1000 and closed at 0;
    [1000, 2000, 0, 700]

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
  if (!Array.isArray(apple_stock) || apple_stock.length === 1) return 0;

  let maxdiff;
  let low;
  let high;
  let flag = true;
  for (let i = 0; i < apple_stock.length; i += 1) {
    if (flag) {
      low = apple_stock[i];
      high = apple_stock[i];
      maxdiff = high - low;
    } else if (apple_stock[i] < low) {
      low = apple_stock[i];
      high = apple_stock[i];
    } else if (apple_stock[i] > high) {
      high = apple_stock[i];
      if (high - low > maxdiff) maxdiff = high - low;
    }
    flag = false;
  }

  return maxdiff;
};

module.exports = { highestProfit };

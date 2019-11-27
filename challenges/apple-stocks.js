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
  // keep track of total profit
  let highestAfterPurchase = 0;
  let purchasePrice = Infinity;
  // start at beginning, if price goes up on a move buy at previous
  for (let i = 0; i < apple_stock.length; i += 1) {
    // if the next element is greater than current and purchasePrice is greater than current set purchasePrice to current
    if (apple_stock[i + 1] > apple_stock[i] && purchasePrice > apple_stock[i]) {
      purchasePrice = apple_stock[i];
    }
    if (purchasePrice < Infinity && apple_stock[i + 1] > highestAfterPurchase) {
      highestAfterPurchase = apple_stock[i + 1];
    }
  }
  // if there was no profit possible return 0
  if (purchasePrice === Infinity) {
    return 0;
  }
  // return the maximum profit from 1 buy/sell
  return highestAfterPurchase - purchasePrice;
};

module.exports = { highestProfit };

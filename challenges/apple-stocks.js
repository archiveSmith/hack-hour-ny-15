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

}



/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */
​
// function bestProfit(stock_prices_yesterday) {
//   if (!stock_prices_yesterday && !Array.isArray(stock_prices_yesterday)) return 0;
//   let best = 0;
//   for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
//     for (let j = 0; j < stock_prices_yesterday.length; j += 1) {
//       best = Math.max(best, stock_prices_yesterday[j] - stock_prices_yesterday[i]);
//     }
//   }
//   return best;
// }
​
function highestProfit(stock_prices_yesterday) {
  let maxProfit = 0;
  let possibleProfit = 0;
  let minI = 0;
​
  if (!stock_prices_yesterday && !Array.isArray(stock_prices_yesterday)) return 0;
​
  for (let i = 0; i < stock_prices_yesterday.length; i += 1) {
    if (stock_prices_yesterday[i] < stock_prices_yesterday[minI]) {
      minI = i;
    }
    possibleProfit = stock_prices_yesterday[i] - stock_prices_yesterday[minI];
​
    if (possibleProfit > maxProfit) {
      maxProfit = possibleProfit;
    }
  }
  return maxProfit;
}
​
console.log(highestProfit([500, 501, 500, 510, 478, 498, 500]))
​
module.exports = {highestProfit}
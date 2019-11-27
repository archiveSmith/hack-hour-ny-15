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

You can never own more than one share
If the price never increases, no profit is possible
Start with $0
I want to buy at the valleys and sell at the peaks
A valley is lower than its previous price and its following price
A peak is higher than its previous price and its following price
Today, you can go from 0, -1000, 500, -1000, 1000
Or, you can go from 0, -500, 1000, -500, 1500
Or, you can go from 0, -500, 1500
[10, 40, 30, 90, 70, 50, 60] = max $100 (-10, 30, 0, 90, 40, 100)


*/

const highestProfit = apple_stock => {
  let profit = 0;
  if(!Array.isArray(apple_stock) || apple_stock.length < 2 /* or the price never increases */) {
    return profit;
  }
  let valley = 0;
  let peak = apple_stock[0];
  // buy at a valley
  for (let i = 0; i < apple_stock.length; i += 1) {
    if (apple_stock[i] <= apple_stock[i + 1] && i === 0) {
      valley = apple_stock[i];
      console.log('THE FIRST VALLEY WAS', valley);
      continue;
    }
    else if (apple_stock[i - 1] >= apple_stock[i] && apple_stock[i] <= apple_stock[i + 1]) {
      valley = apple_stock[i];
      console.log('THE LAST VALLEY WAS', valley);
    //   profit -= apple_stock[i];
    //   console.log('MY PROFIT IS', profit);
      continue;
    }
    else if(apple_stock[i - 1] <= apple_stock[i] && apple_stock[i] >= apple_stock[i + 1]) {
      peak = apple_stock[i];
      console.log('THE LAST PEAK WAS', peak);
      profit += (apple_stock[i] - valley);
      console.log('MY PROFIT IS', profit);
      continue;
    }
    else if(apple_stock[i - 1] <= apple_stock[i] && i === apple_stock.length - 1) {
      peak = apple_stock[i];
      console.log('THE FINAL PEAK WAS', peak);
      profit += (apple_stock[i] - valley);
      console.log('MY FINAL PROFIT IS', profit);
    }
  }
  return profit;
}

// console.log(highestProfit([9, 5, 6, 2, 2, 2, 1]));

module.exports = {highestProfit}
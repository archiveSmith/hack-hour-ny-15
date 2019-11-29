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

//min = 1000
//max = 1000
//profit = 0

const highestProfit = apple_stock => {
  let profitArr = [];
  //i: 1000
  //j: 500

  for (let i = 0; i < apple_stock.length; i++) {
    console.log(" i:", i, apple_stock[i]); //1000
    for (let j = 1; j < apple_stock.length; j++) {
      console.log(" j:", j, apple_stock[j]); //500, 1500, 2000
      let currentProfit = apple_stock[j] - apple_stock[i]; //-500, 500, 1000,
      if (currentProfit > 0) {
        profitArr.push(apple_stock[j] - apple_stock[i]);
      }
    }
  }

  console.log(profitArr);

  if (profitArr.length > 0) {
    return Math.max(...profitArr);
  } else {
    return 0;
  }
};

const testArr = [1000, 500, 1500, 2000, 3000];
const testCase = highestProfit(testArr);
console.log(testCase);

module.exports = { highestProfit };

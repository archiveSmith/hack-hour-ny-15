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
    //need to find the lowest and highest numbers where lowest is to the left of highest
    if (Array.isArray(apple_stock)) {
        let lowest = apple_stock[0];
        let tempLow = 0;
        let highest = 0;
        for (let i = 0; i < apple_stock.length; i++) {
            if (apple_stock[i] < lowest) {
                console.log("setting tempLow", i);
                tempLow = i;
            }
            if (apple_stock[i] > highest && i > tempLow) {
                lowest = apple_stock[tempLow];
                highest = apple_stock[i];
            }
        }
        //checks for profit
        if ((highest - lowest) > 0) {
            return highest - lowest;
        }
        return 0;
    }
    return 0;
}

module.exports = {highestProfit}

// console.log(highestProfit([1000, 500, 1500, 2000, 0]));
// console.log(highestProfit([0, 500, 1500, 3000, 0]));
// console.log(highestProfit('string'));
// console.log(highestProfit([2000, 1500, 500, 0]));
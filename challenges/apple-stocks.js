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
    const initial = apple_stock[0]
    const final = apple_stock[apple_stock.length-1]
    console.log(final)

    //if it's not an array return 0, if there are less than 2 values return 0
    //do this because it's an invalid input
    if (!Array.isArray(apple_stock) || apple_stock.length < 2) {
        return 0
    }
    //IN THE ARRAY AND THE VALUES REPRESENTING THE ABSOLUTE VALUE DIFFERENCE 
    //BETWEEN THE INITIAL VALUE AND THE ELEMENT YOU ARE CURRENTLY LOOKING AT
    //CREATE A MAX PROFIT VARIABLE AND SET IT EQUAL TO THE FIRST AVAILABLE DIFFERENCE 
    //KEEP CHECKING TO SEE IF THERE IS A LARGER PROFIT
    //THERE NEEDS TO BE CONDITIONAL LOGIC TO MAKE SURE THAT THE ELEMENT WE ARE LOOKING AT IS LARGER THAN THE INITIAL VALUE 

    //FIRST GET RID OF ALL VALUES LOWER THAN THE INITIAL STOCK VALUE CUZ OTHERWISE THAT AIN'T NO PROFIT
    const alteredArray = apple_stock.filter(element => element >= apple_stock[0])
    //CHECK TO SEE YOU FILTERED PROPERLY
    console.log(alteredArray)


    //NOW CREATE YOUR 'MAX PROFIT' WHICH CHECKS FIRST TWO VALUES AGAINST EACH OTHER
    let maxProfit = alteredArray[0] - alteredArray[1]
    console.log(maxProfit)

    for (let i = 0; i < alteredArray.length; i++) {
        let newProfit = Math.abs(alteredArray[0] - alteredArray[i+1]);
        console.log(newProfit)


        if (newProfit > maxProfit && !isNaN(newProfit)) {
            maxProfit = newProfit
            console.log(maxProfit)
        }

    }

    //loop through the array and create an object where you calculate

    console.log(maxProfit)
    return maxProfit

}

highestProfit([1000, 500, 1500, 2000, 0, 3000, 3500])

module.exports = {highestProfit}
/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    //declare a final stair variable
    let finalStair;
    //we declare an empty space variable
    let emptySpace = ' ';
    //keep track of how many spaces we got
    let emptySpaceCount = n - 1;
    //we declare a '*' variable and while on the first loop
    let stair = '*';
    //keep track of how many stairs we got right now
    let stairCount = 1;
    //we count down the passed in n and append more spaces until spaces match the string
    // for (let i = 1; i <= n; i += 1) {
    //     console.log('\n' + emptySpace.repeat(emptySpaceCount) + stair.repeat(stairCount));
    //     emptySpaceCount -= 1;
    //     stairCount += 1;
    // }

    for (let i = 1; i <= n; i++) {
        console.log('\n' + ' '.repeat(n - i) + '*'.repeat(i))
    }
    
}


module.exports = drawStairs;

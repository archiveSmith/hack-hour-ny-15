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
    // we want to construct the first string of n -1 of space
    // from index 0 to index n - 2. 
    // and 1 stair at position n - 1.
    let count = n;
    // console.log(count);
    
    for (let i = 0; i < n; i++) {
        // first is 5 spaces and 1 stair
        let spaceCount = n - 1 - i;
        let stairCount = i + 1; 
        // console.log(spaceCount, stairCount);
        // space
        let space = ' ';
        // stairs
        let stair = '*';
        // 
        // remove first element space
        // add last element stair
        
        let currentRow = space.repeat(spaceCount) + stair.repeat(stairCount);
        // let output = currentRow.join('')
        console.log(currentRow);
        

    }
}

drawStairs(50);

module.exports = drawStairs;

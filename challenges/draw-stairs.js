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
    if (n < 1 || n > 100) {
        return "input number must be greater than 0 and less than 101"
    }
    let stairs = '';
    let starNums = 1;
    let space = ' ';
    let star = '*';
    while (starNums <= n) {
        let spaceNums = n - starNums;
        // for (let i = 0; i < spaceNums; i ++) {
        //     stairs += space;
        // }
        stairs += space.repeat(spaceNums)
        // for (let i = 0; i < starNums; i ++) {
        //     stairs += star;
        // }
        stairs += star.repeat(starNums)
        stairs += '\n';
        starNums += 1;
    }
    console.log(stairs);
}

drawStairs()

module.exports = drawStairs;

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
    if (n >= 1 && n <= 100) {
        let stairString = '';
        const stair = '*';
        const space = ' ';
        for (let row = 0; row < n; row++) {
            stairString += space.repeat(n - (row + 1));
            stairString += stair.repeat(row + 1);
            stairString += '\n';
        }
        return console.log(stairString);
    }
    return console.log('not a number!');
}

drawStairs(10);

module.exports = drawStairs;

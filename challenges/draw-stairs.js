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
    let stairs = '';
    for (let i = 0; i < n; i++) { //loop through each stair
        let currStair = '';
        //loop through current line n times, adding i stars at the end (n-i = number of spaces);
        for (let x = 0; x < (n - i); x++) {
            currStair += ' ';
        }
        //add i number of stars
        for (let y = 0; y < i+1; y++) {
            currStair += "*";
        }
        currStair += "\n"
        stairs += currStair;
    }
    console.log(stairs);
}


module.exports = drawStairs;
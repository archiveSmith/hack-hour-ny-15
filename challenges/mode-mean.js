/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
     //determing the mean
     let mean = Math.floor(array.reduce(function add(acc, curr) {return acc + curr}) / array.length)
    
     //determine the mode
     //loop through sorted array, keeping track of a longest streak and a current streak. Mode = the num of longest streak
     let sortedArr = array.sort();
     let longestStreak = 0;
     let currentMode;
     let currentStreak = 0;
     let num = sortedArr[0];
     for (let i = 0; i < array.length; i++){
         if (sortedArr[i] === num){
             currentStreak += 1;
         }
         else if (sortedArr[i] !== num) {
             num = sortedArr[i];
             currentStreak = 1;
         }
         if (currentStreak >= longestStreak) {
             longestStreak = currentStreak;
             currentMode = sortedArr[i];
         }
     }
     
     //see if mode & mean are equivalent and return bool
     if (mean === currentMode) {
         return true;
     }
     return false;
}

module.exports = modemean;

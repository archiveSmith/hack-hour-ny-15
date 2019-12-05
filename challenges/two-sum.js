/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
const targetObj = {};
for(let i=0; i<arr.length; i++){
    if(targetObj.hasOwnProperty(arr[i])) return true; 
    else targetObj[n-arr[i]]= true;
}
return false;
}


console.log('twoSum(arr, n):', twoSum([1,1,5,4,5], 7))


module.exports = twoSum;

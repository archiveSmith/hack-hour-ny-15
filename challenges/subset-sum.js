/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    //sort array
    let arr = array.sort((a, b) => a - b);
    //if largest numbers are over target and first number is not negative, pop the largest numbers
    if (arr[0] > 0) {
        while (arr[arr.length-1] > target) {
            arr.pop();
        }
    }
    console.log(array);
    //check if largest and smallest numbers can be combined without going over
    while (arr[0] + arr[arr.length-1] > target) {
        arr.pop()
    }
    console.log(array);
    //add up all the numbers and see if the difference exists in the array?
    let total = arr.reduce((acc, current) => acc + current)
    if (total === target) {
        return true;
    }
    console.log(target);
    for (let i = 0; i < arr.length; i++) {
        console.log(target - i)
        if (total - arr[i] === target){
            return true;
        }
    }
    return false;
}

module.exports = subsetSum;

// console.log(subsetSum([3, 7, 4, 2], 5));
// console.log(subsetSum([3, 34, 4, 12, 5, 12], 32));
// console.log(subsetSum([8, -2, 1, -3], 6));
// console.log(subsetSum([8, 2, 4, 12], 13))
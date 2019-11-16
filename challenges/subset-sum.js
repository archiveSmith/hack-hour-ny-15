/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * x) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    //iterate through array
    //for each element, subtract element from array 
        //store difference in variable and if the next element is smaller than the difference
            //iterate through the array from 
    
    //sort array
        //declare a difference variable and initalize it to target
        //iterate from the largest num, seeing if it fits in the difference
        // array.sort(function(a, b){return b-a});
        let difference = target;
        const subset = []
    array.forEach(element => {
        if (element <= difference) {
            difference -= element;
            subset.push(element)
            console.log(subset)
            console.log(element)
            console.log(difference)
        };
    })

if (difference === 0) return true;
return false;
}
console.log(subsetSum([3, 7, 4, 2], 5))// - > true, 3 + 2 = 5
console.log(subsetSum([3, 34, 4, 12, 5, 12], 32))
// console.log(subsetSum([8, -2, 1, -3], 6))// -> true, 8 + 1 + (-3) = 6

module.exports = subsetSum;

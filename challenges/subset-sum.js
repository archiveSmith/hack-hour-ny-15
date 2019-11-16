/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target, options = {}) {
    if(array.length === 0) return;  
    let result;
    for(let i =0; i< array.length; i++){
        if(options.hasOwnProperty(array[i])) return true;
        else{
            options[target-array[i]] = true;
            result =subsetSum(array.slice(1), target-array[i], options);
        }
    }
    if(result === undefined) return false
    else return result;
}
console.log('subsetSum([8, -2, 1, -3], 6):', subsetSum([8, -2, 1, -3], 6))


module.exports = subsetSum;
// const options = {};
// for(let num of array){
//     console.log('array:', array)
//     console.log('target:', target)
//     console.log('num:', num)
//     if(options[num]) return true;
//     else{
//         options[target-num] = true;
//         console.log('num:', num)
//         console.log('target-num:', target-num)
//     }
// }
// console.log(options)
// for(let num of array){
//     return subsetSum(array.slice(1), target-num)
// }
// return false;
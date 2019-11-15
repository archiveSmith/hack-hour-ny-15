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
    //use a counter variable to see if anything ever equals the target
    let counter = 0
    array.sort()

    //if any of the numbers in the array include the target just return that
    if (array.includes(target)) return true

    for (let i = 0; i < array.length; i++) {

        counter += array[i]


        console.log(counter)
        if (counter === target) return true  
    }

    if (counter < target) return false
    console.log(array)

    return false
}

console.log(subsetSum([3, 34, 4, 12, 5, 12], 32)

module.exports = subsetSum;

/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    if (array.length < 3) {
        return 0 
    }

    const sorted = array.sort()
    const largestValue = sorted[sorted.length-1]
    console.log(largestValue)
    const secondLargest = sorted[sorted.length-2]
    console.log(secondLargest)
    const thirdLargest = sorted[sorted.length-3]
    return largestValue * secondLargest * thirdLargest

}


console.log(highestProduct([5, 1]))


module.exports = highestProduct;

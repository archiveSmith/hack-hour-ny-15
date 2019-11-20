/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) {
        return 'Minimum array of 3 required'
    }
    const sortedArray = array.sort((a,b) => a-b)
    // console.log(sortedArray)
    return (sortedArray[sortedArray.length-1] * sortedArray[sortedArray.length-2] * sortedArray[sortedArray.length-3])
}


module.exports = highestProduct;

// console.log(highestProduct([2,5,3,25,6,9]))
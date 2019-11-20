/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let doubleArray = array.concat(array)
    // console.log(doubleArray)
    return Math.max(...doubleArray.reduce((acc, next, index, array) => {
        acc.push((array[index]*array[index+1]*array[index+2]).toString())
        return acc
    },[]).filter(e => e !== 'NaN'))
}

console.log(highestProduct([2,4,5,6]))


module.exports = highestProduct;

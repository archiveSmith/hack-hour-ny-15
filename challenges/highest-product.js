/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
//create permutations for subsets of 3
    //iterate over each permutation getting the product and storing it
    //check if current product is larger than largestProd
if (array.length < 3) return 'not enough elements';
array.sort((a, b) => b-a);
return (array[0] * array[1] * array[2])



//iterate over input array getting all 3-length permutations
    //iterate over all permutations, for each element in perm array multiply all 3 elements
        //if product is higher than current value of largestProd, reassign largestProd to current value;
}

console.log(highestProduct([1,2,3]))


module.exports = highestProduct;

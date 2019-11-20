/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    //declare an empty array to store the highest number
    const topNumArray =[];
    //copy the array
    const newArray = array.slice();
    //create a counter to find the top 3 numbers
    let i = 0;

    //loop thru the array 3 times and grab the max number
    while(i<3){
        //getting the max number
        let maxNum = Math.max(...newArray);
        //add the max number in the topNumArray
        topNumArray.push(maxNum);
        //find the index of the max number within the array
        let index = newArray.indexOf(maxNum);
        //remove the max number
        newArray.splice(index,1)
        //increment the counter
        i++;
    }   
    return topNumArray.reduce((acc,cur)=> acc * cur);
}


console.log('highestProduct([1,2,3,4,6,-10]):', highestProduct([1,2,3,4,6,-10]))
module.exports = highestProduct;

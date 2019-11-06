/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    if(array.length === 0) return "This is an empty array!";
    if(array.length === 1) return array[array.length-1];
    let numberOfItems = array.length-1
    let mode;
    let mean;
    let total= 0;
    const occurence = {}

    for (let i = 0; i < array.length; i++){
        if (occurence.hasOwnProperty(array[i])){
            occurence[array[i]] += 1
        }
        else {
            occurence[array[i]] = 1
        }
        
        total += array[i]
    }
    
    mean = Math.floor(total/numberOfItems);
  
    const highestOccuring = Math.max(...Object.values(occurence));
    
    for (key in occurence){
        if (occurence[key] === highestOccuring)
        mode = key
    }
    
    if (Number(mean) === Number(mode)) return true;
    
    return false;
}

module.exports = modemean;

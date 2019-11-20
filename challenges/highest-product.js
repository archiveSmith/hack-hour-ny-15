/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  function recursiveProduct(array, totalArray = [], timesRun = 0) {
    const positiveKing = Math.max(...array);
    const negativeKing = Math.min(...array);
    //return when I have 3 values
    if (totalArray.length === 3) {
      return totalArray.reduce((a, b) => a * b);
    }
    //always push the highest positive value
    if (timesRun === 0) {
      totalArray.push(positiveKing);
      array.splice(array.indexOf(positiveKing), 1)
      return recursiveProduct(array, totalArray, timesRun + 1)
    }
    //get the remaining to highest and lowest numbers
    const maxPosPair = [];
    const maxNegPair= [];
    let copy = array.slice(0);
    let copyNeg = array.slice(0);
  
    for (let i = 0; i < 2; i += 1) {
      maxPosPair.push(Math.max(...copy));
      maxNegPair.push(Math.min(...copyNeg));
      copy.splice(copy.indexOf(positiveKing), 1)
      copyNeg.splice(copyNeg.indexOf(negativeKing), 1)
  
    }
    //see which has the higher product
    const NegProd = maxNegPair.reduce((a,b) => a * b);
    const PosProd = maxPosPair.reduce((a,b) => a * b);
    let champion =[];
    if (PosProd > NegProd) {
      champion = maxPosPair;
    } else {champion = maxNegPair}
    
    //recurse with my champion
    return recursiveProduct(array, [...totalArray, ...champion], timesRun);


  }
return recursiveProduct(array)
}
// const tester = [-7,4,3,2,-1];
// console.log(highestProduct(tester))

module.exports = highestProduct;

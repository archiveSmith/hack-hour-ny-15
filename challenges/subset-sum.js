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
  // create a new mathematical calculation (+ array[i + x + x..]) for len of array 
  let iterationNum = array.length
  newArr = [];

  while (iterationNum > 0) {
    for (let i = 0; i < iterationNum; i ++) {
      newArr.push (array[i] + 


    }
    iterationNum - 1
  }
  }

  for (let i = 0; i < newArr.length; i ++) {
    if target === newArr[1] {
      return true
    }
  }
  return false 

  function outer(arr, tar) {
    if (iterationNum === 0) {
      return false 
    }
    let run = iterationNum
    let tempNum;
    while (iterationNum > 0) {
      while (run > 0) {
        for (let i = 0; i < iterationNum; i++) {
          if (i === (i + run + iterationNum)) {
            continue
          }
          tempNum = arr[i] + arr[i + run + iterationNum]
          if (tar === tempNum) {
            return true
          }
        }
        run -= 1;
      }
      iterationNum -= 1
    }
    return false 


    function 
    for (let i = 0; i < iterationNum)




    iterationNum -= 1
    return outer()
  } 
 



}


// array.reduce((acc, num) = {
//   if (num + acc ===  target) {
//     return true
//   } return num + acc}) 

module.exports = subsetSum;

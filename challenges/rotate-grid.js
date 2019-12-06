/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
    //n = number of rows in the grid
    //loop through each array, starting from ending array
    //in each array, loop through elements starting from start of array
    //bottom row gets split --> [7], [8], [9] --> push to new arrays --> need a for loop here --> top [7], middle [8], bottom [9]
    //middle row gets split --> [4], [5], [6] --> push to new array --> top [7, 4], middle [8, 5], bottom [9, 6]
    //top row gets split --> [1], [2], [3] --> added to the end of a new array --> top [7, 4, 1], middle [8, 5, 2], bottom [9, 6, 3]


    let rotated = [...Array(n)].map(e => Array(n).fill(0));

    console.log("start", rotated)

    for (let i = grid.length-1; i>=0; i--){
        // grid[i] = [7,8,9]
        console.log("entered loop 1")
        console.log("i: ", i, "grid[i]:", grid[i] )
        let currentArr = grid[i]
        //this is working

        for (let j=0; j<currentArr.length; j++){
            // currentArr[j] = 7
            console.log("entered loop 2")
            console.log("currentArr", currentArr)
            console.log("j:", j, "currentArr[j]:", currentArr[j])
            let k = 0
            rotated[j][k] = currentArr[j]
            k ++
            console.log("rotated in j loop", rotated)
            // for (let k = 0; k < rotated.length; k++){
            //     // console.log("entered loop 3")
            //     //rotated[k] = emptyarr1
            //     //rotated[k][0] = emptyarr1[0]
            //     rotated[k][0] = currentArr[j]
            //     console.log("rotated[k]:", rotated[k])

            // }
                
            }
        }
    console.log("rotated end", rotated)
    }
    


const sampleGrid = [   [1, 2, 3],[4, 5, 6],[7, 8, 9]  ]
const testRotate = rotateGrid(sampleGrid, 3)

module.exports = rotateGrid;

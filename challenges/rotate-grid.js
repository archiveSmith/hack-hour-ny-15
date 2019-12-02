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
   const newArray = [];
   let index=0;
   while( index < grid[0].length){

     
     if(index<n){
        let innerArray =[];
       for(let i=n-1; i>=0; i--){
         innerArray.push(grid[i][index])
        } 
       for(let i=n; i < grid[index].length; i++){
        innerArray.push(grid[index][i])
        }  
        newArray.push(innerArray) 
    }
     else{
        newArray.push(grid[index]) 
     }
     index++;
   }
   return newArray;
}


console.log('rotateGrid([\n[1, 2, 3, 4],\n[5, 6, 7, 8],\n[9, 10, 11, 12],\n[13, 14, 15, 16]]\n,3):\n', rotateGrid([[1, 2, 3,4],[5, 6,7,8],[9,10,11,12],[13,14,15,16]],3))


module.exports = rotateGrid;

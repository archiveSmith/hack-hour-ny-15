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

//in place solution - need 4 pointers
//Top Left grid[level][inner]
//Top Right grid[inner][size-1-level]
//Bottom Right grid[size-1-level][size-1-inner]
//Bottom Left grid[size-1-inner][level]

//
//for(let level=0; level < Math.floor(size/2); level+=1){
// for(let inner=level; inner<size-1-level; inner+=1){
//  swapClockwise(grid, size, level, inner)
// }
//}
//return grid;
//function swapClockwise(grid, size, level, inner){
// let temp =grid[level][inner];
// grid[level][inner] = grid[size-1-inner][level]
// grid[size-1-inner][level]= grid[size-1-level][size-1-inner];
// grid[size-1-level][size-1-inner] = grid[inner][size-1-level];
// grid[inner][size-1-level] = temp;
//}

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

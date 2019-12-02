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
  // create an empty grid
  // iterate across the grid
  // figure out where the current element should go
  // put it in its new place in the new grid
  const newGrid = [];
  newGrid.length = n;
  for (let i = 0; i < n; i += 1) {
    newGrid[i] = [];
    newGrid[i].length = n;    
  }
  // console.log(newGrid);
  for (let j = 0; j < n; j += 1) {
    for (let k = 0; k < n; k += 1) {
      const currentElement = grid[j][k];
      newGrid[k][n - (j + 1)] = currentElement;
    }
  }
  return newGrid;
}

// const sampleGrid = [    [1, 2, 3],
//                         [4, 5, 6],
//                         [7, 8, 9]   ];

// console.log(rotateGrid(sampleGrid, 3));

module.exports = rotateGrid;

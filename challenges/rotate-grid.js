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

// function rotateGrid(grid, n) {
//   const newArr = [];
//   let k = 0;
//   while (k < grid.length) {
//     newArr[k] = [];
//     k += 1;
//   }
//   for (let i = 0; i < grid.length; i += 1) {
//     for (let j = 0; j < grid[i].length; j += 1) {
//       newArr[j].unshift(grid[i][j]);
//     }
//   }
//   return newArr;
// }

function rotateGrid(grid) {
  for (let i = grid.length - 1; i >= 0; i -= 1) {
    for (let j = grid.length - 1; j >= 0; j -= 1) {
      grid[j].push(grid[i][j]);
    }
  }
  for (let elem of grid) {
    let m = 0;
    while (m < grid.length) {
      elem.shift()
      m += 1
    }
  }
  return grid;
}

const samGrid = [ [1, 2, 3], 
                  [4, 5, 6], 
                  [7, 8, 9] ];

console.log(rotateGrid(samGrid));


module.exports = rotateGrid;

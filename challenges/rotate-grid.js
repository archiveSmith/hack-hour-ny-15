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
 *[[1, 2, 3], [4, 5, 6], [7, 8, 9]] => [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
 * BONUS: Do this in place
 */

function rotateGrid(grid, n) {
  const newArr = [];
  let j = 0;
  let inner = [];

  for (let i = 0; i < grid.length; i += 1) {
    const subArr = grid[i];
    for (let j = 0; j < n; j += 1) {
    newArr.unshift(grid[i][j]);
    }
    // for (let j = 0; j < n; j += 1) {
    //   inner.unshift(grid[i][j]);
    // }
    console.log(inner);
    if (inner.length === n) {
    newArr.push(inner);
    inner = [];
    j += 1;
    };
  }
  console.log(newArr);
  return newArr;
}

console.log(rotateGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3));

module.exports = rotateGrid;

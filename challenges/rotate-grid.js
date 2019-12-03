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
  let extra = [];

  for (let j = 0; j < n; ++j) {
    for (let i = 0; i < n; ++i) {
      extra.push(grid[j].pop());
    }
    for (let i = 0; i < n; ++i) {
      grid[i].unshift(extra.pop());
    }
  }

  return grid;
}

const sample = [
  [1,2,3,4],
  [4,5,6,7],
  [7,8,9,0],
  [1,2,3,4]
];

console.log(rotateGrid(sample, 4));

module.exports = rotateGrid;

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
const myGrid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function rotateGrid(grid, n) {
  const gridOut = [];

  for (let i = 0; i < n; i++) {
    gridOut.push([]);
    for (let j = 0; j < n; j++) {
      gridOut[i].push(-999);
    }
  }

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++) {
      gridOut[column][n - 1 - row] = grid[row][column];
    }
  }
  console.log(gridOut);
}

// console.log(rotateGrid(myGrid, 3));

module.exports = rotateGrid;

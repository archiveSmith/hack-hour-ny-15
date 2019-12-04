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
  // declare a new array and reassign them

  grid = grid.reverse();

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < i; j += 1) {
      const temp = grid[i][j];
      grid[i][j] = grid[j][i];
      grid[j][i] = temp;
    }
  }
  return grid;
}

// function rotateGrid(grid, size) {
//
//     // swap in place
//     for (let level = 0; level < Math.floor(size / 2); level += 1) {
//       for (let inner = level; inner < size - 1 - level; inner += 1) {
//         swapClockwise(grid, size, level, inner);
//       }
//     }
//     return grid;
//   }
//
//   function swapClockwise(grid, size, level, inner) {
//
//     // grid[level][inner] // TOP LEFT
//     // grid[inner][size - 1 - level] // TOP RIGHT
//     // grid[size - 1 - level][size - 1 - inner] // RIGHT BOTTOM
//     // grid[size - 1 - inner][level] // LEFT BOTTOM
//     // store TOP LEFT
//     let temp = grid[level][inner];
//     // move BOTTOM LEFT to TOP LEFT
//     grid[level][inner] = grid[size - 1 - inner][level];
//     // move BOTTOM RIGHT to BOTTOM LEFT
//     grid[size - 1 - inner][level] = grid[size - 1 - level][size - 1 - inner]
//     // move TOP RIGHT to BOTTOM RIGHT
//     grid[size - 1 - level][size - 1 - inner] = grid[inner][size - 1 - level]
//     // move TOP LEFT to TOP RIGHT
//     grid[inner][size - 1 - level] = temp
//   }

// console.log(rotateGrid([[1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]], 3));

module.exports = rotateGrid;

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
 * [1, 2, 3, 4, 5]
 * [1, 2, 3, 4, 5]
 * [1, 2, 3, 4, 5]
 * [1, 2, 3, 4, 5]
 * [1, 2, 3, 4, 5]
 *
 * BONUS: Do this in place
 */

// function rotateGrid(grid, n) {

// }

// console.log(rotateGrid([1, 2, 3, 4], 1));


const flipMatrix = (matrix) => (
  matrix[0].map((column, index) => (
    matrix.map((row) => row[index])
  ))
);

console.log(flipMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3));
// module.exports = rotateGrid;

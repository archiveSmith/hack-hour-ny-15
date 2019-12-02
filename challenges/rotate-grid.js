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
  // create three new arrays where first element is the first element in the last array
  // the second element is the first element in the second array
  // the last element is the first element in the first array
  // increment so that now you take the second element in the last array and so on
  const rotated = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = n - 1; j >= 0; j--) {
      arr.push(grid[j][i]);
    }
    rotated.push(arr);
  }

  return rotated;
}


module.exports = rotateGrid;

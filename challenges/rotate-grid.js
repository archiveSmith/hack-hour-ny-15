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


// create an empty array and assign it to outerArr variable
// iterate through the length of input n (first loop set up the empty grid)
// create the rows for the grid by pushing the outerArr on each iteration
// second loop iterates from the end of the input nth number to the front of the arr



function rotateGrid(grid, n) {
  const outerArr = [];
  for (let i = 0; i < n; i++) {
    outerArr.push([]);
    // console.log(outerArr);
  }
  for (let i = n - 1; i >= 0; i--) {
    // console.log(i)
    for (let j = 0; j < n; j++) {
      //console.log(grid[i], grid[j]);
      outerArr.push(grid[i], grid[j]);
    }
  }
  return outerArr;
}

const sampleGrid = [[1, 2, 3],
  [4, 5, 6],
  [7, 8, 9] ];

const sampleGridAfter = [[1, 2, 3, 4],
  [4, 5, 6, 7],
  [7, 8, 9, 0],
];


console.log(rotateGrid(sampleGridAfter, 3));


module.exports = rotateGrid;

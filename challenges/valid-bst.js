/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

// Copied from https://js-algorithms.tutorialhorizon.com/2015/12/13/determine-if-a-binary-tree-is-a-binary-search-tree/
function BinaryTree() {
  this.root = null;
}

var last_logged;

function isBST(root) {
  if (root === null) {
    // base case
    return true;
  }

  // Verify and recurse left
  if (!isBST(root.left)) {
    return false;
  }

  // Verify the current node
  if (last_logged !== null && root.data <= last_logged) {
    return false;
  }

  // Log the current data for debugging and update the last_logged
  console.log("Current Node : ", root.data);
  last_logged = root.data;

  // Verify and recurse left
  if (!isBST(root.right)) {
    return false;
  }

  return true;
}

// Create a Binary Tree as a sample input
var root = {
  data: 8,
  left: null,
  right: null
};
var n1 = {
  data: 10,
  left: null,
  right: null
};

var n2 = {
  data: 6,
  left: null,
  right: null
};

var BT = new BinaryTree();
BT.root = root;

// Create a Binary Search Tree (BST) and Verify
BT.root.left = n2;
BT.root.right = n1;
console.log(isBST(BT.root)); // true

// Create a non-BST and Verify
BT.root.left = n1;
console.log(isBST(BT.root)); // false

// original supplied material:
function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };

/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  const treeTraverser = (tree) => {
    if(tree === null) {
        console.log('this node is cool')
        return true;
    }
    if(tree.left !== null && tree.left.value > tree.value) {
        console.log('left is false')
        return false;
    }
    if(tree.right !== null && tree.right.value < tree.value) {
        console.log('right is false')
        return false;
    }
    const leftSide = treeTraverser(tree.left);
    const rightSide = treeTraverser(tree.right);
    if(!leftSide || !rightSide) return false;
    return true;
  }
  return treeTraverser(tree);
}

// const dates = new BinaryTree(27);
// dates.left = new BinaryTree(15);
// dates.right = new BinaryTree(29);
// dates.left.left = new BinaryTree(3);
// dates.left.right = new BinaryTree(17);
// dates.right.left = new BinaryTree(28);
// dates.right.right = new BinaryTree(44);
// console.log(dates);

// console.log(validBST(dates));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

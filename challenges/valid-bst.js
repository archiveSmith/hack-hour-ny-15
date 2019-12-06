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

  const treeTransverser = tree => {
    if (tree === null) return true;
    if (tree.left !== null && tree.value < tree.left.value) return false;
    if (tree.right !== null && tree.value > tree.right.value) return false;
    
    const leftTree = treeTransverser(tree.left);
    const rightTree = treeTransverser(tree.right);
    // return false if either the left or the right is false;
    return (!leftTree || !rightTree) ? false : true;
    }
    return treeTransverser(tree);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};

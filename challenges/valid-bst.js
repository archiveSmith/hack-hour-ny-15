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
    //check if tree.left is not null and tree.right is not null - meaning there are more branches underneath
    //if so, check if tree.left < tree.right
    if (tree.left != null || tree.right != null){
        if (tree.right < tree.left){
            return false
        } else if (tree.left > tree.left) {
            return 
        }

    }
}

const newBinaryTree = BinaryTree(10)
console.log(newBinaryTree)


module.exports = {BinaryTree: BinaryTree, validBST: validBST};

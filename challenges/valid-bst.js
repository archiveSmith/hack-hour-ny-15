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
    let node = tree;
    let checkLeft =true;
    let checkRight = true; 
    if(node.left){   
        if(node.left.value < node.value){
            checkLeft = validBST(node.left)
        }
        else return false;
    }  
    if(tree.right){
        if(node.right.value > node.value){
            checkRight = validBST(node.right)
        }
        else return false;
    }
    return checkLeft && checkRight
}

const tree = new BinaryTree(10);
const tree1 = new BinaryTree(5);
const tree2 = new BinaryTree(7);
const tree3 = new BinaryTree(8);
const tree4 = new BinaryTree(13);

tree.left = tree1;
tree1.right = tree2; 
tree2.right = tree3;
tree.right = tree4;

console.log('validBST(tree) :', validBST(tree) )



module.exports = {BinaryTree: BinaryTree, validBST: validBST};

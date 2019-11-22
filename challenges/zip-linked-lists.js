/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

  let head = l1;

  function zipR(l1,l2,currentNode){
    if(l2) currentNode.next= l2 
    if(l1) currentNode.next.next= l1
    if(!l1 && !l2) return;
    return zip(l1.next,l2.next, currentNode.next.next) 
  }
  zipR(l1.next,l2, head);
  return head;
};


module.exports = {Node: Node, zip: zip};

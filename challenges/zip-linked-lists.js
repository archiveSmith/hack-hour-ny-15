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
  //L1 is the first zipped list
  //L2 is the second zipped list

  //Create an array and all the even number indices you set equal to the first zipped linked list
  //In the same array set all the odd number value indices as the values for the second zipped linked list

  //then you begin actually setting the node values in a separate faux linked list class

const firstNode = new Node(1)
const secondNode = new Node(2)
firstNode.next = secondNode

  console.log(firstNode)
};

zip()



module.exports = {Node: Node, zip: zip};

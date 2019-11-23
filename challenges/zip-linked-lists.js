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
  let sever = l1.next;
  l1.next = l2;
  sever = l2.next;
  console.log(l1);
}


const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
console.log(l1);
const l2 = new Node('a');
l2.next = new Node('b');
l2.next.next = new Node('c');
console.log(l2);

zip(l1, l2);


module.exports = { Node, zip };

/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

// how do we capture what index of that node is
// once we have the index loop through the elements and return the one at index - k

let count = 0; 
let currentNode = head;

const storeArray = [];
function innerFunc(k, currentNode) {
  storeArray.push(currentNode);
  if (!currentNode.next) {
    return storeArray[storeArray.length - k];
  }
  return innerFunc(k, currentNode.next)
}
 return innerFunc(k,head)
  // not found 
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(3, a);

console.log(kthToLastNode(4, a))
module.exports = {Node: Node, kthToLastNode: kthToLastNode};

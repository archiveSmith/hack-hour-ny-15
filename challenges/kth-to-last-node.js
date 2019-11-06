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
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(a.next);

function kthToLastNode(k, head) {
  let tail;
  let index = 0;
  let nodeObjectindex = {};
  while (head !== null) {
    nodeObjectindex[index] = head
    head = head.next
        index += 1    // tail = head.next  
  }

  const nodeIndexToLookFor = (index - k)
  console.log(nodeIndexToLookFor)
  console.log(nodeObjectindex[nodeIndexToLookFor]["value"])
  return nodeObjectindex[nodeIndexToLookFor]["value"]
  

}

kthToLastNode(1, a);
// * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)








module.exports = {Node: Node, kthToLastNode: kthToLastNode};

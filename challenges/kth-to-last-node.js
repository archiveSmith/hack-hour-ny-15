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
 * 
 * H -> N -> N -> N -> N -> null
 * A -> B -> C -> D -> E -> null
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if(k <= 0) return 'The index of the last node is 1.';
  let node = head;
  const nodeArr = [head];
  while (node.next != null) {
    node = node.next;
    nodeArr.push(node);
    
  }
  if(k > nodeArr.length) return `There are only ${nodeArr.length} nodes.`;
  
  node = nodeArr[nodeArr.length - k];
  return node.value;
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
console.log(kthToLastNode(2, a));
// //2 -> returns 'D' (the value on the second to last node)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

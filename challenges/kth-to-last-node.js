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
// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');

// function LinkedList() {
//   this.head = null;
//   this.tail = null;
//   this.size = 0;
// }

function Node(val) {
  this.value = val;
  this.next = null;
}


function kthToLastNode(k, head) {
  // let currentIndex = 0;
  let currentNode = head;

  while (currentNode) {
    if (currentNode.next === tail) {
      return currentNode;
    }
    // currentIndex++;
    currentNode = currentNode.next;
  }

  return -1;
}

const myNode = new Node('A');
myNode.add()
console.log(myNode);

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

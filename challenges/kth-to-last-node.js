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
  // if (!head || length < 0 || k > length - 1) return null;

  // let currentIndex = 0;
  // // const index = length - k;
  // let currentNode = head.next;

  // while (currentNode.next) {
  //   if (currentIndex === 0) {
  //     return currentNode;
  //   }
  //   currentIndex++;
  //   currentNode = currentNode.next;
  // }

  // return -1;

  const nodeArr = [];
  let node = head;

  while (node.next) {
    nodeArr.push(node);
    node = node.next;
  }

  return nodeArr[nodeArr.length - k + 1].value;
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');


a.next = b;
b.next = c;
c.next = d;
d.next = e

// const myNode = new Node('A');
// a.add(b)
// console.log(a);
console.log(kthToLastNode(2, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

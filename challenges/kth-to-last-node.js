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
  //traverse the linkedList incrementing a counter until there are no more recursively
  //once you're at the end, reset counter to zero
  //if you're going backwards, decrement counter by one and check if counter = k
  //if so, return the value
  //if not, return out.

  let counter = 0;
  let highestCounterVal = 0;
  let nodeVal = 0;

  function traverseList(currNode) {
    counter += 1;
    if (counter > highestCounterVal) highestCounterVal = counter;
    if (currNode.next) {
      traverseList(currNode.next);
    }
    if (highestCounterVal - counter === k) {
      nodeVal = currNode.value;
    }
    counter -= 1;
    return;
  }
  traverseList(head);
  return nodeVal;
}

// let newNode = new Node(5);
// newNode.next = new Node(10)
// newNode.next.next = new Node(15);
// newNode.next.next.next = new Node(20);
// newNode.next.next.next.next = new Node(50);

// console.log(kthToLastNode(2, newNode));


module.exports = { Node: Node, kthToLastNode: kthToLastNode };

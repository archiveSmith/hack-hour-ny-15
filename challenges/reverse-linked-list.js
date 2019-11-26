/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  // traverse the linkedList
  // remember the previous node
  // remember the original next
  // reassign next to the previous node
  // go to the original next
  if (head.next === null) {
    return head;
  }
  let currentNode = head.next;
  head.next = null;
  while(currentNode) {
    const previousNode = head;
    const nextNode = currentNode.next;
    currentNode.next = previousNode;
    head = currentNode;
    currentNode = nextNode;
  }
  return head;
}

// const dbacks = new Node('arizona');
// const dodgers = new Node('los angeles');
// const giants = new Node('san francisco');
// const padres = new Node('san diego');
// const rockies = new Node('colorado');
// dbacks.next = dodgers;
// dodgers.next = giants;
// giants.next = padres;
// padres.next = rockies;

// function logLinkedList(head) {
//   while(head) {
//     console.log(head.value);
//     head = head.next;
//   }
// }

// logLinkedList(dbacks);
// const backwards = reverseLinkedList(dbacks);
// logLinkedList(backwards);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

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
  // start at head and iterate, storing each node value in a stack
  // declare last node as new head to return and then iterate to create new nodes with values in storage
  const nodeStorage = [];
  let nodeCount = 0;
  while (head.next !== null) {
    nodeStorage.push(head.value);
    nodeCount += 1;
    head = head.next;
  }
  const headToReturn = head;
  while (nodeCount > 0) {
    head.next = new Node(nodeStorage.pop());
    nodeCount -= 1;
    head = head.next;
  }
  return headToReturn;
}

module.exports = { Node, reverseLinkedList };

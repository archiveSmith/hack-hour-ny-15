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
  this.next = null; //{this.value = node2val, this.next = node3}
}

//node 1 > 2 > 3
//node 3 > 2 > 1

function reverseLinkedList(head) {
  let nextNode = head.next; //node 1
  let arrOfNodes = []; //node1, node2, node3
  while (nextNode != null) {
    arrOfNodes.push(nextNode);

    if (nextNode === null) {
      //if nextNode's next points to null, set it as new head
      let newHead = nextNode;
      for (let i = arrOfNodes.length - 1; i > 0; i--) {
        //iterate from right to left, chaining nodes to the new head
        newHead.next = arrOfNodes[i];
      }
      return newHead;
    } else {
      //keep searching until nextNode.next = null
      nextNode = nextNode.next; //node2
    }
  }
}

const node1 = Node(1);
const node2 = Node(2);
const node3 = Node(3);

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };

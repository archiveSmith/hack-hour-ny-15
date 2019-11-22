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

var list1 = {
  data: 1,
  next: {
    data: 3,
    next: {
      data: 5,
      next: null
    }
  }
};

var list2 = {
  data: 2,
  next: {
    data: 4,
    next: {
      data: 6,
      next: null
    }
  }
};

// set an empty object as the target of the data
// Iterate, alternating through both lists:
//    set 'data' on current node of target object equal to 'data' of current node of list A;
//    set 'next' on current node of target object to 'data' of list B;

function zip(l1, l2) {
  const listOut = {};
  let l1Head = l1.next;
  let l2Head = l2.next;

  while (l1Head !== null && l2Head !== null) {
    listOut.data = currentNode.data;

    l1Head = currentNode.next;
  }
}

module.exports = { Node: Node, zip: zip };

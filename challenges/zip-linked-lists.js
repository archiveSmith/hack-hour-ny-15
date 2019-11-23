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

function zip(l1, l2) {

  // FIRST APPROACH
  let head = null;
  let pointer = null;
  if (l1.head) {
    head = new Node(l1.head.value);
    pointer = head;
  }

  let l1Next = l1.head.next;
  let l2Next = l2.head;
  while (pointer !== null) {
    if (l2Next !== null) {
      pointer.next = new Node(l2Next.value);
      pointer = pointer.next;
      l2Next = l2Next.next;
    }
    if (l1Next !== null) {
    pointer.next = new Node(l1Next.value);
    pointer = pointer.next;
    l1Next = l1Next.next;
    }
    if (l1Next === null && l2Next === null)
      pointer = null;
  }

  return head;

  // SECOND APPROACH - WITH ARRAYS
};

module.exports = {Node: Node, zip: zip};

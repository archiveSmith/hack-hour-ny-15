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
    const cacheArray = [];

    function innerNav(k, currentNode) {
        cacheArray.push(currentNode);
        if (currentNode.next === null) {
            if (k > cacheArray.length || k === 0) {
                return "value not in range";
            }
            return cacheArray[cacheArray.length - k];
        }
        return innerNav(k, currentNode.next);
    }
    return innerNav(k, head);
}



module.exports = { Node: Node, kthToLastNode: kthToLastNode };
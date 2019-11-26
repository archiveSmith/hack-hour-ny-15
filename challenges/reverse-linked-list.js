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

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;


function reverseLinkedList(head) {
 
    // let newHead;
    // let previousHead;

    //--first simple traverse through and get all values
    //get the last value set that as your newHead
    //Now that you have your newHead you need a way of keeping track of all the values that pointed
    //to your NewHead but in that correct order


   
        // Step 1
          let previous = null
          let current = head
          let following = head
        // Step 2
          while(current !== null) {
            following = following.next
            current.next = previous
            previous = current          
            current = following         // <===== 2d
          }
        
          console.log(previous)
        return previous

    // while (head != null) {
    //     console.log(head)
    //     previousHead = head
    //     head = head.next;

    //     if (head.next != null) {
    //         newHead = head.next
    //     }

    //     console.log(newHead);
    //     console.log(previousHead)
    //     return newHead

    // }


}

console.log(reverseLinkedList(node1));



module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

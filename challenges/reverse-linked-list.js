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
    const array = [];
    let node = head;
    while(node){
        array.push(node);
        node= node.next;
    }
    for(let i=array.length-1; i>0; i--){
        array[i].next = array[i-1]
    }
    array[0].next=null;
    console.log('array:', array)
    return array[array.length-1];
}


let nodea = new Node(5);
let nodeb = new Node(4);
let nodec = new Node(3);
let noded = new Node(2);
let nodee = new Node(1);

nodea.next= nodeb;
nodeb.next= nodec;
nodec.next= noded;
noded.next= nodee;

console.log('reverseLinkedList(nodea):', reverseLinkedList(nodea))


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

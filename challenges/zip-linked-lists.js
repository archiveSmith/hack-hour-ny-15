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

  let head = new Node(l1.value);
  
  zipR(l1.next,l2, head);
  
  function zipR(l1,l2, currentNode){ 
    if(l1 === null && l2 === null) return;
    if(l2) {
      currentNode.next= new Node (l2.value); 
      return zipR(l2.next,l1, currentNode.next) 
    }
    else {
      return zipR(l2,l1, currentNode)
    }
  }  
  
 
  return head;
};
let node1 = new Node("1");
let node2 = new Node("2");
let node3 = new Node("3");
let node4 = new Node("4");
 node1.next= node2;
 node2.next= node3;
 node3.next= node4;







 


let nodea = new Node("a");
let nodeb = new Node("b");
let nodec = new Node("c");
let noded = new Node("d");

nodea.next= nodeb;
nodeb.next= nodec;
nodec.next= noded;

let head = zip(node1,nodea)
let node = head;
while(node) {
  console.log('final node:', node)
  node = node.next;
}



module.exports = {Node: Node, zip: zip};

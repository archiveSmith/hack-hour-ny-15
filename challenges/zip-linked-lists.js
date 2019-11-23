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
//iterate through each node and unzip from the back into an array
//then marge them together alternating but starting at list 1
// function zip(l1, l2) {
//   const list1Array = [];
//   const list2Array = [];
//   function unzipper1 (list1) {
//     if (list1.next === null) {
//       list1Array.push(list1)
//     }

//   }
//   function unzipper2 (list2) {

//   }
// };
function zip(l1, l2) {

  // console.log(l1)
  let firstListHead = l1;
  let SecondListHead = l2;
  let list1Pointer, list2Pointer;
  while (firstListHead !== null && SecondListHead !== null) {
    list1Pointer = firstListHead.next;
    list2Pointer = SecondListHead.next;
    
    SecondListHead.next = list1Pointer;
    firstListHead.next = SecondListHead;
    // console.log(list2Pointer)
    
    firstListHead = list1Pointer;
    SecondListHead = list2Pointer;
  }
  return l1
}
// const list1 = new Node('1');
// list1.next = new Node('2')
// list1.next.next = new Node('3')
// const list2 = new Node('4');
// list2.next = new Node('5');
// list2.next.next = new Node('6');
// console.log(zip(list1,list2))

module.exports = {Node: Node, zip: zip};

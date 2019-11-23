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
  const arrayOfL1 = [l1];
  const arrayOfL2 = [l2];
  let tracker1 = l1.next;
  while (tracker1 !== null) {
    arrayOfL1.push(tracker1);
    tracker1 = tracker1.next;
  }
  let tracker2 = l2.next;
  while (tracker2 !== null) {
    arrayOfL2.push(tracker2);
    tracker2 = tracker2.next;
  }
  for (let i = 0; i < arrayOfL1.length; i += 1) {
    arrayOfL1[i].next = arrayOfL2[i];
    if(!arrayOfL1[i + 1]) {
      break;
    }
    if(!arrayOfL2[i + 1]) {
      arrayOfL2[i].next = arrayOfL1[i + 1];
      break;
    }
    arrayOfL2[i].next = arrayOfL1[i + 1];
  }
  let tracker3 = l1;
  while (tracker3) {
    console.log(tracker3.value);
    tracker3 = tracker3.next;
  }
  return l1;
};


const dbacks = new Node('arizona');
const dodgers = new Node('los angeles');
const giants = new Node('san francisco');
const padres = new Node('san diego');
const rockies = new Node('colorado');
dbacks.next = dodgers;
dodgers.next = giants;
giants.next = padres;
padres.next = rockies;

// console.log(dbacks);

const mets = new Node('new york');
const braves = new Node('atlanta');
const phillies = new Node('philadelphia');
// const marlins = new Node('florida');
// const nationals = new Node('washington');
mets.next = braves;
braves.next = phillies;
// phillies.next = marlins;
// marlins.next = nationals;

// console.log(mets);

console.log(zip(dbacks, mets));

module.exports = {Node: Node, zip: zip};

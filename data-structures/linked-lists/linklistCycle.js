class ListNode {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  if (!head) {
    return false;
  }

  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) {
      return true; // Cycle detected
    }
    slow = slow.next; // Move slow by one step
    fast = fast.next.next; // Move fast by two steps
    console.log(slow.value, fast.value);
  }

  return false; // No cycle detected
}

// Example usage:

// Creating a linked list with a cycle
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Cycle here

console.log(hasCycle(node1)); // Should print true

// Creating a linked list without a cycle
let nodeA = new ListNode("A");
let nodeB = new ListNode("B");
let nodeC = new ListNode("C");

nodeA.next = nodeB;
nodeB.next = nodeC;

console.log(hasCycle(nodeA)); // Should print false

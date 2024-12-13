/**
 * Find middle element in a Linked List
 * 
 * Problem Statement: Given the head of a linked list of integers, determine the middle node of the linked list. However, 
 * if the linked list has an even number of nodes, return the second middle node.
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
let list = new Node(1)
list.next = new Node(2)
list.next.next = new Node(3)
list.next.next.next = new Node(4)
list.next.next.next.next = new Node(5)

function middle(head) {
    let slow = head;
    let fast = head;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast.next==null) 
        return slow;
    return slow.next
}

console.log(middle(list));
